// Products data embedded directly to avoid CORS issues
const productsData = [
  {
    "kategori": "Normal",
    "urunler": [
      {
        "urun_kodu": "1101",
        "fiyat": "748, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "3026",
        "fiyat": "1448, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2375",
        "fiyat": "398, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2575",
        "fiyat": "788, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "3800",
        "fiyat": "848, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "5005",
        "fiyat": "1590, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "5025",
        "fiyat": "1390, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "5040",
        "fiyat": "1350, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "5045",
        "fiyat": "1390, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "5066",
        "fiyat": "1450, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "5085",
        "fiyat": "1590, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "5100",
        "fiyat": "1090, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "5109",
        "fiyat": "1190, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1258",
        "fiyat": "488, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1234",
        "fiyat": "298, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1301",
        "fiyat": "688, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1323",
        "fiyat": "588, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1337",
        "fiyat": "698, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1434",
        "fiyat": "698, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1445",
        "fiyat": "945, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1480",
        "fiyat": "418, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1535",
        "fiyat": "358, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1583",
        "fiyat": "688, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1611",
        "fiyat": "688, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1617",
        "fiyat": "688, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1618",
        "fiyat": "298, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1619",
        "fiyat": "298, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1620",
        "fiyat": "298, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1735",
        "fiyat": "688, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1819",
        "fiyat": "388, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1827",
        "fiyat": "428, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2001",
        "fiyat": "688, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2005",
        "fiyat": "738, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2008",
        "fiyat": "548, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2009",
        "fiyat": "488, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2015",
        "fiyat": "538, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2018",
        "fiyat": "498, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2032",
        "fiyat": "558, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2033",
        "fiyat": "458, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2059",
        "fiyat": "288, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2069",
        "fiyat": "288, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2072",
        "fiyat": "268, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2073",
        "fiyat": "268, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2080",
        "fiyat": "288, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2085",
        "fiyat": "288, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2086",
        "fiyat": "288, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2088",
        "fiyat": "288, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2091",
        "fiyat": "238, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2093",
        "fiyat": "238, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2095",
        "fiyat": "238, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2096",
        "fiyat": "238, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2097",
        "fiyat": "288, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2098",
        "fiyat": "288, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2150",
        "fiyat": "358, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2355",
        "fiyat": "398, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2360",
        "fiyat": "398, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2365",
        "fiyat": "398, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "2370",
        "fiyat": "398, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "3023-Mühürsüz",
        "fiyat": "968, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "3026-Mühürsüz",
        "fiyat": "1148, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "3052",
        "fiyat": "298, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "3056",
        "fiyat": "788, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "3228",
        "fiyat": "398, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "4039",
        "fiyat": "838, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "4040",
        "fiyat": "298, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "4041",
        "fiyat": "298, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "4045",
        "fiyat": "598, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "4047",
        "fiyat": "598, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "4155",
        "fiyat": "358, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "4185",
        "fiyat": "358, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "4542",
        "fiyat": "398, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "3023",
        "fiyat": "1268, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1357",
        "fiyat": "458, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1429",
        "fiyat": "548, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1453",
        "fiyat": "548, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1530",
        "fiyat": "358, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1177",
        "fiyat": "688, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1231",
        "fiyat": "298, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1360",
        "fiyat": "458, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1026",
        "fiyat": "338, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1035",
        "fiyat": "338, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1038",
        "fiyat": "338, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1072",
        "fiyat": "338, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1085",
        "fiyat": "338, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1040",
        "fiyat": "338, 00 TL  (100 Adet)"
      }
    ]
  },
  {
    "kategori": "Sunnet",
    "urunler": [
      {
        "urun_kodu": "1001",
        "fiyat": "398, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1002",
        "fiyat": "238, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1003",
        "fiyat": "238, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1004",
        "fiyat": "398, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1005",
        "fiyat": "338, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1006",
        "fiyat": "338, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1007",
        "fiyat": "538, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1008",
        "fiyat": "538, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1009",
        "fiyat": "698, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "5035",
        "fiyat": "1490, 00 TL  (100 Adet)"
      }
    ]
  }
];

console.log('Products data loaded:', productsData);

// Global variables
let currentCategory = '';

// Make functions globally available
window.searchProducts = searchProductsGlobal;

