$(function(){
    for (i of $(":input")) {
        switch ($(i).attr("type")) { //según los atributos de type        
        case 'text': 
            $(i).focus(seleccionado);
            $(i).blur(deseleccionado);
            $(i).change(cambios);
            $(i).select(textSelect);
            break;
        case "radio":
        case 'checkbox':
             $(i).change(cambios);
            break;
         }
       }
       $('textarea').focus(seleccionado);
       $('textarea').blur(deseleccionado);
       $('textarea').change(cambios);
       $('textarea').select(textSelect);
       $('select').change(cambios);
       $('form').submit(enviar);
});
function seleccionado(){    
    $(this).css('background-color','yellow');
}
function deseleccionado(){
    $(this).css('background-color','white');
}
function cambios(){
    if($(this).prop('tagName')=='INPUT')
    alert('Cambios guardados sobre '+$(this).prop('tagName')+": "+$(this).attr('type'));
    else
    alert('Cambios guardados sobre '+$(this).prop('tagName'));
}
function textSelect(){
    alert($(this).val());
}
function enviar(){
    alert('informaicón enviada');
}