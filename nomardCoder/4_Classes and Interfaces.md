### 4.0 Classes

```jsx
// 4.0 Classes

// class Player {
// 	constructor (
// 		private firstName: string,
// 		private secondName: string,
// 		public nickname: string
// 	){}
// }

// private 부분은 컴파일된 js 코드에서는 보이지 않는다.
abstract class User {
    constructor(
        private firstName: string,
        private lastName: string,
        public nickname: string
    ) {}
		
		abstract getNickName(): void

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// 추상 클래스: 다른 클래스를 상속받을 수 있는 클래스

class Player extends User {
	getNickName(): void {
			console.log(this.nickname);
			// privaite로 선언한 것들은 불러올 수 있다.
			// protected와 private는 다르다.
			// protected: 외부로부터는 보호되길 원하지만 자식 클래스는 사용하길 원할 때
	}
}

const tani = new Player("tani", "cute", "tanitani");
// const tani2 = new User("tani", "cute", "tanitani"); // error
// 추상 클래스는 오직 다른곳에서 상속받을 만 있는 클래스

console.log(tani.getFullName());

// tani.firstName  //error
//Property 'firstName' is private and only accessible within class 'Player'.ts(2341)
```

### 4.1 Recap

```jsx
abstract class User {
    constructor(
        private firstName: string,
        private lastName: string,
        public nickname: string
    ) {}
		
		abstract getNickName(): void
		// 추상메소드: 구현되지 않은(코드가 없는) 메서드
    protected getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
		//protected로 바꾼 함수를 사용하면 에러는 뜨지만 사용은 할 수 있다.
		// 앞에 무언가 적지 않으면 기본적으로 public이다. 
		// private로 바꾼다면 상속받지 못한다.
}
```

### 챌린지

```jsx
// 4.1 Recap

type Words = {
	[key:string]: string
}

class Dict {
    private words: Words;
    constructor() {
        this.words = {};
    }
    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(term: string) {
      return this.words[term];
    }
		delete(term: string){
			delete this.words[term]
		}
		update(word: Word){
			if (!this.words[word.term]) {
				throw new Error("단어가 존재하지 않습니다.")
			}
			this.words[word.term] = word.def;
		}
		showAll(){
			return this.words
		}
		count(){
			return Object.keys(this.words).length;
		}
	}

class Word {
	constructor(
		public term: string,
		public def: string
	){}
}
```
### 4.2 Interfaces

```jsx
// 4.2 Interfaces

// 값을 보여주고 싶지만 수정은 불가능하게 하고 싶은 경우 readonly
class Word {
    constructor(public readonly term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");

type Player = {
	nickname: string,
	healthBar: number,
}

const tani: Player = {
	nickname: "browndoggy",
	healthBar: 999999
}

// type은 여러 방면으로 쓸 수 있다.

type Food = string
const kimchi2:Food = "idontlikeit"

// 타입은 특정 값만 가질 수도 있다.
type Nickname = string
type Team = "blue" | "yellow" | "red";
type Health = 1 | 5 | 10

type SoccerPlayer = {
    nickname: Nickname
		team: Team
		health: Health
};

const nico: SoccerPlayer = {
    nickname: "nico",
    team: "blue",
		health: 10
};

// 오브젝트 모양을 설명하는 방법 : interface
// 타입스크립트에서 오브젝트의 모양을 알려주는 방법 2가지 : type, interface
// type 키워드는 좀 더 다양한 곳에 사용할 수 있다.
// interface는 사용처가 오브젝트 하나 뿐이다.
// 둘은 같은 역할을 하고 거의 같다. 문법적 차이
interface SoccerPlayer2 {
    nickname: Nickname;
    team: Team;
    health: Health;
};

interface User {
	name: string
}
interface Player3 extends User {}

const bani :Player3 = {
	name: "bani"
}

// readonly도 똑같이 작동한다.

interface User {
    lastname: string;
}

interface User {
    health: number;
}

const dani: Player3 = {
    name: "dani",
		lastname : "d",
		health: 3
};
// 인터페이스가 중복될 경우 하나로 합쳐준다.
```

### 4.3 Interfaces 2

