window.FRAGMENTS = window.FRAGMENTS || {};
window.FRAGMENTS['navigation'] = `
<div id="sideMenuDrawer" style="display:none;position:absolute;top:0;left:0;width:82%;max-width:290px;height:100%;background:#fff;z-index:9999;transform:translateX(-100%);transition:transform 0.32s cubic-bezier(0.16,1,0.3,1);box-shadow:8px 0 40px rgba(0,0,0,0.2);overflow-y:auto;">
  <!-- Header -->
  <div style="background:linear-gradient(135deg,#0F3F54,#1A6B8A);padding:52px 20px 20px;position:relative;">
    <button onclick="closeDrawer()" style="position:absolute;top:52px;right:16px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:32px;height:32px;color:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;">✕</button>
    <div style="width:60px;height:60px;background:rgba(255,255,255,0.15);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:28px;margin-bottom:12px;border:2px solid rgba(255,255,255,0.25);">👤</div>
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Moussa Koné</div>
    <div style="font-size:12px;color:rgba(255,255,255,0.7);margin-top:2px;"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="771a1802040416591c18191237101a161e1b5914181a">[email&#160;protected]</a></div>
    <div style="margin-top:10px;display:inline-flex;align-items:center;gap:5px;background:rgba(39,174,96,0.25);padding:4px 10px;border-radius:20px;">
      <div style="width:6px;height:6px;background:#4ADE80;border-radius:50%;"></div>
      <span style="font-size:11px;color:#4ADE80;font-weight:600;">Compte vérifié</span>
    </div>
  </div>
  <!-- Menu items -->
  <div style="padding:12px 0;">
    <!-- Section: Navigation -->
    <div style="padding:6px 20px;font-size:10px;font-weight:700;color:#A8B4C0;letter-spacing:0.8px;text-transform:uppercase;">Navigation</div>
    <div onclick="goToScreen(7);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;background:#E8F4F8;">
      <span style="font-size:20px;width:28px;text-align:center;">🏠</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A6B8A;">Accueil</span>
    </div>
    <div onclick="goToScreen(8);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:20px;width:28px;text-align:center;">📄</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;">Envoyer ordonnance</span>
    </div>
    <div onclick="goToScreen(9);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:20px;width:28px;text-align:center;">📋</span>
      <div style="flex:1;"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;">Mes ordonnances</div></div>
    </div>
    <div onclick="goToScreen(10);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:20px;width:28px;text-align:center;">📦</span>
      <div style="flex:1;"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;">Mes commandes</div><div style="font-size:11px;color:#27AE60;font-weight:600;">2 en cours</div></div>
    </div>
    <div onclick="goToScreen(26);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:20px;width:28px;text-align:center;">💊</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;">Catalogue médicaments</span>
    </div>
    <div onclick="goToScreen(29);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:20px;width:28px;text-align:center;">📍</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;">Pharmacies proches</span>
    </div>
    <div onclick="goToScreen(13);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:20px;width:28px;text-align:center;">💬</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;">Consulter un pharmacien</span>
    </div>
    <div onclick="goToScreen(69);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:20px;width:28px;text-align:center;">🤖</span>
      <div style="flex:1;"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;">Assistant PharmaBot</div><div style="font-size:11px;color:#1A6B8A;font-weight:600;">IA · 24h/24</div></div>
    </div>
    <!-- Divider -->
    <div style="height:1px;background:#E2ECF2;margin:8px 20px;"></div>
    <!-- Section: Mon compte -->
    <div style="padding:6px 20px;font-size:10px;font-weight:700;color:#A8B4C0;letter-spacing:0.8px;text-transform:uppercase;">Mon compte</div>
    <div onclick="goToScreen(14);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:20px;width:28px;text-align:center;">👤</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;">Mon profil</span>
    </div>
    <div onclick="goToScreen(15);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:20px;width:28px;text-align:center;">🔔</span>
      <div style="flex:1;"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;">Notifications</div></div>
      <div style="background:#E74C3C;color:#fff;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;">3</div>
    </div>
    <div onclick="goToScreen(36);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:20px;width:28px;text-align:center;">💳</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;">Historique paiements</span>
    </div>
    <div onclick="goToScreen(44);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:20px;width:28px;text-align:center;">⭐</span>
      <div style="flex:1;"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;">Programme fidélité</div><div style="font-size:11px;color:#F39C12;font-weight:600;">1 250 PharmaPoints</div></div>
    </div>
    <div onclick="goToScreen(34);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:20px;width:28px;text-align:center;">⚙️</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;">Paramètres</span>
    </div>
    <div onclick="goToScreen(37);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:20px;width:28px;text-align:center;">❓</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;">Aide & FAQ</span>
    </div>
    <!-- Divider -->
    <div style="height:1px;background:#E2ECF2;margin:8px 20px;"></div>
    <!-- Logout -->
    <div onclick="goToScreen(1);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;margin-bottom:20px;" onmouseover="this.style.background='#FEF0EE'" onmouseout="this.style.background=''">
      <span style="font-size:20px;width:28px;text-align:center;">🚪</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;color:#E74C3C;">Se déconnecter</span>
    </div>
  </div>
</div>

<!-- ============================================================
     DRAWER — PHARMACIEN (vert foncé #0F3F54)
============================================================ -->
<div id="drawer-pharmacien" class="profile-drawer" style="display:none;position:absolute;top:0;left:0;width:82%;max-width:290px;height:100%;background:#fff;z-index:9999;transform:translateX(-100%);transition:transform 0.32s cubic-bezier(0.16,1,0.3,1);box-shadow:8px 0 40px rgba(0,0,0,0.2);overflow-y:auto;">
  <div style="background:linear-gradient(135deg,#0F3F54,#1A6B8A);padding:52px 20px 20px;position:relative;">
    <button onclick="closeDrawer()" style="position:absolute;top:52px;right:16px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:32px;height:32px;color:#fff;font-size:16px;cursor:pointer;">✕</button>
    <div style="width:56px;height:56px;background:rgba(255,255,255,0.15);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:26px;margin-bottom:10px;border:2px solid rgba(255,255,255,0.25);">⚕️</div>
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:17px;font-weight:800;color:#fff;">Dr. Sophie Lefebvre</div>
    <div style="font-size:12px;color:rgba(255,255,255,0.7);margin-top:2px;">Pharmacien · Ordre CI #4521</div>
    <div style="margin-top:8px;display:inline-flex;align-items:center;gap:5px;background:rgba(39,174,96,0.25);padding:3px 10px;border-radius:20px;">
      <div style="width:6px;height:6px;background:#4ADE80;border-radius:50%;"></div>
      <span style="font-size:11px;color:#4ADE80;font-weight:600;">En ligne</span>
    </div>
  </div>
  <div style="padding:10px 0;">
    <div style="padding:5px 20px;font-size:10px;font-weight:700;color:#A8B4C0;letter-spacing:0.8px;text-transform:uppercase;">Tableau de bord</div>
    <div onclick="goToScreen(17);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;background:#E8F4F8;">
      <span style="font-size:18px;width:26px;text-align:center;">📊</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A6B8A;">Dashboard</span>
    </div>
    <div onclick="goToScreen(18);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">📋</span>
      <div style="flex:1;"><div style="font-size:14px;font-weight:600;color:#1A2332;">File d'ordonnances</div></div>
      <div style="background:#E74C3C;color:#fff;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;">12</div>
    </div>
    <div onclick="goToScreen(19);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">✅</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Valider ordonnance</span>
    </div>
    <div onclick="goToScreen(20);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">🔳</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Générer QR Code</span>
    </div>
    <div onclick="goToScreen(21);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">⚗️</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Interactions médicaments</span>
    </div>
    <div onclick="goToScreen(22);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">👥</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Dossiers patients</span>
    </div>
    <div onclick="goToScreen(23);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">💬</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Messagerie patients</span>
    </div>
    <div style="height:1px;background:#E2ECF2;margin:6px 20px;"></div>
    <div style="padding:5px 20px;font-size:10px;font-weight:700;color:#A8B4C0;letter-spacing:0.8px;text-transform:uppercase;">Gestion</div>
    <div onclick="goToScreen(38);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">📦</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Gestion du stock</span>
    </div>
    <div onclick="goToScreen(39);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">📈</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Statistiques</span>
    </div>
    <div onclick="goToScreen(50);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">⚙️</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Paramètres pro</span>
    </div>
    <div style="height:1px;background:#E2ECF2;margin:6px 20px;"></div>
    <div onclick="goToScreen(16);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;margin-bottom:16px;" onmouseover="this.style.background='#FEF0EE'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">🚪</span>
      <span style="font-size:14px;font-weight:600;color:#E74C3C;">Se déconnecter</span>
    </div>
  </div>
</div>

<!-- ============================================================
     DRAWER — ADMIN (bleu nuit #1A2332)
============================================================ -->
<div id="drawer-admin" class="profile-drawer" style="display:none;position:absolute;top:0;left:0;width:82%;max-width:290px;height:100%;background:#fff;z-index:9999;transform:translateX(-100%);transition:transform 0.32s cubic-bezier(0.16,1,0.3,1);box-shadow:8px 0 40px rgba(0,0,0,0.2);overflow-y:auto;">
  <div style="background:linear-gradient(135deg,#1A2332,#0F3F54);padding:52px 20px 20px;position:relative;">
    <button onclick="closeDrawer()" style="position:absolute;top:52px;right:16px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:32px;height:32px;color:#fff;font-size:16px;cursor:pointer;">✕</button>
    <div style="width:56px;height:56px;background:rgba(231,76,60,0.2);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:26px;margin-bottom:10px;border:2px solid rgba(231,76,60,0.35);">🛡️</div>
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:17px;font-weight:800;color:#fff;">Admin Système</div>
    <div style="font-size:12px;color:rgba(255,255,255,0.7);margin-top:2px;">SuperAdmin · PharmaConnect CI</div>
    <div style="margin-top:8px;display:inline-flex;align-items:center;gap:5px;background:rgba(231,76,60,0.2);padding:3px 10px;border-radius:20px;">
      <span style="font-size:11px;color:#ff9d9d;font-weight:700;">● SuperAdmin</span>
    </div>
  </div>
  <div style="padding:10px 0;">
    <div style="padding:5px 20px;font-size:10px;font-weight:700;color:#A8B4C0;letter-spacing:0.8px;text-transform:uppercase;">Administration</div>
    <div onclick="goToScreen(25);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;background:#E8F4F8;">
      <span style="font-size:18px;width:26px;text-align:center;">📊</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A6B8A;">Dashboard</span>
    </div>
    <div onclick="goToScreen(45);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">📱</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Vue mobile</span>
    </div>
    <div onclick="goToScreen(31);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">🚚</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Suivi livraisons</span>
    </div>
    <div style="height:1px;background:#E2ECF2;margin:6px 20px;"></div>
    <div style="padding:5px 20px;font-size:10px;font-weight:700;color:#A8B4C0;letter-spacing:0.8px;text-transform:uppercase;">Alertes</div>
    <div onclick="goToScreen(46);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">⚠️</span>
      <div style="flex:1;"><div style="font-size:14px;font-weight:600;color:#1A2332;">Page d'erreur (404)</div></div>
    </div>
    <div onclick="goToScreen(47);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">🛠️</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Page maintenance</span>
    </div>
    <div style="height:1px;background:#E2ECF2;margin:6px 20px;"></div>
    <div onclick="goToScreen(24);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;margin-bottom:16px;" onmouseover="this.style.background='#FEF0EE'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">🚪</span>
      <span style="font-size:14px;font-weight:600;color:#E74C3C;">Se déconnecter</span>
    </div>
  </div>
</div>

<!-- ============================================================
     DRAWER — LIVREUR (orange #F39C12)
============================================================ -->
<div id="drawer-livreur" class="profile-drawer" style="display:none;position:absolute;top:0;left:0;width:82%;max-width:290px;height:100%;background:#fff;z-index:9999;transform:translateX(-100%);transition:transform 0.32s cubic-bezier(0.16,1,0.3,1);box-shadow:8px 0 40px rgba(0,0,0,0.2);overflow-y:auto;">
  <div style="background:linear-gradient(135deg,#1A2332,#0F3F54);padding:52px 20px 20px;position:relative;">
    <button onclick="closeDrawer()" style="position:absolute;top:52px;right:16px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:32px;height:32px;color:#fff;font-size:16px;cursor:pointer;">✕</button>
    <div style="width:56px;height:56px;background:rgba(243,156,18,0.2);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:26px;margin-bottom:10px;border:2px solid rgba(243,156,18,0.35);">🛵</div>
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:17px;font-weight:800;color:#fff;">Kofi Mensah</div>
    <div style="font-size:12px;color:rgba(255,255,255,0.7);margin-top:2px;">Livreur · Zone Abidjan Centre</div>
    <div style="margin-top:8px;display:inline-flex;align-items:center;gap:5px;background:rgba(74,222,128,0.2);padding:3px 10px;border-radius:20px;">
      <div style="width:6px;height:6px;background:#4ADE80;border-radius:50%;"></div>
      <span style="font-size:11px;color:#4ADE80;font-weight:600;">Actif · En ligne</span>
    </div>
  </div>
  <div style="padding:10px 0;">
    <div style="padding:5px 20px;font-size:10px;font-weight:700;color:#A8B4C0;letter-spacing:0.8px;text-transform:uppercase;">Livraisons</div>
    <div onclick="goToScreen(52);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;background:#E8F4F8;">
      <span style="font-size:18px;width:26px;text-align:center;">🏠</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A6B8A;">Dashboard</span>
    </div>
    <div onclick="goToScreen(53);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">📍</span>
      <div style="flex:1;"><div style="font-size:14px;font-weight:600;color:#1A2332;">Livraison en cours</div><div style="font-size:11px;color:#27AE60;font-weight:600;">1 active</div></div>
    </div>
    <div onclick="goToScreen(56);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">📦</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Historique livraisons</span>
    </div>
    <div onclick="goToScreen(54);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">💬</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Messages</span>
    </div>
    <div style="height:1px;background:#E2ECF2;margin:6px 20px;"></div>
    <div style="padding:5px 20px;font-size:10px;font-weight:700;color:#A8B4C0;letter-spacing:0.8px;text-transform:uppercase;">Mon compte</div>
    <div onclick="goToScreen(57);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">💰</span>
      <div style="flex:1;"><div style="font-size:14px;font-weight:600;color:#1A2332;">Revenus & Stats</div><div style="font-size:11px;color:#F39C12;font-weight:600;">47 500 FCFA ce mois</div></div>
    </div>
    <div onclick="goToScreen(58);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">👤</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Mon profil</span>
    </div>
    <div style="height:1px;background:#E2ECF2;margin:6px 20px;"></div>
    <div onclick="goToScreen(51);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;margin-bottom:16px;" onmouseover="this.style.background='#FEF0EE'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">🚪</span>
      <span style="font-size:14px;font-weight:600;color:#E74C3C;">Se déconnecter</span>
    </div>
  </div>
</div>

<!-- ============================================================
     DRAWER — MÉDECIN (vert #0D3B2E)
============================================================ -->
<div id="drawer-medecin" class="profile-drawer" style="display:none;position:absolute;top:0;left:0;width:82%;max-width:290px;height:100%;background:#fff;z-index:9999;transform:translateX(-100%);transition:transform 0.32s cubic-bezier(0.16,1,0.3,1);box-shadow:8px 0 40px rgba(0,0,0,0.2);overflow-y:auto;">
  <div style="background:linear-gradient(135deg,#0D3B2E,#1A6B50);padding:52px 20px 20px;position:relative;">
    <button onclick="closeDrawer()" style="position:absolute;top:52px;right:16px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:32px;height:32px;color:#fff;font-size:16px;cursor:pointer;">✕</button>
    <div style="width:56px;height:56px;background:rgba(255,255,255,0.15);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:26px;margin-bottom:10px;border:2px solid rgba(255,255,255,0.2);">🩺</div>
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:17px;font-weight:800;color:#fff;">Dr. Konan Yao</div>
    <div style="font-size:12px;color:rgba(255,255,255,0.7);margin-top:2px;">Cardiologue · CHUSA · N° CI #1847</div>
    <div style="margin-top:8px;display:inline-flex;align-items:center;gap:5px;background:rgba(74,222,128,0.2);padding:3px 10px;border-radius:20px;">
      <div style="width:6px;height:6px;background:#4ADE80;border-radius:50%;"></div>
      <span style="font-size:11px;color:#4ADE80;font-weight:600;">Agrément validé</span>
    </div>
  </div>
  <div style="padding:10px 0;">
    <div style="padding:5px 20px;font-size:10px;font-weight:700;color:#A8B4C0;letter-spacing:0.8px;text-transform:uppercase;">Espace médecin</div>
    <div onclick="goToScreen(61);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;background:#E8F7EE;">
      <span style="font-size:18px;width:26px;text-align:center;">📊</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#0D3B2E;">Dashboard</span>
    </div>
    <div onclick="goToScreen(62);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">📝</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Nouvelle ordonnance</span>
    </div>
    <div onclick="goToScreen(63);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">📋</span>
      <div style="flex:1;"><div style="font-size:14px;font-weight:600;color:#1A2332;">Suivi ordonnances</div><div style="font-size:11px;color:#F39C12;font-weight:600;">3 en attente</div></div>
    </div>
    <div onclick="goToScreen(64);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">👥</span>
      <div style="flex:1;"><div style="font-size:14px;font-weight:600;color:#1A2332;">Dossiers patients</div><div style="font-size:11px;color:#27AE60;font-weight:600;">12 actifs</div></div>
    </div>
    <div onclick="goToScreen(65);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">💬</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Messagerie sécurisée</span>
    </div>
    <div onclick="goToScreen(66);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">🏥</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Pharmacies & Stock</span>
    </div>
    <div style="height:1px;background:#E2ECF2;margin:6px 20px;"></div>
    <div style="padding:5px 20px;font-size:10px;font-weight:700;color:#A8B4C0;letter-spacing:0.8px;text-transform:uppercase;">Mon compte</div>
    <div onclick="goToScreen(67);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">📈</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Mes statistiques</span>
    </div>
    <div onclick="goToScreen(68);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">👤</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Mon profil</span>
    </div>
    <div style="height:1px;background:#E2ECF2;margin:6px 20px;"></div>
    <div onclick="goToScreen(59);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;margin-bottom:16px;" onmouseover="this.style.background='#FEF0EE'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">🚪</span>
      <span style="font-size:14px;font-weight:600;color:#E74C3C;">Se déconnecter</span>
    </div>
  </div>
</div>

<!-- ============================================================
     MAP MODAL — Itinéraire vers Pharmacie du Plateau
============================================================ -->
<div id="mapModalOverlay" onclick="closeMapModal()" style="display:none;position:absolute;inset:0;background:rgba(0,0,0,0.55);z-index:800;opacity:0;transition:opacity 0.25s;"></div>
<div id="mapModal" style="display:none;position:absolute;bottom:0;left:0;right:0;background:#fff;border-radius:24px 24px 0 0;z-index:801;transform:translateY(100%);transition:transform 0.35s cubic-bezier(0.16,1,0.3,1);max-height:88%;">
  <!-- Handle -->
  <div style="width:36px;height:4px;background:#E2ECF2;border-radius:2px;margin:10px auto 0;"></div>

  <!-- Mini map simulée -->
  <div style="position:relative;height:200px;background:linear-gradient(160deg,#c8dce6 0%,#b0ccd8 100%);overflow:hidden;margin:12px 16px 0;border-radius:16px;">
    <!-- Grille de rues -->
    <svg width="100%" height="100%" style="position:absolute;inset:0;opacity:0.25;">
      <line x1="0" y1="60" x2="100%" y2="60" stroke="#1A6B8A" stroke-width="2"/>
      <line x1="0" y1="120" x2="100%" y2="120" stroke="#1A6B8A" stroke-width="2"/>
      <line x1="80" y1="0" x2="80" y2="100%" stroke="#1A6B8A" stroke-width="2"/>
      <line x1="200" y1="0" x2="200" y2="100%" stroke="#1A6B8A" stroke-width="2"/>
      <line x1="300" y1="0" x2="300" y2="100%" stroke="#1A6B8A" stroke-width="2"/>
      <!-- Route principale -->
      <line x1="0" y1="95" x2="100%" y2="95" stroke="#fff" stroke-width="5" opacity="0.6"/>
      <line x1="150" y1="0" x2="150" y2="100%" stroke="#fff" stroke-width="4" opacity="0.5"/>
    </svg>
    <!-- Îlots de bâtiments -->
    <div style="position:absolute;top:20px;left:20px;width:55px;height:35px;background:rgba(26,107,138,0.18);border-radius:4px;"></div>
    <div style="position:absolute;top:20px;left:100px;width:40px;height:35px;background:rgba(26,107,138,0.15);border-radius:4px;"></div>
    <div style="position:absolute;top:130px;left:30px;width:60px;height:40px;background:rgba(26,107,138,0.15);border-radius:4px;"></div>
    <div style="position:absolute;top:130px;left:220px;width:70px;height:45px;background:rgba(26,107,138,0.18);border-radius:4px;"></div>
    <!-- Tracé itinéraire -->
    <svg width="100%" height="100%" style="position:absolute;inset:0;">
      <polyline points="30,170 30,95 290,95 290,50" fill="none" stroke="#1A6B8A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="8,4"/>
    </svg>
    <!-- Pin Pharmacie (destination) -->
    <div style="position:absolute;top:24px;left:272px;display:flex;flex-direction:column;align-items:center;">
      <div style="width:32px;height:32px;background:#E74C3C;border-radius:50% 50% 50% 0;transform:rotate(-45deg);display:flex;align-items:center;justify-content:center;box-shadow:0 3px 10px rgba(231,76,60,0.45);">
        <span style="transform:rotate(45deg);font-size:14px;">💊</span>
      </div>
    </div>
    <!-- Pin Position actuelle -->
    <div style="position:absolute;bottom:14px;left:16px;display:flex;flex-direction:column;align-items:center;">
      <div style="width:16px;height:16px;background:#1A6B8A;border-radius:50%;border:3px solid #fff;box-shadow:0 0 0 4px rgba(26,107,138,0.25);"></div>
    </div>
    <!-- Étiquette distance -->
    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;border-radius:20px;padding:5px 12px;box-shadow:0 2px 8px rgba(0,0,0,0.15);font-size:11px;font-weight:700;color:#1A2332;">📍 0.8 km · ~10 min</div>
  </div>

  <!-- Infos destination -->
  <div style="padding:16px 16px 8px;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
      <div style="width:44px;height:44px;background:#E8F4F8;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;">💊</div>
      <div style="flex:1;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:800;color:#1A2332;">Pharmacie du Plateau</div>
        <div style="font-size:12px;color:#6B7A8D;margin-top:2px;">12 Av. Botreau-Roussel, Plateau, Abidjan</div>
      </div>
      <div style="background:#E8F7EE;border-radius:8px;padding:4px 10px;font-size:11px;font-weight:700;color:#27AE60;">● Ouvert</div>
    </div>

    <!-- Stats rapides -->
    <div style="display:flex;gap:8px;margin-bottom:16px;">
      <div style="flex:1;background:#F4F9FC;border-radius:12px;padding:10px;text-align:center;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#1A6B8A;">0.8</div>
        <div style="font-size:10px;color:#6B7A8D;margin-top:2px;">km</div>
      </div>
      <div style="flex:1;background:#F4F9FC;border-radius:12px;padding:10px;text-align:center;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#1A6B8A;">10</div>
        <div style="font-size:10px;color:#6B7A8D;margin-top:2px;">min à pied</div>
      </div>
      <div style="flex:1;background:#F4F9FC;border-radius:12px;padding:10px;text-align:center;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#1A6B8A;">3</div>
        <div style="font-size:10px;color:#6B7A8D;margin-top:2px;">min en voiture</div>
      </div>
    </div>

    <!-- Boutons de navigation -->
    <div style="font-size:11px;font-weight:700;color:#A8B4C0;letter-spacing:0.6px;text-transform:uppercase;margin-bottom:8px;">Ouvrir dans</div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:24px;">
      <button onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=Pharmacie+du+Plateau+Abidjan&travelmode=walking','_blank');closeMapModal();" style="width:100%;padding:14px;background:#4285F4;color:#fff;border:none;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:10px;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        Google Maps
      </button>
      <button onclick="window.open('https://maps.apple.com/?daddr=Pharmacie+du+Plateau+Abidjan&dirflg=w','_blank');closeMapModal();" style="width:100%;padding:14px;background:#1A2332;color:#fff;border:none;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:10px;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        Plans (Apple)
      </button>
      <button onclick="window.open('https://waze.com/ul?q=Pharmacie+du+Plateau+Abidjan&navigate=yes','_blank');closeMapModal();" style="width:100%;padding:14px;background:#fff;color:#1A2332;border:1.5px solid #E2ECF2;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:10px;">
        <span style="font-size:18px;">🚗</span>
        Waze
      </button>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 70 — CONSEILS SANTÉ (tous articles)
======================================== -->
<div class="screen" id="screen70" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:linear-gradient(135deg,#1A6B8A,#0F3F54);padding:54px 20px 20px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
      <button onclick="goToScreen(7)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Conseils Santé</div>
    </div>
    <!-- Filtres -->
    <div style="display:flex;gap:8px;overflow-x:auto;padding-bottom:4px;">
      <div onclick="filterArticles('tous',this)" style="background:#fff;color:#1A6B8A;border-radius:50px;padding:6px 14px;font-size:12px;font-weight:700;white-space:nowrap;cursor:pointer;">Tous</div>
      <div onclick="filterArticles('prevention',this)" style="background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.8);border-radius:50px;padding:6px 14px;font-size:12px;font-weight:600;white-space:nowrap;cursor:pointer;">Prévention</div>
      <div onclick="filterArticles('nutrition',this)" style="background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.8);border-radius:50px;padding:6px 14px;font-size:12px;font-weight:600;white-space:nowrap;cursor:pointer;">Nutrition</div>
      <div onclick="filterArticles('bienetre',this)" style="background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.8);border-radius:50px;padding:6px 14px;font-size:12px;font-weight:600;white-space:nowrap;cursor:pointer;">Bien-être</div>
      <div onclick="filterArticles('medicaments',this)" style="background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.8);border-radius:50px;padding:6px 14px;font-size:12px;font-weight:600;white-space:nowrap;cursor:pointer;">Médicaments</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;" id="articles-list">

    <!-- Article 1 -->
    <div class="article-card" data-cat="prevention" onclick="showArticleModal('paludisme')" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);cursor:pointer;display:flex;">
      <div style="width:90px;height:90px;background:linear-gradient(135deg,#E8F4F8,#C5DFF0);display:flex;align-items:center;justify-content:center;font-size:36px;flex-shrink:0;">💊</div>
      <div style="padding:12px;flex:1;">
        <div style="display:inline-block;background:#E8F7EE;color:#27AE60;font-size:10px;font-weight:700;padding:2px 8px;border-radius:20px;margin-bottom:6px;">Prévention</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;line-height:1.4;margin-bottom:4px;">Bien gérer son traitement antipaludéen</div>
        <div style="font-size:11px;color:#6B7A8D;">5 min de lecture</div>
      </div>
    </div>

    <!-- Article 2 -->
    <div class="article-card" data-cat="nutrition" onclick="showArticleModal('diabete')" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);cursor:pointer;display:flex;">
      <div style="width:90px;height:90px;background:linear-gradient(135deg,#FFF8E8,#FFE8B0);display:flex;align-items:center;justify-content:center;font-size:36px;flex-shrink:0;">🥗</div>
      <div style="padding:12px;flex:1;">
        <div style="display:inline-block;background:#FFF3CD;color:#F39C12;font-size:10px;font-weight:700;padding:2px 8px;border-radius:20px;margin-bottom:6px;">Nutrition</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;line-height:1.4;margin-bottom:4px;">Alimentation et diabète : les bons réflexes</div>
        <div style="font-size:11px;color:#6B7A8D;">7 min de lecture</div>
      </div>
    </div>

    <!-- Article 3 -->
    <div class="article-card" data-cat="bienetre" onclick="showArticleModal('stress')" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);cursor:pointer;display:flex;">
      <div style="width:90px;height:90px;background:linear-gradient(135deg,#F0E8FF,#DDD0FF);display:flex;align-items:center;justify-content:center;font-size:36px;flex-shrink:0;">🧘</div>
      <div style="padding:12px;flex:1;">
        <div style="display:inline-block;background:#F0E8FF;color:#8B5CF6;font-size:10px;font-weight:700;padding:2px 8px;border-radius:20px;margin-bottom:6px;">Bien-être</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;line-height:1.4;margin-bottom:4px;">Gérer le stress au quotidien</div>
        <div style="font-size:11px;color:#6B7A8D;">4 min de lecture</div>
      </div>
    </div>

    <!-- Article 4 -->
    <div class="article-card" data-cat="medicaments" onclick="showArticleModal('antibiotiques')" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);cursor:pointer;display:flex;">
      <div style="width:90px;height:90px;background:linear-gradient(135deg,#FFE8E8,#FFD0D0);display:flex;align-items:center;justify-content:center;font-size:36px;flex-shrink:0;">🦠</div>
      <div style="padding:12px;flex:1;">
        <div style="display:inline-block;background:#FEF0EE;color:#E74C3C;font-size:10px;font-weight:700;padding:2px 8px;border-radius:20px;margin-bottom:6px;">Médicaments</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;line-height:1.4;margin-bottom:4px;">Antibiotiques : ne pas interrompre le traitement</div>
        <div style="font-size:11px;color:#6B7A8D;">6 min de lecture</div>
      </div>
    </div>

    <!-- Article 5 -->
    <div class="article-card" data-cat="prevention" onclick="showArticleModal('hypertension')" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);cursor:pointer;display:flex;">
      <div style="width:90px;height:90px;background:linear-gradient(135deg,#E8F4F8,#B8D8E8);display:flex;align-items:center;justify-content:center;font-size:36px;flex-shrink:0;">❤️</div>
      <div style="padding:12px;flex:1;">
        <div style="display:inline-block;background:#E8F7EE;color:#27AE60;font-size:10px;font-weight:700;padding:2px 8px;border-radius:20px;margin-bottom:6px;">Prévention</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;line-height:1.4;margin-bottom:4px;">Hypertension : surveiller sa pression artérielle</div>
        <div style="font-size:11px;color:#6B7A8D;">8 min de lecture</div>
      </div>
    </div>

    <!-- Article 6 -->
    <div class="article-card" data-cat="nutrition" onclick="showArticleModal('hydratation')" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);cursor:pointer;display:flex;">
      <div style="width:90px;height:90px;background:linear-gradient(135deg,#E8F4F8,#A8D8F0);display:flex;align-items:center;justify-content:center;font-size:36px;flex-shrink:0;">💧</div>
      <div style="padding:12px;flex:1;">
        <div style="display:inline-block;background:#FFF3CD;color:#F39C12;font-size:10px;font-weight:700;padding:2px 8px;border-radius:20px;margin-bottom:6px;">Nutrition</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;line-height:1.4;margin-bottom:4px;">Bien s'hydrater en saison chaude</div>
        <div style="font-size:11px;color:#6B7A8D;">3 min de lecture</div>
      </div>
    </div>

    <!-- Article 7 -->
    <div class="article-card" data-cat="bienetre" onclick="showArticleModal('sommeil')" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);cursor:pointer;display:flex;">
      <div style="width:90px;height:90px;background:linear-gradient(135deg,#EEE8FF,#D0C8F8);display:flex;align-items:center;justify-content:center;font-size:36px;flex-shrink:0;">🌙</div>
      <div style="padding:12px;flex:1;">
        <div style="display:inline-block;background:#F0E8FF;color:#8B5CF6;font-size:10px;font-weight:700;padding:2px 8px;border-radius:20px;margin-bottom:6px;">Bien-être</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;line-height:1.4;margin-bottom:4px;">Améliorer la qualité de son sommeil</div>
        <div style="font-size:11px;color:#6B7A8D;">5 min de lecture</div>
      </div>
    </div>

  </div>
</div>

<!-- ── Article Reader Modal ── -->
<div id="articleModalOverlay" onclick="closeArticleModal()" style="display:none;position:absolute;inset:0;background:rgba(0,0,0,0.55);z-index:800;opacity:0;transition:opacity 0.25s;"></div>
<div id="articleModal" style="display:none;position:absolute;bottom:0;left:0;right:0;background:#fff;border-radius:24px 24px 0 0;z-index:801;transform:translateY(100%);transition:transform 0.35s cubic-bezier(0.16,1,0.3,1);max-height:90%;overflow-y:auto;">
  <div style="width:36px;height:4px;background:#E2ECF2;border-radius:2px;margin:10px auto 0;"></div>
  <div id="articleModalContent" style="padding:20px 20px 40px;"></div>
</div>



`;