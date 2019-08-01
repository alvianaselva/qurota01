$(document).ready( function(){
    $("#itemNilai li").remove();
    $.each(itemNilai , function(item,nilai){
        $("#itemNilai").append(`
            <li class="list-group-item" id='${item}'>${nilai}</li>
        `);
    });

    $("#itemNilai").on('click','.list-group-item',function(){
        let item,nilai;
        item  = $(this).prop('id');
        nilai = $(this).text();
        localStorage.setItem('itemNilai',item);
        localStorage.setItem('labelNilai',nilai);
        window.location="nisis.html";
    })
})