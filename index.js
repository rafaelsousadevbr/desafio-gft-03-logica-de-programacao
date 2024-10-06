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

        } else {
            console.log(`o ${this.type} atacou usando shuriken`);

        }

    }
}