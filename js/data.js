const dataBahanAjar = [
    { kodeLokasi: "OTMP01", kodeBarang: "ASIP4301", namaBarang: "kepemimpinan", jenis: "BMP", edisi: 2, stok: 548, gambar: "assets/kepemimpinan.jpg" },
    { kodeLokasi: "OTMP02", kodeBarang: "PAUD4101", namaBarang: "manajemen keuangan", jenis: "BMP", edisi: 3, stok: 120, gambar: "assets/manajemen keuangan.jpg" },
    { kodeLokasi: "OTMP03", kodeBarang: "EKMA4111", namaBarang: "mikrobiologi", jenis: "BMP", edisi: 3, stok: 340, gambar: "assets/mikrobiologi.jpg" },
    { kodeLokasi: "OTMP01", kodeBarang: "IPEM4317", namaBarang: "paud perkembangan", jenis: "BMP", edisi: 2, stok: 215, gambar: "assets/paud perkembangan.jpeg" },
    { kodeLokasi: "OTMP04", kodeBarang: "MKDU4110", namaBarang: "pengantar_komunikasi", jenis: "BMP", edisi: 3, stok: 890, gambar: "assets/pengantar komunikasi.jpg" }
];

const dataTracking = {
    "DO/UT/001": {
        noDO: "DO/UT/001",
        layanan: "Reguler",
        tglKirim: "2025-03-10",
        ekspedisi: "UT LOGISTIK",
        totalBayar: 125000,
        status: "Dalam Perjalanan",
        estimasiTiba: "2025-03-20",
        pengirim: { 
            nama: "Universitas Terbuka", 
            alamat: "Jl. Cabe Raya, Pondok Cabe, Tangerang Selatan", 
            telp: "(021) 1234567" 
        },
        penerima: { 
            nama: "ROIKA HEPRIDA SITO", 
            alamat: "JALAN DARUJI LAUT TAHUKI 03, KELURAHAN PEMATANGGANTAH", 
            telp: "08123456789" 
        },
        timeline: [
            { waktu: "10 Mar 2025, 15:56:02", status: "Penerimaan di loket", lokasi: "TANGKANGGELATAN", petugas: "Rookie", code: "selesai" },
            { waktu: "10 Mar 2025, 16:37:02", status: "Tiba di Hub", lokasi: "TANGKANGGELATAN", petugas: "Rookie", code: "selesai" },
            { waktu: "11 Mar 2025, 14:06:13", status: "Diteruskan ke Kantor Antaran Subkategori", lokasi: "-", petugas: "Rookie", code: "selesai" },
            { waktu: "12 Mar 2025, 22:06:42", status: "Tiba di Hub SPP", lokasi: "MEDAN", petugas: "Rookie", code: "proses" },
            { waktu: "20 Mar 2025, 09:05:06", status: "Proses sortir", lokasi: "PEMATANGGANTAH", petugas: "Rookie", code: "proses" },
            { waktu: "20 Mar 2025, 10:30:00", status: "Sedang dikirim ke alamat tujuan", lokasi: "PEMATANGGANTAH", petugas: "Rookie", code: "belum" }
        ]
    }
};

const dataHistoriTransaksi = [
    { noDO: "DO/UT/001", tanggal: "2025-03-10", item: "ASIP4301", jumlah: 2, status: "Dalam Pengiriman" },
    { noDO: "DO/UT/002", tanggal: "2025-03-05", item: "PAUD4101", jumlah: 1, status: "Selesai" },
    { noDO: "DO/UT/003", tanggal: "2025-03-12", item: "EKMA4111", jumlah: 5, status: "Proses Packing" }
];

const dataMonitoringDO = [
    { status: "Selesai", count: 120, color: "#10B981" },
    { status: "Dalam Pengiriman", count: 45, color: "#F59E0B" },
    { status: "Pending", count: 12, color: "#6B7280" }
];
