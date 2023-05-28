window.addEventListener("load", function(){
    let formulario = document.querySelector(".form-login");

    let email = document.querySelector("#email-login");
    let password = document.querySelector("#password-login");
    
    

    formulario.addEventListener("submit", function(e){
        let errores= [];

        if (email.value == ""){
            errores.push("Debe introducir un email válido.")
        }

        if (password.value == ""){
            errores.push("Debe introducir una contraseña válida.")
        }

        if (password.value.length < 8){
            errores.push("La contraseña debe tener mínimo 8 caracteres.")
        }

        if(errores.length > 0) {
            e.preventDefault();

            let error = document.querySelector(".error");
            error.innerHTML='';
            for(let i=0; i< errores.length; i++){
                error.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }
    })
})