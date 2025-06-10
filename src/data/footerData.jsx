const footerData = {

  brand: {
    name: "Budi Santoso",
    tagline: "Membangun Solusi Digital Inovatif.", 
    logo: "/images/logo-footer.svg", 
    description: "Full-Stack Developer yang fokus pada kualitas, performa, dan pengalaman pengguna luar biasa." 
  },


  mainLinks: [
    { label: "Beranda", href: "/" },
    { label: "Tentang Saya", href: "/about" },
    { label: "Portofolio", href: "/projects" },
    { label: "Kontak", href: "/contact" },
  
  ],

  contactInfo: [
    { type: "Email", value: "budi.dev@gmail.com", icon: "bx bx-envelope", href: "mailto:budi.dev@gmail.com" },
    { type: "WhatsApp", value: "+62 812-3456-7890", icon: "bx bxl-whatsapp", href: "https://wa.me/6281234567890" },
    { type: "Lokasi", value: "Medan, Indonesia", icon: "bx bx-map", href: "https://maps.google.com/?q=Medan" }, // Link ke Maps opsional
  ],

  socialLinks: [
    { label: "GitHub", icon: "bx bxl-github", href: "https://github.com/budi-santoso" },
    { label: "LinkedIn", icon: "bx bxl-linkedin", href: "https://linkedin.com/in/budi-santoso" },
    { label: "X (Twitter)", icon: "bx bxl-twitter", href: "https://x.com/budi_santoso" }, 
    { label: "Instagram", icon: "bx bxl-instagram", href: "https://instagram.com/budi.santoso.dev" }, 
  ],


  copyright: {
    text: "© 2025 Budi Santoso. Semua hak cipta dilindungi.", 
    madeWith: "Dibuat dengan ❤️ dan sedikit kopi di Medan, Indonesia." 
  },


  style: {
    backgroundColor: "#0D0D0D", 
    textColor: "#E0E0E0",       
    linkColor: "#00ADB5",       
  },


  callToAction: {
    text: "Punya ide brilian? Mari bicarakan sekarang!",
    href: "/contact",
  }
};

export { footerData };