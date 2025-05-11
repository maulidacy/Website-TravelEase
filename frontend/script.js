//============================== Navbar start ===============================
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());
//============================== Navbar end ===============================

//============================== slideshow Home section start ===============================
let slideIndex = 0;
const slides = Array.from(document.querySelectorAll('.slide'));
const totalSlides = slides.length;

function showSlides() {
        slides[slideIndex].classList.remove("active");
        slideIndex = (slideIndex + 1) % totalSlides; // Geser ke slide berikutnya
        slides[slideIndex].classList.add("active");

        // Geser slideshow
        const slideshowContainer = document.getElementById("slideshow");
        slideshowContainer.style.transform = `translateX(-${slideIndex * 100}%)`;

        setTimeout(showSlides, 5000); // Ganti slide setiap 5 detik
    }

if (totalSlides > 0) {
    showSlides(); // Mulai slideshow
}
//============================== slideshow Home section end ===============================

//============================== Form Modal start ===============================
// Data destinasi wisata (dapat diganti dengan data dari API/database)
const destinationData = [
    {
        id: 1,
        name: "Gunung Bromo",
        location: "Jawa Timur",
        region: "jawa",
        price: 300000,
        rating: 4.5,
        category: "hemat",
        activity: "alam",
        image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Nikmati sunrise spektakuler di kawasan Gunung Bromo dengan bukit pasir dan kawah yang memukau."
    },
    {
        id: 2,
        name: "Pantai Kuta",
        location: "Bali",
        region: "bali",
        price: 500000,
        rating: 4.2,
        category: "standar",
        activity: "alam",
        image: "https://images.unsplash.com/photo-1518544866330-95b331ed9cd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Pantai populer dengan ombak yang bagus untuk berselancar dan sunset yang indah."
    },
    {
        id: 3,
        name: "Danau Toba",
        location: "Sumatera Utara",
        region: "sumatera",
        price: 800000,
        rating: 4.7,
        category: "standar",
        activity: "alam",
        image: "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Danau vulkanik terbesar di dunia dengan pemandangan alam yang memesona."
    },
    {
        id: 4,
        name: "Ubud",
        location: "Bali",
        region: "bali",
        price: 1200000,
        rating: 4.8,
        category: "mewah",
        activity: "budaya",
        image: "https://images.unsplash.com/photo-1528158222524-d4d912d2e208?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Pusat seni dan budaya Bali dengan hutan hijau, terasering sawah, dan kuil-kuil indah."
    },
    {
        id: 5,
        name: "Kebun Raya Bogor",
        location: "Jawa Barat",
        region: "jawa",
        price: 250000,
        rating: 4.3,
        category: "hemat",
        activity: "alam",
        image: "https://images.unsplash.com/photo-1598890777037-a5d24d1bbf08?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Kebun botani dengan koleksi tanaman tropis yang lengkap dan pemandangan yang asri."
    },
    {
        id: 6,
        name: "Jalan Malioboro",
        location: "Yogyakarta",
        region: "jawa",
        price: 400000,
        rating: 4.0,
        category: "standar",
        activity: "belanja",
        image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Jalan terkenal untuk berbelanja oleh-oleh khas Yogyakarta dan menikmati kuliner lokal."
    },
    {
        id: 7,
        name: "Raja Ampat",
        location: "Papua Barat",
        region: "papua",
        price: 2500000,
        rating: 4.9,
        category: "mewah",
        activity: "alam",
        image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Surga penyelam dengan keanekaragaman hayati laut terbaik di dunia."
    },
    {
        id: 8,
        name: "Kampung Pelangi",
        location: "Semarang",
        region: "jawa",
        price: 200000,
        rating: 3.8,
        category: "hemat",
        activity: "budaya",
        image: "https://images.unsplash.com/photo-1586861203738-2ae5a5d602f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Kampung warna-warni yang instagramable dengan mural kreatif di setiap sudutnya."
    },
    {
        id: 9,
        name: "Puncak Bogor",
        location: "Jawa Barat",
        region: "jawa",
        price: 600000,
        rating: 4.1,
        category: "standar",
        activity: "alam",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Kawasan peristirahatan dengan udara sejuk, perkebunan teh, dan villa-villa mewah."
    },
    {
        id: 10,
        name: "The Sacred Monkey Forest",
        location: "Bali",
        region: "bali",
        price: 150000,
        rating: 4.4,
        category: "hemat",
        activity: "alam",
        image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Hutan suci yang dihuni oleh ratusan monyet dan dilengkapi dengan kuil-kuil kuno."
    }
];

// Fungsi untuk menentukan kategori budget
function determineBudgetCategory(totalBudget, duration) {
    const budgetPerDay = totalBudget / duration;
    
    if (budgetPerDay < 500000) {
        return "hemat";
    } else if (budgetPerDay >= 500000 && budgetPerDay < 1500000) {
        return "standar";
    } else {
        return "mewah";
    }
}

// Fungsi untuk memformat angka ke format Rupiah
function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(angka).replace(",00", "");
}

