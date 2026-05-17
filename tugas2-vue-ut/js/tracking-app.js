const { createApp } = Vue;

createApp({
    data() {
        return {
            // Data Global
            paketList: window.paketBahanAjar,
            pengirimanList: window.pengirimanList,

            // LocalStorage State
            doList: [],

            // State Form
            form: {
                nim: '',
                nama: '',
                ekspedisi: '',
                paketKode: '',
                tanggalKirim: new Date().toISOString().split('T')[0] // Set default hari ini YYYY-MM-DD
            },

            // State Preview Paket yang diisi oleh Watcher
            previewIsiPaket: []
        }
    },
    computed: {
        // Auto-generate Nomor DO berdasarkan tahun dan counter/length array
        nextDoId() {
            const tahun = new Date().getFullYear();
            const seq = this.doList.length + 1;
            // Pad start dengan 3 digit (001, 002, dst)
            const paddedSeq = seq.toString().padStart(3, '0');
            return `DO${tahun}-${paddedSeq}`;
        },
        // Auto-kalkulasi Harga
        totalHarga() {
            const paket = this.paketList.find(p => p.kodePaket === this.form.paketKode);
            return paket ? paket.harga : 0;
        }
    },
    watch: {
        // Watcher memantau property `form.paketKode`. 
        // Jika kode paket yang dipilih berubah, update array previewIsiPaket.
        'form.paketKode'(newVal) {
            if (newVal) {
                const paket = this.paketList.find(p => p.kodePaket === newVal);
                if (paket) {
                    this.previewIsiPaket = paket.daftarMataKuliah;
                } else {
                    this.previewIsiPaket = [];
                }
            } else {
                this.previewIsiPaket = [];
            }
        },

        // Watcher memantau array `doList` menggunakan deep watch
        // agar auto-save ke localStorage setiap ada perubahan (tambah/hapus)
        doList: {
            handler(newVal) {
                localStorage.setItem('sitta_ut_do_list', JSON.stringify(newVal));
            },
            deep: true
        }
    },
    mounted() {
        // Lifecycle Hook: Saat Vue app dimount, baca data dari localStorage
        const savedData = localStorage.getItem('sitta_ut_do_list');
        if (savedData) {
            try {
                this.doList = JSON.parse(savedData);
            } catch (e) {
                console.error("Gagal parse localStorage:", e);
                this.doList = [];
            }
        }
    },
    methods: {
        submitDO() {
            // Ambil nama paket berdasarkan kode
            const paket = this.paketList.find(p => p.kodePaket === this.form.paketKode);
            const namaPaket = paket ? paket.namaPaket : '-';

            // Construct object baru
            const newDO = {
                noDo: this.nextDoId,
                nim: this.form.nim,
                nama: this.form.nama,
                ekspedisi: this.form.ekspedisi,
                paketKode: this.form.paketKode,
                namaPaket: namaPaket,
                tanggalKirim: this.form.tanggalKirim,
                totalHarga: this.totalHarga
            };

            // Masukkan ke state (akan otomatis men-trigger watcher doList untuk save ke localStorage)
            this.doList.unshift(newDO); // Push ke awal agar yang terbaru di atas

            alert(`Berhasil membuat Delivery Order dengan nomor: ${newDO.noDo}`);
            this.resetForm();
        },
        resetForm() {
            this.form.nim = '';
            this.form.nama = '';
            this.form.ekspedisi = '';
            this.form.paketKode = '';
            this.previewIsiPaket = [];
        },
        deleteDO(index) {
            const konfirmasi = confirm("Apakah Anda yakin ingin menghapus riwayat DO ini?");
            if (konfirmasi) {
                this.doList.splice(index, 1);
            }
        },
        formatRupiah(number) {
            return new Intl.NumberFormat('id-ID').format(number);
        },
        formatDate(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const date = new Date(dateString);
            return date.toLocaleDateString('id-ID', options);
        }
    }
}).mount('#app');
