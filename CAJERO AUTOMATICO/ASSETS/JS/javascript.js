let option = 0
let validacion = false
let usuarioSeleccionado = ""
let saldoSeleccionado = 0
let indiceUsuarioSeleccionado = -1

const usuarios = [
    { nombre: 'bar sinson', contraseña: "cawabonga123", saldo: 50000 },
    { nombre: 'omero sinson', contraseña: "rosquillas456", saldo: 200000 },
    { nombre: 'mars sinson', contraseña: "mmmmmmm789", saldo: 500000 },
]

function validarUsuario(usuarioNormalizado, contraseña) {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre === usuarioNormalizado && usuarios[i].contraseña === contraseña) {
            validacion = true;
            usuarioSeleccionado = usuarios[i].nombre;
            saldoSeleccionado = usuarios[i].saldo;
            indiceUsuarioSeleccionado = i;
            break;
        }
    }
}

function verSaldo() {
    alert(`Su saldo es de $${saldoSeleccionado} pesos`)
}

function realizarGiro() {
    let monto = parseFloat(prompt(`Su saldo actual es: $${saldoSeleccionado} \nIngrese el monto que desea girar:`))
    if (monto > saldoSeleccionado) {
        alert("Saldo insuficiente para realizar el giro.")
    } else {
        saldoSeleccionado -= monto
        usuarios[indiceUsuarioSeleccionado].saldo = saldoSeleccionado;
        alert(`Giro realizado. Su nuevo saldo es de $${saldoSeleccionado}.`)
    }
}

function realizarDeposito() {
    let monto = parseFloat(prompt(`Su saldo actual es: $${saldoSeleccionado} \nIngrese el monto que desea depositar:`));
    saldoSeleccionado += monto;
    usuarios[indiceUsuarioSeleccionado].saldo = saldoSeleccionado;
    alert(`Depósito realizado con éxito. Su nuevo saldo es de $${saldoSeleccionado} pesos.`);
}

function solicitarUsuario() {
    let usuario = prompt("Ingrese su nombre: ")
    let usuarioNormalizado = usuario.toLowerCase()
    let contraseña = prompt("Ingrese su contraseña: ")
    
    validarUsuario(usuarioNormalizado, contraseña)
    
    if (validacion === true) {
        alert(`Bienvenido ${usuarioSeleccionado}`)
        menu();
    } else {
        alert("Usuario o contraseña incorrectos")
        validacion = false;
        solicitarUsuario();
    }
}

function menu() {
    option = prompt("Seleccione qué desea hacer: \n1.- Ver saldo \n2.- Realizar giro \n3.- Realizar depósito \n4.- Salir");

    switch (option) {
        case "1":
            verSaldo();
            break;
        case "2":
            realizarGiro();
            break;
        case "3":
            realizarDeposito();
            break;
        case "4":
            alert("Gracias por utilizar nuestros servicios.");
            return;
        default:
            alert("Opción no válida. Intente nuevamente.");
            break;
    }

    menu();
}

solicitarUsuario();


