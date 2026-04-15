window.FRAGMENTS = window.FRAGMENTS || {};
window.FRAGMENTS['livreur'] = `
<div class="screen" id="screen54" data-device="mobile">
  <div style="background:linear-gradient(160deg,#1A2332 0%,#0F3F54 60%,#1A6B8A 100%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px 24px;position:relative;overflow:hidden;">
    <!-- Background circles -->
    <div style="position:absolute;width:280px;height:280px;border-radius:50%;border:1px solid rgba(255,255,255,0.05);top:-60px;right:-80px;"></div>
    <div style="position:absolute;width:200px;height:200px;border-radius:50%;border:1px solid rgba(255,255,255,0.05);bottom:-40px;left:-60px;"></div>

    <!-- Logo + badge -->
    <div style="text-align:center;margin-bottom:36px;">
      <div style="width:72px;height:72px;background:linear-gradient(135deg,#F39C12,#e67e22);border-radius:22px;display:flex;align-items:center;justify-content:center;font-size:34px;margin:0 auto 14px;box-shadow:0 8px 24px rgba(243,156,18,0.4);">🛵</div>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;font-weight:800;color:#fff;">ILERA AFRICA</div>
      <div style="background:rgba(243,156,18,0.2);border:1px solid rgba(243,156,18,0.4);border-radius:50px;padding:4px 16px;margin-top:8px;display:inline-block;">
        <span style="font-size:12px;font-weight:700;color:#F39C12;">⚡ Espace Livreur</span>
      </div>
    </div>

    <!-- Form card -->
    <div style="background:#fff;border-radius:24px;padding:24px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,0.3);">
      <div style="font-size:16px;font-weight:700;color:#1A2332;margin-bottom:20px;font-family:'Plus Jakarta Sans',sans-serif;">Connexion</div>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div>
          <div style="font-size:11px;font-weight:700;color:#6B7A8D;margin-bottom:6px;letter-spacing:0.5px;">NUMÉRO DE TÉLÉPHONE</div>
          <div style="display:flex;align-items:center;gap:8px;border:1.5px solid #E2ECF2;border-radius:12px;padding:12px 14px;">
            <span style="font-size:13px;font-weight:600;color:#1A2332;">+225</span>
            <div style="width:1px;height:18px;background:#E2ECF2;"></div>
            <input value="07 44 55 88 12" style="border:none;outline:none;font-size:14px;font-family:'DM Sans',sans-serif;color:#1A2332;flex:1;">
          </div>
        </div>
        <div>
          <div style="font-size:11px;font-weight:700;color:#6B7A8D;margin-bottom:6px;letter-spacing:0.5px;">MOT DE PASSE</div>
          <input type="password" value="••••••••" style="width:100%;padding:12px 14px;border:1.5px solid #E2ECF2;border-radius:12px;font-size:14px;font-family:'DM Sans',sans-serif;outline:none;box-sizing:border-box;">
        </div>
        <div style="background:#E8F7EE;border-radius:10px;padding:10px 12px;display:flex;gap:8px;align-items:center;">
          <span style="font-size:14px;">🔒</span>
          <span style="font-size:11px;color:#27AE60;font-weight:600;">Connexion sécurisée · Données chiffrées SSL</span>
        </div>
        <button onclick="goToScreen(55)" style="width:100%;padding:16px;background:linear-gradient(135deg,#F39C12,#e67e22);color:#fff;border:none;border-radius:14px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 8px 24px rgba(243,156,18,0.35);">Se connecter →</button>
      </div>
    </div>

    <!-- Bottom hint -->
    <div style="margin-top:20px;text-align:center;">
      <div style="font-size:12px;color:rgba(255,255,255,0.5);">Pas encore livreur ? <span style="color:#F39C12;font-weight:700;cursor:pointer;" onclick="showToast('Formulaire candidature...')">Rejoindre l'équipe</span></div>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 52 — LIVREUR DASHBOARD
======================================== -->
<div class="screen" id="screen55" data-device="mobile">
  <!-- Header -->
  <div style="background:linear-gradient(135deg,#1A2332,#0F3F54);padding:54px 20px 20px;flex-shrink:0;">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;">
      <div>
        <div style="font-size:13px;color:rgba(255,255,255,0.6);">Bonjour,</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#fff;">Kofi Mensah 👋</div>
        <div style="margin-top:6px;display:flex;align-items:center;gap:6px;">
          <div style="width:8px;height:8px;background:#4ADE80;border-radius:50%;"></div>
          <span style="font-size:12px;color:#4ADE80;font-weight:700;">En ligne</span>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end;">
        <!-- Toggle en ligne -->
        <div onclick="showToast('Statut mis à jour')" style="background:rgba(74,222,128,0.15);border:1px solid rgba(74,222,128,0.3);border-radius:50px;padding:6px 14px;display:flex;align-items:center;gap:6px;cursor:pointer;">
          <div style="width:28px;height:16px;background:#4ADE80;border-radius:50px;position:relative;"><div style="position:absolute;right:2px;top:2px;width:12px;height:12px;background:#fff;border-radius:50%;"></div></div>
          <span style="font-size:11px;font-weight:700;color:#4ADE80;">Actif</span>
        </div>
        <div style="width:36px;height:36px;background:rgba(255,255,255,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;" onclick="openDrawer('livreur')">
          <span style="font-size:20px;">☰</span>
        </div>
      </div>
    </div>

    <!-- Stats rapides -->
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
      <div style="background:rgba(255,255,255,0.08);border-radius:12px;padding:12px;text-align:center;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#F39C12;">4</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:2px;">À livrer</div>
      </div>
      <div style="background:rgba(255,255,255,0.08);border-radius:12px;padding:12px;text-align:center;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#4ADE80;">12</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:2px;">Livrées</div>
      </div>
      <div style="background:rgba(255,255,255,0.08);border-radius:12px;padding:12px;text-align:center;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#fff;">4.9</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:2px;">⭐ Note</div>
      </div>
    </div>
  </div>

  <!-- Body -->
  <div style="flex:1;overflow-y:auto;background:#F4F9FC;padding:16px;display:flex;flex-direction:column;gap:12px;">

    <!-- Livraison urgente -->
    <div style="background:#F39C12;border-radius:14px;padding:14px;display:flex;align-items:center;gap:12px;cursor:pointer;" onclick="goToScreen(56)">
      <div style="width:44px;height:44px;background:rgba(255,255,255,0.2);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;">🚨</div>
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:800;color:#fff;">LIVRAISON URGENTE</div>
        <div style="font-size:12px;color:rgba(255,255,255,0.85);margin-top:2px;">#CMD-90214 · Cocody · 0.8 km</div>
      </div>
      <div style="color:#fff;font-size:18px;">→</div>
    </div>

    <!-- Liste des livraisons du jour -->
    <div style="font-size:12px;font-weight:700;color:#6B7A8D;letter-spacing:0.5px;">LIVRAISONS DU JOUR</div>

    <!-- Livraison 1 -->
    <div onclick="goToScreen(56)" style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);cursor:pointer;border-left:3px solid #F39C12;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
        <div>
          <div style="font-size:13px;font-weight:700;color:#1A2332;">#CMD-90214 · Moussa Koné</div>
          <div style="font-size:11px;color:#6B7A8D;margin-top:2px;">12 Rue des Jardins, Cocody</div>
        </div>
        <div style="background:#FEF9EE;border-radius:8px;padding:3px 10px;font-size:10px;font-weight:700;color:#F39C12;">URGENT</div>
      </div>
      <div style="display:flex;gap:10px;">
        <div style="font-size:11px;color:#6B7A8D;">📍 0.8 km</div>
        <div style="font-size:11px;color:#6B7A8D;">⏱ ETA 17:30</div>
        <div style="font-size:11px;color:#6B7A8D;">💊 3 médicaments</div>
      </div>
    </div>

    <!-- Livraison 2 -->
    <div onclick="goToScreen(56)" style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);cursor:pointer;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
        <div>
          <div style="font-size:13px;font-weight:700;color:#1A2332;">#CMD-90215 · Fatou Traoré</div>
          <div style="font-size:11px;color:#6B7A8D;margin-top:2px;">8 Av. Houphouët, Plateau</div>
        </div>
        <div style="background:#E8F4F8;border-radius:8px;padding:3px 10px;font-size:10px;font-weight:600;color:#1A6B8A;">NORMAL</div>
      </div>
      <div style="display:flex;gap:10px;">
        <div style="font-size:11px;color:#6B7A8D;">📍 2.1 km</div>
        <div style="font-size:11px;color:#6B7A8D;">⏱ ETA 18:00</div>
        <div style="font-size:11px;color:#6B7A8D;">💊 1 médicament</div>
      </div>
    </div>

    <!-- Livraison 3 -->
    <div onclick="goToScreen(56)" style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);cursor:pointer;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
        <div>
          <div style="font-size:13px;font-weight:700;color:#1A2332;">#CMD-90216 · Aminata Coulibaly</div>
          <div style="font-size:11px;color:#6B7A8D;margin-top:2px;">45 Rue des Bananiers, Marcory</div>
        </div>
        <div style="background:#E8F4F8;border-radius:8px;padding:3px 10px;font-size:10px;font-weight:600;color:#1A6B8A;">NORMAL</div>
      </div>
      <div style="display:flex;gap:10px;">
        <div style="font-size:11px;color:#6B7A8D;">📍 4.3 km</div>
        <div style="font-size:11px;color:#6B7A8D;">⏱ ETA 18:45</div>
        <div style="font-size:11px;color:#6B7A8D;">💊 2 médicaments</div>
      </div>
    </div>

    <!-- Gains du jour -->
    <div style="background:linear-gradient(135deg,#1A2332,#0F3F54);border-radius:14px;padding:14px;display:flex;justify-content:space-between;align-items:center;">
      <div>
        <div style="font-size:11px;color:rgba(255,255,255,0.6);">Gains aujourd'hui</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#F39C12;">18 500 FCFA</div>
      </div>
      <button onclick="goToScreen(60)" style="padding:8px 14px;background:rgba(243,156,18,0.15);color:#F39C12;border:1px solid rgba(243,156,18,0.3);border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Détails →</button>
    </div>
  </div>

  <!-- Bottom nav livreur -->
  <div style="background:#1A2332;padding:12px 16px 24px;display:flex;justify-content:space-around;flex-shrink:0;">
    <button onclick="goToScreen(55)" style="background:none;border:none;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;">
      <span style="font-size:20px;">🏠</span><span style="font-size:9px;color:#F39C12;font-weight:700;">Accueil</span>
    </button>
    <button onclick="goToScreen(56)" style="background:none;border:none;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;">
      <span style="font-size:20px;">🗺</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Navigation</span>
    </button>
    <button onclick="goToScreen(59)" style="background:none;border:none;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;">
      <span style="font-size:20px;">📋</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Historique</span>
    </button>
    <button onclick="goToScreen(60)" style="background:none;border:none;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;">
      <span style="font-size:20px;">💰</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Revenus</span>
    </button>
  </div>
</div>

<!-- ========================================
     SCREEN 53 — DÉTAIL LIVRAISON + GPS
======================================== -->
<div class="screen" id="screen56" data-device="mobile">
  <!-- Map area -->
  <div style="background:linear-gradient(145deg,#b8d8e8,#7fb5cc);height:260px;position:relative;flex-shrink:0;display:flex;align-items:center;justify-content:center;overflow:hidden;">
    <!-- Route simulée -->
    <svg width="375" height="260" style="position:absolute;top:0;left:0;">
      <path d="M80,220 Q160,160 200,120 Q240,80 300,60" stroke="#F39C12" stroke-width="4" fill="none" stroke-dasharray="8,4"/>
      <!-- Point livreur -->
      <circle cx="80" cy="220" r="12" fill="#F39C12" stroke="#fff" stroke-width="3"/>
      <text x="80" y="224" text-anchor="middle" font-size="10" fill="#fff">🛵</text>
      <!-- Destination -->
      <circle cx="300" cy="60" r="14" fill="#1A6B8A" stroke="#fff" stroke-width="3"/>
      <text x="300" y="65" text-anchor="middle" font-size="10" fill="#fff">📍</text>
    </svg>
    <!-- Top bar -->
    <div style="position:absolute;top:54px;left:16px;right:16px;background:rgba(255,255,255,0.95);border-radius:14px;padding:12px 16px;display:flex;align-items:center;gap:10px;box-shadow:0 4px 16px rgba(0,0,0,0.1);">
      <button onclick="goToScreen(55)" style="background:none;border:none;cursor:pointer;font-size:18px;color:#1A2332;">←</button>
      <div style="flex:1;">
        <div style="font-size:11px;color:#6B7A8D;">Destination</div>
        <div style="font-size:13px;font-weight:700;color:#1A2332;">12 Rue des Jardins, Cocody</div>
      </div>
      <div style="background:#F39C12;border-radius:8px;padding:4px 10px;font-size:11px;font-weight:700;color:#fff;">0.8 km</div>
    </div>
    <!-- ETA pill -->
    <div style="position:absolute;bottom:12px;left:50%;transform:translateX(-50%);background:#1A2332;border-radius:50px;padding:8px 20px;display:flex;align-items:center;gap:8px;">
      <span style="font-size:13px;color:#F39C12;font-weight:800;">ETA 17:30</span>
      <div style="width:1px;height:14px;background:rgba(255,255,255,0.2);"></div>
      <span style="font-size:11px;color:rgba(255,255,255,0.7);">~8 min</span>
    </div>
  </div>

  <!-- Livraison info -->
  <div style="flex:1;overflow-y:auto;background:#F4F9FC;padding:16px;display:flex;flex-direction:column;gap:12px;">

    <!-- Patient info -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
        <div style="width:44px;height:44px;background:#E8F4F8;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;">👤</div>
        <div style="flex:1;">
          <div style="font-size:14px;font-weight:700;color:#1A2332;">Moussa Koné</div>
          <div style="font-size:11px;color:#6B7A8D;">+225 07 22 45 88 12</div>
        </div>
        <button onclick="showToast('Scanner QR Client pour valider')" style="width:44px;height:44px;background:#FEF9EE;border:1.5px solid #F39C12;border-radius:10px;font-size:18px;cursor:pointer;" title="Scanner QR Code">📱</button>
      </div>
      <div style="background:#F4F9FC;border-radius:10px;padding:10px 12px;display:flex;gap:8px;align-items:flex-start;">
        <span style="font-size:14px;">📍</span>
        <span style="font-size:12px;color:#1A2332;font-weight:600;">12 Rue des Jardins, Cocody, Abidjan<br><span style="color:#6B7A8D;font-weight:400;">Code: B2 · Résidence Les Jardins</span></span>
      </div>
    </div>

    <!-- Colis à livrer -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:13px;font-weight:700;color:#1A2332;margin-bottom:10px;">📦 Colis à livrer</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px;background:#F4F9FC;border-radius:8px;">
          <div style="display:flex;align-items:center;gap:8px;"><span style="font-size:14px;">💊</span><span style="font-size:12px;font-weight:600;color:#1A2332;">Amoxicilline 500mg × 2</span></div>
          <span style="font-size:11px;color:#6B7A8D;">Frigo ❄️</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px;background:#F4F9FC;border-radius:8px;">
          <div style="display:flex;align-items:center;gap:8px;"><span style="font-size:14px;">💊</span><span style="font-size:12px;font-weight:600;color:#1A2332;">Metformine 850mg × 1</span></div>
          <span style="font-size:11px;color:#6B7A8D;">Température amb.</span>
        </div>
      </div>
      <div style="background:#FEF9EE;border-radius:10px;padding:8px 12px;margin-top:8px;display:flex;gap:6px;align-items:center;">
        <span style="font-size:12px;">⚠️</span><span style="font-size:11px;color:#F39C12;font-weight:600;">Ordonnance contrôlée — remettre au patient uniquement</span>
      </div>
    </div>

    <!-- Actions -->
    <div style="display:flex;gap:8px;">
      <button onclick="showModal('map-modal')" style="flex:1;padding:14px;background:#1A2332;color:#fff;border:none;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;cursor:pointer;">🗺 Naviguer</button>
      <button onclick="goToScreen(58)" style="flex:1.5;padding:14px;background:linear-gradient(135deg,#27AE60,#2ecc71);color:#fff;border:none;border-radius:14px;font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;cursor:pointer;box-shadow:0 4px 14px rgba(39,174,96,0.3);">✅ Arrivé — Livrer</button>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 54 — CHAT LIVREUR / PATIENT
======================================== -->
<div class="screen" id="screen57" data-device="mobile">
  <div style="background:#0F3F54;padding:54px 20px 14px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;">
      <button onclick="goToScreen(56)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="width:36px;height:36px;background:#E8F4F8;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;">👤</div>
      <div>
        <div style="font-size:14px;font-weight:700;color:#fff;">Moussa Koné</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.6);">Patient · En ligne</div>
      </div>
      <!-- Appels désactivés pour les coursiers -->
      <div style="margin-left:auto;width:34px;height:34px;"></div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;background:#F4F9FC;display:flex;flex-direction:column;gap:12px;">
    <div style="text-align:center;font-size:11px;color:#6B7A8D;background:#fff;border-radius:20px;padding:4px 14px;align-self:center;box-shadow:0 1px 4px rgba(0,0,0,0.06);">Aujourd'hui 17:02</div>
    <!-- Patient message -->
    <div style="display:flex;gap:8px;align-items:flex-end;">
      <div style="width:28px;height:28px;background:#E8F4F8;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;">👤</div>
      <div style="background:#fff;border-radius:14px 14px 14px 4px;padding:10px 14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);max-width:240px;">
        <div style="font-size:13px;color:#1A2332;">Bonjour, êtes-vous bientôt là ? Je vous attends à l'entrée B.</div>
        <div style="font-size:10px;color:#6B7A8D;margin-top:4px;">17:02</div>
      </div>
    </div>
    <!-- Livreur message -->
    <div style="display:flex;gap:8px;align-items:flex-end;justify-content:flex-end;">
      <div style="background:linear-gradient(135deg,#F39C12,#e67e22);border-radius:14px 14px 4px 14px;padding:10px 14px;max-width:240px;">
        <div style="font-size:13px;color:#fff;">Bonjour ! J'arrive dans environ 5 minutes. Je suis rue des Jardins.</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.7);margin-top:4px;">17:04 ✓✓</div>
      </div>
      <div style="width:28px;height:28px;background:#F39C12;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;">🛵</div>
    </div>
  </div>
  <!-- Input -->
  <div style="background:#fff;padding:12px 16px;border-top:1.5px solid #E2ECF2;display:flex;gap:8px;align-items:center;flex-shrink:0;">
    <input type="text" placeholder="Message..." style="flex:1;border:1.5px solid #E2ECF2;border-radius:50px;padding:10px 16px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;background:#F4F9FC;">
    <button onclick="sendMessage()" style="width:40px;height:40px;background:#F39C12;border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;">➤</button>
  </div>
</div>

<!-- ========================================
     SCREEN 55 — CONFIRMATION LIVRAISON
======================================== -->
<div class="screen" id="screen58" data-device="mobile">
  <div style="background:#0F3F54;padding:54px 20px 14px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;">
      <button onclick="goToScreen(56)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Confirmer la livraison</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:20px;background:#F4F9FC;display:flex;flex-direction:column;gap:14px;">
    <!-- Commande récap -->
    <div style="background:#1A6B8A;border-radius:14px;padding:14px;color:#fff;">
      <div style="font-size:11px;opacity:0.8;margin-bottom:2px;">Commande</div>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;">#CMD-90214 · Moussa Koné</div>
      <div style="font-size:12px;opacity:0.7;margin-top:4px;">12 Rue des Jardins, Cocody</div>
    </div>

    <!-- Photo preuve -->
    <div style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:13px;font-weight:700;color:#1A2332;margin-bottom:12px;">📸 Preuve de livraison</div>
      <div onclick="showToast('📷 Appareil photo...')" style="border:2px dashed #1A6B8A;border-radius:12px;padding:28px;text-align:center;background:#E8F4F8;cursor:pointer;">
        <div style="font-size:32px;margin-bottom:8px;">📷</div>
        <div style="font-size:13px;font-weight:700;color:#1A6B8A;">Photographier la remise</div>
        <div style="font-size:11px;color:#6B7A8D;margin-top:4px;">Photo du colis remis au patient</div>
      </div>
    </div>

    <!-- QR Code Scan -->
    <div style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:13px;font-weight:700;color:#1A2332;margin-bottom:12px;">📱 Scanner le QR Code Client</div>
      <div style="border:2px dashed #F39C12;border-radius:12px;height:100px;background:#FEF9EE;display:flex;align-items:center;justify-content:center;cursor:pointer;" onclick="showToast('Scanner un QR Code...')">
        <div style="text-align:center;"><div style="font-size:24px;">📸</div><div style="font-size:11px;color:#F39C12;margin-top:4px;font-weight:600;">Ouvrir la caméra</div></div>
      </div>
    </div>

    <!-- Mode remise -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:13px;font-weight:700;color:#1A2332;margin-bottom:10px;">Mode de remise</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <label style="display:flex;align-items:center;gap:10px;padding:10px;background:#E8F7EE;border-radius:10px;border:1.5px solid #27AE60;cursor:pointer;"><input type="radio" name="remise" checked style="accent-color:#27AE60;"><span style="font-size:13px;font-weight:600;color:#27AE60;">✅ En mains propres</span></label>
        <label style="display:flex;align-items:center;gap:10px;padding:10px;background:#F4F9FC;border-radius:10px;border:1.5px solid #E2ECF2;cursor:pointer;"><input type="radio" name="remise" style="accent-color:#1A6B8A;"><span style="font-size:13px;color:#1A2332;">📬 Déposé en boîte / gardien</span></label>
        <label style="display:flex;align-items:center;gap:10px;padding:10px;background:#F4F9FC;border-radius:10px;border:1.5px solid #E2ECF2;cursor:pointer;"><input type="radio" name="remise" style="accent-color:#E74C3C;"><span style="font-size:13px;color:#1A2332;">❌ Absent — retour pharmacie</span></label>
      </div>
    </div>

    <button onclick="goToScreen(55);showToast('✅ Livraison confirmée ! +1 500 FCFA')" style="width:100%;padding:16px;background:linear-gradient(135deg,#27AE60,#2ecc71);color:#fff;border:none;border-radius:14px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 4px 16px rgba(39,174,96,0.3);">✅ Valider la livraison</button>
  </div>
</div>

<!-- ========================================
     SCREEN 56 — HISTORIQUE LIVRAISONS
======================================== -->
<div class="screen" id="screen59" data-device="mobile">
  <div style="background:#1A2332;padding:54px 20px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;">
      <button onclick="goToScreen(55)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Historique</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;background:#F4F9FC;display:flex;flex-direction:column;gap:10px;">
    <!-- Today -->
    <div style="font-size:12px;font-weight:700;color:#6B7A8D;letter-spacing:0.5px;">AUJOURD'HUI — 14 oct. 2024</div>
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
        <div style="font-size:13px;font-weight:700;color:#1A2332;">#CMD-90213 · Kofi Mensah</div>
        <div style="font-size:13px;font-weight:800;color:#27AE60;">+1 500 FCFA</div>
      </div>
      <div style="display:flex;gap:10px;"><div style="font-size:11px;color:#6B7A8D;">Plateau · 1.4 km</div><div style="font-size:11px;color:#6B7A8D;">16:22 ✓</div></div>
    </div>
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
        <div style="font-size:13px;font-weight:700;color:#1A2332;">#CMD-90210 · Aïcha Diallo</div>
        <div style="font-size:13px;font-weight:800;color:#27AE60;">+1 200 FCFA</div>
      </div>
      <div style="display:flex;gap:10px;"><div style="font-size:11px;color:#6B7A8D;">Cocody · 2.1 km</div><div style="font-size:11px;color:#6B7A8D;">14:50 ✓</div></div>
    </div>
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
        <div style="font-size:13px;font-weight:700;color:#1A2332;">#CMD-90205 · Ibrahim Sanogo</div>
        <div style="font-size:13px;font-weight:800;color:#E74C3C;">Absent</div>
      </div>
      <div style="display:flex;gap:10px;"><div style="font-size:11px;color:#6B7A8D;">Marcory · 3.2 km</div><div style="font-size:11px;color:#6B7A8D;">13:15 ✗</div></div>
    </div>

    <!-- Yesterday -->
    <div style="font-size:12px;font-weight:700;color:#6B7A8D;letter-spacing:0.5px;margin-top:8px;">HIER — 13 oct. 2024</div>
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
        <div style="font-size:13px;font-weight:700;color:#1A2332;">12 livraisons effectuées</div>
        <div style="font-size:13px;font-weight:800;color:#27AE60;">+17 400 FCFA</div>
      </div>
      <div style="font-size:11px;color:#6B7A8D;">Note journalière : ⭐ 4.9/5</div>
    </div>

    <!-- Résumé semaine -->
    <div style="background:#1A2332;border-radius:14px;padding:14px;display:flex;justify-content:space-between;align-items:center;">
      <div><div style="font-size:11px;color:rgba(255,255,255,0.6);">Cette semaine</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:800;color:#F39C12;">87 400 FCFA</div></div>
      <div style="text-align:right;"><div style="font-size:11px;color:rgba(255,255,255,0.6);">Livraisons</div><div style="font-size:20px;font-weight:800;color:#fff;">58</div></div>
    </div>
  </div>

  <!-- Bottom nav -->
  <div style="background:#1A2332;padding:12px 16px 24px;display:flex;justify-content:space-around;flex-shrink:0;">
    <button onclick="goToScreen(55)" style="background:none;border:none;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;"><span style="font-size:20px;">🏠</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Accueil</span></button>
    <button onclick="goToScreen(56)" style="background:none;border:none;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;"><span style="font-size:20px;">🗺</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Navigation</span></button>
    <button onclick="goToScreen(59)" style="background:none;border:none;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;"><span style="font-size:20px;">📋</span><span style="font-size:9px;color:#F39C12;font-weight:700;">Historique</span></button>
    <button onclick="goToScreen(60)" style="background:none;border:none;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;"><span style="font-size:20px;">💰</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Revenus</span></button>
  </div>
</div>

<!-- ========================================
     SCREEN 57 — REVENUS & STATS LIVREUR
======================================== -->
<div class="screen" id="screen60" data-device="mobile">
  <div style="background:linear-gradient(135deg,#1A2332,#0F3F54);padding:54px 20px 20px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
      <button onclick="goToScreen(55)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Mes Revenus</div>
    </div>
    <div style="background:linear-gradient(135deg,#F39C12,#e67e22);border-radius:16px;padding:18px;text-align:center;">
      <div style="font-size:12px;color:rgba(255,255,255,0.8);">Revenus du mois</div>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:36px;font-weight:800;color:#fff;margin:6px 0;">320 500 FCFA</div>
      <div style="font-size:11px;color:rgba(255,255,255,0.75);">↑ +12% vs mois dernier · 214 livraisons</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;background:#F4F9FC;display:flex;flex-direction:column;gap:12px;">
    <!-- Stats grid -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
      <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">Aujourd'hui</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#F39C12;">18 500 FCFA</div>
        <div style="font-size:10px;color:#27AE60;margin-top:2px;">12 courses</div>
      </div>
      <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">Cette semaine</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#1A2332;">87 400 FCFA</div>
        <div style="font-size:10px;color:#27AE60;margin-top:2px;">58 courses</div>
      </div>
    </div>
    <!-- Graphique semaine -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:13px;font-weight:700;color:#1A2332;margin-bottom:12px;">Activité cette semaine</div>
      <div style="display:flex;align-items:flex-end;gap:6px;height:80px;">
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;"><div style="width:100%;background:#E8F4F8;border-radius:4px 4px 0 0;height:35px;"></div><div style="font-size:9px;color:#6B7A8D;">Lun</div></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;"><div style="width:100%;background:#F39C12;border-radius:4px 4px 0 0;height:65px;"></div><div style="font-size:9px;color:#6B7A8D;">Mar</div></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;"><div style="width:100%;background:#F39C12;border-radius:4px 4px 0 0;height:50px;"></div><div style="font-size:9px;color:#6B7A8D;">Mer</div></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;"><div style="width:100%;background:#F39C12;border-radius:4px 4px 0 0;height:75px;"></div><div style="font-size:9px;color:#6B7A8D;">Jeu</div></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;"><div style="width:100%;background:#27AE60;border-radius:4px 4px 0 0;height:80px;"></div><div style="font-size:9px;color:#6B7A8D;">Ven</div></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;"><div style="width:100%;background:#E8F4F8;border-radius:4px 4px 0 0;height:30px;"></div><div style="font-size:9px;color:#6B7A8D;">Sam</div></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;"><div style="width:100%;background:#F39C12;border-radius:4px 4px 0 0;height:55px;"></div><div style="font-size:9px;color:#6B7A8D;">Dim</div></div>
      </div>
    </div>
    <!-- Performance -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:13px;font-weight:700;color:#1A2332;margin-bottom:12px;">Performance</div>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:12px;color:#6B7A8D;">Taux de réussite</span><span style="font-size:14px;font-weight:800;color:#27AE60;">97%</span></div>
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:12px;color:#6B7A8D;">Note moyenne</span><span style="font-size:14px;font-weight:800;color:#F39C12;">⭐ 4.9 / 5</span></div>
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:12px;color:#6B7A8D;">Temps moyen / livraison</span><span style="font-size:14px;font-weight:800;color:#1A2332;">22 min</span></div>
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:12px;color:#6B7A8D;">Rang ce mois</span><span style="background:#FEF9EE;border-radius:8px;padding:3px 10px;font-size:12px;font-weight:800;color:#F39C12;">#3 / 48 livreurs</span></div>
      </div>
    </div>
    <button onclick="showToast('Virement en cours...')" style="width:100%;padding:14px;background:linear-gradient(135deg,#F39C12,#e67e22);color:#fff;border:none;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 4px 16px rgba(243,156,18,0.3);">💸 Demander un virement</button>
  </div>

  <!-- Bottom nav -->
  <div style="background:#1A2332;padding:12px 16px 24px;display:flex;justify-content:space-around;flex-shrink:0;">
    <button onclick="goToScreen(55)" style="background:none;border:none;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;"><span style="font-size:20px;">🏠</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Accueil</span></button>
    <button onclick="goToScreen(56)" style="background:none;border:none;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;"><span style="font-size:20px;">🗺</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Navigation</span></button>
    <button onclick="goToScreen(59)" style="background:none;border:none;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;"><span style="font-size:20px;">📋</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Historique</span></button>
    <button onclick="goToScreen(60)" style="background:none;border:none;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;"><span style="font-size:20px;">💰</span><span style="font-size:9px;color:#F39C12;font-weight:700;">Revenus</span></button>
  </div>
</div>

<!-- ========================================
     SCREEN 58 — PROFIL LIVREUR
======================================== -->
<div class="screen" id="screen61" data-device="mobile">
  <div style="background:linear-gradient(135deg,#1A2332,#0F3F54);padding:54px 20px 24px;flex-shrink:0;text-align:center;">
    <button onclick="goToScreen(55)" style="position:absolute;top:54px;left:20px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
    <div style="width:80px;height:80px;background:linear-gradient(135deg,#F39C12,#e67e22);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:36px;margin:0 auto 12px;border:3px solid rgba(255,255,255,0.2);">🛵</div>
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#fff;">Kofi Mensah</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.7);margin-top:4px;">Livreur certifié · ID #LIV-0042</div>
    <div style="display:flex;justify-content:center;gap:8px;margin-top:12px;">
      <div style="background:rgba(74,222,128,0.2);border:1px solid rgba(74,222,128,0.3);border-radius:50px;padding:4px 14px;font-size:11px;font-weight:700;color:#4ADE80;">● En ligne</div>
      <div style="background:rgba(255,255,255,0.1);border-radius:50px;padding:4px 14px;font-size:11px;color:rgba(255,255,255,0.7);">⭐ 4.9 · 214 courses</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;background:#F4F9FC;display:flex;flex-direction:column;gap:12px;">
    <!-- Véhicule -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:13px;font-weight:700;color:#1A2332;margin-bottom:10px;">🛵 Mon véhicule</div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        <div style="display:flex;justify-content:space-between;"><span style="font-size:12px;color:#6B7A8D;">Type</span><span style="font-size:12px;font-weight:600;color:#1A2332;">Moto Jakarta 150cc</span></div>
        <div style="display:flex;justify-content:space-between;"><span style="font-size:12px;color:#6B7A8D;">Immatriculation</span><span style="font-size:12px;font-weight:600;color:#1A2332;">AB 4421 CI</span></div>
        <div style="display:flex;justify-content:space-between;"><span style="font-size:12px;color:#6B7A8D;">Assurance</span><span style="background:#E8F7EE;border-radius:6px;padding:1px 8px;font-size:11px;font-weight:700;color:#27AE60;">Valide jusqu'au 31/12/24</span></div>
        <div style="display:flex;justify-content:space-between;"><span style="font-size:12px;color:#6B7A8D;">Sacoche médicaments</span><span style="background:#E8F7EE;border-radius:6px;padding:1px 8px;font-size:11px;font-weight:700;color:#27AE60;">Certifiée ❄️</span></div>
      </div>
    </div>
    <!-- Zone -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:13px;font-weight:700;color:#1A2332;margin-bottom:10px;">📍 Zone de couverture</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px;">
        <div style="background:#E8F4F8;border-radius:50px;padding:4px 12px;font-size:11px;font-weight:700;color:#1A6B8A;">Cocody</div>
        <div style="background:#E8F4F8;border-radius:50px;padding:4px 12px;font-size:11px;font-weight:700;color:#1A6B8A;">Plateau</div>
        <div style="background:#E8F4F8;border-radius:50px;padding:4px 12px;font-size:11px;font-weight:700;color:#1A6B8A;">Marcory</div>
        <div style="background:#E8F4F8;border-radius:50px;padding:4px 12px;font-size:11px;font-weight:700;color:#1A6B8A;">Treichville</div>
      </div>
    </div>
    <!-- Actions -->
    <div style="background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="padding:14px 16px;border-bottom:1px solid #F4F9FC;display:flex;justify-content:space-between;cursor:pointer;" onclick="showModal('docs-modal')"><span style="font-size:13px;font-weight:600;color:#1A2332;">📄 Mes documents</span><span style="color:#6B7A8D;">→</span></div>
      <div style="padding:14px 16px;border-bottom:1px solid #F4F9FC;display:flex;justify-content:space-between;cursor:pointer;" onclick="showToast('Support...')"><span style="font-size:13px;font-weight:600;color:#1A2332;">❓ Support & Aide</span><span style="color:#6B7A8D;">→</span></div>
      <div style="padding:14px 16px;display:flex;justify-content:space-between;cursor:pointer;" onclick="goToScreen(37)"><span style="font-size:13px;font-weight:600;color:#1A2332;">⚙️ Paramètres</span><span style="color:#6B7A8D;">→</span></div>
    </div>
    <button onclick="goToScreen(54)" style="width:100%;padding:14px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">Se déconnecter</button>
  </div>
</div>



<!-- ========================================
     SCREEN 59 — MÉDECIN LOGIN
======================================== -->

`;