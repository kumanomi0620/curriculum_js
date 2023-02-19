class Taiyaki { 
  constructor(ann) { 
    this.ann = ann; 
  } 
  info() { 
    console.log(`中身は${this.ann}です`); 
  } 
} 

const annko = new Taiyaki(`あんこ`); 
annko.info(); 
const cream = new Taiyaki(`クリーム`); 
cream.info(); 
const cheese = new Taiyaki(`チーズ`); 
cheese.info(); 

