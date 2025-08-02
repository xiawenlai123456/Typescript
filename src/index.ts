(function(){
  abstract class Animal{
    name: string;
    age: number;

    constructor(name:string,age:number){
      this.name=name;
      this.age=age;
    };

    abstract sayHello():void;
  };

  class Dog extends Animal{
   private _sex:string;

    constructor(name:string,age:number,sex:string){
      super(name,age);
      this._sex=sex;
    };
    sayHello(): void {
        console.log(`${this.name}wawawa`);
    };

    get sex(){
      return this._sex;
    }
  };

  const dog = new Dog("dog",12,"male");
  dog.sayHello();
  dog.sex;

  interface myInterface{
    name:string;
    sayHello():void;
  }
  class A implements myInterface{
    name:string;
    constructor(name:string){
      this.name=name;
    };
   sayHello(): void {
       console.log(12);
   }
    
  }

})()