// Fungsi untuk menampilkan rekomendasi destinasi
function displayRecommendations(destinations) {
    const recommendationList = document.getElementById('recommendation-list');
    recommendationList.innerHTML = '';
    
    if (destinations.length === 0) {
        recommendationList.innerHTML = '<p class="no-result">Tidak ada destinasi yang sesuai dengan filter Anda.</p>';
        return;
    }
    
    destinations.forEach(destination => {
        const stars = '★'.repeat(Math.floor(destination.rating)) + '☆'.repeat(5 - Math.floor(destination.rating));
        
        const card = document.createElement('div');
        card.className = 'recommendation-card';
        card.innerHTML = `
            <img src="${destination.image}" alt="${destination.name}" class="recommendation-image">
            <div class="recommendation-content">
                <h3 class="recommendation-title">${destination.name}</h3>
                <div class="recommendation-location">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>${destination.location}</span>
                </div>
                <div class="recommendation-price">${formatRupiah(destination.price)}/orang</div>
                <div class="recommendation-rating">
                    <span>${stars}</span>
                    <span>(${destination.rating})</span>
                </div>
                <span class="recommendation-category category-${destination.category}">${destination.category.toUpperCase()}</span>
                <p class="recommendation-description">${destination.description}</p>
            </div>
        `;
        
        recommendationList.appendChild(card);
    });
}

// Fungsi untuk memfilter destinasi berdasarkan preferensi pengguna
function filterDestinations(userData) {
    const category = userData.category;
    const activity = userData.activity;
    const budgetPerDay = (userData.budget - userData.transport - userData.accommodation) / userData.duration;
    
    // Filter berdasarkan kategori budget dan aktivitas
    let filtered = destinationData.filter(dest => {
        return dest.category === category && 
               (dest.activity === activity || activity === "campuran") &&
               dest.price <= budgetPerDay;
    });
    
    // Jika hasil terlalu sedikit, longgarkan kriteria aktivitas
    if (filtered.length < 3) {
        filtered = destinationData.filter(dest => {
            return dest.category === category && 
                   dest.price <= budgetPerDay;
        });
    }
    
    // Jika masih sedikit, longgarkan kriteria kategori
    if (filtered.length < 3) {
        filtered = destinationData.filter(dest => {
            return dest.price <= budgetPerDay * 1.5;
        });
    }
    
    // Batasi jumlah rekomendasi
    return filtered.slice(0, userData.places);
}

// Fungsi untuk menerapkan filter tambahan
function applyAdditionalFilters(destinations, filters) {
    let filtered = [...destinations];
    
    if (filters.location !== "semua") {
        filtered = filtered.filter(dest => dest.region === filters.location);
    }
    
    if (filters.category !== "semua") {
        filtered = filtered.filter(dest => dest.category === filters.category);
    }
    
    if (filters.rating > 0) {
        filtered = filtered.filter(dest => dest.rating >= filters.rating);
    }
    
    return filtered;
}

// Event listener untuk form submission
const holidayForm = document.getElementById('holiday-form');
if (holidayForm) {
    holidayForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Ambil data dari form
        const userData = {
            budget: parseInt(document.getElementById('budget').value),
            duration: parseInt(document.getElementById('duration').value),
            transport: parseInt(document.getElementById('transport').value),
            accommodation: parseInt(document.getElementById('accommodation').value),
            activity: document.getElementById('activity').value,
            places: parseInt(document.getElementById('places').value),
            notes: document.getElementById('notes').value
        };
        
        // Tentukan kategori budget
        userData.category = determineBudgetCategory(userData.budget, userData.duration);
        
        // Simpan data pengguna ke localStorage
        localStorage.setItem('userData', JSON.stringify(userData));
        
        // Redirect ke halaman rekomendasi-liburan.html
        window.location.href = 'rekomendasi-liburan.html';
    });
}

// Jika halaman adalah rekomendasi-liburan.html, tampilkan rekomendasi berdasarkan data dari localStorage
if (window.location.pathname.endsWith('rekomendasi-liburan.html')) {
    // Ambil data user dari localStorage
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
        const userData = JSON.parse(userDataString);
        
        // Filter destinasi
        const recommendedDestinations = filterDestinations(userData);
        window.currentRecommendations = recommendedDestinations;
        
        // Update summary
        document.getElementById('total-budget-display').textContent = formatRupiah(userData.budget);
        document.getElementById('category-display').textContent = userData.category.toUpperCase();
        document.getElementById('duration-display').textContent = `${userData.duration} Hari`;
        
        // Tampilkan rekomendasi awal
        displayRecommendations(recommendedDestinations);
        
        // Event listener untuk tombol filter
        const applyFilterBtn = document.getElementById('apply-filter');
        if (applyFilterBtn) {
            applyFilterBtn.addEventListener('click', function() {
                const filters = {
                    location: document.getElementById('location-filter').value,
                    category: document.getElementById('category-filter').value,
                    rating: parseInt(document.getElementById('rating-filter').value)
                };
                
                const filteredDestinations = applyAdditionalFilters(window.currentRecommendations, filters);
                displayRecommendations(filteredDestinations);
            });
        }
    } else {
        // Jika tidak ada data user, bisa redirect kembali ke halaman form atau tampilkan pesan
        document.getElementById('result-container').innerHTML = '<p>Data form tidak ditemukan. Silakan isi form terlebih dahulu.</p>';
    }
}
//============================== Form Modal end ==============================
