$(document).ready( function(){
    var item = localStorage.getItem('itemNilai'), 
    label=localStorage.getItem('labelNilai');
    $("#labelNilai").html(label);

    $.getJSON( server + `dataSiswa` , function(siswa){
        $("#dftSiswa tr").remove();
        $.each(siswa, function(i,data){
            $("#dftSiswa").append(`
            <tr>
                <td>${data.namaSiswa}</td>
                <td><input type="checkbox" id="${data.idSiswa}" class="cekNilai" value="1" checked></td>
            </tr>
            `);
        })
    })

    $("#kirimNilai").click( function(){
        let boxNilai = $(".cekNilai");
        let setNilai = [];
        let dataNilai={};
        boxNilai.each( function(i,data){
            let idSiswa = $(this).prop('id');
            let dataNilai = isChecked(idSiswa);
            setNilai.push(dataNilai);
        })
        dataNilai={  item:localStorage.getItem('itemNilai'),data:setNilai  };
        $.post(server+`setNilaiHarian` , { nilai : dataNilai } , function(resp){
            // console.log(resp);
            alert('data tersimpan');
            window.location='nihar.html';
        })
    })
});

function isChecked(id){
    let nilai = $("#"+id).prop('checked');
    if(nilai == true ){ return id+"-1" ;} else{ return id+"-0" ;}
}