// app/data/courses.js
export const courses = [
  {
    id: "matematika",
    title: "Matematika Dasar",
    description:
      "Pengenalan bilangan 1 hingga 10 menjadi langkah awal agar siswa memahami konsep angka dan urutan. Dalam modul ini, siswa akan melihat bentuk visual setiap angka serta tata cara menulisnya. Setelah itu, mereka dilatih untuk menyusun deretan angka secara berurutan naik dari 1 menuju 10 dan menurun dari 10 kembali ke 1. Latihan ini penting untuk membangun pemahaman urutan bilangan dalam kehidupan sehari-hari.",
    lessons: [
      {
        id: "angka-1-10",
        title: "Bilangan 1–10",
        description: "Pengenalan bilangan …",
        content:
          "Di sini kamu bisa menulis **markdown** atau HTML biasa untuk materi pelajaran...",
      },
      {
        id: "urutan-bilangan",
        title: "Urutan Bilangan",
        description: "Membahas urutan …",
        content:
          "Di sini kamu bisa menulis **markdown** atau HTML biasa untuk materi pelajaran...",
      },
      // dst.
    ],
    image: "/matematika.jpg",
    imageWidth: 800,
    imageHeight: 450,
  },
  {
    id: "bahasa",
    title: "Bahasa Indonesia",
    description:
      "Huruf dalam bahasa Indonesia terbagi menjadi vokal dan konsonan. Vokal terdiri dari lima huruf—A, I, U, E, O—yang diucapkan tanpa hambatan pada saluran suara. Konsonan melibatkan penutupan sebagian atau keseluruhan saluran mulut. Modul ini membantu siswa mengenali perbedaan pengucapan dan penulisan setiap huruf sehingga mereka bisa membedakan serta mengelompokkan huruf vokal dan konsonan.",
    lessons: [
      { id: "tata-kata", title: "Tata Kata", description: "…", content: "…" },
      {
        id: "tata-kalimat",
        title: "Tata Kalimat",
        description: "…",
        content: "…",
      },
    ],
    image: "/bahasa.jpg",
    imageWidth: 800,
    imageHeight: 450,
  },
  {
    id: "ipa",
    title: "IPA Terpadu",
    description:
      "Manusia memiliki lima indera penting: mata untuk melihat, telinga untuk mendengar, hidung untuk mencium, lidah untuk merasakan, dan kulit sebagai indera peraba. Dalam modul ini, siswa mengeksplorasi tiap indera melalui percobaan sederhana, seperti menebak benda dengan indera tertutup atau mencocokkan fungsi indera dengan gambar.",
    lessons: [
      {
        id: "indra-penglihatan",
        title: "Indra Penglihatan",
        description: "…",
        content: "…",
      },
      {
        id: "indra-pendengaran",
        title: "Indra Pendengaran",
        description: "…",
        content: "…",
      },
      // dst.
    ],
    image: "/ipa.jpg",
    imageWidth: 800,
    imageHeight: 450,
  },
];

