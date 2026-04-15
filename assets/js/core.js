  // ============================================================
  //  CORE GLOBAL VARIABLES & STATE
  // ============================================================
  let currentScreen = 1;
  let currentWebScreen = 1;
  let currentDevice = 'mobile';
  let navigating = false;
  let flowSteps = [];
  let flowIndex = 0;
  let activeFlow = null;
  let currentStep = 0;

  // ============================================================
  //  GUIDED FLOWS — séquences par profil
  // ============================================================
  const patientFlow     = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,29,30,31,32,33,34,35,36,37,44,46,47,49,72,73];
  const pharmacistFlow  = [19,20,21,22,23,24,25,26,41,42,43,45,53,75];
  const pharmacienFlow  = [84,85,86,87,88,89];
  const medecinFlow     = [62,63,64,65,66,67,68,69,70,71,74];
  const livreurFlow     = [54,55,56,57,58,59,60,61];
  const adminFlow       = [27,28,48,78,79,80,81,82,76,77,83,'71b'];

  // ============================================================
  //  UI CORE FUNCTIONS (RESTORED)
  // ============================================================
  window.showToast = function(msg) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
  };

  window.showModal = function(id) {
    const m = document.getElementById(id);
    if (m) m.classList.add('active');
  };

  window.closeModal = function() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
  };

  window.setDevice = function(device) {
    switchTo(device);
  };

  window.handleLogin = function() {
    showToast('✅ Connexion réussie ! Bienvenue sur ILERA AFRICA');
    goToScreen(10);
  };

  // ============================================================
  //  DRAWER (menu latéral)
  // ============================================================
  const DRAWER_MAP = {
    patient:            'sideMenuDrawer',
    pharmacien:         'drawer-pharmacien',
    'pharmacien-indiv': 'drawer-pharmacien-indiv',
    admin:      'drawer-admin',
    livreur:    'drawer-livreur',
    medecin:    'drawer-medecin'
  };
  let _drawerCloseTimer = null;

  window.openDrawer = function(type) {
    // Annule tout timer de fermeture en cours avant d'ouvrir
    if (_drawerCloseTimer) { clearTimeout(_drawerCloseTimer); _drawerCloseTimer = null; }

    // Masque immédiatement les autres drawers sans timeout
    Object.values(DRAWER_MAP).forEach(id => {
      const d = document.getElementById(id);
      if (d) { d.style.transform = 'translateX(-100%)'; d.style.display = 'none'; }
    });

    const id = DRAWER_MAP[type] || 'sideMenuDrawer';
    const drawer  = document.getElementById(id);
    const overlay = document.getElementById('sideMenuOverlay');
    if (!drawer || !overlay) return;

    overlay.style.display = 'block';
    drawer.style.display = 'block';
    // Double rAF pour que le navigateur applique display:block avant la transition
    requestAnimationFrame(() => requestAnimationFrame(() => {
      overlay.style.opacity = '1';
      drawer.style.transform = 'translateX(0)';
    }));
  };

  window.closeDrawer = function() {
    const overlay = document.getElementById('sideMenuOverlay');
    if (overlay) overlay.style.opacity = '0';
    Object.values(DRAWER_MAP).forEach(id => {
      const d = document.getElementById(id);
      if (d) d.style.transform = 'translateX(-100%)';
    });
    _drawerCloseTimer = setTimeout(() => {
      if (overlay) overlay.style.display = 'none';
      Object.values(DRAWER_MAP).forEach(id => {
        const d = document.getElementById(id);
        if (d) d.style.display = 'none';
      });
      _drawerCloseTimer = null;
    }, 320);
  };

  function switchTo(device) {
    currentDevice = device;
    const mobileFrame = document.getElementById('mobileFrame');
    const webFrame = document.getElementById('webFrame');
    const btns = document.querySelectorAll('.switch-btn');
    
    if (device === 'mobile') {
      if (webFrame) webFrame.style.display = 'none';
      if (mobileFrame) mobileFrame.style.cssText = 'display:block;';
      if (btns[0]) btns[0].classList.add('active');
      if (btns[1]) btns[1].classList.remove('active');
      goToScreen(currentScreen);
    } else {
      if (mobileFrame) mobileFrame.style.display = 'none';
      if (webFrame) webFrame.style.display = 'block';
      if (btns[0]) btns[0].classList.remove('active');
      if (btns[1]) btns[1].classList.add('active');
      goToWebScreen(currentWebScreen || 1);
    }
    syncPickerDot(device === 'web' ? currentWebScreen : currentScreen);
  }

  // ============================================================
  //  NAVIGATION FUNCTIONS
  // ============================================================
  window.goToScreen = function(n) {
    if (navigating) return;
    const prev = document.getElementById('screen' + currentScreen);
    currentScreen = n;
    
    // Simple direct switch to avoid animation bugs during restoration
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active', 'slide-out'));
    const target = document.getElementById('screen' + n);
    if (target) {
        target.classList.add('active');
        if (target.dataset.device === 'desktop') switchTo('web');
    }
    
    syncPickerDot(n);
    updateBrowserBar(n);
    document.dispatchEvent(new CustomEvent('screenChanged'));
  };

  window.goToWebScreen = function(n) {
    currentWebScreen = n;
    const allWeb = document.querySelectorAll('.web-screen');
    allWeb.forEach(s => s.classList.remove('active'));
    
    const target = document.getElementById('wscreen' + n) || document.getElementById(n);
    if (target) {
        target.classList.add('active');
        const content = document.getElementById('browserContent');
        if (content) content.scrollTop = 0;
    } else if (n === 1 && allWeb.length > 0) {
        allWeb[0].classList.add('active');
    }
    
    syncPickerDot(n);
    updateBrowserBar(n);
    document.dispatchEvent(new CustomEvent('screenChanged'));
  };

  function syncPickerDot(n) {
    document.querySelectorAll('.nav-dot').forEach(d => d.classList.remove('active'));
    const prefix = (currentDevice === 'web' ? 'navdot-w' : 'navdot-');
    const active = document.getElementById(prefix + n);
    if (active) {
      active.classList.add('active');
      active.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
    const label = document.getElementById('sp-current');
    if (label) label.textContent = (currentDevice === 'web' ? '🌐' : '📱') + n;
  }

  function updateBrowserBar(n) {
    const urlEl = document.querySelector('.browser-url');
    if (!urlEl) return;
    urlEl.textContent = '🔒 ilera.africa/' + (currentDevice === 'web' ? 'web/' : 'app/') + n;
  }

  // ============================================================
  //  SCREEN PICKER LOGIC
  // ============================================================
  const SCREEN_GROUPS = [
    { label: '📱 MOBILE', isHeader: true },
    { label: '🏠 Commun', flow: 'patient', screens: [1,2,3,4,7,8,9,10,49,50,51,52] },
    { label: '🧑 Patient', flow: 'patient', screens: [11,12,13,14,15,16,17,18,29,30,31,32,33,34,35,36,37,38,39,40,44,46,47,72,73] },
    { label: '🏥 Espace Pharmacie', flow: 'pharmacist', screens: [19,20,21,22,23,24,25,26,41,42,43,45,53,75] },
    { label: '👨‍⚕️ Pharmacien individuel', flow: 'pharmacien', screens: [84,85,86,87,88,89] },
    { label: '🩺 Médecin', flow: 'medecin', screens: [62,63,64,65,66,67,68,69,70,71,74] },
    { label: '🛵 Livreur', flow: 'livreur', screens: [54,55,56,57,58,59,60,61] },
    { label: '🛡️ Admin mobile', flow: 'admin', screens: [27,28,48,78,79,80,81,82,76,77,83,'71b'] },
    { label: '💻 WEB', isHeader: true },
    { label: '🌐 Patient web', flow: 'patient', web: true, screens: [1,2,3,4,7,8,9,10,11,12,13,14,15] },
    { label: '💊 Pharmacien web', flow: 'pharmacist', web: true, screens: [16,17,18,19,20,21] },
    { label: '🛡️ Admin web', flow: 'admin', web: true, screens: [22,23,24,25,26,27,28,54,55,56,64,65,66,67,68,69] }
  ];

  window.buildScreenPicker = function() {
    const panel = document.getElementById('screen-picker');
    if (!panel) return;
    panel.innerHTML = `<div id="screen-picker-header"><span>📺 Navigation</span><button onclick="toggleScreenPicker()">✕</button></div><div id="screen-picker-body"></div>`;
    const body = panel.querySelector('#screen-picker-body');
    SCREEN_GROUPS.forEach(group => {
      if (group.isHeader) {
        const h = document.createElement('div');
        h.style.cssText = 'font-size:10px;font-weight:800;color:rgba(255,255,255,0.4);margin-top:8px;padding:4px 0;border-top:1px solid rgba(255,255,255,0.1);';
        h.textContent = group.label;
        body.appendChild(h);
      } else {
        const dots = document.createElement('div');
        dots.className = 'sp-dots';
        group.screens.forEach(n => {
          const b = document.createElement('button');
          b.className = 'nav-dot';
          b.id = (group.web ? 'navdot-w' : 'navdot-') + n;
          b.textContent = n;
          b.onclick = () => {
            if (group.web) { switchTo('web'); goToWebScreen(n); }
            else { switchTo('mobile'); goToScreen(n); }
            toggleScreenPicker();
          };
          dots.appendChild(b);
        });
        body.appendChild(dots);
      }
    });
  };

  window.toggleScreenPicker = function() {
    const p = document.getElementById('screen-picker');
    if (p) p.classList.toggle('open');
  };

  // ============================================================
  //  UI HELPERS
  // ============================================================
  window.filterCatalogCat = (cat, el) => {
    document.querySelectorAll('#catalog-cats .cat-chip').forEach(c => {
      c.style.background = '#F4F9FC'; c.style.color = '#6B7A8D';
    });
    el.style.background = '#1A6B8A'; el.style.color = '#fff';
    showToast('📂 Catégorie : ' + el.textContent);
  };

  window.updateQty = (delta) => {
    const el = document.getElementById('med-qty');
    if(el) el.textContent = Math.max(1, parseInt(el.textContent) + delta);
  };

  // ============================================================
  //  KEYBOARD NAVIGATION (arrow keys)
  // ============================================================

  // Collecte dynamique de tous les numéros d'écrans existants (triés)
  function getScreenNumbers() {
    var nums = [];
    document.querySelectorAll('.screen[id^="screen"]').forEach(function(el) {
      var n = parseInt(el.id.replace('screen', ''), 10);
      if (!isNaN(n) && nums.indexOf(n) === -1) nums.push(n);
    });
    nums.sort(function(a, b) { return a - b; });
    return nums;
  }

  function nextExistingScreen(current) {
    var nums = getScreenNumbers();
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] > current) return nums[i];
    }
    return current; // déjà au max, on ne bouge pas
  }

  function prevExistingScreen(current) {
    var nums = getScreenNumbers();
    for (var i = nums.length - 1; i >= 0; i--) {
      if (nums[i] < current) return nums[i];
    }
    return current; // déjà au min, on ne bouge pas
  }

  document.addEventListener('keydown', function(e) {
    // Ne pas interférer si l'utilisateur tape dans un champ
    const tag = document.activeElement && document.activeElement.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      if (currentDevice === 'web') goToWebScreen(currentWebScreen + 1);
      else goToScreen(nextExistingScreen(currentScreen));
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (currentDevice === 'web') goToWebScreen(Math.max(1, currentWebScreen - 1));
      else goToScreen(prevExistingScreen(currentScreen));
    }
  });

  // ============================================================
  //  INITIALIZATION
  // ============================================================
  //  FLOW NAV — dropdown profils (gauche)
  // ============================================================
  function buildFlowNav() {
    // Bouton toggle
    const toggle = document.createElement('button');
    toggle.id = 'flow-toggle';
    toggle.textContent = '🗺 Parcours';
    toggle.onclick = function() {
      const nav = document.getElementById('flow-nav');
      if (!nav) return;
      const visible = nav.classList.contains('visible');
      nav.classList.toggle('visible', !visible);
    };
    document.body.appendChild(toggle);

    // Panel
    const nav = document.createElement('div');
    nav.id = 'flow-nav';
    nav.innerHTML = `
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:11px;font-weight:800;color:rgba(255,255,255,0.5);letter-spacing:0.5px;margin-bottom:4px;text-transform:uppercase;">Parcours guidés</div>
      <button class="flow-btn patient"    onclick="startFlow('patient')">🧑‍🦱 Patient</button>
      <button class="flow-btn pharmacist" onclick="startFlow('pharmacist')">🏥 Pharmacie</button>
      <button class="flow-btn pharmacist" onclick="startFlow('pharmacien')" style="background:#E8F7EE;color:#0D3B2E;">👨‍⚕️ Pharmacien</button>
      <button class="flow-btn medecin"    onclick="startFlow('medecin')">🩺 Médecin</button>
      <button class="flow-btn livreur"    onclick="startFlow('livreur')">🛵 Livreur</button>
      <button class="flow-btn admin"      onclick="startFlow('admin')">🛡️ Admin</button>
      <div style="height:1px;background:rgba(255,255,255,0.1);margin:4px 0;"></div>
      <button class="flow-btn" style="background:#EEF4FF;color:#2D5BE3;" onclick="goToScreen(72);closeFlowNav()">🤖 Chatbot IA</button>
      <div style="font-size:10px;color:rgba(255,255,255,0.35);text-align:center;margin-top:4px;">← → pour naviguer</div>
      <button onclick="closeFlowNav()" style="margin-top:4px;padding:6px;background:rgba(255,255,255,0.05);border:none;border-radius:8px;color:rgba(255,255,255,0.35);font-size:11px;cursor:pointer;font-family:'DM Sans',sans-serif;width:100%;">Fermer ✕</button>
    `;
    document.body.appendChild(nav);
  }

  window.closeFlowNav = function() {
    const nav = document.getElementById('flow-nav');
    if (nav) nav.classList.remove('visible');
  };

  window.startFlow = function(type) {
    closeFlowNav();
    activeFlow = type;
    const maps = { patient: patientFlow, pharmacist: pharmacistFlow, pharmacien: pharmacienFlow, medecin: medecinFlow, livreur: livreurFlow, admin: adminFlow };
    const labels = { patient:'Patient', pharmacist:'Pharmacien', medecin:'Médecin', livreur:'Livreur', admin:'Admin' };
    flowSteps = maps[type] || [];
    if (!flowSteps.length) return;
    flowIndex = 0;
    switchTo('mobile');
    goToScreen(flowSteps[0]);
    showToast('▶ Parcours ' + (labels[type]||type) + ' démarré — utilisez ← → pour naviguer');
    buildFlowProgress();
  };

  function buildFlowProgress() {
    let bar = document.getElementById('flow-progress-bar');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'flow-progress-bar';
      bar.style.cssText = 'position:fixed;bottom:72px;left:50%;transform:translateX(-50%);background:rgba(15,63,84,0.95);border-radius:12px;padding:8px 16px;z-index:9998;display:flex;align-items:center;gap:8px;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.1);font-family:"DM Sans",sans-serif;font-size:12px;white-space:nowrap;box-shadow:0 4px 20px rgba(0,0,0,0.4);';
      document.body.appendChild(bar);
    }
    const colors = {patient:'#1A6B8A', pharmacist:'#27AE60', admin:'#E74C3C', medecin:'#0D3B2E', livreur:'#F39C12'};
    const labels = {patient:'Patient', pharmacist:'Pharmacien', admin:'Admin', livreur:'Livreur', medecin:'Médecin'};
    const c = colors[activeFlow] || '#1A6B8A';
    bar.innerHTML = `
      <button onclick="flowPrev()" style="background:rgba(255,255,255,0.1);border:none;color:#fff;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:14px;">←</button>
      <span style="color:rgba(255,255,255,0.7);">${labels[activeFlow]||activeFlow} · <span id="flow-step-num" style="color:#fff;font-weight:700;">${flowIndex+1}</span>/${flowSteps.length}</span>
      <button onclick="flowNext()" style="background:${c};border:none;color:#fff;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:14px;font-weight:700;">→</button>
      <button onclick="endFlow()" style="background:rgba(255,255,255,0.08);border:none;color:rgba(255,255,255,0.4);border-radius:6px;padding:4px 8px;cursor:pointer;font-size:11px;">✕</button>
    `;
  }

  window.flowNext = function() {
    if (!activeFlow || flowIndex >= flowSteps.length - 1) {
      showToast('✅ Fin du parcours ' + activeFlow);
      endFlow();
      return;
    }
    flowIndex++;
    goToScreen(flowSteps[flowIndex]);
    const el = document.getElementById('flow-step-num');
    if (el) el.textContent = flowIndex + 1;
  };

  window.flowPrev = function() {
    if (!activeFlow || flowIndex <= 0) return;
    flowIndex--;
    goToScreen(flowSteps[flowIndex]);
    const el = document.getElementById('flow-step-num');
    if (el) el.textContent = flowIndex + 1;
  };

  window.endFlow = function() {
    activeFlow = null;
    const bar = document.getElementById('flow-progress-bar');
    if (bar) bar.remove();
  };

  // ============================================================
  //  INITIALIZATION (Moved to index.html loader)
  // ============================================================

