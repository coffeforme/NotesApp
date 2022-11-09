window.onload = () => {
    start();
}

function start() {
    const btn_enviar = document.getElementById("btn_enviar");
    const btn_eliminar = document.getElementById("btn_eliminar");
    const text_nota = document.getElementById("text_nota");

    btn_enviar.onclick = () => {
        console.log("Estas clickeando el boton enviar");
        anadirNota();
    }

    btn_eliminar.onclick = () => {
        console.log("Estas clickeando el boton eliminar");
        // hacer que elimine lo ingresado en el text_nota
    }
}




function anadirNota() {
    //Funcion que añade la nota a la pagina principal
    console.log(text_nota.value);

    var myBoton =
        `<div class="card col-3" style="height: 150px; background-color: ${text_nota.value == "ABC123" ? "yellow" : "gray"};">`
        + '<div class="card-body">'
        + text_nota.value;

    if (text_nota.value == "ABC123") {
        myBoton = myBoton
            + '<br/>'
            + '<input type="checkbox"> Una  tarea';
    } else if (text_nota.value == "CBD456") {
        myBoton = myBoton
            + '<br/>'
            + '<input type="checkbox"> Otra tarea';
    }


    myBoton = myBoton + '</div>'
        + '</div>';
    const divApp = document.getElementById("app");
    divApp.innerHTML = divApp.innerHTML + myBoton;

};
