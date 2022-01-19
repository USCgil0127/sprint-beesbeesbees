var Bee = require('./Bee');

var HoneyMakerBee = function () {

    Bee.call(this);

    this.age = 10;
    //this.color = "yellow";
    this.job = "make honey";
    this.honeyPot = 0;
};


HoneyMakerBee.prototype = Object.create(Bee.prototype); 
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
/// 일단 선언하고 함수를 불러야 되서 밑에 써줘야 한다.

HoneyMakerBee.prototype.makeHoney = function(){
    this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function(){
    this.honeyPot--;
}

module.exports = HoneyMakerBee;
