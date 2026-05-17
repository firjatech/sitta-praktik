// Global functions for SITTA

// Modal Handling
function openModal(id) {
    document.getElementById(id).style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function (event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeModal(event.target.id);
    }
}

// Greeting Logic
function getGreeting(name) {
    const hour = new Date().getHours();
    let greeting = "";

    if (hour >= 0 && hour < 12) greeting = "Selamat pagi";
    else if (hour >= 12 && hour < 15) greeting = "Selamat siang";
    else if (hour >= 15 && hour < 18) greeting = "Selamat sore";
    else greeting = "Selamat malam";

    return `${greeting}, ${name}.`;
}

// Currency Formatter
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
}

// Navbar/Sidebar Component (Inject into pages)
function initNavigation() {
    const nav = document.querySelector('nav') || document.querySelector('.navbar');
    if (nav && !nav.innerHTML.trim()) {
        nav.innerHTML = `
            <div class="logo-container">
                <span class="hamburger" id="hamburgerBtn">☰</span>
                <img src="assets/logo-ut.png" alt="Logo UT" style="height: 40px;">
                <div class="logo-text">SITTA</div>
            </div>
            <div class="nav-links">
                <a href="dashboard.html" class="${window.location.pathname.includes('dashboard') ? 'active' : ''}">Dashboard</a>
                <a href="tracking.html" class="${window.location.pathname.includes('tracking') ? 'active' : ''}">Tracking</a>
                <a href="stok.html" class="${window.location.pathname.includes('stok') ? 'active' : ''}">Informasi Stok</a>

                <a href="index.html" class="logout-link" onclick="localStorage.removeItem('user')">Keluar</a>
            </div>
        `;
    }
}

// Sidebar Component for Dashboard/Stok
function initSidebar() {
    // Sidebar removed as per user request
}

// Page Initialization
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSidebar();

    // Mobile Interactivity
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const sidebar = document.querySelector('.sidebar');
    
    if (hamburgerBtn && sidebar) {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        document.body.appendChild(overlay);
        
        hamburgerBtn.addEventListener('click', () => {
            sidebar.classList.toggle('show');
            overlay.classList.toggle('show');
        });
        
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('show');
            overlay.classList.remove('show');
        });
        
        // Close sidebar on link click (mobile)
        const sidebarLinks = sidebar.querySelectorAll('.sidebar-link:not(.dropdown-toggle)');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('show');
                    overlay.classList.remove('show');
                }
            });
        });
    }

    // Check Auth
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user && !window.location.pathname.includes('index.html') && window.location.pathname !== '/') {
        window.location.href = 'index.html';
    }
});
