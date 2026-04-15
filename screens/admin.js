window.FRAGMENTS = window.FRAGMENTS || {};
window.FRAGMENTS['admin'] = `
<div class="screen" id="screen27" data-device="mobile" style="background:linear-gradient(160deg,#1A2332 0%,#0F3F54 100%);">
  <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px 24px;">
    <div style="width:72px;height:72px;background:rgba(231,76,60,0.2);border-radius:24px;display:flex;align-items:center;justify-content:center;font-size:32px;margin-bottom:16px;border:2px solid rgba(231,76,60,0.3);">🛡️</div>
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;font-weight:800;color:#fff;text-align:center;margin-bottom:6px;">Espace Administrateur</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.55);text-align:center;margin-bottom:32px;">Accès hautement sécurisé · ILERA AFRICA</div>
    <div style="background:rgba(255,255,255,0.07);border-radius:20px;padding:24px;width:100%;border:1px solid rgba(255,255,255,0.1);display:flex;flex-direction:column;gap:14px;">
      <div>
        <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.5);margin-bottom:6px;letter-spacing:0.5px;">EMAIL</div>
        <input type="email" placeholder="admin@ilera.africa" style="width:100%;padding:12px 14px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:12px;color:#fff;font-size:14px;font-family:'DM Sans',sans-serif;outline:none;">
      </div>
      <div>
        <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.5);margin-bottom:6px;letter-spacing:0.5px;">MOT DE PASSE</div>
        <input type="password" placeholder="••••••••••••" style="width:100%;padding:12px 14px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:12px;color:#fff;font-size:14px;font-family:'DM Sans',sans-serif;outline:none;">
      </div>
      <div>
        <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.5);margin-bottom:6px;letter-spacing:0.5px;">GOOGLE AUTHENTICATOR</div>
        <div style="display:flex;gap:8px;justify-content:center;">
          <input maxlength="1" style="width:38px;height:42px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:10px;color:#fff;font-size:18px;font-weight:700;text-align:center;font-family:'DM Sans',sans-serif;outline:none;">
          <input maxlength="1" style="width:38px;height:42px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:10px;color:#fff;font-size:18px;font-weight:700;text-align:center;font-family:'DM Sans',sans-serif;outline:none;">
          <input maxlength="1" style="width:38px;height:42px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:10px;color:#fff;font-size:18px;font-weight:700;text-align:center;font-family:'DM Sans',sans-serif;outline:none;">
          <input maxlength="1" style="width:38px;height:42px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:10px;color:#fff;font-size:18px;font-weight:700;text-align:center;font-family:'DM Sans',sans-serif;outline:none;">
          <input maxlength="1" style="width:38px;height:42px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:10px;color:#fff;font-size:18px;font-weight:700;text-align:center;font-family:'DM Sans',sans-serif;outline:none;">
          <input maxlength="1" style="width:38px;height:42px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:10px;color:#fff;font-size:18px;font-weight:700;text-align:center;font-family:'DM Sans',sans-serif;outline:none;">
        </div>
      </div>
      <button onclick="goToScreen(28)" style="padding:14px;background:linear-gradient(135deg,#E74C3C,#c0392b);color:#fff;border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;">🛡️ Accéder à l'administration</button>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 25 — ADMIN DASHBOARD (MOBILE)
======================================== -->
<div class="screen" id="screen28" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:#1A2332;padding:52px 16px 16px;display:flex;align-items:center;justify-content:space-between;">
    <button onclick="openDrawer('admin')" style="width:36px;height:36px;background:rgba(255,255,255,0.1);border:none;border-radius:10px;cursor:pointer;font-size:18px;color:#fff;display:flex;align-items:center;justify-content:center;">☰</button>
    <div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:#fff;">Administration</div><div style="font-size:11px;color:rgba(255,255,255,0.5);">14 octobre 2024</div></div>
    <div style="display:flex;gap:8px;align-items:center;">
      <div style="width:32px;height:32px;background:rgba(231,76,60,0.2);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;">🔔</div>
      <div style="width:36px;height:36px;background:rgba(255,255,255,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;">🛡️</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;">
    <!-- KPI Grid -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
      <div style="background:linear-gradient(135deg,#1A6B8A,#2196B3);border-radius:16px;padding:16px;">
        <div style="font-size:11px;color:rgba(255,255,255,0.7);margin-bottom:4px;">👥 Utilisateurs</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#fff;">2 847</div>
      </div>
      <div style="background:linear-gradient(135deg,#27AE60,#2ecc71);border-radius:16px;padding:16px;">
        <div style="font-size:11px;color:rgba(255,255,255,0.7);margin-bottom:4px;">📦 Commandes/jour</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#fff;">156</div>
      </div>
      <div style="background:linear-gradient(135deg,#E74C3C,#c0392b);border-radius:16px;padding:16px;">
        <div style="font-size:11px;color:rgba(255,255,255,0.7);margin-bottom:4px;">⚠️ Ruptures stock</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#fff;">8</div>
      </div>
      <div style="background:linear-gradient(135deg,#F39C12,#e67e22);border-radius:16px;padding:16px;">
        <div style="font-size:11px;color:rgba(255,255,255,0.7);margin-bottom:4px;">💰 Revenus</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:800;color:#fff;">4.2M FCFA</div>
      </div>
    </div>
    <!-- Alerts -->
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">⚠️ Alertes</div>
    <div style="background:#FEF0EE;border-radius:14px;padding:14px;border-left:3px solid #E74C3C;">
      <div style="font-size:13px;font-weight:700;color:#E74C3C;margin-bottom:4px;">Rupture de stock critique</div>
      <div style="font-size:12px;color:#6B7A8D;">Paracétamol 500mg · Stock: 0 unités · Seuil: 50</div>
    </div>
    <div style="background:#FEF9EE;border-radius:14px;padding:14px;border-left:3px solid #F39C12;">
      <div style="font-size:13px;font-weight:700;color:#F39C12;margin-bottom:4px;">Commande signalée</div>
      <div style="font-size:12px;color:#6B7A8D;">#CMD-90198 · Montant inhabituel · À vérifier</div>
    </div>
    <!-- Audit log -->
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">Activité récente</div>
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);display:flex;flex-direction:column;gap:10px;">
      <div style="display:flex;gap:10px;align-items:center;"><div style="width:8px;height:8px;background:#27AE60;border-radius:50%;flex-shrink:0;"></div><div style="flex:1;font-size:12px;color:#1A2332;">Utilisateur créé: J-M. Diabaté</div><div style="font-size:10px;color:#6B7A8D;white-space:nowrap;">09:14</div></div>
      <div style="display:flex;gap:10px;align-items:center;"><div style="width:8px;height:8px;background:#E74C3C;border-radius:50%;flex-shrink:0;"></div><div style="flex:1;font-size:12px;color:#1A2332;">Tentative connexion échouée</div><div style="font-size:10px;color:#6B7A8D;white-space:nowrap;">09:03</div></div>
      <div style="display:flex;gap:10px;align-items:center;"><div style="width:8px;height:8px;background:#27AE60;border-radius:50%;flex-shrink:0;"></div><div style="flex:1;font-size:12px;color:#1A2332;">Stock mis à jour: Metformine</div><div style="font-size:10px;color:#6B7A8D;white-space:nowrap;">08:50</div></div>
      <div style="display:flex;gap:10px;align-items:center;"><div style="width:8px;height:8px;background:#1A6B8A;border-radius:50%;flex-shrink:0;"></div><div style="flex:1;font-size:12px;color:#1A2332;">Rapport mensuel exporté</div><div style="font-size:10px;color:#6B7A8D;white-space:nowrap;">08:32</div></div>
      <div style="display:flex;gap:10px;align-items:center;"><div style="width:8px;height:8px;background:#27AE60;border-radius:50%;flex-shrink:0;"></div><div style="flex:1;font-size:12px;color:#1A2332;">Pharmacie ajoutée: Pharma Nord</div><div style="font-size:10px;color:#6B7A8D;white-space:nowrap;">08:11</div></div>
    </div>

    <!-- Accès rapide FIG.2 / FIG.3 / FIG.4 -->
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">🔬 Modules Techniques</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
      <div onclick="goToScreen('71b')" style="background:linear-gradient(135deg,#F39C12,#E67E22);border-radius:14px;padding:14px;cursor:pointer;">
        <div style="font-size:22px;margin-bottom:6px;">📡</div>
        <div style="font-size:12px;font-weight:700;color:#fff;">Mode Hors-ligne</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.8);margin-top:2px;">Sync différée · FIG.2</div>
      </div>
      <div onclick="goToScreen(83)" style="background:linear-gradient(135deg,#E74C3C,#c0392b);border-radius:14px;padding:14px;cursor:pointer;">
        <div style="font-size:22px;margin-bottom:6px;">🦠</div>
        <div style="font-size:12px;font-weight:700;color:#fff;">Alertes IR</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.8);margin-top:2px;">Épidémies · FIG.4</div>
      </div>
      <div onclick="goToScreen(76)" style="background:linear-gradient(135deg,#0D3B2E,#27AE60);border-radius:14px;padding:14px;cursor:pointer;">
        <div style="font-size:22px;margin-bottom:6px;">📊</div>
        <div style="font-size:12px;font-weight:700;color:#fff;">Rapport Prévisionnel</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.8);margin-top:2px;">Algorithme IR · FIG.4</div>
      </div>
      <div onclick="goToScreen(77)" style="background:linear-gradient(135deg,#1A2332,#0F3F54);border-radius:14px;padding:14px;cursor:pointer;">
        <div style="font-size:22px;margin-bottom:6px;">⛓️</div>
        <div style="font-size:12px;font-weight:700;color:#fff;">Blockchain</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.8);margin-top:2px;">Chaîne Hash · FIG.3</div>
      </div>
    </div>
  </div>
  <!-- Bottom nav -->
  <div style="background:#1A2332;display:flex;">
    <button onclick="goToScreen(48)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">📊</span><span style="font-size:9px;font-weight:700;color:#1A6B8A;">Dashboard</span></button>
    <button onclick="goToScreen(78)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">👥</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Utilisateurs</span></button>
    <button onclick="goToScreen(79)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">💊</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Stock</span></button>
    <button onclick="goToScreen(81)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">📈</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Rapports</span></button>
    <button onclick="goToScreen(82)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">⚙️</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Config</span></button>
  </div>
</div>

<!-- ========================================
     SCREEN 26 — CATALOGUE MÉDICAMENTS
======================================== -->
<div class="screen" id="screen48" data-device="mobile">
  <div style="background:linear-gradient(135deg,#1A2332,#0F3F54);padding:54px 20px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;justify-content:space-between;">
      <button onclick="openDrawer('admin')" style="width:36px;height:36px;background:rgba(255,255,255,0.1);border:none;border-radius:10px;cursor:pointer;font-size:18px;color:#fff;display:flex;align-items:center;justify-content:center;">☰</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Admin Dashboard</div>
      <div style="background:rgba(231,76,60,0.2);border-radius:50px;padding:4px 12px;font-size:11px;font-weight:700;color:#ff9d9d;">SuperAdmin</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
      <div style="background:#1A6B8A;border-radius:14px;padding:14px;"><div style="font-size:11px;color:rgba(255,255,255,0.7);margin-bottom:4px;">Utilisateurs</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;font-weight:800;color:#fff;">2 847</div></div>
      <div style="background:#27AE60;border-radius:14px;padding:14px;"><div style="font-size:11px;color:rgba(255,255,255,0.7);margin-bottom:4px;">Commandes</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;font-weight:800;color:#fff;">156</div></div>
      <div style="background:#E74C3C;border-radius:14px;padding:14px;"><div style="font-size:11px;color:rgba(255,255,255,0.7);margin-bottom:4px;">Alertes</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;font-weight:800;color:#fff;">5</div></div>
      <div style="background:#F39C12;border-radius:14px;padding:14px;"><div style="font-size:11px;color:rgba(255,255,255,0.7);margin-bottom:4px;">Revenus</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">4.2M</div></div>
    </div>
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:13px;font-weight:700;color:#1A2332;margin-bottom:10px;">Alertes critiques</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="background:#FEF0EE;border-radius:10px;padding:10px;border-left:3px solid #E74C3C;"><div style="font-size:12px;font-weight:700;color:#E74C3C;">Rupture stock — Paracétamol</div><div style="font-size:11px;color:#6B7A8D;margin-top:2px;">0 unités restantes</div></div>
        <div style="background:#FEF9EE;border-radius:10px;padding:10px;border-left:3px solid #F39C12;"><div style="font-size:12px;font-weight:700;color:#F39C12;">Commande signalée #CMD-90198</div><div style="font-size:11px;color:#6B7A8D;margin-top:2px;">245 000 FCFA — montant inhabituel</div></div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
      <button onclick="goToScreen(78)" style="padding:12px;background:#fff;color:#1A2332;border:1.5px solid #E2ECF2;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.04);">👥 Utilisateurs</button>
      <button onclick="goToScreen(28)" style="padding:12px;background:#fff;color:#1A2332;border:1.5px solid #E2ECF2;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.04);">🔒 Audit</button>
    </div>
    <button onclick="goToScreen(1)" style="width:100%;padding:12px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;cursor:pointer;">Déconnexion</button>
  </div>
  <!-- Bottom nav -->
  <div style="background:#1A2332;padding:12px 16px 20px;display:flex;justify-content:space-around;flex-shrink:0;">
    <button onclick="goToScreen(48)" style="background:none;border:none;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;"><span style="font-size:18px;">📊</span><span style="font-size:9px;color:#fff;font-weight:700;">Dashboard</span></button>
    <button onclick="goToScreen(78)" style="background:none;border:none;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;"><span style="font-size:18px;">👥</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Utilisateurs</span></button>
    <button onclick="goToScreen(79)" style="background:none;border:none;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;"><span style="font-size:18px;">💊</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Stock</span></button>
    <button onclick="goToScreen(80)" style="background:none;border:none;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;"><span style="font-size:18px;">📦</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Commandes</span></button>
    <button onclick="goToScreen(82)" style="background:none;border:none;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;"><span style="font-size:18px;">⚙️</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Config</span></button>
  </div>
</div>


<!-- ========================================
     SCREEN 46 — 404 / ERROR PAGE
======================================== -->
<div class="screen" id="screen78" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:linear-gradient(135deg,#1A2332,#0F3F54);padding:54px 16px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
      <button onclick="goToScreen(48)" style="width:34px;height:34px;background:rgba(255,255,255,0.1);border:none;border-radius:50%;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:800;color:#fff;">Gestion Utilisateurs</div>
      <button onclick="showToast('➕ Ajout utilisateur')" style="width:34px;height:34px;background:rgba(39,174,96,0.3);border:none;border-radius:50%;color:#fff;font-size:18px;cursor:pointer;">+</button>
    </div>
    <div style="background:rgba(255,255,255,0.1);border-radius:10px;padding:9px 14px;display:flex;align-items:center;gap:8px;">
      <span style="font-size:14px;">🔍</span>
      <input placeholder="Rechercher un utilisateur…" style="background:none;border:none;outline:none;color:#fff;font-size:13px;font-family:'DM Sans',sans-serif;flex:1;" />
    </div>
  </div>
  <!-- Filtres rôles -->
  <div style="display:flex;gap:8px;padding:12px 16px;overflow-x:auto;flex-shrink:0;background:#fff;border-bottom:1px solid #E2ECF2;">
    <div style="background:#1A2332;color:#fff;border-radius:50px;padding:5px 14px;font-size:11px;font-weight:700;white-space:nowrap;cursor:pointer;">Tous (2847)</div>
    <div style="background:#E8F4F8;color:#1A6B8A;border-radius:50px;padding:5px 14px;font-size:11px;font-weight:600;white-space:nowrap;cursor:pointer;">Patients</div>
    <div style="background:#E8F7EE;color:#27AE60;border-radius:50px;padding:5px 14px;font-size:11px;font-weight:600;white-space:nowrap;cursor:pointer;">Pharmaciens</div>
    <div style="background:#F0E8FF;color:#8B5CF6;border-radius:50px;padding:5px 14px;font-size:11px;font-weight:600;white-space:nowrap;cursor:pointer;">Médecins</div>
    <div style="background:#FEF9EE;color:#F39C12;border-radius:50px;padding:5px 14px;font-size:11px;font-weight:600;white-space:nowrap;cursor:pointer;">Livreurs</div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:10px;">
    <!-- User 1 -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05);display:flex;align-items:center;gap:12px;">
      <div style="width:44px;height:44px;background:linear-gradient(135deg,#1A6B8A,#2196B3);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">👤</div>
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:700;color:#1A2332;">Yao Kouamé</div>
        <div style="font-size:11px;color:#6B7A8D;">Patient · Abidjan · Inscrit 12/01/2026</div>
        <div style="display:flex;gap:6px;margin-top:4px;">
          <span style="background:#E8F7EE;color:#27AE60;font-size:9px;font-weight:700;padding:2px 7px;border-radius:20px;">Actif</span>
          <span style="background:#E8F4F8;color:#1A6B8A;font-size:9px;font-weight:700;padding:2px 7px;border-radius:20px;">Vérifié ✓</span>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        <button onclick="showToast('👁 Profil Yao Kouamé')" style="background:#E8F4F8;border:none;border-radius:8px;padding:5px 10px;font-size:10px;font-weight:700;color:#1A6B8A;cursor:pointer;">Voir</button>
        <button onclick="showToast('🚫 Compte suspendu')" style="background:#FEF0EE;border:none;border-radius:8px;padding:5px 10px;font-size:10px;font-weight:700;color:#E74C3C;cursor:pointer;">Suspendre</button>
      </div>
    </div>
    <!-- User 2 -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05);display:flex;align-items:center;gap:12px;">
      <div style="width:44px;height:44px;background:linear-gradient(135deg,#27AE60,#2ecc71);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">💊</div>
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:700;color:#1A2332;">Pharmacie Centrale CI</div>
        <div style="font-size:11px;color:#6B7A8D;">Pharmacien · Plateau · Inscrit 05/03/2025</div>
        <div style="display:flex;gap:6px;margin-top:4px;">
          <span style="background:#E8F7EE;color:#27AE60;font-size:9px;font-weight:700;padding:2px 7px;border-radius:20px;">Actif</span>
          <span style="background:#E8F7EE;color:#27AE60;font-size:9px;font-weight:700;padding:2px 7px;border-radius:20px;">Agrément ✓</span>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        <button onclick="showToast('👁 Profil Pharmacie')" style="background:#E8F4F8;border:none;border-radius:8px;padding:5px 10px;font-size:10px;font-weight:700;color:#1A6B8A;cursor:pointer;">Voir</button>
        <button onclick="showToast('🚫 Compte suspendu')" style="background:#FEF0EE;border:none;border-radius:8px;padding:5px 10px;font-size:10px;font-weight:700;color:#E74C3C;cursor:pointer;">Suspendre</button>
      </div>
    </div>
    <!-- User 3 — en attente vérif -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05);border:1.5px solid #F39C12;display:flex;align-items:center;gap:12px;">
      <div style="width:44px;height:44px;background:linear-gradient(135deg,#F39C12,#e67e22);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">🩺</div>
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:700;color:#1A2332;">Dr. Ibrahim Koné</div>
        <div style="font-size:11px;color:#6B7A8D;">Médecin · Cocody · Inscrit 08/04/2026</div>
        <div style="display:flex;gap:6px;margin-top:4px;">
          <span style="background:#FEF9EE;color:#F39C12;font-size:9px;font-weight:700;padding:2px 7px;border-radius:20px;">⏳ En attente vérif.</span>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        <button onclick="showToast('✅ Médecin validé !')" style="background:#E8F7EE;border:none;border-radius:8px;padding:5px 10px;font-size:10px;font-weight:700;color:#27AE60;cursor:pointer;">Valider</button>
        <button onclick="showToast('❌ Compte rejeté')" style="background:#FEF0EE;border:none;border-radius:8px;padding:5px 10px;font-size:10px;font-weight:700;color:#E74C3C;cursor:pointer;">Rejeter</button>
      </div>
    </div>
    <!-- User 4 -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05);display:flex;align-items:center;gap:12px;">
      <div style="width:44px;height:44px;background:linear-gradient(135deg,#F39C12,#e67e22);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">🛵</div>
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:700;color:#1A2332;">Moussa Traoré</div>
        <div style="font-size:11px;color:#6B7A8D;">Livreur · Yopougon · 47 livraisons</div>
        <div style="display:flex;gap:6px;margin-top:4px;">
          <span style="background:#E8F7EE;color:#27AE60;font-size:9px;font-weight:700;padding:2px 7px;border-radius:20px;">En ligne 🟢</span>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        <button onclick="showToast('📍 Position Moussa')" style="background:#E8F4F8;border:none;border-radius:8px;padding:5px 10px;font-size:10px;font-weight:700;color:#1A6B8A;cursor:pointer;">Voir</button>
        <button onclick="showToast('🚫 Compte suspendu')" style="background:#FEF0EE;border:none;border-radius:8px;padding:5px 10px;font-size:10px;font-weight:700;color:#E74C3C;cursor:pointer;">Suspendre</button>
      </div>
    </div>
    <!-- Stats résumé -->
    <div style="background:linear-gradient(135deg,#1A2332,#0F3F54);border-radius:14px;padding:16px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;text-align:center;">
      <div><div style="font-size:18px;font-weight:800;color:#fff;">2 234</div><div style="font-size:9px;color:rgba(255,255,255,0.6);">Patients</div></div>
      <div><div style="font-size:18px;font-weight:800;color:#27AE60;">312</div><div style="font-size:9px;color:rgba(255,255,255,0.6);">Pharmaciens</div></div>
      <div><div style="font-size:18px;font-weight:800;color:#F39C12;">3</div><div style="font-size:9px;color:rgba(255,255,255,0.6);">En attente</div></div>
    </div>
  </div>
  <!-- Bottom nav admin -->
  <div style="background:#1A2332;display:flex;flex-shrink:0;">
    <button onclick="goToScreen(48)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">📊</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Dashboard</span></button>
    <button onclick="goToScreen(78)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">👥</span><span style="font-size:9px;font-weight:700;color:#1A6B8A;">Utilisateurs</span></button>
    <button onclick="goToScreen(79)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">💊</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Stock</span></button>
    <button onclick="goToScreen(81)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">📈</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Rapports</span></button>
    <button onclick="goToScreen(82)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">⚙️</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Config</span></button>
  </div>
</div>

<!-- ========================================
     SCREEN 76 — SUPER ADMIN: STOCK & PRODUITS
======================================== -->
<div class="screen" id="screen79" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:linear-gradient(135deg,#1A2332,#0F3F54);padding:54px 16px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
      <button onclick="goToScreen(48)" style="width:34px;height:34px;background:rgba(255,255,255,0.1);border:none;border-radius:50%;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:800;color:#fff;">Stock & Produits</div>
      <button onclick="showToast('📦 Réapprovisionnement lancé')" style="background:rgba(39,174,96,0.3);border:none;border-radius:8px;padding:5px 10px;color:#fff;font-size:10px;font-weight:700;cursor:pointer;">Réappro.</button>
    </div>
  </div>

  <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:12px;">
    <!-- KPI stock -->
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;">
      <div style="background:#fff;border-radius:12px;padding:12px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
        <div style="font-size:20px;font-weight:800;color:#27AE60;">142</div>
        <div style="font-size:9px;color:#6B7A8D;margin-top:2px;">Produits OK</div>
      </div>
      <div style="background:#fff;border-radius:12px;padding:12px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.05);border:1.5px solid #F39C12;">
        <div style="font-size:20px;font-weight:800;color:#F39C12;">17</div>
        <div style="font-size:9px;color:#6B7A8D;margin-top:2px;">Stock faible</div>
      </div>
      <div style="background:#fff;border-radius:12px;padding:12px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.05);border:1.5px solid #E74C3C;">
        <div style="font-size:20px;font-weight:800;color:#E74C3C;">8</div>
        <div style="font-size:9px;color:#6B7A8D;margin-top:2px;">Rupture</div>
      </div>
    </div>

    <!-- Alertes rupture -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:800;color:#E74C3C;margin-bottom:10px;">🚨 Ruptures critiques</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:center;justify-content:space-between;padding:10px;background:#FEF0EE;border-radius:10px;border-left:3px solid #E74C3C;">
          <div><div style="font-size:12px;font-weight:700;color:#1A2332;">Paracétamol 500mg</div><div style="font-size:10px;color:#E74C3C;">Stock: 0 · Seuil: 50 · 12 pharmacies impactées</div></div>
          <button onclick="showToast('📦 Commande urgente envoyée')" style="background:#E74C3C;border:none;border-radius:8px;padding:6px 10px;font-size:10px;font-weight:700;color:#fff;cursor:pointer;flex-shrink:0;">Commander</button>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;padding:10px;background:#FEF0EE;border-radius:10px;border-left:3px solid #E74C3C;">
          <div><div style="font-size:12px;font-weight:700;color:#1A2332;">Ribavirine 200mg</div><div style="font-size:10px;color:#E74C3C;">Stock: 2 · Seuil: 30 · Urgence épidémique</div></div>
          <button onclick="showToast('📦 Commande urgente envoyée')" style="background:#E74C3C;border:none;border-radius:8px;padding:6px 10px;font-size:10px;font-weight:700;color:#fff;cursor:pointer;flex-shrink:0;">Commander</button>
        </div>
      </div>
    </div>

    <!-- Stock faible -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:800;color:#F39C12;margin-bottom:10px;">⚠️ Stock faible</div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 10px;background:#FEF9EE;border-radius:8px;">
          <div style="font-size:12px;font-weight:600;color:#1A2332;">Amoxicilline 500mg</div>
          <div style="display:flex;align-items:center;gap:8px;">
            <div style="width:60px;height:6px;background:#E2ECF2;border-radius:3px;overflow:hidden;"><div style="width:25%;height:100%;background:#F39C12;border-radius:3px;"></div></div>
            <span style="font-size:11px;font-weight:700;color:#F39C12;">12/50</span>
          </div>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 10px;background:#FEF9EE;border-radius:8px;">
          <div style="font-size:12px;font-weight:600;color:#1A2332;">Métronidazole 250mg</div>
          <div style="display:flex;align-items:center;gap:8px;">
            <div style="width:60px;height:6px;background:#E2ECF2;border-radius:3px;overflow:hidden;"><div style="width:30%;height:100%;background:#F39C12;border-radius:3px;"></div></div>
            <span style="font-size:11px;font-weight:700;color:#F39C12;">15/50</span>
          </div>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 10px;background:#FEF9EE;border-radius:8px;">
          <div style="font-size:12px;font-weight:600;color:#1A2332;">Ibuprofène 400mg</div>
          <div style="display:flex;align-items:center;gap:8px;">
            <div style="width:60px;height:6px;background:#E2ECF2;border-radius:3px;overflow:hidden;"><div style="width:38%;height:100%;background:#F39C12;border-radius:3px;"></div></div>
            <span style="font-size:11px;font-weight:700;color:#F39C12;">19/50</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Produits OK top -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:800;color:#27AE60;margin-bottom:10px;">✅ Top produits (stock OK)</div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 10px;background:#E8F7EE;border-radius:8px;">
          <div style="font-size:12px;font-weight:600;color:#1A2332;">Metformine 850mg</div>
          <div style="display:flex;align-items:center;gap:8px;">
            <div style="width:60px;height:6px;background:#E2ECF2;border-radius:3px;overflow:hidden;"><div style="width:90%;height:100%;background:#27AE60;border-radius:3px;"></div></div>
            <span style="font-size:11px;font-weight:700;color:#27AE60;">450/500</span>
          </div>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 10px;background:#E8F7EE;border-radius:8px;">
          <div style="font-size:12px;font-weight:600;color:#1A2332;">Artéméther 80mg</div>
          <div style="display:flex;align-items:center;gap:8px;">
            <div style="width:60px;height:6px;background:#E2ECF2;border-radius:3px;overflow:hidden;"><div style="width:75%;height:100%;background:#27AE60;border-radius:3px;"></div></div>
            <span style="font-size:11px;font-weight:700;color:#27AE60;">375/500</span>
          </div>
        </div>
      </div>
    </div>
    <button onclick="showModal('add-product-modal')" style="width:100%;padding:14px;background:linear-gradient(135deg,#1A2332,#0F3F54);color:#fff;border:none;border-radius:14px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">💊 Ajouter un nouveau produit</button>
  </div>
  <div style="background:#1A2332;display:flex;flex-shrink:0;">
    <button onclick="goToScreen(48)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">📊</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Dashboard</span></button>
    <button onclick="goToScreen(78)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">👥</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Utilisateurs</span></button>
    <button onclick="goToScreen(79)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">💊</span><span style="font-size:9px;font-weight:700;color:#1A6B8A;">Stock</span></button>
    <button onclick="goToScreen(81)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">📈</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Rapports</span></button>
    <button onclick="goToScreen(82)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">⚙️</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Config</span></button>
  </div>
</div>

<!-- ========================================
     SCREEN 77 — SUPER ADMIN: SUPERVISION COMMANDES
======================================== -->
<div class="screen" id="screen80" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:linear-gradient(135deg,#1A2332,#0F3F54);padding:54px 16px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
      <button onclick="goToScreen(48)" style="width:34px;height:34px;background:rgba(255,255,255,0.1);border:none;border-radius:50%;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:800;color:#fff;">Supervision Commandes</div>
      <div style="background:rgba(231,76,60,0.3);border-radius:20px;padding:4px 10px;font-size:11px;font-weight:700;color:#ff9d9d;">156 today</div>
    </div>
    <div style="display:flex;gap:8px;">
      <div style="flex:1;background:rgba(255,255,255,0.1);border-radius:8px;padding:8px;text-align:center;"><div style="font-size:16px;font-weight:800;color:#27AE60;">98</div><div style="font-size:9px;color:rgba(255,255,255,0.6);">Livrées</div></div>
      <div style="flex:1;background:rgba(255,255,255,0.1);border-radius:8px;padding:8px;text-align:center;"><div style="font-size:16px;font-weight:800;color:#F39C12;">43</div><div style="font-size:9px;color:rgba(255,255,255,0.6);">En cours</div></div>
      <div style="flex:1;background:rgba(255,255,255,0.1);border-radius:8px;padding:8px;text-align:center;"><div style="font-size:16px;font-weight:800;color:#fff;">11</div><div style="font-size:9px;color:rgba(255,255,255,0.6);">En attente</div></div>
      <div style="flex:1;background:rgba(255,255,255,0.1);border-radius:8px;padding:8px;text-align:center;"><div style="font-size:16px;font-weight:800;color:#E74C3C;">4</div><div style="font-size:9px;color:rgba(255,255,255,0.6);">Signalées</div></div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:10px;">
    <!-- Commande signalée -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05);border:1.5px solid #E74C3C;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
        <div><div style="font-size:13px;font-weight:800;color:#1A2332;">#CMD-90198</div><div style="font-size:11px;color:#6B7A8D;">Yao Kouamé · Pharmacie Centrale</div></div>
        <span style="background:#FEF0EE;color:#E74C3C;font-size:10px;font-weight:700;padding:3px 8px;border-radius:20px;">🚩 Signalée</span>
      </div>
      <div style="background:#FEF0EE;border-radius:8px;padding:8px 10px;font-size:11px;color:#E74C3C;margin-bottom:10px;">⚠️ Montant inhabituel: 245 000 FCFA — Vérification requise</div>
      <div style="display:flex;gap:8px;">
        <button onclick="showToast('✅ Commande validée')" style="flex:1;padding:9px;background:#27AE60;color:#fff;border:none;border-radius:10px;font-size:11px;font-weight:700;cursor:pointer;">✅ Valider</button>
        <button onclick="showToast('❌ Commande annulée')" style="flex:1;padding:9px;background:#E74C3C;color:#fff;border:none;border-radius:10px;font-size:11px;font-weight:700;cursor:pointer;">❌ Annuler</button>
      </div>
    </div>
    <!-- Commandes en cours -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:800;color:#1A2332;margin-bottom:10px;">📦 En cours de livraison</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:center;gap:10px;padding:8px;background:#F4F9FC;border-radius:10px;">
          <span style="font-size:18px;">🛵</span>
          <div style="flex:1;"><div style="font-size:12px;font-weight:700;color:#1A2332;">#CMD-90201 · Amoxicilline</div><div style="font-size:10px;color:#6B7A8D;">Moussa Traoré · ETA 14 min</div></div>
          <span style="background:#E8F4F8;color:#1A6B8A;font-size:10px;font-weight:700;padding:2px 8px;border-radius:20px;">🔵 En route</span>
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding:8px;background:#F4F9FC;border-radius:10px;">
          <span style="font-size:18px;">🛵</span>
          <div style="flex:1;"><div style="font-size:12px;font-weight:700;color:#1A2332;">#CMD-90200 · Metformine</div><div style="font-size:10px;color:#6B7A8D;">Kouassi Ange · ETA 28 min</div></div>
          <span style="background:#E8F4F8;color:#1A6B8A;font-size:10px;font-weight:700;padding:2px 8px;border-radius:20px;">🔵 En route</span>
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding:8px;background:#E8F7EE;border-radius:10px;">
          <span style="font-size:18px;">✅</span>
          <div style="flex:1;"><div style="font-size:12px;font-weight:700;color:#1A2332;">#CMD-90199 · Paracétamol</div><div style="font-size:10px;color:#27AE60;">Livré à 11:42 · Confirmé</div></div>
          <span style="background:#E8F7EE;color:#27AE60;font-size:10px;font-weight:700;padding:2px 8px;border-radius:20px;">✅ Livré</span>
        </div>
      </div>
    </div>
    <!-- Revenus du jour -->
    <div style="background:linear-gradient(135deg,#0D3B2E,#27AE60);border-radius:14px;padding:16px;">
      <div style="font-size:11px;color:rgba(255,255,255,0.7);margin-bottom:4px;">💰 Revenus aujourd'hui</div>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:800;color:#fff;">876 400 FCFA</div>
      <div style="font-size:11px;color:rgba(255,255,255,0.7);margin-top:4px;">↑ +12% vs hier · 156 commandes</div>
    </div>
  </div>
  <div style="background:#1A2332;display:flex;flex-shrink:0;">
    <button onclick="goToScreen(48)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">📊</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Dashboard</span></button>
    <button onclick="goToScreen(78)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">👥</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Utilisateurs</span></button>
    <button onclick="goToScreen(79)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">💊</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Stock</span></button>
    <button onclick="goToScreen(81)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">📈</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Rapports</span></button>
    <button onclick="goToScreen(82)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">⚙️</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Config</span></button>
  </div>
</div>

<!-- ========================================
     SCREEN 78 — SUPER ADMIN: RAPPORTS & ANALYTICS
======================================== -->
<div class="screen" id="screen81" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:linear-gradient(135deg,#1A2332,#0F3F54);padding:54px 16px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
      <button onclick="goToScreen(48)" style="width:34px;height:34px;background:rgba(255,255,255,0.1);border:none;border-radius:50%;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:800;color:#fff;">Rapports & Analytics</div>
      <button onclick="showToast('📥 Export PDF en cours…')" style="background:rgba(39,174,96,0.3);border:none;border-radius:8px;padding:5px 10px;color:#fff;font-size:10px;font-weight:700;cursor:pointer;">Export</button>
    </div>
    <!-- Sélecteur période -->
    <div style="display:flex;gap:6px;">
      <div style="background:#fff;color:#1A2332;border-radius:20px;padding:4px 12px;font-size:11px;font-weight:700;cursor:pointer;">7 jours</div>
      <div style="background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.7);border-radius:20px;padding:4px 12px;font-size:11px;cursor:pointer;">30 jours</div>
      <div style="background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.7);border-radius:20px;padding:4px 12px;font-size:11px;cursor:pointer;">3 mois</div>
      <div style="background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.7);border-radius:20px;padding:4px 12px;font-size:11px;cursor:pointer;">Année</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:12px;">
    <!-- Revenus chart -->
    <div style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:800;color:#1A2332;">💰 Revenus (7 jours)</div>
        <div style="font-size:12px;color:#27AE60;font-weight:700;">↑ +8%</div>
      </div>
      <div style="display:flex;align-items:flex-end;gap:4px;height:60px;margin-bottom:6px;">
        <div style="flex:1;height:55%;background:#B5D4F4;border-radius:3px 3px 0 0;"></div>
        <div style="flex:1;height:70%;background:#B5D4F4;border-radius:3px 3px 0 0;"></div>
        <div style="flex:1;height:52%;background:#B5D4F4;border-radius:3px 3px 0 0;"></div>
        <div style="flex:1;height:80%;background:#B5D4F4;border-radius:3px 3px 0 0;"></div>
        <div style="flex:1;height:90%;background:#B5D4F4;border-radius:3px 3px 0 0;"></div>
        <div style="flex:1;height:85%;background:#B5D4F4;border-radius:3px 3px 0 0;"></div>
        <div style="flex:1;height:100%;background:#1A6B8A;border-radius:3px 3px 0 0;"></div>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:9px;color:#6B7A8D;">
        <span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span><span>Sam</span><span>Auj</span>
      </div>
      <div style="margin-top:10px;display:flex;justify-content:space-between;">
        <div style="text-align:center;"><div style="font-size:11px;color:#6B7A8D;">Total semaine</div><div style="font-size:16px;font-weight:800;color:#1A2332;">4.2M FCFA</div></div>
        <div style="text-align:center;"><div style="font-size:11px;color:#6B7A8D;">Moy/jour</div><div style="font-size:16px;font-weight:800;color:#1A6B8A;">600K FCFA</div></div>
        <div style="text-align:center;"><div style="font-size:11px;color:#6B7A8D;">Record</div><div style="font-size:16px;font-weight:800;color:#27AE60;">876K FCFA</div></div>
      </div>
    </div>

    <!-- Top pharmacies -->
    <div style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:800;color:#1A2332;margin-bottom:10px;">🏆 Top Pharmacies</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:center;gap:10px;padding:8px 10px;background:#F4F9FC;border-radius:10px;">
          <span style="font-size:16px;">🥇</span>
          <div style="flex:1;font-size:12px;font-weight:700;color:#1A2332;">Pharmacie Centrale CI</div>
          <span style="font-size:12px;font-weight:800;color:#27AE60;">1.2M FCFA</span>
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding:8px 10px;background:#F4F9FC;border-radius:10px;">
          <span style="font-size:16px;">🥈</span>
          <div style="flex:1;font-size:12px;font-weight:700;color:#1A2332;">PharmaPlus Cocody</div>
          <span style="font-size:12px;font-weight:800;color:#1A6B8A;">890K FCFA</span>
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding:8px 10px;background:#F4F9FC;border-radius:10px;">
          <span style="font-size:16px;">🥉</span>
          <div style="flex:1;font-size:12px;font-weight:700;color:#1A2332;">Pharma Nord CI</div>
          <span style="font-size:12px;font-weight:800;color:#F39C12;">720K FCFA</span>
        </div>
      </div>
    </div>

    <!-- KPIs clés -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
      <div style="background:#fff;border-radius:12px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
        <div style="font-size:10px;color:#6B7A8D;margin-bottom:4px;">Taux livraison</div>
        <div style="font-size:24px;font-weight:800;color:#27AE60;">96.4%</div>
        <div style="font-size:10px;color:#27AE60;">↑ +1.2%</div>
      </div>
      <div style="background:#fff;border-radius:12px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
        <div style="font-size:10px;color:#6B7A8D;margin-bottom:4px;">Temps moyen liv.</div>
        <div style="font-size:24px;font-weight:800;color:#1A6B8A;">22 min</div>
        <div style="font-size:10px;color:#27AE60;">↓ -3 min</div>
      </div>
      <div style="background:#fff;border-radius:12px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
        <div style="font-size:10px;color:#6B7A8D;margin-bottom:4px;">Note satisfaction</div>
        <div style="font-size:24px;font-weight:800;color:#F39C12;">4.7⭐</div>
        <div style="font-size:10px;color:#6B7A8D;">sur 6.0</div>
      </div>
      <div style="background:#fff;border-radius:12px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
        <div style="font-size:10px;color:#6B7A8D;margin-bottom:4px;">Nouveaux users</div>
        <div style="font-size:24px;font-weight:800;color:#8B5CF6;">+23</div>
        <div style="font-size:10px;color:#27AE60;">cette semaine</div>
      </div>
    </div>
    <button onclick="goToScreen(76)" style="width:100%;padding:14px;background:linear-gradient(135deg,#E74C3C,#c0392b);color:#fff;border:none;border-radius:14px;font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;cursor:pointer;">🦠 Voir Rapport Épidémique IR →</button>
  </div>
  <div style="background:#1A2332;display:flex;flex-shrink:0;">
    <button onclick="goToScreen(48)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">📊</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Dashboard</span></button>
    <button onclick="goToScreen(78)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">👥</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Utilisateurs</span></button>
    <button onclick="goToScreen(79)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">💊</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Stock</span></button>
    <button onclick="goToScreen(81)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">📈</span><span style="font-size:9px;font-weight:700;color:#1A6B8A;">Rapports</span></button>
    <button onclick="goToScreen(82)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">⚙️</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Config</span></button>
  </div>
</div>

<!-- ========================================
     SCREEN 79 — SUPER ADMIN: CONFIGURATION SYSTÈME
======================================== -->
<div class="screen" id="screen82" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:linear-gradient(135deg,#1A2332,#0F3F54);padding:54px 16px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;">
      <button onclick="goToScreen(48)" style="width:34px;height:34px;background:rgba(255,255,255,0.1);border:none;border-radius:50%;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:800;color:#fff;">Configuration Système</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:12px;">
    <!-- Paramètres plateforme -->
    <div style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:800;color:#1A2332;margin-bottom:12px;">⚙️ Paramètres Plateforme</div>
      <div style="display:flex;flex-direction:column;gap:0;">
        <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid #F4F9FC;">
          <div><div style="font-size:13px;font-weight:600;color:#1A2332;">Frais de livraison</div><div style="font-size:11px;color:#6B7A8D;">Tarif par défaut</div></div>
          <div style="font-size:13px;font-weight:700;color:#1A6B8A;">500 FCFA</div>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid #F4F9FC;">
          <div><div style="font-size:13px;font-weight:600;color:#1A2332;">Rayon livraison max.</div><div style="font-size:11px;color:#6B7A8D;">Distance maximale</div></div>
          <div style="font-size:13px;font-weight:700;color:#1A6B8A;">15 km</div>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid #F4F9FC;">
          <div><div style="font-size:13px;font-weight:600;color:#1A2332;">Commission pharmacie</div><div style="font-size:11px;color:#6B7A8D;">% sur chaque vente</div></div>
          <div style="font-size:13px;font-weight:700;color:#1A6B8A;">8%</div>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 0;">
          <div><div style="font-size:13px;font-weight:600;color:#1A2332;">Délai livraison cible</div><div style="font-size:11px;color:#6B7A8D;">SLA standard</div></div>
          <div style="font-size:13px;font-weight:700;color:#1A6B8A;">30 min</div>
        </div>
      </div>
    </div>

    <!-- Toggles système -->
    <div style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:800;color:#1A2332;margin-bottom:12px;">🔧 Modules actifs</div>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div><div style="font-size:13px;font-weight:600;color:#1A2332;">Mode hors-ligne (FIG.2)</div><div style="font-size:11px;color:#6B7A8D;">Sync différée activée</div></div>
          <div onclick="showToast('✅ Module actif')" style="width:44px;height:24px;background:#27AE60;border-radius:12px;position:relative;cursor:pointer;"><div style="position:absolute;right:3px;top:3px;width:18px;height:18px;background:#fff;border-radius:50%;"></div></div>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div><div style="font-size:13px;font-weight:600;color:#1A2332;">Alertes épidémiques IR (FIG.4)</div><div style="font-size:11px;color:#6B7A8D;">Algorithme prédictif</div></div>
          <div onclick="showToast('✅ Module actif')" style="width:44px;height:24px;background:#27AE60;border-radius:12px;position:relative;cursor:pointer;"><div style="position:absolute;right:3px;top:3px;width:18px;height:18px;background:#fff;border-radius:50%;"></div></div>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div><div style="font-size:13px;font-weight:600;color:#1A2332;">Blockchain (FIG.3)</div><div style="font-size:11px;color:#6B7A8D;">Chaînage ordonnances</div></div>
          <div onclick="showToast('✅ Module actif')" style="width:44px;height:24px;background:#27AE60;border-radius:12px;position:relative;cursor:pointer;"><div style="position:absolute;right:3px;top:3px;width:18px;height:18px;background:#fff;border-radius:50%;"></div></div>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div><div style="font-size:13px;font-weight:600;color:#1A2332;">Notifications push</div><div style="font-size:11px;color:#6B7A8D;">Alertes temps réel</div></div>
          <div onclick="showToast('✅ Module actif')" style="width:44px;height:24px;background:#27AE60;border-radius:12px;position:relative;cursor:pointer;"><div style="position:absolute;right:3px;top:3px;width:18px;height:18px;background:#fff;border-radius:50%;"></div></div>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div><div style="font-size:13px;font-weight:600;color:#1A2332;">Mode maintenance</div><div style="font-size:11px;color:#6B7A8D;">Fermeture temporaire</div></div>
          <div onclick="showToast('🔧 Mode maintenance activé');goToScreen(50)" style="width:44px;height:24px;background:#E2ECF2;border-radius:12px;position:relative;cursor:pointer;"><div style="position:absolute;left:3px;top:3px;width:18px;height:18px;background:#fff;border-radius:50%;"></div></div>
        </div>
      </div>
    </div>

    <!-- Sécurité -->
    <div style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:800;color:#1A2332;margin-bottom:12px;">🔒 Sécurité & Accès</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <button onclick="showToast('🔑 Rotation des clés lancée')" style="width:100%;padding:11px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;text-align:left;">🔑 Rotation clés API blockchain</button>
        <button onclick="showToast('📋 Logs exportés')" style="width:100%;padding:11px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;text-align:left;">📋 Exporter logs audit complets</button>
        <button onclick="showToast('🔄 Sauvegarde lancée')" style="width:100%;padding:11px;background:#E8F7EE;color:#27AE60;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;text-align:left;">🔄 Sauvegarde base de données</button>
        <button onclick="showToast('📊 Rapport généré')" style="width:100%;padding:11px;background:#E8F7EE;color:#27AE60;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;text-align:left;">📊 Générer rapport ministère</button>
      </div>
    </div>

    <button onclick="showToast('👋 Déconnexion…');setTimeout(()=>goToScreen(27),800)" style="width:100%;padding:14px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:14px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">🚪 Se déconnecter</button>
  </div>
  <div style="background:#1A2332;display:flex;flex-shrink:0;">
    <button onclick="goToScreen(48)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">📊</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Dashboard</span></button>
    <button onclick="goToScreen(78)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">👥</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Utilisateurs</span></button>
    <button onclick="goToScreen(79)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">💊</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Stock</span></button>
    <button onclick="goToScreen(81)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">📈</span><span style="font-size:9px;color:rgba(255,255,255,0.5);">Rapports</span></button>
    <button onclick="goToScreen(82)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;"><span style="font-size:16px;">⚙️</span><span style="font-size:9px;font-weight:700;color:#1A6B8A;">Config</span></button>
  </div>
</div>

<!-- ========================================
     SCREEN 48 — SUCCESS CONFIRMATION
======================================== -->
<div class="web-screen" id="wscreen22">
  <div style="height:100%;background:linear-gradient(135deg,#1A2332 0%,#0F3F54 100%);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;">
    <div style="position:absolute;width:600px;height:600px;border-radius:50%;background:rgba(231,76,60,0.04);top:-200px;right:-150px;"></div>
    <div style="position:absolute;top:24px;left:32px;display:flex;align-items:center;gap:8px;">
      <div style="width:32px;height:32px;background:rgba(255,255,255,0.1);border-radius:10px;display:flex;align-items:center;justify-content:center;"><svg width="18" height="18" viewBox="0 0 52 52" fill="none"><path d="M26 4C18 4 10 8 8 15C7 22 10 26 14 30C18 34 24 42 26 48C28 42 34 34 38 30C42 26 45 22 44 15C42 8 34 4 26 4Z" fill="white" opacity="0.9"/><rect x="23" y="14" width="6" height="16" rx="3" fill="#1A6B8A"/><rect x="18" y="19" width="16" height="6" rx="3" fill="#1A6B8A"/></svg></div>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:rgba(255,255,255,0.7);">ILERA AFRICA</span>
    </div>
    <div style="background:#fff;border-radius:24px;padding:40px;width:420px;box-shadow:0 32px 80px rgba(0,0,0,0.5);">
      <div style="text-align:center;margin-bottom:28px;">
        <div style="width:56px;height:56px;background:#FEF0EE;border-radius:18px;display:flex;align-items:center;justify-content:center;font-size:26px;margin:0 auto 14px;">🛡️</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#1A2332;">Accès Administrateur</div>
        <div style="font-size:13px;color:#6B7A8D;margin-top:6px;">Panneau d'administration sécurisé · ILERA AFRICA</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:14px;">
        <div><div style="font-size:11px;font-weight:700;color:#6B7A8D;margin-bottom:6px;letter-spacing:0.5px;">EMAIL ADMINISTRATEUR</div><input type="email" value="admin@ilera.africa" style="width:100%;padding:12px 14px;border:1.5px solid #E2ECF2;border-radius:12px;font-size:14px;font-family:'DM Sans',sans-serif;outline:none;color:#1A2332;box-sizing:border-box;"></div>
        <div><div style="font-size:11px;font-weight:700;color:#6B7A8D;margin-bottom:6px;letter-spacing:0.5px;">MOT DE PASSE</div><input type="password" value="••••••••••••" style="width:100%;padding:12px 14px;border:1.5px solid #E2ECF2;border-radius:12px;font-size:14px;font-family:'DM Sans',sans-serif;outline:none;box-sizing:border-box;"></div>
        <div>
          <div style="font-size:11px;font-weight:700;color:#6B7A8D;margin-bottom:6px;letter-spacing:0.5px;">CODE GOOGLE AUTHENTICATOR</div>
          <div style="display:flex;gap:8px;justify-content:center;">
            <input maxlength="1" style="width:46px;height:48px;border:1.5px solid #E2ECF2;border-radius:12px;font-size:20px;font-weight:700;text-align:center;font-family:'DM Sans',sans-serif;outline:none;box-sizing:border-box;">
            <input maxlength="1" style="width:46px;height:48px;border:1.5px solid #E2ECF2;border-radius:12px;font-size:20px;font-weight:700;text-align:center;font-family:'DM Sans',sans-serif;outline:none;box-sizing:border-box;">
            <input maxlength="1" style="width:46px;height:48px;border:1.5px solid #E2ECF2;border-radius:12px;font-size:20px;font-weight:700;text-align:center;font-family:'DM Sans',sans-serif;outline:none;box-sizing:border-box;">
            <input maxlength="1" style="width:46px;height:48px;border:1.5px solid #E2ECF2;border-radius:12px;font-size:20px;font-weight:700;text-align:center;font-family:'DM Sans',sans-serif;outline:none;box-sizing:border-box;">
            <input maxlength="1" style="width:46px;height:48px;border:1.5px solid #E2ECF2;border-radius:12px;font-size:20px;font-weight:700;text-align:center;font-family:'DM Sans',sans-serif;outline:none;box-sizing:border-box;">
            <input maxlength="1" style="width:46px;height:48px;border:1.5px solid #E2ECF2;border-radius:12px;font-size:20px;font-weight:700;text-align:center;font-family:'DM Sans',sans-serif;outline:none;box-sizing:border-box;">
          </div>
        </div>
        <div style="background:#FEF0EE;border-radius:10px;padding:10px 12px;border:1px solid rgba(231,76,60,0.15);font-size:11px;color:#E74C3C;font-weight:600;">⚠️ Accès réservé aux administrateurs autorisés. Toutes les connexions sont auditées.</div>
        <button onclick="goToWebScreen(23)" style="padding:14px;background:linear-gradient(135deg,#1A2332,#0F3F54);color:#fff;border:none;border-radius:12px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,0.3);">🛡️ Accéder au panneau</button>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     WEB SCREEN 20 — ADMIN DASHBOARD
======================================== -->
<div class="web-screen" id="wscreen23">
  <div style="display:flex;height:100%;overflow:hidden;">
    <!-- Admin sidebar -->
    <div style="width:220px;background:#1A2332;display:flex;flex-direction:column;flex-shrink:0;">
      <div style="padding:20px 16px;border-bottom:1px solid rgba(255,255,255,0.06);">
        <div style="display:flex;align-items:center;gap:8px;"><div style="width:28px;height:28px;background:rgba(231,76,60,0.2);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;">🛡️</div><span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#fff;">Admin Panel</span></div>
      </div>
      <nav style="flex:1;padding:12px 8px;display:flex;flex-direction:column;gap:2px;">
        <a onclick="goToWebScreen(23)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:rgba(255,255,255,0.08);border-radius:10px;color:#fff;cursor:pointer;font-size:13px;font-weight:600;font-family:'DM Sans',sans-serif;">📊 Dashboard</a>
        <a onclick="goToWebScreen(24)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">👥 Utilisateurs</a>
        <a onclick="goToWebScreen(25)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">💊 Produits &amp; Stock</a>
        <a onclick="goToWebScreen(26)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📦 Commandes</a>
        <a onclick="goToWebScreen(27)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📈 Rapports</a>
        <a onclick="goToWebScreen(28)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">🔒 Audit &amp; Logs</a>
        <div style="height:1px;background:rgba(255,255,255,0.08);margin:4px 0;"></div>
        <a onclick="goToWebScreen(64)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">🛵 Livreurs</a>
        <a onclick="goToWebScreen(65)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">🏥 Pharmacies</a>
        <a onclick="goToWebScreen(66)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📈 Analytics</a>
        <a onclick="goToWebScreen(67)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">🦠 Épidémies IR</a>
        <a onclick="goToWebScreen(68)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">⛓️ Blockchain</a>
        <a onclick="goToWebScreen(69)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">⚙️ Config. système</a>
        <a onclick="goToScreen(37)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">⚙️ Paramètres</a>
      </nav>
      <div style="padding:12px;border-top:1px solid rgba(255,255,255,0.06);">
        <div style="display:flex;align-items:center;gap:8px;padding:10px;background:rgba(255,255,255,0.05);border-radius:10px;margin-bottom:8px;">
          <div style="width:30px;height:30px;background:rgba(231,76,60,0.2);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;">🛡️</div>
          <div><div style="font-size:11px;font-weight:700;color:#fff;">Admin Principal</div><div style="font-size:10px;color:rgba(255,255,255,0.4);">Niveau: SuperAdmin</div></div>
        </div>
        <button onclick="goToWebScreen(22)" style="width:100%;padding:8px;background:rgba(231,76,60,0.15);color:rgba(255,255,255,0.7);border:1px solid rgba(231,76,60,0.2);border-radius:8px;font-size:12px;cursor:pointer;font-family:'DM Sans',sans-serif;">Déconnexion</button>
      </div>
    </div>
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;">
      <div style="background:#fff;padding:14px 24px;display:flex;justify-content:space-between;align-items:center;border-bottom:1.5px solid #E2ECF2;position:sticky;top:0;z-index:10;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">Dashboard Administration</div>
        <div style="display:flex;align-items:center;gap:12px;"><div style="font-size:13px;color:#6B7A8D;">📅 14 octobre 2024, 14:22</div><div style="position:relative;cursor:pointer;" onclick="showToast('5 alertes')"><div style="width:32px;height:32px;background:#FEF0EE;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;">🔔</div><div style="position:absolute;top:-2px;right:-2px;width:16px;height:16px;background:#E74C3C;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:#fff;">5</div></div></div>
      </div>
      <div style="padding:20px 24px;display:flex;flex-direction:column;gap:16px;">
        <!-- KPI Row -->
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;">
          <div style="background:linear-gradient(135deg,#1A6B8A,#2196B3);border-radius:14px;padding:18px;color:#fff;"><div style="font-size:11px;opacity:0.8;margin-bottom:6px;">👥 Utilisateurs actifs</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:800;">2 847</div><div style="font-size:11px;opacity:0.7;margin-top:4px;">↑ +23 cette semaine</div></div>
          <div style="background:linear-gradient(135deg,#27AE60,#2ecc71);border-radius:14px;padding:18px;color:#fff;"><div style="font-size:11px;opacity:0.8;margin-bottom:6px;">📦 Commandes/jour</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:800;">156</div><div style="font-size:11px;opacity:0.7;margin-top:4px;">↑ +12% vs hier</div></div>
          <div style="background:linear-gradient(135deg,#E74C3C,#c0392b);border-radius:14px;padding:18px;color:#fff;"><div style="font-size:11px;opacity:0.8;margin-bottom:6px;">⚠️ Ruptures de stock</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:800;">8</div><div style="font-size:11px;opacity:0.7;margin-top:4px;">↑ +3 nouvelles</div></div>
          <div style="background:linear-gradient(135deg,#F39C12,#e67e22);border-radius:14px;padding:18px;color:#fff;"><div style="font-size:11px;opacity:0.8;margin-bottom:6px;">💰 Revenus du mois</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;font-weight:800;">4 200 000</div><div style="font-size:11px;opacity:0.7;margin-top:4px;">FCFA · ↑ +8%</div></div>
        </div>
        <!-- Row 2: Alerts + Audit -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
          <div style="background:#fff;border-radius:14px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
            <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;margin-bottom:14px;">⚠️ Alertes critiques</div>
            <div style="display:flex;flex-direction:column;gap:10px;">
              <div style="background:#FEF0EE;border-radius:10px;padding:12px;border-left:3px solid #E74C3C;"><div style="font-size:12px;font-weight:700;color:#E74C3C;margin-bottom:2px;">Rupture stock — Paracétamol 500mg</div><div style="font-size:11px;color:#6B7A8D;">Stock: 0 unités · Seuil critique: 50 · <button onclick="goToWebScreen(25)" style="border:none;background:none;color:#1A6B8A;font-size:11px;font-weight:700;cursor:pointer;padding:0;font-family:'DM Sans',sans-serif;">Gérer →</button></div></div>
              <div style="background:#FEF9EE;border-radius:10px;padding:12px;border-left:3px solid #F39C12;"><div style="font-size:12px;font-weight:700;color:#F39C12;margin-bottom:2px;">Commande signalée · #CMD-90198</div><div style="font-size:11px;color:#6B7A8D;">Montant inhabituel · <button onclick="goToWebScreen(26)" style="border:none;background:none;color:#1A6B8A;font-size:11px;font-weight:700;cursor:pointer;padding:0;font-family:'DM Sans',sans-serif;">Vérifier →</button></div></div>
              <div style="background:#FEF9EE;border-radius:10px;padding:12px;border-left:3px solid #F39C12;"><div style="font-size:12px;font-weight:700;color:#F39C12;margin-bottom:2px;">Compte pharmacien non vérifié</div><div style="font-size:11px;color:#6B7A8D;">Dr. Ibrahim Koné · Documents manquants</div></div>
            </div>
          </div>
          <div style="background:#fff;border-radius:14px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">Journal d'audit</div><button onclick="goToWebScreen(28)" style="font-size:12px;color:#1A6B8A;background:none;border:none;cursor:pointer;font-weight:700;font-family:'DM Sans',sans-serif;">Voir tout →</button></div>
            <div style="display:flex;flex-direction:column;gap:8px;">
              <div style="display:flex;gap:10px;align-items:center;padding:8px;background:#F4F9FC;border-radius:8px;"><div style="width:8px;height:8px;background:#27AE60;border-radius:50%;flex-shrink:0;"></div><div style="flex:1;font-size:12px;color:#1A2332;">Utilisateur créé: J-M. Diabaté</div><div style="font-size:10px;color:#6B7A8D;white-space:nowrap;">09:14</div></div>
              <div style="display:flex;gap:10px;align-items:center;padding:8px;background:#F4F9FC;border-radius:8px;"><div style="width:8px;height:8px;background:#E74C3C;border-radius:50%;flex-shrink:0;"></div><div style="flex:1;font-size:12px;color:#1A2332;">Tentative de connexion échouée (×3)</div><div style="font-size:10px;color:#6B7A8D;white-space:nowrap;">09:03</div></div>
              <div style="display:flex;gap:10px;align-items:center;padding:8px;background:#F4F9FC;border-radius:8px;"><div style="width:8px;height:8px;background:#27AE60;border-radius:50%;flex-shrink:0;"></div><div style="flex:1;font-size:12px;color:#1A2332;">Stock mis à jour: Metformine 850mg</div><div style="font-size:10px;color:#6B7A8D;white-space:nowrap;">08:50</div></div>
              <div style="display:flex;gap:10px;align-items:center;padding:8px;background:#F4F9FC;border-radius:8px;"><div style="width:8px;height:8px;background:#1A6B8A;border-radius:50%;flex-shrink:0;"></div><div style="flex:1;font-size:12px;color:#1A2332;">Rapport mensuel exporté (PDF)</div><div style="font-size:10px;color:#6B7A8D;white-space:nowrap;">08:32</div></div>
              <div style="display:flex;gap:10px;align-items:center;padding:8px;background:#F4F9FC;border-radius:8px;"><div style="width:8px;height:8px;background:#27AE60;border-radius:50%;flex-shrink:0;"></div><div style="flex:1;font-size:12px;color:#1A2332;">Nouvelle pharmacie ajoutée: Pharma Nord CI</div><div style="font-size:10px;color:#6B7A8D;white-space:nowrap;">08:11</div></div>
            </div>
          </div>
        </div>
        <!-- Quick actions -->
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;">
          <button onclick="goToWebScreen(24)" style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);border:none;cursor:pointer;text-align:center;"><div style="font-size:24px;margin-bottom:6px;">👥</div><div style="font-size:12px;font-weight:700;color:#1A2332;font-family:'DM Sans',sans-serif;">Gérer utilisateurs</div></button>
          <button onclick="goToWebScreen(25)" style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);border:none;cursor:pointer;text-align:center;"><div style="font-size:24px;margin-bottom:6px;">💊</div><div style="font-size:12px;font-weight:700;color:#1A2332;font-family:'DM Sans',sans-serif;">Produits &amp; Stock</div></button>
          <button onclick="goToWebScreen(27)" style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);border:none;cursor:pointer;text-align:center;"><div style="font-size:24px;margin-bottom:6px;">📊</div><div style="font-size:12px;font-weight:700;color:#1A2332;font-family:'DM Sans',sans-serif;">Rapports</div></button>
          <button onclick="goToWebScreen(64)" style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);border:none;cursor:pointer;text-align:center;"><div style="font-size:24px;margin-bottom:6px;">🛵</div><div style="font-size:12px;font-weight:700;color:#1A2332;font-family:'DM Sans',sans-serif;">Livreurs</div></button>
          <button onclick="goToWebScreen(65)" style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);border:none;cursor:pointer;text-align:center;"><div style="font-size:24px;margin-bottom:6px;">🏥</div><div style="font-size:12px;font-weight:700;color:#1A2332;font-family:'DM Sans',sans-serif;">Pharmacies</div></button>
          <button onclick="goToWebScreen(66)" style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);border:none;cursor:pointer;text-align:center;"><div style="font-size:24px;margin-bottom:6px;">📈</div><div style="font-size:12px;font-weight:700;color:#1A2332;font-family:'DM Sans',sans-serif;">Analytics</div></button>
          <button onclick="goToWebScreen(67)" style="background:linear-gradient(135deg,#FEF0EE,#FFD5D0);border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);border:none;cursor:pointer;text-align:center;"><div style="font-size:24px;margin-bottom:6px;">🦠</div><div style="font-size:12px;font-weight:700;color:#E74C3C;font-family:'DM Sans',sans-serif;">Épidémies IR</div></button>
          <button onclick="goToWebScreen(68)" style="background:linear-gradient(135deg,#161B22,#1C2128);border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);border:none;cursor:pointer;text-align:center;"><div style="font-size:24px;margin-bottom:6px;">⛓️</div><div style="font-size:12px;font-weight:700;color:#27AE60;font-family:'DM Sans',sans-serif;">Blockchain</div></button>
        </div>
        <!-- Live Chart Section -->
        <div style="display:grid;grid-template-columns:2fr 1fr;gap:16px;">
          <div style="background:#fff;border-radius:14px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
              <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">Commandes — 7 derniers jours</div>
              <div style="font-size:11px;color:#27AE60;font-weight:700;">↑ +12% cette semaine</div>
            </div>
            <div id="admin-bar-chart" style="display:flex;align-items:flex-end;gap:8px;height:80px;padding:0 4px;"></div>
            <div style="display:flex;justify-content:space-between;margin-top:6px;padding:0 4px;">
              <span style="font-size:10px;color:#6B7A8D;">Lun</span><span style="font-size:10px;color:#6B7A8D;">Mar</span><span style="font-size:10px;color:#6B7A8D;">Mer</span><span style="font-size:10px;color:#6B7A8D;">Jeu</span><span style="font-size:10px;color:#6B7A8D;">Ven</span><span style="font-size:10px;color:#6B7A8D;">Sam</span><span style="font-size:10px;color:#1A6B8A;font-weight:700;">Auj</span>
            </div>
          </div>
          <div style="background:#fff;border-radius:14px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
            <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;margin-bottom:16px;">Répartition profils</div>
            <div id="admin-donut-chart" style="position:relative;width:100%;display:flex;justify-content:center;"></div>
            <div style="display:flex;flex-direction:column;gap:6px;margin-top:12px;">
              <div style="display:flex;justify-content:space-between;font-size:11px;"><span style="display:flex;align-items:center;gap:6px;"><span style="width:8px;height:8px;background:#1A6B8A;border-radius:50%;display:inline-block;"></span>Patients</span><span style="font-weight:700;color:#1A2332;">2 234</span></div>
              <div style="display:flex;justify-content:space-between;font-size:11px;"><span style="display:flex;align-items:center;gap:6px;"><span style="width:8px;height:8px;background:#27AE60;border-radius:50%;display:inline-block;"></span>Pharmaciens</span><span style="font-weight:700;color:#1A2332;">312</span></div>
              <div style="display:flex;justify-content:space-between;font-size:11px;"><span style="display:flex;align-items:center;gap:6px;"><span style="width:8px;height:8px;background:#0D3B2E;border-radius:50%;display:inline-block;"></span>Médecins</span><span style="font-weight:700;color:#1A2332;">189</span></div>
              <div style="display:flex;justify-content:space-between;font-size:11px;"><span style="display:flex;align-items:center;gap:6px;"><span style="width:8px;height:8px;background:#F39C12;border-radius:50%;display:inline-block;"></span>Livreurs</span><span style="font-weight:700;color:#1A2332;">112</span></div>
            </div>
          </div>
        </div>
          <button onclick="goToWebScreen(28)" style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);border:none;cursor:pointer;text-align:center;"><div style="font-size:24px;margin-bottom:6px;">🔒</div><div style="font-size:12px;font-weight:700;color:#1A2332;font-family:'DM Sans',sans-serif;">Audit &amp; Sécurité</div></button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     WEB SCREEN 21 — USER MANAGEMENT
======================================== -->
<div class="web-screen" id="wscreen24">
  <div style="display:flex;height:100%;overflow:hidden;">
    <div style="width:220px;background:#1A2332;flex-shrink:0;display:flex;flex-direction:column;">
      <div style="padding:20px 16px;border-bottom:1px solid rgba(255,255,255,0.06);"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#fff;">🛡️ Admin Panel</div></div>
      <nav style="flex:1;padding:12px 8px;display:flex;flex-direction:column;gap:2px;">
        <a onclick="goToWebScreen(23)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📊 Dashboard</a>
        <a onclick="goToWebScreen(24)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:rgba(255,255,255,0.08);border-radius:10px;color:#fff;cursor:pointer;font-size:13px;font-weight:600;font-family:'DM Sans',sans-serif;">👥 Utilisateurs</a>
        <a onclick="goToWebScreen(25)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">💊 Produits &amp; Stock</a>
        <a onclick="goToWebScreen(26)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📦 Commandes</a>
        <a onclick="goToWebScreen(27)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📈 Rapports</a>
        <a onclick="goToWebScreen(28)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">🔒 Audit &amp; Logs</a>
      </nav>
    </div>
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;">
      <div style="background:#fff;padding:14px 24px;display:flex;justify-content:space-between;align-items:center;border-bottom:1.5px solid #E2ECF2;position:sticky;top:0;z-index:10;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">Gestion des Utilisateurs</div>
        <div style="display:flex;gap:8px;">
          <input type="text" placeholder="Rechercher..." style="padding:8px 12px;border:1.5px solid #E2ECF2;border-radius:8px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;width:180px;">
          <select style="padding:8px 12px;border:1.5px solid #E2ECF2;border-radius:8px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;"><option>Tous les rôles</option><option>Patient</option><option>Pharmacien</option><option>Admin</option></select>
          <button onclick="showModal('add-user-modal')" style="padding:8px 16px;background:#1A6B8A;color:#fff;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">+ Ajouter</button>
        </div>
      </div>
      <div style="padding:20px 24px;">
        <div style="background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          <table style="width:100%;border-collapse:collapse;">
            <thead style="background:#F4F9FC;"><tr>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Utilisateur</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Rôle</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Statut</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Dernière connexion</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Actions</th>
            </tr></thead>
            <tbody>
              <tr style="border-top:1px solid #F4F9FC;">
                <td style="padding:12px 16px;"><div style="display:flex;align-items:center;gap:10px;"><div style="width:36px;height:36px;background:#E8F4F8;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;color:#1A2332;">MK</div><div><div style="font-size:13px;font-weight:700;color:#1A2332;">Moussa Koné</div><div style="font-size:11px;color:#6B7A8D;"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="5a37352f29293b743135343f1a3f373b3336743933">[email&#160;protected]</a></div></div></div></td>
                <td style="padding:12px 16px;"><span style="background:#E8F4F8;color:#1A6B8A;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700;">Patient</span></td>
                <td style="padding:12px 16px;"><div style="display:flex;align-items:center;gap:6px;"><div style="width:8px;height:8px;background:#27AE60;border-radius:50%;"></div><span style="font-size:12px;color:#27AE60;font-weight:600;">Actif</span></div></td>
                <td style="padding:12px 16px;font-size:12px;color:#6B7A8D;">14 oct. 2024, 10:30</td>
                <td style="padding:12px 16px;"><div style="display:flex;gap:6px;"><button onclick="showModal('edit-user-modal')" style="padding:5px 10px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">✏️</button><button onclick="showModal('confirm-suspend-modal')" style="padding:5px 10px;background:#FEF9EE;color:#F39C12;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">⏸</button><button onclick="showModal('confirm-delete-modal')" style="padding:5px 10px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">🗑</button></div></td>
              </tr>
              <tr style="border-top:1px solid #F4F9FC;">
                <td style="padding:12px 16px;"><div style="display:flex;align-items:center;gap:10px;"><div style="width:36px;height:36px;background:#E8F4F8;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;color:#1A2332;">SL</div><div><div style="font-size:13px;font-weight:700;color:#1A2332;">Dr. Sophie Lefebvre</div><div style="font-size:11px;color:#6B7A8D;"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="4d3e6321282b282f3b3f280d3d252c3f202c603d212c39282c38632e24">[email&#160;protected]</a></div></div></div></td>
                <td style="padding:12px 16px;"><span style="background:#E8F7EE;color:#27AE60;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700;">Pharmacien</span></td>
                <td style="padding:12px 16px;"><div style="display:flex;align-items:center;gap:6px;"><div style="width:8px;height:8px;background:#27AE60;border-radius:50%;"></div><span style="font-size:12px;color:#27AE60;font-weight:600;">Actif</span></div></td>
                <td style="padding:12px 16px;font-size:12px;color:#6B7A8D;">14 oct. 2024, 08:45</td>
                <td style="padding:12px 16px;"><div style="display:flex;gap:6px;"><button onclick="showToast('Modifier Dr. Lefebvre')" style="padding:5px 10px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">✏️</button><button onclick="showModal('confirm-suspend-modal')" style="padding:5px 10px;background:#FEF9EE;color:#F39C12;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">⏸</button></div></td>
              </tr>
              <tr style="border-top:1px solid #F4F9FC;">
                <td style="padding:12px 16px;"><div style="display:flex;align-items:center;gap:10px;"><div style="width:36px;height:36px;background:#FEF9EE;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;color:#F39C12;">IK</div><div><div style="font-size:13px;font-weight:700;color:#1A2332;">Dr. Ibrahim Koné</div><div style="font-size:11px;color:#6B7A8D;"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="5a33743135343f1a2a323b28373b773435283e743933">[email&#160;protected]</a></div></div></div></td>
                <td style="padding:12px 16px;"><span style="background:#E8F7EE;color:#27AE60;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700;">Pharmacien</span></td>
                <td style="padding:12px 16px;"><div style="display:flex;align-items:center;gap:6px;"><div style="width:8px;height:8px;background:#F39C12;border-radius:50%;"></div><span style="font-size:12px;color:#F39C12;font-weight:600;">En attente</span></div></td>
                <td style="padding:12px 16px;font-size:12px;color:#6B7A8D;">Jamais connecté</td>
                <td style="padding:12px 16px;"><div style="display:flex;gap:6px;"><button onclick="showToast('Vérifier documents')" style="padding:5px 10px;background:#FEF9EE;color:#F39C12;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Vérifier</button><button onclick="showToast('Supprimer')" style="padding:5px 10px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">🗑</button></div></td>
              </tr>
              <tr style="border-top:1px solid #F4F9FC;">
                <td style="padding:12px 16px;"><div style="display:flex;align-items:center;gap:10px;"><div style="width:36px;height:36px;background:#E8F4F8;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;color:#1A2332;">AD</div><div><div style="font-size:13px;font-weight:700;color:#1A2332;">Aïcha Diallo</div><div style="font-size:11px;color:#6B7A8D;"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="dabbf4beb3bbb6b6b59abfb7bbb3b6f4b9b3">[email&#160;protected]</a></div></div></div></td>
                <td style="padding:12px 16px;"><span style="background:#E8F4F8;color:#1A6B8A;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700;">Patient</span></td>
                <td style="padding:12px 16px;"><div style="display:flex;align-items:center;gap:6px;"><div style="width:8px;height:8px;background:#27AE60;border-radius:50%;"></div><span style="font-size:12px;color:#27AE60;font-weight:600;">Actif</span></div></td>
                <td style="padding:12px 16px;font-size:12px;color:#6B7A8D;">14 oct. 2024, 09:22</td>
                <td style="padding:12px 16px;"><div style="display:flex;gap:6px;"><button onclick="showToast('Modifier')" style="padding:5px 10px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">✏️</button><button onclick="showModal('confirm-suspend-modal')" style="padding:5px 10px;background:#FEF9EE;color:#F39C12;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">⏸</button></div></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Pagination -->
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px;">
          <div style="font-size:13px;color:#6B7A8D;">Affichage 1–4 sur 2 847 utilisateurs</div>
          <div style="display:flex;gap:6px;">
            <button onclick="showToast('Précédent')" style="padding:7px 14px;background:#fff;border:1.5px solid #E2ECF2;border-radius:8px;font-size:13px;cursor:pointer;font-family:'DM Sans',sans-serif;color:#6B7A8D;">← Préc.</button>
            <button style="padding:7px 12px;background:#1A6B8A;color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">1</button>
            <button onclick="showToast('Page 2')" style="padding:7px 12px;background:#fff;border:1.5px solid #E2ECF2;border-radius:8px;font-size:13px;cursor:pointer;font-family:'DM Sans',sans-serif;color:#6B7A8D;">2</button>
            <button onclick="showToast('Suivant')" style="padding:7px 14px;background:#fff;border:1.5px solid #E2ECF2;border-radius:8px;font-size:13px;cursor:pointer;font-family:'DM Sans',sans-serif;color:#6B7A8D;">Suiv. →</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     WEB SCREEN 22 — STOCK MANAGEMENT
======================================== -->
<div class="web-screen" id="wscreen25">
  <div style="display:flex;height:100%;overflow:hidden;">
    <div style="width:220px;background:#1A2332;flex-shrink:0;display:flex;flex-direction:column;">
      <div style="padding:20px 16px;border-bottom:1px solid rgba(255,255,255,0.06);"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#fff;">🛡️ Admin Panel</div></div>
      <nav style="flex:1;padding:12px 8px;display:flex;flex-direction:column;gap:2px;">
        <a onclick="goToWebScreen(23)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📊 Dashboard</a>
        <a onclick="goToWebScreen(24)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">👥 Utilisateurs</a>
        <a onclick="goToWebScreen(25)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:rgba(255,255,255,0.08);border-radius:10px;color:#fff;cursor:pointer;font-size:13px;font-weight:600;font-family:'DM Sans',sans-serif;">💊 Produits &amp; Stock</a>
        <a onclick="goToWebScreen(26)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📦 Commandes</a>
        <a onclick="goToWebScreen(27)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📈 Rapports</a>
        <a onclick="goToWebScreen(28)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">🔒 Audit &amp; Logs</a>
      </nav>
    </div>
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;">
      <div style="background:#fff;padding:14px 24px;display:flex;justify-content:space-between;align-items:center;border-bottom:1.5px solid #E2ECF2;position:sticky;top:0;z-index:10;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">💊 Produits &amp; Gestion des Stocks</div>
        <div style="display:flex;gap:8px;">
          <input type="text" placeholder="Rechercher produit..." style="padding:8px 12px;border:1.5px solid #E2ECF2;border-radius:8px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;width:200px;">
          <select style="padding:8px 12px;border:1.5px solid #E2ECF2;border-radius:8px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;"><option>Toutes catégories</option><option>Antibiotiques</option><option>Analgésiques</option><option>Antidiabétiques</option></select>
          <button onclick="showModal('add-product-modal')" style="padding:8px 16px;background:#1A6B8A;color:#fff;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">+ Produit</button>
          <button onclick="showToast('📦 Commande de réapprovisionnement envoyée ✓')" style="padding:8px 16px;background:#27AE60;color:#fff;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📦 Commander</button>
        </div>
      </div>
      <div style="padding:20px 24px;display:flex;flex-direction:column;gap:16px;">
        <!-- Stock alert banner -->
        <div style="background:#FEF0EE;border-radius:12px;padding:14px 18px;border:1.5px solid rgba(231,76,60,0.2);display:flex;align-items:center;gap:10px;">
          <span style="font-size:18px;">🚨</span>
          <div style="flex:1;font-size:13px;color:#E74C3C;font-weight:600;">8 produits en rupture ou stock critique — Action requise</div>
          <button onclick="filterAlerts()" style="padding:7px 14px;background:#E74C3C;color:#fff;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Voir alertes</button>
        </div>
        <!-- Products table -->
        <div style="background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          <table style="width:100%;border-collapse:collapse;">
            <thead style="background:#F4F9FC;"><tr>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Produit</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Catégorie</th>
              <th style="text-align:right;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Stock actuel</th>
              <th style="text-align:right;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Seuil min.</th>
              <th style="text-align:right;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Prix (FCFA)</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Statut</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Actions</th>
            </tr></thead>
            <tbody>
              <tr style="border-top:1px solid #F4F9FC;">
                <td style="padding:12px 16px;"><div style="font-size:13px;font-weight:700;color:#1A2332;">Paracétamol 500mg</div><div style="font-size:11px;color:#6B7A8D;">REF-001 · Boîte 16cp</div></td>
                <td style="padding:12px 16px;font-size:12px;color:#6B7A8D;">Analgésiques</td>
                <td style="padding:12px 16px;text-align:right;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#E74C3C;">0</td>
                <td style="padding:12px 16px;text-align:right;font-size:12px;color:#6B7A8D;">50</td>
                <td style="padding:12px 16px;text-align:right;font-size:13px;font-weight:600;color:#1A2332;">1 200</td>
                <td style="padding:12px 16px;"><span style="background:#FEF0EE;color:#E74C3C;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700;">RUPTURE 🚨</span></td>
                <td style="padding:12px 16px;"><button onclick="showToast('✓ Commande Paracétamol envoyée au fournisseur')" style="padding:5px 12px;background:#E74C3C;color:#fff;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Commander</button></td>
              </tr>
              <tr style="border-top:1px solid #F4F9FC;">
                <td style="padding:12px 16px;"><div style="font-size:13px;font-weight:700;color:#1A2332;">Amoxicilline 500mg</div><div style="font-size:11px;color:#6B7A8D;">REF-024 · Boîte 12cp</div></td>
                <td style="padding:12px 16px;font-size:12px;color:#6B7A8D;">Antibiotiques</td>
                <td style="padding:12px 16px;text-align:right;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#F39C12;">18</td>
                <td style="padding:12px 16px;text-align:right;font-size:12px;color:#6B7A8D;">30</td>
                <td style="padding:12px 16px;text-align:right;font-size:13px;font-weight:600;color:#1A2332;">2 100</td>
                <td style="padding:12px 16px;"><span style="background:#FEF9EE;color:#F39C12;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700;">CRITIQUE ⚠️</span></td>
                <td style="padding:12px 16px;"><button onclick="showToast('Commander Amoxicilline')" style="padding:5px 12px;background:#F39C12;color:#fff;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Réappro.</button></td>
              </tr>
              <tr style="border-top:1px solid #F4F9FC;">
                <td style="padding:12px 16px;"><div style="font-size:13px;font-weight:700;color:#1A2332;">Metformine 850mg</div><div style="font-size:11px;color:#6B7A8D;">REF-087 · Boîte 30cp</div></td>
                <td style="padding:12px 16px;font-size:12px;color:#6B7A8D;">Antidiabétiques</td>
                <td style="padding:12px 16px;text-align:right;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#27AE60;">245</td>
                <td style="padding:12px 16px;text-align:right;font-size:12px;color:#6B7A8D;">50</td>
                <td style="padding:12px 16px;text-align:right;font-size:13px;font-weight:600;color:#1A2332;">2 800</td>
                <td style="padding:12px 16px;"><span style="background:#E8F7EE;color:#27AE60;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700;">OK ✓</span></td>
                <td style="padding:12px 16px;"><button onclick="showToast('Modifier stock')" style="padding:5px 12px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">✏️ Modifier</button></td>
              </tr>
              <tr style="border-top:1px solid #F4F9FC;">
                <td style="padding:12px 16px;"><div style="font-size:13px;font-weight:700;color:#1A2332;">Ibuprofène 400mg</div><div style="font-size:11px;color:#6B7A8D;">REF-015 · Boîte 20cp</div></td>
                <td style="padding:12px 16px;font-size:12px;color:#6B7A8D;">Anti-inflammatoires</td>
                <td style="padding:12px 16px;text-align:right;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#27AE60;">312</td>
                <td style="padding:12px 16px;text-align:right;font-size:12px;color:#6B7A8D;">40</td>
                <td style="padding:12px 16px;text-align:right;font-size:13px;font-weight:600;color:#1A2332;">1 800</td>
                <td style="padding:12px 16px;"><span style="background:#E8F7EE;color:#27AE60;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700;">OK ✓</span></td>
                <td style="padding:12px 16px;"><button onclick="showToast('Modifier stock')" style="padding:5px 12px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">✏️ Modifier</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     WEB SCREEN 23 — ORDER SUPERVISION (ADMIN)
======================================== -->
<div class="web-screen" id="wscreen26">
  <div style="display:flex;height:100%;overflow:hidden;">
    <div style="width:220px;background:#1A2332;flex-shrink:0;display:flex;flex-direction:column;">
      <div style="padding:20px 16px;border-bottom:1px solid rgba(255,255,255,0.06);"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#fff;">🛡️ Admin Panel</div></div>
      <nav style="flex:1;padding:12px 8px;display:flex;flex-direction:column;gap:2px;">
        <a onclick="goToWebScreen(23)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📊 Dashboard</a>
        <a onclick="goToWebScreen(24)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">👥 Utilisateurs</a>
        <a onclick="goToWebScreen(25)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">💊 Produits &amp; Stock</a>
        <a onclick="goToWebScreen(26)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:rgba(255,255,255,0.08);border-radius:10px;color:#fff;cursor:pointer;font-size:13px;font-weight:600;font-family:'DM Sans',sans-serif;">📦 Commandes</a>
        <a onclick="goToWebScreen(27)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📈 Rapports</a>
        <a onclick="goToWebScreen(28)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">🔒 Audit &amp; Logs</a>
      </nav>
    </div>
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;">
      <div style="background:#fff;padding:14px 24px;display:flex;justify-content:space-between;align-items:center;border-bottom:1.5px solid #E2ECF2;position:sticky;top:0;z-index:10;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">📦 Supervision des Commandes</div>
        <div style="display:flex;gap:8px;">
          <input type="text" placeholder="Rechercher #CMD..." style="padding:8px 12px;border:1.5px solid #E2ECF2;border-radius:8px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;width:180px;">
          <select style="padding:8px 12px;border:1.5px solid #E2ECF2;border-radius:8px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;"><option>Tous statuts</option><option>En attente</option><option>En livraison</option><option>Livré</option><option>Signalé</option></select>
          <button onclick="showToast('Export CSV')" style="padding:8px 14px;background:#E8F4F8;color:#1A6B8A;border:1.5px solid #E2ECF2;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📥 Exporter</button>
        </div>
      </div>
      <div style="padding:20px 24px;display:flex;flex-direction:column;gap:16px;">
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;">
          <div style="background:#fff;border-radius:12px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05);border-left:3px solid #1A6B8A;"><div style="font-size:11px;color:#6B7A8D;">Total aujourd'hui</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#1A6B8A;">156</div></div>
          <div style="background:#fff;border-radius:12px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05);border-left:3px solid #27AE60;"><div style="font-size:11px;color:#6B7A8D;">Livrées</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#27AE60;">128</div></div>
          <div style="background:#fff;border-radius:12px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05);border-left:3px solid #F39C12;"><div style="font-size:11px;color:#6B7A8D;">En cours</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#F39C12;">24</div></div>
          <div style="background:#fff;border-radius:12px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05);border-left:3px solid #E74C3C;"><div style="font-size:11px;color:#6B7A8D;">Signalées</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#E74C3C;">4</div></div>
        </div>
        <div style="background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          <table style="width:100%;border-collapse:collapse;">
            <thead style="background:#F4F9FC;"><tr>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Référence</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Patient</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Pharmacie</th>
              <th style="text-align:right;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Montant</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Statut</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Actions</th>
            </tr></thead>
            <tbody>
              <tr style="border-top:1px solid #F4F9FC;background:#FEF9EE;">
                <td style="padding:12px 16px;font-size:13px;font-weight:700;color:#1A6B8A;">#CMD-90198</td>
                <td style="padding:12px 16px;font-size:13px;color:#1A2332;">Inconnu (non identifié)</td>
                <td style="padding:12px 16px;font-size:13px;color:#6B7A8D;">Pharma Express</td>
                <td style="padding:12px 16px;text-align:right;font-size:13px;font-weight:700;color:#E74C3C;">245 000 FCFA</td>
                <td style="padding:12px 16px;"><span style="background:#FEF9EE;color:#F39C12;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700;">⚠️ SIGNALÉE</span></td>
                <td style="padding:12px 16px;"><button onclick="showToast('Enquête ouverte')" style="padding:5px 12px;background:#F39C12;color:#fff;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Enquêter</button></td>
              </tr>
              <tr style="border-top:1px solid #F4F9FC;">
                <td style="padding:12px 16px;font-size:13px;font-weight:700;color:#1A6B8A;">#CMD-90214</td>
                <td style="padding:12px 16px;font-size:13px;color:#1A2332;">Moussa Koné</td>
                <td style="padding:12px 16px;font-size:13px;color:#6B7A8D;">Pharmacie du Plateau</td>
                <td style="padding:12px 16px;text-align:right;font-size:13px;font-weight:700;color:#1A2332;">12 500 FCFA</td>
                <td style="padding:12px 16px;"><span style="background:#E8F4F8;color:#1A6B8A;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700;">🚚 En livraison</span></td>
                <td style="padding:12px 16px;"><button onclick="showToast('Détail CMD-90214')" style="padding:5px 12px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Voir →</button></td>
              </tr>
              <tr style="border-top:1px solid #F4F9FC;">
                <td style="padding:12px 16px;font-size:13px;font-weight:700;color:#1A6B8A;">#CMD-90213</td>
                <td style="padding:12px 16px;font-size:13px;color:#1A2332;">Kofi Mensah</td>
                <td style="padding:12px 16px;font-size:13px;color:#6B7A8D;">Pharma Express</td>
                <td style="padding:12px 16px;text-align:right;font-size:13px;font-weight:700;color:#1A2332;">8 700 FCFA</td>
                <td style="padding:12px 16px;"><span style="background:#E8F7EE;color:#27AE60;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700;">✅ Livré</span></td>
                <td style="padding:12px 16px;"><button onclick="showToast('Détail CMD-90213')" style="padding:5px 12px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Voir →</button></td>
              </tr>
              <tr style="border-top:1px solid #F4F9FC;">
                <td style="padding:12px 16px;font-size:13px;font-weight:700;color:#1A6B8A;">#CMD-90212</td>
                <td style="padding:12px 16px;font-size:13px;color:#1A2332;">Fatou Traoré</td>
                <td style="padding:12px 16px;font-size:13px;color:#6B7A8D;">Pharmacie du Plateau</td>
                <td style="padding:12px 16px;text-align:right;font-size:13px;font-weight:700;color:#1A2332;">5 400 FCFA</td>
                <td style="padding:12px 16px;"><span style="background:#E8F7EE;color:#27AE60;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700;">✅ Livré</span></td>
                <td style="padding:12px 16px;"><button onclick="showToast('Détail CMD-90212')" style="padding:5px 12px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Voir →</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     WEB SCREEN 24 — REPORTS & ANALYTICS
======================================== -->
<div class="web-screen" id="wscreen27">
  <div style="display:flex;height:100%;overflow:hidden;">
    <div style="width:220px;background:#1A2332;flex-shrink:0;display:flex;flex-direction:column;">
      <div style="padding:20px 16px;border-bottom:1px solid rgba(255,255,255,0.06);"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#fff;">🛡️ Admin Panel</div></div>
      <nav style="flex:1;padding:12px 8px;display:flex;flex-direction:column;gap:2px;">
        <a onclick="goToWebScreen(23)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📊 Dashboard</a>
        <a onclick="goToWebScreen(24)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">👥 Utilisateurs</a>
        <a onclick="goToWebScreen(25)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">💊 Produits &amp; Stock</a>
        <a onclick="goToWebScreen(26)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📦 Commandes</a>
        <a onclick="goToWebScreen(27)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:rgba(255,255,255,0.08);border-radius:10px;color:#fff;cursor:pointer;font-size:13px;font-weight:600;font-family:'DM Sans',sans-serif;">📈 Rapports</a>
        <a onclick="goToWebScreen(28)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">🔒 Audit &amp; Logs</a>
      </nav>
    </div>
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;">
      <div style="background:#fff;padding:14px 24px;display:flex;justify-content:space-between;align-items:center;border-bottom:1.5px solid #E2ECF2;position:sticky;top:0;z-index:10;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">📈 Rapports &amp; Analytiques</div>
        <div style="display:flex;gap:8px;">
          <select style="padding:8px 12px;border:1.5px solid #E2ECF2;border-radius:8px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;"><option>Ce mois-ci</option><option>Cette semaine</option><option>Ce trimestre</option><option>Cette année</option></select>
          <button onclick="showToast('Export PDF')" style="padding:8px 14px;background:#1A6B8A;color:#fff;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📥 Exporter PDF</button>
        </div>
      </div>
      <div style="padding:20px 24px;display:flex;flex-direction:column;gap:16px;">
        <!-- Tabs -->
        <div style="display:flex;gap:4px;background:#fff;border-radius:12px;padding:6px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          <button onclick="showToast('Vue Revenus')" style="flex:1;padding:10px;background:#1A6B8A;color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">💰 Revenus</button>
          <button onclick="showToast('Vue Ordonnances')" style="flex:1;padding:10px;background:transparent;color:#6B7A8D;border:none;border-radius:8px;font-size:13px;cursor:pointer;font-family:'DM Sans',sans-serif;">📋 Ordonnances</button>
          <button onclick="showToast('Vue Patients')" style="flex:1;padding:10px;background:transparent;color:#6B7A8D;border:none;border-radius:8px;font-size:13px;cursor:pointer;font-family:'DM Sans',sans-serif;">👥 Patients</button>
          <button onclick="showToast('Vue Performance')" style="flex:1;padding:10px;background:transparent;color:#6B7A8D;border:none;border-radius:8px;font-size:13px;cursor:pointer;font-family:'DM Sans',sans-serif;">⚡ Performance</button>
        </div>
        <!-- Summary KPIs -->
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;">
          <div style="background:#fff;border-radius:14px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
            <div style="font-size:12px;color:#6B7A8D;margin-bottom:6px;">Revenus totaux (octobre)</div>
            <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;font-weight:800;color:#1A2332;">4 200 000 FCFA</div>
            <div style="display:flex;align-items:center;gap:4px;margin-top:6px;"><span style="font-size:12px;color:#27AE60;font-weight:700;">↑ +8%</span><span style="font-size:11px;color:#6B7A8D;">vs septembre</span></div>
          </div>
          <div style="background:#fff;border-radius:14px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
            <div style="font-size:12px;color:#6B7A8D;margin-bottom:6px;">Ordonnances validées</div>
            <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;font-weight:800;color:#1A2332;">1 892</div>
            <div style="display:flex;align-items:center;gap:4px;margin-top:6px;"><span style="font-size:12px;color:#27AE60;font-weight:700;">↑ +5%</span><span style="font-size:11px;color:#6B7A8D;">vs septembre</span></div>
          </div>
          <div style="background:#fff;border-radius:14px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
            <div style="font-size:12px;color:#6B7A8D;margin-bottom:6px;">Nouveaux patients</div>
            <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;font-weight:800;color:#1A2332;">234</div>
            <div style="display:flex;align-items:center;gap:4px;margin-top:6px;"><span style="font-size:12px;color:#27AE60;font-weight:700;">↑ +12%</span><span style="font-size:11px;color:#6B7A8D;">vs septembre</span></div>
          </div>
        </div>
        <!-- Revenue chart -->
        <div style="background:#fff;border-radius:14px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;margin-bottom:16px;">Revenus mensuels — 2024</div>
          <div style="display:flex;align-items:flex-end;gap:8px;height:120px;">
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;"><div style="width:100%;background:#E8F4F8;border-radius:6px 6px 0 0;height:52px;"></div><div style="font-size:10px;color:#6B7A8D;">Jan</div></div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;"><div style="width:100%;background:#1A6B8A;border-radius:6px 6px 0 0;height:68px;"></div><div style="font-size:10px;color:#6B7A8D;">Fév</div></div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;"><div style="width:100%;background:#1A6B8A;border-radius:6px 6px 0 0;height:76px;"></div><div style="font-size:10px;color:#6B7A8D;">Mar</div></div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;"><div style="width:100%;background:#1A6B8A;border-radius:6px 6px 0 0;height:62px;"></div><div style="font-size:10px;color:#6B7A8D;">Avr</div></div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;"><div style="width:100%;background:#1A6B8A;border-radius:6px 6px 0 0;height:84px;"></div><div style="font-size:10px;color:#6B7A8D;">Mai</div></div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;"><div style="width:100%;background:#2196B3;border-radius:6px 6px 0 0;height:72px;"></div><div style="font-size:10px;color:#6B7A8D;">Jun</div></div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;"><div style="width:100%;background:#2196B3;border-radius:6px 6px 0 0;height:80px;"></div><div style="font-size:10px;color:#6B7A8D;">Jul</div></div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;"><div style="width:100%;background:#27AE60;border-radius:6px 6px 0 0;height:88px;"></div><div style="font-size:10px;color:#6B7A8D;">Aoû</div></div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;"><div style="width:100%;background:#27AE60;border-radius:6px 6px 0 0;height:96px;"></div><div style="font-size:10px;color:#6B7A8D;">Sep</div></div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;position:relative;"><div style="width:100%;background:#27AE60;border-radius:6px 6px 0 0;height:110px;box-shadow:0 0 0 3px rgba(39,174,96,0.3);"><div style="position:absolute;bottom:110%;left:50%;transform:translateX(-50%);font-size:11px;font-weight:800;color:#27AE60;white-space:nowrap;margin-bottom:4px;">4.2M</div></div><div style="font-size:10px;font-weight:700;color:#27AE60;">Oct</div></div>
          </div>
        </div>
        <!-- Top pharmacies -->
        <div style="background:#fff;border-radius:14px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;margin-bottom:14px;">Top Pharmacies — Octobre 2024</div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <div style="display:flex;align-items:center;gap:12px;"><div style="width:24px;height:24px;background:#F39C12;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff;">1</div><div style="flex:1;"><div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span style="font-size:13px;font-weight:700;color:#1A2332;">Pharmacie du Plateau</span><span style="font-size:12px;font-weight:700;color:#1A6B8A;">1 420 000 FCFA</span></div><div style="height:6px;background:#E8F4F8;border-radius:3px;overflow:hidden;"><div style="width:100%;height:100%;background:#1A6B8A;border-radius:3px;"></div></div></div></div>
            <div style="display:flex;align-items:center;gap:12px;"><div style="width:24px;height:24px;background:#6B7A8D;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff;">2</div><div style="flex:1;"><div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span style="font-size:13px;font-weight:700;color:#1A2332;">Pharma Express CI</span><span style="font-size:12px;font-weight:700;color:#1A6B8A;">980 000 FCFA</span></div><div style="height:6px;background:#E8F4F8;border-radius:3px;overflow:hidden;"><div style="width:69%;height:100%;background:#1A6B8A;border-radius:3px;"></div></div></div></div>
            <div style="display:flex;align-items:center;gap:12px;"><div style="width:24px;height:24px;background:#c0392b;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff;">3</div><div style="flex:1;"><div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span style="font-size:13px;font-weight:700;color:#1A2332;">Pharma Nord CI</span><span style="font-size:12px;font-weight:700;color:#1A6B8A;">640 000 FCFA</span></div><div style="height:6px;background:#E8F4F8;border-radius:3px;overflow:hidden;"><div style="width:45%;height:100%;background:#1A6B8A;border-radius:3px;"></div></div></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     WEB SCREEN 25 — AUDIT LOGS & SECURITY
======================================== -->
<div class="web-screen" id="wscreen28">
  <div style="display:flex;height:100%;overflow:hidden;">
    <div style="width:220px;background:#1A2332;flex-shrink:0;display:flex;flex-direction:column;">
      <div style="padding:20px 16px;border-bottom:1px solid rgba(255,255,255,0.06);"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#fff;">🛡️ Admin Panel</div></div>
      <nav style="flex:1;padding:12px 8px;display:flex;flex-direction:column;gap:2px;">
        <a onclick="goToWebScreen(23)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📊 Dashboard</a>
        <a onclick="goToWebScreen(24)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">👥 Utilisateurs</a>
        <a onclick="goToWebScreen(25)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">💊 Produits &amp; Stock</a>
        <a onclick="goToWebScreen(26)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📦 Commandes</a>
        <a onclick="goToWebScreen(27)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📈 Rapports</a>
        <a onclick="goToWebScreen(28)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:rgba(255,255,255,0.08);border-radius:10px;color:#fff;cursor:pointer;font-size:13px;font-weight:600;font-family:'DM Sans',sans-serif;">🔒 Audit &amp; Logs</a>
      </nav>
    </div>
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;">
      <div style="background:#fff;padding:14px 24px;display:flex;justify-content:space-between;align-items:center;border-bottom:1.5px solid #E2ECF2;position:sticky;top:0;z-index:10;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">🔒 Audit &amp; Sécurité</div>
        <div style="display:flex;gap:8px;">
          <input type="text" placeholder="Filtrer par utilisateur..." style="padding:8px 12px;border:1.5px solid #E2ECF2;border-radius:8px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;width:200px;">
          <select style="padding:8px 12px;border:1.5px solid #E2ECF2;border-radius:8px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;"><option>Tous types</option><option>Connexion</option><option>Modification</option><option>Suppression</option><option>Erreur</option></select>
          <button onclick="showToast('Export logs')" style="padding:8px 14px;background:#1A2332;color:#fff;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📥 Export</button>
        </div>
      </div>
      <div style="padding:20px 24px;display:flex;flex-direction:column;gap:16px;">
        <!-- Security summary -->
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;">
          <div style="background:#E8F7EE;border-radius:12px;padding:14px;border:1px solid rgba(39,174,96,0.2);"><div style="font-size:11px;color:#27AE60;margin-bottom:4px;">Connexions réussies</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#27AE60;">847</div></div>
          <div style="background:#FEF0EE;border-radius:12px;padding:14px;border:1px solid rgba(231,76,60,0.2);"><div style="font-size:11px;color:#E74C3C;margin-bottom:4px;">Tentatives échouées</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#E74C3C;">23</div></div>
          <div style="background:#FEF9EE;border-radius:12px;padding:14px;border:1px solid rgba(243,156,18,0.2);"><div style="font-size:11px;color:#F39C12;margin-bottom:4px;">Modifications sensibles</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#F39C12;">156</div></div>
          <div style="background:#E8F4F8;border-radius:12px;padding:14px;border:1px solid rgba(26,107,138,0.2);"><div style="font-size:11px;color:#1A6B8A;margin-bottom:4px;">Actions admin</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#1A6B8A;">42</div></div>
        </div>
        <!-- Audit log table -->
        <div style="background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          <table style="width:100%;border-collapse:collapse;">
            <thead style="background:#F4F9FC;"><tr>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Horodatage</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Utilisateur</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Action</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">IP</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Type</th>
            </tr></thead>
            <tbody>
              <tr style="border-top:1px solid #F4F9FC;"><td style="padding:11px 16px;font-size:12px;color:#6B7A8D;font-family:monospace;">2024-10-14 14:22:31</td><td style="padding:11px 16px;font-size:12px;color:#1A2332;font-weight:600;"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="fe9f9a939790be8e969f8c939f9d9190909b9d8ad09d97">[email&#160;protected]</a></td><td style="padding:11px 16px;font-size:12px;color:#1A2332;">Export rapport mensuel (PDF)</td><td style="padding:11px 16px;font-size:12px;color:#6B7A8D;font-family:monospace;">41.202.85.12</td><td style="padding:11px 16px;"><span style="background:#E8F4F8;color:#1A6B8A;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;">INFO</span></td></tr>
              <tr style="border-top:1px solid #F4F9FC;"><td style="padding:11px 16px;font-size:12px;color:#6B7A8D;font-family:monospace;">2024-10-14 09:14:08</td><td style="padding:11px 16px;font-size:12px;color:#1A2332;font-weight:600;"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="3c5d585155527c4c545d4e515d5f535252595f48125f55">[email&#160;protected]</a></td><td style="padding:11px 16px;font-size:12px;color:#1A2332;">Utilisateur créé: Jean-Marc Diabaté (Pharmacien)</td><td style="padding:11px 16px;font-size:12px;color:#6B7A8D;font-family:monospace;">41.202.85.12</td><td style="padding:11px 16px;"><span style="background:#E8F7EE;color:#27AE60;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;">CRÉATION</span></td></tr>
              <tr style="border-top:1px solid #F4F9FC;background:#FEF0EE;"><td style="padding:11px 16px;font-size:12px;color:#6B7A8D;font-family:monospace;">2024-10-14 09:03:44</td><td style="padding:11px 16px;font-size:12px;color:#E74C3C;font-weight:600;">inconnu</td><td style="padding:11px 16px;font-size:12px;color:#E74C3C;">Tentative connexion échouée ×3 — <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="e382878e8a8da3938b82918e82808c8d8d868097cd808a">[email&#160;protected]</a></td><td style="padding:11px 16px;font-size:12px;color:#E74C3C;font-family:monospace;">197.234.XX.XX</td><td style="padding:11px 16px;"><span style="background:#FEF0EE;color:#E74C3C;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;">ALERTE 🚨</span></td></tr>
              <tr style="border-top:1px solid #F4F9FC;"><td style="padding:11px 16px;font-size:12px;color:#6B7A8D;font-family:monospace;">2024-10-14 08:50:22</td><td style="padding:11px 16px;font-size:12px;color:#1A2332;font-weight:600;"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="4f2e2b2226210f3f272e3d222e2c2021212a2c3b612c26">[email&#160;protected]</a></td><td style="padding:11px 16px;font-size:12px;color:#1A2332;">Stock mis à jour: Metformine 850mg (150→245 unités)</td><td style="padding:11px 16px;font-size:12px;color:#6B7A8D;font-family:monospace;">41.202.85.12</td><td style="padding:11px 16px;"><span style="background:#FEF9EE;color:#F39C12;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;">MODIF.</span></td></tr>
              <tr style="border-top:1px solid #F4F9FC;"><td style="padding:11px 16px;font-size:12px;color:#6B7A8D;font-family:monospace;">2024-10-14 08:11:05</td><td style="padding:11px 16px;font-size:12px;color:#1A2332;font-weight:600;"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="aecfcac3c7c0eedec6cfdcc3cfcdc1c0c0cbcdda80cdc7">[email&#160;protected]</a></td><td style="padding:11px 16px;font-size:12px;color:#1A2332;">Pharmacie ajoutée: Pharma Nord CI (Abidjan Nord)</td><td style="padding:11px 16px;font-size:12px;color:#6B7A8D;font-family:monospace;">41.202.85.12</td><td style="padding:11px 16px;"><span style="background:#E8F7EE;color:#27AE60;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;">CRÉATION</span></td></tr>
              <tr style="border-top:1px solid #F4F9FC;"><td style="padding:11px 16px;font-size:12px;color:#6B7A8D;font-family:monospace;">2024-10-14 08:01:18</td><td style="padding:11px 16px;font-size:12px;color:#1A2332;font-weight:600;"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="19787d747077596971786b74787a7677777c7a6d377a70">[email&#160;protected]</a></td><td style="padding:11px 16px;font-size:12px;color:#1A2332;">Connexion réussie (2FA validé)</td><td style="padding:11px 16px;font-size:12px;color:#6B7A8D;font-family:monospace;">41.202.85.12</td><td style="padding:11px 16px;"><span style="background:#E8F7EE;color:#27AE60;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;">CONNEXION</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ========== SHARED PATIENT SIDEBAR MACRO ========== -->
<!-- Patient nav reused across screens 26-45 -->

<!-- ========================================
     WSCREEN 26 — CATALOGUE MÉDICAMENTS (WEB PATIENT)
======================================== -->
<div class="web-screen" id="wscreen29">
  <div style="display:flex;height:100%;overflow:hidden;">
    <!-- Patient top nav -->
    <div style="flex:1;display:flex;flex-direction:column;overflow:hidden;">
      <div style="background:#fff;padding:14px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:1.5px solid #E2ECF2;flex-shrink:0;">
        <div style="display:flex;align-items:center;gap:8px;"><div style="width:30px;height:30px;background:linear-gradient(135deg,#1A6B8A,#2196B3);border-radius:10px;display:flex;align-items:center;justify-content:center;"><svg width="16" height="16" viewBox="0 0 52 52" fill="none"><path d="M26 4C18 4 10 8 8 15C7 22 10 26 14 30C18 34 24 42 26 48C28 42 34 34 38 30C42 26 45 22 44 15C42 8 34 4 26 4Z" fill="white" opacity="0.9"/><rect x="23" y="14" width="6" height="16" rx="3" fill="#1A6B8A"/><rect x="18" y="19" width="16" height="6" rx="3" fill="#1A6B8A"/></svg></div><span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A6B8A;">ILERA AFRICA</span></div>
        <div style="display:flex;align-items:center;gap:20px;">
          <a onclick="goToWebScreen(10)" style="font-size:13px;color:#6B7A8D;cursor:pointer;font-family:'DM Sans',sans-serif;">Accueil</a>
          <a onclick="goToWebScreen(29)" style="font-size:13px;color:#1A6B8A;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Catalogue</a>
          <a onclick="goToWebScreen(12)" style="font-size:13px;color:#6B7A8D;cursor:pointer;font-family:'DM Sans',sans-serif;">Commandes</a>
          <a onclick="goToWebScreen(13)" style="font-size:13px;color:#6B7A8D;cursor:pointer;font-family:'DM Sans',sans-serif;">Ordonnances</a>
          <div style="position:relative;cursor:pointer;" onclick="goToWebScreen(35)"><div style="width:32px;height:32px;background:#E8F4F8;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;">🛒</div><div style="position:absolute;top:-4px;right:-4px;width:16px;height:16px;background:#E74C3C;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;color:#fff;font-weight:700;">3</div></div>
          <div style="width:32px;height:32px;background:#1A6B8A;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;color:#fff;font-weight:700;">MK</div>
        </div>
      </div>
      <div style="flex:1;overflow-y:auto;background:#F4F9FC;">
        <!-- Hero search -->
        <div style="background:linear-gradient(135deg,#0F3F54,#1A6B8A);padding:32px;display:flex;align-items:center;gap:16px;">
          <div style="flex:1;"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;font-weight:800;color:#fff;margin-bottom:8px;">Catalogue des médicaments</div><div style="font-size:13px;color:rgba(255,255,255,0.7);">Plus de 1 200 médicaments disponibles en Côte d'Ivoire</div></div>
          <div style="flex:1;background:rgba(255,255,255,0.1);border-radius:12px;padding:12px 16px;display:flex;align-items:center;gap:10px;border:1px solid rgba(255,255,255,0.2);"><span style="font-size:18px;">🔍</span><input placeholder="Nom du médicament, DCI, pathologie..." style="background:none;border:none;outline:none;color:#fff;font-size:14px;font-family:'DM Sans',sans-serif;flex:1;"></div>
        </div>
        <div style="padding:24px 32px;display:flex;flex-direction:column;gap:20px;">
          <!-- Filters -->
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <div style="background:#1A6B8A;color:#fff;border-radius:50px;padding:8px 18px;font-size:13px;font-weight:700;cursor:pointer;">Tous</div>
            <div style="background:#fff;color:#6B7A8D;border-radius:50px;padding:8px 18px;font-size:13px;cursor:pointer;border:1.5px solid #E2ECF2;">Antibiotiques</div>
            <div style="background:#fff;color:#6B7A8D;border-radius:50px;padding:8px 18px;font-size:13px;cursor:pointer;border:1.5px solid #E2ECF2;">Analgésiques</div>
            <div style="background:#fff;color:#6B7A8D;border-radius:50px;padding:8px 18px;font-size:13px;cursor:pointer;border:1.5px solid #E2ECF2;">Antidiabétiques</div>
            <div style="background:#fff;color:#6B7A8D;border-radius:50px;padding:8px 18px;font-size:13px;cursor:pointer;border:1.5px solid #E2ECF2;">Anti-inflammatoires</div>
            <div style="background:#fff;color:#6B7A8D;border-radius:50px;padding:8px 18px;font-size:13px;cursor:pointer;border:1.5px solid #E2ECF2;">Cardiovasculaires</div>
            <div style="background:#fff;color:#6B7A8D;border-radius:50px;padding:8px 18px;font-size:13px;cursor:pointer;border:1.5px solid #E2ECF2;">Pédiatrie</div>
          </div>
          <!-- Product grid -->
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;">
            <div onclick="goToWebScreen(30)" style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.06);cursor:pointer;transition:transform 0.2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
              <div style="width:52px;height:52px;background:#E8F4F8;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:12px;">💊</div>
              <div style="font-size:14px;font-weight:700;color:#1A2332;margin-bottom:2px;">Amoxicilline 500mg</div>
              <div style="font-size:11px;color:#6B7A8D;margin-bottom:10px;">Antibiotique · Boîte 12cp</div>
              <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:16px;font-weight:800;color:#1A6B8A;">2 100 FCFA</span><div style="width:8px;height:8px;background:#27AE60;border-radius:50%;"></div></div>
              <div style="margin-top:8px;font-size:10px;font-weight:700;color:#F39C12;background:#FEF9EE;border-radius:6px;padding:2px 8px;display:inline-block;">Ordonnance requise</div>
            </div>
            <div onclick="goToWebScreen(30)" style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.06);cursor:pointer;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
              <div style="width:52px;height:52px;background:#E8F7EE;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:12px;">💊</div>
              <div style="font-size:14px;font-weight:700;color:#1A2332;margin-bottom:2px;">Metformine 850mg</div>
              <div style="font-size:11px;color:#6B7A8D;margin-bottom:10px;">Antidiabétique · Boîte 30cp</div>
              <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:16px;font-weight:800;color:#1A6B8A;">2 800 FCFA</span><div style="width:8px;height:8px;background:#27AE60;border-radius:50%;"></div></div>
              <div style="margin-top:8px;font-size:10px;font-weight:700;color:#F39C12;background:#FEF9EE;border-radius:6px;padding:2px 8px;display:inline-block;">Ordonnance requise</div>
            </div>
            <div onclick="goToWebScreen(30)" style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.06);cursor:pointer;opacity:0.7;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
              <div style="width:52px;height:52px;background:#F4F9FC;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:12px;">💊</div>
              <div style="font-size:14px;font-weight:700;color:#1A2332;margin-bottom:2px;">Paracétamol 500mg</div>
              <div style="font-size:11px;color:#6B7A8D;margin-bottom:10px;">Analgésique · Boîte 16cp</div>
              <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:16px;font-weight:800;color:#1A6B8A;">1 200 FCFA</span><div style="width:8px;height:8px;background:#E74C3C;border-radius:50%;"></div></div>
              <div style="margin-top:8px;font-size:10px;font-weight:700;color:#E74C3C;background:#FEF0EE;border-radius:6px;padding:2px 8px;display:inline-block;">Rupture de stock</div>
            </div>
            <div onclick="goToWebScreen(30)" style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.06);cursor:pointer;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
              <div style="width:52px;height:52px;background:#FEF9EE;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:12px;">🩺</div>
              <div style="font-size:14px;font-weight:700;color:#1A2332;margin-bottom:2px;">Ibuprofène 400mg</div>
              <div style="font-size:11px;color:#6B7A8D;margin-bottom:10px;">Anti-inflammatoire · Boîte 20cp</div>
              <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:16px;font-weight:800;color:#1A6B8A;">1 800 FCFA</span><div style="width:8px;height:8px;background:#27AE60;border-radius:50%;"></div></div>
              <div style="margin-top:8px;font-size:10px;color:#27AE60;background:#E8F7EE;border-radius:6px;padding:2px 8px;display:inline-block;font-weight:700;">Sans ordonnance</div>
            </div>
            <div onclick="goToWebScreen(30)" style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.06);cursor:pointer;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
              <div style="width:52px;height:52px;background:#E8F4F8;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:12px;">💉</div>
              <div style="font-size:14px;font-weight:700;color:#1A2332;margin-bottom:2px;">Insuline Glargine</div>
              <div style="font-size:11px;color:#6B7A8D;margin-bottom:10px;">Antidiabétique · Stylo 3ml</div>
              <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:16px;font-weight:800;color:#1A6B8A;">18 500 FCFA</span><div style="width:8px;height:8px;background:#27AE60;border-radius:50%;"></div></div>
              <div style="margin-top:8px;font-size:10px;font-weight:700;color:#F39C12;background:#FEF9EE;border-radius:6px;padding:2px 8px;display:inline-block;">Ordonnance requise</div>
            </div>
            <div onclick="goToWebScreen(30)" style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.06);cursor:pointer;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
              <div style="width:52px;height:52px;background:#E8F4F8;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:12px;">🌡️</div>
              <div style="font-size:14px;font-weight:700;color:#1A2332;margin-bottom:2px;">Azithromycine 500mg</div>
              <div style="font-size:11px;color:#6B7A8D;margin-bottom:10px;">Antibiotique · Boîte 3cp</div>
              <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:16px;font-weight:800;color:#1A6B8A;">3 400 FCFA</span><div style="width:8px;height:8px;background:#27AE60;border-radius:50%;"></div></div>
              <div style="margin-top:8px;font-size:10px;font-weight:700;color:#F39C12;background:#FEF9EE;border-radius:6px;padding:2px 8px;display:inline-block;">Ordonnance requise</div>
            </div>
            <div onclick="goToWebScreen(30)" style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.06);cursor:pointer;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
              <div style="width:52px;height:52px;background:#F4F9FC;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:12px;">🫀</div>
              <div style="font-size:14px;font-weight:700;color:#1A2332;margin-bottom:2px;">Amlodipine 5mg</div>
              <div style="font-size:11px;color:#6B7A8D;margin-bottom:10px;">Cardiovasculaire · Boîte 30cp</div>
              <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:16px;font-weight:800;color:#1A6B8A;">4 200 FCFA</span><div style="width:8px;height:8px;background:#27AE60;border-radius:50%;"></div></div>
              <div style="margin-top:8px;font-size:10px;font-weight:700;color:#F39C12;background:#FEF9EE;border-radius:6px;padding:2px 8px;display:inline-block;">Ordonnance requise</div>
            </div>
            <div onclick="goToWebScreen(30)" style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.06);cursor:pointer;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
              <div style="width:52px;height:52px;background:#E8F7EE;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:12px;">🌿</div>
              <div style="font-size:14px;font-weight:700;color:#1A2332;margin-bottom:2px;">Cotrimoxazole 960mg</div>
              <div style="font-size:11px;color:#6B7A8D;margin-bottom:10px;">Antibiotique · Boîte 20cp</div>
              <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:16px;font-weight:800;color:#1A6B8A;">2 600 FCFA</span><div style="width:8px;height:8px;background:#27AE60;border-radius:50%;"></div></div>
              <div style="margin-top:8px;font-size:10px;font-weight:700;color:#F39C12;background:#FEF9EE;border-radius:6px;padding:2px 8px;display:inline-block;">Ordonnance requise</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     WSCREEN 27 — FICHE MÉDICAMENT (WEB)
======================================== -->
<div class="web-screen" id="wscreen48"><div style="height:100%;display:flex;flex-direction:column;background:#F4F9FC;"><div style="background:#fff;padding:14px 32px;border-bottom:1.5px solid #E2ECF2;display:flex;align-items:center;justify-content:space-between;"><a onclick="goToWebScreen(23)" style="font-size:13px;color:#1A6B8A;cursor:pointer;font-weight:700;">← Dashboard Admin</a><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">Vue Admin simplifiée</div><div style="width:8px;"></div></div><div style="flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;"><div style="font-size:40px;">🛡️</div><div style="font-size:16px;font-weight:700;color:#1A2332;">Panneau d'administration</div><button onclick="goToWebScreen(23)" style="padding:14px 32px;background:#1A2332;color:#fff;border:none;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">→ Aller au Dashboard Admin complet</button></div></div></div>

<!-- ========================================
     WSCREEN 46 — 404 WEB
======================================== -->
<div class="web-screen" id="wscreen54">
  <div style="display:flex;height:100%;overflow:hidden;">
    <!-- Admin sidebar -->
    <div style="width:220px;background:#1A2332;flex-shrink:0;display:flex;flex-direction:column;">
      <div style="padding:20px 16px;border-bottom:1px solid rgba(255,255,255,0.06);"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#fff;">🛡️ Admin Panel</div></div>
      <nav style="flex:1;padding:12px 8px;display:flex;flex-direction:column;gap:2px;">
        <a onclick="goToWebScreen(23)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📊 Dashboard</a>
        <a onclick="goToWebScreen(24)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">👥 Utilisateurs</a>
        <a onclick="goToWebScreen(25)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">💊 Produits &amp; Stock</a>
        <a onclick="goToWebScreen(26)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📦 Commandes</a>
        <a onclick="goToWebScreen(54)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:rgba(243,156,18,0.15);border-radius:10px;color:#F39C12;cursor:pointer;font-size:13px;font-weight:600;font-family:'DM Sans',sans-serif;">🛵 Livreurs</a>
        <a onclick="goToWebScreen(27)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📈 Rapports</a>
        <a onclick="goToWebScreen(28)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">🔒 Audit &amp; Logs</a>
      </nav>
    </div>
    <!-- Content -->
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;">
      <div style="background:#fff;padding:14px 24px;display:flex;justify-content:space-between;align-items:center;border-bottom:1.5px solid #E2ECF2;position:sticky;top:0;z-index:10;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">🛵 Gestion des Livreurs</div>
        <div style="display:flex;gap:8px;">
          <input type="text" placeholder="Rechercher livreur..." style="padding:8px 12px;border:1.5px solid #E2ECF2;border-radius:8px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;width:200px;">
          <select style="padding:8px 12px;border:1.5px solid #E2ECF2;border-radius:8px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;"><option>Tous statuts</option><option>En ligne</option><option>Hors ligne</option><option>En livraison</option></select>
          <button onclick="goToWebScreen(55)" style="padding:8px 16px;background:linear-gradient(135deg,#F39C12,#e67e22);color:#fff;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">+ Ajouter livreur</button>
        </div>
      </div>
      <div style="padding:20px 24px;display:flex;flex-direction:column;gap:16px;">
        <!-- KPIs livreurs -->
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;">
          <div style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);border-top:3px solid #4ADE80;"><div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">En ligne maintenant</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:800;color:#27AE60;">18</div><div style="font-size:11px;color:#27AE60;">🟢 Disponibles</div></div>
          <div style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);border-top:3px solid #F39C12;"><div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">En livraison</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:800;color:#F39C12;">12</div><div style="font-size:11px;color:#F39C12;">🟡 En course</div></div>
          <div style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);border-top:3px solid #6B7A8D;"><div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">Hors ligne</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:800;color:#6B7A8D;">18</div><div style="font-size:11px;color:#6B7A8D;">⚫ Inactifs</div></div>
          <div style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);border-top:3px solid #1A6B8A;"><div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">Note moyenne</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:800;color:#1A6B8A;">4.8</div><div style="font-size:11px;color:#F39C12;">⭐ Satisfaction</div></div>
        </div>
        <!-- Table livreurs -->
        <div style="background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          <table style="width:100%;border-collapse:collapse;">
            <thead style="background:#F4F9FC;"><tr>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Livreur</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Statut</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Zone</th>
              <th style="text-align:center;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Courses/mois</th>
              <th style="text-align:right;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Revenus mois</th>
              <th style="text-align:center;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Note</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Actions</th>
            </tr></thead>
            <tbody>
              <tr style="border-top:1px solid #F4F9FC;">
                <td style="padding:12px 16px;"><div style="display:flex;align-items:center;gap:10px;"><div style="width:36px;height:36px;background:linear-gradient(135deg,#F39C12,#e67e22);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;">🛵</div><div><div style="font-size:13px;font-weight:700;color:#1A2332;">Kofi Mensah</div><div style="font-size:11px;color:#6B7A8D;">#LIV-0042 · Moto</div></div></div></td>
                <td style="padding:12px 16px;"><div style="display:flex;align-items:center;gap:6px;"><div style="width:8px;height:8px;background:#4ADE80;border-radius:50%;"></div><span style="font-size:12px;color:#27AE60;font-weight:600;">En livraison</span></div></td>
                <td style="padding:12px 16px;font-size:12px;color:#1A2332;">Cocody · Plateau</td>
                <td style="padding:12px 16px;text-align:center;font-size:14px;font-weight:800;color:#1A2332;">214</td>
                <td style="padding:12px 16px;text-align:right;font-size:13px;font-weight:700;color:#1A2332;">320 500 FCFA</td>
                <td style="padding:12px 16px;text-align:center;"><span style="font-size:13px;font-weight:800;color:#F39C12;">⭐ 4.9</span></td>
                <td style="padding:12px 16px;"><div style="display:flex;gap:6px;"><button onclick="goToWebScreen(55)" style="padding:5px 10px;background:#FEF9EE;color:#F39C12;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Voir →</button><button onclick="showModal('confirm-suspend-modal')" style="padding:5px 10px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:6px;font-size:11px;cursor:pointer;font-family:'DM Sans',sans-serif;">⏸</button></div></td>
              </tr>
              <tr style="border-top:1px solid #F4F9FC;">
                <td style="padding:12px 16px;"><div style="display:flex;align-items:center;gap:10px;"><div style="width:36px;height:36px;background:linear-gradient(135deg,#1A6B8A,#2196B3);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;">🛵</div><div><div style="font-size:13px;font-weight:700;color:#1A2332;">Adama Bamba</div><div style="font-size:11px;color:#6B7A8D;">#LIV-0039 · Moto</div></div></div></td>
                <td style="padding:12px 16px;"><div style="display:flex;align-items:center;gap:6px;"><div style="width:8px;height:8px;background:#4ADE80;border-radius:50%;"></div><span style="font-size:12px;color:#27AE60;font-weight:600;">Disponible</span></div></td>
                <td style="padding:12px 16px;font-size:12px;color:#1A2332;">Marcory · Treichville</td>
                <td style="padding:12px 16px;text-align:center;font-size:14px;font-weight:800;color:#1A2332;">187</td>
                <td style="padding:12px 16px;text-align:right;font-size:13px;font-weight:700;color:#1A2332;">284 500 FCFA</td>
                <td style="padding:12px 16px;text-align:center;"><span style="font-size:13px;font-weight:800;color:#F39C12;">⭐ 4.8</span></td>
                <td style="padding:12px 16px;"><div style="display:flex;gap:6px;"><button onclick="goToWebScreen(55)" style="padding:5px 10px;background:#FEF9EE;color:#F39C12;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Voir →</button><button onclick="showToast('Assigner livraison')" style="padding:5px 10px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:6px;font-size:11px;cursor:pointer;font-family:'DM Sans',sans-serif;">Assigner</button></div></td>
              </tr>
              <tr style="border-top:1px solid #F4F9FC;">
                <td style="padding:12px 16px;"><div style="display:flex;align-items:center;gap:10px;"><div style="width:36px;height:36px;background:#E2ECF2;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;">🛵</div><div><div style="font-size:13px;font-weight:700;color:#6B7A8D;">Sékou Ouattara</div><div style="font-size:11px;color:#6B7A8D;">#LIV-0035 · Moto</div></div></div></td>
                <td style="padding:12px 16px;"><div style="display:flex;align-items:center;gap:6px;"><div style="width:8px;height:8px;background:#6B7A8D;border-radius:50%;"></div><span style="font-size:12px;color:#6B7A8D;font-weight:600;">Hors ligne</span></div></td>
                <td style="padding:12px 16px;font-size:12px;color:#6B7A8D;">Abobo · Yopougon</td>
                <td style="padding:12px 16px;text-align:center;font-size:14px;font-weight:800;color:#6B7A8D;">142</td>
                <td style="padding:12px 16px;text-align:right;font-size:13px;font-weight:700;color:#6B7A8D;">216 300 FCFA</td>
                <td style="padding:12px 16px;text-align:center;"><span style="font-size:13px;font-weight:800;color:#F39C12;">⭐ 4.6</span></td>
                <td style="padding:12px 16px;"><button onclick="goToWebScreen(55)" style="padding:5px 10px;background:#FEF9EE;color:#F39C12;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Voir →</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     WSCREEN 52 — PROFIL LIVREUR (ADMIN)
======================================== -->
<div class="web-screen" id="wscreen55">
  <div style="display:flex;height:100%;overflow:hidden;">
    <div style="width:220px;background:#1A2332;flex-shrink:0;display:flex;flex-direction:column;">
      <div style="padding:20px 16px;border-bottom:1px solid rgba(255,255,255,0.06);"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#fff;">🛡️ Admin Panel</div></div>
      <nav style="flex:1;padding:12px 8px;display:flex;flex-direction:column;gap:2px;">
        <a onclick="goToWebScreen(23)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📊 Dashboard</a>
        <a onclick="goToWebScreen(54)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:rgba(243,156,18,0.15);border-radius:10px;color:#F39C12;cursor:pointer;font-size:13px;font-weight:600;font-family:'DM Sans',sans-serif;">🛵 Livreurs</a>
        <a onclick="goToWebScreen(56)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">🗺 Suivi en direct</a>
        <a onclick="goToWebScreen(26)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📦 Commandes</a>
      </nav>
    </div>
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;">
      <div style="background:#fff;padding:14px 24px;display:flex;align-items:center;justify-content:space-between;border-bottom:1.5px solid #E2ECF2;position:sticky;top:0;z-index:10;">
        <div style="display:flex;align-items:center;gap:10px;"><button onclick="goToWebScreen(54)" style="font-size:13px;color:#1A6B8A;background:none;border:none;cursor:pointer;font-weight:700;font-family:'DM Sans',sans-serif;">← Livreurs</button><span style="color:#E2ECF2;">/</span><span style="font-size:13px;font-weight:600;color:#1A2332;">Kofi Mensah · #LIV-0042</span></div>
        <div style="display:flex;gap:8px;"><button onclick="showToast('Suspendre livreur')" style="padding:8px 14px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">⏸ Suspendre</button><button onclick="goToWebScreen(56)" style="padding:8px 14px;background:#1A6B8A;color:#fff;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">🗺 Localiser</button></div>
      </div>
      <div style="padding:24px;display:flex;flex-direction:column;gap:16px;">
        <!-- Header card -->
        <div style="background:linear-gradient(135deg,#1A2332,#0F3F54);border-radius:16px;padding:24px;display:flex;align-items:center;gap:20px;">
          <div style="width:72px;height:72px;background:linear-gradient(135deg,#F39C12,#e67e22);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:34px;border:3px solid rgba(255,255,255,0.2);">🛵</div>
          <div style="flex:1;"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;font-weight:800;color:#fff;">Kofi Mensah</div><div style="font-size:13px;color:rgba(255,255,255,0.7);margin-top:4px;">Livreur certifié · #LIV-0042 · Moto Jakarta 150cc</div><div style="display:flex;gap:8px;margin-top:10px;"><span style="background:rgba(74,222,128,0.2);color:#4ADE80;border-radius:50px;padding:4px 12px;font-size:11px;font-weight:700;">● En livraison</span><span style="background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.8);border-radius:50px;padding:4px 12px;font-size:11px;">⭐ 4.9 · 214 courses</span><span style="background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.8);border-radius:50px;padding:4px 12px;font-size:11px;">Cocody · Plateau</span></div></div>
          <div style="text-align:center;"><div style="font-size:11px;color:rgba(255,255,255,0.6);margin-bottom:4px;">Revenus du mois</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:800;color:#F39C12;">320 500</div><div style="font-size:11px;color:rgba(255,255,255,0.6);">FCFA</div></div>
        </div>
        <!-- Stats row -->
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;">
          <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);text-align:center;"><div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">Courses ce mois</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;color:#1A2332;">214</div></div>
          <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);text-align:center;"><div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">Taux réussite</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;color:#27AE60;">97%</div></div>
          <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);text-align:center;"><div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">Temps moy.</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;color:#1A2332;">22 min</div></div>
          <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);text-align:center;"><div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">Rang</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;color:#F39C12;">#3</div></div>
        </div>
        <!-- Infos + Livraisons actuelles -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
          <div style="background:#fff;border-radius:14px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
            <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;margin-bottom:14px;">Informations</div>
            <div style="display:flex;flex-direction:column;gap:10px;">
              <div style="display:flex;justify-content:space-between;"><span style="font-size:12px;color:#6B7A8D;">Téléphone</span><span style="font-size:12px;font-weight:600;color:#1A6B8A;">+225 07 44 55 88 12</span></div>
              <div style="display:flex;justify-content:space-between;"><span style="font-size:12px;color:#6B7A8D;">Véhicule</span><span style="font-size:12px;font-weight:600;color:#1A2332;">Moto · AB 4421 CI</span></div>
              <div style="display:flex;justify-content:space-between;"><span style="font-size:12px;color:#6B7A8D;">Assurance</span><span style="background:#E8F7EE;border-radius:6px;padding:1px 8px;font-size:11px;font-weight:700;color:#27AE60;">Valide</span></div>
              <div style="display:flex;justify-content:space-between;"><span style="font-size:12px;color:#6B7A8D;">Sacoche certifiée</span><span style="background:#E8F7EE;border-radius:6px;padding:1px 8px;font-size:11px;font-weight:700;color:#27AE60;">❄️ Oui</span></div>
              <div style="display:flex;justify-content:space-between;"><span style="font-size:12px;color:#6B7A8D;">Membre depuis</span><span style="font-size:12px;font-weight:600;color:#1A2332;">Janvier 2024</span></div>
            </div>
          </div>
          <div style="background:#fff;border-radius:14px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
            <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;margin-bottom:14px;">Livraison en cours</div>
            <div style="background:#FEF9EE;border-radius:12px;padding:14px;border:1.5px solid rgba(243,156,18,0.2);">
              <div style="font-size:13px;font-weight:700;color:#F39C12;margin-bottom:6px;">🛵 En route · #CMD-90214</div>
              <div style="font-size:12px;color:#1A2332;font-weight:600;">Moussa Koné</div>
              <div style="font-size:11px;color:#6B7A8D;margin-top:2px;">12 Rue des Jardins, Cocody</div>
              <div style="display:flex;gap:10px;margin-top:8px;"><span style="font-size:11px;color:#6B7A8D;">ETA 17:30</span><span style="font-size:11px;color:#6B7A8D;">~0.8 km restant</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     WSCREEN 53 — CARTE SUIVI EN DIRECT (ADMIN)
======================================== -->
<div class="web-screen" id="wscreen56">
  <div style="display:flex;height:100%;overflow:hidden;">
    <div style="width:220px;background:#1A2332;flex-shrink:0;display:flex;flex-direction:column;">
      <div style="padding:20px 16px;border-bottom:1px solid rgba(255,255,255,0.06);"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#fff;">🛡️ Admin Panel</div></div>
      <nav style="flex:1;padding:12px 8px;display:flex;flex-direction:column;gap:2px;">
        <a onclick="goToWebScreen(23)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📊 Dashboard</a>
        <a onclick="goToWebScreen(54)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">🛵 Livreurs</a>
        <a onclick="goToWebScreen(56)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:rgba(243,156,18,0.15);border-radius:10px;color:#F39C12;cursor:pointer;font-size:13px;font-weight:600;font-family:'DM Sans',sans-serif;">🗺 Suivi en direct</a>
        <a onclick="goToWebScreen(26)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📦 Commandes</a>
      </nav>
      <!-- Live livreurs list -->
      <div style="padding:12px;border-top:1px solid rgba(255,255,255,0.06);overflow-y:auto;max-height:400px;">
        <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.4);letter-spacing:0.5px;margin-bottom:8px;">LIVREURS ACTIFS</div>
        <div style="display:flex;flex-direction:column;gap:6px;">
          <div onclick="goToWebScreen(55)" style="background:rgba(243,156,18,0.15);border-radius:8px;padding:8px;cursor:pointer;border:1px solid rgba(243,156,18,0.3);">
            <div style="font-size:11px;font-weight:700;color:#F39C12;">🛵 Kofi Mensah</div>
            <div style="font-size:10px;color:rgba(255,255,255,0.5);">#CMD-90214 · 0.8km restant</div>
          </div>
          <div onclick="showToast('📍 Adama Bamba localisé — Marcory')" style="background:rgba(255,255,255,0.05);border-radius:8px;padding:8px;cursor:pointer;">
            <div style="font-size:11px;font-weight:700;color:#4ADE80;">🛵 Adama Bamba</div>
            <div style="font-size:10px;color:rgba(255,255,255,0.5);">Disponible · Marcory</div>
          </div>
          <div onclick="showToast('📍 Sékou Traoré — En route vers Treichville')" style="background:rgba(255,255,255,0.05);border-radius:8px;padding:8px;cursor:pointer;">
            <div style="font-size:11px;font-weight:700;color:#F39C12;">🛵 Sékou Traoré</div>
            <div style="font-size:10px;color:rgba(255,255,255,0.5);">#CMD-90215 · En route</div>
          </div>
          <div onclick="showToast('📍 Moussa Bah — Disponible à Cocody')" style="background:rgba(255,255,255,0.05);border-radius:8px;padding:8px;cursor:pointer;">
            <div style="font-size:11px;font-weight:700;color:#4ADE80;">🛵 Moussa Bah</div>
            <div style="font-size:10px;color:rgba(255,255,255,0.5);">Disponible · Cocody</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Carte principale -->
    <div style="flex:1;display:flex;flex-direction:column;overflow:hidden;">
      <div style="background:#fff;padding:14px 24px;display:flex;justify-content:space-between;align-items:center;border-bottom:1.5px solid #E2ECF2;flex-shrink:0;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">🗺 Suivi en temps réel — Abidjan</div>
        <div style="display:flex;gap:10px;align-items:center;">
          <div style="display:flex;gap:6px;align-items:center;"><div style="width:10px;height:10px;background:#F39C12;border-radius:50%;"></div><span style="font-size:11px;color:#6B7A8D;">En livraison (12)</span></div>
          <div style="display:flex;gap:6px;align-items:center;"><div style="width:10px;height:10px;background:#4ADE80;border-radius:50%;"></div><span style="font-size:11px;color:#6B7A8D;">Disponible (18)</span></div>
          <button onclick="refreshData()" style="padding:7px 14px;background:#E8F4F8;color:#1A6B8A;border:1.5px solid #E2ECF2;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">🔄 Actualiser</button>
        </div>
      </div>
      <!-- Map simulée -->
      <div style="flex:1;background:linear-gradient(145deg,#b8d4e0 0%,#8fbdcc 40%,#a8cad8 70%,#c5dfe8 100%);position:relative;overflow:hidden;">
        <!-- Routes simulées -->
        <svg width="100%" height="100%" style="position:absolute;top:0;left:0;">
          <!-- Routes principales -->
          <path d="M100,400 Q300,300 500,200 Q700,120 900,80" stroke="rgba(255,255,255,0.6)" stroke-width="3" fill="none"/>
          <path d="M200,500 Q400,400 600,300 Q750,230 950,200" stroke="rgba(255,255,255,0.5)" stroke-width="2" fill="none"/>
          <path d="M50,300 Q200,280 400,250 Q600,220 800,180" stroke="rgba(255,255,255,0.4)" stroke-width="2" fill="none"/>
          <!-- Livreurs en livraison (orange) -->
          <circle cx="320" cy="280" r="14" fill="#F39C12" stroke="#fff" stroke-width="3"/>
          <text x="320" y="286" text-anchor="middle" font-size="12" fill="#fff">🛵</text>
          <circle cx="580" cy="200" r="14" fill="#F39C12" stroke="#fff" stroke-width="3"/>
          <text x="580" y="206" text-anchor="middle" font-size="12" fill="#fff">🛵</text>
          <circle cx="750" cy="320" r="14" fill="#F39C12" stroke="#fff" stroke-width="3"/>
          <text x="750" y="326" text-anchor="middle" font-size="12" fill="#fff">🛵</text>
          <!-- Livreurs disponibles (vert) -->
          <circle cx="180" cy="180" r="12" fill="#27AE60" stroke="#fff" stroke-width="3"/>
          <text x="180" y="186" text-anchor="middle" font-size="10" fill="#fff">🛵</text>
          <circle cx="450" cy="380" r="12" fill="#27AE60" stroke="#fff" stroke-width="3"/>
          <text x="450" y="386" text-anchor="middle" font-size="10" fill="#fff">🛵</text>
          <circle cx="820" cy="240" r="12" fill="#27AE60" stroke="#fff" stroke-width="3"/>
          <text x="820" y="246" text-anchor="middle" font-size="10" fill="#fff">🛵</text>
          <!-- Pharmacies (bleu) -->
          <circle cx="400" cy="200" r="18" fill="#1A6B8A" stroke="#fff" stroke-width="3"/>
          <text x="400" y="207" text-anchor="middle" font-size="14" fill="#fff">⚕️</text>
          <circle cx="650" cy="300" r="16" fill="#1A6B8A" stroke="#fff" stroke-width="3"/>
          <text x="650" y="307" text-anchor="middle" font-size="14" fill="#fff">⚕️</text>
          <!-- Destinations (rouge) -->
          <circle cx="500" cy="180" r="10" fill="#E74C3C" stroke="#fff" stroke-width="2"/>
          <circle cx="700" cy="380" r="10" fill="#E74C3C" stroke="#fff" stroke-width="2"/>
          <circle cx="900" cy="250" r="10" fill="#E74C3C" stroke="#fff" stroke-width="2"/>
        </svg>
        <!-- Info box livreur sélectionné -->
        <div style="position:absolute;bottom:20px;right:20px;background:#fff;border-radius:16px;padding:16px;width:260px;box-shadow:0 8px 32px rgba(0,0,0,0.15);">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
            <div style="width:40px;height:40px;background:linear-gradient(135deg,#F39C12,#e67e22);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;">🛵</div>
            <div><div style="font-size:13px;font-weight:700;color:#1A2332;">Kofi Mensah</div><div style="font-size:11px;color:#F39C12;font-weight:600;">● En livraison · #CMD-90214</div></div>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px;">
            <div style="display:flex;justify-content:space-between;font-size:11px;"><span style="color:#6B7A8D;">Destination</span><span style="font-weight:600;color:#1A2332;">Cocody · 0.8 km</span></div>
            <div style="display:flex;justify-content:space-between;font-size:11px;"><span style="color:#6B7A8D;">ETA</span><span style="font-weight:600;color:#1A6B8A;">17:30</span></div>
            <div style="display:flex;justify-content:space-between;font-size:11px;"><span style="color:#6B7A8D;">Vitesse</span><span style="font-weight:600;color:#1A2332;">28 km/h</span></div>
          </div>
          <div style="display:flex;gap:6px;margin-top:10px;">
            <button onclick="showModal('call-modal')" style="flex:1;padding:7px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📞 Appeler</button>
            <button onclick="goToWebScreen(55)" style="flex:1;padding:7px;background:#FEF9EE;color:#F39C12;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Profil →</button>
          </div>
        </div>
        <!-- Stats overlay -->
        <div style="position:absolute;top:16px;left:50%;transform:translateX(-50%);background:rgba(26,35,50,0.9);border-radius:50px;padding:8px 20px;display:flex;gap:20px;backdrop-filter:blur(10px);">
          <div style="text-align:center;"><div style="font-size:16px;font-weight:800;color:#F39C12;">12</div><div style="font-size:9px;color:rgba(255,255,255,0.6);">En livraison</div></div>
          <div style="width:1px;background:rgba(255,255,255,0.1);"></div>
          <div style="text-align:center;"><div style="font-size:16px;font-weight:800;color:#4ADE80;">18</div><div style="font-size:9px;color:rgba(255,255,255,0.6);">Disponibles</div></div>
          <div style="width:1px;background:rgba(255,255,255,0.1);"></div>
          <div style="text-align:center;"><div style="font-size:16px;font-weight:800;color:#fff;">156</div><div style="font-size:9px;color:rgba(255,255,255,0.6);">Commandes/jour</div></div>
        </div>
      </div>
    </div>
  </div>
</div>


<!-- ====================================================
     WEB SCREEN 54 — MÉDECIN LOGIN (web)
===================================================== -->
<div class="web-screen" id="wscreen64">
  <div style="display:flex;height:100%;overflow:hidden;">
    <div style="width:220px;background:#1A2332;flex-shrink:0;display:flex;flex-direction:column;">
      <div style="padding:20px 16px;border-bottom:1px solid rgba(255,255,255,0.06);"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#fff;">🛡️ Admin Panel</div></div>
      <nav style="flex:1;padding:12px 8px;display:flex;flex-direction:column;gap:2px;overflow-y:auto;">
        <a onclick="goToWebScreen(23)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">📊 Dashboard</a>
        <a onclick="goToWebScreen(24)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">👥 Utilisateurs</a>
        <a onclick="goToWebScreen(25)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">💊 Stock</a>
        <a onclick="goToWebScreen(26)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">📦 Commandes</a>
        <a onclick="goToWebScreen(64)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;background:rgba(255,255,255,0.08);border-radius:10px;color:#fff;cursor:pointer;font-size:12px;font-weight:600;font-family:'DM Sans',sans-serif;">🛵 Livreurs</a>
        <a onclick="goToWebScreen(65)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">🏥 Pharmacies</a>
        <a onclick="goToWebScreen(66)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">📈 Analytics</a>
        <a onclick="goToWebScreen(67)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">🦠 Épidémies IR</a>
        <a onclick="goToWebScreen(68)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">⛓️ Blockchain</a>
        <a onclick="goToWebScreen(69)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">⚙️ Configuration</a>
        <a onclick="goToWebScreen(28)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">🔒 Audit & Logs</a>
      </nav>
      <div style="padding:10px 12px;border-top:1px solid rgba(255,255,255,0.06);">
        <button onclick="goToWebScreen(22)" style="width:100%;padding:8px;background:rgba(231,76,60,0.15);color:rgba(255,255,255,0.7);border:1px solid rgba(231,76,60,0.2);border-radius:8px;font-size:11px;cursor:pointer;font-family:'DM Sans',sans-serif;">Déconnexion</button>
      </div>
    </div>
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;">
      <div style="background:#fff;padding:14px 24px;border-bottom:1.5px solid #E2ECF2;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;z-index:10;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">🛵 Gestion des Livreurs</div>
        <button onclick="showToast('➕ Nouveau livreur ajouté')" style="padding:8px 18px;background:#F39C12;color:#fff;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">+ Ajouter livreur</button>
      </div>
      <div style="padding:20px 24px;display:flex;flex-direction:column;gap:16px;">
        <!-- KPIs -->
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;">
          <div style="background:linear-gradient(135deg,#F39C12,#e67e22);border-radius:12px;padding:16px;color:#fff;"><div style="font-size:10px;opacity:0.8;margin-bottom:4px;">Total livreurs</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;">112</div></div>
          <div style="background:linear-gradient(135deg,#27AE60,#2ecc71);border-radius:12px;padding:16px;color:#fff;"><div style="font-size:10px;opacity:0.8;margin-bottom:4px;">En ligne 🟢</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;">34</div></div>
          <div style="background:linear-gradient(135deg,#1A6B8A,#2196B3);border-radius:12px;padding:16px;color:#fff;"><div style="font-size:10px;opacity:0.8;margin-bottom:4px;">Livraisons aujourd'hui</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;">156</div></div>
          <div style="background:linear-gradient(135deg,#8B5CF6,#7C3AED);border-radius:12px;padding:16px;color:#fff;"><div style="font-size:10px;opacity:0.8;margin-bottom:4px;">Note moyenne</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;">4.7⭐</div></div>
        </div>
        <!-- Tableau livreurs -->
        <div style="background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          <table style="width:100%;border-collapse:collapse;">
            <thead style="background:#F4F9FC;"><tr>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Livreur</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Statut</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Livraisons</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Note</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Zone</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Actions</th>
            </tr></thead>
            <tbody>
              <tr style="border-top:1px solid #F4F9FC;"><td style="padding:12px 16px;"><div style="display:flex;align-items:center;gap:10px;"><div style="width:36px;height:36px;background:#FEF9EE;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;">🛵</div><div><div style="font-size:13px;font-weight:700;color:#1A2332;">Moussa Traoré</div><div style="font-size:11px;color:#6B7A8D;">+225 07 42 XX XX</div></div></div></td><td style="padding:12px 16px;"><span style="background:#E8F7EE;color:#27AE60;border-radius:20px;padding:3px 10px;font-size:11px;font-weight:700;">🟢 En ligne</span></td><td style="padding:12px 16px;font-size:13px;font-weight:700;color:#1A2332;">247</td><td style="padding:12px 16px;font-size:13px;font-weight:700;color:#F39C12;">4.9⭐</td><td style="padding:12px 16px;font-size:12px;color:#6B7A8D;">Yopougon</td><td style="padding:12px 16px;"><div style="display:flex;gap:6px;"><button onclick="showToast('📍 Position Moussa')" style="padding:5px 10px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;">📍</button><button onclick="showToast('⏸ Suspendu')" style="padding:5px 10px;background:#FEF9EE;color:#F39C12;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;">⏸</button></div></td></tr>
              <tr style="border-top:1px solid #F4F9FC;"><td style="padding:12px 16px;"><div style="display:flex;align-items:center;gap:10px;"><div style="width:36px;height:36px;background:#FEF9EE;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;">🛵</div><div><div style="font-size:13px;font-weight:700;color:#1A2332;">Kouassi Ange</div><div style="font-size:11px;color:#6B7A8D;">+225 05 87 XX XX</div></div></div></td><td style="padding:12px 16px;"><span style="background:#E8F7EE;color:#27AE60;border-radius:20px;padding:3px 10px;font-size:11px;font-weight:700;">🟢 En ligne</span></td><td style="padding:12px 16px;font-size:13px;font-weight:700;color:#1A2332;">189</td><td style="padding:12px 16px;font-size:13px;font-weight:700;color:#F39C12;">4.7⭐</td><td style="padding:12px 16px;font-size:12px;color:#6B7A8D;">Cocody</td><td style="padding:12px 16px;"><div style="display:flex;gap:6px;"><button onclick="showToast('📍 Position Kouassi')" style="padding:5px 10px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;">📍</button><button onclick="showToast('⏸ Suspendu')" style="padding:5px 10px;background:#FEF9EE;color:#F39C12;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;">⏸</button></div></td></tr>
              <tr style="border-top:1px solid #F4F9FC;"><td style="padding:12px 16px;"><div style="display:flex;align-items:center;gap:10px;"><div style="width:36px;height:36px;background:#FEF0EE;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;">🛵</div><div><div style="font-size:13px;font-weight:700;color:#1A2332;">Bamba Soro</div><div style="font-size:11px;color:#6B7A8D;">+225 01 23 XX XX</div></div></div></td><td style="padding:12px 16px;"><span style="background:#FEF0EE;color:#E74C3C;border-radius:20px;padding:3px 10px;font-size:11px;font-weight:700;">🔴 Suspendu</span></td><td style="padding:12px 16px;font-size:13px;font-weight:700;color:#1A2332;">42</td><td style="padding:12px 16px;font-size:13px;font-weight:700;color:#E74C3C;">2.1⭐</td><td style="padding:12px 16px;font-size:12px;color:#6B7A8D;">Abobo</td><td style="padding:12px 16px;"><div style="display:flex;gap:6px;"><button onclick="showToast('✅ Compte réactivé')" style="padding:5px 10px;background:#E8F7EE;color:#27AE60;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;">Réactiver</button><button onclick="showToast('🗑 Supprimé')" style="padding:5px 10px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;">🗑</button></div></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     WEB SCREEN 62 — PHARMACIES MANAGEMENT (ADMIN)
======================================== -->
<div class="web-screen" id="wscreen65">
  <div style="display:flex;height:100%;overflow:hidden;">
    <div style="width:220px;background:#1A2332;flex-shrink:0;display:flex;flex-direction:column;">
      <div style="padding:20px 16px;border-bottom:1px solid rgba(255,255,255,0.06);"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#fff;">🛡️ Admin Panel</div></div>
      <nav style="flex:1;padding:12px 8px;display:flex;flex-direction:column;gap:2px;overflow-y:auto;">
        <a onclick="goToWebScreen(23)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">📊 Dashboard</a>
        <a onclick="goToWebScreen(24)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">👥 Utilisateurs</a>
        <a onclick="goToWebScreen(25)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">💊 Stock</a>
        <a onclick="goToWebScreen(26)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">📦 Commandes</a>
        <a onclick="goToWebScreen(64)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">🛵 Livreurs</a>
        <a onclick="goToWebScreen(65)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;background:rgba(255,255,255,0.08);border-radius:10px;color:#fff;cursor:pointer;font-size:12px;font-weight:600;font-family:'DM Sans',sans-serif;">🏥 Pharmacies</a>
        <a onclick="goToWebScreen(66)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">📈 Analytics</a>
        <a onclick="goToWebScreen(67)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">🦠 Épidémies IR</a>
        <a onclick="goToWebScreen(68)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">⛓️ Blockchain</a>
        <a onclick="goToWebScreen(69)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">⚙️ Configuration</a>
        <a onclick="goToWebScreen(28)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">🔒 Audit & Logs</a>
      </nav>
      <div style="padding:10px 12px;border-top:1px solid rgba(255,255,255,0.06);">
        <button onclick="goToWebScreen(22)" style="width:100%;padding:8px;background:rgba(231,76,60,0.15);color:rgba(255,255,255,0.7);border:1px solid rgba(231,76,60,0.2);border-radius:8px;font-size:11px;cursor:pointer;font-family:'DM Sans',sans-serif;">Déconnexion</button>
      </div>
    </div>
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;">
      <div style="background:#fff;padding:14px 24px;border-bottom:1.5px solid #E2ECF2;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;z-index:10;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">🏥 Gestion des Pharmacies</div>
        <div style="display:flex;gap:8px;">
          <input type="text" placeholder="Rechercher une pharmacie…" style="padding:8px 12px;border:1.5px solid #E2ECF2;border-radius:8px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;width:220px;">
          <button onclick="showToast('➕ Pharmacie ajoutée')" style="padding:8px 18px;background:#27AE60;color:#fff;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">+ Ajouter</button>
        </div>
      </div>
      <div style="padding:20px 24px;display:flex;flex-direction:column;gap:16px;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
          <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);text-align:center;"><div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">Pharmacies actives</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:800;color:#27AE60;">47</div></div>
          <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);text-align:center;"><div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">En attente vérif.</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:800;color:#F39C12;">3</div></div>
          <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);text-align:center;"><div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">Suspendues</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:800;color:#E74C3C;">2</div></div>
        </div>
        <div style="background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          <table style="width:100%;border-collapse:collapse;">
            <thead style="background:#F4F9FC;"><tr>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Pharmacie</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Zone</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Statut</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Commandes/mois</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">CA mensuel</th>
              <th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Actions</th>
            </tr></thead>
            <tbody>
              <tr style="border-top:1px solid #F4F9FC;"><td style="padding:12px 16px;font-size:13px;font-weight:700;color:#1A2332;">💊 Pharmacie Centrale CI</td><td style="padding:12px 16px;font-size:12px;color:#6B7A8D;">Plateau</td><td style="padding:12px 16px;"><span style="background:#E8F7EE;color:#27AE60;border-radius:20px;padding:3px 10px;font-size:11px;font-weight:700;">✓ Active</span></td><td style="padding:12px 16px;font-size:13px;font-weight:700;color:#1A2332;">1 204</td><td style="padding:12px 16px;font-size:13px;font-weight:700;color:#27AE60;">1.2M FCFA</td><td style="padding:12px 16px;"><button onclick="showToast('📊 Stats Centrale CI')" style="padding:5px 10px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;">Voir</button></td></tr>
              <tr style="border-top:1px solid #F4F9FC;"><td style="padding:12px 16px;font-size:13px;font-weight:700;color:#1A2332;">💊 PharmaPlus Cocody</td><td style="padding:12px 16px;font-size:12px;color:#6B7A8D;">Cocody</td><td style="padding:12px 16px;"><span style="background:#E8F7EE;color:#27AE60;border-radius:20px;padding:3px 10px;font-size:11px;font-weight:700;">✓ Active</span></td><td style="padding:12px 16px;font-size:13px;font-weight:700;color:#1A2332;">890</td><td style="padding:12px 16px;font-size:13px;font-weight:700;color:#27AE60;">890K FCFA</td><td style="padding:12px 16px;"><button onclick="showToast('📊 Stats PharmaPlus')" style="padding:5px 10px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;">Voir</button></td></tr>
              <tr style="border-top:1px solid #F4F9FC;"><td style="padding:12px 16px;font-size:13px;font-weight:700;color:#F39C12;">💊 Pharma Abobo (en attente)</td><td style="padding:12px 16px;font-size:12px;color:#6B7A8D;">Abobo</td><td style="padding:12px 16px;"><span style="background:#FEF9EE;color:#F39C12;border-radius:20px;padding:3px 10px;font-size:11px;font-weight:700;">⏳ Vérification</span></td><td style="padding:12px 16px;font-size:12px;color:#6B7A8D;">—</td><td style="padding:12px 16px;font-size:12px;color:#6B7A8D;">—</td><td style="padding:12px 16px;"><div style="display:flex;gap:6px;"><button onclick="showToast('✅ Pharmacie validée !')" style="padding:5px 10px;background:#E8F7EE;color:#27AE60;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;">Valider</button><button onclick="showToast('❌ Rejetée')" style="padding:5px 10px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;">Rejeter</button></div></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     WEB SCREEN 63 — ANALYTICS AVANCÉ (ADMIN)
======================================== -->
<div class="web-screen" id="wscreen66">
  <div style="display:flex;height:100%;overflow:hidden;">
    <div style="width:220px;background:#1A2332;flex-shrink:0;display:flex;flex-direction:column;">
      <div style="padding:20px 16px;border-bottom:1px solid rgba(255,255,255,0.06);"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#fff;">🛡️ Admin Panel</div></div>
      <nav style="flex:1;padding:12px 8px;display:flex;flex-direction:column;gap:2px;overflow-y:auto;">
        <a onclick="goToWebScreen(23)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">📊 Dashboard</a>
        <a onclick="goToWebScreen(24)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">👥 Utilisateurs</a>
        <a onclick="goToWebScreen(25)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">💊 Stock</a>
        <a onclick="goToWebScreen(26)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">📦 Commandes</a>
        <a onclick="goToWebScreen(64)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">🛵 Livreurs</a>
        <a onclick="goToWebScreen(65)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">🏥 Pharmacies</a>
        <a onclick="goToWebScreen(66)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;background:rgba(255,255,255,0.08);border-radius:10px;color:#fff;cursor:pointer;font-size:12px;font-weight:600;font-family:'DM Sans',sans-serif;">📈 Analytics</a>
        <a onclick="goToWebScreen(67)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">🦠 Épidémies IR</a>
        <a onclick="goToWebScreen(68)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">⛓️ Blockchain</a>
        <a onclick="goToWebScreen(69)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">⚙️ Configuration</a>
        <a onclick="goToWebScreen(28)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">🔒 Audit & Logs</a>
      </nav>
      <div style="padding:10px 12px;border-top:1px solid rgba(255,255,255,0.06);"><button onclick="goToWebScreen(22)" style="width:100%;padding:8px;background:rgba(231,76,60,0.15);color:rgba(255,255,255,0.7);border:1px solid rgba(231,76,60,0.2);border-radius:8px;font-size:11px;cursor:pointer;font-family:'DM Sans',sans-serif;">Déconnexion</button></div>
    </div>
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;padding:20px 24px;">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#1A2332;margin-bottom:16px;">📈 Analytics Avancées</div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:16px;">
        <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);text-align:center;"><div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">Revenus mensuels</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:800;color:#27AE60;">4.2M FCFA</div><div style="font-size:10px;color:#27AE60;">↑ +8%</div></div>
        <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);text-align:center;"><div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">Taux conversion</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:800;color:#1A6B8A;">68.4%</div><div style="font-size:10px;color:#27AE60;">↑ +2.1%</div></div>
        <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);text-align:center;"><div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">Rétention users</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:800;color:#8B5CF6;">82%</div><div style="font-size:10px;color:#27AE60;">↑ +5%</div></div>
        <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);text-align:center;"><div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">NPS Score</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:800;color:#F39C12;">+71</div><div style="font-size:10px;color:#27AE60;">Excellent</div></div>
      </div>
      <div style="display:grid;grid-template-columns:2fr 1fr;gap:16px;">
        <div style="background:#fff;border-radius:14px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;margin-bottom:14px;">Revenus 12 derniers mois (FCFA)</div>
          <div style="display:flex;align-items:flex-end;gap:6px;height:100px;">
            <div style="flex:1;height:55%;background:#B5D4F4;border-radius:4px 4px 0 0;"></div>
            <div style="flex:1;height:48%;background:#B5D4F4;border-radius:4px 4px 0 0;"></div>
            <div style="flex:1;height:62%;background:#B5D4F4;border-radius:4px 4px 0 0;"></div>
            <div style="flex:1;height:58%;background:#B5D4F4;border-radius:4px 4px 0 0;"></div>
            <div style="flex:1;height:70%;background:#B5D4F4;border-radius:4px 4px 0 0;"></div>
            <div style="flex:1;height:65%;background:#B5D4F4;border-radius:4px 4px 0 0;"></div>
            <div style="flex:1;height:75%;background:#B5D4F4;border-radius:4px 4px 0 0;"></div>
            <div style="flex:1;height:80%;background:#B5D4F4;border-radius:4px 4px 0 0;"></div>
            <div style="flex:1;height:72%;background:#B5D4F4;border-radius:4px 4px 0 0;"></div>
            <div style="flex:1;height:88%;background:#B5D4F4;border-radius:4px 4px 0 0;"></div>
            <div style="flex:1;height:92%;background:#B5D4F4;border-radius:4px 4px 0 0;"></div>
            <div style="flex:1;height:100%;background:#1A6B8A;border-radius:4px 4px 0 0;"></div>
          </div>
          <div style="display:flex;justify-content:space-between;margin-top:6px;font-size:9px;color:#6B7A8D;">
            <span>Avr</span><span>Mai</span><span>Jui</span><span>Jul</span><span>Aoû</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Déc</span><span>Jan</span><span>Fév</span><span>Mar</span>
          </div>
        </div>
        <div style="background:#fff;border-radius:14px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;margin-bottom:14px;">Top médicaments</div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <div><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px;"><span style="font-weight:600;color:#1A2332;">Amoxicilline</span><span style="color:#27AE60;font-weight:700;">34%</span></div><div style="height:6px;background:#E2ECF2;border-radius:3px;overflow:hidden;"><div style="width:34%;height:100%;background:#27AE60;border-radius:3px;"></div></div></div>
            <div><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px;"><span style="font-weight:600;color:#1A2332;">Metformine</span><span style="color:#1A6B8A;font-weight:700;">28%</span></div><div style="height:6px;background:#E2ECF2;border-radius:3px;overflow:hidden;"><div style="width:28%;height:100%;background:#1A6B8A;border-radius:3px;"></div></div></div>
            <div><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px;"><span style="font-weight:600;color:#1A2332;">Artéméther</span><span style="color:#F39C12;font-weight:700;">21%</span></div><div style="height:6px;background:#E2ECF2;border-radius:3px;overflow:hidden;"><div style="width:21%;height:100%;background:#F39C12;border-radius:3px;"></div></div></div>
            <div><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px;"><span style="font-weight:600;color:#1A2332;">Ibuprofène</span><span style="color:#8B5CF6;font-weight:700;">17%</span></div><div style="height:6px;background:#E2ECF2;border-radius:3px;overflow:hidden;"><div style="width:17%;height:100%;background:#8B5CF6;border-radius:3px;"></div></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     WEB SCREEN 64 — ÉPIDÉMIES IR (ADMIN WEB)
======================================== -->
<div class="web-screen" id="wscreen67">
  <div style="display:flex;height:100%;overflow:hidden;">
    <div style="width:220px;background:#1A2332;flex-shrink:0;display:flex;flex-direction:column;">
      <div style="padding:20px 16px;border-bottom:1px solid rgba(255,255,255,0.06);"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#fff;">🛡️ Admin Panel</div></div>
      <nav style="flex:1;padding:12px 8px;display:flex;flex-direction:column;gap:2px;overflow-y:auto;">
        <a onclick="goToWebScreen(23)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">📊 Dashboard</a>
        <a onclick="goToWebScreen(24)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">👥 Utilisateurs</a>
        <a onclick="goToWebScreen(25)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">💊 Stock</a>
        <a onclick="goToWebScreen(26)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">📦 Commandes</a>
        <a onclick="goToWebScreen(64)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">🛵 Livreurs</a>
        <a onclick="goToWebScreen(65)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">🏥 Pharmacies</a>
        <a onclick="goToWebScreen(66)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">📈 Analytics</a>
        <a onclick="goToWebScreen(67)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;background:rgba(231,76,60,0.2);border-radius:10px;color:#ff9d9d;cursor:pointer;font-size:12px;font-weight:600;font-family:'DM Sans',sans-serif;">🦠 Épidémies IR</a>
        <a onclick="goToWebScreen(68)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">⛓️ Blockchain</a>
        <a onclick="goToWebScreen(69)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">⚙️ Configuration</a>
        <a onclick="goToWebScreen(28)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">🔒 Audit & Logs</a>
      </nav>
      <div style="padding:10px 12px;border-top:1px solid rgba(255,255,255,0.06);"><button onclick="goToWebScreen(22)" style="width:100%;padding:8px;background:rgba(231,76,60,0.15);color:rgba(255,255,255,0.7);border:1px solid rgba(231,76,60,0.2);border-radius:8px;font-size:11px;cursor:pointer;font-family:'DM Sans',sans-serif;">Déconnexion</button></div>
    </div>
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;padding:20px 24px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#1A2332;">🦠 Surveillance Épidémiologique IR</div>
        <div style="background:#FEF0EE;border-radius:20px;padding:6px 16px;display:flex;align-items:center;gap:8px;"><div style="width:8px;height:8px;background:#E74C3C;border-radius:50%;animation:blink 1s infinite;"></div><span style="font-size:12px;font-weight:700;color:#E74C3C;">Alerte active — Fièvre Lassa Zone Nord</span></div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:16px;">
        <div style="background:linear-gradient(135deg,#E74C3C,#c0392b);border-radius:12px;padding:16px;color:#fff;"><div style="font-size:10px;opacity:0.8;margin-bottom:4px;">Criticité C_N</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;">0.87</div><div style="font-size:10px;opacity:0.7;">&#62; Seuil 0.6 ⚠️</div></div>
        <div style="background:linear-gradient(135deg,#F39C12,#e67e22);border-radius:12px;padding:16px;color:#fff;"><div style="font-size:10px;opacity:0.8;margin-bottom:4px;">Vitesse V_r</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;">+340%</div><div style="font-size:10px;opacity:0.7;">Croissance hebdo.</div></div>
        <div style="background:linear-gradient(135deg,#1A6B8A,#2196B3);border-radius:12px;padding:16px;color:#fff;"><div style="font-size:10px;opacity:0.8;margin-bottom:4px;">Cas confirmés</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;">47</div><div style="font-size:10px;opacity:0.7;">Zone Nord Abidjan</div></div>
        <div style="background:linear-gradient(135deg,#0D3B2E,#27AE60);border-radius:12px;padding:16px;color:#fff;"><div style="font-size:10px;opacity:0.8;margin-bottom:4px;">Couverture info.</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;">83%</div><div style="font-size:10px;opacity:0.7;">Patients notifiés</div></div>
      </div>
      <div style="display:grid;grid-template-columns:2fr 1fr;gap:16px;">
        <div style="background:#fff;border-radius:14px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;margin-bottom:14px;">Projection J+7 — Fièvre Lassa</div>
          <div style="display:flex;align-items:flex-end;gap:8px;height:100px;">
            <div style="flex:1;height:30%;background:#B5D4F4;border-radius:4px 4px 0 0;"></div>
            <div style="flex:1;height:40%;background:#B5D4F4;border-radius:4px 4px 0 0;"></div>
            <div style="flex:1;height:55%;background:#FEF9EE;border-radius:4px 4px 0 0;"></div>
            <div style="flex:1;height:65%;background:#FEF9EE;border-radius:4px 4px 0 0;"></div>
            <div style="flex:1;height:78%;background:#FEF0EE;border-radius:4px 4px 0 0;"></div>
            <div style="flex:1;height:90%;background:#FEF0EE;border-radius:4px 4px 0 0;"></div>
            <div style="flex:1;height:100%;background:#E74C3C;border-radius:4px 4px 0 0;opacity:0.8;"></div>
          </div>
          <div style="display:flex;justify-content:space-between;margin-top:6px;font-size:10px;color:#6B7A8D;"><span>J+1</span><span>J+2</span><span>J+3</span><span>J+4</span><span>J+5</span><span>J+6</span><span>J+7</span></div>
          <div style="margin-top:10px;background:#FEF0EE;border-radius:8px;padding:10px;font-size:12px;color:#E74C3C;font-weight:600;">⚠️ Pic prévu J+7 — Intervention recommandée dès J+3</div>
        </div>
        <div style="background:#fff;border-radius:14px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;margin-bottom:12px;">Actions recommandées</div>
          <div style="display:flex;flex-direction:column;gap:8px;">
            <button onclick="showToast('📦 Commande ribavirine envoyée')" style="padding:10px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;text-align:left;font-family:'DM Sans',sans-serif;">🚨 Commander ribavirine 200mg</button>
            <button onclick="showToast('🏥 Protocole activé')" style="padding:10px;background:#FEF9EE;color:#F39C12;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;text-align:left;font-family:'DM Sans',sans-serif;">🏥 Activer protocole isolement</button>
            <button onclick="showToast('📤 Rapport envoyé')" style="padding:10px;background:#E8F7EE;color:#27AE60;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;text-align:left;font-family:'DM Sans',sans-serif;">📤 Envoyer rapport Ministère</button>
            <button onclick="showToast('📱 8247 patients notifiés')" style="padding:10px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;text-align:left;font-family:'DM Sans',sans-serif;">📱 Notifier patients zone Nord</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     WEB SCREEN 65 — BLOCKCHAIN VIEWER (ADMIN WEB)
======================================== -->
<div class="web-screen" id="wscreen68">
  <div style="display:flex;height:100%;overflow:hidden;">
    <div style="width:220px;background:#1A2332;flex-shrink:0;display:flex;flex-direction:column;">
      <div style="padding:20px 16px;border-bottom:1px solid rgba(255,255,255,0.06);"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#fff;">🛡️ Admin Panel</div></div>
      <nav style="flex:1;padding:12px 8px;display:flex;flex-direction:column;gap:2px;overflow-y:auto;">
        <a onclick="goToWebScreen(23)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">📊 Dashboard</a>
        <a onclick="goToWebScreen(24)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">👥 Utilisateurs</a>
        <a onclick="goToWebScreen(64)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">🛵 Livreurs</a>
        <a onclick="goToWebScreen(65)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">🏥 Pharmacies</a>
        <a onclick="goToWebScreen(66)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">📈 Analytics</a>
        <a onclick="goToWebScreen(67)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">🦠 Épidémies IR</a>
        <a onclick="goToWebScreen(68)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;background:rgba(255,255,255,0.08);border-radius:10px;color:#fff;cursor:pointer;font-size:12px;font-weight:600;font-family:'DM Sans',sans-serif;">⛓️ Blockchain</a>
        <a onclick="goToWebScreen(69)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">⚙️ Configuration</a>
        <a onclick="goToWebScreen(28)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">🔒 Audit & Logs</a>
      </nav>
      <div style="padding:10px 12px;border-top:1px solid rgba(255,255,255,0.06);"><button onclick="goToWebScreen(22)" style="width:100%;padding:8px;background:rgba(231,76,60,0.15);color:rgba(255,255,255,0.7);border:1px solid rgba(231,76,60,0.2);border-radius:8px;font-size:11px;cursor:pointer;font-family:'DM Sans',sans-serif;">Déconnexion</button></div>
    </div>
    <div style="flex:1;overflow-y:auto;background:#0D1117;padding:20px 24px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#E6EDF3;">⛓️ Explorateur Blockchain</div>
        <div style="background:rgba(39,174,96,0.2);border-radius:20px;padding:6px 16px;border:1px solid rgba(39,174,96,0.3);"><span style="font-size:12px;font-weight:700;color:#27AE60;">● Chaîne intègre · 0 altération · 3 blocs validés</span></div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:16px;">
        <div style="background:#161B22;border-radius:14px;border:1px solid rgba(39,174,96,0.3);overflow:hidden;">
          <div style="background:linear-gradient(135deg,#27AE60,#2ecc71);padding:12px 16px;display:flex;justify-content:space-between;align-items:center;"><span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:800;color:#fff;">🧱 Bloc #001 — GENESIS</span><span style="background:rgba(255,255,255,0.25);border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;color:#fff;">VALIDÉ ✓</span></div>
          <div style="padding:14px;font-family:monospace;font-size:11px;">
            <div style="margin-bottom:8px;"><div style="color:#8B949E;margin-bottom:2px;">TIMESTAMP</div><div style="color:#E6EDF3;background:#0D1117;padding:4px 8px;border-radius:4px;">2026-04-10T06:00:00Z</div></div>
            <div style="margin-bottom:8px;"><div style="color:#8B949E;margin-bottom:2px;">DATA</div><div style="color:#E6EDF3;background:#0D1117;padding:4px 8px;border-radius:4px;">ORD-2849 · Amoxicilline 500mg · Dr. Koné</div></div>
            <div><div style="color:#8B949E;margin-bottom:2px;">HASH</div><div style="color:#27AE60;background:#0D1117;padding:4px 8px;border-radius:4px;word-break:break-all;">0x3f7a2b9c...c891d4e2</div></div>
          </div>
        </div>
        <div style="background:#161B22;border-radius:14px;border:1px solid rgba(26,107,138,0.4);overflow:hidden;">
          <div style="background:linear-gradient(135deg,#1A6B8A,#2196B3);padding:12px 16px;display:flex;justify-content:space-between;align-items:center;"><span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:800;color:#fff;">🧱 Bloc #002</span><span style="background:rgba(255,255,255,0.25);border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;color:#fff;">VALIDÉ ✓</span></div>
          <div style="padding:14px;font-family:monospace;font-size:11px;">
            <div style="margin-bottom:8px;"><div style="color:#8B949E;margin-bottom:2px;">TIMESTAMP</div><div style="color:#E6EDF3;background:#0D1117;padding:4px 8px;border-radius:4px;">2026-04-10T08:32:17Z</div></div>
            <div style="margin-bottom:8px;"><div style="color:#8B949E;margin-bottom:2px;">DATA</div><div style="color:#E6EDF3;background:#0D1117;padding:4px 8px;border-radius:4px;">ORD-2850 · Ibuprofène 400mg · Dr. Lefebvre</div></div>
            <div style="margin-bottom:8px;"><div style="color:#8B949E;margin-bottom:2px;">HASH PREV</div><div style="color:#1A6B8A;background:#0D1117;padding:4px 8px;border-radius:4px;">0x3f7a2b9c...c891d4e2</div></div>
            <div><div style="color:#8B949E;margin-bottom:2px;">HASH</div><div style="color:#27AE60;background:#0D1117;padding:4px 8px;border-radius:4px;word-break:break-all;">0x9d4e1f7a...a2c780b3</div></div>
          </div>
        </div>
        <div style="background:#161B22;border-radius:14px;border:2px dashed rgba(243,156,18,0.5);overflow:hidden;">
          <div style="background:linear-gradient(135deg,#F39C12,#e67e22);padding:12px 16px;display:flex;justify-content:space-between;align-items:center;"><span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:800;color:#fff;">🧱 Bloc #003 — EN COURS</span><span style="background:rgba(255,255,255,0.25);border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;color:#fff;">⏳ SYNC…</span></div>
          <div style="padding:14px;font-family:monospace;font-size:11px;">
            <div style="margin-bottom:8px;"><div style="color:#8B949E;margin-bottom:2px;">DATA EN ATTENTE</div><div style="color:#F39C12;background:#0D1117;padding:4px 8px;border-radius:4px;">ORD-2851 · Réseau faible IR=0.31</div></div>
            <div style="background:rgba(243,156,18,0.1);border-radius:6px;padding:8px;color:#F39C12;font-size:10px;">⚠️ Attente réseau IR &gt; 0.4 — Sync différée active</div>
          </div>
        </div>
      </div>
      <div style="display:flex;gap:12px;">
        <button onclick="showToast('🔍 Intégrité vérifiée — 100% ✓')" style="padding:12px 24px;background:linear-gradient(135deg,#27AE60,#2ecc71);color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">🔍 Vérifier intégrité</button>
        <button onclick="showToast('🔑 Rotation des clés lancée')" style="padding:12px 24px;background:#161B22;color:#E6EDF3;border:1px solid #30363D;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">🔑 Rotation clés RSA</button>
        <button onclick="showToast('📥 Export JSON téléchargé')" style="padding:12px 24px;background:#161B22;color:#E6EDF3;border:1px solid #30363D;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📥 Exporter chaîne JSON</button>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     WEB SCREEN 66 — CONFIGURATION SYSTÈME (ADMIN WEB)
======================================== -->
<div class="web-screen" id="wscreen69">
  <div style="display:flex;height:100%;overflow:hidden;">
    <div style="width:220px;background:#1A2332;flex-shrink:0;display:flex;flex-direction:column;">
      <div style="padding:20px 16px;border-bottom:1px solid rgba(255,255,255,0.06);"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#fff;">🛡️ Admin Panel</div></div>
      <nav style="flex:1;padding:12px 8px;display:flex;flex-direction:column;gap:2px;overflow-y:auto;">
        <a onclick="goToWebScreen(23)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">📊 Dashboard</a>
        <a onclick="goToWebScreen(24)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">👥 Utilisateurs</a>
        <a onclick="goToWebScreen(25)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">💊 Stock</a>
        <a onclick="goToWebScreen(26)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">📦 Commandes</a>
        <a onclick="goToWebScreen(64)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">🛵 Livreurs</a>
        <a onclick="goToWebScreen(65)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">🏥 Pharmacies</a>
        <a onclick="goToWebScreen(66)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">📈 Analytics</a>
        <a onclick="goToWebScreen(67)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">🦠 Épidémies IR</a>
        <a onclick="goToWebScreen(68)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">⛓️ Blockchain</a>
        <a onclick="goToWebScreen(69)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;background:rgba(255,255,255,0.08);border-radius:10px;color:#fff;cursor:pointer;font-size:12px;font-weight:600;font-family:'DM Sans',sans-serif;">⚙️ Configuration</a>
        <a onclick="goToWebScreen(28)" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;">🔒 Audit & Logs</a>
      </nav>
      <div style="padding:10px 12px;border-top:1px solid rgba(255,255,255,0.06);"><button onclick="goToWebScreen(22)" style="width:100%;padding:8px;background:rgba(231,76,60,0.15);color:rgba(255,255,255,0.7);border:1px solid rgba(231,76,60,0.2);border-radius:8px;font-size:11px;cursor:pointer;font-family:'DM Sans',sans-serif;">Déconnexion</button></div>
    </div>
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;padding:20px 24px;">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#1A2332;margin-bottom:16px;">⚙️ Configuration Système</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
        <div style="background:#fff;border-radius:14px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;margin-bottom:16px;">📦 Paramètres Livraison</div>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <div style="display:flex;justify-content:space-between;align-items:center;padding:10px;background:#F4F9FC;border-radius:10px;"><span style="font-size:13px;color:#1A2332;font-weight:600;">Frais de livraison</span><div style="display:flex;align-items:center;gap:8px;"><input type="number" value="500" style="width:70px;padding:6px;border:1.5px solid #E2ECF2;border-radius:6px;font-size:13px;font-family:'DM Sans',sans-serif;text-align:right;"><span style="font-size:12px;color:#6B7A8D;">FCFA</span></div></div>
            <div style="display:flex;justify-content:space-between;align-items:center;padding:10px;background:#F4F9FC;border-radius:10px;"><span style="font-size:13px;color:#1A2332;font-weight:600;">Rayon max. livraison</span><div style="display:flex;align-items:center;gap:8px;"><input type="number" value="15" style="width:70px;padding:6px;border:1.5px solid #E2ECF2;border-radius:6px;font-size:13px;font-family:'DM Sans',sans-serif;text-align:right;"><span style="font-size:12px;color:#6B7A8D;">km</span></div></div>
            <div style="display:flex;justify-content:space-between;align-items:center;padding:10px;background:#F4F9FC;border-radius:10px;"><span style="font-size:13px;color:#1A2332;font-weight:600;">SLA cible (délai)</span><div style="display:flex;align-items:center;gap:8px;"><input type="number" value="30" style="width:70px;padding:6px;border:1.5px solid #E2ECF2;border-radius:6px;font-size:13px;font-family:'DM Sans',sans-serif;text-align:right;"><span style="font-size:12px;color:#6B7A8D;">min</span></div></div>
            <div style="display:flex;justify-content:space-between;align-items:center;padding:10px;background:#F4F9FC;border-radius:10px;"><span style="font-size:13px;color:#1A2332;font-weight:600;">Commission pharmacie</span><div style="display:flex;align-items:center;gap:8px;"><input type="number" value="8" style="width:70px;padding:6px;border:1.5px solid #E2ECF2;border-radius:6px;font-size:13px;font-family:'DM Sans',sans-serif;text-align:right;"><span style="font-size:12px;color:#6B7A8D;">%</span></div></div>
            <button onclick="showToast('✅ Paramètres enregistrés')" style="width:100%;padding:12px;background:linear-gradient(135deg,#1A6B8A,#2196B3);color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Sauvegarder</button>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:16px;">
          <div style="background:#fff;border-radius:14px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
            <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;margin-bottom:14px;">🔧 Modules Actifs</div>
            <div style="display:flex;flex-direction:column;gap:10px;">
              <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:13px;color:#1A2332;">Mode hors-ligne (FIG.2)</span><div onclick="showToast('✅ Actif')" style="width:44px;height:22px;background:#27AE60;border-radius:11px;position:relative;cursor:pointer;"><div style="position:absolute;right:3px;top:3px;width:16px;height:16px;background:#fff;border-radius:50%;"></div></div></div>
              <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:13px;color:#1A2332;">Alertes épidémiques IR (FIG.4)</span><div onclick="showToast('✅ Actif')" style="width:44px;height:22px;background:#27AE60;border-radius:11px;position:relative;cursor:pointer;"><div style="position:absolute;right:3px;top:3px;width:16px;height:16px;background:#fff;border-radius:50%;"></div></div></div>
              <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:13px;color:#1A2332;">Blockchain (FIG.3)</span><div onclick="showToast('✅ Actif')" style="width:44px;height:22px;background:#27AE60;border-radius:11px;position:relative;cursor:pointer;"><div style="position:absolute;right:3px;top:3px;width:16px;height:16px;background:#fff;border-radius:50%;"></div></div></div>
              <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:13px;color:#1A2332;">Mode maintenance</span><div onclick="showToast('⚠️ Maintenance activée')" style="width:44px;height:22px;background:#E2ECF2;border-radius:11px;position:relative;cursor:pointer;"><div style="position:absolute;left:3px;top:3px;width:16px;height:16px;background:#fff;border-radius:50%;"></div></div></div>
            </div>
          </div>
          <div style="background:#fff;border-radius:14px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
            <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;margin-bottom:12px;">🔐 Actions Sécurité</div>
            <div style="display:flex;flex-direction:column;gap:8px;">
              <button onclick="showToast('🔑 Rotation clés lancée')" style="padding:10px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;text-align:left;font-family:'DM Sans',sans-serif;">🔑 Rotation clés API blockchain</button>
              <button onclick="showToast('🔄 Sauvegarde en cours…')" style="padding:10px;background:#E8F7EE;color:#27AE60;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;text-align:left;font-family:'DM Sans',sans-serif;">🔄 Sauvegarder base de données</button>
              <button onclick="showToast('📋 Logs exportés')" style="padding:10px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;text-align:left;font-family:'DM Sans',sans-serif;">📋 Exporter logs audit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- WEB SCREEN: ADMIN ENROLLMENTS PENDING -->
<div class="web-screen" id="wscreen_admin_enrollements">
  <div style="display:flex;height:100%;overflow:hidden;">
    <div style="width:220px;background:#1A2332;flex-shrink:0;display:flex;flex-direction:column;" class="admin-nav-container">
      <div style="padding:20px 16px;border-bottom:1px solid rgba(255,255,255,0.06);"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#fff;">🛡️ Admin Panel</div></div>
      <nav style="flex:1;padding:12px 8px;display:flex;flex-direction:column;gap:2px;" id="admin_nav_enrollements">
        <a onclick="goToWebScreen(23)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📊 Dashboard</a>
        <a onclick="goToWebScreen(24)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">👥 Utilisateurs</a>
        <a onclick="goToWebScreen('_admin_enrollements')" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:rgba(255,255,255,0.08);border-radius:10px;color:#fff;cursor:pointer;font-size:13px;font-weight:600;font-family:'DM Sans',sans-serif;">📝 Enrôlements <span style="background:#E74C3C;color:#fff;border-radius:50px;padding:2px 6px;font-size:9px;font-weight:700;margin-left:auto;">2</span></a>
        <a onclick="goToWebScreen(28)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">🔒 Audit & Logs</a>
      </nav>
    </div>
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;">
      <div style="background:#fff;padding:14px 24px;display:flex;justify-content:space-between;align-items:center;border-bottom:1.5px solid #E2ECF2;position:sticky;top:0;z-index:10;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">Inscriptions en attente</div>
        <div style="display:flex;gap:8px;">
          <input type="text" placeholder="Rechercher..." style="padding:8px 12px;border:1.5px solid #E2ECF2;border-radius:8px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;width:180px;">
          <select style="padding:8px 12px;border:1.5px solid #E2ECF2;border-radius:8px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;"><option>Tous les profils</option><option>Pharmacien</option><option>Livreur</option></select>
        </div>
      </div>
      
      <div style="padding:20px 24px;">
        <div style="background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          <!-- Enrollment Item 1 -->
          <div style="padding:20px;border-bottom:1px solid #E2ECF2;display:flex;justify-content:space-between;align-items:flex-start;">
            <div style="display:flex;gap:16px;">
              <div style="width:50px;height:50px;background:#FEF9EE;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;">🏥</div>
              <div>
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
                  <div style="font-size:15px;font-weight:700;color:#1A2332;">Dr. Koné Moussa</div>
                  <div style="background:#FFF3E0;color:#E67E22;padding:2px 8px;border-radius:4px;font-size:10px;font-weight:700;">EN ATTENTE</div>
                </div>
                <div style="font-size:13px;color:#6B7A8D;margin-bottom:12px;">Profil: Pharmacien Titulaire · Abidjan, Cocody</div>
                
                <!-- Documents Viewers Mockup -->
                <div style="display:flex;gap:12px;">
                  <button onclick="showToast('Ouverture du Diplôme...')" style="padding:8px 12px;background:#F4F9FC;border:1.5px solid #E2ECF2;border-radius:8px;font-size:12px;font-weight:600;color:#1A6B8A;cursor:pointer;display:flex;align-items:center;gap:6px;">📄 Diplôme</button>
                  <button onclick="showToast('Ouverture de la Licence...')" style="padding:8px 12px;background:#F4F9FC;border:1.5px solid #E2ECF2;border-radius:8px;font-size:12px;font-weight:600;color:#1A6B8A;cursor:pointer;display:flex;align-items:center;gap:6px;">📜 Licence d'exploitation</button>
                  <button onclick="showToast('Ouverture CNI...')" style="padding:8px 12px;background:#F4F9FC;border:1.5px solid #E2ECF2;border-radius:8px;font-size:12px;font-weight:600;color:#1A6B8A;cursor:pointer;display:flex;align-items:center;gap:6px;">🪪 Pièce d'identité</button>
                </div>
              </div>
            </div>
            <!-- Approbation Actions -->
            <div style="display:flex;gap:8px;">
              <button onclick="this.closest('div').parentElement.style.opacity='0.5';showToast('❌ Dossier rejeté');" style="padding:10px 16px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:10px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;cursor:pointer;">Rejeter</button>
              <button onclick="this.closest('div').parentElement.style.opacity='0.5';showToast('✅ Approuvé : identifiants mobiles générés et envoyés !');" style="padding:10px 16px;background:#E8F7EE;color:#27AE60;border:none;border-radius:10px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:6px;">✅ Approuver</button>
            </div>
          </div>
          
          <!-- Enrollment Item 2 -->
          <div style="padding:20px;display:flex;justify-content:space-between;align-items:flex-start;">
            <div style="display:flex;gap:16px;">
              <div style="width:50px;height:50px;background:#FEF9EE;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;">🛵</div>
              <div>
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
                  <div style="font-size:15px;font-weight:700;color:#1A2332;">Touré Amadou</div>
                  <div style="background:#FFF3E0;color:#E67E22;padding:2px 8px;border-radius:4px;font-size:10px;font-weight:700;">EN ATTENTE</div>
                </div>
                <div style="font-size:13px;color:#6B7A8D;margin-bottom:12px;">Profil: Livreur Indépendant · Abidjan, Marcory</div>
                
                <div style="display:flex;gap:12px;">
                  <button onclick="showToast('Ouverture Permis...')" style="padding:8px 12px;background:#F4F9FC;border:1.5px solid #E2ECF2;border-radius:8px;font-size:12px;font-weight:600;color:#1A6B8A;cursor:pointer;display:flex;align-items:center;gap:6px;">📄 Permis de conduire</button>
                  <button onclick="showToast('Ouverture CNI...')" style="padding:8px 12px;background:#F4F9FC;border:1.5px solid #E2ECF2;border-radius:8px;font-size:12px;font-weight:600;color:#1A6B8A;cursor:pointer;display:flex;align-items:center;gap:6px;">🪪 Pièce d'identité</button>
                </div>
              </div>
            </div>
            <!-- Approbation Actions -->
            <div style="display:flex;gap:8px;">
              <button onclick="this.closest('div').parentElement.style.opacity='0.5';showToast('❌ Dossier rejeté');" style="padding:10px 16px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:10px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;cursor:pointer;">Rejeter</button>
              <button onclick="this.closest('div').parentElement.style.opacity='0.5';showToast('✅ Approuvé : identifiants mobiles générés et envoyés !');" style="padding:10px 16px;background:#E8F7EE;color:#27AE60;border:none;border-radius:10px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:6px;">✅ Approuver</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
<!-- ========================================
     SCREEN 74 — MODE HORS-LIGNE (FIG.2)
======================================== -->
<div class="screen" id="screen71b" data-device="mobile" style="background:#F4F9FC;">
  <!-- Header -->
  <div style="background:linear-gradient(135deg,#F39C12,#E67E22);padding:54px 20px 20px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
      <button onclick="goToScreen(10)" style="background:rgba(255,255,255,0.2);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Mode Hors-ligne</div>
    </div>
    <div style="background:rgba(255,255,255,0.2);border-radius:12px;padding:10px 14px;display:flex;align-items:center;gap:10px;">
      <div style="width:10px;height:10px;background:#fff;border-radius:50%;animation:blink 1s infinite;"></div>
      <span style="font-size:12px;font-weight:700;color:#fff;">Réseau faible détecté — Synchronisation différée activée</span>
    </div>
  </div>

  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:14px;">
    <!-- Statut réseau -->
    <div style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:800;color:#1A2332;margin-bottom:14px;">📡 Qualité Réseau (FIG.2 — Calcul IR)</div>
      <div style="display:flex;align-items:flex-end;gap:4px;margin-bottom:12px;height:40px;">
        <div style="width:14px;height:12px;background:#F39C12;border-radius:3px;"></div>
        <div style="width:14px;height:18px;background:#F39C12;border-radius:3px;"></div>
        <div style="width:14px;height:26px;background:#E2ECF2;border-radius:3px;"></div>
        <div style="width:14px;height:34px;background:#E2ECF2;border-radius:3px;"></div>
        <div style="width:14px;height:40px;background:#E2ECF2;border-radius:3px;"></div>
        <div style="margin-left:10px;font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#F39C12;line-height:1;">Faible<br><span style="font-size:10px;color:#6B7A8D;font-weight:500;">2G · IR=0.31</span></div>
      </div>
      <div style="background:#FEF9EE;border-radius:12px;padding:14px;display:flex;align-items:center;justify-content:space-between;">
        <div>
          <div style="font-size:11px;color:#6B7A8D;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Indice de Réseau (IR)</div>
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:800;color:#F39C12;">0.31</div>
          <div style="font-size:11px;color:#E67E22;">Seuil critique &lt; 0.4 — Sync différée</div>
        </div>
        <div style="width:60px;height:60px;border-radius:50%;border:4px solid #F39C12;display:flex;align-items:center;justify-content:center;font-size:24px;">⚠️</div>
      </div>
    </div>

    <!-- Transactions en attente -->
    <div style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:800;color:#1A2332;">🗃️ File d'attente (Sync différée)</div>
        <div style="background:#FEF9EE;border-radius:20px;padding:3px 10px;font-size:11px;font-weight:700;color:#F39C12;">4 en attente</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:center;gap:10px;padding:10px;background:#F4F9FC;border-radius:10px;">
          <div style="width:32px;height:32px;background:#E74C3C;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">🚨</div>
          <div style="flex:1;"><div style="font-size:12px;font-weight:700;color:#1A2332;">Ordonnance #ORD-2851</div><div style="font-size:10px;color:#6B7A8D;">Critique · En attente depuis 2 min</div></div>
          <div style="background:#FEF0EE;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;color:#E74C3C;">CRITIQUE</div>
        </div>
      </div>
    </div>
    <button onclick="showToast('🔄 Synchronisation forcée lancée…');goToScreen(28)" style="width:100%;padding:15px;background:linear-gradient(135deg,#F39C12,#E67E22);color:#fff;border:none;border-radius:14px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">🔄 Forcer la Synchronisation</button>
  </div>
</div>

<!-- ========================================
     SCREEN 83 — ALERTES IR ÉPIDÉMIQUES (FIG.4)
======================================== -->
<div class="screen" id="screen83" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:linear-gradient(135deg,#E74C3C,#c0392b);padding:54px 20px 20px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
      <button onclick="goToScreen(28)" style="background:rgba(255,255,255,0.2);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Alertes Épidémiques</div>
    </div>
    <div style="background:rgba(255,255,255,0.2);border-radius:12px;padding:10px 14px;display:flex;align-items:center;gap:10px;">
      <div style="width:10px;height:10px;background:#fff;border-radius:50%;animation:blink 1s infinite;"></div>
      <span style="font-size:12px;font-weight:700;color:#fff;">Algorithme Prédictif IR actif — Virus Émergent détecté</span>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:14px;">
    <div style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:800;color:#1A2332;margin-bottom:14px;">🧮 Calcul IR — Algorithme Prédictif (FIG.4)</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;">
        <div style="background:#FEF0EE;border-radius:12px;padding:12px;text-align:center;">
          <div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">Criticité C_N</div>
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;font-weight:800;color:#E74C3C;">0.87</div>
          <div style="font-size:10px;color:#E74C3C;font-weight:600;">&#62; Seuil 0.6 ⚠️</div>
        </div>
      </div>
    </div>
    <button onclick="goToScreen(76);showToast('📊 Rapport prévisionnel généré')" style="width:100%;padding:15px;background:linear-gradient(135deg,#E74C3C,#c0392b);color:#fff;border:none;border-radius:14px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">📊 Voir le Rapport Prévisionnel →</button>
  </div>
</div>

<!-- ========================================
     SCREEN 76 — RAPPORT PRÉVISIONNEL (FIG.4)
======================================== -->
<div class="screen" id="screen76" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:linear-gradient(135deg,#0D3B2E,#27AE60);padding:54px 20px 20px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
      <button onclick="goToScreen(83)" style="background:rgba(255,255,255,0.2);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Rapport Prévisionnel</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:14px;">
    <div style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:800;color:#1A2332;margin-bottom:14px;">📈 Projection 7 jours — Fièvre Lassa</div>
      <div style="display:flex;align-items:flex-end;gap:5px;height:70px;margin-bottom:8px;">
        <div style="flex:1;background:#E8F4F8;border-radius:4px 4px 0 0;height:30%;"></div>
        <div style="flex:1;height:40%;background:#E8F4F8;border-radius:4px 4px 0 0;"></div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 77 — CHAÎNAGE BLOCKCHAIN (FIG.3)
======================================== -->
<div class="screen" id="screen77" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:linear-gradient(135deg,#1A2332,#0F3F54);padding:54px 20px 20px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
      <button onclick="goToScreen(28)" style="background:rgba(255,255,255,0.2);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Chaîne Cryptographique</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;">
    <div style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
      <div style="background:linear-gradient(135deg,#27AE60,#2ecc71);padding:10px 16px;display:flex;justify-content:space-between;align-items:center;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:800;color:#fff;">🧱 Bloc #001 — GENESIS</div>
      </div>
    </div>
  </div>
</div>
`;