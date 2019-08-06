Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}

var kini=new Date(),
    tahun = kini.getFullYear(),
    bulan = kini.getMonth() + 1,
    hari  = kini.getDate(),
    sekarang = tahun+"-"+bulan.pad(2)+"-"+hari.pad(2);

$(document).ready( function(){
    
    $("#str_tanggal").val(sekarang);
    $("#str_sentra option").remove();
    $("#str_sentra").append('<option>Pilih Sentra</option>');

    $.each(itemSentra , function(i,data){
        $("#str_sentra").append(`<option value='${i}'>${data}</option>`);
    })

    $("#str_cariData").click(function(){
        alert('Oke tak goleke');
    })

    $("#str_formtoggle").click( function(){
        $('#str_form').toggle();
    })

    getSentra();

    $("#str_submit").click( function(){
        $.post(server+`setSentra`,{
            idKelas: $("#str_idKelas").val(),
            tanggal :$("#str_tanggal").val(),
            nomor   :$("#str_nomor").val(),
            sentra  :$("#str_sentra").val(),
            uraian  :$("#str_uraian").val()
        },function(resp){
            $('#str_nomor').val('');
            $('#str_uraian').val('');
            $('#str_form').toggle();
            let notice=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Berhasil!</strong> ${resp}.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>`;
          $("#str_alert").html(notice);
          getSentra();
        })
    })

    $(".gohome").click(function(){
        window.location="index.html";
    })
})

function getSentra(){
    $.getJSON(server + `getSentra` , function(kegiatan){
        $("#kegSentra li").remove();
        $.each( kegiatan, function(i , data){
            let idSentra = data.sentra, sentra = itemSentra[idSentra];
            $("#kegSentra").append(`
            <li class="list-group-item">
            <p>Tgl: ${data.tanggal} Sentra : ${sentra}<br>
            ${data.nomor}. ${data.uraianKegiatan}
            </p>
            </li>
            `)
        })
    })
}