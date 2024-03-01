import { usuarios } from "../model/Usuarios.js"
console.log(usuarios)

usuarios.map(function(usuario){
    console.log(usuario)
})

let usuario = prompt('Ingrese un usuario: ')
let contrasena = prompt('Ingrese una contraseña: ')

if(usuario == usuarios[0].user && contrasena==usuarios[0].pss){
    console.log('Bienvenido')
}else{
    console.log('Error')
}