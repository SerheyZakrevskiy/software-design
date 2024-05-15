class Warrior {
    constructor(name) {
        this.name = name;
        this.inventory = [];
    }

    equip(item) {
        this.inventory.push(item);
    }

    showInventory() {
        console.log(`Інвентар ${this.name}:`);
        this.inventory.forEach(item => {
            console.log(`- ${item}`);
        });
    }
}

class Mage {
    constructor(name) {
        this.name = name;
        this.inventory = [];
    }

    equip(item) {
        this.inventory.push(item);
    }

    showInventory() {
        console.log(`Інвентар ${this.name}:`);
        this.inventory.forEach(item => {
            console.log(`- ${item}`);
        });
    }
}

class Paladin {
    constructor(name) {
        this.name = name;
        this.inventory = [];
    }

    equip(item) {
        this.inventory.push(item);
    }

    showInventory() {
        console.log(`Інвентар ${this.name}:`);
        this.inventory.forEach(item => {
            console.log(`- ${item}`);
        });
    }
}


class EquipmentDecorator {
    constructor(hero) {
        this.hero = hero;
    }

    equip(item) {
        this.hero.equip(item);
    }

    showInventory() {
        this.hero.showInventory();
    }
}

class ArmorDecorator extends EquipmentDecorator {
    constructor(hero) {
        super(hero);
        this.equip("Armor");
        this.equip("Shield");
        this.equip("Helmet");
    }
}

class WeaponDecorator extends EquipmentDecorator {
    constructor(hero) {
        super(hero);
        this.equip("Sword");
        this.equip("Bow");
        this.equip("Staff");
    }
}

class ArtifactDecorator extends EquipmentDecorator {
    constructor(hero) {
        super(hero);
        this.equip("Ring");
        this.equip("Amulet");
        this.equip("Talisman");
    }
}


function main() {
    const warrior = new Warrior("Воїн");
    const mage = new Mage("Маг");
    const paladin = new Paladin("Паладін");


    const warriorWithArmor = new ArmorDecorator(warrior);
    const mageWithWeapon = new WeaponDecorator(mage);
    const paladinWithArtifact = new ArtifactDecorator(paladin);

    warriorWithArmor.showInventory();
    mageWithWeapon.showInventory();
    paladinWithArtifact.showInventory();
}

main();
