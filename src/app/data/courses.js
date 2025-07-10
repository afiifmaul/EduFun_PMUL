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
        description: "Pengenalan bilangan",
        content:
          "Pengenalan bilangan adalah langkah pertama kita untuk mengenal dunia matematika yang seru! Angka, seperti 1, 2, dan 3, adalah simbol hebat yang kita pakai untuk menghitung semua benda di sekitar kita, mulai dari jumlah jari di tangan, banyaknya buku cerita, hingga teman-teman yang bermain bersama. Dengan belajar bilangan, kita bisa tahu persis 'berapa banyak' jumlah sesuatu, misalnya mengetahui kamu punya lima permen atau ada sepuluh burung di pohon, sehingga kita bisa memahami dunia dengan lebih baik dan teratur.",
      },
      {
        id: "urutan-bilangan",
        title: "Urutan Bilangan",
        description: "Apa itu urutan bilangan?",
        content:
          "Mengurutkan bilangan itu seperti mengajak angka-angka untuk berbaris dengan rapi dari yang paling kecil hingga yang paling besar, atau sebaliknya. Bayangkan kamu menaiki tangga: kamu mulai dari anak tangga ke-1, lalu ke-2, ke-3, dan seterusnya, tidak bisa melompat sembarangan. Sama seperti itu, angka 2 datang setelah 1, dan angka 9 ada sebelum 10. Dengan mengerti urutan ini, kita jadi bisa membandingkan mana bilangan yang lebih besar (seperti 8 lebih besar dari 5) dan mana yang lebih kecil, sehingga kita tidak akan bingung saat menghitung banyak benda.",
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
      { id: "tata-kata", 
        title: "Tata Kata", 
        description: "Apa itu tata kata?", 
        content: 
        "Tata kata itu seperti menyusun mainan balok atau potongan puzzle menjadi sebuah gambar yang utuh; setiap kata harus diletakkan di urutan yang benar agar kalimat yang kita ucapkan atau tulis bisa dimengerti. Misalnya, kita akan bilang (Ibu memasak di dapur) yang artinya jelas, tapi kalau kita acak menjadi (Dapur memasak di ibu), kalimatnya jadi aneh dan tidak punya arti, kan? Jadi, dengan menggunakan tata kata yang baik, semua cerita dan ucapan kita menjadi runut dan mudah dipahami oleh semua orang." },
      {
        id: "tata-kalimat",
        title: "Tata Kalimat",
        description: "Apa itu Tata Kalimat?",
        content: "Tata kalimat adalah cara kita merangkai kata-kata menjadi sebuah ide atau cerita yang utuh, seperti menyusun gerbong kereta api. Sebuah kalimat yang baik harus punya lokomotif, yaitu siapa atau apa yang dibicarakan, dan setidaknya satu gerbong, yaitu apa yang sedang dilakukan. Misalnya, kalimat Ayah membaca koran sudah lengkap karena kita tahu ada Ayah sebagai pelakunya dan kegiatan membaca koran yang dilakukannya. Kalau kita hanya bilang di atas meja, pasti kita akan bertanya-tanya benda apa yang ada di atas meja. Dengan memahami tata kalimat, kita bisa membuat ucapan atau tulisan yang tidak hanya benar, tetapi juga bercerita dengan jelas sehingga orang lain paham maksud kita.",
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
        description: "Apa itu Indra Penglihatan?",
        content: "Indra penglihatan kita adalah mata, yang bekerja seperti sepasang kamera super canggih untuk mengenal dunia di sekitar kita. Setiap kali kita membuka mata, cahaya dari benda-benda seperti pelangi yang berwarna-warni atau senyum temanmu akan masuk ke dalam mata. Gambar ini kemudian dikirimkan dengan sangat cepat ke otak, dan otaklah yang memberitahu kita apa yang sedang kita lihat, baik itu bentuk, warna, maupun ukurannya. Berkat mata, kita bisa membaca buku cerita, menonton film kartun, mengenali wajah orang tua, dan menikmati semua keindahan yang ada di sekeliling kita dengan jelas.",
      },
      {
        id: "indra-pendengaran",
        title: "Indra Pendengaran",
        description: "Apa itu Indra Pendengaran?",
        content: "Indra pendengaran kita adalah telinga, yang bekerja seperti penangkap suara super untuk mendengarkan semua hal di sekitar kita. Setiap suara, mulai dari musik yang merdu, suara ibu memanggil, hingga bunyi klakson mobil, adalah getaran di udara yang ditangkap oleh telinga kita. Getaran ini kemudian diubah menjadi pesan yang dikirimkan ke otak, dan otaklah yang memberitahu kita apa arti suara tersebut, apakah itu suara yang menyenangkan, sebuah peringatan, atau sekadar obrolan teman. Berkat telinga, kita bisa berkomunikasi, menikmati lagu, mendengarkan dongeng, dan mengetahui apa yang terjadi di sekeliling kita meskipun kita tidak melihatnya.",
      },
      // dst.
    ],
    image: "/ipa.jpg",
    imageWidth: 800,
    imageHeight: 450,
  },
];

