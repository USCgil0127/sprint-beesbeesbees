## Beesbeesbees

# Read Me

객체 지향 프로그래밍의 특징 중 하나는, 현실 세계의 모델을 코드로 옮기는데 유리하다는 것입니다. 그리고 특별히 이번 시간에는 다형성과 상속에 대해 다룹니다.
먼저 해당 개념을 충분히 이해하고 여러분이 이해한 바를 정리한 후, 실제로 코드로 작성하는 시간을 갖게 됩니다. (Sprint - Beesbeesbees)

this나 함수 메소드의 복습이 필요하다면 이번에 확실히 알아두시기 바랍니다.

그 후에 배운 것을 실제로 눈으로 확인할 수 있다면 더 좋겠죠? 객체 지향 개념을 담아 실제로 브라우저에서 작동하는 프로그램으로 만들어봅시다. 이는 Subclass Dance Party라는 스프린트에서 연습해볼 것입니다.
이전에 배웠던 DOM, 이벤트 그리고 다양한 CSS 기법을 사용해보시기 바랍니다. 여러분이 어떤 결과를 만들어내던간에 그것은 여러분의 자유지만, 실무에서 쓰일법한 CSS 속성이나 기본적인 이벤트는 꼭 사용해보면 좋겠습니다.

## Before You Learn
- `new` 키워드를 이용한 인스턴스 생성시 사용하는 `this` 키워드에 대한 이해
- 함수 메소드 `call`, `apply`의 사용법과 첫번째 인자에 대한 이해
- ES6 (`class` 키워드)를 이용하여 클래스와 인스턴스를 만드는 방법
  - prototype에 달려있는 메소드나 속성이 인스턴스와 무슨 관계가 있는지, 어떻게 쓰이는지에 대한 이해 (예: `Car.prototype.drive`, `Number.prototype.padLeft`)
- DOM을 이용해 동적으로 HTML element를 화면에 표시하는 방법

## Achievement Goals
### BeesBeesBees
- 객체 지향 프로그래밍의 네가지 특징을 이해할 수 있다.
- 인스턴스를 생성하는(Instantiation) 다양한 방법 중 ES5의 방법과 ES6 class 키워드를 이용한 방법을 이해할 수 있다.
- 객체 지향 프로그래밍(OOP)의 다형성(Polymorphism)과, 상속(Inheritance)의 개념을 이해하고 코드로 작성할 수 있다.
- 상속관계를 가진 현실 세계의 모델을 코드로 작성할 수 있다.
- Class 상속의 원리를 이해할 수 있다.
  - Prototype chain을 이해하고 설명할 수 있다. (constructor, `__proto__`)

# BeesBeesBees

가장 고귀한 곤충인 꿀벌은, 일생동안 특정 발달 단계를 하나하나 거칩니다. 각 단계에는 꿀벌이 갖는 고유한 특징과 작동이 있습니다. 이 repository에는 다양한 종류의 꿀벌 Class가 존재합니다. 각 단계별로 꿀벌 Class가 있고, 이를 통해 ES5(pseudoclassical) 패턴 및 ES6 class keyword를 이용한 상속을 배우게 됩니다. (상속은 종종 subclassing 이라고 표현합니다) 어떻게 꿀벌 클래스를 만들어야하는지는 아래 내용을 참고하세요!

## Getting Started

- npm install을 통해 필요한 npm package를 설치하세요.
- src 디렉토리 안에는 es6, pseudoclassical이라는 디렉토리가 존재합니다. 각각 디렉토리에 해당하는 패턴으로 구현하세요.
- pseudoclassical한 방법으로는, prototype, constructor 키워드를 이용합니다.
- ES6 방법으로는, super, extends, class 키워드를 이용합니다.
- 각각의 클래스마다 여러개의 테스트가 작성되어 있지만, 테스트는 순차적으로 진행됩니다. 따라서 작성된 순서대로 테스트를 진행하셔야 합니다. 현재 테스트가 통과해야 그 다음 테스트를 진행 할 수 있습니다.
- Grub.js 파일부터 작성을 시작하세요. Grub은 다른 모든 Bee의 기반이 될 것입니다. 모든 Bee에 대한 구현이 끝나셨다면, /test에 작성되어있는 모든 Bee에 대한 요구사항이 전부 만족하였는지 테스트를 통해 확인해 보세요. npm test를 통해 테스트를 진행할 수 있습니다.

## Bare Minimum Requirements

- 다음 Class Structure 및 스펙을 따라 구현하여 준비된 모든 테스트를 통과하세요.

#### Class Structure
```js
├── Grub
│   └── Bee
│       ├── HoneyMakerBee
│       └── ForagerBee
```
위의 class structure에서 볼 수 있듯이 모든 Bee는 Grub을 기반으로 하여 각자의 특성에 맞는 일을 받게 됩니다. 공통된 특성을 기반으로 각자에게 맞는 특성을 부여받을 수 있는것은 상속이 이루어졌음을 의미합니다.

#### Grub
- Create a Grub class, in ES6 style, with:
  - an age property that is set to 0
  - a color property that is set to pink
  - a food property that is set to jelly
  - an eat method that returns 'Mmmmmmmmm jelly'
  
####   Bee
- Create a Bee class, in ES6 style, with:
  - the Grub superclass
  - an age property that is set to 5
  - a color property that is set to yellow
  - a food property that is inherited from grub
  - an eat method that is inherited from grub
  - a job property that is set to Keep on growing
  
####   HoneyMakerBee
- Create a HoneyMakerBee class, in ES6 style, with:
  - the Bee superclass
  - an age property that is set to 10
  - a job property that is set to make honey
  - a color property inherited from bee that is set to yellow
  - a food property that is inherited from grub
  - an eat method that is inherited from grub
  - a honeyPot property that is set to 0
  - a makeHoney method that adds 1 to that honeyBee's honeyPot
  - a giveHoney method that subtracts 1 from that honeyBee's honeyPot
  
#### ForagerBee
- Create a ForagerBee class, in ES6 style, with:
  - the Bee superclass
  - an age property that is set to 10
  - a job property that is set to find pollen
  - a color property inherited from bee that is set to yellow
  - a food property that is inherited from grub
  - an eat method that is inherited from grub
  - a canFly property that is set true
  - a treasureChest property that is set to an empty array []
  - a forage method that allows the bee to add a treasure to the treasureChest
  
## Optional Requirements

Optional Requirements는 test case가 없습니다. 직접 test case도 작성해 보세요.

#### RetiredForagerBee
- Create a RetiredForagerBee class, in ES6 style, with:
  - the ForagerBee superclass
  - an age property that is set to 40
  - a job property that is set to gamble
  - a canFly property that is set to false
  - a color property that is set to grey
  - a forage method that returns I am too old, let me play cards instead
  - a food property that is inherited from grub
  - an eat method that is inherited from grub
  - a treasureChest property inherited from ForagerBee that is set to an empty array []
  - an always winning gamble method that allows the bee to add a treasureto the treasureChest

----------

[필자가 정리한 Inheritance pattern in JS](https://velog.io/@gil0127/Inheritance-Patterns-akh39pzm#%EC%88%98%ED%98%B8%EC%B2%9C%EC%82%AC-babel)

# Sprint 진행 시, 알게된 점
- 조부모의 속성과 메소드도 상속이 된다.

- `Object.create()` 방식으로 상속할 시에, `Object.create()`를 통해 새로운 객체가 생성되므로, 프로토타입을 이용해 만들어지는 메소드보다 먼저 써줘야 한다.

```js
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

```
