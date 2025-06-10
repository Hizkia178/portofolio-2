const heroSectionData = {
  title: "Full-Stack Developer",
  subtitle: "Bangun Solusi Digital. Cepat, Aman, Skalabel.",
  description: "5+ tahun bikin aplikasi web performa tinggi yang fokus ke UX dan goals bisnis. Ayo kolaborasi!",

  ctaButton: {
    text: "Lihat Portofolio",
    link: "/projects",
    icon: "arrow-right",
    ariaLabel: "Lihat semua proyek",
  },

  secondaryCtaButton: {
    text: "Diskusi Sekarang",
    link: "/contact",
    icon: "message-circle",
    target: "_blank",
    rel: "noopener noreferrer",
  },

  heroImage: {
    src: "assets/budi.jpg",
    alt: "Foto Budi Santoso - Full-Stack Developer",
    position: "right",
    size: "medium",
  },

  keySkills: [
    { name: "React.js", icon: "devicon-react" },
    { name: "Node.js", icon: "devicon-nodejs" },
    { name: "TypeScript", icon: "devicon-typescript" },
    { name: "AWS", icon: "devicon-amazonwebservices" },
    { name: "PostgreSQL", icon: "devicon-postgresql" },
  ],

  animatedText: [
    "Aplikasi Cepat & Responsif",
    "API Aman & Terukur",
    "UX Maksimal, Perform Optimal",
    "Teknologi untuk Solusi Bisnis",
  ],
  animatedTextSpeed: 70,
  animatedTextLoop: true,

  quickStats: [
    { label: "Proyek", value: "50+", icon: "check-circle" },
    { label: "Pengalaman", value: "5+ th", icon: "award" },
    { label: "Klien", value: "20+ global", icon: "smile" },
  ],

  textColor: "#FFFFFF",
  textAlign: "center",
  overlayOpacity: 0.5,
  padding: "80px 20px",
};

export { heroSectionData };
