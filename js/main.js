var validator={
	isText: function(_string)
	{
		return (_string.match(/^[a-zA-Z]+$/));
	},
	isEmail:function(_string)
	{
		expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	    if ( !expr.test(_string) )
	    {
	        return false;
	    }
    return true;
	},
	isValidPassword: function(_string)
	{
		var isValid= true;
		if(_string.length<6 || _string=='098754' || _string=='123456' || _string=='password')
			{
				isValid= false;
			}
		return isValid;
	},
	isVacio: function(_string)
	{
	if(_string=="")
    {
    	return true;
    }
    return false;
	},
	isSelect: function(_string)
	{

		if(_string==0)
			return false
		else
			return true;
	}
}

function toMayus(inputId)
{
	var inputId= document.getElementById(inputId);
	var nombreArray = inputId.value.split("");
    var primeraLetra = String(nombreArray[0]);
    var mayuscula = primeraLetra.toUpperCase();
    var espacio = false;
        
    for(var i=1; i<nombreArray.length; i++) {
         if(espacio){
            mayuscula += nombreArray[i].toUpperCase();
            espacio = false;
            } else {
                mayuscula += nombreArray[i];
                if(nombreArray[i] == " ")
                    espacio = true;
            }
        inputId.value = mayuscula;
        }
        return inputId.value;
}

function validateForm(){
	/* Escribe tú código aquí */
	var name= document.getElementById('name');
	var lastName= document.getElementById('lastname');
	var email= document.getElementById('input-email');
	var password= document.getElementById('input-password');
	var valor= document.getElementById('checkeador').value;
    toMayus('name');
    toMayus('lastname');
    var isvalid=true;

	if (validator.isText(name.value)){
		removeMessage('name');
		}else{
			createMessage('name','el nombre no es válido');
			isvalid= false;
			}
	if (validator.isText(lastName.value)){
		removeMessage('lastname');
		}else{
			createMessage('lastname','el apellido no es válido');
			isvalid= false;
		}
	if (validator.isEmail(email.value)) {
		removeMessage('input-email');
		}else{
			createMessage('input-email','el email no es válido');
			isvalid= false;
		}
	if (validator.isValidPassword(password.value)) {
		removeMessage('input-password');
		}else{
			createMessage('input-password','el password no es válido');
			isvalid= false;
		}
	if (validator.isSelect(valor)) {
		removeMessage('checkeador');
		}else{
			createMessage('checkeador','no eligio una opcion');
			isvalid= false;
		}
	if(isvalid)
	{
		alert("se envio el formulario");
	}
}
function removeMessage(inputId)
{
	var elemento= document.getElementById(inputId);
	if (elemento.nextSibling != null) {
		elemento.parentNode.removeChild(elemento.nextSibling);
	}
}
function createMessage(inputId, message)
{
	var elemento= document.getElementById(inputId);
	if (elemento.nextSibling == null) {
		var span= document.createElement('span');
		span.innerHTML= message;
		elemento.parentNode.appendChild(span);
	}else
	{
		if(elemento.nextSibling.tagName =='SPAN')
		{
			elemento.nextSibling.innerHTML= message;
		}else{
			elemento.parentNode.removeChild(elemento.nextSibling);
			var span= document.createElement('span');
			span.innerHTML= message;
			elemento.parentNode.appendChild(span);
		}
	}

}