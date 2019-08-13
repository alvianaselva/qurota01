var kuruikulum = {
    "Nilai Moral dan Agama": {
    "1. Mempercayai adanya Tuhan yang Maha Esa": [
    "Mengetahui Tuhan sebagai Pencipta, mengenal ciptaan Tuhan, membiasakan mengucapkan kalimat pujian terhadap ciptaan Tuhan"
    ],
    "2. Menghargai diri sendiri, orang lain, dan lingkungan sekitar sebagai rasa syukur kepada Tuhan": [
    "Terbiasa merawat kebersihan diri, tidal menyakiti dirt stay teman, menghargai teman, hormat pada guru dan orang tua, menjaga dan merawat tanaman, serta binatang peliharaan"
    ],
    "3. Memiliki perilaku yang mencerminkan sifat jujur": [
    "Terbiasa berbicara sesuai fakta, tidal curang Salam perkataan dan perbuatan, tidak berbohong, menghargai kepemilikan orang lain, mengembalikan benda yang bukan haknya, mengerti batasan yang boleh dan tidak boleh dilakukan, terus terang, anak senang melakukan sesuatu sesuai aturan atau kesepakatan, dan mengakui kelebihan diri atau temannya"
    ]
    },
    "Fisik Motorik": {
    "1. Memiliki perilaku yang mencerminkan hidup sehat": [
    "kebiasaan anak makan makanan bergizi seimbang, memcuci tangan, menggosok Gigi, mandi, berpakaian bersih, membuang Sampah, menyayangi teman, melindungi dari percobaan kekerasan, menjaga keamanan diri dari tempat dan benda berbahaya"
    ],
    "2. Mengetahui cara hidup sehat dan Mampu menolong diri sendiri untuk hidup sehat": [
    "Mengetahui cara merawat kebersihan diri (misal : mencuci tangan, merawat Gigi, mulut, telinga, hiding, olahraga, mandi 2x sehari, memakai baju bersih), memilioh makanan dan Minuman sehat, melindungi anggota tubuh"
    ]
    },
    "Kognitif": {
    "1. Memiliki perilaku yang mencerminkan sikap ingin tahu": [
    "Kebiasaan anak yang selalu tertarik pada sesuatu yang baru atau yang belum biasa dia lihat, aktif bertanya, berusaha mencoba atau melakukan sesuatu untuk mendapatkan jawaban"
    ],
    "2. Memiliki perilaku yang mencerminkan sifat kreatif": [
    "Kebiasaan anak yang memiliki daya cipta, banyak gagasan, selalu aktif untuk melakukan sesuatu, tertarik pada sesuatu masalah untuk diatasi, berani menghadapi tantangan, senang melakukan hal-Hal baru, tidak puas bila selalu mengulang hal sama, menggunakan benda atau bahan belajar untuk membuat sesuatu, selalu Optimis, senang menceritakan impian-impiannya walaupun terkadang nampak berlebihan"
    ],
    "3. mengetahui cara memecahkan masalah sehari-Hari dan berperilaku kreatif dan Menyesuaikan masalah sehari-Hari secara kreatif": [
    "menetapkan apa yang ingin dituju, mengenali masalah, mengetahui penyebab masalah, mengembangkan gagasan dalam mengatasi masalah, mencoba dengan berbagai cara untuk mengatasi masalah"
    ],
    "4. mengenal benda-benda disekitarnya (nama, warna, bentuk, ukuran, Pola, sifat, sutra, tekstur, fungsi dan ciri-cirinya)": [
    "Warna, bentuk dua dimensi (persegi, segitiga, bulat, segi Panjang)",
    "Bentuk tiga dimensi (kubus, balok, Lukas, tabung), ukuran Panjang pendek",
    "Besar kecil, berat ringan, sebentar lama, bilangan (satuan-puluhan)",
    "Tekstur (lazar, halus, keras-lunak)",
    "Suara (cepat-lambat, keras-halus, tinggi-rendah)",
    "Pola (AB-AB, ABC-ABC, AAB-AAB)",
    "Hubungan satu ke satu, satu ke banyak, kelompok ke kelompok"
    ]
    },
    "Sosial Emosional": {
    "1. Memiliki perilaku yang mencerminkan sikap percaya diri": [
    "Kebiasaan menyapa guru seat penyambutan",
    "Berani Tampil didepan teman, guru, orangutan dan lingkungan social lainnya",
    "Berani mengemukakan pendapat, menyampaikan keinginan, berkomunikasi dengan orang yang belum dikenal sebelumnya dengan pengawasan guru",
    "Bangga menunjukkan hasil karya",
    "Senang ikut serta dalam kegiatan bersama"
    ],
    "2. Memiliki perilaku yang mencerminkan sikap taat terhadap aturan sehari-hari untuk melatih kedisiplinan": [
    "Terbiasa mengikuti aturan",
    "Tidak marah ketika diingatkan aturan oleh temannya",
    "Mengingkatkan temannya bila bertindak tidak sesuai aturan"
    ],
    "4. Memiliki perilaku yang mencerminkan kemandirian": [
    "Kebiasaan tidak bergantung pada oranglain",
    "Terbiasa mengambil keputusan secara mandiri",
    "Merencanakan, memilih, memiliki inisiatif untuk belajar atau melakukan sesuatu tanpa harus dibantu atau dengan bantuan seperlunya"
    ],
    "5. Mengenal emosi diri dan orang lain dan Menunjukkan reaksi emosi diri secara wajar": [
    "Memahami penyebab sedih, marsh, gembira, kecewa, atau mengerti jika ia mengganggu temannya akan marah, jika ia membantu temannya akan senang, jika bermain dapat mengendalikan emosi dan saling berbagi"
    ]
    }
    }

    $(document).ready( function(){
        
        $.each( kuruikulum , function(i,prog){
                program = i;
                let komat='';
            $.each(prog , function(j,komp){
                //kompetensi += `<p>${j}</p>`
                let materi='';
                $.each(komp, function(k,mat){
                    materi+=`<li>${mat}</li>`;
                })
                komat+=`<p>${j}.</p>
                <b>Materi:</b><br><ul>${materi}</ul>`;
            })
            
            $('#dataKuriku').append(`
            <div class='card'>
            <div class='card-header bg-info'><h4>Program ${i}</h4></div>
            <div class='card-body bg-light'>
            <h5>Kompetensi</h5>
            ${komat}
            </div>
            </div>
            `);
        })

        $(".gohome").click( function(){ window.location='index.html'});
    })