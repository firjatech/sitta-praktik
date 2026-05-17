const stokBahanAjar = [
    { kodeMk: "EKMA4116", namaMk: "Pengantar Manajemen", kategori: "Manajemen", upbjj: "UT Jakarta", lokasiRak: "A-101", qty: 25, safety: 10, harga: 65000, catatanHTML: "<em>Buku Edisi 2</em>" },
    { kodeMk: "MKDU4110", namaMk: "Bahasa Indonesia", kategori: "Dasar", upbjj: "UT Jakarta", lokasiRak: "A-102", qty: 5, safety: 15, harga: 55000, catatanHTML: "<span style='color:red; font-weight:bold;'>Prioritas Restock</span>" },
    { kodeMk: "HKUM4201", namaMk: "Hukum Tata Negara", kategori: "Hukum", upbjj: "UT Bandung", lokasiRak: "B-201", qty: 30, safety: 10, harga: 75000, catatanHTML: "Edisi Revisi" },
    { kodeMk: "ISIP4130", namaMk: "Pengantar Ilmu Hukum", kategori: "Hukum", upbjj: "UT Bandung", lokasiRak: "B-202", qty: 0, safety: 5, harga: 70000, catatanHTML: "<b>KOSONG</b> - sedang dicetak" },
    { kodeMk: "MSIM4101", namaMk: "Pengantar Sistem Informasi", kategori: "Sistem Informasi", upbjj: "UT Surabaya", lokasiRak: "C-301", qty: 12, safety: 15, harga: 85000, catatanHTML: "Modul Praktikum Terpisah" },
    { kodeMk: "PAUD4101", namaMk: "Metode Pengembangan Kognitif", kategori: "Pendidikan", upbjj: "UT Surabaya", lokasiRak: "C-302", qty: 50, safety: 20, harga: 60000, catatanHTML: "-" },
    { kodeMk: "EKMA4215", namaMk: "Manajemen Operasi", kategori: "Manajemen", upbjj: "UT Jakarta", lokasiRak: "A-103", qty: 8, safety: 10, harga: 68000, catatanHTML: "Gunakan untuk paket" }
];

const upbjjList = ["UT Jakarta", "UT Bandung", "UT Surabaya", "UT Semarang", "UT Makassar"];

const kategoriList = ["Manajemen", "Dasar", "Hukum", "Sistem Informasi", "Pendidikan"];

const pengirimanList = ["JNE Regular", "JNE Express"];

const paketBahanAjar = [
    { kodePaket: "PKT-MAN-1", namaPaket: "Paket Manajemen Semester 1", daftarMataKuliah: ["EKMA4116", "MKDU4110", "EKMA4215"], harga: 150000 },
    { kodePaket: "PKT-HKM-1", namaPaket: "Paket Hukum Semester 1", daftarMataKuliah: ["HKUM4201", "ISIP4130", "MKDU4110"], harga: 135000 },
    { kodePaket: "PKT-SI-1", namaPaket: "Paket Sistem Informasi Sem 1", daftarMataKuliah: ["MSIM4101", "MKDU4110"], harga: 90000 }
];

// Ekspos ke global window untuk diakses di script lain
window.stokBahanAjar = stokBahanAjar;
window.upbjjList = upbjjList;
window.kategoriList = kategoriList;
window.pengirimanList = pengirimanList;
window.paketBahanAjar = paketBahanAjar;
