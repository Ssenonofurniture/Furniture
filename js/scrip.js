// Mobile menu toggle
document.querySelector('.mobile-menu-btn')?.addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Newsletter form submission
document.getElementById('newsletterForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with ${email}! We'll keep you updated.`);
    this.reset();
});

// Comprehensive product data with 15 items per category
const productData = {
    carbins: Array.from({length: 15}, (_, i) => ({
        id: i+1,
        image: `carbins/${i+1}.jpg`,
        name: `Cabin ${i+1} - ${['Modern', 'Rustic', 'Luxury', 'Compact', 'Executive'][i%5]} Design`
    })),
    doors: Array.from({length: 15}, (_, i) => ({
        id: i+1,
        image: `doors/${i+1}.jpg`,
        name: `Door ${i+1} - ${['Classic', 'Modern', 'Sliding', 'French', 'Panel'][i%5]} Style`
    })),
    frames: Array.from({length: 15}, (_, i) => ({
        id: i+1,
        image: `frames/${i+1}.jpg`,
        name: `Frame ${i+1} - ${['Wooden', 'Metal', 'Vintage', 'Minimalist', 'Luxury'][i%5]} Design`
    })),
    wardrobes: Array.from({length: 15}, (_, i) => ({
        id: i+1,
        image: `wardrobes/${i+1}.jpg`,
        name: `Wardrobe ${i+1} - ${['Sliding', 'Walk-in', 'Compact', 'Custom', 'Premium'][i%5]}`
    })),
    kitchen: Array.from({length: 15}, (_, i) => ({
        id: i+1,
        image: `kitchen/${i+1}.jpg`,
        name: `Kitchen ${i+1} - ${['Modern', 'Classic', 'Modular', 'Luxury', 'Compact'][i%5]} Design`
    })),
    sofas: Array.from({length: 15}, (_, i) => ({
        id: i+1,
        image: `sofas/${i+1}.jpg`,
        name: `Sofa ${i+1} - ${['Leather', 'Fabric', 'L-shaped', 'Sectional', 'Recliner'][i%5]}`
    })),
    tvStands: Array.from({length: 15}, (_, i) => ({
        id: i+1,
        image: `tv-stands/${i+1}.jpg`,
        name: `TV Stand ${i+1} - ${['Modern', 'Rustic', 'Wall-mounted', 'Entertainment', 'Corner'][i%5]}`
    })),
    centreTables: Array.from({length: 15}, (_, i) => ({
        id: i+1,
        image: `centre-tables/${i+1}.jpg`,
        name: `Centre Table ${i+1} - ${['Glass', 'Wooden', 'Marble', 'Nested', 'Oval'][i%5]}`
    })),
    doorFrames: Array.from({length: 15}, (_, i) => ({
        id: i+1,
        image: `door-frames/${i+1}.jpg`,
        name: `Door Frame ${i+1} - ${['Classic', 'Modern', 'Arch', 'Double', 'Custom'][i%5]}`
    })),
    mirrors: Array.from({length: 15}, (_, i) => ({
        id: i+1,
        image: `mirrors/${i+1}.jpg`,
        name: `Mirror ${i+1} - ${['Dressing', 'Wall', 'Full-length', 'Decorative', 'LED'][i%5]}`
    })),
    dinings: Array.from({length: 15}, (_, i) => ({
        id: i+1,
        image: `dinings/${i+1}.jpg`,
        name: `Dining Set ${i+1} - ${['6-seater', '4-seater', 'Extendable', 'Round', 'Bar'][i%5]}`
    })),
    wallUnits: Array.from({length: 15}, (_, i) => ({
        id: i+1,
        image: `wall-units/${i+1}.jpg`,
        name: `Wall Unit ${i+1} - ${['TV', 'Display', 'Storage', 'Floating', 'Custom'][i%5]}`
    })),
    cupboards: Array.from({length: 15}, (_, i) => ({
        id: i+1,
        image: `cupboards/${i+1}.jpg`,
        name: `Cupboard ${i+1} - ${['Kitchen', 'Storage', 'Built-in', 'Open', 'Glass'][i%5]}`
    })),
    sideDrawers: Array.from({length: 15}, (_, i) => ({
        id: i+1,
        image: `side-drawers/${i+1}.jpg`,
        name: `Side Drawer ${i+1} - ${['Bedside', 'Storage', 'Narrow', 'Multi-drawer', 'Custom'][i%5]}`
    })),
    beds: Array.from({length: 15}, (_, i) => ({
        id: i+1,
        image: `beds/${i+1}.jpg`,
        name: `Bed ${i+1} - ${['Single', 'Double', 'King', 'Bunk', 'Storage'][i%5]}`
    })),
    officeFurniture: Array.from({length: 15}, (_, i) => ({
        id: i+1,
        image: `office-furniture/${i+1}.jpg`,
        name: `Office ${i+1} - ${['Desk', 'Chair', 'Cabinet', 'Conference', 'Reception'][i%5]}`
    })),
    shopDesigns: Array.from({length: 15}, (_, i) => ({
        id: i+1,
        image: `shop-designs/${i+1}.jpg`,
        name: `Shop Design ${i+1} - ${['Salon', 'Supermarket', 'Pharmacy', 'Boutique', 'Display'][i%5]}`
    })),
    shoeRacks: Array.from({length: 15}, (_, i) => ({
        id: i+1,
        image: `shoe-racks/${i+1}.jpg`,
        name: `Shoe Rack ${i+1} - ${['Open', 'Closed', 'Rotating', 'Bench', 'Wall-mounted'][i%5]}`
    })),
    dressingMirrors: Array.from({length: 15}, (_, i) => ({
        id: i+1,
        image: `dressing-mirrors/${i+1}.jpg`,
        name: `Dressing Mirror ${i+1} - ${['Vanity', 'LED', 'Full-length', 'Tilting', 'Smart'][i%5]}`
    }))
};

// Enhanced product loading function with responsive features
function loadProducts(category) {
    const gallery = document.querySelector('.gallery');
    if (!gallery) return;

    gallery.innerHTML = '';
    
    const products = productData[category] || [];
    
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <div class="product-img-container">
                <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
                <div class="product-overlay">
                    <h3>${product.name}</h3>
                    <p>Click to view details</p>
                </div>
            </div>
            <div class="product-info">
                <a href="https://wa.me/256702130441?text=I'm%20interested%20in%20your%20${encodeURIComponent(product.name)}%20-%20${encodeURIComponent(window.location.href)}" 
                   class="buy-btn" target="_blank" aria-label="Inquire about ${product.name}">
                    <i class="fab fa-whatsapp"></i> INQUIRE NOW
                </a>
            </div>
        `;
        gallery.appendChild(productElement);
    });

    // Initialize lazy loading
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// Comprehensive page detection and product loading
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    let category = '';
    
    const pageMap = {
        'carbins': { category: 'carbins', title: 'Premium Cabin Collection' },
        'door': { category: 'doors', title: 'Premium Door Collection' },
        'frames': { category: 'frames', title: 'Premium Frame Collection' },
        'wardrobes': { category: 'wardrobes', title: 'Premium Wardrobe Collection' },
        'kitchen': { category: 'kitchen', title: 'Kitchen Installation Designs' },
        'sofas': { category: 'sofas', title: 'Luxury Sofa Collection' },
        'tv-stands': { category: 'tvStands', title: 'TV Stand Designs' },
        'centre-tables': { category: 'centreTables', title: 'Centre Table Collection' },
        'door-frames': { category: 'doorFrames', title: 'Door & Frame Solutions' },
        'mirrors': { category: 'mirrors', title: 'Mirror Designs' },
        'dinings': { category: 'dinings', title: 'Dining Furniture Collection' },
        'wall-units': { category: 'wallUnits', title: 'Wall Unit & TV Stand Designs' },
        'cupboards': { category: 'cupboards', title: 'Cupboard Designs' },
        'side-drawers': { category: 'sideDrawers', title: 'Bedside Drawer Collection' },
        'beds': { category: 'beds', title: 'Bed Designs' },
        'office-furniture': { category: 'officeFurniture', title: 'Office Furniture Solutions' },
        'shop-designs': { category: 'shopDesigns', title: 'Commercial Space Designs' },
        'shoe-racks': { category: 'shoeRacks', title: 'Shoe Rack Designs' },
        'dressing-mirrors': { category: 'dressingMirrors', title: 'Dressing Mirror Collection' }
    };

    for (const [key, value] of Object.entries(pageMap)) {
        if (path.includes(key)) {
            category = value.category;
            document.querySelector('.main-title').textContent = value.title;
            break;
        }
    }
    
    if (category) {
        loadProducts(category);
    }

    // Responsive adjustments
    window.addEventListener('resize', function() {
        if (category) {
            loadProducts(category);
        }
    });
});