console.log("Hola Mundo");
console.log("Sebastian Donoso");
document.write("Hola clase de Programacion Visual");
document.write("<br>")
document.write("Soy Sebastian Donoso");

class Cliente {
    //public id:number;
    public name:string;
    public telefono:number;

    constructor(name:string, telefono:number, id?:number) {
        //this.id = id;
        this.name       =name
        this.telefono   =telefono
    }
}
let cliente:Cliente = new Cliente("Juanito", 13131);
console.log(cliente.name, "Y su numero de telefono es",cliente.telefono)
let cliente2:Cliente = new Cliente("Pedro",988163);
console.log(cliente2.name, "Y su numero de telefono es",cliente.telefono)

class Saludo {
    public saludo:string
    
    constructor(saludo:string) {
    this.saludo         =saludo
    }
}

let saludo:Saludo = new Saludo("Hola, como estan");
console.log(saludo.saludo)
document.write("<br>")
document.write(saludo.saludo)