// Test function for WhatsApp button
window.testWhatsApp = function(productCode) {
    const whatsappLink = `https://wa.me/905315244000?text=Merhaba,+${encodeURIComponent(productCode)}+kodlu+davetiyenizle+ilgileniyorum!+Bilgi+alabilir+miyim?`;
    window.open(whatsappLink, '_blank');
};

// Test function
window.testSearch = function() {
    console.log('Test search called');
    console.log('Keywords data length:', keywordsData.length);
    searchProductsGlobal('beyaz');
};

// DOM Elements
let menuToggle, dropdownMenu, catalogSection, productsSection, productDetailSection;
let productsGrid, productsTitle;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
    // Get DOM elements
    menuToggle = document.getElementById('menu-toggle');
    dropdownMenu = document.getElementById('dropdown-menu');
    catalogSection = document.getElementById('catalog');
    productsSection = document.getElementById('products');
    productDetailSection = document.getElementById('product-detail');
    productsGrid = document.getElementById('products-grid');
    productsTitle = document.getElementById('products-title');
    
    console.log('Elements found:', {
        menuToggle: !!menuToggle,
        dropdownMenu: !!dropdownMenu,
        catalogSection: !!catalogSection,
        productsSection: !!productsSection,
        productDetailSection: !!productDetailSection,
        productsGrid: !!productsGrid
    });
    
    // Initialize menu
    initializeMenu();
    
    // Initialize category cards
    initializeCategoryCards();
    
    // Initialize navigation buttons
    initializeNavigationButtons();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize header scroll effect
    initializeHeaderScroll();
    
    // Initialize hero slider
    initializeHeroSlider();
    
    // Initialize search functionality
    initializeSearch();
    loadKeywordsData();
    

});

// Initialize menu functionality
function initializeMenu() {
    if (!menuToggle || !dropdownMenu) {
        console.error('Menu elements not found');
        return;
    }
    
    // Menu toggle click
    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Menu toggle clicked');
        dropdownMenu.classList.toggle('active');
        console.log('Menu is now:', dropdownMenu.classList.contains('active') ? 'open' : 'closed');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!menuToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('active');
        }
    });
    
    // Submenu links
    const submenuLinks = document.querySelectorAll('.submenu-link');
    submenuLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            console.log('Submenu clicked:', category);
            showProducts(category);
            dropdownMenu.classList.remove('active');
        });
    });
    
    console.log('Menu initialized successfully');
}

// Initialize category cards
function initializeCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    console.log('Found category cards:', categoryCards.length);
    
    categoryCards.forEach(function(card) {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            console.log('Category card clicked:', category);
            showProducts(category);
        });
    });
}

// Initialize navigation buttons
function initializeNavigationButtons() {
    // Back to catalog button
    const backToCatalogBtn = document.getElementById('back-to-catalog');
    if (backToCatalogBtn) {
        backToCatalogBtn.addEventListener('click', function() {
            showCatalog();
        });
    }
    
    // Back to products button
    const backToProductsBtn = document.getElementById('back-to-products');
    if (backToProductsBtn) {
        backToProductsBtn.addEventListener('click', function() {
            showProducts(currentCategory);
        });
    }
    
    // Back to home button
    const backToHomeBtn = document.getElementById('back-to-home');
    if (backToHomeBtn) {
        backToHomeBtn.addEventListener('click', function() {
            showMainPage();
        });
    }
}

// Initialize smooth scrolling
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]:not(.submenu-link)');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // If clicking logo or home link, show main page
            if (targetId === '#home') {
                showMainPage();
                return;
            }
            
            // If clicking price list link, show price list page
            if (targetId === '#price-list') {
                showPriceList();
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close dropdown menu
                if (dropdownMenu) {
                    dropdownMenu.classList.remove('active');
                }
            }
        });
    });
}

// Show main page function
function showMainPage() {
    // Hide product sections
    if (productsSection) productsSection.style.display = 'none';
    if (productDetailSection) productDetailSection.style.display = 'none';
    
    // Hide price list section
    const priceListSection = document.getElementById('price-list');
    if (priceListSection) priceListSection.style.display = 'none';
    
    // Show catalog section
    if (catalogSection) catalogSection.style.display = 'block';
    
    // Show main page sections
    const mainPageSections = document.querySelectorAll('.main-page-only');
    mainPageSections.forEach(function(section) {
        section.style.display = 'block';
    });
    
    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Close dropdown menu
    if (dropdownMenu) {
        dropdownMenu.classList.remove('active');
    }
}

