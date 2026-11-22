/**
 * INTERAKSI UI, TAB, CLIPBOARD & NAVIGASI
 */

let activeBuilderTab = 'order';
let toastTimeout = null;

function selectPackageFromCard(categoryKey, packageId) {
  const categorySelect = document.getElementById('order-category');
  if (categorySelect) categorySelect.value = categoryKey;
  
  populatePackageDropdown(categoryKey, packageId);
  jumpToBuilder('order');
  showToast('Paket dipilih! Tinggal cek format order lalu kirim.');
}

function switchBuilderTab(mode) {
  activeBuilderTab = mode;

  const btnOrder = document.getElementById('tab-btn-order');
  const btnTanya = document.getElementById('tab-btn-tanya');
  const panelOrder = document.getElementById('panel-order');
  const panelTanya = document.getElementById('panel-tanya');

  if (!btnOrder || !btnTanya || !panelOrder || !panelTanya) return;

  if (mode === 'order') {
    btnOrder.className = 'rounded-xl bg-pyro-600 px-4 py-3 font-display text-sm font-extrabold text-white transition sm:text-base';
    btnTanya.className = 'rounded-xl px-4 py-3 font-display text-sm font-bold text-cream-200 transition hover:text-white sm:text-base';
    panelOrder.classList.remove('hidden');
    panelTanya.classList.add('hidden');
  } else {
    btnTanya.className = 'rounded-xl bg-pyro-600 px-4 py-3 font-display text-sm font-extrabold text-white transition sm:text-base';
    btnOrder.className = 'rounded-xl px-4 py-3 font-display text-sm font-bold text-cream-200 transition hover:text-white sm:text-base';
    panelTanya.classList.remove('hidden');
    panelOrder.classList.add('hidden');
  }

  updateLivePreview();
}

function jumpToBuilder(mode) {
  switchBuilderTab(mode);
  const el = document.getElementById('order-builder');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function copyTextToClipboard(text) {
  const tempTextarea = document.createElement('textarea');
  tempTextarea.value = text;
  tempTextarea.setAttribute('readonly', '');
  tempTextarea.style.position = 'fixed';
  tempTextarea.style.top = '-9999px';
  tempTextarea.style.left = '-9999px';
  document.body.appendChild(tempTextarea);
  tempTextarea.select();
  tempTextarea.setSelectionRange(0, tempTextarea.value.length);

  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch (err) {
    copied = false;
  }
  document.body.removeChild(tempTextarea);
  return copied;
}

function sendToWhatsApp() {
  const message = buildFormattedMessage();
  const waUrl = `https://wa.me/${ADMIN_WA_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank', 'noopener,noreferrer');
}

function openDirectWhatsApp() {
  const msg = `Halo Admin @${IG_USERNAME}, saya mau tanya-tanya layanan joki Genshin Impact-nya ya!`;
  const waUrl = `https://wa.me/${ADMIN_WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank', 'noopener,noreferrer');
}

function copyAndOpenInstagram() {
  const message = buildFormattedMessage();
  copyTextToClipboard(message);
  showToast(`Format pesan disalin! Silakan paste di DM @${IG_USERNAME}`);
  window.open(IG_PROFILE_URL, '_blank', 'noopener,noreferrer');
}

function showToast(text) {
  const toastEl = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-message');
  if (!toastEl || !toastMsg) return;

  toastMsg.textContent = text;
  toastEl.classList.remove('opacity-0', 'translate-y-4');
  toastEl.classList.add('opacity-100', 'translate-y-0');

  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  toastTimeout = setTimeout(() => {
    toastEl.classList.add('opacity-0', 'translate-y-4');
    toastEl.classList.remove('opacity-100', 'translate-y-0');
  }, 4000);
}

document.addEventListener('DOMContentLoaded', () => {
  populatePackageDropdown('rawat-akun', 'bulanan-120k');
  handleTopicChange();
});
