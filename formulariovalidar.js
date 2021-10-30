// Campos del formulario contacto

//var apellido = document.getElementById('apellido');
//var nombre = document.getElementById('nombre');
//var email = document.getElementById('email');
//var celular = document.getElementById('celular');
//var error = document.getElementById('error');

//var errorMensajes = [];

(function(){
    //Variables
    var formulario = document.getElementsByName('formulario')[0];
    
    var validarNombre = function(e){
        if (formulario.nombre.value == ""){
            alert("Ingrese su Nombre");
            
            e.preventDefault();
  
            //Evita que un enlace abra la URL
        }
    };
    var validarApellido = function(e){
      if (formulario.apellido.value == ""){
          alert("Ingrese su Apellido");
          e.preventDefault();
      }
    };
    var validarMail = function(e){
      if (formulario.email.value == ""){
          alert("Ingrese su e-mail");
          e.preventDefault();
      }
    };
    var validarcelular = function(e){
      if (formulario.celular.value == ""){
          alert("Ingrese su Telefono");
          e.preventDefault();
      }
    };
    var validar = function(e){
        validarNombre(e);
        validarApellido(e);
        validarcelular(e);
        validarMail(e);
    };
  
    formulario.addEventListener("submit", validar);
  
  
  }())