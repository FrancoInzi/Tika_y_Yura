window.onload = function(){
       
    let form = document.querySelector('#form-register')
    
    form.addEventListener('submit',function(e){
        
        let errorsRegister =[];

    let first_name = document.querySelector('#first_name');
    let last_name = document.querySelector('#first_name');
    let email = document.querySelector('#email');
    let address = document.querySelector('#domicilio');
    let password = document.querySelector('#password');
    let passwordConfirm = document.querySelector('#passwordConfirm');
    
        
    if(first_name.value == ""){
        first_name.classList.add('is-invalid');
        errorsRegister.push('El nombre no puede estar vacio');

    }else if (first_name.value.length < 5){
        first_name.classList.add('is-invalid');
        errorsRegister.push('El nombre debe tener minimo 5 caracteres')
    }else{
        first_name.classList.remove('is-invalid');
        first_name.classList.add('is-valid');
        email.focus();  
    };

    if(last_name.value == ""){
        last_name.classList.add('is-invalid');
        errorsRegister.push('El apellido no puede estar vacio');

    }else if (last_name.value.length < 5){
        last_name.classList.add('is-invalid');
        errorsRegister.push('El apellido debe tener minimo 5 caracteres')
    }else{
        last_name.classList.remove('is-invalid');
        last_name.classList.add('is-valid');
        email.focus();
    };

    if(email.value == ""){
        email.classList.add('is-invalid');
        errorsRegister.push(' Debe ingresar  un email')
    }else{
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        address.focus();
    };

    if(address.value == ""){
        address.classList.add('is-invalid');
        errorsRegister.push('Tu direccion no puede estar vacia')
    }
    else{
        address.classList.remove('is-invalid');
        address.classList.add('is-valid');
        password.focus();
    }
    

    if(password.value == ""){
        password.classList.add('is-invalid');
        errorsRegister.push('Debe ingresar una contraseña')
        password.focus();
    }

    if(passwordConfirm.value == ""){
        passwordConfirm.classList.add('is-invalid');
        errorsRegister.push('Debe confirmar la contraseña')
    }

    if(errorsRegister.length >0){
        e.preventDefault();
        let MessagesErrors = document.querySelector('.errors');
        MessagesErrors.innerHTML ='';
        MessagesErrors.classList.add('warning');
        for(let i = 0; i <errorsRegister.length; i++){
        MessagesErrors.innerHTML += `<li> ${errorsRegister[i]} <li>`
        }
    }else{
       
        form.submit();
       
    }
    })
}