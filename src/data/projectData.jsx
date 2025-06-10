const projectData = [
  {
    id: "web",
    category: "Web Applications",
    projects: [
      {
        title: "Dashboard Analytics Pro",
        description:
          "Web app responsif untuk visualisasi dan analisis data penjualan real-time, dilengkapi dengan filter canggih, chart interaktif, dan fitur ekspor laporan ke berbagai format.",
        tech: ["React", "Redux", "Chart.js", "Node.js", "Express", "PostgreSQL"],
        link: "https://dashboard-pro-example.vercel.app",
        repo: "https://github.com/budi/dashboard-analytics-pro",
      },
      {
        title: "Global E-Commerce Store",
        description:
          "Platform e-commerce lengkap dengan manajemen produk, keranjang belanja, proses checkout multi-langkah, integrasi pembayaran ganda (Stripe, PayPal), dan dasbor admin.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma", "PostgreSQL", "NextAuth.js"],
        link: "https://global-shop-example.vercel.app",
        repo: "https://github.com/budi/global-ecommerce-store",
      },
      {
        title: "Real-time Chat App",
        description:
          "Aplikasi chat berbasis web dengan fitur pesan instan, grup chat, notifikasi, dan dukungan untuk berbagi file, dibangun dengan WebSockets.",
        tech: ["Vue.js", "Socket.IO", "Node.js", "MongoDB", "Express"],
        link: "https://chat-app-example.vercel.app",
        repo: "https://github.com/budi/realtime-chat-app",
      },
      {
        title: "Task Management System",
        description:
          "Sistem manajemen tugas kolaboratif untuk tim, dengan fitur drag-and-drop, penetapan tugas, deadline, dan pelaporan progres. Mendukung otentikasi pengguna.",
        tech: ["Angular", "RxJS", "NestJS", "TypeORM", "MySQL", "JWT"],
        link: "https://task-manager-example.vercel.app",
        repo: "https://github.com/budi/task-management-system",
      },
    ],
  },
  {
    id: "mobile",
    category: "Mobile Applications",
    projects: [
      {
        title: "Fitness Tracker App",
        description:
          "Aplikasi mobile untuk melacak aktivitas fisik, menghitung kalori, mencatat asupan makanan, dan memantau progres latihan dengan grafik intuitif.",
        tech: ["React Native", "Expo", "Redux Toolkit", "Firebase Firestore", "Authentication"],
        link: "https://expo.dev/@budi/fitness-tracker",
        repo: "https://github.com/budi/fitness-tracker-app",
      },
      {
        title: "Recipe Finder",
        description:
          "Aplikasi pencarian resep makanan berbasis API dengan fitur filter bahan, bookmark resep favorit, dan instruksi memasak langkah demi langkah.",
        tech: ["Flutter", "Dart", "REST API", "Provider State Management"],
        link: "https://github.com/budi/recipe-finder-flutter/releases", // Link ke rilis APK/IPA
        repo: "https://github.com/budi/recipe-finder-flutter",
      },
      {
        title: "Travel Buddy",
        description:
          "Aplikasi perencana perjalanan yang memungkinkan pengguna membuat itinerary, menemukan tempat menarik terdekat, dan berbagi rencana dengan teman.",
        tech: ["React Native", "Google Maps API", "SQLite", "Expo Go"],
        link: "https://expo.dev/@budi/travel-buddy",
        repo: "https://github.com/budi/travel-buddy-app",
      },
    ],
  },
  {
    id: "data-ai",
    category: "Data Science & AI",
    projects: [
      {
        title: "Advanced Emotion Detection",
        description:
          "Model deep learning untuk deteksi emosi wajah dari gambar atau video secara real-time, menggunakan arsitektur CNN dan dataset yang diperluas, dengan deploy melalui API.",
        tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask API"],
        link: "https://budi-ai-emotions.streamlit.app", // Contoh link demo Streamlit
        repo: "https://github.com/budi/advanced-emotion-detection",
      },
      {
        title: "Customer Churn Prediction",
        description:
          "Proyek analisis data dan machine learning untuk memprediksi pelanggan yang berpotensi churn menggunakan algoritma klasifikasi seperti Random Forest dan Gradient Boosting.",
        tech: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook", "Matplotlib"],
        link: "https://github.com/budi/customer-churn-prediction#results", // Link ke bagian hasil di README
        repo: "https://github.com/budi/customer-churn-prediction",
      },
      {
        title: "Image Style Transfer",
        description:
          "Implementasi model Neural Style Transfer yang memungkinkan pengguna menerapkan gaya artistik dari satu gambar ke gambar lainnya.",
        tech: ["Python", "PyTorch", "PIL", "Streamlit"],
        link: "https://imagestyle-transfer-example.streamlit.app",
        repo: "https://github.com/budi/image-style-transfer",
      },
    ],
  },
  {
    id: "backend-api",
    category: "Backend & API Services",
    projects: [
      {
        title: "Microservices E-wallet System",
        description:
          "Sistem e-wallet berbasis microservices dengan layanan terpisah untuk otentikasi, transaksi, dan notifikasi, menggunakan arsitektur RESTful API dan RabbitMQ.",
        tech: ["Node.js", "Express", "Kafka", "MongoDB", "Docker", "Kubernetes"],
        link: "https://github.com/budi/e-wallet-microservices#api-docs", // Link ke dokumentasi API
        repo: "https://github.com/budi/e-wallet-microservices",
      },
      {
        title: "GraphQL Blog API",
        description:
          "API backend untuk aplikasi blog dengan fungsionalitas CRUD lengkap, otentikasi berbasis token, dan dukungan untuk nested queries menggunakan GraphQL.",
        tech: ["Node.js", "Apollo Server", "GraphQL", "PostgreSQL", "Sequelize"],
        link: "https://github.com/budi/graphql-blog-api#playground",
        repo: "https://github.com/budi/graphql-blog-api",
      },
    ],
  },
  {
    id: "wordpress",
    category: "WordPress Development",
    projects: [
      {
        title: "Custom Theme for Corporate Site",
        description:
          "Pengembangan tema WordPress kustom dari nol untuk situs web perusahaan, berfokus pada performa, SEO, dan kemudahan pengelolaan konten.",
        tech: ["WordPress", "PHP", "ACF Pro", "SCSS", "JavaScript"],
        link: "https://corporate-site-example.com", // Contoh link live site
        repo: "https://github.com/budi/wp-corporate-theme",
      },
      {
        title: "E-learning Platform with LMS",
        description:
          "Situs e-learning berbasis WordPress dengan integrasi LMS (Learning Management System) untuk kursus online, manajemen pengguna, dan pelacakan progres.",
        tech: ["WordPress", "LearnDash", "WooCommerce", "Elementor Pro"],
        link: "https://elearning-academy.com",
        repo: "https://github.com/budi/wp-elearning-platform",
      },
    ],
  },
];

export { projectData };