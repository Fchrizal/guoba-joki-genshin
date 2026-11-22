/**
 * MASTER DATA LAYANAN & PAKET JOKI
 */
const SERVICE_PACKAGES = {
  'rawat-akun': [
    {
      id: 'bulanan-120k',
      label: 'Paket Full Bulanan (30 Hari) — Rp 120k / Bulan',
      price: 'Rp 120k / Bulan',
      note: 'Daily Commission + klaim hadiah harian, Habiskan 200 Resin (Artifact/Talent/Weapon/Boss), Progress Character & Weapon, Farming Mora & Buku EXP, Imaginarium Theater, Stygian Onslaught, Spiral Abyss (menyesuaikan kondisi akun). *Kecuali Event.'
    },
    {
      id: 'lite-harian-5k',
      label: 'Paket Lite Harian — Rp 5k / Hari',
      price: 'Rp 5k / Hari',
      note: 'Daily Commission + 200 Resin Only. *Kecuali Event.'
    },
    {
      id: 'lite-mingguan-35k',
      label: 'Paket Lite Mingguan — Rp 35k / Minggu',
      price: 'Rp 35k / Minggu',
      note: 'Daily Commission + 200 Resin Only. *Kecuali Event.'
    }
  ],
  'event-patch': [
    {
      id: 'event-phase1-100k',
      label: 'Paruh Pertama (Phase 1) — Rp 100k',
      price: 'Rp 100k',
      note: 'Selesai semua Flagship & Mini Event Phase 1, klaim seluruh Primogems, Crown, item & material event. *Kecuali Event Eksplorasi.'
    },
    {
      id: 'event-phase2-50k',
      label: 'Paruh Kedua (Phase 2) — Rp 50k',
      price: 'Rp 50k',
      note: 'Selesai semua Flagship & Mini Event Phase 2, klaim seluruh Primogems, Crown, item & material event. *Kecuali Event Eksplorasi.'
    },
    {
      id: 'event-full-130k',
      label: 'Satu Patch Full (Phase 1 + 2) — Rp 130k (Hemat 20k!)',
      price: 'Rp 130k (Hemat 20k!)',
      note: 'Selesai semua Flagship & Mini Event Phase 1 + 2, klaim seluruh Primogems, Crown, item & material event. *Kecuali Event Eksplorasi.'
    }
  ],
  'eksplorasi-map': [
    {
      id: 'eksplorasi-snezhnaya-120k',
      label: 'Snezhnaya Full 100% — Rp 120k',
      price: 'Rp 120k (dari 0% progres)',
      note: 'Buka semua Teleport Waypoint & Statue of the Seven, cari semua Oculus, buka semua Chest, selesaikan puzzle/challenge & World Quest terkait. Bisa menyesuaikan jika akun sudah ada progres.'
    },
    {
      id: 'eksplorasi-nodkrai-120k',
      label: 'Nod-Krai Full 100% — Rp 120k',
      price: 'Rp 120k (dari 0% progres)',
      note: 'Buka semua Teleport Waypoint & Statue of the Seven, cari semua Oculus, buka semua Chest, selesaikan puzzle/challenge & World Quest terkait. Bisa menyesuaikan jika akun sudah ada progres.'
    }
  ]
};
