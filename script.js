 /*
 a = ai
 e = enter
 i = imes
 o = ober
 u = ufat 
 */

 function encriptar(){
/*var nombre = Toma_informacion_del_html("nombreDelId").convierte en minusculas*/
    var texto = document.getElementById("inputTexto").value.toLowerCase();
 
// "/ /", sirve para q remplace toda la linea
// "i",afecta tanto mayusculas como minusculas E o e, 
// "g", para toda la linea
// "m", multiples líneas o parrafo
    var txtCifrado = texto.replace(/e/igm,"enter");
    /*remplazame "e" por "enter" */
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

//cuando toque el boton va a desaparecer la imagen de muñeco
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display ="inherit";
 }

 function desencriptar(){
    /*var nombre = Toma_informacion_del_html("nombreDelId").convierte en minusculas*/
        var texto = document.getElementById("inputTexto").value.toLowerCase();

        var txtCifrado = texto.replace(/enter/igm,"e");
        /*remplazame "e" por "enter" */
        var txtCifrado = txtCifrado.replace(/ober/igm,"o");
        var txtCifrado = txtCifrado.replace(/imes/igm,"i");
        var txtCifrado = txtCifrado.replace(/ai/igm,"a");
        var txtCifrado = txtCifrado.replace(/ufat/igm,"u");
    
    //cuando toque el boton va a desaparecer la imagen de muñeco
        document.getElementById("imgDer").style.display = "none";
        document.getElementById("texto").style.display = "none";
        document.getElementById("texto2").innerHTML = txtCifrado;
        document.getElementById("copiar").style.display = "show";
        document.getElementById("copiar").style.display ="inherit";
}

function copy(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se copio!");
}