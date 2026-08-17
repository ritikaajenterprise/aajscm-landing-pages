import type { LandingConfig } from "../types";
const solutionB2bImg = "/lp/warehousing/solution-b2b.jpg";
const solutionEcomImg = "/lp/warehousing/solution-ecom.jpg";
const solutionB2cImg = "/lp/warehousing/solution-b2c.jpg";
const industryEcommerce = "/lp/warehousing/industries/Ecommerce.jpg";
const industryRetail = "/lp/warehousing/industries/Retail%20%26%20Omnichannel.jpg";
const industryFashion = "/lp/warehousing/industries/Fashion%20%26%20Apparel.jpg";
const industryFmcg = "/lp/warehousing/industries/FMCG.jpg";
const industryElectronics = "/lp/warehousing/industries/Electronics.jpg";
const industryHealthcare = "/lp/warehousing/industries/Healthcare.jpg";
const industryAutomotive = "/lp/warehousing/industries/Automotive.jpg";
const industryManufacturing = "/lp/warehousing/industries/Manufacturing.jpg";
const industryBeauty = "/lp/warehousing/industries/Beauty%20%26%20Personal%20Care.jpg";
const industryFurniture = "/lp/warehousing/industries/Home%20%26%20Furniture.jpg";
const industryBooks = "/lp/warehousing/industries/Books%20%26%20Publishing.jpg";
const industrySports = "/lp/warehousing/industries/Sports%20%26%20Fitness.jpg";



