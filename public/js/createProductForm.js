window.onload = function(){
        
    let form = document.querySelector('#form');
    
    
    form.addEventListener('submit', function(e){
        
        let errors =[];
        
        let product = document.querySelector('#name');
        let other_name = document.querySelector('#other_name');
        let description = document.querySelector('#description');
        let review = document.querySelector('#review');
        let tipo = document.querySelector('#tipo');
        let valor = document.querySelector('#valor');
        
        if(product.value == ""){
            product.classList.add('is-invalid');
            errors.push('El campo no puede estar vacío');
        }else if (product.value.length < 5){
            product.classList.add('is-invalid');
            errors.push('El nombre del producto debe tener mínimo 5 caracteres');
        }else{
            product.classList.remove('is-invalid');
            product.classList.add('is-valid');
            other_name.focus();  
        }

        if(other_name.value == ""){
            other_name.classList.add('is-invalid');
            errors.push('El campo debe tener un nombre científico');
        }else if (other_name.value.length < 5){
            other_name.classList.add('is-invalid');
            errors.push('El nombre científico del producto debe tener mínimo 5 caracteres');
        }else{
            other_name.classList.remove('is-invalid');
            other_name.classList.add('is-valid');
            review.focus();
        }

        if(review.value == ""){
            review.classList.add('is-invalid');
            errors.push('La reseña no puede estar vacía');
        }else if (review.value.length < 20){
            review.classList.add('is-invalid');
            errors.push('El campo debe tener al menos 20 caracteres');
        }else{
            review.classList.remove('is-invalid');
            review.classList.add('is-valid');
            description.focus();
        }

        if(description.value == ""){
            description.classList.add('is-invalid');
            errors.push('La descripción no puede estar vacía');
        }else if (description.value.length < 20){
            description.classList.add('is-invalid');
            errors.push('El campo debe tener al menos 20 caracteres');
        }else{
            description.classList.remove('is-invalid');
            description.classList.add('is-valid');
            tipo.focus();
        }

        if(tipo.value == ""){
            tipo.classList.add('is-invalid');
            errors.push('Debe ingresar un tipo de maceta');
        }else{
            tipo.classList.remove('is-invalid');
            tipo.classList.add('is-valid');
            valor.focus();
        }

        if(valor.value == ""){
            valor.classList.add('is-invalid');
            errors.push('Debe ingresar un valor');
        }else{
            valor.classList.remove('is-invalid');
            valor.classList.add('is-valid');
        }
    
        if(errors.length > 0){
            e.preventDefault();
            let MessagesErrors = document.querySelector('.errors');
            MessagesErrors.innerHTML ='';
            MessagesErrors.classList.add('warning');
            for(let i = 0; i < errors.length; i++){
                MessagesErrors.innerHTML += `<li>${errors[i]}</li>`;
            }
        } else {
            form.submit();
        }
    });
}