window.onload = () => {
    start();;
}

function start() {
    const btn_enviar = document.getElementById("btn_enviar")
    const btn_eliminar = document.getElementById("btn_eliminar")
    const text_nota = document.getElementById("text_nota")

    btn_enviar.onclick = () => {
        console.log("Estas clickeando el boton enviar")
        anadirNota();
    }

    btn_eliminar.onclick = () => {
        console.log("Estas clickeando el boton eliminar")
        // hacer que elimine lo ingresado en el text_nota
    }


}




function anadirNota() {
    //Funcion que añade la nota a la pagina principal
    console.log(text_nota.value)
    const createdNotesDiv = document.getElementById("createdNotes");
    const newElement = document.createElement("p"); 
    newElement.textContent = "Soy un parrafo nuevo!";

};
