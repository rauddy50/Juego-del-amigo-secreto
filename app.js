// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nuevoAmigo = document.getElementById("amigo").value;

    if (nuevoAmigo) {
        amigos.push(nuevoAmigo); // Agregar nuevo amigo a la lista
        mostrarAmigos(); // Actualizar la lista
        document.getElementById("amigo").value = ""; // Limpiar input
    } else {
        alert("Por favor, introduce un nombre valido.");
    }
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista para agregar nuevos elementos

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML = "No hay amigos para sortear.";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; // Obtener el nombre del amigo sorteado

    document.getElementById("resultado").innerHTML = `El amigo sorteado es: ${amigoSorteado} !`;
}