// Show price list function
function showPriceList() {
    console.log('Showing price list');
    
    // Hide other sections
    if (catalogSection) catalogSection.style.display = 'none';
    if (productsSection) productsSection.style.display = 'none';
    if (productDetailSection) productDetailSection.style.display = 'none';
    
    // Hide main page sections
    const mainPageSections = document.querySelectorAll('.main-page-only');
    mainPageSections.forEach(function(section) {
        section.style.display = 'none';
    });
    
    // Show price list section
    const priceListSection = document.getElementById('price-list');
    if (priceListSection) {
        priceListSection.style.display = 'block';
        priceListSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Close dropdown menu
    if (dropdownMenu) {
        dropdownMenu.classList.remove('active');
    }
}

// Initialize header scroll effect
function initializeHeaderScroll() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'white';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Show catalog section
function showCatalog() {
    console.log('Showing catalog');
    
    if (catalogSection) catalogSection.style.display = 'block';
    if (productsSection) productsSection.style.display = 'none';
    if (productDetailSection) productDetailSection.style.display = 'none';
    
    // Show main page sections
    const mainPageSections = document.querySelectorAll('.main-page-only');
    mainPageSections.forEach(function(section) {
        section.style.display = 'block';
    });
    
    if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Show products for category
function showProducts(category) {
    console.log('Showing products for category:', category);
    currentCategory = category;
    
    if (!productsSection || !productsGrid || !productsTitle) {
        console.error('Products elements not found');
        return;
    }
    
    // Hide other sections
    if (catalogSection) catalogSection.style.display = 'none';
    if (productDetailSection) productDetailSection.style.display = 'none';
    productsSection.style.display = 'block';
    
    // Hide main page sections
    const mainPageSections = document.querySelectorAll('.main-page-only');
    mainPageSections.forEach(function(section) {
        section.style.display = 'none';
    });
    
    // Update title
    const categoryNames = {
        'Normal': 'Düğün & Nişan Davetiyesi',
        'Sunnet': 'Sünnet Davetiyesi'
    };
    productsTitle.textContent = categoryNames[category] || 'Ürünler';
    
    // Clear previous products
    productsGrid.innerHTML = '';
    
    // Find category data
    const categoryData = productsData.find(function(cat) {
        return cat.kategori === category;
    });
    
    console.log('Category data found:', categoryData);
    
    if (categoryData && categoryData.urunler) {
        console.log('Loading', categoryData.urunler.length, 'products');
        categoryData.urunler.forEach(function(product) {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
    } else {
        console.error('No products found for category:', category);
        productsGrid.innerHTML = '<p style="text-align: center; padding: 2rem;">Bu kategoride ürün bulunamadı.</p>';
    }
    
    // Scroll to products section
    productsSection.scrollIntoView({ behavior: 'smooth' });
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Create WhatsApp link
    const whatsappLink = `https://wa.me/905315244000?text=Merhaba,+${encodeURIComponent(product.urun_kodu)}+kodlu+davetiyenizle+ilgileniyorum!+Bilgi+alabilir+miyim?`;
    
    card.innerHTML = `
        <div class="product-image">
            <img src="fotos/${product.urun_kodu}.jpg" 
                 alt="Ürün ${product.urun_kodu}" 
                 onerror="this.src='https://via.placeholder.com/300x300?text=Ürün+${product.urun_kodu}'">
            <div class="product-overlay">
                <button class="detail-btn" onclick="showProductDetail('${product.urun_kodu}', '${product.fiyat.replace(/'/g, "\\'")}')">
                    <i class="fas fa-eye"></i> Detayları Gör
                </button>
                <a href="${whatsappLink}" target="_blank" class="order-btn">
                    <i class="fab fa-whatsapp"></i> Hemen Sipariş Ver
                </a>
            </div>
        </div>
        <div class="product-info">
            <div class="product-code">Ürün Kodu: ${product.urun_kodu}</div>
            <div class="product-price">${product.fiyat}</div>
        </div>
    `;
    
    return card;
}

// Show product detail
function showProductDetail(productCode, productPrice) {
    console.log('Showing product detail:', productCode);
    
    if (!productDetailSection) {
        console.error('Product detail section not found');
        return;
    }
    
    // Hide other sections
    if (productsSection) productsSection.style.display = 'none';
    if (catalogSection) catalogSection.style.display = 'none';
    productDetailSection.style.display = 'block';
    
    // Update detail page content
    const detailImage = document.getElementById('detail-product-image');
    const detailTitle = document.getElementById('detail-product-title');
    const detailCode = document.getElementById('detail-product-code');
    const detailPrice = document.getElementById('detail-product-price');
    const detailOrderBtn = document.getElementById('detail-order-btn');
    
    if (detailImage) {
        detailImage.src = `fotos/${productCode}.jpg`;
        detailImage.alt = `Ürün ${productCode}`;
        detailImage.onerror = function() {
            this.src = `https://via.placeholder.com/600x600?text=Ürün+${productCode}`;
        };
    }
    
    if (detailTitle) detailTitle.textContent = `Davetiye - ${productCode}`;
    if (detailCode) detailCode.textContent = productCode;
    if (detailPrice) detailPrice.textContent = productPrice;
    
    // Update WhatsApp link
    if (detailOrderBtn) {
        const whatsappLink = `https://wa.me/905315244000?text=Merhaba,+${encodeURIComponent(productCode)}+kodlu+davetiyenizle+ilgileniyorum!+Bilgi+alabilir+miyim?`;
        detailOrderBtn.href = whatsappLink;
        
        // Also add onclick event as backup
        detailOrderBtn.onclick = function(e) {
            e.preventDefault();
            window.open(whatsappLink, '_blank');
        };
        
        console.log('WhatsApp link updated:', whatsappLink);
    } else {
        console.error('Detail order button not found');
    }
    
    // Scroll to top
    productDetailSection.scrollIntoView({ behavior: 'smooth' });
}

// Add ripple effect to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(function() {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
// Hero Slider
function initializeHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-slider-dot');
    let currentSlide = 0;
    
    if (slides.length === 0 || dots.length === 0) return;
    
    // Load background images lazily
    function loadSlideImage(slide) {
        const bgUrl = slide.getAttribute('data-bg');
        if (bgUrl && !slide.style.backgroundImage) {
            slide.style.backgroundImage = `url('${bgUrl}')`;
        }
    }
    
    // Load first slide immediately
    if (slides[0]) loadSlideImage(slides[0]);
    
    function showSlide(index) {
        // Load current and next slide images
        if (slides[index]) loadSlideImage(slides[index]);
        if (slides[index + 1]) loadSlideImage(slides[index + 1]);
        
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        if (slides[index]) slides[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
        
        currentSlide = index;
    }
    
    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }
    
    // Add click event to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
    
    // Auto-advance slides every 4 seconds
    setInterval(nextSlide, 4000);
}

// Search functionality
let keywordsData = [];

// Embedded keywords data as fallback
const embeddedKeywordsData = [
    {"urun_kodu": "3052", "anahtar_kelimeler": ["yeşil", "altın", "çiçekli", "modern", "elegant", "minimalist"]},
    {"urun_kodu": "1434", "anahtar_kelimeler": ["beyaz", "çiçekli", "kaligrafik", "modern", "elegant", "minimalist"]},
    {"urun_kodu": "1357", "anahtar_kelimeler": ["kırmızı", "beyaz", "kalp", "minimalist", "modern", "kaligrafik", "elegant"]},
    {"urun_kodu": "2018", "anahtar_kelimeler": ["bej", "beyaz", "minimalist", "kaligrafik", "modern", "elegant", "doğal", "ahşap dokulu"]},
    {"urun_kodu": "2575", "anahtar_kelimeler": ["siyah", "beyaz", "altın", "minimalist", "kaligrafik", "elegant", "vintage"]},
    {"urun_kodu": "1035", "anahtar_kelimeler": ["bej", "altın folyo", "minimalist", "kaligrafik", "elegant", "doğal", "şık"]},
    {"urun_kodu": "1009", "anahtar_kelimeler": ["lacivert", "beyaz", "geometrik", "modern", "kaligrafik", "elegant"]},
    {"urun_kodu": "1535", "anahtar_kelimeler": ["beyaz", "yeşil", "minimalist", "kaligrafik", "elegant", "doğal", "şık"]},
    {"urun_kodu": "5040", "anahtar_kelimeler": ["antrasit", "şeffaf", "minimalist", "modern", "kaligrafik", "elegant", "doğal"]},
    {"urun_kodu": "5100", "anahtar_kelimeler": ["bej", "altın folyo", "minimalist", "modern", "elegant", "doğal dokulu"]}
];

// Load keywords data
async function loadKeywordsData() {
    // First use embedded data immediately
    keywordsData = embeddedKeywordsData;
    console.log('Using embedded keywords data:', keywordsData.length, 'products');
    generatePopularKeywords();
    
    // Then try to load from file to get full data
    try {
        console.log('Attempting to load full keywords data...');
        const response = await fetch('./anahtar_kelimeler.json');
        if (response.ok) {
            const data = await response.json();
            keywordsData = data;
            console.log('Full keywords data loaded successfully:', keywordsData.length, 'products');
            generatePopularKeywords();
        }
    } catch (error) {
        console.log('Could not load full keywords data, using embedded data:', error.message);
    }
}

// Show default suggestions if data loading fails
function showDefaultSuggestions() {
    const defaultKeywords = ['beyaz', 'elegant', 'minimalist', 'modern', 'altın', 'çiçekli', 'kaligrafik', 'doğal'];
    const suggestionsList = document.getElementById('suggestions-list');
    if (suggestionsList) {
        suggestionsList.innerHTML = defaultKeywords
            .map(keyword => `<span class="suggestion-tag" onclick="searchProductsGlobal('${keyword}')">${keyword}</span>`)
            .join('');
    }
}

// Generate popular keywords from the data
function generatePopularKeywords() {
    const keywordCount = {};
    
    // Count all keywords
    keywordsData.forEach(product => {
        product.anahtar_kelimeler.forEach(keyword => {
            keywordCount[keyword] = (keywordCount[keyword] || 0) + 1;
        });
    });
    
    // Sort by frequency and get top 12
    const popularKeywords = Object.entries(keywordCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 12)
        .map(([keyword]) => keyword);
    
    console.log('Popular keywords:', popularKeywords);
    
    // Display in suggestions
    const suggestionsList = document.getElementById('suggestions-list');
    if (suggestionsList) {
        suggestionsList.innerHTML = popularKeywords
            .map(keyword => `<span class="suggestion-tag" onclick="searchProductsGlobal('${keyword}')">${keyword}</span>`)
            .join('');
    }
}

// Initialize search functionality
function initializeSearch() {
    console.log('Initializing search functionality...');
    
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const searchSuggestions = document.getElementById('search-suggestions');
    
    console.log('Search elements found:', {
        searchInput: !!searchInput,
        searchBtn: !!searchBtn,
        searchSuggestions: !!searchSuggestions
    });
    
    if (!searchInput || !searchBtn || !searchSuggestions) {
        console.error('Search elements not found');
        return;
    }
    
    // Show suggestions on focus
    searchInput.addEventListener('focus', (e) => {
        console.log('Search input focused');
        searchSuggestions.style.display = 'block';
    });
    
    // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchSuggestions.style.display = 'none';
        }
    });
    
    // Search on Enter key
    searchInput.addEventListener('keypress', (e) => {
        console.log('Key pressed:', e.key);
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = searchInput.value.trim();
            console.log('Enter pressed, query:', query);
            if (query) {
                searchProductsInternal(query);
                searchSuggestions.style.display = 'none';
            }
        }
    });
    
    // Search on button click
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        console.log('Search button clicked, query:', query);
        if (query) {
            searchProductsInternal(query);
            searchSuggestions.style.display = 'none';
        }
    });
    
    console.log('Search functionality initialized successfully');
}

