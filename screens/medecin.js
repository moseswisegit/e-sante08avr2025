window.FRAGMENTS = window.FRAGMENTS || {};
window.FRAGMENTS['medecin'] = `
<div class="screen" id="screen62" data-device="mobile" style="background:linear-gradient(160deg,#0D3B2E 0%,#1A6B50 100%);">
  <div style="flex:1;overflow-y:auto;display:flex;flex-direction:column;padding:60px 28px 32px;">
    <div style="text-align:center;margin-bottom:36px;">
      <div style="width:80px;height:80px;background:linear-gradient(135deg,#27AE60,#2ecc71);border-radius:24px;display:flex;align-items:center;justify-content:center;font-size:38px;margin:0 auto 16px;box-shadow:0 16px 40px rgba(39,174,96,0.4);">🩺</div>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;color:#fff;margin-bottom:6px;">Espace Médecin</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.65);">Accès réservé aux praticiens agréés</div>
    </div>
    <div style="background:rgba(255,255,255,0.08);border-radius:20px;padding:24px;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.12);display:flex;flex-direction:column;gap:14px;">
      <div>
        <label style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:0.5px;text-transform:uppercase;display:block;margin-bottom:6px;">Identifiant (Email / N° agrément)</label>
        <input type="email" placeholder="dr.konan@chusa.ci" style="width:100%;padding:13px 16px;background:rgba(255,255,255,0.1);border:1.5px solid rgba(255,255,255,0.2);border-radius:12px;color:#fff;font-size:14px;font-family:'DM Sans',sans-serif;outline:none;" />
      </div>
      <div>
        <label style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:0.5px;text-transform:uppercase;display:block;margin-bottom:6px;">Mot de passe</label>
        <input type="password" placeholder="••••••••" style="width:100%;padding:13px 16px;background:rgba(255,255,255,0.1);border:1.5px solid rgba(255,255,255,0.2);border-radius:12px;color:#fff;font-size:14px;font-family:'DM Sans',sans-serif;outline:none;" />
      </div>
      <button onclick="goToScreen(63)" style="width:100%;padding:15px;background:linear-gradient(135deg,#27AE60,#2ecc71);color:#fff;border:none;border-radius:12px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 8px 24px rgba(39,174,96,0.4);margin-top:4px;">Connexion + OTP →</button>
    </div>
    <div style="background:rgba(39,174,96,0.15);border:1px solid rgba(39,174,96,0.3);border-radius:12px;padding:12px 16px;margin-top:16px;display:flex;gap:10px;align-items:flex-start;">
      <span style="font-size:16px;">🔒</span>
      <span style="font-size:12px;color:rgba(255,255,255,0.75);line-height:1.5;">Authentification forte (mot de passe + OTP) requise. Votre inscription doit être validée par l'autorité médicale compétente.</span>
    </div>
    <div style="text-align:center;margin-top:20px;">
      <button onclick="goToScreen(1)" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;font-family:'DM Sans',sans-serif;">← Retour à l'accueil</button>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 60 — MÉDECIN OTP
======================================== -->
<div class="screen" id="screen63" data-device="mobile" style="background:linear-gradient(160deg,#0D3B2E 0%,#1A6B50 100%);">
  <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 28px;">
    <div style="width:72px;height:72px;background:rgba(39,174,96,0.2);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:32px;margin-bottom:20px;border:2px solid rgba(39,174,96,0.4);">📱</div>
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#fff;text-align:center;margin-bottom:8px;">Vérification OTP</div>
    <div style="font-size:14px;color:rgba(255,255,255,0.65);text-align:center;margin-bottom:32px;">Code envoyé au +225 07 ••• ••• 42</div>
    <div style="display:flex;gap:10px;margin-bottom:24px;">
      <input maxlength="1" class="otp-input" oninput="otpNext(this)" onkeydown="otpBack(event,this)" style="width:52px;height:60px;background:rgba(255,255,255,0.12);border:2px solid rgba(255,255,255,0.25);border-radius:14px;color:#fff;font-size:24px;font-weight:800;text-align:center;font-family:'Plus Jakarta Sans',sans-serif;outline:none;" />
      <input maxlength="1" class="otp-input" oninput="otpNext(this)" onkeydown="otpBack(event,this)" style="width:52px;height:60px;background:rgba(255,255,255,0.12);border:2px solid rgba(255,255,255,0.25);border-radius:14px;color:#fff;font-size:24px;font-weight:800;text-align:center;font-family:'Plus Jakarta Sans',sans-serif;outline:none;" />
      <input maxlength="1" class="otp-input" oninput="otpNext(this)" onkeydown="otpBack(event,this)" style="width:52px;height:60px;background:rgba(255,255,255,0.12);border:2px solid rgba(255,255,255,0.25);border-radius:14px;color:#fff;font-size:24px;font-weight:800;text-align:center;font-family:'Plus Jakarta Sans',sans-serif;outline:none;" />
      <input maxlength="1" class="otp-input" oninput="otpNext(this)" onkeydown="otpBack(event,this)" style="width:52px;height:60px;background:rgba(255,255,255,0.12);border:2px solid rgba(255,255,255,0.25);border-radius:14px;color:#fff;font-size:24px;font-weight:800;text-align:center;font-family:'Plus Jakarta Sans',sans-serif;outline:none;" />
    </div>
    <button onclick="goToScreen(64)" style="width:100%;max-width:280px;padding:15px;background:linear-gradient(135deg,#27AE60,#2ecc71);color:#fff;border:none;border-radius:12px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 8px 24px rgba(39,174,96,0.4);">Valider et accéder ✓</button>
    <button onclick="showToast('✉️ Nouveau code envoyé par SMS')" style="margin-top:14px;background:none;border:none;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;font-family:'DM Sans',sans-serif;">Renvoyer le code</button>
  </div>
</div>

<!-- ========================================
     SCREEN 61 — MÉDECIN DASHBOARD
======================================== -->
<div class="screen" id="screen64" data-device="mobile" style="background:#F4F9FC;">
  <!-- Header -->
  <div style="background:linear-gradient(135deg,#0D3B2E,#1A6B50);padding:54px 20px 20px;flex-shrink:0;">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;">
      <div>
        <div style="font-size:13px;color:rgba(255,255,255,0.65);margin-bottom:2px;">Bonjour 👋</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:800;color:#fff;">Dr. Konan Yao</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.6);margin-top:2px;">Cardiologue · CHUSA · Agrément CI #1847</div>
      </div>
      <div onclick="openDrawer('medecin')" style="width:44px;height:44px;background:rgba(255,255,255,0.15);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;cursor:pointer;border:2px solid rgba(255,255,255,0.2);">🩺</div>
    </div>
    <!-- KPI row -->
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;">
      <div style="background:rgba(255,255,255,0.12);border-radius:12px;padding:10px;text-align:center;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#fff;">8</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.65);">Ordonnances</div>
      </div>
      <div style="background:rgba(255,255,255,0.12);border-radius:12px;padding:10px;text-align:center;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#4ADE80;">3</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.65);">En attente</div>
      </div>
      <div style="background:rgba(255,255,255,0.12);border-radius:12px;padding:10px;text-align:center;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#F39C12;">12</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.65);">Patients actifs</div>
      </div>
    </div>
  </div>

  <!-- Content -->
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;">
    <!-- Quick actions -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
      <button onclick="goToScreen(65)" style="background:#fff;border:none;border-radius:14px;padding:16px;text-align:left;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <div style="font-size:24px;margin-bottom:8px;">📝</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;">Nouvelle ordonnance</div>
        <div style="font-size:11px;color:#6B7A8D;margin-top:2px;">Prescrire électroniquement</div>
      </button>
      <button onclick="goToScreen(67)" style="background:#fff;border:none;border-radius:14px;padding:16px;text-align:left;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <div style="font-size:24px;margin-bottom:8px;">👤</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;">Dossiers patients</div>
        <div style="font-size:11px;color:#6B7A8D;margin-top:2px;">Historique médical</div>
      </button>
      <button onclick="goToScreen(68)" style="background:#fff;border:none;border-radius:14px;padding:16px;text-align:left;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <div style="font-size:24px;margin-bottom:8px;">💬</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;">Messagerie</div>
        <div style="font-size:11px;color:#6B7A8D;margin-top:2px;">Patients & pharmaciens</div>
      </button>
      <button onclick="goToScreen(69)" style="background:#fff;border:none;border-radius:14px;padding:16px;text-align:left;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <div style="font-size:24px;margin-bottom:8px;">🗺</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;">Pharmacies proches</div>
        <div style="font-size:11px;color:#6B7A8D;margin-top:2px;">Stock & disponibilité</div>
      </button>
    </div>

    <!-- Recent prescriptions -->
    <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">Ordonnances récentes</div>
        <button onclick="goToScreen(66)" style="background:#E8F7EE;border:none;border-radius:8px;padding:4px 10px;font-size:11px;font-weight:700;color:#27AE60;cursor:pointer;font-family:'DM Sans',sans-serif;">Voir tout</button>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div onclick="goToScreen(66)" style="display:flex;align-items:center;gap:10px;padding:10px;background:#F4F9FC;border-radius:10px;cursor:pointer;">
          <div style="width:36px;height:36px;background:#E8F7EE;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">👤</div>
          <div style="flex:1;">
            <div style="font-size:13px;font-weight:700;color:#1A2332;">Moussa Koné</div>
            <div style="font-size:11px;color:#6B7A8D;">Amoxicilline 500mg · Metformine</div>
          </div>
          <div style="background:#E8F7EE;border-radius:8px;padding:3px 8px;font-size:10px;font-weight:700;color:#27AE60;">Livrée</div>
        </div>
        <div onclick="goToScreen(66)" style="display:flex;align-items:center;gap:10px;padding:10px;background:#F4F9FC;border-radius:10px;cursor:pointer;">
          <div style="width:36px;height:36px;background:#FEF0EE;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">👤</div>
          <div style="flex:1;">
            <div style="font-size:13px;font-weight:700;color:#1A2332;">Aïcha Diallo</div>
            <div style="font-size:11px;color:#6B7A8D;">Paracétamol 1g · Ibuprofène</div>
          </div>
          <div style="background:#FEF9EE;border-radius:8px;padding:3px 8px;font-size:10px;font-weight:700;color:#F39C12;">En cours</div>
        </div>
        <div onclick="goToScreen(66)" style="display:flex;align-items:center;gap:10px;padding:10px;background:#F4F9FC;border-radius:10px;cursor:pointer;">
          <div style="width:36px;height:36px;background:#E8F4F8;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">👤</div>
          <div style="flex:1;">
            <div style="font-size:13px;font-weight:700;color:#1A2332;">Yao Kouamé</div>
            <div style="font-size:11px;color:#6B7A8D;">Losartan 50mg · Aspégic</div>
          </div>
          <div style="background:#E8F4F8;border-radius:8px;padding:3px 8px;font-size:10px;font-weight:700;color:#1A6B8A;">En attente</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Bottom nav -->
  <div style="background:#fff;border-top:1.5px solid #E2ECF2;display:grid;grid-template-columns:repeat(4,1fr);padding:8px 0 20px;flex-shrink:0;">
    <button onclick="goToScreen(64)" style="display:flex;flex-direction:column;align-items:center;gap:3px;background:none;border:none;cursor:pointer;padding:4px;"><span style="font-size:18px;">🏠</span><span style="font-size:9px;font-weight:700;color:#27AE60;">Accueil</span></button>
    <button onclick="goToScreen(66)" style="display:flex;flex-direction:column;align-items:center;gap:3px;background:none;border:none;cursor:pointer;padding:4px;"><span style="font-size:18px;">📋</span><span style="font-size:9px;color:#6B7A8D;">Ordonnances</span></button>
    <button onclick="goToScreen(67)" style="display:flex;flex-direction:column;align-items:center;gap:3px;background:none;border:none;cursor:pointer;padding:4px;"><span style="font-size:18px;">👥</span><span style="font-size:9px;color:#6B7A8D;">Patients</span></button>
    <button onclick="goToScreen(71)" style="display:flex;flex-direction:column;align-items:center;gap:3px;background:none;border:none;cursor:pointer;padding:4px;"><span style="font-size:18px;">🩺</span><span style="font-size:9px;color:#6B7A8D;">Profil</span></button>
  </div>
</div>

<!-- ========================================
     SCREEN 62 — NOUVELLE ORDONNANCE NUMÉRIQUE
======================================== -->
<div class="screen" id="screen65" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:linear-gradient(135deg,#0D3B2E,#1A6B50);padding:54px 20px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;">
      <button onclick="goToScreen(64)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:17px;font-weight:700;color:#fff;">📝 Nouvelle Ordonnance</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;">
    <!-- Patient selection -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:12px;font-weight:700;color:#6B7A8D;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:10px;">Patient</div>
      <div style="display:flex;align-items:center;gap:10px;padding:10px;background:#F4F9FC;border-radius:10px;cursor:pointer;" onclick="showModal('patient-select-modal')">
        <div style="width:36px;height:36px;background:#E8F7EE;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;">👤</div>
        <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:#1A2332;">Moussa Koné</div><div style="font-size:11px;color:#6B7A8D;">Né le 15/03/1985 · Gr. A+</div></div>
        <span style="color:#6B7A8D;font-size:16px;">▾</span>
      </div>
    </div>
    <!-- Médicaments -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <div style="font-size:12px;font-weight:700;color:#6B7A8D;text-transform:uppercase;letter-spacing:0.5px;">Médicaments</div>
        <button onclick="showModal('med-select-modal')" style="background:#E8F7EE;border:none;border-radius:8px;padding:4px 10px;font-size:11px;font-weight:700;color:#27AE60;cursor:pointer;font-family:'DM Sans',sans-serif;">+ Ajouter</button>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="background:#F4F9FC;border-radius:10px;padding:10px 12px;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px;">
            <div style="font-size:13px;font-weight:700;color:#1A2332;">Amoxicilline 500mg</div>
            <button onclick="showModal('confirm-modal')" style="background:none;border:none;color:#E74C3C;font-size:14px;cursor:pointer;">✕</button>
          </div>
          <div style="font-size:11px;color:#6B7A8D;">1 cp × 3/jour · 7 jours · Après repas</div>
        </div>
        <div style="background:#F4F9FC;border-radius:10px;padding:10px 12px;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px;">
            <div style="font-size:13px;font-weight:700;color:#1A2332;">Metformine 850mg</div>
            <button onclick="showModal('confirm-modal')" style="background:none;border:none;color:#E74C3C;font-size:14px;cursor:pointer;">✕</button>
          </div>
          <div style="font-size:11px;color:#6B7A8D;">1 cp × 2/jour · 30 jours · Pendant repas</div>
        </div>
      </div>
    </div>
    <!-- Pharmacie -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:12px;font-weight:700;color:#6B7A8D;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:10px;">Envoyer vers la pharmacie</div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        <div onclick="showToast('Pharmacie centrale sélectionnée')" style="display:flex;align-items:center;gap:10px;padding:10px;border:2px solid #27AE60;border-radius:10px;cursor:pointer;background:#E8F7EE;">
          <span style="font-size:16px;">⚕️</span>
          <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:#1A2332;">Pharmacie Centrale - Cocody</div><div style="font-size:11px;color:#6B7A8D;">0.8 km · Stock disponible ✓</div></div>
          <div style="width:18px;height:18px;background:#27AE60;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;color:#fff;">✓</div>
        </div>
        <div onclick="showToast('✓ Choix transmis au patient')" style="display:flex;align-items:center;gap:10px;padding:10px;border:1.5px solid #E2ECF2;border-radius:10px;cursor:pointer;">
          <span style="font-size:16px;">🔓</span>
          <div style="font-size:12px;color:#6B7A8D;">Laisser le patient choisir sa pharmacie</div>
        </div>
      </div>
    </div>
    <!-- Signature & envoi -->
    <button onclick="goToScreen(66)" style="width:100%;padding:16px;background:linear-gradient(135deg,#27AE60,#2ecc71);color:#fff;border:none;border-radius:14px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 8px 24px rgba(39,174,96,0.35);">🔏 Signer et envoyer l'ordonnance</button>
    <div style="background:#E8F4F8;border-radius:12px;padding:10px 14px;display:flex;gap:8px;align-items:center;">
      <span style="font-size:14px;">🔐</span>
      <span style="font-size:11px;color:#1A6B8A;">Un QR code anti-fraude unique sera généré automatiquement</span>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 63 — SUIVI ORDONNANCES
======================================== -->
<div class="screen" id="screen66" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:linear-gradient(135deg,#0D3B2E,#1A6B50);padding:54px 20px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
      <button onclick="goToScreen(64)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:17px;font-weight:700;color:#fff;">📋 Mes Ordonnances</div>
    </div>
    <div style="display:flex;gap:6px;">
      <div style="background:rgba(255,255,255,0.12);border-radius:8px;padding:6px 12px;font-size:11px;font-weight:700;color:#fff;">Toutes (8)</div>
      <div style="background:#27AE60;border-radius:8px;padding:6px 12px;font-size:11px;font-weight:700;color:#fff;">En attente (3)</div>
      <div style="background:rgba(255,255,255,0.12);border-radius:8px;padding:6px 12px;font-size:11px;font-weight:700;color:#fff;">Livrées (5)</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;">
    <!-- Ordonnance card -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
        <div style="display:flex;gap:10px;align-items:center;">
          <div style="width:40px;height:40px;background:#E8F4F8;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;">👤</div>
          <div><div style="font-size:14px;font-weight:700;color:#1A2332;">Yao Kouamé</div><div style="font-size:11px;color:#6B7A8D;">Émise le 08/04/2026</div></div>
        </div>
        <div style="background:#E8F4F8;border-radius:8px;padding:4px 10px;font-size:11px;font-weight:700;color:#1A6B8A;">En attente</div>
      </div>
      <div style="background:#F4F9FC;border-radius:8px;padding:8px 12px;margin-bottom:10px;font-size:12px;color:#6B7A8D;">Losartan 50mg · Aspégic 100mg · Atorvastatine 20mg</div>
      <div style="display:flex;gap:6px;">
        <button onclick="showModal('qr-modal')" style="flex:1;padding:8px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">🔲 QR Code</button>
        <button onclick="goToScreen(30)" style="flex:1;padding:8px;background:#FEF9EE;color:#F39C12;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📍 Pharmacie</button>
        <button onclick="goToScreen(11)" style="flex:1;padding:8px;background:#F4F9FC;color:#6B7A8D;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">💬 Msg</button>
      </div>
    </div>
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
        <div style="display:flex;gap:10px;align-items:center;">
          <div style="width:40px;height:40px;background:#FEF0EE;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;">👤</div>
          <div><div style="font-size:14px;font-weight:700;color:#1A2332;">Aïcha Diallo</div><div style="font-size:11px;color:#6B7A8D;">Émise le 07/04/2026</div></div>
        </div>
        <div style="background:#FEF9EE;border-radius:8px;padding:4px 10px;font-size:11px;font-weight:700;color:#F39C12;">En cours</div>
      </div>
      <div style="background:#F4F9FC;border-radius:8px;padding:8px 12px;margin-bottom:10px;font-size:12px;color:#6B7A8D;">Paracétamol 1g · Ibuprofène 400mg</div>
      <div style="display:flex;gap:6px;">
        <button onclick="showModal('qr-modal')" style="flex:1;padding:8px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">🔲 QR Code</button>
        <button onclick="goToScreen(14)" style="flex:1;padding:8px;background:#E8F7EE;color:#27AE60;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">🛵 Suivi</button>
        <button onclick="goToScreen(11)" style="flex:1;padding:8px;background:#F4F9FC;color:#6B7A8D;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">💬 Msg</button>
      </div>
    </div>
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
        <div style="display:flex;gap:10px;align-items:center;">
          <div style="width:40px;height:40px;background:#E8F7EE;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;">👤</div>
          <div><div style="font-size:14px;font-weight:700;color:#1A2332;">Moussa Koné</div><div style="font-size:11px;color:#6B7A8D;">Émise le 05/04/2026</div></div>
        </div>
        <div style="background:#E8F7EE;border-radius:8px;padding:4px 10px;font-size:11px;font-weight:700;color:#27AE60;">Livrée ✓</div>
      </div>
      <div style="background:#F4F9FC;border-radius:8px;padding:8px 12px;margin-bottom:10px;font-size:12px;color:#6B7A8D;">Amoxicilline 500mg · Metformine 850mg</div>
      <div style="background:#E8F7EE;border-radius:8px;padding:8px 12px;font-size:11px;color:#27AE60;font-weight:600;">✓ Confirmée délivrée le 05/04/2026 à 18h34</div>
    </div>
    <button onclick="goToScreen(65)" style="width:100%;padding:14px;background:linear-gradient(135deg,#27AE60,#2ecc71);color:#fff;border:none;border-radius:14px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 4px 14px rgba(39,174,96,0.3);">+ Nouvelle ordonnance</button>
  </div>
</div>

<!-- ========================================
     SCREEN 64 — DOSSIERS PATIENTS
======================================== -->
<div class="screen" id="screen67" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:linear-gradient(135deg,#0D3B2E,#1A6B50);padding:54px 20px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
      <button onclick="goToScreen(64)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:17px;font-weight:700;color:#fff;">👥 Dossiers Patients</div>
    </div>
    <div style="background:rgba(255,255,255,0.1);border-radius:10px;display:flex;align-items:center;gap:8px;padding:10px 14px;">
      <span style="font-size:14px;color:rgba(255,255,255,0.6);">🔍</span>
      <input placeholder="Rechercher un patient..." style="flex:1;background:none;border:none;color:#fff;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;" />
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:8px;">
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="background:#FEF9EE;border:1px solid rgba(243,156,18,0.3);border-radius:10px;padding:10px 12px;margin-bottom:12px;font-size:11px;color:#F39C12;font-weight:600;">🔒 Accès aux dossiers uniquement avec consentement patient explicite</div>
    </div>
    <div onclick="showToast('Dossier Moussa Koné — Consentement validé')" style="background:#fff;border-radius:14px;padding:14px;display:flex;gap:12px;align-items:center;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="width:44px;height:44px;background:linear-gradient(135deg,#1A6B8A,#2196B3);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;color:#fff;">M</div>
      <div style="flex:1;">
        <div style="font-size:14px;font-weight:700;color:#1A2332;">Moussa Koné</div>
        <div style="font-size:11px;color:#6B7A8D;">38 ans · H · A+ · 3 consultations</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;">
        <div style="background:#E8F7EE;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;color:#27AE60;">Actif</div>
        <span style="color:#6B7A8D;font-size:12px;">→</span>
      </div>
    </div>
    <div onclick="showToast('Dossier Aïcha Diallo — Consentement validé')" style="background:#fff;border-radius:14px;padding:14px;display:flex;gap:12px;align-items:center;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="width:44px;height:44px;background:linear-gradient(135deg,#E74C3C,#e67e22);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;color:#fff;">A</div>
      <div style="flex:1;">
        <div style="font-size:14px;font-weight:700;color:#1A2332;">Aïcha Diallo</div>
        <div style="font-size:11px;color:#6B7A8D;">29 ans · F · O+ · 1 consultation</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;">
        <div style="background:#FEF9EE;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;color:#F39C12;">En suivi</div>
        <span style="color:#6B7A8D;font-size:12px;">→</span>
      </div>
    </div>
    <div onclick="showModal('consent-modal')" style="background:#fff;border-radius:14px;padding:14px;display:flex;gap:12px;align-items:center;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="width:44px;height:44px;background:linear-gradient(135deg,#27AE60,#2ecc71);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;color:#fff;">Y</div>
      <div style="flex:1;">
        <div style="font-size:14px;font-weight:700;color:#1A2332;">Yao Kouamé</div>
        <div style="font-size:11px;color:#6B7A8D;">52 ans · H · B+ · Cardiopath.</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;">
        <div style="background:#E8F4F8;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;color:#1A6B8A;">Actif</div>
        <span style="color:#6B7A8D;font-size:12px;">→</span>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 65 — MESSAGERIE MÉDECIN
======================================== -->
<div class="screen" id="screen68" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:linear-gradient(135deg,#0D3B2E,#1A6B50);padding:54px 20px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;">
      <button onclick="goToScreen(64)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:17px;font-weight:700;color:#fff;">💬 Messagerie sécurisée</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;">
    <!-- Pharmacien tab -->
    <div style="background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="padding:10px 14px;background:#E8F4F8;font-size:11px;font-weight:700;color:#1A6B8A;letter-spacing:0.5px;">⚕️ PHARMACIENS</div>
      <div onclick="goToScreen(16)" style="display:flex;align-items:center;gap:10px;padding:12px 14px;border-bottom:1px solid #F4F9FC;cursor:pointer;">
        <div style="width:40px;height:40px;background:#E8F4F8;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;">👩‍⚕️</div>
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:700;color:#1A2332;">Dr. Sophie Lefebvre</div>
          <div style="font-size:11px;color:#6B7A8D;">Stock Amoxicilline confirmé ✓</div>
        </div>
        <div style="text-align:right;"><div style="font-size:10px;color:#6B7A8D;">09:14</div><div style="width:18px;height:18px;background:#27AE60;border-radius:50%;font-size:10px;font-weight:700;color:#fff;display:flex;align-items:center;justify-content:center;margin-left:auto;margin-top:2px;">2</div></div>
      </div>
      <div onclick="showToast('Chat Pharmacie du Plateau...')" style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;">
        <div style="width:40px;height:40px;background:#F4F9FC;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;">🏥</div>
        <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:#1A2332;">Pharmacie du Plateau</div><div style="font-size:11px;color:#6B7A8D;">Disponible pour ordonnance</div></div>
        <div style="font-size:10px;color:#6B7A8D;">Hier</div>
      </div>
    </div>
    <!-- Patients -->
    <div style="background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="padding:10px 14px;background:#E8F7EE;font-size:11px;font-weight:700;color:#27AE60;letter-spacing:0.5px;">👥 PATIENTS</div>
      <div onclick="goToScreen(57)" style="display:flex;align-items:center;gap:10px;padding:12px 14px;border-bottom:1px solid #F4F9FC;cursor:pointer;">
        <div style="width:40px;height:40px;background:linear-gradient(135deg,#1A6B8A,#2196B3);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;">M</div>
        <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:#1A2332;">Moussa Koné</div><div style="font-size:11px;color:#6B7A8D;">Médicament bien reçu, merci</div></div>
        <div style="font-size:10px;color:#6B7A8D;">10:22</div>
      </div>
      <div onclick="goToScreen(68)" style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;">
        <div style="width:40px;height:40px;background:linear-gradient(135deg,#27AE60,#2ecc71);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;">Y</div>
        <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:#1A2332;">Yao Kouamé</div><div style="font-size:11px;color:#6B7A8D;">Ordonnance reçue, merci docteur</div></div>
        <div style="font-size:10px;color:#6B7A8D;">Hier</div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 66 — PHARMACIES & STOCK
======================================== -->
<div class="screen" id="screen69" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:linear-gradient(135deg,#0D3B2E,#1A6B50);padding:54px 20px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
      <button onclick="goToScreen(64)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:17px;font-weight:700;color:#fff;">🗺 Pharmacies & Disponibilité</div>
    </div>
    <div style="background:rgba(255,255,255,0.1);border-radius:10px;display:flex;align-items:center;gap:8px;padding:10px 14px;">
      <span style="font-size:14px;color:rgba(255,255,255,0.6);">🔍</span>
      <input placeholder="Médicament à vérifier..." style="flex:1;background:none;border:none;color:#fff;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;" value="Amoxicilline 500mg" />
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;">
    <!-- Map miniature -->
    <div style="background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);height:140px;position:relative;">
      <div style="background:linear-gradient(145deg,#b8d8e8,#7fb5cc);height:100%;display:flex;align-items:center;justify-content:center;position:relative;">
        <svg width="350" height="140" style="position:absolute;top:0;left:0;">
          <circle cx="175" cy="70" r="12" fill="#0D3B2E" stroke="#fff" stroke-width="2"/>
          <text x="175" y="75" text-anchor="middle" font-size="10" fill="#fff">🩺</text>
          <circle cx="90" cy="45" r="10" fill="#27AE60" stroke="#fff" stroke-width="2"/>
          <text x="90" y="50" text-anchor="middle" font-size="9" fill="#fff">⚕️</text>
          <circle cx="260" cy="90" r="10" fill="#27AE60" stroke="#fff" stroke-width="2"/>
          <text x="260" y="95" text-anchor="middle" font-size="9" fill="#fff">⚕️</text>
          <circle cx="130" cy="105" r="8" fill="#E74C3C" stroke="#fff" stroke-width="2"/>
          <text x="130" y="110" text-anchor="middle" font-size="8" fill="#fff">⚕️</text>
          <line x1="175" y1="70" x2="90" y2="45" stroke="rgba(39,174,96,0.5)" stroke-width="1.5" stroke-dasharray="4,3"/>
          <line x1="175" y1="70" x2="260" y2="90" stroke="rgba(39,174,96,0.5)" stroke-width="1.5" stroke-dasharray="4,3"/>
        </svg>
        <div style="position:absolute;top:8px;left:8px;background:rgba(255,255,255,0.95);border-radius:8px;padding:5px 10px;font-size:10px;font-weight:700;color:#1A2332;">📍 Votre position</div>
      </div>
    </div>
    <!-- Pharmacies list -->
    <div onclick="goToScreen(30)" style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);border-left:4px solid #27AE60;cursor:pointer;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
        <div><div style="font-size:14px;font-weight:700;color:#1A2332;">Pharmacie Centrale – Cocody</div><div style="font-size:11px;color:#6B7A8D;">0.8 km · Ouverte jusqu'à 22h</div></div>
        <div style="background:#E8F7EE;border-radius:8px;padding:3px 10px;font-size:11px;font-weight:700;color:#27AE60;">En stock ✓</div>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;">
        <div style="background:#E8F7EE;border-radius:6px;padding:3px 8px;font-size:10px;font-weight:700;color:#27AE60;">Amoxicilline 500mg ✓</div>
        <div style="background:#E8F7EE;border-radius:6px;padding:3px 8px;font-size:10px;font-weight:700;color:#27AE60;">Metformine 850mg ✓</div>
      </div>
      <div style="display:flex;gap:6px;margin-top:10px;">
        <button onclick="goToScreen(65)" style="flex:1;padding:8px;background:#27AE60;color:#fff;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📝 Envoyer ordonnance</button>
        <button onclick="showModal('call-modal')" style="flex:1;padding:8px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📞 Contacter</button>
      </div>
    </div>
    <div onclick="goToScreen(30)" style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);border-left:4px solid #27AE60;cursor:pointer;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
        <div><div style="font-size:14px;font-weight:700;color:#1A2332;">Pharmacie du Plateau</div><div style="font-size:11px;color:#6B7A8D;">2.1 km · Ouverte jusqu'à 20h</div></div>
        <div style="background:#E8F7EE;border-radius:8px;padding:3px 10px;font-size:11px;font-weight:700;color:#27AE60;">En stock ✓</div>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;">
        <div style="background:#E8F7EE;border-radius:6px;padding:3px 8px;font-size:10px;font-weight:700;color:#27AE60;">Amoxicilline 500mg ✓</div>
        <div style="background:#FEF0EE;border-radius:6px;padding:3px 8px;font-size:10px;font-weight:700;color:#E74C3C;">Metformine 850mg ✗</div>
      </div>
    </div>
    <div onclick="goToScreen(30)" style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);border-left:4px solid #E74C3C;cursor:pointer;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;">
        <div><div style="font-size:14px;font-weight:700;color:#1A2332;">Pharmacie Marcory</div><div style="font-size:11px;color:#6B7A8D;">3.5 km · Fermée</div></div>
        <div style="background:#FEF0EE;border-radius:8px;padding:3px 10px;font-size:11px;font-weight:700;color:#E74C3C;">Rupture stock</div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 67 — TABLEAU DE BORD MÉDECIN (stats)
======================================== -->
<div class="screen" id="screen70" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:linear-gradient(135deg,#0D3B2E,#1A6B50);padding:54px 20px 20px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
      <button onclick="goToScreen(64)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:17px;font-weight:700;color:#fff;">📊 Statistiques d'activité</div>
    </div>
    <div style="display:flex;gap:8px;">
      <div style="background:rgba(255,255,255,0.12);border-radius:8px;padding:6px 12px;font-size:11px;font-weight:700;color:#fff;">Semaine</div>
      <div style="background:#27AE60;border-radius:8px;padding:6px 12px;font-size:11px;font-weight:700;color:#fff;">Mois</div>
      <div style="background:rgba(255,255,255,0.12);border-radius:8px;padding:6px 12px;font-size:11px;font-weight:700;color:#fff;">Année</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;">
    <!-- Stats grid -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
      <div style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <div style="font-size:28px;font-weight:800;font-family:'Plus Jakarta Sans',sans-serif;color:#1A6B8A;">48</div>
        <div style="font-size:12px;color:#6B7A8D;">Prescriptions ce mois</div>
        <div style="font-size:10px;color:#27AE60;margin-top:4px;">↑ +12% vs mois dernier</div>
      </div>
      <div style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <div style="font-size:28px;font-weight:800;font-family:'Plus Jakarta Sans',sans-serif;color:#27AE60;">42</div>
        <div style="font-size:12px;color:#6B7A8D;">Ordonnances livrées</div>
        <div style="font-size:10px;color:#27AE60;margin-top:4px;">Taux: 87.5%</div>
      </div>
      <div style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <div style="font-size:28px;font-weight:800;font-family:'Plus Jakarta Sans',sans-serif;color:#F39C12;">3</div>
        <div style="font-size:12px;color:#6B7A8D;">En attente validation</div>
        <div style="font-size:10px;color:#F39C12;margin-top:4px;">Action requise</div>
      </div>
      <div style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <div style="font-size:28px;font-weight:800;font-family:'Plus Jakarta Sans',sans-serif;color:#1A2332;">12</div>
        <div style="font-size:12px;color:#6B7A8D;">Patients suivis</div>
        <div style="font-size:10px;color:#1A6B8A;margin-top:4px;">+2 nouveaux</div>
      </div>
    </div>
    <!-- Médicaments les plus prescrits -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;margin-bottom:12px;">Médicaments les plus prescrits</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="font-size:12px;color:#1A2332;width:140px;">Amoxicilline 500mg</div>
          <div style="flex:1;height:8px;background:#F4F9FC;border-radius:50px;overflow:hidden;"><div style="width:85%;height:100%;background:#1A6B8A;border-radius:50px;"></div></div>
          <div style="font-size:11px;font-weight:700;color:#1A6B8A;">18×</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="font-size:12px;color:#1A2332;width:140px;">Metformine 850mg</div>
          <div style="flex:1;height:8px;background:#F4F9FC;border-radius:50px;overflow:hidden;"><div style="width:60%;height:100%;background:#27AE60;border-radius:50px;"></div></div>
          <div style="font-size:11px;font-weight:700;color:#27AE60;">12×</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="font-size:12px;color:#1A2332;width:140px;">Losartan 50mg</div>
          <div style="flex:1;height:8px;background:#F4F9FC;border-radius:50px;overflow:hidden;"><div style="width:40%;height:100%;background:#F39C12;border-radius:50px;"></div></div>
          <div style="font-size:11px;font-weight:700;color:#F39C12;">8×</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 68 — PROFIL MÉDECIN
======================================== -->
<div class="screen" id="screen71" data-device="mobile">
  <div style="background:linear-gradient(135deg,#0D3B2E,#1A6B50);padding:54px 20px 24px;flex-shrink:0;text-align:center;">
    <button onclick="goToScreen(64)" style="position:absolute;top:54px;left:20px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
    <div style="width:80px;height:80px;background:linear-gradient(135deg,#27AE60,#2ecc71);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:36px;margin:0 auto 12px;border:3px solid rgba(255,255,255,0.2);">🩺</div>
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#fff;">Dr. Konan Yao</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.7);margin-top:4px;">Cardiologue · CHUSA Cocody</div>
    <div style="display:flex;justify-content:center;gap:8px;margin-top:12px;">
      <div style="background:rgba(74,222,128,0.2);border:1px solid rgba(74,222,128,0.3);border-radius:50px;padding:4px 14px;font-size:11px;font-weight:700;color:#4ADE80;">● Agréé</div>
      <div style="background:rgba(255,255,255,0.1);border-radius:50px;padding:4px 14px;font-size:11px;color:rgba(255,255,255,0.7);">N° agrément CI #1847</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;background:#F4F9FC;display:flex;flex-direction:column;gap:12px;">
    <!-- Infos professionnelles -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:13px;font-weight:700;color:#1A2332;margin-bottom:10px;">👤 Informations professionnelles</div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        <div style="display:flex;justify-content:space-between;"><span style="font-size:12px;color:#6B7A8D;">Spécialité</span><span style="font-size:12px;font-weight:600;color:#1A2332;">Cardiologie</span></div>
        <div style="display:flex;justify-content:space-between;"><span style="font-size:12px;color:#6B7A8D;">Établissement</span><span style="font-size:12px;font-weight:600;color:#1A2332;">CHUSA Cocody</span></div>
        <div style="display:flex;justify-content:space-between;"><span style="font-size:12px;color:#6B7A8D;">Type</span><span style="font-size:12px;font-weight:600;color:#1A2332;">Clinique publique</span></div>
        <div style="display:flex;justify-content:space-between;"><span style="font-size:12px;color:#6B7A8D;">Email professionnel</span><span style="font-size:12px;font-weight:600;color:#1A6B8A;"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="0e6a7c206561606f604e6d667b7d6f206d67">[email&#160;protected]</a></span></div>
        <div style="display:flex;justify-content:space-between;"><span style="font-size:12px;color:#6B7A8D;">Validation compte</span><span style="background:#E8F7EE;border-radius:6px;padding:1px 8px;font-size:11px;font-weight:700;color:#27AE60;">Autorité médicale ✓</span></div>
      </div>
    </div>
    <!-- Signature électronique -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:13px;font-weight:700;color:#1A2332;margin-bottom:10px;">🔏 Signature électronique</div>
      <div style="background:#E8F4F8;border-radius:10px;padding:12px;display:flex;align-items:center;gap:10px;">
        <div style="width:40px;height:40px;background:#1A6B8A;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">🔐</div>
        <div><div style="font-size:12px;font-weight:700;color:#1A2332;">Certificat actif</div><div style="font-size:11px;color:#6B7A8D;">Valide jusqu'au 31/12/2026 · Clé 2048-bit</div></div>
      </div>
    </div>
    <!-- Actions -->
    <div style="background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div onclick="goToScreen(70)" style="padding:14px 16px;border-bottom:1px solid #F4F9FC;display:flex;justify-content:space-between;cursor:pointer;"><span style="font-size:13px;font-weight:600;color:#1A2332;">📊 Mes statistiques</span><span style="color:#6B7A8D;">→</span></div>
      <div onclick="showToast('Paramètres compte...')" style="padding:14px 16px;border-bottom:1px solid #F4F9FC;display:flex;justify-content:space-between;cursor:pointer;"><span style="font-size:13px;font-weight:600;color:#1A2332;">⚙️ Paramètres</span><span style="color:#6B7A8D;">→</span></div>
      <div onclick="showToast('Journal d\'accès...')" style="padding:14px 16px;border-bottom:1px solid #F4F9FC;display:flex;justify-content:space-between;cursor:pointer;"><span style="font-size:13px;font-weight:600;color:#1A2332;">📋 Journal d'accès</span><span style="color:#6B7A8D;">→</span></div>
      <div onclick="goToScreen(49)" style="padding:14px 16px;display:flex;justify-content:space-between;cursor:pointer;"><span style="font-size:13px;font-weight:600;color:#1A2332;">❓ Aide & Support</span><span style="color:#6B7A8D;">→</span></div>
    </div>
    <button onclick="goToScreen(62)" style="width:100%;padding:14px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">Se déconnecter</button>
  </div>
</div>



<!-- ========================================
     SCREEN 69 — CHATBOT IA ILERABOT
======================================== -->
<div class="screen" id="screen74" data-device="mobile" style="background:#F4F9FC;display:flex;flex-direction:column;position:relative;">

<!-- BOTTOM SHEET FILTRES -->
<div id="doc-filter-overlay" onclick="closeDocFilters()" style="display:none;position:absolute;inset:0;background:rgba(0,0,0,0.45);z-index:200;opacity:0;transition:opacity 0.32s;"></div>
<div id="doc-filter-sheet" style="display:none;position:absolute;bottom:0;left:0;right:0;background:#fff;border-radius:24px 24px 0 0;z-index:201;padding:0 0 32px;max-height:85%;overflow-y:auto;transform:translateY(100%);transition:transform 0.32s cubic-bezier(0.16,1,0.3,1);">
  <div style="width:36px;height:4px;background:#E2ECF2;border-radius:2px;margin:12px auto 20px;"></div>
  <div style="display:flex;justify-content:space-between;align-items:center;padding:0 20px 16px;">
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:800;color:#1A2332;">Filtres</div>
    <button onclick="resetDocFilters()" style="background:none;border:none;font-size:13px;color:#E74C3C;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Réinitialiser</button>
  </div>

  <!-- Disponibilité -->
  <div style="padding:0 20px 18px;border-bottom:1px solid #F4F9FC;">
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;margin-bottom:10px;">🕐 Disponibilité</div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;">
      <div class="df-chip" onclick="toggleDocChip(this)" data-active="1" style="background:#E8F4F8;color:#1A6B8A;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #1A6B8A;">🟢 Disponible maintenant</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">📅 Prendre un RDV</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">🌙 Garde de nuit</div>
    </div>
  </div>

  <!-- Type de consultation -->
  <div style="padding:16px 20px 18px;border-bottom:1px solid #F4F9FC;">
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;margin-bottom:10px;">💬 Type de consultation</div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;">
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">📹 Vidéo</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">💬 Chat</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">🏥 En présentiel</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">🏠 Visite à domicile</div>
    </div>
  </div>

  <!-- Spécialité -->
  <div style="padding:16px 20px 18px;border-bottom:1px solid #F4F9FC;">
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;margin-bottom:10px;">🩺 Spécialité</div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;">
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">🩺 Généraliste</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">❤️ Cardiologie</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">👶 Pédiatrie</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">🧠 Neurologie</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">🦷 Dentiste</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">👁️ Ophtalmologie</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">🩻 Radiologie</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">🧪 Diabétologie</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">🌸 Gynécologie</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">💆 Psychiatrie</div>
    </div>
  </div>

  <!-- Pays -->
  <div style="padding:16px 20px 18px;border-bottom:1px solid #F4F9FC;">
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;margin-bottom:10px;">🌍 Pays</div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;">
      <div class="df-chip" onclick="toggleDocChip(this)" data-active="1" style="background:#E8F4F8;color:#1A6B8A;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #1A6B8A;">🇨🇮 Côte d'Ivoire</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">🇸🇳 Sénégal</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">🇲🇱 Mali</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">🇬🇭 Ghana</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">🇧🇫 Burkina Faso</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">🇧🇯 Bénin</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">🇨🇲 Cameroun</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">🇹🇬 Togo</div>
    </div>
  </div>

  <!-- Ville -->
  <div style="padding:16px 20px 18px;border-bottom:1px solid #F4F9FC;">
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;margin-bottom:10px;">🏙️ Ville</div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;">
      <div class="df-chip" onclick="toggleDocChip(this)" data-active="1" style="background:#E8F4F8;color:#1A6B8A;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #1A6B8A;">📍 Abidjan</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">Dakar</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">Bamako</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">Accra</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">Ouagadougou</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">Cotonou</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">Yaoundé</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">Douala</div>
    </div>
  </div>

  <!-- Langue -->
  <div style="padding:16px 20px 18px;border-bottom:1px solid #F4F9FC;">
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;margin-bottom:10px;">🗣️ Langue de consultation</div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;">
      <div class="df-chip" onclick="toggleDocChip(this)" data-active="1" style="background:#E8F4F8;color:#1A6B8A;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #1A6B8A;">Français</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">English</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">Dioula</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">Wolof</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">Haoussa</div>
    </div>
  </div>

  <!-- Tarif -->
  <div style="padding:16px 20px 24px;">
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;margin-bottom:10px;">💰 Tarif de consultation</div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;">
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">Gratuit</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">< 5 000 F CFA</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">5 000 – 15 000 F</div>
      <div class="df-chip" onclick="toggleDocChip(this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid #E2ECF2;">> 15 000 F CFA</div>
    </div>
  </div>

  <!-- Bouton Appliquer -->
  <div style="padding:0 20px;position:sticky;bottom:0;background:#fff;padding-top:12px;">
    <button onclick="applyDocFilters()" style="width:100%;padding:14px;background:linear-gradient(135deg,#1A6B8A,#2196B3);color:#fff;border:none;border-radius:14px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 4px 12px rgba(26,107,138,0.3);">Appliquer les filtres</button>
  </div>
</div>

  <!-- HEADER -->
  <div style="background:linear-gradient(135deg,#1A6B8A,#0F3F54);padding:52px 16px 14px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
      <button onclick="goToScreen(10)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:36px;height:36px;color:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;">←</button>
      <div style="flex:1;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:17px;font-weight:800;color:#fff;">Consulter un médecin</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.65);margin-top:1px;">🟢 12 médecins disponibles maintenant</div>
      </div>
    </div>
    <!-- Barre de recherche + bouton filtres -->
    <div style="display:flex;gap:8px;margin-bottom:12px;">
      <div style="flex:1;background:rgba(255,255,255,0.15);border-radius:12px;display:flex;align-items:center;gap:8px;padding:10px 14px;border:1px solid rgba(255,255,255,0.2);">
        <span style="font-size:15px;">🔍</span>
        <input placeholder="Nom, spécialité…" style="background:none;border:none;outline:none;color:#fff;font-size:13px;font-family:'DM Sans',sans-serif;flex:1;" onclick="showToast('Recherche active')"/>
      </div>
      <button onclick="openDocFilters()" style="background:rgba(255,255,255,0.2);border:1.5px solid rgba(255,255,255,0.35);border-radius:12px;padding:0 14px;color:#fff;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;display:flex;align-items:center;gap:6px;white-space:nowrap;flex-shrink:0;">
        ⚙️ Filtres <span id="doc-filter-count" style="background:#fff;color:#1A6B8A;border-radius:50%;width:18px;height:18px;display:none;align-items:center;justify-content:center;font-size:10px;font-weight:800;">0</span>
      </button>
    </div>
    <!-- Chips rapides -->
    <div style="display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding-bottom:2px;">
      <div id="docfil-all" class="doc-quick-chip" onclick="docFilter('all',this)" style="flex-shrink:0;background:#fff;color:#1A6B8A;border-radius:50px;padding:6px 14px;font-size:11px;font-weight:700;cursor:pointer;white-space:nowrap;">Tous</div>
      <div class="doc-quick-chip" onclick="docFilter('dispo',this)" style="flex-shrink:0;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.9);border-radius:50px;padding:6px 14px;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;border:1px solid rgba(255,255,255,0.2);">🟢 Disponible</div>
      <div class="doc-quick-chip" onclick="docFilter('video',this)" style="flex-shrink:0;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.9);border-radius:50px;padding:6px 14px;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;border:1px solid rgba(255,255,255,0.2);">📹 Vidéo</div>
      <div class="doc-quick-chip" onclick="docFilter('general',this)" style="flex-shrink:0;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.9);border-radius:50px;padding:6px 14px;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;border:1px solid rgba(255,255,255,0.2);">🩺 Généraliste</div>
      <div class="doc-quick-chip" onclick="docFilter('cardio',this)" style="flex-shrink:0;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.9);border-radius:50px;padding:6px 14px;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;border:1px solid rgba(255,255,255,0.2);">❤️ Cardio</div>
      <div class="doc-quick-chip" onclick="docFilter('pedo',this)" style="flex-shrink:0;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.9);border-radius:50px;padding:6px 14px;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;border:1px solid rgba(255,255,255,0.2);">👶 Pédiatrie</div>
    </div>
  </div>

  <!-- LISTE DES MÉDECINS -->
  <div style="flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px;">

    <!-- Médecin 1 — Disponible, généraliste -->
    <div onclick="goToScreen(16)" style="background:#fff;border-radius:16px;padding:14px;box-shadow:0 2px 10px rgba(0,0,0,0.06);cursor:pointer;display:flex;align-items:center;gap:12px;border:1.5px solid transparent;" onmouseover="this.style.borderColor='#1A6B8A'" onmouseout="this.style.borderColor='transparent'">
      <div style="position:relative;flex-shrink:0;">
        <div style="width:52px;height:52px;background:linear-gradient(135deg,#1A6B8A,#0F3F54);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;">👩‍⚕️</div>
        <div style="position:absolute;bottom:0;right:0;width:14px;height:14px;background:#27AE60;border-radius:50%;border:2px solid #fff;"></div>
      </div>
      <div style="flex:1;min-width:0;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;">
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">Dr. Sophie Lefebvre</div>
          <div style="font-size:11px;font-weight:700;color:#27AE60;background:#E8F7EE;padding:2px 8px;border-radius:20px;white-space:nowrap;margin-left:6px;">Dispo.</div>
        </div>
        <div style="font-size:11px;color:#6B7A8D;margin-top:1px;">Médecin généraliste · 8 ans exp.</div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:6px;">
          <div style="display:flex;align-items:center;gap:3px;"><span style="color:#F39C12;font-size:11px;">★</span><span style="font-size:11px;font-weight:700;color:#1A2332;">4.9</span><span style="font-size:10px;color:#6B7A8D;">(203)</span></div>
          <span style="width:3px;height:3px;background:#D1D5DB;border-radius:50%;"></span>
          <div style="font-size:10px;color:#1A6B8A;font-weight:600;background:#E8F4F8;padding:2px 6px;border-radius:10px;">📹 Vidéo</div>
          <div style="font-size:10px;color:#1A6B8A;font-weight:600;background:#E8F4F8;padding:2px 6px;border-radius:10px;">💬 Chat</div>
        </div>
      </div>
      <div style="font-size:20px;color:#C5D3DC;flex-shrink:0;">›</div>
    </div>

    <!-- Médecin 2 — Disponible, cardiologue -->
    <div onclick="goToScreen(16)" style="background:#fff;border-radius:16px;padding:14px;box-shadow:0 2px 10px rgba(0,0,0,0.06);cursor:pointer;display:flex;align-items:center;gap:12px;border:1.5px solid transparent;" onmouseover="this.style.borderColor='#1A6B8A'" onmouseout="this.style.borderColor='transparent'">
      <div style="position:relative;flex-shrink:0;">
        <div style="width:52px;height:52px;background:linear-gradient(135deg,#E74C3C,#c0392b);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;">👨‍⚕️</div>
        <div style="position:absolute;bottom:0;right:0;width:14px;height:14px;background:#27AE60;border-radius:50%;border:2px solid #fff;"></div>
      </div>
      <div style="flex:1;min-width:0;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;">
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">Dr. Konan Yao</div>
          <div style="font-size:11px;font-weight:700;color:#27AE60;background:#E8F7EE;padding:2px 8px;border-radius:20px;white-space:nowrap;margin-left:6px;">Dispo.</div>
        </div>
        <div style="font-size:11px;color:#6B7A8D;margin-top:1px;">Cardiologue · 15 ans exp.</div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:6px;">
          <div style="display:flex;align-items:center;gap:3px;"><span style="color:#F39C12;font-size:11px;">★</span><span style="font-size:11px;font-weight:700;color:#1A2332;">4.8</span><span style="font-size:10px;color:#6B7A8D;">(178)</span></div>
          <span style="width:3px;height:3px;background:#D1D5DB;border-radius:50%;"></span>
          <div style="font-size:10px;color:#1A6B8A;font-weight:600;background:#E8F4F8;padding:2px 6px;border-radius:10px;">📹 Vidéo</div>
        </div>
      </div>
      <div style="font-size:20px;color:#C5D3DC;flex-shrink:0;">›</div>
    </div>

    <!-- Médecin 3 — En consultation, généraliste -->
    <div onclick="showToast('Dr. Diallo est en consultation · Prochain dispo dans 20 min')" style="background:#fff;border-radius:16px;padding:14px;box-shadow:0 2px 10px rgba(0,0,0,0.06);cursor:pointer;display:flex;align-items:center;gap:12px;opacity:0.8;">
      <div style="position:relative;flex-shrink:0;">
        <div style="width:52px;height:52px;background:linear-gradient(135deg,#F39C12,#e67e22);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;">👨‍⚕️</div>
        <div style="position:absolute;bottom:0;right:0;width:14px;height:14px;background:#F39C12;border-radius:50%;border:2px solid #fff;"></div>
      </div>
      <div style="flex:1;min-width:0;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;">
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">Dr. Moussa Diallo</div>
          <div style="font-size:11px;font-weight:700;color:#F39C12;background:#FEF9EE;padding:2px 8px;border-radius:20px;white-space:nowrap;margin-left:6px;">En consultation</div>
        </div>
        <div style="font-size:11px;color:#6B7A8D;margin-top:1px;">Médecin généraliste · 12 ans exp.</div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:6px;">
          <div style="display:flex;align-items:center;gap:3px;"><span style="color:#F39C12;font-size:11px;">★</span><span style="font-size:11px;font-weight:700;color:#1A2332;">4.7</span><span style="font-size:10px;color:#6B7A8D;">(95)</span></div>
          <span style="font-size:10px;color:#F39C12;font-weight:600;">⏱ Dispo dans ~20 min</span>
        </div>
      </div>
      <div style="font-size:20px;color:#C5D3DC;flex-shrink:0;">›</div>
    </div>

    <!-- Médecin 4 — Disponible, pédiatre -->
    <div onclick="goToScreen(16)" style="background:#fff;border-radius:16px;padding:14px;box-shadow:0 2px 10px rgba(0,0,0,0.06);cursor:pointer;display:flex;align-items:center;gap:12px;border:1.5px solid transparent;" onmouseover="this.style.borderColor='#1A6B8A'" onmouseout="this.style.borderColor='transparent'">
      <div style="position:relative;flex-shrink:0;">
        <div style="width:52px;height:52px;background:linear-gradient(135deg,#27AE60,#2ecc71);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;">👩‍⚕️</div>
        <div style="position:absolute;bottom:0;right:0;width:14px;height:14px;background:#27AE60;border-radius:50%;border:2px solid #fff;"></div>
      </div>
      <div style="flex:1;min-width:0;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;">
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">Dr. Aminata Traoré</div>
          <div style="font-size:11px;font-weight:700;color:#27AE60;background:#E8F7EE;padding:2px 8px;border-radius:20px;white-space:nowrap;margin-left:6px;">Dispo.</div>
        </div>
        <div style="font-size:11px;color:#6B7A8D;margin-top:1px;">Pédiatre · 10 ans exp.</div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:6px;">
          <div style="display:flex;align-items:center;gap:3px;"><span style="color:#F39C12;font-size:11px;">★</span><span style="font-size:11px;font-weight:700;color:#1A2332;">4.9</span><span style="font-size:10px;color:#6B7A8D;">(312)</span></div>
          <span style="width:3px;height:3px;background:#D1D5DB;border-radius:50%;"></span>
          <div style="font-size:10px;color:#1A6B8A;font-weight:600;background:#E8F4F8;padding:2px 6px;border-radius:10px;">📹 Vidéo</div>
          <div style="font-size:10px;color:#1A6B8A;font-weight:600;background:#E8F4F8;padding:2px 6px;border-radius:10px;">💬 Chat</div>
        </div>
      </div>
      <div style="font-size:20px;color:#C5D3DC;flex-shrink:0;">›</div>
    </div>

    <!-- Médecin 5 — Hors ligne -->
    <div onclick="showToast('Dr. Touré reprend les consultations demain à 08h00')" style="background:#fff;border-radius:16px;padding:14px;box-shadow:0 2px 10px rgba(0,0,0,0.06);cursor:pointer;display:flex;align-items:center;gap:12px;opacity:0.6;">
      <div style="position:relative;flex-shrink:0;">
        <div style="width:52px;height:52px;background:#E2ECF2;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;">👨‍⚕️</div>
        <div style="position:absolute;bottom:0;right:0;width:14px;height:14px;background:#9CA3AF;border-radius:50%;border:2px solid #fff;"></div>
      </div>
      <div style="flex:1;min-width:0;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;">
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">Dr. Ibrahim Touré</div>
          <div style="font-size:11px;font-weight:700;color:#9CA3AF;background:#F4F9FC;padding:2px 8px;border-radius:20px;white-space:nowrap;margin-left:6px;">Hors ligne</div>
        </div>
        <div style="font-size:11px;color:#6B7A8D;margin-top:1px;">Diabétologue · 20 ans exp.</div>
        <div style="display:flex;align-items:center;gap:6px;margin-top:6px;">
          <div style="display:flex;align-items:center;gap:3px;"><span style="color:#F39C12;font-size:11px;">★</span><span style="font-size:11px;font-weight:700;color:#1A2332;">4.6</span><span style="font-size:10px;color:#6B7A8D;">(67)</span></div>
          <span style="font-size:10px;color:#9CA3AF;font-weight:600;">🔔 Prendre un RDV</span>
        </div>
      </div>
      <div style="font-size:20px;color:#C5D3DC;flex-shrink:0;">›</div>
    </div>

    <div style="height:10px;"></div>
  </div>
</div>

<script>
/* ── SCREEN 74 — Filtres médecins ── */
window.openDocFilters = function() {
  var overlay = document.getElementById('doc-filter-overlay');
  var sheet   = document.getElementById('doc-filter-sheet');
  if (!overlay || !sheet) return;
  overlay.style.display = 'block';
  sheet.style.display   = 'block';
  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      overlay.style.opacity       = '1';
      sheet.style.transform       = 'translateY(0)';
    });
  });
};

window.closeDocFilters = function() {
  var overlay = document.getElementById('doc-filter-overlay');
  var sheet   = document.getElementById('doc-filter-sheet');
  if (!overlay || !sheet) return;
  overlay.style.opacity   = '0';
  sheet.style.transform   = 'translateY(100%)';
  setTimeout(function() {
    overlay.style.display = 'none';
    sheet.style.display   = 'none';
  }, 340);
};

window.toggleDocChip = function(el) {
  var active = el.getAttribute('data-active') === '1';
  if (active) {
    el.style.background  = '#F4F9FC';
    el.style.color       = '#6B7A8D';
    el.style.borderColor = '#E2ECF2';
    el.setAttribute('data-active', '0');
  } else {
    el.style.background  = '#E8F4F8';
    el.style.color       = '#1A6B8A';
    el.style.borderColor = '#1A6B8A';
    el.setAttribute('data-active', '1');
  }
};

window.resetDocFilters = function() {
  document.querySelectorAll('.df-chip').forEach(function(chip) {
    chip.style.background  = '#F4F9FC';
    chip.style.color       = '#6B7A8D';
    chip.style.borderColor = '#E2ECF2';
    chip.setAttribute('data-active', '0');
  });
  var badge = document.getElementById('doc-filter-count');
  if (badge) { badge.style.display = 'none'; badge.textContent = '0'; }
  showToast('Filtres réinitialisés');
};

window.applyDocFilters = function() {
  var active = document.querySelectorAll('.df-chip[data-active="1"]');
  var count  = active.length;
  var badge  = document.getElementById('doc-filter-count');
  if (badge) {
    if (count > 0) { badge.textContent = count; badge.style.display = 'flex'; }
    else           { badge.style.display = 'none'; }
  }
  closeDocFilters();
  if (count > 0) {
    var labels = Array.from(active).map(function(c) { return c.textContent.trim(); });
    showToast('✅ ' + count + ' filtre(s) : ' + labels.slice(0, 2).join(', ') + (labels.length > 2 ? '…' : ''));
  } else {
    showToast('Aucun filtre sélectionné — affichage de tous les médecins');
  }
};

window.docFilter = function(type, el) {
  document.querySelectorAll('#screen74 .doc-quick-chip').forEach(function(btn) {
    btn.style.background  = 'rgba(255,255,255,0.15)';
    btn.style.color       = 'rgba(255,255,255,0.9)';
    btn.style.borderColor = 'rgba(255,255,255,0.2)';
  });
  el.style.background  = '#fff';
  el.style.color       = '#1A6B8A';
  el.style.borderColor = '#fff';
  var labels = { all:'tous les médecins', dispo:'médecins disponibles', video:'téléconsultation vidéo', general:'généralistes', cardio:'cardiologues', pedo:'pédiatres' };
  if (type !== 'all') showToast('🔍 Filtre : ' + (labels[type] || type));
};
</script>

<!-- ========================================
     SCREEN 75 — ÉQUIPE PHARMACIENS
======================================== -->
<div class="web-screen" id="wscreen57">
  <div style="height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(160deg,#0D3B2E 0%,#1A6B50 60%,#27AE60 100%);position:relative;overflow:hidden;">
    <div style="position:absolute;width:600px;height:600px;top:-150px;right:-100px;border-radius:50%;background:radial-gradient(circle,rgba(39,174,96,0.12) 0%,transparent 70%);"></div>
    <div style="position:absolute;width:400px;height:400px;bottom:-100px;left:-80px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,0.05) 0%,transparent 70%);"></div>
    <div style="background:rgba(255,255,255,0.06);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.12);border-radius:28px;padding:48px;width:480px;position:relative;z-index:1;">
      <div style="text-align:center;margin-bottom:36px;">
        <div style="width:72px;height:72px;background:linear-gradient(135deg,#27AE60,#2ecc71);border-radius:20px;display:flex;align-items:center;justify-content:center;font-size:34px;margin:0 auto 16px;box-shadow:0 16px 40px rgba(39,174,96,0.4);">🩺</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:800;color:#fff;margin-bottom:6px;">Espace Médecin</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.6);">Accès réservé aux praticiens agréés — Authentification renforcée</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:16px;margin-bottom:24px;">
        <div>
          <label style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:0.5px;text-transform:uppercase;display:block;margin-bottom:8px;">Identifiant (Email ou N° agrément)</label>
          <input type="email" placeholder="dr.konan@chusa.ci" style="width:100%;padding:14px 18px;background:rgba(255,255,255,0.08);border:1.5px solid rgba(255,255,255,0.2);border-radius:12px;color:#fff;font-size:14px;font-family:'DM Sans',sans-serif;outline:none;box-sizing:border-box;" />
        </div>
        <div>
          <label style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:0.5px;text-transform:uppercase;display:block;margin-bottom:8px;">Mot de passe</label>
          <input type="password" placeholder="••••••••••" style="width:100%;padding:14px 18px;background:rgba(255,255,255,0.08);border:1.5px solid rgba(255,255,255,0.2);border-radius:12px;color:#fff;font-size:14px;font-family:'DM Sans',sans-serif;outline:none;box-sizing:border-box;" />
        </div>
        <button onclick="goToWebScreen(58)" style="width:100%;padding:16px;background:linear-gradient(135deg,#27AE60,#2ecc71);color:#fff;border:none;border-radius:12px;font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;cursor:pointer;box-shadow:0 8px 24px rgba(39,174,96,0.4);">Connexion sécurisée + OTP →</button>
      </div>
      <div style="background:rgba(39,174,96,0.15);border:1px solid rgba(39,174,96,0.3);border-radius:12px;padding:14px 16px;display:flex;gap:12px;align-items:flex-start;">
        <span style="font-size:18px;flex-shrink:0;">🔒</span>
        <div style="font-size:12px;color:rgba(255,255,255,0.7);line-height:1.6;">Authentification multi-facteurs obligatoire. Votre compte doit être validé par l'autorité médicale compétente avant toute utilisation. Toutes les actions sont journalisées.</div>
      </div>
    </div>
  </div>
</div>

<!-- ====================================================
     WEB SCREEN 55 — MÉDECIN DASHBOARD (web)
===================================================== -->
<div class="web-screen" id="wscreen58">
  <div style="height:100%;display:flex;flex-direction:column;overflow:hidden;">
    <!-- Top bar -->
    <div style="background:#fff;padding:0 32px;border-bottom:1.5px solid #E2ECF2;display:flex;align-items:center;justify-content:space-between;height:60px;flex-shrink:0;">
      <div style="display:flex;align-items:center;gap:16px;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:800;color:#0D3B2E;">🩺 ILERA AFRICA <span style="color:#27AE60;">Médecin</span></div>
        <div style="height:20px;width:1px;background:#E2ECF2;"></div>
        <nav style="display:flex;gap:4px;">
          <a onclick="goToWebScreen(58)" style="padding:6px 14px;background:#E8F7EE;color:#27AE60;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">🏠 Dashboard</a>
          <a onclick="goToWebScreen(59)" style="padding:6px 14px;color:#6B7A8D;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">📝 Ordonnances</a>
          <a onclick="goToWebScreen(60)" style="padding:6px 14px;color:#6B7A8D;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">👥 Patients</a>
          <a onclick="goToWebScreen(61)" style="padding:6px 14px;color:#6B7A8D;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">🗺 Pharmacies</a>
          <a onclick="goToWebScreen(62)" style="padding:6px 14px;color:#6B7A8D;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">💬 Messagerie</a>
        </nav>
      </div>
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="width:36px;height:36px;background:linear-gradient(135deg,#27AE60,#2ecc71);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;cursor:pointer;" onclick="goToWebScreen(63)">🩺</div>
        <div>
          <div style="font-size:13px;font-weight:700;color:#1A2332;">Dr. Konan Yao</div>
          <div style="font-size:11px;color:#6B7A8D;">Cardiologue · Agrément #1847</div>
        </div>
      </div>
    </div>
    <!-- Content -->
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;padding:28px 32px;display:flex;flex-direction:column;gap:20px;">
      <!-- Welcome + action -->
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div>
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#1A2332;">Bonjour Dr. Konan 👋</div>
          <div style="font-size:14px;color:#6B7A8D;margin-top:4px;">Mercredi 9 avril 2026 · 3 ordonnances en attente de validation pharmacie</div>
        </div>
        <button onclick="goToWebScreen(59)" style="padding:12px 24px;background:linear-gradient(135deg,#27AE60,#2ecc71);color:#fff;border:none;border-radius:12px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 6px 20px rgba(39,174,96,0.35);">+ Nouvelle ordonnance</button>
      </div>
      <!-- KPI row -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;">
        <div style="background:#fff;border-radius:16px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          <div style="font-size:32px;font-weight:800;font-family:'Plus Jakarta Sans',sans-serif;color:#1A6B8A;">48</div>
          <div style="font-size:13px;color:#6B7A8D;margin-top:4px;">Prescriptions ce mois</div>
          <div style="font-size:11px;color:#27AE60;margin-top:6px;">↑ +12% vs mois dernier</div>
        </div>
        <div style="background:#fff;border-radius:16px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          <div style="font-size:32px;font-weight:800;font-family:'Plus Jakarta Sans',sans-serif;color:#27AE60;">42</div>
          <div style="font-size:13px;color:#6B7A8D;margin-top:4px;">Ordonnances livrées</div>
          <div style="font-size:11px;color:#27AE60;margin-top:6px;">Taux de livraison: 87.5%</div>
        </div>
        <div style="background:#fff;border-radius:16px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.06);border-left:3px solid #F39C12;">
          <div style="font-size:32px;font-weight:800;font-family:'Plus Jakarta Sans',sans-serif;color:#F39C12;">3</div>
          <div style="font-size:13px;color:#6B7A8D;margin-top:4px;">En attente pharmacie</div>
          <div style="font-size:11px;color:#F39C12;margin-top:6px;">⚠ Action requise</div>
        </div>
        <div style="background:#fff;border-radius:16px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          <div style="font-size:32px;font-weight:800;font-family:'Plus Jakarta Sans',sans-serif;color:#1A2332;">12</div>
          <div style="font-size:13px;color:#6B7A8D;margin-top:4px;">Patients actifs</div>
          <div style="font-size:11px;color:#1A6B8A;margin-top:6px;">+2 nouveaux ce mois</div>
        </div>
      </div>
      <!-- Two-column content -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
        <!-- Recent ordonnances -->
        <div style="background:#fff;border-radius:16px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">Ordonnances récentes</div>
            <button onclick="goToWebScreen(59)" style="background:#E8F7EE;border:none;border-radius:8px;padding:6px 12px;font-size:12px;font-weight:700;color:#27AE60;cursor:pointer;font-family:'DM Sans',sans-serif;">Voir tout →</button>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;">
            <div onclick="goToWebScreen(59)" style="display:flex;align-items:center;gap:12px;padding:12px;background:#F4F9FC;border-radius:10px;cursor:pointer;">
              <div style="width:40px;height:40px;background:#E8F4F8;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;">👤</div>
              <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:#1A2332;">Yao Kouamé</div><div style="font-size:11px;color:#6B7A8D;">Losartan 50mg · Aspégic 100mg · Atorvastatine</div></div>
              <div style="background:#E8F4F8;border-radius:8px;padding:4px 10px;font-size:11px;font-weight:700;color:#1A6B8A;">En attente</div>
            </div>
            <div onclick="goToWebScreen(59)" style="display:flex;align-items:center;gap:12px;padding:12px;background:#F4F9FC;border-radius:10px;cursor:pointer;">
              <div style="width:40px;height:40px;background:#FEF0EE;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;">👤</div>
              <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:#1A2332;">Aïcha Diallo</div><div style="font-size:11px;color:#6B7A8D;">Paracétamol 1g · Ibuprofène 400mg</div></div>
              <div style="background:#FEF9EE;border-radius:8px;padding:4px 10px;font-size:11px;font-weight:700;color:#F39C12;">En cours</div>
            </div>
            <div onclick="goToWebScreen(59)" style="display:flex;align-items:center;gap:12px;padding:12px;background:#F4F9FC;border-radius:10px;cursor:pointer;">
              <div style="width:40px;height:40px;background:#E8F7EE;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;">👤</div>
              <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:#1A2332;">Moussa Koné</div><div style="font-size:11px;color:#6B7A8D;">Amoxicilline 500mg · Metformine 850mg</div></div>
              <div style="background:#E8F7EE;border-radius:8px;padding:4px 10px;font-size:11px;font-weight:700;color:#27AE60;">Livrée ✓</div>
            </div>
          </div>
        </div>
        <!-- Messagerie + pharmacies -->
        <div style="display:flex;flex-direction:column;gap:16px;">
          <div style="background:#fff;border-radius:16px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
            <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:#1A2332;margin-bottom:12px;">💬 Messagerie récente</div>
            <div onclick="goToWebScreen(62)" style="display:flex;align-items:center;gap:10px;padding:10px;background:#F4F9FC;border-radius:10px;cursor:pointer;margin-bottom:8px;">
              <div style="width:36px;height:36px;background:#E8F4F8;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;">👩‍⚕️</div>
              <div style="flex:1;"><div style="font-size:12px;font-weight:700;color:#1A2332;">Dr. Sophie Lefebvre</div><div style="font-size:11px;color:#6B7A8D;">Stock confirmé pour Amoxicilline ✓</div></div>
              <div style="width:18px;height:18px;background:#27AE60;border-radius:50%;font-size:10px;font-weight:700;color:#fff;display:flex;align-items:center;justify-content:center;">2</div>
            </div>
            <div onclick="goToWebScreen(62)" style="display:flex;align-items:center;gap:10px;padding:10px;background:#F4F9FC;border-radius:10px;cursor:pointer;">
              <div style="width:36px;height:36px;background:linear-gradient(135deg,#27AE60,#2ecc71);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:#fff;">M</div>
              <div style="flex:1;"><div style="font-size:12px;font-weight:700;color:#1A2332;">Moussa Koné (patient)</div><div style="font-size:11px;color:#6B7A8D;">Médicament bien reçu, merci</div></div>
              <div style="font-size:10px;color:#6B7A8D;">10:22</div>
            </div>
          </div>
          <div style="background:linear-gradient(135deg,#0D3B2E,#1A6B50);border-radius:16px;padding:20px;">
            <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:#fff;margin-bottom:12px;">🗺 Pharmacies à proximité</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div style="display:flex;justify-content:space-between;align-items:center;background:rgba(255,255,255,0.08);border-radius:10px;padding:10px 12px;">
                <div><div style="font-size:12px;font-weight:700;color:#fff;">Pharmacie Centrale – Cocody</div><div style="font-size:10px;color:rgba(255,255,255,0.6);">0.8 km</div></div>
                <div style="background:#E8F7EE;border-radius:6px;padding:3px 8px;font-size:10px;font-weight:700;color:#27AE60;">En stock ✓</div>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;background:rgba(255,255,255,0.08);border-radius:10px;padding:10px 12px;">
                <div><div style="font-size:12px;font-weight:700;color:#fff;">Pharmacie du Plateau</div><div style="font-size:10px;color:rgba(255,255,255,0.6);">2.1 km</div></div>
                <div style="background:#E8F7EE;border-radius:6px;padding:3px 8px;font-size:10px;font-weight:700;color:#27AE60;">En stock ✓</div>
              </div>
            </div>
            <button onclick="goToWebScreen(61)" style="width:100%;margin-top:12px;padding:10px;background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.2);color:#fff;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Voir toutes les pharmacies →</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ====================================================
     WEB SCREEN 56 — ORDONNANCES NUMÉRIQUES (web)
===================================================== -->
<div class="web-screen" id="wscreen59">
  <div style="height:100%;display:flex;flex-direction:column;overflow:hidden;">
    <div style="background:#fff;padding:14px 32px;border-bottom:1.5px solid #E2ECF2;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;">
      <div style="display:flex;align-items:center;gap:12px;">
        <a onclick="goToWebScreen(58)" style="font-size:13px;color:#27AE60;cursor:pointer;font-weight:700;font-family:'DM Sans',sans-serif;">← Dashboard</a>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">📋 Gestion des Ordonnances</div>
      </div>
      <button onclick="goToWebScreen(59)" style="padding:10px 22px;background:linear-gradient(135deg,#27AE60,#2ecc71);color:#fff;border:none;border-radius:10px;font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;cursor:pointer;box-shadow:0 4px 14px rgba(39,174,96,0.3);">+ Nouvelle ordonnance</button>
    </div>
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;padding:24px 32px;">
      <!-- Filters -->
      <div style="display:flex;gap:8px;margin-bottom:20px;">
        <div style="padding:8px 16px;background:#27AE60;color:#fff;border-radius:50px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Toutes (8)</div>
        <div onclick="filterOrders('pending')" style="padding:8px 16px;background:#fff;color:#F39C12;border:1.5px solid #F39C12;border-radius:50px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">En attente (3)</div>
        <div onclick="filterOrders('inprogress')" style="padding:8px 16px;background:#fff;color:#1A6B8A;border:1.5px solid #E2ECF2;border-radius:50px;font-size:12px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">En cours (2)</div>
        <div onclick="filterOrders('done')" style="padding:8px 16px;background:#fff;color:#6B7A8D;border:1.5px solid #E2ECF2;border-radius:50px;font-size:12px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">Livrées (3)</div>
      </div>
      <!-- Table -->
      <div style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <table style="width:100%;border-collapse:collapse;">
          <thead>
            <tr style="background:#F4F9FC;">
              <th style="padding:14px 20px;text-align:left;font-size:11px;font-weight:700;color:#6B7A8D;text-transform:uppercase;letter-spacing:0.5px;">Patient</th>
              <th style="padding:14px 20px;text-align:left;font-size:11px;font-weight:700;color:#6B7A8D;text-transform:uppercase;letter-spacing:0.5px;">Médicaments</th>
              <th style="padding:14px 20px;text-align:left;font-size:11px;font-weight:700;color:#6B7A8D;text-transform:uppercase;letter-spacing:0.5px;">Pharmacie</th>
              <th style="padding:14px 20px;text-align:left;font-size:11px;font-weight:700;color:#6B7A8D;text-transform:uppercase;letter-spacing:0.5px;">Date</th>
              <th style="padding:14px 20px;text-align:left;font-size:11px;font-weight:700;color:#6B7A8D;text-transform:uppercase;letter-spacing:0.5px;">Statut</th>
              <th style="padding:14px 20px;text-align:left;font-size:11px;font-weight:700;color:#6B7A8D;text-transform:uppercase;letter-spacing:0.5px;">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-top:1px solid #F4F9FC;">
              <td style="padding:14px 20px;"><div style="font-size:13px;font-weight:700;color:#1A2332;">Yao Kouamé</div><div style="font-size:11px;color:#6B7A8D;">52 ans · H · B+</div></td>
              <td style="padding:14px 20px;font-size:12px;color:#6B7A8D;">Losartan 50mg · Aspégic 100mg<br>Atorvastatine 20mg</td>
              <td style="padding:14px 20px;font-size:12px;color:#1A2332;">Pharmacie Centrale – Cocody</td>
              <td style="padding:14px 20px;font-size:12px;color:#6B7A8D;">08/04/2026</td>
              <td style="padding:14px 20px;"><span style="background:#E8F4F8;border-radius:8px;padding:4px 10px;font-size:11px;font-weight:700;color:#1A6B8A;">En attente</span></td>
              <td style="padding:14px 20px;display:flex;gap:6px;">
                <button onclick="showModal('qr-modal')" style="padding:6px 10px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">🔲 QR</button>
                <button onclick="showToast('Messagerie pharmacien...')" style="padding:6px 10px;background:#F4F9FC;color:#6B7A8D;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">💬</button>
              </td>
            </tr>
            <tr style="border-top:1px solid #F4F9FC;">
              <td style="padding:14px 20px;"><div style="font-size:13px;font-weight:700;color:#1A2332;">Aïcha Diallo</div><div style="font-size:11px;color:#6B7A8D;">29 ans · F · O+</div></td>
              <td style="padding:14px 20px;font-size:12px;color:#6B7A8D;">Paracétamol 1g · Ibuprofène 400mg</td>
              <td style="padding:14px 20px;font-size:12px;color:#1A2332;">Pharmacie du Plateau</td>
              <td style="padding:14px 20px;font-size:12px;color:#6B7A8D;">07/04/2026</td>
              <td style="padding:14px 20px;"><span style="background:#FEF9EE;border-radius:8px;padding:4px 10px;font-size:11px;font-weight:700;color:#F39C12;">En cours</span></td>
              <td style="padding:14px 20px;display:flex;gap:6px;">
                <button onclick="showToast('QR code...')" style="padding:6px 10px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">🔲 QR</button>
                <button onclick="goToScreen(14)" style="padding:6px 10px;background:#E8F7EE;color:#27AE60;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">🛵 Suivi</button>
              </td>
            </tr>
            <tr style="border-top:1px solid #F4F9FC;">
              <td style="padding:14px 20px;"><div style="font-size:13px;font-weight:700;color:#1A2332;">Moussa Koné</div><div style="font-size:11px;color:#6B7A8D;">38 ans · H · A+</div></td>
              <td style="padding:14px 20px;font-size:12px;color:#6B7A8D;">Amoxicilline 500mg · Metformine 850mg</td>
              <td style="padding:14px 20px;font-size:12px;color:#1A2332;">Pharmacie Centrale – Cocody</td>
              <td style="padding:14px 20px;font-size:12px;color:#6B7A8D;">05/04/2026</td>
              <td style="padding:14px 20px;"><span style="background:#E8F7EE;border-radius:8px;padding:4px 10px;font-size:11px;font-weight:700;color:#27AE60;">Livrée ✓</span></td>
              <td style="padding:14px 20px;"><span style="font-size:11px;color:#6B7A8D;">Délivrée le 05/04 à 18:34</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

<!-- ====================================================
     WEB SCREEN 57 — DOSSIERS PATIENTS (web)
===================================================== -->
<div class="web-screen" id="wscreen60">
  <div style="height:100%;display:flex;flex-direction:column;overflow:hidden;">
    <div style="background:#fff;padding:14px 32px;border-bottom:1.5px solid #E2ECF2;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;">
      <div style="display:flex;align-items:center;gap:12px;">
        <a onclick="goToWebScreen(58)" style="font-size:13px;color:#27AE60;cursor:pointer;font-weight:700;font-family:'DM Sans',sans-serif;">← Dashboard</a>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">👥 Dossiers Patients</div>
      </div>
      <div style="background:#FEF9EE;border:1px solid rgba(243,156,18,0.3);border-radius:10px;padding:10px 16px;display:flex;align-items:center;gap:8px;">
        <span style="font-size:14px;">🔒</span>
        <span style="font-size:12px;color:#F39C12;font-weight:600;">Accès soumis au consentement explicite du patient — toutes les consultations sont journalisées</span>
      </div>
    </div>
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;padding:24px 32px;">
      <!-- Search -->
      <div style="background:#fff;border-radius:12px;display:flex;align-items:center;gap:10px;padding:12px 18px;margin-bottom:20px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <span style="font-size:16px;color:#6B7A8D;">🔍</span>
        <input placeholder="Rechercher un patient par nom, date de naissance ou ID..." style="flex:1;border:none;background:none;font-size:14px;font-family:'DM Sans',sans-serif;color:#1A2332;outline:none;" />
      </div>
      <!-- Patient cards -->
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">
        <div onclick="goToScreen(67)" style="background:#fff;border-radius:16px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.06);cursor:pointer;border-top:4px solid #27AE60;">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
            <div style="width:48px;height:48px;background:linear-gradient(135deg,#1A6B8A,#2196B3);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:800;color:#fff;">M</div>
            <div><div style="font-size:15px;font-weight:700;color:#1A2332;">Moussa Koné</div><div style="font-size:11px;color:#6B7A8D;">38 ans · H · Groupe A+</div></div>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:14px;">
            <div style="display:flex;justify-content:space-between;font-size:12px;"><span style="color:#6B7A8D;">Dernière consultation</span><span style="font-weight:600;color:#1A2332;">05/04/2026</span></div>
            <div style="display:flex;justify-content:space-between;font-size:12px;"><span style="color:#6B7A8D;">Ordonnances actives</span><span style="font-weight:600;color:#1A2332;">2</span></div>
            <div style="display:flex;justify-content:space-between;font-size:12px;"><span style="color:#6B7A8D;">Consentement</span><span style="background:#E8F7EE;border-radius:5px;padding:1px 7px;font-size:10px;font-weight:700;color:#27AE60;">Validé ✓</span></div>
          </div>
          <div style="display:flex;gap:6px;">
            <button onclick="goToScreen(67)" style="flex:1;padding:8px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📋 Dossier</button>
            <button onclick="goToScreen(65)" style="flex:1;padding:8px;background:#E8F7EE;color:#27AE60;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📝 Prescrire</button>
          </div>
        </div>
        <div onclick="goToScreen(67)" style="background:#fff;border-radius:16px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.06);cursor:pointer;border-top:4px solid #F39C12;">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
            <div style="width:48px;height:48px;background:linear-gradient(135deg,#E74C3C,#e67e22);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:800;color:#fff;">A</div>
            <div><div style="font-size:15px;font-weight:700;color:#1A2332;">Aïcha Diallo</div><div style="font-size:11px;color:#6B7A8D;">29 ans · F · Groupe O+</div></div>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:14px;">
            <div style="display:flex;justify-content:space-between;font-size:12px;"><span style="color:#6B7A8D;">Dernière consultation</span><span style="font-weight:600;color:#1A2332;">07/04/2026</span></div>
            <div style="display:flex;justify-content:space-between;font-size:12px;"><span style="color:#6B7A8D;">Ordonnances actives</span><span style="font-weight:600;color:#1A2332;">1</span></div>
            <div style="display:flex;justify-content:space-between;font-size:12px;"><span style="color:#6B7A8D;">Consentement</span><span style="background:#E8F7EE;border-radius:5px;padding:1px 7px;font-size:10px;font-weight:700;color:#27AE60;">Validé ✓</span></div>
          </div>
          <div style="display:flex;gap:6px;">
            <button onclick="goToScreen(67)" style="flex:1;padding:8px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📋 Dossier</button>
            <button onclick="goToScreen(65)" style="flex:1;padding:8px;background:#E8F7EE;color:#27AE60;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📝 Prescrire</button>
          </div>
        </div>
        <div onclick="goToScreen(67)" style="background:#fff;border-radius:16px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.06);cursor:pointer;border-top:4px solid #1A6B8A;">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
            <div style="width:48px;height:48px;background:linear-gradient(135deg,#27AE60,#2ecc71);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:800;color:#fff;">Y</div>
            <div><div style="font-size:15px;font-weight:700;color:#1A2332;">Yao Kouamé</div><div style="font-size:11px;color:#6B7A8D;">52 ans · H · Groupe B+ · Cardiopath.</div></div>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:14px;">
            <div style="display:flex;justify-content:space-between;font-size:12px;"><span style="color:#6B7A8D;">Dernière consultation</span><span style="font-weight:600;color:#1A2332;">08/04/2026</span></div>
            <div style="display:flex;justify-content:space-between;font-size:12px;"><span style="color:#6B7A8D;">Ordonnances actives</span><span style="font-weight:600;color:#1A2332;">3</span></div>
            <div style="display:flex;justify-content:space-between;font-size:12px;"><span style="color:#6B7A8D;">Consentement</span><span style="background:#E8F7EE;border-radius:5px;padding:1px 7px;font-size:10px;font-weight:700;color:#27AE60;">Validé ✓</span></div>
          </div>
          <div style="display:flex;gap:6px;">
            <button onclick="goToScreen(67)" style="flex:1;padding:8px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📋 Dossier</button>
            <button onclick="goToScreen(65)" style="flex:1;padding:8px;background:#E8F7EE;color:#27AE60;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📝 Prescrire</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ====================================================
     WEB SCREEN 58 — PHARMACIES & STOCK (web)
===================================================== -->
<div class="web-screen" id="wscreen61">
  <div style="height:100%;display:flex;flex-direction:column;overflow:hidden;">
    <div style="background:#fff;padding:14px 32px;border-bottom:1.5px solid #E2ECF2;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;">
      <div style="display:flex;align-items:center;gap:12px;">
        <a onclick="goToWebScreen(58)" style="font-size:13px;color:#27AE60;cursor:pointer;font-weight:700;font-family:'DM Sans',sans-serif;">← Dashboard</a>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">🗺 Pharmacies & Disponibilité Stock</div>
      </div>
      <div style="background:#E8F4F8;border-radius:10px;display:flex;align-items:center;gap:8px;padding:10px 16px;">
        <span style="font-size:16px;">🔍</span>
        <input placeholder="Médicament à rechercher..." value="Amoxicilline 500mg" style="border:none;background:none;font-size:13px;font-family:'DM Sans',sans-serif;color:#1A2332;outline:none;width:220px;" />
        <button onclick="triggerSearch()" style="padding:6px 14px;background:#1A6B8A;color:#fff;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Rechercher</button>
      </div>
    </div>
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;padding:24px 32px;display:grid;grid-template-columns:1fr 1fr;gap:20px;">
      <!-- Map -->
      <div style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <div style="background:linear-gradient(145deg,#b8d8e8,#7fb5cc);height:340px;position:relative;">
          <svg width="100%" height="340" style="position:absolute;top:0;left:0;">
            <circle cx="50%" cy="50%" r="18" fill="#0D3B2E" stroke="#fff" stroke-width="3"/>
            <text x="50%" y="53%" text-anchor="middle" font-size="12" fill="#fff">🩺</text>
            <circle cx="30%" cy="35%" r="14" fill="#27AE60" stroke="#fff" stroke-width="2"/>
            <text x="30%" y="38%" text-anchor="middle" font-size="11" fill="#fff">⚕️</text>
            <circle cx="70%" cy="60%" r="14" fill="#27AE60" stroke="#fff" stroke-width="2"/>
            <text x="70%" y="63%" text-anchor="middle" font-size="11" fill="#fff">⚕️</text>
            <circle cx="40%" cy="75%" r="12" fill="#E74C3C" stroke="#fff" stroke-width="2"/>
            <text x="40%" y="78%" text-anchor="middle" font-size="10" fill="#fff">⚕️</text>
            <line x1="50%" y1="50%" x2="30%" y2="35%" stroke="rgba(39,174,96,0.6)" stroke-width="2" stroke-dasharray="5,3"/>
            <line x1="50%" y1="50%" x2="70%" y2="60%" stroke="rgba(39,174,96,0.6)" stroke-width="2" stroke-dasharray="5,3"/>
          </svg>
          <div style="position:absolute;top:12px;left:50%;transform:translateX(-50%);background:rgba(13,59,46,0.9);border-radius:50px;padding:6px 16px;font-size:12px;font-weight:700;color:#fff;">📍 Votre position — CHUSA Cocody</div>
        </div>
        <div style="padding:14px 16px;background:#fff;">
          <div style="display:flex;gap:12px;">
            <div style="display:flex;gap:6px;align-items:center;"><div style="width:10px;height:10px;background:#27AE60;border-radius:50%;"></div><span style="font-size:11px;color:#6B7A8D;">En stock</span></div>
            <div style="display:flex;gap:6px;align-items:center;"><div style="width:10px;height:10px;background:#E74C3C;border-radius:50%;"></div><span style="font-size:11px;color:#6B7A8D;">Rupture</span></div>
          </div>
        </div>
      </div>
      <!-- Pharmacy list -->
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.06);border-left:4px solid #27AE60;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
            <div><div style="font-size:15px;font-weight:700;color:#1A2332;">Pharmacie Centrale – Cocody</div><div style="font-size:12px;color:#6B7A8D;">0.8 km · Ouverte · 08h–22h</div></div>
            <div style="background:#E8F7EE;border-radius:8px;padding:4px 12px;font-size:12px;font-weight:700;color:#27AE60;">En stock ✓</div>
          </div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px;">
            <div style="background:#E8F7EE;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700;color:#27AE60;">Amoxicilline 500mg ✓</div>
            <div style="background:#E8F7EE;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700;color:#27AE60;">Metformine 850mg ✓</div>
            <div style="background:#E8F7EE;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700;color:#27AE60;">Losartan 50mg ✓</div>
          </div>
          <div style="display:flex;gap:8px;">
            <button onclick="goToWebScreen(59)" style="flex:1;padding:9px;background:linear-gradient(135deg,#27AE60,#2ecc71);color:#fff;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📝 Envoyer ordonnance</button>
            <button onclick="goToWebScreen(62)" style="flex:1;padding:9px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">💬 Contacter pharmacien</button>
          </div>
        </div>
        <div style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.06);border-left:4px solid #27AE60;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
            <div><div style="font-size:15px;font-weight:700;color:#1A2332;">Pharmacie du Plateau</div><div style="font-size:12px;color:#6B7A8D;">2.1 km · Ouverte · 08h–20h</div></div>
            <div style="background:#E8F7EE;border-radius:8px;padding:4px 12px;font-size:12px;font-weight:700;color:#27AE60;">Partiel</div>
          </div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px;">
            <div style="background:#E8F7EE;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700;color:#27AE60;">Amoxicilline 500mg ✓</div>
            <div style="background:#FEF0EE;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700;color:#E74C3C;">Metformine 850mg ✗</div>
          </div>
          <div style="display:flex;gap:8px;">
            <button onclick="goToScreen(65)" style="flex:1;padding:9px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📝 Envoyer ordonnance</button>
            <button onclick="goToWebScreen(62)" style="flex:1;padding:9px;background:#F4F9FC;color:#6B7A8D;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">💬 Contacter</button>
          </div>
        </div>
        <div style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.06);border-left:4px solid #E74C3C;opacity:0.7;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;">
            <div><div style="font-size:15px;font-weight:700;color:#1A2332;">Pharmacie Marcory</div><div style="font-size:12px;color:#6B7A8D;">3.5 km · Fermée</div></div>
            <div style="background:#FEF0EE;border-radius:8px;padding:4px 12px;font-size:12px;font-weight:700;color:#E74C3C;">Rupture stock</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ====================================================
     WEB SCREEN 59 — MESSAGERIE MÉDECIN (web)
===================================================== -->
<div class="web-screen" id="wscreen62">
  <div style="height:100%;display:flex;flex-direction:column;overflow:hidden;">
    <div style="background:#fff;padding:14px 32px;border-bottom:1.5px solid #E2ECF2;display:flex;align-items:center;gap:12px;flex-shrink:0;">
      <a onclick="goToWebScreen(58)" style="font-size:13px;color:#27AE60;cursor:pointer;font-weight:700;font-family:'DM Sans',sans-serif;">← Dashboard</a>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">💬 Messagerie sécurisée — Médecin</div>
    </div>
    <div style="flex:1;display:flex;overflow:hidden;">
      <!-- Sidebar conversations -->
      <div style="width:280px;border-right:1.5px solid #E2ECF2;display:flex;flex-direction:column;background:#fff;overflow-y:auto;flex-shrink:0;">
        <div style="padding:12px 16px;background:#E8F7EE;font-size:11px;font-weight:700;color:#27AE60;letter-spacing:0.5px;">⚕️ PHARMACIENS</div>
        <div onclick="goToWebScreen(62)" style="display:flex;align-items:center;gap:10px;padding:14px 16px;border-bottom:1px solid #F4F9FC;cursor:pointer;background:#F4F9FC;">
          <div style="width:40px;height:40px;background:#E8F4F8;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">👩‍⚕️</div>
          <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:#1A2332;">Dr. Sophie Lefebvre</div><div style="font-size:11px;color:#6B7A8D;">Stock confirmé ✓ — 09:14</div></div>
          <div style="width:18px;height:18px;background:#27AE60;border-radius:50%;font-size:10px;font-weight:700;color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;">2</div>
        </div>
        <div onclick="goToWebScreen(62)" style="display:flex;align-items:center;gap:10px;padding:14px 16px;border-bottom:1px solid #F4F9FC;cursor:pointer;">
          <div style="width:40px;height:40px;background:#F4F9FC;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">🏥</div>
          <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:#1A2332;">Pharmacie du Plateau</div><div style="font-size:11px;color:#6B7A8D;">Disponible — Hier</div></div>
        </div>
        <div style="padding:12px 16px;background:#E8F4F8;font-size:11px;font-weight:700;color:#1A6B8A;letter-spacing:0.5px;margin-top:8px;">👥 PATIENTS</div>
        <div onclick="goToScreen(57)" style="display:flex;align-items:center;gap:10px;padding:14px 16px;border-bottom:1px solid #F4F9FC;cursor:pointer;">
          <div style="width:40px;height:40px;background:linear-gradient(135deg,#1A6B8A,#2196B3);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0;">M</div>
          <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:#1A2332;">Moussa Koné</div><div style="font-size:11px;color:#6B7A8D;">Médicament reçu, merci — 10:22</div></div>
        </div>
        <div onclick="showToast('Chat Yao Kouamé')" style="display:flex;align-items:center;gap:10px;padding:14px 16px;cursor:pointer;">
          <div style="width:40px;height:40px;background:linear-gradient(135deg,#27AE60,#2ecc71);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0;">Y</div>
          <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:#1A2332;">Yao Kouamé</div><div style="font-size:11px;color:#6B7A8D;">Ordonnance reçue — Hier</div></div>
        </div>
      </div>
      <!-- Chat area -->
      <div style="flex:1;display:flex;flex-direction:column;background:#F4F9FC;">
        <!-- Chat header -->
        <div style="background:#fff;padding:14px 24px;border-bottom:1.5px solid #E2ECF2;display:flex;align-items:center;gap:12px;">
          <div style="width:42px;height:42px;background:#E8F4F8;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;">👩‍⚕️</div>
          <div>
            <div style="font-size:14px;font-weight:700;color:#1A2332;">Dr. Sophie Lefebvre — Pharmacie Centrale, Cocody</div>
            <div style="font-size:11px;color:#27AE60;">● En ligne</div>
          </div>
        </div>
        <!-- Messages -->
        <div style="flex:1;overflow-y:auto;padding:20px;display:flex;flex-direction:column;gap:12px;">
          <div style="text-align:center;font-size:11px;color:#6B7A8D;background:#fff;border-radius:20px;padding:5px 16px;align-self:center;box-shadow:0 1px 4px rgba(0,0,0,0.06);">Aujourd'hui 09:10</div>
          <div style="display:flex;gap:10px;align-items:flex-end;">
            <div style="width:32px;height:32px;background:#E8F4F8;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">👩‍⚕️</div>
            <div style="background:#fff;border-radius:14px 14px 14px 4px;padding:12px 16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);max-width:400px;">
              <div style="font-size:13px;color:#1A2332;">Bonjour Dr. Konan, j'ai bien reçu l'ordonnance de M. Yao Kouamé. Je confirme que le Losartan 50mg et l'Aspégic 100mg sont disponibles en stock. L'Atorvastatine 20mg est commandée, disponible dans 2h.</div>
              <div style="font-size:10px;color:#6B7A8D;margin-top:4px;">09:14</div>
            </div>
          </div>
          <div style="display:flex;gap:10px;align-items:flex-end;justify-content:flex-end;">
            <div style="background:linear-gradient(135deg,#0D3B2E,#27AE60);border-radius:14px 14px 4px 14px;padding:12px 16px;max-width:400px;">
              <div style="font-size:13px;color:#fff;">Merci Sophie. Parfait pour le Losartan et l'Aspégic. Pour l'Atorvastatine, le patient peut patienter, pas d'urgence. Pouvez-vous me confirmer dès que disponible ?</div>
              <div style="font-size:10px;color:rgba(255,255,255,0.7);margin-top:4px;">09:18 ✓✓</div>
            </div>
            <div style="width:32px;height:32px;background:linear-gradient(135deg,#27AE60,#2ecc71);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;color:#fff;font-weight:700;flex-shrink:0;">K</div>
          </div>
        </div>
        <!-- Input -->
        <div style="background:#fff;padding:16px 24px;border-top:1.5px solid #E2ECF2;display:flex;gap:10px;align-items:center;">
          <input type="text" placeholder="Message sécurisé..." style="flex:1;border:1.5px solid #E2ECF2;border-radius:50px;padding:11px 18px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;background:#F4F9FC;" />
          <button onclick="sendMessage()" style="width:42px;height:42px;background:linear-gradient(135deg,#27AE60,#2ecc71);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;">➤</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ====================================================
     WEB SCREEN 60 — PROFIL MÉDECIN (web)
===================================================== -->
<div class="web-screen" id="wscreen63">
  <div style="height:100%;display:flex;flex-direction:column;overflow:hidden;">
    <div style="background:#fff;padding:14px 32px;border-bottom:1.5px solid #E2ECF2;display:flex;align-items:center;gap:12px;flex-shrink:0;">
      <a onclick="goToWebScreen(58)" style="font-size:13px;color:#27AE60;cursor:pointer;font-weight:700;font-family:'DM Sans',sans-serif;">← Dashboard</a>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">🩺 Profil Médecin</div>
    </div>
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;padding:32px;">
      <div style="max-width:800px;margin:0 auto;display:flex;flex-direction:column;gap:20px;">
        <!-- Header card -->
        <div style="background:linear-gradient(135deg,#0D3B2E,#1A6B50);border-radius:20px;padding:32px;display:flex;align-items:center;gap:24px;">
          <div style="width:80px;height:80px;background:linear-gradient(135deg,#27AE60,#2ecc71);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:38px;border:3px solid rgba(255,255,255,0.2);flex-shrink:0;">🩺</div>
          <div style="flex:1;">
            <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;color:#fff;">Dr. Konan Yao</div>
            <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-top:4px;">Cardiologue · CHUSA Cocody · Agrément CI #1847</div>
            <div style="display:flex;gap:8px;margin-top:12px;">
              <span style="background:rgba(74,222,128,0.2);border:1px solid rgba(74,222,128,0.3);border-radius:50px;padding:5px 14px;font-size:12px;font-weight:700;color:#4ADE80;">● Compte agréé</span>
              <span style="background:rgba(255,255,255,0.1);border-radius:50px;padding:5px 14px;font-size:12px;color:rgba(255,255,255,0.7);">Clinique publique</span>
            </div>
          </div>
          <button onclick="showModal('edit-field-modal')" style="padding:10px 20px;background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.3);color:#fff;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Modifier ✏️</button>
        </div>
        <!-- Two columns -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
          <!-- Infos pro -->
          <div style="background:#fff;border-radius:16px;padding:22px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
            <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:#1A2332;margin-bottom:16px;">👤 Informations professionnelles</div>
            <div style="display:flex;flex-direction:column;gap:10px;">
              <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #F4F9FC;"><span style="font-size:13px;color:#6B7A8D;">Spécialité</span><span style="font-size:13px;font-weight:600;color:#1A2332;">Cardiologie</span></div>
              <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #F4F9FC;"><span style="font-size:13px;color:#6B7A8D;">Établissement</span><span style="font-size:13px;font-weight:600;color:#1A2332;">CHUSA Cocody</span></div>
              <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #F4F9FC;"><span style="font-size:13px;color:#6B7A8D;">Type</span><span style="font-size:13px;font-weight:600;color:#1A2332;">Clinique publique</span></div>
              <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #F4F9FC;"><span style="font-size:13px;color:#6B7A8D;">N° agrément</span><span style="font-size:13px;font-weight:600;color:#27AE60;">CI #1847 ✓</span></div>
              <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #F4F9FC;"><span style="font-size:13px;color:#6B7A8D;">Email professionnel</span><span style="font-size:13px;font-weight:600;color:#1A6B8A;"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="c2a6b0eca9adaca3ac82a1aab7b1a3eca1ab">[email&#160;protected]</a></span></div>
              <div style="display:flex;justify-content:space-between;padding:8px 0;"><span style="font-size:13px;color:#6B7A8D;">Validation autorité</span><span style="background:#E8F7EE;border-radius:6px;padding:2px 10px;font-size:12px;font-weight:700;color:#27AE60;">Validé le 01/01/2025</span></div>
            </div>
          </div>
          <!-- Sécurité -->
          <div style="display:flex;flex-direction:column;gap:16px;">
            <div style="background:#fff;border-radius:16px;padding:22px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
              <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:#1A2332;margin-bottom:14px;">🔏 Signature électronique</div>
              <div style="background:#E8F4F8;border-radius:12px;padding:14px;display:flex;align-items:center;gap:12px;">
                <div style="width:46px;height:46px;background:#1A6B8A;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;">🔐</div>
                <div><div style="font-size:13px;font-weight:700;color:#1A2332;">Certificat actif — RSA 2048-bit</div><div style="font-size:11px;color:#6B7A8D;margin-top:2px;">Valide jusqu'au 31/12/2026</div></div>
              </div>
            </div>
            <div style="background:#fff;border-radius:16px;padding:22px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
              <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:#1A2332;margin-bottom:12px;">📋 Journal d'accès</div>
              <div style="display:flex;flex-direction:column;gap:6px;">
                <div style="display:flex;justify-content:space-between;font-size:12px;padding:6px 8px;background:#F4F9FC;border-radius:6px;"><span style="color:#6B7A8D;">Dernière connexion</span><span style="font-weight:600;color:#1A2332;">09/04/2026 08:52</span></div>
                <div style="display:flex;justify-content:space-between;font-size:12px;padding:6px 8px;background:#F4F9FC;border-radius:6px;"><span style="color:#6B7A8D;">Ordonnances ce mois</span><span style="font-weight:600;color:#1A2332;">48</span></div>
                <div style="display:flex;justify-content:space-between;font-size:12px;padding:6px 8px;background:#F4F9FC;border-radius:6px;"><span style="color:#6B7A8D;">Dossiers consultés</span><span style="font-weight:600;color:#1A2332;">12 (avec consentement)</span></div>
              </div>
            </div>
          </div>
        </div>
        <button onclick="goToWebScreen(57)" style="padding:14px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">Se déconnecter</button>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     WEB SCREEN 61 — LIVREUR MANAGEMENT (ADMIN WEB)
======================================== -->

`;