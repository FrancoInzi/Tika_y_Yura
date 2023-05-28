window.addEventListener("load", function(){
        
    let form = document.querySelector('.editForm');

    let product = document.querySelector('#name')
    let other_name = document.querySelector('#other_name')
    let image = document.querySelector('#imagenProducto')
    let review = document.querySelector('#review')
    let description = document.querySelector('#description')
    let tipo = document.querySelector('#tipo')
    let valor = document.querySelector('#valor')
    
    
    formulario.addEventListener('submit', function(e){
        
        let errors =[];
        
        let avatar = image.value;
        let extension= (avatar.split(".").pop());
        
        if(product.value == ""){
            errors.push('El campo no puede estar vacío.')
        }
        
        if (product.value.length < 5){
            errors.push('El nombre del producto debe tener mínimo 5 caracteres.')
        }

        if(other_name.value == ""){
            errors.push('El campo debe tener un nombre científico.')
        }

        if (other_name.value.length < 5){
            errors.push('El nombre científico del producto debe tener mínimo 5 caracteres.')
        }
        
        if(extension!='jpg'&&extension!='png'&&extension!='gif'){
            errors.push('Debe subir un archivo de extensión .jpg, .png o .gif.')
        }

        if(review.value == ""){
            errors.push('La reseña no puede estar vacía.');
        }
        
        if (review.value.length < 20){
            errors.push('El campo debe tener al menos 20 caracteres.')
        }

        if(description.value == ""){
            errors.push('La descripción no puede estar vacía.')
        }
        
        if (description.value.length < 20){
            errors.push('El campo debe tener al menos 20 caracteres.')
        }

        if(tipo.value == ""){
            errors.push('Debe ingresar un tipo de maceta.')
        }

        if(valor.value == ""){
            errors.push('Debe ingresar un valor.')
        }
    
        if(errors.length >0){
            e.preventDefault();
            let MessagesErrors = document.querySelector('.error');
            MessagesErrors.innerHTML ='';
            for(let i = 0; i <errors.length; i++){
            MessagesErrors.innerHTML += "<li>" + errors[i] + "</li>";
            }
        }else{
       
            form.submit();
       
        }
    })
})