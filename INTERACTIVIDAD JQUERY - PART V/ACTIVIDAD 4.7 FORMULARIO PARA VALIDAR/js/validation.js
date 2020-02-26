$(document).ready(function(){


    $("#orderForm").validate({
        rules: {
            nombre: {
                required: true,
                maxlength: 100
            },
            apellidos: {
                required: true,
                maxlength: 100
            },
            origen: {
                required: true,
                minlength: 3,
                maxlength: 100
            },
            salida: {
                required: true,
                dateformat: "required"
            },
            destino: {
                required: true,
                minlength: 3,
                maxlength: 100
            },
            llegada: {
                required: true,
                dateformat: "required"
            },
            email: {
                required: true,
                email: true,
                maxlength: 50
            }
        },
        messages: {
            nombre: {
                required: "¡El nombre es un campo obligatorio!",
                maxlength: jQuery.validator.format("Introduce un máximo de {0} caractéres")
            },
            apellidos: {
                required: "¡Los apellidos es un campo obligatorio!",
                maxlength: jQuery.validator.format("Introduce un máximo de {0} caractéres")
            },
            origen: {
                required: "¡El origen es un campo obligatorio!",
                minlength: jQuery.validator.format("Introduce un mínimo de {0} caractéres"),
                maxlength: jQuery.validator.format("Introduce un máximo de {0} caractéres")
            },
            salida: {
                required: "¡La salida es un campo obligatorio!",
                dateformat: "La salida debe estar especificada con formato de fecha"
            },
            destino: {
                required: "¡El destino es un campo obligatorio!",
                minlength: jQuery.validator.format("Introduce un mínimo de {0} caractéres"),
                maxlength: jQuery.validator.format("Introduce un máximo de {0} caractéres")
            },
            llegada: {
                required: "¡La llegada es un campo obligatorio!",
                dateformat: "La llegada debe estar especificada con formato de fecha"
            },
            email: {
                required: "¡El email es un campo obligatorio!",
                email: "El email debe estar especificada con formato de correo electrónico",
                maxlength: jQuery.validator.format("Introduce un máximo de {0} caractéres")
            }
        },
        errorPlacement: function(error, element){
          error.css({'color':'red','font-weight':'bold','background-color':'yellow'});
          error.appendTo( element.parent()) ;
          error.append('<br>');
        },
        submitHandler: function() {
            alert("¡Los datos se han enviado con éxito!");
        }
    })
})