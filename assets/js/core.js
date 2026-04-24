  // ============================================================
  //  CORE GLOBAL VARIABLES & STATE
  // ============================================================
  let currentScreen = 1;
  let currentWebScreen = 0;
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
    if (m) { m.classList.add('active'); return; }
    const labels = {
      'call-modal':            '📞 Appel en cours...',
      'pdf-modal':             '📄 Ouverture du document PDF...',
      'file-modal':            '📎 Sélection de fichier...',
      'edit-field-modal':      '✏️ Modification enregistrée',
      'confirm-delete-modal':  '🗑️ Confirmer la suppression ?',
      'confirm-modal':         '✓ Confirmation demandée',
      'confirm-suspend-modal': '⏸ Suspendre ce compte ?',
      'fullmap-modal':         '🗺️ Ouverture de la carte complète...',
      'add-product-modal':     '💊 Ajouter un produit',
      'add-user-modal':        '👤 Ajouter un utilisateur',
      'edit-user-modal':       '✏️ Modifier l\'utilisateur',
      'filter-catalog-modal':  '⌥ Filtres du catalogue',
      'qr-modal':              '🔲 Génération du QR Code...',
      'consent-modal':         '📋 Consentement patient enregistré',
      'med-select-modal':      '💊 Sélectionner un médicament',
      'patient-select-modal':  '👤 Sélectionner un patient',
      'map-modal':             '🗺️ Carte en cours de chargement...',
    };
    showToast(labels[id] || '🔔 ' + id.replace(/-/g, ' '));
  };

  window.closeModal = function() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
  };

  window.setDevice = function(device) {
    switchTo(device);
  };

  // ============================================================
  window.handleLogin = function() {
    showToast('✅ Connexion réussie ! Bienvenue sur ILERA AFRICA');
    goToScreen(10);
  };

  // Connexion web — redirige vers le dashboard patient par défaut
  // (les boutons profils dans wscreen8 gèrent la redirection spécifique)
  window.handleWebLogin = function() {
    showToast('✅ Connexion réussie !');
    goToWebScreen(10); // Dashboard patient
  };

  // ============================================================
  //  ORDER DETAIL FUNCTION
  // ============================================================
  window.showOrderDetail = function(id, date, pharmacy, price, status) {
    const elId = document.getElementById('od-orderId');
    const elDate = document.getElementById('od-date');
    if (elId) elId.textContent = '#' + id;
    if (elDate) elDate.textContent = date;
    goToScreen(14);
  };

  // ============================================================
  //  ENROLLMENT FORM — Multi-step logic (3 étapes)
  // ============================================================
  window._enrollProfile = null;
  window._enrollCurrentStep = 1;

  window.enrollSelectProfile = function(profile) {
    window._enrollProfile = profile;
    var cfgs = {
      medecin:    { color:'#059669', bg:'#ECFDF5', shadow:'rgba(5,150,105,0.15)' },
      pharmacien: { color:'#1A6B8A', bg:'#E0F2FE', shadow:'rgba(26,107,138,0.15)' },
      livreur:    { color:'#D97706', bg:'#FFFBEB', shadow:'rgba(217,119,6,0.15)' }
    };
    ['medecin','pharmacien','livreur'].forEach(function(p) {
      var card  = document.getElementById('ecard-' + p);
      var check = document.getElementById('echeck-' + p);
      if (!card) return;
      if (p === profile) {
        var c = cfgs[p];
        card.style.border     = '2.5px solid ' + c.color;
        card.style.background = c.bg;
        card.style.transform  = 'translateY(-6px)';
        card.style.boxShadow  = '0 20px 48px ' + c.shadow;
        if (check) { check.style.opacity = '1'; check.style.transform = 'scale(1)'; }
      } else {
        card.style.border     = '2px solid #E2ECF2';
        card.style.background = '#fff';
        card.style.transform  = 'translateY(0)';
        card.style.boxShadow  = '0 4px 16px rgba(0,0,0,0.05)';
        if (check) { check.style.opacity = '0'; check.style.transform = 'scale(0.8)'; }
      }
    });
    var btn = document.getElementById('enroll-btn-1');
    if (btn) { btn.style.opacity = '1'; btn.style.pointerEvents = 'auto'; btn.style.transform = 'none'; }
  };

  window.enrollGoToStep = function(step) {
    for (var s = 1; s <= 3; s++) {
      var el = document.getElementById('enroll-step-' + s);
      if (el) el.style.display = 'none';
    }
    var target = document.getElementById('enroll-step-' + step);
    if (target) { target.style.display = 'flex'; target.style.flexDirection = 'column'; target.style.gap = '28px'; }
    window._enrollCurrentStep = step;
    enrollUpdateStepper(step);
    var sc = document.querySelector('.enroll-scroll');
    if (sc) sc.scrollTop = 0;
  };

  window.enrollUpdateStepper = function(step) {
    for (var s = 1; s <= 3; s++) {
      var circle = document.getElementById('estep-c-' + s);
      var label  = document.getElementById('estep-l-' + s);
      var line   = document.getElementById('estep-line-' + s);
      if (circle) {
        if (s < step) {
          circle.style.cssText = 'width:40px;height:40px;border-radius:50%;background:#059669;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all 0.3s;';
          circle.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        } else if (s === step) {
          circle.style.cssText = 'width:40px;height:40px;border-radius:50%;background:#1A6B8A;display:flex;align-items:center;justify-content:center;font-family:Plus Jakarta Sans,sans-serif;font-size:16px;font-weight:800;color:#fff;flex-shrink:0;box-shadow:0 0 0 4px rgba(26,107,138,0.15);transition:all 0.3s;';
          circle.textContent = s;
        } else {
          circle.style.cssText = 'width:40px;height:40px;border-radius:50%;background:#E2ECF2;display:flex;align-items:center;justify-content:center;font-family:Plus Jakarta Sans,sans-serif;font-size:16px;font-weight:700;color:#9BA7B4;flex-shrink:0;transition:all 0.3s;';
          circle.textContent = s;
        }
      }
      if (label) {
        label.style.fontWeight = s === step ? '700' : '500';
        label.style.color = s < step ? '#059669' : (s === step ? '#1A2332' : '#9BA7B4');
        label.style.transition = 'all 0.3s';
      }
      if (line) {
        line.style.background = s < step ? '#059669' : '#E2ECF2';
        line.style.transition = 'background 0.3s';
      }
    }
  };

  window.enrollNext = function(fromStep) {
    if (fromStep === 1 && !window._enrollProfile) {
      showToast('Veuillez choisir votre profil pour continuer');
      return;
    }
    enrollGoToStep(fromStep + 1);
    if (fromStep + 1 === 2) {
      ['medecin','pharmacien','livreur'].forEach(function(p) {
        var el = document.getElementById('einfo-' + p);
        if (el) el.style.display = p === window._enrollProfile ? 'flex' : 'none';
      });
      var badges = { medecin:'🩺 Médecin', pharmacien:'💊 Pharmacien', livreur:'🛵 Livreur' };
      var bcolors = { medecin:'#059669', pharmacien:'#1A6B8A', livreur:'#D97706' };
      var bbgs    = { medecin:'#ECFDF5',  pharmacien:'#E0F2FE',  livreur:'#FFFBEB' };
      var badge = document.getElementById('enroll-badge-step2');
      if (badge) {
        badge.textContent  = badges[window._enrollProfile]  || window._enrollProfile;
        badge.style.color  = bcolors[window._enrollProfile] || '#1A6B8A';
        badge.style.background = bbgs[window._enrollProfile] || '#E0F2FE';
      }
    }
    if (fromStep + 1 === 3) {
      ['medecin','pharmacien','livreur'].forEach(function(p) {
        var el = document.getElementById('edocs-' + p);
        if (el) el.style.display = p === window._enrollProfile ? 'grid' : 'none';
      });
      var badges2 = { medecin:'🩺 Médecin', pharmacien:'💊 Pharmacien', livreur:'🛵 Livreur' };
      var bcolors2 = { medecin:'#059669', pharmacien:'#1A6B8A', livreur:'#D97706' };
      var bbgs2    = { medecin:'#ECFDF5',  pharmacien:'#E0F2FE',  livreur:'#FFFBEB' };
      var badge3 = document.getElementById('enroll-badge-step3');
      if (badge3) {
        badge3.textContent  = badges2[window._enrollProfile]  || window._enrollProfile;
        badge3.style.color  = bcolors2[window._enrollProfile] || '#1A6B8A';
        badge3.style.background = bbgs2[window._enrollProfile] || '#E0F2FE';
      }
    }
  };

  window.enrollFakeUpload = function(el, docName) {
    el.style.borderColor = '#059669';
    el.style.background  = '#ECFDF5';
    el.querySelector('.upload-cta').style.background = '#059669';
    el.querySelector('.upload-cta').innerHTML = '✓ Fichier chargé';
    el.querySelector('.upload-icon').textContent = '✅';
    showToast('📎 ' + docName + ' chargé avec succès');
  };

  window.enrollSubmit = function() {
    goToWebScreen('_enrollement_success');
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
    const webFrame    = document.getElementById('webFrame');

    // Masquer tous les frames avant d'en afficher un
    if (mobileFrame) mobileFrame.style.display = 'none';
    if (webFrame)    webFrame.style.display    = 'none';   // sera passé en 'flex' si besoin
    document.querySelectorAll('.switch-btn').forEach(b => b.classList.remove('active'));

    if (device === 'mobile') {
      if (mobileFrame) {
        mobileFrame.style.display = 'block';
        mobileFrame.classList.add('active-mobile');
      }
      if (webFrame) {
        webFrame.style.display = 'none';
        webFrame.classList.remove('active-web');
      }
      const btn = document.getElementById('btn-mobile');
      if (btn) btn.classList.add('active');
      goToScreen(currentScreen);

    } else {
      // mode 'web'
      if (mobileFrame) {
        mobileFrame.style.display = 'none';
        mobileFrame.classList.remove('active-mobile');
      }
      if (webFrame) {
        webFrame.style.display = 'flex';
        webFrame.classList.add('active-web');
      }
      const btn = document.getElementById('btn-web');
      if (btn) btn.classList.add('active');
      goToWebScreen(currentWebScreen);
    }

    syncPickerDot(device === 'web' ? currentWebScreen : currentScreen);
  }

  // ============================================================
  //  RESPONSIVE SIZE SWITCHER (webFrame)
  // ============================================================
  window.setWebSize = function(size) {
    const content = document.getElementById('browserContent');
    if (!content) return;
    // Ajuste la largeur max du contenu
    const widths = { desktop: '100%', tablet: '1024px', mobile: '390px' };
    content.style.maxWidth  = widths[size] || '100%';
    content.style.margin    = size === 'desktop' ? '' : '0 auto';
    content.style.boxShadow = size === 'desktop' ? '' : '0 0 0 1px rgba(0,0,0,0.1)';
    // URL bar label
    const labels = { desktop:'🔒 ilera.africa — Desktop', tablet:'🔒 ilera.africa — Tablette', mobile:'🔒 ilera.africa — Mobile' };
    const urlEl = document.getElementById('webBrowserUrl');
    if (urlEl) urlEl.textContent = labels[size] || '🔒 ilera.africa';
    // Sync boutons
    document.querySelectorAll('.vitrine-size-btn').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById('btn-size-' + size);
    if (btn) btn.classList.add('active');
  };

  // ============================================================
  //  NAVIGATION FUNCTIONS
  // ============================================================
  window.goToScreen = function(n) {
    if (navigating) return;
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
    console.log(`📡 Navigation Web vers : ${n}`);
    currentWebScreen = n;
    const allWeb = document.querySelectorAll('.web-screen');
    allWeb.forEach(s => s.classList.remove('active'));

    // Recherche de la cible par ID wscreenN ou N ou wN
    const target = document.getElementById('wscreen' + n) || document.getElementById(n) || document.getElementById('w' + n);
    
    if (target) {
        target.classList.add('active');
        const content = document.getElementById('browserContent');
        if (content) content.scrollTop = 0;
    } else {
        console.warn(`❌ Écran web [${n}] non trouvé.`);
        if (allWeb.length > 0) {
            console.log("ℹ️ Affichage du premier écran web disponible par défaut.");
            allWeb[0].classList.add('active');
        }
    }

    // URL bar : wscreen0 = vitrine (accueil public)
    const urlEl = document.getElementById('webBrowserUrl');
    if (urlEl) {
      const urlMap = {
        0:                      '🔒 ilera.africa',
        '_enrollement':         '🔒 ilera.africa/inscription',
        '_enrollement_success': '🔒 ilera.africa/inscription/confirmation',
        8:  '🔒 ilera.africa/login',
        9:  '🔒 ilera.africa/inscription/patient',
        10: '🔒 ilera.africa/patient/dashboard',
        16: '🔒 ilera.africa/pharmacien/dashboard',
        17: '🔒 ilera.africa/pharmacien/ordonnances',
        22: '🔒 ilera.africa/admin/login',
        23: '🔒 ilera.africa/admin/dashboard',
        57: '🔒 ilera.africa/medecin/login',
        58: '🔒 ilera.africa/medecin/dashboard',
      };
      urlEl.textContent = urlMap[n] !== undefined ? urlMap[n] : ('🔒 ilera.africa/web/screen-' + n);
    }

    // Bouton Home visible seulement si on n'est pas déjà sur la vitrine
    const homeBtn = document.getElementById('web-home-btn');
    if (homeBtn) homeBtn.style.opacity = (n === 0) ? '0.4' : '1';

    syncPickerDot(n);
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
    // La mise à jour URL est maintenant faite dans goToWebScreen
    // Pour mobile, on met à jour l'URL générique de la barre
    if (currentDevice !== 'web') {
      const urlEl = document.querySelector('.browser-url');
      if (urlEl) urlEl.textContent = '🔒 ilera.africa/app/' + n;
    }
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
    { label: '🌍 Vitrine (accueil)', flow: 'patient', web: true, screens: [0] },
    { label: '📝 Inscription', flow: 'patient', web: true, screens: ['_enrollement', '_enrollement_success'] },
    { label: '👤 Patient web', flow: 'patient', web: true, screens: [1,2,3,4,7,8,9,10,11,12,13,14,15] },
    { label: '💊 Pharmacien web', flow: 'pharmacist', web: true, screens: [16,17,18,19,20,21] },
    { label: '🩺 Médecin web', flow: 'medecin', web: true, screens: [57,58,59,60,61,62,63] },
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
      } else if (group.screens) {
        const dots = document.createElement('div');
        dots.className = 'sp-dots';
        // Labels lisibles pour les IDs non-numériques
        const NICE_LABELS = {
          '_enrollement':         '📝',
          '_enrollement_success': '✅',
          '_admin_enrollements':  '🗂️',
          '71b':                  '71b'
        };
        group.screens.forEach(n => {
          const b = document.createElement('button');
          b.className = 'nav-dot';
          b.id = (group.web ? 'navdot-w' : 'navdot-') + n;
          b.textContent = NICE_LABELS[n] !== undefined ? NICE_LABELS[n] : n;
          b.title = String(n);
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
  //  UI HELPERS (RESTORED & ENHANCED)
  // ============================================================
  window.filterCatalogCat = (_cat, el) => {
    document.querySelectorAll('#catalog-cats .cat-chip').forEach(c => {
      c.style.background = '#F4F9FC'; c.style.color = '#6B7A8D';
    });
    el.style.background = '#1A6B8A'; el.style.color = '#fff';
    showToast('📂 Catégorie : ' + el.textContent);
  };

  window.updateQty = (btnOrDelta, delta) => {
    let el, d;
    if (typeof btnOrDelta === 'number') {
      el = document.getElementById('med-qty');
      d = btnOrDelta;
    } else {
      el = btnOrDelta.parentElement.querySelector('.qty-val') || btnOrDelta.parentElement.querySelector('span');
      d = delta;
    }
    if (el) {
      let val = parseInt(el.textContent);
      el.textContent = Math.max(1, val + d);
    }
  };

  window.decrementStock = (btn) => {
    const el = btn.closest('[data-stock]') || btn.parentElement;
    const stockEl = el.querySelector('.stock-val');
    if (stockEl) {
      let val = Math.max(0, parseInt(stockEl.textContent) - 1);
      stockEl.textContent = val;
      showToast('📦 Stock mis à jour : ' + val);
    }
  };

  window.incrementStock = (btn) => {
    const el = btn.closest('[data-stock]') || btn.parentElement;
    const stockEl = el.querySelector('.stock-val');
    if (stockEl) {
      let val = parseInt(stockEl.textContent) + 1;
      stockEl.textContent = val;
      showToast('📦 Stock mis à jour : ' + val);
    }
  };

  window.togglePassword = (btn) => {
    const inp = btn.closest('div').querySelector('input');
    if (!inp) return;
    inp.type = inp.type === 'password' ? 'text' : 'password';
    btn.textContent = inp.type === 'password' ? '👁' : '🙈';
  };

  window.otpNext = (el) => {
    el.value = el.value.replace(/[^0-9]/g, '');
    if (el.value.length === 1) {
      const next = el.nextElementSibling;
      if (next && (next.classList.contains('otp-input') || next.tagName === 'INPUT')) next.focus();
    }
  };

  window.webOtpNext = (el) => {
    el.value = el.value.replace(/[^0-9]/g, '');
    if (el.value.length === 1) {
      const next = el.nextElementSibling;
      if (next && (next.classList.contains('web-otp-box') || next.tagName === 'INPUT')) next.focus();
    }
  };

  window.otpBack = (e, el) => {
    if (e.key === 'Backspace' && !el.value) {
      const prev = el.previousElementSibling;
      if (prev) { prev.value = ''; prev.focus(); }
    }
  };

  window.triggerSearch = () => showToast('🔍 Recherche en cours...');
  window.refreshData = () => showToast('🔄 Données actualisées');

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
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:10px;font-weight:800;color:rgba(255,255,255,0.4);letter-spacing:0.5px;margin-bottom:6px;text-transform:uppercase;">📱 Parcours Mobile</div>
      <button class="flow-btn patient"    onclick="startFlow('patient')">🧑‍🦱 Patient</button>
      <button class="flow-btn pharmacist" onclick="startFlow('pharmacist')">🏥 Pharmacie</button>
      <button class="flow-btn pharmacist" onclick="startFlow('pharmacien')" style="background:#E8F7EE;color:#0D3B2E;">👨‍⚕️ Pharmacien</button>
      <button class="flow-btn medecin"    onclick="startFlow('medecin')">🩺 Médecin</button>
      <button class="flow-btn livreur"    onclick="startFlow('livreur')">🛵 Livreur</button>
      <button class="flow-btn admin"      onclick="startFlow('admin')">🛡️ Admin</button>
      <button class="flow-btn" style="background:#EEF4FF;color:#2D5BE3;" onclick="goToScreen(72);closeFlowNav()">🤖 Chatbot IA</button>
      <div style="height:1px;background:rgba(255,255,255,0.1);margin:6px 0;"></div>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:10px;font-weight:800;color:rgba(255,255,255,0.4);letter-spacing:0.5px;margin-bottom:6px;text-transform:uppercase;">💻 Parcours Web</div>
      <button class="flow-btn" style="background:linear-gradient(135deg,#064E3B,#065F46);color:#6EE7B7;" onclick="switchTo('web');goToWebScreen(0);closeFlowNav()">🌍 Vitrine</button>
      <button class="flow-btn patient"    onclick="switchTo('web');goToWebScreen(8);closeFlowNav()">👤 Patient web</button>
      <button class="flow-btn medecin"    onclick="switchTo('web');goToWebScreen(57);closeFlowNav()">🩺 Médecin web</button>
      <button class="flow-btn pharmacist" onclick="switchTo('web');goToWebScreen(16);closeFlowNav()">💊 Pharmacien web</button>
      <button class="flow-btn admin"      onclick="switchTo('web');goToWebScreen(22);closeFlowNav()">🛡️ Admin web</button>
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
  //  REGISTRATION HANDLERS
  // ============================================================
  window.handleRegister = function() {
    showToast('✅ Compte créé avec succès ! Bienvenue sur ILERA AFRICA');
    setTimeout(() => goToScreen(51), 800);
  };

  window.handleRegisterWeb = function() {
    showToast('✅ Compte créé avec succès ! Bienvenue sur ILERA AFRICA');
    setTimeout(() => goToWebScreen(10), 800);
  };

  // ============================================================
  //  MAP MODAL
  // ============================================================
  window.openMapModal = function() {
    const overlay = document.getElementById('mapModalOverlay');
    const modal   = document.getElementById('mapModal');
    if (!overlay || !modal) return;
    overlay.style.display = 'block';
    modal.style.display   = 'block';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      overlay.style.opacity = '1';
      modal.style.transform = 'translateY(0)';
    }));
  };

  window.closeMapModal = function() {
    const overlay = document.getElementById('mapModalOverlay');
    const modal   = document.getElementById('mapModal');
    if (!overlay || !modal) return;
    overlay.style.opacity = '0';
    modal.style.transform = 'translateY(100%)';
    setTimeout(() => {
      overlay.style.display = 'none';
      modal.style.display   = 'none';
    }, 350);
  };

  // ============================================================
  //  ARTICLE MODAL (Conseils Santé)
  // ============================================================
  const _articles = {
    paludisme:     { emoji:'💊', cat:'Prévention',  catColor:'#27AE60', catBg:'#E8F7EE', title:'Bien gérer son traitement antipaludéen',         time:'5 min de lecture', body:"Le paludisme reste l'une des maladies les plus répandues en Afrique de l'Ouest. Un traitement bien suivi est essentiel.<br><br><strong>Les points clés :</strong><ul style='margin:10px 0 0 16px;line-height:2;color:#1A2332;font-size:13px;'><li>Prenez vos médicaments à heure fixe chaque jour</li><li>Ne jamais interrompre le traitement même si vous vous sentez mieux</li><li>Conservez les médicaments à l'abri de la chaleur</li><li>Consultez votre pharmacien en cas d'effets secondaires</li></ul><br><div style='background:#E8F7EE;border-radius:12px;padding:12px;font-size:12px;color:#27AE60;font-weight:600;'>Astuce : activez les rappels de prise dans l'appli ILERA AFRICA</div>" },
    diabete:       { emoji:'🥗', cat:'Nutrition',   catColor:'#F39C12', catBg:'#FFF3CD', title:'Alimentation et diabète : les bons réflexes',     time:'7 min de lecture', body:"Une alimentation équilibrée est le premier pilier du contrôle du diabète de type 2.<br><br><strong>À privilégier :</strong><ul style='margin:10px 0 0 16px;line-height:2;color:#1A2332;font-size:13px;'><li>Légumes verts, légumineuses, céréales complètes</li><li>Poissons, viandes blanches</li><li>Fruits entiers en quantité modérée</li></ul><br><strong>À limiter :</strong><ul style='margin:10px 0 0 16px;line-height:2;color:#1A2332;font-size:13px;'><li>Sucres rapides (sodas, sucreries)</li><li>Graisses saturées et fritures</li></ul><br><div style='background:#FFF3CD;border-radius:12px;padding:12px;font-size:12px;color:#F39C12;font-weight:600;'>Consultez un nutritionniste pour un plan personnalisé</div>" },
    stress:        { emoji:'🧘', cat:'Bien-être',   catColor:'#8B5CF6', catBg:'#F0E8FF', title:'Gérer le stress au quotidien',                    time:'4 min de lecture', body:"Le stress chronique impacte directement la santé. Quelques habitudes simples peuvent vous aider.<br><br><strong>Techniques efficaces :</strong><ul style='margin:10px 0 0 16px;line-height:2;color:#1A2332;font-size:13px;'><li>Respiration abdominale : 4s inspiration, 6s expiration</li><li>30 minutes de marche par jour</li><li>Réduire le temps d'écran avant de dormir</li><li>Pratiquer la gratitude chaque soir</li></ul><br><div style='background:#F0E8FF;border-radius:12px;padding:12px;font-size:12px;color:#8B5CF6;font-weight:600;'>Si le stress persiste, parlez-en à votre médecin</div>" },
    antibiotiques: { emoji:'🦠', cat:'Médicaments', catColor:'#E74C3C', catBg:'#FEF0EE', title:'Antibiotiques : ne pas interrompre le traitement', time:'6 min de lecture', body:"Les antibiotiques ne sont efficaces que contre les infections bactériennes.<br><br><strong>Règles essentielles :</strong><ul style='margin:10px 0 0 16px;line-height:2;color:#1A2332;font-size:13px;'><li>Toujours terminer la cure prescrite</li><li>Ne jamais partager vos antibiotiques</li><li>Ne pas prendre pour un virus (rhume, grippe)</li><li>Respectez les heures de prise indiquées</li></ul><br><div style='background:#FEF0EE;border-radius:12px;padding:12px;font-size:12px;color:#E74C3C;font-weight:600;'>Antibiotiques uniquement sur ordonnance médicale</div>" },
    hypertension:  { emoji:'❤️', cat:'Prévention',  catColor:'#27AE60', catBg:'#E8F7EE', title:'Hypertension : surveiller sa pression artérielle', time:'8 min de lecture', body:"L'hypertension artérielle est souvent silencieuse mais dangereuse si elle n'est pas prise en charge.<br><br><strong>Valeurs normales :</strong><ul style='margin:10px 0 0 16px;line-height:2;color:#1A2332;font-size:13px;'><li>Idéale : moins de 120/80 mmHg</li><li>Normale haute : 130-139 / 85-89</li><li>Hypertension : 140/90 et plus</li></ul><br><strong>Conseils :</strong><ul style='margin:10px 0 0 16px;line-height:2;color:#1A2332;font-size:13px;'><li>Réduire le sel dans l'alimentation</li><li>Pratiquer une activité physique régulière</li></ul><br><div style='background:#E8F7EE;border-radius:12px;padding:12px;font-size:12px;color:#27AE60;font-weight:600;'>Mesurez votre tension en pharmacie gratuitement</div>" },
    hydratation:   { emoji:'💧', cat:'Nutrition',   catColor:'#F39C12', catBg:'#FFF3CD', title:"Bien s'hydrater en saison chaude",                time:'3 min de lecture', body:"En période de chaleur, le corps perd beaucoup d'eau. Une bonne hydratation est essentielle.<br><br><strong>Recommandations :</strong><ul style='margin:10px 0 0 16px;line-height:2;color:#1A2332;font-size:13px;'><li>Boire au moins 1,5 à 2 litres d'eau par jour</li><li>Ne pas attendre d'avoir soif</li><li>Consommer des fruits et légumes riches en eau</li><li>Éviter l'alcool et les boissons sucrées</li></ul><br><div style='background:#FFF3CD;border-radius:12px;padding:12px;font-size:12px;color:#F39C12;font-weight:600;'>Une urine claire est signe d'une bonne hydratation</div>" },
    sommeil:       { emoji:'🌙', cat:'Bien-être',   catColor:'#8B5CF6', catBg:'#F0E8FF', title:'Améliorer la qualité de son sommeil',             time:'5 min de lecture', body:"Un sommeil de qualité est essentiel pour la santé physique et mentale.<br><br><strong>Bonnes habitudes :</strong><ul style='margin:10px 0 0 16px;line-height:2;color:#1A2332;font-size:13px;'><li>Se coucher et se lever à heures régulières</li><li>Éteindre les écrans 30 min avant le coucher</li><li>Maintenir la chambre fraîche et obscure</li><li>Éviter caféine et repas lourds le soir</li></ul><br><div style='background:#F0E8FF;border-radius:12px;padding:12px;font-size:12px;color:#8B5CF6;font-weight:600;'>7 à 9 heures de sommeil recommandées pour un adulte</div>" }
  };

  window.showArticleModal = function(key) {
    const a = _articles[key];
    if (!a) return;
    const el = document.getElementById('articleModalContent');
    if (!el) return;
    el.innerHTML = `<div style="display:inline-block;background:${a.catBg};color:${a.catColor};font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;margin-bottom:10px;">${a.cat}</div><div style="font-size:36px;margin-bottom:10px;">${a.emoji}</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#1A2332;line-height:1.3;margin-bottom:6px;">${a.title}</div><div style="font-size:12px;color:#6B7A8D;margin-bottom:16px;">🕐 ${a.time}</div><hr style="border:none;border-top:1px solid #E2ECF2;margin-bottom:16px;"><div style="font-size:13px;color:#1A2332;line-height:1.7;">${a.body}</div><button onclick="closeArticleModal()" style="width:100%;margin-top:24px;padding:14px;background:linear-gradient(135deg,#1A6B8A,#2196B3);color:#fff;border:none;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">Fermer</button>`;
    const overlay = document.getElementById('articleModalOverlay');
    const modal   = document.getElementById('articleModal');
    if (!overlay || !modal) return;
    overlay.style.display = 'block';
    modal.style.display   = 'block';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      overlay.style.opacity = '1';
      modal.style.transform = 'translateY(0)';
    }));
  };

  window.closeArticleModal = function() {
    const overlay = document.getElementById('articleModalOverlay');
    const modal   = document.getElementById('articleModal');
    if (!overlay || !modal) return;
    overlay.style.opacity = '0';
    modal.style.transform = 'translateY(100%)';
    setTimeout(() => {
      overlay.style.display = 'none';
      modal.style.display   = 'none';
    }, 350);
  };

  // ============================================================
  //  MESSAGING
  // ============================================================
  window.sendMessage = function() {
    const inputs = ['chat-input', 'msg-input', 'message-input'];
    let sent = false;
    for (const id of inputs) {
      const inp = document.getElementById(id);
      if (inp && inp.value.trim()) {
        showToast('✉️ Message envoyé : ' + inp.value.trim().substring(0, 40));
        inp.value = '';
        sent = true;
        break;
      }
    }
    if (!sent) showToast('✉️ Message envoyé');
  };

  // ============================================================
  //  PDF VIEWER CONTROLS
  // ============================================================
  window.rotatePDF    = function() { showToast('↻ Rotation de l\'ordonnance'); };
  window.toggleFullscreen = function() { showToast('⛶ Mode plein écran'); };
  window.zoomIn       = function() { showToast('🔍 Zoom +'); };
  window.zoomOut      = function() { showToast('🔍 Zoom −'); };

  // ============================================================
  //  ADMIN ALERTS
  // ============================================================
  window.filterAlerts = function() { showToast('⚠️ Filtrage des alertes actif'); };

  // ============================================================
  //  PHARMACIEN — VALIDATION TABS (screen22)
  // ============================================================
  window.showPTab = function(n) {
    ['ptab1', 'ptab2', 'ptab3'].forEach((id, i) => {
      const el = document.getElementById(id);
      if (!el) return;
      const active = (i + 1 === n);
      el.style.background = active ? 'rgba(255,255,255,0.15)' : 'transparent';
      el.style.color       = active ? '#fff' : 'rgba(255,255,255,0.5)';
    });
    showToast(['Validation', 'Interactions médicamenteuses', 'Historique patient'][n - 1]);
  };

  // ============================================================
  //  PHARMACIEN — STOCK TABS
  // ============================================================
  window.switchStockTab = function(tab, _el) {
    ['all', 'rupture', 'critique', 'ok', 'perime'].forEach(t => {
      const btn = document.getElementById('stab-' + t);
      if (!btn) return;
      if (t === tab) {
        btn.style.background = '#0F3F54';
        btn.style.color = '#fff';
      } else {
        btn.style.background = '#F4F9FC';
        btn.style.color = t === 'rupture' ? '#E74C3C' : t === 'critique' ? '#F39C12' : t === 'ok' ? '#27AE60' : t === 'perime' ? '#9B59B6' : '#6B7A8D';
      }
    });
    const labels = { all: 'Tous les médicaments', rupture: 'Ruptures de stock', critique: 'Stock critique', ok: 'Stock normal', perime: 'Périmés / Péremption proche' };
    showToast('📦 ' + (labels[tab] || tab));
  };

  // ============================================================
  //  PHARMACIEN — PATIENT DETAIL TABS (wscreen20)
  // ============================================================
  window.showPatientTab = function(n) {
    [1, 2, 3, 4, 5].forEach(i => {
      const el = document.getElementById('ptabw' + i);
      if (!el) return;
      el.style.borderBottomColor = (i === n) ? '#1A6B8A' : 'transparent';
      el.style.color             = (i === n) ? '#1A6B8A' : '#6B7A8D';
      el.style.fontWeight        = (i === n) ? '700'     : '500';
    });
    const names = ['Ordonnances', 'Commandes', 'Consultations', 'Documents', 'Notes'];
    showToast('Onglet : ' + names[n - 1]);
  };

  // ============================================================
  //  PATIENT — PHARMACIES FILTER (screen29)
  // ============================================================
  window.pharmaFilter = function(type) {
    ['all', 'open', '24h', 'delivery', 'close'].forEach(f => {
      const el = document.getElementById('phfil-' + f);
      if (!el) return;
      if (f === type) {
        el.style.background = '#fff';
        el.style.color      = '#1A6B8A';
        el.style.border     = 'none';
      } else {
        el.style.background = 'rgba(255,255,255,0.15)';
        el.style.color      = 'rgba(255,255,255,0.9)';
        el.style.border     = '1px solid rgba(255,255,255,0.2)';
      }
    });
    const labels = { all: 'Toutes les pharmacies', open: 'Ouvertes maintenant', '24h': 'Gardes 24h', delivery: 'Avec livraison', close: 'À moins de 1 km' };
    showToast('Filtre : ' + labels[type]);
  };

  // ============================================================
  //  PATIENT — DOSSIER MÉDICAL TABS (screen35)
  // ============================================================
  window.showDossierTab = function(tab) {
    ['antecedents', 'traitements', 'vaccins', 'consultations'].forEach(t => {
      const content = document.getElementById('dossier-' + t);
      const btn     = document.getElementById('tab-' + t);
      if (content) content.style.display = (t === tab) ? 'block' : 'none';
      if (btn) {
        btn.style.fontWeight        = (t === tab) ? '700'         : '600';
        btn.style.color             = (t === tab) ? '#0F3F54'     : '#6B7A8D';
        btn.style.borderBottomColor = (t === tab) ? '#0F3F54'     : 'transparent';
      }
    });
  };

  // ============================================================
  //  PATIENT — PHARMACIE DETAIL TABS (screen30) + generic class-based tabs
  // ============================================================
  window.showPhTab = function(tab, btn) {
    // Screen30 (detail pharmacie) — ID-based tabs
    ['info', 'stock', 'avis'].forEach(t => {
      const phtab     = document.getElementById('phtab-' + t);
      const phcontent = document.getElementById('phcontent-' + t);
      if (phtab) {
        phtab.style.borderBottomColor = (t === tab) ? '#1A6B8A' : 'transparent';
        phtab.style.color             = (t === tab) ? '#1A6B8A' : '#6B7A8D';
        phtab.style.fontWeight        = (t === tab) ? '700'     : '600';
      }
      if (phcontent) {
        phcontent.style.display       = (t === tab) ? 'flex'    : 'none';
        if (t === tab) phcontent.style.flexDirection = 'column';
      }
    });
    // Generic class-based tabs (other screens using .ph-tab-content / .ph-tab-btn)
    document.querySelectorAll('.ph-tab-content').forEach(c => c.style.display = 'none');
    const target = document.getElementById('ph-tab-' + tab);
    if (target) target.style.display = 'block';
    document.querySelectorAll('.ph-tab-btn').forEach(b => {
      b.style.color      = '#6B7A8D';
      b.style.borderBottom = 'none';
      b.style.fontWeight = '600';
    });
    if (btn) {
      btn.style.color        = '#1A6B8A';
      btn.style.borderBottom = '2px solid #1A6B8A';
      btn.style.fontWeight   = '700';
    }
  };

  // ============================================================
  //  SUCCESS SCREEN
  // ============================================================
  window.showSuccess = function(type, ref) {
    const titles = { payment: 'Paiement confirmé !', order: 'Commande envoyée !', prescription: 'Ordonnance envoyée !' };
    const msgs   = { payment: 'Votre paiement a été traité avec succès.', order: 'Votre commande a été transmise à la pharmacie.', prescription: 'Votre ordonnance a été envoyée avec succès à votre pharmacien.' };
    const el = document.getElementById('success-title');
    const em = document.getElementById('success-msg');
    const er = document.getElementById('success-ref-val');
    if (el) el.textContent = titles[type] || 'Succès !';
    if (em) em.textContent = msgs[type] || 'Opération réalisée avec succès.';
    if (er && ref) er.textContent = ref;
    goToScreen(51);
  };

  // ============================================================
  //  WEB PASSWORD TOGGLE
  // ============================================================
  window.toggleWebPwd = function() {
    const inputs = document.querySelectorAll('.web-screen.active input[type="password"], .web-screen.active input[type="text"]');
    inputs.forEach(inp => {
      if (inp.closest('.field-wrap') || inp.type === 'password' || inp.type === 'text') {
        inp.type = inp.type === 'password' ? 'text' : 'password';
      }
    });
    showToast(document.querySelector('.web-screen.active input[type="text"]') ? '🙈 Mot de passe masqué' : '👁 Mot de passe visible');
  };

  // ============================================================
  //  DOWNLOAD TRIGGER (maquette)
  // ============================================================
  window.triggerDownload = function() { showToast('📥 Téléchargement démarré...'); };

  // ============================================================
  //  INITIALIZATION (Moved to index.html loader)
  // ============================================================

