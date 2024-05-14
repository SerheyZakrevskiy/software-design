class Virus {
    constructor(weight, age, name, species, children = []) {
      this.weight = weight;
      this.age = age;
      this.name = name;
      this.species = species;
      this.children = children;
    }
  
    clone() {
      const proto = Object.getPrototypeOf(this);
      const cloned = Object.create(proto);
      cloned.weight = this.weight;
      cloned.age = this.age;
      cloned.name = this.name + '_clone';
      cloned.species = this.species;
      cloned.children = this.children.map(child => child.clone());
      return cloned;
    }
  }
  

const firstGeneration = [
    new Virus(10, 1, 'Virus1', 'Coronavirus'),
    new Virus(8, 2, 'Virus2', 'Influenza'),
    new Virus(12, 1, 'Virus3', 'Ebola')
  ];
  

  firstGeneration[0].children.push(new Virus(5, 1, 'Child1', 'Coronavirus'));
  firstGeneration[1].children.push(new Virus(4, 1, 'Child2', 'Influenza'));
  firstGeneration[1].children.push(new Virus(3, 1, 'Child3', 'Influenza'));
  firstGeneration[2].children.push(new Virus(6, 1, 'Child4', 'Ebola'));


const clonedViruses = firstGeneration.map(virus => virus.clone());


clonedViruses.forEach(clonedVirus => {
    console.log(clonedVirus);
});