export const config: LandingConfig = {
  slug: "warehousing",
  metaTitle:
    "New Age 3PL & Warehousing Services in India | AAJ Supply Chain Management",
  metaDescription:
    "AAJ SCM helps brands store, manage and fulfill inventory with 99.9% accuracy across 12+ warehouses and 1M+ sq.ft. nationwide. Get a tailored 3PL proposal.",

  heroEyebrow: "New Age 3PL and Warehousing Services",
  heroHeadline:
    "Your Products Deserve Better Than Delayed Dispatches and Inventory Errors",
  heroHighlightWords: ["Delayed Dispatches", "Inventory Errors"],
  heroSubheadline:
    "AAJ Supply Chain Management helps brands store, manage and fulfill inventory with speed, accuracy and complete visibility through a nationwide warehousing network.",
  heroIconStats: [
    { icon: "target", title: "Faster Fulfillment", subtitle: "Pan India Reach" },
    { icon: "shield", title: "Accuracy You Can Trust", subtitle: "99.75% Inventory Accuracy" },
    { icon: "eye", title: "Complete Visibility", subtitle: "Real-time Tracking" },
  ],
  heroBigStats: [
    { icon: "trend", value: "99.9%", labelTop: "Order Accuracy" },
    { icon: "home", value: "12+", labelTop: "Warehouses", labelBottom: "Across India" },
    { icon: "box", value: "1M+", labelTop: "Sq. Ft. Total", labelBottom: "Warehouse Space" },
  ],
  heroFormHeading: "Speak to a Supply Chain Expert",
  heroFormSubheading: "Get a customized warehousing strategy for your business today.",
  heroFormTrust: [
    { icon: "zap", label: "Response within 30 mins" },
    { icon: "shield", label: "No Obligation" },
    { icon: "lock", label: "100% Confidential" },
  ],
  heroBottomFeatures: [
    { icon: "map", title: "Pan India Network", subtitle: "Strategic locations across all major metros" },
    { icon: "cpu", title: "Tech-Driven Operations", subtitle: "WMS, TMS & real-time inventory tracking" },
    { icon: "layers", title: "Scalable Solutions", subtitle: "Built to grow with your business" },
    { icon: "users", title: "Experienced Team", subtitle: "Logistics experts with deep industry knowledge" },
    { icon: "lock", title: "Secure & Compliant", subtitle: "24/7 CCTV, Access Control & Industry Best Practices" },
  ],
  heroHighlightBadge: "99.75% Inventory Accuracy",
  heroStats: [
    { value: "99.75%", label: "Inventory Accuracy" },
    { value: "12+", label: "Warehouses Across India" },
    { value: "1M+", label: "Sq. Ft. Warehouse Space" },
  ],
  heroFeatures: [
    "Faster Fulfillment",
    "Complete Visibility",
    "Marketplace & D2C Ready",
    "Scan-Based Putaway & Picking",
    "Multi-Industry Fulfillment",
    "Pay Per Use Model",
    "No Lock-in Period",
  ],
  trustStrip:
    "Trusted by 200+ brands across India for reliable warehousing & fulfillment",
  trustStripHighlights: ["200+"],


  competitiveAdvantageHeading:
    "Your Competitive Advantage Starts Inside the AAJ Warehouse Facility",
  competitiveAdvantages: [
    {
      icon: "warehouse",
      title: "Tall Vertical Storage Infrastructure",
      description:
        "One of India's tallest warehousing storage systems designed to maximize inventory capacity while improving picking efficiency.",
    },
    {
      icon: "truck",
      title: "Same-Day Dispatch Capability",
      description:
        "Strategically located warehouses and streamlined SOPs help process and dispatch eligible orders the very same day.",
    },
    {
      icon: "cpu",
      title: "In-House Warehouse Management System",
      description:
        "Gain real-time visibility into inventory, orders and warehouse operations through our proprietary WMS with ERP integration capabilities.",
    },
    {
      icon: "clipboard",
      title: "SOP-Driven Operations",
      description:
        "Every warehouse follows standardized operating procedures to deliver consistent accuracy, faster onboarding, and predictable service quality across locations.",
    },
    {
      icon: "scale",
      title: "Flexible Pay-as-You-Scale Model",
      description:
        "Expand warehouse space and fulfillment capacity based on your business needs without investing in fixed infrastructure.",
    },
    {
      icon: "cog",
      title: "Automation & Material Handling Equipment",
      description:
        "Modern racking systems, MHEs and warehouse automation support faster movement, improved safety, and higher throughput.",
    },
  ],

  industriesHeading:
    "Serving Diverse Industries with Smarter 3PL Warehousing Solutions",
  industriesSubheading:
    "Our nationwide warehouse network is built to handle different products, inventory volumes, and third party fulfillment and warehousing requirements with precision.",
  industries: [
    { name: "Ecommerce", tagline: "Fast Fulfillment & Returns", icon: "ecommerce", image: industryEcommerce },
    { name: "Retail & Omnichannel", tagline: "Store Replenishment", icon: "retail", image: industryRetail },
    { name: "Fashion & Apparel", tagline: "SKU-Level Inventory", icon: "fashion", image: industryFashion },
    { name: "FMCG", tagline: "High-Volume Distribution", icon: "fmcg", image: industryFmcg },
    { name: "Electronics", tagline: "Secure Product Handling", icon: "electronics", image: industryElectronics },
    { name: "Healthcare", tagline: "Compliant Inventory Storage", icon: "healthcare", image: industryHealthcare },
    { name: "Automotive", tagline: "Component Warehousing", icon: "automotive", image: industryAutomotive },
    { name: "Manufacturing", tagline: "Raw & Finished Goods", icon: "manufacturing", image: industryManufacturing },
    { name: "Beauty & Personal Care", tagline: "Batch & Expiry Tracking", icon: "beauty", image: industryBeauty },
    { name: "Home & Furniture", tagline: "Large Inventory Storage", icon: "furniture", image: industryFurniture },
    { name: "Books & Publishing", tagline: "Nationwide Distribution", icon: "books", image: industryBooks },
    { name: "Sports & Fitness", tagline: "Omnichannel Fulfillment", icon: "sports", image: industrySports },
  ],


  solutionsHeading:
    "Warehouse and Fulfillment Solutions Designed Around Your Business Model",
  solutions: [
    {
      icon: "boxes",
      image: solutionB2bImg,
      title: "B2B Warehousing Service",
      description:
        "Manage bulk inventory, distributor orders and retail replenishment with structured warehousing, inventory control, and nationwide distribution.",
      idealFor: ["Manufacturers", "FMCG", "Retail Distribution", "Wholesale Businesses"],
    },
    {
      icon: "cart",
      image: solutionEcomImg,
      title: "Ecommerce Fulfillment Service",
      description:
        "Deliver marketplace and website orders faster through streamlined pick, pack and dispatch operations with complete inventory visibility.",
      idealFor: ["Amazon", "Flipkart", "Shopify", "WooCommerce", "Brand Websites"],
    },
    {
      icon: "heart",
      image: solutionB2cImg,
      title: "B2C and Omnichannel Fulfillment Service",
      description:
        "Provide customers with a consistent delivery experience through faster fulfillment, flexible warehousing, and real-time inventory management.",
      idealFor: ["Omnichannel Brands", "Consumer Products", "Lifestyle", "Beauty", "Healthcare"],
    },
  ],

  supplyChainHeading: "How AAJ SCM Strengthens Your Supply Chain",
  supplyChainSubheading:
    "The right 3PL partner doesn't just move inventory. It changes the way your business operates, grows, and serves customers.",
  supplyChain: [
    {
      icon: "eye",
      title: "Better Business Visibility",
      description:
        "Stop making inventory decisions based on assumptions. Gain real-time visibility across inventory, fulfillment, and warehouse operations.",
    },
    {
      icon: "rocket",
      title: "Faster Market Expansion",
      description:
        "Launch in new cities using an existing warehouse network instead of building your own infrastructure.",
    },
    {
      icon: "smile",
      title: "Consistent Customer Experience",
      description:
        "Reliable fulfillment and standardized operations help create predictable customer experiences, regardless of order volume.",
    },
    {
      icon: "map",
      title: "Keep Products Where Demand Exists",
      description:
        "Inventory creates value only when it's available in the right place at the right time.",
    },
    {
      icon: "shield",
      title: "Run Operations with Confidence",
      description:
        "Technology, SOPs and dedicated operations teams work together to give your business more control.",
    },
    {
      icon: "trend",
      title: "Supply Chain Ready for Growth",
      description:
        "When demand increases, your logistics shouldn't become the bottleneck.",
    },
  ],

  techHeading:
    "AAJ's Integrated Technology Ecosystem That Keeps Every Order Moving",
  techSubheading:
    "Technology should simplify operations, not create more complexity. AAJ's WMS, AAJ Swift (TMS) and AAJ Rev (RMS) work together as one connected operating ecosystem.",
  tech: [
    {
      icon: "layers",
      title: "Unified Warehouse Operating System",
      description:
        "AAJ's WMS, AAJ Swift (TMS) and AAJ Rev (RMS) work as one connected operating ecosystem.",
    },
    {
      icon: "plug",
      title: "Native ERP & Marketplace Integrations",
      description:
        "API integrate with your ERP, ecommerce platforms and marketplaces to eliminate manual work and keep inventory auto synchronized.",
    },
    {
      icon: "globe",
      title: "Built for Omnichannel Operations",
      description:
        "Support B2B, D2C, and marketplace fulfillment without maintaining separate inventory pools or disconnected operational processes.",
    },
    {
      icon: "sliders",
      title: "Configurable Warehouse Workflows",
      description:
        "Warehouse processes can be configured to match your custom operational requirements instead of forcing your business to adapt to generic software.",
    },
    {
      icon: "database",
      title: "Centralized Inventory Management",
      description:
        "Manage inventory across multiple AAJ warehouses from a single platform with centralized inventory allocation and stock visibility.",
    },
    {
      icon: "cpu",
      title: "Continuously Evolving Technology",
      description:
        "Our technology is developed and enhanced in-house, allowing us to quickly introduce new capabilities as your operations grow and change.",
    },
  ],

  // CTA bands rendered below the named sections.
  ctaBands: {
    tech: {
      heading: "Ready to Make Your Warehousing and Fulfillment",
      highlight: "Operations Smarter?",
      label: "Discuss Your Requirements",
    },
    warehouses: {
      heading: "Looking for the Right",
      highlight: "Warehouse Location for Your Business?",
      label: "Discuss Your Warehouse Requirements",
    },
  },

  pillarsHeading: "The Four Pillars of AAJ's Operational Excellence",
  pillarsSubheading:
    "Reliable fulfillment isn't built on warehouse space alone. It takes the right infrastructure, people, technology, and processes working together.",
  pillars: [
    {
      icon: "infrastructure",
      label: "Infrastructure",
      title: "Modern Facilities",
      description:
        "Modern warehouses with vertical storage, advanced MHEs, and scalable infrastructure designed for growing businesses.",
    },
    {
      icon: "people",
      label: "People",
      title: "SOP-Trained Teams",
      description:
        "Trained warehouse professionals following the same SOP-driven operations across every AAJ facility.",
    },
    {
      icon: "technology",
      label: "Technology",
      title: "WMS • TMS • RMS",
      description:
        "Integrated WMS, AAJ Swift (TMS) and AAJ Rev (RMS) keep warehouse, transportation and returns connected.",
    },
    {
      icon: "processes",
      label: "Processes",
      title: "Standardized Workflows",
      description:
        "Standardized workflows ensure the same operational quality across every warehouse in the AAJ network.",
    },
  ],

  warehousesHeading:
    "Pan India Warehouse Network Designed for Faster Fulfillment",
  warehousesSubheading:
    "Strategically located warehouses across India help reduce transit time, improve inventory availability and bring your products closer to customers.",
  warehouses: [
    {
      name: "Delhi",
      capacity: "35,000+ Sq. Ft.",
      bestFor: ["B2C", "D2C", "Marketplace Fulfillment"],
      highlights: ["24×7 Operations", "Urban Fulfillment Hub", "MHEs", "Dock Operations"],
      coverage: ["North India", "Delhi NCR", "Noida", "Ghaziabad"],
      address: "Plot No 427, Pocket c, IFC, Gazipur, Delhi – 110096",
      description:
        "Strategically located in Ghazipur – East Delhi, our warehouse in Delhi NCR ensures quick deliveries to your customers in Delhi, Ghaziabad, Noida, and Loni.",
      team: "100+ Trained Supply Chain Professionals",
      racking: "Modern Racking with MHES",
      security: "24/7 Security with 90-Day CCTV Storage",
    },
    {
      name: "Ghaziabad (NCR)",
      capacity: "1.5 Lakh+ Sq. Ft.",
      bestFor: ["B2B", "B2C", "D2C", "Marketplace Fulfillment"],
      highlights: [
        "24×7 Operations",
        "Vertical Racking",
        "Large-Scale B2B Distribution",
        "Dock Operations",
      ],
      coverage: ["North India", "Delhi NCR", "Noida", "Meerut"],
    },
    {
      name: "Noida (NCR)",
      capacity: "1 Lakh+ Sq. Ft.",
      bestFor: ["B2B", "B2C", "Marketplace Fulfillment"],
      highlights: [
        "24×7 Operations",
        "Vertical Racking",
        "MHEs",
        "Automation-Ready Operations",
      ],
      coverage: ["North India", "Delhi NCR", "Ghaziabad", "Uttar Pradesh"],
    },
    {
      name: "Kundli (NCR)",
      capacity: "1.5 Lakh+ Sq. Ft.",
      bestFor: ["B2B", "B2C", "Marketplace Fulfillment"],
      highlights: [
        "24×7 Operations",
        "Vertical Racking",
        "MHEs",
        "National Highway Connectivity",
      ],
      coverage: ["North India", "Delhi NCR", "Ghaziabad", "Haryana"],
    },
    {
      name: "Sonipat (NCR)",
      capacity: "1.1 Lakh+ Sq. Ft.",
      bestFor: ["B2B", "B2C", "Marketplace Fulfillment"],
      highlights: [
        "24×7 Operations",
        "Vertical Racking",
        "MHEs",
        "High-Capacity Regional Distribution",
      ],
      coverage: ["North India", "Delhi NCR", "Ghaziabad", "Haryana"],
    },
    {
      name: "Gurgaon (Gurugram)",
      capacity: "1 Lakh+ Sq. Ft.",
      bestFor: ["B2B", "Large Format Distribution", "High-Volume Storage"],
      highlights: [
        "24×7 Operations",
        "Vertical Racking",
        "MHEs",
        "India's Tallest Warehouse",
      ],
      coverage: ["North India", "Delhi NCR", "Faridabad", "Haryana"],
    },
    {
      name: "Bhiwandi",
      capacity: "1.5 Lakh+ Sq. Ft.",
      bestFor: ["B2B", "B2C", "Marketplace Fulfillment"],
      highlights: ["24×7 Operations", "Vertical Racking", "MHEs", "Dock Operations"],
      coverage: ["Mumbai", "Navi Mumbai", "Thane", "Pune"],
    },
    {
      name: "Kolkata",
      capacity: "50,000+ Sq. Ft.",
      bestFor: ["B2B", "B2C", "Marketplace Fulfillment"],
      highlights: [
        "24×7 Operations",
        "Vertical Racking",
        "MHEs",
        "East India Distribution Gateway",
      ],
      coverage: ["East India", "Kolkata", "Howrah", "Siliguri"],
    },
    {
      name: "Hyderabad",
      capacity: "55,000+ Sq. Ft.",
      bestFor: ["B2B", "B2C", "Marketplace Fulfillment"],
      highlights: ["24×7 Operations", "Vertical Racking", "MHEs", "Dock Operations"],
      coverage: ["South India", "Hyderabad", "Secunderabad", "Vijayawada"],
    },
    {
      name: "Bangalore",
      capacity: "1.5 Lakh+ Sq. Ft.",
      bestFor: ["B2B", "B2C", "Marketplace Fulfillment"],
      highlights: ["24×7 Operations", "Vertical Racking", "MHEs", "Dock Operations"],
      coverage: ["Bengaluru", "Hosur", "Mysuru", "Mangaluru"],
    },
    {
      name: "Chennai",
      capacity: "50,000+ Sq. Ft.",
      bestFor: ["B2B", "B2C", "Marketplace Fulfillment"],
      highlights: [
        "24×7 Operations",
        "Vertical Racking",
        "Port-Connected Distribution",
        "Dock Operations",
      ],
      coverage: ["South India", "Chennai", "Coimbatore", "Madurai"],
    },
  ],

  testimonialsHeading: "Client Testimonials",
  testimonials: [
    {
      quote:
        "We began with AAJ SCM in 2011, and it has been a long and trusted partnership. AAJ has been our warehousing and logistics partner since the inception of Bloomsbury in India. AAJ Supply Chain Management has evolved exceptionally well with the changing business environment and our growing business needs. They have successfully managed a 20x growth in Bloomsbury's warehousing requirements without major hurdles. I find their team highly responsive and attentive, with a strong understanding of our business needs. I wish them all the best for the future and hope they continue to sustain the momentum and quality of service.",
      author: "Mahendra Lodha",
      role: "CFO & Operations Head",
      company: "Bloomsbury Publishing India",
      rating: 5,
    },
    {
      quote:
        "Biozone has been using fulfillment services from AAJ Supply Chain Management since October 2020, and it has been a great partnership over the past four years. Using AAJ as our distribution hub for Central Asia has opened a new line of business for Biozone. AAJ has worked consistently in the background to provide excellent service and competitive shipping rates. Our CSR team is very helpful and responsive, ensuring that time zone differences never become an issue at either end.",
      author: "Anu Chauhan",
      role: "Supply Chain Manager",
      company: "Biozone International Limited",
      rating: 4.5,
    },
    {
      quote:
        "It was a challenging time when AAJ began operations, considering restrictions on road entries, new customers, and high dealer expectations. Despite these challenges, the team at AAJ Supply Chain Management remained focused and committed to their responsibilities from day one.",
      author: "Jaspreet Singh",
      role: "Senior Manager",
      company: "Tynor Orthotics Pvt. Ltd.",
      rating: 5,
    },
    {
      quote:
        "Muddy Water Cosmetics has greatly benefited from partnering with AAJ Supply Chain Management for our order fulfillment needs. Their efficient management and dedicated team have been invaluable in supporting our operations. As we plan to expand our reach and decrease our delivery times to different parts of the country, the strategic spread of AAJ's warehouse facilities is definitely going to play a big role. AAJ's reliability and expertise give us confidence in our continued growth and success together.",
      author: "Amanpreet Wraich",
      role: "Founder",
      company: "Muddy Waters Pvt. Ltd.",
      rating: 5,
    },
    {
      quote:
        "We onboarded with AAJ Supply Chain Management in February 2023, while transitioning to a new supply chain vendor. The process of aligning our marketplaces with the new operations partner address took considerable time. During this period, the AAJ team provided invaluable support by storing and manually managing our inventory with exceptional accuracy, as the situation required. This demonstrates AAJ's adaptability and willingness to go beyond standard processes to support growing B2C brands. We are pleased to have chosen AAJ as our operations partner, helping us build a strong marketplace presence.",
      author: "Tanmana Sarma",
      role: "Founder",
      company: "Apaapi Threads of Glory",
      rating: 5,
    },
    {
      quote:
        "We have processed more than 1 million units from AAJ Supply Chain Management warehouse in Feb 2022. We just started operations from AAJ in Nov 2021 and this was the 4th month of our operations. What makes it even more satisfying is the budgeted outward units for Feb 2022 was close to 800,000 and our TAT achievement was 97.34% against budgeted 95%, this too in a calendar month with 3 less working days. This would not have been possible without your active support and we look forward to a repeat performance during this season where we break these records and sail even higher.",
      author: "Ankur Kashyap",
      role: "Sr. VP Operations",
      company: "Cambridge University Press India",
      rating: 5,
    },
    {
      quote:
        "Journey with AAJ Supply Chain Management and Neema's Team in the last one year has been really fantastic and extremely professional. A lot of achievements are waiting in future due course and I'm sure they will be enjoyable. As we acquire transportation facilities from AAJ, they have taken immediate action on our every concern which is again appreciable.",
      author: "Rabi Mishra",
      role: "India Senior Finance Manager",
      company: "Harsco Corporation",
      rating: 5,
    },
    {
      quote:
        "Thank you for a splendid tour of your very impressive facility. It's good to know we are in such good hands in India!",
      author: "Jonathan Atkins",
      role: "International Director",
      company: "Pan Macmillan Publishing India Pvt. Ltd.",
      rating: 5,
    },
    {
      quote:
        "Having the pleasure of visiting the team during a recent visit, I took the opportunity to visit AAJ Supply Chain Management's warehouse with a view of understanding their process and system capabilities. Expecting to find a fault, I was surprised that this organization was the 1st in 25 years that I was unable to discern any issues. I found the team open and transparent in their dealings to date.",
      author: "Chris Jones",
      role: "Global Supply Chain Director",
      company: "Cambridge University Press India",
      rating: 5,
    },
    {
      quote:
        "2019-2022 have been so dynamic with a new challenge at every turn, and your team have stood by us every step of the way and helped navigate through all of them ensuring we continue our growth trajectory. It has been an absolute pleasure. Here's to great big successes in the future too!",
      author: "Anantha Padmanabhan",
      role: "CEO",
      company: "Harper Collins Publishers India Pvt. Ltd.",
      rating: 5,
    },
    {
      quote:
        "When we launched our eco-friendly products, the response was overwhelming and we were finding it difficult to reach customers pan India. Our association with AAJ Supply Chain Management solved this and today we are with them in Ghaziabad, Mumbai and Bangalore, strengthening our inventory management and Pan India Logistics.",
      author: "Nitheesh Sundaresan",
      role: "Founder",
      company: "Varsya Eco Solutions Pvt. Ltd.",
      rating: 5,
    },
    {
      quote:
        "With the end of a successful financial year and with the sales for a majority of the markets for the school season ending, I would like to thank AAJ SCM and your team for the improvements you have brought about in contributing to our success. Your efforts in managing our warehouse operations smoothly and the work put in towards improving on problem areas throughout the year are appreciated.",
      author: "Subroto Mozumdar",
      role: "CEO",
      company: "Ananda Publishers Pvt. Ltd.",
      rating: 5,
    },
    {
      quote:
        "AAJ Supply Chain Management and their employees were very attentive to our needs even during times of minimal notice. For protection of our sales during the relocation, we set up parallel shipping operations with AAJ and the agreed upon project timelines were met both from operations and systems standpoint. In future we won't hesitate to avail services of AAJ if required.",
      author: "Glenn Ciprani",
      role: "VP Distribution",
      company: "Pearson India Education Services Pvt. Ltd.",
      rating: 5,
    },
    {
      quote:
        "When we were onboarding with AAJ Supply Chain Management, firstly we felt we were taking a risk with a vendor who has not done apparel before, but when we visited the facility, we were 100% satisfied with the alignment and process of the warehouse. AAJ rose to the occasion and has done a brilliant job. Thank you, Team AAJ, for helping SAAKI wherever needed — without your team we wouldn't have been this successful.",
      author: "Deekshith Reddy",
      role: "Manager",
      company: "Saaki Lifestyle Pvt. Ltd.",
      rating: 5,
    },
    {
      quote:
        "We began with AAJ in 2015 when we were in urgent need of a 3PL partner. We took a quick decision to partner at that time, but we never had to look back. AAJ Supply Chain Management has been a professional and flexible service partner. They manage the warehousing and distribution of our entire range of trade titles and we are quite satisfied with their services. I would recommend their services to anyone looking for a responsible 3PL partner.",
      author: "Praveen Kumar",
      role: "Operations Head",
      company: "Scholastic India Pvt. Ltd.",
      rating: 5,
    },
  ],


  businessModelsHeading:
    "Smarter 3PL Warehousing for Every Business Need",
  businessModelsSubheading:
    "From barcode-driven operations to shared warehousing, AAJ delivers the infrastructure, technology, and flexibility modern brands need.",
  businessModels: [
    {
      icon: "barcode",
      title: "Barcode-Driven Warehousing Operations",
      description: "Real-time inventory accuracy across every warehouse process.",
    },
    {
      icon: "warehouse",
      title: "Grade-A Warehouse Infrastructure",
      description: "Modern warehouses built for speed, safety, and scalability.",
    },
    {
      icon: "truck",
      title: "Same & Next-Day Fulfillment",
      description: "Orders picked, packed, and dispatched the same day across every major metro city.",
    },
    {
      icon: "layers",
      title: "Enterprise-Grade 3PL",
      description: "Tech-driven logistics for businesses of every size.",
    },
    {
      icon: "users",
      title: "Shared Warehousing",
      description: "Cost-effective storage with flexible capacity.",
    },
  ],

  faqHeading:
    "Everything You Need to Know Before Choosing a 3PL and Warehouse Company",
  faqs: [
    {
      q: "How quickly can we get started with AAJ SCM?",
      a: "Our onboarding timeline depends on your operational requirements, inventory size, and system integrations. Our team ensures a smooth and structured transition.",
    },
    {
      q: "Do you provide flexible warehouse spaces?",
      a: "Yes. Our warehousing solutions are designed to scale with your business, whether you need additional capacity for seasonal demand or long-term growth.",
    },
    {
      q: "Which industries do you work with?",
      a: "We support businesses across ecommerce, retail, FMCG, manufacturing, publishing, healthcare, consumer goods, and many other industries.",
    },
    {
      q: "Will I have a dedicated account manager?",
      a: "Yes. Every client is assigned a dedicated account manager to ensure smooth communication and operational support.",
    },
    {
      q: "Do I need to commit to long-term warehouse contracts?",
      a: "No. We offer flexible warehousing solutions, allowing you to scale operations based on your business requirements without long-term lock-in commitments.",
    },
    {
      q: "Which products are not supported by AAJ?",
      a: "To ensure operational safety and compliance, we currently do not support hazardous or chemical products, flammable goods, fresh/frozen/perishable food, meat, poultry and seafood, leather-based products, items requiring specialized cold chain infrastructure, and any products restricted under applicable regulations. If your products fall outside these categories, we'd be happy to evaluate your warehousing and fulfillment requirements.",
    },
  ],

  finalCtaHeading: "Let's Build a Supply Chain That Grows with Your Business",
  finalCtaSubheading:
    "Tell us about your business. We'll recommend the right warehouse strategy — not a one-size-fits-all solution.",
  finalCtaMicroTrust:
    "No long-term lock-in · Flexible warehousing · Nationwide operations",
};
