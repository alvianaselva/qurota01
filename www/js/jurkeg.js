$(document).ready(function(){
    
    getJurnal();

    $(".gohome").click( function(){
        window.location="index.html";
    })

    $("#jrn_formtoggle").click( function(){
        $("#jrn_form").toggle();
    });

    $("#jrn_submit").click( function(){
        $.post( server + `setJurnal`, {
            kelas : $("#jrn_idKelas").val(),
            tanggal : $("#jrn_tanggal").val(),
            jam : $("#jrn_jam").val(),
            kegiatan : $("#jrn_uraian").val()
        } , function(resp){
            
            $("#jrn_jam").val('');
            $("#jrn_uraian").val('');
            let notice=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Berhasil!</strong> ${resp}.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            </div>`;
            $(".jrn_alert").html(notice);
            $("#jrn_form").toggle();
            getJurnal();
        })

    })
})

function getJurnal(){
    $.getJSON( server + `getJurnal` , function(jurnal){
        $("#jurnalKegiatan li").remove();
        $.each( jurnal , function (i,data){
            $("#jurnalKegiatan").append(`
            <li class = "list-group-item">
            <p>Tanggal : ${data.tanggal},<br>${data.kegiatan}</p>
            </li>
            `);
        })
    })
}