$(function(){
    eventoClick();
    
    $('#newItemForm').on('submit',function(e){
        e.preventDefault();
        $('ul:first').html($('ul:first').html()+
            "<li>"+$("#itemField").val()+"</li>"
        );
        $("#itemField").val("");
        eventoClick(); //añado de nuevo el evento click de Compra tickets
    });
});

function eventoClick(){
    $('.item').click(function(){
        $(this).hide();
    });
}

