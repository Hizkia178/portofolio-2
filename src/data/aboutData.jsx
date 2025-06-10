const aboutData = {
  headline: "Budi Santoso — Full-Stack Developer | Problem Solver",
  
  summary:
    "5+ tahun ngoding bukan cuma buat bikin aplikasi, tapi buat nyelesaiin masalah beneran. Dari UI mulus sampai backend tangguh & cloud yang scalable, gue bawa ide jadi solusi nyata.",
  
  philosophy: [
    "Build to scale.** Gue percaya aplikasi harus cepat, bersih, dan gampang dirawat.",
    "Ngerti kebutuhan dulu, baru ngoding. Komunikasi & kolaborasi = pondasi proyek yang berhasil.",
    "Clean code = peace of mind. Testing & dokumentasi udah jadi kebiasaan, bukan beban."
  ],

  technicalSkills: {
    frontend: [
      { name: "React", icon: "devicon-react" },
      { name: "Next.js", icon: "devicon-nextjs" },
      { name: "Vue", icon: "devicon-vuejs" },
      { name: "Tailwind", icon: "devicon-tailwindcss" },
    ],
    backend: [
      { name: "Node.js", icon: "devicon-nodejs" },
      { name: "Django / Flask", icon: "devicon-python" },
      { name: "GraphQL / REST", icon: "devicon-graphql" },
    ],
    database: [
      { name: "PostgreSQL", icon: "devicon-postgresql" },
      { name: "MongoDB", icon: "devicon-mongodb" },
    ],
    cloudDevOps: [
      { name: "AWS", icon: "devicon-amazonwebservices" },
      { name: "Docker", icon: "devicon-docker" },
      { name: "CI/CD", icon: "devicon-githubactions" },
    ],
    languages: [
      { name: "JavaScript / TypeScript", icon: "devicon-javascript" },
      { name: "Python", icon: "devicon-python" },
      { name: "Go", icon: "devicon-go" },
    ],
  },


  cta: {
    text: "Lihat CV",
    link: "/resume.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
  },

  profileImage: {
    src: "assets/budi.jpg",
    alt: "Budi Santoso coding",
  },
};

export { aboutData };
