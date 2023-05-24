const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}



function encriptar(stringEncriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }


    }
    return stringEncriptada

    

}


function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    
}

function desencriptar(stringDesencriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }


    }
    return stringDesencriptada
}
//Función copiar
function copiar() {
  // Obtener el texto del campo de texto 
  var copyText = document.querySelector(".mensaje");

  // Seleccionar el campo de texto
  copyText.select();
  copyText.setSelectionRange(0, 99999); // Para dispositivos moviles

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  

  // Alert the copied text
  alert("Se ha copiado el texto: " + copyText.value);
}