// Global search function for onclick events
function searchProductsGlobal(query) {
    console.log('Global search called for:', query);
    searchProductsInternal(query);
}

// Search products function
function searchProductsInternal(query) {
    console.log('Searching for:', query);
    
    if (!keywordsData || keywordsData.length === 0) {
        console.error('Keywords data not available');
        showNoResults(query);
        return;
    }
    
    const searchQuery = query.toLowerCase().trim();
    const matchedProducts = [];
    
    console.log('Searching in', keywordsData.length, 'products for:', searchQuery);
    
    // Search in keywords and product codes
    keywordsData.forEach(product => {
        const productCode = product.urun_kodu.toLowerCase();
        const keywords = product.anahtar_kelimeler.map(k => k.toLowerCase());
        
        // Check if query matches product code or any keyword
        if (productCode.includes(searchQuery) || 
            keywords.some(keyword => keyword.includes(searchQuery))) {
            
            console.log('Match found:', product.urun_kodu);
            
            // Find the actual product data
            const productData = findProductInData(product.urun_kodu);
            if (productData) {
                matchedProducts.push({
                    ...productData,
                    keywords: product.anahtar_kelimeler
                });
            }
        }
    });
    
    console.log('Total matched products:', matchedProducts.length);
    
    if (matchedProducts.length > 0) {
        showSearchResults(matchedProducts, query);
    } else {
        showNoResults(query);
    }
    
    // Clear search input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = '';
    }
}

