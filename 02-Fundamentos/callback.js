// setTimeout(() => {
//     console.log("Hola Mundo");
// }, 3000);


let getUserbyId = (id, callback) => {


    let usuario = {
        nombre: "Roberto",
        id: id
    }


    if (id == 20) {
        callback(`El usuario  con id  ${id}, solicitado no exite en la  DB`)
    } else {
        callback(undefined, usuario);

    }


}


getUserbyId(1, (err, usuario) => {

    if (err) {
        return console.log(err);
    }
    console.log("Usuario de la base de datos: ", usuario);
});