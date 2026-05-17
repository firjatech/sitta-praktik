const { createApp } = Vue;

createApp({
    data() {
        return {
            // Mengambil dari variabel global yang dideklarasikan di dataBahanAjar.js
            stokItems: [...window.stokBahanAjar],
            upbjjList: window.upbjjList,
            kategoriList: window.kategoriList,

            // State untuk filter
            filterUpbjj: '',
            filterKategori: '',
            filterStatus: 'all', // 'all', 'menipis', 'kosong'
            sortBy: 'namaMk', // 'namaMk', 'qty'

            // State untuk modal form
            showAddModal: false,
            showEditModal: false,
            
            // Temporary object untuk menampung input form (di-bind menggunakan v-model)
            formData: {
                kodeMk: '',
                namaMk: '',
                kategori: '',
                upbjj: '',
                lokasiRak: '',
                qty: 0,
                safety: 0,
                catatanHTML: ''
            },
            
            // Menyimpan objek asli yang sedang diedit (referensi)
            editingItemRef: null
        }
    },
    computed: {
        // Computed property yang akan me-recalculate list saat filter atau sort diubah
        filteredAndSortedStok() {
            let result = this.stokItems;

            // Filter by UPBJJ
            if (this.filterUpbjj) {
                result = result.filter(item => item.upbjj === this.filterUpbjj);
            }

            // Filter by Kategori
            if (this.filterKategori) {
                result = result.filter(item => item.kategori === this.filterKategori);
            }

            // Filter by Status (Radio Buttons)
            if (this.filterStatus === 'menipis') {
                result = result.filter(item => item.qty < item.safety && item.qty > 0);
            } else if (this.filterStatus === 'kosong') {
                result = result.filter(item => item.qty === 0);
            }

            // Sorting logic
            result = result.sort((a, b) => {
                if (this.sortBy === 'namaMk') {
                    return a.namaMk.localeCompare(b.namaMk);
                } else if (this.sortBy === 'qty') {
                    return a.qty - b.qty;
                } else if (this.sortBy === 'harga') {
                    return a.harga - b.harga;
                }
                return 0;
            });

            return result;
        }
    },
    watch: {
        // Watcher untuk memantau perubahan filterUpbjj
        // Jika UPBJJ di-reset (kosong), maka Kategori juga harus direset
        filterUpbjj(newValue) {
            if (!newValue) {
                this.filterKategori = '';
            }
        }
    },
    methods: {
        resetFilters() {
            this.filterUpbjj = '';
            this.filterKategori = '';
            this.filterStatus = 'all';
            this.sortBy = 'namaMk';
        },
        openAddModal() {
            this.resetFormData();
            this.showAddModal = true;
        },
        openEditModal(item) {
            this.editingItemRef = item;
            // Copy data dari item ke formData untuk di-edit agar tidak reaktif secara instan sebelum disave
            this.formData = { ...item };
            this.showEditModal = true;
        },
        closeModals() {
            this.showAddModal = false;
            this.showEditModal = false;
        },
        saveAdd() {
            // Validasi manual tambahan (meskipun HTML5 required & min=0 sudah ada)
            if (this.formData.qty < 0 || this.formData.safety < 0) {
                alert("Jumlah stok dan safety stock tidak boleh negatif!");
                return;
            }

            // Push object baru ke array stokItems
            this.stokItems.push({ ...this.formData });
            alert("Bahan ajar baru berhasil ditambahkan!");
            this.closeModals();
        },
        saveEdit() {
            if (this.formData.qty < 0 || this.formData.safety < 0) {
                alert("Jumlah stok dan safety stock tidak boleh negatif!");
                return;
            }

            // Menerapkan perubahan ke objek referensi asli
            if (this.editingItemRef) {
                this.editingItemRef.lokasiRak = this.formData.lokasiRak;
                this.editingItemRef.qty = this.formData.qty;
                this.editingItemRef.safety = this.formData.safety;
                this.editingItemRef.catatanHTML = this.formData.catatanHTML;
            }
            
            alert("Perubahan berhasil disimpan!");
            this.closeModals();
        },
        resetFormData() {
            this.formData = {
                kodeMk: '',
                namaMk: '',
                kategori: '',
                upbjj: '',
                lokasiRak: '',
                qty: 0,
                safety: 0,
                harga: 0,
                catatanHTML: ''
            };
        },
        formatRupiah(number) {
            return new Intl.NumberFormat('id-ID').format(number);
        }
    }
}).mount('#app');
