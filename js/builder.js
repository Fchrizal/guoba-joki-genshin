/**
 * LOGIKA FORMULIR ORDER & TANYA ADMIN
 */

function populatePackageDropdown(categoryKey, targetPackageId = null) {
  const packageSelect = document.getElementById('order-package');
  if (!packageSelect) return;

  const items = SERVICE_PACKAGES[categoryKey] || [];
  packageSelect.innerHTML = '';

  items.forEach((item) => {
    const opt = document.createElement('option');
    opt.value = item.id;
    opt.textContent = item.label;
    packageSelect.appendChild(opt);
  });

  if (targetPackageId) {
    packageSelect.value = targetPackageId;
  }

  handlePackageChange();
}

function handleCategoryChange() {
  const categoryKey = document.getElementById('order-category').value;
  populatePackageDropdown(categoryKey);
}

function handlePackageChange() {
  const categoryKey = document.getElementById('order-category').value;
  const packageId = document.getElementById('order-package').value;
  const items = SERVICE_PACKAGES[categoryKey] || [];
  const selected = items.find((item) => item.id === packageId) || items[0];

  if (selected) {
    const priceEl = document.getElementById('selected-package-price');
    const noteEl = document.getElementById('selected-package-note');
    if (priceEl) priceEl.textContent = selected.price;
    if (noteEl) noteEl.textContent = selected.note;
  }

  updateLivePreview();
}

function handleTopicChange() {
  const topic = document.getElementById('tanya-topic').value;
  const qEl = document.getElementById('tanya-question');
  if (!qEl) return;

  if (topic.includes('Eksplorasi')) {
    qEl.placeholder = 'Contoh: Progres map Snezhnaya / Nod-Krai di akun saya saat ini sudah sekitar 45%, kena harga berapa ya Min?';
  } else if (topic.includes('Slot')) {
    qEl.placeholder = 'Contoh: Slot joki Rawat Akun Bulanan / Event Patch untuk minggu ini masih tersedia ya Min?';
  } else if (topic.includes('Custom')) {
    qEl.placeholder = 'Contoh: Mau tanya jasa Archon Quest / World Quest / farming material karakter...';
  } else {
    qEl.placeholder = 'Tulis pertanyaanmu secara detail di sini...';
  }

  updateLivePreview();
}

function buildFormattedMessage() {
  if (activeBuilderTab === 'order') {
    const categorySelect = document.getElementById('order-category');
    const packageSelect = document.getElementById('order-package');
    const categoryText = categorySelect?.options[categorySelect.selectedIndex]?.text || '';
    const packageText = packageSelect?.options[packageSelect.selectedIndex]?.text || '';
    const uid = document.getElementById('order-uid')?.value.trim() || '-';
    const server = document.getElementById('order-server')?.value || 'Asia';
    const payment = document.getElementById('order-payment')?.value || 'DANA';
    const notes = document.getElementById('order-notes')?.value.trim() || '-';

    return [
      `Halo Admin @${IG_USERNAME}, saya mau order joki Genshin Impact:`,
      '',
      `• Kategori: ${categoryText}`,
      `• Paket: ${packageText}`,
      `• UID / Server: ${uid} (${server})`,
      '• Login: HoYoverse Only',
      `• Metode Pembayaran: ${payment}`,
      `• Catatan / Request: ${notes}`,
      '',
      'Mohon info ketersediaan slot & detail pembayarannya ya. Terima kasih!'
    ].join('\n');
  } else {
    const topic = document.getElementById('tanya-topic')?.value || 'Tanya Layanan';
    const question = document.getElementById('tanya-question')?.value.trim() || 'Halo Admin, saya mau tanya-tanya dulu sebelum order.';

    return [
      `Halo Admin @${IG_USERNAME}, saya mau tanya-tanya dulu:`,
      '',
      `• Topik: ${topic}`,
      `• Pertanyaan: ${question}`,
      '',
      'Terima kasih!'
    ].join('\n');
  }
}

function updateLivePreview() {
  const previewEl = document.getElementById('live-preview-text');
  if (previewEl) {
    previewEl.textContent = buildFormattedMessage();
  }
}
