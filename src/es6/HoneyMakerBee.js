const Bee = require('./Bee');

class HoneyMakerBee extends Bee {
  // TODO..
  
  constructor( ){
    super();
    this.age = 10;
    this.color = "yellow";
    // 상속 받아서 엘로우로 바꿨다.
    this.job = "make honey";
    this.honeyPot = 0;

  }

  makeHoney(){
    this.honeyPot += 1;
  }

  giveHoney(){
    this.honeyPot -= 1;
  }


}

module.exports = HoneyMakerBee;
