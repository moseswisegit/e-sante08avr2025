window.FRAGMENTS = window.FRAGMENTS || {};
window.FRAGMENTS['shared'] = `
    <!-- SCREEN 1 — SPLASH -->
    <div class="screen active" id="screen1" data-device="mobile">
      <div class="splash-container">
        <div class="splash-bg-circle c1"></div>
        <div class="splash-bg-circle c2"></div>
        <div class="splash-logo-wrap">
          <div class="splash-pulse"></div>
          <div class="splash-pulse"></div>
          <div class="splash-logo-icon">
            <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26 4C18 4 10 8 8 15C7 22 10 26 14 30C18 34 24 42 26 48C28 42 34 34 38 30C42 26 45 22 44 15C42 8 34 4 26 4Z" fill="white" opacity="0.9"/>
              <rect x="23" y="14" width="6" height="16" rx="3" fill="#1A6B8A"/>
              <rect x="18" y="19" width="16" height="6" rx="3" fill="#1A6B8A"/>
            </svg>
          </div>
        </div>
        <div class="splash-brand brand-cool">ILERA AFRICA</div>
        <div class="splash-tagline">Votre santé, où que vous soyez</div>
        <div class="splash-badge">
          <div class="splash-badge-dot"></div>
          <span>SANTÉ CONNECTÉE AFRICA</span>
        </div>
        <div class="splash-loader">
          <div class="splash-loader-bar"></div>
        </div>
      </div>
    </div>

    <!-- SCREEN 2 — ONBOARDING 1/3 -->
    <div class="screen" id="screen2" data-device="mobile">
      <div class="onboarding-screen">
        <div class="onboarding-header">
          <div class="ob-logo brand-cool">ILERA AFRICA</div>
          <button class="skip-btn" onclick="goToScreen(8)">Ignorer</button>
        </div>
        <div class="onboarding-illustration">
          <div class="ob-illus-bg">
            <svg class="ob-illus-svg" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Phone -->
              <rect x="35" y="20" width="70" height="100" rx="12" fill="white" stroke="#1A6B8A" stroke-width="2.5"/>
              <rect x="42" y="30" width="56" height="72" rx="6" fill="#F4F9FC"/>
              <!-- Prescription lines -->
              <rect x="48" y="38" width="35" height="4" rx="2" fill="#1A6B8A" opacity="0.4"/>
              <rect x="48" y="46" width="44" height="3" rx="1.5" fill="#1A6B8A" opacity="0.25"/>
              <rect x="48" y="52" width="38" height="3" rx="1.5" fill="#1A6B8A" opacity="0.25"/>
              <rect x="48" y="58" width="42" height="3" rx="1.5" fill="#1A6B8A" opacity="0.25"/>
              <!-- Camera icon -->
              <circle cx="95" cy="85" r="18" fill="#27AE60"/>
              <rect x="88" y="80" width="14" height="10" rx="3" fill="white"/>
              <circle cx="95" cy="85" r="4" fill="#27AE60"/>
              <rect x="91" y="77" width="8" height="3" rx="1.5" fill="white"/>
              <!-- Scan lines -->
              <line x1="42" y1="68" x2="98" y2="68" stroke="#1A6B8A" stroke-width="2" stroke-dasharray="4 2" opacity="0.5"/>
              <!-- Stars -->
              <circle cx="25" cy="35" r="4" fill="#F39C12" opacity="0.6"/>
              <circle cx="118" cy="50" r="3" fill="#27AE60" opacity="0.5"/>
              <circle cx="20" cy="90" r="5" fill="#1A6B8A" opacity="0.3"/>
            </svg>
          </div>
        </div>
        <div class="onboarding-content">
          <h1 class="ob-title">Téléversez votre ordonnance</h1>
          <p class="ob-subtitle">Prenez simplement une photo de votre ordonnance médicale pour commencer.</p>
          <div class="ob-dots">
            <div class="ob-dot active"></div>
            <div class="ob-dot"></div>
            <div class="ob-dot"></div>
            <div class="ob-dot"></div>
            <div class="ob-dot"></div>
            <div class="ob-dot"></div>
          </div>
          <button class="ob-btn" onclick="goToScreen(3)">
            Suivant
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- SCREEN 3 — ONBOARDING 2/3 -->
    <div class="screen" id="screen3" data-device="mobile">
      <div class="onboarding-screen">
        <div class="onboarding-header">
          <div class="ob-logo brand-cool">ILERA AFRICA</div>
          <button class="skip-btn" onclick="goToScreen(8)">Ignorer</button>
        </div>
        <div class="onboarding-illustration">
          <div class="ob-illus-bg" style="background: #E8F7EE;">
            <svg class="ob-illus-svg" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Doctor context -->
              <circle cx="70" cy="42" r="22" fill="#1A6B8A" opacity="0.2"/>
              <circle cx="70" cy="38" r="16" fill="#1A6B8A"/>
              <circle cx="70" cy="34" r="10" fill="#AED6E8"/>
              <!-- Coat -->
              <path d="M45 100 Q45 70 70 70 Q95 70 95 100 L95 115 L45 115 Z" fill="white"/>
              <!-- Stethoscope around neck -->
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
        <div class="onboarding-content">
          <h1 class="ob-title">Validée par un médecin</h1>
          <p class="ob-subtitle">Chaque ordonnance est vérifiée par un professionnel diplômé pour votre sécurité.</p>
          <div class="ob-dots">
            <div class="ob-dot"></div>
            <div class="ob-dot active"></div>
            <div class="ob-dot"></div>
            <div class="ob-dot"></div>
            <div class="ob-dot"></div>
            <div class="ob-dot"></div>
          </div>
          <button class="ob-btn" onclick="goToScreen(4)">
            Suivant
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- SCREEN 3B — ONBOARDING 3/4 (Pharmacien) -->
    <div class="screen" id="screen4" data-device="mobile">
      <div class="onboarding-screen">
        <div class="onboarding-header">
          <div class="ob-logo brand-cool">ILERA AFRICA</div>
          <button class="skip-btn" onclick="goToScreen(8)">Ignorer</button>
        </div>
        <div class="onboarding-illustration">
          <div class="ob-illus-bg" style="background: #E8F4F8;">
            <svg class="ob-illus-svg" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <div class="onboarding-content">
          <h1 class="ob-title">Validée par un pharmacien</h1>
          <p class="ob-subtitle">Votre pharmacien prépare vos médicaments et vérifie les interactions pour votre sécurité.</p>
          <div class="ob-dots">
            <div class="ob-dot"></div>
            <div class="ob-dot"></div>
            <div class="ob-dot active"></div>
            <div class="ob-dot"></div>
            <div class="ob-dot"></div>
            <div class="ob-dot"></div>
          </div>
          <button class="ob-btn" onclick="goToScreen(5)">
            Suivant
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- SCREEN 5 — ONBOARDING 4/5 (Préparation) -->
    <div class="screen" id="screen5" data-device="mobile">
      <div class="onboarding-screen">
        <div class="onboarding-header">
          <div class="ob-logo brand-cool">ILERA AFRICA</div>
          <button class="skip-btn" onclick="goToScreen(8)">Ignorer</button>
        </div>
        <div class="onboarding-illustration">
          <div class="ob-illus-bg" style="background: #FFF9E6;">
            <svg class="ob-illus-svg" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Basket/Bag context -->
              <path d="M30 50 L110 50 L100 110 L40 110 Z" fill="white" stroke="#F39C12" stroke-width="2"/>
              <path d="M50 50 Q50 30 70 30 Q90 30 90 50" stroke="#F39C12" stroke-width="2.5" fill="none"/>
              <!-- Items inside -->
              <rect x="50" y="60" width="12" height="30" rx="3" fill="#27AE60"/>
              <rect x="65" y="65" width="15" height="25" rx="4" fill="#1A6B8A"/>
              <rect x="85" y="70" width="10" height="20" rx="2" fill="#F39C12"/>
              <!-- Seal/Label -->
              <circle cx="70" cy="110" r="12" fill="#27AE60"/>
              <path d="M65 110 L68 113 L75 106" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="onboarding-content">
          <h1 class="ob-title">Préparation en cours</h1>
          <p class="ob-subtitle">Votre commande est soigneusement préparée et scellée par nos pharmaciens agréés.</p>
          <div class="ob-dots">
            <div class="ob-dot"></div>
            <div class="ob-dot"></div>
            <div class="ob-dot"></div>
            <div class="ob-dot active"></div>
            <div class="ob-dot"></div>
            <div class="ob-dot"></div>
          </div>
          <button class="ob-btn" onclick="goToScreen(7)">
            Suivant
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>
    </div>




    <!-- SCREEN 6 — ONBOARDING 5/6 (Livreur) -->
    <div class="screen" id="screen6" data-device="mobile">
      <div class="onboarding-screen">
        <div class="onboarding-header">
          <div class="ob-logo brand-cool">ILERA AFRICA</div>
          <button class="skip-btn" onclick="goToScreen(8)">Ignorer</button>
        </div>
        <div class="onboarding-illustration">
          <div class="ob-illus-bg" style="background: #E8F4F8;">
            <svg class="ob-illus-svg" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Pharmacy background hint -->
              <rect x="20" y="30" width="100" height="80" rx="4" fill="#E2ECF2" opacity="0.4"/>
              <!-- Courier picking up -->
              <rect x="70" y="55" width="45" height="45" rx="8" fill="#1A6B8A"/>
              <circle cx="92" cy="45" r="12" fill="#1A6B8A"/>
              <rect x="75" y="65" width="35" height="25" rx="4" fill="white" opacity="0.2"/>
              <!-- The Package -->
              <rect x="35" y="75" width="30" height="30" rx="4" fill="#27AE60"/>
              <path d="M40 85 H60 M40 95 H55" stroke="white" stroke-width="2" opacity="0.5"/>
              <!-- Hand off movement -->
              <path d="M25 90 L35 90" stroke="#27AE60" stroke-width="3" stroke-linecap="round"/>
              <path d="M20 98 L30 98" stroke="#F39C12" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
        <div class="onboarding-content">
          <h1 class="ob-title">Prise en charge livreur</h1>
          <p class="ob-subtitle">Dès que votre commande est prête, un livreur dédié récupère votre colis à la pharmacie.</p>
          <div class="ob-dots">
            <div class="ob-dot"></div>
            <div class="ob-dot"></div>
            <div class="ob-dot"></div>
            <div class="ob-dot"></div>
            <div class="ob-dot active"></div>
            <div class="ob-dot"></div>
          </div>
          <button class="ob-btn" onclick="goToScreen(7)">
            Suivant
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- SCREEN 7 — ONBOARDING 6/6 -->

    <div class="screen" id="screen7" data-device="mobile">
      <div class="onboarding-screen">
        <div class="onboarding-header">
          <div class="ob-logo brand-cool">ILERA AFRICA</div>
          <div></div>
        </div>
        <div class="onboarding-illustration">
          <div class="ob-illus-bg" style="background: rgba(243,156,18,0.1);">
            <svg class="ob-illus-svg" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Road -->
              <rect x="10" y="90" width="120" height="20" rx="4" fill="#E2ECF2"/>
              <rect x="45" y="97" width="15" height="6" rx="3" fill="white"/>
              <rect x="65" y="97" width="15" height="6" rx="3" fill="white"/>
              <!-- Scooter body -->
              <ellipse cx="90" cy="88" rx="30" ry="10" fill="#1A6B8A"/>
              <rect x="65" y="72" width="50" height="20" rx="8" fill="#1A6B8A"/>
              <!-- Wheels -->
              <circle cx="68" cy="95" r="10" fill="#1A2332"/>
              <circle cx="68" cy="95" r="5" fill="#6B7A8D"/>
              <circle cx="105" cy="95" r="10" fill="#1A2332"/>
              <circle cx="105" cy="95" r="5" fill="#6B7A8D"/>
              <!-- Box -->
              <rect x="100" y="60" width="30" height="28" rx="6" fill="#27AE60"/>
              <rect x="105" y="68" width="20" height="12" rx="3" fill="#E8F7EE"/>
              <!-- Cross on box -->
              <rect x="112" y="70" width="6" height="8" rx="2" fill="#27AE60"/>
              <rect x="110" y="72" width="10" height="4" rx="2" fill="#27AE60"/>
              <!-- Speed lines -->
              <line x1="30" y1="78" x2="55" y2="78" stroke="#1A6B8A" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>
              <line x1="20" y1="85" x2="50" y2="85" stroke="#1A6B8A" stroke-width="2" stroke-linecap="round" opacity="0.3"/>
              <!-- House -->
              <rect x="12" y="55" width="35" height="35" rx="4" fill="white" stroke="#E2ECF2" stroke-width="2"/>
              <path d="M8 60 L29 40 L50 60 Z" fill="#1A6B8A"/>
              <rect x="22" y="70" width="14" height="20" rx="3" fill="#E8F4F8"/>
            </svg>
          </div>
        </div>
        <div class="onboarding-content">
          <h1 class="ob-title">Livraison à domicile</h1>
          <p class="ob-subtitle">Recevez vos médicaments directement chez vous, rapidement et en toute sécurité.</p>
          <div class="ob-dots">
            <div class="ob-dot"></div>
            <div class="ob-dot"></div>
            <div class="ob-dot"></div>
            <div class="ob-dot"></div>
            <div class="ob-dot"></div>
            <div class="ob-dot active"></div>
          </div>
          <button class="ob-btn secondary" onclick="goToScreen(8)">
            Commencer
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- SCREEN 5 — LOGIN -->
    <div class="screen" id="screen8" data-device="mobile">
      <div class="login-screen">
        <div class="login-top">
          <div class="login-logo">
            <div class="login-logo-icon">
              <svg width="24" height="24" viewBox="0 0 52 52" fill="none">
                <path d="M26 4C18 4 10 8 8 15C7 22 10 26 14 30C18 34 24 42 26 48C28 42 34 34 38 30C42 26 45 22 44 15C42 8 34 4 26 4Z" fill="white" opacity="0.9"/>
                <rect x="23" y="14" width="6" height="16" rx="3" fill="#1A6B8A"/>
                <rect x="18" y="19" width="16" height="6" rx="3" fill="#1A6B8A"/>
              </svg>
            </div>
            <div class="login-logo-text brand-cool">ILERA AFRICA</div>
          </div>
          <h1 class="login-title">Bienvenue dans votre<br>sanctuaire de santé</h1>
          <p class="login-subtitle">Connectez-vous pour accéder à votre espace</p>
        </div>
        <div class="login-form">
          <div class="field-group">
            <label class="field-label">Numéro de téléphone</label>
            <div class="field-wrap">
              <span class="field-prefix">+225</span>
              <input class="field-input with-prefix" type="tel" placeholder="07 00 00 00 00" maxlength="10" oninput="this.value=this.value.replace(/[^0-9]/g,'')">
            </div>
          </div>
          <div class="field-group">
            <label class="field-label">Code reçu par SMS</label>
            <div class="otp-wrap" id="otpWrap">
              <input class="otp-input" type="text" maxlength="1" oninput="otpNext(this)" onkeydown="otpBack(event,this)" inputmode="numeric">
              <input class="otp-input" type="text" maxlength="1" oninput="otpNext(this)" onkeydown="otpBack(event,this)" inputmode="numeric">
              <input class="otp-input" type="text" maxlength="1" oninput="otpNext(this)" onkeydown="otpBack(event,this)" inputmode="numeric">
              <input class="otp-input" type="text" maxlength="1" oninput="otpNext(this)" onkeydown="otpBack(event,this)" inputmode="numeric">
              <input class="otp-input" type="text" maxlength="1" oninput="otpNext(this)" onkeydown="otpBack(event,this)" inputmode="numeric">
              <input class="otp-input" type="text" maxlength="1" oninput="otpNext(this)" onkeydown="otpBack(event,this)" inputmode="numeric">
            </div>
            <a class="resend-link" onclick="showToast('✉️ Nouveau code envoyé par SMS ✓')">Renvoyer le code</a>
          </div>
          <div style="display:flex;gap:12px;margin-top:8px;margin-bottom:20px;">
            <button class="cta-btn" style="flex:1;margin:0;" onclick="handleLogin()">Se connecter</button>
            <button style="width:54px;height:54px;border-radius:14px;border:1.5px solid rgba(26,107,138,0.2);background:var(--primary-light);color:var(--primary);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.3s;box-shadow:0 4px 12px rgba(26,107,138,0.1);" onclick="showToast('Authentification biométrique...')">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-fingerprint"><path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"/><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/><path d="M8.65 22c.21-.66.45-1.32.57-2"/><path d="M11.5 22c.19-.92.36-1.85.36-2.8v-5"/><path d="M14.5 22c-.16-1.5-.2-2.5-.2-4"/><path d="M17.5 22c.3-1.6.46-3.2.46-4.8A5.2 5.2 0 0 0 12.5 12h-1"/><path d="M9 16c-.3-1.6-.46-3.2-.46-4.8A4.2 4.2 0 0 1 12.5 7h1"/><path d="M22 16.5c-.3-1-.6-2-.9-3"/></svg>
            </button>
          </div>
          <p class="login-link">Pas encore de compte ? <a onclick="goToScreen(9)">Créer un compte</a></p>
          <div style="margin-top:16px;padding-top:16px;border-top:1.5px solid #E2ECF2;text-align:center;">
             <div style="font-size:24px;margin-bottom:8px;">⚕️</div>
             <p style="font-size:13px;color:var(--text-muted);font-weight:500;line-height:1.6;">Professionnel ? <br><a onclick="setDevice('web'); setTimeout(() => goToWebScreen('_enrollement'), 100);" style="color:var(--primary);cursor:pointer;font-weight:700;text-decoration:none;">Inscrivez-vous sur notre plateforme web</a><br> pour rejoindre le réseau.</p>
          </div>
          <p class="legal-note">En vous connectant, vous acceptez nos <a href="#">Conditions d'utilisation</a> et notre <a href="#">Politique de confidentialité</a></p>
        </div>
      </div>
    </div>


    <!-- SCREEN 6 — PATIENT REGISTRATION -->
    <div class="screen" id="screen9" data-device="mobile">
      <div style="height:100%;overflow-y:auto;background:#F4F9FC;padding-bottom:32px;">
        <div style="background:linear-gradient(160deg,#1A6B8A,#0F3F54);padding:52px 24px 32px;text-align:center;position:relative;overflow:hidden;">
          <div style="position:absolute;top:-40px;right:-40px;width:140px;height:140px;background:rgba(255,255,255,0.06);border-radius:50%;"></div>
          <div style="position:absolute;bottom:-20px;left:-30px;width:100px;height:100px;background:rgba(39,174,96,0.15);border-radius:50%;"></div>
          <div style="width:52px;height:52px;background:rgba(255,255,255,0.15);border-radius:16px;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;backdrop-filter:blur(10px);">
            <svg width="28" height="28" viewBox="0 0 52 52" fill="none"><path d="M26 4C18 4 10 8 8 15C7 22 10 26 14 30C18 34 24 42 26 48C28 42 34 34 38 30C42 26 45 22 44 15C42 8 34 4 26 4Z" fill="white" opacity="0.9"/><rect x="23" y="14" width="6" height="16" rx="3" fill="#1A6B8A"/><rect x="18" y="19" width="16" height="6" rx="3" fill="#1A6B8A"/></svg>
          </div>
          <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;color:rgba(255,255,255,0.7);letter-spacing:1px;margin-bottom:6px;">ILERA AFRICA</div>
          <h1 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;font-weight:800;color:#fff;margin-bottom:6px;">Rejoignez-nous</h1>
          <p style="font-size:14px;color:rgba(255,255,255,0.7);">Créez votre profil santé sécurisé</p>
        </div>
        <div style="padding:24px 20px;display:flex;flex-direction:column;gap:14px;">
          <div>
            <label style="font-size:12px;font-weight:600;color:#6B7A8D;text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:6px;">Nom Complet</label>
            <input type="text" placeholder="Moussa Koné" value="Moussa Koné" style="width:100%;padding:14px 16px;background:#fff;border:1.5px solid #E2ECF2;border-radius:12px;font-size:15px;color:#1A2332;font-family:'DM Sans',sans-serif;outline:none;">
          </div>
          <div>
            <label style="font-size:12px;font-weight:600;color:#6B7A8D;text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:6px;">Téléphone</label>
            <div style="display:flex;gap:8px;">
              <div style="padding:14px 12px;background:#fff;border:1.5px solid #E2ECF2;border-radius:12px;font-size:14px;font-weight:700;color:#1A6B8A;white-space:nowrap;">+225</div>
              <input type="tel" placeholder="07 00 00 00 00" style="flex:1;padding:14px 16px;background:#fff;border:1.5px solid #E2ECF2;border-radius:12px;font-size:15px;color:#1A2332;font-family:'DM Sans',sans-serif;outline:none;">
            </div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <div>
              <label style="font-size:12px;font-weight:600;color:#6B7A8D;text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:6px;">Âge</label>
              <input type="number" placeholder="32" value="32" style="width:100%;padding:14px 16px;background:#fff;border:1.5px solid #E2ECF2;border-radius:12px;font-size:15px;color:#1A2332;font-family:'DM Sans',sans-serif;outline:none;">
            </div>
            <div>
              <label style="font-size:12px;font-weight:600;color:#6B7A8D;text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:6px;">Groupe Sanguin <span style="font-size:10px;font-weight:400;color:#A0AEC0;text-transform:none;letter-spacing:0;">(facultatif)</span></label>
              <select style="width:100%;padding:14px 12px;background:#fff;border:1.5px solid #E2ECF2;border-radius:12px;font-size:15px;color:#1A2332;font-family:'DM Sans',sans-serif;outline:none;-webkit-appearance:none;">
                <option value="" style="color:#A0AEC0;">Non renseigné</option><option>A+</option><option>A-</option><option>B+</option><option>B-</option><option>AB+</option><option>AB-</option><option>O+</option><option>O-</option>
              </select>
            </div>
          </div>
          <div>
            <label style="font-size:12px;font-weight:600;color:#6B7A8D;text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:6px;">Mot de passe</label>
            <div style="position:relative;">
              <input type="password" placeholder="••••••••" value="SecurePass123" style="width:100%;padding:14px 48px 14px 16px;background:#fff;border:1.5px solid #1A6B8A;border-radius:12px;font-size:15px;color:#1A2332;font-family:'DM Sans',sans-serif;outline:none;">
              <button onclick="togglePassword(this)" style="position:absolute;right:14px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:18px;color:#6B7A8D;">👁</button>
            </div>
            <div style="display:flex;gap:4px;margin-top:8px;">
              <div style="flex:1;height:3px;background:#27AE60;border-radius:4px;"></div>
              <div style="flex:1;height:3px;background:#27AE60;border-radius:4px;"></div>
              <div style="flex:1;height:3px;background:#27AE60;border-radius:4px;"></div>
              <div style="flex:1;height:3px;background:#E2ECF2;border-radius:4px;"></div>
            </div>
            <p style="font-size:11px;color:#27AE60;margin-top:4px;">Mot de passe fort ✓</p>
          </div>
          <div style="background:linear-gradient(135deg,#E8F4F8,#F0FAF5);border-radius:12px;padding:12px 14px;display:flex;align-items:center;gap:10px;border:1px solid rgba(26,107,138,0.12);">
            <span style="font-size:20px;">🔒</span>
            <p style="font-size:12px;color:#1A6B8A;line-height:1.4;">Vos données de santé sont chiffrées et stockées selon les normes HDS.</p>
          </div>
          <button onclick="handleRegister()" style="width:100%;padding:16px;background:linear-gradient(135deg,#1A6B8A,#2196B3);color:#fff;border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700;cursor:pointer;box-shadow:0 8px 24px rgba(26,107,138,0.35);margin-top:4px;">Créer mon compte →</button>
          <p style="text-align:center;font-size:14px;color:#6B7A8D;">Déjà un compte ? <a onclick="goToScreen(8)" style="color:#1A6B8A;font-weight:600;cursor:pointer;">Se connecter</a></p>
        </div>
      </div>
    </div>

    <!-- SCREEN 7 — PATIENT HOME DASHBOARD -->


<!-- ========================================
     SCREEN 49 — 404 PAGE
======================================== -->
<div class="screen" id="screen49" data-device="mobile" style="background:#F4F9FC;justify-content:center;align-items:center;text-align:center;padding:32px;">
  <div style="display:flex;flex-direction:column;align-items:center;gap:20px;">
    <div style="position:relative;width:120px;height:120px;">
      <div style="width:100px;height:100px;background:#E8F4F8;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:48px;margin:auto;">💊</div>
      <div style="position:absolute;bottom:-4px;right:-4px;width:36px;height:36px;background:#E74C3C;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;border:3px solid #fff;">✕</div>
    </div>
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:800;color:#E74C3C;">404</div>
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:700;color:#1A2332;">Oops! Page introuvable</div>
    <div style="font-size:14px;color:#6B7A8D;line-height:1.6;max-width:260px;">Cette page n'existe pas ou a été déplacée. Retournez à l'accueil et réessayez.</div>
    <button onclick="goToScreen(10)" style="padding:14px 32px;background:linear-gradient(135deg,#1A6B8A,#2196B3);color:#fff;border:none;border-radius:50px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 8px 24px rgba(26,107,138,0.3);">🏠 Retour à l'accueil</button>
    <button onclick="showToast('Support contacté')" style="font-size:13px;color:#1A6B8A;background:none;border:none;cursor:pointer;font-weight:600;font-family:'DM Sans',sans-serif;">Contacter le support</button>
  </div>
</div>

<!-- ========================================
     SCREEN 50 — MAINTENANCE PAGE
======================================== -->
<div class="screen" id="screen50" data-device="mobile" style="background:linear-gradient(160deg,#0F3F54 0%,#1A6B8A 100%);justify-content:center;align-items:center;text-align:center;padding:32px;">
  <div style="display:flex;flex-direction:column;align-items:center;gap:20px;">
    <div style="width:100px;height:100px;background:rgba(255,255,255,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:48px;border:2px solid rgba(255,255,255,0.2);">🛠️</div>
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:#fff;">Maintenance en cours</div>
    <div style="font-size:14px;color:rgba(255,255,255,0.7);line-height:1.6;max-width:260px;">Nous améliorons ILERA AFRICA pour vous offrir une meilleure expérience. Nous revenons dans :</div>
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:48px;font-weight:800;color:#fff;">02:00</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);">heures</div>
    <!-- Progress bar -->
    <div style="width:240px;">
      <div style="display:flex;justify-content:space-between;margin-bottom:6px;"><span style="font-size:11px;color:rgba(255,255,255,0.6);">Progression</span><span style="font-size:11px;color:rgba(255,255,255,0.6);">67%</span></div>
      <div style="height:6px;background:rgba(255,255,255,0.15);border-radius:50px;overflow:hidden;"><div style="width:67%;height:100%;background:linear-gradient(90deg,#27AE60,#4ADE80);border-radius:50px;"></div></div>
    </div>
    <div style="background:rgba(255,255,255,0.1);border-radius:14px;padding:14px 20px;border:1px solid rgba(255,255,255,0.15);">
      <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px;">Besoin d'aide urgente ?</div>
      <div style="font-size:14px;font-weight:700;color:#fff;">📧 <a href="mailto:support@ilera.africa" class="__cf_email__">support@ilera.africa</a></div>
      <div style="font-size:14px;font-weight:700;color:#fff;margin-top:4px;">📞 +225 27 21 XX XX XX</div>
    </div>
  </div>
</div>

<!-- ========================================
     SCREEN 51 — SUCCESS CONFIRMATION
======================================== -->
<div class="screen" id="screen51" data-device="mobile" style="background:#F4F9FC;justify-content:center;align-items:center;text-align:center;padding:32px;">
  <div style="display:flex;flex-direction:column;align-items:center;gap:20px;">
    <!-- Animated checkmark -->
    <div style="width:100px;height:100px;background:linear-gradient(135deg,#27AE60,#2ecc71);border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 16px 48px rgba(39,174,96,0.35);animation:successPulse 2s ease-in-out infinite;">
      <div style="font-size:44px;">✓</div>
    </div>
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
     SCREEN 52 — EMPTY STATES
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
`;