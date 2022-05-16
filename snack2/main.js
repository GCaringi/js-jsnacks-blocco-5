class Zuchini {
    constructor(species, weight, length){
      this.species = species;
      this.weight = weight;
      this.length = length;
    }
  }
  
  const vegetables = [];
  const shortZuchini = [];
  const longZuchini = [];
  
  for (let i = 0; i < 10; i++){
    const zucchina = new Zuchini("verde", Math.floor(Math.random()*10)+1,  Math.floor(Math.random()*30)+1);
    if (zucchina.length < 15){
      shortZuchini.push(zucchina);
    }else{
      longZuchini.push(zucchina)
    }
    vegetables.push(zucchina);
  }
  
  console.log(vegetables);
  
  console.log(shortZuchini);
  console.log(longZuchini);