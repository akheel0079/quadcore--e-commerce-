const products = {
    "115": {
        title: "iPhone 16 Pro Max",
        image: "https://m.media-amazon.com/images/I/61s1P+29yoL._AC_UY327_FMwebp_QL65_.jpg",
        price: "₹999.99",
        originalPrice: "₹1,099.99",
        rating: "4.5",
        ratingCount: "1,585 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        discount: "Save ₹100 (9%)",
        stock: "In Stock",
        colors: ["#3a3a3c", "#f5f5f7", "#a3c1d3", "#e6c9c8"],
        specs: {
            "Brand": "Apple",
            "Model": "iPhone 16 Pro Max",
            "Display": "6.7-inch Super Retina XDR OLED",
            "Resolution": "2796 x 1290 pixels",
            "Processor": "A18 Pro chip",
            "RAM": "8GB",
            "Storage": "256GB/512GB/1TB",
            "Camera": "Triple 48MP + 12MP + 12MP with LiDAR",
            "Front Camera": "12MP TrueDepth",
            "Battery": "Up to 29 hours video playback",
            "OS": "iOS 18",
            "Water Resistance": "IP68 (6m for 30 mins)",
            "Dimensions": "160.8 x 78.1 x 7.8 mm",
            "Weight": "240g"
        },
        highlights: [
            "ProMotion technology with adaptive refresh rates up to 120Hz",
            "Ceramic Shield front cover",
            "Surgical-grade stainless steel design",
            "5G capable for superfast downloads",
            "Cinematic mode for recording videos"
        ]
    },
    "116": {
        title: "Samsung Galaxy S24 Ultra",
        image: "https://th.bing.com/th/id/OIP.1n2MgSlbhLBZdHFqvVkAfwAAAA?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        price: "₹1,199.99",
        rating: "4.8",
        ratingCount: "2,379 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        stock: "Only 14 left in stock",
        colors: ["#212121", "#5f5f5f", "#3d81f5"],
        specs: {
            "Brand": "Samsung",
            "Model": "Galaxy S24 Ultra",
            "Display": "6.8-inch Dynamic AMOLED 2X (120Hz)",
            "Resolution": "3088 x 1440 pixels",
            "Processor": "Snapdragon 8 Gen 3",
            "RAM": "12GB",
            "Storage": "256GB/512GB/1TB",
            "Camera": "200MP + 12MP + 10MP + 10MP",
            "Front Camera": "12MP",
            "Battery": "5000mAh, 45W fast charging",
            "OS": "Android 14 (One UI 6.1)",
            "Water Resistance": "IP68",
            "Dimensions": "163.4 x 78.1 x 8.9 mm",
            "Weight": "233g"
        },
        highlights: [
            "200MP Adaptive Pixel sensor for stunning photos",
            "Built-in S Pen with 2.8ms latency",
            "Vision Booster for enhanced outdoor visibility",
            "Nightography for bright, clear night photos",
            "Titanium frame for premium durability"
        ]
    },
    "117": {
        title: "Redmi Note 13 Pro 5G",
        image: "https://th.bing.com/th?id=OIP.zPAaLTDaSnBrh2eLahNtEQHaJb&w=221&h=282&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        price: "₹349.99",
        originalPrice: "₹379.99",
        rating: "4.3",
        ratingCount: "1,024 ratings",
        delivery: "₹9.99 delivery Wed, 2 Apr",
        discount: "Save ₹30 (8%)",
        colors: ["#2a2a2a", "#b5b5b5", "#5a8eff"],
        specs: {
            "Brand": "Xiaomi",
            "Model": "Redmi Note 13 Pro 5G",
            "Display": "6.67-inch AMOLED (120Hz)",
            "Resolution": "2400 x 1080 pixels",
            "Processor": "Snapdragon 7s Gen 2",
            "RAM": "8GB/12GB",
            "Storage": "128GB/256GB",
            "Camera": "200MP + 8MP + 2MP",
            "Front Camera": "16MP",
            "Battery": "5100mAh, 67W fast charging",
            "OS": "Android 13 (MIUI 14)",
            "Water Resistance": "IP53",
            "Dimensions": "162.3 x 75.5 x 8.2 mm",
            "Weight": "187g"
        },
        highlights: [
            "200MP main camera with OIS",
            "120Hz AMOLED display",
            "67W turbo charging",
            "Corning Gorilla Glass 5 protection",
            "Stereo speakers with Dolby Atmos"
        ]
    },
    "4": {
        title: "Nothing Phone (2A)",
        image: "https://m.media-amazon.com/images/I/61QWVJBjFqL._AC_UY327_FMwebp_QL65_.jpg",
        price: "₹319.99",
        rating: "4.2",
        ratingCount: "892 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        colors: ["#000000", "#ffffff"],
        specs: {
            "Brand": "Nothing",
            "Model": "Phone (2A)",
            "Display": "6.7-inch AMOLED (120Hz)",
            "Resolution": "2412 x 1080 pixels",
            "Processor": "Dimensity 7200 Pro",
            "RAM": "8GB/12GB",
            "Storage": "128GB/256GB",
            "Camera": "50MP + 50MP dual camera",
            "Front Camera": "32MP",
            "Battery": "5000mAh, 45W fast charging",
            "OS": "Android 14 (Nothing OS 2.5)",
            "Dimensions": "158.5 x 73.3 x 8.6 mm",
            "Weight": "190g"
        },
        highlights: [
            "Unique Glyph Interface lighting",
            "Dual 50MP rear cameras",
            "120Hz AMOLED display",
            "Nothing OS with minimal bloatware",
            "Transparent back design"
        ]
    },
    "5": {
        title: "iQOO Neo 9 Pro",
        image: "https://th.bing.com/th/id/OIP.GFDfH4OdkxuEZik3DR0kKQHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        price: "₹499.99",
        originalPrice: "₹519.99",
        rating: "4.7",
        ratingCount: "1,237 ratings",
        delivery: "₹12.99 delivery Wed, 2 Apr",
        discount: "Save ₹20 (4%)",
        colors: ["#000000", "#ff2d55", "#3a3aff"],
        specs: {
            "Brand": "iQOO",
            "Model": "Neo 9 Pro",
            "Display": "6.78-inch AMOLED (144Hz)",
            "Resolution": "2800 x 1260 pixels",
            "Processor": "Snapdragon 8 Gen 2",
            "RAM": "12GB/16GB",
            "Storage": "256GB/512GB",
            "Camera": "50MP + 8MP",
            "Front Camera": "16MP",
            "Battery": "5160mAh, 120W fast charging",
            "OS": "Android 14 (Funtouch OS 14)",
            "Dimensions": "164.1 x 75.7 x 8.5 mm",
            "Weight": "196g"
        },
        highlights: [
            "144Hz refresh rate display",
            "120W ultra-fast charging",
            "6K VC cooling system",
            "Dual X-axis linear motor",
            "Flagship-level gaming performance"
        ]
    },
    "6": {
        title: "Vivo V29 Pro",
        image: "https://th.bing.com/th/id/OIP.xE1bYSfFNUH9CRHj_DD5LQHaJF?rs=1&pid=ImgDetMain",
        price: "₹599.99",
        rating: "4.4",
        ratingCount: "756 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        colors: ["#6b4eff", "#000000", "#ffd700"],
        specs: {
            "Brand": "Vivo",
            "Model": "V29 Pro",
            "Display": "6.78-inch AMOLED (120Hz)",
            "Resolution": "2800 x 1260 pixels",
            "Processor": "Dimensity 8200",
            "RAM": "12GB",
            "Storage": "256GB/512GB",
            "Camera": "50MP + 8MP + 2MP with Aura Light",
            "Front Camera": "50MP",
            "Battery": "4600mAh, 80W fast charging",
            "OS": "Android 13 (Funtouch OS 13)",
            "Dimensions": "158.5 x 73.3 x 7.5 mm",
            "Weight": "182g"
        },
        highlights: [
            "Professional-grade Aura Light for portraits",
            "7.5mm ultra-slim design",
            "80W fast charging",
            "50MP ultra-stable front camera",
            "120Hz 3D curved AMOLED display"
        ]
    },
    "7": {
        title: "DOOGEE V Max",
        image: "https://m.media-amazon.com/images/I/81oRCjk44rL._AC_UY327_FMwebp_QL65_.jpg",
        price: "₹249.99",
        rating: "3.9",
        ratingCount: "483 ratings",
        delivery: "₹15.62 delivery Wed, 2 Apr",
        stock: "Only 7 left in stock",
        colors: ["#000000", "#ff0000"],
        specs: {
            "Brand": "DOOGEE",
            "Model": "V Max",
            "Display": "6.58-inch IPS LCD",
            "Resolution": "2408 x 1080 pixels",
            "Processor": "Helio G99",
            "RAM": "8GB",
            "Storage": "256GB",
            "Camera": "108MP + 20MP + 16MP",
            "Front Camera": "32MP",
            "Battery": "6000mAh, 33W charging",
            "OS": "Android 13",
            "Protection": "IP68/IP69K/MIL-STD-810H",
            "Dimensions": "172.8 x 81.8 x 12.3 mm",
            "Weight": "298g"
        },
        highlights: [
            "Military-grade rugged design",
            "108MP night vision camera",
            "6000mAh massive battery",
            "33W fast charging",
            "Drop-proof up to 1.5m"
        ]
    },
    "8": {
        title: "UMIDIGI A15C",
        image: "https://m.media-amazon.com/images/I/71cxlQhiQqL._AC_UY327_FMwebp_QL65_.jpg",
        price: "₹129.99",
        rating: "3.7",
        ratingCount: "1,028 ratings",
        delivery: "₹17.62 delivery Wed, 2 Apr",
        colors: ["#000000", "#ffffff", "#00a8ff"],
        specs: {
            "Brand": "UMIDIGI",
            "Model": "A15C",
            "Display": "6.7-inch IPS LCD",
            "Resolution": "2400 x 1080 pixels",
            "Processor": "Helio G85",
            "RAM": "8GB",
            "Storage": "256GB",
            "Camera": "64MP + 8MP + 5MP",
            "Front Camera": "24MP",
            "Battery": "5150mAh, 18W charging",
            "OS": "Android 13",
            "Security": "Side fingerprint sensor",
            "Dimensions": "164.2 x 75.9 x 8.5 mm",
            "Weight": "195g"
        },
        highlights: [
            "Large 6.7-inch display",
            "64MP triple camera system",
            "5150mAh long-lasting battery",
            "8GB RAM + 256GB storage",
            "Budget-friendly price"
        ]
    },
    "9": {
        title: "OnePlus 12 5G",
        image: "https://m.media-amazon.com/images/I/612ZyUm0JsL._AC_UY327_FMwebp_QL65_.jpg",
        price: "₹849.99",
        rating: "4.6",
        ratingCount: "3,142 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        colors: ["#000000", "#4a4a4a"],
        specs: {
            "Brand": "OnePlus",
            "Model": "12 5G",
            "Display": "6.82-inch LTPO AMOLED (120Hz)",
            "Resolution": "3168 x 1440 pixels",
            "Processor": "Snapdragon 8 Gen 3",
            "RAM": "12GB/16GB",
            "Storage": "256GB/512GB",
            "Camera": "50MP + 64MP + 48MP (Hasselblad)",
            "Front Camera": "32MP",
            "Battery": "5400mAh, 100W fast charging",
            "OS": "Android 14 (OxygenOS 14)",
            "Cooling": "VC Cooling System",
            "Dimensions": "163.3 x 75.8 x 9.2 mm",
            "Weight": "220g"
        },
        highlights: [
            "Hasselblad camera system",
            "100W SUPERVOOC charging",
            "2K 120Hz LTPO display",
            "Dolby Vision and Atmos support",
            "Alert Slider for quick settings"
        ]
    },
    "10": {
        title: "ASUS ROG Phone 7",
        image: "https://m.media-amazon.com/images/I/81Vdy-mfVEL._AC_UY327_FMwebp_QL65_.jpg",
        price: "₹899.99",
        rating: "4.8",
        ratingCount: "1,847 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        colors: ["#000000", "#ff0033"],
        specs: {
            "Brand": "ASUS",
            "Model": "ROG Phone 7",
            "Display": "6.78-inch AMOLED (165Hz)",
            "Resolution": "2448 x 1080 pixels",
            "Processor": "Snapdragon 8 Gen 2",
            "RAM": "16GB",
            "Storage": "512GB",
            "Camera": "50MP + 13MP + 5MP",
            "Front Camera": "32MP",
            "Battery": "6000mAh, 65W fast charging",
            "OS": "Android 13 (ROG UI)",
            "Cooling": "AeroActive Cooler 7",
            "Dimensions": "173 x 77 x 10.3 mm",
            "Weight": "239g"
        },
        highlights: [
            "165Hz AMOLED display",
            "AirTrigger 7 ultrasonic buttons",
            "6000mAh battery with 65W charging",
            "GameFX audio system",
            "AeroActive Cooler 7 included"
        ]
    },
    "11": {
        title: "Motorola Moto G85 5G",
        image: "https://m.media-amazon.com/images/I/61G8w9C7oHL._AC_UY327_FMwebp_QL65_.jpg",
        price: "₹279.99",
        originalPrice: "₹299.99",
        rating: "4.1",
        ratingCount: "1,562 ratings",
        delivery: "₹8.99 delivery Wed, 2 Apr",
        discount: "Save ₹20 (7%)",
        colors: ["#2a2a2a", "#b5b5b5", "#5a8eff"],
        specs: {
            "Brand": "Motorola",
            "Model": "Moto G85 5G",
            "Display": "6.6-inch pOLED (120Hz)",
            "Resolution": "2400 x 1080 pixels",
            "Processor": "Snapdragon 6 Gen 1",
            "RAM": "8GB",
            "Storage": "256GB",
            "Camera": "50MP + 8MP",
            "Front Camera": "16MP",
            "Battery": "5000mAh, 30W charging",
            "OS": "Android 14",
            "Material": "Vegan leather back",
            "Dimensions": "160.9 x 74.5 x 8.0 mm",
            "Weight": "180g"
        },
        highlights: [
            "120Hz pOLED display",
            "Vegan leather back panel",
            "30W TurboPower charging",
            "Ready For PC connectivity",
            "Stock Android experience"
        ]
    },
    "12": {
        title: "Infinix GT 10 Pro",
        image: "https://th.bing.com/th/id/OIP.BkG0am3D1vIKux_eYBB6vgAAAA?pid=ImgDet&w=159&h=339&c=7",
        price: "₹229.99",
        rating: "4.0",
        ratingCount: "673 ratings",
        delivery: "₹12.99 delivery Wed, 2 Apr",
        colors: ["#000000", "#00ffcc"],
        specs: {
            "Brand": "Infinix",
            "Model": "GT 10 Pro",
            "Display": "6.67-inch AMOLED (120Hz)",
            "Resolution": "2400 x 1080 pixels",
            "Processor": "Dimensity 8050",
            "RAM": "8GB",
            "Storage": "256GB",
            "Camera": "108MP + 2MP + 2MP",
            "Front Camera": "32MP",
            "Battery": "5000mAh, 45W fast charging",
            "OS": "Android 13 (XOS 13)",
            "Special": "RGB LED lighting",
            "Dimensions": "163.2 x 75.9 x 8.9 mm",
            "Weight": "187g"
        },
        highlights: [
            "Cyber-inspired RGB lighting",
            "120Hz AMOLED display",
            "108MP triple camera",
            "45W fast charging",
            "Gaming-focused design"
        ]
    },
    "13": {
        title: "ARMANI JUNIOR All-Over Logo Regular Fit Shirt For Boys",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQupz7elln5O74o6Y5wYpLPHutgRGzKJTMk60MyaNcX8BKO5PLj5_Z8Dt0vR5zSMLeNw561ZGfJRDpUKid-B-VyeGGoqmSAAUYnlxgktH-vWoUvKe88pFkhpA",
        price: "₹7,500",
        originalPrice: "₹7,895",
        rating: "4.5",
        ratingCount: "1,585 ratings",
        delivery: "₹17.62 delivery Wed, 2 Apr",
        discount: "Save 5% with voucher",
        stock: "In Stock",
        colors: ["#ffffff", "#000000", "#3a3a3c"],
        specs: {
            "Brand": "ARMANI JUNIOR",
            "Material": "100% Cotton",
            "Fit": "Regular Fit",
            "Sleeve Type": "Full Sleeve",
            "Pattern": "All-Over Logo Print",
            "Age Group": "8-9 Years",
            "Closure": "Button Front",
            "Care Instructions": "Machine Wash Cold"
        },
        highlights: [
            "Premium quality cotton fabric",
            "Signature Armani eagle logo print",
            "Classic collar design",
            "Durable mother-of-pearl buttons",
            "Perfect for school and formal occasions"
        ]
    },
    "14": {
        title: "H&M Boys 3-piece Dressy Set",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSMur9FL2_pPo0osJsdSiAdG_KcJWYz7ObirgKtH2VFrtmgRKDVUxoa6Ikkv2InsNSMYQ9fIomNfcQQgauSyn5LJeV1w4NgmHnWC3skZPSid4U76wZSYcfNXg",
        price: "₹5,891.18",
        originalPrice: "₹6,499",
        rating: "4.3",
        ratingCount: "379 ratings",
        delivery: "₹17.16 delivery Wed, 2 Apr",
        discount: "Save 9%",
        stock: "Only 14 left in stock",
        colors: ["#000000", "#3a3a3c", "#ffffff"],
        specs: {
            "Brand": "H&M",
            "Material": "Polyester-Viscose Blend",
            "Set Includes": "Shirt + Waistcoat + Pants",
            "Fit": "Slim Fit",
            "Pattern": "Solid Color",
            "Age Group": "6-12 Years",
            "Closure": "Button Front",
            "Care Instructions": "Dry Clean Only"
        },
        highlights: [
            "Complete formal ensemble",
            "Matching waistcoat included",
            "Stretchable comfort fabric",
            "Perfect for weddings and parties",
            "Modern European cut"
        ]
    },
    "15": {
        title: "Emporio Armani Kids Monogram Blazer",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQcrXQ3onOC11QyGvWvBlBAuunAI6Z_SDt1-hTZ0Kn1qbFGxb3ZypwV8UtYOSinyNtSpkvPoI-KBJ42xPaLrahyxXikskVf05OyQF5wfvcBU9mnqStSrF5o",
        price: "₹64,011.18",
        originalPrice: "₹69,999",
        rating: "4.7",
        ratingCount: "892 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        discount: "Save 8%",
        stock: "In Stock",
        colors: ["#000000", "#3a3a3c"],
        specs: {
            "Brand": "Emporio Armani",
            "Material": "Wool Blend",
            "Fit": "Regular Fit",
            "Lining": "Silk Blend",
            "Pattern": "Monogram Print",
            "Age Group": "10-12 Years",
            "Closure": "Single Button",
            "Care Instructions": "Dry Clean Only"
        },
        highlights: [
            "Premium wool blend fabric",
            "Signature EA monogram lining",
            "Notch lapel design",
            "Functional buttonholes",
            "Includes matching pocket square"
        ]
    },
    "16": {
        title: "Emporio Armani Kids Intarsia-knit Cotton Jumper",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRqS7kldgg7TYgMZ5Jjx7L--aM4n3hvkimH-b2evQnkgGs07gZyOuwJsRJ6HYTTFQ41QxG-pwPTnNbO-DQdCGNe2MdabnphhA92JLok-yiUi6vN7UWXNW-S",
        price: "₹26,271.97",
        originalPrice: "₹28,999",
        rating: "4.6",
        ratingCount: "1,024 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        discount: "Save 9%",
        stock: "Only 7 left in stock",
        colors: ["#000000", "#ffffff", "#3a3a3c"],
        specs: {
            "Brand": "Emporio Armani",
            "Material": "100% Cotton",
            "Fit": "Regular Fit",
            "Neckline": "Crew Neck",
            "Pattern": "Intarsia Knit Logo",
            "Age Group": "8-10 Years",
            "Care Instructions": "Machine Wash Cold"
        },
        highlights: [
            "Premium jersey cotton",
            "Contrast logo detailing",
            "Ribbed trim finishes",
            "Unisex design",
            "Perfect for layering"
        ]
    },
    "17": {
        title: "Emporio Armani Striped Seersucker Suit",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSw1ED6UWnV-96bhciSvpR5eYPj-GgMixH0wZ4mLIFu4UATLWN8fnFx5K9JEa5kCuMon90CkXWIp3l08RYGKznUb6vSfVe76I5j9TiMX4RTA3p_8fgrsh7A",
        price: "₹77,104.38",
        originalPrice: "₹84,999",
        rating: "4.8",
        ratingCount: "237 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        discount: "Save 9%",
        stock: "In Stock",
        colors: ["#ffffff", "#3a3a3c"],
        specs: {
            "Brand": "Emporio Armani",
            "Material": "100% Cotton Seersucker",
            "Set Includes": "Blazer + Shorts",
            "Fit": "Slim Fit",
            "Pattern": "Vertical Stripes",
            "Age Group": "10-12 Years",
            "Closure": "Button Front",
            "Care Instructions": "Dry Clean Only"
        },
        highlights: [
            "Premium seersucker fabric",
            "Breathable summer material",
            "Contrast inner lining",
            "Functional chest pocket",
            "Perfect for summer weddings"
        ]
    },
    "18": {
        title: "Emporio Armani Kids Two-Piece Dinner Suit",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTqwP0okYHY-oAm9S5m-ggd1l7vteFL-jbRc2wB5ms38D5BCONoV73BmcanFVgQMzhOnowjnTP7eA1sIjkg5xN1DW2vc4mh636vv-r1e2Vye7dRnvXl33eh",
        price: "₹87,887.01",
        originalPrice: "₹95,999",
        rating: "4.9",
        ratingCount: "156 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        discount: "Save 8%",
        stock: "Only 3 left in stock",
        colors: ["#000000"],
        specs: {
            "Brand": "Emporio Armani",
            "Material": "Wool-Silk Blend",
            "Set Includes": "Dinner Jacket + Trousers",
            "Fit": "Tailored Fit",
            "Lining": "Satin Finish",
            "Age Group": "12-14 Years",
            "Closure": "Single Button",
            "Care Instructions": "Dry Clean Only"
        },
        highlights: [
            "Black-tie formal wear",
            "Peak lapel design",
            "Functional sleeve buttons",
            "Matching satin stripe trousers",
            "Includes velvet hanger"
        ]
    },
    "19": {
        title: "Emporio Armani Kids Logo-Jacquard Dress",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ06elH6Piw0BwtZaS5xFzfEIK9oaivxJPXN4lMCV9H_zUihckr9PT_Gpk-SVoMi3s7DwWVqx_vgdNxoX4X_DFmOFbJsO4j_3Z89F_ijNYauTIF1laIN70HMw",
        price: "₹23,619.10",
        originalPrice: "₹25,999",
        rating: "4.4",
        ratingCount: "756 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        discount: "Save 9%",
        stock: "In Stock",
        colors: ["#0000ff", "#3a3a3c"],
        specs: {
            "Brand": "Emporio Armani",
            "Material": "Polyester-Viscose Blend",
            "Dress Length": "Knee-Length",
            "Neckline": "Round Neck",
            "Pattern": "Logo Jacquard",
            "Age Group": "8-10 Years",
            "Care Instructions": "Hand Wash Only"
        },
        highlights: [
            "Signature EA logo pattern",
            "Elasticated waistband",
            "Hidden back zipper",
            "Contrast trimmings",
            "Perfect for special occasions"
        ]
    },
    "20": {
        title: "ARMANI JUNIOR Blended Regular Fit Dress",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTjnpbbKn0DN2Lz0K0LUqy_tsThM4h_yOLWMowozXlbOPi8lUzvM4PKtGWYpW0C1uaaBlX9eC4SMuv3m-6wG6C-ZVyuwO0tZcqpHgj0fpHqz5hU_apXYiXFxg",
        price: "₹11,000",
        originalPrice: "₹12,500",
        rating: "4.2",
        ratingCount: "1,024 ratings",
        delivery: "₹17.62 delivery Wed, 2 Apr",
        discount: "Save 12%",
        stock: "In Stock",
        colors: ["#000080", "#ffffff"],
        specs: {
            "Brand": "ARMANI JUNIOR",
            "Material": "Cotton-Polyester Blend",
            "Fit": "Regular Fit",
            "Dress Length": "Midi Length",
            "Pattern": "Striped",
            "Age Group": "12-13 Years",
            "Closure": "Back Button",
            "Care Instructions": "Machine Wash Cold"
        },
        highlights: [
            "Classic nautical stripes",
            "Contrast collar detail",
            "Button-front closure",
            "Adjustable waist tie",
            "School-ready design"
        ]
    },
    "21": {
        title: "Dress EMPORIO ARMANI kids",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSKwQ8YBJCWNK0cyZLfZ84VoV6MoqzQUvD9EIejwKiijGXXw5nbgKL5NBhg1f0ByNyBmTOIXodQ1XRVQB_01g8zkrGDAjzFRWERUZmW0ISnZI2ryOalU6uYZg",
        price: "₹15,037.08",
        originalPrice: "₹16,499",
        rating: "4.5",
        ratingCount: "892 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        discount: "Save 9%",
        stock: "Only 5 left in stock",
        colors: ["#ff0000", "#000000"],
        specs: {
            "Brand": "Emporio Armani",
            "Material": "Silk Blend",
            "Fit": "A-Line",
            "Dress Length": "Above Knee",
            "Pattern": "Floral Print",
            "Age Group": "6-8 Years",
            "Closure": "Back Zipper",
            "Care Instructions": "Dry Clean Only"
        },
        highlights: [
            "Vibrant floral pattern",
            "Full silk lining",
            "Smocked bodice",
            "Puff sleeves",
            "Perfect for parties"
        ]
    },
    "22": {
        title: "ARMANI JUNIOR EA Jersey Fleece Dress",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRk-kEHZkNQLkQCVMY0CXg7OHWbTKWOKzUmegph8kWnkHmOp6QwpX5Yrhs8X-wigu8Jgr61akxOXFgJLIo4Ff-laYsoDoa3YFisl7Hhn6Hlw_IQM3lb3zxR1w",
        price: "₹19,000",
        originalPrice: "₹21,000",
        rating: "4.3",
        ratingCount: "1,237 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        discount: "Save 9%",
        stock: "In Stock",
        colors: ["#ff69b4", "#ffffff"],
        specs: {
            "Brand": "ARMANI JUNIOR",
            "Material": "Fleece Jersey",
            "Fit": "Oversized Fit",
            "Neckline": "Hooded",
            "Pattern": "Logo Print",
            "Age Group": "10-11 Years",
            "Care Instructions": "Machine Wash Cold"
        },
        highlights: [
            "Cozy fleece material",
            "Kangaroo pocket",
            "Ribbed cuffs and hem",
            "Contrast logo detailing",
            "Unisex casual wear"
        ]
    },
    "23": {
        title: "ARMANI JUNIOR New Manga Blended Dress",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTgH5_BK2yIni-yb_ouci8tTPEg5hp7B_w7osh5tynVyfOHJY41JFJ1qU9dQEub1D3Qx7vVp5HGfr-VZatqVxQjGI4XVQypASnFEAq5Cm6itu2M1c40X4tpvg",
        price: "₹10,500",
        originalPrice: "₹11,999",
        rating: "4.6",
        ratingCount: "1,562 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        discount: "Save 12%",
        stock: "In Stock",
        colors: ["#ffffff", "#3a3a3c"],
        specs: {
            "Brand": "ARMANI JUNIOR",
            "Material": "Cotton-Polyester Blend",
            "Fit": "Regular Fit",
            "Dress Length": "Midi Length",
            "Pattern": "Manga Print",
            "Age Group": "4-5 Years",
            "Closure": "Front Button",
            "Care Instructions": "Machine Wash Cold"
        },
        highlights: [
            "Playful manga character prints",
            "Peter Pan collar",
            "Adjustable waist tie",
            "Pocket detailing",
            "Perfect for casual outings"
        ]
    },
    "24": {
        title: "Armani Junior Silk Floral Print Dress",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTQZah5lySBsS06Jhw5nvdD1E3KbKlxIHTzEe60tQkth7rf662GqHwnpn4z2EViANZSFWbSA0Rol2aL8IWMus_lnzxrZeX02dJUbbwqwBdoKrE5khfxD7Ik",
        price: "₹21,079",
        originalPrice: "₹23,499",
        rating: "4.7",
        ratingCount: "2,379 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        discount: "Save 10%",
        stock: "Only 2 left in stock",
        colors: ["#98fb98", "#ffffff"],
        specs: {
            "Brand": "ARMANI JUNIOR",
            "Material": "100% Silk",
            "Fit": "A-Line",
            "Dress Length": "Knee-Length",
            "Pattern": "Floral Print",
            "Age Group": "5-6 Years",
            "Closure": "Back Zipper",
            "Care Instructions": "Dry Clean Only"
        },
        highlights: [
            "Luxury silk fabric",
            "Hand-rolled hem",
            "Contrast satin ribbon",
            "Hidden back zipper",
            "Special occasion wear"
        ]
    },
    "25": {
        title: "Apple 2024 MacBook Pro Laptop with M4 chip",
        image: "https://m.media-amazon.com/images/I/618r76w5dGL._AC_UY327_FMwebp_QL65_.jpg",
        price: "₹1,499.99",
        originalPrice: "₹1,599.99",
        rating: "4.8",
        ratingCount: "2,142 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        discount: "Save ₹100 (6%)",
        stock: "In Stock",
        colors: ["#3a3a3c", "#f5f5f7"],
        specs: {
            "Brand": "Apple",
            "Model": "MacBook Pro 14\"",
            "Processor": "M4 chip (10-core CPU)",
            "RAM": "16GB Unified Memory",
            "Storage": "512GB SSD",
            "Display": "14.2\" Liquid Retina XDR",
            "Resolution": "3024 x 1964 pixels",
            "Battery": "Up to 18 hours video playback",
            "Ports": "3x Thunderbolt 4, HDMI, SDXC",
            "Weight": "1.6 kg",
            "OS": "macOS Sonoma"
        },
        highlights: [
            "M4 chip with 10-core CPU/16-core GPU",
            "Liquid Retina XDR display with ProMotion",
            "1080p FaceTime HD camera",
            "Six-speaker sound system with force-cancelling woofers",
            "Magic Keyboard with Touch ID"
        ]
    },
    "26": {
        title: "ACEMAGIC 15.6\" Laptop",
        image: "https://m.media-amazon.com/images/I/716uMsfCxbL._AC_UY327_FMwebp_QL65_.jpg",
        price: "₹299.99",
        rating: "4.1",
        ratingCount: "483 ratings",
        delivery: "₹15.62 delivery Wed, 2 Apr",
        stock: "In Stock",
        colors: ["#000000"],
        specs: {
            "Brand": "ACEMAGIC",
            "Processor": "Intel N-97 (Up to 3.6GHz)",
            "RAM": "12GB DDR4",
            "Storage": "256GB SSD",
            "Display": "15.6\" FHD IPS",
            "Resolution": "1920 x 1080",
            "Graphics": "Intel UHD Graphics",
            "Battery": "38Wh (Up to 8 hours)",
            "Ports": "2x USB 3.0, 1x USB-C, HDMI",
            "Weight": "1.75 kg",
            "OS": "Windows 11 Pro"
        },
        highlights: [
            "Quad-core Intel processor",
            "Full HD IPS anti-glare display",
            "Backlit keyboard",
            "Dual-band Wi-Fi 6",
            "Military-grade durability"
        ]
    },
    "27": {
        title: "Lenovo Tab Plus 8GB/128GB Tablet",
        image: "https://m.media-amazon.com/images/I/71J0O9IHi7L._AC_UY327_FMwebp_QL65_.jpg",
        price: "₹349.99",
        originalPrice: "₹379.99",
        rating: "4.3",
        ratingCount: "1,024 ratings",
        delivery: "₹9.99 delivery Wed, 2 Apr",
        discount: "Save ₹30 (8%)",
        stock: "Only 7 left in stock",
        colors: ["#000000", "#5a8eff"],
        specs: {
            "Brand": "Lenovo",
            "Display": "11.5\" 2K IPS",
            "Resolution": "2000 x 1200",
            "Processor": "MediaTek Helio G99",
            "RAM": "8GB",
            "Storage": "128GB (Expandable)",
            "Battery": "7700mAh",
            "OS": "Android 13",
            "Speakers": "Quad JBL-tuned",
            "Weight": "520g"
        },
        highlights: [
            "2K display with 120Hz refresh rate",
            "Four JBL speakers with Dolby Atmos",
            "Reading mode with TÜV certification",
            "Desktop mode support",
            "Pre-installed Google Kids Space"
        ]
    },
    // Continue laptops (28-36)
    "28": { // Update this ID to your next available number
        title: "ASUS ROG Zephyrus M16 Gaming Laptop 2023",
        image: "https://m.media-amazon.com/images/I/6177weNRfFL._AC_SL1221_.jpg",
        price: "₹2,199.99",
        originalPrice: "₹2,499.99",
        rating: "4.8",
        ratingCount: "1,847 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        discount: "Save ₹300 (12%)",
        stock: "Only 3 left in stock",
        colors: ["#000000", "#ff0033"],
        specs: {
            "Brand": "ASUS ROG",
            "Model": "GU604VY-NM069W",
            "Processor": "Intel Core i9-13900H (24M Cache, up to 5.4GHz)",
            "RAM": "32GB DDR5-4800MHz",
            "Storage": "2TB PCIe 4.0 NVMe SSD",
            "Display": "16\" QHD+ 16:10 (2560 x 1600)",
            "Refresh Rate": "240Hz",
            "Panel Type": "IPS-level Nebula HDR",
            "Graphics": "NVIDIA GeForce RTX 4090 16GB GDDR6",
            "Cooling": "Arc Flow Fans with Liquid Metal Thermal Compound",
            "Battery": "90WHrs, 4-cell Li-ion",
            "Weight": "2.3 kg",
            "OS": "Windows 11 Pro",
            "Special Features": "AniMe Matrix LED lid, Dolby Atmos, 3D AI Noise Cancellation"
        },
        highlights: [
            "Intel 13th Gen Core i9 processor with 24 cores",
            "NVIDIA RTX 4090 Laptop GPU with MUX Switch",
            "QHD 240Hz Nebula HDR Display (100% DCI-P3)",
            "AniMe Matrix LED customizable lid display",
            "Military-grade MIL-STD-810H durability",
            "Quad speakers with Dolby Atmos",
            "Per-key RGB keyboard with 1.7mm travel",
            "Thunderbolt 4 + USB 3.2 Gen 2 Type-C with PD charging",
            "ROG Intelligent Cooling with liquid metal thermal paste"
        ]
    },
    "29": { // Update ID number as needed
        title: "ASUS TUF Gaming A15 (2023) 15.6\" FHD Gaming Laptop",
        image: "https://m.media-amazon.com/images/I/61nTNphSBvL._AC_UY327_FMwebp_QL65_.jpg",
        price: "₹1,099.99",
        originalPrice: "₹1,249.99",
        rating: "4.6",
        ratingCount: "2,143 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        discount: "Save ₹150 (12%)",
        stock: "In Stock",
        colors: ["#000000", "#ff0000"],
        specs: {
            "Brand": "ASUS TUF",
            "Model": "FA507NV-LP094W",
            "Processor": "AMD Ryzen 7 7435HS (8-core/16-thread, up to 4.75GHz)",
            "RAM": "16GB DDR5-4800MHz (Expandable to 32GB)",
            "Storage": "1TB PCIe 3.0 NVMe SSD",
            "Display": "15.6\" FHD (1920 x 1080) 16:9",
            "Refresh Rate": "144Hz",
            "Panel Type": "IPS-level Anti-glare",
            "Graphics": "NVIDIA GeForce RTX 4060 8GB GDDR6 (140W TGP)",
            "Cooling": "Arc Flow Fans with Anti-Dust Technology",
            "Battery": "90WHrs, 4-cell Li-ion",
            "Weight": "2.2 kg",
            "OS": "Windows 11 Home",
            "Military Standard": "MIL-STD-810H certified",
            "Ports": "1x USB 4 (Type-C), 2x USB 3.2 Gen 1, 1x HDMI 2.1, 1x RJ45"
        },
        highlights: [
            "AMD Ryzen 7 7435HS Zen 3+ architecture",
            "NVIDIA RTX 4060 Laptop GPU with DLSS 3",
            "144Hz refresh rate with Adaptive-Sync",
            "Durable MIL-STD-810H military standard construction",
            "Upgradable RAM and storage (2x SO-DIMM slots, 2x M.2)",
            "90Wh battery with up to 8 hours video playback",
            "RGB-backlit keyboard with 1.7mm key travel",
            "Dual-speaker system with DTS:X Ultra",
            "Self-cleaning cooling system with 84-blade Arc Flow Fans",
            "TUF Gaming AI noise-canceling technology"
        ]
    },
    "30": {
        title: "Dell Inspiron 14 2-in-1 Laptop",
        image: "https://m.media-amazon.com/images/I/71qRWDn7yoL._AC_UY327_FMwebp_QL65_.jpg",
        price: "₹799.99",
        rating: "4.5",
        ratingCount: "2,379 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        stock: "Only 7 left in stock",
        colors: ["#3a3a3c", "#f5f5f7"],
        specs: {
            "Brand": "Dell",
            "Processor": "Intel Core i7-1255U",
            "RAM": "16GB LPDDR4x",
            "Storage": "1TB PCIe NVMe SSD",
            "Display": "14\" FHD+ Touch",
            "Resolution": "1920 x 1200",
            "Graphics": "Intel Iris Xe",
            "Battery": "54Wh (Up to 12 hours)",
            "Weight": "1.6 kg",
            "OS": "Windows 11 Pro"
        },
        highlights: [
            "Convertible 360° hinge design",
            "Corning Gorilla Glass touchscreen",
            "Dell ComfortView Plus (Low Blue Light)",
            "ExpressCharge (80% in 60 mins)",
            "Backlit keyboard with fingerprint reader"
        ]
    },
    "31": {
        title: "Lenovo IdeaPad Gaming 3",
        image: "https://m.media-amazon.com/images/I/71S1eXJmIAL._AC_UY327_FMwebp_QL65_.jpg",
        price: "₹899.99",
        originalPrice: "₹949.99",
        rating: "4.6",
        ratingCount: "3,142 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        discount: "Save ₹50 (5%)",
        stock: "In Stock",
        colors: ["#000000", "#ff0033"],
        specs: {
            "Brand": "Lenovo",
            "Processor": "AMD Ryzen 7 6800H",
            "RAM": "16GB DDR5",
            "Storage": "1TB PCIe SSD",
            "Display": "15.6\" FHD IPS 165Hz",
            "Resolution": "1920 x 1080",
            "Graphics": "NVIDIA RTX 3050 Ti 4GB",
            "Cooling": "Dual fan with Q Control 4.0",
            "Weight": "2.4 kg",
            "OS": "Windows 11 Home"
        },
        highlights: [
            "AMD Ryzen 7 processor",
            "NVIDIA RTX 3050 Ti graphics",
            "165Hz refresh rate display",
            "4-zone RGB backlit keyboard",
            "Dolby Atmos speakers"
        ]
    },
    "32": {
        title: "ASUS VivoBook Pro 16 OLED",
        image: "https://m.media-amazon.com/images/I/81Ev2S5nrVL._AC_UY327_FMwebp_QL65_.jpg",
        price: "₹1,199.99",
        rating: "4.7",
        ratingCount: "1,237 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        stock: "Only 3 left in stock",
        colors: ["#000000", "#4a4a4a"],
        specs: {
            "Brand": "ASUS",
            "Processor": "Intel Core i9-12900H",
            "RAM": "32GB DDR5",
            "Storage": "1TB PCIe 4.0 SSD",
            "Display": "16\" 4K OLED HDR",
            "Resolution": "3840 x 2400",
            "Graphics": "NVIDIA RTX 3060 6GB",
            "Battery": "96Wh (Up to 9 hours)",
            "Weight": "2.2 kg",
            "OS": "Windows 11 Pro"
        },
        highlights: [
            "4K OLED HDR display (100% DCI-P3)",
            "Intel Core i9 processor",
            "NVIDIA Studio Ready certification",
            "ASUS DialPad virtual controller",
            "Harman Kardon certified audio"
        ]
    },
    "33": {
        title: "Acer Swift X Creator Laptop",
        image: "https://m.media-amazon.com/images/I/71VG3azYMjL._AC_UY327_FMwebp_QL65_.jpg",
        price: "₹1,099.99",
        originalPrice: "₹1,199.99",
        rating: "4.4",
        ratingCount: "892 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        discount: "Save ₹100 (8%)",
        stock: "In Stock",
        colors: ["#000000", "#5a8eff"],
        specs: {
            "Brand": "Acer",
            "Processor": "AMD Ryzen 9 6900HS",
            "RAM": "32GB LPDDR5",
            "Storage": "2TB PCIe NVMe SSD",
            "Display": "14.5\" WQXGA IPS",
            "Resolution": "2560 x 1600",
            "Graphics": "NVIDIA RTX 3050 Ti",
            "Battery": "76Wh (Up to 14 hours)",
            "Weight": "1.5 kg",
            "OS": "Windows 11 Pro"
        },
        highlights: [
            "Ultra-portable 1.5kg design",
            "WQXGA 120Hz display",
            "Fingerprint reader & Windows Hello",
            "TwinAir cooling system",
            "Military-grade durability"
        ]
    },
    "34": {
        title: "MSI Katana GF76 Gaming Laptop",
        image: "https://images.frandroid.com/wp-content/uploads/2024/01/razer-blade-16-2024-frandroid-2024.png",
        price: "₹1,499.99",
        rating: "4.8",
        ratingCount: "2,585 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        stock: "Only 2 left in stock",
        colors: ["#000000", "#ff0000"],
        specs: {
            "Brand": "MSI",
            "Processor": "Intel Core i7-12700H",
            "RAM": "32GB DDR4",
            "Storage": "2TB NVMe SSD",
            "Display": "17.3\" FHD 144Hz",
            "Resolution": "1920 x 1080",
            "Graphics": "NVIDIA RTX 3070 Ti 8GB",
            "Cooling": "Cooler Boost 5",
            "Weight": "2.9 kg",
            "OS": "Windows 11 Home"
        },
        highlights: [
            "144Hz refresh rate display",
            "Per-key RGB gaming keyboard",
            "Dynaudio speaker system",
            "SteelSeries keyboard collaboration",
            "VR Ready certification"
        ]
    },
    "35": {
        title: "Microsoft Surface Laptop 5",
        image: "https://th.bing.com/th/id/OIP.WMSPl5ENCaPpj_nlf2SwaAHaFj?rs=1&pid=ImgDetMain",
        price: "₹1,299.99",
        originalPrice: "₹1,399.99",
        rating: "4.6",
        ratingCount: "3,421 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        discount: "Save ₹100 (7%)",
        stock: "In Stock",
        colors: ["#3a3a3c", "#f5f5f7", "#a3c1d3"],
        specs: {
            "Brand": "Microsoft",
            "Processor": "Intel Core i7-1255U",
            "RAM": "16GB LPDDR5x",
            "Storage": "512GB SSD",
            "Display": "13.5\" PixelSense Touch",
            "Resolution": "2256 x 1504",
            "Graphics": "Intel Iris Xe",
            "Battery": "Up to 18 hours",
            "Weight": "1.3 kg",
            "OS": "Windows 11 Pro"
        },
        highlights: [
            "Alcantara luxury keyboard deck",
            "3:2 aspect ratio touchscreen",
            "Omnisonic speakers with Dolby Atmos",
            "Instant On feature",
            "Surface Pen compatible"
        ]
    },
    "36": {
        title: "ROG zephyrus G16",
        image: "https://th.bing.com/th/id/OIP.1h9othO2DYh8E93CY3vRegHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        price: "₹3,499.99",
        rating: "4.9",
        ratingCount: "1,024 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        stock: "Only 1 left in stock",
        colors: ["#000000"],
        specs: {
            "Brand": "Razer",
            "Processor": "Intel Core i9-13950HX",
            "RAM": "64GB DDR5",
            "Storage": "4TB NVMe SSD (2x 2TB)",
            "Display": "16\" Dual Mode Mini-LED",
            "Resolution": "UHD+ 3840x2400 (120Hz) / FHD+ 1920x1200 (240Hz)",
            "Graphics": "NVIDIA RTX 4090 16GB",
            "Cooling": "Vapor Chamber",
            "Weight": "2.5 kg",
            "OS": "Windows 11 Pro"
        },
        highlights: [
            "World's first dual-mode display",
            "CNC aluminum unibody",
            "THX Spatial Audio",
            "Per-key RGB Chroma lighting",
            "100% DCI-P3 color accuracy"
        ]
    },
    // Tablets (37-48)
    "37": {
        title: "Redmi pad pro 5g",
        image: "https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/j/f/f/-original-imah4zj6zp9cfa53.jpeg?q=70",
        price: "₹20,999",
        originalPrice: "₹22,999",
        rating: "4.6",
        ratingCount: "3,421 ratings",
        delivery: "₹59 delivery Wed, 2 Apr",
        discount: "Save ₹2,000 (9%)",
        stock: "In Stock",
        colors: ["#f5f5f7", "#3a3a3c"],
        specs: {
            "Brand": "Apple",
            "Display": "10.9\" Liquid Retina",
            "Resolution": "2360 x 1640",
            "Processor": "A14 Bionic",
            "RAM": "4GB",
            "Storage": "64GB",
            "Battery": "Up to 10 hours",
            "OS": "iPadOS 16",
            "Weight": "477g"
        },
        highlights: [
            "All-screen design",
            "USB-C connectivity",
            "12MP front/back cameras",
            "Supports Apple Pencil (1st gen)",
            "5G capable"
        ]
    },
    "38": {
        title: "SAMSUNG Galaxy Tab S9 FE+",
        image: "https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/8/i/q/-original-imaguyffv34ghmky.jpeg?q=70",
        price: "₹19,999",
        rating: "4.4",
        ratingCount: "1,287 ratings",
        delivery: "₹71 delivery Wed, 2 Apr",
        stock: "Only 7 left in stock",
        colors: ["#3a3a3c", "#a3c1d3"],
        specs: {
            "Brand": "Samsung",
            "Display": "12.4\" LCD",
            "Resolution": "2560 x 1600",
            "Processor": "Exynos 1380",
            "RAM": "8GB",
            "Storage": "128GB",
            "Battery": "10,090mAh",
            "OS": "Android 13",
            "Weight": "627g"
        },
        highlights: [
            "Includes S Pen",
            "Quad speakers with Dolby Atmos",
            "DeX desktop experience",
            "45W fast charging",
            "IP68 water resistance"
        ]
    },
    // Continue tablets (39-48)
    "39": {
        title: "Blackview Tab 16 Android Tablet",
        image: "https://m.media-amazon.com/images/I/71a+I5A5slL._AC_UY327_FMwebp_QL65_.jpg",
        price: "₹199.99",
        rating: "4.0",
        ratingCount: "892 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        stock: "In Stock",
        colors: ["#000000", "#ff0000"],
        specs: {
            "Brand": "Blackview",
            "Display": "10.1\" FHD",
            "Processor": "Octa-core T606",
            "RAM": "8GB",
            "Storage": "128GB",
            "Battery": "6580mAh",
            "OS": "Android 13",
            "Weight": "520g"
        },
        highlights: [
            "Dual 4G SIM support",
            "2K display with eye protection",
            "Google Widevine L1 certification",
            "Multi-window multitasking",
            "Military-grade durability"
        ]
    },
    "40": {
        title: "realme Pad 2 Lite 4GB/128GB",
        image: "https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/f/k/b/-original-imah4rktdpdfyhbm.jpeg?q=70",
        price: "₹12,999",
        originalPrice: "₹14,999",
        rating: "4.0",
        ratingCount: "1,562 ratings",
        delivery: "₹60 delivery Wed, 2 Apr",
        discount: "Save ₹2,000 (13%)",
        stock: "In Stock",
        colors: ["#3a3a3c", "#b5b5b5"],
        specs: {
            "Brand": "realme",
            "Display": "10.1\" IPS LCD",
            "Resolution": "1920 x 1200",
            "Processor": "Unisoc T616",
            "RAM": "4GB",
            "Storage": "128GB (expandable)",
            "Battery": "7100mAh (18W fast charging)",
            "OS": "Android 13",
            "Weight": "460g",
            "Speakers": "Quad speakers with Dolby Atmos"
        },
        highlights: [
            "7mm ultra-slim metal body",
            "Eye comfort display with TÜV certification",
            "Smart split screen for multitasking",
            "Long-lasting battery with reverse charging",
            "Dedicated microSD slot (up to 1TB)"
        ]
    },
    "41": {
        title: "UMIDIGI Tablet 10.1\" Android 13",
        image: "https://m.media-amazon.com/images/I/71KY4mzGfSL._AC_UY327_FMwebp_QL65_.jpg",
        price: "₹10,999",
        originalPrice: "₹12,499",
        rating: "3.9",
        ratingCount: "673 ratings",
        delivery: "₹12.99 delivery Wed, 2 Apr",
        discount: "Save ₹1,500 (12%)",
        stock: "Only 5 left in stock",
        colors: ["#000000", "#00ffcc"],
        specs: {
            "Brand": "UMIDIGI",
            "Display": "10.1\" FHD",
            "Processor": "Octa-core T606",
            "RAM": "6GB",
            "Storage": "128GB",
            "Battery": "6000mAh",
            "OS": "Android 13",
            "Weight": "490g",
            "Features": "Face unlock, GPS"
        },
        highlights: [
            "Full metal unibody design",
            "Dual-band Wi-Fi 6 support",
            "Google Widevine L1 for HD streaming",
            "Dual SIM + microSD expansion",
            "Kids mode with parental controls"
        ]
    },
    "42": {
        title: "OUKITEL RT3 Rugged Tablet",
        image: "https://m.media-amazon.com/images/I/81q9TZwKhwL._AC_UY327_FMwebp_QL65_.jpg",
        price: "₹349.99",
        rating: "4.2",
        ratingCount: "1,024 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        stock: "In Stock",
        colors: ["#000000", "#ff0000"],
        specs: {
            "Brand": "OUKITEL",
            "Display": "10.1\" FHD IPS",
            "Protection": "IP68/IP69K/MIL-STD-810H",
            "Processor": "Helio G99",
            "RAM": "8GB",
            "Storage": "256GB",
            "Battery": "10000mAh",
            "OS": "Android 13",
            "Weight": "650g"
        },
        highlights: [
            "Military-grade rugged design",
            "Drop-proof up to 1.5m",
            "Glove & wet touch support",
            "Night vision camera",
            "Massive battery with 33W charging"
        ]
    },
    "43": {
        title: "Lenovo Tab Plus 8GB RAM 128GB Tablet",
        image: "https://m.media-amazon.com/images/I/61mpmFMSAML._AC_UY327_FMwebp_QL65_.jpg",
        price: "₹15,999",
        originalPrice: "₹17,999",
        rating: "4.3",
        ratingCount: "1,024 ratings",
        delivery: "₹59 delivery Wed, 2 Apr",
        discount: "Save ₹2,000 (11%)",
        stock: "Only 7 left in stock",
        colors: ["#2a2a2a", "#b5b5b5", "#5a8eff"],
        specs: {
            "Brand": "Lenovo",
            "Model": "Lenovo Tab Plus",
            "Display": "11.5\" 2K IPS LCD (2000 x 1200)",
            "Refresh Rate": "60Hz (120Hz Touch Sampling)",
            "Processor": "MediaTek Helio G99 (6nm)",
            "RAM": "8GB LPDDR4X",
            "Storage": "128GB UFS 2.2 (Expandable up to 1TB via microSD)",
            "Battery": "7700mAh with 20W Fast Charging",
            "Audio": "Quad JBL Speakers with Dolby Atmos",
            "Cameras": "13MP Rear + 8MP Front",
            "OS": "Android 13 (Upgradable to Android 14)",
            "Weight": "520g",
            "Dimensions": "264.3 x 168.2 x 7.5mm",
            "Special Features": "Reading Mode, TÜV Rheinland Eye Protection, Desktop Mode"
        },
        highlights: [
            "2K Display with TÜV Rheinland Eye Comfort Certification",
            "MediaTek Helio G99 Gaming Processor",
            "Quad JBL Speakers with Dolby Atmos Support",
            "Massive 7700mAh Battery (Up to 12 Hours Video Playback)",
            "Desktop Mode for Productivity (External Monitor Support)",
            "Pre-installed Google Kids Space for Child-Friendly Content",
            "Metal Unibody Design (7.5mm Thin)",
            "Widevine L1 for HD Streaming (Netflix, Prime Video)",
            "Dual Microphones with Noise Cancellation",
            "Stylus Support (Lenovo Precision Pen 2 Sold Separately)"
        ]
    },
    "44": {
        title: "Razer Edge 5G Gaming Tablet",
        image: "https://th.bing.com/th/id/OIP.ooNXtRBlQPYJaPQ3YZ9FLgHaEK?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        price: "₹899.99",
        rating: "4.7",
        ratingCount: "1,847 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        stock: "Only 3 left in stock",
        colors: ["#000000", "#00ff00"],
        specs: {
            "Brand": "Razer",
            "Display": "6.78\" AMOLED 165Hz",
            "Processor": "Snapdragon 8 Gen 2",
            "RAM": "16GB",
            "Storage": "512GB",
            "Battery": "6000mAh",
            "Cooling": "AeroActive Cooler 7",
            "Features": "Ultrasonic buttons, 5G"
        },
        highlights: [
            "165Hz AMOLED display",
            "Console-grade gaming performance",
            "Kishi V2 Pro controller support",
            "Vapor chamber cooling",
            "5G cloud gaming ready"
        ]
    },
    "45": {
        title: "Motorola Tab G85 5G",
        image: "https://th.bing.com/th/id/OIP.L8gVYk9AGJ1EoJYSIA0OjAHaGV?w=189&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        price: "₹279.99",
        originalPrice: "₹299.99",
        rating: "4.1",
        ratingCount: "1,562 ratings",
        delivery: "₹8.99 delivery Wed, 2 Apr",
        discount: "Save ₹20 (7%)",
        stock: "In Stock",
        colors: ["#2a2a2a", "#b5b5b5"],
        specs: {
            "Brand": "Motorola",
            "Display": "11\" pOLED 120Hz",
            "Processor": "Snapdragon 6 Gen 1",
            "RAM": "8GB",
            "Storage": "256GB",
            "Battery": "5000mAh",
            "OS": "Android 14",
            "Material": "Vegan leather back"
        },
        highlights: [
            "120Hz pOLED display",
            "Ready For PC mode",
            "Stock Android experience",
            "30W TurboPower charging",
            "Premium vegan leather finish"
        ]
    },
    "46": {
        title: "ASUS VivoTab 13.4\" 2-in-1 OLED Windows Tablet",
        image: "https://images.anandtech.com/doci/6387/DSC_0024_575px.jpg",
        price: "₹1,199.99",
        originalPrice: "₹1,349.99",
        rating: "4.5",
        ratingCount: "892 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        discount: "Save ₹150 (11%)",
        stock: "In Stock",
        colors: ["#000000", "#3a3a3c"],
        specs: {
            "Brand": "ASUS",
            "Model": "VivoTab Pro 13.4 OLED",
            "Display": "13.4\" 3K OLED (2880 x 1800) 16:10",
            "Touchscreen": "10-point multi-touch + ASUS Pen 2.0 support",
            "Processor": "Intel Core i7-1260P (12-core, up to 4.7GHz)",
            "RAM": "16GB LPDDR5",
            "Storage": "1TB PCIe 4.0 SSD",
            "Graphics": "Intel Iris Xe",
            "Battery": "63Wh (Up to 12 hours)",
            "Ports": "2x Thunderbolt 4, 1x USB 3.2 Gen 2 Type-A",
            "Weight": "1.29 kg (Tablet only), 1.88 kg (with keyboard)",
            "OS": "Windows 11 Pro",
            "Keyboard": "Backlit ErgoSense keyboard included",
            "Camera": "5MP front + 13MP rear with 4K recording"
        },
        highlights: [
            "Stunning 3K OLED display (100% DCI-P3, Pantone Validated)",
            "Included ASUS Pen 2.0 (4096 pressure levels, magnetic attachment)",
            "Military-grade MIL-STD-810H durability",
            "ErgoSense keyboard with 1.4mm key travel",
            "Quad speakers with Dolby Atmos",
            "ASUS DialPad virtual controller for creative apps",
            "Windows Studio Effects (AI-powered background blur/auto framing)",
            "Smart AMP technology for 350% louder audio",
            "Fingerprint sensor + Windows Hello facial recognition",
            "Ultra-thin 8.9mm aluminum unibody design"
        ]
    },
    "47": {
        title: "DOOGEE T20 Ultra Tablet",
        image: "https://th.bing.com/th/id/OIP.YTI91yGuGFvZT03eQz8KgAHaHX?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        price: "₹399.99",
        rating: "4.3",
        ratingCount: "1,024 ratings",
        delivery: "FREE delivery Wed, 2 Apr",
        stock: "In Stock",
        colors: ["#000000", "#3a3a3c"],
        specs: {
            "Brand": "DOOGEE",
            "Display": "12.4\" 2K IPS",
            "Processor": "Helio G99",
            "RAM": "12GB",
            "Storage": "256GB",
            "Battery": "10000mAh",
            "OS": "Android 13",
            "Features": "Stylus support, 5G"
        },
        highlights: [
            "2K resolution display",
            "Desktop mode with keyboard support",
            "Quad speakers with Dolby Atmos",
            "18W fast charging + reverse charging",
            "Included stylus with 4096 pressure levels"
        ]
    },
    "48": {
        title: "Infinix NotePad 10.4\" Android Tablet",
        image: "https://phonecorridor.com/wp-content/uploads/infinix-xpad.jpg",
        price: "₹12,999",
        originalPrice: "₹14,999",
        rating: "4.1",
        ratingCount: "1,562 ratings",
        delivery: "₹99 delivery Wed, 2 Apr",
        discount: "Save ₹2,000 (13%)",
        stock: "In Stock",
        colors: ["#000000", "#3a3a3c", "#a3c1d3"],
        specs: {
            "Brand": "Infinix",
            "Model": "NotePad X1",
            "Display": "10.4\" IPS LCD (2000 x 1200)",
            "Processor": "Unisoc Tiger T606 (12nm)",
            "RAM": "6GB (4GB + 2GB Virtual)",
            "Storage": "128GB (Expandable up to 1TB)",
            "Battery": "6000mAh with 18W Fast Charging",
            "Cameras": "8MP Rear + 5MP Front",
            "Audio": "Quad Speakers with DTS",
            "OS": "Android 13 (XOS 13)",
            "Weight": "460g",
            "Dimensions": "247.2 x 157.2 x 7.8mm",
            "Special Features": "Reading Mode, Eye Care, Smart Panel"
        },
        highlights: [
            "2K Display with TÜV Rheinland Eye Protection",
            "XOS 13 with Smart Panel for Multitasking",
            "6000mAh Battery (Up to 12 Hours Video Playback)",
            "Metal Unibody Design (7.8mm Thin)",
            "Quad Speakers with DTS Audio Processing",
            "Kids Mode with Parental Controls",
            "Face Unlock + Side-mounted Fingerprint Sensor",
            "Dedicated Reading Mode with Blue Light Reduction",
            "Split Screen & Floating Window Support",
            "Includes Infinix XPen (1024 Pressure Levels)"
        ]
    },

    // Men's Fashion (49-52)
    "49": {
        title: "Men's Textured Regular Fit Shirt",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTpXkA9h7hi3qOzRx8nkwTWy4qEtR1T6Yt3EKocqjia5qEq7_aJGTYZhsxLd5m-f6WmI0kJrok8ps-SeOBrQT9MJJwLuyZH00ApZcLQ-cs42rmF4PSicJrK",
        price: "₹1,399",
        originalPrice: "₹1,799",
        rating: "4.2",
        ratingCount: "842 ratings",
        delivery: "₹1,399 delivery Wed, 2 Apr",
        discount: "Save ₹400 (22%)",
        stock: "In Stock",
        colors: ["#3a3a3c", "#ffffff", "#5a8eff"],
        specs: {
            "Brand": "Symbol",
            "Material": "100% Cotton",
            "Fit": "Regular Fit",
            "Sleeve": "Full Sleeve",
            "Pattern": "Textured",
            "Closure": "Button",
            "Care": "Machine Wash"
        },
        highlights: [
            "Premium cotton fabric",
            "Textured design for formal look",
            "Comfortable regular fit",
            "Durable buttons",
            "Suitable for office wear"
        ]
    },
    "50": {
        title: "Trillion Men's Formal Trousers",
        image: "https://m.media-amazon.com/images/I/41oxHlqVLXL._AC_UL480_FMwebp_QL65_.jpg",
        price: "₹3,799",
        rating: "4.0",
        ratingCount: "1,024 ratings",
        delivery: "₹3,799 delivery Wed, 2 Apr",
        stock: "In Stock",
        colors: ["#000000", "#3a3a3c"],
        specs: {
            "Brand": "Trillion",
            "Material": "Polyester Blend",
            "Fit": "Slim Fit",
            "Closure": "Zip & Button",
            "Pockets": "4 (2 front, 2 back)",
            "Care": "Machine Wash"
        },
        highlights: [
            "Premium fabric with stretch",
            "Slim fit design",
            "Comfortable waistband",
            "Wrinkle-resistant",
            "Perfect for formal occasions"
        ]
    },
    "51": {
        title: "ARDO Men's Slim Fit Shirt",
        image: "https://m.media-amazon.com/images/I/51W0YDiJobL._AC_UL480_FMwebp_QL65_.jpg",
        price: "₹3,999",
        originalPrice: "₹4,499",
        rating: "4.1",
        ratingCount: "1,237 ratings",
        delivery: "₹3,999 delivery Wed, 2 Apr",
        discount: "Save ₹500 (11%)",
        stock: "In Stock",
        colors: ["#000000", "#ffffff"],
        specs: {
            "Brand": "ARDO",
            "Material": "Cotton Blend",
            "Fit": "Slim Fit",
            "Sleeve": "Full Sleeve",
            "Pattern": "Solid",
            "Closure": "Button",
            "Care": "Machine Wash"
        },
        highlights: [
            "Breathable cotton blend",
            "Modern slim fit",
            "Anti-wrinkle technology",
            "Reinforced collar",
            "Perfect for business casual"
        ]
    },
    "52": {
        title: "Peter England Men Black Formal Trousers",
        image: "https://m.media-amazon.com/images/I/617EoGqXjoL._AC_UL480_FMwebp_QL65_.jpg",
        price: "₹2,999",
        originalPrice: "₹3,499",
        rating: "4.3",
        ratingCount: "1,562 ratings",
        delivery: "₹2,999 delivery Wed, 2 Apr",
        discount: "Save ₹500 (14%)",
        stock: "In Stock",
        colors: ["#000000"],
        specs: {
            "Brand": "Peter England",
            "Material": "Polyester-Viscose",
            "Fit": "Regular Fit",
            "Closure": "Zip & Button",
            "Pockets": "4",
            "Care": "Machine Wash"
        },
        highlights: [
            "Premium formal trousers",
            "Comfort stretch fabric",
            "Anti-static lining",
            "Secure zip closure",
            "Perfect for office wear"
        ]
    },
    "53": {
    "title": "Symbol Men's Stretchable Casual Pants",
    "image": "https://m.media-amazon.com/images/I/61TM1RRxo9L._AC_UL480_FMwebp_QL65_.jpg",
    "price": "₹1,999",
    "originalPrice": "₹2,105",
    "rating": "4.3",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,999 delivery Wed, 2 Apr",
    "discount": "Save ₹106 (5%)",
    "stock": "In Stock",
    "colors": ["Black", "Navy Blue", "Gray"],
    "specs": {
        "Brand": "Symbol",
        "Fabric": "Polyester-Cotton Blend",
        "Fit": "Regular Fit",
        "Closure": "Elastic Waist with Drawstring",
        "Pockets": "2 Side, 1 Back",
        "Occasion": "Casual, Office",
        "Care": "Machine Wash"
    },
    "highlights": [
        "Stretchable fabric for comfort",
        "Lightweight & breathable",
        "Adjustable waistband",
        "Wrinkle-resistant",
        "Versatile for multiple occasions"
    ]
},
"54": {
    "title": "T-Shirts for Men",
    "image": "https://m.media-amazon.com/images/I/418rBCEJ30L._AC_UL480_FMwebp_QL65_.jpg",
    "price": "₹1,299",
    "originalPrice": "₹1,368",
    "rating": "4.2",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,299 delivery Wed, 2 Apr",
    "discount": "Save ₹69 (5%)",
    "stock": "In Stock",
    "colors": ["White", "Black", "Blue"],
    "specs": {
        "Brand": "Generic",
        "Fabric": "100% Cotton",
        "Fit": "Regular Fit",
        "Sleeve": "Half Sleeve",
        "Neck": "Round Neck",
        "Care": "Machine Wash"
    },
    "highlights": [
        "Soft & comfortable cotton fabric",
        "Breathable for daily wear",
        "Minimalist design",
        "Durable stitching",
        "Easy to maintain"
    ]
},
"55": {
    "title": "Symbol Premium Men's Wrinkle-Resistant Cotton Formal Shirt",
    "image": "https://m.media-amazon.com/images/I/61OZq-JkXEL._AC_UL480_FMwebp_QL65_.jpg",
    "price": "₹4,999",
    "originalPrice": "₹5,262",
    "rating": "4.5",
    "ratingCount": "1,585 ratings",
    "delivery": "₹4,999 delivery Wed, 2 Apr",
    "discount": "Save ₹263 (5%)",
    "stock": "In Stock",
    "colors": ["White", "Light Blue", "Gray"],
    "specs": {
        "Brand": "Symbol",
        "Fabric": "100% Cotton",
        "Fit": "Regular Fit",
        "Collar": "Classic Spread Collar",
        "Cuff": "Single Cuff",
        "Care": "Machine Wash"
    },
    "highlights": [
        "Wrinkle-resistant fabric",
        "Premium cotton for comfort",
        "Formal yet breathable",
        "Durable buttons & stitching",
        "Suitable for office wear"
    ]
},
"56": {
    "title": "Pinkmint Men's Long Sleeve Button Down White Shirt",
    "image": "https://m.media-amazon.com/images/I/61WswLTIRqL._SY741_.jpg",
    "price": "₹999",
    "originalPrice": "₹1,052",
    "rating": "4.0",
    "ratingCount": "1,585 ratings",
    "delivery": "₹999 delivery Wed, 2 Apr",
    "discount": "Save ₹53 (5%)",
    "stock": "Only 8 left",
    "colors": ["White", "Blue", "Black"],
    "specs": {
        "Brand": "Pinkmint",
        "Fabric": "Cotton-Polyester Blend",
        "Fit": "Slim Fit",
        "Sleeve": "Long Sleeve",
        "Collar": "Classic Point Collar",
        "Care": "Machine Wash"
    },
    "highlights": [
        "Versatile for casual & formal wear",
        "Breathable fabric",
        "Slim-fit design",
        "Sturdy buttons",
        "Easy ironing"
    ]
},
"57": {
    "title": "Symbol Men's Solid Cotton Printed Long Kurta",
    "image": "https://m.media-amazon.com/images/I/810Dpv2uORL._AC_UL480_FMwebp_QL65_.jpg",
    "price": "₹3,333",
    "originalPrice": "₹3,509",
    "rating": "4.4",
    "ratingCount": "1,585 ratings",
    "delivery": "₹3,333 delivery Wed, 2 Apr",
    "discount": "Save ₹176 (5%)",
    "stock": "In Stock",
    "colors": ["Blue", "Black", "Beige"],
    "specs": {
        "Brand": "Symbol",
        "Fabric": "100% Cotton",
        "Fit": "Regular Fit",
        "Length": "Knee-Length",
        "Neck": "Mandarin Collar",
        "Care": "Machine Wash"
    },
    "highlights": [
        "Traditional yet stylish",
        "Comfortable for all-day wear",
        "Breathable cotton fabric",
        "Ethnic prints & designs",
        "Suitable for festive occasions"
    ]
},
"58": {
    "title": "Professional Men's Blazer",
    "image": "https://m.media-amazon.com/images/I/315mLC5NehL.jpg",
    "price": "₹3,999",
    "originalPrice": "₹4,210",
    "rating": "4.6",
    "ratingCount": "1,585 ratings",
    "delivery": "₹3,999 delivery Wed, 2 Apr",
    "discount": "Save ₹211 (5%)",
    "stock": "Only 5 left",
    "colors": ["Black", "Navy Blue", "Charcoal Gray"],
    "specs": {
        "Brand": "Generic",
        "Fabric": "Polyester-Wool Blend",
        "Fit": "Slim Fit",
        "Lining": "Satin",
        "Pockets": "2 Front, 1 Inside",
        "Care": "Dry Clean Only"
    },
    "highlights": [
        "Premium fabric with stretch",
        "Tailored fit for a sharp look",
        "Notched lapel design",
        "Functional buttons",
        "Ideal for formal occasions"
    ]
},
"59": {
    "title": "DENIMHOLIC Men's Jeans",
    "image": "https://images-eu.ssl-images-amazon.com/images/I/51+bIkK-lsL._AC_SR185,210,0,C_BR3_.jpg",
    "price": "₹1,599",
    "originalPrice": "₹1,683",
    "rating": "4.1",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,599 delivery Wed, 2 Apr",
    "discount": "Save ₹84 (5%)",
    "stock": "In Stock",
    "colors": ["Dark Blue", "Black", "Light Blue"],
    "specs": {
        "Brand": "DENIMHOLIC",
        "Fabric": "98% Cotton, 2% Elastane",
        "Fit": "Slim Fit",
        "Closure": "Zip & Button",
        "Pockets": "5 Pockets",
        "Care": "Machine Wash"
    },
    "highlights": [
        "Stretchable denim for comfort",
        "Modern slim-fit design",
        "Durable stitching",
        "Versatile for casual wear",
        "Fade-resistant fabric"
    ]
},
"60": {
    "title": "Urbano Fashion Men's Jeans",
    "image": "https://images-eu.ssl-images-amazon.com/images/I/51nTLM3cEqL._AC_SR185,210,0,C_BR3_.jpg",
    "price": "₹1,699",
    "originalPrice": "₹1,788",
    "rating": "4.2",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,699 delivery Wed, 2 Apr",
    "discount": "Save ₹89 (5%)",
    "stock": "In Stock",
    "colors": ["Black", "Dark Blue", "Gray"],
    "specs": {
        "Brand": "Urbano Fashion",
        "Fabric": "Cotton-Spandex Blend",
        "Fit": "Slim Fit",
        "Closure": "Zip & Button",
        "Pockets": "5 Pockets",
        "Care": "Machine Wash"
    },
    "highlights": [
        "Stretchable fabric for comfort",
        "Modern slim-fit design",
        "Durable stitching",
        "Fade-resistant color",
        "Versatile for casual wear"
    ]
},
"61": {
    "title": "Best Silk Soft Printed Saree (Georgette)",
    "image": "https://images.meesho.com/images/products/286027106/hzjnp_400.webp",
    "price": "₹2,000",
    "originalPrice": "₹2,105",
    "rating": "4.4",
    "ratingCount": "1,585 ratings",
    "delivery": "₹40 delivery Wed, 2 Apr",
    "discount": "Save ₹105 (5%)",
    "stock": "In Stock",
    "colors": ["Red", "Blue", "Green"],
    "specs": {
        "Brand": "Generic",
        "Fabric": "Georgette",
        "Blouse Included": "No",
        "Work": "Printed",
        "Occasion": "Casual, Party",
        "Care": "Dry Clean Only"
    },
    "highlights": [
        "Soft & lightweight fabric",
        "Elegant printed design",
        "Comfortable drape",
        "Breathable for long wear",
        "Perfect for festive occasions"
    ]
},
"62": {
    "title": "Chitrarekha Drishya Sarees",
    "image": "https://images.meesho.com/images/products/509366181/7ha2z_400.webp",
    "price": "₹1,500",
    "originalPrice": "₹1,579",
    "rating": "4.3",
    "ratingCount": "379 ratings",
    "delivery": "₹40 delivery Wed, 2 Apr",
    "discount": "Save ₹79 (5%)",
    "stock": "Only 14 left",
    "colors": ["Maroon", "Purple", "Black"],
    "specs": {
        "Brand": "Chitrarekha",
        "Fabric": "Silk Blend",
        "Blouse Included": "No",
        "Work": "Embroidered",
        "Occasion": "Wedding, Festive",
        "Care": "Dry Clean Only"
    },
    "highlights": [
        "Rich embroidery work",
        "Premium silk fabric",
        "Elegant drape",
        "Festive wear",
        "Bright & vibrant colors"
    ]
},
"63": {
    "title": "BANDHANI SAREE",
    "image": "https://images.meesho.com/images/products/326810778/vbpzu_400.webp",
    "price": "₹1,799",
    "originalPrice": "₹1,894",
    "rating": "4.5",
    "ratingCount": "1,585 ratings",
    "delivery": "₹40 delivery Wed, 2 Apr",
    "discount": "Save ₹95 (5%)",
    "stock": "In Stock",
    "colors": ["Red", "Yellow", "Green"],
    "specs": {
        "Brand": "Generic",
        "Fabric": "Cotton-Silk",
        "Blouse Included": "No",
        "Work": "Bandhani (Tie & Dye)",
        "Occasion": "Traditional, Festive",
        "Care": "Hand Wash"
    },
    "highlights": [
        "Authentic Bandhani print",
        "Lightweight & comfortable",
        "Bright & vibrant colors",
        "Traditional craftsmanship",
        "Perfect for weddings & festivals"
    ]
},
"64": {
    "title": "Hathi Design Silk Saree",
    "image": "https://images.meesho.com/images/products/101971295/5jbb0_400.webp",
    "price": "₹1,000",
    "originalPrice": "₹1,053",
    "rating": "4.0",
    "ratingCount": "1,585 ratings",
    "delivery": "₹40 delivery Wed, 2 Apr",
    "discount": "Save ₹53 (5%)",
    "stock": "In Stock",
    "colors": ["Pink", "Blue", "Purple"],
    "specs": {
        "Brand": "Hathi Design",
        "Fabric": "Art Silk",
        "Blouse Included": "No",
        "Work": "Printed",
        "Occasion": "Casual, Daily Wear",
        "Care": "Machine Wash"
    },
    "highlights": [
        "Affordable & stylish",
        "Soft & smooth fabric",
        "Easy to drape",
        "Lightweight for daily wear",
        "Vibrant prints"
    ]
},
"65": {
    "title": "Print Daily Wear Georgette Saree",
    "image": "https://images.meesho.com/images/products/368255807/cz303_400.webp",
    "price": "₹1,499",
    "originalPrice": "₹1,578",
    "rating": "4.2",
    "ratingCount": "1,585 ratings",
    "delivery": "₹40 delivery Wed, 2 Apr",
    "discount": "Save ₹79 (5%)",
    "stock": "In Stock",
    "colors": ["Black", "Navy Blue", "Red"],
    "specs": {
        "Brand": "Generic",
        "Fabric": "Georgette",
        "Blouse Included": "No",
        "Work": "Printed",
        "Occasion": "Casual, Office Wear",
        "Care": "Hand Wash"
    },
    "highlights": [
        "Lightweight & flowy",
        "Elegant prints",
        "Wrinkle-resistant",
        "Breathable fabric",
        "Perfect for daily use"
    ]
},
"66": {
    "title": "Best Satin Silk Printed Daily Wear Saree",
    "image": "https://images.meesho.com/images/products/6908023/yprtp_400.webp",
    "price": "₹1,349",
    "originalPrice": "₹1,420",
    "rating": "4.1",
    "ratingCount": "1,585 ratings",
    "delivery": "₹40 delivery Wed, 2 Apr",
    "discount": "Save ₹71 (5%)",
    "stock": "In Stock",
    "colors": ["Peach", "Blue", "Green"],
    "specs": {
        "Brand": "Generic",
        "Fabric": "Satin Silk",
        "Blouse Included": "No",
        "Work": "Printed",
        "Occasion": "Casual, Party",
        "Care": "Dry Clean Only"
    },
    "highlights": [
        "Lustrous satin finish",
        "Soft & smooth texture",
        "Elegant drape",
        "Perfect for parties",
        "Wrinkle-free fabric"
    ]
},
"67": {
    "title": "Jivika Drishya Kurtis",
    "image": "https://images.meesho.com/images/products/152597956/klzgh_400.webp",
    "price": "₹1,459",
    "originalPrice": "₹1,536",
    "rating": "4.3",
    "ratingCount": "1,585 ratings",
    "delivery": "₹50 delivery Wed, 2 Apr",
    "discount": "Save ₹77 (5%)",
    "stock": "In Stock",
    "colors": ["Pink", "Yellow", "Black"],
    "specs": {
        "Brand": "Jivika",
        "Fabric": "Cotton Blend",
        "Fit": "Regular Fit",
        "Sleeve": "Full Sleeve",
        "Length": "Knee-Length",
        "Care": "Machine Wash"
    },
    "highlights": [
        "Comfortable cotton fabric",
        "Trendy printed design",
        "Breathable for daily wear",
        "Easy to pair with leggings",
        "Affordable & stylish"
    ]
},
"68": {
    "title": "New Fashion Western Dress",
    "image": "https://images.meesho.com/images/products/321750698/xyw98_400.webp",
    "price": "₹1,999",
    "originalPrice": "₹2,105",
    "rating": "4.0",
    "ratingCount": "1,585 ratings",
    "delivery": "₹50 delivery Wed, 2 Apr",
    "discount": "Save ₹106 (5%)",
    "stock": "In Stock",
    "colors": ["Black", "Red", "Blue"],
    "specs": {
        "Brand": "Generic",
        "Fabric": "Polyester Blend",
        "Fit": "Bodycon Fit",
        "Sleeve": "Sleeveless",
        "Length": "Mini Length",
        "Care": "Machine Wash"
    },
    "highlights": [
        "Trendy party wear",
        "Stretchable fabric",
        "Figure-hugging fit",
        "Perfect for clubbing",
        "Affordable fashion"
    ]
},
"69": {
    "title": "Bandhej Sarees",
    "image": "https://images.meesho.com/images/products/417539729/rdbtc_400.webp",
    "price": "₹1,799",
    "originalPrice": "₹1,894",
    "rating": "4.4",
    "ratingCount": "1,585 ratings",
    "delivery": "₹50 delivery Wed, 2 Apr",
    "discount": "Save ₹95 (5%)",
    "stock": "In Stock",
    "colors": ["Red", "Blue", "Green"],
    "specs": {
        "Brand": "Generic",
        "Fabric": "Silk-Cotton",
        "Blouse Included": "No",
        "Work": "Bandhani (Tie & Dye)",
        "Occasion": "Festive, Wedding",
        "Care": "Dry Clean Only"
    },
    "highlights": [
        "Traditional Bandhani work",
        "Bright & vibrant colors",
        "Lightweight & comfortable",
        "Perfect for weddings",
        "Handcrafted design"
    ]
},
"70": {
    "title": "Big Size White Embroidery Kurti",
    "image": "https://images.meesho.com/images/products/384916068/fsdct_400.webp",
    "price": "₹1,299",
    "originalPrice": "₹1,367",
    "rating": "4.2",
    "ratingCount": "1,585 ratings",
    "delivery": "₹50 delivery Wed, 2 Apr",
    "discount": "Save ₹68 (5%)",
    "stock": "In Stock",
    "colors": ["White", "Blue", "Pink"],
    "specs": {
        "Brand": "Generic",
        "Fabric": "Cotton Blend",
        "Fit": "Loose Fit (Plus Size)",
        "Sleeve": "Full Sleeve",
        "Embroidery": "Intricate Thread Work",
        "Care": "Machine Wash"
    },
    "highlights": [
        "Designed for plus-size comfort",
        "Elegant white embroidery",
        "Breathable cotton fabric",
        "Flowery neckline design",
        "Perfect for ethnic casual wear"
    ]
},
"71": {
    "title": "Fashionable Cotton Slub Digital Print Anarkali Kurti",
    "image": "https://images.meesho.com/images/products/359484015/j22ge_400.webp",
    "price": "₹1,199",
    "originalPrice": "₹1,262",
    "rating": "4.3",
    "ratingCount": "1,585 ratings",
    "delivery": "₹50 delivery Wed, 2 Apr",
    "discount": "Save ₹63 (5%)",
    "stock": "Only 8 left",
    "colors": ["Yellow", "Red", "Black"],
    "specs": {
        "Brand": "Generic",
        "Fabric": "Cotton Slub",
        "Fit": "Anarkali Style",
        "Sleeve": "Three-Quarter Sleeve",
        "Print": "Digital Floral",
        "Care": "Hand Wash"
    },
    "highlights": [
        "Flowy Anarkali silhouette",
        "Vibrant digital prints",
        "Comfortable slub cotton",
        "Fashionable round neck",
        "Great for festive occasions"
    ]
},
"72": {
    "title": "Jivika Drishya Kurtis (Pack of 2)",
    "image": "https://images.meesho.com/images/products/414651751/16xus_400.webp",
    "price": "₹1,599",
    "originalPrice": "₹1,683",
    "rating": "4.5",
    "ratingCount": "1,585 ratings",
    "delivery": "₹50 delivery Wed, 2 Apr",
    "discount": "Save ₹84 (5%)",
    "stock": "In Stock",
    "colors": ["Multicolor Pack", "Pastel Pack", "Dark Shades Pack"],
    "specs": {
        "Brand": "Jivika",
        "Fabric": "Cotton Blend",
        "Fit": "Regular Fit",
        "Sleeve": "Half Sleeve",
        "Pack": "2 Kurtis",
        "Care": "Machine Wash"
    },
    "highlights": [
        "Value pack of 2 kurtis",
        "Soft & breathable fabric",
        "Printed designs",
        "Versatile for daily wear",
        "Budget-friendly combo"
    ]
},
"73": {
    "title": "Wood Art City Rosewood 2-Seater Settee Sofa Diwan",
    "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRDAwRTHdbuw2gufk-4GdUTEPuJVR_9mb-_HY4-GsXpLoypncR20eqBTNi2kSJMDg7Q4kKYeoGivQQcRIOPNVvt_7vY0Hh9Ea_Kpy4vb70",
    "price": "₹1,97,500",
    "originalPrice": "₹2,07,895",
    "rating": "4.3",
    "ratingCount": "1,585 ratings",
    "delivery": "₹170.62 delivery Wed, 2 Apr",
    "discount": "Save ₹10,395 (5%)",
    "stock": "In Stock",
    "colors": ["Dark Grey", "Walnut Brown", "Black"],
    "specs": {
        "Brand": "Wood Art City",
        "Material": "Rosewood Frame + Fabric Upholstery",
        "Seating Capacity": "2-Seater",
        "Style": "Contemporary",
        "Assembly": "Required (Tools Included)",
        "Weight Capacity": "250kg"
    },
    "highlights": [
        "Handcrafted rosewood frame",
        "High-density foam cushioning",
        "Reversible back cushions",
        "Anti-slip wooden legs",
        "Perfect for compact spaces"
    ]
},
"74": {
    "title": "L Shape Sofa Set | Modern Sheesham Wood Design",
    "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQD4Dq4QOEy_suvrq80-6tnDkOFMcRI5rH_zIoc6LIBs66yg-b83va8YP74EDO8V2WGN1VEjimUePOzP_5-Fq6Mn-aVuSAKZKByuNhvIFA",
    "price": "₹9,59,891",
    "originalPrice": "₹10,10,412",
    "rating": "4.5",
    "ratingCount": "379 ratings",
    "delivery": "₹1,700.16 delivery Wed, 2 Apr",
    "discount": "Save ₹50,521 (5%)",
    "stock": "Only 14 left",
    "colors": ["Honey Finish", "Dark Walnut"],
    "specs": {
        "Brand": "Custom Crafted",
        "Material": "Solid Sheesham Wood + Premium Fabric",
        "Configuration": "3+2+1 L-Shape",
        "Included": "Sofa + Chaise Lounge + Ottoman",
        "Weight": "280kg",
        "Warranty": "5 Years"
    },
    "highlights": [
        "100% solid sheesham wood",
        "Modular L-shaped design",
        "Hand-carved detailing",
        "Removable washable covers",
        "Includes matching throw pillows"
    ]
},
"75": {
    "title": "Modern Wooden Living Room Set (3-Piece)",
    "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTXd5n1clvB6afZHET0IWrtj4w6ezXOTy9aPMuz7hxYIdGbRVqBjdhCEddXNkSDJPjM5y_SkgGp3KKi29xPho6q5Qeeqi_SC2FmJluRqvOI",
    "price": "₹9,94,011",
    "originalPrice": "₹10,46,327",
    "rating": "4.6",
    "ratingCount": "1,585 ratings",
    "delivery": "₹19,000.62 delivery",
    "discount": "Save ₹52,316 (5%)",
    "stock": "In Stock",
    "colors": ["Brown", "Espresso", "Black"],
    "specs": {
        "Brand": "Luxury Living",
        "Set Includes": "Sofa + Armchairs (2) + Coffee Table",
        "Material": "Engineered Wood + Leather",
        "Dimensions": "Sofa: 84\"W x 36\"D",
        "Assembly": "Professional Installation Included",
        "Warranty": "Lifetime Frame Warranty"
    },
    "highlights": [
        "Complete living room solution",
        "Italian leather upholstery",
        "Hidden storage compartments",
        "Adjustable headrests",
        "Built-in USB charging ports"
    ]
},
"76": {
    "title": "Wakefit Coffee Table (Engineered Wood)",
    "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRepb7kBCnZ21HukFYJGBPa-4Nj-UMGa6s183_IHsWY2WIORJt-qxQpvxIdmRLZwjT49m2nCP3fwD3w6_rI7yN1nrJgfUVKsDoMRMfingc",
    "price": "₹86,272",
    "originalPrice": "₹90,813",
    "rating": "4.4",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,800.62 delivery",
    "discount": "Save ₹4,541 (5%)",
    "stock": "In Stock",
    "colors": ["Natural Finish", "Walnut", "White"],
    "specs": {
        "Brand": "Wakefit",
        "Material": "Engineered Wood (MDF)",
        "Dimensions": "48\"L x 24\"W x 18\"H",
        "Weight Capacity": "50kg",
        "Assembly": "30-min DIY Assembly",
        "Features": "Scratch-Resistant Surface"
    },
    "highlights": [
        "Water-resistant laminate finish",
        "Rounded safety corners",
        "Integrated lower shelf",
        "Tool-free assembly",
        "ECO-FRIENDLY certified"
    ]
},
"77": {
    "title": "CASPIAN Engineered Wood Dressing Table",
    "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ6aTnWV0Lb0GZk6sEwuHYENMhNVPtk22kFqnd8aCgcl1Dr4KGqNmMuaKPPJd4D0gJMmV6bTFCLU13VN1dTXjXAAyCvjbPxYzaKttYziDAoLz9zZhy3_PR7",
    "price": "₹77,104",
    "originalPrice": "₹81,162",
    "rating": "4.2",
    "ratingCount": "1,585 ratings",
    "delivery": "₹17.62 delivery",
    "discount": "Save ₹4,058 (5%)",
    "stock": "In Stock",
    "colors": ["Rainforest Dark", "White", "Oak Finish"],
    "specs": {
        "Brand": "CASPIAN",
        "Material": "Engineered Wood",
        "Dimensions": "32\"W x 16\"D x 48\"H",
        "Included": "Mirror + 4 Drawers + Stool",
        "Assembly": "Required (Tools Included)",
        "Weight Capacity": "25kg"
    },
    "highlights": [
        "Built-in jewelry organizers",
        "LED mirror with touch control",
        "Soft-closing drawers",
        "Matching stool included",
        "Modern minimalist design"
    ]
},
"78": {
    "title": "FireBees Multi-Functional Bedside Table",
    "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRcfu3qMuJmz7EwlLDM7ojoB8n8gqmCl59Vc2F5xYH6XgcdPPjeBiajjrWfHMReUKI46fnO8WkmGWZXNKclujc0HMHbVBy9BZGk0V9elbI",
    "price": "₹19,887",
    "originalPrice": "₹20,934",
    "rating": "4.1",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,900.62 delivery",
    "discount": "Save ₹1,047 (5%)",
    "stock": "In Stock",
    "colors": ["Walnut", "White", "Black"],
    "specs": {
        "Brand": "FireBees",
        "Material": "Solid Mango Wood",
        "Dimensions": "18\"W x 12\"D x 24\"H",
        "Multi-Use": "Side Table/Stool/Plant Stand",
        "Assembly": "Pre-Assembled",
        "Weight Capacity": "80kg"
    },
    "highlights": [
        "Hand-carved wooden legs",
        "Reversible tabletop (smooth/textured)",
        "Compact space-saving design",
        "Natural wood grain finish",
        "6-month warranty"
    ]
},
"79": {
    "title": "PIPERCRAFTS Sheesham Wood Chest of Drawers",
    "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQP6NFFfauNccUy_iQfyvJfPW3nfB3sIEd0Rjqrae65P331OVYCOCIG0Ffir04ZXUJjneFEUmTXDvGsE0Mz8Tw6qKIuFDP5dZx_Gq07_W9x",
    "price": "₹98,619",
    "originalPrice": "₹1,03,810",
    "rating": "4.5",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,700.62 delivery",
    "discount": "Save ₹5,191 (5%)",
    "stock": "In Stock",
    "colors": ["Honey Finish", "Dark Walnut", "Antique"],
    "specs": {
        "Brand": "PIPERCRAFTS",
        "Material": "Solid Sheesham Wood",
        "Dimensions": "48\"W x 18\"D x 32\"H",
        "Drawers": "6 (Soft-Close Mechanism)",
        "Finish": "Hand-Polished",
        "Warranty": "10 Years"
    },
    "highlights": [
        "Traditional joinery (no nails)",
        "Hidden locking mechanism",
        "Dovetail drawer construction",
        "Natural wood grain patterns",
        "Hand-forged iron handles"
    ]
},
"80": {
    "title": "OXTEM U-Shape Sectional 10-Seater Sofa",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTjkTZOu-sB9CUpYPLNcm9gVLH4CAdbAzc_Om3TjpUaDJNoVTtsufdD_egf8aeEqazkPerb17_lehEtFpt9Ak67kEhbiuA6j5JwIbLKnZ0",
    "price": "₹10,00,000",
    "originalPrice": "₹10,52,632",
    "rating": "4.7",
    "ratingCount": "1,585 ratings",
    "delivery": "₹10,000.62 delivery",
    "discount": "Save ₹52,632 (5%)",
    "stock": "In Stock",
    "colors": ["Charcoal Grey", "Beige", "Navy Blue"],
    "specs": {
        "Brand": "OXTEM",
        "Material": "High-Resilience Foam + Linen Fabric",
        "Configuration": "Modular U-Shape (14-Seat Capacity)",
        "Included": "Corner Units (4) + Armless Chairs (6)",
        "Weight": "650kg",
        "Special Feature": "Convertible Sleeper Option"
    },
    "highlights": [
        "Theater-style seating",
        "Removable/washable covers",
        "Built-in cup holders",
        "Reinforced hardwood frame",
        "Commercial-grade durability"
    ]
},
"81": {
    "title": "Whitebeard Sheesham Wood 6-Seater Sofa Set",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTMoNeHmHeNolp-aaT_8L196PGXmIyjCgbkCGSDbgtUHLhhHBdqtd8cGNl0BZnDmJ5WXnwt5XOrHJidTcJa4oWlFFRDtyZAZxjpqy788EA",
    "price": "₹99,037",
    "originalPrice": "₹1,04,250",
    "rating": "4.4",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,300.62 delivery",
    "discount": "Save ₹5,213 (5%)",
    "stock": "In Stock",
    "colors": ["Natural Sheesham", "Dark Stain", "Two-Tone"],
    "specs": {
        "Brand": "Whitebeard",
        "Material": "Solid Sheesham Wood + Cotton Blend",
        "Set Includes": "3+2+1 Configuration",
        "Cushioning": "High-Density Foam + Feather Blend",
        "Assembly": "Professional Installation Recommended",
        "Warranty": "15 Years on Frame"
    },
    "highlights": [
        "Traditional mortise-tenon joints",
        "Reversible seat cushions",
        "Hand-turned wooden legs",
        "Includes embroidered throw pillows",
        "Anti-fungal fabric treatment"
    ]
},
"82": {
    "title": "FURNEASER Modern Centre Table with Storage",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRihuQbudfWOmqVye2FTMST7LJ424pj-7zlpRfqrwrUnEVwMZw_pC5totfr_xeDTUusMC5cP4u3HX6QhjeQoCTd1wyRB62Kra0VMeW576wD",
    "price": "₹2,09,000",
    "originalPrice": "₹2,20,000",
    "rating": "4.3",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,000.62 delivery",
    "discount": "Save ₹11,000 (5%)",
    "stock": "In Stock",
    "colors": ["White", "Black", "Oak Finish"],
    "specs": {
        "Brand": "FURNEASER",
        "Material": "Engineered Wood (E1 Grade)",
        "Dimensions": "48\"L x 24\"W x 16\"H",
        "Storage": "Hidden Compartment + 2 Drawers",
        "Weight Capacity": "100kg",
        "Special Feature": "Lift-Top Mechanism"
    },
    "highlights": [
        "Convertible to dining height",
        "Cable management system",
        "Child-safe rounded edges",
        "Scratch-resistant matte finish",
        "Modular companion pieces available"
    ]
},
"83": {
    "title": "Sheesham Wood Sofa Set (3+2+1 Configuration)",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSczZG2xILpWg0iXWdAG9BTkH-GRML9KibtXz9-9uOXEDk4CR12Krx31hh6SV1YBqL8V5dO2xBUMDsoktOWn9O9aR7FoWk25r1PjHhDANqW",
    "price": "₹93,500",
    "originalPrice": "₹98,421",
    "rating": "4.6",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,900.62 delivery",
    "discount": "Save ₹4,921 (5%)",
    "stock": "In Stock",
    "colors": ["Natural Wood", "Dark Polish", "Two-Tone"],
    "specs": {
        "Brand": "Artisan Living",
        "Material": "Solid Sheesham Wood + Premium Fabric",
        "Configuration": "3-Seater + 2-Seater + 1-Seater",
        "Cushioning": "Pocket Spring + Memory Foam",
        "Assembly": "Partial Assembly Required",
        "Warranty": "10 Years Frame Warranty"
    },
    "highlights": [
        "Hand-carved floral motifs",
        "Removable machine-washable covers",
        "Reinforced corner blocks",
        "Kiln-dried wood (anti-warping)",
        "Includes matching center table"
    ]
},
"84": {
    "title": "NISHA FURNITURE Solid Wood Center Table with Stools",
    "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSqXhDbXMu-zClpYLOknt5424CqLMRPImMUP5vF2Yzs0sD3vGRDZ5MI4IJOFcDSh-B-nWmOFtOyR_zQ-VnvqxALxnNhxbT3jhksuZBt-J6y",
    "price": "₹77,079",
    "originalPrice": "₹81,136",
    "rating": "4.2",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,600.62 delivery",
    "discount": "Save ₹4,057 (5%)",
    "stock": "In Stock",
    "colors": ["Natural Teak", "Mahogany", "Ebony"],
    "specs": {
        "Brand": "NISHA FURNITURE",
        "Material": "Solid Wood (Mango/Sheesham)",
        "Set Includes": "Table + 4 Stools",
        "Table Dimensions": "36\" Diameter",
        "Stool Dimensions": "12\"x12\" Seat",
        "Weight Capacity": "Table: 150kg, Stools: 100kg Each"
    },
    "highlights": [
        "Nested stool storage design",
        "Hand-rubbed oil finish",
        "Reversible tabletop (smooth/rustic)",
        "Anti-tip construction",
        "Matching furniture collection available"
    ]
},
"85": {
    "title": "Grand Gaming Days offers on Bestselling Gaming Laptops",
    "image": "https://m.media-amazon.com/images/I/41Diz41FkhL._AC_SY200_.jpg",
    "price": "₹1,399",
    "originalPrice": "₹1,473",
    "rating": "4.3",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,399 delivery Wed, 2 Apr",
    "discount": "Save ₹74 (5%)",
    "stock": "In Stock",
    "brands": ["ASUS", "HP", "Lenovo"],
    "specs": {
        "Processor": "Intel i7/i9 or Ryzen 7/9",
        "Graphics": "RTX 3060/3070/3080",
        "RAM": "16GB-32GB DDR5",
        "Storage": "1TB SSD",
        "Display": "144Hz-300Hz FHD/QHD",
        "Warranty": "2 Years"
    },
    "highlights": [
        "Exclusive gaming day discounts",
        "High-refresh rate displays",
        "RGB backlit keyboards",
        "Advanced cooling systems",
        "VR-ready configurations"
    ]
},
"86": {
    "title": "High Performance Handpicked Desktop Computers from HP",
    "image": "https://m.media-amazon.com/images/I/41DjFnGQ1FL._AC_SY200_.jpg",
    "price": "₹3,799",
    "originalPrice": "₹3,999",
    "rating": "4.5",
    "ratingCount": "379 ratings",
    "delivery": "₹3,799 delivery Wed, 2 Apr",
    "discount": "Save ₹200 (5%)",
    "stock": "Only 14 left",
    "brands": ["HP Pavilion", "HP Omen"],
    "specs": {
        "Processor": "Intel Core i5/i7",
        "RAM": "8GB-16GB DDR4",
        "Storage": "512GB SSD + 1TB HDD",
        "Graphics": "NVIDIA GTX 1660",
        "OS": "Windows 11",
        "Warranty": "3 Years"
    },
    "highlights": [
        "HP certified refurbished",
        "Professional-grade performance",
        "Quiet operation technology",
        "Multiple USB 3.0 ports",
        "Upgrade-friendly chassis"
    ]
},
"87": {
    "title": "Best Prices on boAt Headphones, Soundbars",
    "image": "https://m.media-amazon.com/images/I/31aNgbvYJKL._AC_SY200_.jpg",
    "price": "₹3,999",
    "originalPrice": "₹4,210",
    "rating": "4.2",
    "ratingCount": "1,585 ratings",
    "delivery": "₹3,999 delivery Wed, 2 Apr",
    "discount": "Save ₹211 (5%)",
    "stock": "In Stock",
    "models": ["boAt Rockerz", "boAt Aavante"],
    "specs": {
        "Type": "Wireless/Wired",
        "Battery Life": "Up to 20hrs",
        "Connectivity": "Bluetooth 5.0",
        "Features": "ANC, IPX5",
        "Warranty": "1 Year"
    },
    "highlights": [
        "Signature boAt sound",
        "ASAP charge technology",
        "Environmental noise cancellation",
        "Tangle-free cables",
        "Bass-heavy audio profile"
    ]
},
"88": {
    "title": "Jaw dropping deals on headsets",
    "image": "https://m.media-amazon.com/images/I/31G1NouVxaL._AC_SY200_.jpg",
    "price": "₹2,999",
    "originalPrice": "₹3,157",
    "rating": "4.1",
    "ratingCount": "1,585 ratings",
    "delivery": "₹2,999 delivery Wed, 2 Apr",
    "discount": "Save ₹158 (5%)",
    "stock": "In Stock",
    "brands": ["Logitech", "HyperX", "Razer"],
    "specs": {
        "Type": "Gaming/Professional",
        "Microphone": "Noise-cancelling",
        "Connectivity": "USB/Wireless",
        "Compatibility": "PC/PS/Xbox",
        "Warranty": "2 Years"
    },
    "highlights": [
        "7.1 surround sound",
        "Memory foam ear cushions",
        "Retractable boom mics",
        "RGB lighting options",
        "Multi-platform support"
    ]
},
"89": {
    "title": "Cooking Essentials",
    "image": "https://m.media-amazon.com/images/I/31VfkewLnlL._AC_SY200_.jpg",
    "price": "₹1,999",
    "originalPrice": "₹2,105",
    "rating": "4.0",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,999 delivery Wed, 2 Apr",
    "discount": "Save ₹106 (5%)",
    "stock": "In Stock",
    "categories": ["Cookware", "Cutlery", "Small Appliances"],
    "specs": {
        "Material": "Stainless Steel/Ceramic",
        "Includes": "Multiple pieces",
        "Heat Source": "Gas/Induction",
        "Warranty": "1-5 Years"
    },
    "highlights": [
        "Non-stick coatings",
        "Oven-safe designs",
        "Ergonomic handles",
        "Easy-clean surfaces",
        "Stackable storage"
    ]
},
"90": {
    "title": "TOP Deals on PUMA & Skechers Footwear",
    "image": "https://m.media-amazon.com/images/I/91kKqnkv9jL._AC_SY200_.jpg",
    "price": "₹1,299",
    "originalPrice": "₹1,368",
    "rating": "4.4",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,299 delivery Wed, 2 Apr",
    "discount": "Save ₹69 (5%)",
    "stock": "In Stock",
    "brands": ["PUMA", "Skechers"],
    "specs": {
        "Type": "Sneakers/Casual",
        "Material": "Mesh/Leather",
        "Sole": "Rubber/EVA",
        "Closure": "Lace-up/Slip-on",
        "Warranty": "6 Months"
    },
    "highlights": [
        "Breathable uppers",
        "Memory foam insoles",
        "Lightweight designs",
        "Arch support",
        "Slip-resistant soles"
    ]
},
"91": {
    "title": "Handpicked Intel Powered Laptops",
    "image": "https://m.media-amazon.com/images/I/41fsUIG2fwL._AC_SY200_.jpg",
    "price": "₹4,999",
    "originalPrice": "₹5,262",
    "rating": "4.5",
    "ratingCount": "1,585 ratings",
    "delivery": "₹4,999 delivery Wed, 2 Apr",
    "discount": "Save ₹263 (5%)",
    "stock": "In Stock",
    "processors": ["Intel Core i5", "i7", "i9"],
    "specs": {
        "RAM": "8GB-16GB",
        "Storage": "256GB-1TB SSD",
        "Display": "14-16\" FHD/4K",
        "Graphics": "Intel Iris Xe",
        "Warranty": "2 Years"
    },
    "highlights": [
        "Thin and light designs",
        "Military-grade durability",
        "Backlit keyboards",
        "Fast charging",
        "Windows 11 pre-installed"
    ]
},
"92": {
    "title": "Powerbank from Mi, Ambrane, URBN",
    "image": "https://m.media-amazon.com/images/I/317lhW5iHVL._AC_SY200_.jpg",
    "price": "₹999",
    "originalPrice": "₹1,052",
    "rating": "4.2",
    "ratingCount": "1,585 ratings",
    "delivery": "₹999 delivery Wed, 2 Apr",
    "discount": "Save ₹53 (5%)",
    "stock": "In Stock",
    "brands": ["Mi", "Ambrane", "URBN"],
    "specs": {
        "Capacity": "10000-20000mAh",
        "Ports": "2-3 USB",
        "Input": "Type-C/Micro USB",
        "Fast Charge": "18W-30W",
        "Warranty": "1 Year"
    },
    "highlights": [
        "Dual-way fast charging",
        "LED power indicators",
        "Sleek portable designs",
        "Multiple device charging",
        "Overcharge protection"
    ]
},
"93": {
    "title": "Top deals on Truke, Govo",
    "image": "https://m.media-amazon.com/images/I/41yxd6A+ZAL._AC_SY200_.jpg",
    "price": "₹3,333",
    "originalPrice": "₹3,509",
    "rating": "4.1",
    "ratingCount": "1,585 ratings",
    "delivery": "₹3,333 delivery Wed, 2 Apr",
    "discount": "Save ₹176 (5%)",
    "stock": "In Stock",
    "brands": ["Truke", "Govo"],
    "specs": {
        "Type": "TWS Earbuds",
        "Battery Life": "20-30hrs",
        "Bluetooth": "5.0-5.2",
        "Features": "ANC, ENC",
        "Warranty": "1 Year"
    },
    "highlights": [
        "Low latency gaming mode",
        "IPX5 water resistance",
        "Touch controls",
        "Deep bass sound",
        "Compact charging cases"
    ]
},
"94": {
    "title": "Amazing deals on pTron, Jabra, Portronics",
    "image": "https://m.media-amazon.com/images/I/41wcMkODJLL._AC_SY200_.jpg",
    "price": "₹3,999",
    "originalPrice": "₹4,210",
    "rating": "4.3",
    "ratingCount": "1,585 ratings",
    "delivery": "₹3,999 delivery Wed, 2 Apr",
    "discount": "Save ₹211 (5%)",
    "stock": "In Stock",
    "brands": ["pTron", "Jabra", "Portronics"],
    "specs": {
        "Category": "Earphones/Bluetooth Speakers",
        "Connectivity": "Wireless/Wired",
        "Battery": "10-20hrs playback",
        "Features": "HD Sound, Hands-free",
        "Warranty": "1 Year"
    },
    "highlights": [
        "Premium audio quality",
        "Comfortable ergonomic fit",
        "Voice assistant support",
        "Multi-point connectivity",
        "Sweat-resistant designs"
    ]
},
"95": {
    "title": "Levi's, Allen Solly, ANNI DESIGNER, Janasya & more",
    "image": "https://m.media-amazon.com/images/I/61QQtY6qtHL._AC_SY200_.jpg",
    "price": "₹1,599",
    "originalPrice": "₹1,683",
    "rating": "4.4",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,599 delivery Wed, 2 Apr",
    "discount": "Save ₹84 (5%)",
    "stock": "In Stock",
    "brands": ["Levi's", "Allen Solly", "ANNI DESIGNER"],
    "specs": {
        "Category": "Apparel/Accessories",
        "Material": "Cotton/Denim/Blends",
        "Sizes": "XS-XXL",
        "Care": "Machine Wash",
        "Return Policy": "15 Days"
    },
    "highlights": [
        "Premium fabric quality",
        "Trendy designs",
        "Comfortable fits",
        "Durable stitching",
        "Brand authenticity"
    ]
},
"96": {
    "title": "Never before deals on HP printers",
    "image": "https://m.media-amazon.com/images/I/21wNUazPKRL._AC_SY200_.jpg",
    "price": "₹1,699",
    "originalPrice": "₹1,789",
    "rating": "4.2",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,699 delivery Wed, 2 Apr",
    "discount": "Save ₹90 (5%)",
    "stock": "In Stock",
    "models": ["HP DeskJet", "HP LaserJet"],
    "specs": {
        "Type": "Inkjet/Laser",
        "Functions": "Print/Scan/Copy",
        "Connectivity": "Wi-Fi/USB",
        "Speed": "15-30ppm",
        "Warranty": "1 Year"
    },
    "highlights": [
        "Instant Ink ready",
        "Mobile printing support",
        "Compact designs",
        "High-yield cartridge options",
        "Energy efficient"
    ]
},
"97": {
    "title": "Vivo Y75 - 18W fast charge, FHD plus display",
    "image": "https://m.media-amazon.com/images/I/41bFnhrsyOL._AC_SY200_.jpg",
    "price": "₹1,699",
    "originalPrice": "₹1,789",
    "rating": "4.3",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,699 delivery Wed, 2 Apr",
    "discount": "Save ₹90 (5%)",
    "stock": "In Stock",
    "specs": {
        "Display": "6.58\" FHD+",
        "Processor": "MediaTek Dimensity 700",
        "RAM/Storage": "8GB/128GB",
        "Camera": "50MP Triple Camera",
        "Battery": "5000mAh"
    },
    "highlights": [
        "18W fast charging",
        "Ultra-slim 7.79mm design",
        "Multi-Turbo 5.0 technology",
        "Extended RAM technology",
        "FunTouch OS 12"
    ]
},
"98": {
    "title": "Nokia 5710 - newly launched 4G feature phone",
    "image": "https://m.media-amazon.com/images/I/41wyFlObIrL._AC_SY200_.jpg",
    "price": "₹1,699",
    "originalPrice": "₹1,789",
    "rating": "4.0",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,699 delivery Wed, 2 Apr",
    "discount": "Save ₹90 (5%)",
    "stock": "In Stock",
    "specs": {
        "Display": "2.4\" QVGA",
        "Processor": "Unisoc T107",
        "Storage": "128MB + 48MB RAM",
        "Camera": "0.3MP VGA",
        "Battery": "1450mAh"
    },
    "highlights": [
        "Built-in wireless earbuds",
        "4G VoLTE support",
        "Classic Nokia design",
        "MP3 player",
        "30-day standby time"
    ]
},
"99": {
    "title": "Exciting deals on Mivi, Wecool, Wings",
    "image": "https://m.media-amazon.com/images/I/31aTPRvXiSL._AC_SY200_.jpg",
    "price": "₹1,699",
    "originalPrice": "₹1,789",
    "rating": "4.1",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,699 delivery Wed, 2 Apr",
    "discount": "Save ₹90 (5%)",
    "stock": "In Stock",
    "brands": ["Mivi", "Wecool", "Wings"],
    "specs": {
        "Category": "Audio Accessories",
        "Type": "Earphones/Speakers",
        "Connectivity": "Wireless/Wired",
        "Features": "Bass Boost, Hands-free",
        "Warranty": "1 Year"
    },
    "highlights": [
        "Made in India products",
        "Long battery life",
        "Premium sound quality",
        "Sweat-proof designs",
        "Comfortable fit"
    ]
},
"100": {
    "title": "Vacuum Cleaners from Top Brands",
    "image": "https://m.media-amazon.com/images/I/31Zq-alRH9L._AC_SY200_.jpg",
    "price": "₹1,699",
    "originalPrice": "₹1,789",
    "rating": "4.2",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,699 delivery Wed, 2 Apr",
    "discount": "Save ₹90 (5%)",
    "stock": "In Stock",
    "brands": ["Eureka Forbes", "Kent", "AGARO"],
    "specs": {
        "Type": "Handheld/Upright",
        "Power": "100-1000W",
        "Dust Capacity": "0.5-2L",
        "Features": "HEPA Filter, Wet/Dry",
        "Warranty": "2 Years"
    },
    "highlights": [
        "Bagless technology",
        "Multi-surface cleaning",
        "Lightweight designs",
        "Washable filters",
        "Long power cords"
    ]
},
"101": {
    "title": "Grand Gaming Days Offers on Accessories and Storage Devices",
    "image": "https://m.media-amazon.com/images/I/416x-scGWgL._AC_SY200_.jpg",
    "price": "₹1,699",
    "originalPrice": "₹1,789",
    "rating": "4.4",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,699 delivery Wed, 2 Apr",
    "discount": "Save ₹90 (5%)",
    "stock": "In Stock",
    "categories": ["Gaming Mice", "SSDs", "Controllers"],
    "specs": {
        "Type": "Peripherals/Storage",
        "Compatibility": "PC/Console",
        "Capacity": "256GB-2TB (SSD)",
        "Features": "RGB, Programmable",
        "Warranty": "3-5 Years"
    },
    "highlights": [
        "High-speed NVMe SSDs",
        "Mechanical keyboards",
        "Precision gaming mice",
        "Shock-resistant storage",
        "Customizable lighting"
    ]
},
"102": {
    "title": "adidas & campus Footwear",
    "image": "https://m.media-amazon.com/images/I/31EXkIBVKUL._AC_SY200_.jpg",
    "price": "₹1,699",
    "originalPrice": "₹1,789",
    "rating": "4.3",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,699 delivery Wed, 2 Apr",
    "discount": "Save ₹90 (5%)",
    "stock": "In Stock",
    "brands": ["adidas", "Campus"],
    "specs": {
        "Type": "Sports/Casual",
        "Material": "Mesh/Synthetic",
        "Sole": "Rubber/EVA",
        "Closure": "Lace-up",
        "Warranty": "6 Months"
    },
    "highlights": [
        "Breathable uppers",
        "Cushioned footbeds",
        "Durable outsoles",
        "Trendy colorways",
        "All-day comfort"
    ]
},


    "103": {
        title: "Apple AirPods Max with Active Noise Cancellation (ANC) – Space Grey",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRQgILCXWetuT79ToILn_mFqCBsTq-Sla1dwFjZYZUfVwzZJ86uivsJU1DylzPFWrKp2lddOBrCTrZ-mNeqC-0UrxA2QDMCzUWIcKl62AyFGTzgvlAeZKT3",
        price: "₹97,500",
        originalPrice: "₹99,900",
        rating: "4.8",
        ratingCount: "1,585 ratings",
        delivery: "₹170.62 delivery Wed, 2 Apr",
        discount: "Save ₹2,400 (5%)",
        stock: "In Stock",
        colors: ["#3a3a3c", "#f5f5f7", "#a3c1d3"],
        specs: {
            "Brand": "Apple",
            "Model": "AirPods Max",
            "Connectivity": "Bluetooth 5.0",
            "ANC": "Yes (Active Noise Cancellation)",
            "Battery": "Up to 20 hours (ANC on)",
            "Chip": "Apple H1 (2 chips)",
            "Audio": "Adaptive EQ + Spatial Audio",
            "Weight": "385g",
            "Case": "Smart Case (Low-power mode)",
            "Compatibility": "iOS/macOS/Android"
        },
        highlights: [
            "Industry-leading Active Noise Cancellation",
            "High-fidelity audio with Apple-designed dynamic driver",
            "Digital Crown for volume and playback control",
            "Spatial audio with dynamic head tracking",
            "Breathable knit mesh canopy headband"
        ]
    },
    "104": {
        title: "Apple Watch Ultra 2nd Generation",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTrTT7xXOEqKTmowjsN5KQpQQDmRMKQ7SDwMHHbaj4GVibh29_9u3E6ceDfwtiL18h4RTEG7FC3lJXpIdK_nUOmWsg4ydyo5lYZvX7cmA0FH0maUceeqmYa",
        price: "₹59,891.18",
        rating: "4.7",
        ratingCount: "379 ratings",
        delivery: "₹700.16 delivery Wed, 2 Apr",
        stock: "Only 14 left in stock",
        colors: ["#3a3a3c", "#f5f5f7"],
        specs: {
            "Brand": "Apple",
            "Display": "49mm LTPO OLED (2000 nits)",
            "Chip": "Apple S8 SiP",
            "Battery": "36 hours (normal use)",
            "Water Resistance": "WR100 + EN13319",
            "Materials": "Titanium case + Sapphire crystal",
            "Sensors": "ECG, Blood Oxygen, Temperature",
            "GPS": "Dual-frequency",
            "Special Features": "Action Button, Depth Gauge"
        },
        highlights: [
            "Rugged titanium design for extreme sports",
            "Precision Dual-frequency GPS",
            "86dB siren for emergencies",
            "Dive-ready with Oceanic+ app",
            "Always-on Retina display (2000 nits)"
        ]
    },
    "105": {
        title: "Dell MS3320W Mobile Wireless Mouse",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRQxvFG2YG_czmD7ga9wRB6piqb6YBvy3AQyxWYYvs_6eQA0vE5UrlfvR8ouOMM8Ap_qzlAe7qWWukVKM7LO6KKfZGRxmVXnSRFhf9x3d7uv2csuPKKn2SJ",
        price: "₹1,911.18",
        originalPrice: "₹2,199",
        rating: "4.3",
        ratingCount: "1,585 ratings",
        delivery: "₹190.62 delivery Wed, 2 Apr",
        discount: "Save ₹287.82 (13%)",
        stock: "In Stock",
        colors: ["#000000", "#3a3a3c", "#ffffff"],
        specs: {
            "Brand": "Dell",
            "Connectivity": "2.4GHz Wireless + Bluetooth",
            "DPI": "4000 (Adjustable)",
            "Battery": "12 months (AA battery)",
            "Buttons": "6 programmable",
            "Scroll Wheel": "Tilt wheel + Hyperfast scrolling",
            "Compatibility": "Windows/macOS/Chrome OS"
        },
        highlights: [
            "Dual connectivity (USB receiver + Bluetooth)",
            "Quiet-click technology",
            "Compact travel-friendly design",
            "12-month battery life",
            "Soft rubber side grips"
        ]
    },
    "106": {
        title: "Zebronics NTC2000 Laptop Cooling Pad",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR6UbdWstAtBL9CAhJu7iB1oRNjgXo9-5jNIiOmy5_fdytdcQrmdRYqfPd4tH11SUJicR3bN3pNMXb6ISajYkL_M6c6f4Wj52CTew8Ad78ABwMSdskkIOSm",
        price: "₹6,271.97",
        originalPrice: "₹6,999",
        rating: "4.2",
        ratingCount: "1,585 ratings",
        delivery: "₹180.62 delivery Wed, 2 Apr",
        discount: "Save ₹727.03 (10%)",
        stock: "In Stock",
        colors: ["#000000", "#3a3a3c"],
        specs: {
            "Brand": "Zebronics",
            "Fans": "4x 120mm RGB fans",
            "Speed Control": "3-level adjustable (1000-2000 RPM)",
            "Material": "Metal mesh + ABS plastic",
            "USB Ports": "2x USB 2.0 pass-through",
            "LED": "RGB lighting (7 colors)",
            "Compatibility": "Up to 17\" laptops"
        },
        highlights: [
            "4-fan cooling system with speed control",
            "Ergonomic tilt adjustment (5° to 15°)",
            "Dual USB hub functionality",
            "Anti-slip rubberized surface",
            "Tool-free fan replacement"
        ]
    },
    "107": {
    "title": "Gigabyte Aorus Gen5 12000 2TB NVMe SSD",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSaUqGhe1XFQeBBuQwgnkBxnyzn2awtXHF5_F-iizmk6PRaAxrxXCPBwCAxoISbddTUAy2QcwrzUEz_7pYpIxWvIzdocX0nNz9gAppdJvZq9gjQIT19tq-I",
    "price": "₹77,104.38",
    "originalPrice": "₹81,162.50",
    "rating": "4.5",
    "ratingCount": "1,585 ratings",
    "delivery": "₹17.62 delivery Wed, 2 Apr",
    "discount": "Save ₹4,058.12 (5%)",
    "stock": "In Stock",
    "colors": ["Black", "Silver", "RGB"],
    "specs": {
        "Brand": "Gigabyte",
        "Capacity": "2TB",
        "Interface": "PCIe Gen5 x4",
        "Sequential Read": "12,000 MB/s",
        "Sequential Write": "10,000 MB/s",
        "Form Factor": "M.2 2280",
        "Warranty": "5 years",
        "Heatsink": "Active cooling system"
    },
    "highlights": [
        "World's fastest Gen5 SSD",
        "Active thermal management",
        "Aorus RGB Fusion 2.0",
        "SLC Cache technology",
        "End-to-end data protection"
    ]
},
"108": {
    "title": "Thrustmaster T.Flight Stick X Joystick",
    "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ6rfzUxdZozEAT6Tj5J7jry5dVewQO4qc1vDLGCWwLAwswGJBwM5VreKrYA_7uNmepY7aeJW3isuj-FCt-eU0XGxE25tndhd4-S-fzHh_E4bommFZxLDqSBA",
    "price": "₹19,887.01",
    "originalPrice": "₹20,933.70",
    "rating": "4.3",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,900.62 delivery Wed, 2 Apr",
    "discount": "Save ₹1,046.69 (5%)",
    "stock": "Only 7 left",
    "colors": ["Black/Red", "Black/Blue"],
    "specs": {
        "Brand": "Thrustmaster",
        "Connection": "USB",
        "Buttons": "12 programmable",
        "Axis": "5+1 (twist rudder)",
        "Compatibility": "PC",
        "Weight": "1.2kg",
        "Base": "Non-slip suction cups"
    },
    "highlights": [
        "Precision HallEffect sensors",
        "Adjustable resistance",
        "Ergonomic hand rest",
        "Built-in throttle control",
        "Plug-and-play setup"
    ]
},
"109": {
    "title": "Portronics Key7 Combo Wireless Keyboard & Mouse Set",
    "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQeKlbBqTz2IzFDjl9JpzemYYRw6veJe44bXA9ACkSgbIGD5eMe-gLdLoQ1XaZxGs8H2KaWm_fNCnY8vnbKI7ojPoEWuOD_4gvT3wSn52nwZEG0P76Qo5Hg",
    "price": "₹98,619.10",
    "originalPrice": "₹1,03,809.58",
    "rating": "4.1",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,700.62 delivery Wed, 2 Apr",
    "discount": "Save ₹5,190.48 (5%)",
    "stock": "In Stock",
    "colors": ["Black", "White", "Silver"],
    "specs": {
        "Brand": "Portronics",
        "Connection": "2.4GHz wireless",
        "Keyboard Type": "Membrane",
        "Mouse DPI": "1600",
        "Battery": "AAA x2 (keyboard), AA x1 (mouse)",
        "Range": "10m",
        "Compatibility": "Windows, macOS, Android"
    },
    "highlights": [
        "Full-size keyboard with numeric pad",
        "Silent mouse with ergonomic design",
        "3-year warranty",
        "Plug-and-play nano receiver",
        "Spill-resistant keyboard"
    ]
},
"110": {
    "title": "Stuffcool Click 20000mAh Magnetic Wireless Powerbank",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSUa1z6AR1x3AE7K-1-_AO2P_pa0xeyoc5eDxn87xcUNgdd7sAlRFOIkYs-Jhc8yP3TwSBmUzmMuJW4TZGWDa3RKmfP5pnZSmeN96pSeqHNueUHmkPcNQzUaw",
    "price": "₹10,00,000",
    "originalPrice": "₹10,52,631.58",
    "rating": "4.7",
    "ratingCount": "1,585 ratings",
    "delivery": "₹10,000.62 delivery Wed, 2 Apr",
    "discount": "Save ₹52,631.58 (5%)",
    "stock": "Limited stock",
    "colors": ["Black", "Blue", "Red"],
    "specs": {
        "Brand": "Stuffcool",
        "Capacity": "20000mAh",
        "Output": "15W wireless + 20W wired",
        "Input": "27W PD",
        "Ports": "USB-C, USB-A, Lightning",
        "MagSafe Compatible": "Yes",
        "Weight": "320g"
    },
    "highlights": [
        "Magnetic alignment for iPhones",
        "Simultaneous wired+wireless charging",
        "Digital power display",
        "Dual-coil design",
        "18W fast charging"
    ]
},
"111": {
    "title": "RUIZU X02 MP3 Player",
    "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT8JG-KezDTrlKfjM3C2IyNltddj-d-jzbRPclWrT-mbwG_rutQyKDyDRRdb0Z5MXVf73QFXzbXf4V3fJToljSWbJsSaBLTNTDl0IYI0c8xA2i8PrPVcm_RHA",
    "price": "₹99,037.08",
    "originalPrice": "₹1,04,249.56",
    "rating": "4.0",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,300.62 delivery Wed, 2 Apr",
    "discount": "Save ₹5,212.48 (5%)",
    "stock": "In Stock",
    "colors": ["Black", "Blue", "Pink"],
    "specs": {
        "Brand": "Ruizu",
        "Storage": "16GB (expandable to 128GB)",
        "Battery": "300mAh (15hrs playback)",
        "Screen": "1.8\" TFT",
        "Formats": "MP3/WMA/FLAC/WAV",
        "FM Radio": "Yes",
        "Weight": "30g"
    },
    "highlights": [
        "Ultra-compact clip design",
        "Voice recording function",
        "5-band equalizer",
        "A-B repeat feature",
        "E-book reader"
    ]
},
"112": {
    "title": "Apple AirPods 4",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTQqA--XBYYmomlL7FUYM1ujw0vsOOJC9NEBmn4kbpl4XNAEeddH7hsU44PoTjt5Uc_xHnBzjFCScTJqLb3pYO0R0XO4anB-49Ecg1BvtyqaoognXHKhMyKxA",
    "price": "₹2,09,000",
    "originalPrice": "₹2,20,000",
    "rating": "4.8",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,000.62 delivery Wed, 2 Apr",
    "discount": "Save ₹11,000 (5%)",
    "stock": "Only 3 left",
    "colors": ["White", "Space Gray", "Silver"],
    "specs": {
        "Brand": "Apple",
        "Bluetooth": "5.3",
        "Battery Life": "6hrs (30hrs with case)",
        "Chip": "H2",
        "Water Resistance": "IPX4",
        "Charging": "MagSafe + Lightning",
        "Weight": "38g (each)"
    },
    "highlights": [
        "Adaptive EQ technology",
        "Skin-detect sensors",
        "Personalized Spatial Audio",
        "Conversation Boost",
        "Find My integration"
    ]
},
"113": {
    "title": "JBL Boombox 3 Portable Bluetooth Speaker",
    "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcToa40R277H_wdk31lsJhhWkbVWYnBxxSa4bJCKjdajLp_tlO9q3ZpP_0tjtTMVYlNOAoLzOWOGb8IphpTGeoQoRJJfl6vwaUa3ZGAYKYbfxQsNb5F3aeSg",
    "price": "₹93,500",
    "originalPrice": "₹98,421.05",
    "rating": "4.6",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,900.62 delivery Wed, 2 Apr",
    "discount": "Save ₹4,921.05 (5%)",
    "stock": "In Stock",
    "colors": ["Black", "Squad (camouflage)"],
    "specs": {
        "Brand": "JBL",
        "Power": "80W RMS",
        "Battery": "24hrs playback",
        "Waterproof": "IPX7",
        "Bluetooth": "5.3",
        "Charging": "USB-C",
        "Weight": "6.8kg"
    },
    "highlights": [
        "JBL PartyBoost for stereo pairing",
        "Bass Radiator for deep lows",
        "Powerbank function",
        "Dual passive radiators",
        "Handle for portability"
    ]
},
"114": {
    "title": "Nitho Hexagon Wireless Controller",
    "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT9vZ93ie6A99g6f9tC8sgPQ7GqQ_O_hgi6EDJBXM14hKzQhRxAdB9qFl7wAZQOdqQjzhmTzniO2SQTfPbOdRH-4cCEySIx8lhlIJMfJH38aKWlDnX2VRyI",
    "price": "₹77,079",
    "originalPrice": "₹81,135.79",
    "rating": "4.2",
    "ratingCount": "1,585 ratings",
    "delivery": "₹1,600.62 delivery Wed, 2 Apr",
    "discount": "Save ₹4,056.79 (5%)",
    "stock": "Only 5 left",
    "colors": ["Black", "White", "Red"],
    "specs": {
        "Brand": "Nitho",
        "Connection": "Bluetooth 5.0 + 2.4GHz",
        "Compatibility": "PC/PS4/Android",
        "Battery": "600mAh (15hrs)",
        "Buttons": "16 programmable",
        "Vibration": "Dual motors",
        "Weight": "210g"
    },
    "highlights": [
        "Ergonomic hexagonal design",
        "Customizable RGB lighting",
        "Turbo function",
        "6-axis gyroscope",
        "Anti-slip textured grips"
    ]
},

    
};
window.productsData = products;