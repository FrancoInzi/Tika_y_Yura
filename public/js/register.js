window.addEventListener("load", function(){
    
    let form = document.querySelector('.form-register');
    
    let first_name = document.querySelector('#first_name')
    let last_name = document.querySelector('#first_name')
    let email = document.querySelector('#email')
    let address = document.querySelector('#domicilio')
    let image = document.querySelector('#avatar')
    let password = document.querySelector('#password')
    let passwordConfirm = document.querySelector('#passwordConfirm')
    
    form.addEventListener('submit', function(e){
        
        let errorsRegister =[];

        let avatar = image.value;
        let extension= (avatar.split(".").pop());
        
    
        if(first_name.value == ""){
            errorsRegister.push('El nombre no puede estar vacío.');
        }else if (first_name.value.length < 5){
            errorsRegister.push('El nombre debe tener minimo 5 caracteres.')  
        }

        if(last_name.value == ""){
            errorsRegister.push('El apellido no puede estar vacío.')

        }else if (last_name.value.length < 5){
            errorsRegister.push('El apellido debe tener minimo 5 caracteres.')
        }

        if(email.value == ""){
            errorsRegister.push(' Debe ingresar un email válido.')
        }

        if(address.value == ""){
            errorsRegister.push('Tu direccion no puede estar vacía.')
        }
        
        if(extension!='jpg'&&extension!='png'&&extension!='gif'){
            errorsRegister.push('Debe subir un archivo de extensión .jpg, .png o .gif.')
        }

        if(password.value == ""){
            errorsRegister.push('Debe ingresar una contraseña.')
        }

        if(passwordConfirm.value == ""){
            errorsRegister.push('Debe confirmar la contraseña.')
        }

        if (password.value.length < 8){
            errorsRegister.push("La contraseña debe tener mínimo 8 caracteres.")
        }

        if(errorsRegister.length >0){
            e.preventDefault();
            let MessagesErrors = document.querySelector('.error');
            MessagesErrors.innerHTML ='';
            for(let i = 0; i <errorsRegister.length; i++){
            MessagesErrors.innerHTML += "<li>" + errorsRegister[i] + "</li>";
            }
        }else{
       
            form.submit();
       
        }
    })
})