// Find product in products data
function findProductInData(productCode) {
    for (const category of productsData) {
        const product = category.urunler.find(p => p.urun_kodu === productCode);
        if (product) {
            return {
                ...product,
                kategori: category.kategori
            };
        }
    }
    return null;
}

// Show search results
function showSearchResults(products, query) {
    console.log('Showing search results for:', query);
    
    // Hide other sections
    if (catalogSection) catalogSection.style.display = 'none';
    if (productDetailSection) productDetailSection.style.display = 'none';
    if (productsSection) productsSection.style.display = 'block';
    
    // Hide main page sections
    const mainPageSections = document.querySelectorAll('.main-page-only');
    mainPageSections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Update title
    if (productsTitle) {
        productsTitle.textContent = `"${query}" için ${products.length} sonuç bulundu`;
    }
    
    // Clear and populate products grid
    if (productsGrid) {
        productsGrid.innerHTML = '';
        
        products.forEach(product => {
            const productCard = createSearchProductCard(product);
            productsGrid.appendChild(productCard);
        });
    }
    
    // Scroll to products section
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Create search product card (with keywords)
function createSearchProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Create WhatsApp link
    const whatsappLink = `https://wa.me/905315244000?text=Merhaba,+${encodeURIComponent(product.urun_kodu)}+kodlu+davetiyenizle+ilgileniyorum!+Bilgi+alabilir+miyim?`;
    
    // Keywords display
    const keywordsHtml = product.keywords ? 
        `<div class="product-keywords">
            ${product.keywords.slice(0, 4).map(keyword => 
                `<span class="keyword-tag">${keyword}</span>`
            ).join('')}
        </div>` : '';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="fotos/${product.urun_kodu}.jpg" 
                 alt="Ürün ${product.urun_kodu}" 
                 onerror="this.src='https://via.placeholder.com/300x300?text=Ürün+${product.urun_kodu}'">
            <div class="product-overlay">
                <button class="detail-btn" onclick="showProductDetail('${product.urun_kodu}', '${product.fiyat.replace(/'/g, "\\'")}')">
                    <i class="fas fa-eye"></i> Detayları Gör
                </button>
                <a href="${whatsappLink}" target="_blank" class="order-btn">
                    <i class="fab fa-whatsapp"></i> Hemen Sipariş Ver
                </a>
            </div>
        </div>
        <div class="product-info">
            <div class="product-code">Ürün Kodu: ${product.urun_kodu}</div>
            <div class="product-price">${product.fiyat}</div>
            ${keywordsHtml}
        </div>
    `;
    
    return card;
}

// Show no results
function showNoResults(query) {
    console.log('No results found for:', query);
    
    // Hide other sections
    if (catalogSection) catalogSection.style.display = 'none';
    if (productDetailSection) productDetailSection.style.display = 'none';
    if (productsSection) productsSection.style.display = 'block';
    
    // Hide main page sections
    const mainPageSections = document.querySelectorAll('.main-page-only');
    mainPageSections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Update title and show no results message
    if (productsTitle) {
        productsTitle.textContent = `"${query}" için sonuç bulunamadı`;
    }
    
    if (productsGrid) {
        productsGrid.innerHTML = `
            <div style="text-align: center; padding: 3rem; grid-column: 1 / -1;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                <h3 style="color: #666; margin-bottom: 1rem;">Aradığınız kriterlere uygun ürün bulunamadı</h3>
                <p style="color: #999; margin-bottom: 2rem;">Farklı anahtar kelimeler deneyebilir veya ürün kodunu kontrol edebilirsiniz.</p>
                <button class="btn btn-primary" onclick="showCatalog()">Tüm Ürünleri Görüntüle</button>
            </div>
        `;
    }
    
    // Scroll to products section
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

