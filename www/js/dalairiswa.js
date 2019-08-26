$(document).ready( function(){
    var nis,nama,tgl1,tgl2;
    nama = $("#dnh_nis").val();
    
    tgl2 = $("#dnh_selesai").val();
    $("#dnh_nis").keyup( function(){
        $.getJSON ( server + `Carinis/${nama}` , function(siswa){
            $("#dnh_siswa option").remove();
            $.each( siswa , function(i,data){
                $("#dnh_siswa").append(`<option value='${data.idSiswa}'>${data.namaSiswa}</option>`)
            })
        })
    })

    $("#dnh_mulai").change( function(){
        tgl1 = trimTgl( $("#dnh_mulai").val() );
    })

    $("#dnh_selesai").change( function(){
        tgl2 = trimTgl( $("#dnh_selesai").val() );
    })

    $("#dnh_submit").click( function(){
        nis = $("#dnh_nis").val();
        $.getJSON( server + `resumeNilai/${nis}/${tgl1}/${tgl2}` , function(nilai){
            $("#dalairiswa div").remove();
            $.each( nilai , function(i,data){
                let tgnilai = '';
                $.each( data , function(tanggal , nilai){
                    tgnilai+=`<tr><td>${tanggal}</td><td align='center'>${nilai}</td></tr>`;
                })
                $("#dalairiswa").append(`
                <div class='card'>
                <div class='card-header bg-success text-light itemNilai'>${itemNilai[i]}</div>
                <div class='card-body bg-light text-dark'>
                <table class='table'>
                <thead><tr class='bg-dark text-light text-center'><th>Tanggal</th><th>Nilai</th></tr></thead>
                <tbody>${tgnilai}</tbody>
                </table>
                </div>
                </div>
                `);
            })
        })
    })

    $(".gohome").click( function(){
        window.location='index.html';
    })
})

function trimTgl(tgl){
    let t = tgl.split('-');
    let th = t[0].substr(2,2);
    return (th+t[1]+t[2]);
}