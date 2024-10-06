class hero {

    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        if (this.type === 'mago') {
            console.log(`o ${this.type} atacou usando magia`);

        } else if (this.type === 'guerreiro') {
            console.log(`o ${this.type} atacou usando espada`);

        } else if (this.type === 'monge') {
            console.log(`o ${this.type} atacou usando artes marciais`);

        } else if (this.type === 'ninja') {
            console.log(`o ${this.type} atacou usando shuriken`);

        } else{
            console.log(`tipo de guerreiro não especificado`)
        }
    }
}

const hero01 =  new hero('Veridiano', 37, 'mago');
hero01.attack()

const hero02 =  new hero('Dante', 28, 'guerreiro');
hero02.attack()

const hero03 =  new hero('Jackie Chan', 43, 'monge');
hero03.attack()

const hero04 =  new hero('Roronoa Zoro', 23, 'ninja');
hero04.attack()