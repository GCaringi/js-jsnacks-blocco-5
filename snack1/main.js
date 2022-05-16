class Zuchini {
    constructor(species, weight, length){
      this.species = species;
      this.weight = weight;
      this.length = length;
    }
  }
  
  let sum = 0;
  
  for (let i = 0; i < 10; i++){
    const zucchina = new Zuchini("verde", Math.floor(Math.random()*10)+1,  Math.floor(Math.random()*10)+1);
    console.log(zucchina)
    sum += zucchina.weight;
  }
  
  console.log(sum)