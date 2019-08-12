var agerita = [
    {
        nomor:1,
        bulan:'Juli 2019',
        kegiatan:['Masa Orientasi Siswa Baru'],
        keterangan:['Mengenal sekolah dan teman baru'],
        penjab:'Ust. Evi'
    },
    {
        nomor:2,
        bulan:'Juli 2019',
        kegiatan:['Tema Karunia Allah SWT','Puncak Tema Kunjungin Salon'],
        keterangan:['Merawat Diri dengan Baik','Mengenal cara merawat diri dengan baik','Manfaat merawat diri','Cara mensyukuri karunia Allah berupa diciptakannya kepala'],
        penjab:'Ust. Devi'
    },
    {
        nomor:3,
        bulan:'Agustus 2019',
        kegiatan:['Tema Tanah Airku Indonesia','Manasik Haji','Penyembelihan Hewan Qurban','Parenting','Puncak Tema Fashion Show baju adat provinsi di Indonesia'],
        keterangan:['Mengenal lambang negara, menyukuri kemerdekaan dan suku adat istiadat','Mengenal keutamaan haji dan tatacara serta rukunnya','Mengenal kisah Qurban dan manfaatnya','Menbentuk keluarga yang kompak Salam mendidik anak'],
        penjab:'Ust Nunung &amp; Ust Umi'
    },
    {
        nomor:4,
        bulan:'September 2019',
        kegiatan:['Tema Lingkungan sekitar rumahku','Puncak Tema membuat alat kreasi mainan dari bahan janur','Parenting'],
        keterangan:['Mengenal lingkungan sekitar, manfaat lingkungan dan cara merawat','Mengenalkan Permainan tradisional','Menbentuk keluarga yang kompak dalam mendidik anak'],
        penjab:'Ust Harmi &amp; Ust Umi'
    },
    {
        nomor:5,
        bulan:'Oktober 2019',
        kegiatan:['Tema Sapi binatang peliharaanku','Parenting','Puncak Tema Kunjungan ke pasar hewan'],
        keterangan:['Mengenal bagian tubuh sapi, manfaat, perkembangbiakan dan cara merawat','Menjalin Hubungan silahturahmi dan kedekatan Antara orangtua dan guru','Mengenal kegiatan perniagaan dan menumbuhkan jiwa kewirausahaan'],
        penjab:'Ust Siti &amp; Ust Umi'
    },
    {
        nomor:6,
        bulan:'November 2019',
        kegiatan:['Tema tanaman boat ciptaan Allah SWT','Puncak Tema membuat minuman jamu tradisional','Parenting'],
        keterangan:['Mengenal jenis tanaman boat, manfaat dan cara menanam','Menumbuhkan jiwa wirausaha sejak dini dan dapat menyesuaikan diri pada situasi yang berbeda melatih kemandirian','Membuka ruang diskusi/sharing secara keterbukaan Antara orangtua dan guru'],
        penjab:'Ust Devi &amp Ust Umi'
    },
    {
        nomor:7,
        bulan:'Desember 2019',
        kegiatan:['Pemeriksaan Kesehatan','Parenting','Evaluasi Semester','Pembagian Laporan Semester 1','Libur semester 1'],
        keterangan:['Mengetahui keadaan kesehatan anak (Gigi, mulut, hidung, tenggorokan)','Mendapatkan informasi yang utuh dari guru mengenai program pendidikan anak-anaknya'],
        penjab:'Ust Nunung &amp; Ust Umi'
    },
    {
        nomor:8,
        bulan:'Januari 2020',
        kegiatan:['Tema alam semesta','Puncak Tema sains gunung meletus','Parenting'],
        keterangan:['Mengenal benda-benda langit, gejala alam, dan keadaan didesa/dikota ciptaan Allah SWT','Mengenalkan dan menumbuhkan rasa bersyukur terhadap ciptaan Allah SWT','Meningkatkan Pengetahuan dan ketrampilan bagi para orangtua mengenai cara mengasuh dan membimbing anak'],
        penjab:'Ust Harni &amp; Ust Ais'
    },
    {
        nomor:9,
        bulan:'Februari 2020',
        kegiatan:['Tema pedagang yang sholih','Puncak Tema Market Day','Parenting'],
        keterangan:['Mengenal macam-macam pedagang, alat-alat perlengkapan dagang, Adab berdagang','Menumbuhkan jiwa kewirausahaan mulai sejak dini','Terjalinnya kedekatan Antara orangtua dan guru'],
        penjab:'Ust Evi &amp; Ust Umi'
    },
    {
        nomor:10,
        bulan:'Maret 2020',
        kegiatan:['ema rekreasi naik bis','Puncak Tema outing class','Parenting','Penerimaan Peserta didik baru tahun pelajaran 2019/2020'],
        keterangan:['Mengenal macam-macam tempat rekreasi, manfaat rekreasi, bagian-bagian bis dan macam-macam bis','Benjamin sikap kebersamaan Bersama keluarga dengan pihak sekolah','Mengkombinasi dari manfaat dan program parenting yang baik akan membentuk anak berkarakter yang benar'],
        penjab:'Ust Nur &amp; Ust Umi'
    },
    {
        nomor:11,
        bulan:'April 2020',
        kegiatan:['Tema Alat kounikasi','Puncak Tema membuat dan mengirim surat dikantor pos','Parenting','Tema air, api dan udara','Puncak tema'],
        keterangan:[''],
        penjab:'Ust Ifah &amp; Ust Devi'
    },
    {
        nomor:12,
        bulan:'Mei 2020',
        kegiatan:['pemeriksaan kesehatan','Tarhib Ramadhan','Pesantren cilik','Bakti Sosial'],
        keterangan:['Mengetahui keadaan kesehatan anak (Gigi, mulut, hidung, tenggorokkan)'],
        penjab:'Ust Nunung &amp; Ust Puput'
    },
    {
        nomor:13,
        bulan:'Juni 2020',
        kegiatan:['Pentas seni','Akhirusannah','Pembagian Laporan Semester 2','Libur Semester 2'],
        keterangan:['Mendapatkan informasi yang utuh dari guru mengenai program pendidikan anak-anaknya'],
        penjab:'Ust Nur &amp; Ust Evi'
    }
];

$(document).ready( function(){
    $("#agerita li").remove();
    $.each(agerita , function(i,data){
        let keg='',ket='',x,y;

        for( x = 0 ; x < data.kegiatan.length ; x++){
            keg = keg + `<li>${data.kegiatan[x]}</li>`;
        }
        for(y = 0 ; y < data.keterangan.length; y++){
            ket = ket + `<li>${data.keterangan[y]}</li>`;
        }
        $("#agerita").append(`
        <li class='list-group-item infoAgeber'>
        <p><span class='itemAgenta'>${data.nomor}. Bulan: </span><span class='uraiAgenta'>${data.bulan}</span></p>
        <p class='itemAgenta'>Kegiatan:</p>
        <ul class='uraiAgenta'>${keg}</ul>
        <p class='itemAgenta'>Keterangan:</p>
        <ul class='uraiAgenta'>${ket}</ul>
        <p class='itemAgenta'>Penjab: <span class='uraiAgenta'>${data.penjab}</span></p>
        </li><br>`);
    })

    $(".gohome").click( function(){ window.location='index.html';})
})