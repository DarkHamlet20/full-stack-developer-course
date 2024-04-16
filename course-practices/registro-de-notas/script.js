function agregarDatos() {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var matricula = document.getElementById("matricula").value;
    var curso = document.getElementById("curso").value;

    var tabla = document.getElementById("tablaEstudiantes").getElementsByTagName('tbody')[0];
    var fila = tabla.insertRow();
    var celdaNombre = fila.insertCell(0);
    var celdaApellido = fila.insertCell(1);
    var celdaMatricula = fila.insertCell(2);
    var celdaCurso = fila.insertCell(3);
    var celdaAcciones = fila.insertCell(4);

    celdaNombre.innerHTML = nombre;
    celdaApellido.innerHTML = apellido;
    celdaMatricula.innerHTML = matricula;
    celdaCurso.innerHTML = curso;
    celdaAcciones.innerHTML = '<button onclick="editarFila(this)">Editar</button> <button onclick="eliminarFila(this)">Eliminar</button>';
    limpiarInputs()
}


// Función para editar una fila
function editarFila(btn) {
    var fila = btn.parentNode.parentNode;
    var celdas = fila.getElementsByTagName('td');
    
    for (var i = 0; i < celdas.length - 1; i++) { // No necesitamos editar la última celda (acciones)
        var valorActual = celdas[i].innerHTML;
        celdas[i].innerHTML = '<input type="text" value="' + valorActual + '">';
    }
    
    // Cambiamos el botón "Editar" por un botón "Guardar"
    btn.innerHTML = 'Guardar';
    btn.setAttribute('onclick', 'guardarEdicion(this)');
}

// Función para guardar la edición de una fila
function guardarEdicion(btn) {
    var fila = btn.parentNode.parentNode;
    var celdas = fila.getElementsByTagName('td');
    
    for (var i = 0; i < celdas.length - 1; i++) { // No necesitamos editar la última celda (acciones)
        var nuevoValor = celdas[i].querySelector('input').value;
        celdas[i].innerHTML = nuevoValor;
    }
    
    // Cambiamos el botón "Guardar" de nuevo a "Editar"
    btn.innerHTML = 'Editar';
    btn.setAttribute('onclick', 'editarFila(this)');
    limpiarInputs()
}

function limpiarInputs() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("matricula").value = "";
    document.getElementById("curso").value = "";
}

// Función para eliminar una fila
function eliminarFila(btn) {
    var fila = btn.parentNode.parentNode;
    fila.parentNode.removeChild(fila);
}

document.getElementById("registroForm").addEventListener("submit", agregarDatos);