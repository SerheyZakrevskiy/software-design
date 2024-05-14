class HeroBuilder {
    constructor() {
      this.hero = new Hero();
    }
  
    setHeight(height) {
      this.hero.height = height;
      return this;
    }
  
    setBuild(build) {
      this.hero.build = build;
      return this;
    }
  
    setHairColor(hairColor) {
      this.hero.hairColor = hairColor;
      return this;
    }
  
    setEyeColor(eyeColor) {
      this.hero.eyeColor = eyeColor;
      return this;
    }
  
    setOutfit(outfit) {
      this.hero.outfit = outfit;
      return this;
    }
  
    setInventory(inventory) {
      this.hero.inventory = inventory;
      return this;
    }
  
    build() {
      return this.hero;
    }
  }

class EnemyBuilder {
    constructor() {
      this.enemy = new Enemy();
    }
  
    setHeight(height) {
      this.enemy.height = height;
      return this;
    }
  
    setBuild(build) {
      this.enemy.build = build;
      return this;
    }
  
    setHairColor(hairColor) {
      this.enemy.hairColor = hairColor;
      return this;
    }
  
    setEyeColor(eyeColor) {
      this.enemy.eyeColor = eyeColor;
      return this;
    }
  
    setOutfit(outfit) {
      this.enemy.outfit = outfit;
      return this;
    }
  
    setEvilDeeds(evilDeeds) {
      this.enemy.evilDeeds = evilDeeds;
      return this;
    }
  
    build() {
      return this.enemy;
    }
  }
  

  class Hero {
    constructor() {
      this.height = '';
      this.build = '';
      this.hairColor = '';
      this.eyeColor = '';
      this.outfit = '';
      this.inventory = '';
    }
  
    introduce() {
      console.log(`I am a hero! My height is ${this.height}, build is ${this.build}, hair color is ${this.hairColor}, eye color is ${this.eyeColor}, outfit is ${this.outfit}, and I have ${this.inventory}.`);
    }
  }
  

  class Enemy {
    constructor() {
      this.height = '';
      this.build = '';
      this.hairColor = '';
      this.eyeColor = '';
      this.outfit = '';
      this.evilDeeds = [];
    }
  
    introduce() {
      console.log(`I am an enemy! My height is ${this.height}, build is ${this.build}, hair color is ${this.hairColor}, eye color is ${this.eyeColor}, outfit is ${this.outfit}, and I have committed the following evil deeds: ${this.evilDeeds.join(', ')}.`);
    }
  }
  

  class Director {
    constructor(builder) {
      this.builder = builder;
    }
  
    createCharacter(height, build, hairColor, eyeColor, outfit, inventory) {
      return this.builder
        .setHeight(height)
        .setBuild(build)
        .setHairColor(hairColor)
        .setEyeColor(eyeColor)
        .setOutfit(outfit)
        .setInventory(inventory)
        .build();
    }
  
    createEnemy(height, build, hairColor, eyeColor, outfit, evilDeeds) {
      return this.builder
        .setHeight(height)
        .setBuild(build)
        .setHairColor(hairColor)
        .setEyeColor(eyeColor)
        .setOutfit(outfit)
        .build();
    }
  }
  const heroBuilder = new HeroBuilder();
  const enemyBuilder = new EnemyBuilder();
  
  const director = new Director(heroBuilder);
  
  const myHero = director.createCharacter('tall', 'muscular', 'blonde', 'blue', 'armor', 'sword');
  myHero.introduce();
  
  const myEnemy = director.createEnemy('average', 'thin', 'black', 'red', 'dark cloak', ['burning villages', 'kidnapping princesses']);
  myEnemy.introduce();
  