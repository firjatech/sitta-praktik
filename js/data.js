const upbjjList = ["Jakarta", "Surabaya", "Makassar", "Padang", "Denpasar"];
const kategoriList = ["MK Wajib", "MK Pilihan", "Praktikum", "Problem-Based"];
const pengirimanList = [
    { kode: "REG", nama: "Reguler (3-5 hari)" },
    { kode: "EXP", nama: "Ekspres (1-2 hari)" }
];
const paketList = [
    { kode: "PAKET-UT-001", nama: "PAKET IPS Dasar", isi: ["EKMA4116","EKMA4115"], harga: 120000 },
    { kode: "PAKET-UT-002", nama: "PAKET IPA Dasar", isi: ["BIOL4201","FISIP4001"], harga: 140000 }
];

const dataBahanAjar = [
    {
        kode: "EKMA4116",
        judul: "Pengantar Manajemen",
        kategori: "MK Wajib",
        upbjj: "Jakarta",
        lokasiRak: "R1-A3",
        harga: 65000,
        qty: 28,
        safety: 20,
        catatanHTML: "<em>Edisi 2024, cetak ulang</em>",
        gambar: "assets/kepemimpinan.jpg"
    },
    {
        kode: "EKMA4115",
        judul: "Pengantar Akuntansi",
        kategori: "MK Wajib",
        upbjj: "Jakarta",
        lokasiRak: "R1-A4",
        harga: 60000,
        qty: 7,
        safety: 15,
        catatanHTML: "<strong>Cover baru</strong>",
        gambar: "assets/manajemen keuangan.jpg"
    },
    {
        kode: "BIOL4201",
        judul: "Biologi Umum (Praktikum)",
        kategori: "Praktikum",
        upbjj: "Surabaya",
        lokasiRak: "R3-B2",
        harga: 80000,
        qty: 12,
        safety: 10,
        catatanHTML: "Butuh <u>pendingin</u> untuk kit basah",
        gambar: "assets/mikrobiologi.jpg"
    },
    {
        kode: "FISIP4001",
        judul: "Dasar-Dasar Sosiologi",
        kategori: "MK Pilihan",
        upbjj: "Makassar",
        lokasiRak: "R2-C1",
        harga: 55000,
        qty: 2,
        safety: 8,
        catatanHTML: "Stok <i>menipis</i>, prioritaskan reorder",
        gambar: "assets/pengantar komunikasi.jpg"
    }
];

const dataTracking = {
    "DO2025-0001": {
        nim: "123456789",
        nama: "Rina Wulandari",
        status: "Dalam Perjalanan",
        ekspedisi: "JNE",
        tanggalKirim: "2025-08-25",
        paket: "PAKET-UT-001",
        total: 120000,
        perjalanan: [
            { waktu: "2025-08-25 10:12:20", keterangan: "Penerimaan di Loket: TANGSEL" },
            { waktu: "2025-08-25 14:07:56", keterangan: "Tiba di Hub: JAKSEL" },
            { waktu: "2025-08-26 08:44:01", keterangan: "Diteruskan ke Kantor Tujuan" }
        ]
    },
    "DO2025-0002": {
        nim: "987654321",
        nama: "Andi Saputra",
        status: "Selesai",
        ekspedisi: "Pos Indonesia",
        tanggalKirim: "2025-08-24",
        paket: "PAKET-UT-002",
        total: 140000,
        perjalanan: [
            { waktu: "2025-08-24 09:00:00", keterangan: "Paket Diproses di Gudang UT" },
            { waktu: "2025-08-25 08:15:00", keterangan: "Paket Dibawa Kurir" },
            { waktu: "2025-08-26 13:45:00", keterangan: "Paket Telah Diterima (Oleh: Andi)" }
        ]
    },
    "DO2025-0003": {
        nim: "456789123",
        nama: "Budi Santoso",
        status: "Pending",
        ekspedisi: "UT Logistik",
        tanggalKirim: "2025-08-26",
        paket: "Buku EKMA4116",
        total: 65000,
        perjalanan: [
            { waktu: "2025-08-26 07:30:00", keterangan: "Menunggu Pengambilan Kurir" }
        ]
    }
};

const dataHistoriTransaksi = [
    { noDO: "DO2025-0001", tanggal: "2025-08-25", item: "PAKET-UT-001", jumlah: 1, status: "Dalam Perjalanan" },
    { noDO: "DO2025-0002", tanggal: "2025-08-24", item: "PAKET-UT-002", jumlah: 2, status: "Selesai" },
    { noDO: "DO2025-0003", tanggal: "2025-08-26", item: "Buku EKMA4116", jumlah: 5, status: "Pending" }
];

const dataMonitoringDO = [
    { status: "Selesai", count: 120, color: "#10B981" },
    { status: "Dalam Perjalanan", count: 45, color: "#F59E0B" },
    { status: "Pending", count: 12, color: "#6B7280" }
];
