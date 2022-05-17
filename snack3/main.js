class car {
    constructor(brand, model, powerSupply){
        this.brand = brand;
        this.model = model;
        this.powerSupply = powerSupply;
    }
}

const allCars = [];

const brands = ["Tesla", "Fiat", "Alfa", "Mercedes", "Audi"];
const models = ["Supercar", "Minivan", "4x4", "Cross-country", "Sedan", "Coupè"];
const powerSupplies = ["Gas", "Diesel", "Methane", "Gpl", "Electric"];

for (let i = 0; i < 10; i++){
  const newCar = new car(brands[Math.floor((Math.random()*brands.length))], models[Math.floor((Math.random()*models.length))], powerSupplies[Math.floor((Math.random()*powerSupplies.length))]);
  allCars.push(newCar);
}

const fuelCars = allCars.filter((cars) => (cars.powerSupply === "Gas"));
const dieselCars = allCars.filter((cars) => (cars.powerSupply === "Diesel"));
const otherCars = allCars.filter((cars) => (cars.powerSupply !== "Gas" && cars.powerSupply !== "Diesel"));

console.log(fuelCars);
console.log(dieselCars);
console.log(otherCars);


