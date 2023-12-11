class Ninja {
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName = () => {
        console.log(this.nombre);
    }
    showStats = () => {
        console.log(this.nombre, this.fuerza, this.velocidad, this.salud);
    }
    drinkSake = () => {
        this.salud += 10;
    }
}


class Sensei extends Ninja{
    constructor(nombre){
        super();
        this.nombre = nombre;
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
    }
    speakWisdom = () => {
        this.drinkSake();
        console.log("Sabes cuál es el problema? Imaginarte el algoritmo y no programarlo")
    }
}

let leonardo = new Ninja("Leonardo", 100);
leonardo.sayName();
leonardo.showStats();
leonardo.drinkSake();
leonardo.showStats();

let paul = new Sensei("Paul", 200);
paul.sayName();
paul.showStats();
paul.speakWisdom(); // Debería imprimir la sabiduría y aumentar la salud
paul.showStats();