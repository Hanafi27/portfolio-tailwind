const PortfolioData = {
  stats: [
    { value: "6+", label: "Proyek" },
    { value: "4", label: "Bidang" },
    { value: "2", label: "Sertifikasi" },
  ],
  experiences: [
    {
      period: "Desember 2025 - Februari 2026",
      role: "Web Developer Intern",
      place: "PT. Paragon Medika Pharma",
      icon: "briefcase",
      description:
        "Mengerjakan website company profile dan CMS untuk pengelolaan konten. Saya juga merapikan tampilan halaman agar alur akses pengguna lebih mudah.",
    },
    {
      period: "Juni 2023 - Agustus 2023",
      role: "WordPress Developer Intern",
      place: "CV Azmiaa88",
      icon: "globe",
      description:
        "Mengelola website WordPress untuk aktivitas bisnis, SEO dasar, dan akses katalog produk.",
    },
    {
      period: "Januari 2023 - April 2023",
      role: "Network Technician Intern",
      place: "CV Alfabet Network",
      icon: "network",
      description:
        "Melakukan instalasi perangkat keras, konfigurasi Wi-Fi, pemeliharaan jaringan, perbaikan kendala teknis, dan edukasi dasar kepada pelanggan.",
    },
  ],
  projects: [
    {
      title: "IoT Smart Farming (Neuro-Fuzzy Modeling)",
      period: "September 2024 - Februari 2025",
      role: "IoT & Data Analysis",
      icon: "chip",
      image:
        "img/smart-farming/ChatGPT%20Image%20Jul%2019,%202026,%2012_55_35%20AM.png",
      summary:
        "Sistem monitoring berbasis IoT menggunakan ESP32 dan sensor untuk akuisisi data real-time, analisis data, dan pemodelan ANFIS di MATLAB Simulink.",
      details: [
        "Mengembangkan perangkat monitoring berbasis ESP32 dan sensor untuk akuisisi data real-time.",
        "Melakukan preprocessing dan analisis data hasil pembacaan sensor.",
        "Membangun pemodelan ANFIS di MATLAB Simulink untuk evaluasi performa sensor dan pengembangan model prediktif.",
      ],
      stack: ["ESP32", "Sensor Integration", "ANFIS", "MATLAB Simulink"],
    },
    {
      title: "Predictive Maintenance Machine Manufacturing",
      period: "Januari 2025 - Maret 2025",
      role: "Machine Learning & Web Integration",
      icon: "chart",
      image: "img/predictive/predict4.png",
      summary:
        "Prototype predictive maintenance untuk mengklasifikasikan kondisi mesin manufaktur dan menampilkan risiko maintenance melalui dashboard web.",
      details: [
        "Mengklasifikasikan kondisi mesin berdasarkan rotational speed, torque, air temperature, process temperature, dan tool wear.",
        "Menggunakan KNN untuk prediksi kondisi mesin dan probabilitas risiko maintenance.",
        "Membangun Flask API, Node.js/Express, dashboard web, alert, dan riwayat prediksi.",
      ],
      stack: ["KNN", "Flask API", "Node.js", "Express", "Dashboard"],
    },
    {
      title: "Cassava Leaf Classification",
      period: "November 2025 - Januari 2026",
      role: "Deep Learning",
      icon: "chart",
      image: "img/deteksi%20daun/klasifikasi1.png",
      summary:
        "Model deep learning untuk klasifikasi citra daun singkong menjadi dua kategori, mulai dari persiapan dataset sampai deployment prototype.",
      details: [
        "Melakukan dataset preparation, image preprocessing, dan augmentation.",
        "Melatih model menggunakan PyTorch dan TensorFlow/Keras.",
        "Mengevaluasi model dan menyiapkan prototype deployment menggunakan Hugging Face Spaces.",
      ],
      stack: [
        "Computer Vision",
        "PyTorch",
        "TensorFlow/Keras",
        "Hugging Face Spaces",
      ],
    },
    {
      title: "IoT Electricity Monitoring (Real-Time Integration)",
      period: "Oktober 2021 - Desember 2021",
      role: "Internet of Things",
      icon: "bolt",
      image: "img/projects/electricity-monitoring.svg",
      summary:
        "Perangkat monitoring energi berbasis IoT yang terintegrasi dengan Telegram Bot untuk informasi konsumsi energi secara real-time.",
      details: [
        "Merancang perangkat monitoring energi berbasis IoT.",
        "Mengintegrasikan sistem dengan Telegram Bot untuk notifikasi real-time.",
        "Menyediakan informasi konsumsi energi langsung ke perangkat pengguna.",
      ],
      stack: ["IoT", "Telegram Bot", "Sensor Integration", "Real-Time Data"],
    },
    {
      title: "Ciwidey Agro Farm Management System",
      period: "Maret 2025 - Juni 2025",
      role: "Web Developer",
      icon: "briefcase",
      image: "img/agro/landing-page.png",
      summary:
        "Sistem manajemen web untuk mendukung operasional dan administrasi farm, dari karyawan hingga laporan keuangan.",
      details: [
        "Mengembangkan manajemen karyawan, absensi, payroll, dan pencatatan pendapatan susu.",
        "Membangun fitur pengajuan dana, approval workflow, dan laporan keuangan.",
        "Menggunakan Laravel, PHP, MySQL, Blade, Tailwind CSS, Vite, dan JavaScript.",
      ],
      stack: ["Laravel", "PHP", "MySQL", "Blade", "Tailwind CSS", "Vite"],
    },
    {
      title: "Menggala Ranch - E-Ticketing Website",
      period: "Oktober 2025 - Desember 2025",
      role: "Web Developer",
      icon: "ticket",
      image: "img/menggala/dashboard.png",
      summary:
        "Sistem e-ticketing berbasis Laravel untuk autentikasi pengguna, pembelian tiket, admin panel, dan kesiapan integrasi pembayaran.",
      details: [
        "Mengembangkan autentikasi pengguna, proses pembelian tiket, dan admin panel.",
        "Menyiapkan database migration dan JWT authentication.",
        "Mempersiapkan integrasi payment gateway dan social login.",
      ],
      stack: ["Laravel", "JWT", "MySQL", "Payment Gateway", "Social Login"],
    },
  ],
  hardSkills: [
    { name: "ESP32", icon: "esp32", group: "IoT" },
    { name: "Sensor Integration", icon: "sensor", group: "Embedded Systems" },
    { name: "ANFIS", icon: "matlab", group: "Neuro-Fuzzy Modeling" },
    { name: "KNN", icon: "knn", group: "Machine Learning" },
    { name: "Computer Vision", icon: "vision", group: "Deep Learning" },
    { name: "PyTorch", icon: "pytorch", group: "Deep Learning" },
    { name: "TensorFlow/Keras", icon: "tensorflow", group: "Deep Learning" },
    { name: "Python", icon: "python", group: "Programming" },
    { name: "Flask", icon: "flask", group: "API" },
    { name: "Node.js", icon: "node", group: "Backend" },
    { name: "Express", icon: "express", group: "Backend" },
    { name: "Laravel", icon: "laravel", group: "Web Framework" },
    { name: "REST API", icon: "rest", group: "Integration" },
    { name: "MySQL", icon: "mysql", group: "Database" },
    { name: "Git & GitHub", icon: "git", group: "Version Control" },
    { name: "Mikrotik", icon: "mikrotik", group: "Networking" },
    { name: "Fiber Optic", icon: "fiber", group: "Networking" },
    { name: "PLC", icon: "plc", group: "Industrial Automation" },
  ],
  contacts: [
    {
      label: "Email",
      value: "hanafiilham333@gmail.com",
      href: "mailto:hanafiilham333@gmail.com",
      icon: "mail",
    },
    {
      label: "Telepon",
      value: "+62 822 1550 9858",
      href: "tel:+6282215509858",
      icon: "phone",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/hanafi-ilham-1513b8226",
      href: "https://www.linkedin.com/in/hanafi-ilham-1513b8226",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      value: "github.com/Hanafi27",
      href: "https://github.com/Hanafi27",
      icon: "github",
    },
  ],
};
