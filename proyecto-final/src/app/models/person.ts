export class Person {
    edad: number;
    nombre: String;
    apellido: String;
    dni: number

    constructor(edad: number, nombre: string, apellido: string, dni: number ) {
        this.edad = edad;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }
}
