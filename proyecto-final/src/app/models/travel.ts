export class Travel {
    salida: string;
    llegada: string;
    horasalida: number;
    horallegada: number;

    constructor(salida: string, llegada: string, horasalida: number, horallegada: number) {
        this.salida = salida;
        this.llegada = llegada;
        this.horasalida = horasalida;
        this.horallegada = horallegada;
    }
}