```jsx
// 4.3 interfaces part 2

abstract class UserClass{
	constructor(
		protected firstName: string,
		protected lastName: string
	){}
	abstract sayHi(name: string): string
	abstract fullName():string
}
//아무것도 구현하지 않고 설계도만 제시함

class Plyaer extends UserClass{
	fullName(): string {
			return `${this.firstName} ${this.lastName}`
			// proteced라서 접근 가능하다.
	}
	sayHi(name: string): string {
			return `Hello ${name}. My name is ${this.fullName()}`
	}
}

// 추상화를 원할 때 클래스와 인터페이스의 차이점

// new User  //error 작동하지 않는다.

// 클래스에게 어떻게 (How) 구현할지 알려주지 않지만
// 무엇을 구현할지는(Should) 알려준다.

// 문제는 바닐라 자바스크립트는 abstract가 없다.
// 컴파일시 nommal class로 바뀐다.

// 지금이 interface를 사용해야할 때

interface UserInterface {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

// 코드가 훨씬 가벼워짐
interface Human {
	health: number 
}

class Player2 implements UserInterface, Human {
	constructor(
		public firstName: string,
		public lastName: string,
		public health: number ) {}

	sayHi(name: string): string {
		throw new Error("Method not implemented.");
	}
	fullName(): string {
		throw new Error("Method not implemented.");
	}
}

// abstract로 추상화 한 클래스는 컴파일된 자바스크립트에 나타나지만
// interface로 추상화 한 클래스는 컴파일된 자바스크립트에 나타나지 않는다.
// interface는 클래스가 아니지만 클래스의 모양을 특정짓는다.
```

### 4.4 Recap

```jsx
// 4.4 Recap

// 인터페이스는 내가 원하는 메소드와 property를 클래스가 가지도록 강제할 수 있게 해준다.
// 추상 클래스와 비슷한 보호를 제공하지만 인터페이스는 자바스크립트 파일에서 보이지 않는다.
// 추상 클래스를 사용하면 자바스크립트에서는 일반적인 클래스로 바뀐다. 파일 크기가 커진다는 뜻이다.
// 추상 클래스를 다른 클래스들이 특정 모양을 따르도록 하기 위한 용도로 쓴다면 인터페이스를 쓰는 것이 더 낫다.

// 1. 타입을 쓰고 싶다면 type 키워드
// 2. Object 타입을 쓰고 싶다면 interface (추천)

type PlayerA = {
	name: string
}

// 상속
type PlayerAA = PlayerA & {
	lastName: string
}
// 추가
// type PlayerAA = PlayerA & {
// 	lastName: string
// } // error
const playerA: PlayerAA = {
	name: "nico",
	lastName : "D"
}

interface PlayerB{
	name: string
}

// 상속
interface PlayerBB extends PlayerB{
	lastName: string
}
// 추가
interface PlayerBB {

}
const playerB: PlayerBB = {
	name: "nico",
	lastName: "C"
} 

// 추상클래스 대체하기

type PlayerC = {
	firstName: string
}
interface PlayerD {
	firstName: string
}
class UserC implements PlayerC {
	constructor(
		public firstName: string
	){}
}
class UserD implements PlayerD {
	constructor(
		public firstName: string
	){}
}

// 둘다 같은 문법으로 대체할 수 있다.
```
### 4.5 Recap

```tsx
// 4.5 Polymorphism, 다형성
// 다른 모양의 코드를 가질 수 있게 해준다.
// 다형성을 이룰수 있는 방법 genegric 사용
// concrete 타입은 쓸 필요 없고 placeholder 타입만 쓰면된다.

interface SStorage<T> {
	[key: string]: T
}

class LocalStorage1<T> {
	private storage: SStorage<T> ={}
	set(key: string, value: T){	
		this.storage[key] = value;
	}
	remove(key: string){
		delete this.storage[key]
	}
	get(key:string):T{
		return this.storage[key]
	}
	cleart(){
		this.storage = {}
	}
}

const stringStorage = new LocalStorage1<string>()

stringStorage.get("ket")
stringStorage.set("hello", "hi");
// (method) LocalStorage1<string>.set(key: string, value: string): void

const booleansStorage = new LocalStorage1<boolean>();

booleansStorage.get("xxx")
booleansStorage.set("xxx", false);
// (method) LocalStorage1<boolean>.set(key: string, value: boolean): void
```

### 챌린지

```tsx
interface SStorage<T> {
    [key: string]: T;
}

class LocalStorageAPI<T> {
    private storage: SStorage<T> = {};
    setItem(key: string, value: T) {
        this.storage[key] = value;
    }
    getItem(key: string): T {
        return this.storage[key];
    }
    clearItem(key: string) {
        delete this.storage[key];
    }
    clear() {
        this.storage = {};
    }
}

interface OptionsType {
    enableHighAccuracy: boolean;
    timeout: number;
    maximumAge: number;
}
interface GeolocationPositionType {
    coords: {};
    timestamp: {};
}
interface GeolocationPositionErrorType {
    code: 1 | 2 | 3;
    message: string;
}

class GeolocationAPI {
    private id: number | undefined;
    getCurrentPosition(
        successFn: Function,
        errorFn?: Function,
        optionsObj?: OptionsType
    ) {
        successFn(() => {});
        errorFn && errorFn(() => {});
        optionsObj && console.log(optionsObj);   
    }
    watchPosition(
        successFn: Function,
        errorFn?: Function,
        optionsObj?: OptionsType
    ): number {
				this.getCurrentPosition(successFn, errorFn, optionsObj);
				this.id = 1;
        return this.id;
    }
    clearWatch(id: number) {
        this.id = undefined;
    }
}
```