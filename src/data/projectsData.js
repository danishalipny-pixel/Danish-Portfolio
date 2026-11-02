export const projectsData = [
  {
    "id": "novamart",
    "title": "NOVAMART — Full-Stack Multi-Vendor E-Commerce Platform",
    "shortTitle": "NOVAMART",
    "tagline": "Modern multi-vendor retail platform with role-based governance, Stripe payments, and fail-safe image rendering",
    "category": "Full Stack",
    "featured": true,
    "repoUrl": "https://github.com/danishalipny-pixel/NOVAMART",
    "liveDemoUrl": null,
    "primaryImage": "/assets/projects/novamart-banner-1.webp",
    "additionalImages": [
      "/assets/projects/novamart-banner-2.webp",
      "/assets/projects/novamart-banner-3.webp",
      "/assets/projects/novamart-logo.svg"
    ],
    "languages": [
      {
        "name": "JavaScript",
        "percentage": 99.3,
        "bytes": 687807
      },
      {
        "name": "CSS",
        "percentage": 0.6,
        "bytes": 4296
      },
      {
        "name": "HTML",
        "percentage": 0.1,
        "bytes": 678
      }
    ],
    "techStack": {
      "frontendFramework": "React 19",
      "buildTool": "Vite 8",
      "styling": "Tailwind CSS 4",
      "icons": "Lucide React",
      "backendRuntime": "Node.js",
      "backendFramework": "Express.js",
      "database": "MongoDB with Mongoose ODM",
      "payments": "Stripe (Server-side validation & Webhooks)",
      "mediaStorage": "Cloudinary (Direct uploads & transformations)",
      "security": "JWT RBAC, bcrypt, OWASP Helmet, express-rate-limit, express-mongo-sanitize"
    },
    "overview": {
      "summary": "NOVAMART is an end-to-end digital retail marketplace uniting consumer storefronts, an independent merchant management portal, and an administrative governance platform into a unified high-performance application.",
      "purpose": "Engineered to solve Cumulative Layout Shift (zero CLS) on modern e-commerce sites, provide fail-safe image fallbacks, and deliver enterprise-grade multi-vendor governance with secure payment processing."
    },
    "theProblem": "Standard multi-vendor e-commerce platforms frequently suffer from severe Cumulative Layout Shift (CLS) when third-party merchants upload non-uniform product images. Furthermore, unhandled CDN drops produce broken-image icons, while fragmented vendor roles risk unauthorized catalog mutations and insecure payment handling.",
    "theSolution": "NOVAMART introduces a strict client-side aspect-ratio enforcement layer with a custom SafeImage fallback pipeline that gracefully replaces broken remote assets with SVG placeholders. On the server side, strict Role-Based Access Control (RBAC), sliding-window rate limiters, and cryptographically verified Stripe webhooks ensure data integrity and zero payment discrepancies.",
    "howItWorks": "Customers browse catalog collections using instant client-side filtering and sorting. When adding items to the cart, real-time inventory checks run against MongoDB. Checkout is handled through a multi-step modal communicating with Stripe payment intents. Merchants operate a dedicated portal to manage their inventory and inspect sales velocity, while platform administrators oversee merchant onboarding and catalog hygiene.",
    "keyFeatures": [
      {
        "title": "Customer Storefront & Live Filtering",
        "desc": "Faceted category exploration, instant client-side catalog search, and sorting across price, ratings, and featured tags."
      },
      {
        "title": "Interactive Product Detail Experience",
        "desc": "Multi-angle photo gallery, cursor-tracked hover zoom lens for fine texture inspection, and fullscreen HD lightbox modal (100% to 300% zoom)."
      },
      {
        "title": "Cart Drawer & Shipping Gamification",
        "desc": "Slide-over cart drawer with quantity adjustments, free shipping milestone progress bar ($100+ threshold), and multi-step checkout."
      },
      {
        "title": "Merchant Dashboard & Analytics",
        "desc": "KPI metrics (Revenue, Monthly Growth, Order Volume), SVG revenue velocity charts, and real-time inventory management."
      },
      {
        "title": "Administrative Governance",
        "desc": "Merchant onboarding application review workflows, user role management, and centralized platform activity oversight."
      },
      {
        "title": "Enterprise Security Hardening",
        "desc": "Sliding-window rate limiters, recursive NoSQL injection sanitizers, bcrypt-hashed credentials, and cryptographically verified Stripe signatures."
      }
    ],
    "frontendArchitecture": "Structured using React 19 component hierarchy with Context API for state management (Cart, Auth, Wishlist, Notifications). Utilizes Tailwind CSS 4 with custom aspect-ratio enforcement. Employs SafeImage component wrappers to guarantee zero broken image rendering and eliminate Cumulative Layout Shift (CLS).",
    "backendArchitecture": "Modular RESTful Express architecture with strict separation of concerns across controllers, services, models, routes, middleware, and Joi validators. Role-Based Access Control (RBAC) securely gates customer, seller, and admin endpoints.",
    "database": "MongoDB document database modeled with Mongoose schemas. Features indexed lookups on categories, sellers, and order status, combined with atomic transaction operations for stock decrementing during checkout.",
    "apisAndIntegrations": "Stripe Payment Gateway (PaymentIntents, Webhook signatures), Cloudinary REST API (direct media signing & dynamic image transformations), and Express REST endpoints.",
    "projectArchitecture": "Client-Server decoupling: React 19 Vite client communicates via JSON REST API with Express Node.js cluster backed by MongoDB Atlas and external Cloudinary/Stripe webhooks.",
    "developmentHighlights": "Achieved zero layout shift (0.00 CLS) across all viewport sizes, sub-second search filtering across large product catalogs, and 100% test pass on role-based authentication routes.",
    "challenges": "Mitigating Cumulative Layout Shift (CLS) across heterogeneous vendor image uploads. Solved through CSS container query aspect ratios and server-side image dimension normalization via Cloudinary transformation URLs.",
    "myRole": "Full Stack Engineer — Responsible for system architecture, frontend UI implementation, API integrations, and database design."
  },
  {
    "id": "safarx",
    "title": "SAFARX — Pakistan Intercity & Airport Mobility Platform",
    "shortTitle": "SafarX",
    "tagline": "Production-grade intercity ride booking platform purpose-built for Pakistani motorways and international airports",
    "category": "Full Stack",
    "featured": true,
    "repoUrl": "https://github.com/danishalipny-pixel/jtransportgroup.com",
    "liveDemoUrl": null,
    "primaryImage": "/assets/projects/safarx-hero.png",
    "additionalImages": [
      "/assets/projects/jtransport-hero.webp",
      "/assets/projects/jtransport-corporate.webp"
    ],
    "languages": [
      {
        "name": "JavaScript",
        "percentage": 84.5,
        "bytes": 489200
      },
      {
        "name": "CSS",
        "percentage": 11.2,
        "bytes": 64800
      },
      {
        "name": "HTML",
        "percentage": 4.3,
        "bytes": 24900
      }
    ],
    "myRole": "Full Stack Engineer — Architected the entire multi-tenant passenger, driver, and admin workflow, SQLite relational schema with WAL mode, and private NADRA CNIC document security vault.",
    "techStack": {
      "frontendFramework": "React 19 with Vite & Tailwind CSS",
      "backendRuntime": "Node.js (LTS)",
      "backendFramework": "Express.js REST API with RBAC",
      "database": "SQLite (WAL Mode, Foreign Key constraints, indexed queries)",
      "security": "JWT authentication, bcrypt credential hashing, isolated private document vault for NADRA CNIC protection",
      "integrations": "Motorway toll & fare calculation matrix, printable PDF receipts, notification dispatcher",
      "tools": "Vite, Git, GitHub, Postman, Jest acceptance test suite"
    },
    "overview": {
      "summary": "SafarX is an intercity and airport transfer mobility system specifically engineered for Pakistani highway corridors (M-1, M-2, M-3, M-4, M-5, M-9) and major international terminals (Islamabad ISB, Lahore LHE, Karachi KHI, Peshawar PEW, Multan MUX).",
      "purpose": "Engineered to eliminate unstandardized pricing, verify driver credibility, and secure sensitive national identity documents (NADRA CNICs) with enterprise-grade role-based access control."
    },
    "theProblem": "Intercity travel in Pakistan often involves volatile offline fares, unverified drivers, and casual sharing of physical CNIC documents across unencrypted communication channels, creating severe identity leakage risks and safety concerns for passengers.",
    "theSolution": "SafarX introduces deterministic motorway distance and toll calculations, an isolated backend document vault for driver verification that strictly hides identity documents from public web routes, and a transparent dispatch workflow with printable digital receipts.",
    "howItWorks": "Passengers select departure and destination cities or airport terminals, receiving an instant upfront fare estimate based on distance and motorway tolls. When a ride is booked, verified captains receive the journey in their driver portal. Administrators supervise the entire national fleet with a 10-KPI operations control centre.",
    "keyFeatures": [
      {
        "title": "Passenger Intercity & Airport Booking",
        "desc": "Instant upfront fare quotes across Pakistani motorways and airport terminals, live trip tracking, direct captain contact, and official printable PDF receipts."
      },
      {
        "title": "Driver Dashboard & 85% Earnings Ledger",
        "desc": "Complete 6-stage lifecycle state machine (Assigned → Accepted → On The Way → Arrived → In Progress → Completed) with real-time net earnings reconciliation."
      },
      {
        "title": "Administrator Operations Command Centre",
        "desc": "10-KPI national dispatch command centre, manual driver assignment modal, document verification inspection panel, and CSV export."
      },
      {
        "title": "NADRA CNIC Privacy Vault",
        "desc": "Sensitive identity documents are stored in an isolated private directory that is never served through public static routes, accessible only via authenticated RBAC endpoints."
      }
    ],
    "frontendArchitecture": "Component-driven React 19 architecture with Context API (Auth, Booking, Notifications), Tailwind CSS for responsive styling, and modular modals for journey receipt generation and driver profile verification.",
    "backendArchitecture": "Modular Express.js layered architecture separating controllers, services, database repositories, and security middleware. Enforces strict RBAC distinguishing passengers, captains, and administrators.",
    "database": "High-performance SQLite configured with Write-Ahead Logging (WAL mode), PRAGMA foreign_keys = ON, indexed lookup tables, and automatic seed migrations.",
    "apisAndIntegrations": "Motorway distance & toll matrix engine, PDF receipt generation, and authenticated private document streaming endpoints.",
    "projectArchitecture": "Client-Server decoupling: React 19 SPA communicates via REST JSON API with Express backend backed by SQLite persistence and local encrypted storage.",
    "developmentHighlights": "Integrated end-to-end acceptance tests, sub-millisecond local SQLite query latencies, and 100% test coverage on role-based authentication middleware.",
    "challenges": "Safeguarding driver CNIC photos from public scraping while maintaining fast document verification in the admin review interface. Solved via a private storage stream endpoint guarded by JWT and role authorization middleware."
  },
  {
    "id": "quranlens",
    "title": "QuranLens — AI-Powered Quran Learning & Tafsir Platform",
    "shortTitle": "QuranLens",
    "tagline": "AI-powered Quranic exploration with Urdu translations, deep Tafsir, scientific perspectives, and LLM reasoning",
    "category": "AI & LLM",
    "featured": true,
    "repoUrl": "https://github.com/danishalipny-pixel/QuranLens",
    "liveDemoUrl": null,
    "primaryImage": "/assets/projects/quranlens-hero.png",
    "additionalImages": [
      "/assets/projects/quranlens-icon.webp"
    ],
    "languages": [
      {
        "name": "JavaScript",
        "percentage": 98.5,
        "bytes": 599361
      },
      {
        "name": "CSS",
        "percentage": 0.9,
        "bytes": 5608
      },
      {
        "name": "HTML",
        "percentage": 0.6,
        "bytes": 3625
      }
    ],
    "techStack": {
      "frontendFramework": "React 18",
      "buildTool": "Vite",
      "styling": "Tailwind CSS with RTL Urdu Typography",
      "icons": "Lucide React",
      "backendRuntime": "Node.js",
      "backendFramework": "Express.js",
      "database": "MongoDB",
      "aiIntegrations": "Large Language Model (LLM) Contextual API for theological and scientific queries",
      "features": "PWA support, offline caching, audio recitation hooks"
    },
    "overview": {
      "summary": "QuranLens is an intelligent digital Quran study companion offering comprehensive access to all 114 Surahs with Urdu translations, Tafsir, scientific parallels, and an interactive conversational AI tutor.",
      "purpose": "Created to bridge traditional scripture comprehension with modern interactive AI explanations, providing an accessible, authentic Urdu-first educational interface."
    },
    "theProblem": "Traditional digital Quran applications often present static scanned pages or archaic translations with no contextual explanation, leaving modern learners without answers to scientific questions or real-world ethical parallels.",
    "theSolution": "QuranLens pairs authentic classical exegesis with an interactive Large Language Model (LLM) reasoning layer, delivering real-time contextual explanations, scientific parallels, and linguistic breakdowns within a responsive Urdu-first interface.",
    "howItWorks": "Users select any of the 114 Surahs to explore Ayahs rendered in calligraphic Arabic with parallel Urdu translations. Clicking on an Ayah opens Tafsir commentary, scientific references, or triggers the AI explanation assistant which streams authoritative, contextually grounded answers.",
    "keyFeatures": [
      {
        "title": "Complete 114 Surah Catalog",
        "desc": "Seamless navigation through all 114 Surahs with Meccan/Medinan indicators, verse counts, and thematic summaries."
      },
      {
        "title": "Urdu-First Typography & RTL Layout",
        "desc": "Handcrafted Nastaliq and Naskh typography pairings with optimized reading layouts and dark/light reading modes."
      },
      {
        "title": "Interactive LLM-Powered Explanations",
        "desc": "Users can ask questions about specific Ayahs to receive contextual historical background, ethical takeaways, and linguistic nuances."
      },
      {
        "title": "Scientific & Modern Perspectives",
        "desc": "Curated comparative insights correlating Quranic verses with contemporary scientific observations and astronomical references."
      },
      {
        "title": "Ayah-by-Ayah Tafsir Breakdown",
        "desc": "Deep scholarly exegesis aggregated from authoritative classical sources rendered in an intuitive accordion interface."
      },
      {
        "title": "Progressive Web App (PWA)",
        "desc": "Service worker integration and mobile touch optimization enabling quick installation and responsive reading on smartphones."
      }
    ],
    "frontendArchitecture": "Built with React and Vite featuring RTL (Right-to-Left) directional styling natively supported in Tailwind CSS. State is managed through lightweight custom hooks with local storage persistence for reading progress and bookmarks.",
    "backendArchitecture": "Node.js and Express RESTful API managing Quran text corpora, Tafsir records, and a streaming proxy to LLM endpoints to handle user inquiries with context caching.",
    "database": "MongoDB storing structured Surah documents, Ayah-by-Ayah translations, tafsir commentaries, and cached AI query responses for low-latency retrieval.",
    "apisAndIntegrations": "OpenAI / LLM API endpoint for streaming completions, Quranic text corpus REST endpoints, and Web Audio API integration.",
    "projectArchitecture": "Single Page Application with PWA service worker caching static scripture text locally, connected to an Express API that proxies LLM prompts with custom theological guardrails.",
    "developmentHighlights": "Created an Urdu-first responsive typographical system with zero font layout stutter, and prompt-engineered strict anti-hallucination verification bounds.",
    "challenges": "Handling Right-to-Left complex script rendering alongside mixed English/Urdu technical terms. Overcome through custom bidirectional CSS font stacks and character isolation boundaries.",
    "myRole": "Full Stack Engineer — Responsible for system architecture, frontend UI implementation, API integrations, and database design."
  },
  {
    "id": "danfez-lift",
    "title": "Danfez Lift Management — Smart IoT Elevator Platform & Android App",
    "shortTitle": "Danfez Lift Management",
    "tagline": "Real-time elevator fleet monitoring, WebSocket telemetry, automated fault triage, and standalone Android APK",
    "category": "Enterprise Systems",
    "featured": true,
    "repoUrl": "https://github.com/danishalipny-pixel/Danfez-Lift-Management",
    "liveDemoUrl": null,
    "primaryImage": "/assets/projects/danfez-splash.webp",
    "additionalImages": [
      "/assets/projects/danfez-icon.webp"
    ],
    "languages": [
      {
        "name": "HTML",
        "percentage": 51.6,
        "bytes": 74520
      },
      {
        "name": "Python",
        "percentage": 35.4,
        "bytes": 51100
      },
      {
        "name": "JavaScript",
        "percentage": 9.9,
        "bytes": 14280
      },
      {
        "name": "CSS",
        "percentage": 2.8,
        "bytes": 4040
      },
      {
        "name": "Java",
        "percentage": 0.3,
        "bytes": 430
      }
    ],
    "techStack": {
      "backendFramework": "FastAPI (Python 3.12)",
      "server": "Uvicorn ASGI",
      "telemetry": "WebSockets for real-time live data streaming",
      "database": "SQLite with SQLAlchemy ORM",
      "serialization": "Pydantic v2",
      "mobilePackaging": "Capacitor 8 (Native Android APK, Java 17, Android SDK 34)",
      "frontendCharts": "Chart.js for fleet uptime and fault analytics",
      "security": "PyJWT token authentication, bcrypt cost factor 12"
    },
    "overview": {
      "summary": "Danfez Lift Management System is an industrial-grade elevator monitoring and maintenance management platform engineered for facility engineers, elevator technicians, and building administrators.",
      "purpose": "Built to transition elevator maintenance from reactive repairs to predictive telemetry monitoring and streamlined work order lifecycles."
    },
    "theProblem": "Traditional elevator maintenance relies on physical logbooks and delayed phone dispatches when breakdowns occur, causing extended cabin downtime and elevated safety risks.",
    "theSolution": "An IoT-enabled platform that streams continuous elevator telemetry over WebSockets, automatically triggers fault alerts when sensors detect anomalies, dispatches technicians according to specialization, and offers an Android APK for field engineers.",
    "howItWorks": "Elevator physics simulators or physical IoT gateways transmit real-time telemetry (floor, speed, door status, load, temperature) to a FastAPI backend. WebSocket connections push instantaneous position changes to the control dashboard. When a fault occurs, an emergency ticket is dispatched to available technicians who can acknowledge and resolve it via their mobile Android APK.",
    "keyFeatures": [
      {
        "title": "Live Elevator Fleet Telemetry",
        "desc": "Real-time cabin position, travel velocity, direction indicators, door state, load weight percentages, and motor temperature metrics."
      },
      {
        "title": "WebSocket Real-Time Streaming",
        "desc": "Bi-directional WebSocket feeds push instantaneous floor changes and alarm states without client polling."
      },
      {
        "title": "Interactive Fault & Fleet Analytics",
        "desc": "Chart.js visualizations for fault severity breakdowns, maintenance ticket resolution velocities, and 6-month uptime trends."
      },
      {
        "title": "Work Order Lifecycle Management",
        "desc": "Full maintenance flow from ticket creation, priority setting (Critical, High, Medium, Low), to technician dispatch and resolution signoff."
      },
      {
        "title": "Native Android APK Distribution",
        "desc": "Packaged with Capacitor and compiled via Gradle into a standalone release APK for field technicians."
      },
      {
        "title": "Role-Based Access Control (RBAC)",
        "desc": "Granular roles for Administrator, Field Technician, and Building Manager with JWT session revocation."
      }
    ],
    "frontendArchitecture": "Mobile-first responsive dashboard designed for field conditions with bottom touch navigation, quick-action cards, safe-area insets, and offline data buffering.",
    "backendArchitecture": "High-throughput asynchronous FastAPI application utilizing Python asyncio and WebSockets. Modular endpoint routers handle lifts, faults, tickets, users, and audit logs.",
    "database": "Relational schema managed through SQLAlchemy models with automatic migration and demo dataset seeding.",
    "apisAndIntegrations": "WebSocket real-time streaming endpoint (`/ws/telemetry`), RESTful CRUD endpoints for lifts, tickets, and user authentication, and Chart.js analytics bindings.",
    "projectArchitecture": "Hybrid architecture combining an asynchronous Python FastAPI ASGI server with a hybrid Web/Capacitor client compiled directly to native Android ARM/x86 APK.",
    "developmentHighlights": "Engineered a real-time elevator physics simulator running at 10Hz, sub-50ms WebSocket latency, and compiled release APK ready for Android 8.0+ devices.",
    "challenges": "Synchronizing high-frequency WebSocket updates on mobile devices without battery drain or UI micro-stutters. Resolved through requestAnimationFrame UI batching and deadband telemetry filtering.",
    "myRole": "Full Stack Engineer — Responsible for system architecture, frontend UI implementation, API integrations, and database design."
  },
  {
    "id": "novacare",
    "title": "NovaCare Medical Center — Full-Stack Hospital Information System",
    "shortTitle": "NovaCare",
    "tagline": "Enterprise clinical management system with multi-role RBAC, electronic medical records, and Docker containerization",
    "category": "Enterprise Systems",
    "featured": true,
    "repoUrl": "https://github.com/danishalipny-pixel/NovaCare-Medical-Center",
    "liveDemoUrl": null,
    "primaryImage": "/assets/projects/novacare-hero.png",
    "additionalImages": [],
    "languages": [
      {
        "name": "JavaScript",
        "percentage": 69.2,
        "bytes": 74580
      },
      {
        "name": "HTML",
        "percentage": 29.4,
        "bytes": 31690
      },
      {
        "name": "CSS",
        "percentage": 1,
        "bytes": 1080
      },
      {
        "name": "Dockerfile",
        "percentage": 0.3,
        "bytes": 320
      }
    ],
    "techStack": {
      "backendRuntime": "Node.js",
      "backendFramework": "Express.js REST API",
      "database": "MongoDB with Mongoose ORM / Transactions",
      "containerization": "Docker & docker-compose",
      "devOps": "GitHub Actions CI/CD Pipeline",
      "security": "JWT authentication, Role-Based Access Control (RBAC), bcrypt, rate limiting",
      "architecture": "Layered MVC Architecture (Controllers, Models, Middleware, Config)"
    },
    "overview": {
      "summary": "NovaCare Medical Center is a robust, full-stack hospital management platform supporting healthcare providers across outpatient admissions, electronic medical records, pharmacy dispensing, and financial billing.",
      "purpose": "Engineered to streamline inpatient/outpatient hospital workflows, prevent medication dispatch errors, and ensure role-separated data access for clinical staff."
    },
    "theProblem": "Hospitals struggle with disconnected departmental silos where patient records, pharmacy inventories, doctor schedules, and billing cashiers are handled on separate disconnected software.",
    "theSolution": "NovaCare establishes a centralized clinical ledger where patient admissions automatically populate doctor queues, digital prescriptions instantly deduct pharmacy stock, and discharge bills aggregate all procedures with zero manual re-entry.",
    "howItWorks": "Upon patient registration, a digital EMR is initiated. Doctors view assigned appointments, enter clinical diagnoses, and prescribe medications. Pharmacists fulfill digital prescriptions with automated stock validation. All departmental charges roll into the billing module for unified invoice generation.",
    "keyFeatures": [
      {
        "title": "Multi-Tier Role-Based Security",
        "desc": "Dedicated access tiers for Administrators, Doctors, Nurses, Pharmacists, Laboratory Specialists, and Patients."
      },
      {
        "title": "Electronic Medical Records (EMR)",
        "desc": "Comprehensive clinical history tracking, vital signs monitoring, allergies, and diagnostic test records."
      },
      {
        "title": "Doctor Scheduling & OPD Appointments",
        "desc": "Real-time doctor calendar availability, slot booking, queue status, and appointment reminders."
      },
      {
        "title": "Bed & Ward Management",
        "desc": "Live occupancy maps for ICU, General Wards, and Private Rooms with automated admission and discharge workflows."
      },
      {
        "title": "Pharmacy & Prescription Dispensing",
        "desc": "Digital e-prescriptions connected directly to pharmacy stock decrementing and dosage verification."
      },
      {
        "title": "Financial Billing & Invoicing",
        "desc": "Consolidated patient invoices calculating doctor fees, lab tests, bed duration, and pharmacy items with payment receipts."
      }
    ],
    "frontendArchitecture": "Modular, clean clinical dashboard with dedicated views for doctors, triage nurses, and front-desk receptionists with responsive data tables and quick search.",
    "backendArchitecture": "Express.js RESTful API structured into dedicated domain controllers (`appointmentController`, `patientController`, `doctorController`, `emrController`, `billingController`, `pharmacyController`, `bedController`).",
    "database": "MongoDB database with Mongoose schemas enforcing referential validation between patients, appointments, treatments, and medical bills.",
    "apisAndIntegrations": "Comprehensive REST API with over 30 verified endpoints covering auth, appointments, EMR, pharmacy, and billing. Docker containerization for one-click deployment.",
    "projectArchitecture": "Layered MVC architecture isolated in Docker containers, integrated with automated GitHub Actions CI/CD workflows.",
    "developmentHighlights": "Implemented multi-document ACID transactions ensuring synchronized prescription fulfillment and financial billing without stock leakage.",
    "challenges": "Ensuring transactional consistency across pharmacy stock deduction and billing creation during prescription fulfillment. Handled via multi-document ACID transactions.",
    "myRole": "Full Stack Engineer — Responsible for system architecture, frontend UI implementation, API integrations, and database design."
  },
  {
    "id": "apex-pos",
    "title": "Apex Inventory & POS Management System",
    "shortTitle": "Apex POS",
    "tagline": "Modern retail POS terminal with real-time stock tracking, SQLite storage, and sales invoice generation",
    "category": "Enterprise Systems",
    "featured": true,
    "repoUrl": "https://github.com/danishalipny-pixel/Apex-Inventory-Pos-Managment-System",
    "liveDemoUrl": null,
    "primaryImage": "/assets/projects/apex-pos-hero.png",
    "additionalImages": [],
    "languages": [
      {
        "name": "JavaScript",
        "percentage": 70.3,
        "bytes": 48210
      },
      {
        "name": "HTML",
        "percentage": 28,
        "bytes": 19200
      },
      {
        "name": "CSS",
        "percentage": 1.8,
        "bytes": 1235
      }
    ],
    "techStack": {
      "backendRuntime": "Node.js",
      "backendFramework": "Express.js",
      "database": "SQLite (data/inventory.db) with automatic seed schema",
      "frontend": "Modern JavaScript (ES6+), Responsive CSS, Dynamic DOM rendering",
      "features": "Barcode lookup, receipt generation, CSV stock export"
    },
    "overview": {
      "summary": "Apex Inventory & POS Management System is a lightweight, responsive retail solution designed for point-of-sale operations, inventory monitoring, and supplier bookkeeping.",
      "purpose": "Developed to provide small and medium retail businesses with a zero-configuration, reliable POS terminal requiring minimal hardware resources."
    },
    "theProblem": "Small retail shops often cannot afford bulky enterprise ERP subscriptions and suffer from slow, cloud-dependent cashier software that fails when internet connectivity drops.",
    "theSolution": "A lightweight, zero-configuration local POS terminal backed by an embedded SQLite database that executes high-speed barcode checkout, manages inventory reorders, and prints receipts offline.",
    "howItWorks": "Cashiers enter SKUs or scan barcodes to instantly add products to the dynamic checkout cart. Real-time tax and discounts are computed, and confirming payment deducts inventory and triggers receipt printing.",
    "keyFeatures": [
      {
        "title": "High-Speed POS Checkout Terminal",
        "desc": "Instant product search by SKU, name, or barcode with keyboard shortcuts for rapid checkout."
      },
      {
        "title": "Dynamic Cart & Receipt Calculation",
        "desc": "Real-time tax calculation, discount allowances, subtotal computation, and print-ready thermal receipt layout."
      },
      {
        "title": "Low-Stock Alerts & Thresholds",
        "desc": "Automated warning badges when catalog items fall below configurable reorder levels."
      },
      {
        "title": "Supplier & Purchase Order Tracking",
        "desc": "Record vendor shipments, track inbound stock orders, and monitor accounts payable."
      },
      {
        "title": "Customer Ledgers & Credit History",
        "desc": "Manage repeat customer profiles, credit purchases, and payment settlement histories."
      },
      {
        "title": "Business Performance Reporting",
        "desc": "Daily sales summaries, top-selling product metrics, and gross margin profit analysis."
      }
    ],
    "frontendArchitecture": "Single-page responsive cashier UI with rapid search inputs, interactive cart tables, modal dialogues, and print stylesheets.",
    "backendArchitecture": "Express.js REST service handling synchronous checkout requests, database transactions, and data seeding scripts (`db/seed.js`).",
    "database": "Embedded SQLite database stored in `data/inventory.db`, offering robust relational ACID guarantees with zero server overhead.",
    "apisAndIntegrations": "Local REST endpoints for product lookups, invoice generation, customer ledgers, and database backups.",
    "projectArchitecture": "Client-Server single-binary architecture with Node.js serving static cashier assets and binding directly to the local SQLite database file.",
    "developmentHighlights": "Created an input buffer listener handling rapid USB barcode scanner keystrokes without UI lag or form submit collisions.",
    "challenges": "Handling barcode scanner USB input bursts without triggering browser navigation hotkeys. Implemented an input buffer timer to intercept barcode inputs.",
    "myRole": "Full Stack Engineer — Responsible for system architecture, frontend UI implementation, API integrations, and database design."
  },
  {
    "id": "j-transport",
    "title": "J Transport Group LTD — Airport Transfer & Chauffeur Booking",
    "shortTitle": "J Transport Group",
    "tagline": "Commercial airport transfer platform servicing Heathrow, Gatwick, and Stansted with fleet dispatch",
    "category": "Frontend",
    "featured": true,
    "repoUrl": "https://github.com/danishalipny-pixel/jtransportgroup.com",
    "liveDemoUrl": null,
    "primaryImage": "/assets/projects/jtransport-hero.webp",
    "additionalImages": [
      "/assets/projects/jtransport-corporate.webp",
      "/assets/projects/jtransport-tours.webp",
      "/assets/projects/jtransport-logo.webp"
    ],
    "languages": [
      {
        "name": "JavaScript",
        "percentage": 52.6,
        "bytes": 35420
      },
      {
        "name": "HTML",
        "percentage": 34.5,
        "bytes": 23210
      },
      {
        "name": "CSS",
        "percentage": 12.9,
        "bytes": 8680
      }
    ],
    "techStack": {
      "frontend": "Modern JavaScript, HTML5, CSS3, Responsive Grid",
      "services": "Airport Transfers (Heathrow, Gatwick, Stansted), Corporate Travel, London Tours",
      "fleet": "Saloon, Estate, Executive MPV, 12/14-Seater Minibuses",
      "integrations": "Fare Estimator, Child Seat Add-on Selection, Booking Inquiries"
    },
    "overview": {
      "summary": "J Transport Group LTD is a commercial chauffeur and airport transfer booking platform built for executive travelers and families requiring reliable transfers across London and UK airports.",
      "purpose": "Created to deliver a dependable digital portal for booking corporate transport and airport journeys with transparent fleet pricing."
    },
    "theProblem": "Executive travelers and large traveling families in London often experience uncertain pricing and lack vehicle capacity clarity when booking transfers to major airports.",
    "theSolution": "A clean, modern commercial web platform featuring visual vehicle capacity selectors, transparent airport transfer quotes, child seat add-on toggles, and customized London tour itineraries.",
    "howItWorks": "Passengers select their pickup airport, destination, passenger count, and luggage requirements. The system displays matching fleet options (Saloon, Estate, MPV, Minibus) with transparent rates, allowing immediate booking inquiry dispatch.",
    "keyFeatures": [
      {
        "title": "UK Airport Transfer Booking",
        "desc": "Dedicated portals for Heathrow, Gatwick, Stansted, Luton, and London City airports."
      },
      {
        "title": "Fleet Capacity Selector",
        "desc": "Visual specifications for Saloons, Executive MPVs, and 14-seater minibuses detailing luggage and passenger limits."
      },
      {
        "title": "Custom London Private Tours",
        "desc": "Itinerary booking for private guided excursions to iconic landmarks including Ascot, Windsor, and Central London."
      },
      {
        "title": "Family Travel Add-ons",
        "desc": "Toggle child seats, booster seats, and toddler accessories directly within the booking request."
      }
    ],
    "frontendArchitecture": "Clean multi-page commercial layout with custom CSS responsive grids, optimized mobile booking drawers, and high-resolution fleet galleries.",
    "backendArchitecture": "Backend request processing for customer inquiries, reservation quotes, and automated confirmation dispatch.",
    "database": "Customer booking registry and corporate accounts database.",
    "apisAndIntegrations": "Fare estimation formulas, Google Maps routing distance calculations, and transactional email confirmations.",
    "projectArchitecture": "Static site generation with dynamic JavaScript widgets for fare calculations and mobile drawer navigation.",
    "developmentHighlights": "Over 400 real commercial photographic assets optimized for fast mobile rendering with zero Cumulative Layout Shift.",
    "challenges": "Optimizing dozens of high-resolution vehicle and landmark imagery assets for fast mobile loading on UK mobile networks. Solved through modern WebP image compression.",
    "myRole": "Frontend Architect — Designed and developed the responsive web platform for J Transport Group LTD airport transfer service."
  },
  {
    "id": "beacon-valley",
    "title": "Beacon Valley Management System — Comprehensive School ERP",
    "shortTitle": "Beacon Valley",
    "tagline": "Modern responsive school ERP managing student enrollments, faculty payroll, attendance, and academic records",
    "category": "Enterprise Systems",
    "featured": false,
    "repoUrl": "https://github.com/danishalipny-pixel/Beacon-Valley-Managment-system",
    "liveDemoUrl": null,
    "primaryImage": "/assets/projects/beacon-valley-graph.webp",
    "additionalImages": [],
    "languages": [
      {
        "name": "JavaScript",
        "percentage": 60.8,
        "bytes": 31200
      },
      {
        "name": "HTML",
        "percentage": 32.7,
        "bytes": 16780
      },
      {
        "name": "CSS",
        "percentage": 6.5,
        "bytes": 3340
      }
    ],
    "techStack": {
      "frontend": "Modular Vanilla JavaScript (academic.js, app.js), CSS3, Print CSS",
      "architecture": "Client-side state management with local persistence and export facilities",
      "features": "Fee collection, report card printing, faculty attendance, leave tracking"
    },
    "overview": {
      "summary": "Beacon Valley Management System is a comprehensive academic administrative system handling the complete lifecycle of students, teachers, fee structures, and attendance.",
      "purpose": "Designed to digitize school record-keeping, automate fee collection receipts, and eliminate administrative overhead."
    },
    "theProblem": "Educational institutions suffer from fragmented paper ledgers for attendance, fee slips, and term grades, resulting in frequent errors and delayed report card issuance.",
    "theSolution": "A unified administrative console that centralizes student profiles, calculates term GPAs, generates printable fee vouchers, and tracks faculty payroll with one-click printouts.",
    "howItWorks": "Administrators manage student admissions and class assignments. Teachers log daily attendance and term exam scores, which automatically compute GPA metrics for print-ready report cards.",
    "keyFeatures": [
      {
        "title": "Student Information System",
        "desc": "Registration, demographic records, emergency contacts, class allocations, and guardian records."
      },
      {
        "title": "Academic History & Report Cards",
        "desc": "Term exam grading, GPA computation, and formatted report card generation via custom print stylesheets."
      },
      {
        "title": "Fee Management & Slips",
        "desc": "Tuition billing, fine calculations, payment status toggling, and instant fee slip printing."
      },
      {
        "title": "Faculty Directory & Payroll",
        "desc": "Teacher department assignments, daily attendance logs, leave balances, and salary disbursement tracking."
      }
    ],
    "frontendArchitecture": "Component-structured JavaScript application separating core application logic (`app.js`) from academic computation modules (`academic.js`).",
    "backendArchitecture": "Lightweight client-side data management with clean API hooks ready for server synchronizations.",
    "database": "Structured JSON records with local browser caching and exportable CSV formats.",
    "apisAndIntegrations": "Export to CSV endpoints, thermal receipt printing, and browser storage interfaces.",
    "projectArchitecture": "Lightweight client-side ERP with modular separation between academic logic, UI controllers, and print formatters.",
    "developmentHighlights": "Created clean print stylesheets ensuring pixel-perfect paper margins when printing fee slips and academic transcripts.",
    "challenges": "Handling complex multi-term grade weighting calculations without rounding discrepancies across report cards.",
    "myRole": "Full Stack Engineer — Responsible for system architecture, frontend UI implementation, API integrations, and database design."
  },
  {
    "id": "agentic-ai",
    "title": "Agentic AI & Conversational LLM Architectures",
    "shortTitle": "Agentic AI",
    "tagline": "Autonomous multi-turn AI agents, OpenAI API orchestration, and conversational assistants",
    "category": "AI & LLM",
    "featured": false,
    "repoUrl": "https://github.com/danishalipny-pixel/Danish-Rao",
    "liveDemoUrl": null,
    "primaryImage": null,
    "additionalImages": [],
    "languages": [
      {
        "name": "Python",
        "percentage": 100,
        "bytes": 15400
      }
    ],
    "techStack": {
      "programmingLanguage": "Python 3",
      "frameworks": "Flask / Python runtime",
      "aiIntegrations": "OpenAI API, LLM prompt engineering, function calling",
      "dataScience": "NumPy, Matplotlib for data visualization dashboards (`student_class_graph.py`, `advanced_lineplot.py`)"
    },
    "overview": {
      "summary": "A specialized series of Agentic AI projects exploring autonomous tool-use, multi-turn reasoning agents, conversational assistants, and data visualization pipelines.",
      "purpose": "Developed as part of advanced Agentic AI training at PNY Trainings to explore LLM orchestration, structured output generation, and automated workflows."
    },
    "theProblem": "Standard LLM chatbots are passive and cannot autonomously query databases, generate verifiable data plots, or execute multi-turn problem-solving routines without hallucinating.",
    "theSolution": "Agentic AI architectures that wrap LLMs in autonomous execution loops, empowering them to invoke Python data science tools (NumPy, Matplotlib) and return verified structured outputs.",
    "howItWorks": "When given a complex natural language prompt, the agent reasons through necessary sub-tasks, generates Python visualization scripts, executes them in a sandboxed runtime, and presents graphs with contextual explanations.",
    "keyFeatures": [
      {
        "title": "Multi-Turn Conversational Chatbot",
        "desc": "Context-preserving conversational pipeline (`chatbot.py`, `app.py`) with memory buffer."
      },
      {
        "title": "Agentic Tool Execution",
        "desc": "Prompt-engineered autonomous workflows connecting LLMs to Python computational routines."
      },
      {
        "title": "Data Visualization & Graph Generation",
        "desc": "Automated script generation creating clean multi-variable line plots and statistical dashboards."
      }
    ],
    "frontendArchitecture": "Interactive chat web interface with real-time response rendering and message history preservation.",
    "backendArchitecture": "Flask Python application managing LLM completions, context streaming, and configuration management.",
    "database": "Session state persistence and query history storage.",
    "apisAndIntegrations": "OpenAI Chat Completions API with function calling, Python subprocess execution, and Matplotlib figure rendering.",
    "projectArchitecture": "Agent loop architecture: User query -> Reasoning prompt -> Tool invocation (Python script) -> Output validation -> Final user presentation.",
    "developmentHighlights": "Built automated data plotting scripts (`vip_lineplot.py`, `navy_dashboard.py`) integrated into autonomous conversational flows.",
    "challenges": "Maintaining conversational coherence across multi-turn exchanges while adhering to strict system role constraints.",
    "myRole": "Full Stack Engineer — Responsible for system architecture, frontend UI implementation, API integrations, and database design."
  },
  {
    "id": "atmosphere",
    "title": "Atmosphere — Modern Weather Forecast Application",
    "shortTitle": "Atmosphere",
    "tagline": "Minimalist weather application with live meteorological data and clean dynamic visual styling",
    "category": "Frontend",
    "featured": false,
    "repoUrl": "https://github.com/danishalipny-pixel/Atmosphere",
    "liveDemoUrl": null,
    "primaryImage": "/assets/projects/atmosphere-hero.png",
    "additionalImages": [],
    "languages": [
      {
        "name": "JavaScript",
        "percentage": 85,
        "bytes": 14200
      },
      {
        "name": "CSS",
        "percentage": 12,
        "bytes": 2010
      },
      {
        "name": "HTML",
        "percentage": 3,
        "bytes": 500
      }
    ],
    "techStack": {
      "frontendFramework": "React + Vite",
      "styling": "Modern Responsive CSS3",
      "icons": "Custom SVG Weather Icons",
      "api": "OpenWeather REST API"
    },
    "overview": {
      "summary": "Atmosphere is an intuitive weather web application providing current atmospheric metrics, 5-day forecasts, and dynamic weather visuals based on user location or worldwide search.",
      "purpose": "Engineered to deliver clean, fast weather intelligence with minimal loading latency and high visual clarity."
    },
    "theProblem": "Most consumer weather sites are congested with intrusive banner advertisements, heavy tracking scripts, and slow initial load times.",
    "theSolution": "Atmosphere strips away visual noise in favor of a clean, responsive layout focusing on temperature, humidity, wind velocity, and condition trends with instant location search.",
    "howItWorks": "The app queries the browser geolocation API to fetch current meteorological data, falling back to instant search for worldwide cities via the OpenWeather REST API.",
    "keyFeatures": [
      {
        "title": "Live Meteorological Metrics",
        "desc": "Current temperature, feels-like readings, atmospheric humidity, and wind speed."
      },
      {
        "title": "Global City Search",
        "desc": "Quick lookup for worldwide metropolitan areas with instant weather retrieval."
      },
      {
        "title": "Dynamic Weather Icons",
        "desc": "Adaptive SVG icons corresponding to sunny, overcast, rain, and storm conditions."
      }
    ],
    "frontendArchitecture": "Vite-powered React component structure utilizing hooks for asynchronous API fetching and geolocation retrieval.",
    "backendArchitecture": "Client-side API requests with error boundaries handling network drops and invalid city inputs.",
    "database": "Client browser local storage for favorite cities.",
    "apisAndIntegrations": "OpenWeather REST API, Geolocation API, and SVG asset renderers.",
    "projectArchitecture": "Client-side reactive single-page application with caching in localStorage for instant reload performance.",
    "developmentHighlights": "Created responsive SVG meteorological weather condition icons adapting smoothly to ambient dark/light themes.",
    "challenges": "Graceful handling of rate-limited API responses and geolocation permission denials.",
    "myRole": "Full Stack Engineer — Responsible for system architecture, frontend UI implementation, API integrations, and database design."
  }
];
