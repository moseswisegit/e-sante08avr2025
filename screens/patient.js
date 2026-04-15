window.FRAGMENTS = window.FRAGMENTS || {};
window.FRAGMENTS['patient'] = `
    <div class="screen" id="screen10" data-device="mobile">
      <div style="height:100%;display:flex;flex-direction:column;background:#F4F9FC;overflow:hidden;">
        <!-- Top bar -->
        <div style="display:flex;align-items:center;justify-content:space-between;padding:52px 20px 16px;background:#fff;border-bottom:1px solid #E2ECF2;">
          <button onclick="openDrawer('patient')" style="width:38px;height:38px;background:#F4F9FC;border:none;border-radius:10px;cursor:pointer;font-size:18px;display:flex;align-items:center;justify-content:center;">☰</button>
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:800;color:#1A6B8A;">ILERA AFRICA</div>
          <div style="position:relative;">
            <button onclick="goToScreen(18)" style="width:38px;height:38px;background:#F4F9FC;border:none;border-radius:10px;cursor:pointer;font-size:18px;display:flex;align-items:center;justify-content:center;">🔔</button>
            <div style="position:absolute;top:4px;right:4px;width:16px;height:16px;background:#E74C3C;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:#fff;border:2px solid #fff;">3</div>
          </div>
        </div>
        <!-- Scrollable content -->
        <div style="flex:1;overflow-y:auto;padding:16px 16px 90px;">
          <!-- Greeting card -->
          <div style="background:linear-gradient(135deg,#1A6B8A,#0F3F54);border-radius:20px;padding:20px;margin-bottom:20px;position:relative;overflow:hidden;">
            <div style="position:absolute;right:-20px;bottom:-20px;opacity:0.08;">
              <svg width="100" height="100" viewBox="0 0 52 52" fill="none"><path d="M26 4C18 4 10 8 8 15C7 22 10 26 14 30C18 34 24 42 26 48C28 42 34 34 38 30C42 26 45 22 44 15C42 8 34 4 26 4Z" fill="white" opacity="0.9"/><rect x="23" y="14" width="6" height="16" rx="3" fill="#1A6B8A"/><rect x="18" y="19" width="16" height="6" rx="3" fill="#1A6B8A"/></svg>
            </div>
            <div style="font-size:22px;margin-bottom:6px;">👋</div>
            <h2 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:700;color:#fff;margin-bottom:4px;">Bonjour, Moussa !</h2>
            <p style="font-size:14px;color:rgba(255,255,255,0.75);">Comment pouvons-nous vous aider aujourd'hui ?</p>
            <div style="margin-top:14px;display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,0.15);padding:6px 12px;border-radius:20px;">
              <div style="width:6px;height:6px;background:#27AE60;border-radius:50%;"></div>
              <span style="font-size:12px;color:rgba(255,255,255,0.9);font-weight:600;">Compte vérifié ✓</span>
            </div>
          </div>
          <!-- Actions rapides -->
          <div style="margin-bottom:20px;">
            <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;margin-bottom:12px;">Actions Rapides</h3>
            <!-- Primary CTA -->
            <div onclick="goToScreen(11)" style="background:linear-gradient(135deg,#27AE60,#2ecc71);border-radius:16px;padding:20px;margin-bottom:10px;display:flex;align-items:center;gap:16px;cursor:pointer;box-shadow:0 8px 24px rgba(39,174,96,0.3);">
              <div style="width:48px;height:48px;background:rgba(255,255,255,0.2);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;">📄</div>
              <div>
                <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#fff;">Envoyer ordonnance</div>
                <div style="font-size:13px;color:rgba(255,255,255,0.8);">Photo ou PDF — Réponse rapide</div>
              </div>
              <div style="margin-left:auto;color:rgba(255,255,255,0.7);font-size:20px;">›</div>
            </div>
            <!-- 2-col grid -->
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">
              <div onclick="goToScreen(13)" style="background:#fff;border-radius:16px;padding:16px;cursor:pointer;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
                <div style="font-size:28px;margin-bottom:8px;">🛍️</div>
                <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">Mes commandes</div>
                <div style="font-size:12px;color:#27AE60;font-weight:600;margin-top:2px;">2 en cours</div>
              </div>
              <div onclick="goToScreen(74)" style="background:#fff;border-radius:16px;padding:16px;cursor:pointer;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
                <div style="font-size:28px;margin-bottom:8px;">💬</div>
                <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">Consulter</div>
                <div style="font-size:12px;color:#1A6B8A;font-weight:600;margin-top:2px;">Pharmacien en ligne</div>
              </div>
            </div>
            <!-- Profile row -->
            <div onclick="goToScreen(17)" style="background:#fff;border-radius:16px;padding:16px 20px;display:flex;align-items:center;gap:14px;cursor:pointer;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
              <div style="width:40px;height:40px;background:linear-gradient(135deg,#E8F4F8,#D0E8F5);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;">👤</div>
              <div style="flex:1;">
                <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">Mon profil</div>
                <div style="font-size:12px;color:#6B7A8D;">Gérer mes informations</div>
              </div>
              <div style="color:#6B7A8D;font-size:20px;">›</div>
            </div>
          </div>
          <!-- Conseils Santé -->
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
              <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">Conseils Santé</h3>
              <a onclick="goToScreen(73)" style="font-size:13px;color:#1A6B8A;font-weight:600;cursor:pointer;">Voir tout →</a>
            </div>
            <div style="display:flex;gap:12px;overflow-x:auto;padding-bottom:8px;">
              <div onclick="goToScreen(73)" style="min-width:200px;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);cursor:pointer;">
                <div style="height:100px;background:linear-gradient(135deg,#E8F4F8,#C5DFF0);display:flex;align-items:center;justify-content:center;font-size:40px;">💊</div>
                <div style="padding:12px;">
                  <div style="display:inline-block;background:#E8F7EE;color:#27AE60;font-size:10px;font-weight:700;padding:3px 8px;border-radius:20px;margin-bottom:6px;">Prévention</div>
                  <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;line-height:1.4;">Bien gérer son traitement antipaludéen</div>
                </div>
              </div>
              <div onclick="goToScreen(73)" style="min-width:200px;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);cursor:pointer;">
                <div style="height:100px;background:linear-gradient(135deg,#FFF8E8,#FFE8B0);display:flex;align-items:center;justify-content:center;font-size:40px;">🥗</div>
                <div style="padding:12px;">
                  <div style="display:inline-block;background:#FFF3CD;color:#F39C12;font-size:10px;font-weight:700;padding:3px 8px;border-radius:20px;margin-bottom:6px;">Nutrition</div>
                  <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;line-height:1.4;">Alimentation et diabète : les bons réflexes</div>
                </div>
              </div>
              <div onclick="goToScreen(73)" style="min-width:200px;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);cursor:pointer;">
                <div style="height:100px;background:linear-gradient(135deg,#F0E8FF,#DDD0FF);display:flex;align-items:center;justify-content:center;font-size:40px;">🧘</div>
                <div style="padding:12px;">
                  <div style="display:inline-block;background:#F0E8FF;color:#8B5CF6;font-size:10px;font-weight:700;padding:3px 8px;border-radius:20px;margin-bottom:6px;">Bien-être</div>
                  <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;line-height:1.4;">Gérer le stress au quotidien</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Bottom nav -->
        <div style="position:absolute;bottom:0;left:0;right:0;background:#fff;border-top:1px solid #E2ECF2;display:flex;padding:8px 0 20px;">
          <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;" onclick="goToScreen(10)">
            <div style="font-size:22px;">🏠</div>
            <div style="font-size:10px;font-weight:700;color:#1A6B8A;">Accueil</div>
            <div style="width:16px;height:2px;background:#1A6B8A;border-radius:2px;"></div>
          </div>
          <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;" onclick="goToScreen(12)">
            <div style="font-size:22px;">📋</div>
            <div style="font-size:10px;color:#6B7A8D;">Ordonnances</div>
          </div>
          <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;" onclick="goToScreen(13)">
            <div style="font-size:22px;">📦</div>
            <div style="font-size:10px;color:#6B7A8D;">Commandes</div>
          </div>
          <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;" onclick="goToScreen(16)">
            <div style="font-size:22px;">💬</div>
            <div style="font-size:10px;color:#6B7A8D;">Chat</div>
          </div>
          <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;" onclick="goToScreen(17)">
            <div style="font-size:22px;">👤</div>
            <div style="font-size:10px;color:#6B7A8D;">Profil</div>
          </div>
        </div>
      </div>
    </div>

    <!-- SCREEN 8 — UPLOAD PRESCRIPTION -->
    <div class="screen" id="screen11" data-device="mobile">
      <div style="height:100%;display:flex;flex-direction:column;background:#F4F9FC;">
        <!-- Header -->
        <div style="display:flex;align-items:center;gap:14px;padding:52px 20px 16px;background:#fff;border-bottom:1px solid #E2ECF2;">
          <button onclick="goToScreen(10)" style="width:36px;height:36px;background:#F4F9FC;border:none;border-radius:10px;cursor:pointer;font-size:18px;">←</button>
          <h1 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:700;color:#1A2332;">Envoyer une ordonnance</h1>
        </div>
        <!-- Content -->
        <div style="flex:1;overflow-y:auto;padding:20px 16px 24px;display:flex;flex-direction:column;gap:16px;">
          <!-- Upload zone -->
          <div onclick="showToast('📷 Sélecteur de fichier ouvert')" style="border:2.5px dashed #1A6B8A;border-radius:20px;padding:32px 20px;text-align:center;background:rgba(26,107,138,0.03);cursor:pointer;transition:all 0.2s;" onmouseover="this.style.background='rgba(26,107,138,0.06)'" onmouseout="this.style.background='rgba(26,107,138,0.03)'">
            <div style="font-size:48px;margin-bottom:12px;">📸</div>
            <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A6B8A;margin-bottom:6px;">Appuyez pour importer</div>
            <div style="font-size:13px;color:#6B7A8D;">Prenez une photo ou importez un fichier</div>
            <div style="font-size:12px;color:#6B7A8D;margin-top:4px;">JPG, PNG ou PDF — Max 10MB</div>
          </div>
          <!-- Two buttons -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <button onclick="showToast('📷 Ouverture de la caméra...')" style="padding:14px;background:#fff;border:1.5px solid #E2ECF2;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;">
              📷 Prendre une photo
            </button>
            <button onclick="showToast('📄 Sélection de fichier...')" style="padding:14px;background:#fff;border:1.5px solid #E2ECF2;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;">
              📄 Importer PDF
            </button>
          </div>
          <!-- Preview area -->
          <div style="background:#fff;border-radius:16px;padding:14px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
              <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">Aperçu</div>
              <button onclick="showModal('confirm-delete-modal')" style="background:#FEF0EE;border:none;border-radius:8px;padding:4px 10px;font-size:12px;color:#E74C3C;cursor:pointer;font-weight:600;">✕ Supprimer</button>
            </div>
            <div style="height:120px;background:linear-gradient(135deg,#F0F8FF,#E8F4F8);border-radius:12px;display:flex;align-items:center;justify-content:center;gap:12px;">
              <div style="font-size:36px;">📄</div>
              <div>
                <div style="font-size:14px;font-weight:600;color:#1A2332;">ordonnance_Dr_Lefebvre.pdf</div>
                <div style="font-size:12px;color:#6B7A8D;">2.4 MB — 14 oct. 2024</div>
                <div style="display:flex;align-items:center;gap:4px;margin-top:4px;"><div style="width:6px;height:6px;background:#27AE60;border-radius:50%;"></div><span style="font-size:11px;color:#27AE60;font-weight:600;">Prêt à envoyer</span></div>
              </div>
            </div>
          </div>
          <!-- Notes -->
          <div>
            <label style="font-size:12px;font-weight:600;color:#6B7A8D;text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:8px;">Notes pour le pharmacien</label>
            <textarea rows="3" placeholder="Ex: J'ai une allergie à la pénicilline. Le Dr Lefebvre a prescrit ce traitement pour 30 jours..." style="width:100%;padding:14px 16px;background:#fff;border:1.5px solid #E2ECF2;border-radius:12px;font-size:14px;color:#1A2332;font-family:'DM Sans',sans-serif;outline:none;resize:none;line-height:1.5;">Allergie connue à la pénicilline. Traitement prescrit par Dr. Sophie Lefebvre le 14 oct. 2024.</textarea>
          </div>
          <!-- Security badge -->
          <div style="background:linear-gradient(135deg,#E8F4F8,#EBF7EF);border-radius:12px;padding:12px 16px;display:flex;align-items:center;gap:10px;border:1px solid rgba(26,107,138,0.12);">
            <span style="font-size:20px;">🔒</span>
            <p style="font-size:12px;color:#1A6B8A;font-weight:500;">Vos données sont chiffrées et sécurisées — Norme HDS</p>
          </div>
          <!-- CTA -->
          <button onclick="showToast('✅ Ordonnance envoyée avec succès ! Réf: ORD-2024-089')" style="width:100%;padding:16px;background:linear-gradient(135deg,#1A6B8A,#2196B3);color:#fff;border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;cursor:pointer;box-shadow:0 8px 24px rgba(26,107,138,0.35);">Envoyer mon ordonnance</button>
        </div>
      </div>
    </div>

    <!-- SCREEN 9 — PRESCRIPTION STATUS / DETAIL -->
    <div class="screen" id="screen12" data-device="mobile" style="background:#F4F9FC;display:flex;flex-direction:column;">

      <!-- Header -->
      <div style="background:linear-gradient(135deg,#1A6B8A,#0F3F54);padding:52px 16px 20px;flex-shrink:0;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
          <button onclick="goToScreen(11)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:36px;height:36px;color:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;">←</button>
          <div style="flex:1;">
            <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:800;color:#fff;">Détail ordonnance</div>
            <div style="font-size:11px;color:rgba(255,255,255,0.65);margin-top:1px;">#ORD-2024-089 · 14 oct. 2024</div>
          </div>
          <div style="background:rgba(39,174,96,0.25);border:1px solid rgba(39,174,96,0.4);border-radius:20px;padding:4px 10px;font-size:10px;font-weight:700;color:#4ADE80;">✓ VALIDÉE</div>
        </div>
        <!-- Barre de progression -->
        <div style="background:rgba(255,255,255,0.1);border-radius:12px;padding:12px 14px;">
          <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
            <span style="font-size:10px;color:rgba(255,255,255,0.7);font-weight:600;">Progression de la commande</span>
            <span style="font-size:10px;color:#4ADE80;font-weight:700;">En livraison</span>
          </div>
          <div style="display:flex;align-items:center;gap:0;">
            <div style="display:flex;flex-direction:column;align-items:center;gap:3px;">
              <div style="width:24px;height:24px;background:#27AE60;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;">✓</div>
              <div style="font-size:9px;color:rgba(255,255,255,0.6);white-space:nowrap;">Envoyée</div>
            </div>
            <div style="flex:1;height:2px;background:#27AE60;margin-bottom:12px;"></div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:3px;">
              <div style="width:24px;height:24px;background:#27AE60;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;">✓</div>
              <div style="font-size:9px;color:rgba(255,255,255,0.6);white-space:nowrap;">Validée</div>
            </div>
            <div style="flex:1;height:2px;background:#27AE60;margin-bottom:12px;"></div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:3px;">
              <div style="width:24px;height:24px;background:#27AE60;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;">🛵</div>
              <div style="font-size:9px;color:#4ADE80;font-weight:700;white-space:nowrap;">Livraison</div>
            </div>
            <div style="flex:1;height:2px;background:rgba(255,255,255,0.2);margin-bottom:12px;"></div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:3px;">
              <div style="width:24px;height:24px;background:rgba(255,255,255,0.15);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;color:rgba(255,255,255,0.4);">🏠</div>
              <div style="font-size:9px;color:rgba(255,255,255,0.4);white-space:nowrap;">Reçue</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contenu scrollable -->
      <div style="flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:12px;">

        <!-- Infos pharmacie -->
        <div style="background:#fff;border-radius:16px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);display:flex;align-items:center;gap:12px;">
          <div style="width:44px;height:44px;background:linear-gradient(135deg,#1A6B8A,#0F3F54);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;">🏥</div>
          <div style="flex:1;">
            <div style="font-size:14px;font-weight:700;color:#1A2332;font-family:'Plus Jakarta Sans',sans-serif;">Pharmacie du Plateau</div>
            <div style="font-size:11px;color:#6B7A8D;">📍 Abidjan, Plateau · Dr. Sophie Lefebvre</div>
          </div>
          <button onclick="showToast('Contacter la pharmacie')" style="background:#E8F4F8;border:none;border-radius:10px;padding:8px 10px;font-size:12px;cursor:pointer;">💬</button>
        </div>

        <!-- Médicaments prescrits -->
        <div style="background:#fff;border-radius:16px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;margin-bottom:12px;">💊 Médicaments prescrits</div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <div style="display:flex;align-items:center;gap:10px;padding:10px;background:#F4F9FC;border-radius:12px;">
              <div style="width:36px;height:36px;background:#E8F4F8;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">💊</div>
              <div style="flex:1;">
                <div style="font-size:13px;font-weight:700;color:#1A2332;">Metformine 850mg</div>
                <div style="font-size:11px;color:#6B7A8D;">2 fois/jour · 30 jours</div>
              </div>
              <div style="background:#E8F7EE;color:#27AE60;border-radius:8px;padding:3px 8px;font-size:10px;font-weight:700;">En stock ✓</div>
            </div>
            <div style="display:flex;align-items:center;gap:10px;padding:10px;background:#F4F9FC;border-radius:12px;">
              <div style="width:36px;height:36px;background:#E8F4F8;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">💊</div>
              <div style="flex:1;">
                <div style="font-size:13px;font-weight:700;color:#1A2332;">Amoxicilline 500mg</div>
                <div style="font-size:11px;color:#6B7A8D;">3 fois/jour · 7 jours</div>
              </div>
              <div style="background:#E8F7EE;color:#27AE60;border-radius:8px;padding:3px 8px;font-size:10px;font-weight:700;">En stock ✓</div>
            </div>
            <div style="display:flex;align-items:center;gap:10px;padding:10px;background:#FEF9EE;border-radius:12px;">
              <div style="width:36px;height:36px;background:#FEF9EE;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">💊</div>
              <div style="flex:1;">
                <div style="font-size:13px;font-weight:700;color:#1A2332;">Ibuprofène 400mg</div>
                <div style="font-size:11px;color:#6B7A8D;">Si douleur · max 3/jour</div>
              </div>
              <div style="background:#FEF9EE;color:#F39C12;border-radius:8px;padding:3px 8px;font-size:10px;font-weight:700;">Stock faible ⚠️</div>
            </div>
          </div>
        </div>

        <!-- Médecin prescripteur -->
        <div style="background:#fff;border-radius:16px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;margin-bottom:10px;">👨‍⚕️ Médecin prescripteur</div>
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:44px;height:44px;background:linear-gradient(135deg,#27AE60,#2ecc71);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;">👩‍⚕️</div>
            <div style="flex:1;">
              <div style="font-size:14px;font-weight:700;color:#1A2332;">Dr. Sophie Lefebvre</div>
              <div style="font-size:11px;color:#6B7A8D;">Médecin généraliste · Abidjan</div>
              <div style="font-size:10px;color:#1A6B8A;font-weight:600;">Ordonnance signée électroniquement ✓</div>
            </div>
          </div>
        </div>

        <!-- Livraison -->
        <div style="background:#fff;border-radius:16px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;margin-bottom:10px;">🛵 Suivi livraison</div>
          <div style="display:flex;align-items:center;gap:10px;background:#E8F7EE;border-radius:12px;padding:10px;">
            <div style="width:36px;height:36px;background:#27AE60;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;">🛵</div>
            <div style="flex:1;">
              <div style="font-size:12px;font-weight:700;color:#1A2332;">Mamadou Koné — En route</div>
              <div style="font-size:11px;color:#27AE60;font-weight:600;">ETA : ~12 min · Zone Cocody</div>
            </div>
            <button onclick="showToast('Appel livreur en cours…')" style="background:#27AE60;border:none;border-radius:10px;padding:8px;font-size:14px;cursor:pointer;">📞</button>
          </div>
          <div style="margin-top:8px;font-size:11px;color:#6B7A8D;">📍 Adresse : Cocody Riviera 3, Rue des Jardins, Abidjan</div>
        </div>

        <!-- Récap prix -->
        <div style="background:#fff;border-radius:16px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;margin-bottom:10px;">🧾 Récapitulatif</div>
          <div style="display:flex;flex-direction:column;gap:6px;">
            <div style="display:flex;justify-content:space-between;font-size:12px;color:#6B7A8D;">
              <span>Médicaments (3 articles)</span><span>11 500 F CFA</span>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:12px;color:#6B7A8D;">
              <span>Frais de livraison</span><span>1 000 F CFA</span>
            </div>
            <div style="height:1px;background:#F4F9FC;margin:4px 0;"></div>
            <div style="display:flex;justify-content:space-between;font-size:14px;font-weight:700;color:#1A2332;">
              <span>Total</span><span>12 500 F CFA</span>
            </div>
            <div style="font-size:10px;color:#27AE60;font-weight:600;">✓ Payé par Mobile Money</div>
          </div>
        </div>

        <!-- Boutons action -->
        <div style="display:flex;gap:10px;">
          <button onclick="showToast('Ordonnance téléchargée en PDF')" style="flex:1;padding:13px;background:#fff;color:#1A6B8A;border:1.5px solid #1A6B8A;border-radius:12px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📥 PDF</button>
          <button onclick="showToast('Support contacté')" style="flex:1;padding:13px;background:linear-gradient(135deg,#1A6B8A,#0F3F54);color:#fff;border:none;border-radius:12px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">❓ Support</button>
        </div>

        <div style="height:8px;"></div>
      </div>

      <!-- Dynamic zones (kept for JS compatibility) -->
      <div id="pdetail-header" style="display:none;"></div>
      <div id="pdetail-body" style="display:none;"></div>
    </div>

    <!-- SCREEN 10 — MY ORDERS LIST -->
    <div class="screen" id="screen13" data-device="mobile">
      <div style="height:100%;display:flex;flex-direction:column;background:#F4F9FC;">
        <!-- Header -->
        <div style="display:flex;align-items:center;gap:14px;padding:52px 20px 16px;background:#fff;border-bottom:1px solid #E2ECF2;">
          <button onclick="goToScreen(10)" style="width:36px;height:36px;background:#F4F9FC;border:none;border-radius:10px;cursor:pointer;font-size:18px;">←</button>
          <h1 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:700;color:#1A2332;">Mes Commandes</h1>
        </div>
        <!-- Filter tabs -->
        <div style="display:flex;gap:8px;padding:12px 16px;background:#fff;border-bottom:1px solid #E2ECF2;overflow-x:auto;">
          <button onclick="filterOrders(this,'all')" style="padding:8px 16px;background:#1A6B8A;color:#fff;border:none;border-radius:20px;font-size:13px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:'DM Sans',sans-serif;" class="order-tab active">Toutes</button>
          <button onclick="filterOrders(this,'ongoing')" style="padding:8px 16px;background:#F4F9FC;color:#6B7A8D;border:1.5px solid #E2ECF2;border-radius:20px;font-size:13px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:'DM Sans',sans-serif;" class="order-tab">En cours</button>
          <button onclick="filterOrders(this,'delivered')" style="padding:8px 16px;background:#F4F9FC;color:#6B7A8D;border:1.5px solid #E2ECF2;border-radius:20px;font-size:13px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:'DM Sans',sans-serif;" class="order-tab">Livrées</button>
          <button onclick="filterOrders(this,'cancelled')" style="padding:8px 16px;background:#F4F9FC;color:#6B7A8D;border:1.5px solid #E2ECF2;border-radius:20px;font-size:13px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:'DM Sans',sans-serif;" class="order-tab">Annulées</button>
        </div>
        <!-- Orders list -->
        <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;">
          <!-- Order card 1 -->
          <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
              <div>
                <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">#CMD-90214</div>
                <div style="font-size:12px;color:#6B7A8D;margin-top:2px;">14 oct. 2024 · Pharmacie Centrale CI</div>
              </div>
              <div style="background:#E8F4F8;border-radius:12px;padding:5px 10px;font-size:11px;font-weight:700;color:#1A6B8A;">En livraison 🚚</div>
            </div>
            <div style="height:1px;background:#F4F9FC;margin-bottom:10px;"></div>
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <div style="font-size:15px;font-weight:700;color:#1A2332;">12 500 FCFA</div>
              <button onclick="showOrderDetail('CMD-90214','14 oct. 2024','Pharmacie Centrale CI','12 500 FCFA','ongoing')" style="padding:8px 16px;background:linear-gradient(135deg,#1A6B8A,#2196B3);color:#fff;border:none;border-radius:20px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Voir détail →</button>
            </div>
          </div>
          <!-- Order card 2 -->
          <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
              <div>
                <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">#CMD-90201</div>
                <div style="font-size:12px;color:#6B7A8D;margin-top:2px;">10 oct. 2024 · PharmaCIV Abidjan</div>
              </div>
              <div style="background:#E8F7EE;border-radius:12px;padding:5px 10px;font-size:11px;font-weight:700;color:#27AE60;">Livrée ✓</div>
            </div>
            <div style="height:1px;background:#F4F9FC;margin-bottom:10px;"></div>
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <div style="font-size:15px;font-weight:700;color:#1A2332;">8 750 FCFA</div>
              <button onclick="showOrderDetail('CMD-90201','10 oct. 2024','PharmaCIV Abidjan','8 750 FCFA','delivered')" style="padding:8px 16px;background:#F4F9FC;color:#1A6B8A;border:1.5px solid #E2ECF2;border-radius:20px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Voir détail →</button>
            </div>
          </div>
          <!-- Order card 3 -->
          <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
              <div>
                <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">#CMD-90187</div>
                <div style="font-size:12px;color:#6B7A8D;margin-top:2px;">2 oct. 2024 · Pharmacie du Plateau</div>
              </div>
              <div style="background:#FFF3CD;border-radius:12px;padding:5px 10px;font-size:11px;font-weight:700;color:#F39C12;">En validation ⏳</div>
            </div>
            <div style="height:1px;background:#F4F9FC;margin-bottom:10px;"></div>
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <div style="font-size:15px;font-weight:700;color:#1A2332;">21 300 FCFA</div>
              <button onclick="showOrderDetail('CMD-90187','2 oct. 2024','Pharmacie du Plateau','21 300 FCFA','validation')" style="padding:8px 16px;background:#F4F9FC;color:#1A6B8A;border:1.5px solid #E2ECF2;border-radius:20px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Voir détail →</button>
            </div>
          </div>
          <!-- Order card 4 -->
          <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
              <div>
                <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">#CMD-90154</div>
                <div style="font-size:12px;color:#6B7A8D;margin-top:2px;">18 sept. 2024 · Pharma Express</div>
              </div>
              <div style="background:#FEF0EE;border-radius:12px;padding:5px 10px;font-size:11px;font-weight:700;color:#E74C3C;">Annulée ✕</div>
            </div>
            <div style="height:1px;background:#F4F9FC;margin-bottom:10px;"></div>
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <div style="font-size:15px;font-weight:700;color:#6B7A8D;text-decoration:line-through;">5 200 FCFA</div>
              <button onclick="showOrderDetail('CMD-90154','18 sept. 2024','Pharma Express','5 200 FCFA','cancelled')" style="padding:8px 16px;background:#F4F9FC;color:#6B7A8D;border:1.5px solid #E2ECF2;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">Voir détail →</button>
            </div>
          </div>
        </div>
      </div>
    </div>

<!-- ========================================
     SCREEN 11 — ORDER DETAIL & TRACKING
======================================== -->
<div class="screen" id="screen14" data-device="mobile" style="background:#F4F9FC;">
  <div id="od-header" style="background:#1A6B8A;padding:52px 20px 20px;display:flex;align-items:center;gap:12px;">
    <button onclick="goToScreen(13)" style="width:36px;height:36px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;font-size:18px;">←</button>
    <div>
      <div id="od-orderId" style="font-family:'Plus Jakarta Sans',sans-serif;font-size:17px;font-weight:700;color:#fff;">#CMD-90214</div>
      <div id="od-date" style="font-size:12px;color:rgba(255,255,255,0.7);">14 octobre 2024</div>
    </div>
    <div id="od-badge" style="margin-left:auto;background:rgba(255,255,255,0.15);border-radius:20px;padding:6px 12px;font-size:11px;font-weight:700;color:#fff;">🚚 En livraison</div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;">
    <!-- Status stepper -->
    <div style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;margin-bottom:14px;">Suivi de commande</div>
      <div id="od-stepper" style="display:flex;align-items:flex-start;gap:0;">
        <!-- Stepper injected by showOrderDetail() -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:0;flex:1;">
          <div style="width:28px;height:28px;background:#27AE60;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;color:#fff;font-weight:700;flex-shrink:0;">✓</div>
          <div style="width:2px;height:28px;background:#27AE60;"></div>
          <div style="font-size:10px;font-weight:600;color:#27AE60;text-align:center;margin-top:4px;">Validation</div>
        </div>
        <div style="height:2px;background:#27AE60;flex:1;margin-top:13px;"></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:0;flex:1;">
          <div style="width:28px;height:28px;background:#27AE60;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;color:#fff;font-weight:700;flex-shrink:0;">✓</div>
          <div style="width:2px;height:28px;background:#27AE60;"></div>
          <div style="font-size:10px;font-weight:600;color:#27AE60;text-align:center;margin-top:4px;">Préparation</div>
        </div>
        <div style="height:2px;background:#1A6B8A;flex:1;margin-top:13px;"></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:0;flex:1;">
          <div style="width:28px;height:28px;background:#1A6B8A;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;">🚚</div>
          <div style="width:2px;height:28px;background:#E2ECF2;"></div>
          <div style="font-size:10px;font-weight:600;color:#1A6B8A;text-align:center;margin-top:4px;">Livraison</div>
        </div>
        <div style="height:2px;background:#E2ECF2;flex:1;margin-top:13px;"></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:0;flex:1;">
          <div style="width:28px;height:28px;background:#E8F4F8;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;border:2px solid #E2ECF2;">○</div>
          <div style="width:2px;height:28px;background:#E2ECF2;"></div>
          <div style="font-size:10px;font-weight:500;color:#6B7A8D;text-align:center;margin-top:4px;">Livré</div>
        </div>
      </div>
    </div>
    <!-- Map placeholder -->
    <div style="background:#E8F4F8;border-radius:16px;height:140px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;">
      <div style="position:absolute;inset:0;background:linear-gradient(135deg,#d4eaf2,#b8d8e8);"></div>
      <div style="position:absolute;top:40%;left:55%;width:16px;height:20px;background:#E74C3C;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 2px 8px rgba(231,76,60,0.4);"></div>
      <div style="position:absolute;bottom:16px;left:16px;background:#fff;border-radius:10px;padding:8px 12px;box-shadow:0 2px 8px rgba(0,0,0,0.1);font-size:11px;font-weight:600;color:#1A2332;">📍 En route · ~2.4 km</div>
      <div style="position:absolute;top:12px;right:12px;background:rgba(255,255,255,0.9);border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-size:14px;cursor:pointer;" onclick="showModal('fullmap-modal')">⛶</div>
    </div>
    <!-- Info cards -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
      <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
        <div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">⏱ Estimation</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">Aujourd'hui</div>
        <div style="font-size:13px;font-weight:600;color:#1A6B8A;">17:30</div>
      </div>
      <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
        <div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">🚴 Livreur</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:12px;font-weight:700;color:#1A2332;">DHL Pharma</div>
        <div style="font-size:12px;color:#6B7A8D;">Express CI</div>
      </div>
    </div>
    <!-- Medicines list -->
    <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;margin-bottom:12px;">Médicaments commandés</div>
      <div id="od-meds-list" style="display:flex;flex-direction:column;gap:10px;">
        <!-- dynamic list -->
      </div>
      <div style="height:1px;background:#E2ECF2;margin:12px 0;"></div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
        <div style="font-size:12px;color:#6B7A8D;">Sous-total</div>
        <div id="od-subtotal" style="font-size:13px;font-weight:600;color:#1A2332;">0 FCFA</div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <div style="font-size:12px;color:#6B7A8D;">Livraison</div>
        <div id="od-delivery" style="font-size:13px;font-weight:600;color:#6B7A8D;">1 900 FCFA</div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:800;color:#1A2332;">Total</div>
        <div id="od-total" style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:800;color:#1A6B8A;">0 FCFA</div>
      </div>
    </div>
    <!-- Actions -->
    <div id="od-actions">
      <button onclick="showToast('✅ Réception confirmée !')" style="padding:14px;background:linear-gradient(135deg,#27AE60,#2ecc71);color:#fff;border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;width:100%;">Valider la réception</button>
      <button onclick="showModal('call-modal')" style="padding:14px;background:transparent;color:#1A6B8A;border:2px solid #1A6B8A;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;width:100%;margin-top:8px;">Contacter le livreur</button>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 12 — PAYMENT
======================================== -->
<div class="screen" id="screen15" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:#1A6B8A;padding:52px 20px 20px;display:flex;align-items:center;gap:12px;">
    <button onclick="goToScreen(14)" style="width:36px;height:36px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;font-size:18px;">←</button>
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:17px;font-weight:700;color:#fff;">Paiement sécurisé</div>
    <div style="margin-left:auto;font-size:18px;">🔒</div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;">
    <!-- Order summary -->
    <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;margin-bottom:12px;">Récapitulatif #CMD-90214</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;justify-content:space-between;"><span style="font-size:13px;color:#6B7A8D;">Amoxicilline 500mg ×2</span><span style="font-size:13px;color:#1A2332;font-weight:600;">4 200 FCFA</span></div>
        <div style="display:flex;justify-content:space-between;"><span style="font-size:13px;color:#6B7A8D;">Paracétamol 1g ×3</span><span style="font-size:13px;color:#1A2332;font-weight:600;">3 600 FCFA</span></div>
        <div style="display:flex;justify-content:space-between;"><span style="font-size:13px;color:#6B7A8D;">Metformine 850mg ×1</span><span style="font-size:13px;color:#1A2332;font-weight:600;">2 800 FCFA</span></div>
        <div style="height:1px;background:#F4F9FC;margin:4px 0;"></div>
        <div style="display:flex;justify-content:space-between;"><span style="font-size:12px;color:#6B7A8D;">Livraison</span><span style="font-size:12px;color:#6B7A8D;">1 900 FCFA</span></div>
        <div style="display:flex;justify-content:space-between;border-top:1.5px solid #E2ECF2;padding-top:8px;margin-top:4px;"><span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:800;color:#1A2332;">Total</span><span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:800;color:#1A6B8A;">12 500 FCFA</span></div>
      </div>
    </div>
    <!-- Payment methods -->
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;padding:0 2px;">Choisir un mode de paiement</div>
    <!-- Mobile Money -->
    <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 12px rgba(0,0,0,0.06);border:2px solid #1A6B8A;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
        <div style="font-size:22px;">📱</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">Mobile Money</div>
        <div style="margin-left:auto;width:18px;height:18px;background:#1A6B8A;border-radius:50%;border:2px solid #1A6B8A;display:flex;align-items:center;justify-content:center;"><div style="width:8px;height:8px;background:#fff;border-radius:50%;"></div></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <label onclick="showToast('MTN Mobile Money sélectionné')" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:#F4F9FC;border-radius:10px;cursor:pointer;">
          <div style="width:36px;height:36px;background:#FFCC00;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;">📶</div>
          <span style="font-size:13px;font-weight:600;color:#1A2332;">MTN Mobile Money</span>
          <input type="radio" name="pay" checked style="margin-left:auto;accent-color:#1A6B8A;">
        </label>
        <label onclick="showToast('Orange Money sélectionné')" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:#F4F9FC;border-radius:10px;cursor:pointer;">
          <div style="width:36px;height:36px;background:#FF6600;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;">🟠</div>
          <span style="font-size:13px;font-weight:600;color:#1A2332;">Orange Money</span>
          <input type="radio" name="pay" style="margin-left:auto;accent-color:#1A6B8A;">
        </label>
        <label onclick="showToast('Wave sélectionné')" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:#F4F9FC;border-radius:10px;cursor:pointer;">
          <div style="width:36px;height:36px;background:#1DC1EC;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;">🌊</div>
          <span style="font-size:13px;font-weight:600;color:#1A2332;">Wave</span>
          <input type="radio" name="pay" style="margin-left:auto;accent-color:#1A6B8A;">
        </label>
      </div>
    </div>
    <!-- Card -->
    <div onclick="showToast('Carte bancaire')" style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 12px rgba(0,0,0,0.06);display:flex;align-items:center;gap:10px;cursor:pointer;">
      <div style="font-size:22px;">💳</div>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">Carte Bancaire</div>
      <div style="margin-left:auto;font-size:12px;color:#6B7A8D;">Visa / Mastercard</div>
    </div>
    <!-- Cash Removed -->
    <div style="background:var(--primary-light);border-radius:16px;padding:14px 16px;display:flex;align-items:center;gap:10px;border:1px solid rgba(26,107,138,0.15);">
      <div style="font-size:22px;">ℹ️</div>
      <div style="font-family:'DM Sans',sans-serif;font-size:12px;font-weight:500;color:var(--primary);line-height:1.5;">Le paiement préalable est exigé afin de garantir la préparation sécurisée de votre ordonnance.</div>
    </div>
    <!-- SSL badge -->
    <div style="display:flex;align-items:center;justify-content:center;gap:8px;background:#E8F7EE;border-radius:12px;padding:10px;border:1px solid rgba(39,174,96,0.2);">
      <span style="font-size:14px;">🔒</span>
      <span style="font-size:12px;font-weight:600;color:#27AE60;">Paiement sécurisé SSL 256-bit</span>
    </div>
    <button onclick="showSuccess('payment', '#CMD-90214')" style="padding:16px;background:linear-gradient(135deg,#27AE60,#2ecc71);color:#fff;border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;width:100%;box-shadow:0 8px 24px rgba(39,174,96,0.35);">Confirmer et payer — 12 500 FCFA</button>
  </div>
</div>

<!-- ========================================
     SCREEN 13 — CHAT / CONSULTATION (PATIENT)
======================================== -->
<div class="screen" id="screen16" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:#1A6B8A;padding:52px 16px 16px;display:flex;align-items:center;gap:12px;">
    <button onclick="goToScreen(74)" style="width:36px;height:36px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;font-size:18px;">←</button>
    <div style="width:38px;height:38px;background:rgba(255,255,255,0.2);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;">👩‍⚕️</div>
    <div>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:#fff;">Dr. Sophie Lefebvre</div>
      <div style="display:flex;align-items:center;gap:4px;"><div style="width:7px;height:7px;background:#4ADE80;border-radius:50%;"></div><div style="font-size:11px;color:rgba(255,255,255,0.8);">En ligne</div></div>
    </div>
    <button onclick="showModal('call-modal')" style="margin-left:auto;width:36px;height:36px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;">📞</button>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;">
    <!-- Date divider -->
    <div style="text-align:center;font-size:11px;color:#6B7A8D;background:#E8F4F8;border-radius:20px;padding:4px 12px;align-self:center;">14 octobre 2024 · 10:30</div>
    <!-- Pharmacist message -->
    <div style="display:flex;gap:8px;align-items:flex-end;">
      <div style="width:28px;height:28px;background:#E8F4F8;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">👩‍⚕️</div>
      <div>
        <div style="background:#fff;border-radius:16px 16px 16px 4px;padding:12px 14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);max-width:240px;">
          <div style="font-size:14px;color:#1A2332;line-height:1.5;">Bonjour Moussa ! J'ai bien reçu votre ordonnance. Puis-je vous poser quelques questions sur vos symptômes ?</div>
        </div>
        <div style="font-size:10px;color:#6B7A8D;margin-top:4px;padding-left:4px;">10:30</div>
      </div>
    </div>
    <!-- Patient message -->
    <div style="display:flex;gap:8px;align-items:flex-end;justify-content:flex-end;">
      <div style="text-align:right;">
        <div style="background:linear-gradient(135deg,#1A6B8A,#2196B3);border-radius:16px 16px 4px 16px;padding:12px 14px;max-width:240px;display:inline-block;">
          <div style="font-size:14px;color:#fff;line-height:1.5;">Bonjour ! Oui bien sûr, j'ai de la fièvre depuis 3 jours et des douleurs à la gorge.</div>
        </div>
        <div style="font-size:10px;color:#6B7A8D;margin-top:4px;">10:32 ✓✓</div>
      </div>
    </div>
    <!-- Pharmacist message with document -->
    <div style="display:flex;gap:8px;align-items:flex-end;">
      <div style="width:28px;height:28px;background:#E8F4F8;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">👩‍⚕️</div>
      <div>
        <div style="background:#fff;border-radius:16px 16px 16px 4px;padding:12px 14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);max-width:240px;">
          <div style="font-size:14px;color:#1A2332;line-height:1.5;margin-bottom:10px;">Je valide votre ordonnance. Voici les instructions de posologie :</div>
          <div onclick="showModal('pdf-modal')" style="display:flex;align-items:center;gap:8px;background:#E8F4F8;border-radius:10px;padding:8px 10px;cursor:pointer;">
            <div style="font-size:20px;">📄</div>
            <div><div style="font-size:12px;font-weight:700;color:#1A6B8A;">posologie.pdf</div><div style="font-size:10px;color:#6B7A8D;">124 Ko</div></div>
          </div>
        </div>
        <div style="font-size:10px;color:#6B7A8D;margin-top:4px;padding-left:4px;">10:45</div>
      </div>
    </div>
    <!-- Quick replies -->
    <div style="display:flex;gap:8px;flex-wrap:wrap;padding:4px 0;">
      <button onclick="showToast('Merci !')" style="padding:8px 14px;background:#fff;border:1.5px solid #E2ECF2;border-radius:20px;font-size:12px;font-weight:600;color:#1A6B8A;cursor:pointer;font-family:'DM Sans',sans-serif;">Merci 👍</button>
      <button onclick="showToast('Question posologie')" style="padding:8px 14px;background:#fff;border:1.5px solid #E2ECF2;border-radius:20px;font-size:12px;font-weight:600;color:#1A6B8A;cursor:pointer;font-family:'DM Sans',sans-serif;">Question sur la posologie</button>
      <button onclick="showToast('Reçu !')" style="padding:8px 14px;background:#fff;border:1.5px solid #E2ECF2;border-radius:20px;font-size:12px;font-weight:600;color:#1A6B8A;cursor:pointer;font-family:'DM Sans',sans-serif;">Bien reçu ✓</button>
    </div>
  </div>
  <!-- Input bar -->
  <div style="background:#fff;padding:12px 16px;border-top:1.5px solid #E2ECF2;display:flex;align-items:center;gap:8px;">
    <button onclick="showToast('Pièce jointe')" style="width:36px;height:36px;background:#F4F9FC;border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;flex-shrink:0;">📎</button>
    <input type="text" placeholder="Votre message..." style="flex:1;border:1.5px solid #E2ECF2;border-radius:50px;padding:10px 14px;font-size:14px;font-family:'DM Sans',sans-serif;outline:none;background:#F4F9FC;">
    <button onclick="showToast('Vocal...')" style="width:36px;height:36px;background:#F4F9FC;border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;flex-shrink:0;">🎤</button>
    <button onclick="sendMessage()" style="width:36px;height:36px;background:#1A6B8A;border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:14px;flex-shrink:0;color:#fff;">➤</button>
  </div>
</div>

<!-- ========================================
     SCREEN 14 — PATIENT PROFILE
======================================== -->
<div class="screen" id="screen17" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:#1A6B8A;padding:52px 20px 24px;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
      <button onclick="goToScreen(10)" style="width:36px;height:36px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;font-size:18px;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:17px;font-weight:700;color:#fff;">Mon Profil</div>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
      <div style="width:72px;height:72px;background:rgba(255,255,255,0.2);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:32px;border:3px solid rgba(255,255,255,0.4);">👨🏿</div>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:700;color:#fff;">Moussa Koné</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.7);">+225 07 45 89 23</div>
      <div style="background:rgba(39,174,96,0.2);border:1px solid rgba(39,174,96,0.4);border-radius:20px;padding:4px 12px;font-size:11px;font-weight:700;color:#4ADE80;">✓ Compte vérifié</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;">
    <!-- Personal info -->
    <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;margin-bottom:12px;">Informations personnelles</div>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;justify-content:space-between;align-items:center;padding:10px;background:#F4F9FC;border-radius:10px;">
          <div><div style="font-size:11px;color:#6B7A8D;">Nom complet</div><div style="font-size:13px;font-weight:600;color:#1A2332;">Moussa Koné</div></div>
          <button onclick="showModal('edit-field-modal')" style="font-size:12px;color:#1A6B8A;background:none;border:none;cursor:pointer;font-weight:600;">✏️</button>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:10px;background:#F4F9FC;border-radius:10px;">
          <div><div style="font-size:11px;color:#6B7A8D;">Âge</div><div style="font-size:13px;font-weight:600;color:#1A2332;">34 ans</div></div>
          <button onclick="showModal('edit-field-modal')" style="font-size:12px;color:#1A6B8A;background:none;border:none;cursor:pointer;font-weight:600;">✏️</button>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:10px;background:#F4F9FC;border-radius:10px;">
          <div><div style="font-size:11px;color:#6B7A8D;">Groupe sanguin</div><div style="font-size:13px;font-weight:600;color:#E74C3C;">O+</div></div>
          <button onclick="showModal('edit-field-modal')" style="font-size:12px;color:#1A6B8A;background:none;border:none;cursor:pointer;font-weight:600;">✏️</button>
        </div>
      </div>
    </div>
    <!-- Security -->
    <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;margin-bottom:12px;">Sécurité</div>
      <div onclick="showModal('edit-field-modal')" style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:#F4F9FC;border-radius:10px;cursor:pointer;margin-bottom:8px;">
        <div style="display:flex;align-items:center;gap:8px;"><span>🔑</span><span style="font-size:13px;font-weight:600;color:#1A2332;">Changer mot de passe</span></div>
        <span style="color:#6B7A8D;">›</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:#F4F9FC;border-radius:10px;">
        <div style="display:flex;align-items:center;gap:8px;"><span>🛡️</span><span style="font-size:13px;font-weight:600;color:#1A2332;">Authentification 2FA</span></div>
        <div onclick="showToast('2FA activée')" style="width:44px;height:24px;background:#27AE60;border-radius:50px;position:relative;cursor:pointer;"><div style="width:20px;height:20px;background:#fff;border-radius:50%;position:absolute;right:2px;top:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2);"></div></div>
      </div>
    </div>
    <!-- Notifications -->
    <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;margin-bottom:12px;">Notifications</div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:10px;background:#F4F9FC;border-radius:10px;margin-bottom:8px;">
        <div style="display:flex;align-items:center;gap:8px;"><span>🔔</span><span style="font-size:13px;color:#1A2332;">Notifications Push</span></div>
        <div onclick="showToast('Push activé')" style="width:44px;height:24px;background:#27AE60;border-radius:50px;position:relative;cursor:pointer;"><div style="width:20px;height:20px;background:#fff;border-radius:50%;position:absolute;right:2px;top:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2);"></div></div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:10px;background:#F4F9FC;border-radius:10px;">
        <div style="display:flex;align-items:center;gap:8px;"><span>💬</span><span style="font-size:13px;color:#1A2332;">SMS</span></div>
        <div onclick="showToast('SMS activé')" style="width:44px;height:24px;background:#27AE60;border-radius:50px;position:relative;cursor:pointer;"><div style="width:20px;height:20px;background:#fff;border-radius:50%;position:absolute;right:2px;top:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2);"></div></div>
      </div>
    </div>
    <!-- Language -->
    <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;margin-bottom:12px;">Langue</div>
      <div style="display:flex;gap:8px;">
        <button style="flex:1;padding:10px;background:#1A6B8A;color:#fff;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Français</button>
        <button onclick="showToast('Wolof sélectionné')" style="flex:1;padding:10px;background:#F4F9FC;color:#6B7A8D;border:1.5px solid #E2ECF2;border-radius:10px;font-size:12px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">Wolof</button>
        <button onclick="showToast('Dioula sélectionné')" style="flex:1;padding:10px;background:#F4F9FC;color:#6B7A8D;border:1.5px solid #E2ECF2;border-radius:10px;font-size:12px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">Dioula</button>
      </div>
    </div>
    <button onclick="showToast('Déconnexion...')" style="padding:14px;background:transparent;color:#E74C3C;border:2px solid #E74C3C;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;width:100%;">Se déconnecter</button>
  </div>
</div>

<!-- ========================================
     SCREEN 15 — NOTIFICATIONS
======================================== -->
<div class="screen" id="screen18" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:#1A6B8A;padding:52px 20px 20px;display:flex;align-items:center;gap:12px;">
    <button onclick="goToScreen(10)" style="width:36px;height:36px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;font-size:18px;">←</button>
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:17px;font-weight:700;color:#fff;">Notifications</div>
    <button onclick="showToast('Tout marquer comme lu')" style="margin-left:auto;font-size:12px;color:rgba(255,255,255,0.8);background:none;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;">Tout lire</button>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:4px;">
    <div style="font-size:12px;font-weight:700;color:#6B7A8D;padding:8px 0 4px;">AUJOURD'HUI</div>
    <!-- Notif 1 -->
    <div onclick="showToast('Ordonnance validée')" style="background:#fff;border-radius:14px;padding:14px;display:flex;gap:12px;align-items:flex-start;cursor:pointer;border-left:3px solid #27AE60;">
      <div style="width:40px;height:40px;background:#E8F7EE;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">✅</div>
      <div style="flex:1;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;">Ordonnance validée</div>
        <div style="font-size:12px;color:#6B7A8D;line-height:1.4;margin-top:2px;">Votre ordonnance #ORD-2024-089 a été approuvée par Dr. Sophie Lefebvre</div>
        <div style="font-size:11px;color:#27AE60;margin-top:4px;font-weight:600;">Il y a 15 min</div>
      </div>
    </div>
    <!-- Notif 2 -->
    <div onclick="showToast('Livraison en cours')" style="background:#fff;border-radius:14px;padding:14px;display:flex;gap:12px;align-items:flex-start;cursor:pointer;border-left:3px solid #1A6B8A;">
      <div style="width:40px;height:40px;background:#E8F4F8;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">🚚</div>
      <div style="flex:1;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;">Livraison en cours</div>
        <div style="font-size:12px;color:#6B7A8D;line-height:1.4;margin-top:2px;">Votre commande #CMD-90214 est en route. Livraison estimée à 17h30</div>
        <div style="font-size:11px;color:#1A6B8A;margin-top:4px;font-weight:600;">Il y a 1h</div>
      </div>
      <div style="width:8px;height:8px;background:#1A6B8A;border-radius:50%;flex-shrink:0;margin-top:4px;"></div>
    </div>
    <!-- Notif 3 -->
    <div onclick="showToast('Rappel médicament')" style="background:#fff;border-radius:14px;padding:14px;display:flex;gap:12px;align-items:flex-start;cursor:pointer;border-left:3px solid #F39C12;">
      <div style="width:40px;height:40px;background:#FEF9EE;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">🔔</div>
      <div style="flex:1;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#1A2332;">Rappel médicament</div>
        <div style="font-size:12px;color:#6B7A8D;line-height:1.4;margin-top:2px;">Prenez votre Metformine 850mg avec le repas de midi</div>
        <div style="font-size:11px;color:#F39C12;margin-top:4px;font-weight:600;">Il y a 2h</div>
      </div>
    </div>
    <div style="font-size:12px;font-weight:700;color:#6B7A8D;padding:12px 0 4px;">CETTE SEMAINE</div>
    <!-- Notif 4 -->
    <div onclick="showToast('Message pharmacien')" style="background:#F8F9FA;border-radius:14px;padding:14px;display:flex;gap:12px;align-items:flex-start;cursor:pointer;">
      <div style="width:40px;height:40px;background:#E8F4F8;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">💬</div>
      <div style="flex:1;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:600;color:#6B7A8D;">Message du pharmacien</div>
        <div style="font-size:12px;color:#6B7A8D;line-height:1.4;margin-top:2px;">Dr. Lefebvre: "Bonjour, avez-vous bien reçu votre médicament?"</div>
        <div style="font-size:11px;color:#6B7A8D;margin-top:4px;">13 oct.</div>
      </div>
    </div>
    <!-- Notif 5 -->
    <div onclick="showToast('Alerte stock')" style="background:#F8F9FA;border-radius:14px;padding:14px;display:flex;gap:12px;align-items:flex-start;cursor:pointer;">
      <div style="width:40px;height:40px;background:#FEF9EE;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">⚠️</div>
      <div style="flex:1;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:600;color:#6B7A8D;">Alerte stock — Paracétamol</div>
        <div style="font-size:12px;color:#6B7A8D;line-height:1.4;margin-top:2px;">Le Paracétamol 500mg est à nouveau disponible à la Pharmacie du Plateau</div>
        <div style="font-size:11px;color:#6B7A8D;margin-top:4px;">12 oct.</div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 16 — PHARMACY LOGIN
======================================== -->
<div class="screen" id="screen29" data-device="mobile">
  <div style="background:linear-gradient(135deg,#1A6B8A,#0F3F54);padding:54px 20px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
      <button onclick="goToScreen(10)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Catalogue médicaments</div>
    </div>
    <div style="display:flex;gap:10px;align-items:center;">
      <div style="flex:1;background:rgba(255,255,255,0.15);border-radius:14px;padding:10px 14px;display:flex;align-items:center;gap:8px;">
        <span style="font-size:16px;">🔍</span>
        <input placeholder="Chercher un produit..." style="background:none;border:none;outline:none;color:#fff;font-size:14px;font-family:'DM Sans',sans-serif;flex:1;" />
      </div>
      <button onclick="showModal('filter-catalog-modal')" style="width:44px;height:44px;background:rgba(255,255,255,0.15);border:none;border-radius:14px;color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:18px;">⌥</button>
    </div>
  </div>
  <div style="display:flex;gap:8px;padding:12px 16px;overflow-x:auto;flex-shrink:0;" id="catalog-cats">
    <div class="cat-chip active" onclick="filterCatalogCat('tous', this)" style="background:#1A6B8A;color:#fff;border-radius:50px;padding:6px 14px;font-size:12px;font-weight:700;white-space:nowrap;cursor:pointer;">Tous</div>
    <div class="cat-chip" onclick="filterCatalogCat('antibio', this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:6px 14px;font-size:12px;white-space:nowrap;cursor:pointer;">Antibiotiques</div>
    <div class="cat-chip" onclick="filterCatalogCat('analge', this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:6px 14px;font-size:12px;white-space:nowrap;cursor:pointer;">Analgésiques</div>
    <div class="cat-chip" onclick="filterCatalogCat('diabete', this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:6px 14px;font-size:12px;white-space:nowrap;cursor:pointer;">Diabète</div>
    <div class="cat-chip" onclick="filterCatalogCat('vitamine', this)" style="background:#F4F9FC;color:#6B7A8D;border-radius:50px;padding:6px 14px;font-size:12px;white-space:nowrap;cursor:pointer;">Vitamines</div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:0 16px 20px;">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;" id="catalog-grid">
      <div class="med-card-premium" onclick="goToScreen(30)">
        <div class="img-container"><div style="font-size:40px;">💊</div></div>
        <div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:2px;">Amoxicilline</div>
        <div style="font-size:11px;color:var(--text-muted);margin-bottom:8px;">500mg · Boîte 12cp</div>
        <div class="price">2 100 FCFA</div>
        <div class="badge-success" style="display:inline-block;margin-top:8px;">✓ En stock</div>
        <button class="add-btn" onclick="event.stopPropagation();showToast('🛒 Ajouté au panier')">+</button>
      </div>
      <div class="med-card-premium" onclick="goToScreen(30)">
        <div class="img-container"><div style="font-size:40px;">💊</div></div>
        <div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:2px;">Paracétamol</div>
        <div style="font-size:11px;color:var(--text-muted);margin-bottom:8px;">1g · Boîte 8cp</div>
        <div class="price">1 200 FCFA</div>
        <div class="badge-danger" style="display:inline-block;margin-top:8px;">✗ Rupture</div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 27 — FICHE MÉDICAMENT
======================================== -->
<div class="screen" id="screen30" data-device="mobile">
  <div style="background:linear-gradient(135deg,#1A6B8A,#0F3F54);padding:54px 20px 32px;flex-shrink:0;position:relative;overflow:hidden;">
    <div style="position:absolute;top:-20px;right:-20px;width:120px;height:120px;background:rgba(255,255,255,0.05);border-radius:50%;"></div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;position:relative;z-index:2;">
      <button onclick="goToScreen(29)" style="background:rgba(255,255,255,0.15);border:none;border-radius:12px;width:40px;height:40px;color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;backdrop-filter:blur(10px);">←</button>
      <button onclick="showToast('❤️ Ajouté aux favoris')" style="background:rgba(255,255,255,0.15);border:none;border-radius:12px;width:40px;height:40px;color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;backdrop-filter:blur(10px);">❤</button>
    </div>
    <div style="text-align:center;position:relative;z-index:2;">
      <div style="width:100px;height:100px;background:rgba(255,255,255,0.15);border-radius:24px;display:flex;align-items:center;justify-content:center;font-size:54px;margin:0 auto 20px;backdrop-filter:blur(10px);box-shadow:0 12px 24px rgba(0,0,0,0.1);">💊</div>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;font-weight:800;color:#fff;margin-bottom:4px;">Amoxicilline 500mg</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:12px;">Antibiotique · Boîte 12 comprimés</div>
      <div style="font-size:22px;font-weight:800;color:#fff;">2 100 FCFA</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:24px 20px;background:var(--bg);border-radius:32px 32px 0 0;margin-top:-24px;position:relative;z-index:3;">
    <div style="background:var(--secondary-light);border-radius:16px;padding:14px;margin-bottom:20px;display:flex;align-items:center;gap:12px;border:1px solid rgba(39,174,96,0.2);">
      <div style="width:32px;height:32px;background:var(--secondary);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;">✓</div>
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:700;color:var(--secondary);">Disponible en stock</div>
        <div style="font-size:11px;color:var(--text-muted);">Pharmacie du Plateau (à 2.4 km)</div>
      </div>
    </div>
    <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);margin-bottom:12px;">
      <div style="font-size:13px;font-weight:700;color:#1A2332;margin-bottom:8px;">Posologie standard</div>
      <div style="font-size:13px;color:#6B7A8D;line-height:1.6;">1 comprimé toutes les 8 heures pendant 7 à 10 jours.</div>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;background:#fff;padding:12px 16px;border-radius:16px;">
      <div style="font-size:14px;font-weight:700;">Quantité</div>
      <div style="display:flex;align-items:center;gap:16px;">
        <button onclick="updateQty(-1)" style="width:36px;height:36px;border-radius:10px;border:1px solid var(--border);">-</button>
        <span id="med-qty" style="font-size:16px;font-weight:800;">1</span>
        <button onclick="updateQty(1)" style="width:36px;height:36px;border-radius:10px;border:1px solid var(--primary);">+</button>
      </div>
    </div>
    <button onclick="showToast('🛒 Ajouté au panier');goToScreen(31)" style="width:100%;padding:18px;background:linear-gradient(135deg,var(--primary),#2196B3);color:#fff;border:none;border-radius:16px;font-weight:700;cursor:pointer;">Ajouter au panier</button>
  </div>
</div>

<!-- ========================================
     SCREEN 28 — PANIER
======================================== -->
<div class="screen" id="screen31" data-device="mobile">
  <div style="background:linear-gradient(135deg,#1A6B8A,#0F3F54);padding:54px 20px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;justify-content:space-between;">
      <button onclick="goToScreen(29)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Mon Panier</div>
      <div style="background:rgba(255,255,255,0.15);border-radius:50px;padding:4px 12px;font-size:12px;font-weight:700;color:#fff;">3 articles</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;">
    <div style="background:#fff;border-radius:16px;padding:16px;text-align:center;">
       🔍 Panier vide pour le moment
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 29 — RECHERCHE PHARMACIE
======================================== -->
<div class="screen" id="screen32" data-device="mobile" style="background:#F4F9FC;display:flex;flex-direction:column;">

  <!-- HEADER -->
  <div style="background:linear-gradient(135deg,#1A6B8A,#0F3F54);padding:52px 16px 18px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
      <button onclick="goToScreen(10)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:36px;height:36px;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0;display:flex;align-items:center;justify-content:center;">←</button>
      <div style="flex:1;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Pharmacies proches</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.65);margin-top:1px;">📍 Abidjan, Plateau · 6 résultats</div>
      </div>
      <button onclick="showToast('Vue carte')" style="background:rgba(255,255,255,0.15);border:none;border-radius:10px;width:36px;height:36px;color:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;">🗺</button>
    </div>

    <!-- Barre de recherche -->
    <div style="background:rgba(255,255,255,0.15);border-radius:12px;display:flex;align-items:center;gap:8px;padding:10px 14px;border:1px solid rgba(255,255,255,0.2);">
      <span style="font-size:15px;">🔍</span>
      <input placeholder="Rechercher une pharmacie…" style="background:none;border:none;outline:none;color:#fff;font-size:13px;font-family:'DM Sans',sans-serif;flex:1;" onclick="showToast('Recherche active')"/>
      <span style="font-size:13px;color:rgba(255,255,255,0.5);">⌨</span>
    </div>

    <!-- Filtres -->
    <div style="display:flex;gap:8px;overflow-x:auto;padding-top:12px;padding-bottom:2px;scrollbar-width:none;">
      <div id="phfil-all" onclick="pharmaFilter('all')" style="flex-shrink:0;background:#fff;color:#1A6B8A;border-radius:50px;padding:6px 14px;font-size:11px;font-weight:700;cursor:pointer;white-space:nowrap;">Toutes</div>
      <div id="phfil-open" onclick="pharmaFilter('open')" style="flex-shrink:0;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.9);border-radius:50px;padding:6px 14px;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;border:1px solid rgba(255,255,255,0.2);">🟢 Ouvert maintenant</div>
      <div id="phfil-24h" onclick="pharmaFilter('24h')" style="flex-shrink:0;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.9);border-radius:50px;padding:6px 14px;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;border:1px solid rgba(255,255,255,0.2);">🌙 Garde 24h</div>
      <div id="phfil-delivery" onclick="pharmaFilter('delivery')" style="flex-shrink:0;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.9);border-radius:50px;padding:6px 14px;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;border:1px solid rgba(255,255,255,0.2);">🛵 Livraison</div>
      <div id="phfil-close" onclick="pharmaFilter('close')" style="flex-shrink:0;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.9);border-radius:50px;padding:6px 14px;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;border:1px solid rgba(255,255,255,0.2);">📍 &lt; 1 km</div>
    </div>
  </div>

  <!-- CARTE MINIATURE -->
  <div style="flex-shrink:0;height:110px;background:linear-gradient(180deg,#C5DFF0 0%,#A8CCE0 100%);position:relative;overflow:hidden;cursor:pointer;" onclick="showToast('Ouverture de la carte…')">
    <!-- Grille style carte -->
    <div style="position:absolute;inset:0;opacity:0.15;background-image:linear-gradient(#1A6B8A 1px,transparent 1px),linear-gradient(90deg,#1A6B8A 1px,transparent 1px);background-size:30px 30px;"></div>
    <!-- Routes simulées -->
    <div style="position:absolute;top:40px;left:0;right:0;height:8px;background:rgba(255,255,255,0.6);border-radius:4px;margin:0 10px;"></div>
    <div style="position:absolute;top:20px;left:60px;bottom:20px;width:6px;background:rgba(255,255,255,0.5);border-radius:3px;"></div>
    <div style="position:absolute;top:20px;left:160px;bottom:20px;width:6px;background:rgba(255,255,255,0.5);border-radius:3px;"></div>
    <!-- Pins pharmacies -->
    <div style="position:absolute;top:20px;left:55px;font-size:18px;">📍</div>
    <div style="position:absolute;top:50px;left:150px;font-size:18px;">📍</div>
    <div style="position:absolute;top:30px;right:50px;font-size:18px;">📍</div>
    <!-- Pin utilisateur -->
    <div style="position:absolute;top:35px;left:100px;width:20px;height:20px;background:#1A6B8A;border-radius:50%;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.3);"></div>
    <!-- Bouton "Voir la carte" -->
    <div style="position:absolute;bottom:10px;right:12px;background:#fff;border-radius:20px;padding:5px 12px;font-size:11px;font-weight:700;color:#1A6B8A;box-shadow:0 2px 8px rgba(0,0,0,0.15);">Voir la carte →</div>
    <div style="position:absolute;bottom:10px;left:12px;background:rgba(26,107,138,0.9);border-radius:20px;padding:5px 12px;font-size:11px;font-weight:600;color:#fff;">6 pharmacies trouvées</div>
  </div>

  <!-- LISTE -->
  <div style="flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px;">

    <!-- Pharmacie 1 — Ouverte, proche, livraison -->
    <div onclick="goToScreen(33)" style="background:#fff;border-radius:16px;padding:14px;box-shadow:0 2px 10px rgba(0,0,0,0.06);cursor:pointer;border:1.5px solid transparent;transition:border 0.2s;" onmouseover="this.style.borderColor='#1A6B8A'" onmouseout="this.style.borderColor='transparent'">
      <div style="display:flex;align-items:flex-start;gap:12px;">
        <div style="width:48px;height:48px;background:linear-gradient(135deg,#E8F4F8,#C5DFF0);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;">⚕️</div>
        <div style="flex:1;min-width:0;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">Pharmacie du Plateau</div>
            <div style="font-size:11px;font-weight:700;color:#27AE60;background:#E8F7EE;padding:2px 8px;border-radius:20px;white-space:nowrap;">Ouvert</div>
          </div>
          <div style="font-size:11px;color:#6B7A8D;margin-top:2px;">📍 0.8 km · Ferme à 21h00</div>
          <div style="display:flex;gap:4px;margin-top:8px;flex-wrap:wrap;">
            <span style="background:#E8F4F8;color:#1A6B8A;border-radius:20px;padding:3px 8px;font-size:10px;font-weight:600;">🛵 Livraison</span>
            <span style="background:#E8F7EE;color:#27AE60;border-radius:20px;padding:3px 8px;font-size:10px;font-weight:600;">💊 Stock vérifié</span>
          </div>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px;padding-top:10px;border-top:1px solid #F4F9FC;">
        <div style="display:flex;align-items:center;gap:4px;"><span style="color:#F39C12;font-size:12px;">★★★★</span><span style="font-size:11px;color:#6B7A8D;">4.2 (38)</span></div>
        <button onclick="event.stopPropagation();showToast('Itinéraire vers Pharmacie du Plateau')" style="background:#E8F4F8;border:none;border-radius:8px;padding:5px 10px;font-size:11px;font-weight:700;color:#1A6B8A;cursor:pointer;">🗺 Itinéraire</button>
      </div>
    </div>

    <!-- Pharmacie 2 — Garde 24h -->
    <div onclick="goToScreen(33)" style="background:#fff;border-radius:16px;padding:14px;box-shadow:0 2px 10px rgba(0,0,0,0.06);cursor:pointer;border:1.5px solid transparent;" onmouseover="this.style.borderColor='#1A6B8A'" onmouseout="this.style.borderColor='transparent'">
      <div style="display:flex;align-items:flex-start;gap:12px;">
        <div style="width:48px;height:48px;background:linear-gradient(135deg,#1A2332,#2C3E50);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;">🌙</div>
        <div style="flex:1;min-width:0;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">PharmaGarde Cocody</div>
            <div style="font-size:11px;font-weight:700;color:#1A6B8A;background:#E8F4F8;padding:2px 8px;border-radius:20px;white-space:nowrap;">Garde 24h</div>
          </div>
          <div style="font-size:11px;color:#6B7A8D;margin-top:2px;">📍 1.3 km · Ouvert 24h/24</div>
          <div style="display:flex;gap:4px;margin-top:8px;flex-wrap:wrap;">
            <span style="background:#1A2332;color:#fff;border-radius:20px;padding:3px 8px;font-size:10px;font-weight:600;">🌙 Nuit & Weekend</span>
            <span style="background:#E8F4F8;color:#1A6B8A;border-radius:20px;padding:3px 8px;font-size:10px;font-weight:600;">💬 Conseil pharmacien</span>
          </div>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px;padding-top:10px;border-top:1px solid #F4F9FC;">
        <div style="display:flex;align-items:center;gap:4px;"><span style="color:#F39C12;font-size:12px;">★★★★★</span><span style="font-size:11px;color:#6B7A8D;">4.8 (112)</span></div>
        <button onclick="event.stopPropagation();showToast('Itinéraire vers PharmaGarde Cocody')" style="background:#E8F4F8;border:none;border-radius:8px;padding:5px 10px;font-size:11px;font-weight:700;color:#1A6B8A;cursor:pointer;">🗺 Itinéraire</button>
      </div>
    </div>

    <!-- Pharmacie 3 — Fermée -->
    <div onclick="showToast('Pharmacie fermée actuellement')" style="background:#fff;border-radius:16px;padding:14px;box-shadow:0 2px 10px rgba(0,0,0,0.06);cursor:pointer;opacity:0.75;">
      <div style="display:flex;align-items:flex-start;gap:12px;">
        <div style="width:48px;height:48px;background:#F0F0F0;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;">⚕️</div>
        <div style="flex:1;min-width:0;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">Pharmacie Adjamé</div>
            <div style="font-size:11px;font-weight:700;color:#E74C3C;background:#FEF0EE;padding:2px 8px;border-radius:20px;white-space:nowrap;">Fermé</div>
          </div>
          <div style="font-size:11px;color:#6B7A8D;margin-top:2px;">📍 1.7 km · Ouvre demain à 08h00</div>
          <div style="display:flex;gap:4px;margin-top:8px;">
            <span style="background:#F4F9FC;color:#6B7A8D;border-radius:20px;padding:3px 8px;font-size:10px;font-weight:600;">🛵 Livraison</span>
          </div>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px;padding-top:10px;border-top:1px solid #F4F9FC;">
        <div style="display:flex;align-items:center;gap:4px;"><span style="color:#F39C12;font-size:12px;">★★★</span><span style="font-size:11px;color:#6B7A8D;">3.9 (54)</span></div>
        <button onclick="event.stopPropagation();showToast('Notification quand elle ouvre')" style="background:#F4F9FC;border:none;border-radius:8px;padding:5px 10px;font-size:11px;font-weight:700;color:#6B7A8D;cursor:pointer;">🔔 M'avertir</button>
      </div>
    </div>

    <!-- Pharmacie 4 — Stock disponible, livraison rapide -->
    <div onclick="goToScreen(33)" style="background:#fff;border-radius:16px;padding:14px;box-shadow:0 2px 10px rgba(0,0,0,0.06);cursor:pointer;border:1.5px solid transparent;" onmouseover="this.style.borderColor='#1A6B8A'" onmouseout="this.style.borderColor='transparent'">
      <div style="display:flex;align-items:flex-start;gap:12px;">
        <div style="width:48px;height:48px;background:linear-gradient(135deg,#27AE60,#2ecc71);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;">⚕️</div>
        <div style="flex:1;min-width:0;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">PharmaCité Marcory</div>
            <div style="font-size:11px;font-weight:700;color:#27AE60;background:#E8F7EE;padding:2px 8px;border-radius:20px;white-space:nowrap;">Ouvert</div>
          </div>
          <div style="font-size:11px;color:#6B7A8D;margin-top:2px;">📍 2.1 km · Ferme à 20h30</div>
          <div style="display:flex;gap:4px;margin-top:8px;flex-wrap:wrap;">
            <span style="background:#E8F4F8;color:#1A6B8A;border-radius:20px;padding:3px 8px;font-size:10px;font-weight:600;">🛵 Livraison 30 min</span>
            <span style="background:#FEF9EE;color:#F39C12;border-radius:20px;padding:3px 8px;font-size:10px;font-weight:600;">💛 Partenaire ILERA</span>
          </div>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px;padding-top:10px;border-top:1px solid #F4F9FC;">
        <div style="display:flex;align-items:center;gap:4px;"><span style="color:#F39C12;font-size:12px;">★★★★</span><span style="font-size:11px;color:#6B7A8D;">4.5 (87)</span></div>
        <button onclick="event.stopPropagation();showToast('Itinéraire vers PharmaCité Marcory')" style="background:#E8F4F8;border:none;border-radius:8px;padding:5px 10px;font-size:11px;font-weight:700;color:#1A6B8A;cursor:pointer;">🗺 Itinéraire</button>
      </div>
    </div>

    <!-- Pharmacie 5 -->
    <div onclick="goToScreen(33)" style="background:#fff;border-radius:16px;padding:14px;box-shadow:0 2px 10px rgba(0,0,0,0.06);cursor:pointer;border:1.5px solid transparent;" onmouseover="this.style.borderColor='#1A6B8A'" onmouseout="this.style.borderColor='transparent'">
      <div style="display:flex;align-items:flex-start;gap:12px;">
        <div style="width:48px;height:48px;background:linear-gradient(135deg,#E8F4F8,#C5DFF0);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;">⚕️</div>
        <div style="flex:1;min-width:0;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">Pharmacie Yopougon</div>
            <div style="font-size:11px;font-weight:700;color:#27AE60;background:#E8F7EE;padding:2px 8px;border-radius:20px;white-space:nowrap;">Ouvert</div>
          </div>
          <div style="font-size:11px;color:#6B7A8D;margin-top:2px;">📍 3.4 km · Ferme à 19h00</div>
          <div style="display:flex;gap:4px;margin-top:8px;">
            <span style="background:#E8F7EE;color:#27AE60;border-radius:20px;padding:3px 8px;font-size:10px;font-weight:600;">💊 Stock complet</span>
          </div>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px;padding-top:10px;border-top:1px solid #F4F9FC;">
        <div style="display:flex;align-items:center;gap:4px;"><span style="color:#F39C12;font-size:12px;">★★★★</span><span style="font-size:11px;color:#6B7A8D;">4.0 (29)</span></div>
        <button onclick="event.stopPropagation();showToast('Itinéraire vers Pharmacie Yopougon')" style="background:#E8F4F8;border:none;border-radius:8px;padding:5px 10px;font-size:11px;font-weight:700;color:#1A6B8A;cursor:pointer;">🗺 Itinéraire</button>
      </div>
    </div>

    <!-- Pharmacie 6 -->
    <div onclick="goToScreen(33)" style="background:#fff;border-radius:16px;padding:14px;box-shadow:0 2px 10px rgba(0,0,0,0.06);cursor:pointer;border:1.5px solid transparent;" onmouseover="this.style.borderColor='#1A6B8A'" onmouseout="this.style.borderColor='transparent'">
      <div style="display:flex;align-items:flex-start;gap:12px;">
        <div style="width:48px;height:48px;background:linear-gradient(135deg,#F39C12,#e67e22);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;">⚕️</div>
        <div style="flex:1;min-width:0;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;">Pharmacie Deux Plateaux</div>
            <div style="font-size:11px;font-weight:700;color:#27AE60;background:#E8F7EE;padding:2px 8px;border-radius:20px;white-space:nowrap;">Ouvert</div>
          </div>
          <div style="font-size:11px;color:#6B7A8D;margin-top:2px;">📍 4.0 km · Ferme à 20h00</div>
          <div style="display:flex;gap:4px;margin-top:8px;flex-wrap:wrap;">
            <span style="background:#E8F4F8;color:#1A6B8A;border-radius:20px;padding:3px 8px;font-size:10px;font-weight:600;">🛵 Livraison</span>
            <span style="background:#FEF9EE;color:#F39C12;border-radius:20px;padding:3px 8px;font-size:10px;font-weight:600;">💛 Partenaire ILERA</span>
          </div>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px;padding-top:10px;border-top:1px solid #F4F9FC;">
        <div style="display:flex;align-items:center;gap:4px;"><span style="color:#F39C12;font-size:12px;">★★★★★</span><span style="font-size:11px;color:#6B7A8D;">4.7 (203)</span></div>
        <button onclick="event.stopPropagation();showToast('Itinéraire vers Pharmacie Deux Plateaux')" style="background:#E8F4F8;border:none;border-radius:8px;padding:5px 10px;font-size:11px;font-weight:700;color:#1A6B8A;cursor:pointer;">🗺 Itinéraire</button>
      </div>
    </div>

    <div style="height:10px;"></div>
  </div>
</div>

<script>
window.pharmaFilter = function(type) {
  const filters = ['all','open','24h','delivery','close'];
  filters.forEach(f => {
    const el = document.getElementById('phfil-' + f);
    if (!el) return;
    if (f === type) {
      el.style.background = '#fff';
      el.style.color = '#1A6B8A';
      el.style.border = 'none';
    } else {
      el.style.background = 'rgba(255,255,255,0.15)';
      el.style.color = 'rgba(255,255,255,0.9)';
      el.style.border = '1px solid rgba(255,255,255,0.2)';
    }
  });
  const labels = { all:'Toutes les pharmacies', open:'Ouvertes maintenant', '24h':'Gardes 24h', delivery:'Avec livraison', close:'À moins de 1 km' };
  showToast('Filtre : ' + labels[type]);
};
</script>

<!-- ========================================
     SCREEN 30 — DÉTAIL PHARMACIE
======================================== -->
<div class="screen" id="screen33" data-device="mobile" style="background:#F4F9FC;display:flex;flex-direction:column;">

  <!-- ══ HEADER FLUX NORMAL — bouton back garanti cliquable ══ -->
  <div style="flex-shrink:0;background:linear-gradient(135deg,#1A6B8A,#0F3F54);padding:52px 16px 14px;">
    <div style="display:flex;align-items:center;justify-content:space-between;">
      <button onclick="goToScreen(32)" style="background:rgba(255,255,255,0.18);border:none;border-radius:50%;width:38px;height:38px;color:#fff;font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:800;color:#fff;">Pharmacie du Plateau</div>
      <button onclick="showToast('❤️ Pharmacie enregistrée en favori !')" style="background:rgba(255,255,255,0.18);border:none;border-radius:50%;width:38px;height:38px;color:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;">🤍</button>
    </div>
  </div>

  <!-- Mini-carte décorative -->
  <div style="flex-shrink:0;height:120px;background:linear-gradient(180deg,#C5DFF0,#A8CCE0);position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;opacity:0.12;background-image:linear-gradient(#1A6B8A 1px,transparent 1px),linear-gradient(90deg,#1A6B8A 1px,transparent 1px);background-size:28px 28px;"></div>
    <div style="position:absolute;top:40px;left:0;right:0;height:7px;background:rgba(255,255,255,0.55);border-radius:4px;margin:0 20px;"></div>
    <div style="position:absolute;top:0;left:80px;bottom:0;width:6px;background:rgba(255,255,255,0.4);"></div>
    <div style="position:absolute;top:0;right:80px;bottom:0;width:6px;background:rgba(255,255,255,0.4);"></div>
    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-110%);display:flex;flex-direction:column;align-items:center;">
      <div style="background:#1A6B8A;border-radius:50% 50% 50% 0;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-size:14px;border:3px solid #fff;box-shadow:0 4px 12px rgba(0,0,0,0.25);transform:rotate(-45deg);">
        <span style="transform:rotate(45deg);">⚕️</span>
      </div>
      <div style="width:5px;height:5px;background:#1A6B8A;border-radius:50%;margin-top:1px;opacity:0.5;"></div>
    </div>
    <button onclick="showToast('🗺 Ouverture de Google Maps…')" style="position:absolute;bottom:8px;right:10px;background:#fff;border:none;border-radius:20px;padding:4px 10px;font-size:11px;font-weight:700;color:#1A6B8A;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.15);">Voir la carte →</button>
  </div>

  <!-- CARTE IDENTITÉ -->
  <div style="background:#fff;margin:0 14px;border-radius:18px;padding:14px;box-shadow:0 4px 20px rgba(0,0,0,0.1);flex-shrink:0;margin-top:-20px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <div style="width:52px;height:52px;background:linear-gradient(135deg,#1A6B8A,#0F3F54);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0;box-shadow:0 4px 12px rgba(26,107,138,0.3);">⚕️</div>
      <div style="flex:1;min-width:0;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:800;color:#1A2332;">Pharmacie du Plateau</div>
        <div style="font-size:11px;color:#6B7A8D;margin-top:1px;">📍 Av. Terrasson de Fougères, Plateau</div>
        <div style="display:flex;align-items:center;gap:6px;margin-top:5px;">
          <div style="background:#E8F7EE;color:#27AE60;border-radius:20px;padding:2px 8px;font-size:10px;font-weight:700;">🟢 Ouvert</div>
          <div style="font-size:11px;color:#6B7A8D;">Ferme à 21h00</div>
        </div>
      </div>
    </div>
    <div style="display:flex;margin-top:12px;border-top:1px solid #F4F9FC;padding-top:10px;">
      <div onclick="showPhTab('avis')" style="flex:1;text-align:center;cursor:pointer;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:800;color:#1A2332;">4.2</div>
        <div style="font-size:10px;color:#F39C12;">★★★★</div>
        <div style="font-size:10px;color:#6B7A8D;">38 avis</div>
      </div>
      <div style="width:1px;background:#E2ECF2;"></div>
      <div onclick="showToast('📍 0.8 km depuis votre position')" style="flex:1;text-align:center;cursor:pointer;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:800;color:#1A2332;">0.8</div>
        <div style="font-size:10px;color:#6B7A8D;">km</div>
        <div style="font-size:10px;color:#6B7A8D;">de vous</div>
      </div>
      <div style="width:1px;background:#E2ECF2;"></div>
      <div onclick="showToast('🛵 Livraison estimée à ~20 min')" style="flex:1;text-align:center;cursor:pointer;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:800;color:#27AE60;">~20</div>
        <div style="font-size:10px;color:#6B7A8D;">min</div>
        <div style="font-size:10px;color:#6B7A8D;">livraison</div>
      </div>
    </div>
  </div>

  <!-- ACTIONS RAPIDES -->
  <div style="display:flex;gap:8px;padding:12px 14px;flex-shrink:0;">
    <button onclick="goToScreen(29)" style="flex:2;padding:12px 8px;background:linear-gradient(135deg,#1A6B8A,#2196B3);color:#fff;border:none;border-radius:14px;font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;cursor:pointer;box-shadow:0 4px 12px rgba(26,107,138,0.3);">🛒 Commander</button>
    <button onclick="showToast('📞 Appel en cours… +225 27 22 41 00 00')" style="flex:1;padding:12px 6px;background:#E8F7EE;color:#27AE60;border:none;border-radius:14px;font-size:12px;font-weight:700;cursor:pointer;">📞 Appeler</button>
    <button onclick="showToast('🗺 Itinéraire ouvert dans Maps')" style="flex:1;padding:12px 6px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:14px;font-size:12px;font-weight:700;cursor:pointer;">🗺 Y aller</button>
  </div>

  <!-- ONGLETS -->
  <div style="display:flex;background:#fff;border-bottom:1.5px solid #E2ECF2;flex-shrink:0;">
    <button id="phtab-info" onclick="showPhTab('info')" style="flex:1;padding:11px 4px;background:none;border:none;border-bottom:2.5px solid #1A6B8A;color:#1A6B8A;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;cursor:pointer;">Infos</button>
    <button id="phtab-stock" onclick="showPhTab('stock')" style="flex:1;padding:11px 4px;background:none;border:none;border-bottom:2.5px solid transparent;color:#6B7A8D;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;cursor:pointer;">Stock</button>
    <button id="phtab-avis" onclick="showPhTab('avis')" style="flex:1;padding:11px 4px;background:none;border:none;border-bottom:2.5px solid transparent;color:#6B7A8D;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;cursor:pointer;">Avis (38)</button>
  </div>

  <!-- CONTENU SCROLLABLE -->
  <div style="flex:1;overflow-y:auto;">

    <!-- ── ONGLET INFOS ── -->
    <div id="phcontent-info" style="padding:14px;display:flex;flex-direction:column;gap:12px;">

      <!-- Horaires -->
      <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;margin-bottom:12px;">🕐 Horaires d'ouverture</div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <div style="display:flex;justify-content:space-between;"><span style="font-size:13px;font-weight:700;color:#1A6B8A;">Lun – Ven</span><span style="font-size:13px;color:#1A2332;">08h00 – 21h00</span></div>
          <div style="display:flex;justify-content:space-between;"><span style="font-size:13px;color:#1A2332;">Samedi</span><span style="font-size:13px;color:#1A2332;">09h00 – 19h00</span></div>
          <div style="display:flex;justify-content:space-between;"><span style="font-size:13px;color:#1A2332;">Dimanche</span><span style="font-size:13px;color:#E74C3C;">Fermé</span></div>
          <div style="background:#E8F7EE;border-radius:10px;padding:8px 12px;display:flex;align-items:center;gap:6px;margin-top:4px;">
            <div style="width:8px;height:8px;background:#27AE60;border-radius:50%;flex-shrink:0;animation:blink 1.5s infinite;"></div>
            <span style="font-size:12px;color:#27AE60;font-weight:600;">Actuellement ouvert · Ferme dans 3h45</span>
          </div>
        </div>
      </div>

      <!-- Contact -->
      <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;margin-bottom:12px;">📞 Contact & Adresse</div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <div onclick="showToast('📞 Appel en cours… +225 27 22 41 00 00')" style="display:flex;align-items:center;gap:10px;cursor:pointer;padding:8px;border-radius:10px;transition:background 0.2s;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
            <div style="width:36px;height:36px;background:#E8F7EE;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">📞</div>
            <div><div style="font-size:13px;font-weight:600;color:#1A2332;">+225 27 22 41 00 00</div><div style="font-size:11px;color:#6B7A8D;">Appuyer pour appeler</div></div>
            <span style="margin-left:auto;font-size:14px;color:#6B7A8D;">›</span>
          </div>
          <div onclick="showToast('📍 Av. Terrasson de Fougères, Plateau · 0.8 km')" style="display:flex;align-items:center;gap:10px;cursor:pointer;padding:8px;border-radius:10px;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
            <div style="width:36px;height:36px;background:#E8F4F8;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">📍</div>
            <div><div style="font-size:13px;font-weight:600;color:#1A2332;">Av. Terrasson de Fougères</div><div style="font-size:11px;color:#6B7A8D;">Plateau, Abidjan · 0.8 km</div></div>
            <span style="margin-left:auto;font-size:14px;color:#6B7A8D;">›</span>
          </div>
          <div onclick="showToast('✉️ Messagerie ouverte avec Pharmacie du Plateau')" style="display:flex;align-items:center;gap:10px;cursor:pointer;padding:8px;border-radius:10px;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
            <div style="width:36px;height:36px;background:#F4F0FF;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">✉️</div>
            <div><div style="font-size:13px;font-weight:600;color:#1A2332;">plateau@pharmailera.ci</div><div style="font-size:11px;color:#6B7A8D;">Envoyer un message</div></div>
            <span style="margin-left:auto;font-size:14px;color:#6B7A8D;">›</span>
          </div>
        </div>
      </div>

      <!-- Services -->
      <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;margin-bottom:12px;">✅ Services disponibles</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
          <div onclick="showToast('🛵 Livraison disponible · délai ~20 min')" style="background:#E8F4F8;border-radius:12px;padding:10px 12px;display:flex;align-items:center;gap:8px;cursor:pointer;">
            <span style="font-size:16px;">🛵</span><span style="font-size:12px;font-weight:600;color:#1A6B8A;">Livraison domicile</span>
          </div>
          <div onclick="showToast('💊 Ordonnances acceptées et vérifiées via blockchain')" style="background:#E8F7EE;border-radius:12px;padding:10px 12px;display:flex;align-items:center;gap:8px;cursor:pointer;">
            <span style="font-size:16px;">💊</span><span style="font-size:12px;font-weight:600;color:#27AE60;">Ordonnances</span>
          </div>
          <div onclick="showToast('💬 Conseil pharmacien disponible maintenant')" style="background:#F4F0FF;border-radius:12px;padding:10px 12px;display:flex;align-items:center;gap:8px;cursor:pointer;">
            <span style="font-size:16px;">💬</span><span style="font-size:12px;font-weight:600;color:#8E44AD;">Conseil pharmacien</span>
          </div>
          <div onclick="showToast('🩺 Service mesure tension disponible sur place')" style="background:#FEF9EE;border-radius:12px;padding:10px 12px;display:flex;align-items:center;gap:8px;cursor:pointer;">
            <span style="font-size:16px;">🩺</span><span style="font-size:12px;font-weight:600;color:#F39C12;">Mesure tension</span>
          </div>
          <div onclick="showToast('💳 Paiement Wave, Orange Money, carte bancaire acceptés')" style="background:#E8F7EE;border-radius:12px;padding:10px 12px;display:flex;align-items:center;gap:8px;cursor:pointer;">
            <span style="font-size:16px;">💳</span><span style="font-size:12px;font-weight:600;color:#27AE60;">Paiement mobile</span>
          </div>
          <div onclick="showToast('🔒 Traçabilité médicaments certifiée ILERA Blockchain')" style="background:#E8F4F8;border-radius:12px;padding:10px 12px;display:flex;align-items:center;gap:8px;cursor:pointer;">
            <span style="font-size:16px;">🔒</span><span style="font-size:12px;font-weight:600;color:#1A6B8A;">Blockchain ILERA</span>
          </div>
        </div>
      </div>

      <!-- Pharmacien responsable -->
      <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;margin-bottom:12px;">👨‍⚕️ Pharmacien responsable</div>
        <div style="display:flex;align-items:center;gap:12px;">
          <div onclick="showToast('👨‍⚕️ Profil Dr. Konan Yves')" style="width:48px;height:48px;background:linear-gradient(135deg,#1A6B8A,#0F3F54);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px;cursor:pointer;">👨‍⚕️</div>
          <div style="flex:1;">
            <div style="font-size:14px;font-weight:700;color:#1A2332;">Dr. Konan Yves</div>
            <div style="font-size:11px;color:#6B7A8D;">Pharmacien titulaire · Ordre CI #3812</div>
            <div style="font-size:11px;color:#27AE60;font-weight:600;margin-top:2px;">🟢 Disponible en ce moment</div>
          </div>
          <button onclick="showToast('💬 Messagerie ouverte avec Dr. Konan Yves')" style="background:#E8F4F8;border:none;border-radius:10px;padding:8px 12px;font-size:12px;font-weight:700;color:#1A6B8A;cursor:pointer;">Écrire</button>
        </div>
      </div>

      <div style="height:8px;"></div>
    </div>

    <!-- ── ONGLET STOCK ── -->
    <div id="phcontent-stock" style="display:none;padding:14px;flex-direction:column;gap:10px;">
      <div style="background:#E8F7EE;border-radius:12px;padding:12px 14px;display:flex;align-items:center;gap:8px;">
        <span style="font-size:16px;">✅</span>
        <span style="font-size:12px;font-weight:600;color:#27AE60;">Stock mis à jour il y a 12 min via ILERA Blockchain</span>
      </div>
      <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;margin-bottom:12px;">💊 Médicaments disponibles</div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <div onclick="showToast('🛒 Paracétamol 500mg ajouté au panier')" style="display:flex;align-items:center;justify-content:space-between;padding:10px;background:#F4F9FC;border-radius:10px;cursor:pointer;" onmouseover="this.style.background='#E8F4F8'" onmouseout="this.style.background='#F4F9FC'">
            <div><div style="font-size:13px;font-weight:600;color:#1A2332;">Paracétamol 500mg</div><div style="font-size:11px;color:#6B7A8D;">Boîte de 16 comprimés</div></div>
            <div style="text-align:right;"><div style="font-size:11px;font-weight:700;color:#27AE60;">✓ En stock</div><div style="font-size:12px;font-weight:800;color:#1A2332;">350 F</div></div>
          </div>
          <div onclick="showToast('🛒 Amoxicilline 500mg ajouté au panier')" style="display:flex;align-items:center;justify-content:space-between;padding:10px;background:#F4F9FC;border-radius:10px;cursor:pointer;" onmouseover="this.style.background='#E8F4F8'" onmouseout="this.style.background='#F4F9FC'">
            <div><div style="font-size:13px;font-weight:600;color:#1A2332;">Amoxicilline 500mg</div><div style="font-size:11px;color:#6B7A8D;">Boîte de 12 gélules</div></div>
            <div style="text-align:right;"><div style="font-size:11px;font-weight:700;color:#27AE60;">✓ En stock</div><div style="font-size:12px;font-weight:800;color:#1A2332;">2 400 F</div></div>
          </div>
          <div onclick="showToast('🛒 Metformine 850mg ajouté au panier')" style="display:flex;align-items:center;justify-content:space-between;padding:10px;background:#F4F9FC;border-radius:10px;cursor:pointer;" onmouseover="this.style.background='#E8F4F8'" onmouseout="this.style.background='#F4F9FC'">
            <div><div style="font-size:13px;font-weight:600;color:#1A2332;">Metformine 850mg</div><div style="font-size:11px;color:#6B7A8D;">Boîte de 30 comprimés</div></div>
            <div style="text-align:right;"><div style="font-size:11px;font-weight:700;color:#27AE60;">✓ En stock</div><div style="font-size:12px;font-weight:800;color:#1A2332;">1 800 F</div></div>
          </div>
          <div onclick="showToast('⚠️ Stock bas · commande urgente recommandée')" style="display:flex;align-items:center;justify-content:space-between;padding:10px;background:#FEF0EE;border-radius:10px;cursor:pointer;">
            <div><div style="font-size:13px;font-weight:600;color:#1A2332;">Doliprane 1000mg</div><div style="font-size:11px;color:#6B7A8D;">Boîte de 8 comprimés</div></div>
            <div style="text-align:right;"><div style="font-size:11px;font-weight:700;color:#E74C3C;">⚠ Stock bas</div><div style="font-size:12px;font-weight:800;color:#1A2332;">700 F</div></div>
          </div>
          <div onclick="showToast('🛒 Arsuamoon 40/320mg ajouté au panier')" style="display:flex;align-items:center;justify-content:space-between;padding:10px;background:#F4F9FC;border-radius:10px;cursor:pointer;" onmouseover="this.style.background='#E8F4F8'" onmouseout="this.style.background='#F4F9FC'">
            <div><div style="font-size:13px;font-weight:600;color:#1A2332;">Arsuamoon 40/320mg</div><div style="font-size:11px;color:#6B7A8D;">Antipaludéen · Boîte de 6</div></div>
            <div style="text-align:right;"><div style="font-size:11px;font-weight:700;color:#27AE60;">✓ En stock</div><div style="font-size:12px;font-weight:800;color:#1A2332;">4 500 F</div></div>
          </div>
        </div>
      </div>
      <button onclick="goToScreen(29)" style="width:100%;padding:14px;background:linear-gradient(135deg,#1A6B8A,#2196B3);color:#fff;border:none;border-radius:14px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 4px 12px rgba(26,107,138,0.3);">🛒 Voir le catalogue complet</button>
      <div style="height:8px;"></div>
    </div>

    <!-- ── ONGLET AVIS ── -->
    <div id="phcontent-avis" style="display:none;padding:14px;flex-direction:column;gap:12px;">
      <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);display:flex;align-items:center;gap:16px;">
        <div style="text-align:center;">
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:38px;font-weight:800;color:#1A2332;">4.2</div>
          <div style="color:#F39C12;font-size:15px;">★★★★</div>
          <div style="font-size:11px;color:#6B7A8D;margin-top:2px;">38 avis</div>
        </div>
        <div style="flex:1;display:flex;flex-direction:column;gap:5px;">
          <div style="display:flex;align-items:center;gap:6px;"><span style="font-size:11px;color:#6B7A8D;width:10px;">5</span><div style="flex:1;height:6px;background:#E2ECF2;border-radius:3px;overflow:hidden;"><div style="width:55%;height:100%;background:#F39C12;border-radius:3px;"></div></div><span style="font-size:11px;color:#6B7A8D;">55%</span></div>
          <div style="display:flex;align-items:center;gap:6px;"><span style="font-size:11px;color:#6B7A8D;width:10px;">4</span><div style="flex:1;height:6px;background:#E2ECF2;border-radius:3px;overflow:hidden;"><div style="width:28%;height:100%;background:#F39C12;border-radius:3px;"></div></div><span style="font-size:11px;color:#6B7A8D;">28%</span></div>
          <div style="display:flex;align-items:center;gap:6px;"><span style="font-size:11px;color:#6B7A8D;width:10px;">3</span><div style="flex:1;height:6px;background:#E2ECF2;border-radius:3px;overflow:hidden;"><div style="width:10%;height:100%;background:#F39C12;border-radius:3px;"></div></div><span style="font-size:11px;color:#6B7A8D;">10%</span></div>
          <div style="display:flex;align-items:center;gap:6px;"><span style="font-size:11px;color:#6B7A8D;width:10px;">2</span><div style="flex:1;height:6px;background:#E2ECF2;border-radius:3px;overflow:hidden;"><div style="width:5%;height:100%;background:#E74C3C;border-radius:3px;"></div></div><span style="font-size:11px;color:#6B7A8D;">5%</span></div>
          <div style="display:flex;align-items:center;gap:6px;"><span style="font-size:11px;color:#6B7A8D;width:10px;">1</span><div style="flex:1;height:6px;background:#E2ECF2;border-radius:3px;overflow:hidden;"><div style="width:2%;height:100%;background:#E74C3C;border-radius:3px;"></div></div><span style="font-size:11px;color:#6B7A8D;">2%</span></div>
        </div>
      </div>
      <div style="background:#fff;border-radius:16px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
          <div style="width:36px;height:36px;background:linear-gradient(135deg,#1A6B8A,#0F3F54);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#fff;flex-shrink:0;">MK</div>
          <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:#1A2332;">Moussa Koné</div><div style="font-size:10px;color:#6B7A8D;">Il y a 2 jours</div></div>
          <div style="color:#F39C12;font-size:12px;">★★★★★</div>
        </div>
        <p style="font-size:12px;color:#4A5568;line-height:1.5;margin:0;">Service rapide et personnel très professionnel. Le pharmacien m'a bien conseillé sur mon traitement. Je recommande !</p>
        <div style="display:flex;gap:8px;margin-top:10px;">
          <button onclick="showToast('👍 Vote utile enregistré')" style="background:#F4F9FC;border:none;border-radius:8px;padding:5px 10px;font-size:11px;color:#6B7A8D;cursor:pointer;font-family:'DM Sans',sans-serif;">👍 Utile (12)</button>
          <button onclick="showToast('💬 Réponse à cet avis')" style="background:#F4F9FC;border:none;border-radius:8px;padding:5px 10px;font-size:11px;color:#6B7A8D;cursor:pointer;font-family:'DM Sans',sans-serif;">Répondre</button>
        </div>
      </div>
      <div style="background:#fff;border-radius:16px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
          <div style="width:36px;height:36px;background:linear-gradient(135deg,#27AE60,#2ecc71);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#fff;flex-shrink:0;">AD</div>
          <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:#1A2332;">Aïcha Diallo</div><div style="font-size:10px;color:#6B7A8D;">Il y a 5 jours</div></div>
          <div style="color:#F39C12;font-size:12px;">★★★★</div>
        </div>
        <p style="font-size:12px;color:#4A5568;line-height:1.5;margin:0;">Livraison reçue en 25 min chrono. Médicaments bien emballés. Seul bémol : l'attente au téléphone un peu longue.</p>
        <div style="display:flex;gap:8px;margin-top:10px;">
          <button onclick="showToast('👍 Vote utile enregistré')" style="background:#F4F9FC;border:none;border-radius:8px;padding:5px 10px;font-size:11px;color:#6B7A8D;cursor:pointer;font-family:'DM Sans',sans-serif;">👍 Utile (7)</button>
          <button onclick="showToast('💬 Réponse à cet avis')" style="background:#F4F9FC;border:none;border-radius:8px;padding:5px 10px;font-size:11px;color:#6B7A8D;cursor:pointer;font-family:'DM Sans',sans-serif;">Répondre</button>
        </div>
      </div>
      <div style="background:#fff;border-radius:16px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
          <div style="width:36px;height:36px;background:linear-gradient(135deg,#F39C12,#e67e22);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#fff;flex-shrink:0;">KT</div>
          <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:#1A2332;">Kofi Tano</div><div style="font-size:10px;color:#6B7A8D;">Il y a 1 semaine</div></div>
          <div style="color:#F39C12;font-size:12px;">★★★</div>
        </div>
        <p style="font-size:12px;color:#4A5568;line-height:1.5;margin:0;">Stock bien garni mais rupture d'Ibuprofène lors de ma visite. Sinon le personnel est aimable.</p>
        <div style="display:flex;gap:8px;margin-top:10px;">
          <button onclick="showToast('👍 Vote utile enregistré')" style="background:#F4F9FC;border:none;border-radius:8px;padding:5px 10px;font-size:11px;color:#6B7A8D;cursor:pointer;font-family:'DM Sans',sans-serif;">👍 Utile (3)</button>
          <button onclick="showToast('💬 Réponse à cet avis')" style="background:#F4F9FC;border:none;border-radius:8px;padding:5px 10px;font-size:11px;color:#6B7A8D;cursor:pointer;font-family:'DM Sans',sans-serif;">Répondre</button>
        </div>
      </div>
      <button onclick="showToast('✍️ Formulaire d\'avis ouvert')" style="width:100%;padding:13px;background:#fff;color:#1A6B8A;border:1.5px solid #1A6B8A;border-radius:14px;font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;cursor:pointer;">✍️ Laisser un avis</button>
      <div style="height:8px;"></div>
    </div>

  </div>
</div>

<script>
window.showPhTab = function(tab) {
  ['info','stock','avis'].forEach(function(t) {
    var btn = document.getElementById('phtab-' + t);
    var content = document.getElementById('phcontent-' + t);
    if (!btn || !content) return;
    var active = (t === tab);
    btn.style.borderBottomColor = active ? '#1A6B8A' : 'transparent';
    btn.style.color = active ? '#1A6B8A' : '#6B7A8D';
    btn.style.fontWeight = active ? '700' : '600';
    content.style.display = active ? 'flex' : 'none';
    content.style.flexDirection = 'column';
  });
};
</script>
<!-- ========================================
     SCREEN 74 — SÉLECTION MÉDECIN
======================================== -->

<div class="screen" id="screen34" data-device="mobile" style="background:#F4F9FC;display:flex;flex-direction:column;">
  <!-- Header -->
  <div style="background:linear-gradient(135deg,#0F3F54 0%,#1A6B50 100%);padding:54px 20px 24px;flex-shrink:0;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
      <button onclick="goToScreen(10)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Mon Profil</div>
      <button onclick="showToast('Modifier le profil')" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:14px;cursor:pointer;">✏️</button>
    </div>
    <!-- Avatar + nom -->
    <div style="display:flex;flex-direction:column;align-items:center;gap:10px;">
      <div style="width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,#27AE60,#1A6B50);display:flex;align-items:center;justify-content:center;font-size:32px;border:3px solid rgba(255,255,255,0.4);">👤</div>
      <div style="text-align:center;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:800;color:#fff;">Kofi Mensah</div>
        <div style="font-size:12px;color:rgba(255,255,255,0.75);margin-top:2px;">ID Patient: CI-PT-2024-00847</div>
      </div>
      <div style="display:flex;gap:8px;margin-top:4px;">
        <div style="background:rgba(255,255,255,0.2);border-radius:20px;padding:4px 12px;font-size:11px;color:#fff;font-weight:700;">Groupe A+</div>
        <div style="background:rgba(39,174,96,0.4);border-radius:20px;padding:4px 12px;font-size:11px;color:#fff;font-weight:700;">✓ Assuré CNAM</div>
      </div>
    </div>
  </div>

  <!-- Body -->
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:14px;">

    <!-- Informations personnelles -->
    <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:800;color:#1A2332;margin-bottom:12px;display:flex;align-items:center;gap:8px;">👤 Informations personnelles</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid #F0F4F8;">
          <div style="font-size:12px;color:#6B7A8D;">Date de naissance</div>
          <div style="font-size:12px;font-weight:700;color:#1A2332;">12 mars 1985 (39 ans)</div>
        </div>
        <div style="display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid #F0F4F8;">
          <div style="font-size:12px;color:#6B7A8D;">Sexe</div>
          <div style="font-size:12px;font-weight:700;color:#1A2332;">Masculin</div>
        </div>
        <div style="display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid #F0F4F8;">
          <div style="font-size:12px;color:#6B7A8D;">Taille / Poids</div>
          <div style="font-size:12px;font-weight:700;color:#1A2332;">175 cm / 74 kg</div>
        </div>
        <div style="display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid #F0F4F8;">
          <div style="font-size:12px;color:#6B7A8D;">Téléphone</div>
          <div style="font-size:12px;font-weight:700;color:#1A2332;">+225 07 88 44 22 11</div>
        </div>
        <div style="display:flex;justify-content:space-between;">
          <div style="font-size:12px;color:#6B7A8D;">Ville</div>
          <div style="font-size:12px;font-weight:700;color:#1A2332;">Abidjan, Plateau</div>
        </div>
      </div>
    </div>

    <!-- Informations médicales clés -->
    <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:800;color:#1A2332;margin-bottom:12px;">🩺 Informations médicales</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;">
        <div style="background:#FEF0EE;border-radius:12px;padding:12px;text-align:center;">
          <div style="font-size:22px;margin-bottom:4px;">🩸</div>
          <div style="font-size:18px;font-weight:800;color:#E74C3C;">A+</div>
          <div style="font-size:10px;color:#6B7A8D;">Groupe sanguin</div>
        </div>
        <div style="background:#FEF9EE;border-radius:12px;padding:12px;text-align:center;">
          <div style="font-size:22px;margin-bottom:4px;">⚠️</div>
          <div style="font-size:18px;font-weight:800;color:#F39C12;">2</div>
          <div style="font-size:10px;color:#6B7A8D;">Allergies</div>
        </div>
      </div>
      <!-- Allergies -->
      <div style="margin-bottom:10px;">
        <div style="font-size:11px;font-weight:700;color:#6B7A8D;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Allergies connues</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;">
          <div style="background:#FEF0EE;border:1px solid #FBBCB5;border-radius:20px;padding:4px 10px;font-size:11px;font-weight:700;color:#E74C3C;">⚠️ Pénicilline</div>
          <div style="background:#FEF0EE;border:1px solid #FBBCB5;border-radius:20px;padding:4px 10px;font-size:11px;font-weight:700;color:#E74C3C;">⚠️ Arachides</div>
        </div>
      </div>
      <!-- Maladies chroniques -->
      <div>
        <div style="font-size:11px;font-weight:700;color:#6B7A8D;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Maladies chroniques</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;">
          <div style="background:#EEF4FF;border:1px solid #C0D4FF;border-radius:20px;padding:4px 10px;font-size:11px;font-weight:700;color:#2D5BE3;">Diabète type 2</div>
          <div style="background:#EEF4FF;border:1px solid #C0D4FF;border-radius:20px;padding:4px 10px;font-size:11px;font-weight:700;color:#2D5BE3;">Hypertension</div>
        </div>
      </div>
    </div>

    <!-- Médecin traitant -->
    <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:800;color:#1A2332;margin-bottom:12px;">👨‍⚕️ Médecin traitant</div>
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#0F3F54,#1A6B50);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;">👨‍⚕️</div>
        <div style="flex:1;">
          <div style="font-size:14px;font-weight:700;color:#1A2332;">Dr. Amadou Diallo</div>
          <div style="font-size:11px;color:#6B7A8D;">Médecin généraliste</div>
          <div style="font-size:11px;color:#6B7A8D;">CHU de Cocody, Abidjan</div>
        </div>
        <button onclick="goToScreen(74)" style="background:#E8F7EE;border:none;border-radius:10px;padding:8px 12px;font-size:12px;font-weight:700;color:#27AE60;cursor:pointer;">Contacter</button>
      </div>
    </div>

    <!-- Assurance -->
    <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:800;color:#1A2332;margin-bottom:12px;">🛡️ Assurance santé</div>
      <div style="background:linear-gradient(135deg,#0F3F54,#1A6B50);border-radius:14px;padding:16px;color:#fff;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
          <div>
            <div style="font-size:16px;font-weight:800;">CNAM Côte d'Ivoire</div>
            <div style="font-size:11px;color:rgba(255,255,255,0.7);margin-top:2px;">Caisse Nationale d'Assurance Maladie</div>
          </div>
          <div style="background:rgba(255,255,255,0.2);border-radius:8px;padding:4px 10px;font-size:11px;font-weight:700;">ACTIF</div>
        </div>
        <div style="display:flex;justify-content:space-between;">
          <div>
            <div style="font-size:10px;color:rgba(255,255,255,0.6);">N° Assuré</div>
            <div style="font-size:13px;font-weight:700;">225-2024-847-A</div>
          </div>
          <div>
            <div style="font-size:10px;color:rgba(255,255,255,0.6);">Taux prise en charge</div>
            <div style="font-size:13px;font-weight:700;">70%</div>
          </div>
          <div>
            <div style="font-size:10px;color:rgba(255,255,255,0.6);">Expiration</div>
            <div style="font-size:13px;font-weight:700;">31/12/2025</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div style="display:flex;flex-direction:column;gap:8px;padding-bottom:20px;">
      <button onclick="goToScreen(35)" style="padding:14px;background:#0F3F54;color:#fff;border:none;border-radius:14px;font-size:14px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;display:flex;align-items:center;justify-content:center;gap:8px;">📋 Voir mon dossier médical</button>
      <button onclick="showToast('Export PDF en cours…')" style="padding:14px;background:#fff;color:#0F3F54;border:2px solid #0F3F54;border-radius:14px;font-size:14px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📄 Exporter mon profil PDF</button>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 35 — DOSSIER MÉDICAL
======================================== -->
<div class="screen" id="screen35" data-device="mobile" style="background:#F4F9FC;display:flex;flex-direction:column;">
  <!-- Header -->
  <div style="background:linear-gradient(135deg,#1A2332 0%,#0F3F54 100%);padding:54px 20px 20px;flex-shrink:0;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
      <button onclick="goToScreen(34)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Dossier Médical</div>
      <button onclick="showToast('Partager le dossier')" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:14px;cursor:pointer;">↗️</button>
    </div>
    <div style="background:rgba(255,255,255,0.1);border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;">
      <div>
        <div style="font-size:13px;font-weight:700;color:#fff;">Kofi Mensah</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.6);">Mis à jour: 08/04/2026</div>
      </div>
      <div style="text-align:right;">
        <div style="font-size:11px;color:rgba(255,255,255,0.6);">Dossier</div>
        <div style="font-size:12px;font-weight:700;color:#4ADE80;">Complet 87%</div>
      </div>
    </div>
  </div>

  <!-- Tabs -->
  <div style="background:#fff;display:flex;border-bottom:2px solid #E8EDF2;flex-shrink:0;">
    <button onclick="showDossierTab('antecedents')" id="tab-antecedents" style="flex:1;padding:12px 6px;background:none;border:none;font-size:11px;font-weight:700;color:#0F3F54;border-bottom:2px solid #0F3F54;cursor:pointer;margin-bottom:-2px;">Antécédents</button>
    <button onclick="showDossierTab('traitements')" id="tab-traitements" style="flex:1;padding:12px 6px;background:none;border:none;font-size:11px;font-weight:600;color:#6B7A8D;border-bottom:2px solid transparent;cursor:pointer;margin-bottom:-2px;">Traitements</button>
    <button onclick="showDossierTab('vaccins')" id="tab-vaccins" style="flex:1;padding:12px 6px;background:none;border:none;font-size:11px;font-weight:600;color:#6B7A8D;border-bottom:2px solid transparent;cursor:pointer;margin-bottom:-2px;">Vaccins</button>
    <button onclick="showDossierTab('consultations')" id="tab-consultations" style="flex:1;padding:12px 6px;background:none;border:none;font-size:11px;font-weight:600;color:#6B7A8D;border-bottom:2px solid transparent;cursor:pointer;margin-bottom:-2px;">Consultations</button>
  </div>

  <!-- Content -->
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;" id="dossier-content">

    <!-- TAB: Antécédents (visible by default) -->
    <div id="dossier-antecedents">
      <!-- Maladies chroniques -->
      <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);margin-bottom:12px;">
        <div style="font-size:13px;font-weight:800;color:#1A2332;margin-bottom:12px;">🏥 Maladies chroniques</div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <div style="display:flex;align-items:flex-start;gap:10px;padding:10px;background:#FEF9EE;border-radius:12px;">
            <div style="font-size:20px;">🔵</div>
            <div style="flex:1;">
              <div style="font-size:13px;font-weight:700;color:#1A2332;">Diabète de type 2</div>
              <div style="font-size:11px;color:#6B7A8D;">Diagnostiqué en 2018 • Sous traitement</div>
              <div style="font-size:11px;color:#F39C12;font-weight:600;margin-top:3px;">Contrôle: Bonne (HbA1c 6.8%)</div>
            </div>
          </div>
          <div style="display:flex;align-items:flex-start;gap:10px;padding:10px;background:#FEF9EE;border-radius:12px;">
            <div style="font-size:20px;">❤️</div>
            <div style="flex:1;">
              <div style="font-size:13px;font-weight:700;color:#1A2332;">Hypertension artérielle</div>
              <div style="font-size:11px;color:#6B7A8D;">Diagnostiquée en 2020 • Sous traitement</div>
              <div style="font-size:11px;color:#27AE60;font-weight:600;margin-top:3px;">Contrôle: Excellente (128/82 mmHg)</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Chirurgies & hospitalisations -->
      <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);margin-bottom:12px;">
        <div style="font-size:13px;font-weight:800;color:#1A2332;margin-bottom:12px;">🔪 Chirurgies & hospitalisations</div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:8px;border-bottom:1px solid #F0F4F8;">
            <div>
              <div style="font-size:12px;font-weight:700;color:#1A2332;">Appendicectomie</div>
              <div style="font-size:11px;color:#6B7A8D;">CHU de Cocody — Chirurgie laparoscopique</div>
            </div>
            <div style="font-size:11px;color:#6B7A8D;">2015</div>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div>
              <div style="font-size:12px;font-weight:700;color:#1A2332;">Hospitalisation — Paludisme sévère</div>
              <div style="font-size:11px;color:#6B7A8D;">Clinique Sainte Marie, Abidjan</div>
            </div>
            <div style="font-size:11px;color:#6B7A8D;">2021</div>
          </div>
        </div>
      </div>
      <!-- Antécédents familiaux -->
      <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <div style="font-size:13px;font-weight:800;color:#1A2332;margin-bottom:12px;">👨‍👩‍👦 Antécédents familiaux</div>
        <div style="display:flex;flex-direction:column;gap:6px;">
          <div style="display:flex;justify-content:space-between;"><div style="font-size:12px;color:#6B7A8D;">Père</div><div style="font-size:12px;font-weight:600;color:#1A2332;">Diabète, Hypertension</div></div>
          <div style="display:flex;justify-content:space-between;"><div style="font-size:12px;color:#6B7A8D;">Mère</div><div style="font-size:12px;font-weight:600;color:#1A2332;">Asthme</div></div>
          <div style="display:flex;justify-content:space-between;"><div style="font-size:12px;color:#6B7A8D;">Grand-père paternel</div><div style="font-size:12px;font-weight:600;color:#1A2332;">Cardiopathie</div></div>
        </div>
      </div>
    </div>

    <!-- TAB: Traitements (hidden by default) -->
    <div id="dossier-traitements" style="display:none;">
      <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);margin-bottom:12px;">
        <div style="font-size:13px;font-weight:800;color:#1A2332;margin-bottom:12px;">💊 Traitements en cours</div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <div style="background:#E8F7EE;border-radius:12px;padding:12px;">
            <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
              <div style="font-size:13px;font-weight:700;color:#1A2332;">Metformine 850mg</div>
              <div style="background:#27AE60;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;color:#fff;">En cours</div>
            </div>
            <div style="font-size:11px;color:#6B7A8D;">2 cp/jour — Matin & Soir pendant le repas</div>
            <div style="font-size:11px;color:#6B7A8D;margin-top:2px;">Pour: Diabète type 2 • Prescrit: Dr. Diallo</div>
          </div>
          <div style="background:#E8F7EE;border-radius:12px;padding:12px;">
            <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
              <div style="font-size:13px;font-weight:700;color:#1A2332;">Amlodipine 5mg</div>
              <div style="background:#27AE60;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;color:#fff;">En cours</div>
            </div>
            <div style="font-size:11px;color:#6B7A8D;">1 cp/jour — Matin</div>
            <div style="font-size:11px;color:#6B7A8D;margin-top:2px;">Pour: Hypertension • Prescrit: Dr. Diallo</div>
          </div>
          <div style="background:#F0F4F8;border-radius:12px;padding:12px;">
            <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
              <div style="font-size:13px;font-weight:700;color:#1A2332;">Amoxicilline 500mg</div>
              <div style="background:#F39C12;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;color:#fff;">7j restants</div>
            </div>
            <div style="font-size:11px;color:#6B7A8D;">1 cp × 3/jour — 7 jours</div>
            <div style="font-size:11px;color:#6B7A8D;margin-top:2px;">Pour: Infection ORL • Prescrit: Dr. Koffi</div>
          </div>
        </div>
      </div>
      <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <div style="font-size:13px;font-weight:800;color:#1A2332;margin-bottom:12px;">📂 Traitements terminés récents</div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div><div style="font-size:12px;font-weight:600;color:#6B7A8D;">Azithromycine 500mg</div><div style="font-size:11px;color:#9CA8B4;">Infection respiratoire • Mars 2026</div></div>
            <div style="font-size:11px;color:#9CA8B4;">Terminé</div>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div><div style="font-size:12px;font-weight:600;color:#6B7A8D;">Artéméther-Luméfantrine</div><div style="font-size:11px;color:#9CA8B4;">Paludisme • Janv. 2026</div></div>
            <div style="font-size:11px;color:#9CA8B4;">Terminé</div>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB: Vaccins (hidden by default) -->
    <div id="dossier-vaccins" style="display:none;">
      <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <div style="font-size:13px;font-weight:800;color:#1A2332;margin-bottom:12px;">💉 Carnet de vaccination</div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <div style="display:flex;align-items:center;gap:10px;padding:10px;background:#E8F7EE;border-radius:12px;">
            <div style="width:36px;height:36px;background:#27AE60;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">✓</div>
            <div style="flex:1;"><div style="font-size:12px;font-weight:700;color:#1A2332;">Covid-19 (Pfizer BNT162b2)</div><div style="font-size:11px;color:#6B7A8D;">3 doses — Dernière: Oct. 2022</div></div>
            <div style="font-size:10px;font-weight:700;color:#27AE60;">À jour</div>
          </div>
          <div style="display:flex;align-items:center;gap:10px;padding:10px;background:#E8F7EE;border-radius:12px;">
            <div style="width:36px;height:36px;background:#27AE60;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">✓</div>
            <div style="flex:1;"><div style="font-size:12px;font-weight:700;color:#1A2332;">Fièvre jaune</div><div style="font-size:11px;color:#6B7A8D;">1 dose — Juil. 2019</div></div>
            <div style="font-size:10px;font-weight:700;color:#27AE60;">À jour</div>
          </div>
          <div style="display:flex;align-items:center;gap:10px;padding:10px;background:#E8F7EE;border-radius:12px;">
            <div style="width:36px;height:36px;background:#27AE60;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">✓</div>
            <div style="flex:1;"><div style="font-size:12px;font-weight:700;color:#1A2332;">Hépatite B</div><div style="font-size:11px;color:#6B7A8D;">3 doses — Dernière: 2010</div></div>
            <div style="font-size:10px;font-weight:700;color:#27AE60;">À jour</div>
          </div>
          <div style="display:flex;align-items:center;gap:10px;padding:10px;background:#FEF9EE;border-radius:12px;">
            <div style="width:36px;height:36px;background:#F39C12;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">⚠️</div>
            <div style="flex:1;"><div style="font-size:12px;font-weight:700;color:#1A2332;">Méningite A+C</div><div style="font-size:11px;color:#6B7A8D;">1 dose — 2016 (rappel recommandé)</div></div>
            <div style="font-size:10px;font-weight:700;color:#F39C12;">Rappel dû</div>
          </div>
          <div style="display:flex;align-items:center;gap:10px;padding:10px;background:#FEF0EE;border-radius:12px;">
            <div style="width:36px;height:36px;background:#E74C3C;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">!</div>
            <div style="flex:1;"><div style="font-size:12px;font-weight:700;color:#1A2332;">Tétanos-Diphtérie</div><div style="font-size:11px;color:#6B7A8D;">Dernier rappel: 2008</div></div>
            <div style="font-size:10px;font-weight:700;color:#E74C3C;">Expiré</div>
          </div>
        </div>
        <button onclick="showToast('Mise à jour vaccination en cours…')" style="margin-top:12px;width:100%;padding:12px;background:#0F3F54;color:#fff;border:none;border-radius:12px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Mettre à jour le carnet</button>
      </div>
    </div>

    <!-- TAB: Consultations (hidden by default) -->
    <div id="dossier-consultations" style="display:none;">
      <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <div style="font-size:13px;font-weight:800;color:#1A2332;margin-bottom:12px;">🩺 Historique des consultations</div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <div style="border-left:3px solid #27AE60;padding-left:12px;">
            <div style="display:flex;justify-content:space-between;margin-bottom:3px;">
              <div style="font-size:12px;font-weight:700;color:#1A2332;">Consultation générale</div>
              <div style="font-size:11px;color:#6B7A8D;">08/04/2026</div>
            </div>
            <div style="font-size:11px;color:#6B7A8D;">Dr. Amadou Diallo • Renouvellement ordonnance diabète</div>
            <button onclick="goToScreen(12)" style="margin-top:6px;background:#E8F7EE;border:none;border-radius:6px;padding:4px 10px;font-size:10px;font-weight:700;color:#27AE60;cursor:pointer;">Voir ordonnance →</button>
          </div>
          <div style="border-left:3px solid #2D5BE3;padding-left:12px;">
            <div style="display:flex;justify-content:space-between;margin-bottom:3px;">
              <div style="font-size:12px;font-weight:700;color:#1A2332;">Consultation ORL</div>
              <div style="font-size:11px;color:#6B7A8D;">21/03/2026</div>
            </div>
            <div style="font-size:11px;color:#6B7A8D;">Dr. Yves Koffi • Angine bactérienne — Amoxicilline prescrit</div>
          </div>
          <div style="border-left:3px solid #9B59B6;padding-left:12px;">
            <div style="display:flex;justify-content:space-between;margin-bottom:3px;">
              <div style="font-size:12px;font-weight:700;color:#1A2332;">Bilan annuel</div>
              <div style="font-size:11px;color:#6B7A8D;">10/01/2026</div>
            </div>
            <div style="font-size:11px;color:#6B7A8D;">Dr. Amadou Diallo • HbA1c 6.8%, TA 128/82 — Résultats satisfaisants</div>
          </div>
          <div style="border-left:3px solid #E74C3C;padding-left:12px;">
            <div style="display:flex;justify-content:space-between;margin-bottom:3px;">
              <div style="font-size:12px;font-weight:700;color:#1A2332;">Urgences — Paludisme</div>
              <div style="font-size:11px;color:#6B7A8D;">05/01/2026</div>
            </div>
            <div style="font-size:11px;color:#6B7A8D;">Clinique Sainte Marie • Hospitalisation 3 jours — Guérison complète</div>
          </div>
          <div style="border-left:3px solid #F39C12;padding-left:12px;">
            <div style="display:flex;justify-content:space-between;margin-bottom:3px;">
              <div style="font-size:12px;font-weight:700;color:#1A2332;">Consultation cardiologie</div>
              <div style="font-size:11px;color:#6B7A8D;">15/11/2025</div>
            </div>
            <div style="font-size:11px;color:#6B7A8D;">Dr. Christiane Kra • ECG normal, adaptation traitement HTA</div>
          </div>
        </div>
        <button onclick="showToast('Chargement de l\'historique complet…')" style="margin-top:12px;width:100%;padding:12px;background:#F0F4F8;color:#1A2332;border:none;border-radius:12px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Voir toutes les consultations</button>
      </div>
    </div>

  </div>
</div>

<script>
window.showDossierTab = function(tab) {
  var tabs = ['antecedents','traitements','vaccins','consultations'];
  tabs.forEach(function(t) {
    var content = document.getElementById('dossier-' + t);
    var btn = document.getElementById('tab-' + t);
    if (content) content.style.display = (t === tab) ? 'block' : 'none';
    if (btn) {
      btn.style.fontWeight = (t === tab) ? '700' : '600';
      btn.style.color = (t === tab) ? '#0F3F54' : '#6B7A8D';
      btn.style.borderBottomColor = (t === tab) ? '#0F3F54' : 'transparent';
    }
  });
};
</script>

<!-- ========================================
     SCREEN 33 — ALERTES RAPPELS
======================================== -->
<div class="screen" id="screen36" data-device="mobile">
  <div style="background:#0F3F54;padding:54px 20px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;justify-content:space-between;">
      <button onclick="goToScreen(10)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Rappels & Alertes</div>
      <button onclick="showToast('Nouveau rappel')" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">+</button>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;">
    <div style="background:#FEF0EE;border-radius:14px;padding:14px;border-left:3px solid #E74C3C;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;"><div style="font-size:13px;font-weight:700;color:#E74C3C;">⚠️ Renouvellement urgent</div><div style="font-size:11px;color:#E74C3C;">Aujourd'hui</div></div>
      <div style="font-size:12px;color:#1A2332;font-weight:600;">Metformine 850mg</div>
      <div style="font-size:11px;color:#6B7A8D;margin-bottom:8px;">Stock restant: 3 comprimés (2 jours)</div>
      <button onclick="goToScreen(9)" style="padding:8px 14px;background:#E74C3C;color:#fff;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Commander maintenant</button>
    </div>
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="display:flex;justify-content:space-between;margin-bottom:6px;"><div style="font-size:13px;font-weight:700;color:#1A2332;">💊 Prise médicament</div><div style="font-size:11px;color:#6B7A8D;">08:00</div></div>
      <div style="font-size:12px;color:#6B7A8D;">Amoxicilline 500mg — 1 comprimé</div>
      <div style="background:#E8F7EE;display:inline-block;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;color:#27AE60;margin-top:6px;">✓ Pris ce matin</div>
    </div>
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="display:flex;justify-content:space-between;margin-bottom:6px;"><div style="font-size:13px;font-weight:700;color:#1A2332;">💊 Prise médicament</div><div style="font-size:11px;color:#6B7A8D;">16:00</div></div>
      <div style="font-size:12px;color:#6B7A8D;">Amoxicilline 500mg — 1 comprimé</div>
      <div style="background:#FEF9EE;display:inline-block;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;color:#F39C12;margin-top:6px;">⏳ À venir</div>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 34 — PARAMÈTRES COMPTE
======================================== -->
<div class="screen" id="screen37" data-device="mobile">
  <div style="background:#0F3F54;padding:54px 20px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;">
      <button onclick="goToScreen(10)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Paramètres</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;">
    <div style="background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="padding:14px 16px;border-bottom:1px solid #F4F9FC;display:flex;justify-content:space-between;align-items:center;cursor:pointer;" onclick="showModal('edit-field-modal')"><span style="font-size:13px;font-weight:600;color:#1A2332;">👤 Informations personnelles</span><span style="color:#6B7A8D;">→</span></div>
      <div style="padding:14px 16px;border-bottom:1px solid #F4F9FC;display:flex;justify-content:space-between;align-items:center;cursor:pointer;" onclick="showModal('edit-field-modal')"><span style="font-size:13px;font-weight:600;color:#1A2332;">🔒 Sécurité & Connexion</span><span style="color:#6B7A8D;">→</span></div>
      <div style="padding:14px 16px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;" onclick="goToScreen(18)"><span style="font-size:13px;font-weight:600;color:#1A2332;">🔔 Notifications</span><span style="color:#6B7A8D;">→</span></div>
    </div>
    <div style="background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="padding:14px 16px;border-bottom:1px solid #F4F9FC;display:flex;justify-content:space-between;align-items:center;cursor:pointer;" onclick="goToScreen(43)"><span style="font-size:13px;font-weight:600;color:#1A2332;">📍 Adresses de livraison</span><span style="color:#6B7A8D;">→</span></div>
      <div style="padding:14px 16px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;" onclick="showToast('Paiement')"><span style="font-size:13px;font-weight:600;color:#1A2332;">💳 Moyens de paiement</span><span style="color:#6B7A8D;">→</span></div>
    </div>
    <div style="background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="padding:14px 16px;border-bottom:1px solid #F4F9FC;display:flex;justify-content:space-between;align-items:center;cursor:pointer;" onclick="goToScreen(49)"><span style="font-size:13px;font-weight:600;color:#1A2332;">❓ Aide & Support</span><span style="color:#6B7A8D;">→</span></div>
      <div style="padding:14px 16px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;" onclick="showToast('CGU')"><span style="font-size:13px;font-weight:600;color:#1A2332;">📄 CGU & Confidentialité</span><span style="color:#6B7A8D;">→</span></div>
    </div>
    <button onclick="goToScreen(1)" style="width:100%;padding:14px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">Se déconnecter</button>
  </div>
</div>

<!-- ========================================
     SCREEN 35 — TÉLÉCHARGEMENT ORDONNANCE
======================================== -->
<div class="screen" id="screen38" data-device="mobile">
  <div style="background:linear-gradient(135deg,#1A6B8A,#0F3F54);padding:54px 20px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;">
      <button onclick="goToScreen(13)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Soumettre ordonnance</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:20px;display:flex;flex-direction:column;gap:14px;align-items:stretch;">
    <!-- Upload zone -->
    <div onclick="showToast('📷 Appareil photo...')" style="border:2px dashed #1A6B8A;border-radius:16px;padding:32px 20px;text-align:center;background:#E8F4F8;cursor:pointer;">
      <div style="font-size:40px;margin-bottom:12px;">📷</div>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:#1A6B8A;margin-bottom:6px;">Photographier l'ordonnance</div>
      <div style="font-size:12px;color:#6B7A8D;">ou appuyez pour choisir dans la galerie</div>
    </div>
    <div style="text-align:center;font-size:12px;color:#6B7A8D;">— ou —</div>
    <button onclick="showToast('📁 Galerie...')" style="width:100%;padding:14px;background:#fff;color:#1A6B8A;border:1.5px solid #1A6B8A;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">📁 Choisir dans la galerie</button>
    <div style="background:#FEF9EE;border-radius:12px;padding:12px 14px;border:1px solid rgba(243,156,18,0.2);">
      <div style="font-size:12px;font-weight:700;color:#F39C12;margin-bottom:4px;">⚠️ Exigences</div>
      <div style="font-size:11px;color:#6B7A8D;line-height:1.6;">Photo nette, lisible · Signature visible · Date de moins de 3 mois · Format JPG ou PDF</div>
    </div>
    <button onclick="goToScreen(9)" style="width:100%;padding:16px;background:linear-gradient(135deg,#1A6B8A,#2196B3);color:#fff;border:none;border-radius:14px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;">Soumettre l'ordonnance →</button>
  </div>
</div>

<!-- ========================================
     SCREEN 36 — HISTORIQUE PAIEMENTS
======================================== -->
<div class="screen" id="screen39" data-device="mobile">
  <div style="background:#0F3F54;padding:54px 20px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;">
      <button onclick="goToScreen(10)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Historique paiements</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;">
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);display:flex;justify-content:space-between;align-items:center;">
      <div style="display:flex;gap:10px;align-items:center;"><div style="width:38px;height:38px;background:#FFF0E0;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;">🔶</div><div><div style="font-size:13px;font-weight:700;color:#1A2332;">#CMD-90214</div><div style="font-size:11px;color:#6B7A8D;">14 oct. · MTN Money</div></div></div>
      <div style="text-align:right;"><div style="font-size:14px;font-weight:800;color:#1A2332;">12 500 FCFA</div><div style="background:#E8F7EE;border-radius:6px;padding:1px 8px;font-size:10px;font-weight:700;color:#27AE60;">Payé ✓</div></div>
    </div>
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);display:flex;justify-content:space-between;align-items:center;">
      <div style="display:flex;gap:10px;align-items:center;"><div style="width:38px;height:38px;background:#FFF0E0;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;">🔷</div><div><div style="font-size:13px;font-weight:700;color:#1A2332;">#CMD-90197</div><div style="font-size:11px;color:#6B7A8D;">2 oct. · Orange Money</div></div></div>
      <div style="text-align:right;"><div style="font-size:14px;font-weight:800;color:#1A2332;">8 700 FCFA</div><div style="background:#E8F7EE;border-radius:6px;padding:1px 8px;font-size:10px;font-weight:700;color:#27AE60;">Payé ✓</div></div>
    </div>
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);display:flex;justify-content:space-between;align-items:center;">
      <div style="display:flex;gap:10px;align-items:center;"><div style="width:38px;height:38px;background:#F4F9FC;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;">💳</div><div><div style="font-size:13px;font-weight:700;color:#1A2332;">#CMD-90145</div><div style="font-size:11px;color:#6B7A8D;">18 sept. · Carte bancaire</div></div></div>
      <div style="text-align:right;"><div style="font-size:14px;font-weight:800;color:#1A2332;">5 200 FCFA</div><div style="background:#FEF0EE;border-radius:6px;padding:1px 8px;font-size:10px;font-weight:700;color:#E74C3C;">Remboursé</div></div>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 37 — AIDE & FAQ
======================================== -->
<div class="screen" id="screen40" data-device="mobile">
  <div style="background:#0F3F54;padding:54px 20px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;">
      <button onclick="goToScreen(37)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Aide & FAQ</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;">
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);cursor:pointer;" onclick="showToast('Comment soumettre une ordonnance...')">
      <div style="font-size:13px;font-weight:700;color:#1A2332;margin-bottom:4px;">Comment soumettre une ordonnance ?</div>
      <div style="font-size:12px;color:#6B7A8D;">Photographiez l'ordonnance signée par votre médecin...</div>
    </div>
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);cursor:pointer;" onclick="showToast('Délais de livraison...')">
      <div style="font-size:13px;font-weight:700;color:#1A2332;margin-bottom:4px;">Quels sont les délais de livraison ?</div>
      <div style="font-size:12px;color:#6B7A8D;">Livraison en 2–4 heures à Abidjan, 24h en région...</div>
    </div>
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);cursor:pointer;" onclick="showToast('Paiement sécurisé...')">
      <div style="font-size:13px;font-weight:700;color:#1A2332;margin-bottom:4px;">Mes paiements sont-ils sécurisés ?</div>
      <div style="font-size:12px;color:#6B7A8D;">Oui, toutes les transactions sont chiffrées SSL...</div>
    </div>
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);cursor:pointer;" onclick="showToast('Remboursement...')">
      <div style="font-size:13px;font-weight:700;color:#1A2332;margin-bottom:4px;">Comment obtenir un remboursement ?</div>
      <div style="font-size:12px;color:#6B7A8D;">Contactez le support dans les 48h suivant la commande...</div>
    </div>
    <button onclick="goToScreen(16)" style="width:100%;padding:14px;background:#1A6B8A;color:#fff;border:none;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">💬 Contacter le support</button>
  </div>
</div>

<!-- ========================================
     SCREEN 38 — PHARMACIEN STOCK MOBILE
======================================== -->
<div class="screen" id="screen44" data-device="mobile">
  <div style="background:#0F3F54;padding:54px 20px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;">
      <button onclick="goToScreen(10)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Scanner QR Code</div>
    </div>
  </div>
  <div style="flex:1;background:#0a1a24;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:20px;">
    <div style="width:220px;height:220px;border-radius:16px;position:relative;background:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;">
      <div style="position:absolute;top:0;left:0;width:40px;height:40px;border-top:3px solid #1A6B8A;border-left:3px solid #1A6B8A;border-radius:8px 0 0 0;"></div>
      <div style="position:absolute;top:0;right:0;width:40px;height:40px;border-top:3px solid #1A6B8A;border-right:3px solid #1A6B8A;border-radius:0 8px 0 0;"></div>
      <div style="position:absolute;bottom:0;left:0;width:40px;height:40px;border-bottom:3px solid #1A6B8A;border-left:3px solid #1A6B8A;border-radius:0 0 0 8px;"></div>
      <div style="position:absolute;bottom:0;right:0;width:40px;height:40px;border-bottom:3px solid #1A6B8A;border-right:3px solid #1A6B8A;border-radius:0 0 8px 0;"></div>
      <div style="font-size:48px;opacity:0.4;">📷</div>
    </div>
    <div style="font-size:14px;color:rgba(255,255,255,0.7);text-align:center;">Pointez votre caméra vers le QR Code<br>de l'ordonnance</div>
    <button onclick="goToScreen(51)" style="padding:14px 28px;background:#1A6B8A;color:#fff;border:none;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">Simuler une lecture ✓</button>
  </div>
</div>

<!-- ========================================
     SCREEN 42 — PROFIL PUBLIC PHARMACIEN
======================================== -->
<div class="screen" id="screen46" data-device="mobile">
  <div style="background:#0F3F54;padding:54px 20px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;">
      <button onclick="goToScreen(10)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Avis & Notes</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;">
    <div style="background:#1A6B8A;border-radius:14px;padding:16px;text-align:center;color:#fff;">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:40px;font-weight:800;">4.8</div>
      <div style="font-size:20px;letter-spacing:2px;margin:4px 0;">★★★★★</div>
      <div style="font-size:12px;opacity:0.7;">Basé sur 128 avis</div>
    </div>
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="display:flex;align-items:flex-start;gap:10px;"><div style="width:36px;height:36px;background:#E8F4F8;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:#1A2332;">MK</div><div><div style="font-size:12px;font-weight:700;color:#1A2332;">Moussa Koné</div><div style="font-size:11px;color:#F39C12;margin-bottom:4px;">★★★★★</div><div style="font-size:12px;color:#6B7A8D;">"Service impeccable, Dr. Lefebvre très professionnelle et réactive."</div></div></div>
    </div>
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="display:flex;align-items:flex-start;gap:10px;"><div style="width:36px;height:36px;background:#E8F4F8;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:#1A2332;">FT</div><div><div style="font-size:12px;font-weight:700;color:#1A2332;">Fatou Traoré</div><div style="font-size:11px;color:#F39C12;margin-bottom:4px;">★★★★☆</div><div style="font-size:12px;color:#6B7A8D;">"Livraison rapide, médicaments bien conditionnés. Merci !"</div></div></div>
    </div>
    <button onclick="showToast('Laisser un avis...')" style="width:100%;padding:14px;background:#fff;color:#1A6B8A;border:1.5px solid #1A6B8A;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">✍️ Laisser un avis</button>
  </div>
</div>

<!-- ========================================
     SCREEN 44 — PROGRAMME FIDÉLITÉ
======================================== -->
<div class="screen" id="screen47" data-device="mobile">
  <div style="background:linear-gradient(135deg,#F39C12,#e67e22);padding:54px 20px 24px;flex-shrink:0;text-align:center;">
    <button onclick="goToScreen(10)" style="position:absolute;top:54px;left:20px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
    <div style="font-size:40px;margin-bottom:8px;">⭐</div>
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:800;color:#fff;">Programme PharmaPoints</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.8);margin-top:4px;">Vos récompenses fidélité</div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;">
    <div style="background:linear-gradient(135deg,#1A2332,#0F3F54);border-radius:16px;padding:18px;color:#fff;text-align:center;">
      <div style="font-size:12px;opacity:0.7;margin-bottom:4px;">Solde actuel</div>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:40px;font-weight:800;color:#F39C12;">1 250</div>
      <div style="font-size:13px;opacity:0.8;">PharmaPoints</div>
      <div style="background:rgba(255,255,255,0.1);border-radius:8px;padding:6px;margin-top:12px;font-size:11px;">= 6 250 FCFA de réduction disponible</div>
    </div>
    <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:13px;font-weight:700;color:#1A2332;margin-bottom:10px;">Historique points</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;justify-content:space-between;"><span style="font-size:12px;color:#6B7A8D;">#CMD-90214 · 14 oct.</span><span style="font-size:12px;font-weight:700;color:#27AE60;">+125 pts</span></div>
        <div style="display:flex;justify-content:space-between;"><span style="font-size:12px;color:#6B7A8D;">#CMD-90197 · 2 oct.</span><span style="font-size:12px;font-weight:700;color:#27AE60;">+87 pts</span></div>
        <div style="display:flex;justify-content:space-between;"><span style="font-size:12px;color:#6B7A8D;">Réduction utilisée · 18 sept.</span><span style="font-size:12px;font-weight:700;color:#E74C3C;">−200 pts</span></div>
      </div>
    </div>
    <button onclick="showToast('Utiliser mes points...')" style="width:100%;padding:14px;background:linear-gradient(135deg,#F39C12,#e67e22);color:#fff;border:none;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">Utiliser mes points 🎁</button>
  </div>
</div>

<!-- ========================================
     SCREEN 45 — ADMIN MOBILE DASHBOARD
======================================== -->
<div class="screen" id="screen51" data-device="mobile" style="background:#F4F9FC;justify-content:center;align-items:center;text-align:center;padding:32px;">
  <div style="display:flex;flex-direction:column;align-items:center;gap:20px;">
    <!-- Animated checkmark -->
    <div style="width:100px;height:100px;background:linear-gradient(135deg,#27AE60,#2ecc71);border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 16px 48px rgba(39,174,96,0.35);animation:successPulse 2s ease-in-out infinite;">
      <div style="font-size:44px;">✓</div>
    </div>
    <style>@keyframes successPulse{0%,100%{box-shadow:0 16px 48px rgba(39,174,96,0.35)}50%{box-shadow:0 16px 64px rgba(39,174,96,0.55)}}</style>
    <div id="success-title" style="font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;font-weight:800;color:#1A2332;">Ordonnance envoyée !</div>
    <div id="success-msg" style="font-size:14px;color:#6B7A8D;line-height:1.6;max-width:270px;">Votre ordonnance a été envoyée avec succès à votre pharmacien.</div>
    <div style="background:#fff;border-radius:16px;padding:16px 24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);width:100%;">
      <div id="success-ref-label" style="font-size:12px;color:#6B7A8D;margin-bottom:4px;">Référence de commande</div>
      <div id="success-ref-val" style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:800;color:#1A6B8A;">#ORD-2024-089</div>
    </div>
    <div style="background:#E8F7EE;border-radius:14px;padding:14px;border:1px solid rgba(39,174,96,0.2);width:100%;">
      <div style="font-size:13px;color:#27AE60;line-height:1.5;">🔔 Vous serez notifié dès la validation par votre médecin. Délai habituel : <strong>15-30 minutes</strong></div>
    </div>
    <button onclick="goToScreen(12)" style="width:100%;padding:14px;background:linear-gradient(135deg,#1A6B8A,#2196B3);color:#fff;border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 8px 24px rgba(26,107,138,0.3);">📦 Suivre ma commande</button>
    <button onclick="goToScreen(10)" style="width:100%;padding:14px;background:transparent;color:#1A6B8A;border:2px solid #E2ECF2;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;">🏠 Retour à l'accueil</button>
  </div>
</div>

<!-- ========================================
     SCREEN 49 — EMPTY STATES
======================================== -->
<div class="screen" id="screen52" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:#1A6B8A;padding:52px 20px 20px;display:flex;align-items:center;gap:12px;">
    <button onclick="goToScreen(10)" style="width:36px;height:36px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;font-size:18px;">←</button>
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#fff;">États vides</div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:14px;">
    <!-- Empty 1: Ordonnances -->
    <div style="background:#fff;border-radius:16px;padding:24px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:44px;margin-bottom:10px;">📄</div>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:#1A2332;margin-bottom:6px;">Aucune ordonnance</div>
      <div style="font-size:13px;color:#6B7A8D;margin-bottom:14px;">Envoyez votre première ordonnance pour commencer</div>
      <button onclick="goToScreen(11)" style="padding:10px 20px;background:#1A6B8A;color:#fff;border:none;border-radius:50px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📤 Envoyer une ordonnance</button>
    </div>
    <!-- Empty 2: Commandes -->
    <div style="background:#fff;border-radius:16px;padding:24px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:44px;margin-bottom:10px;">🛍️</div>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:#1A2332;margin-bottom:6px;">Aucune commande</div>
      <div style="font-size:13px;color:#6B7A8D;">Vos commandes apparaîtront ici une fois votre ordonnance validée</div>
    </div>
    <!-- Empty 3: Messages -->
    <div style="background:#fff;border-radius:16px;padding:24px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:44px;margin-bottom:10px;">💬</div>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:#1A2332;margin-bottom:6px;">Aucun message</div>
      <div style="font-size:13px;color:#6B7A8D;margin-bottom:14px;">Démarrez une consultation avec votre médecin</div>
      <button onclick="goToScreen(74)" style="padding:10px 20px;background:#27AE60;color:#fff;border:none;border-radius:50px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">💬 Consulter un médecin</button>
    </div>
    <!-- Empty 4: Search -->
    <div style="background:#fff;border-radius:16px;padding:24px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="font-size:44px;margin-bottom:10px;">🔍</div>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:#1A2332;margin-bottom:6px;">Aucun résultat</div>
      <div style="font-size:13px;color:#6B7A8D;">Aucun résultat pour cette recherche. Essayez d'autres mots-clés</div>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 50 — PHARMACIST ONBOARDING WIZARD
======================================== -->
<div class="screen" id="screen72" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:linear-gradient(135deg,#1A6B8A,#0F3F54);padding:54px 20px 16px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;">
      <button onclick="goToScreen(10)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="flex:1;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:17px;font-weight:800;color:#fff;">Assistant IleraBot 🤖</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.7);margin-top:1px;">Disponible 24h/24 · 7j/7</div>
      </div>
      <div style="background:rgba(39,174,96,0.3);border-radius:50px;padding:3px 10px;font-size:11px;font-weight:700;color:#4ADE80;">● En ligne</div>
    </div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;" id="chatbot-messages">
    <div style="display:flex;gap:8px;align-items:flex-end;">
      <div style="width:32px;height:32px;background:#1A6B8A;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">🤖</div>
      <div style="background:#fff;border-radius:16px 16px 16px 4px;padding:12px 14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);max-width:75%;">
        <div style="font-size:13px;color:#1A2332;line-height:1.5;">Bonjour ! Je suis IleraBot. Je peux vous aider avec :</div>
        <div style="margin-top:8px;display:flex;flex-direction:column;gap:4px;">
          <div style="font-size:12px;color:#6B7A8D;">💊 Informations sur vos médicaments</div>
          <div style="font-size:12px;color:#6B7A8D;">🔍 Vérification d'interactions</div>
          <div style="font-size:12px;color:#6B7A8D;">📋 Explication d'ordonnances</div>
          <div style="font-size:12px;color:#6B7A8D;">📍 Pharmacies disponibles près de vous</div>
        </div>
      </div>
    </div>
    <div style="display:flex;gap:6px;flex-wrap:wrap;padding-left:40px;">
      <button onclick="chatbotReply('Interactions médicamenteuses')" style="background:#E8F4F8;color:#1A6B8A;border:none;border-radius:50px;padding:6px 12px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Interactions médicamenteuses</button>
      <button onclick="chatbotReply('Pharmacie proche')" style="background:#E8F4F8;color:#1A6B8A;border:none;border-radius:50px;padding:6px 12px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Pharmacie proche</button>
      <button onclick="chatbotReply('Posologie Amoxicilline')" style="background:#E8F4F8;color:#1A6B8A;border:none;border-radius:50px;padding:6px 12px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Posologie Amoxicilline</button>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;">
      <div style="width:32px;height:32px;background:#1A6B8A;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">🤖</div>
      <div style="background:#fff;border-radius:16px 16px 16px 4px;padding:12px 14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);max-width:75%;">
        <div style="font-size:13px;color:#1A2332;line-height:1.6;">Cliquez sur une suggestion ou tapez votre question ci-dessous.</div>
      </div>
    </div>
  </div>
  <div style="padding:12px 16px 28px;background:#fff;border-top:1px solid #E2ECF2;flex-shrink:0;">
    <div style="display:flex;gap:8px;align-items:center;">
      <div style="flex:1;background:#F4F9FC;border-radius:24px;padding:10px 16px;display:flex;align-items:center;gap:8px;border:1.5px solid #E2ECF2;">
        <input id="chatbot-input" placeholder="Posez votre question..." style="background:none;border:none;outline:none;flex:1;font-size:13px;font-family:'DM Sans',sans-serif;color:#1A2332;" onkeypress="if(event.key==='Enter'){chatbotSend()}"/>
        <button onclick="showToast('Enregistrement vocal...')" style="background:none;border:none;color:#6B7A8D;font-size:16px;cursor:pointer;">🎤</button>
      </div>
      <button onclick="chatbotSend()" style="width:42px;height:42px;background:linear-gradient(135deg,#1A6B8A,#2196B3);border:none;border-radius:50%;color:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;">➤</button>
    </div>
    <div style="text-align:center;margin-top:8px;font-size:10px;color:#A8B4C0;">IleraBot fournit des informations générales. Consultez toujours un professionnel de santé.</div>
  </div>
</div>


<!-- ============================================================
     SIDE MENU DRAWER — Patient
============================================================ -->
<div id="sideMenuOverlay" onclick="closeDrawer()" style="display:none;position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:9998;transition:opacity 0.3s;opacity:0;"></div>
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
    <div onclick="goToScreen(10);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;background:#E8F4F8;">
      <span style="font-size:20px;width:28px;text-align:center;">🏠</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A6B8A;">Accueil</span>
    </div>
    <div onclick="goToScreen(11);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:20px;width:28px;text-align:center;">📄</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;">Envoyer ordonnance</span>
    </div>
    <div onclick="goToScreen(35);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:20px;width:28px;text-align:center;">📋</span>
      <div style="flex:1;"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;">Mes ordonnances</div></div>
    </div>
    <div onclick="goToScreen(13);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:20px;width:28px;text-align:center;">📦</span>
      <div style="flex:1;"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;">Mes commandes</div><div style="font-size:11px;color:#27AE60;font-weight:600;">2 en cours</div></div>
    </div>
    <div onclick="goToScreen(29);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:20px;width:28px;text-align:center;">💊</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;">Catalogue médicaments</span>
    </div>
    <div onclick="goToScreen(32);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:20px;width:28px;text-align:center;">📍</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;">Pharmacies proches</span>
    </div>
    <div onclick="goToScreen(74);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:20px;width:28px;text-align:center;">💬</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;">Consulter un médecin</span>
    </div>
    <div onclick="goToScreen(72);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:20px;width:28px;text-align:center;">🤖</span>
      <div style="flex:1;"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;">Assistant IleraBot</div><div style="font-size:11px;color:#1A6B8A;font-weight:600;">IA · 24h/24</div></div>
    </div>
    <!-- Divider -->
    <div style="height:1px;background:#E2ECF2;margin:8px 20px;"></div>
    <!-- Section: Mon compte -->
    <div style="padding:6px 20px;font-size:10px;font-weight:700;color:#A8B4C0;letter-spacing:0.8px;text-transform:uppercase;">Mon compte</div>
    <div onclick="goToScreen(17);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:20px;width:28px;text-align:center;">👤</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;">Mon profil</span>
    </div>
    <div onclick="goToScreen(18);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:20px;width:28px;text-align:center;">🔔</span>
      <div style="flex:1;"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;">Notifications</div></div>
      <div style="background:#E74C3C;color:#fff;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;">3</div>
    </div>
    <div onclick="goToScreen(39);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:20px;width:28px;text-align:center;">💳</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;">Historique paiements</span>
    </div>
    <div onclick="goToScreen(47);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:20px;width:28px;text-align:center;">⭐</span>
      <div style="flex:1;"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;">Programme fidélité</div><div style="font-size:11px;color:#F39C12;font-weight:600;">1 250 PharmaPoints</div></div>
    </div>
    <div onclick="goToScreen(37);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:20px;width:28px;text-align:center;">⚙️</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;color:#1A2332;">Paramètres</span>
    </div>
    <div onclick="goToScreen(40);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
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

  <!-- Header pharmacie -->
  <div style="background:linear-gradient(135deg,#0B3D2E,#1A6B50);padding:52px 20px 16px;position:relative;">
    <button onclick="closeDrawer()" style="position:absolute;top:52px;right:16px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:32px;height:32px;color:#fff;font-size:16px;cursor:pointer;">✕</button>
    <!-- Identité de la pharmacie -->
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
      <div style="width:52px;height:52px;background:rgba(255,255,255,0.15);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:24px;border:2px solid rgba(255,255,255,0.2);flex-shrink:0;">🏥</div>
      <div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:800;color:#fff;line-height:1.2;">Pharmacie du Plateau</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.65);margin-top:2px;">📍 Abidjan Plateau · CI-PH-2024-0421</div>
      </div>
    </div>
    <!-- Statut officine -->
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
      <div style="display:inline-flex;align-items:center;gap:5px;background:rgba(74,222,128,0.2);padding:4px 10px;border-radius:20px;">
        <div style="width:6px;height:6px;background:#4ADE80;border-radius:50%;"></div>
        <span style="font-size:11px;color:#4ADE80;font-weight:600;">Officine ouverte</span>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.5);">08h–20h</div>
    </div>
    <!-- Responsable connecté -->
    <div style="background:rgba(255,255,255,0.08);border-radius:10px;padding:8px 10px;display:flex;align-items:center;gap:8px;">
      <span style="font-size:14px;">👩‍⚕️</span>
      <div>
        <div style="font-size:11px;color:rgba(255,255,255,0.9);font-weight:600;">Dr. Sophie Lefebvre</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5);">Responsable · Ordre CI #4521</div>
      </div>
    </div>
  </div>

  <div style="padding:8px 0;">
    <!-- Section Officine -->
    <div style="padding:5px 20px;font-size:10px;font-weight:700;color:#A8B4C0;letter-spacing:0.8px;text-transform:uppercase;">🏥 Officine</div>
    <div onclick="goToScreen(20);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;background:#E8F7EE;">
      <span style="font-size:18px;width:26px;text-align:center;">📊</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A6B50;">Tableau de bord</span>
    </div>
    <div onclick="goToScreen(21);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">📋</span>
      <div style="flex:1;"><div style="font-size:14px;font-weight:600;color:#1A2332;">File d'ordonnances</div></div>
      <div style="background:#E74C3C;color:#fff;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;">12</div>
    </div>
    <div onclick="goToScreen(25);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">👥</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Dossiers patients</span>
    </div>
    <div onclick="goToScreen(26);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">💬</span>
      <div style="flex:1;"><div style="font-size:14px;font-weight:600;color:#1A2332;">Messagerie patients</div></div>
      <div style="background:#E74C3C;color:#fff;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;">3</div>
    </div>

    <div style="height:1px;background:#E2ECF2;margin:4px 20px;"></div>

    <!-- Section Pharmaciens -->
    <div style="padding:5px 20px;font-size:10px;font-weight:700;color:#A8B4C0;letter-spacing:0.8px;text-transform:uppercase;">👨‍⚕️ Pharmaciens</div>
    <div onclick="goToScreen(75);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">👨‍⚕️</span>
      <div style="flex:1;"><div style="font-size:14px;font-weight:600;color:#1A2332;">Équipe pharmaciens</div><div style="font-size:10px;color:#27AE60;">3 en service · 5 membres</div></div>
    </div>
    <div onclick="goToScreen(75);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">📅</span>
      <div style="flex:1;"><div style="font-size:14px;font-weight:600;color:#1A2332;">Planning équipe</div><div style="font-size:10px;color:#27AE60;">3 pharmaciens en service</div></div>
    </div>
    <div onclick="goToScreen(22);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">✅</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Valider ordonnance</span>
    </div>
    <div onclick="goToScreen(23);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">🔳</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Générer QR Code</span>
    </div>
    <div onclick="goToScreen(24);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">⚗️</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Interactions médicaments</span>
    </div>

    <div style="height:1px;background:#E2ECF2;margin:4px 20px;"></div>

    <!-- Section Gestion de la pharmacie -->
    <div style="padding:5px 20px;font-size:10px;font-weight:700;color:#A8B4C0;letter-spacing:0.8px;text-transform:uppercase;">⚙️ Gestion pharmacie</div>
    <div onclick="goToScreen(41);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">📦</span>
      <div style="flex:1;"><div style="font-size:14px;font-weight:600;color:#1A2332;">Stock officine</div></div>
      <div style="background:#F39C12;color:#fff;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;">3</div>
    </div>
    <div onclick="showToast('Gestion livraisons')" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">🛵</span>
      <div style="flex:1;"><div style="font-size:14px;font-weight:600;color:#1A2332;">Livraisons</div><div style="font-size:10px;color:#27AE60;">5 en cours</div></div>
    </div>
    <div onclick="goToScreen(42);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">📈</span>
      <div style="flex:1;"><div style="font-size:14px;font-weight:600;color:#1A2332;">Statistiques officine</div></div>
    </div>
    <div onclick="goToScreen(53);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">⚙️</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Paramètres officine</span>
    </div>

    <div style="height:1px;background:#E2ECF2;margin:4px 20px;"></div>
    <div onclick="goToScreen(19);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;margin-bottom:16px;" onmouseover="this.style.background='#FEF0EE'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">🚪</span>
      <span style="font-size:14px;font-weight:600;color:#E74C3C;">Déconnecter l'officine</span>
    </div>
  </div>
</div>

<!-- ============================================================
     DRAWER — PHARMACIEN INDIVIDUEL
============================================================ -->
<div id="drawer-pharmacien-indiv" class="profile-drawer" style="display:none;position:absolute;top:0;left:0;width:82%;max-width:290px;height:100%;background:#fff;z-index:9999;transform:translateX(-100%);transition:transform 0.32s cubic-bezier(0.16,1,0.3,1);box-shadow:8px 0 40px rgba(0,0,0,0.2);overflow-y:auto;">

  <!-- Header pharmacien -->
  <div style="background:linear-gradient(135deg,#0D3B2E,#1A6B50);padding:52px 20px 16px;position:relative;">
    <button onclick="closeDrawer()" style="position:absolute;top:52px;right:16px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:32px;height:32px;color:#fff;font-size:16px;cursor:pointer;">✕</button>

    <!-- Avatar + identité -->
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
      <div style="position:relative;">
        <div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#27AE60,#1A6B50);display:flex;align-items:center;justify-content:center;font-size:26px;border:2px solid rgba(255,255,255,0.3);">👨‍⚕️</div>
        <div style="position:absolute;bottom:2px;right:2px;width:12px;height:12px;background:#4ADE80;border-radius:50%;border:2px solid #1A6B50;"></div>
      </div>
      <div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:800;color:#fff;line-height:1.2;">Dr. Konan Yao</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.65);margin-top:2px;">Pharmacien Adjoint</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5);">Ordre CI #3882</div>
      </div>
    </div>

    <!-- Pharmacie + statut -->
    <div style="background:rgba(255,255,255,0.1);border-radius:10px;padding:8px 12px;display:flex;align-items:center;justify-content:space-between;">
      <div style="display:flex;align-items:center;gap:6px;">
        <span style="font-size:13px;">🏥</span>
        <div>
          <div style="font-size:11px;font-weight:700;color:#fff;">Pharmacie du Plateau</div>
          <div style="font-size:10px;color:rgba(255,255,255,0.55);">Poste Mercredi · 08h–16h</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:4px;background:rgba(74,222,128,0.2);padding:3px 8px;border-radius:20px;">
        <div style="width:6px;height:6px;background:#4ADE80;border-radius:50%;"></div>
        <span style="font-size:10px;color:#4ADE80;font-weight:700;">En service</span>
      </div>
    </div>
  </div>

  <div style="padding:8px 0;">

    <!-- Section Mon espace -->
    <div style="padding:5px 20px;font-size:10px;font-weight:700;color:#A8B4C0;letter-spacing:0.8px;text-transform:uppercase;">👨‍⚕️ Mon espace</div>

    <div onclick="goToScreen(85);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;background:#E8F7EE;" onmouseover="this.style.background='#d4f0e2'" onmouseout="this.style.background='#E8F7EE'">
      <span style="font-size:18px;width:26px;text-align:center;">📊</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A6B50;">Mon tableau de bord</span>
    </div>
    <div onclick="goToScreen(86);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">📋</span>
      <div style="flex:1;"><div style="font-size:14px;font-weight:600;color:#1A2332;">Mes ordonnances</div><div style="font-size:10px;color:#F39C12;">3 en attente</div></div>
      <div style="background:#E74C3C;color:#fff;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;">3</div>
    </div>
    <div onclick="goToScreen(89);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">👥</span>
      <div style="flex:1;"><div style="font-size:14px;font-weight:600;color:#1A2332;">Mes patients</div><div style="font-size:10px;color:#6B7A8D;">47 patients suivis</div></div>
    </div>
    <div onclick="goToScreen(88);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">👤</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Mon profil</span>
    </div>

    <div style="height:1px;background:#E2ECF2;margin:4px 20px;"></div>

    <!-- Section Outils -->
    <div style="padding:5px 20px;font-size:10px;font-weight:700;color:#A8B4C0;letter-spacing:0.8px;text-transform:uppercase;">🔧 Outils pharmacien</div>

    <div onclick="goToScreen(87);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">✅</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Traiter une ordonnance</span>
    </div>
    <div onclick="showToast('Vérification interactions');closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">⚗️</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Interactions médicaments</span>
    </div>
    <div onclick="showToast('Scanner un code-barres');closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">📷</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Scanner médicament</span>
    </div>
    <div onclick="goToScreen(41);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">📦</span>
      <div style="flex:1;"><div style="font-size:14px;font-weight:600;color:#1A2332;">Stock pharmacie</div></div>
      <div style="background:#F39C12;color:#fff;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;">!</div>
    </div>

    <div style="height:1px;background:#E2ECF2;margin:4px 20px;"></div>

    <!-- Section Statut service -->
    <div style="padding:5px 20px;font-size:10px;font-weight:700;color:#A8B4C0;letter-spacing:0.8px;text-transform:uppercase;">⏱ Mon statut</div>

    <div onclick="showToast('Statut: En pause');closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">⏸</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Prendre une pause</span>
    </div>
    <div onclick="showToast('Fin de service enregistrée');closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">🔚</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Fin de service</span>
    </div>

    <div style="height:1px;background:#E2ECF2;margin:4px 20px;"></div>

    <!-- Déconnexion -->
    <div onclick="showToast('Déconnexion…');goToScreen(84);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#FEF0EE'" onmouseout="this.style.background=''">
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
    <div style="font-size:12px;color:rgba(255,255,255,0.7);margin-top:2px;">SuperAdmin · ILERA AFRICA CI</div>
    <div style="margin-top:8px;display:inline-flex;align-items:center;gap:5px;background:rgba(231,76,60,0.2);padding:3px 10px;border-radius:20px;">
      <span style="font-size:11px;color:#ff9d9d;font-weight:700;">● SuperAdmin</span>
    </div>
  </div>
  <div style="padding:10px 0;">
    <div style="padding:5px 20px;font-size:10px;font-weight:700;color:#A8B4C0;letter-spacing:0.8px;text-transform:uppercase;">Administration</div>
    <div onclick="goToScreen(28);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;background:#E8F4F8;">
      <span style="font-size:18px;width:26px;text-align:center;">📊</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A6B8A;">Dashboard</span>
    </div>
    <div onclick="goToScreen(48);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">📱</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Vue mobile</span>
    </div>
    <div onclick="goToScreen(34);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">🚚</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Suivi livraisons</span>
    </div>
    <div style="height:1px;background:#E2ECF2;margin:6px 20px;"></div>
    <div style="padding:5px 20px;font-size:10px;font-weight:700;color:#A8B4C0;letter-spacing:0.8px;text-transform:uppercase;">Alertes</div>
    <div onclick="goToScreen(49);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">⚠️</span>
      <div style="flex:1;"><div style="font-size:14px;font-weight:600;color:#1A2332;">Page d'erreur (404)</div></div>
    </div>
    <div onclick="goToScreen(50);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">🛠️</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Page maintenance</span>
    </div>
    <div style="height:1px;background:#E2ECF2;margin:6px 20px;"></div>
    <div onclick="goToScreen(27);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;margin-bottom:16px;" onmouseover="this.style.background='#FEF0EE'" onmouseout="this.style.background=''">
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
    <div onclick="goToScreen(55);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;background:#E8F4F8;">
      <span style="font-size:18px;width:26px;text-align:center;">🏠</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A6B8A;">Dashboard</span>
    </div>
    <div onclick="goToScreen(56);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">📍</span>
      <div style="flex:1;"><div style="font-size:14px;font-weight:600;color:#1A2332;">Livraison en cours</div><div style="font-size:11px;color:#27AE60;font-weight:600;">1 active</div></div>
    </div>
    <div onclick="goToScreen(59);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">📦</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Historique livraisons</span>
    </div>
    <div onclick="goToScreen(57);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">💬</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Messages</span>
    </div>
    <div style="height:1px;background:#E2ECF2;margin:6px 20px;"></div>
    <div style="padding:5px 20px;font-size:10px;font-weight:700;color:#A8B4C0;letter-spacing:0.8px;text-transform:uppercase;">Mon compte</div>
    <div onclick="goToScreen(60);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">💰</span>
      <div style="flex:1;"><div style="font-size:14px;font-weight:600;color:#1A2332;">Revenus & Stats</div><div style="font-size:11px;color:#F39C12;font-weight:600;">47 500 FCFA ce mois</div></div>
    </div>
    <div onclick="goToScreen(61);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">👤</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Mon profil</span>
    </div>
    <div style="height:1px;background:#E2ECF2;margin:6px 20px;"></div>
    <div onclick="goToScreen(54);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;margin-bottom:16px;" onmouseover="this.style.background='#FEF0EE'" onmouseout="this.style.background=''">
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
    <div onclick="goToScreen(64);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;background:#E8F7EE;">
      <span style="font-size:18px;width:26px;text-align:center;">📊</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#0D3B2E;">Dashboard</span>
    </div>
    <div onclick="goToScreen(65);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">📝</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Nouvelle ordonnance</span>
    </div>
    <div onclick="goToScreen(66);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">📋</span>
      <div style="flex:1;"><div style="font-size:14px;font-weight:600;color:#1A2332;">Suivi ordonnances</div><div style="font-size:11px;color:#F39C12;font-weight:600;">3 en attente</div></div>
    </div>
    <div onclick="goToScreen(67);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">👥</span>
      <div style="flex:1;"><div style="font-size:14px;font-weight:600;color:#1A2332;">Dossiers patients</div><div style="font-size:11px;color:#27AE60;font-weight:600;">12 actifs</div></div>
    </div>
    <div onclick="goToScreen(68);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">💬</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Messagerie sécurisée</span>
    </div>
    <div onclick="goToScreen(69);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">🏥</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Pharmacies & Stock</span>
    </div>
    <div style="height:1px;background:#E2ECF2;margin:6px 20px;"></div>
    <div style="padding:5px 20px;font-size:10px;font-weight:700;color:#A8B4C0;letter-spacing:0.8px;text-transform:uppercase;">Mon compte</div>
    <div onclick="goToScreen(70);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">📈</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Mes statistiques</span>
    </div>
    <div onclick="goToScreen(71);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;" onmouseover="this.style.background='#F4F9FC'" onmouseout="this.style.background=''">
      <span style="font-size:18px;width:26px;text-align:center;">👤</span>
      <span style="font-size:14px;font-weight:600;color:#1A2332;">Mon profil</span>
    </div>
    <div style="height:1px;background:#E2ECF2;margin:6px 20px;"></div>
    <div onclick="goToScreen(62);closeDrawer();" style="display:flex;align-items:center;gap:14px;padding:13px 20px;cursor:pointer;margin-bottom:16px;" onmouseover="this.style.background='#FEF0EE'" onmouseout="this.style.background=''">
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
<div class="screen" id="screen73" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:linear-gradient(135deg,#1A6B8A,#0F3F54);padding:54px 20px 20px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
      <button onclick="goToScreen(10)" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
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


<!-- ========================================
     SCREEN 71 — MODE HORS-LIGNE (FIG.2)
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
      <!-- Signal bars -->
      <div style="display:flex;align-items:flex-end;gap:4px;margin-bottom:12px;height:40px;">
        <div style="width:14px;height:12px;background:#F39C12;border-radius:3px;"></div>
        <div style="width:14px;height:18px;background:#F39C12;border-radius:3px;"></div>
        <div style="width:14px;height:26px;background:#E2ECF2;border-radius:3px;"></div>
        <div style="width:14px;height:34px;background:#E2ECF2;border-radius:3px;"></div>
        <div style="width:14px;height:40px;background:#E2ECF2;border-radius:3px;"></div>
        <div style="margin-left:10px;font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:#F39C12;line-height:1;">Faible<br><span style="font-size:10px;color:#6B7A8D;font-weight:500;">2G · IR=0.31</span></div>
      </div>
      <!-- IR Score -->
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
      <!-- Transaction items -->
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:center;gap:10px;padding:10px;background:#F4F9FC;border-radius:10px;">
          <div style="width:32px;height:32px;background:#E74C3C;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">🚨</div>
          <div style="flex:1;"><div style="font-size:12px;font-weight:700;color:#1A2332;">Ordonnance #ORD-2851</div><div style="font-size:10px;color:#6B7A8D;">Critique · En attente depuis 2 min</div></div>
          <div style="background:#FEF0EE;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;color:#E74C3C;">CRITIQUE</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding:10px;background:#F4F9FC;border-radius:10px;">
          <div style="width:32px;height:32px;background:#F39C12;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">💊</div>
          <div style="flex:1;"><div style="font-size:12px;font-weight:700;color:#1A2332;">Commande médicaments</div><div style="font-size:10px;color:#6B7A8D;">Standard · 5 min</div></div>
          <div style="background:#FEF9EE;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;color:#F39C12;">ATTENTE</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding:10px;background:#F4F9FC;border-radius:10px;">
          <div style="width:32px;height:32px;background:#F39C12;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">📋</div>
          <div style="flex:1;"><div style="font-size:12px;font-weight:700;color:#1A2332;">Mise à jour dossier patient</div><div style="font-size:10px;color:#6B7A8D;">Standard · 8 min</div></div>
          <div style="background:#FEF9EE;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;color:#F39C12;">ATTENTE</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding:10px;background:#E8F7EE;border-radius:10px;">
          <div style="width:32px;height:32px;background:#27AE60;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">✅</div>
          <div style="flex:1;"><div style="font-size:12px;font-weight:700;color:#1A2332;">Consultation #CON-0142</div><div style="font-size:10px;color:#27AE60;">Synchronisé avec succès</div></div>
          <div style="background:#E8F7EE;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;color:#27AE60;">SYNC ✓</div>
        </div>
      </div>
    </div>

    <!-- Classification transactions (FIG.2) -->
    <div style="background:linear-gradient(135deg,#0F3F54,#1A6B8A);border-radius:16px;padding:18px;">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:800;color:#fff;margin-bottom:12px;">⚡ Classification des Transactions</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        <div style="background:rgba(231,76,60,0.2);border-radius:10px;padding:10px;text-align:center;">
          <div style="font-size:20px;font-weight:800;color:#E74C3C;">3</div>
          <div style="font-size:10px;color:rgba(255,255,255,0.7);margin-top:2px;">Critique (priorité 1)</div>
        </div>
        <div style="background:rgba(243,156,18,0.2);border-radius:10px;padding:10px;text-align:center;">
          <div style="font-size:20px;font-weight:800;color:#F39C12;">8</div>
          <div style="font-size:10px;color:rgba(255,255,255,0.7);margin-top:2px;">Standard (priorité 2)</div>
        </div>
      </div>
      <div style="margin-top:10px;background:rgba(255,255,255,0.1);border-radius:8px;padding:10px;">
        <div style="font-size:11px;color:rgba(255,255,255,0.8);">🔄 Synchronisation auto dans <span style="font-weight:700;color:#F39C12;">2 min 34 sec</span> dès que réseau &gt; 0.4</div>
      </div>
    </div>

    <button onclick="showToast('🔄 Synchronisation forcée lancée…');goToScreen(10)" style="width:100%;padding:15px;background:linear-gradient(135deg,#F39C12,#E67E22);color:#fff;border:none;border-radius:14px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">🔄 Forcer la Synchronisation</button>
  </div>
</div>

<!-- ========================================
     SCREEN 83 — ALERTES IR ÉPIDÉMIQUES (FIG.4)
======================================== -->
<div class="screen" id="screen83" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:linear-gradient(135deg,#E74C3C,#c0392b);padding:54px 20px 20px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
      <button onclick="goToScreen(10)" style="background:rgba(255,255,255,0.2);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Alertes Épidémiques</div>
    </div>
    <div style="background:rgba(255,255,255,0.2);border-radius:12px;padding:10px 14px;display:flex;align-items:center;gap:10px;">
      <div style="width:10px;height:10px;background:#fff;border-radius:50%;animation:blink 1s infinite;"></div>
      <span style="font-size:12px;font-weight:700;color:#fff;">Algorithme Prédictif IR actif — Virus Émergent détecté</span>
    </div>
  </div>

  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:14px;">

    <!-- Score IR Épidémique -->
    <div style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:800;color:#1A2332;margin-bottom:14px;">🧮 Calcul IR — Algorithme Prédictif (FIG.4)</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;">
        <div style="background:#FEF0EE;border-radius:12px;padding:12px;text-align:center;">
          <div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">Criticité C_N</div>
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;font-weight:800;color:#E74C3C;">0.87</div>
          <div style="font-size:10px;color:#E74C3C;font-weight:600;">&#62; Seuil 0.6 ⚠️</div>
        </div>
        <div style="background:#FEF9EE;border-radius:12px;padding:12px;text-align:center;">
          <div style="font-size:11px;color:#6B7A8D;margin-bottom:4px;">Vitesse Sortie V_r</div>
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;font-weight:800;color:#F39C12;">+340%</div>
          <div style="font-size:10px;color:#F39C12;font-weight:600;">&#62; Limite +50%</div>
        </div>
      </div>
      <!-- Paramètres IR -->
      <div style="background:#F4F9FC;border-radius:10px;padding:10px;display:flex;flex-wrap:wrap;gap:6px;">
        <span style="background:#E8F4F8;color:#1A6B8A;font-size:10px;font-weight:700;padding:3px 8px;border-radius:6px;">V=0.91</span>
        <span style="background:#E8F4F8;color:#1A6B8A;font-size:10px;font-weight:700;padding:3px 8px;border-radius:6px;">R=0.78</span>
        <span style="background:#E8F4F8;color:#1A6B8A;font-size:10px;font-weight:700;padding:3px 8px;border-radius:6px;">C=0.87</span>
        <span style="background:#E8F4F8;color:#1A6B8A;font-size:10px;font-weight:700;padding:3px 8px;border-radius:6px;">β×αN=1.34</span>
        <span style="background:#E8F4F8;color:#1A6B8A;font-size:10px;font-weight:700;padding:3px 8px;border-radius:6px;">QN=0.82</span>
      </div>
    </div>

    <!-- Virus émergent -->
    <div style="background:linear-gradient(135deg,#E74C3C,#c0392b);border-radius:16px;padding:18px;">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:800;color:#fff;margin-bottom:12px;">🦠 Virus Émergent Détecté</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="background:rgba(255,255,255,0.15);border-radius:10px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-size:13px;font-weight:700;color:#fff;">Fièvre Lassa — Zone Nord</div>
            <div style="font-size:11px;color:rgba(255,255,255,0.75);margin-top:2px;">47 cas confirmés · +340% cette semaine</div>
          </div>
          <div style="background:#fff;border-radius:8px;padding:4px 10px;font-size:10px;font-weight:700;color:#E74C3C;">URGENT</div>
        </div>
        <div style="background:rgba(255,255,255,0.1);border-radius:10px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-size:13px;font-weight:700;color:#fff;">Paludisme résistant — Abidjan</div>
            <div style="font-size:11px;color:rgba(255,255,255,0.75);margin-top:2px;">Souche chloroquino-résistante</div>
          </div>
          <div style="background:rgba(255,255,255,0.3);border-radius:8px;padding:4px 10px;font-size:10px;font-weight:700;color:#fff;">SUIVI</div>
        </div>
      </div>
    </div>

    <!-- Pré-avertissement -->
    <div style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:800;color:#1A2332;margin-bottom:12px;">🔔 Pré-Avertissement Automatique</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;gap:10px;padding:10px;background:#FEF0EE;border-radius:10px;">
          <span style="font-size:18px;">🏥</span>
          <div><div style="font-size:12px;font-weight:700;color:#E74C3C;">CHU Cocody alerté</div><div style="font-size:11px;color:#6B7A8D;">Stocks antiviraux vérifiés · il y a 3 min</div></div>
        </div>
        <div style="display:flex;gap:10px;padding:10px;background:#FEF0EE;border-radius:10px;">
          <span style="font-size:18px;">💊</span>
          <div><div style="font-size:12px;font-weight:700;color:#E74C3C;">12 pharmacies notifiées</div><div style="font-size:11px;color:#6B7A8D;">Zone rayon 10 km · Réapprovisionnement</div></div>
        </div>
        <div style="display:flex;gap:10px;padding:10px;background:#FEF9EE;border-radius:10px;">
          <span style="font-size:18px;">📱</span>
          <div><div style="font-size:12px;font-weight:700;color:#F39C12;">8 247 patients informés</div><div style="font-size:11px;color:#6B7A8D;">Notification push envoyée · Conseils préventifs</div></div>
        </div>
      </div>
    </div>

    <button onclick="goToScreen(76);showToast('📊 Rapport prévisionnel généré')" style="width:100%;padding:15px;background:linear-gradient(135deg,#E74C3C,#c0392b);color:#fff;border:none;border-radius:14px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">📊 Voir le Rapport Prévisionnel →</button>
  </div>
</div>

<!-- ========================================
     SCREEN 73 — RAPPORT PRÉVISIONNEL (FIG.4)
======================================== -->
<div class="screen" id="screen76" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:linear-gradient(135deg,#0D3B2E,#27AE60);padding:54px 20px 20px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
      <button onclick="goToScreen(83)" style="background:rgba(255,255,255,0.2);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Rapport Prévisionnel</div>
    </div>
    <div style="font-size:12px;color:rgba(255,255,255,0.8);">Généré le 10/04/2026 · Algorithme IR v2.4</div>
  </div>

  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:14px;">

    <!-- KPIs -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
      <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);text-align:center;">
        <div style="font-size:10px;color:#6B7A8D;text-transform:uppercase;font-weight:600;margin-bottom:4px;">Cas prévus J+7</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;color:#E74C3C;">+127</div>
        <div style="font-size:10px;color:#E74C3C;">Zone Nord Abidjan</div>
      </div>
      <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);text-align:center;">
        <div style="font-size:10px;color:#6B7A8D;text-transform:uppercase;font-weight:600;margin-bottom:4px;">Stocks critiques</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;color:#F39C12;">8</div>
        <div style="font-size:10px;color:#F39C12;">Médicaments à risque</div>
      </div>
      <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);text-align:center;">
        <div style="font-size:10px;color:#6B7A8D;text-transform:uppercase;font-weight:600;margin-bottom:4px;">IR Moyen Zone</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;color:#1A6B8A;">0.73</div>
        <div style="font-size:10px;color:#27AE60;">Réseau stable ✓</div>
      </div>
      <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);text-align:center;">
        <div style="font-size:10px;color:#6B7A8D;text-transform:uppercase;font-weight:600;margin-bottom:4px;">Taux couverture</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;color:#27AE60;">83%</div>
        <div style="font-size:10px;color:#27AE60;">Patients informés</div>
      </div>
    </div>

    <!-- Courbe prévisionnelle simplifiée -->
    <div style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:800;color:#1A2332;margin-bottom:14px;">📈 Projection 7 jours — Fièvre Lassa</div>
      <div style="display:flex;align-items:flex-end;gap:5px;height:70px;margin-bottom:8px;">
        <div style="flex:1;background:#E8F4F8;border-radius:4px 4px 0 0;" style="height:30%;"></div>
        <div style="flex:1;height:40%;background:#E8F4F8;border-radius:4px 4px 0 0;"></div>
        <div style="flex:1;height:55%;background:#FEF9EE;border-radius:4px 4px 0 0;"></div>
        <div style="flex:1;height:65%;background:#FEF9EE;border-radius:4px 4px 0 0;"></div>
        <div style="flex:1;height:78%;background:#FEF0EE;border-radius:4px 4px 0 0;"></div>
        <div style="flex:1;height:90%;background:#FEF0EE;border-radius:4px 4px 0 0;"></div>
        <div style="flex:1;height:100%;background:#E74C3C;border-radius:4px 4px 0 0;opacity:0.7;"></div>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:9px;color:#6B7A8D;">
        <span>J+1</span><span>J+2</span><span>J+3</span><span>J+4</span><span>J+5</span><span>J+6</span><span>J+7</span>
      </div>
      <div style="margin-top:10px;background:#FEF0EE;border-radius:8px;padding:8px 12px;font-size:11px;color:#E74C3C;font-weight:600;">⚠️ Pic prévu J+7 · Intervention recommandée dès J+3</div>
    </div>

    <!-- Recommandations -->
    <div style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:800;color:#1A2332;margin-bottom:12px;">✅ Recommandations Automatiques</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;gap:10px;align-items:flex-start;padding:8px;background:#E8F7EE;border-radius:10px;">
          <span style="color:#27AE60;font-weight:800;font-size:16px;">1</span>
          <div style="font-size:12px;color:#1A2332;">Réapprovisionner <strong>ribavirine 200mg</strong> dans les 48h (stock J+4 insuffisant)</div>
        </div>
        <div style="display:flex;gap:10px;align-items:flex-start;padding:8px;background:#E8F7EE;border-radius:10px;">
          <span style="color:#27AE60;font-weight:800;font-size:16px;">2</span>
          <div style="font-size:12px;color:#1A2332;">Activer le protocole isolement dans 3 cliniques de la zone Nord</div>
        </div>
        <div style="display:flex;gap:10px;align-items:flex-start;padding:8px;background:#E8F7EE;border-radius:10px;">
          <span style="color:#27AE60;font-weight:800;font-size:16px;">3</span>
          <div style="font-size:12px;color:#1A2332;">Notifier le Ministère de la Santé — Seuil épidémique à 72h</div>
        </div>
      </div>
    </div>

    <button onclick="showToast('📤 Rapport envoyé au Ministère ✓')" style="width:100%;padding:15px;background:linear-gradient(135deg,#0D3B2E,#27AE60);color:#fff;border:none;border-radius:14px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">📤 Envoyer au Ministère de la Santé</button>
  </div>
</div>

<!-- ========================================
     SCREEN 74 — CHAÎNAGE BLOCKCHAIN (FIG.3)
======================================== -->
<div class="screen" id="screen77" data-device="mobile" style="background:#F4F9FC;">
  <div style="background:linear-gradient(135deg,#1A2332,#0F3F54);padding:54px 20px 20px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
      <button onclick="goToScreen(10)" style="background:rgba(255,255,255,0.2);border:none;border-radius:50%;width:34px;height:34px;color:#fff;font-size:16px;cursor:pointer;">←</button>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:#fff;">Chaîne Cryptographique</div>
    </div>
    <div style="background:rgba(39,174,96,0.2);border-radius:12px;padding:10px 14px;display:flex;align-items:center;gap:10px;border:1px solid rgba(39,174,96,0.4);">
      <div style="width:10px;height:10px;background:#27AE60;border-radius:50%;"></div>
      <span style="font-size:12px;font-weight:700;color:#27AE60;">Blockchain opérationnelle · 3 blocs validés</span>
    </div>
  </div>

  <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;">

    <!-- Info FIG.3 -->
    <div style="background:linear-gradient(135deg,#1A2332,#0F3F54);border-radius:14px;padding:14px;">
      <div style="font-size:11px;color:rgba(255,255,255,0.6);margin-bottom:4px;">FIG.3 — Mécanisme de Chaînage</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.85);line-height:1.6;">Chaque ordonnance est hashée et liée au bloc précédent. La qualité réseau (IR) détermine le mode de synchronisation.</div>
    </div>

    <!-- Bloc 1 -->
    <div style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
      <div style="background:linear-gradient(135deg,#27AE60,#2ecc71);padding:10px 16px;display:flex;justify-content:space-between;align-items:center;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:800;color:#fff;">🧱 Bloc #001 — GENESIS</div>
        <div style="background:rgba(255,255,255,0.25);border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;color:#fff;">VALIDÉ ✓</div>
      </div>
      <div style="padding:14px;font-family:'DM Mono',monospace;">
        <div style="margin-bottom:8px;">
          <div style="font-size:10px;color:#6B7A8D;font-weight:600;margin-bottom:2px;">TIMESTAMP</div>
          <div style="font-size:11px;color:#1A2332;background:#F4F9FC;padding:4px 8px;border-radius:6px;">2026-04-10T06:00:00Z</div>
        </div>
        <div style="margin-bottom:8px;">
          <div style="font-size:10px;color:#6B7A8D;font-weight:600;margin-bottom:2px;">DATA</div>
          <div style="font-size:11px;color:#1A2332;background:#F4F9FC;padding:4px 8px;border-radius:6px;">ORD-2849 · Amoxicilline 500mg</div>
        </div>
        <div>
          <div style="font-size:10px;color:#6B7A8D;font-weight:600;margin-bottom:2px;">HASH</div>
          <div style="font-size:10px;color:#27AE60;background:#E8F7EE;padding:4px 8px;border-radius:6px;word-break:break-all;font-family:monospace;">0x3f7a2b...c891d4</div>
        </div>
      </div>
    </div>

    <!-- Lien -->
    <div style="display:flex;align-items:center;justify-content:center;gap:8px;">
      <div style="width:2px;height:20px;background:linear-gradient(to bottom,#27AE60,#1A6B8A);border-radius:1px;"></div>
      <div style="font-size:10px;color:#6B7A8D;font-weight:600;">HASH PRÉCÉDENT →</div>
      <div style="width:2px;height:20px;background:linear-gradient(to bottom,#27AE60,#1A6B8A);border-radius:1px;"></div>
    </div>

    <!-- Bloc 2 -->
    <div style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
      <div style="background:linear-gradient(135deg,#1A6B8A,#2196B3);padding:10px 16px;display:flex;justify-content:space-between;align-items:center;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:800;color:#fff;">🧱 Bloc #002</div>
        <div style="background:rgba(255,255,255,0.25);border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;color:#fff;">VALIDÉ ✓</div>
      </div>
      <div style="padding:14px;">
        <div style="margin-bottom:8px;">
          <div style="font-size:10px;color:#6B7A8D;font-weight:600;margin-bottom:2px;">TIMESTAMP</div>
          <div style="font-size:11px;color:#1A2332;background:#F4F9FC;padding:4px 8px;border-radius:6px;">2026-04-10T08:32:17Z</div>
        </div>
        <div style="margin-bottom:8px;">
          <div style="font-size:10px;color:#6B7A8D;font-weight:600;margin-bottom:2px;">DATA</div>
          <div style="font-size:11px;color:#1A2332;background:#F4F9FC;padding:4px 8px;border-radius:6px;">ORD-2850 · Ibuprofène 400mg</div>
        </div>
        <div style="margin-bottom:8px;">
          <div style="font-size:10px;color:#6B7A8D;font-weight:600;margin-bottom:2px;">HASH PREV (ref. Bloc#001)</div>
          <div style="font-size:10px;color:#1A6B8A;background:#E8F4F8;padding:4px 8px;border-radius:6px;font-family:monospace;">0x3f7a2b...c891d4</div>
        </div>
        <div>
          <div style="font-size:10px;color:#6B7A8D;font-weight:600;margin-bottom:2px;">HASH</div>
          <div style="font-size:10px;color:#27AE60;background:#E8F7EE;padding:4px 8px;border-radius:6px;font-family:monospace;">0x9d4e1f...a2c780</div>
        </div>
      </div>
    </div>

    <!-- Lien -->
    <div style="display:flex;align-items:center;justify-content:center;gap:8px;">
      <div style="width:2px;height:20px;background:linear-gradient(to bottom,#1A6B8A,#F39C12);border-radius:1px;"></div>
      <div style="font-size:10px;color:#6B7A8D;font-weight:600;">HASH PRÉCÉDENT →</div>
      <div style="width:2px;height:20px;background:linear-gradient(to bottom,#1A6B8A,#F39C12);border-radius:1px;"></div>
    </div>

    <!-- Bloc 3 — En cours -->
    <div style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);border:2px dashed #F39C12;">
      <div style="background:linear-gradient(135deg,#F39C12,#E67E22);padding:10px 16px;display:flex;justify-content:space-between;align-items:center;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:800;color:#fff;">🧱 Bloc #003 — EN COURS</div>
        <div style="background:rgba(255,255,255,0.25);border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;color:#fff;animation:blink 1s infinite;">⏳ SYNC…</div>
      </div>
      <div style="padding:14px;">
        <div style="margin-bottom:8px;">
          <div style="font-size:10px;color:#6B7A8D;font-weight:600;margin-bottom:2px;">DATA EN ATTENTE</div>
          <div style="font-size:11px;color:#F39C12;background:#FEF9EE;padding:4px 8px;border-radius:6px;">ORD-2851 · Réseau faible — Sync différée</div>
        </div>
        <div style="background:#FEF9EE;border-radius:8px;padding:8px 12px;font-size:11px;color:#E67E22;">⚠️ En attente d'un réseau IR &gt; 0.4 pour finalisation du hash</div>
      </div>
    </div>

    <!-- Cryptographe certifié -->
    <div style="background:linear-gradient(135deg,#0D3B2E,#27AE60);border-radius:14px;padding:14px;display:flex;align-items:center;gap:14px;">
      <div style="width:44px;height:44px;background:rgba(255,255,255,0.2);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;">🔐</div>
      <div>
        <div style="font-size:12px;font-weight:700;color:#fff;">Cryptographe Baladé Pro™</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.75);margin-top:2px;">RSA-2048 · SHA-256 · Certifié ANSSI-CI</div>
        <div style="font-size:10px;color:#A8FFD0;margin-top:2px;">Chaîne intègre · 0 altération détectée</div>
      </div>
    </div>

    <button onclick="showToast('🔍 Vérification de la chaîne… Intégrité 100% ✓')" style="width:100%;padding:15px;background:linear-gradient(135deg,#1A2332,#0F3F54);color:#fff;border:none;border-radius:14px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">🔍 Vérifier l'Intégrité de la Chaîne</button>
  </div>
</div>

    <!-- Floating Ask AI Button -->
    <div onclick="goToScreen(72)" style="position:absolute;bottom:80px;right:20px;background:linear-gradient(135deg,var(--primary),#2196B3);color:#fff;border-radius:50px;padding:12px 20px;display:flex;align-items:center;gap:8px;box-shadow:0 8px 24px rgba(26,107,138,0.4);cursor:pointer;z-index:900;transition:transform 0.2s;" onmousedown="this.style.transform='scale(0.95)'" onmouseup="this.style.transform='scale(1)'">
      <span style="font-size:20px;">🪄</span>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:800;">Ask AI</span>
    </div>

<!-- ============================================================
     ESPACE PHARMACIEN INDIVIDUEL
     screen84 = Login pharmacien
     screen85 = Dashboard pharmacien
     screen86 = Mes ordonnances
     screen87 = Détail ordonnance
     screen88 = Mon profil pharmacien
============================================================ -->

<!-- ========================================
     SCREEN 84 — LOGIN PHARMACIEN INDIVIDUEL
======================================== -->
      <div class="web-screen active" id="wscreen1">
        <div style="height:100vh;display:flex;flex-direction:column;background:#F4F9FC;overflow-y:auto;">
          <!-- Navbar -->
          <nav style="display:flex;justify-content:space-between;align-items:center;padding:24px 60px;background:#fff;border-bottom:1.5px solid #E2ECF2;position:sticky;top:0;z-index:100;">
            <div style="display:flex;align-items:center;gap:12px;">
              <div style="width:40px;height:40px;background:linear-gradient(135deg,#1A6B8A,#2196B3);border-radius:12px;display:flex;align-items:center;justify-content:center;">
                <svg width="24" height="24" viewBox="0 0 52 52" fill="none"><path d="M26 4C18 4 10 8 8 15C7 22 10 26 14 30C18 34 24 42 26 48C28 42 34 34 38 30C42 26 45 22 44 15C42 8 34 4 26 4Z" fill="white" opacity="0.9"/><rect x="23" y="14" width="6" height="16" rx="3" fill="#1A6B8A"/><rect x="18" y="19" width="16" height="6" rx="3" fill="#1A6B8A"/></svg>
              </div>
              <span class="brand-cool" style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;">ILERA AFRICA</span>
            </div>
            <div style="display:flex;align-items:center;gap:32px;">
              <a onclick="showToast('Téléchargez notre application mobile pour accéder.')" style="font-size:15px;font-weight:600;color:#1A2332;cursor:pointer;text-decoration:none;">Espace Patient</a>
              <button onclick="goToWebScreen('_enrollement')" style="padding:12px 24px;background:#E8F7EE;color:#27AE60;border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;">Devenir Partenaire</button>
            </div>
          </nav>
          
          <!-- Hero Section -->
          <div style="flex:1;display:flex;align-items:center;padding:60px 80px;background:linear-gradient(160deg,#F4F9FC 0%,#E0F0F7 100%);position:relative;overflow:hidden;">
            <!-- Background Decorations -->
            <div style="position:absolute;width:600px;height:600px;top:-150px;right:-100px;border-radius:50%;background:radial-gradient(circle,rgba(26,107,138,0.07) 0%,transparent 70%);"></div>
            <div style="position:absolute;width:400px;height:400px;bottom:-100px;left:-80px;border-radius:50%;background:radial-gradient(circle,rgba(39,174,96,0.06) 0%,transparent 70%);"></div>
            
            <div style="max-width:600px;position:relative;z-index:2;">
              <div style="display:inline-flex;align-items:center;gap:8px;background:#E8F7EE;border:1.5px solid rgba(39,174,96,0.3);border-radius:50px;padding:8px 20px;margin-bottom:24px;">
                <div style="width:8px;height:8px;background:#27AE60;border-radius:50%;animation:blink 1.5s ease-in-out infinite;"></div>
                <span style="font-size:12px;font-weight:700;color:#27AE60;letter-spacing:0.8px;">PLATEFORME SANTÉ N°1 EN CÔTE D'IVOIRE</span>
              </div>
              <h1 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:54px;font-weight:800;color:#1A2332;line-height:1.15;margin-bottom:24px;">La Santé à portée de main, <br> <span style="color:#1A6B8A;">Où que vous soyez.</span></h1>
              <p style="font-size:18px;color:#6B7A8D;line-height:1.6;margin-bottom:40px;">Découvrez notre écosystème révolutionnaire connectant cliniques, pharmacies et patients. Commandez vos ordonnances et recevez-les en moins de 2 heures grâce à notre réseau sécurisé.</p>
              
              <div style="display:flex;gap:16px;">
                <!-- App Store Button -->
                <button onclick="setDevice('mobile'); goToScreen(8);" style="display:flex;align-items:center;gap:12px;padding:12px 24px;background:#1A2332;color:#fff;border:none;border-radius:14px;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,0.15);">
                  <div style="font-size:24px;">🍏</div>
                  <div style="text-align:left;">
                    <div style="font-size:10px;color:rgba(255,255,255,0.7);margin-bottom:2px;">Télécharger dans l'</div>
                    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;">App Store</div>
                  </div>
                </button>
                <!-- Play Store Button -->
                <button onclick="setDevice('mobile'); goToScreen(8);" style="display:flex;align-items:center;gap:12px;padding:12px 24px;background:#1A2332;color:#fff;border:none;border-radius:14px;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,0.15);">
                  <div style="font-size:24px;">▶️</div>
                  <div style="text-align:left;">
                    <div style="font-size:10px;color:rgba(255,255,255,0.7);margin-bottom:2px;">DISPONIBLE SUR</div>
                    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            
            <!-- Hero Image / Visual -->
            <div style="flex:1;display:flex;justify-content:center;position:relative;z-index:2;">
              <div style="width:360px;height:680px;background:#fff;border-radius:40px;border:12px solid #1A2332;box-shadow:0 30px 80px rgba(26,107,138,0.25);overflow:hidden;position:relative;display:flex;flex-direction:column;">
                <div style="width:140px;height:24px;background:#1A2332;position:absolute;top:0;left:50%;transform:translateX(-50%);border-radius:0 0 16px 16px;"></div>
                <div style="background:#1A6B8A;padding:40px 20px 20px;text-align:center;color:#fff;font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;font-weight:800;">ILERA AFRICA</div>
                <div style="padding:20px;display:flex;flex-direction:column;gap:12px;flex:1;background:#F4F9FC;">
                  <div style="background:#fff;padding:16px;border-radius:16px;box-shadow:0 4px 12px rgba(0,0,0,0.05);display:flex;align-items:center;gap:12px;">
                    <div style="font-size:24px;">🩺</div>
                    <div><div style="font-size:14px;font-weight:700;color:#1A2332;">Consultation en ligne</div><div style="font-size:12px;color:#6B7A8D;">24/7 avec nos pharmaciens</div></div>
                  </div>
                  <div style="background:#fff;padding:16px;border-radius:16px;box-shadow:0 4px 12px rgba(0,0,0,0.05);display:flex;align-items:center;gap:12px;">
                    <div style="font-size:24px;">📦</div>
                    <div><div style="font-size:14px;font-weight:700;color:#1A2332;">Livraison express</div><div style="font-size:12px;color:#6B7A8D;">En moins de 2 heures</div></div>
                  </div>
                  <div style="background:#fff;padding:16px;border-radius:16px;box-shadow:0 4px 12px rgba(0,0,0,0.05);display:flex;align-items:center;gap:12px;">
                    <div style="font-size:24px;">🔒</div>
                    <div><div style="font-size:14px;font-weight:700;color:#1A2332;">Sécurité garantie</div><div style="font-size:12px;color:#6B7A8D;">Données HDS chiffrées</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- WEB SCREEN: ENROLLMENT FORM -->
      <div class="web-screen" id="wscreen_enrollement">
        <div style="height:100vh;display:flex;flex-direction:column;background:#F4F9FC;overflow-y:auto;">
          <!-- Navbar -->
          <nav style="display:flex;justify-content:space-between;align-items:center;padding:24px 60px;background:#fff;border-bottom:1.5px solid #E2ECF2;position:sticky;top:0;z-index:100;">
            <div style="display:flex;align-items:center;gap:12px;cursor:pointer;" onclick="goToWebScreen(1)">
              <div style="width:40px;height:40px;background:linear-gradient(135deg,#1A6B8A,#2196B3);border-radius:12px;display:flex;align-items:center;justify-content:center;">
                <svg width="24" height="24" viewBox="0 0 52 52" fill="none"><path d="M26 4C18 4 10 8 8 15C7 22 10 26 14 30C18 34 24 42 26 48C28 42 34 34 38 30C42 26 45 22 44 15C42 8 34 4 26 4Z" fill="white" opacity="0.9"/><rect x="23" y="14" width="6" height="16" rx="3" fill="#1A6B8A"/><rect x="18" y="19" width="16" height="6" rx="3" fill="#1A6B8A"/></svg>
              </div>
              <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#1A2332;letter-spacing:-0.5px;">ILERA AFRICA</span>
            </div>
            <button onclick="goToWebScreen(1)" style="padding:10px 20px;background:transparent;color:#6B7A8D;border:1.5px solid #E2ECF2;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">Annuler</button>
          </nav>
          
          <div style="flex:1;padding:60px 20px;display:flex;justify-content:center;">
            <div style="max-width:560px;width:100%;background:#fff;border-radius:24px;box-shadow:0 12px 40px rgba(0,0,0,0.06);padding:40px;height:fit-content;">
              <h2 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:32px;font-weight:800;color:#1A2332;margin-bottom:8px;text-align:center;">Devenir Partenaire</h2>
              <p style="font-size:15px;color:#6B7A8D;text-align:center;margin-bottom:32px;">Rejoignez notre réseau en tant que Pharmacien ou Livreur. Soumettez votre dossier pour approbation.</p>
              
              <div style="display:flex;flex-direction:column;gap:20px;">
                <div>
                  <label style="font-size:12px;font-weight:700;color:#6B7A8D;letter-spacing:0.5px;text-transform:uppercase;margin-bottom:8px;display:block;">Profil souhaité</label>
                  <select style="width:100%;padding:14px 16px;background:#F4F9FC;border:1.5px solid #E2ECF2;border-radius:12px;font-size:15px;font-family:'DM Sans',sans-serif;color:#1A2332;outline:none;">
                    <option>Pharmacien</option>
                    <option>Livreur Indépendant</option>
                  </select>
                </div>
                <div>
                  <label style="font-size:12px;font-weight:700;color:#6B7A8D;letter-spacing:0.5px;text-transform:uppercase;margin-bottom:8px;display:block;">Nom Complet / Raison Sociale</label>
                  <input type="text" placeholder="Ex: Dr. Koné Moussa" style="width:100%;padding:14px 16px;background:#F4F9FC;border:1.5px solid #E2ECF2;border-radius:12px;font-size:15px;font-family:'DM Sans',sans-serif;color:#1A2332;outline:none;box-sizing:border-box;">
                </div>
                <div>
                  <label style="font-size:12px;font-weight:700;color:#6B7A8D;letter-spacing:0.5px;text-transform:uppercase;margin-bottom:8px;display:block;">Localisation GPS de l'officine/résidence</label>
                  <div style="display:flex;gap:10px;">
                    <input type="text" placeholder="Latitude, Longitude" style="flex:1;padding:14px 16px;background:#F4F9FC;border:1.5px solid #E2ECF2;border-radius:12px;font-size:15px;font-family:'DM Sans',sans-serif;color:#1A2332;outline:none;box-sizing:border-box;">
                    <button onclick="showToast('Localisation récupérée ✓')" style="padding:0 20px;background:#1A6B8A;color:#fff;border:none;border-radius:12px;cursor:pointer;">📍</button>
                  </div>
                </div>
                <div style="border-top:1.5px dashed #E2ECF2;margin:10px 0;"></div>
                
                <!-- Documents Uploads -->
                <div>
                  <label style="font-size:12px;font-weight:700;color:#6B7A8D;letter-spacing:0.5px;text-transform:uppercase;margin-bottom:8px;display:block;">1. Diplôme / Attestation professionnelle</label>
                  <div style="border:2px dashed #1A6B8A;background:#E8F4F8;border-radius:12px;padding:24px;text-align:center;cursor:pointer;" onclick="showToast('Sélecteur de fichier ouvert...')">
                    <span style="font-size:24px;margin-bottom:8px;display:block;">📄</span>
                    <div style="font-size:13px;font-weight:700;color:#1A6B8A;">Cliquer pour uploader (PDF, Image)</div>
                  </div>
                </div>
                <div>
                  <label style="font-size:12px;font-weight:700;color:#6B7A8D;letter-spacing:0.5px;text-transform:uppercase;margin-bottom:8px;display:block;">2. Pièce d'identité (CNI/Passeport)</label>
                  <div style="border:2px dashed #1A6B8A;background:#E8F4F8;border-radius:12px;padding:24px;text-align:center;cursor:pointer;" onclick="showToast('Sélecteur de fichier ouvert...')">
                    <span style="font-size:24px;margin-bottom:8px;display:block;">🪪</span>
                    <div style="font-size:13px;font-weight:700;color:#1A6B8A;">Cliquer pour uploader (PDF, Image)</div>
                  </div>
                </div>
                <div>
                  <label style="font-size:12px;font-weight:700;color:#6B7A8D;letter-spacing:0.5px;text-transform:uppercase;margin-bottom:8px;display:block;">3. Licence d'exploitation (Pharmacies)</label>
                  <div style="border:2px dashed #1A6B8A;background:#E8F4F8;border-radius:12px;padding:24px;text-align:center;cursor:pointer;" onclick="showToast('Sélecteur de fichier ouvert...')">
                    <span style="font-size:24px;margin-bottom:8px;display:block;">📜</span>
                    <div style="font-size:13px;font-weight:700;color:#1A6B8A;">Cliquer pour uploader (PDF, Image)</div>
                  </div>
                </div>
              </div>
              
              <button onclick="goToWebScreen('_enrollement_success')" style="width:100%;margin-top:32px;padding:16px;background:linear-gradient(135deg,#27AE60,#2ecc71);color:#fff;border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;cursor:pointer;box-shadow:0 8px 24px rgba(39,174,96,0.35);">Soumettre mon dossier →</button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- WEB SCREEN: ENROLLMENT SUCCESS -->
      <div class="web-screen" id="wscreen_enrollement_success">
        <div style="height:100vh;display:flex;align-items:center;justify-content:center;background:#F4F9FC;">
          <div style="max-width:480px;text-align:center;background:#fff;border-radius:24px;padding:48px;box-shadow:0 12px 40px rgba(0,0,0,0.06);">
            <div style="width:80px;height:80px;background:#E8F7EE;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:40px;color:#27AE60;margin:0 auto 24px;">✅</div>
            <h2 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:800;color:#1A2332;margin-bottom:16px;">Dossier En Cours d'Analyse</h2>
            <p style="font-size:16px;color:#6B7A8D;line-height:1.6;margin-bottom:32px;">Votre dossier est en cours d'analyse par nos équipes. Vous recevrez vos accès et instructions par email dès validation de vos pièces justificatives.</p>
            <button onclick="goToWebScreen(1)" style="padding:14px 32px;background:#1A2332;color:#fff;border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;">Retour à l'accueil</button>
          </div>
        </div>
      </div>

      <!-- WEB SCREEN 2/3/4 — ONBOARDING (carousel) -->
      <div class="web-screen" id="wscreen2">
        <div style="min-height:756px;display:flex;align-items:center;justify-content:center;background:#fff;padding:60px;">
          <div style="max-width:900px;width:100%;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;">
            <div>
              <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A6B8A;letter-spacing:1px;text-transform:uppercase;margin-bottom:16px;">Étape 1 sur 6</div>
              <h1 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:40px;font-weight:800;color:#1A2332;line-height:1.2;margin-bottom:20px;">Téléversez votre<br><span style="color:#1A6B8A;">ordonnance</span></h1>
              <p style="font-size:17px;color:#6B7A8D;line-height:1.7;margin-bottom:40px;">Prenez simplement une photo de votre ordonnance médicale ou importez un fichier PDF. Notre système sécurisé protège vos données médicales.</p>
              <div style="display:flex;gap:8px;margin-bottom:40px;">
                <div style="height:6px;width:40px;border-radius:3px;background:#1A6B8A;"></div>
                <div style="height:6px;width:12px;border-radius:3px;background:rgba(26,107,138,0.2);"></div>
                <div style="height:6px;width:12px;border-radius:3px;background:rgba(26,107,138,0.2);"></div>
                <div style="height:6px;width:12px;border-radius:3px;background:rgba(26,107,138,0.2);"></div>
              </div>
              <div style="display:flex;gap:12px;">
                <button onclick="goToWebScreen(3);goToScreen(3);" style="padding:16px 36px;background:linear-gradient(135deg,#1A6B8A,#2196B3);color:#fff;border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 8px 24px rgba(26,107,138,0.3);">Suivant →</button>
                <button onclick="goToWebScreen(8);goToScreen(8);" style="padding:16px 28px;background:transparent;color:#6B7A8D;border:2px solid #E2ECF2;border-radius:50px;font-size:15px;cursor:pointer;font-family:'DM Sans',sans-serif;">Ignorer</button>
              </div>
            </div>
            <div style="display:flex;justify-content:center;">
              <div style="width:320px;height:320px;border-radius:50%;background:#E8F4F8;display:flex;align-items:center;justify-content:center;">
                <svg width="200" height="200" viewBox="0 0 140 140" fill="none">
                  <rect x="25" y="15" width="90" height="110" rx="12" fill="white" stroke="#1A6B8A" stroke-width="2.5"/>
                  <rect x="35" y="28" width="70" height="80" rx="6" fill="#F4F9FC"/>
                  <rect x="42" y="36" width="45" height="5" rx="2.5" fill="#1A6B8A" opacity="0.5"/>
                  <rect x="42" y="46" width="56" height="4" rx="2" fill="#1A6B8A" opacity="0.25"/>
                  <rect x="42" y="54" width="48" height="4" rx="2" fill="#1A6B8A" opacity="0.25"/>
                  <rect x="42" y="62" width="52" height="4" rx="2" fill="#1A6B8A" opacity="0.25"/>
                  <circle cx="105" cy="100" r="24" fill="#27AE60"/>
                  <rect x="97" y="93" width="16" height="14" rx="4" fill="white"/>
                  <circle cx="105" cy="100" r="5" fill="#27AE60"/>
                  <rect x="100" y="89" width="10" height="4" rx="2" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- WEB SCREEN 3 -->
      <div class="web-screen" id="wscreen3">
        <div style="min-height:756px;display:flex;align-items:center;justify-content:center;background:#fff;padding:60px;">
          <div style="max-width:900px;width:100%;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;">
            <div>
              <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#27AE60;letter-spacing:1px;text-transform:uppercase;margin-bottom:16px;">Étape 2 sur 6</div>
              <h1 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:40px;font-weight:800;color:#1A2332;line-height:1.2;margin-bottom:20px;">Validée par un<br><span style="color:#27AE60;">médecin</span></h1>
              <p style="font-size:17px;color:#6B7A8D;line-height:1.7;margin-bottom:40px;">Chaque ordonnance est vérifiée par un professionnel diplômé. Nos médecins certifiés garantissent votre sécurité thérapeutique.</p>
              <div style="display:flex;gap:8px;margin-bottom:40px;">
                <div style="height:6px;width:12px;border-radius:3px;background:rgba(26,107,138,0.2);"></div>
                <div style="height:6px;width:40px;border-radius:3px;background:#27AE60;"></div>
                <div style="height:6px;width:12px;border-radius:3px;background:rgba(26,107,138,0.2);"></div>
                <div style="height:6px;width:12px;border-radius:3px;background:rgba(26,107,138,0.2);"></div>
              </div>
              <div style="display:flex;gap:12px;">
                <button onclick="goToWebScreen(4);goToScreen(4);" style="padding:16px 36px;background:linear-gradient(135deg,#27AE60,#2ecc71);color:#fff;border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 8px 24px rgba(39,174,96,0.3);">Suivant →</button>
                <button onclick="goToWebScreen(1);goToScreen(2);" style="padding:16px 28px;background:transparent;color:#6B7A8D;border:2px solid #E2ECF2;border-radius:50px;font-size:15px;cursor:pointer;font-family:'DM Sans',sans-serif;">← Retour</button>
              </div>
            </div>
            <div style="display:flex;justify-content:center;">
              <div style="width:320px;height:320px;border-radius:50%;background:#E8F7EE;display:flex;align-items:center;justify-content:center;">
                <svg width="200" height="200" viewBox="0 0 140 140" fill="none">
                  <!-- Doctor context -->
                  <circle cx="70" cy="42" r="22" fill="#1A6B8A" opacity="0.2"/>
                  <circle cx="70" cy="38" r="16" fill="#1A6B8A"/>
                  <circle cx="70" cy="34" r="10" fill="#AED6E8"/>
                  <!-- Coat -->
                  <path d="M45 100 Q45 70 70 70 Q95 70 95 100 L95 115 L45 115 Z" fill="white"/>
                  <!-- Stethoscope -->
                  <path d="M60 75 Q60 85 70 85 Q80 85 80 75" stroke="#6B7A8D" stroke-width="2" fill="none"/>
                  <circle cx="80" cy="72" r="3" fill="#6B7A8D"/>
                  <!-- Cross badge -->
                  <circle cx="100" cy="52" r="20" fill="#27AE60"/>
                  <rect x="95" y="44" width="10" height="16" rx="4" fill="white"/>
                  <rect x="92" y="47" width="16" height="10" rx="4" fill="white"/>
                  <!-- Shield -->
                  <path d="M70 85 L55 90 L55 105 Q55 115 70 120 Q85 115 85 105 L85 90 Z" fill="#E8F7EE" stroke="#27AE60" stroke-width="2"/>
                  <path d="M63 102 L67 106 L77 96" stroke="#27AE60" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- WEB SCREEN 3B (Pharmacien) -->
      <div class="web-screen" id="wscreen4">
        <div style="min-height:756px;display:flex;align-items:center;justify-content:center;background:#fff;padding:60px;">
          <div style="max-width:900px;width:100%;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;">
            <div>
              <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#27AE60;letter-spacing:1px;text-transform:uppercase;margin-bottom:16px;">Étape 3 sur 6</div>
              <h1 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:40px;font-weight:800;color:#1A2332;line-height:1.2;margin-bottom:20px;">Validée par un<br><span style="color:#27AE60;">pharmacien</span></h1>
              <p style="font-size:17px;color:#6B7A8D;line-height:1.7;margin-bottom:40px;">Votre pharmacien prépare vos médicaments et vérifie les interactions pour votre sécurité thérapeutique.</p>
              <div style="display:flex;gap:8px;margin-bottom:40px;">
                <div style="height:6px;width:12px;border-radius:3px;background:rgba(26,107,138,0.2);"></div>
                <div style="height:6px;width:12px;border-radius:3px;background:rgba(26,107,138,0.2);"></div>
                <div style="height:6px;width:40px;border-radius:3px;background:#27AE60;"></div>
                <div style="height:6px;width:12px;border-radius:3px;background:rgba(26,107,138,0.2);"></div>
                <div style="height:6px;width:12px;border-radius:3px;background:rgba(26,107,138,0.2);"></div>
                <div style="height:6px;width:12px;border-radius:3px;background:rgba(26,107,138,0.2);"></div>
              </div>
              <div style="display:flex;gap:12px;">
                <button onclick="goToWebScreen(6);goToScreen(6);" style="padding:16px 36px;background:linear-gradient(135deg,#27AE60,#2ecc71);color:#fff;border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 8px 24px rgba(39,174,96,0.3);">Suivant →</button>
                <button onclick="goToWebScreen(3);goToScreen(3);" style="padding:16px 28px;background:transparent;color:#6B7A8D;border:2px solid #E2ECF2;border-radius:50px;font-size:15px;cursor:pointer;font-family:'DM Sans',sans-serif;">← Retour</button>
              </div>
            </div>
            <div style="display:flex;justify-content:center;">
              <div style="width:320px;height:320px;border-radius:50%;background:#E8F4F8;display:flex;align-items:center;justify-content:center;">
                <svg width="200" height="200" viewBox="0 0 140 140" fill="none">
                  <!-- Pharmacy context -->
                  <rect x="25" y="30" width="90" height="90" rx="8" fill="white" stroke="#1A6B8A" stroke-width="2"/>
                  <rect x="35" y="45" width="70" height="20" rx="4" fill="#F4F9FC"/>
                  <rect x="40" y="52" width="40" height="6" rx="3" fill="#1A6B8A" opacity="0.4"/>
                  <!-- Shelf items -->
                  <rect x="35" y="75" width="15" height="25" rx="3" fill="#2196B3" opacity="0.5"/>
                  <rect x="55" y="75" width="15" height="25" rx="3" fill="#27AE60" opacity="0.5"/>
                  <rect x="75" y="75" width="15" height="25" rx="3" fill="#F39C12" opacity="0.5"/>
                  <!-- Pharmacy Cross -->
                  <circle cx="105" cy="100" r="22" fill="#27AE60"/>
                  <path d="M105 88 V112 M93 100 H117" stroke="white" stroke-width="6" stroke-linecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

      <!-- WEB SCREEN 5 (Préparation) -->
      <div class="web-screen" id="wscreen5">
        <div style="min-height:756px;display:flex;align-items:center;justify-content:center;background:#fff;padding:60px;">
          <div style="max-width:900px;width:100%;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;">
            <div style="display:flex;justify-content:center;order:2;">
              <div style="width:320px;height:320px;border-radius:50%;background:#FFF9E6;display:flex;align-items:center;justify-content:center;">
                <svg width="200" height="200" viewBox="0 0 140 140" fill="none">
                  <path d="M30 50 L110 50 L100 110 L40 110 Z" fill="white" stroke="#F39C12" stroke-width="2"/>
                  <path d="M50 50 Q50 30 70 30 Q90 30 90 50" stroke="#F39C12" stroke-width="2.5" fill="none"/>
                  <rect x="50" y="60" width="12" height="30" rx="3" fill="#27AE60"/>
                  <rect x="65" y="65" width="15" height="25" rx="4" fill="#1A6B8A"/>
                  <rect x="85" y="70" width="10" height="20" rx="2" fill="#F39C12"/>
                  <circle cx="70" cy="110" r="12" fill="#27AE60"/>
                  <path d="M65 110 L68 113 L75 106" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div style="order:1;">
              <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#F39C12;letter-spacing:1px;text-transform:uppercase;margin-bottom:16px;">Étape 4 sur 6</div>
              <h1 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:40px;font-weight:800;color:#1A2332;line-height:1.2;margin-bottom:20px;">Préparation de votre<br><span style="color:#F39C12;">commande</span></h1>
              <p style="font-size:17px;color:#6B7A8D;line-height:1.7;margin-bottom:40px;">Nos pharmaciens préparent rigoureusement votre panier. Chaque produit est vérifié et scellé pour garantir l'intégrité de votre traitement.</p>
              <div style="display:flex;gap:8px;margin-bottom:40px;">
                <div style="height:6px;width:12px;border-radius:3px;background:rgba(26,107,138,0.2);"></div>
                <div style="height:6px;width:12px;border-radius:3px;background:rgba(26,107,138,0.2);"></div>
                <div style="height:6px;width:12px;border-radius:3px;background:rgba(26,107,138,0.2);"></div>
                <div style="height:6px;width:40px;border-radius:3px;background:#F39C12;"></div>
                <div style="height:6px;width:12px;border-radius:3px;background:rgba(26,107,138,0.2);"></div>
                <div style="height:6px;width:12px;border-radius:3px;background:rgba(26,107,138,0.2);"></div>
              </div>
              <div style="display:flex;gap:12px;">
                <button onclick="goToWebScreen(6);goToScreen(6);" style="padding:16px 36px;background:linear-gradient(135deg,#F39C12,#f1c40f);color:#fff;border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 8px 24px rgba(243,156,18,0.3);">Suivant →</button>
                <button onclick="goToWebScreen(4);goToScreen(4);" style="padding:16px 28px;background:transparent;color:#6B7A8D;border:2px solid #E2ECF2;border-radius:50px;font-size:15px;cursor:pointer;font-family:'DM Sans',sans-serif;">← Retour</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- WEB SCREEN 6 (Livreur) -->
      <div class="web-screen" id="wscreen6">
        <div style="min-height:756px;display:flex;align-items:center;justify-content:center;background:#fff;padding:60px;">
          <div style="max-width:900px;width:100%;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;">
            <div style="display:flex;justify-content:center;order:2;">
              <div style="width:320px;height:320px;border-radius:50%;background:#E8F4F8;display:flex;align-items:center;justify-content:center;">
                <svg width="200" height="200" viewBox="0 0 140 140" fill="none">
                  <rect x="20" y="30" width="100" height="80" rx="4" fill="#E2ECF2" opacity="0.4"/>
                  <rect x="70" y="55" width="45" height="45" rx="8" fill="#1A6B8A"/>
                  <circle cx="92" cy="45" r="12" fill="#1A6B8A"/>
                  <rect x="35" y="75" width="30" height="30" rx="4" fill="#27AE60"/>
                  <path d="M40 85 H60 M40 95 H55" stroke="white" stroke-width="4" opacity="0.5"/>
                  <path d="M25 90 L35 90" stroke="#27AE60" stroke-width="5" stroke-linecap="round"/>
                </svg>
              </div>
            </div>
            <div style="order:1;">
              <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A6B8A;letter-spacing:1px;text-transform:uppercase;margin-bottom:16px;">Étape 5 sur 6</div>
              <h1 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:40px;font-weight:800;color:#1A2332;line-height:1.2;margin-bottom:20px;">Prise en charge par<br><span style="color:#1A6B8A;">le livreur</span></h1>
              <p style="font-size:17px;color:#6B7A8D;line-height:1.7;margin-bottom:40px;">Un de nos livreurs partenaires géolocalisé récupère votre commande scellée directement à la pharmacie partenaire pour vous l'apporter.</p>
              <div style="display:flex;gap:8px;margin-bottom:40px;">
                <div style="height:6px;width:12px;border-radius:3px;background:rgba(26,107,138,0.2);"></div>
                <div style="height:6px;width:12px;border-radius:3px;background:rgba(26,107,138,0.2);"></div>
                <div style="height:6px;width:12px;border-radius:3px;background:rgba(26,107,138,0.2);"></div>
                <div style="height:6px;width:12px;border-radius:3px;background:rgba(26,107,138,0.2);"></div>
                <div style="height:6px;width:40px;border-radius:3px;background:#1A6B8A;"></div>
                <div style="height:6px;width:12px;border-radius:3px;background:rgba(26,107,138,0.2);"></div>
              </div>
              <div style="display:flex;gap:12px;">
                <button onclick="goToWebScreen(7);goToScreen(7);" style="padding:16px 36px;background:linear-gradient(135deg,#1A6B8A,#2196B3);color:#fff;border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 8px 24px rgba(26,107,138,0.3);">Suivant →</button>
                <button onclick="goToWebScreen(5);goToScreen(5);" style="padding:16px 28px;background:transparent;color:#6B7A8D;border:2px solid #E2ECF2;border-radius:50px;font-size:15px;cursor:pointer;font-family:'DM Sans',sans-serif;">← Retour</button>
              </div>
            </div>
          </div>
        </div>
      </div>



      <!-- WEB SCREEN 4 -->
      <div class="web-screen" id="wscreen7">
        <div style="min-height:756px;display:flex;align-items:center;justify-content:center;background:#fff;padding:60px;">
          <div style="max-width:900px;width:100%;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;">
            <div>
              <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#F39C12;letter-spacing:1px;text-transform:uppercase;margin-bottom:16px;">Étape 6 sur 6</div>
              <h1 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:40px;font-weight:800;color:#1A2332;line-height:1.2;margin-bottom:20px;">Livraison à<br><span style="color:#F39C12;">domicile</span></h1>
              <p style="font-size:17px;color:#6B7A8D;line-height:1.7;margin-bottom:40px;">Recevez vos médicaments directement chez vous. Livraison rapide, sécurisée et suivie en temps réel partout en Côte d'Ivoire.</p>
              <div style="display:flex;gap:8px;margin-bottom:40px;">
                <div style="height:6px;width:12px;border-radius:3px;background:rgba(26,107,138,0.2);"></div>
                <div style="height:6px;width:12px;border-radius:3px;background:rgba(26,107,138,0.2);"></div>
                <div style="height:6px;width:12px;border-radius:3px;background:rgba(26,107,138,0.2);"></div>
                <div style="height:6px;width:12px;border-radius:3px;background:rgba(26,107,138,0.2);"></div>
                <div style="height:6px;width:40px;border-radius:3px;background:#F39C12;"></div>
              </div>
              <button onclick="goToWebScreen(8);goToScreen(8);" style="padding:18px 48px;background:linear-gradient(135deg,#1A6B8A,#2196B3);color:#fff;border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;cursor:pointer;box-shadow:0 8px 24px rgba(26,107,138,0.35);display:inline-flex;align-items:center;gap:10px;">Commencer <span>→</span></button>
            </div>
            <div style="display:flex;justify-content:center;">
              <div style="width:320px;height:320px;border-radius:50%;background:rgba(243,156,18,0.08);display:flex;align-items:center;justify-content:center;">
                <svg width="200" height="200" viewBox="0 0 140 140" fill="none">
                  <rect x="10" y="90" width="120" height="20" rx="4" fill="#E2ECF2"/>
                  <rect x="45" y="97" width="15" height="6" rx="3" fill="white"/>
                  <rect x="65" y="97" width="15" height="6" rx="3" fill="white"/>
                  <ellipse cx="90" cy="88" rx="30" ry="10" fill="#1A6B8A"/>
                  <rect x="65" y="72" width="50" height="20" rx="8" fill="#1A6B8A"/>
                  <circle cx="68" cy="95" r="10" fill="#1A2332"/>
                  <circle cx="68" cy="95" r="5" fill="#6B7A8D"/>
                  <circle cx="105" cy="95" r="10" fill="#1A2332"/>
                  <circle cx="105" cy="95" r="5" fill="#6B7A8D"/>
                  <rect x="100" y="60" width="30" height="28" rx="6" fill="#27AE60"/>
                  <rect x="105" y="68" width="20" height="12" rx="3" fill="#E8F7EE"/>
                  <rect x="112" y="70" width="6" height="8" rx="2" fill="#27AE60"/>
                  <rect x="110" y="72" width="10" height="4" rx="2" fill="#27AE60"/>
                  <line x1="30" y1="78" x2="55" y2="78" stroke="#1A6B8A" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
                  <line x1="20" y1="85" x2="50" y2="85" stroke="#1A6B8A" stroke-width="2" stroke-linecap="round" opacity="0.3"/>
                  <rect x="12" y="55" width="35" height="35" rx="4" fill="white" stroke="#E2ECF2" stroke-width="2"/>
                  <path d="M8 60 L29 40 L50 60 Z" fill="#1A6B8A"/>
                  <rect x="22" y="70" width="14" height="20" rx="3" fill="#E8F4F8"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- WEB SCREEN 5 — LOGIN -->
      <div class="web-screen" id="wscreen8">
        <nav class="web-nav">
          <div class="web-nav-logo">
            <div class="web-nav-logo-icon">
              <svg width="20" height="20" viewBox="0 0 52 52" fill="none"><path d="M26 4C18 4 10 8 8 15C7 22 10 26 14 30C18 34 24 42 26 48C28 42 34 34 38 30C42 26 45 22 44 15C42 8 34 4 26 4Z" fill="white" opacity="0.9"/><rect x="23" y="14" width="6" height="16" rx="3" fill="#1A6B8A"/><rect x="18" y="19" width="16" height="6" rx="3" fill="#1A6B8A"/></svg>
            </div>
            <div class="web-nav-logo-text brand-cool">ILERA AFRICA</div>
          </div>
          <a class="web-nav-link" onclick="showModal('map-modal')">Accueil</a>
          <a class="web-nav-link" onclick="showModal('map-modal')">Ordonnances</a>
          <a class="web-nav-link" onclick="showModal('map-modal')">Commandes</a>
          <button class="web-nav-btn" onclick="showToast('Déjà connecté !')">Connexion</button>
        </nav>
        <div class="web-login-wrap">
          <div class="web-login-deco d1"></div>
          <div class="web-login-deco d2"></div>
          <div class="web-login-card">
            <div class="web-login-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 7v5c0 5.25 3.58 10.15 8 11.35C16.42 22.15 20 17.25 20 12V7L12 2z" fill="#1A6B8A"/><path d="M9 12l2 2 4-4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <h1 class="web-login-title">Connexion</h1>
            <p class="web-login-sub">Accédez à votre espace santé confidentiel et sécurisé.</p>
            <div class="web-field-group">
              <div class="web-field-row" style="margin-bottom:8px;">
                <label class="web-field-label" style="margin:0;">Email ou téléphone</label>
              </div>
              <input class="web-field-input" type="text" placeholder="jean.marc@email.com ou +225 07 00 00 00">
            </div>
            <div class="web-field-group">
              <div class="web-field-row" style="margin-bottom:8px;">
                <label class="web-field-label" style="margin:0;">Mot de passe</label>
                <a class="web-forgot">Mot de passe oublié ?</a>
              </div>
              <div style="position:relative;">
                <input class="web-field-input" type="password" id="webPwd" placeholder="••••••••" style="padding-right:50px;">
                <button onclick="toggleWebPwd()" style="position:absolute;right:16px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:#6B7A8D;font-size:18px;">👁</button>
              </div>
            </div>
            <div class="web-field-group">
              <label class="web-otp-label">Code MFA (6 chiffres)</label>
              <div class="web-otp-wrap">
                <input class="web-otp-box" type="text" maxlength="1" oninput="webOtpNext(this)" onkeydown="otpBack(event,this)" inputmode="numeric">
                <input class="web-otp-box" type="text" maxlength="1" oninput="webOtpNext(this)" onkeydown="otpBack(event,this)" inputmode="numeric">
                <input class="web-otp-box" type="text" maxlength="1" oninput="webOtpNext(this)" onkeydown="otpBack(event,this)" inputmode="numeric">
                <input class="web-otp-box" type="text" maxlength="1" oninput="webOtpNext(this)" onkeydown="otpBack(event,this)" inputmode="numeric">
                <input class="web-otp-box" type="text" maxlength="1" oninput="webOtpNext(this)" onkeydown="otpBack(event,this)" inputmode="numeric">
                <input class="web-otp-box" type="text" maxlength="1" oninput="webOtpNext(this)" onkeydown="otpBack(event,this)" inputmode="numeric">
              </div>
            </div>
            <div class="web-ssl-badge">
              <span>🔒 CRYPTAGE DE BOUT EN BOUT — SSL 256-bit</span>
            </div>
            <button class="web-cta" onclick="handleWebLogin()">Se connecter</button>
            <p class="web-login-footer">Nouveau sur ILERA AFRICA ? <a onclick="goToWebScreen(9)">Créer un compte →</a></p>
            <div style="margin-top:16px;padding-top:16px;border-top:1.5px solid #E2ECF2;">
              <p style="text-align:center;font-size:11px;font-weight:700;color:#6B7A8D;letter-spacing:0.5px;text-transform:uppercase;margin-bottom:10px;">Accès professionnel</p>
              <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;">
                <button onclick="goToWebScreen(19)" style="padding:10px 8px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:10px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700;cursor:pointer;">⚕️ Pharmacien</button>
                <button onclick="goToWebScreen(57)" style="padding:10px 8px;background:#E8F7EE;color:#0D3B2E;border:none;border-radius:10px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700;cursor:pointer;">🩺 Médecin</button>
                <button onclick="goToWebScreen(23)" style="padding:10px 8px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:10px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700;cursor:pointer;">🛡️ Admin</button>
              </div>
            </div>
            <div class="web-badges">
              <div class="web-badge-item">✅ Certifié HDS</div>
              <div class="web-badge-item">🎧 Support 24h/7</div>
              <div class="web-badge-item">🔒 RGPD</div>
            </div>
          </div>
        </div>
      </div>


      <!-- WEB SCREEN 6 — PATIENT REGISTRATION -->
      <div class="web-screen" id="wscreen9">
        <nav class="web-nav">
          <div class="web-nav-logo">
            <div class="web-nav-logo-icon"><svg width="20" height="20" viewBox="0 0 52 52" fill="none"><path d="M26 4C18 4 10 8 8 15C7 22 10 26 14 30C18 34 24 42 26 48C28 42 34 34 38 30C42 26 45 22 44 15C42 8 34 4 26 4Z" fill="white" opacity="0.9"/><rect x="23" y="14" width="6" height="16" rx="3" fill="#1A6B8A"/><rect x="18" y="19" width="16" height="6" rx="3" fill="#1A6B8A"/></svg></div>
            <div class="web-nav-logo-text brand-cool">ILERA AFRICA</div>
          </div>
          <a class="web-nav-link" onclick="goToWebScreen(8)">Se connecter</a>
          <button class="web-nav-btn" style="background:transparent;color:#1A6B8A;border:2px solid #1A6B8A;">Déjà membre ?</button>
        </nav>
        <div class="web-login-wrap">
          <div class="web-login-deco d1"></div>
          <div class="web-login-deco d2"></div>
          <div class="web-login-card" style="max-width:520px;">
            <div class="web-login-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z" fill="#1A6B8A"/></svg>
            </div>
            <h1 class="web-login-title">Rejoignez-nous</h1>
            <p class="web-login-sub">Créez votre profil santé sécurisé et confidentiel</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px;">
              <div class="web-field-group" style="margin:0;">
                <label class="web-field-label">Nom complet</label>
                <input class="web-field-input" type="text" placeholder="Moussa Koné" value="Moussa Koné">
              </div>
              <div class="web-field-group" style="margin:0;">
                <label class="web-field-label">Téléphone</label>
                <div style="display:flex;gap:6px;">
                  <div style="padding:12px 10px;background:#F4F9FC;border:1.5px solid #E2ECF2;border-radius:10px;font-size:13px;font-weight:700;color:#1A6B8A;white-space:nowrap;">+225</div>
                  <input class="web-field-input" type="tel" placeholder="07 00 00 00 00" style="margin:0;flex:1;">
                </div>
              </div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px;">
              <div class="web-field-group" style="margin:0;">
                <label class="web-field-label">Âge</label>
                <input class="web-field-input" type="number" placeholder="32" value="32" style="margin:0;">
              </div>
              <div class="web-field-group" style="margin:0;">
                <label class="web-field-label">Groupe Sanguin <span style="font-size:11px;font-weight:400;color:#A0AEC0;">(facultatif)</span></label>
                <select class="web-field-input" style="margin:0;">
                  <option value="" style="color:#A0AEC0;">Non renseigné</option><option>A+</option><option>A-</option><option>B+</option><option>B-</option><option>AB+</option><option>AB-</option><option>O+</option><option>O-</option>
                </select>
              </div>
            </div>
            <div class="web-field-group">
              <div class="web-field-row" style="margin-bottom:8px;">
                <label class="web-field-label" style="margin:0;">Mot de passe</label>
              </div>
              <div style="position:relative;">
                <input class="web-field-input" type="password" placeholder="Minimum 8 caractères" value="SecurePass123" style="padding-right:50px;">
                <button onclick="showToast('Afficher/masquer')" style="position:absolute;right:14px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:#6B7A8D;font-size:16px;">👁</button>
              </div>
              <div style="display:flex;gap:4px;margin-top:8px;">
                <div style="flex:1;height:3px;background:#27AE60;border-radius:4px;"></div>
                <div style="flex:1;height:3px;background:#27AE60;border-radius:4px;"></div>
                <div style="flex:1;height:3px;background:#27AE60;border-radius:4px;"></div>
                <div style="flex:1;height:3px;background:#E2ECF2;border-radius:4px;"></div>
              </div>
              <p style="font-size:11px;color:#27AE60;margin-top:4px;font-family:'DM Sans',sans-serif;">✓ Mot de passe fort</p>
            </div>
            <div style="background:linear-gradient(135deg,#E8F4F8,#EBF7EF);border-radius:10px;padding:12px 14px;display:flex;align-items:center;gap:10px;margin-bottom:16px;">
              <span style="font-size:18px;">🔒</span>
              <p style="font-size:12px;color:#1A6B8A;line-height:1.4;font-family:'DM Sans',sans-serif;">Vos données sont chiffrées selon les normes HDS et ne seront jamais revendues.</p>
            </div>
            <button class="web-cta" onclick="handleRegisterWeb()">Créer mon compte →</button>
            <p class="web-login-footer">Déjà un compte ? <a onclick="goToWebScreen(8)">Se connecter</a></p>
          </div>
        </div>
      </div>

      <!-- WEB SCREEN 7 — PATIENT DASHBOARD -->
      <div class="web-screen" id="wscreen10">
        <nav class="web-nav">
          <div class="web-nav-logo">
            <div class="web-nav-logo-icon"><svg width="20" height="20" viewBox="0 0 52 52" fill="none"><path d="M26 4C18 4 10 8 8 15C7 22 10 26 14 30C18 34 24 42 26 48C28 42 34 34 38 30C42 26 45 22 44 15C42 8 34 4 26 4Z" fill="white" opacity="0.9"/><rect x="23" y="14" width="6" height="16" rx="3" fill="#1A6B8A"/><rect x="18" y="19" width="16" height="6" rx="3" fill="#1A6B8A"/></svg></div>
            <div class="web-nav-logo-text brand-cool">ILERA AFRICA</div>
          </div>
          <a class="web-nav-link" onclick="goToScreen(10)">Accueil</a>
          <a class="web-nav-link" onclick="goToWebScreen(12)">Mes Ordonnances</a>
          <a class="web-nav-link" onclick="goToWebScreen(13)">Mes Commandes</a>
          <div style="margin-left:auto;display:flex;align-items:center;gap:12px;">
            <div style="position:relative;cursor:pointer;" onclick="goToScreen(18)">
              <span style="font-size:20px;">🔔</span>
              <div style="position:absolute;top:-4px;right:-6px;width:16px;height:16px;background:#E74C3C;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:#fff;">3</div>
            </div>
            <div onclick="goToScreen(17)" style="width:36px;height:36px;background:linear-gradient(135deg,#1A6B8A,#2196B3);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;color:#fff;font-weight:700;">M</div>
          </div>
        </nav>
        <div style="padding:24px 32px;overflow-y:auto;height:calc(100% - 60px);background:#F4F9FC;">
          <!-- Welcome banner -->
          <div style="background:linear-gradient(135deg,#1A6B8A,#0F3F54);border-radius:20px;padding:24px 28px;margin-bottom:24px;display:flex;align-items:center;justify-content:space-between;overflow:hidden;position:relative;">
            <div style="position:absolute;right:-30px;bottom:-30px;opacity:0.08;"><svg width="160" height="160" viewBox="0 0 52 52" fill="none"><path d="M26 4C18 4 10 8 8 15C7 22 10 26 14 30C18 34 24 42 26 48C28 42 34 34 38 30C42 26 45 22 44 15C42 8 34 4 26 4Z" fill="white" opacity="0.9"/><rect x="23" y="14" width="6" height="16" rx="3" fill="#1A6B8A"/><rect x="18" y="19" width="16" height="6" rx="3" fill="#1A6B8A"/></svg></div>
            <div>
              <p style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:4px;">Tableau de bord patient</p>
              <h1 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;color:#fff;margin-bottom:8px;">Bonjour, Jean-Marc 👋</h1>
              <p style="font-size:14px;color:rgba(255,255,255,0.7);">Votre espace santé sécurisé — 14 octobre 2024</p>
            </div>
            <div style="background:rgba(39,174,96,0.2);border:1.5px solid rgba(39,174,96,0.4);border-radius:12px;padding:10px 16px;text-align:center;">
              <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.8);letter-spacing:0.5px;margin-bottom:2px;">STATUT COMPTE</div>
              <div style="font-size:13px;font-weight:700;color:#27AE60;">✓ Vérification Clinique Active</div>
            </div>
          </div>
          <!-- 2-col main grid -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px;">
            <!-- Upload card -->
            <div style="background:#fff;border-radius:16px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
              <div style="width:48px;height:48px;background:linear-gradient(135deg,#E8F7EE,#C5EDD6);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:14px;">📤</div>
              <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:17px;font-weight:700;color:#1A2332;margin-bottom:6px;">Téléverser une ordonnance</h3>
              <p style="font-size:13px;color:#6B7A8D;line-height:1.5;margin-bottom:16px;">Envoyez votre ordonnance médicale et recevez vos médicaments à domicile en toute sécurité.</p>
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;background:#F4F9FC;padding:10px 12px;border-radius:10px;">
                <span style="font-size:14px;">🔒</span>
                <span style="font-size:12px;color:#1A6B8A;font-weight:600;">SSL 256-bit — Données chiffrées</span>
              </div>
              <button onclick="goToWebScreen(11)" style="width:100%;padding:12px;background:linear-gradient(135deg,#27AE60,#2ecc71);color:#fff;border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 6px 20px rgba(39,174,96,0.3);">Commencer l'envoi →</button>
            </div>
            <!-- Tracking card -->
            <div style="background:#fff;border-radius:16px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
                <div>
                  <div style="font-size:12px;color:#6B7A8D;margin-bottom:2px;">Commande en cours</div>
                  <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:17px;font-weight:700;color:#1A2332;">Suivi #CMD-90214</h3>
                </div>
                <div style="background:#E8F4F8;border-radius:10px;padding:6px 12px;font-size:12px;font-weight:700;color:#1A6B8A;">🚚 En route</div>
              </div>
              <div style="display:flex;justify-content:space-between;margin-bottom:20px;">
                <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
                  <div style="width:32px;height:32px;background:#27AE60;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;">✓</div>
                  <div style="font-size:10px;font-weight:600;color:#27AE60;text-align:center;">Validation</div>
                </div>
                <div style="flex:1;height:2px;background:#27AE60;align-self:center;margin:0 4px;margin-bottom:14px;"></div>
                <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
                  <div style="width:32px;height:32px;background:#27AE60;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;">✓</div>
                  <div style="font-size:10px;font-weight:600;color:#27AE60;text-align:center;">Préparation</div>
                </div>
                <div style="flex:1;height:2px;background:linear-gradient(90deg,#27AE60,#E2ECF2);align-self:center;margin:0 4px;margin-bottom:14px;"></div>
                <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
                  <div style="width:32px;height:32px;background:#1A6B8A;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;">🚚</div>
                  <div style="font-size:10px;font-weight:600;color:#1A6B8A;text-align:center;">Livraison</div>
                </div>
                <div style="flex:1;height:2px;background:#E2ECF2;align-self:center;margin:0 4px;margin-bottom:14px;"></div>
                <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
                  <div style="width:32px;height:32px;background:#E2ECF2;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#6B7A8D;font-size:14px;">○</div>
                  <div style="font-size:10px;color:#6B7A8D;text-align:center;">Livré</div>
                </div>
              </div>
              <div style="background:#F4F9FC;border-radius:10px;padding:12px;display:flex;justify-content:space-between;">
                <div><div style="font-size:11px;color:#6B7A8D;">Estimation</div><div style="font-size:13px;font-weight:700;color:#1A2332;">Aujourd'hui, 17:30</div></div>
                <div><div style="font-size:11px;color:#6B7A8D;">Livreur</div><div style="font-size:13px;font-weight:700;color:#1A2332;">DHL Pharma Express</div></div>
                <div><div style="font-size:11px;color:#6B7A8D;">Montant</div><div style="font-size:13px;font-weight:700;color:#1A6B8A;">12 500 FCFA</div></div>
              </div>
            </div>
          </div>
          <!-- Recent consultations -->
          <div style="background:#fff;border-radius:16px;padding:20px;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:20px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
              <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">Consultations récentes</h3>
              <a onclick="goToScreen(13)" style="font-size:13px;color:#1A6B8A;font-weight:600;cursor:pointer;">Voir tout →</a>
            </div>
            <table style="width:100%;border-collapse:collapse;">
              <thead><tr style="background:#F4F9FC;"><th style="padding:10px 12px;font-size:12px;color:#6B7A8D;font-weight:600;text-align:left;border-radius:8px 0 0 8px;">Pharmacien</th><th style="padding:10px 12px;font-size:12px;color:#6B7A8D;font-weight:600;text-align:left;">Spécialité</th><th style="padding:10px 12px;font-size:12px;color:#6B7A8D;font-weight:600;text-align:left;">Date</th><th style="padding:10px 12px;font-size:12px;color:#6B7A8D;font-weight:600;text-align:left;border-radius:0 8px 8px 0;">Document</th></tr></thead>
              <tbody>
                <tr style="border-bottom:1px solid #F4F9FC;">
                  <td style="padding:12px;"><div style="display:flex;align-items:center;gap:10px;"><div style="width:32px;height:32px;background:linear-gradient(135deg,#1A6B8A,#2196B3);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:700;">S</div><span style="font-size:13px;font-weight:600;color:#1A2332;">Dr. Sophie Lefebvre</span></div></td>
                  <td style="padding:12px;font-size:13px;color:#6B7A8D;">Pharmacienne conseil</td>
                  <td style="padding:12px;font-size:13px;color:#6B7A8D;">14 oct. 2024, 10:30</td>
                  <td style="padding:12px;"><a onclick="showToast('Téléchargement conseil...')" style="font-size:12px;color:#1A6B8A;font-weight:600;cursor:pointer;">📄 Voir conseil</a></td>
                </tr>
                <tr style="border-bottom:1px solid #F4F9FC;">
                  <td style="padding:12px;"><div style="display:flex;align-items:center;gap:10px;"><div style="width:32px;height:32px;background:linear-gradient(135deg,#27AE60,#2ecc71);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:700;">K</div><span style="font-size:13px;font-weight:600;color:#1A2332;">Pharm. Kofi Asante</span></div></td>
                  <td style="padding:12px;font-size:13px;color:#6B7A8D;">Pharmacien principal</td>
                  <td style="padding:12px;font-size:13px;color:#6B7A8D;">2 oct. 2024, 14:15</td>
                  <td style="padding:12px;"><a onclick="showToast('Téléchargement ordonnance...')" style="font-size:12px;color:#1A6B8A;font-weight:600;cursor:pointer;">📄 Voir ordonnance</a></td>
                </tr>
                <tr>
                  <td style="padding:12px;"><div style="display:flex;align-items:center;gap:10px;"><div style="width:32px;height:32px;background:linear-gradient(135deg,#F39C12,#f5a623);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:700;">A</div><span style="font-size:13px;font-weight:600;color:#1A2332;">Pharm. Adja Traoré</span></div></td>
                  <td style="padding:12px;font-size:13px;color:#6B7A8D;">Pharmacienne</td>
                  <td style="padding:12px;font-size:13px;color:#6B7A8D;">18 sept. 2024, 09:00</td>
                  <td style="padding:12px;"><a onclick="showToast('Téléchargement compte rendu...')" style="font-size:12px;color:#1A6B8A;font-weight:600;cursor:pointer;">📄 Compte rendu</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- Bottom 2-col -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
            <div style="background:#fff;border-radius:16px;padding:20px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
              <div style="font-size:28px;margin-bottom:10px;">💊</div>
              <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:#1A2332;margin-bottom:6px;">Conseil Santé</h3>
              <p style="font-size:13px;color:#6B7A8D;line-height:1.5;margin-bottom:14px;">Bien gérer son traitement antipaludéen : les bonnes pratiques à adopter au quotidien.</p>
              <a onclick="showToast('Lire l\'article complet')" style="font-size:13px;color:#1A6B8A;font-weight:700;cursor:pointer;">Lire l'article →</a>
            </div>
            <div style="background:#fff;border-radius:16px;padding:20px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
              <div style="font-size:28px;margin-bottom:10px;">🎧</div>
              <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:#1A2332;margin-bottom:6px;">Assistance Directe</h3>
              <p style="font-size:13px;color:#6B7A8D;line-height:1.5;margin-bottom:14px;">Notre équipe est disponible 24h/7 pour répondre à toutes vos questions pharmaceutiques.</p>
              <div style="display:flex;gap:8px;">
                <button onclick="goToWebScreen(13)" style="flex:1;padding:10px;background:linear-gradient(135deg,#1A6B8A,#2196B3);color:#fff;border:none;border-radius:50px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">💬 Chat en direct</button>
                <button onclick="showToast('Prise de rendez-vous...')" style="flex:1;padding:10px;background:#F4F9FC;color:#1A6B8A;border:1.5px solid #E2ECF2;border-radius:50px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📅 Rendez-vous</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- WEB SCREEN 8 — UPLOAD PRESCRIPTION -->
      <div class="web-screen" id="wscreen11">
        <nav class="web-nav">
          <div class="web-nav-logo">
            <div class="web-nav-logo-icon"><svg width="20" height="20" viewBox="0 0 52 52" fill="none"><path d="M26 4C18 4 10 8 8 15C7 22 10 26 14 30C18 34 24 42 26 48C28 42 34 34 38 30C42 26 45 22 44 15C42 8 34 4 26 4Z" fill="white" opacity="0.9"/><rect x="23" y="14" width="6" height="16" rx="3" fill="#1A6B8A"/><rect x="18" y="19" width="16" height="6" rx="3" fill="#1A6B8A"/></svg></div>
            <div class="web-nav-logo-text brand-cool">ILERA AFRICA</div>
          </div>
          <a class="web-nav-link" onclick="goToWebScreen(10)">← Tableau de bord</a>
          <div style="margin-left:auto;display:flex;align-items:center;gap:12px;">
            <div onclick="goToScreen(18)" style="cursor:pointer;font-size:20px;position:relative;"><span>🔔</span><div style="position:absolute;top:-4px;right:-6px;width:14px;height:14px;background:#E74C3C;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:8px;font-weight:700;color:#fff;">3</div></div>
            <div style="width:36px;height:36px;background:linear-gradient(135deg,#1A6B8A,#2196B3);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;color:#fff;font-weight:700;">J</div>
          </div>
        </nav>
        <div style="padding:28px 48px;overflow-y:auto;height:calc(100% - 60px);background:#F4F9FC;">
          <div style="max-width:720px;margin:0 auto;">
            <div style="margin-bottom:24px;">
              <a onclick="goToWebScreen(10)" style="font-size:13px;color:#6B7A8D;cursor:pointer;font-family:'DM Sans',sans-serif;">← Retour au tableau de bord</a>
              <h1 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;color:#1A2332;margin-top:8px;">Téléverser une ordonnance</h1>
              <p style="font-size:14px;color:#6B7A8D;margin-top:4px;">Envoyez votre ordonnance en toute sécurité — validation par un médecin agréé sous 2h</p>
            </div>
            <!-- Drag and drop zone -->
            <div onclick="showModal('file-modal')" style="border:2.5px dashed #1A6B8A;border-radius:24px;padding:48px 32px;text-align:center;background:rgba(26,107,138,0.03);cursor:pointer;margin-bottom:20px;transition:all 0.2s;" onmouseover="this.style.background='rgba(26,107,138,0.07)'" onmouseout="this.style.background='rgba(26,107,138,0.03)'">
              <div style="font-size:56px;margin-bottom:14px;">📋</div>
              <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:700;color:#1A6B8A;margin-bottom:8px;">Glissez votre fichier ici</div>
              <div style="font-size:14px;color:#6B7A8D;margin-bottom:4px;">ou cliquez pour parcourir vos fichiers</div>
              <div style="display:inline-block;background:#F4F9FC;border:1px solid #E2ECF2;border-radius:20px;padding:6px 16px;font-size:12px;color:#6B7A8D;margin-top:8px;">PDF, JPG, PNG — Max 10MB</div>
            </div>
            <!-- Preview grid -->
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:20px;">
              <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);position:relative;">
                <div style="height:80px;background:linear-gradient(135deg,#E8F4F8,#D0E8F5);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:28px;margin-bottom:8px;">📄</div>
                <div style="font-size:11px;font-weight:600;color:#1A2332;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">ordonnance_lefebvre.pdf</div>
                <div style="font-size:10px;color:#27AE60;font-weight:600;">✓ 2.4 MB</div>
                <button onclick="showModal('confirm-delete-modal')" style="position:absolute;top:8px;right:8px;width:22px;height:22px;background:#E74C3C;border:none;border-radius:50%;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;">✕</button>
              </div>
              <div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);position:relative;">
                <div style="height:80px;background:linear-gradient(135deg,#FFF8E8,#FFE8B0);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:28px;margin-bottom:8px;">🖼️</div>
                <div style="font-size:11px;font-weight:600;color:#1A2332;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">photo_ordonnance.jpg</div>
                <div style="font-size:10px;color:#27AE60;font-weight:600;">✓ 1.8 MB</div>
                <button onclick="showModal('confirm-delete-modal')" style="position:absolute;top:8px;right:8px;width:22px;height:22px;background:#E74C3C;border:none;border-radius:50%;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;">✕</button>
              </div>
              <div onclick="showToast('Ajouter un fichier')" style="background:#F4F9FC;border:2px dashed #E2ECF2;border-radius:14px;padding:14px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;min-height:120px;">
                <div style="font-size:28px;color:#B0C4D0;margin-bottom:6px;">+</div>
                <div style="font-size:11px;color:#6B7A8D;">Ajouter</div>
              </div>
            </div>
            <!-- Notes -->
            <div style="background:#fff;border-radius:16px;padding:20px;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:16px;">
              <label style="font-size:13px;font-weight:700;color:#1A2332;display:block;margin-bottom:10px;">Notes pour le pharmacien (optionnel)</label>
              <textarea rows="3" placeholder="Ex: Allergie à la pénicilline. Traitement pour 30 jours prescrit par Dr. Lefebvre..." style="width:100%;padding:14px;background:#F4F9FC;border:1.5px solid #E2ECF2;border-radius:12px;font-size:14px;color:#1A2332;font-family:'DM Sans',sans-serif;outline:none;resize:none;line-height:1.5;" onclick="this.style.borderColor='#1A6B8A'">Allergie connue à la pénicilline. Traitement prescrit par Dr. Sophie Lefebvre le 14 oct. 2024 pour 30 jours.</textarea>
            </div>
            <!-- Info accordion -->
            <div style="background:#fff;border-radius:16px;padding:16px 20px;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:16px;cursor:pointer;" onclick="this.querySelector('.accordion-body').style.display=this.querySelector('.accordion-body').style.display==='none'?'block':'none'">
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <div style="font-size:14px;font-weight:600;color:#1A6B8A;">❓ Pourquoi avons-nous besoin de votre ordonnance ?</div>
                <span style="color:#6B7A8D;font-size:18px;">›</span>
              </div>
              <div class="accordion-body" style="display:none;margin-top:12px;font-size:13px;color:#6B7A8D;line-height:1.6;">
                Votre ordonnance est requise pour garantir la sécurité de votre traitement. Un pharmacien diplômé vérifie chaque ordonnance avant la préparation de votre commande. Vos documents sont chiffrés et confidentiels.
              </div>
            </div>
            <!-- SSL Banner -->
            <div style="background:linear-gradient(135deg,#E8F4F8,#EBF7EF);border-radius:14px;padding:14px 18px;display:flex;align-items:center;gap:14px;border:1px solid rgba(26,107,138,0.15);margin-bottom:20px;">
              <span style="font-size:28px;">🔒</span>
              <div>
                <div style="font-size:13px;font-weight:700;color:#1A6B8A;margin-bottom:2px;">Paiement et données 100% sécurisés</div>
                <div style="font-size:12px;color:#6B7A8D;">Chiffrement SSL 256-bit · Conforme HDS · RGPD</div>
              </div>
              <div style="margin-left:auto;display:flex;gap:8px;">
                <div style="background:#fff;border-radius:8px;padding:6px 10px;font-size:10px;font-weight:700;color:#1A6B8A;border:1px solid #E2ECF2;">✅ HDS</div>
                <div style="background:#fff;border-radius:8px;padding:6px 10px;font-size:10px;font-weight:700;color:#27AE60;border:1px solid #E2ECF2;">🔐 SSL</div>
              </div>
            </div>
            <button onclick="showToast('✅ Ordonnance envoyée ! Référence: ORD-2024-090 — Validation sous 2h')" style="width:100%;padding:16px;background:linear-gradient(135deg,#1A6B8A,#2196B3);color:#fff;border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;cursor:pointer;box-shadow:0 8px 28px rgba(26,107,138,0.35);">Envoyer mon ordonnance</button>
          </div>
        </div>
      </div>

      <!-- WEB SCREEN 9 — MY ORDERS (web) -->
      <div class="web-screen" id="wscreen12">
        <nav class="web-nav">
          <div class="web-nav-logo">
            <div class="web-nav-logo-icon"><svg width="20" height="20" viewBox="0 0 52 52" fill="none"><path d="M26 4C18 4 10 8 8 15C7 22 10 26 14 30C18 34 24 42 26 48C28 42 34 34 38 30C42 26 45 22 44 15C42 8 34 4 26 4Z" fill="white" opacity="0.9"/><rect x="23" y="14" width="6" height="16" rx="3" fill="#1A6B8A"/><rect x="18" y="19" width="16" height="6" rx="3" fill="#1A6B8A"/></svg></div>
            <div class="web-nav-logo-text brand-cool">ILERA AFRICA</div>
          </div>
          <a class="web-nav-link" onclick="goToWebScreen(10)">Tableau de bord</a>
          <a class="web-nav-link" style="color:#1A6B8A;font-weight:700;">Mes Ordonnances</a>
          <a class="web-nav-link" onclick="goToWebScreen(13)">Mes Commandes</a>
          <div style="margin-left:auto;display:flex;align-items:center;gap:12px;">
            <div style="width:36px;height:36px;background:linear-gradient(135deg,#1A6B8A,#2196B3);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;font-weight:700;">J</div>
          </div>
        </nav>
        <div style="padding:24px 32px;overflow-y:auto;height:calc(100% - 60px);background:#F4F9FC;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
            <div>
              <h1 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;font-weight:800;color:#1A2332;">Mes Ordonnances</h1>
              <p style="font-size:13px;color:#6B7A8D;margin-top:2px;">Suivi de toutes vos ordonnances médicales</p>
            </div>
            <button onclick="goToWebScreen(11)" style="padding:12px 24px;background:linear-gradient(135deg,#1A6B8A,#2196B3);color:#fff;border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 4px 16px rgba(26,107,138,0.3);">+ Nouvelle ordonnance</button>
          </div>
          <!-- Filter bar -->
          <div style="background:#fff;border-radius:14px;padding:16px 20px;box-shadow:0 2px 8px rgba(0,0,0,0.05);margin-bottom:16px;display:flex;gap:12px;align-items:center;flex-wrap:wrap;">
            <input type="text" placeholder="🔍  Rechercher une ordonnance..." style="padding:10px 16px;background:#F4F9FC;border:1.5px solid #E2ECF2;border-radius:10px;font-size:14px;color:#1A2332;font-family:'DM Sans',sans-serif;outline:none;flex:1;min-width:200px;">
            <select style="padding:10px 14px;background:#F4F9FC;border:1.5px solid #E2ECF2;border-radius:10px;font-size:13px;color:#6B7A8D;font-family:'DM Sans',sans-serif;outline:none;">
              <option>Tous les statuts</option><option>En attente</option><option>En validation</option><option>Validée</option><option>Rejetée</option>
            </select>
            <input type="date" value="2024-10-01" style="padding:10px 14px;background:#F4F9FC;border:1.5px solid #E2ECF2;border-radius:10px;font-size:13px;color:#6B7A8D;font-family:'DM Sans',sans-serif;outline:none;">
            <input type="date" value="2024-10-14" style="padding:10px 14px;background:#F4F9FC;border:1.5px solid #E2ECF2;border-radius:10px;font-size:13px;color:#6B7A8D;font-family:'DM Sans',sans-serif;outline:none;">
            <button onclick="showToast('Filtres appliqués')" style="padding:10px 20px;background:#1A6B8A;color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">Filtrer</button>
            <button onclick="triggerDownload()" style="padding:10px 16px;background:#F4F9FC;color:#6B7A8D;border:1.5px solid #E2ECF2;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">📥 Export CSV</button>
          </div>
          <!-- Table -->
          <div style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
            <table style="width:100%;border-collapse:collapse;">
              <thead>
                <tr style="background:#F4F9FC;">
                  <th style="padding:14px 16px;font-size:12px;color:#6B7A8D;font-weight:700;text-align:left;">#</th>
                  <th style="padding:14px 16px;font-size:12px;color:#6B7A8D;font-weight:700;text-align:left;">Date</th>
                  <th style="padding:14px 16px;font-size:12px;color:#6B7A8D;font-weight:700;text-align:left;">Médicaments</th>
                  <th style="padding:14px 16px;font-size:12px;color:#6B7A8D;font-weight:700;text-align:left;">Pharmacie</th>
                  <th style="padding:14px 16px;font-size:12px;color:#6B7A8D;font-weight:700;text-align:left;">Statut</th>
                  <th style="padding:14px 16px;font-size:12px;color:#6B7A8D;font-weight:700;text-align:left;">Montant</th>
                  <th style="padding:14px 16px;font-size:12px;color:#6B7A8D;font-weight:700;text-align:left;">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid #F4F9FC;" onmouseover="this.style.background='#FAFCFE'" onmouseout="this.style.background=''">
                  <td style="padding:14px 16px;font-size:13px;font-weight:700;color:#1A6B8A;">ORD-2024-089</td>
                  <td style="padding:14px 16px;font-size:13px;color:#6B7A8D;">14 oct. 2024</td>
                  <td style="padding:14px 16px;font-size:13px;color:#1A2332;">Coartem, Paracétamol, Fer...</td>
                  <td style="padding:14px 16px;font-size:13px;color:#1A2332;">Pharmacie Centrale CI</td>
                  <td style="padding:14px 16px;"><span style="background:#FFF3CD;color:#F39C12;border-radius:20px;padding:5px 12px;font-size:11px;font-weight:700;">⏳ En validation</span></td>
                  <td style="padding:14px 16px;font-size:13px;font-weight:700;color:#1A2332;">12 500 FCFA</td>
                  <td style="padding:14px 16px;display:flex;gap:8px;"><button onclick="goToScreen(22)" style="padding:6px 12px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;">👁 Voir</button><button onclick="triggerDownload()" style="padding:6px 12px;background:#F4F9FC;color:#6B7A8D;border:1px solid #E2ECF2;border-radius:8px;font-size:12px;cursor:pointer;">📥</button></td>
                </tr>
                <tr style="border-bottom:1px solid #F4F9FC;" onmouseover="this.style.background='#FAFCFE'" onmouseout="this.style.background=''">
                  <td style="padding:14px 16px;font-size:13px;font-weight:700;color:#1A6B8A;">ORD-2024-075</td>
                  <td style="padding:14px 16px;font-size:13px;color:#6B7A8D;">2 oct. 2024</td>
                  <td style="padding:14px 16px;font-size:13px;color:#1A2332;">Metformine, Glucophage</td>
                  <td style="padding:14px 16px;font-size:13px;color:#1A2332;">PharmaCIV Abidjan</td>
                  <td style="padding:14px 16px;"><span style="background:#E8F7EE;color:#27AE60;border-radius:20px;padding:5px 12px;font-size:11px;font-weight:700;">✓ Validée</span></td>
                  <td style="padding:14px 16px;font-size:13px;font-weight:700;color:#1A2332;">8 750 FCFA</td>
                  <td style="padding:14px 16px;display:flex;gap:8px;"><button onclick="goToScreen(22)" style="padding:6px 12px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;">👁 Voir</button><button onclick="triggerDownload()" style="padding:6px 12px;background:#F4F9FC;color:#6B7A8D;border:1px solid #E2ECF2;border-radius:8px;font-size:12px;cursor:pointer;">📥</button></td>
                </tr>
                <tr style="border-bottom:1px solid #F4F9FC;" onmouseover="this.style.background='#FAFCFE'" onmouseout="this.style.background=''">
                  <td style="padding:14px 16px;font-size:13px;font-weight:700;color:#1A6B8A;">ORD-2024-061</td>
                  <td style="padding:14px 16px;font-size:13px;color:#6B7A8D;">18 sept. 2024</td>
                  <td style="padding:14px 16px;font-size:13px;color:#1A2332;">Amoxicilline 500mg, Ibuprofène</td>
                  <td style="padding:14px 16px;font-size:13px;color:#1A2332;">Pharmacie du Plateau</td>
                  <td style="padding:14px 16px;"><span style="background:#E8F4F8;color:#1A6B8A;border-radius:20px;padding:5px 12px;font-size:11px;font-weight:700;">🚚 En livraison</span></td>
                  <td style="padding:14px 16px;font-size:13px;font-weight:700;color:#1A2332;">21 300 FCFA</td>
                  <td style="padding:14px 16px;display:flex;gap:8px;"><button onclick="goToScreen(22)" style="padding:6px 12px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;">👁 Voir</button><button onclick="triggerDownload()" style="padding:6px 12px;background:#F4F9FC;color:#6B7A8D;border:1px solid #E2ECF2;border-radius:8px;font-size:12px;cursor:pointer;">📥</button></td>
                </tr>
                <tr style="border-bottom:1px solid #F4F9FC;" onmouseover="this.style.background='#FAFCFE'" onmouseout="this.style.background=''">
                  <td style="padding:14px 16px;font-size:13px;font-weight:700;color:#1A6B8A;">ORD-2024-048</td>
                  <td style="padding:14px 16px;font-size:13px;color:#6B7A8D;">5 sept. 2024</td>
                  <td style="padding:14px 16px;font-size:13px;color:#1A2332;">Vitamine C, Zinc, Oméga-3</td>
                  <td style="padding:14px 16px;font-size:13px;color:#1A2332;">Pharma Express</td>
                  <td style="padding:14px 16px;"><span style="background:#E8F7EE;color:#27AE60;border-radius:20px;padding:5px 12px;font-size:11px;font-weight:700;">✓ Livrée</span></td>
                  <td style="padding:14px 16px;font-size:13px;font-weight:700;color:#1A2332;">5 200 FCFA</td>
                  <td style="padding:14px 16px;display:flex;gap:8px;"><button onclick="goToScreen(22)" style="padding:6px 12px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;">👁 Voir</button><button onclick="triggerDownload()" style="padding:6px 12px;background:#F4F9FC;color:#6B7A8D;border:1px solid #E2ECF2;border-radius:8px;font-size:12px;cursor:pointer;">📥</button></td>
                </tr>
                <tr onmouseover="this.style.background='#FAFCFE'" onmouseout="this.style.background=''">
                  <td style="padding:14px 16px;font-size:13px;font-weight:700;color:#1A6B8A;">ORD-2024-032</td>
                  <td style="padding:14px 16px;font-size:13px;color:#6B7A8D;">20 août 2024</td>
                  <td style="padding:14px 16px;font-size:13px;color:#1A2332;">Amlodipine, Lisinopril</td>
                  <td style="padding:14px 16px;font-size:13px;color:#1A2332;">Pharmacie Centrale CI</td>
                  <td style="padding:14px 16px;"><span style="background:#FEF0EE;color:#E74C3C;border-radius:20px;padding:5px 12px;font-size:11px;font-weight:700;">✕ Annulée</span></td>
                  <td style="padding:14px 16px;font-size:13px;color:#6B7A8D;text-decoration:line-through;">3 800 FCFA</td>
                  <td style="padding:14px 16px;display:flex;gap:8px;"><button onclick="goToScreen(22)" style="padding:6px 12px;background:#F4F9FC;color:#6B7A8D;border:1px solid #E2ECF2;border-radius:8px;font-size:12px;cursor:pointer;">👁 Voir</button></td>
                </tr>
              </tbody>
            </table>
            <!-- Pagination -->
            <div style="display:flex;justify-content:space-between;align-items:center;padding:14px 20px;border-top:1px solid #F4F9FC;">
              <div style="font-size:13px;color:#6B7A8D;">Affichage de 5 sur 24 résultats</div>
              <div style="display:flex;gap:6px;">
                <button style="width:32px;height:32px;border:1.5px solid #E2ECF2;background:#fff;border-radius:8px;cursor:pointer;color:#6B7A8D;font-size:13px;">‹</button>
                <button style="width:32px;height:32px;border:none;background:#1A6B8A;border-radius:8px;cursor:pointer;color:#fff;font-size:13px;font-weight:700;">1</button>
                <button style="width:32px;height:32px;border:1.5px solid #E2ECF2;background:#fff;border-radius:8px;cursor:pointer;color:#6B7A8D;font-size:13px;">2</button>
                <button style="width:32px;height:32px;border:1.5px solid #E2ECF2;background:#fff;border-radius:8px;cursor:pointer;color:#6B7A8D;font-size:13px;">3</button>
                <button style="width:32px;height:32px;border:1.5px solid #E2ECF2;background:#fff;border-radius:8px;cursor:pointer;color:#6B7A8D;font-size:13px;">›</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- WEB SCREEN 10 — PATIENT PORTAL LANDING -->
      <div class="web-screen" id="wscreen13">
        <div style="height:100%;overflow-y:auto;background:#F4F9FC;">
          <!-- Nav -->
          <nav style="display:flex;align-items:center;padding:0 32px;height:64px;background:#fff;border-bottom:1px solid #E2ECF2;position:sticky;top:0;z-index:10;gap:20px;">
            <div style="display:flex;align-items:center;gap:10px;margin-right:24px;">
              <div style="width:32px;height:32px;background:linear-gradient(135deg,#1A6B8A,#2196B3);border-radius:10px;display:flex;align-items:center;justify-content:center;"><svg width="18" height="18" viewBox="0 0 52 52" fill="none"><path d="M26 4C18 4 10 8 8 15C7 22 10 26 14 30C18 34 24 42 26 48C28 42 34 34 38 30C42 26 45 22 44 15C42 8 34 4 26 4Z" fill="white" opacity="0.9"/><rect x="23" y="14" width="6" height="16" rx="3" fill="#1A6B8A"/><rect x="18" y="19" width="16" height="6" rx="3" fill="#1A6B8A"/></svg></div>
              <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:800;color:#1A6B8A;">ILERA AFRICA</div>
            </div>
            <a onclick="goToScreen(10)" style="font-size:14px;color:#6B7A8D;cursor:pointer;font-family:'DM Sans',sans-serif;">Accueil</a>
            <a onclick="goToScreen(49)" style="font-size:14px;color:#6B7A8D;cursor:pointer;font-family:'DM Sans',sans-serif;">À propos</a>
            <a onclick="goToScreen(30)" style="font-size:14px;color:#6B7A8D;cursor:pointer;font-family:'DM Sans',sans-serif;">Pharmacies</a>
            <a onclick="goToScreen(49)" style="font-size:14px;color:#6B7A8D;cursor:pointer;font-family:'DM Sans',sans-serif;">Support</a>
            <div style="margin-left:auto;display:flex;gap:10px;">
              <button onclick="goToWebScreen(8)" style="padding:10px 20px;background:transparent;border:1.5px solid #1A6B8A;color:#1A6B8A;border-radius:50px;font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">Connexion</button>
              <button onclick="goToWebScreen(9)" style="padding:10px 20px;background:linear-gradient(135deg,#1A6B8A,#2196B3);color:#fff;border:none;border-radius:50px;font-size:14px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;box-shadow:0 4px 16px rgba(26,107,138,0.3);">Créer un compte</button>
            </div>
          </nav>
          <!-- Hero section -->
          <div style="display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:40px;padding:60px 48px;background:linear-gradient(160deg,#F4F9FC 0%,#E8F4F8 100%);min-height:420px;">
            <div>
              <div style="display:inline-flex;align-items:center;gap:8px;background:#E8F7EE;border:1.5px solid rgba(39,174,96,0.3);border-radius:50px;padding:8px 16px;margin-bottom:24px;">
                <div style="width:8px;height:8px;background:#27AE60;border-radius:50%;animation:blink 1.5s ease-in-out infinite;"></div>
                <span style="font-size:12px;font-weight:700;color:#27AE60;letter-spacing:0.5px;">CERTIFIÉ SÉCURITÉ CLINIQUE · CÔTE D'IVOIRE</span>
              </div>
              <h1 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:40px;font-weight:800;color:#1A2332;line-height:1.2;margin-bottom:16px;">Commandez vos médicaments<br><span style="color:#1A6B8A;">en toute sécurité</span></h1>
              <p style="font-size:16px;color:#6B7A8D;line-height:1.6;margin-bottom:28px;">ILERA AFRICA connecte les patients aux pharmacies agréées. Envoyez votre ordonnance, consultez un pharmacien et recevez vos médicaments à domicile.</p>
              <div style="display:flex;gap:12px;flex-wrap:wrap;">
                <button onclick="goToWebScreen(9)" style="padding:14px 28px;background:linear-gradient(135deg,#1A6B8A,#2196B3);color:#fff;border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 8px 24px rgba(26,107,138,0.35);">Créer mon compte →</button>
                <button onclick="showToast('Vidéo explicative...')" style="padding:14px 24px;background:transparent;color:#1A6B8A;border:2px solid #1A6B8A;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:600;cursor:pointer;">▶ Comment ça marche ?</button>
              </div>
            </div>
            <!-- Phone mockup -->
            <div style="display:flex;justify-content:center;align-items:center;gap:16px;">
              <div style="width:140px;height:280px;background:linear-gradient(180deg,#1A6B8A,#0F3F54);border-radius:32px;display:flex;align-items:center;justify-content:center;box-shadow:0 30px 60px rgba(26,107,138,0.3);transform:rotate(-6deg);">
                <div style="width:120px;height:240px;background:#F4F9FC;border-radius:24px;overflow:hidden;padding:12px;">
                  <div style="background:linear-gradient(135deg,#1A6B8A,#0F3F54);border-radius:14px;padding:12px;margin-bottom:8px;"><div style="font-size:10px;color:rgba(255,255,255,0.8);font-family:'DM Sans',sans-serif;">👋 Bonjour Moussa</div><div style="font-size:8px;color:rgba(255,255,255,0.6);margin-top:2px;font-family:'DM Sans',sans-serif;">Comment vous aider ?</div></div>
                  <div style="background:#27AE60;border-radius:10px;padding:10px;margin-bottom:6px;"><div style="font-size:9px;color:#fff;font-weight:700;font-family:'DM Sans',sans-serif;">📄 Envoyer ordonnance</div></div>
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;"><div style="background:#fff;border-radius:8px;padding:8px;box-shadow:0 1px 4px rgba(0,0,0,0.06);"><div style="font-size:12px;margin-bottom:4px;">🛍️</div><div style="font-size:7px;color:#1A2332;font-family:'DM Sans',sans-serif;font-weight:600;">Commandes</div></div><div style="background:#fff;border-radius:8px;padding:8px;box-shadow:0 1px 4px rgba(0,0,0,0.06);"><div style="font-size:12px;margin-bottom:4px;">💬</div><div style="font-size:7px;color:#1A2332;font-family:'DM Sans',sans-serif;font-weight:600;">Chat</div></div></div>
                </div>
              </div>
              <div style="display:flex;flex-direction:column;gap:12px;">
                <div style="background:#fff;border-radius:16px;padding:14px;box-shadow:0 4px 20px rgba(0,0,0,0.1);width:140px;">
                  <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;"><div style="width:24px;height:24px;background:#E8F7EE;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:12px;">✅</div><div style="font-size:11px;font-weight:700;color:#27AE60;font-family:'Plus Jakarta Sans',sans-serif;">Validée</div></div>
                  <div style="font-size:10px;color:#6B7A8D;font-family:'DM Sans',sans-serif;">Ordonnance #089</div>
                </div>
                <div style="background:#fff;border-radius:16px;padding:14px;box-shadow:0 4px 20px rgba(0,0,0,0.1);width:140px;">
                  <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;"><div style="width:24px;height:24px;background:#E8F4F8;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:12px;">🚚</div><div style="font-size:11px;font-weight:700;color:#1A6B8A;font-family:'Plus Jakarta Sans',sans-serif;">En livraison</div></div>
                  <div style="font-size:10px;color:#6B7A8D;font-family:'DM Sans',sans-serif;">Arrivée 17:30</div>
                </div>
              </div>
            </div>
          </div>
          <!-- Features row -->
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;padding:32px 48px;background:#fff;border-top:1px solid #E2ECF2;border-bottom:1px solid #E2ECF2;">
            <div style="text-align:center;padding:8px;">
              <div style="font-size:36px;margin-bottom:10px;">📄</div>
              <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:#1A2332;margin-bottom:4px;">Téléversement facile</div>
              <div style="font-size:13px;color:#6B7A8D;line-height:1.5;">Photographiez votre ordonnance ou importez un PDF en quelques secondes</div>
            </div>
            <div style="text-align:center;padding:8px;border-left:1px solid #E2ECF2;border-right:1px solid #E2ECF2;">
              <div style="font-size:36px;margin-bottom:10px;">✅</div>
              <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:#1A2332;margin-bottom:4px;">Validation rapide</div>
              <div style="font-size:13px;color:#6B7A8D;line-height:1.5;">Un pharmacien diplômé vérifie chaque ordonnance sous 2 heures ouvrées</div>
            </div>
            <div style="text-align:center;padding:8px;">
              <div style="font-size:36px;margin-bottom:10px;">🚚</div>
              <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:#1A2332;margin-bottom:4px;">Livraison sécurisée</div>
              <div style="font-size:13px;color:#6B7A8D;line-height:1.5;">Recevez vos médicaments à domicile avec suivi GPS en temps réel</div>
            </div>
          </div>
          <!-- Social proof + CTA -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;align-items:stretch;">
            <div style="padding:40px 48px;background:#F4F9FC;">
              <div style="display:flex;gap:8px;margin-bottom:16px;">
                <div style="width:40px;height:40px;background:linear-gradient(135deg,#1A6B8A,#2196B3);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px;font-weight:700;">M</div>
                <div style="width:40px;height:40px;background:linear-gradient(135deg,#27AE60,#2ecc71);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px;font-weight:700;margin-left:-12px;">K</div>
                <div style="width:40px;height:40px;background:linear-gradient(135deg,#F39C12,#f5a623);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px;font-weight:700;margin-left:-12px;">A</div>
                <div style="padding:10px 14px;background:#fff;border-radius:50px;font-size:13px;font-weight:700;color:#1A2332;box-shadow:0 2px 8px rgba(0,0,0,0.08);">+50 000 patients</div>
              </div>
              <h2 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;color:#1A2332;margin-bottom:14px;">La référence e-santé<br>en Afrique de l'Ouest</h2>
              <div style="display:flex;flex-direction:column;gap:10px;">
                <div style="display:flex;align-items:center;gap:10px;"><div style="width:24px;height:24px;background:#E8F7EE;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:12px;">✅</div><span style="font-size:14px;color:#6B7A8D;">Conseil Pharmaceutique Personnalisé</span></div>
                <div style="display:flex;align-items:center;gap:10px;"><div style="width:24px;height:24px;background:#E8F7EE;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:12px;">✅</div><span style="font-size:14px;color:#6B7A8D;">Hébergement de Données de Santé (HDS)</span></div>
                <div style="display:flex;align-items:center;gap:10px;"><div style="width:24px;height:24px;background:#E8F7EE;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:12px;">✅</div><span style="font-size:14px;color:#6B7A8D;">Suivi d'Observance du Traitement</span></div>
              </div>
            </div>
            <div style="padding:40px 48px;background:linear-gradient(135deg,#1A6B8A,#0F3F54);display:flex;flex-direction:column;justify-content:center;align-items:flex-start;">
              <div style="font-size:32px;margin-bottom:12px;">🚀</div>
              <h2 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;color:#fff;margin-bottom:10px;">Prêt à simplifier<br>vos soins ?</h2>
              <p style="font-size:14px;color:rgba(255,255,255,0.7);line-height:1.6;margin-bottom:20px;">Rejoignez 50 000 patients qui font confiance à ILERA AFRICA pour gérer leur santé au quotidien.</p>
              <button onclick="goToWebScreen(9)" style="padding:14px 28px;background:#27AE60;color:#fff;border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,0.2);">Commencer gratuitement →</button>
              <div style="display:flex;gap:16px;margin-top:20px;">
                <div style="text-align:center;"><div style="font-size:22px;font-weight:800;color:#fff;font-family:'Plus Jakarta Sans',sans-serif;">50K+</div><div style="font-size:11px;color:rgba(255,255,255,0.6);">Patients</div></div>
                <div style="width:1px;background:rgba(255,255,255,0.2);"></div>
                <div style="text-align:center;"><div style="font-size:22px;font-weight:800;color:#fff;font-family:'Plus Jakarta Sans',sans-serif;">200+</div><div style="font-size:11px;color:rgba(255,255,255,0.6);">Pharmacies</div></div>
                <div style="width:1px;background:rgba(255,255,255,0.2);"></div>
                <div style="text-align:center;"><div style="font-size:22px;font-weight:800;color:#fff;font-family:'Plus Jakarta Sans',sans-serif;">99.8%</div><div style="font-size:11px;color:rgba(255,255,255,0.6);">Uptime</div></div>
              </div>
            </div>
          </div>
          <!-- Footer -->
          <footer style="background:#0F3F54;padding:24px 48px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">
            <div style="display:flex;align-items:center;gap:10px;">
              <div style="width:28px;height:28px;background:rgba(255,255,255,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;"><svg width="16" height="16" viewBox="0 0 52 52" fill="none"><path d="M26 4C18 4 10 8 8 15C7 22 10 26 14 30C18 34 24 42 26 48C28 42 34 34 38 30C42 26 45 22 44 15C42 8 34 4 26 4Z" fill="white" opacity="0.9"/><rect x="23" y="14" width="6" height="16" rx="3" fill="#1A6B8A"/><rect x="18" y="19" width="16" height="6" rx="3" fill="#1A6B8A"/></svg></div>
              <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:rgba(255,255,255,0.8);">ILERA AFRICA</span>
            </div>
            <div style="display:flex;gap:20px;">
              <a onclick="goToScreen(49)" style="font-size:13px;color:rgba(255,255,255,0.5);cursor:pointer;font-family:'DM Sans',sans-serif;">Support</a>
              <a onclick="showToast('Mentions légales')" style="font-size:13px;color:rgba(255,255,255,0.5);cursor:pointer;font-family:'DM Sans',sans-serif;">Mentions légales</a>
              <a onclick="showToast('Confidentialité')" style="font-size:13px;color:rgba(255,255,255,0.5);cursor:pointer;font-family:'DM Sans',sans-serif;">Confidentialité</a>
            </div>
            <div style="font-size:12px;color:rgba(255,255,255,0.4);font-family:'DM Sans',sans-serif;">© 2024 ILERA AFRICA · Côte d'Ivoire</div>
          </footer>
        </div>
      </div>

<!-- ========================================
     WEB SCREEN 11 — ORDER DETAIL (PATIENT WEB)
======================================== -->
<div class="web-screen" id="wscreen14">
  <div style="display:flex;height:100%;background:#F4F9FC;overflow:hidden;">
    <div style="flex:1;display:flex;flex-direction:column;overflow:hidden;">
      <div style="background:#fff;padding:14px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:1.5px solid #E2ECF2;flex-shrink:0;">
        <div style="display:flex;align-items:center;gap:8px;"><div style="width:30px;height:30px;background:linear-gradient(135deg,#1A6B8A,#2196B3);border-radius:10px;display:flex;align-items:center;justify-content:center;"><svg width="18" height="18" viewBox="0 0 52 52" fill="none"><path d="M26 4C18 4 10 8 8 15C7 22 10 26 14 30C18 34 24 42 26 48C28 42 34 34 38 30C42 26 45 22 44 15C42 8 34 4 26 4Z" fill="white" opacity="0.9"/><rect x="23" y="14" width="6" height="16" rx="3" fill="#1A6B8A"/><rect x="18" y="19" width="16" height="6" rx="3" fill="#1A6B8A"/></svg></div><span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A6B8A;">ILERA AFRICA</span></div>
        <div style="display:flex;align-items:center;gap:20px;">
          <a onclick="goToWebScreen(10)" style="font-size:13px;color:#6B7A8D;cursor:pointer;font-family:'DM Sans',sans-serif;">Tableau de bord</a>
          <a onclick="goToWebScreen(12)" style="font-size:13px;color:#1A6B8A;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:700;">Mes Commandes</a>
          <div style="width:32px;height:32px;background:#E8F4F8;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;cursor:pointer;" onclick="goToScreen(18)">🔔</div>
          <div style="width:32px;height:32px;background:#1A6B8A;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;color:#fff;font-weight:700;">MK</div>
        </div>
      </div>
      <div style="flex:1;overflow-y:auto;padding:24px 32px;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
          <button onclick="goToWebScreen(12)" style="font-size:13px;color:#1A6B8A;background:none;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600;">← Mes Commandes</button>
          <span style="color:#E2ECF2;">/</span><span style="font-size:13px;color:#1A2332;font-weight:600;">#CMD-90214</span>
        </div>
        <div style="display:grid;grid-template-columns:2fr 1fr;gap:20px;">
          <div style="display:flex;flex-direction:column;gap:16px;">
            <!-- Header card -->
            <div style="background:#fff;border-radius:16px;padding:20px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
                <div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:800;color:#1A2332;">#CMD-90214</div><div style="font-size:13px;color:#6B7A8D;margin-top:4px;">14 octobre 2024 · Pharmacie du Plateau</div></div>
                <div style="background:#E8F4F8;border-radius:50px;padding:8px 18px;font-size:13px;font-weight:700;color:#1A6B8A;">🚚 En livraison</div>
              </div>
              <!-- Stepper -->
              <div style="display:flex;align-items:flex-start;">
                <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;"><div style="width:32px;height:32px;background:#27AE60;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;font-weight:700;">✓</div><div style="font-size:11px;font-weight:700;color:#27AE60;">Validation</div><div style="font-size:10px;color:#6B7A8D;">09:30</div></div>
                <div style="flex:1;height:2px;background:#27AE60;margin-top:15px;"></div>
                <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;"><div style="width:32px;height:32px;background:#27AE60;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;font-weight:700;">✓</div><div style="font-size:11px;font-weight:700;color:#27AE60;">Préparation</div><div style="font-size:10px;color:#6B7A8D;">11:00</div></div>
                <div style="flex:1;height:2px;background:#1A6B8A;margin-top:15px;"></div>
                <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;"><div style="width:32px;height:32px;background:#1A6B8A;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;">🚚</div><div style="font-size:11px;font-weight:700;color:#1A6B8A;">Livraison</div><div style="font-size:10px;color:#6B7A8D;">En cours</div></div>
                <div style="flex:1;height:2px;background:#E2ECF2;margin-top:15px;"></div>
                <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;"><div style="width:32px;height:32px;background:#F4F9FC;border-radius:50%;border:2px solid #E2ECF2;display:flex;align-items:center;justify-content:center;font-size:12px;color:#E2ECF2;">○</div><div style="font-size:11px;color:#6B7A8D;">Livré</div><div style="font-size:10px;color:#E2ECF2;">—</div></div>
              </div>
            </div>
            <!-- Map -->
            <div style="background:linear-gradient(135deg,#c5e0ec,#a8ccdb);border-radius:16px;height:160px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;">
              <div style="position:absolute;bottom:14px;left:14px;background:#fff;border-radius:10px;padding:8px 14px;box-shadow:0 2px 8px rgba(0,0,0,0.1);font-size:12px;font-weight:600;color:#1A2332;">📍 DHL Pharma Express · ~2.4 km · ETA 17:30</div>
              <div onclick="showModal('call-modal')" style="position:absolute;bottom:14px;right:14px;background:#1A6B8A;color:#fff;border-radius:10px;padding:8px 14px;font-size:12px;font-weight:700;cursor:pointer;">📞 Appel livreur</div>
            </div>
            <!-- Items table -->
            <div style="background:#fff;border-radius:16px;padding:20px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
              <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;color:#1A2332;margin-bottom:14px;">Médicaments commandés</div>
              <table style="width:100%;border-collapse:collapse;">
                <thead><tr style="border-bottom:1.5px solid #F4F9FC;"><th style="text-align:left;font-size:12px;color:#6B7A8D;padding:8px 0;font-weight:600;">Médicament</th><th style="text-align:center;font-size:12px;color:#6B7A8D;padding:8px;font-weight:600;">Qté</th><th style="text-align:right;font-size:12px;color:#6B7A8D;font-weight:600;">Prix</th></tr></thead>
                <tbody>
                  <tr style="border-bottom:1px solid #F4F9FC;"><td style="padding:10px 0;font-size:13px;color:#1A2332;">Amoxicilline 500mg</td><td style="text-align:center;font-size:13px;color:#6B7A8D;">×2</td><td style="text-align:right;font-size:13px;font-weight:600;color:#1A2332;">4 200 FCFA</td></tr>
                  <tr style="border-bottom:1px solid #F4F9FC;"><td style="padding:10px 0;font-size:13px;color:#1A2332;">Paracétamol 1g</td><td style="text-align:center;font-size:13px;color:#6B7A8D;">×3</td><td style="text-align:right;font-size:13px;font-weight:600;color:#1A2332;">3 600 FCFA</td></tr>
                  <tr><td style="padding:10px 0;font-size:13px;color:#1A2332;">Metformine 850mg</td><td style="text-align:center;font-size:13px;color:#6B7A8D;">×1</td><td style="text-align:right;font-size:13px;font-weight:600;color:#1A2332;">2 800 FCFA</td></tr>
                </tbody>
              </table>
              <div style="border-top:1.5px solid #E2ECF2;margin-top:12px;padding-top:12px;display:flex;flex-direction:column;gap:6px;">
                <div style="display:flex;justify-content:space-between;"><span style="font-size:13px;color:#6B7A8D;">Livraison</span><span style="font-size:13px;color:#6B7A8D;">1 900 FCFA</span></div>
                <div style="display:flex;justify-content:space-between;"><span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:800;color:#1A2332;">Total</span><span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:800;color:#1A6B8A;">12 500 FCFA</span></div>
              </div>
            </div>
          </div>
          <!-- Sidebar panel -->
          <div style="display:flex;flex-direction:column;gap:14px;">
            <div style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
              <div style="font-size:13px;font-weight:700;color:#1A2332;margin-bottom:12px;">Informations livraison</div>
              <div style="display:flex;flex-direction:column;gap:8px;">
                <div style="background:#F4F9FC;border-radius:10px;padding:10px;"><div style="font-size:11px;color:#6B7A8D;">Estimation</div><div style="font-size:13px;font-weight:700;color:#1A2332;">Aujourd'hui, 17:30</div></div>
                <div style="background:#F4F9FC;border-radius:10px;padding:10px;"><div style="font-size:11px;color:#6B7A8D;">Livreur</div><div style="font-size:13px;font-weight:700;color:#1A2332;">DHL Pharma Express</div></div>
                <div style="background:#F4F9FC;border-radius:10px;padding:10px;"><div style="font-size:11px;color:#6B7A8D;">Adresse</div><div style="font-size:12px;font-weight:600;color:#1A2332;">12 Rue des Jardins, Cocody, Abidjan</div></div>
              </div>
            </div>
            <div style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
              <div style="font-size:13px;font-weight:700;color:#1A2332;margin-bottom:12px;">Pharmacien validateur</div>
              <div style="display:flex;align-items:center;gap:10px;padding:10px;background:#F4F9FC;border-radius:10px;">
                <div style="width:36px;height:36px;background:#E8F4F8;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;">👩‍⚕️</div>
                <div><div style="font-size:13px;font-weight:700;color:#1A2332;">Dr. Sophie Lefebvre</div><div style="font-size:11px;color:#6B7A8D;">Pharmacie du Plateau</div></div>
              </div>
              <button onclick="goToWebScreen(11)" style="width:100%;margin-top:10px;padding:10px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">💬 Contacter le pharmacien</button>
            </div>
            <button onclick="showToast('✅ Réception confirmée !')" style="padding:14px;background:linear-gradient(135deg,#27AE60,#2ecc71);color:#fff;border:none;border-radius:12px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 4px 16px rgba(39,174,96,0.3);">✓ Valider la réception</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     WEB SCREEN 12 — PHARMACIST WEB LOGIN
======================================== -->
<div class="web-screen" id="wscreen15">
  <div style="height:100%;background:linear-gradient(135deg,#0F3F54 0%,#1A6B8A 60%,#0F3F54 100%);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;">
    <div style="position:absolute;width:500px;height:500px;border-radius:50%;background:rgba(255,255,255,0.03);top:-150px;right:-100px;"></div>
    <div style="position:absolute;width:300px;height:300px;border-radius:50%;background:rgba(255,255,255,0.03);bottom:-80px;left:-60px;"></div>
    <div style="position:absolute;top:24px;left:32px;display:flex;align-items:center;gap:8px;">
      <div style="width:32px;height:32px;background:rgba(255,255,255,0.15);border-radius:10px;display:flex;align-items:center;justify-content:center;"><svg width="18" height="18" viewBox="0 0 52 52" fill="none"><path d="M26 4C18 4 10 8 8 15C7 22 10 26 14 30C18 34 24 42 26 48C28 42 34 34 38 30C42 26 45 22 44 15C42 8 34 4 26 4Z" fill="white" opacity="0.9"/><rect x="23" y="14" width="6" height="16" rx="3" fill="#1A6B8A"/><rect x="18" y="19" width="16" height="6" rx="3" fill="#1A6B8A"/></svg></div>
      <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:rgba(255,255,255,0.8);">ILERA AFRICA</span>
    </div>
    <div style="background:#fff;border-radius:24px;padding:40px;width:420px;box-shadow:0 32px 80px rgba(0,0,0,0.3);">
      <div style="text-align:center;margin-bottom:28px;">
        <div style="width:56px;height:56px;background:#E8F4F8;border-radius:18px;display:flex;align-items:center;justify-content:center;font-size:26px;margin:0 auto 14px;">⚕️</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#1A2332;">Espace Pharmacien Pro</div>
        <div style="font-size:13px;color:#6B7A8D;margin-top:6px;">Connectez-vous à votre interface professionnelle</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:14px;">
        <div><div style="font-size:11px;font-weight:700;color:#6B7A8D;margin-bottom:6px;letter-spacing:0.5px;">EMAIL PROFESSIONNEL</div><input type="email" value="sophie.lefebvre@pharmacie-plateau.ci" style="width:100%;padding:12px 14px;border:1.5px solid #E2ECF2;border-radius:12px;font-size:14px;font-family:'DM Sans',sans-serif;outline:none;color:#1A2332;box-sizing:border-box;"></div>
        <div><div style="font-size:11px;font-weight:700;color:#6B7A8D;margin-bottom:6px;letter-spacing:0.5px;">MOT DE PASSE</div><input type="password" value="••••••••••" style="width:100%;padding:12px 14px;border:1.5px solid #E2ECF2;border-radius:12px;font-size:14px;font-family:'DM Sans',sans-serif;outline:none;box-sizing:border-box;"></div>
        <div>
          <div style="font-size:11px;font-weight:700;color:#6B7A8D;margin-bottom:6px;letter-spacing:0.5px;">CODE GOOGLE AUTHENTICATOR</div>
          <div style="display:flex;gap:8px;justify-content:center;">
            <input maxlength="1" style="width:46px;height:48px;border:1.5px solid #E2ECF2;border-radius:12px;font-size:20px;font-weight:700;text-align:center;font-family:'DM Sans',sans-serif;outline:none;color:#1A2332;box-sizing:border-box;">
            <input maxlength="1" style="width:46px;height:48px;border:1.5px solid #E2ECF2;border-radius:12px;font-size:20px;font-weight:700;text-align:center;font-family:'DM Sans',sans-serif;outline:none;color:#1A2332;box-sizing:border-box;">
            <input maxlength="1" style="width:46px;height:48px;border:1.5px solid #E2ECF2;border-radius:12px;font-size:20px;font-weight:700;text-align:center;font-family:'DM Sans',sans-serif;outline:none;color:#1A2332;box-sizing:border-box;">
            <input maxlength="1" style="width:46px;height:48px;border:1.5px solid #E2ECF2;border-radius:12px;font-size:20px;font-weight:700;text-align:center;font-family:'DM Sans',sans-serif;outline:none;color:#1A2332;box-sizing:border-box;">
            <input maxlength="1" style="width:46px;height:48px;border:1.5px solid #E2ECF2;border-radius:12px;font-size:20px;font-weight:700;text-align:center;font-family:'DM Sans',sans-serif;outline:none;color:#1A2332;box-sizing:border-box;">
            <input maxlength="1" style="width:46px;height:48px;border:1.5px solid #E2ECF2;border-radius:12px;font-size:20px;font-weight:700;text-align:center;font-family:'DM Sans',sans-serif;outline:none;color:#1A2332;box-sizing:border-box;">
          </div>
        </div>
        <div style="background:#FEF9EE;border-radius:10px;padding:10px 12px;display:flex;gap:8px;align-items:center;border:1px solid rgba(243,156,18,0.2);">
          <span>⚠️</span><span style="font-size:11px;color:#F39C12;font-weight:600;">Accès réservé aux pharmaciens agréés par l'Ordre des Pharmaciens de Côte d'Ivoire</span>
        </div>
        <button onclick="goToWebScreen(16)" style="padding:14px;background:linear-gradient(135deg,#1A6B8A,#2196B3);color:#fff;border:none;border-radius:12px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 8px 24px rgba(26,107,138,0.3);">Se connecter →</button>
        <div style="display:flex;justify-content:center;gap:20px;">
          <div style="display:flex;align-items:center;gap:5px;"><span style="font-size:12px;">✅</span><span style="font-size:11px;color:#6B7A8D;">Chiffrement SSL</span></div>
          <div style="display:flex;align-items:center;gap:5px;"><span style="font-size:12px;">🛡️</span><span style="font-size:11px;color:#6B7A8D;">Conforme HDS</span></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     WEB SCREEN 13 — PHARMACIST DASHBOARD
======================================== -->
<div class="web-screen" id="wscreen30">
  <div style="display:flex;height:100%;overflow:hidden;">
    <div style="flex:1;display:flex;flex-direction:column;overflow:hidden;">
      <div style="background:#fff;padding:14px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:1.5px solid #E2ECF2;flex-shrink:0;">
        <div style="display:flex;align-items:center;gap:8px;"><div style="width:30px;height:30px;background:linear-gradient(135deg,#1A6B8A,#2196B3);border-radius:10px;display:flex;align-items:center;justify-content:center;"><svg width="16" height="16" viewBox="0 0 52 52" fill="none"><path d="M26 4C18 4 10 8 8 15C7 22 10 26 14 30C18 34 24 42 26 48C28 42 34 34 38 30C42 26 45 22 44 15C42 8 34 4 26 4Z" fill="white" opacity="0.9"/><rect x="23" y="14" width="6" height="16" rx="3" fill="#1A6B8A"/><rect x="18" y="19" width="16" height="6" rx="3" fill="#1A6B8A"/></svg></div><span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A6B8A;">ILERA AFRICA</span></div>
        <div style="display:flex;align-items:center;gap:20px;">
          <a onclick="goToWebScreen(29)" style="font-size:13px;color:#1A6B8A;font-weight:700;cursor:pointer;">← Catalogue</a>
          <div style="position:relative;cursor:pointer;" onclick="goToWebScreen(31)"><div style="width:32px;height:32px;background:#E8F4F8;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;">🛒</div><div style="position:absolute;top:-4px;right:-4px;width:16px;height:16px;background:#E74C3C;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;color:#fff;font-weight:700;">3</div></div>
          <div style="width:32px;height:32px;background:#1A6B8A;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;color:#fff;font-weight:700;">MK</div>
        </div>
      </div>
      <div style="flex:1;overflow-y:auto;background:#F4F9FC;padding:32px;">
        <div style="display:grid;grid-template-columns:1fr 380px;gap:24px;max-width:1100px;margin:0 auto;">
          <div style="display:flex;flex-direction:column;gap:16px;">
            <div style="background:#fff;border-radius:16px;padding:24px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
              <div style="display:flex;gap:20px;align-items:flex-start;">
                <div style="width:80px;height:80px;background:#E8F4F8;border-radius:20px;display:flex;align-items:center;justify-content:center;font-size:36px;flex-shrink:0;">💊</div>
                <div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;font-weight:800;color:#1A2332;">Amoxicilline 500mg</div><div style="font-size:14px;color:#6B7A8D;margin-top:4px;">Antibiotique · Pénicillines · Boîte 12 comprimés</div><div style="display:flex;gap:8px;margin-top:10px;"><span style="background:#E8F7EE;color:#27AE60;border-radius:6px;padding:4px 12px;font-size:12px;font-weight:700;">✓ En stock</span><span style="background:#FEF9EE;color:#F39C12;border-radius:6px;padding:4px 12px;font-size:12px;font-weight:700;">Ordonnance requise</span></div></div>
              </div>
            </div>
            <div style="background:#fff;border-radius:16px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
              <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:#1A2332;margin-bottom:14px;">Informations médicament</div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
                <div style="background:#F4F9FC;border-radius:10px;padding:12px;"><div style="font-size:11px;color:#6B7A8D;margin-bottom:2px;">DCI</div><div style="font-size:13px;font-weight:700;color:#1A2332;">Amoxicilline</div></div>
                <div style="background:#F4F9FC;border-radius:10px;padding:12px;"><div style="font-size:11px;color:#6B7A8D;margin-bottom:2px;">Classe thérapeutique</div><div style="font-size:13px;font-weight:700;color:#1A2332;">Pénicillines</div></div>
                <div style="background:#F4F9FC;border-radius:10px;padding:12px;"><div style="font-size:11px;color:#6B7A8D;margin-bottom:2px;">Forme galénique</div><div style="font-size:13px;font-weight:700;color:#1A2332;">Comprimé pelliculé</div></div>
                <div style="background:#F4F9FC;border-radius:10px;padding:12px;"><div style="font-size:11px;color:#6B7A8D;margin-bottom:2px;">Dosage</div><div style="font-size:13px;font-weight:700;color:#1A2332;">500 mg</div></div>
              </div>
            </div>
            <div style="background:#fff;border-radius:16px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
              <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:#1A2332;margin-bottom:10px;">Posologie standard</div>
              <div style="font-size:13px;color:#6B7A8D;line-height:1.7;">1 comprimé toutes les 8 heures (500 mg, 3 fois par jour) pendant 7 à 10 jours selon l'indication. À prendre pendant les repas pour améliorer la tolérance digestive. Ne pas dépasser la dose prescrite.</div>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:14px;">
            <div style="background:#fff;border-radius:16px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
              <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#1A6B8A;margin-bottom:4px;">2 100 FCFA</div>
              <div style="font-size:12px;color:#6B7A8D;margin-bottom:16px;">Boîte de 12 comprimés · Toutes taxes incluses</div>
              <div style="background:#E8F7EE;border-radius:10px;padding:10px;margin-bottom:14px;font-size:12px;color:#27AE60;font-weight:600;">✓ Disponible — Pharmacie du Plateau (0.8 km)</div>
              <div style="display:flex;gap:8px;margin-bottom:10px;">
                <button style="width:36px;height:36px;background:#F4F9FC;border:1.5px solid #E2ECF2;border-radius:8px;cursor:pointer;font-size:16px;font-weight:700;">−</button>
                <div style="flex:1;text-align:center;line-height:36px;font-size:16px;font-weight:700;color:#1A2332;">1</div>
                <button style="width:36px;height:36px;background:#1A6B8A;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:16px;font-weight:700;">+</button>
              </div>
              <button onclick="goToWebScreen(31)" style="width:100%;padding:14px;background:linear-gradient(135deg,#1A6B8A,#2196B3);color:#fff;border:none;border-radius:12px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;margin-bottom:8px;">🛒 Ajouter au panier</button>
              <button onclick="goToWebScreen(13)" style="width:100%;padding:12px;background:#F4F9FC;color:#1A6B8A;border:1.5px solid #E2ECF2;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;cursor:pointer;">📋 Joindre une ordonnance</button>
            </div>
            <div style="background:#FEF9EE;border-radius:14px;padding:14px;border:1px solid rgba(243,156,18,0.2);">
              <div style="font-size:12px;font-weight:700;color:#F39C12;margin-bottom:6px;">⚕️ Conseil pharmacien</div>
              <div style="font-size:12px;color:#6B7A8D;line-height:1.6;">Ce médicament nécessite une ordonnance médicale valide. Un pharmacien validera votre prescription avant expédition.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     WSCREEN 28 — PANIER (WEB)
======================================== -->
<div class="web-screen" id="wscreen31">
  <div style="display:flex;height:100%;overflow:hidden;">
    <div style="flex:1;display:flex;flex-direction:column;overflow:hidden;">
      <div style="background:#fff;padding:14px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:1.5px solid #E2ECF2;flex-shrink:0;">
        <div style="display:flex;align-items:center;gap:8px;"><div style="width:30px;height:30px;background:linear-gradient(135deg,#1A6B8A,#2196B3);border-radius:10px;display:flex;align-items:center;justify-content:center;"><svg width="16" height="16" viewBox="0 0 52 52" fill="none"><path d="M26 4C18 4 10 8 8 15C7 22 10 26 14 30C18 34 24 42 26 48C28 42 34 34 38 30C42 26 45 22 44 15C42 8 34 4 26 4Z" fill="white" opacity="0.9"/><rect x="23" y="14" width="6" height="16" rx="3" fill="#1A6B8A"/><rect x="18" y="19" width="16" height="6" rx="3" fill="#1A6B8A"/></svg></div><span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A6B8A;">ILERA AFRICA</span></div>
        <div style="display:flex;align-items:center;gap:16px;"><a onclick="goToWebScreen(29)" style="font-size:13px;color:#6B7A8D;cursor:pointer;">← Continuer les achats</a><div style="width:32px;height:32px;background:#1A6B8A;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;color:#fff;font-weight:700;">MK</div></div>
      </div>
      <div style="flex:1;overflow-y:auto;background:#F4F9FC;padding:32px;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#1A2332;margin-bottom:20px;">🛒 Mon panier <span style="font-size:15px;color:#6B7A8D;font-weight:500;">(3 articles)</span></div>
        <div style="display:grid;grid-template-columns:1fr 340px;gap:20px;">
          <div style="display:flex;flex-direction:column;gap:12px;">
            <div style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.06);display:flex;align-items:center;gap:16px;">
              <div style="width:56px;height:56px;background:#E8F4F8;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:26px;flex-shrink:0;">💊</div>
              <div style="flex:1;"><div style="font-size:15px;font-weight:700;color:#1A2332;">Amoxicilline 500mg</div><div style="font-size:12px;color:#6B7A8D;margin-top:2px;">Boîte 12cp · Pharmacie du Plateau</div><div style="font-size:11px;color:#F39C12;margin-top:4px;">⚠ Ordonnance requise</div></div>
              <div style="display:flex;align-items:center;gap:10px;"><button onclick="decrementStock(this)" style="width:32px;height:32px;background:#F4F9FC;border:1.5px solid #E2ECF2;border-radius:8px;cursor:pointer;font-size:16px;font-weight:700;">−</button><span style="font-size:16px;font-weight:700;color:#1A2332;min-width:24px;text-align:center;">2</span><button onclick="incrementStock(this)" style="width:32px;height:32px;background:#1A6B8A;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:16px;font-weight:700;">+</button></div>
              <div style="text-align:right;min-width:80px;"><div style="font-size:16px;font-weight:800;color:#1A2332;">4 200 FCFA</div><button onclick="closeModal();showToast('🗑️ Supprimé')" style="font-size:11px;color:#E74C3C;background:none;border:none;cursor:pointer;margin-top:4px;">Supprimer</button></div>
            </div>
            <div style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.06);display:flex;align-items:center;gap:16px;">
              <div style="width:56px;height:56px;background:#E8F7EE;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:26px;flex-shrink:0;">💊</div>
              <div style="flex:1;"><div style="font-size:15px;font-weight:700;color:#1A2332;">Metformine 850mg</div><div style="font-size:12px;color:#6B7A8D;margin-top:2px;">Boîte 30cp · Pharmacie du Plateau</div></div>
              <div style="display:flex;align-items:center;gap:10px;"><button onclick="decrementStock(this)" style="width:32px;height:32px;background:#F4F9FC;border:1.5px solid #E2ECF2;border-radius:8px;cursor:pointer;font-size:16px;font-weight:700;">−</button><span style="font-size:16px;font-weight:700;color:#1A2332;min-width:24px;text-align:center;">1</span><button onclick="incrementStock(this)" style="width:32px;height:32px;background:#1A6B8A;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:16px;font-weight:700;">+</button></div>
              <div style="text-align:right;min-width:80px;"><div style="font-size:16px;font-weight:800;color:#1A2332;">2 800 FCFA</div><button onclick="closeModal();showToast('🗑️ Supprimé')" style="font-size:11px;color:#E74C3C;background:none;border:none;cursor:pointer;margin-top:4px;">Supprimer</button></div>
            </div>
            <div style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.06);display:flex;align-items:center;gap:16px;">
              <div style="width:56px;height:56px;background:#FEF9EE;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:26px;flex-shrink:0;">🩺</div>
              <div style="flex:1;"><div style="font-size:15px;font-weight:700;color:#1A2332;">Ibuprofène 400mg</div><div style="font-size:12px;color:#6B7A8D;margin-top:2px;">Boîte 20cp · Pharmacie du Plateau</div></div>
              <div style="display:flex;align-items:center;gap:10px;"><button onclick="decrementStock(this)" style="width:32px;height:32px;background:#F4F9FC;border:1.5px solid #E2ECF2;border-radius:8px;cursor:pointer;font-size:16px;font-weight:700;">−</button><span style="font-size:16px;font-weight:700;color:#1A2332;min-width:24px;text-align:center;">1</span><button onclick="incrementStock(this)" style="width:32px;height:32px;background:#1A6B8A;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:16px;font-weight:700;">+</button></div>
              <div style="text-align:right;min-width:80px;"><div style="font-size:16px;font-weight:800;color:#1A2332;">1 800 FCFA</div><button onclick="closeModal();showToast('🗑️ Supprimé')" style="font-size:11px;color:#E74C3C;background:none;border:none;cursor:pointer;margin-top:4px;">Supprimer</button></div>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <div style="background:#fff;border-radius:16px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
              <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:#1A2332;margin-bottom:14px;">Récapitulatif</div>
              <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:14px;">
                <div style="display:flex;justify-content:space-between;font-size:13px;"><span style="color:#6B7A8D;">Sous-total (4 articles)</span><span style="color:#1A2332;font-weight:600;">8 800 FCFA</span></div>
                <div style="display:flex;justify-content:space-between;font-size:13px;"><span style="color:#6B7A8D;">Livraison</span><span style="color:#1A2332;font-weight:600;">1 500 FCFA</span></div>
                <div style="display:flex;justify-content:space-between;font-size:13px;"><span style="color:#27AE60;font-weight:600;">PharmaPoints (−200 pts)</span><span style="color:#27AE60;font-weight:600;">−1 000 FCFA</span></div>
              </div>
              <div style="border-top:1.5px solid #E2ECF2;padding-top:12px;display:flex;justify-content:space-between;margin-bottom:16px;"><span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:17px;font-weight:800;color:#1A2332;">Total</span><span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:17px;font-weight:800;color:#1A6B8A;">9 300 FCFA</span></div>
              <button onclick="goToWebScreen(15)" style="width:100%;padding:14px;background:linear-gradient(135deg,#27AE60,#2ecc71);color:#fff;border:none;border-radius:12px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 4px 16px rgba(39,174,96,0.3);">Passer commande →</button>
            </div>
            <div style="background:#E8F7EE;border-radius:14px;padding:14px;border:1px solid rgba(39,174,96,0.2);">
              <div style="font-size:12px;font-weight:700;color:#27AE60;margin-bottom:4px;">🎁 +93 PharmaPoints gagnés</div>
              <div style="font-size:11px;color:#6B7A8D;">= 465 FCFA de réduction sur votre prochain achat</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     WSCREEN 29 — PHARMACIES (WEB)
======================================== -->
<div class="web-screen" id="wscreen32">
  <div style="display:flex;height:100%;overflow:hidden;">
    <div style="flex:1;display:flex;flex-direction:column;overflow:hidden;">
      <div style="background:#fff;padding:14px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:1.5px solid #E2ECF2;flex-shrink:0;">
        <div style="display:flex;align-items:center;gap:8px;"><div style="width:30px;height:30px;background:linear-gradient(135deg,#1A6B8A,#2196B3);border-radius:10px;display:flex;align-items:center;justify-content:center;"><svg width="16" height="16" viewBox="0 0 52 52" fill="none"><path d="M26 4C18 4 10 8 8 15C7 22 10 26 14 30C18 34 24 42 26 48C28 42 34 34 38 30C42 26 45 22 44 15C42 8 34 4 26 4Z" fill="white" opacity="0.9"/><rect x="23" y="14" width="6" height="16" rx="3" fill="#1A6B8A"/><rect x="18" y="19" width="16" height="6" rx="3" fill="#1A6B8A"/></svg></div><span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A6B8A;">ILERA AFRICA</span></div>
        <a onclick="goToWebScreen(10)" style="font-size:13px;color:#1A6B8A;cursor:pointer;font-weight:700;">← Accueil</a>
      </div>
      <div style="flex:1;overflow:hidden;display:flex;">
        <div style="flex:1;background:linear-gradient(135deg,#c5dfe8,#8fbdce);display:flex;align-items:center;justify-content:center;position:relative;">
          <div style="font-size:60px;opacity:0.4;">🗺</div>
          <div style="position:absolute;top:16px;left:16px;background:#fff;border-radius:12px;padding:10px 16px;box-shadow:0 4px 16px rgba(0,0,0,0.1);"><input placeholder="Rechercher..." style="border:none;outline:none;font-size:13px;font-family:'DM Sans',sans-serif;width:200px;"></div>
          <!-- Map pins -->
          <div style="position:absolute;top:35%;left:45%;background:#1A6B8A;color:#fff;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:14px;cursor:pointer;box-shadow:0 4px 12px rgba(26,107,138,0.4);" onclick="goToWebScreen(33)">⚕️</div>
          <div style="position:absolute;top:55%;left:60%;background:#27AE60;color:#fff;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:14px;cursor:pointer;box-shadow:0 4px 12px rgba(39,174,96,0.4);" onclick="goToWebScreen(33)">⚕️</div>
          <div style="position:absolute;top:28%;left:70%;background:#F39C12;color:#fff;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:14px;cursor:pointer;box-shadow:0 4px 12px rgba(243,156,18,0.4);" onclick="goToWebScreen(33)">⚕️</div>
        </div>
        <div style="width:340px;background:#F4F9FC;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;flex-shrink:0;">
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:#1A2332;">3 pharmacies proches</div>
          <div onclick="goToWebScreen(33)" style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);cursor:pointer;border-left:3px solid #1A6B8A;">
            <div style="font-size:14px;font-weight:700;color:#1A2332;">Pharmacie du Plateau</div>
            <div style="font-size:12px;color:#6B7A8D;margin-top:2px;">0.8 km · Av. Botreau-Roussel</div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;"><span style="font-size:12px;font-weight:700;color:#27AE60;">● Ouvert</span><span style="font-size:11px;color:#6B7A8D;">⭐ 4.8 · 128 avis</span></div>
          </div>
          <div onclick="goToWebScreen(33)" style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);cursor:pointer;">
            <div style="font-size:14px;font-weight:700;color:#1A2332;">Pharma Express CI</div>
            <div style="font-size:12px;color:#6B7A8D;margin-top:2px;">1.4 km · Bd de Marseille</div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;"><span style="font-size:12px;font-weight:700;color:#27AE60;">● 24h/24</span><span style="font-size:11px;color:#6B7A8D;">⭐ 4.5 · 87 avis</span></div>
          </div>
          <div onclick="goToWebScreen(33)" style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06);cursor:pointer;">
            <div style="font-size:14px;font-weight:700;color:#1A2332;">Pharma Nord CI</div>
            <div style="font-size:12px;color:#6B7A8D;margin-top:2px;">2.1 km · Bd de la Paix</div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;"><span style="font-size:12px;font-weight:700;color:#E74C3C;">● Fermé</span><span style="font-size:11px;color:#6B7A8D;">⭐ 4.2 · 34 avis</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     WSCREEN 30 — DÉTAIL PHARMACIE (WEB)
======================================== -->
<div class="web-screen" id="wscreen33">
  <div style="display:flex;height:100%;overflow:hidden;">
    <div style="flex:1;display:flex;flex-direction:column;overflow:hidden;">
      <div style="background:#fff;padding:14px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:1.5px solid #E2ECF2;flex-shrink:0;">
        <a onclick="goToWebScreen(32)" style="font-size:13px;color:#1A6B8A;cursor:pointer;font-weight:700;font-family:'DM Sans',sans-serif;">← Pharmacies</a>
        <div style="width:32px;height:32px;background:#1A6B8A;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;color:#fff;font-weight:700;">MK</div>
      </div>
      <div style="flex:1;overflow-y:auto;background:#F4F9FC;padding:32px;">
        <div style="max-width:900px;margin:0 auto;display:flex;flex-direction:column;gap:20px;">
          <div style="background:linear-gradient(135deg,#0F3F54,#1A6B8A);border-radius:20px;padding:28px;display:flex;align-items:center;gap:20px;">
            <div style="width:72px;height:72px;background:rgba(255,255,255,0.2);border-radius:18px;display:flex;align-items:center;justify-content:center;font-size:34px;">⚕️</div>
            <div style="flex:1;"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;color:#fff;">Pharmacie du Plateau</div><div style="font-size:14px;color:rgba(255,255,255,0.7);margin-top:4px;">12 Av. Botreau-Roussel, Plateau, Abidjan</div><div style="display:flex;gap:8px;margin-top:10px;"><span style="background:rgba(39,174,96,0.25);color:#4ADE80;border-radius:50px;padding:4px 14px;font-size:12px;font-weight:700;">● Ouvert jusqu'à 20h</span><span style="background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.8);border-radius:50px;padding:4px 14px;font-size:12px;">⭐ 4.8 · 128 avis</span><span style="background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.8);border-radius:50px;padding:4px 14px;font-size:12px;">📍 0.8 km</span></div></div>
            <div style="display:flex;gap:8px;"><button onclick="goToWebScreen(29)" style="padding:12px 20px;background:rgba(255,255,255,0.15);color:#fff;border:1px solid rgba(255,255,255,0.3);border-radius:10px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;cursor:pointer;">🛒 Commander</button><button onclick="goToWebScreen(11)" style="padding:12px 20px;background:#fff;color:#1A6B8A;border:none;border-radius:10px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;cursor:pointer;">💬 Contacter</button></div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
            <div style="background:#fff;border-radius:16px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
              <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:#1A2332;margin-bottom:14px;">Informations pratiques</div>
              <div style="display:flex;flex-direction:column;gap:10px;"><div style="display:flex;gap:12px;align-items:center;"><span style="font-size:18px;">📞</span><div><div style="font-size:11px;color:#6B7A8D;">Téléphone</div><div style="font-size:13px;font-weight:700;color:#1A6B8A;">+225 27 22 44 00 00</div></div></div><div style="display:flex;gap:12px;align-items:center;"><span style="font-size:18px;">🕐</span><div><div style="font-size:11px;color:#6B7A8D;">Horaires</div><div style="font-size:13px;font-weight:600;color:#1A2332;">Lun–Ven 8h–20h · Sam 9h–17h</div></div></div><div style="display:flex;gap:12px;align-items:center;"><span style="font-size:18px;">🚚</span><div><div style="font-size:11px;color:#6B7A8D;">Livraison</div><div style="font-size:13px;font-weight:600;color:#1A2332;">2–4h à Abidjan · 1 500 FCFA</div></div></div></div>
            </div>
            <div style="background:#fff;border-radius:16px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
              <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:#1A2332;margin-bottom:14px;">Équipe pharmaciens</div>
              <div style="display:flex;flex-direction:column;gap:12px;"><div style="display:flex;align-items:center;gap:12px;"><div style="width:44px;height:44px;background:#E8F4F8;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;">👩‍⚕️</div><div><div style="font-size:13px;font-weight:700;color:#1A2332;">Dr. Sophie Lefebvre</div><div style="font-size:11px;color:#6B7A8D;">Pharmacien chef · Ordre CI #4521</div></div><button onclick="goToWebScreen(11)" style="margin-left:auto;padding:6px 12px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Contacter</button></div><div style="display:flex;align-items:center;gap:12px;"><div style="width:44px;height:44px;background:#E8F4F8;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;">👨‍⚕️</div><div><div style="font-size:13px;font-weight:700;color:#1A2332;">Jean-Marc Diabaté</div><div style="font-size:11px;color:#6B7A8D;">Pharmacien adjoint</div></div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     WSCREEN 31 — SUIVI LIVRAISON WEB
======================================== -->
<div class="web-screen" id="wscreen34">
  <div style="display:flex;height:100%;overflow:hidden;flex-direction:column;">
    <div style="background:#fff;padding:14px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:1.5px solid #E2ECF2;flex-shrink:0;">
      <a onclick="goToWebScreen(14)" style="font-size:13px;color:#1A6B8A;cursor:pointer;font-weight:700;">← Détail commande</a>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">Suivi livraison — #CMD-90214</div>
      <div style="width:32px;height:32px;background:#1A6B8A;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;color:#fff;font-weight:700;">MK</div>
    </div>
    <div style="flex:1;overflow:hidden;display:flex;">
      <div style="flex:1;background:linear-gradient(135deg,#c5dfe8,#8fbdce);display:flex;align-items:center;justify-content:center;position:relative;">
        <div style="font-size:60px;opacity:0.4;">🚚</div>
        <div style="position:absolute;bottom:20px;left:20px;right:20px;background:#fff;border-radius:14px;padding:14px 18px;box-shadow:0 4px 16px rgba(0,0,0,0.1);display:flex;justify-content:space-between;align-items:center;">
          <div><div style="font-size:11px;color:#6B7A8D;">Livreur</div><div style="font-size:14px;font-weight:700;color:#1A2332;">DHL Pharma Express · ~2.4 km</div></div>
          <button onclick="showModal('call-modal')" style="padding:10px 20px;background:#1A6B8A;color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📞 Appeler</button>
        </div>
      </div>
      <div style="width:360px;background:#F4F9FC;overflow-y:auto;padding:20px;flex-shrink:0;display:flex;flex-direction:column;gap:14px;">
        <div style="background:#1A6B8A;border-radius:14px;padding:16px;text-align:center;color:#fff;">
          <div style="font-size:12px;opacity:0.8;">Livraison estimée</div>
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;margin-top:4px;">Aujourd'hui, 17:30</div>
        </div>
        <div style="background:#fff;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          <div style="font-size:13px;font-weight:700;color:#1A2332;margin-bottom:12px;">Étapes de livraison</div>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <div style="display:flex;gap:10px;"><div style="width:10px;height:10px;background:#27AE60;border-radius:50%;flex-shrink:0;margin-top:3px;"></div><div><div style="font-size:13px;font-weight:700;color:#27AE60;">Ordonnance validée</div><div style="font-size:11px;color:#6B7A8D;">09:30 — Dr. Lefebvre</div></div></div>
            <div style="display:flex;gap:10px;"><div style="width:10px;height:10px;background:#27AE60;border-radius:50%;flex-shrink:0;margin-top:3px;"></div><div><div style="font-size:13px;font-weight:700;color:#27AE60;">Préparation terminée</div><div style="font-size:11px;color:#6B7A8D;">11:00 — Pharmacie du Plateau</div></div></div>
            <div style="display:flex;gap:10px;"><div style="width:10px;height:10px;background:#1A6B8A;border-radius:50%;flex-shrink:0;margin-top:3px;border:2px solid #1A6B8A;animation:pulse 1.5s infinite;"></div><div><div style="font-size:13px;font-weight:700;color:#1A6B8A;">En livraison</div><div style="font-size:11px;color:#6B7A8D;">Maintenant · DHL Express</div></div></div>
            <div style="display:flex;gap:10px;"><div style="width:10px;height:10px;background:#E2ECF2;border-radius:50%;flex-shrink:0;margin-top:3px;"></div><div><div style="font-size:13px;color:#6B7A8D;">Livraison confirmée</div></div></div>
          </div>
        </div>
        <button onclick="showToast('✅ Réception confirmée !')" style="width:100%;padding:14px;background:linear-gradient(135deg,#27AE60,#2ecc71);color:#fff;border:none;border-radius:12px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">✅ Confirmer réception</button>
      </div>
    </div>
  </div>
</div>

<!-- ========================================
     WSCREEN 32-45 — Pages simples redirigées
     (contenu léger car ces flux sont principalement mobile)
======================================== -->

<!-- WSCREEN 32 — Ordonnances archivées -->
<div class="web-screen" id="wscreen35">
  <div style="display:flex;height:100%;overflow:hidden;flex-direction:column;">
    <div style="background:#fff;padding:14px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:1.5px solid #E2ECF2;flex-shrink:0;">
      <a onclick="goToWebScreen(13)" style="font-size:13px;color:#1A6B8A;cursor:pointer;font-weight:700;">← Ordonnances</a>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">Mes Ordonnances archivées</div>
      <div style="width:32px;height:32px;background:#1A6B8A;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;color:#fff;font-weight:700;">MK</div>
    </div>
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;padding:32px;">
      <div style="max-width:800px;margin:0 auto;display:flex;flex-direction:column;gap:12px;">
        <div style="background:#fff;border-radius:14px;padding:16px 20px;box-shadow:0 2px 8px rgba(0,0,0,0.06);display:flex;justify-content:space-between;align-items:center;"><div><div style="font-size:15px;font-weight:700;color:#1A2332;">#ORD-089 · 14 oct. 2024</div><div style="font-size:12px;color:#6B7A8D;margin-top:2px;">Amoxicilline, Paracétamol · Dr. Lefebvre</div></div><div style="display:flex;gap:8px;align-items:center;"><span style="background:#FEF9EE;color:#F39C12;border-radius:50px;padding:4px 12px;font-size:11px;font-weight:700;">⏳ En attente</span><button onclick="goToWebScreen(13)" style="padding:7px 14px;background:#1A6B8A;color:#fff;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Voir →</button></div></div>
        <div style="background:#fff;border-radius:14px;padding:16px 20px;box-shadow:0 2px 8px rgba(0,0,0,0.06);display:flex;justify-content:space-between;align-items:center;"><div><div style="font-size:15px;font-weight:700;color:#1A2332;">#ORD-071 · 2 oct. 2024</div><div style="font-size:12px;color:#6B7A8D;margin-top:2px;">Metformine 850mg · Dr. Diabaté</div></div><div style="display:flex;gap:8px;align-items:center;"><span style="background:#E8F7EE;color:#27AE60;border-radius:50px;padding:4px 12px;font-size:11px;font-weight:700;">✓ Validée</span><button onclick="showToast('Voir QR')" style="padding:7px 14px;background:#E8F4F8;color:#1A6B8A;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">QR Code</button></div></div>
        <div style="background:#fff;border-radius:14px;padding:16px 20px;box-shadow:0 2px 8px rgba(0,0,0,0.06);display:flex;justify-content:space-between;align-items:center;"><div><div style="font-size:15px;font-weight:700;color:#1A2332;">#ORD-055 · 18 sept. 2024</div><div style="font-size:12px;color:#6B7A8D;margin-top:2px;">Ibuprofène 400mg · Dr. Lefebvre</div></div><div style="display:flex;gap:8px;align-items:center;"><span style="background:#FEF0EE;color:#E74C3C;border-radius:50px;padding:4px 12px;font-size:11px;font-weight:700;">✕ Rejetée</span><button onclick="showToast('Motif rejet: signature illisible')" style="padding:7px 14px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Motif</button></div></div>
      </div>
    </div>
  </div>
</div>

<!-- WSCREEN 33 — Rappels web -->
<div class="web-screen" id="wscreen36">
  <div style="display:flex;height:100%;overflow:hidden;flex-direction:column;">
    <div style="background:#fff;padding:14px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:1.5px solid #E2ECF2;flex-shrink:0;">
      <a onclick="goToWebScreen(10)" style="font-size:13px;color:#1A6B8A;cursor:pointer;font-weight:700;">← Accueil</a>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">🔔 Rappels & Alertes médicament</div>
      <button onclick="showToast('Nouveau rappel')" style="padding:8px 16px;background:#1A6B8A;color:#fff;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">+ Nouveau rappel</button>
    </div>
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;padding:32px;">
      <div style="max-width:700px;margin:0 auto;display:flex;flex-direction:column;gap:14px;">
        <div style="background:#FEF0EE;border-radius:16px;padding:20px;border:1.5px solid rgba(231,76,60,0.15);">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;"><div><div style="font-size:15px;font-weight:700;color:#E74C3C;">⚠️ Renouvellement urgent</div><div style="font-size:13px;font-weight:700;color:#1A2332;margin-top:4px;">Metformine 850mg</div><div style="font-size:12px;color:#6B7A8D;margin-top:2px;">Stock restant: 3 comprimés (≈ 2 jours)</div></div><button onclick="goToWebScreen(29)" style="padding:10px 18px;background:#E74C3C;color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">Commander →</button></div>
        </div>
        <div style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.06);display:flex;justify-content:space-between;align-items:center;"><div><div style="font-size:15px;font-weight:700;color:#1A2332;">💊 Amoxicilline 500mg</div><div style="font-size:12px;color:#6B7A8D;margin-top:4px;">Prise : 08h00 — 1 comprimé</div><div style="background:#E8F7EE;display:inline-block;border-radius:6px;padding:2px 10px;font-size:11px;font-weight:700;color:#27AE60;margin-top:6px;">✓ Pris ce matin</div></div><button onclick="showToast('Modifier rappel')" style="padding:8px 14px;background:#F4F9FC;color:#6B7A8D;border:1.5px solid #E2ECF2;border-radius:8px;font-size:12px;cursor:pointer;font-family:'DM Sans',sans-serif;">✏️ Modifier</button></div>
        <div style="background:#fff;border-radius:16px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.06);display:flex;justify-content:space-between;align-items:center;"><div><div style="font-size:15px;font-weight:700;color:#1A2332;">💊 Amoxicilline 500mg</div><div style="font-size:12px;color:#6B7A8D;margin-top:4px;">Prise : 16h00 — 1 comprimé</div><div style="background:#FEF9EE;display:inline-block;border-radius:6px;padding:2px 10px;font-size:11px;font-weight:700;color:#F39C12;margin-top:6px;">⏳ À venir</div></div><button onclick="showToast('Modifier rappel')" style="padding:8px 14px;background:#F4F9FC;color:#6B7A8D;border:1.5px solid #E2ECF2;border-radius:8px;font-size:12px;cursor:pointer;font-family:'DM Sans',sans-serif;">✏️ Modifier</button></div>
      </div>
    </div>
  </div>
</div>

<!-- WSCREEN 34 — Paramètres web -->
<div class="web-screen" id="wscreen37">
  <div style="display:flex;height:100%;overflow:hidden;flex-direction:column;">
    <div style="background:#fff;padding:14px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:1.5px solid #E2ECF2;flex-shrink:0;">
      <a onclick="goToWebScreen(10)" style="font-size:13px;color:#1A6B8A;cursor:pointer;font-weight:700;">← Accueil</a>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">⚙️ Paramètres du compte</div>
      <div style="width:32px;height:32px;background:#1A6B8A;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;color:#fff;font-weight:700;">MK</div>
    </div>
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;padding:32px;">
      <div style="max-width:700px;margin:0 auto;display:flex;flex-direction:column;gap:16px;">
        <div style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          <div style="padding:16px 20px;border-bottom:1px solid #F4F9FC;display:flex;justify-content:space-between;align-items:center;cursor:pointer;" onclick="showModal('edit-field-modal')"><span style="font-size:14px;font-weight:600;color:#1A2332;">👤 Informations personnelles</span><span style="color:#6B7A8D;font-size:13px;">Moussa Koné → ></span></div>
          <div style="padding:16px 20px;border-bottom:1px solid #F4F9FC;display:flex;justify-content:space-between;align-items:center;cursor:pointer;" onclick="showModal('edit-field-modal')"><span style="font-size:14px;font-weight:600;color:#1A2332;">🔒 Sécurité &amp; Connexion</span><span style="color:#6B7A8D;">→</span></div>
          <div style="padding:16px 20px;border-bottom:1px solid #F4F9FC;display:flex;justify-content:space-between;align-items:center;cursor:pointer;" onclick="showToast('Adresses')"><span style="font-size:14px;font-weight:600;color:#1A2332;">📍 Adresses de livraison</span><span style="color:#6B7A8D;">→</span></div>
          <div style="padding:16px 20px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;" onclick="showToast('Paiement')"><span style="font-size:14px;font-weight:600;color:#1A2332;">💳 Moyens de paiement</span><span style="color:#6B7A8D;">→</span></div>
        </div>
        <button onclick="goToWebScreen(1)" style="padding:14px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">Se déconnecter</button>
      </div>
    </div>
  </div>
</div>

<!-- WSCREEN 35 — Upload ordonnance web -->
<div class="web-screen" id="wscreen38">
  <div style="display:flex;height:100%;overflow:hidden;flex-direction:column;">
    <div style="background:#fff;padding:14px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:1.5px solid #E2ECF2;flex-shrink:0;">
      <a onclick="goToWebScreen(13)" style="font-size:13px;color:#1A6B8A;cursor:pointer;font-weight:700;">← Ordonnances</a>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">📋 Soumettre une ordonnance</div>
      <div style="width:8px;"></div>
    </div>
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;padding:32px;display:flex;align-items:flex-start;justify-content:center;">
      <div style="width:580px;display:flex;flex-direction:column;gap:16px;">
        <div onclick="showToast('Choisir fichier...')" style="border:2px dashed #1A6B8A;border-radius:20px;padding:48px;text-align:center;background:#E8F4F8;cursor:pointer;">
          <div style="font-size:52px;margin-bottom:16px;">📄</div>
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:700;color:#1A6B8A;margin-bottom:8px;">Glisser-déposer votre ordonnance</div>
          <div style="font-size:13px;color:#6B7A8D;">ou cliquez pour parcourir · JPG, PNG, PDF · Max 10 Mo</div>
        </div>
        <div style="background:#FEF9EE;border-radius:14px;padding:14px 18px;border:1px solid rgba(243,156,18,0.2);"><div style="font-size:13px;font-weight:700;color:#F39C12;margin-bottom:6px;">⚠️ Exigences obligatoires</div><div style="font-size:12px;color:#6B7A8D;line-height:1.7;">Photo nette et lisible · Signature du médecin visible · Date de moins de 3 mois · Cachet du praticien requis</div></div>
        <button onclick="goToWebScreen(13)" style="padding:16px;background:linear-gradient(135deg,#1A6B8A,#2196B3);color:#fff;border:none;border-radius:14px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 8px 24px rgba(26,107,138,0.3);">Soumettre l'ordonnance →</button>
      </div>
    </div>
  </div>
</div>

<!-- WSCREEN 36 — Historique paiements web -->
<div class="web-screen" id="wscreen39">
  <div style="display:flex;height:100%;overflow:hidden;flex-direction:column;">
    <div style="background:#fff;padding:14px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:1.5px solid #E2ECF2;flex-shrink:0;">
      <a onclick="goToWebScreen(10)" style="font-size:13px;color:#1A6B8A;cursor:pointer;font-weight:700;">← Accueil</a>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">💳 Historique des paiements</div>
      <button onclick="showToast('Export CSV')" style="padding:8px 14px;background:#E8F4F8;color:#1A6B8A;border:1.5px solid #E2ECF2;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">📥 Exporter</button>
    </div>
    <div style="flex:1;overflow-y:auto;background:#F4F9FC;padding:32px;">
      <div style="max-width:800px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <table style="width:100%;border-collapse:collapse;">
          <thead style="background:#F4F9FC;"><tr><th style="text-align:left;padding:14px 20px;font-size:12px;color:#6B7A8D;font-weight:600;">Commande</th><th style="text-align:left;padding:14px 20px;font-size:12px;color:#6B7A8D;font-weight:600;">Date</th><th style="text-align:left;padding:14px 20px;font-size:12px;color:#6B7A8D;font-weight:600;">Moyen</th><th style="text-align:right;padding:14px 20px;font-size:12px;color:#6B7A8D;font-weight:600;">Montant</th><th style="text-align:left;padding:14px 20px;font-size:12px;color:#6B7A8D;font-weight:600;">Statut</th></tr></thead>
          <tbody>
            <tr style="border-top:1px solid #F4F9FC;"><td style="padding:14px 20px;font-size:13px;font-weight:700;color:#1A6B8A;">#CMD-90214</td><td style="padding:14px 20px;font-size:13px;color:#6B7A8D;">14 oct. 2024</td><td style="padding:14px 20px;"><div style="display:flex;align-items:center;gap:6px;"><span style="font-size:16px;">🔶</span><span style="font-size:13px;color:#1A2332;">MTN Money</span></div></td><td style="padding:14px 20px;text-align:right;font-size:14px;font-weight:800;color:#1A2332;">12 500 FCFA</td><td style="padding:14px 20px;"><span style="background:#E8F7EE;color:#27AE60;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700;">Payé ✓</span></td></tr>
            <tr style="border-top:1px solid #F4F9FC;"><td style="padding:14px 20px;font-size:13px;font-weight:700;color:#1A6B8A;">#CMD-90197</td><td style="padding:14px 20px;font-size:13px;color:#6B7A8D;">2 oct. 2024</td><td style="padding:14px 20px;"><div style="display:flex;align-items:center;gap:6px;"><span style="font-size:16px;">🔷</span><span style="font-size:13px;color:#1A2332;">Orange Money</span></div></td><td style="padding:14px 20px;text-align:right;font-size:14px;font-weight:800;color:#1A2332;">8 700 FCFA</td><td style="padding:14px 20px;"><span style="background:#E8F7EE;color:#27AE60;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700;">Payé ✓</span></td></tr>
            <tr style="border-top:1px solid #F4F9FC;"><td style="padding:14px 20px;font-size:13px;font-weight:700;color:#6B7A8D;">#CMD-90145</td><td style="padding:14px 20px;font-size:13px;color:#6B7A8D;">18 sept. 2024</td><td style="padding:14px 20px;"><div style="display:flex;align-items:center;gap:6px;"><span style="font-size:16px;">💳</span><span style="font-size:13px;color:#1A2332;">Carte bancaire</span></div></td><td style="padding:14px 20px;text-align:right;font-size:14px;font-weight:800;color:#1A2332;">5 200 FCFA</td><td style="padding:14px 20px;"><span style="background:#FEF0EE;color:#E74C3C;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700;">Remboursé</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

<!-- WSCREEN 37 à 45 — Écrans secondaires compacts -->
<div class="web-screen" id="wscreen40"><div style="height:100%;display:flex;flex-direction:column;"><div style="background:#fff;padding:14px 32px;border-bottom:1.5px solid #E2ECF2;display:flex;align-items:center;justify-content:space-between;"><a onclick="goToWebScreen(10)" style="font-size:13px;color:#1A6B8A;cursor:pointer;font-weight:700;">← Accueil</a><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">❓ Aide & FAQ</div><div style="width:8px;"></div></div><div style="flex:1;overflow-y:auto;background:#F4F9FC;padding:32px;"><div style="max-width:700px;margin:0 auto;display:flex;flex-direction:column;gap:12px;"><div style="background:#fff;border-radius:14px;padding:18px 20px;box-shadow:0 2px 8px rgba(0,0,0,0.06);cursor:pointer;" onclick="showToast('Comment soumettre une ordonnance...')"><div style="font-size:14px;font-weight:700;color:#1A2332;margin-bottom:4px;">Comment soumettre une ordonnance ?</div><div style="font-size:13px;color:#6B7A8D;">Photographiez l'ordonnance signée par votre médecin et uploadez-la depuis la section Ordonnances.</div></div><div style="background:#fff;border-radius:14px;padding:18px 20px;box-shadow:0 2px 8px rgba(0,0,0,0.06);cursor:pointer;" onclick="showToast('Délais de livraison...')"><div style="font-size:14px;font-weight:700;color:#1A2332;margin-bottom:4px;">Quels sont les délais de livraison ?</div><div style="font-size:13px;color:#6B7A8D;">2–4 heures à Abidjan, 24h en région. Livraison 7j/7 de 8h à 22h.</div></div><div style="background:#fff;border-radius:14px;padding:18px 20px;box-shadow:0 2px 8px rgba(0,0,0,0.06);cursor:pointer;" onclick="showToast('Paiement...')"><div style="font-size:14px;font-weight:700;color:#1A2332;margin-bottom:4px;">Quels moyens de paiement acceptés ?</div><div style="font-size:13px;color:#6B7A8D;">MTN Mobile Money, Orange Money, Wave, carte bancaire et paiement à la livraison.</div></div><div style="background:#fff;border-radius:14px;padding:18px 20px;box-shadow:0 2px 8px rgba(0,0,0,0.06);cursor:pointer;" onclick="showToast('Confidentialité...')"><div style="font-size:14px;font-weight:700;color:#1A2332;margin-bottom:4px;">Mes données médicales sont-elles sécurisées ?</div><div style="font-size:13px;color:#6B7A8D;">Oui. Toutes les données sont chiffrées AES-256 et conformes aux normes HDS (Hébergeur Données de Santé).</div></div><button onclick="goToWebScreen(11)" style="padding:14px;background:#1A6B8A;color:#fff;border:none;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">💬 Contacter le support</button></div></div></div></div>

<div class="web-screen" id="wscreen41"><div style="height:100%;display:flex;flex-direction:column;"><div style="background:#fff;padding:14px 32px;border-bottom:1.5px solid #E2ECF2;display:flex;align-items:center;justify-content:space-between;"><a onclick="goToWebScreen(16)" style="font-size:13px;color:#1A6B8A;cursor:pointer;font-weight:700;font-family:'DM Sans',sans-serif;">← Dashboard pharmacien</a><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">💊 Gestion du stock</div><div style="width:8px;"></div></div><div style="flex:1;overflow-y:auto;background:#F4F9FC;padding:24px;"><div style="font-size:13px;color:#6B7A8D;text-align:center;margin-top:40px;">Voir <button onclick="goToWebScreen(25)" style="background:none;border:none;color:#1A6B8A;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">wscreen 22 — Produits &amp; Stock →</button></div></div></div></div>

<div class="web-screen" id="wscreen42"><div style="height:100%;display:flex;flex-direction:column;"><div style="background:#fff;padding:14px 32px;border-bottom:1.5px solid #E2ECF2;display:flex;align-items:center;justify-content:space-between;"><a onclick="goToWebScreen(16)" style="font-size:13px;color:#1A6B8A;cursor:pointer;font-weight:700;font-family:'DM Sans',sans-serif;">← Dashboard</a><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">📊 Statistiques pharmacien</div><div style="width:8px;"></div></div><div style="flex:1;overflow-y:auto;background:#F4F9FC;padding:24px;"><div style="font-size:13px;color:#6B7A8D;text-align:center;margin-top:40px;">Voir <button onclick="goToWebScreen(27)" style="background:none;border:none;color:#1A6B8A;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">wscreen 24 — Rapports &amp; Analytics →</button></div></div></div></div>

<div class="web-screen" id="wscreen43"><div style="height:100%;display:flex;flex-direction:column;"><div style="background:#fff;padding:14px 32px;border-bottom:1.5px solid #E2ECF2;display:flex;align-items:center;justify-content:space-between;"><a onclick="goToWebScreen(16)" style="font-size:13px;color:#1A6B8A;cursor:pointer;font-weight:700;font-family:'DM Sans',sans-serif;">← Dashboard</a><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">⚙️ Paramètres Pro</div><div style="width:8px;"></div></div><div style="flex:1;overflow-y:auto;background:#F4F9FC;padding:32px;"><div style="max-width:600px;margin:0 auto;display:flex;flex-direction:column;gap:12px;"><div style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);"><div style="padding:16px 20px;border-bottom:1px solid #F4F9FC;display:flex;justify-content:space-between;cursor:pointer;" onclick="showToast('Horaires')"><span style="font-size:14px;font-weight:600;color:#1A2332;">🕐 Horaires d'ouverture</span><span>→</span></div><div style="padding:16px 20px;border-bottom:1px solid #F4F9FC;display:flex;justify-content:space-between;cursor:pointer;" onclick="showToast('Signature')"><span style="font-size:14px;font-weight:600;color:#1A2332;">✍️ Signature numérique</span><span>→</span></div><div style="padding:16px 20px;display:flex;justify-content:space-between;align-items:center;" onclick="showToast('2FA actif')"><span style="font-size:14px;font-weight:600;color:#1A2332;">🔐 Authentification 2FA</span><span style="background:#E8F7EE;color:#27AE60;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700;">Activé</span></div></div><button onclick="goToWebScreen(15)" style="padding:14px;background:#FEF0EE;color:#E74C3C;border:none;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">Déconnexion</button></div></div></div></div>

<div class="web-screen" id="wscreen44"><div style="height:100%;display:flex;flex-direction:column;background:#F4F9FC;"><div style="background:#fff;padding:14px 32px;border-bottom:1.5px solid #E2ECF2;display:flex;align-items:center;justify-content:space-between;"><a onclick="goToWebScreen(10)" style="font-size:13px;color:#1A6B8A;cursor:pointer;font-weight:700;">← Accueil</a><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">🔍 Scanner QR Code</div><div style="width:8px;"></div></div><div style="flex:1;display:flex;align-items:center;justify-content:center;"><div style="text-align:center;"><div style="width:280px;height:280px;border:3px solid #1A6B8A;border-radius:20px;display:flex;align-items:center;justify-content:center;margin:0 auto 24px;background:rgba(26,107,138,0.05);"><div style="font-size:80px;opacity:0.4;">📷</div></div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:700;color:#1A2332;margin-bottom:8px;">Pointez vers le QR Code</div><div style="font-size:13px;color:#6B7A8D;margin-bottom:24px;">Scannez le QR Code de l'ordonnance ou de la commande</div><button onclick="goToWebScreen(51)" style="padding:14px 32px;background:#1A6B8A;color:#fff;border:none;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">Simuler une lecture ✓</button></div></div></div></div>

<div class="web-screen" id="wscreen45"><div style="height:100%;display:flex;flex-direction:column;background:#F4F9FC;"><div style="background:#fff;padding:14px 32px;border-bottom:1.5px solid #E2ECF2;display:flex;align-items:center;justify-content:space-between;"><a onclick="goToWebScreen(32)" style="font-size:13px;color:#1A6B8A;cursor:pointer;font-weight:700;">← Pharmacies</a><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">Profil pharmacien</div><div style="width:8px;"></div></div><div style="flex:1;overflow-y:auto;padding:32px;"><div style="max-width:700px;margin:0 auto;"><div style="background:linear-gradient(135deg,#0F3F54,#1A6B8A);border-radius:20px;padding:32px;display:flex;align-items:center;gap:20px;margin-bottom:20px;"><div style="width:72px;height:72px;background:rgba(255,255,255,0.2);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:34px;">👩‍⚕️</div><div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#fff;">Dr. Sophie Lefebvre</div><div style="font-size:14px;color:rgba(255,255,255,0.7);margin-top:4px;">Pharmacien · Ordre CI #4521 · ⭐ 4.9 (128 avis)</div><div style="display:flex;gap:8px;margin-top:10px;"><button onclick="goToWebScreen(11)" style="padding:10px 18px;background:rgba(255,255,255,0.15);color:#fff;border:1px solid rgba(255,255,255,0.3);border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">💬 Contacter</button><button onclick="goToWebScreen(29)" style="padding:10px 18px;background:#fff;color:#1A6B8A;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">🛒 Commander</button></div></div></div></div></div></div></div>

<div class="web-screen" id="wscreen46"><div style="height:100%;display:flex;flex-direction:column;background:#F4F9FC;"><div style="background:#fff;padding:14px 32px;border-bottom:1.5px solid #E2ECF2;display:flex;align-items:center;justify-content:space-between;"><a onclick="goToWebScreen(10)" style="font-size:13px;color:#1A6B8A;cursor:pointer;font-weight:700;">← Accueil</a><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">⭐ Avis & Notes</div><button onclick="showToast('Laisser un avis...')" style="padding:8px 16px;background:#1A6B8A;color:#fff;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;">+ Mon avis</button></div><div style="flex:1;overflow-y:auto;padding:32px;"><div style="max-width:700px;margin:0 auto;display:flex;flex-direction:column;gap:12px;"><div style="background:#1A6B8A;border-radius:20px;padding:24px;text-align:center;color:#fff;"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:48px;font-weight:800;">4.8</div><div style="font-size:24px;margin:8px 0;letter-spacing:3px;">★★★★★</div><div style="font-size:13px;opacity:0.7;">Basé sur 128 avis vérifiés</div></div><div style="background:#fff;border-radius:14px;padding:18px 20px;box-shadow:0 2px 8px rgba(0,0,0,0.06);display:flex;gap:14px;"><div style="width:44px;height:44px;background:#E8F4F8;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#1A2332;flex-shrink:0;">MK</div><div><div style="font-size:14px;font-weight:700;color:#1A2332;">Moussa Koné · <span style="color:#F39C12;">★★★★★</span></div><div style="font-size:13px;color:#6B7A8D;margin-top:4px;line-height:1.6;">Service impeccable, Dr. Lefebvre très professionnelle et réactive. Livraison en 2h chrono !</div></div></div><div style="background:#fff;border-radius:14px;padding:18px 20px;box-shadow:0 2px 8px rgba(0,0,0,0.06);display:flex;gap:14px;"><div style="width:44px;height:44px;background:#E8F4F8;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#1A2332;flex-shrink:0;">FT</div><div><div style="font-size:14px;font-weight:700;color:#1A2332;">Fatou Traoré · <span style="color:#F39C12;">★★★★☆</span></div><div style="font-size:13px;color:#6B7A8D;margin-top:4px;line-height:1.6;">Livraison rapide, médicaments bien conditionnés. Interface très intuitive. Merci !</div></div></div></div></div></div></div>

<div class="web-screen" id="wscreen47"><div style="height:100%;display:flex;flex-direction:column;background:#F4F9FC;"><div style="background:#fff;padding:14px 32px;border-bottom:1.5px solid #E2ECF2;display:flex;align-items:center;justify-content:space-between;"><a onclick="goToWebScreen(10)" style="font-size:13px;color:#1A6B8A;cursor:pointer;font-weight:700;">← Accueil</a><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;color:#1A2332;">⭐ Programme PharmaPoints</div><div style="width:8px;"></div></div><div style="flex:1;overflow-y:auto;padding:32px;"><div style="max-width:700px;margin:0 auto;display:flex;flex-direction:column;gap:16px;"><div style="background:linear-gradient(135deg,#1A2332,#0F3F54);border-radius:20px;padding:32px;text-align:center;"><div style="font-size:48px;margin-bottom:12px;">⭐</div><div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:6px;">Solde actuel</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:52px;font-weight:800;color:#F39C12;">1 250</div><div style="font-size:16px;color:rgba(255,255,255,0.7);margin-bottom:16px;">PharmaPoints = 6 250 FCFA</div><button onclick="showToast('Utiliser mes points...')" style="padding:14px 32px;background:linear-gradient(135deg,#F39C12,#e67e22);color:#fff;border:none;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">Utiliser mes points 🎁</button></div><div style="background:#fff;border-radius:16px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.06);"><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:#1A2332;margin-bottom:14px;">Historique</div><div style="display:flex;flex-direction:column;gap:10px;"><div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid #F4F9FC;"><span style="font-size:13px;color:#6B7A8D;">#CMD-90214 · 14 oct.</span><span style="font-size:14px;font-weight:700;color:#27AE60;">+125 pts</span></div><div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid #F4F9FC;"><span style="font-size:13px;color:#6B7A8D;">#CMD-90197 · 2 oct.</span><span style="font-size:14px;font-weight:700;color:#27AE60;">+87 pts</span></div><div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;"><span style="font-size:13px;color:#6B7A8D;">Réduction utilisée · 18 sept.</span><span style="font-size:14px;font-weight:700;color:#E74C3C;">−200 pts</span></div></div></div></div></div></div></div>

<div class="web-screen" id="wscreen49">
  <div style="height:100%;background:#F4F9FC;display:flex;align-items:center;justify-content:center;">
    <div style="text-align:center;padding:40px;">
      <div style="font-size:80px;margin-bottom:20px;">🔍</div>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:48px;font-weight:800;color:#1A6B8A;margin-bottom:8px;">404</div>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:700;color:#1A2332;margin-bottom:8px;">Page introuvable</div>
      <div style="font-size:14px;color:#6B7A8D;margin-bottom:28px;">Cette page n'existe pas ou a été déplacée.</div>
      <button onclick="goToWebScreen(10)" style="padding:14px 32px;background:#1A6B8A;color:#fff;border:none;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">← Retour à l'accueil</button>
    </div>
  </div>
</div>

<!-- WSCREEN 47 — Maintenance web -->
<div class="web-screen" id="wscreen50">
  <div style="height:100%;background:linear-gradient(135deg,#0F3F54,#1A6B8A);display:flex;align-items:center;justify-content:center;">
    <div style="text-align:center;padding:40px;color:#fff;">
      <div style="font-size:80px;margin-bottom:20px;">🔧</div>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:800;margin-bottom:8px;">Maintenance en cours</div>
      <div style="font-size:14px;opacity:0.7;margin-bottom:24px;">ILERA AFRICA sera de retour très bientôt</div>
      <div style="background:rgba(255,255,255,0.1);border-radius:12px;padding:16px 32px;font-size:24px;font-weight:800;letter-spacing:4px;">02:45:30</div>
    </div>
  </div>
</div>

<!-- WSCREEN 48 — Confirmation commande web -->
<div class="web-screen" id="wscreen51">
  <div style="height:100%;background:#F4F9FC;display:flex;align-items:center;justify-content:center;">
    <div style="background:#fff;border-radius:24px;padding:48px;text-align:center;max-width:500px;box-shadow:0 8px 40px rgba(0,0,0,0.1);">
      <div style="width:80px;height:80px;background:#E8F7EE;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:36px;margin:0 auto 20px;">✅</div>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;color:#1A2332;margin-bottom:8px;">Commande confirmée !</div>
      <div style="font-size:14px;color:#6B7A8D;margin-bottom:24px;">Votre commande #CMD-90214 a été passée avec succès. Vous recevrez une notification dès que l'ordonnance sera validée.</div>
      <div style="background:#F4F9FC;border-radius:12px;padding:16px;margin-bottom:24px;">
        <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px;"><span style="color:#6B7A8D;">Référence</span><span style="font-weight:700;color:#1A2332;">#CMD-90214</span></div>
        <div style="display:flex;justify-content:space-between;font-size:13px;"><span style="color:#6B7A8D;">Livraison estimée</span><span style="font-weight:700;color:#1A6B8A;">Aujourd'hui 17:30</span></div>
      </div>
      <div style="display:flex;gap:10px;">
        <button onclick="goToWebScreen(14)" style="flex:1;padding:14px;background:#1A6B8A;color:#fff;border:none;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">Suivre ma commande</button>
        <button onclick="goToWebScreen(10)" style="flex:1;padding:14px;background:#F4F9FC;color:#6B7A8D;border:1.5px solid #E2ECF2;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:14px;cursor:pointer;">Accueil</button>
      </div>
    </div>
  </div>
</div>

<!-- WSCREEN 49 — Empty states web -->
<div class="web-screen" id="wscreen52">
  <div style="height:100%;background:#F4F9FC;display:flex;align-items:center;justify-content:center;">
    <div style="text-align:center;padding:40px;">
      <div style="font-size:60px;margin-bottom:16px;">📭</div>
      <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:700;color:#1A2332;margin-bottom:8px;">Aucun résultat</div>
      <div style="font-size:13px;color:#6B7A8D;margin-bottom:24px;">Il n'y a rien ici pour le moment.</div>
      <button onclick="goToWebScreen(10)" style="padding:12px 28px;background:#1A6B8A;color:#fff;border:none;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;cursor:pointer;">← Retour accueil</button>
    </div>
  </div>
</div>

<!-- WSCREEN 50 — Onboarding pharmacien web -->

`;