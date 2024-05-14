class Device {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Laptop extends Device {
    constructor(name, brand) {
      super(name);
      this.brand = brand;
    }
  }
  
  class Netbook extends Device {
    constructor(name, brand) {
      super(name);
      this.brand = brand;
    }
  }
  
  class EBook extends Device {
    constructor(name, brand) {
      super(name);
      this.brand = brand;
    }
  }
  
  class Smartphone extends Device {
    constructor(name, brand) {
      super(name);
      this.brand = brand;
    }
  }
  
  class DeviceFactory {
    createDevice(type, brand) {
      switch (type) {
        case 'Laptop':
          return new Laptop(type, brand);
        case 'Netbook':
          return new Netbook(type, brand);
        case 'EBook':
          return new EBook(type, brand);
        case 'Smartphone':
          return new Smartphone(type, brand);
        default:
          console.log('Unsupported device type');
          return null;
      }
    }
  }

  const factory = new DeviceFactory();
  
  const device1 = factory.createDevice('Laptop', 'Iphone');
  const device2 = factory.createDevice('Smartphone', 'Samsung');
  const device3 = factory.createDevice('Laptop', 'Lenovo');
  const device4 = factory.createDevice('Smartphone', 'Nokia');
  const device5 = factory.createDevice('EBook', 'Huawei');
  const device6 = factory.createDevice('EBook', 'Lenovo');
  const device7 = factory.createDevice('Netbook', 'Pocco');
  const device8 = factory.createDevice('Smartphone', 'Xiomi');
  
  
  
  console.log(device1);
  console.log(device2);
  console.log(device3);
  console.log(device4);
  console.log(device5);
  console.log(device6);
  console.log(device7);
  console.log(device8);
  
  