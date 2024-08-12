// Solicitar opción del usuario
var opcion = prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesites.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial \n4.- Otras consultas");

// FUNCIONES

// Primera opción
function gestionarBoleta() {
    let opBoleta = prompt("Seleccione una opción \n 1.- Ver Boleta \n 2.- Pagar Cuenta");
    if (opBoleta === "1") {
        alert("Haga click aquí para descargar su boleta.");
    } else if (opBoleta === "2") {
        alert("Usted está siendo transferido. Espere por favor...");
    } else {
        alert("Opción no válida");
    }
}

// Segunda opción
function gestionarLlamadas() {
    let opllamadas = prompt("Seleccione una opción \n 1.- Problemas con la señal \n 2.- Problemas con las llamadas");
    let tipoReclamo;
    if (opllamadas === "1") {
        tipoReclamo = "señal";
    } else if (opllamadas === "2") {
        tipoReclamo = "llamadas";
    }
    let reclamo = prompt("A continuación, escriba su solicitud:");
    alert(`Estimado usuario, su solicitud: ${reclamo} Ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.`);
}

// Tercera opción
function gestionarOferta() {
    let opOferta = prompt("¡Mentel tiene una oferta comercial acorde a tus necesidades! \n Para conocer más información y ser asesorado personalmente por un ejecutivo escribe 'SI' y un ejecutivo te llamará. De lo contrario, ingrese 'NO'");
    let opNormalizada = opOferta.toUpperCase();
    if (opNormalizada === "SI") {
        alert("Un ejecutivo contactará con usted.");
    } else if (opNormalizada === "NO") {
        alert("Gracias por preferir nuestros servicios.");
    } else {
        alert("Opción no válida");
    }
}

// Cuarta opción
function gestionarConsulta() {
    let consulta = prompt("A continuación, escriba su consulta:");
    alert(`Estimado usuario, su consulta: ${consulta} Ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.`);
}

// Menú en sí
function mostrarMenu(opcion) {
    switch(opcion) {
        case "1":
            gestionarBoleta();
            break;
        case "2":
            gestionarLlamadas();
            break;
        case "3":
            gestionarOferta();
            break;
        case "4":
            gestionarConsulta();
            break;
        default:
            alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios.");
    }
}

// Llamando a la función
mostrarMenu(opcion);

