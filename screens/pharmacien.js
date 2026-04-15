window.FRAGMENTS = window.FRAGMENTS || {};
window.FRAGMENTS['pharmacien'] = `
<div class="screen" id="screen19" data-device="mobile" style="background:linear-gradient(160deg,#0B3D2E 0%,#1A6B50 60%,#0F3F54 100%);">
  <div style="flex:1;overflow-y:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 24px 32px;">

    <!-- Logo + Identité -->
    <div style="display:flex;flex-direction:column;align-items:center;margin-bottom:28px;">
      <div style="width:80px;height:80px;background:rgba(255,255,255,0.12);border-radius:28px;display:flex;align-items:center;justify-content:center;font-size:36px;margin-bottom:14px;border:2px solid rgba(255,255,255,0.2);box-shadow:0 8px 32px rgba(0,0,0,0.2);">🏥</div>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;color:#fff;text-align:center;letter-spacing:-0.5px;">Espace Pharmacie</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.6);text-align:center;margin-top:4px;">Gérez votre officine · ILERA AFRICA</div>
      <!-- Badge OPCI -->
      <div style="margin-top:10px;display:inline-flex;align-items:center;gap:6px;background:rgba(39,174,96,0.2);padding:4px 12px;border-radius:20px;border:1px solid rgba(39,174,96,0.3);">
        <div style="width:6px;height:6px;background:#4ADE80;border-radius:50%;"></div>
        <span style="font-size:11px;color:#4ADE80;font-weight:600;">Plateforme agréée OPCI</span>
      </div>
    </div>

    <!-- Formulaire -->
    <div style="background:rgba(255,255,255,0.08);border-radius:24px;padding:22px;width:100%;border:1px solid rgba(255,255,255,0.12);display:flex;flex-direction:column;gap:14px;backdrop-filter:blur(10px);">

      <!-- Nom de la pharmacie -->
      <div>
        <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.55);margin-bottom:6px;letter-spacing:0.8px;text-transform:uppercase;">🏥 Nom de la pharmacie</div>
        <div style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:12px;display:flex;align-items:center;gap:8px;padding:0 14px;">
          <span style="font-size:16px;">🔍</span>
          <input placeholder="Pharmacie du Plateau, Abidjan" style="flex:1;padding:12px 0;background:none;border:none;color:#fff;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;" onfocus="this.parentElement.style.borderColor='rgba(74,222,128,0.6)'" onblur="this.parentElement.style.borderColor='rgba(255,255,255,0.2)'"/>
        </div>
      </div>

      <!-- Code agréement / RPPS -->
      <div>
        <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.55);margin-bottom:6px;letter-spacing:0.8px;text-transform:uppercase;">📋 Numéro d'agréement OPCI</div>
        <input placeholder="CI-PH-2024-XXXX" style="width:100%;padding:12px 14px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:12px;color:#fff;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;box-sizing:border-box;" onfocus="this.style.borderColor='rgba(74,222,128,0.6)'" onblur="this.style.borderColor='rgba(255,255,255,0.2)'">
      </div>

      <!-- Divider -->
      <div style="display:flex;align-items:center;gap:10px;">
        <div style="flex:1;height:1px;background:rgba(255,255,255,0.15);"></div>
        <span style="font-size:11px;color:rgba(255,255,255,0.4);">Responsable de l'officine</span>
        <div style="flex:1;height:1px;background:rgba(255,255,255,0.15);"></div>
      </div>

      <!-- Email pharmacien responsable -->
      <div>
        <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.55);margin-bottom:6px;letter-spacing:0.8px;text-transform:uppercase;">👨‍⚕️ Email du responsable</div>
        <input type="email" placeholder="responsable@pharmacie.ci" style="width:100%;padding:12px 14px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:12px;color:#fff;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;box-sizing:border-box;" onfocus="this.style.borderColor='rgba(74,222,128,0.6)'" onblur="this.style.borderColor='rgba(255,255,255,0.2)'">
      </div>

      <!-- Mot de passe -->
      <div>
        <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.55);margin-bottom:6px;letter-spacing:0.8px;text-transform:uppercase;">🔒 Mot de passe</div>
        <input type="password" placeholder="••••••••" style="width:100%;padding:12px 14px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:12px;color:#fff;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;box-sizing:border-box;">
      </div>

      <!-- Code MFA -->
      <div>
        <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.55);margin-bottom:8px;letter-spacing:0.8px;text-transform:uppercase;">🔐 Code MFA (6 chiffres)</div>
        <div style="display:flex;gap:7px;justify-content:center;">
          <input maxlength="1" style="width:38px;height:44px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:10px;color:#fff;font-size:18px;font-weight:700;text-align:center;font-family:'DM Sans',sans-serif;outline:none;">
          <input maxlength="1" style="width:38px;height:44px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:10px;color:#fff;font-size:18px;font-weight:700;text-align:center;font-family:'DM Sans',sans-serif;outline:none;">
          <input maxlength="1" style="width:38px;height:44px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:10px;color:#fff;font-size:18px;font-weight:700;text-align:center;font-family:'DM Sans',sans-serif;outline:none;">
          <input maxlength="1" style="width:38px;height:44px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:10px;color:#fff;font-size:18px;font-weight:700;text-align:center;font-family:'DM Sans',sans-serif;outline:none;">
          <input maxlength="1" style="width:38px;height:44px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:10px;color:#fff;font-size:18px;font-weight:700;text-align:center;font-family:'DM Sans',sans-serif;outline:none;">
          <input maxlength="1" style="width:38px;height:44px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:10px;color:#fff;font-size:18px;font-weight:700;text-align:center;font-family:'DM Sans',sans-serif;outline:none;">
        </div>
      </div>

      <!-- Bouton connexion -->
      <button onclick="goToScreen(20)" style="padding:15px;background:linear-gradient(135deg,#27AE60,#2ecc71);color:#fff;border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 8px 24px rgba(39,174,96,0.35);margin-top:2px;">🏥 Accéder à mon officine</button>

      <!-- Lien mot de passe oublié -->
      <div style="text-align:center;">
        <span onclick="showToast('Réinitialisation envoyée à votre email')" style="font-size:12px;color:rgba(255,255,255,0.5);cursor:pointer;text-decoration:underline;text-underline-offset:3px;">Mot de passe oublié ?</span>
      </div>
    </div>

    <!-- Notice sécurité -->
    <div style="margin-top:16px;background:rgba(39,174,96,0.12);border:1px solid rgba(39,174,96,0.25);border-radius:12px;padding:10px 14px;display:flex;gap:10px;align-items:flex-start;width:100%;box-sizing:border-box;">
      <span style="font-size:16px;flex-shrink:0;">🛡️</span>
      <span style="font-size:11px;color:rgba(255,255,255,0.7);line-height:1.5;">Accès réservé aux officines agréées par l'<strong style="color:rgba(255,255,255,0.9);">Ordre des Pharmaciens de Côte d'Ivoire</strong>. Toute connexion non autorisée est tracée.</span>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 17 — PHARMACY DASHBOARD (MOBILE)
======================================== -->
<div class="screen" id="screen20" data-device="mobile" style="background:#F4F9FC;display:flex;flex-direction:column;">

  <!-- Header pharmacie -->
  <div style="background:linear-gradient(135deg,#0B3D2E,#1A6B50);padding:52px 16px 0;flex-shrink:0;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
      <button onclick="openDrawer('pharmacien')" style="width:38px;height:38px;background:rgba(255,255,255,0.12);border:none;border-radius:10px;cursor:pointer;font-size:20px;color:#fff;display:flex;align-items:center;justify-content:center;">☰</button>
      <div style="text-align:center;flex:1;margin:0 10px;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:800;color:#fff;">🏥 Pharmacie du Plateau</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);">Abidjan Plateau · Treichville</div>
      </div>
      <!-- Statut + avatar responsable -->
      <div style="display:flex;align-items:center;gap:8px;">
        <div style="background:rgba(74,222,128,0.2);border:1px solid rgba(74,222,128,0.4);border-radius:20px;padding:3px 8px;display:flex;align-items:center;gap:4px;">
          <div style="width:6px;height:6px;background:#4ADE80;border-radius:50%;"></div>
          <span style="font-size:10px;color:#4ADE80;font-weight:700;">OUVERTE</span>
        </div>
        <div onclick="showToast('Dr. Sophie Lefebvre — Responsable')" style="width:36px;height:36px;background:rgba(255,255,255,0.15);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:17px;border:2px solid rgba(255,255,255,0.2);cursor:pointer;">👩‍⚕️</div>
      </div>
    </div>

    <!-- KPI scroll -->
    <div style="overflow-x:auto;display:flex;gap:10px;padding-bottom:16px;scrollbar-width:none;">
      <div style="background:rgba(231,76,60,0.2);border:1px solid rgba(231,76,60,0.35);border-radius:14px;padding:12px 16px;flex-shrink:0;min-width:120px;">
        <div style="font-size:22px;font-weight:800;color:#fff;font-family:'Plus Jakarta Sans',sans-serif;">12</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.7);margin-top:1px;">🔴 Ordonnances en attente</div>
      </div>
      <div style="background:rgba(39,174,96,0.2);border:1px solid rgba(39,174,96,0.35);border-radius:14px;padding:12px 16px;flex-shrink:0;min-width:120px;">
        <div style="font-size:22px;font-weight:800;color:#fff;font-family:'Plus Jakarta Sans',sans-serif;">47</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.7);margin-top:1px;">✅ Validées aujourd'hui</div>
      </div>
      <div style="background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.2);border-radius:14px;padding:12px 16px;flex-shrink:0;min-width:120px;">
        <div style="font-size:18px;font-weight:800;color:#fff;font-family:'Plus Jakarta Sans',sans-serif;">285K</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.7);margin-top:1px;">💰 CA du jour (F CFA)</div>
      </div>
      <div style="background:rgba(243,156,18,0.2);border:1px solid rgba(243,156,18,0.35);border-radius:14px;padding:12px 16px;flex-shrink:0;min-width:120px;">
        <div style="font-size:22px;font-weight:800;color:#fff;font-family:'Plus Jakarta Sans',sans-serif;">3</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.7);margin-top:1px;">⚠️ Alertes stock</div>
      </div>
      <div style="background:rgba(52,152,219,0.2);border:1px solid rgba(52,152,219,0.35);border-radius:14px;padding:12px 16px;flex-shrink:0;min-width:120px;">
        <div style="font-size:22px;font-weight:800;color:#fff;font-family:'Plus Jakarta Sans',sans-serif;">5</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.7);margin-top:1px;">🛵 Livraisons actives</div>
      </div>
    </div>
  </div>

  <!-- Corps dashboard -->
  <div style="flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:12px;">

    <!-- Équipe pharmaciens de service -->
    <div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;">👨‍⚕️ Pharmaciens de service</div>
        <span onclick="goToScreen(75)" style="font-size:11px;color:#1A6B50;font-weight:600;cursor:pointer;">Gérer →</span>
      </div>
      <div style="display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding-bottom:4px;">
        <!-- Pharmacien 1 -->
        <div onclick="goToScreen(75)" style="background:#fff;border-radius:14px;padding:12px 14px;flex-shrink:0;min-width:140px;box-shadow:0 2px 8px rgba(0,0,0,0.06);border-top:3px solid #27AE60;cursor:pointer;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
            <div style="width:32px;height:32px;background:linear-gradient(135deg,#1A6B50,#27AE60);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;">👩‍⚕️</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#1A2332;">Dr. Sophie L.</div>
              <div style="font-size:9px;color:#27AE60;font-weight:600;">● En service</div>
            </div>
          </div>
          <div style="font-size:10px;color:#6B7A8D;">Responsable · 08h–16h</div>
          <div style="margin-top:4px;font-size:10px;background:#E8F7EE;color:#27AE60;border-radius:6px;padding:2px 6px;display:inline-block;font-weight:600;">14 ord. traitées</div>
        </div>
        <!-- Pharmacien 2 -->
        <div onclick="goToScreen(75)" style="background:#fff;border-radius:14px;padding:12px 14px;flex-shrink:0;min-width:140px;box-shadow:0 2px 8px rgba(0,0,0,0.06);border-top:3px solid #27AE60;cursor:pointer;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
            <div style="width:32px;height:32px;background:linear-gradient(135deg,#0F3F54,#1A6B8A);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;">👨‍⚕️</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#1A2332;">Dr. Konan Y.</div>
              <div style="font-size:9px;color:#27AE60;font-weight:600;">● En service</div>
            </div>
          </div>
          <div style="font-size:10px;color:#6B7A8D;">Adjoint · 09h–17h</div>
          <div style="margin-top:4px;font-size:10px;background:#E8F7EE;color:#27AE60;border-radius:6px;padding:2px 6px;display:inline-block;font-weight:600;">10 ord. traitées</div>
        </div>
        <!-- Préparateur -->
        <div onclick="goToScreen(75)" style="background:#fff;border-radius:14px;padding:12px 14px;flex-shrink:0;min-width:140px;box-shadow:0 2px 8px rgba(0,0,0,0.06);border-top:3px solid #F39C12;cursor:pointer;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
            <div style="width:32px;height:32px;background:linear-gradient(135deg,#F39C12,#e67e22);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;">👩‍⚕️</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#1A2332;">Aminata T.</div>
              <div style="font-size:9px;color:#F39C12;font-weight:600;">⏸ Pause déj.</div>
            </div>
          </div>
          <div style="font-size:10px;color:#6B7A8D;">Préparatrice · 08h–16h</div>
          <div style="margin-top:4px;font-size:10px;background:#FEF9EE;color:#F39C12;border-radius:6px;padding:2px 6px;display:inline-block;font-weight:600;">8 ord. traitées</div>
        </div>
        <!-- Ajouter -->
        <div onclick="goToScreen(75)" style="background:#F4F9FC;border-radius:14px;padding:12px 14px;flex-shrink:0;min-width:100px;box-shadow:0 2px 8px rgba(0,0,0,0.04);border:1.5px dashed #C5D3DC;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;cursor:pointer;">
          <div style="font-size:22px;">➕</div>
          <div style="font-size:10px;color:#6B7A8D;font-weight:600;text-align:center;">Ajouter au planning</div>
        </div>
      </div>
    </div>

    <!-- Ordonnances urgentes -->
    <div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;">📋 Ordonnances en attente</div>
        <span onclick="goToScreen(21)" style="font-size:11px;color:#1A6B50;font-weight:600;cursor:pointer;">Voir tout (12) →</span>
      </div>
      <div onclick="goToScreen(22)" style="background:#fff;border-radius:14px;padding:13px;display:flex;gap:12px;align-items:center;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.06);border-left:3px solid #E74C3C;margin-bottom:8px;">
        <div style="width:40px;height:40px;background:#FEF0EE;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;">👩🏿</div>
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:700;color:#1A2332;">Aïcha Diallo</div>
          <div style="font-size:11px;color:#6B7A8D;">Il y a 8 min · #ORD-2024-089 · Metformine 850mg</div>
        </div>
        <div style="background:#FEF0EE;border-radius:10px;padding:4px 8px;font-size:10px;font-weight:700;color:#E74C3C;flex-shrink:0;">URGENT</div>
      </div>
      <div onclick="goToScreen(22)" style="background:#fff;border-radius:14px;padding:13px;display:flex;gap:12px;align-items:center;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <div style="width:40px;height:40px;background:#E8F4F8;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;">👨🏿</div>
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:700;color:#1A2332;">Kofi Mensah</div>
          <div style="font-size:11px;color:#6B7A8D;">Il y a 23 min · #ORD-2024-088 · Amoxicilline 500mg</div>
        </div>
        <div style="background:#E8F4F8;border-radius:10px;padding:4px 8px;font-size:10px;font-weight:600;color:#1A6B8A;flex-shrink:0;">NORMAL</div>
      </div>
    </div>

    <!-- Livraisons en cours -->
    <div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;">🛵 Livraisons en cours</div>
        <span onclick="showToast('🛵 Suivi de 5 livraisons actives')" style="font-size:11px;color:#1A6B50;font-weight:600;cursor:pointer;">Voir tout →</span>
      </div>
      <div style="background:#fff;border-radius:14px;padding:13px;box-shadow:0 2px 8px rgba(0,0,0,0.06);display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:36px;height:36px;background:#E8F7EE;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;">🛵</div>
          <div style="flex:1;">
            <div style="font-size:12px;font-weight:700;color:#1A2332;">Mamadou K. — Zone Cocody</div>
            <div style="font-size:11px;color:#6B7A8D;">ETA : 12 min · Commande #CMD-1204</div>
          </div>
          <div style="width:8px;height:8px;background:#27AE60;border-radius:50%;flex-shrink:0;"></div>
        </div>
        <div style="height:1px;background:#F4F9FC;"></div>
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:36px;height:36px;background:#E8F7EE;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;">🛵</div>
          <div style="flex:1;">
            <div style="font-size:12px;font-weight:700;color:#1A2332;">Ibrahima S. — Zone Plateau</div>
            <div style="font-size:11px;color:#6B7A8D;">ETA : 28 min · Commande #CMD-1203</div>
          </div>
          <div style="width:8px;height:8px;background:#27AE60;border-radius:50%;flex-shrink:0;"></div>
        </div>
      </div>
    </div>

    <!-- Actions rapides -->
    <div>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;margin-bottom:8px;">⚡ Actions rapides</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div onclick="goToScreen(21)" style="background:#fff;border-radius:14px;padding:14px;text-align:center;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          <div style="font-size:24px;margin-bottom:6px;">📋</div>
          <div style="font-size:12px;font-weight:700;color:#1A2332;">File ordonnances</div>
          <div style="font-size:10px;color:#E74C3C;font-weight:600;margin-top:2px;">12 en attente</div>
        </div>
        <div onclick="goToScreen(41)" style="background:#fff;border-radius:14px;padding:14px;text-align:center;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          <div style="font-size:24px;margin-bottom:6px;">📦</div>
          <div style="font-size:12px;font-weight:700;color:#1A2332;">Gestion stock</div>
          <div style="font-size:10px;color:#F39C12;font-weight:600;margin-top:2px;">3 alertes</div>
        </div>
        <div onclick="goToScreen(24)" style="background:#fff;border-radius:14px;padding:14px;text-align:center;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          <div style="font-size:24px;margin-bottom:6px;">⚗️</div>
          <div style="font-size:12px;font-weight:700;color:#1A2332;">Interactions médicaments</div>
        </div>
        <div onclick="goToScreen(42)" style="background:#fff;border-radius:14px;padding:14px;text-align:center;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          <div style="font-size:24px;margin-bottom:6px;">📈</div>
          <div style="font-size:12px;font-weight:700;color:#1A2332;">Statistiques</div>
          <div style="font-size:10px;color:#27AE60;font-weight:600;margin-top:2px;">↑ +18% ce mois</div>
        </div>
      </div>
    </div>

    <!-- Chiffre d'affaires sparkline -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <div style="font-size:13px;font-weight:700;color:#1A2332;">💰 CA — 12 derniers jours</div>
        <div style="font-size:11px;color:#27AE60;font-weight:700;">↑ +18%</div>
      </div>
      <div id="pharma-sparkline-wrap" style="overflow:hidden;"></div>
      <script>
        (function() {
          var data = [228,285,192,342,318,385,309,428,364,452,385,496];
          var max = Math.max.apply(null,data), min = Math.min.apply(null,data), range = max-min;
          var w = 280, h = 44;
          var pts = data.map(function(v,i){ return (i/(data.length-1)*w).toFixed(1)+','+(h-(v-min)/range*h*0.85-h*0.07).toFixed(1); }).join(' ');
          var lastX = ((data.length-1)/(data.length-1)*w).toFixed(1);
          var lastY = (h-(data[data.length-1]-min)/range*h*0.85-h*0.07).toFixed(1);
          document.getElementById('pharma-sparkline-wrap').innerHTML = '<svg width="'+w+'" height="'+h+'" viewBox="0 0 '+w+' '+h+'"><polyline points="'+pts+'" fill="none" stroke="#1A6B50" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><circle cx="'+lastX+'" cy="'+lastY+'" r="3.5" fill="#1A6B50"/></svg>';
        })();
      </script>
      <div style="display:flex;justify-content:space-between;margin-top:6px;">
        <span style="font-size:10px;color:#6B7A8D;">192K F CFA min</span>
        <span style="font-size:10px;color:#1A6B50;font-weight:700;">496K F CFA aujourd'hui</span>
      </div>
    </div>

    <div style="height:8px;"></div>
  </div>

  <!-- Bottom nav -->
  <div style="background:#fff;border-top:1.5px solid #E2ECF2;display:flex;flex-shrink:0;">
    <button onclick="goToScreen(20)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:3px;"><span style="font-size:18px;">📊</span><span style="font-size:10px;font-weight:700;color:#1A6B50;">Accueil</span></button>
    <button onclick="goToScreen(21)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:3px;"><span style="font-size:18px;">📋</span><span style="font-size:10px;color:#6B7A8D;">Ordonnances</span></button>
    <button onclick="goToScreen(25)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:3px;"><span style="font-size:18px;">👥</span><span style="font-size:10px;color:#6B7A8D;">Patients</span></button>
    <button onclick="goToScreen(41)" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:3px;"><span style="font-size:18px;">📦</span><span style="font-size:10px;color:#6B7A8D;">Stock</span></button>
    <button onclick="openDrawer('pharmacien')" style="flex:1;padding:10px 4px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:3px;"><span style="font-size:18px;">☰</span><span style="font-size:10px;color:#6B7A8D;">Menu</span></button>
  </div>
</div>

<!-- ========================================
     SCREEN 18 — PRESCRIPTION QUEUE (PHARMACIST)
======================================== -->
<div class="screen" id="screen21" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:#0F3F54;padding:52px 16px 16px;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
      <button onclick="goToScreen(20)" style="width:36px;height:36px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;font-size:18px;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#fff;">File d'attente — Ordonnances</div>
    </div>
    <div style="display:flex;gap:8px;overflow-x:auto;">
      <button onclick="showToast('En attente (12)')" style="padding:7px 14px;background:#E74C3C;color:#fff;border:none;border-radius:20px;font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap;font-family:'DM Sans',sans-serif;">En attente (12)</button>
      <button onclick="showToast('En cours')" style="padding:7px 14px;background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.7);border:1px solid rgba(255,255,255,0.2);border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:'DM Sans',sans-serif;">En cours (3)</button>
      <button onclick="showToast('Validées')" style="padding:7px 14px;background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.7);border:1px solid rgba(255,255,255,0.2);border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:'DM Sans',sans-serif;">Validées</button>
      <button onclick="showToast('Rejetées')" style="padding:7px 14px;background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.7);border:1px solid rgba(255,255,255,0.2);border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:'DM Sans',sans-serif;">Rejetées</button>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;">
    <!-- Card 1 URGENT -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);border-left:3px solid #E74C3C;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <div style="width:44px;height:44px;background:#E8F4F8;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;">👩🏿</div>
        <div style="flex:1;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;">
            <div><div style="font-size:14px;font-weight:700;color:#1A2332;">Aïcha Diallo</div><div style="font-size:11px;color:#6B7A8D;">32 ans · #ORD-2024-089</div></div>
            <div style="background:#FEF0EE;border-radius:8px;padding:3px 8px;font-size:10px;font-weight:700;color:#E74C3C;">URGENT</div>
          </div>
          <div style="font-size:11px;color:#6B7A8D;margin-top:4px;">📅 Envoyée il y a 8 min</div>
          <div style="margin-top:10px;display:flex;gap:8px;">
            <button onclick="goToScreen(22)" style="flex:1;padding:9px;background:#1A6B8A;color:#fff;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Traiter →</button>
            <button onclick="showToast('Rejeté')" style="padding:9px 14px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">✕</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Card 2 -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <div style="width:44px;height:44px;background:#E8F4F8;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;">👨🏿</div>
        <div style="flex:1;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;">
            <div><div style="font-size:14px;font-weight:700;color:#1A2332;">Kofi Mensah</div><div style="font-size:11px;color:#6B7A8D;">45 ans · #ORD-2024-088</div></div>
            <div style="background:#E8F4F8;border-radius:8px;padding:3px 8px;font-size:10px;font-weight:600;color:#1A6B8A;">NORMAL</div>
          </div>
          <div style="font-size:11px;color:#6B7A8D;margin-top:4px;">📅 Il y a 23 min</div>
          <div style="margin-top:10px;"><button onclick="goToScreen(22)" style="width:100%;padding:9px;background:#1A6B8A;color:#fff;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Traiter →</button></div>
        </div>
      </div>
    </div>
    <!-- Card 3 -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <div style="width:44px;height:44px;background:#E8F4F8;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;">👩🏿</div>
        <div style="flex:1;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;">
            <div><div style="font-size:14px;font-weight:700;color:#1A2332;">Fatou Traoré</div><div style="font-size:11px;color:#6B7A8D;">28 ans · #ORD-2024-087</div></div>
            <div style="background:#E8F4F8;border-radius:8px;padding:3px 8px;font-size:10px;font-weight:600;color:#1A6B8A;">NORMAL</div>
          </div>
          <div style="font-size:11px;color:#6B7A8D;margin-top:4px;">📅 Il y a 41 min</div>
          <div style="margin-top:10px;"><button onclick="goToScreen(22)" style="width:100%;padding:9px;background:#1A6B8A;color:#fff;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Traiter →</button></div>
        </div>
      </div>
    </div>
    <!-- Card 4 -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <div style="width:44px;height:44px;background:#E8F4F8;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;">👨🏿</div>
        <div style="flex:1;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;">
            <div><div style="font-size:14px;font-weight:700;color:#1A2332;">Aminata Coulibaly</div><div style="font-size:11px;color:#6B7A8D;">55 ans · #ORD-2024-086</div></div>
            <div style="background:#FEF0EE;border-radius:8px;padding:3px 8px;font-size:10px;font-weight:700;color:#E74C3C;">URGENT</div>
          </div>
          <div style="font-size:11px;color:#6B7A8D;margin-top:4px;">📅 Il y a 1h 02 min</div>
          <div style="margin-top:10px;"><button onclick="goToScreen(22)" style="width:100%;padding:9px;background:#1A6B8A;color:#fff;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Traiter →</button></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 19 — PRESCRIPTION VALIDATION DETAIL
======================================== -->
<div class="screen" id="screen22" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:#0F3F54;padding:52px 16px 16px;display:flex;align-items:center;gap:12px;">
    <button onclick="goToScreen(21)" style="width:36px;height:36px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;font-size:18px;">←</button>
    <div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:#fff;">Ordonnance #ORD-2024-089</div><div style="font-size:11px;color:rgba(255,255,255,0.6);">Aïcha Diallo · 32 ans</div></div>
    <div style="margin-left:auto;background:#E74C3C;border-radius:10px;padding:4px 10px;font-size:10px;font-weight:700;color:#fff;">URGENT</div>
  </div>
  <!-- Tabs -->
  <div style="background:#0F3F54;padding:0 16px 16px;display:flex;gap:4px;">
    <button id="ptab1" onclick="showPTab(1)" style="flex:1;padding:8px;background:rgba(255,255,255,0.15);color:#fff;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Validation</button>
    <button id="ptab2" onclick="showPTab(2)" style="flex:1;padding:8px;background:transparent;color:rgba(255,255,255,0.5);border:none;border-radius:10px;font-size:12px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">Interactions</button>
    <button id="ptab3" onclick="showPTab(3)" style="flex:1;padding:8px;background:transparent;color:rgba(255,255,255,0.5);border:none;border-radius:10px;font-size:12px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">Historique</button>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;">
    <!-- Patient card -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);display:flex;gap:12px;align-items:center;">
      <div style="width:48px;height:48px;background:#E8F4F8;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;">👩🏿</div>
      <div style="flex:1;">
        <div style="font-size:15px;font-weight:700;color:#1A2332;">Aïcha Diallo</div>
        <div style="display:flex;gap:8px;margin-top:4px;">
          <span style="font-size:11px;color:#6B7A8D;">32 ans</span>
          <span style="background:#FEF0EE;border-radius:6px;padding:2px 6px;font-size:11px;font-weight:700;color:#E74C3C;">AB+</span>
          <span style="font-size:11px;color:#6B7A8D;">5 ordonnances</span>
        </div>
      </div>
    </div>
    <!-- Prescription image -->
    <div style="background:#E8F4F8;border-radius:14px;height:160px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;">
      <div style="text-align:center;"><div style="font-size:48px;margin-bottom:8px;">📄</div><div style="font-size:12px;color:#1A6B8A;font-weight:600;">Ordonnance_Diallo.jpg</div><div style="font-size:11px;color:#6B7A8D;">Pincer pour zoomer</div></div>
      <button onclick="toggleFullscreen()" style="position:absolute;top:10px;right:10px;width:32px;height:32px;background:rgba(255,255,255,0.9);border:none;border-radius:8px;cursor:pointer;font-size:14px;">⛶</button>
    </div>
    <!-- Validation form -->
    <div style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:13px;font-weight:700;color:#1A2332;margin-bottom:12px;">Décision de validation</div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:14px;">
        <label onclick="showToast('Approuver sélectionné')" style="display:flex;align-items:center;gap:10px;padding:10px;background:#E8F7EE;border-radius:10px;cursor:pointer;border:1.5px solid #27AE60;">
          <input type="radio" name="decision" checked style="accent-color:#27AE60;"><span style="font-size:13px;font-weight:600;color:#27AE60;">✅ Approuver</span>
        </label>
        <label onclick="showToast('Rejeter sélectionné')" style="display:flex;align-items:center;gap:10px;padding:10px;background:#F4F9FC;border-radius:10px;cursor:pointer;border:1.5px solid #E2ECF2;">
          <input type="radio" name="decision" style="accent-color:#E74C3C;"><span style="font-size:13px;font-weight:600;color:#1A2332;">❌ Rejeter</span>
        </label>
        <label onclick="showToast('Demande info sélectionné')" style="display:flex;align-items:center;gap:10px;padding:10px;background:#F4F9FC;border-radius:10px;cursor:pointer;border:1.5px solid #E2ECF2;">
          <input type="radio" name="decision" style="accent-color:#F39C12;"><span style="font-size:13px;font-weight:600;color:#1A2332;">❓ Demander informations</span>
        </label>
      </div>
      <textarea placeholder="Conseil pharmaceutique documenté..." rows="2" style="width:100%;padding:10px;border:1.5px solid #E2ECF2;border-radius:10px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;resize:none;color:#1A2332;margin-bottom:8px;"></textarea>
      <textarea placeholder="Posologie détaillée (requis)..." rows="2" style="width:100%;padding:10px;border:1.5px solid #E2ECF2;border-radius:10px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;resize:none;color:#1A2332;"></textarea>
    </div>
    <div style="display:flex;gap:8px;">
      <button onclick="goToScreen(23)" style="flex:1;padding:13px;background:linear-gradient(135deg,#27AE60,#2ecc71);color:#fff;border:none;border-radius:14px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">🔐 Générer QR + Valider</button>
      <button onclick="showToast('Ordonnance rejetée')" style="padding:13px 16px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:14px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">❌</button>
    </div>
  </div>
  <script>
  function showPTab(n) {
    ['ptab1','ptab2','ptab3'].forEach((id,i) => {
      const el = document.getElementById(id);
      if(el) { el.style.background = (i+1===n) ? 'rgba(255,255,255,0.15)' : 'transparent'; el.style.color = (i+1===n) ? '#fff' : 'rgba(255,255,255,0.5)'; }
    });
    showToast(['Validation','Interactions médicamenteuses','Historique patient'][n-1]);
  }
  </script>
</div>

<!-- ========================================
     SCREEN 20 — QR CODE GENERATION
======================================== -->
<div class="screen" id="screen23" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:#0F3F54;padding:52px 16px 20px;display:flex;align-items:center;gap:12px;">
    <button onclick="goToScreen(22)" style="width:36px;height:36px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;font-size:18px;">←</button>
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#fff;">QR Code Ordonnance</div>
    <div style="margin-left:auto;background:rgba(39,174,96,0.3);border-radius:10px;padding:4px 10px;font-size:10px;font-weight:700;color:#4ADE80;">✓ VALIDÉE</div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:20px;display:flex;flex-direction:column;align-items:center;gap:16px;">
    <!-- QR Code -->
    <div style="background:#fff;border-radius:20px;padding:24px;box-shadow:0 8px 32px rgba(0,0,0,0.1);display:flex;flex-direction:column;align-items:center;gap:16px;width:100%;">
      <div style="background:#1A2332;border-radius:12px;padding:16px;width:200px;height:200px;display:flex;align-items:center;justify-content:center;position:relative;">
        <!-- Simulated QR code pattern -->
        <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;width:154px;height:154px;">
          <!-- Row 1 -->
          <div style="background:#fff;border-radius:2px;"></div><div style="background:#fff;border-radius:2px;"></div><div style="background:#fff;border-radius:2px;"></div><div style="background:#1A2332;border-radius:2px;"></div><div style="background:#fff;border-radius:2px;"></div><div style="background:#fff;border-radius:2px;"></div><div style="background:#fff;border-radius:2px;"></div>
          <div style="background:#fff;border-radius:2px;"></div><div style="background:#1A2332;border-radius:2px;"></div><div style="background:#fff;border-radius:2px;"></div><div style="background:#fff;border-radius:2px;"></div><div style="background:#fff;border-radius:2px;"></div><div style="background:#1A2332;border-radius:2px;"></div><div style="background:#fff;border-radius:2px;"></div>
          <div style="background:#fff;border-radius:2px;"></div><div style="background:#1A2332;border-radius:2px;"></div><div style="background:#fff;border-radius:2px;"></div><div style="background:#1A2332;border-radius:2px;"></div><div style="background:#fff;border-radius:2px;"></div><div style="background:#1A2332;border-radius:2px;"></div><div style="background:#fff;border-radius:2px;"></div>
          <div style="background:#1A2332;border-radius:2px;"></div><div style="background:#fff;border-radius:2px;"></div><div style="background:#1A2332;border-radius:2px;"></div><div style="background:#fff;border-radius:2px;"></div><div style="background:#1A2332;border-radius:2px;"></div><div style="background:#fff;border-radius:2px;"></div><div style="background:#1A2332;border-radius:2px;"></div>
          <div style="background:#fff;border-radius:2px;"></div><div style="background:#fff;border-radius:2px;"></div><div style="background:#1A2332;border-radius:2px;"></div><div style="background:#1A2332;border-radius:2px;"></div><div style="background:#fff;border-radius:2px;"></div><div style="background:#fff;border-radius:2px;"></div><div style="background:#1A2332;border-radius:2px;"></div>
          <div style="background:#1A2332;border-radius:2px;"></div><div style="background:#fff;border-radius:2px;"></div><div style="background:#fff;border-radius:2px;"></div><div style="background:#1A2332;border-radius:2px;"></div><div style="background:#fff;border-radius:2px;"></div><div style="background:#1A2332;border-radius:2px;"></div><div style="background:#fff;border-radius:2px;"></div>
          <div style="background:#fff;border-radius:2px;"></div><div style="background:#1A2332;border-radius:2px;"></div><div style="background:#fff;border-radius:2px;"></div><div style="background:#fff;border-radius:2px;"></div><div style="background:#1A2332;border-radius:2px;"></div><div style="background:#fff;border-radius:2px;"></div><div style="background:#fff;border-radius:2px;"></div>
        </div>
        <!-- QR corners -->
        <div style="position:absolute;top:10px;left:10px;width:32px;height:32px;border:3px solid #27AE60;border-radius:4px;"></div>
        <div style="position:absolute;top:10px;right:10px;width:32px;height:32px;border:3px solid #27AE60;border-radius:4px;"></div>
        <div style="position:absolute;bottom:10px;left:10px;width:32px;height:32px;border:3px solid #27AE60;border-radius:4px;"></div>
        <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;"><div style="width:36px;height:36px;background:#1A6B8A;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;">⚕️</div></div>
      </div>
      <!-- Info -->
      <div style="width:100%;display:flex;flex-direction:column;gap:6px;">
        <div style="display:flex;justify-content:space-between;padding:8px;background:#F4F9FC;border-radius:8px;">
          <span style="font-size:11px;color:#6B7A8D;">Patient</span><span style="font-size:12px;font-weight:700;color:#1A2332;">Aïcha Diallo</span>
        </div>
        <div style="display:flex;justify-content:space-between;padding:8px;background:#F4F9FC;border-radius:8px;">
          <span style="font-size:11px;color:#6B7A8D;">Médicament</span><span style="font-size:12px;font-weight:700;color:#1A2332;">Amoxicilline 500mg</span>
        </div>
        <div style="display:flex;justify-content:space-between;padding:8px;background:#F4F9FC;border-radius:8px;">
          <span style="font-size:11px;color:#6B7A8D;">Posologie</span><span style="font-size:12px;font-weight:700;color:#1A2332;">1cp × 3/jour · 7 jours</span>
        </div>
        <div style="display:flex;justify-content:space-between;padding:8px;background:#F4F9FC;border-radius:8px;">
          <span style="font-size:11px;color:#6B7A8D;">Pharmacien</span><span style="font-size:12px;font-weight:700;color:#1A6B8A;">Dr. Sophie Lefebvre</span>
        </div>
        <div style="display:flex;justify-content:space-between;padding:8px;background:#F4F9FC;border-radius:8px;">
          <span style="font-size:11px;color:#6B7A8D;">Validité</span><span style="font-size:12px;font-weight:700;color:#1A2332;">14 oct. 2024 · 7 jours</span>
        </div>
      </div>
    </div>
    <!-- Actions -->
    <button onclick="showToast('QR envoyé au patient !')" style="width:100%;padding:13px;background:linear-gradient(135deg,#1A6B8A,#2196B3);color:#fff;border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">📤 Partager avec le patient</button>
    <button onclick="showToast('Téléchargement PDF...')" style="width:100%;padding:13px;background:#fff;color:#1A6B8A;border:2px solid #1A6B8A;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">📥 Télécharger PDF</button>
    <button onclick="showToast('Impression...')" style="width:100%;padding:13px;background:#F4F9FC;color:#1A2332;border:2px solid #E2ECF2;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">🖨️ Imprimer</button>
  </div>
</div>

<!-- ========================================
     SCREEN 21 — DRUG INTERACTION CHECKER (MOBILE)
======================================== -->
<div class="screen" id="screen24" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:#0F3F54;padding:52px 16px 20px;display:flex;align-items:center;gap:12px;">
    <button onclick="goToScreen(20)" style="width:36px;height:36px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;font-size:18px;">←</button>
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#fff;">Vérification Interactions</div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;">
    <!-- Drug inputs -->
    <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:13px;font-weight:700;color:#1A2332;margin-bottom:12px;">Médicaments à vérifier</div>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <div>
          <div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">MÉDICAMENT 1</div>
          <input value="Amoxicilline 500mg" style="width:100%;padding:10px 12px;border:1.5px solid #1A6B8A;border-radius:10px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;color:#1A2332;background:#F4F9FC;">
        </div>
        <div>
          <div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">MÉDICAMENT 2</div>
          <input value="Metformine 850mg" style="width:100%;padding:10px 12px;border:1.5px solid #E2ECF2;border-radius:10px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;color:#1A2332;background:#F4F9FC;">
        </div>
        <div>
          <div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">MÉDICAMENT 3</div>
          <input placeholder="Saisir un médicament..." style="width:100%;padding:10px 12px;border:1.5px dashed #E2ECF2;border-radius:10px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;color:#6B7A8D;background:#F4F9FC;">
        </div>
        <button onclick="showToast('Champ ajouté')" style="padding:8px;background:transparent;color:#1A6B8A;border:1.5px dashed #1A6B8A;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">+ Ajouter un médicament</button>
      </div>
    </div>
    <button onclick="showToast('Vérification lancée...')" style="padding:14px;background:linear-gradient(135deg,#0F3F54,#1A6B8A);color:#fff;border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;">⚗️ Vérifier les interactions</button>
    <!-- Results -->
    <div style="background:#E8F7EE;border-radius:16px;padding:16px;border:1.5px solid rgba(39,174,96,0.3);">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:36px;height:36px;background:#27AE60;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;color:#fff;">✓</div>
        <div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#27AE60;">Aucune interaction majeure</div><div style="font-size:12px;color:#6B7A8D;">Amoxicilline + Metformine</div></div>
      </div>
      <div style="background:#fff;border-radius:10px;padding:12px;">
        <div style="font-size:12px;font-weight:700;color:#1A2332;margin-bottom:4px;">Résultat détaillé</div>
        <div style="font-size:12px;color:#6B7A8D;line-height:1.5;">Ces deux médicaments peuvent être co-administrés sans précaution particulière. Surveillance habituelle recommandée.</div>
      </div>
    </div>
    <!-- Second result - moderate -->
    <div style="background:#FEF9EE;border-radius:16px;padding:16px;border:1.5px solid rgba(243,156,18,0.3);">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:36px;height:36px;background:#F39C12;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;color:#fff;">⚠</div>
        <div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#F39C12;">Interaction modérée</div><div style="font-size:12px;color:#6B7A8D;">Amoxicilline + Warfarine</div></div>
      </div>
      <div style="background:#fff;border-radius:10px;padding:12px;">
        <div style="font-size:12px;color:#6B7A8D;line-height:1.5;">Potentielle augmentation de l'effet anticoagulant. Surveiller l'INR plus fréquemment.</div>
      </div>
    </div>
    <!-- Legend -->
    <div style="background:#fff;border-radius:12px;padding:12px;display:flex;gap:10px;flex-wrap:wrap;">
      <div style="display:flex;align-items:center;gap:6px;"><div style="width:12px;height:12px;background:#27AE60;border-radius:3px;"></div><span style="font-size:11px;color:#6B7A8D;">Sûr</span></div>
      <div style="display:flex;align-items:center;gap:6px;"><div style="width:12px;height:12px;background:#F39C12;border-radius:3px;"></div><span style="font-size:11px;color:#6B7A8D;">Vigilance</span></div>
      <div style="display:flex;align-items:center;gap:6px;"><div style="width:12px;height:12px;background:#E74C3C;border-radius:3px;"></div><span style="font-size:11px;color:#6B7A8D;">DANGER</span></div>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 22 — PATIENT HISTORY (PHARMACIST)
======================================== -->
<div class="screen" id="screen25" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:#0F3F54;padding:52px 16px 16px;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
      <button onclick="goToScreen(20)" style="width:36px;height:36px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;font-size:18px;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#fff;">Historique Patients</div>
    </div>
    <div style="position:relative;">
      <input type="text" placeholder="Rechercher un patient..." style="width:100%;padding:10px 14px 10px 36px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:50px;color:#fff;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;">
      <span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);font-size:14px;">🔍</span>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;">
    <!-- Patient cards -->
    <div onclick="goToScreen(25);showToast('Profil Aïcha Diallo')" style="background:#fff;border-radius:14px;padding:14px;display:flex;gap:12px;align-items:center;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="width:48px;height:48px;background:#E8F4F8;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;">👩🏿</div>
      <div style="flex:1;">
        <div style="font-size:14px;font-weight:700;color:#1A2332;">Aïcha Diallo</div>
        <div style="display:flex;gap:8px;margin-top:4px;"><span style="font-size:11px;color:#6B7A8D;">32 ans</span><span style="background:#FEF0EE;border-radius:6px;padding:1px 6px;font-size:10px;font-weight:700;color:#E74C3C;">AB+</span><span style="font-size:11px;color:#6B7A8D;">5 ordonnances</span></div>
        <div style="font-size:11px;color:#6B7A8D;margin-top:2px;">Dernière visite: 14 oct. 2024</div>
      </div>
      <span style="color:#6B7A8D;">›</span>
    </div>
    <div onclick="goToScreen(25);showToast('Profil Kofi Mensah')" style="background:#fff;border-radius:14px;padding:14px;display:flex;gap:12px;align-items:center;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="width:48px;height:48px;background:#E8F4F8;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;">👨🏿</div>
      <div style="flex:1;">
        <div style="font-size:14px;font-weight:700;color:#1A2332;">Kofi Mensah</div>
        <div style="display:flex;gap:8px;margin-top:4px;"><span style="font-size:11px;color:#6B7A8D;">45 ans</span><span style="background:#E8F7EE;border-radius:6px;padding:1px 6px;font-size:10px;font-weight:700;color:#27AE60;">O+</span><span style="font-size:11px;color:#6B7A8D;">12 ordonnances</span></div>
        <div style="font-size:11px;color:#6B7A8D;margin-top:2px;">Dernière visite: 12 oct. 2024</div>
      </div>
      <span style="color:#6B7A8D;">›</span>
    </div>
    <div onclick="goToScreen(25);showToast('Profil Moussa Koné')" style="background:#fff;border-radius:14px;padding:14px;display:flex;gap:12px;align-items:center;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="width:48px;height:48px;background:#E8F4F8;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;">👨🏿</div>
      <div style="flex:1;">
        <div style="font-size:14px;font-weight:700;color:#1A2332;">Moussa Koné</div>
        <div style="display:flex;gap:8px;margin-top:4px;"><span style="font-size:11px;color:#6B7A8D;">34 ans</span><span style="background:#E8F4F8;border-radius:6px;padding:1px 6px;font-size:10px;font-weight:700;color:#1A6B8A;">O+</span><span style="font-size:11px;color:#6B7A8D;">8 ordonnances</span></div>
        <div style="font-size:11px;color:#6B7A8D;margin-top:2px;">Dernière visite: 9 oct. 2024</div>
      </div>
      <span style="color:#6B7A8D;">›</span>
    </div>
    <div onclick="goToScreen(25);showToast('Profil Fatou Traoré')" style="background:#fff;border-radius:14px;padding:14px;display:flex;gap:12px;align-items:center;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="width:48px;height:48px;background:#E8F4F8;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;">👩🏿</div>
      <div style="flex:1;">
        <div style="font-size:14px;font-weight:700;color:#1A2332;">Fatou Traoré</div>
        <div style="display:flex;gap:8px;margin-top:4px;"><span style="font-size:11px;color:#6B7A8D;">28 ans</span><span style="background:#E8F4F8;border-radius:6px;padding:1px 6px;font-size:10px;font-weight:700;color:#1A6B8A;">B+</span><span style="font-size:11px;color:#6B7A8D;">3 ordonnances</span></div>
        <div style="font-size:11px;color:#6B7A8D;margin-top:2px;">Dernière visite: 7 oct. 2024</div>
      </div>
      <span style="color:#6B7A8D;">›</span>
    </div>
    <!-- Timeline for selected patient -->
    <div style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:12px;font-weight:700;color:#1A2332;margin-bottom:12px;">Historique — Aïcha Diallo</div>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;gap:10px;align-items:flex-start;">
          <div style="width:8px;height:8px;background:#27AE60;border-radius:50%;flex-shrink:0;margin-top:4px;"></div>
          <div><div style="font-size:12px;font-weight:700;color:#1A2332;">#ORD-2024-089 · Validée</div><div style="font-size:11px;color:#6B7A8D;">14 oct. 2024 · Dr. Lefebvre</div><button onclick="showToast('Ordonnance ouverte')" style="font-size:11px;color:#1A6B8A;background:none;border:none;cursor:pointer;padding:0;font-weight:600;margin-top:2px;">Voir →</button></div>
        </div>
        <div style="display:flex;gap:10px;align-items:flex-start;">
          <div style="width:8px;height:8px;background:#27AE60;border-radius:50%;flex-shrink:0;margin-top:4px;"></div>
          <div><div style="font-size:12px;font-weight:700;color:#1A2332;">#ORD-2024-071 · Validée</div><div style="font-size:11px;color:#6B7A8D;">2 oct. 2024 · Dr. Diabaté</div><button onclick="showToast('Ordonnance ouverte')" style="font-size:11px;color:#1A6B8A;background:none;border:none;cursor:pointer;padding:0;font-weight:600;margin-top:2px;">Voir →</button></div>
        </div>
        <div style="display:flex;gap:10px;align-items:flex-start;">
          <div style="width:8px;height:8px;background:#E74C3C;border-radius:50%;flex-shrink:0;margin-top:4px;"></div>
          <div><div style="font-size:12px;font-weight:700;color:#1A2332;">#ORD-2024-055 · Rejetée</div><div style="font-size:11px;color:#6B7A8D;">18 sept. 2024 · Dr. Lefebvre</div></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 23 — PHARMACIST CHAT (MOBILE)
======================================== -->
<div class="screen" id="screen26" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:#0F3F54;padding:52px 16px 16px;display:flex;align-items:center;gap:12px;">
    <button onclick="goToScreen(20)" style="width:36px;height:36px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;font-size:18px;">←</button>
    <div style="width:36px;height:36px;background:rgba(255,255,255,0.15);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;">👤</div>
    <div>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#fff;">Moussa Koné</div>
      <div style="display:flex;align-items:center;gap:4px;"><div style="width:6px;height:6px;background:#4ADE80;border-radius:50%;"></div><div style="font-size:11px;color:rgba(255,255,255,0.7);">En ligne</div></div>
    </div>
    <button onclick="showToast('Appel audio patient')" style="margin-left:auto;width:36px;height:36px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;">📞</button>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;">
    <!-- Patient message -->
    <div style="display:flex;gap:8px;align-items:flex-end;">
      <div style="width:28px;height:28px;background:#E8F4F8;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;">👤</div>
      <div>
        <div style="background:#fff;border-radius:16px 16px 16px 4px;padding:12px 14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);max-width:240px;">
          <div style="font-size:14px;color:#1A2332;line-height:1.5;">Bonjour Docteur, j'ai une question sur la posologie de mon Amoxicilline. Puis-je prendre 2 comprimés en même temps ?</div>
        </div>
        <div style="font-size:10px;color:#6B7A8D;margin-top:4px;padding-left:4px;">10:30</div>
      </div>
    </div>
    <!-- Pharmacist message -->
    <div style="display:flex;gap:8px;align-items:flex-end;justify-content:flex-end;">
      <div style="text-align:right;">
        <div style="background:linear-gradient(135deg,#0F3F54,#1A6B8A);border-radius:16px 16px 4px 16px;padding:12px 14px;max-width:240px;display:inline-block;">
          <div style="font-size:14px;color:#fff;line-height:1.5;">Bonjour Moussa. Non, il faut respecter la posologie prescrite : 1 comprimé toutes les 8 heures. Voici la fiche posologie :</div>
        </div>
        <div style="font-size:10px;color:#6B7A8D;margin-top:4px;">10:32 ✓✓</div>
      </div>
    </div>
    <!-- Pharmacist attaches doc -->
    <div style="display:flex;gap:8px;align-items:flex-end;justify-content:flex-end;">
      <div style="text-align:right;">
        <div onclick="showToast('Posologie.pdf')" style="background:linear-gradient(135deg,#0F3F54,#1A6B8A);border-radius:16px 16px 4px 16px;padding:12px 14px;max-width:200px;display:inline-flex;align-items:center;gap:8px;cursor:pointer;">
          <div style="font-size:20px;">📄</div>
          <div style="text-align:left;"><div style="font-size:12px;font-weight:700;color:#fff;">posologie_amox.pdf</div><div style="font-size:10px;color:rgba(255,255,255,0.6);">87 Ko</div></div>
        </div>
        <div style="font-size:10px;color:#6B7A8D;margin-top:4px;">10:33 ✓✓</div>
      </div>
    </div>
    <!-- Typing indicator -->
    <div style="display:flex;gap:8px;align-items:center;">
      <div style="width:28px;height:28px;background:#E8F4F8;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;">👤</div>
      <div style="background:#fff;border-radius:16px;padding:10px 14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);display:flex;gap:3px;align-items:center;">
        <div style="width:6px;height:6px;background:#6B7A8D;border-radius:50%;animation:bounce 1s infinite;"></div>
        <div style="width:6px;height:6px;background:#6B7A8D;border-radius:50%;animation:bounce 1s infinite 0.1s;"></div>
        <div style="width:6px;height:6px;background:#6B7A8D;border-radius:50%;animation:bounce 1s infinite 0.2s;"></div>
      </div>
    </div>
  </div>
  <!-- Input bar -->
  <div style="background:#fff;padding:12px 16px;border-top:1.5px solid #E2ECF2;display:flex;align-items:center;gap:8px;">
    <button onclick="showToast('Joindre fichier')" style="width:36px;height:36px;background:#F4F9FC;border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;flex-shrink:0;">📎</button>
    <input type="text" placeholder="Message..." style="flex:1;border:1.5px solid #E2ECF2;border-radius:50px;padding:10px 14px;font-size:14px;font-family:'DM Sans',sans-serif;outline:none;background:#F4F9FC;">
    <button onclick="showToast('Envoi...')" style="width:36px;height:36px;background:#0F3F54;border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:14px;flex-shrink:0;color:#fff;">➤</button>
  </div>
</div>

<!-- ========================================
     SCREEN 24 — ADMIN LOGIN
======================================== -->
<div class="screen" id="screen41" data-device="mobile" style="background:#F4F9FC;display:flex;flex-direction:column;">

  <!-- Header -->
  <div style="background:linear-gradient(135deg,#0F3F54 0%,#1A6B50 100%);padding:54px 20px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
      <button onclick="goToScreen(20)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Gestion du Stock</div>
      <button onclick="showToast('Scan code-barres')" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">📷</button>
    </div>
    <!-- KPI bar -->
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px;">
      <div style="background:rgba(255,255,255,0.12);border-radius:12px;padding:10px 8px;text-align:center;">
        <div style="font-size:18px;font-weight:800;color:#fff;">312</div>
        <div style="font-size:9px;color:rgba(255,255,255,0.65);margin-top:2px;">Références</div>
      </div>
      <div style="background:rgba(231,76,60,0.35);border-radius:12px;padding:10px 8px;text-align:center;border:1px solid rgba(231,76,60,0.5);">
        <div style="font-size:18px;font-weight:800;color:#FF7F7F;">2</div>
        <div style="font-size:9px;color:rgba(255,255,255,0.65);margin-top:2px;">Ruptures</div>
      </div>
      <div style="background:rgba(243,156,18,0.3);border-radius:12px;padding:10px 8px;text-align:center;border:1px solid rgba(243,156,18,0.4);">
        <div style="font-size:18px;font-weight:800;color:#FDD77E;">3</div>
        <div style="font-size:9px;color:rgba(255,255,255,0.65);margin-top:2px;">Critique</div>
      </div>
      <div style="background:rgba(255,255,255,0.12);border-radius:12px;padding:10px 8px;text-align:center;">
        <div style="font-size:14px;font-weight:800;color:#4ADE80;">4.2M</div>
        <div style="font-size:9px;color:rgba(255,255,255,0.65);margin-top:2px;">Valeur FCFA</div>
      </div>
    </div>
  </div>

  <!-- Barre alerte critique -->
  <div style="background:#FEF0EE;padding:10px 16px;display:flex;align-items:center;gap:8px;border-bottom:1px solid rgba(231,76,60,0.15);flex-shrink:0;">
    <div style="font-size:18px;">🚨</div>
    <div style="flex:1;">
      <div style="font-size:12px;font-weight:700;color:#E74C3C;">2 ruptures — Action requise aujourd'hui</div>
      <div style="font-size:10px;color:#E74C3C;opacity:0.7;">Paracétamol 500mg · Ibuprofène 400mg</div>
    </div>
    <button onclick="showToast('Commandes urgentes envoyées !')" style="background:#E74C3C;border:none;border-radius:8px;padding:6px 10px;font-size:11px;font-weight:700;color:#fff;cursor:pointer;">Commander</button>
  </div>

  <!-- Recherche + Filtres -->
  <div style="padding:12px 16px;background:#fff;flex-shrink:0;border-bottom:1px solid #E8EDF2;">
    <div style="background:#F4F9FC;border-radius:12px;padding:10px 14px;display:flex;align-items:center;gap:8px;margin-bottom:10px;">
      <span style="font-size:14px;">🔍</span>
      <input placeholder="Rechercher un médicament, REF…" style="border:none;background:none;font-size:13px;color:#1A2332;outline:none;flex:1;font-family:'DM Sans',sans-serif;" oninput="showToast('Recherche : '+this.value)">
    </div>
    <!-- Onglets -->
    <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;">
      <button id="stab-all" onclick="switchStockTab('all',this)" style="padding:6px 14px;border-radius:20px;border:none;background:#0F3F54;color:#fff;font-size:11px;font-weight:700;cursor:pointer;white-space:nowrap;font-family:'DM Sans',sans-serif;">Tous (312)</button>
      <button id="stab-rupture" onclick="switchStockTab('rupture',this)" style="padding:6px 14px;border-radius:20px;border:none;background:#F4F9FC;color:#E74C3C;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:'DM Sans',sans-serif;">🔴 Rupture (2)</button>
      <button id="stab-critique" onclick="switchStockTab('critique',this)" style="padding:6px 14px;border-radius:20px;border:none;background:#F4F9FC;color:#F39C12;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:'DM Sans',sans-serif;">🟠 Critique (3)</button>
      <button id="stab-ok" onclick="switchStockTab('ok',this)" style="padding:6px 14px;border-radius:20px;border:none;background:#F4F9FC;color:#27AE60;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:'DM Sans',sans-serif;">🟢 OK (307)</button>
      <button id="stab-perime" onclick="switchStockTab('perime',this)" style="padding:6px 14px;border-radius:20px;border:none;background:#F4F9FC;color:#9B59B6;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:'DM Sans',sans-serif;">⚠️ Périmés (1)</button>
    </div>
  </div>

  <!-- Liste produits -->
  <div style="flex:1;overflow-y:auto;padding:12px 16px 90px;display:flex;flex-direction:column;gap:8px;">

    <!-- SECTION: Ruptures -->
    <div style="font-size:10px;font-weight:800;color:#E74C3C;text-transform:uppercase;letter-spacing:0.8px;margin-top:4px;margin-bottom:2px;">🔴 Ruptures de stock</div>

    <!-- Produit Rupture 1 -->
    <div style="background:#fff;border-radius:14px;padding:13px 14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);border-left:4px solid #E74C3C;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:700;color:#1A2332;">Paracétamol 500mg</div>
          <div style="font-size:10px;color:#6B7A8D;margin-top:1px;">REF-001 · Analgésique · CIPLA</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:20px;font-weight:800;color:#E74C3C;">0</div>
          <div style="background:#FEF0EE;border-radius:6px;padding:2px 8px;font-size:9px;font-weight:700;color:#E74C3C;">RUPTURE</div>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <div style="font-size:10px;color:#6B7A8D;">Seuil réappro: <span style="color:#E74C3C;font-weight:700;">50 unités</span></div>
        <div style="font-size:10px;color:#6B7A8D;">Exp: <span style="color:#1A2332;font-weight:600;">31/08/2026</span></div>
      </div>
      <div style="display:flex;gap:6px;">
        <button onclick="showToast('Commande Paracétamol envoyée')" style="flex:1;padding:8px;background:#E74C3C;color:#fff;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;">📦 Commander 200u</button>
        <button onclick="showToast('Fournisseur contacté')" style="padding:8px 12px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;">📞</button>
      </div>
    </div>

    <!-- Produit Rupture 2 -->
    <div style="background:#fff;border-radius:14px;padding:13px 14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);border-left:4px solid #E74C3C;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:700;color:#1A2332;">Ibuprofène 400mg</div>
          <div style="font-size:10px;color:#6B7A8D;margin-top:1px;">REF-018 · Anti-inflammatoire · SANOFI</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:20px;font-weight:800;color:#E74C3C;">0</div>
          <div style="background:#FEF0EE;border-radius:6px;padding:2px 8px;font-size:9px;font-weight:700;color:#E74C3C;">RUPTURE</div>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <div style="font-size:10px;color:#6B7A8D;">Seuil réappro: <span style="color:#E74C3C;font-weight:700;">30 unités</span></div>
        <div style="font-size:10px;color:#6B7A8D;">Exp: <span style="color:#1A2332;font-weight:600;">30/06/2026</span></div>
      </div>
      <div style="display:flex;gap:6px;">
        <button onclick="showToast('Commande Ibuprofène envoyée')" style="flex:1;padding:8px;background:#E74C3C;color:#fff;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;">📦 Commander 150u</button>
        <button onclick="showToast('Fournisseur contacté')" style="padding:8px 12px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;">📞</button>
      </div>
    </div>

    <!-- SECTION: Critique -->
    <div style="font-size:10px;font-weight:800;color:#F39C12;text-transform:uppercase;letter-spacing:0.8px;margin-top:8px;margin-bottom:2px;">🟠 Stock critique</div>

    <!-- Produit critique 1 -->
    <div style="background:#fff;border-radius:14px;padding:13px 14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);border-left:4px solid #F39C12;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:700;color:#1A2332;">Amoxicilline 500mg</div>
          <div style="font-size:10px;color:#6B7A8D;margin-top:1px;">REF-024 · Antibiotique · BEECHAM</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:20px;font-weight:800;color:#F39C12;">18</div>
          <div style="background:#FEF9EE;border-radius:6px;padding:2px 8px;font-size:9px;font-weight:700;color:#F39C12;">CRITIQUE</div>
        </div>
      </div>
      <!-- Barre de stock -->
      <div style="background:#F0F4F8;border-radius:4px;height:5px;margin-bottom:8px;">
        <div style="background:#F39C12;border-radius:4px;height:5px;width:12%;"></div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <div style="font-size:10px;color:#6B7A8D;">Seuil réappro: <span style="color:#F39C12;font-weight:700;">50 unités</span></div>
        <div style="font-size:10px;color:#6B7A8D;">Exp: <span style="color:#1A2332;font-weight:600;">15/11/2026</span></div>
      </div>
      <div style="display:flex;gap:6px;">
        <button onclick="showToast('Commande Amoxicilline lancée')" style="flex:1;padding:8px;background:#FEF9EE;color:#F39C12;border:1px solid #F39C12;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;">📦 Réapprovisionner</button>
        <button onclick="showToast('Ajustement stock manuel')" style="padding:8px 12px;background:#F4F9FC;color:#6B7A8D;border:none;border-radius:8px;font-size:11px;cursor:pointer;">✏️</button>
      </div>
    </div>

    <!-- Produit critique 2 -->
    <div style="background:#fff;border-radius:14px;padding:13px 14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);border-left:4px solid #F39C12;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:700;color:#1A2332;">Artéméther 20mg/Luméfantrine</div>
          <div style="font-size:10px;color:#6B7A8D;margin-top:1px;">REF-055 · Antipaludéen · NOVARTIS</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:20px;font-weight:800;color:#F39C12;">24</div>
          <div style="background:#FEF9EE;border-radius:6px;padding:2px 8px;font-size:9px;font-weight:700;color:#F39C12;">CRITIQUE</div>
        </div>
      </div>
      <div style="background:#F0F4F8;border-radius:4px;height:5px;margin-bottom:8px;">
        <div style="background:#F39C12;border-radius:4px;height:5px;width:16%;"></div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <div style="font-size:10px;color:#6B7A8D;">Seuil réappro: <span style="color:#F39C12;font-weight:700;">60 unités</span></div>
        <div style="font-size:10px;color:#6B7A8D;">Exp: <span style="color:#1A2332;font-weight:600;">28/02/2027</span></div>
      </div>
      <div style="display:flex;gap:6px;">
        <button onclick="showToast('Commande antipaludéen lancée')" style="flex:1;padding:8px;background:#FEF9EE;color:#F39C12;border:1px solid #F39C12;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;">📦 Réapprovisionner</button>
        <button onclick="showToast('Ajustement stock manuel')" style="padding:8px 12px;background:#F4F9FC;color:#6B7A8D;border:none;border-radius:8px;font-size:11px;cursor:pointer;">✏️</button>
      </div>
    </div>

    <!-- SECTION: Stock OK -->
    <div style="font-size:10px;font-weight:800;color:#27AE60;text-transform:uppercase;letter-spacing:0.8px;margin-top:8px;margin-bottom:2px;">🟢 Stock normal</div>

    <!-- Produit OK 1 -->
    <div style="background:#fff;border-radius:14px;padding:13px 14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);border-left:4px solid #27AE60;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;">
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:700;color:#1A2332;">Metformine 850mg</div>
          <div style="font-size:10px;color:#6B7A8D;margin-top:1px;">REF-087 · Antidiabétique · MERCK</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:20px;font-weight:800;color:#27AE60;">245</div>
          <div style="background:#E8F7EE;border-radius:6px;padding:2px 8px;font-size:9px;font-weight:700;color:#27AE60;">OK</div>
        </div>
      </div>
      <div style="background:#F0F4F8;border-radius:4px;height:5px;margin-bottom:6px;">
        <div style="background:#27AE60;border-radius:4px;height:5px;width:82%;"></div>
      </div>
      <div style="display:flex;justify-content:space-between;">
        <div style="font-size:10px;color:#6B7A8D;">Rotation: <span style="font-weight:600;color:#1A2332;">~12 unités/jour</span></div>
        <div style="font-size:10px;color:#6B7A8D;">Exp: <span style="font-weight:600;color:#1A2332;">31/12/2026</span></div>
      </div>
    </div>

    <!-- Produit OK 2 -->
    <div style="background:#fff;border-radius:14px;padding:13px 14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);border-left:4px solid #27AE60;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;">
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:700;color:#1A2332;">Amlodipine 5mg</div>
          <div style="font-size:10px;color:#6B7A8D;margin-top:1px;">REF-103 · Antihypertenseur · PFIZER</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:20px;font-weight:800;color:#27AE60;">180</div>
          <div style="background:#E8F7EE;border-radius:6px;padding:2px 8px;font-size:9px;font-weight:700;color:#27AE60;">OK</div>
        </div>
      </div>
      <div style="background:#F0F4F8;border-radius:4px;height:5px;margin-bottom:6px;">
        <div style="background:#27AE60;border-radius:4px;height:5px;width:72%;"></div>
      </div>
      <div style="display:flex;justify-content:space-between;">
        <div style="font-size:10px;color:#6B7A8D;">Rotation: <span style="font-weight:600;color:#1A2332;">~8 unités/jour</span></div>
        <div style="font-size:10px;color:#6B7A8D;">Exp: <span style="font-weight:600;color:#1A2332;">28/02/2027</span></div>
      </div>
    </div>

    <!-- Produit OK 3 -->
    <div style="background:#fff;border-radius:14px;padding:13px 14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);border-left:4px solid #27AE60;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;">
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:700;color:#1A2332;">Cotrimoxazole 480mg</div>
          <div style="font-size:10px;color:#6B7A8D;margin-top:1px;">REF-122 · Antibiotique · GSK</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:20px;font-weight:800;color:#27AE60;">312</div>
          <div style="background:#E8F7EE;border-radius:6px;padding:2px 8px;font-size:9px;font-weight:700;color:#27AE60;">OK</div>
        </div>
      </div>
      <div style="background:#F0F4F8;border-radius:4px;height:5px;margin-bottom:6px;">
        <div style="background:#27AE60;border-radius:4px;height:5px;width:95%;"></div>
      </div>
      <div style="display:flex;justify-content:space-between;">
        <div style="font-size:10px;color:#6B7A8D;">Rotation: <span style="font-weight:600;color:#1A2332;">~5 unités/jour</span></div>
        <div style="font-size:10px;color:#6B7A8D;">Exp: <span style="font-weight:600;color:#1A2332;">30/09/2027</span></div>
      </div>
    </div>

    <!-- Produit périmé -->
    <div style="font-size:10px;font-weight:800;color:#9B59B6;text-transform:uppercase;letter-spacing:0.8px;margin-top:8px;margin-bottom:2px;">⚠️ À surveiller — Péremption proche</div>
    <div style="background:#fff;border-radius:14px;padding:13px 14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);border-left:4px solid #9B59B6;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:700;color:#1A2332;">Doxycycline 100mg</div>
          <div style="font-size:10px;color:#6B7A8D;margin-top:1px;">REF-066 · Antibiotique · PFIZER</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:20px;font-weight:800;color:#9B59B6;">47</div>
          <div style="background:#F3E8FF;border-radius:6px;padding:2px 8px;font-size:9px;font-weight:700;color:#9B59B6;">23 JOURS</div>
        </div>
      </div>
      <div style="background:#FEF9EE;border-radius:8px;padding:8px 10px;margin-bottom:8px;display:flex;align-items:center;gap:6px;">
        <span style="font-size:14px;">⚠️</span>
        <div style="font-size:10px;color:#9B59B6;font-weight:600;">Expiration le 08/05/2026 — Retour fournisseur possible</div>
      </div>
      <div style="display:flex;gap:6px;">
        <button onclick="showToast('Retour fournisseur initié')" style="flex:1;padding:8px;background:#F3E8FF;color:#9B59B6;border:1px solid #9B59B6;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;">↩️ Retour fournisseur</button>
        <button onclick="showToast('Promotion activée sur Doxycycline')" style="flex:1;padding:8px;background:#F4F9FC;color:#6B7A8D;border:none;border-radius:8px;font-size:11px;font-weight:600;cursor:pointer;">💸 Promotion</button>
      </div>
    </div>

    <!-- Bouton voir tout -->
    <button onclick="showToast('Affichage des 312 références…')" style="width:100%;padding:13px;background:#fff;color:#0F3F54;border:2px solid #0F3F54;border-radius:14px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Voir toutes les références (312)</button>

  </div>

  <!-- FAB Commande groupée -->
  <div style="position:absolute;bottom:20px;right:16px;">
    <button onclick="showToast('Bon de commande groupée généré !')" style="background:linear-gradient(135deg,#0F3F54,#1A6B50);color:#fff;border:none;border-radius:50px;padding:13px 20px;font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;cursor:pointer;box-shadow:0 6px 20px rgba(15,63,84,0.4);display:flex;align-items:center;gap:8px;">
      <span style="font-size:16px;">📦</span> Bon de commande
    </button>
  </div>

</div>

<script>
window.switchStockTab = function(tab, el) {
  ['all','rupture','critique','ok','perime'].forEach(function(t) {
    var btn = document.getElementById('stab-' + t);
    if (!btn) return;
    if (t === tab) {
      btn.style.background = '#0F3F54';
      btn.style.color = '#fff';
    } else {
      btn.style.background = '#F4F9FC';
      btn.style.color = t==='rupture'?'#E74C3C':t==='critique'?'#F39C12':t==='ok'?'#27AE60':t==='perime'?'#9B59B6':'#6B7A8D';
    }
  });
  var labels = {all:'Tous les médicaments',rupture:'Ruptures de stock',critique:'Stock critique',ok:'Stock normal',perime:'Périmés / Péremption proche'};
  showToast('📦 ' + (labels[tab]||tab));
};
</script>

<!-- ========================================
     SCREEN 39 — PHARMACIEN STATS MOBILE
======================================== -->
<div class="screen" id="screen42" data-device="mobile">
  <div style="background:#0F3F54;padding:54px 20px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;">
      <button onclick="goToScreen(20)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Statistiques</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
      <div style="background:#1A6B8A;border-radius:14px;padding:14px;"><div style="font-size:11px;color:rgba(255,255,255,0.7);margin-bottom:4px;">Validées ce mois</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;color:#fff;">1 892</div></div>
      <div style="background:#27AE60;border-radius:14px;padding:14px;"><div style="font-size:11px;color:rgba(255,255,255,0.7);margin-bottom:4px;">Taux validation</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;color:#fff;">97%</div></div>
      <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);"><div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">Temps moyen</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;color:#1A2332;">8 min</div></div>
      <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);"><div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">Patients actifs</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;color:#1A2332;">234</div></div>
    </div>
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:13px;font-weight:700;color:#1A2332;margin-bottom:12px;">Activité cette semaine</div>
      <div style="display:flex;align-items:flex-end;gap:6px;height:70px;">
        <div style="display:flex;flex-direction:column;align-items:center;gap:3px;flex:1;"><div style="width:100%;background:#E8F4F8;border-radius:4px 4px 0 0;height:30px;"></div><div style="font-size:9px;color:#6B7A8D;">Lun</div></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:3px;flex:1;"><div style="width:100%;background:#1A6B8A;border-radius:4px 4px 0 0;height:55px;"></div><div style="font-size:9px;color:#6B7A8D;">Mar</div></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:3px;flex:1;"><div style="width:100%;background:#1A6B8A;border-radius:4px 4px 0 0;height:45px;"></div><div style="font-size:9px;color:#6B7A8D;">Mer</div></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:3px;flex:1;"><div style="width:100%;background:#27AE60;border-radius:4px 4px 0 0;height:65px;"></div><div style="font-size:9px;color:#6B7A8D;">Jeu</div></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:3px;flex:1;"><div style="width:100%;background:#1A6B8A;border-radius:4px 4px 0 0;height:50px;"></div><div style="font-size:9px;color:#6B7A8D;">Ven</div></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:3px;flex:1;"><div style="width:100%;background:#E8F4F8;border-radius:4px 4px 0 0;height:20px;"></div><div style="font-size:9px;color:#6B7A8D;">Sam</div></div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 40 — PHARMACIEN PARAMÈTRES
======================================== -->
<div class="screen" id="screen43" data-device="mobile">
  <div style="background:#0F3F54;padding:54px 20px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;">
      <button onclick="goToScreen(20)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Paramètres Pro</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;">
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);display:flex;align-items:center;gap:12px;">
      <div style="width:48px;height:48px;background:#E8F4F8;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;">👩‍⚕️</div>
      <div><div style="font-size:15px;font-weight:700;color:#1A2332;">Dr. Sophie Lefebvre</div><div style="font-size:12px;color:#6B7A8D;">Pharmacien chef · Ordre CI #4521</div></div>
    </div>
    <div style="background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="padding:14px 16px;border-bottom:1px solid #F4F9FC;display:flex;justify-content:space-between;cursor:pointer;" onclick="showToast('Horaires')"><span style="font-size:13px;font-weight:600;color:#1A2332;">🕐 Horaires d'ouverture</span><span style="color:#6B7A8D;">→</span></div>
      <div style="padding:14px 16px;border-bottom:1px solid #F4F9FC;display:flex;justify-content:space-between;cursor:pointer;" onclick="showToast('Signature')"><span style="font-size:13px;font-weight:600;color:#1A2332;">✍️ Signature numérique</span><span style="color:#6B7A8D;">→</span></div>
      <div style="padding:14px 16px;display:flex;justify-content:space-between;cursor:pointer;" onclick="showToast('Alertes stock')"><span style="font-size:13px;font-weight:600;color:#1A2332;">📦 Alertes de stock</span><span style="color:#6B7A8D;">→</span></div>
    </div>
    <div style="background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="padding:14px 16px;border-bottom:1px solid #F4F9FC;display:flex;justify-content:space-between;cursor:pointer;" onclick="showToast('2FA')"><span style="font-size:13px;font-weight:600;color:#1A2332;">🔐 Authentification 2FA</span><span style="background:#E8F7EE;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;color:#27AE60;">Activé</span></div>
      <div style="padding:14px 16px;display:flex;justify-content:space-between;cursor:pointer;" onclick="showToast('Journal activité')"><span style="font-size:13px;font-weight:600;color:#1A2332;">📋 Journal d'activité</span><span style="color:#6B7A8D;">→</span></div>
    </div>
    <button onclick="goToScreen(19)" style="width:100%;padding:14px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">Se déconnecter</button>
  </div>
</div>

<!-- ========================================
     SCREEN 41 — SCAN QR CODE (PATIENT)
======================================== -->
<div class="screen" id="screen45" data-device="mobile">
  <div style="background:linear-gradient(135deg,#0F3F54,#1A6B8A);padding:54px 20px 24px;flex-shrink:0;text-align:center;">
    <button onclick="goToScreen(32)" style="position:absolute;top:54px;left:20px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
    <div style="width:72px;height:72px;background:rgba(255,255,255,0.2);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:32px;margin:0 auto 12px;">👩‍⚕️</div>
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:800;color:#fff;">Dr. Sophie Lefebvre</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.7);margin-top:4px;">Pharmacien · Ordre CI #4521</div>
    <div style="display:flex;justify-content:center;gap:8px;margin-top:12px;"><div style="background:rgba(255,255,255,0.15);border-radius:50px;padding:4px 12px;font-size:11px;color:rgba(255,255,255,0.8);">⭐ 4.9</div><div style="background:rgba(255,255,255,0.15);border-radius:50px;padding:4px 12px;font-size:11px;color:rgba(255,255,255,0.8);">128 avis</div><div style="background:rgba(39,174,96,0.3);border-radius:50px;padding:4px 12px;font-size:11px;color:#4ADE80;">● Disponible</div></div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;gap:8px;">
      <button onclick="goToScreen(16)" style="flex:1;padding:12px;background:#1A6B8A;color:#fff;border:none;border-radius:12px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">💬 Contacter</button>
      <button onclick="goToScreen(9)" style="flex:1;padding:12px;background:#fff;color:#1A6B8A;border:1.5px solid #1A6B8A;border-radius:12px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📋 Commander</button>
    </div>
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:13px;font-weight:700;color:#1A2332;margin-bottom:8px;">Spécialités</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px;"><div style="background:#E8F4F8;border-radius:50px;padding:4px 10px;font-size:11px;color:#1A6B8A;font-weight:600;">Antibiotiques</div><div style="background:#E8F4F8;border-radius:50px;padding:4px 10px;font-size:11px;color:#1A6B8A;font-weight:600;">Diabète</div><div style="background:#E8F4F8;border-radius:50px;padding:4px 10px;font-size:11px;color:#1A6B8A;font-weight:600;">Pédiatrie</div><div style="background:#E8F4F8;border-radius:50px;padding:4px 10px;font-size:11px;color:#1A6B8A;font-weight:600;">Urgences</div></div>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 43 — AVIS & NOTES
======================================== -->
<div class="screen" id="screen53" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:linear-gradient(135deg,#0F3F54,#1A6B8A);padding:52px 20px 20px;">
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#fff;margin-bottom:12px;">Activation du compte pharmacien</div>
    <!-- Progress steps -->
    <div style="display:flex;align-items:center;justify-content:space-between;">
      <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
        <div style="width:28px;height:28px;background:#27AE60;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;color:#fff;font-weight:700;">✓</div>
        <div style="font-size:9px;color:rgba(255,255,255,0.7);text-align:center;">Profil</div>
      </div>
      <div style="flex:1;height:2px;background:rgba(255,255,255,0.3);margin:0 4px;"></div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
        <div style="width:28px;height:28px;background:#1A6B8A;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;color:#fff;font-weight:700;border:2px solid rgba(255,255,255,0.5);">2</div>
        <div style="font-size:9px;color:#fff;text-align:center;font-weight:700;">Justificatifs</div>
      </div>
      <div style="flex:1;height:2px;background:rgba(255,255,255,0.2);margin:0 4px;"></div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
        <div style="width:28px;height:28px;background:rgba(255,255,255,0.15);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;color:rgba(255,255,255,0.6);font-weight:700;border:1.5px solid rgba(255,255,255,0.2);">3</div>
        <div style="font-size:9px;color:rgba(255,255,255,0.5);text-align:center;">Notifs</div>
      </div>
      <div style="flex:1;height:2px;background:rgba(255,255,255,0.1);margin:0 4px;"></div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
        <div style="width:28px;height:28px;background:rgba(255,255,255,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;color:rgba(255,255,255,0.5);font-weight:700;">4</div>
        <div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;">Démo</div>
      </div>
      <div style="flex:1;height:2px;background:rgba(255,255,255,0.1);margin:0 4px;"></div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
        <div style="width:28px;height:28px;background:rgba(255,255,255,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;color:rgba(255,255,255,0.5);font-weight:700;">5</div>
        <div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;">Confirm.</div>
      </div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;">
    <!-- Step 2: Documents -->
    <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;margin-bottom:4px;">Étape 2 · Justificatifs professionnels</div>
      <div style="font-size:12px;color:#6B7A8D;margin-bottom:16px;">Uploadez vos documents pour vérification par notre équipe</div>
      <!-- Upload zones -->
      <div style="display:flex;flex-direction:column;gap:10px;">
        <div style="border:2px dashed #27AE60;border-radius:12px;padding:14px;display:flex;align-items:center;gap:10px;background:#E8F7EE;cursor:pointer;" onclick="showToast('Carte pro importée ✓')">
          <div style="font-size:22px;">🪪</div>
          <div>
            <div style="font-size:13px;font-weight:700;color:#27AE60;">Carte professionnelle ✓</div>
            <div style="font-size:11px;color:#6B7A8D;">carte_pro_lefebvre.pdf</div>
          </div>
          <div style="margin-left:auto;font-size:16px;color:#27AE60;">✓</div>
        </div>
        <div style="border:2px dashed #E2ECF2;border-radius:12px;padding:14px;display:flex;align-items:center;gap:10px;cursor:pointer;" onclick="showToast('Sélectionner diplôme')">
          <div style="font-size:22px;">🎓</div>
          <div>
            <div style="font-size:13px;font-weight:600;color:#1A2332;">Diplôme de pharmacie</div>
            <div style="font-size:11px;color:#6B7A8D;">PDF, JPG, PNG · max 5 Mo</div>
          </div>
          <div style="margin-left:auto;background:#F4F9FC;border:1.5px solid #E2ECF2;border-radius:8px;padding:4px 10px;font-size:11px;font-weight:700;color:#1A6B8A;">Importer</div>
        </div>
        <div style="border:2px dashed #E2ECF2;border-radius:12px;padding:14px;display:flex;align-items:center;gap:10px;cursor:pointer;" onclick="showToast('Sélectionner numéro ordre')">
          <div style="font-size:22px;">📋</div>
          <div>
            <div style="font-size:13px;font-weight:600;color:#1A2332;">Numéro Ordre des Pharmaciens</div>
            <div style="font-size:11px;color:#6B7A8D;">Attestation d'inscription</div>
          </div>
          <div style="margin-left:auto;background:#F4F9FC;border:1.5px solid #E2ECF2;border-radius:8px;padding:4px 10px;font-size:11px;font-weight:700;color:#1A6B8A;">Importer</div>
        </div>
      </div>
    </div>
    <div style="background:#E8F4F8;border-radius:12px;padding:12px;display:flex;gap:8px;align-items:flex-start;">
      <span style="font-size:16px;">ℹ️</span>
      <div style="font-size:12px;color:#1A6B8A;line-height:1.5;">La vérification prend généralement 24-48h ouvrées. Vous serez notifié par email et SMS dès la validation.</div>
    </div>
    <div style="display:flex;gap:8px;">
      <button onclick="goToScreen(19)" style="padding:13px;background:#F4F9FC;color:#6B7A8D;border:1.5px solid #E2ECF2;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;flex:1;">← Précédent</button>
      <button onclick="showToast('Étape 3 : Notifications !')" style="padding:13px;background:linear-gradient(135deg,#1A6B8A,#2196B3);color:#fff;border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;flex:2;">Continuer →</button>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 51 — LIVREUR LOGIN
======================================== -->
<div class="screen" id="screen75" data-device="mobile" style="background:#F4F9FC;display:flex;flex-direction:column;">

  <!-- Header -->
  <div style="background:linear-gradient(135deg,#0B3D2E,#1A6B50);padding:52px 16px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
      <button onclick="goToScreen(20)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:36px;height:36px;color:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;">←</button>
      <div style="flex:1;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:17px;font-weight:800;color:#fff;">Équipe Pharmaciens</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.65);">Pharmacie du Plateau · 5 membres</div>
      </div>
      <button onclick="showToast('➕ Inviter un nouveau pharmacien')" style="background:rgba(255,255,255,0.15);border:1.5px solid rgba(255,255,255,0.3);border-radius:10px;padding:6px 12px;color:#fff;font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap;">+ Inviter</button>
    </div>
    <!-- Stats rapides équipe -->
    <div style="display:flex;gap:8px;">
      <div style="flex:1;background:rgba(74,222,128,0.2);border:1px solid rgba(74,222,128,0.3);border-radius:12px;padding:10px;text-align:center;">
        <div style="font-size:20px;font-weight:800;color:#fff;font-family:'Plus Jakarta Sans',sans-serif;">3</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.7);">En service</div>
      </div>
      <div style="flex:1;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:12px;padding:10px;text-align:center;">
        <div style="font-size:20px;font-weight:800;color:#fff;font-family:'Plus Jakarta Sans',sans-serif;">1</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.7);">En pause</div>
      </div>
      <div style="flex:1;background:rgba(156,163,175,0.2);border:1px solid rgba(156,163,175,0.3);border-radius:12px;padding:10px;text-align:center;">
        <div style="font-size:20px;font-weight:800;color:#fff;font-family:'Plus Jakarta Sans',sans-serif;">1</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.7);">Hors service</div>
      </div>
      <div style="flex:1;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:12px;padding:10px;text-align:center;">
        <div style="font-size:18px;font-weight:800;color:#fff;font-family:'Plus Jakarta Sans',sans-serif;">32</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.7);">Ord. totales</div>
      </div>
    </div>
  </div>

  <!-- Liste pharmaciens -->
  <div style="flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px;">

    <!-- Section: En service -->
    <div style="font-size:11px;font-weight:700;color:#6B7A8D;letter-spacing:0.6px;text-transform:uppercase;padding:2px 0;">🟢 En service maintenant</div>

    <!-- Pharmacien 1 — Responsable -->
    <div style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.06);">
      <div style="height:4px;background:linear-gradient(90deg,#1A6B50,#27AE60);"></div>
      <div style="padding:14px;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
          <div style="position:relative;flex-shrink:0;">
            <div style="width:52px;height:52px;background:linear-gradient(135deg,#1A6B50,#27AE60);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px;">👩‍⚕️</div>
            <div style="position:absolute;bottom:0;right:0;width:14px;height:14px;background:#27AE60;border-radius:50%;border:2px solid #fff;"></div>
          </div>
          <div style="flex:1;">
            <div style="display:flex;align-items:center;gap:6px;">
              <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">Dr. Sophie Lefebvre</div>
              <div style="background:#E8F4F8;color:#1A6B8A;border-radius:6px;padding:1px 6px;font-size:9px;font-weight:700;">RESPONSABLE</div>
            </div>
            <div style="font-size:11px;color:#6B7A8D;margin-top:2px;">Pharmacienne titulaire · Ordre CI #4521</div>
            <div style="font-size:10px;color:#27AE60;font-weight:600;margin-top:1px;">⏰ 08h00 – 16h00 · En service depuis 4h12</div>
          </div>
        </div>
        <!-- Stats du jour -->
        <div style="display:flex;gap:8px;margin-bottom:12px;">
          <div style="flex:1;background:#F4F9FC;border-radius:10px;padding:8px;text-align:center;">
            <div style="font-size:16px;font-weight:800;color:#1A2332;">14</div>
            <div style="font-size:9px;color:#6B7A8D;">Ordonnances</div>
          </div>
          <div style="flex:1;background:#F4F9FC;border-radius:10px;padding:8px;text-align:center;">
            <div style="font-size:16px;font-weight:800;color:#1A2332;">8 min</div>
            <div style="font-size:9px;color:#6B7A8D;">Temps moyen</div>
          </div>
          <div style="flex:1;background:#F4F9FC;border-radius:10px;padding:8px;text-align:center;">
            <div style="font-size:16px;font-weight:800;color:#1A6B50;">87K</div>
            <div style="font-size:9px;color:#6B7A8D;">CA (F CFA)</div>
          </div>
          <div style="flex:1;background:#F4F9FC;border-radius:10px;padding:8px;text-align:center;">
            <div style="font-size:16px;font-weight:800;color:#F39C12;">★4.9</div>
            <div style="font-size:9px;color:#6B7A8D;">Note</div>
          </div>
        </div>
        <!-- Actions -->
        <div style="display:flex;gap:8px;">
          <button onclick="showToast('📞 Appel Dr. Sophie Lefebvre')" style="flex:1;padding:9px;background:#E8F7EE;color:#1A6B50;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📞 Contacter</button>
          <button onclick="showToast('📅 Planning Dr. Lefebvre modifié')" style="flex:1;padding:9px;background:#F4F9FC;color:#1A2332;border:1.5px solid #E2ECF2;border-radius:10px;font-size:12px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">📅 Planning</button>
          <button onclick="showToast('👁️ Activité détaillée')" style="padding:9px 12px;background:#F4F9FC;color:#1A2332;border:1.5px solid #E2ECF2;border-radius:10px;font-size:12px;cursor:pointer;">›</button>
        </div>
      </div>
    </div>

    <!-- Pharmacien 2 — Adjoint -->
    <div style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.06);">
      <div style="height:4px;background:linear-gradient(90deg,#1A6B8A,#2196B3);"></div>
      <div style="padding:14px;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
          <div style="position:relative;flex-shrink:0;">
            <div style="width:52px;height:52px;background:linear-gradient(135deg,#0F3F54,#1A6B8A);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px;">👨‍⚕️</div>
            <div style="position:absolute;bottom:0;right:0;width:14px;height:14px;background:#27AE60;border-radius:50%;border:2px solid #fff;"></div>
          </div>
          <div style="flex:1;">
            <div style="display:flex;align-items:center;gap:6px;">
              <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">Dr. Konan Yao</div>
              <div style="background:#E8F4F8;color:#1A6B8A;border-radius:6px;padding:1px 6px;font-size:9px;font-weight:700;">ADJOINT</div>
            </div>
            <div style="font-size:11px;color:#6B7A8D;margin-top:2px;">Pharmacien adjoint · Ordre CI #3882</div>
            <div style="font-size:10px;color:#27AE60;font-weight:600;margin-top:1px;">⏰ 09h00 – 17h00 · En service depuis 3h02</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;margin-bottom:12px;">
          <div style="flex:1;background:#F4F9FC;border-radius:10px;padding:8px;text-align:center;">
            <div style="font-size:16px;font-weight:800;color:#1A2332;">10</div>
            <div style="font-size:9px;color:#6B7A8D;">Ordonnances</div>
          </div>
          <div style="flex:1;background:#F4F9FC;border-radius:10px;padding:8px;text-align:center;">
            <div style="font-size:16px;font-weight:800;color:#1A2332;">11 min</div>
            <div style="font-size:9px;color:#6B7A8D;">Temps moyen</div>
          </div>
          <div style="flex:1;background:#F4F9FC;border-radius:10px;padding:8px;text-align:center;">
            <div style="font-size:16px;font-weight:800;color:#1A6B50;">63K</div>
            <div style="font-size:9px;color:#6B7A8D;">CA (F CFA)</div>
          </div>
          <div style="flex:1;background:#F4F9FC;border-radius:10px;padding:8px;text-align:center;">
            <div style="font-size:16px;font-weight:800;color:#F39C12;">★4.7</div>
            <div style="font-size:9px;color:#6B7A8D;">Note</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;">
          <button onclick="showToast('📞 Appel Dr. Konan Yao')" style="flex:1;padding:9px;background:#E8F7EE;color:#1A6B50;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📞 Contacter</button>
          <button onclick="showToast('📅 Planning Dr. Konan modifié')" style="flex:1;padding:9px;background:#F4F9FC;color:#1A2332;border:1.5px solid #E2ECF2;border-radius:10px;font-size:12px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">📅 Planning</button>
          <button onclick="showToast('👁️ Activité détaillée')" style="padding:9px 12px;background:#F4F9FC;color:#1A2332;border:1.5px solid #E2ECF2;border-radius:10px;font-size:12px;cursor:pointer;">›</button>
        </div>
      </div>
    </div>

    <!-- Section: En pause -->
    <div style="font-size:11px;font-weight:700;color:#6B7A8D;letter-spacing:0.6px;text-transform:uppercase;padding:6px 0 2px;">⏸ En pause</div>

    <!-- Pharmacien 3 — Préparatrice -->
    <div style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.06);opacity:0.9;">
      <div style="height:4px;background:linear-gradient(90deg,#F39C12,#e67e22);"></div>
      <div style="padding:14px;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
          <div style="position:relative;flex-shrink:0;">
            <div style="width:52px;height:52px;background:linear-gradient(135deg,#F39C12,#e67e22);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px;">👩‍⚕️</div>
            <div style="position:absolute;bottom:0;right:0;width:14px;height:14px;background:#F39C12;border-radius:50%;border:2px solid #fff;"></div>
          </div>
          <div style="flex:1;">
            <div style="display:flex;align-items:center;gap:6px;">
              <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">Aminata Traoré</div>
              <div style="background:#FEF9EE;color:#F39C12;border-radius:6px;padding:1px 6px;font-size:9px;font-weight:700;">PRÉPARATRICE</div>
            </div>
            <div style="font-size:11px;color:#6B7A8D;margin-top:2px;">Préparatrice en pharmacie · OFPPT #1204</div>
            <div style="font-size:10px;color:#F39C12;font-weight:600;margin-top:1px;">⏸ Pause déjeuner · Reprend à 14h00</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;margin-bottom:12px;">
          <div style="flex:1;background:#F4F9FC;border-radius:10px;padding:8px;text-align:center;">
            <div style="font-size:16px;font-weight:800;color:#1A2332;">8</div>
            <div style="font-size:9px;color:#6B7A8D;">Ordonnances</div>
          </div>
          <div style="flex:1;background:#F4F9FC;border-radius:10px;padding:8px;text-align:center;">
            <div style="font-size:16px;font-weight:800;color:#1A2332;">14 min</div>
            <div style="font-size:9px;color:#6B7A8D;">Temps moyen</div>
          </div>
          <div style="flex:1;background:#F4F9FC;border-radius:10px;padding:8px;text-align:center;">
            <div style="font-size:16px;font-weight:800;color:#1A6B50;">41K</div>
            <div style="font-size:9px;color:#6B7A8D;">CA (F CFA)</div>
          </div>
          <div style="flex:1;background:#F4F9FC;border-radius:10px;padding:8px;text-align:center;">
            <div style="font-size:16px;font-weight:800;color:#F39C12;">★4.6</div>
            <div style="font-size:9px;color:#6B7A8D;">Note</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;">
          <button onclick="showToast('📞 Appel Aminata Traoré')" style="flex:1;padding:9px;background:#FEF9EE;color:#F39C12;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📞 Contacter</button>
          <button onclick="showToast('📅 Planning Aminata modifié')" style="flex:1;padding:9px;background:#F4F9FC;color:#1A2332;border:1.5px solid #E2ECF2;border-radius:10px;font-size:12px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">📅 Planning</button>
          <button onclick="showToast('👁️ Activité détaillée')" style="padding:9px 12px;background:#F4F9FC;color:#1A2332;border:1.5px solid #E2ECF2;border-radius:10px;font-size:12px;cursor:pointer;">›</button>
        </div>
      </div>
    </div>

    <!-- Section: Hors service -->
    <div style="font-size:11px;font-weight:700;color:#6B7A8D;letter-spacing:0.6px;text-transform:uppercase;padding:6px 0 2px;">⚫ Hors service aujourd'hui</div>

    <!-- Pharmacien 4 -->
    <div style="background:#fff;border-radius:16px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05);opacity:0.7;display:flex;align-items:center;gap:12px;">
      <div style="position:relative;flex-shrink:0;">
        <div style="width:48px;height:48px;background:#E2ECF2;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;">👨‍⚕️</div>
        <div style="position:absolute;bottom:0;right:0;width:14px;height:14px;background:#9CA3AF;border-radius:50%;border:2px solid #fff;"></div>
      </div>
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:700;color:#1A2332;">Dr. Ibrahim Touré</div>
        <div style="font-size:11px;color:#6B7A8D;">Pharmacien · Ordre CI #2997 · Repos hebdomadaire</div>
        <div style="font-size:10px;color:#9CA3AF;margin-top:2px;">Prochain service : Jeudi 17 avril · 08h–16h</div>
      </div>
      <button onclick="showToast('📩 Message envoyé à Dr. Ibrahim Touré')" style="background:#F4F9FC;border:1.5px solid #E2ECF2;border-radius:10px;padding:8px 10px;font-size:11px;color:#6B7A8D;cursor:pointer;">✉️</button>
    </div>

    <!-- Pharmacien 5 — En congé -->
    <div style="background:#fff;border-radius:16px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05);opacity:0.7;display:flex;align-items:center;gap:12px;">
      <div style="position:relative;flex-shrink:0;">
        <div style="width:48px;height:48px;background:#E2ECF2;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;">👩‍⚕️</div>
        <div style="position:absolute;bottom:0;right:0;width:14px;height:14px;background:#9CA3AF;border-radius:50%;border:2px solid #fff;"></div>
      </div>
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:700;color:#1A2332;">Fatoumata Diallo</div>
        <div style="font-size:11px;color:#6B7A8D;">Technicienne pharmacie · Congé annuel</div>
        <div style="font-size:10px;color:#9CA3AF;margin-top:2px;">Retour le 22 avril 2026</div>
      </div>
      <button onclick="showToast('📩 Message envoyé à Fatoumata Diallo')" style="background:#F4F9FC;border:1.5px solid #E2ECF2;border-radius:10px;padding:8px 10px;font-size:11px;color:#6B7A8D;cursor:pointer;">✉️</button>
    </div>

    <!-- Planning semaine -->
    <div style="background:#fff;border-radius:16px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;margin-bottom:12px;">📅 Planning cette semaine</div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        <div style="display:flex;align-items:center;gap:10px;padding:8px 10px;background:#E8F7EE;border-radius:10px;">
          <span style="font-size:11px;font-weight:700;color:#1A2332;width:32px;">Mar</span>
          <div style="flex:1;height:8px;background:#E2ECF2;border-radius:4px;overflow:hidden;"><div style="width:80%;height:100%;background:linear-gradient(90deg,#1A6B50,#27AE60);border-radius:4px;"></div></div>
          <span style="font-size:10px;color:#27AE60;font-weight:700;">4/5 actifs</span>
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding:8px 10px;background:#F4F9FC;border-radius:10px;">
          <span style="font-size:11px;font-weight:700;color:#1A2332;width:32px;">Mer</span>
          <div style="flex:1;height:8px;background:#E2ECF2;border-radius:4px;overflow:hidden;"><div style="width:60%;height:100%;background:linear-gradient(90deg,#1A6B8A,#2196B3);border-radius:4px;"></div></div>
          <span style="font-size:10px;color:#1A6B8A;font-weight:700;">3/5 actifs</span>
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding:8px 10px;background:#F4F9FC;border-radius:10px;">
          <span style="font-size:11px;font-weight:700;color:#1A2332;width:32px;">Jeu</span>
          <div style="flex:1;height:8px;background:#E2ECF2;border-radius:4px;overflow:hidden;"><div style="width:100%;height:100%;background:linear-gradient(90deg,#1A6B50,#27AE60);border-radius:4px;"></div></div>
          <span style="font-size:10px;color:#27AE60;font-weight:700;">5/5 actifs</span>
        </div>
      </div>
      <button onclick="showToast('📅 Éditeur de planning ouvert')" style="width:100%;margin-top:10px;padding:11px;background:linear-gradient(135deg,#0B3D2E,#1A6B50);color:#fff;border:none;border-radius:12px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Modifier le planning complet</button>
    </div>

    <!-- Bouton ajouter -->
    <button onclick="showToast('➕ Formulaire d\'ajout de pharmacien')" style="width:100%;padding:14px;background:#fff;color:#1A6B50;border:2px dashed #1A6B50;border-radius:14px;font-size:14px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">➕ Ajouter un pharmacien à l'équipe</button>

    <div style="height:10px;"></div>
  </div>
</div>

<!-- ========================================
     SCREEN 34 — MON PROFIL PATIENT
======================================== -->
<div class="screen" id="screen84" data-device="mobile" style="background:linear-gradient(160deg,#0D3B2E 0%,#1A6B50 55%,#0F3F54 100%);">
  <div style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px 24px;position:relative;overflow:hidden;">
    <!-- Cercles déco -->
    <div style="position:absolute;top:-60px;right:-60px;width:200px;height:200px;border-radius:50%;background:rgba(255,255,255,0.04);"></div>
    <div style="position:absolute;bottom:-80px;left:-50px;width:250px;height:250px;border-radius:50%;background:rgba(255,255,255,0.03);"></div>

    <!-- Logo -->
    <div style="width:80px;height:80px;border-radius:24px;background:rgba(255,255,255,0.12);border:2px solid rgba(255,255,255,0.25);display:flex;align-items:center;justify-content:center;font-size:36px;margin-bottom:20px;">👨‍⚕️</div>
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;font-weight:800;color:#fff;margin-bottom:6px;text-align:center;">Espace Pharmacien</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.65);margin-bottom:8px;text-align:center;">Connexion à votre espace personnel</div>
    <div style="background:rgba(39,174,96,0.25);border:1px solid rgba(39,174,96,0.4);border-radius:20px;padding:4px 14px;font-size:11px;font-weight:700;color:#4ADE80;margin-bottom:28px;">Accrédité OPCI · Côte d'Ivoire</div>

    <!-- Formulaire -->
    <div style="width:100%;display:flex;flex-direction:column;gap:12px;margin-bottom:16px;">
      <div style="background:rgba(255,255,255,0.1);border:1.5px solid rgba(255,255,255,0.2);border-radius:14px;padding:14px 16px;display:flex;align-items:center;gap:10px;">
        <span style="font-size:16px;">🪪</span>
        <input placeholder="N° Ordre des Pharmaciens" style="background:none;border:none;outline:none;color:#fff;font-size:14px;font-family:'DM Sans',sans-serif;flex:1;::placeholder{color:rgba(255,255,255,0.4)};" />
      </div>
      <div style="background:rgba(255,255,255,0.1);border:1.5px solid rgba(255,255,255,0.2);border-radius:14px;padding:14px 16px;display:flex;align-items:center;gap:10px;">
        <span style="font-size:16px;">🏥</span>
        <input placeholder="Code pharmacie employeur" style="background:none;border:none;outline:none;color:#fff;font-size:14px;font-family:'DM Sans',sans-serif;flex:1;" />
      </div>
      <div style="background:rgba(255,255,255,0.1);border:1.5px solid rgba(255,255,255,0.2);border-radius:14px;padding:14px 16px;display:flex;align-items:center;gap:10px;">
        <span style="font-size:16px;">🔒</span>
        <input type="password" placeholder="Mot de passe" style="background:none;border:none;outline:none;color:#fff;font-size:14px;font-family:'DM Sans',sans-serif;flex:1;" />
      </div>
    </div>

    <button onclick="goToScreen(85)" style="width:100%;padding:16px;background:linear-gradient(135deg,#27AE60,#1A6B50);color:#fff;border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:800;cursor:pointer;margin-bottom:16px;box-shadow:0 8px 24px rgba(39,174,96,0.35);">
      👨‍⚕️ Me connecter
    </button>

    <div style="text-align:center;">
      <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-bottom:8px;">Vous êtes responsable d'officine ?</div>
      <button onclick="goToScreen(19)" style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:20px;padding:8px 20px;font-size:12px;font-weight:700;color:#fff;cursor:pointer;">🏥 Connexion Espace Pharmacie</button>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 85 — DASHBOARD PHARMACIEN INDIVIDUEL
======================================== -->
<div class="screen" id="screen85" data-device="mobile" style="background:#F4F9FC;display:flex;flex-direction:column;">
  <!-- Header -->
  <div style="background:linear-gradient(135deg,#0D3B2E 0%,#1A6B50 100%);padding:52px 20px 20px;flex-shrink:0;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
      <div>
        <div style="font-size:12px;color:rgba(255,255,255,0.65);margin-bottom:2px;">Mercredi 15 Avril 2026</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:800;color:#fff;">Bonjour, Dr. Konan 👋</div>
        <div style="font-size:12px;color:rgba(255,255,255,0.7);margin-top:2px;">Pharmacie du Plateau · Adjoint</div>
      </div>
      <div style="display:flex;align-items:center;gap:10px;">
        <button onclick="openDrawer('pharmacien-indiv')" style="background:rgba(255,255,255,0.15);border:none;border-radius:10px;width:38px;height:38px;color:#fff;font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center;">☰</button>
        <div style="position:relative;cursor:pointer;" onclick="openDrawer('pharmacien-indiv')">
          <div style="width:46px;height:46px;border-radius:50%;background:linear-gradient(135deg,#27AE60,#1A6B50);display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid rgba(255,255,255,0.3);">👨‍⚕️</div>
          <div style="position:absolute;bottom:2px;right:2px;width:12px;height:12px;background:#4ADE80;border-radius:50%;border:2px solid #1A6B50;"></div>
        </div>
      </div>
    </div>

    <!-- Statut service -->
    <div style="background:rgba(255,255,255,0.12);border-radius:14px;padding:12px 14px;display:flex;align-items:center;justify-content:space-between;">
      <div style="display:flex;align-items:center;gap:8px;">
        <div style="width:10px;height:10px;background:#4ADE80;border-radius:50%;"></div>
        <div>
          <div style="font-size:12px;font-weight:700;color:#fff;">En service</div>
          <div style="font-size:10px;color:rgba(255,255,255,0.6);">Depuis 08h00 · Poste Mer.</div>
        </div>
      </div>
      <button onclick="showToast('Statut mis en pause')" style="background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.25);border-radius:20px;padding:6px 14px;font-size:11px;font-weight:700;color:#fff;cursor:pointer;">⏸ Pause</button>
    </div>
  </div>

  <!-- KPIs du jour -->
  <div style="padding:14px 16px 0;flex-shrink:0;">
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
      <div style="background:#fff;border-radius:12px;padding:10px 6px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <div style="font-size:20px;font-weight:800;color:#1A6B50;">10</div>
        <div style="font-size:9px;color:#6B7A8D;margin-top:2px;line-height:1.2;">Ord. traitées</div>
      </div>
      <div style="background:#fff;border-radius:12px;padding:10px 6px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <div style="font-size:20px;font-weight:800;color:#F39C12;">3</div>
        <div style="font-size:9px;color:#6B7A8D;margin-top:2px;line-height:1.2;">En attente</div>
      </div>
      <div style="background:#fff;border-radius:12px;padding:10px 6px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <div style="font-size:20px;font-weight:800;color:#1A2332;">11'</div>
        <div style="font-size:9px;color:#6B7A8D;margin-top:2px;line-height:1.2;">Tps moyen</div>
      </div>
      <div style="background:#fff;border-radius:12px;padding:10px 6px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <div style="font-size:20px;font-weight:800;color:#27AE60;">4.7</div>
        <div style="font-size:9px;color:#6B7A8D;margin-top:2px;line-height:1.2;">★ Note</div>
      </div>
    </div>
  </div>

  <!-- Contenu scrollable -->
  <div style="flex:1;overflow-y:auto;padding:14px 16px 80px;display:flex;flex-direction:column;gap:14px;">

    <!-- Ordonnances urgentes -->
    <div style="background:#FEF0EE;border-radius:14px;padding:13px 14px;border-left:4px solid #E74C3C;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <div style="font-size:13px;font-weight:800;color:#E74C3C;">🚨 Ordonnance urgente</div>
        <div style="font-size:10px;color:#E74C3C;font-weight:600;">Il y a 3 min</div>
      </div>
      <div style="font-size:12px;color:#1A2332;font-weight:600;margin-bottom:2px;">Aicha Diallo — #ORD-2024-089</div>
      <div style="font-size:11px;color:#6B7A8D;margin-bottom:10px;">Metformine 850mg · Amlodipine 5mg · Atorvastatine 20mg</div>
      <button onclick="goToScreen(87)" style="width:100%;padding:10px;background:#E74C3C;color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Traiter maintenant →</button>
    </div>

    <!-- Mes ordonnances du jour -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <div style="font-size:13px;font-weight:800;color:#1A2332;">📋 Mes ordonnances du jour</div>
        <button onclick="goToScreen(86)" style="background:none;border:none;font-size:12px;font-weight:700;color:#1A6B50;cursor:pointer;">Voir tout →</button>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;justify-content:space-between;align-items:center;padding:10px;background:#F4F9FC;border-radius:10px;">
          <div><div style="font-size:12px;font-weight:700;color:#1A2332;">Kofi Mensah</div><div style="font-size:10px;color:#6B7A8D;">#ORD-2024-088 · 3 médicaments</div></div>
          <div style="background:#FEF9EE;border-radius:8px;padding:4px 10px;font-size:10px;font-weight:700;color:#F39C12;">En cours</div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:10px;background:#F4F9FC;border-radius:10px;">
          <div><div style="font-size:12px;font-weight:700;color:#1A2332;">Marie Ouédraogo</div><div style="font-size:10px;color:#6B7A8D;">#ORD-2024-085 · 2 médicaments</div></div>
          <div style="background:#E8F7EE;border-radius:8px;padding:4px 10px;font-size:10px;font-weight:700;color:#27AE60;">Validée</div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:10px;background:#F4F9FC;border-radius:10px;">
          <div><div style="font-size:12px;font-weight:700;color:#1A2332;">Seydou Traoré</div><div style="font-size:10px;color:#6B7A8D;">#ORD-2024-083 · 4 médicaments</div></div>
          <div style="background:#E8F7EE;border-radius:8px;padding:4px 10px;font-size:10px;font-weight:700;color:#27AE60;">Validée</div>
        </div>
      </div>
    </div>

    <!-- Mon planning semaine -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:13px;font-weight:800;color:#1A2332;margin-bottom:12px;">📅 Mon planning — Semaine</div>
      <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:4px;">
        <div style="text-align:center;">
          <div style="font-size:9px;color:#6B7A8D;margin-bottom:4px;">Lun</div>
          <div style="background:#E8F7EE;border-radius:8px;padding:6px 2px;font-size:9px;font-weight:700;color:#27AE60;">✓<br>08-16h</div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:9px;color:#6B7A8D;margin-bottom:4px;">Mar</div>
          <div style="background:#E8F7EE;border-radius:8px;padding:6px 2px;font-size:9px;font-weight:700;color:#27AE60;">✓<br>08-16h</div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:9px;color:#6B7A8D;margin-bottom:4px;">Mer</div>
          <div style="background:#0D3B2E;border-radius:8px;padding:6px 2px;font-size:9px;font-weight:700;color:#fff;">▶<br>08-16h</div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:9px;color:#6B7A8D;margin-bottom:4px;">Jeu</div>
          <div style="background:#F4F9FC;border-radius:8px;padding:6px 2px;font-size:9px;font-weight:700;color:#6B7A8D;">—<br>Repos</div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:9px;color:#6B7A8D;margin-bottom:4px;">Ven</div>
          <div style="background:#F4F9FC;border-radius:8px;padding:6px 2px;font-size:9px;font-weight:700;color:#1A2332;">⏳<br>09-17h</div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:9px;color:#6B7A8D;margin-bottom:4px;">Sam</div>
          <div style="background:#F4F9FC;border-radius:8px;padding:6px 2px;font-size:9px;font-weight:700;color:#1A2332;">⏳<br>08-13h</div>
        </div>
      </div>
    </div>

    <!-- Performance mensuelle -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:13px;font-weight:800;color:#1A2332;margin-bottom:12px;">📊 Ma performance — Avril 2026</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;">
        <div style="background:#E8F7EE;border-radius:12px;padding:12px;text-align:center;">
          <div style="font-size:22px;font-weight:800;color:#1A6B50;">247</div>
          <div style="font-size:10px;color:#6B7A8D;margin-top:2px;">Ordonnances validées</div>
        </div>
        <div style="background:#E8F4F8;border-radius:12px;padding:12px;text-align:center;">
          <div style="font-size:22px;font-weight:800;color:#1A6B8A;">63K</div>
          <div style="font-size:10px;color:#6B7A8D;margin-top:2px;">CA généré (FCFA)</div>
        </div>
      </div>
      <!-- Mini graph barres -->
      <div style="display:flex;align-items:flex-end;gap:5px;height:50px;">
        <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;"><div style="width:100%;background:#C8E6C9;border-radius:3px 3px 0 0;height:30px;"></div><div style="font-size:8px;color:#9CA8B4;">S1</div></div>
        <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;"><div style="width:100%;background:#1A6B50;border-radius:3px 3px 0 0;height:42px;"></div><div style="font-size:8px;color:#9CA8B4;">S2</div></div>
        <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;"><div style="width:100%;background:#1A6B50;border-radius:3px 3px 0 0;height:38px;"></div><div style="font-size:8px;color:#9CA8B4;">S3</div></div>
        <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;"><div style="width:100%;background:#C8E6C9;border-radius:3px 3px 0 0;height:20px;"></div><div style="font-size:8px;color:#9CA8B4;">S4▶</div></div>
      </div>
    </div>

    <!-- Messages & notifications -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <div style="font-size:13px;font-weight:800;color:#1A2332;">💬 Messages</div>
        <div style="background:#E74C3C;border-radius:50%;width:18px;height:18px;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;color:#fff;">2</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:center;gap:10px;cursor:pointer;" onclick="showToast('Message Dr. Lefebvre ouvert')">
          <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#27AE60,#1A6B50);display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">👩‍⚕️</div>
          <div style="flex:1;"><div style="font-size:12px;font-weight:700;color:#1A2332;">Dr. Sophie Lefebvre</div><div style="font-size:10px;color:#6B7A8D;">Responsable · Rappel formation DPC 14h</div></div>
          <div style="font-size:9px;color:#E74C3C;font-weight:700;">NEW</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;cursor:pointer;" onclick="showToast('Message système ouvert')">
          <div style="width:36px;height:36px;border-radius:50%;background:#E8F4F8;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">🏥</div>
          <div style="flex:1;"><div style="font-size:12px;font-weight:700;color:#1A2332;">Pharmacie du Plateau</div><div style="font-size:10px;color:#6B7A8D;">Nouveau protocole Amoxicilline — à lire</div></div>
          <div style="font-size:9px;color:#E74C3C;font-weight:700;">NEW</div>
        </div>
      </div>
    </div>

  </div>

  <!-- Bottom nav -->
  <div style="background:#fff;border-top:1px solid #E8EDF2;display:flex;padding:10px 0 18px;flex-shrink:0;">
    <div onclick="goToScreen(85)" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;">
      <div style="font-size:20px;">🏠</div><div style="font-size:9px;font-weight:700;color:#1A6B50;">Accueil</div>
    </div>
    <div onclick="goToScreen(86)" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;">
      <div style="font-size:20px;">📋</div><div style="font-size:9px;color:#6B7A8D;">Ordonnances</div>
    </div>
    <div onclick="goToScreen(89)" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;">
      <div style="font-size:20px;">👥</div><div style="font-size:9px;color:#6B7A8D;">Patients</div>
    </div>
    <div onclick="goToScreen(88)" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;">
      <div style="font-size:20px;">👨‍⚕️</div><div style="font-size:9px;color:#6B7A8D;">Mon profil</div>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 86 — MES ORDONNANCES (PHARMACIEN)
======================================== -->
<div class="screen" id="screen86" data-device="mobile" style="background:#F4F9FC;display:flex;flex-direction:column;">
  <!-- Header -->
  <div style="background:linear-gradient(135deg,#0D3B2E,#1A6B50);padding:52px 20px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
      <button onclick="goToScreen(85)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Mes Ordonnances</div>
      <button onclick="openDrawer('pharmacien-indiv')" style="background:rgba(255,255,255,0.15);border:none;border-radius:10px;width:34px;height:34px;color:#fff;font-size:18px;cursor:pointer;">☰</button>
    </div>
    <!-- Filtres rapides -->
    <div style="display:flex;gap:6px;">
      <button style="padding:6px 14px;border-radius:20px;border:none;background:#fff;color:#0D3B2E;font-size:11px;font-weight:700;cursor:pointer;">Toutes</button>
      <button style="padding:6px 14px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:#fff;font-size:11px;font-weight:600;cursor:pointer;">En attente</button>
      <button style="padding:6px 14px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:#fff;font-size:11px;font-weight:600;cursor:pointer;">En cours</button>
      <button style="padding:6px 14px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:#fff;font-size:11px;font-weight:600;cursor:pointer;">Validées</button>
    </div>
  </div>

  <div style="flex:1;overflow-y:auto;padding:14px 16px;display:flex;flex-direction:column;gap:10px;">

    <!-- Urgente -->
    <div style="font-size:10px;font-weight:800;color:#E74C3C;text-transform:uppercase;letter-spacing:0.8px;">🚨 Urgentes</div>
    <div onclick="goToScreen(87)" style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);border-left:4px solid #E74C3C;cursor:pointer;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
        <div>
          <div style="font-size:13px;font-weight:700;color:#1A2332;">Aicha Diallo</div>
          <div style="font-size:10px;color:#6B7A8D;">#ORD-2024-089 · Il y a 3 min</div>
        </div>
        <div style="background:#FEF0EE;border-radius:8px;padding:4px 10px;font-size:10px;font-weight:700;color:#E74C3C;">URGENT</div>
      </div>
      <div style="font-size:11px;color:#6B7A8D;margin-bottom:10px;">Metformine 850mg · Amlodipine 5mg · Atorvastatine 20mg</div>
      <div style="display:flex;gap:6px;">
        <button onclick="event.stopPropagation();goToScreen(87)" style="flex:1;padding:8px;background:#E74C3C;color:#fff;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;">▶ Traiter</button>
        <button onclick="event.stopPropagation();showToast('Patient contacté')" style="padding:8px 12px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:8px;font-size:11px;cursor:pointer;">📞</button>
      </div>
    </div>

    <!-- En attente -->
    <div style="font-size:10px;font-weight:800;color:#F39C12;text-transform:uppercase;letter-spacing:0.8px;margin-top:4px;">⏳ En attente</div>

    <div onclick="goToScreen(87)" style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);border-left:4px solid #F39C12;cursor:pointer;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;">
        <div><div style="font-size:13px;font-weight:700;color:#1A2332;">Kofi Mensah</div><div style="font-size:10px;color:#6B7A8D;">#ORD-2024-088 · Il y a 23 min</div></div>
        <div style="background:#FEF9EE;border-radius:8px;padding:4px 10px;font-size:10px;font-weight:700;color:#F39C12;">ATTENTE</div>
      </div>
      <div style="font-size:11px;color:#6B7A8D;">Amoxicilline 500mg · Paracétamol 1g</div>
    </div>

    <div onclick="goToScreen(87)" style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);border-left:4px solid #F39C12;cursor:pointer;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;">
        <div><div style="font-size:13px;font-weight:700;color:#1A2332;">Fatou Bamba</div><div style="font-size:10px;color:#6B7A8D;">#ORD-2024-086 · Il y a 45 min</div></div>
        <div style="background:#FEF9EE;border-radius:8px;padding:4px 10px;font-size:10px;font-weight:700;color:#F39C12;">ATTENTE</div>
      </div>
      <div style="font-size:11px;color:#6B7A8D;">Cotrimoxazole 480mg · Ibuprofène 400mg · Zinc 20mg</div>
    </div>

    <!-- Traitées aujourd'hui -->
    <div style="font-size:10px;font-weight:800;color:#27AE60;text-transform:uppercase;letter-spacing:0.8px;margin-top:4px;">✅ Traitées aujourd'hui (10)</div>

    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:8px;border-bottom:1px solid #F0F4F8;">
          <div><div style="font-size:12px;font-weight:600;color:#1A2332;">Marie Ouédraogo</div><div style="font-size:10px;color:#6B7A8D;">#ORD-2024-085 · 08h42</div></div>
          <div style="background:#E8F7EE;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;color:#27AE60;">✓ Validée</div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:8px;border-bottom:1px solid #F0F4F8;">
          <div><div style="font-size:12px;font-weight:600;color:#1A2332;">Seydou Traoré</div><div style="font-size:10px;color:#6B7A8D;">#ORD-2024-083 · 08h15</div></div>
          <div style="background:#E8F7EE;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;color:#27AE60;">✓ Validée</div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div><div style="font-size:12px;font-weight:600;color:#6B7A8D;">+ 8 autres traitées</div></div>
          <button onclick="showToast('Historique complet')" style="background:none;border:none;font-size:11px;font-weight:700;color:#1A6B50;cursor:pointer;">Voir →</button>
        </div>
      </div>
    </div>

  </div>
</div>

<!-- ========================================
     SCREEN 87 — DÉTAIL ORDONNANCE (PHARMACIEN)
======================================== -->
<div class="screen" id="screen87" data-device="mobile" style="background:#F4F9FC;display:flex;flex-direction:column;">
  <!-- Header -->
  <div style="background:linear-gradient(135deg,#0D3B2E,#1A6B50);padding:52px 20px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
      <button onclick="goToScreen(86)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:800;color:#fff;">Traiter l'ordonnance</div>
      <button onclick="openDrawer('pharmacien-indiv')" style="background:rgba(255,255,255,0.15);border:none;border-radius:10px;width:34px;height:34px;color:#fff;font-size:18px;cursor:pointer;">☰</button>
    </div>
    <div style="background:rgba(255,255,255,0.1);border-radius:12px;padding:10px 14px;display:flex;justify-content:space-between;">
      <div><div style="font-size:11px;color:rgba(255,255,255,0.6);">Ordonnance</div><div style="font-size:13px;font-weight:700;color:#fff;">#ORD-2024-089</div></div>
      <div><div style="font-size:11px;color:rgba(255,255,255,0.6);">Patient</div><div style="font-size:13px;font-weight:700;color:#fff;">Aicha Diallo</div></div>
      <div><div style="font-size:11px;color:rgba(255,255,255,0.6);">Médecin</div><div style="font-size:13px;font-weight:700;color:#fff;">Dr. Amadou D.</div></div>
    </div>
  </div>

  <div style="flex:1;overflow-y:auto;padding:14px 16px 100px;display:flex;flex-direction:column;gap:12px;">

    <!-- Alertes patient -->
    <div style="background:#FEF0EE;border-radius:12px;padding:12px 14px;display:flex;gap:10px;align-items:flex-start;">
      <span style="font-size:18px;">⚠️</span>
      <div>
        <div style="font-size:12px;font-weight:700;color:#E74C3C;margin-bottom:3px;">Alertes patient</div>
        <div style="font-size:11px;color:#E74C3C;">Allergie: Pénicilline · Groupe sanguin: A+</div>
        <div style="font-size:11px;color:#E74C3C;margin-top:2px;">Pathologie: Diabète type 2 · Hypertension</div>
      </div>
    </div>

    <!-- Médicaments prescrits -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:13px;font-weight:800;color:#1A2332;margin-bottom:12px;">💊 Médicaments prescrits</div>

      <!-- Med 1 -->
      <div style="padding:10px;background:#E8F7EE;border-radius:10px;margin-bottom:8px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
          <div style="font-size:12px;font-weight:700;color:#1A2332;">Metformine 850mg</div>
          <div style="background:#27AE60;border-radius:6px;padding:2px 8px;font-size:9px;font-weight:700;color:#fff;">245 en stock ✓</div>
        </div>
        <div style="font-size:11px;color:#6B7A8D;">2 cp/jour · Matin & Soir · 30 jours</div>
        <div style="font-size:10px;color:#27AE60;font-weight:600;margin-top:4px;">✓ Aucune interaction connue</div>
      </div>

      <!-- Med 2 -->
      <div style="padding:10px;background:#E8F7EE;border-radius:10px;margin-bottom:8px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
          <div style="font-size:12px;font-weight:700;color:#1A2332;">Amlodipine 5mg</div>
          <div style="background:#27AE60;border-radius:6px;padding:2px 8px;font-size:9px;font-weight:700;color:#fff;">180 en stock ✓</div>
        </div>
        <div style="font-size:11px;color:#6B7A8D;">1 cp/jour · Matin · 30 jours</div>
        <div style="font-size:10px;color:#27AE60;font-weight:600;margin-top:4px;">✓ Aucune interaction connue</div>
      </div>

      <!-- Med 3 -->
      <div style="padding:10px;background:#FEF9EE;border-radius:10px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
          <div style="font-size:12px;font-weight:700;color:#1A2332;">Atorvastatine 20mg</div>
          <div style="background:#F39C12;border-radius:6px;padding:2px 8px;font-size:9px;font-weight:700;color:#fff;">32 en stock ⚠️</div>
        </div>
        <div style="font-size:11px;color:#6B7A8D;">1 cp/soir · 30 jours</div>
        <div style="font-size:10px;color:#F39C12;font-weight:600;margin-top:4px;">⚠️ Vérifier interaction Metformine (faible risque)</div>
      </div>
    </div>

    <!-- Mode délivrance -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:13px;font-weight:800;color:#1A2332;margin-bottom:10px;">🚚 Mode de délivrance</div>
      <div style="display:flex;gap:8px;">
        <div onclick="this.style.borderColor='#1A6B50';this.style.background='#E8F7EE';document.getElementById('del-other').style.borderColor='#E2ECF2';document.getElementById('del-other').style.background='#F4F9FC'" style="flex:1;padding:12px;border:2px solid #1A6B50;border-radius:12px;background:#E8F7EE;text-align:center;cursor:pointer;">
          <div style="font-size:18px;margin-bottom:4px;">🏪</div>
          <div style="font-size:11px;font-weight:700;color:#1A6B50;">Sur place</div>
        </div>
        <div id="del-other" onclick="this.style.borderColor='#1A6B50';this.style.background='#E8F7EE';this.previousElementSibling.style.borderColor='#E2ECF2';this.previousElementSibling.style.background='#F4F9FC'" style="flex:1;padding:12px;border:2px solid #E2ECF2;border-radius:12px;background:#F4F9FC;text-align:center;cursor:pointer;">
          <div style="font-size:18px;margin-bottom:4px;">🛵</div>
          <div style="font-size:11px;font-weight:700;color:#6B7A8D;">Livraison</div>
        </div>
      </div>
    </div>

    <!-- Notes pharmacien -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:13px;font-weight:800;color:#1A2332;margin-bottom:8px;">📝 Notes pour le patient</div>
      <textarea placeholder="Ajouter des instructions de prise, conseils…" style="width:100%;padding:10px;border:1.5px solid #E2ECF2;border-radius:10px;font-size:12px;font-family:'DM Sans',sans-serif;resize:none;outline:none;height:70px;color:#1A2332;box-sizing:border-box;"></textarea>
    </div>

  </div>

  <!-- Boutons action fixes -->
  <div style="padding:12px 16px 24px;background:#fff;border-top:1px solid #E8EDF2;display:flex;gap:8px;flex-shrink:0;">
    <button onclick="showToast('Ordonnance refusée — patient notifié')" style="flex:1;padding:14px;background:#FEF0EE;color:#E74C3C;border:1.5px solid #E74C3C;border-radius:14px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">✗ Refuser</button>
    <button onclick="showToast('✅ Ordonnance validée ! Préparation en cours…');goToScreen(86)" style="flex:2;padding:14px;background:linear-gradient(135deg,#27AE60,#1A6B50);color:#fff;border:none;border-radius:14px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">✓ Valider & Délivrer</button>
  </div>
</div>

<!-- ========================================
     SCREEN 88 — MON PROFIL PHARMACIEN
======================================== -->
<div class="screen" id="screen88" data-device="mobile" style="background:#F4F9FC;display:flex;flex-direction:column;">
  <!-- Header -->
  <div style="background:linear-gradient(135deg,#0D3B2E,#1A6B50);padding:52px 20px 24px;flex-shrink:0;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">
      <button onclick="openDrawer('pharmacien-indiv')" style="background:rgba(255,255,255,0.15);border:none;border-radius:10px;width:34px;height:34px;color:#fff;font-size:18px;cursor:pointer;">☰</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Mon Profil</div>
      <button onclick="showToast('Modifier le profil')" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:14px;cursor:pointer;">✏️</button>
    </div>
    <!-- Avatar + infos -->
    <div style="display:flex;flex-direction:column;align-items:center;gap:10px;">
      <div style="width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,#27AE60,#1A6B50);display:flex;align-items:center;justify-content:center;font-size:36px;border:3px solid rgba(255,255,255,0.35);">👨‍⚕️</div>
      <div style="text-align:center;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:800;color:#fff;">Dr. Konan Yao</div>
        <div style="font-size:12px;color:rgba(255,255,255,0.7);margin-top:2px;">Pharmacien Adjoint · Ordre CI #3882</div>
      </div>
      <div style="display:flex;gap:8px;">
        <div style="background:rgba(39,174,96,0.3);border:1px solid rgba(39,174,96,0.5);border-radius:20px;padding:4px 12px;font-size:11px;color:#4ADE80;font-weight:700;">✓ Accrédité OPCI</div>
        <div style="background:rgba(255,255,255,0.15);border-radius:20px;padding:4px 12px;font-size:11px;color:#fff;font-weight:700;">🟢 En service</div>
      </div>
    </div>
  </div>

  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;">

    <!-- Infos professionnelles -->
    <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:13px;font-weight:800;color:#1A2332;margin-bottom:12px;">👤 Informations professionnelles</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid #F0F4F8;">
          <div style="font-size:12px;color:#6B7A8D;">N° Ordre</div><div style="font-size:12px;font-weight:700;color:#1A2332;">CI-PH #3882</div>
        </div>
        <div style="display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid #F0F4F8;">
          <div style="font-size:12px;color:#6B7A8D;">Spécialité</div><div style="font-size:12px;font-weight:700;color:#1A2332;">Pharmacie officinale</div>
        </div>
        <div style="display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid #F0F4F8;">
          <div style="font-size:12px;color:#6B7A8D;">Poste</div><div style="font-size:12px;font-weight:700;color:#1A2332;">Adjoint</div>
        </div>
        <div style="display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid #F0F4F8;">
          <div style="font-size:12px;color:#6B7A8D;">Pharmacie</div><div style="font-size:12px;font-weight:700;color:#1A2332;">Pharmacie du Plateau</div>
        </div>
        <div style="display:flex;justify-content:space-between;">
          <div style="font-size:12px;color:#6B7A8D;">Expérience</div><div style="font-size:12px;font-weight:700;color:#1A2332;">6 ans</div>
        </div>
      </div>
    </div>

    <!-- Stats personnelles -->
    <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:13px;font-weight:800;color:#1A2332;margin-bottom:12px;">📊 Mes statistiques — Avril 2026</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div style="background:#E8F7EE;border-radius:12px;padding:12px;text-align:center;">
          <div style="font-size:22px;font-weight:800;color:#1A6B50;">247</div>
          <div style="font-size:10px;color:#6B7A8D;margin-top:2px;">Ordonnances validées</div>
        </div>
        <div style="background:#E8F4F8;border-radius:12px;padding:12px;text-align:center;">
          <div style="font-size:22px;font-weight:800;color:#1A6B8A;">11 min</div>
          <div style="font-size:10px;color:#6B7A8D;margin-top:2px;">Temps moyen</div>
        </div>
        <div style="background:#FEF9EE;border-radius:12px;padding:12px;text-align:center;">
          <div style="font-size:22px;font-weight:800;color:#F39C12;">63K</div>
          <div style="font-size:10px;color:#6B7A8D;margin-top:2px;">CA généré (FCFA)</div>
        </div>
        <div style="background:#F3E8FF;border-radius:12px;padding:12px;text-align:center;">
          <div style="font-size:22px;font-weight:800;color:#9B59B6;">★ 4.7</div>
          <div style="font-size:10px;color:#6B7A8D;margin-top:2px;">Note patients</div>
        </div>
      </div>
    </div>

    <!-- Certifications & formations -->
    <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:13px;font-weight:800;color:#1A2332;margin-bottom:12px;">🎓 Certifications & Formations DPC</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:center;gap:10px;padding:10px;background:#E8F7EE;border-radius:10px;">
          <div style="font-size:20px;">🏆</div>
          <div style="flex:1;"><div style="font-size:12px;font-weight:700;color:#1A2332;">Pharmacovigilance avancée</div><div style="font-size:10px;color:#27AE60;">Validé — Mars 2026</div></div>
          <div style="font-size:10px;font-weight:700;color:#27AE60;">✓</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding:10px;background:#E8F7EE;border-radius:10px;">
          <div style="font-size:20px;">🏆</div>
          <div style="flex:1;"><div style="font-size:12px;font-weight:700;color:#1A2332;">Gestion des interactions médicamenteuses</div><div style="font-size:10px;color:#27AE60;">Validé — Jan. 2026</div></div>
          <div style="font-size:10px;font-weight:700;color:#27AE60;">✓</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding:10px;background:#FEF9EE;border-radius:10px;">
          <div style="font-size:20px;">⏳</div>
          <div style="flex:1;"><div style="font-size:12px;font-weight:700;color:#1A2332;">Dispensation médicaments stupéfiants</div><div style="font-size:10px;color:#F39C12;">En cours — Échéance Juin 2026</div></div>
          <div style="font-size:10px;font-weight:700;color:#F39C12;">50%</div>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div style="display:flex;flex-direction:column;gap:8px;padding-bottom:20px;">
      <button onclick="showToast('Téléchargement carte professionnelle…')" style="padding:13px;background:#fff;color:#0D3B2E;border:2px solid #0D3B2E;border-radius:14px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">🪪 Télécharger ma carte professionnelle</button>
      <button onclick="showToast('Déconnexion…');goToScreen(84)" style="padding:13px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:14px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">↩️ Se déconnecter</button>
    </div>

  </div>
</div>

<!-- ========================================
     SCREEN 89 — MES PATIENTS (PHARMACIEN)
======================================== -->
<div class="screen" id="screen89" data-device="mobile" style="background:#F4F9FC;display:flex;flex-direction:column;">
  <!-- Header -->
  <div style="background:linear-gradient(135deg,#0D3B2E,#1A6B50);padding:52px 20px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
      <button onclick="goToScreen(85)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Mes Patients</div>
      <button onclick="openDrawer('pharmacien-indiv')" style="background:rgba(255,255,255,0.15);border:none;border-radius:10px;width:34px;height:34px;color:#fff;font-size:18px;cursor:pointer;">☰</button>
    </div>
    <!-- Barre de recherche -->
    <div style="background:rgba(255,255,255,0.15);border-radius:12px;padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <span style="font-size:14px;">🔍</span>
      <input placeholder="Rechercher un patient…" style="background:none;border:none;outline:none;color:#fff;font-size:13px;font-family:'DM Sans',sans-serif;flex:1;" />
    </div>
  </div>

  <!-- Filtres -->
  <div style="background:#fff;padding:10px 16px;display:flex;gap:6px;overflow-x:auto;border-bottom:1px solid #E8EDF2;flex-shrink:0;">
    <button onclick="showToast('Tous les patients')" style="padding:6px 14px;border-radius:20px;border:none;background:#0D3B2E;color:#fff;font-size:11px;font-weight:700;cursor:pointer;white-space:nowrap;">Tous (47)</button>
    <button onclick="showToast('Patients chroniques')" style="padding:6px 14px;border-radius:20px;border:none;background:#F4F9FC;color:#6B7A8D;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;">🔵 Chroniques (18)</button>
    <button onclick="showToast('Patients récents')" style="padding:6px 14px;border-radius:20px;border:none;background:#F4F9FC;color:#6B7A8D;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;">🕐 Récents (12)</button>
    <button onclick="showToast('Alertes')" style="padding:6px 14px;border-radius:20px;border:none;background:#F4F9FC;color:#E74C3C;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;">🚨 Alertes (3)</button>
  </div>

  <!-- Liste patients -->
  <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:8px;">

    <!-- Section: Alertes -->
    <div style="font-size:10px;font-weight:800;color:#E74C3C;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:2px;">🚨 Alertes — Renouvellement urgent</div>

    <!-- Patient 1 — alerte -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);border-left:4px solid #E74C3C;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
        <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#E74C3C,#c0392b);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;">👩</div>
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:700;color:#1A2332;">Aicha Diallo</div>
          <div style="font-size:10px;color:#6B7A8D;">42 ans · Diabète type 2 · Hypertension</div>
          <div style="font-size:10px;color:#E74C3C;font-weight:600;margin-top:2px;">⚠️ Allergie: Pénicilline</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:9px;color:#E74C3C;font-weight:700;">RENOUVELLEMENT</div>
          <div style="font-size:9px;color:#E74C3C;">Dans 2 jours</div>
        </div>
      </div>
      <div style="background:#FEF0EE;border-radius:8px;padding:8px 10px;margin-bottom:8px;">
        <div style="font-size:11px;color:#E74C3C;font-weight:600;">Metformine 850mg — Stock restant: 4 comprimés</div>
      </div>
      <div style="display:flex;gap:6px;">
        <button onclick="showToast('Ordonnance Aicha préparée')" style="flex:1;padding:8px;background:#E74C3C;color:#fff;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;">📋 Préparer renouvellement</button>
        <button onclick="showToast('Aicha Diallo contactée')" style="padding:8px 12px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:8px;font-size:11px;cursor:pointer;">📞</button>
      </div>
    </div>

    <!-- Patient 2 — alerte -->
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);border-left:4px solid #F39C12;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
        <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#F39C12,#E67E22);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;">👴</div>
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:700;color:#1A2332;">Kouassi Brou</div>
          <div style="font-size:10px;color:#6B7A8D;">68 ans · Hypertension · Cardiopathie</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:9px;color:#F39C12;font-weight:700;">RAPPEL</div>
          <div style="font-size:9px;color:#F39C12;">Ce soir 20h</div>
        </div>
      </div>
      <div style="font-size:11px;color:#6B7A8D;margin-bottom:8px;">Amlodipine 5mg — Rappel prise soir non confirmé</div>
      <button onclick="showToast('Rappel envoyé à Kouassi')" style="width:100%;padding:8px;background:#FEF9EE;color:#F39C12;border:1px solid #F39C12;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;">🔔 Envoyer rappel SMS</button>
    </div>

    <!-- Section: Patients chroniques -->
    <div style="font-size:10px;font-weight:800;color:#1A6B50;text-transform:uppercase;letter-spacing:0.8px;margin-top:8px;margin-bottom:2px;">🔵 Patients chroniques suivis</div>

    <!-- Patient 3 -->
    <div style="background:#fff;border-radius:14px;padding:13px 14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#1A6B50,#0D3B2E);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;">👨</div>
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:700;color:#1A2332;">Kofi Mensah</div>
          <div style="font-size:10px;color:#6B7A8D;">39 ans · Diabète · Hypertension</div>
          <div style="font-size:10px;color:#27AE60;font-weight:600;margin-top:2px;">Dernière visite: 08/04/2026</div>
        </div>
        <button onclick="showToast('Dossier Kofi ouvert')" style="background:#E8F7EE;border:none;border-radius:8px;padding:6px 10px;font-size:11px;font-weight:700;color:#27AE60;cursor:pointer;">Voir →</button>
      </div>
    </div>

    <!-- Patient 4 -->
    <div style="background:#fff;border-radius:14px;padding:13px 14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#9B59B6,#6C3483);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;">👩</div>
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:700;color:#1A2332;">Marie Ouédraogo</div>
          <div style="font-size:10px;color:#6B7A8D;">55 ans · Asthme · Arthrose</div>
          <div style="font-size:10px;color:#27AE60;font-weight:600;margin-top:2px;">Dernière visite: 08/04/2026</div>
        </div>
        <button onclick="showToast('Dossier Marie ouvert')" style="background:#E8F7EE;border:none;border-radius:8px;padding:6px 10px;font-size:11px;font-weight:700;color:#27AE60;cursor:pointer;">Voir →</button>
      </div>
    </div>

    <!-- Patient 5 -->
    <div style="background:#fff;border-radius:14px;padding:13px 14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#2D5BE3,#1A3A9C);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;">👨</div>
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:700;color:#1A2332;">Seydou Traoré</div>
          <div style="font-size:10px;color:#6B7A8D;">61 ans · Insuffisance cardiaque</div>
          <div style="font-size:10px;color:#27AE60;font-weight:600;margin-top:2px;">Dernière visite: 07/04/2026</div>
        </div>
        <button onclick="showToast('Dossier Seydou ouvert')" style="background:#E8F7EE;border:none;border-radius:8px;padding:6px 10px;font-size:11px;font-weight:700;color:#27AE60;cursor:pointer;">Voir →</button>
      </div>
    </div>

    <!-- Section: Récents -->
    <div style="font-size:10px;font-weight:800;color:#6B7A8D;text-transform:uppercase;letter-spacing:0.8px;margin-top:8px;margin-bottom:2px;">🕐 Passages récents</div>

    <div style="background:#fff;border-radius:14px;padding:13px 14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:36px;height:36px;border-radius:50%;background:#E8F4F8;display:flex;align-items:center;justify-content:center;font-size:16px;">👩</div>
            <div><div style="font-size:12px;font-weight:700;color:#1A2332;">Fatou Bamba</div><div style="font-size:10px;color:#6B7A8D;">Aujourd'hui · Antibiotiques</div></div>
          </div>
          <div style="font-size:10px;color:#27AE60;font-weight:600;">✓ Servi</div>
        </div>
        <div style="height:1px;background:#F0F4F8;"></div>
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:36px;height:36px;border-radius:50%;background:#E8F4F8;display:flex;align-items:center;justify-content:center;font-size:16px;">👦</div>
            <div><div style="font-size:12px;font-weight:700;color:#1A2332;">Yao Koffi</div><div style="font-size:10px;color:#6B7A8D;">Hier · Antipaludéens</div></div>
          </div>
          <div style="font-size:10px;color:#27AE60;font-weight:600;">✓ Servi</div>
        </div>
        <div style="height:1px;background:#F0F4F8;"></div>
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:36px;height:36px;border-radius:50%;background:#E8F4F8;display:flex;align-items:center;justify-content:center;font-size:16px;">👵</div>
            <div><div style="font-size:12px;font-weight:700;color:#1A2332;">Awa Koné</div><div style="font-size:10px;color:#6B7A8D;">Hier · Antihypertenseurs</div></div>
          </div>
          <div style="font-size:10px;color:#27AE60;font-weight:600;">✓ Servi</div>
        </div>
      </div>
    </div>

    <button onclick="showToast('Chargement de tous les patients…')" style="width:100%;padding:13px;background:#fff;color:#0D3B2E;border:2px solid #0D3B2E;border-radius:14px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;margin-bottom:4px;">Voir les 47 patients</button>

  </div>

  <!-- Bottom nav -->
  <div style="background:#fff;border-top:1px solid #E8EDF2;display:flex;padding:10px 0 18px;flex-shrink:0;">
    <div onclick="goToScreen(85)" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;">
      <div style="font-size:20px;">🏠</div><div style="font-size:9px;color:#6B7A8D;">Accueil</div>
    </div>
    <div onclick="goToScreen(86)" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;">
      <div style="font-size:20px;">📋</div><div style="font-size:9px;color:#6B7A8D;">Ordonnances</div>
    </div>
    <div onclick="goToScreen(89)" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;">
      <div style="font-size:20px;">👥</div><div style="font-size:9px;font-weight:700;color:#1A6B50;">Patients</div>
    </div>
    <div onclick="goToScreen(88)" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;">
      <div style="font-size:20px;">👨‍⚕️</div><div style="font-size:9px;color:#6B7A8D;">Mon profil</div>
    </div>
  </div>
</div>

    <!-- Floating Ask AI Button -->
    <div onclick="goToScreen(72)" style="position:absolute;bottom:80px;right:20px;background:linear-gradient(135deg,var(--primary),#2196B3);color:#fff;border-radius:50px;padding:12px 20px;display:flex;align-items:center;gap:8px;box-shadow:0 8px 24px rgba(26,107,138,0.4);cursor:pointer;z-index:900;transition:transform 0.2s;" onmousedown="this.style.transform='scale(0.95)'" onmouseup="this.style.transform='scale(1)'">
      <span style="font-size:20px;">🪄</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:800;">Ask AI</span>
    </div>
  </div><!-- end mobile-frame -->

  <!-- ====== WEB FRAME ====== -->
  <div class="web-frame" id="webFrame" style="display:none;">
    <div class="web-browser-bar">
      <div class="browser-dot red"></div>
      <div class="browser-dot yellow"></div>
      <div class="browser-dot green"></div>
      <div class="browser-url">🔒 &nbsp; ilera.africa</div>
    </div>

    <div class="browser-content">

      <!-- WEB SCREEN 1 — MARKETING HOME -->
<div class="web-screen" id="wscreen16">
  <div style="display:flex;height:100%;overflow:hidden;">
    <div style="width:220px;background:#0F3F54;display:flex;flex-direction:column;flex-shrink:0;overflow-y:auto;">
      <div style="padding:20px 16px;border-bottom:1px solid rgba(255,255,255,0.08);">
        <div style="display:flex;align-items:center;gap:8px;"><div style="width:28px;height:28px;background:rgba(255,255,255,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;">⚕️</div><span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#fff;">ILERA AFRICA Pro</span></div>
      </div>
      <nav style="flex:1;padding:12px 8px;display:flex;flex-direction:column;gap:2px;">
        <a onclick="goToWebScreen(16)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:rgba(255,255,255,0.12);border-radius:10px;color:#fff;cursor:pointer;font-size:13px;font-weight:600;font-family:'DM Sans',sans-serif;">📊 Tableau de bord</a>
        <a onclick="goToWebScreen(17)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📋 Ordonnances <span style="margin-left:auto;background:#E74C3C;color:#fff;border-radius:50%;width:18px;height:18px;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;">12</span></a>
        <a onclick="goToWebScreen(60)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">👥 Patients</a>
        <a onclick="goToWebScreen(19)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">⚗️ Interactions</a>
        <a onclick="goToWebScreen(21)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">💬 Messagerie <span style="margin-left:auto;background:#27AE60;color:#fff;border-radius:50%;width:18px;height:18px;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;">3</span></a>
        <a onclick="goToScreen(37)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">⚙️ Paramètres</a>
      </nav>
      <div style="padding:12px;border-top:1px solid rgba(255,255,255,0.08);">
        <div style="display:flex;align-items:center;gap:8px;padding:10px;background:rgba(255,255,255,0.06);border-radius:10px;margin-bottom:8px;">
          <div style="width:32px;height:32px;background:rgba(255,255,255,0.15);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;">👩‍⚕️</div>
          <div><div style="font-size:12px;font-weight:700;color:#fff;">Dr. S. Lefebvre</div><div style="font-size:10px;color:rgba(255,255,255,0.5);">Pharmacien chef</div></div>
        </div>
        <button onclick="goToWebScreen(15)" style="width:100%;padding:8px;background:rgba(231,76,60,0.15);color:rgba(255,255,255,0.7);border:1px solid rgba(231,76,60,0.2);border-radius:8px;font-size:12px;cursor:pointer;font-family:'DM Sans',sans-serif;">Déconnexion</button>
      </div>
    </div>
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;">
      <div style="background:#fff;padding:14px 24px;display:flex;justify-content:space-between;align-items:center;border-bottom:1.5px solid #E2ECF2;position:sticky;top:0;z-index:10;">
        <div style="font-size:12px;color:#6B7A8D;">Accueil › Tableau de bord</div>
        <div style="display:flex;align-items:center;gap:12px;"><div style="font-size:13px;color:#6B7A8D;">📅 14 octobre 2024</div><div style="position:relative;cursor:pointer;" onclick="showToast('3 notifications')"><div style="width:32px;height:32px;background:#F4F9FC;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;">🔔</div><div style="position:absolute;top:-2px;right:-2px;width:16px;height:16px;background:#E74C3C;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:#fff;">3</div></div></div>
      </div>
      <div style="padding:20px 24px;display:flex;flex-direction:column;gap:16px;">
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;">
          <div style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);border-top:3px solid #E74C3C;"><div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">En attente</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:800;color:#E74C3C;">12</div><div style="font-size:11px;color:#E74C3C;margin-top:4px;">🔴 Ordonnances</div></div>
          <div style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);border-top:3px solid #27AE60;"><div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">Validées aujourd'hui</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:800;color:#27AE60;">45</div><div style="font-size:11px;color:#27AE60;margin-top:4px;">🟢 Ordonnances</div></div>
          <div style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);border-top:3px solid #F39C12;"><div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">Interactions signalées</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:800;color:#F39C12;">3</div><div style="font-size:11px;color:#F39C12;margin-top:4px;">🟡 Alertes</div></div>
          <div style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);border-top:3px solid #1A6B8A;"><div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">Temps moy. validation</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:800;color:#1A6B8A;">8</div><div style="font-size:11px;color:#1A6B8A;margin-top:4px;">⏱️ minutes</div></div>
        </div>
        <div style="display:grid;grid-template-columns:1.3fr 0.7fr;gap:16px;">
          <div style="background:#fff;border-radius:14px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">Ordonnances urgentes</div><button onclick="goToWebScreen(17)" style="font-size:12px;color:#1A6B8A;background:none;border:none;cursor:pointer;font-weight:700;font-family:'DM Sans',sans-serif;">Voir tout →</button></div>
            <table style="width:100%;border-collapse:collapse;">
              <thead><tr style="border-bottom:1.5px solid #F4F9FC;"><th style="text-align:left;font-size:11px;color:#6B7A8D;padding:6px 0;font-weight:600;">Patient</th><th style="font-size:11px;color:#6B7A8D;padding:6px;font-weight:600;text-align:left;">Heure</th><th style="font-size:11px;color:#6B7A8D;padding:6px;font-weight:600;text-align:left;">Urgence</th><th style="font-size:11px;color:#6B7A8D;padding:6px 0;font-weight:600;text-align:left;">Action</th></tr></thead>
              <tbody>
                <tr style="border-bottom:1px solid #F4F9FC;"><td style="padding:8px 0;"><div style="font-size:12px;font-weight:700;color:#1A2332;">Aïcha Diallo</div><div style="font-size:10px;color:#6B7A8D;">#ORD-089</div></td><td style="padding:8px;font-size:12px;color:#6B7A8D;">09:30</td><td style="padding:8px;"><span style="background:#FEF0EE;color:#E74C3C;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;">URGENT</span></td><td style="padding:8px 0;"><button onclick="goToWebScreen(18)" style="padding:5px 12px;background:#1A6B8A;color:#fff;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Traiter</button></td></tr>
                <tr style="border-bottom:1px solid #F4F9FC;"><td style="padding:8px 0;"><div style="font-size:12px;font-weight:700;color:#1A2332;">Kofi Mensah</div><div style="font-size:10px;color:#6B7A8D;">#ORD-088</div></td><td style="padding:8px;font-size:12px;color:#6B7A8D;">09:08</td><td style="padding:8px;"><span style="background:#E8F4F8;color:#1A6B8A;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:600;">NORMAL</span></td><td style="padding:8px 0;"><button onclick="goToWebScreen(18)" style="padding:5px 12px;background:#1A6B8A;color:#fff;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Traiter</button></td></tr>
                <tr style="border-bottom:1px solid #F4F9FC;"><td style="padding:8px 0;"><div style="font-size:12px;font-weight:700;color:#1A2332;">Fatou Traoré</div><div style="font-size:10px;color:#6B7A8D;">#ORD-087</div></td><td style="padding:8px;font-size:12px;color:#6B7A8D;">08:47</td><td style="padding:8px;"><span style="background:#E8F4F8;color:#1A6B8A;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:600;">NORMAL</span></td><td style="padding:8px 0;"><button onclick="goToWebScreen(18)" style="padding:5px 12px;background:#1A6B8A;color:#fff;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Traiter</button></td></tr>
                <tr><td style="padding:8px 0;"><div style="font-size:12px;font-weight:700;color:#1A2332;">Aminata Coulibaly</div><div style="font-size:10px;color:#6B7A8D;">#ORD-086</div></td><td style="padding:8px;font-size:12px;color:#6B7A8D;">08:12</td><td style="padding:8px;"><span style="background:#FEF0EE;color:#E74C3C;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;">URGENT</span></td><td style="padding:8px 0;"><button onclick="goToWebScreen(18)" style="padding:5px 12px;background:#1A6B8A;color:#fff;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Traiter</button></td></tr>
              </tbody>
            </table>
          </div>
          <div style="background:#fff;border-radius:14px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
            <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;margin-bottom:14px;">Activité récente</div>
            <div style="display:flex;flex-direction:column;gap:10px;">
              <div style="display:flex;gap:10px;align-items:flex-start;"><div style="width:8px;height:8px;background:#27AE60;border-radius:50%;flex-shrink:0;margin-top:4px;"></div><div><div style="font-size:12px;font-weight:600;color:#1A2332;">#ORD-085 validée</div><div style="font-size:11px;color:#6B7A8D;">M. Koné · 5 min</div></div></div>
              <div style="display:flex;gap:10px;align-items:flex-start;"><div style="width:8px;height:8px;background:#F39C12;border-radius:50%;flex-shrink:0;margin-top:4px;"></div><div><div style="font-size:12px;font-weight:600;color:#1A2332;">Interaction signalée</div><div style="font-size:11px;color:#6B7A8D;">Warfarine + Amox · 12 min</div></div></div>
              <div style="display:flex;gap:10px;align-items:flex-start;"><div style="width:8px;height:8px;background:#1A6B8A;border-radius:50%;flex-shrink:0;margin-top:4px;"></div><div><div style="font-size:12px;font-weight:600;color:#1A2332;">QR Code généré</div><div style="font-size:11px;color:#6B7A8D;">#ORD-084 · 28 min</div></div></div>
              <div style="display:flex;gap:10px;align-items:flex-start;"><div style="width:8px;height:8px;background:#E74C3C;border-radius:50%;flex-shrink:0;margin-top:4px;"></div><div><div style="font-size:12px;font-weight:600;color:#1A2332;">Ordonnance rejetée</div><div style="font-size:11px;color:#6B7A8D;">#ORD-083 · 45 min</div></div></div>
            </div>
          </div>
        </div>
        <!-- Bar chart -->
        <div style="background:#fff;border-radius:14px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;margin-bottom:14px;">Validations par heure — Aujourd'hui</div>
          <div style="display:flex;align-items:flex-end;gap:6px;height:90px;">
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;"><div style="width:100%;background:#E8F4F8;border-radius:4px 4px 0 0;height:20px;"></div><div style="font-size:10px;color:#6B7A8D;">07h</div></div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;"><div style="width:100%;background:#1A6B8A;border-radius:4px 4px 0 0;height:44px;position:relative;"><div style="position:absolute;bottom:100%;left:50%;transform:translateX(-50%);font-size:10px;font-weight:700;color:#1A6B8A;white-space:nowrap;margin-bottom:2px;">6</div></div><div style="font-size:10px;color:#6B7A8D;">08h</div></div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;"><div style="width:100%;background:#1A6B8A;border-radius:4px 4px 0 0;height:70px;position:relative;"><div style="position:absolute;bottom:100%;left:50%;transform:translateX(-50%);font-size:10px;font-weight:700;color:#1A6B8A;white-space:nowrap;margin-bottom:2px;">10</div></div><div style="font-size:10px;color:#6B7A8D;">09h</div></div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;"><div style="width:100%;background:#1A6B8A;border-radius:4px 4px 0 0;height:56px;"><div style="font-size:10px;"></div></div><div style="font-size:10px;color:#6B7A8D;">10h</div></div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;"><div style="width:100%;background:#27AE60;border-radius:4px 4px 0 0;height:80px;"></div><div style="font-size:10px;color:#6B7A8D;">11h</div></div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;"><div style="width:100%;background:#E8F4F8;border-radius:4px 4px 0 0;height:14px;"></div><div style="font-size:10px;color:#6B7A8D;">12h</div></div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;"><div style="width:100%;background:#E8F4F8;border-radius:4px 4px 0 0;height:8px;"></div><div style="font-size:10px;color:#6B7A8D;">13h</div></div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;"><div style="width:100%;background:#E8F4F8;border-radius:4px 4px 0 0;height:4px;"></div><div style="font-size:10px;color:#6B7A8D;">14h</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     WEB SCREEN 14 — PRESCRIPTION QUEUE (KANBAN)
======================================== -->
<div class="web-screen" id="wscreen17">
  <div style="display:flex;height:100%;overflow:hidden;">
    <div style="width:220px;background:#0F3F54;flex-shrink:0;display:flex;flex-direction:column;">
      <div style="padding:20px 16px;border-bottom:1px solid rgba(255,255,255,0.08);"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#fff;">⚕️ ILERA AFRICA Pro</div></div>
      <nav style="flex:1;padding:12px 8px;display:flex;flex-direction:column;gap:2px;">
        <a onclick="goToWebScreen(16)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📊 Tableau de bord</a>
        <a onclick="goToWebScreen(17)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:rgba(255,255,255,0.12);border-radius:10px;color:#fff;cursor:pointer;font-size:13px;font-weight:600;font-family:'DM Sans',sans-serif;">📋 Ordonnances <span style="margin-left:auto;background:#E74C3C;color:#fff;border-radius:50%;width:18px;height:18px;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;">12</span></a>
        <a onclick="goToWebScreen(60)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">👥 Patients</a>
        <a onclick="goToWebScreen(19)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">⚗️ Interactions</a>
        <a onclick="goToWebScreen(21)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">💬 Messagerie</a>
      </nav>
    </div>
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;">
      <div style="background:#fff;padding:14px 24px;display:flex;justify-content:space-between;align-items:center;border-bottom:1.5px solid #E2ECF2;position:sticky;top:0;z-index:10;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">File d'attente — Ordonnances</div>
        <div style="display:flex;gap:8px;">
          <input type="text" placeholder="Rechercher patient..." style="padding:8px 12px;border:1.5px solid #E2ECF2;border-radius:8px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;width:180px;">
          <select style="padding:8px 12px;border:1.5px solid #E2ECF2;border-radius:8px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;"><option>Toutes urgences</option><option>URGENT</option><option>NORMAL</option></select>
          <button onclick="showToast('Vue Kanban')" style="padding:8px 14px;background:#1A6B8A;color:#fff;border:none;border-radius:8px;font-size:12px;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600;">⊞ Kanban</button>
          <button onclick="showToast('Vue Table')" style="padding:8px 14px;background:#fff;color:#6B7A8D;border:1.5px solid #E2ECF2;border-radius:8px;font-size:12px;cursor:pointer;font-family:'DM Sans',sans-serif;">☰ Table</button>
        </div>
      </div>
      <div style="padding:20px 24px;display:grid;grid-template-columns:repeat(4,1fr);gap:14px;">
        <!-- EN ATTENTE -->
        <div style="background:#EFF6FB;border-radius:14px;padding:14px;display:flex;flex-direction:column;gap:10px;">
          <div style="display:flex;justify-content:space-between;align-items:center;"><div style="font-size:12px;font-weight:700;color:#1A6B8A;">🔵 EN ATTENTE</div><div style="background:#1A6B8A;color:#fff;border-radius:50%;width:22px;height:22px;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;">12</div></div>
          <div onclick="goToWebScreen(18)" style="background:#fff;border-radius:10px;padding:12px;cursor:pointer;border-left:3px solid #E74C3C;box-shadow:0 1px 4px rgba(0,0,0,0.05);">
            <div style="display:flex;justify-content:space-between;margin-bottom:6px;"><span style="font-size:12px;font-weight:700;color:#1A2332;">Aïcha Diallo</span><span style="background:#FEF0EE;color:#E74C3C;border-radius:4px;padding:1px 6px;font-size:9px;font-weight:700;">URGENT</span></div>
            <div style="font-size:11px;color:#6B7A8D;margin-bottom:8px;">32 ans · #ORD-089 · Il y a 8 min</div>
            <button onclick="goToWebScreen(18)" style="width:100%;padding:6px;background:#1A6B8A;color:#fff;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Traiter →</button>
          </div>
          <div onclick="goToWebScreen(18)" style="background:#fff;border-radius:10px;padding:12px;cursor:pointer;box-shadow:0 1px 4px rgba(0,0,0,0.05);">
            <div style="display:flex;justify-content:space-between;margin-bottom:6px;"><span style="font-size:12px;font-weight:700;color:#1A2332;">Kofi Mensah</span><span style="background:#E8F4F8;color:#1A6B8A;border-radius:4px;padding:1px 6px;font-size:9px;font-weight:600;">NORMAL</span></div>
            <div style="font-size:11px;color:#6B7A8D;margin-bottom:8px;">45 ans · #ORD-088 · Il y a 23 min</div>
            <button onclick="goToWebScreen(18)" style="width:100%;padding:6px;background:#1A6B8A;color:#fff;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Traiter →</button>
          </div>
          <div onclick="goToWebScreen(18)" style="background:#fff;border-radius:10px;padding:12px;cursor:pointer;border-left:3px solid #E74C3C;box-shadow:0 1px 4px rgba(0,0,0,0.05);">
            <div style="display:flex;justify-content:space-between;margin-bottom:6px;"><span style="font-size:12px;font-weight:700;color:#1A2332;">Aminata Coulibaly</span><span style="background:#FEF0EE;color:#E74C3C;border-radius:4px;padding:1px 6px;font-size:9px;font-weight:700;">URGENT</span></div>
            <div style="font-size:11px;color:#6B7A8D;margin-bottom:8px;">55 ans · #ORD-086 · Il y a 1h</div>
            <button onclick="goToWebScreen(18)" style="width:100%;padding:6px;background:#1A6B8A;color:#fff;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Traiter →</button>
          </div>
          <div style="text-align:center;font-size:11px;color:#6B7A8D;cursor:pointer;" onclick="showToast('9 autres...')">+ 9 autres en attente</div>
        </div>
        <!-- EN COURS -->
        <div style="background:#FFFBF0;border-radius:14px;padding:14px;display:flex;flex-direction:column;gap:10px;">
          <div style="display:flex;justify-content:space-between;align-items:center;"><div style="font-size:12px;font-weight:700;color:#F39C12;">🟡 EN COURS</div><div style="background:#F39C12;color:#fff;border-radius:50%;width:22px;height:22px;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;">3</div></div>
          <div style="background:#fff;border-radius:10px;padding:12px;box-shadow:0 1px 4px rgba(0,0,0,0.05);">
            <div style="font-size:12px;font-weight:700;color:#1A2332;margin-bottom:4px;">Fatou Traoré</div>
            <div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">28 ans · #ORD-087</div>
            <div style="font-size:11px;color:#F39C12;">⏳ En validation...</div>
          </div>
          <div style="background:#fff;border-radius:10px;padding:12px;box-shadow:0 1px 4px rgba(0,0,0,0.05);">
            <div style="font-size:12px;font-weight:700;color:#1A2332;margin-bottom:4px;">Jean-Marc Diabaté</div>
            <div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">41 ans · #ORD-084</div>
            <div style="font-size:11px;color:#F39C12;">⏳ Vérif. interaction</div>
          </div>
        </div>
        <!-- VALIDÉES -->
        <div style="background:#F0FBF5;border-radius:14px;padding:14px;display:flex;flex-direction:column;gap:10px;">
          <div style="display:flex;justify-content:space-between;align-items:center;"><div style="font-size:12px;font-weight:700;color:#27AE60;">🟢 VALIDÉES</div><div style="background:#27AE60;color:#fff;border-radius:50%;width:22px;height:22px;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;">45</div></div>
          <div style="background:#fff;border-radius:10px;padding:12px;box-shadow:0 1px 4px rgba(0,0,0,0.05);"><div style="font-size:12px;font-weight:700;color:#1A2332;margin-bottom:2px;">Moussa Koné</div><div style="font-size:11px;color:#6B7A8D;">#ORD-085 · 09:45 ✓</div></div>
          <div style="background:#fff;border-radius:10px;padding:12px;box-shadow:0 1px 4px rgba(0,0,0,0.05);"><div style="font-size:12px;font-weight:700;color:#1A2332;margin-bottom:2px;">Ibrahim Sanogo</div><div style="font-size:11px;color:#6B7A8D;">#ORD-083 · 09:22 ✓</div></div>
          <div style="text-align:center;font-size:11px;color:#27AE60;font-weight:600;cursor:pointer;" onclick="showToast('43 autres...')">+ 43 autres ce matin</div>
        </div>
        <!-- REJETÉES -->
        <div style="background:#FEF5F5;border-radius:14px;padding:14px;display:flex;flex-direction:column;gap:10px;">
          <div style="display:flex;justify-content:space-between;align-items:center;"><div style="font-size:12px;font-weight:700;color:#E74C3C;">🔴 REJETÉES</div><div style="background:#E74C3C;color:#fff;border-radius:50%;width:22px;height:22px;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;">2</div></div>
          <div style="background:#fff;border-radius:10px;padding:12px;box-shadow:0 1px 4px rgba(0,0,0,0.05);">
            <div style="font-size:12px;font-weight:700;color:#1A2332;margin-bottom:2px;">#ORD-081</div>
            <div style="font-size:11px;color:#E74C3C;">Signature illisible</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     WEB SCREEN 15 — PRESCRIPTION DETAIL (SPLIT)
======================================== -->
<div class="web-screen" id="wscreen18">
  <div style="display:flex;height:100%;overflow:hidden;">
    <div style="width:220px;background:#0F3F54;flex-shrink:0;display:flex;flex-direction:column;">
      <div style="padding:20px 16px;border-bottom:1px solid rgba(255,255,255,0.08);"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#fff;">⚕️ ILERA AFRICA Pro</div></div>
      <nav style="flex:1;padding:12px 8px;display:flex;flex-direction:column;gap:2px;">
        <a onclick="goToWebScreen(16)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📊 Tableau de bord</a>
        <a onclick="goToWebScreen(17)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:rgba(255,255,255,0.12);border-radius:10px;color:#fff;cursor:pointer;font-size:13px;font-weight:600;font-family:'DM Sans',sans-serif;">📋 Ordonnances</a>
        <a onclick="goToWebScreen(60)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">👥 Patients</a>
        <a onclick="goToWebScreen(19)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">⚗️ Interactions</a>
        <a onclick="goToWebScreen(21)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">💬 Messagerie</a>
      </nav>
    </div>
    <div style="flex:1;display:flex;overflow:hidden;">
      <!-- Left: image viewer -->
      <div style="width:50%;background:#1A2332;display:flex;flex-direction:column;border-right:1px solid rgba(255,255,255,0.1);">
        <div style="padding:12px 16px;background:#0F3F54;display:flex;justify-content:space-between;align-items:center;flex-shrink:0;">
          <div style="font-size:12px;font-weight:700;color:#fff;">#ORD-2024-089 · Aïcha Diallo</div>
          <div style="display:flex;gap:6px;">
            <button onclick="zoomIn()" style="width:28px;height:28px;background:rgba(255,255,255,0.1);border:none;border-radius:6px;color:#fff;cursor:pointer;">+</button>
            <button onclick="zoomOut()" style="width:28px;height:28px;background:rgba(255,255,255,0.1);border:none;border-radius:6px;color:#fff;cursor:pointer;">−</button>
            <button onclick="rotatePDF()" style="width:28px;height:28px;background:rgba(255,255,255,0.1);border:none;border-radius:6px;color:#fff;cursor:pointer;font-size:13px;">↻</button>
            <button onclick="toggleFullscreen()" style="width:28px;height:28px;background:rgba(255,255,255,0.1);border:none;border-radius:6px;color:#fff;cursor:pointer;font-size:12px;">⛶</button>
          </div>
        </div>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;background:#1e2d3d;flex-direction:column;gap:10px;">
          <div style="font-size:64px;">📄</div>
          <div style="font-size:13px;color:rgba(255,255,255,0.4);">Ordonnance_Diallo_Aicha.jpg</div>
          <div style="font-size:11px;color:rgba(255,255,255,0.2);">Clic pour zoomer</div>
        </div>
        <div style="padding:10px 16px;background:#0F3F54;font-size:11px;color:rgba(255,255,255,0.4);text-align:center;">Uploadée le 14 oct. 2024 à 09:22 · 2.4 Mo</div>
      </div>
      <!-- Right: form -->
      <div style="width:50%;overflow-y:auto;background:#F4F9FC;padding:20px;display:flex;flex-direction:column;gap:14px;">
        <!-- Patient -->
        <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:44px;height:44px;background:#E8F4F8;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;">👩🏿</div>
            <div style="flex:1;"><div style="font-size:14px;font-weight:700;color:#1A2332;">Aïcha Diallo</div><div style="display:flex;gap:8px;margin-top:4px;"><span style="font-size:11px;color:#6B7A8D;">32 ans</span><span style="background:#FEF0EE;border-radius:6px;padding:1px 6px;font-size:11px;font-weight:700;color:#E74C3C;">AB+</span><span style="background:#FEF0EE;border-radius:6px;padding:1px 6px;font-size:10px;font-weight:700;color:#E74C3C;">URGENT</span></div></div>
            <button onclick="showToast('Historique patient')" style="font-size:11px;color:#1A6B8A;background:#E8F4F8;border:none;border-radius:8px;padding:6px 10px;cursor:pointer;font-weight:700;font-family:'DM Sans',sans-serif;">5 ordonnances →</button>
          </div>
        </div>
        <!-- Interaction check -->
        <div style="background:#E8F7EE;border-radius:12px;padding:12px;border:1px solid rgba(39,174,96,0.2);display:flex;gap:10px;align-items:center;">
          <div style="width:28px;height:28px;background:#27AE60;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:700;flex-shrink:0;">✓</div>
          <div><div style="font-size:12px;font-weight:700;color:#27AE60;">Aucune interaction médicamenteuse détectée</div><div style="font-size:11px;color:#6B7A8D;">Amoxicilline + Paracétamol — Vérification automatique IA</div></div>
          <button onclick="goToWebScreen(19)" style="margin-left:auto;font-size:11px;color:#1A6B8A;background:none;border:none;cursor:pointer;font-weight:700;white-space:nowrap;font-family:'DM Sans',sans-serif;">Vérif. manuelle →</button>
        </div>
        <!-- Decision -->
        <div style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          <div style="font-size:13px;font-weight:700;color:#1A2332;margin-bottom:12px;">Décision de validation</div>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:14px;">
            <label style="display:flex;align-items:center;gap:10px;padding:10px;background:#E8F7EE;border-radius:10px;cursor:pointer;border:1.5px solid #27AE60;"><input type="radio" name="wdecision" checked style="accent-color:#27AE60;"><span style="font-size:13px;font-weight:600;color:#27AE60;">✅ Approuver</span></label>
            <label style="display:flex;align-items:center;gap:10px;padding:10px;background:#F4F9FC;border-radius:10px;cursor:pointer;border:1.5px solid #E2ECF2;"><input type="radio" name="wdecision" style="accent-color:#E74C3C;"><span style="font-size:13px;color:#1A2332;">❌ Rejeter</span></label>
            <label style="display:flex;align-items:center;gap:10px;padding:10px;background:#F4F9FC;border-radius:10px;cursor:pointer;border:1.5px solid #E2ECF2;"><input type="radio" name="wdecision" style="accent-color:#F39C12;"><span style="font-size:13px;color:#1A2332;">❓ Demander informations</span></label>
          </div>
          <textarea placeholder="Conseil pharmaceutique documenté (requis)..." rows="3" style="width:100%;padding:10px;border:1.5px solid #E2ECF2;border-radius:10px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;resize:none;color:#1A2332;margin-bottom:8px;box-sizing:border-box;"></textarea>
          <textarea placeholder="Posologie visible par le patient (requis)..." rows="2" style="width:100%;padding:10px;border:1.5px solid #E2ECF2;border-radius:10px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;resize:none;color:#1A2332;box-sizing:border-box;"></textarea>
        </div>
        <!-- Actions -->
        <div style="display:flex;gap:8px;">
          <button onclick="showToast('🔐 QR Code généré !')" style="flex:1;padding:12px;background:#0F3F54;color:#fff;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">🔐 Générer QR</button>
          <button onclick="showToast('✅ Ordonnance validée !')" style="flex:2;padding:12px;background:linear-gradient(135deg,#27AE60,#2ecc71);color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">✅ Valider</button>
          <button onclick="showToast('❌ Rejetée')" style="padding:12px 16px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">❌</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     WEB SCREEN 16 — INTERACTION CHECKER (WEB)
======================================== -->
<div class="web-screen" id="wscreen19">
  <div style="display:flex;height:100%;overflow:hidden;">
    <div style="width:220px;background:#0F3F54;flex-shrink:0;display:flex;flex-direction:column;">
      <div style="padding:20px 16px;border-bottom:1px solid rgba(255,255,255,0.08);"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#fff;">⚕️ ILERA AFRICA Pro</div></div>
      <nav style="flex:1;padding:12px 8px;display:flex;flex-direction:column;gap:2px;">
        <a onclick="goToWebScreen(16)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📊 Tableau de bord</a>
        <a onclick="goToWebScreen(17)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📋 Ordonnances</a>
        <a onclick="goToWebScreen(60)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">👥 Patients</a>
        <a onclick="goToWebScreen(19)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:rgba(255,255,255,0.12);border-radius:10px;color:#fff;cursor:pointer;font-size:13px;font-weight:600;font-family:'DM Sans',sans-serif;">⚗️ Interactions</a>
        <a onclick="goToWebScreen(21)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">💬 Messagerie</a>
      </nav>
    </div>
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;">
      <div style="background:#fff;padding:14px 24px;border-bottom:1.5px solid #E2ECF2;position:sticky;top:0;z-index:10;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">⚗️ Vérificateur d'Interactions Médicamenteuses</div>
      </div>
      <div style="padding:20px 24px;display:grid;grid-template-columns:1fr 1fr;gap:20px;">
        <div style="display:flex;flex-direction:column;gap:14px;">
          <div style="background:#fff;border-radius:14px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
            <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;margin-bottom:14px;">Médicaments à analyser</div>
            <div style="display:flex;flex-direction:column;gap:10px;">
              <div><div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">MÉDICAMENT 1</div><input value="Amoxicilline 500mg" style="width:100%;padding:10px 12px;border:1.5px solid #1A6B8A;border-radius:10px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;color:#1A2332;box-sizing:border-box;"></div>
              <div><div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">MÉDICAMENT 2</div><input value="Metformine 850mg" style="width:100%;padding:10px 12px;border:1.5px solid #E2ECF2;border-radius:10px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;color:#1A2332;box-sizing:border-box;"></div>
              <div><div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">MÉDICAMENT 3</div><input value="Paracétamol 1g" style="width:100%;padding:10px 12px;border:1.5px solid #E2ECF2;border-radius:10px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;color:#1A2332;box-sizing:border-box;"></div>
              <div><div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">MÉDICAMENT 4 (optionnel)</div><input placeholder="Saisir médicament..." style="width:100%;padding:10px 12px;border:1.5px dashed #E2ECF2;border-radius:10px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;color:#6B7A8D;box-sizing:border-box;"></div>
              <button onclick="showToast('Champ ajouté')" style="padding:9px;background:transparent;color:#1A6B8A;border:1.5px dashed #1A6B8A;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">+ Ajouter médicament</button>
            </div>
          </div>
          <button onclick="showToast('Analyse lancée...')" style="padding:14px;background:linear-gradient(135deg,#0F3F54,#1A6B8A);color:#fff;border:none;border-radius:12px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 8px 24px rgba(26,107,138,0.3);">⚗️ Analyser les interactions</button>
        </div>
        <div style="display:flex;flex-direction:column;gap:14px;">
          <div style="background:#fff;border-radius:14px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
            <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;margin-bottom:14px;">Résultats d'analyse</div>
            <div style="display:flex;flex-direction:column;gap:10px;">
              <div style="background:#E8F7EE;border-radius:12px;padding:14px;border:1.5px solid rgba(39,174,96,0.2);">
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;"><div style="width:30px;height:30px;background:#27AE60;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:700;">✓</div><div style="font-size:13px;font-weight:700;color:#27AE60;">Aucune interaction majeure</div></div>
                <div style="font-size:12px;color:#6B7A8D;line-height:1.5;">Amoxicilline + Metformine : administration simultanée possible sans précaution particulière.</div>
              </div>
              <div style="background:#FEF9EE;border-radius:12px;padding:14px;border:1.5px solid rgba(243,156,18,0.2);">
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;"><div style="width:30px;height:30px;background:#F39C12;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:700;">⚠</div><div style="font-size:13px;font-weight:700;color:#F39C12;">Interaction modérée détectée</div></div>
                <div style="font-size:12px;color:#6B7A8D;line-height:1.5;margin-bottom:8px;">Amoxicilline + Warfarine : potentielle augmentation de l'effet anticoagulant. Surveiller l'INR.</div>
                <button onclick="showToast('Référence ouverte')" style="font-size:11px;color:#F39C12;background:none;border:none;cursor:pointer;font-weight:700;font-family:'DM Sans',sans-serif;padding:0;">Voir référence →</button>
              </div>
              <div style="background:#E8F7EE;border-radius:12px;padding:14px;border:1.5px solid rgba(39,174,96,0.2);">
                <div style="display:flex;align-items:center;gap:10px;"><div style="width:30px;height:30px;background:#27AE60;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:700;">✓</div><div style="font-size:13px;font-weight:700;color:#27AE60;">Paracétamol + Metformine : sans interaction</div></div>
              </div>
            </div>
          </div>
          <!-- Legend -->
          <div style="background:#fff;border-radius:12px;padding:14px;display:flex;gap:16px;flex-wrap:wrap;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
            <div style="display:flex;align-items:center;gap:8px;"><div style="width:14px;height:14px;background:#27AE60;border-radius:4px;"></div><span style="font-size:12px;color:#1A2332;font-weight:600;">Sûr</span></div>
            <div style="display:flex;align-items:center;gap:8px;"><div style="width:14px;height:14px;background:#F39C12;border-radius:4px;"></div><span style="font-size:12px;color:#1A2332;font-weight:600;">Vigilance requise</span></div>
            <div style="display:flex;align-items:center;gap:8px;"><div style="width:14px;height:14px;background:#E74C3C;border-radius:4px;"></div><span style="font-size:12px;color:#1A2332;font-weight:600;">Contre-indication</span></div>
          </div>
          <div style="background:#fff;border-radius:12px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
            <div style="font-size:12px;font-weight:700;color:#1A2332;margin-bottom:8px;">Historique des vérifications</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div style="display:flex;justify-content:space-between;font-size:11px;"><span style="color:#1A2332;">Amoxicilline + Metformine</span><span style="color:#27AE60;font-weight:600;">✓ Sûr · 14h22</span></div>
              <div style="display:flex;justify-content:space-between;font-size:11px;"><span style="color:#1A2332;">Ibuprofen + Aspirine</span><span style="color:#E74C3C;font-weight:600;">⚠ Danger · 11h07</span></div>
              <div style="display:flex;justify-content:space-between;font-size:11px;"><span style="color:#1A2332;">Paracétamol + Codéine</span><span style="color:#27AE60;font-weight:600;">✓ Sûr · 09:55</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     WEB SCREEN 17 — PATIENT FILE (TABBED)
======================================== -->
<div class="web-screen" id="wscreen20">
  <div style="display:flex;height:100%;overflow:hidden;">
    <div style="width:220px;background:#0F3F54;flex-shrink:0;display:flex;flex-direction:column;">
      <div style="padding:20px 16px;border-bottom:1px solid rgba(255,255,255,0.08);"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#fff;">⚕️ ILERA AFRICA Pro</div></div>
      <nav style="flex:1;padding:12px 8px;display:flex;flex-direction:column;gap:2px;">
        <a onclick="goToWebScreen(16)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📊 Tableau de bord</a>
        <a onclick="goToWebScreen(17)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">📋 Ordonnances</a>
        <a onclick="goToWebScreen(60)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:rgba(255,255,255,0.12);border-radius:10px;color:#fff;cursor:pointer;font-size:13px;font-weight:600;font-family:'DM Sans',sans-serif;">👥 Patients</a>
        <a onclick="goToWebScreen(19)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">⚗️ Interactions</a>
        <a onclick="goToWebScreen(21)" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;">💬 Messagerie</a>
      </nav>
    </div>
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;">
      <!-- Patient header -->
      <div style="background:linear-gradient(135deg,#0F3F54,#1A6B8A);padding:24px 28px;display:flex;align-items:center;gap:16px;">
        <div style="width:56px;height:56px;background:rgba(255,255,255,0.15);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:26px;border:2px solid rgba(255,255,255,0.3);">👩🏿</div>
        <div style="flex:1;">
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:800;color:#fff;">Aïcha Diallo</div>
          <div style="display:flex;gap:12px;margin-top:6px;">
            <span style="font-size:12px;color:rgba(255,255,255,0.7);">32 ans</span>
            <span style="background:rgba(231,76,60,0.3);border-radius:6px;padding:2px 8px;font-size:11px;font-weight:700;color:#ff9d9d;">AB+</span>
            <span style="font-size:12px;color:rgba(255,255,255,0.7);">+225 07 88 45 23</span>
            <span style="font-size:12px;color:rgba(255,255,255,0.7);">Patiente depuis: janv. 2023</span>
          </div>
        </div>
        <button onclick="goToWebScreen(21)" style="padding:10px 18px;background:rgba(255,255,255,0.15);color:#fff;border:1px solid rgba(255,255,255,0.3);border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">💬 Contacter</button>
      </div>
      <!-- Tabs -->
      <div style="background:#fff;border-bottom:1.5px solid #E2ECF2;padding:0 28px;display:flex;gap:0;">
        <button id="ptabw1" onclick="showPatientTab(1)" style="padding:14px 20px;border:none;border-bottom:3px solid #1A6B8A;background:none;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;color:#1A6B8A;cursor:pointer;">Ordonnances (5)</button>
        <button id="ptabw2" onclick="showPatientTab(2)" style="padding:14px 20px;border:none;border-bottom:3px solid transparent;background:none;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:500;color:#6B7A8D;cursor:pointer;">Commandes (8)</button>
        <button id="ptabw3" onclick="showPatientTab(3)" style="padding:14px 20px;border:none;border-bottom:3px solid transparent;background:none;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:500;color:#6B7A8D;cursor:pointer;">Consultations</button>
        <button id="ptabw4" onclick="showPatientTab(4)" style="padding:14px 20px;border:none;border-bottom:3px solid transparent;background:none;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:500;color:#6B7A8D;cursor:pointer;">Documents</button>
        <button id="ptabw5" onclick="showPatientTab(5)" style="padding:14px 20px;border:none;border-bottom:3px solid transparent;background:none;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:500;color:#6B7A8D;cursor:pointer;">Notes</button>
      </div>
      <div style="padding:24px 28px;">
        <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          <thead style="background:#F4F9FC;"><tr><th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Réf.</th><th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Date</th><th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Médicaments</th><th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Statut</th><th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Pharmacien</th><th style="text-align:left;padding:12px 16px;font-size:12px;color:#6B7A8D;font-weight:600;">Action</th></tr></thead>
          <tbody>
            <tr style="border-top:1px solid #F4F9FC;"><td style="padding:12px 16px;font-size:13px;font-weight:700;color:#1A6B8A;">#ORD-089</td><td style="padding:12px 16px;font-size:13px;color:#1A2332;">14 oct. 2024</td><td style="padding:12px 16px;font-size:13px;color:#1A2332;">Amoxicilline, Paracétamol</td><td style="padding:12px 16px;"><span style="background:#FEF0EE;color:#E74C3C;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700;">En attente</span></td><td style="padding:12px 16px;font-size:13px;color:#6B7A8D;">Dr. Lefebvre</td><td style="padding:12px 16px;"><button onclick="goToWebScreen(18)" style="font-size:12px;color:#1A6B8A;background:#E8F4F8;border:none;border-radius:8px;padding:6px 12px;cursor:pointer;font-weight:700;font-family:'DM Sans',sans-serif;">Traiter</button></td></tr>
            <tr style="border-top:1px solid #F4F9FC;"><td style="padding:12px 16px;font-size:13px;font-weight:700;color:#1A6B8A;">#ORD-071</td><td style="padding:12px 16px;font-size:13px;color:#1A2332;">2 oct. 2024</td><td style="padding:12px 16px;font-size:13px;color:#1A2332;">Metformine 850mg</td><td style="padding:12px 16px;"><span style="background:#E8F7EE;color:#27AE60;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700;">Validée ✓</span></td><td style="padding:12px 16px;font-size:13px;color:#6B7A8D;">Dr. Diabaté</td><td style="padding:12px 16px;"><button onclick="showToast('Voir QR')" style="font-size:12px;color:#6B7A8D;background:#F4F9FC;border:none;border-radius:8px;padding:6px 12px;cursor:pointer;font-family:'DM Sans',sans-serif;">Voir QR</button></td></tr>
            <tr style="border-top:1px solid #F4F9FC;"><td style="padding:12px 16px;font-size:13px;font-weight:700;color:#6B7A8D;">#ORD-055</td><td style="padding:12px 16px;font-size:13px;color:#6B7A8D;">18 sept. 2024</td><td style="padding:12px 16px;font-size:13px;color:#6B7A8D;">Ibuprofène 400mg</td><td style="padding:12px 16px;"><span style="background:#FEF0EE;color:#E74C3C;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700;">Rejetée ✕</span></td><td style="padding:12px 16px;font-size:13px;color:#6B7A8D;">Dr. Lefebvre</td><td style="padding:12px 16px;"><button onclick="showToast('Motif rejet')" style="font-size:12px;color:#E74C3C;background:#FEF0EE;border:none;border-radius:8px;padding:6px 12px;cursor:pointer;font-family:'DM Sans',sans-serif;">Motif</button></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>
  function showPatientTab(n) {
    [1,2,3,4,5].forEach(i => {
      const el = document.getElementById('ptabw'+i);
      if(el) { el.style.borderBottomColor = (i===n) ? '#1A6B8A' : 'transparent'; el.style.color = (i===n) ? '#1A6B8A' : '#6B7A8D'; el.style.fontWeight = (i===n) ? '700' : '500'; }
    });
    const names = ['Ordonnances','Commandes','Consultations','Documents','Notes'];
    showToast('Onglet : ' + names[n-1]);
  }
  </script>
</div>

<!-- ========================================
     WEB SCREEN 18 — PHARMACIST MESSAGERIE (WEB)
======================================== -->
<div class="web-screen" id="wscreen21">
<div class="web-screen" id="wscreen41"><div style="height:100%;display:flex;flex-direction:column;"><div style="background:#fff;padding:14px 32px;border-bottom:1.5px solid #E2ECF2;display:flex;align-items:center;justify-content:space-between;"><a onclick="goToWebScreen(16)" style="font-size:13px;color:#1A6B8A;cursor:pointer;font-weight:700;font-family:'DM Sans',sans-serif;">← Dashboard pharmacien</a><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">💊 Gestion du stock</div><div style="width:8px;"></div></div><div style="flex:1;overflow-y:auto;background:#F4F9FC;padding:24px;"><div style="font-size:13px;color:#6B7A8D;text-align:center;margin-top:40px;">Voir <button onclick="goToWebScreen(25)" style="background:none;border:none;color:#1A6B8A;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">wscreen 22 — Produits &amp; Stock →</button></div></div></div></div>

<div class="web-screen" id="wscreen42"><div style="height:100%;display:flex;flex-direction:column;"><div style="background:#fff;padding:14px 32px;border-bottom:1.5px solid #E2ECF2;display:flex;align-items:center;justify-content:space-between;"><a onclick="goToWebScreen(16)" style="font-size:13px;color:#1A6B8A;cursor:pointer;font-weight:700;font-family:'DM Sans',sans-serif;">← Dashboard</a><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">📊 Statistiques pharmacien</div><div style="width:8px;"></div></div><div style="flex:1;overflow-y:auto;background:#F4F9FC;padding:24px;"><div style="font-size:13px;color:#6B7A8D;text-align:center;margin-top:40px;">Voir <button onclick="goToWebScreen(27)" style="background:none;border:none;color:#1A6B8A;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">wscreen 24 — Rapports &amp; Analytics →</button></div></div></div></div>

<div class="web-screen" id="wscreen43"><div style="height:100%;display:flex;flex-direction:column;"><div style="background:#fff;padding:14px 32px;border-bottom:1.5px solid #E2ECF2;display:flex;align-items:center;justify-content:space-between;"><a onclick="goToWebScreen(16)" style="font-size:13px;color:#1A6B8A;cursor:pointer;font-weight:700;font-family:'DM Sans',sans-serif;">← Dashboard</a><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">⚙️ Paramètres Pro</div><div style="width:8px;"></div></div><div style="flex:1;overflow-y:auto;background:#F4F9FC;padding:32px;"><div style="max-width:600px;margin:0 auto;display:flex;flex-direction:column;gap:12px;"><div style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);"><div style="padding:16px 20px;border-bottom:1px solid #F4F9FC;display:flex;justify-content:space-between;cursor:pointer;" onclick="showToast('Horaires')"><span style="font-size:14px;font-weight:600;color:#1A2332;">🕐 Horaires d'ouverture</span><span>→</span></div><div style="padding:16px 20px;border-bottom:1px solid #F4F9FC;display:flex;justify-content:space-between;cursor:pointer;" onclick="showToast('Signature')"><span style="font-size:14px;font-weight:600;color:#1A2332;">✍️ Signature numérique</span><span>→</span></div><div style="padding:16px 20px;display:flex;justify-content:space-between;align-items:center;" onclick="showToast('2FA actif')"><span style="font-size:14px;font-weight:600;color:#1A2332;">🔐 Authentification 2FA</span><span style="background:#E8F7EE;color:#27AE60;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700;">Activé</span></div></div><button onclick="goToWebScreen(15)" style="padding:14px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">Déconnexion</button></div></div></div></div>

<div class="web-screen" id="wscreen44"><div style="height:100%;display:flex;flex-direction:column;background:#F4F9FC;"><div style="background:#fff;padding:14px 32px;border-bottom:1.5px solid #E2ECF2;display:flex;align-items:center;justify-content:space-between;"><a onclick="goToWebScreen(10)" style="font-size:13px;color:#1A6B8A;cursor:pointer;font-weight:700;">← Accueil</a><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">🔍 Scanner QR Code</div><div style="width:8px;"></div></div><div style="flex:1;display:flex;align-items:center;justify-content:center;"><div style="text-align:center;"><div style="width:280px;height:280px;border:3px solid #1A6B8A;border-radius:20px;display:flex;align-items:center;justify-content:center;margin:0 auto 24px;background:rgba(26,107,138,0.05);"><div style="font-size:80px;opacity:0.4;">📷</div></div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:700;color:#1A2332;margin-bottom:8px;">Pointez vers le QR Code</div><div style="font-size:13px;color:#6B7A8D;margin-bottom:24px;">Scannez le QR Code de l'ordonnance ou de la commande</div><button onclick="goToWebScreen(51)" style="padding:14px 32px;background:#1A6B8A;color:#fff;border:none;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">Simuler une lecture ✓</button></div></div></div></div>

<div class="web-screen" id="wscreen45"><div style="height:100%;display:flex;flex-direction:column;background:#F4F9FC;"><div style="background:#fff;padding:14px 32px;border-bottom:1.5px solid #E2ECF2;display:flex;align-items:center;justify-content:space-between;"><a onclick="goToWebScreen(32)" style="font-size:13px;color:#1A6B8A;cursor:pointer;font-weight:700;">← Pharmacies</a><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">Profil pharmacien</div><div style="width:8px;"></div></div><div style="flex:1;overflow-y:auto;padding:32px;"><div style="max-width:700px;margin:0 auto;"><div style="background:linear-gradient(135deg,#0F3F54,#1A6B8A);border-radius:20px;padding:32px;display:flex;align-items:center;gap:20px;margin-bottom:20px;"><div style="width:72px;height:72px;background:rgba(255,255,255,0.2);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:34px;">👩‍⚕️</div><div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#fff;">Dr. Sophie Lefebvre</div><div style="font-size:14px;color:rgba(255,255,255,0.7);margin-top:4px;">Pharmacien · Ordre CI #4521 · ⭐ 4.9 (128 avis)</div><div style="display:flex;gap:8px;margin-top:10px;"><button onclick="goToWebScreen(11)" style="padding:10px 18px;background:rgba(255,255,255,0.15);color:#fff;border:1px solid rgba(255,255,255,0.3);border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">💬 Contacter</button><button onclick="goToWebScreen(29)" style="padding:10px 18px;background:#fff;color:#1A6B8A;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">🛒 Commander</button></div></div></div></div></div></div></div>

<div class="web-screen" id="wscreen53">
  <div style="height:100%;background:linear-gradient(135deg,#F4F9FC,#E0F0F7);display:flex;align-items:center;justify-content:center;">
    <div style="background:#fff;border-radius:24px;padding:48px;max-width:600px;width:100%;box-shadow:0 8px 40px rgba(0,0,0,0.1);">
      <div style="text-align:center;margin-bottom:32px;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;font-weight:800;color:#1A2332;margin-bottom:6px;">Bienvenue sur ILERA AFRICA Pro</div>
        <div style="font-size:13px;color:#6B7A8D;">Configurez votre espace pharmacien en 5 étapes</div>
      </div>
      <div style="display:flex;gap:6px;margin-bottom:32px;">
        <div style="flex:1;height:6px;background:#27AE60;border-radius:3px;"></div>
        <div style="flex:1;height:6px;background:#27AE60;border-radius:3px;"></div>
        <div style="flex:1;height:6px;background:#1A6B8A;border-radius:3px;"></div>
        <div style="flex:1;height:6px;background:#E2ECF2;border-radius:3px;"></div>
        <div style="flex:1;height:6px;background:#E2ECF2;border-radius:3px;"></div>
      </div>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:17px;font-weight:700;color:#1A2332;margin-bottom:16px;">Étape 3 sur 6 — Documents professionnels</div>
      <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:24px;">
        <div style="border:2px dashed #1A6B8A;border-radius:14px;padding:20px;text-align:center;cursor:pointer;background:#E8F4F8;" onclick="showToast('Upload diplôme...')"><div style="font-size:28px;margin-bottom:6px;">🎓</div><div style="font-size:13px;font-weight:700;color:#1A6B8A;">Diplôme de pharmacien</div><div style="font-size:11px;color:#6B7A8D;margin-top:2px;">PDF ou image · Max 5 Mo</div></div>
        <div style="border:2px dashed #27AE60;border-radius:14px;padding:20px;text-align:center;cursor:pointer;background:#E8F7EE;" onclick="showToast('Upload autorisation...')"><div style="font-size:28px;margin-bottom:6px;">📋</div><div style="font-size:13px;font-weight:700;color:#27AE60;">Autorisation d'exercice (Ordre CI) <span style="background:#27AE60;color:#fff;border-radius:4px;padding:1px 6px;font-size:10px;margin-left:4px;">✓ Chargé</span></div></div>
      </div>
      <div style="display:flex;gap:10px;">
        <button onclick="goToWebScreen(15)" style="flex:1;padding:14px;background:#F4F9FC;color:#6B7A8D;border:1.5px solid #E2ECF2;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:13px;cursor:pointer;">← Précédent</button>
        <button onclick="goToWebScreen(16)" style="flex:2;padding:14px;background:linear-gradient(135deg,#1A6B8A,#2196B3);color:#fff;border:none;border-radius:12px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">Continuer →</button>
      </div>
    </div>
  </div>
</div>

<!-- ============================================================
     WEB SCREENS — ADMIN GESTION LIVREURS (51–53)
============================================================ -->

<!-- ========================================
     WSCREEN 51 — LISTE LIVREURS (ADMIN)
======================================== -->

`;