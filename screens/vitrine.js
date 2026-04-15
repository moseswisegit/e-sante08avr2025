/**
 * VITRINE WEB — Écran 0 (point d'entrée du produit web)
 * Charge landing.html dans un iframe isolé.
 * Les boutons CTA de landing.html communiquent avec le parent via goToWebApp().
 */
window.FRAGMENTS = window.FRAGMENTS || {};
window.FRAGMENTS['vitrine'] = `
<div class="web-screen" id="wscreen0">
  <iframe
    id="vitrine-web-iframe"
    src="landing.html"
    style="width:100%;height:100%;border:none;display:block;background:#fff;"
    title="ILERA AFRICA — Site Vitrine">
  </iframe>
</div>
`;
