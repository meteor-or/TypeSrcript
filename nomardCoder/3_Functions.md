### 3.0 Call Signatures

 다형성, 오버로딩, 콜시그니쳐

```jsx
//call signature

const add = (a: number, b: number) => a+b
// 어떻게 함수르 호출하는지 알려줌

type Add = (a:number, b: number) => number

const add2:Add = (a,b) => a + b;

// 디자인시 타입을 먼저 생각하고 구현하기
```

### 3.1 Overloading

```jsx
// overloading
// 오버로딩 함수를 작성하는 일은 없지만 다운로드 라이브러리 함수가 사용할 가능성이 높다.
// 함수가 여러 개 call signature 을 가지고 있을 때 발생시킴

type Add = {
	(a: number, b: number): number
	(a: number, b: string): number}

	const add2: Add = (a, b) => {
		if (typeof b === "string") return a;
		return a + b
	}

//next.js 라이브러리 예시

Router.push("/home")
Router.push({
	path:"/home",
	state:1
};
//object랑 string 모두 들어감 => overloading

type Config = {
	path: string,
	stat: object
}

type Push = {
	(path:string):void,
	(config: Config): void
}

const push:Push = (config) => {
	if (typeof config === "string") {
		console.log(config)
	}
	else{ 
		console.log(config.path)
	}
}
type Add = {
	(a: number, b: number): number
	(a: number, b: number, c: number): number}
	// v파라미터 개수가 다름 c는 옵션

const add4:Add = (a,b, c?:number){
	if (c) {
		return a + b+ c;
	}
}
```
### 3.2 Polymorphism

다형성: 여러가지 다른 형태, 모양

```jsx
type SuperPrint ={
	// (arr: number[]): void
	// (arr: boolean[]): void
	// (arr: string[]): void
	// (arr: (number|boolean|string)[]): void
	<TypePlaceholder>(arr: TypePlaceholder[]): void
	// 타입스크립트가 알아서 타입을 만들어줌
	// 제네릭을 사용하는 방법 중 하나
}

const superPrint: SuperPrint = (arr) => {
	arr.forEach( i => console.log(i))
}

superPrint([1,2,3])
superPrint([true, false])
superPrint([1,2,true, false]);

// call sigature가 3개나 있음
// generic type 추가해야한다.
// 이전에 우리가 사용한 타입은 concrete
```

### 3.3 Generic Recap

```jsx
type SuperPrint ={
	<T, M>(a: T[], b: M): T
	//타입을 추가하고 싶으면 앞에 적어주면된다.
}

const superPrint: SuperPrint = (arr) => arr[0]

superPrint([1,2,3], 1)
superPrint([true, false], 2)
superPrint([1,2,true, false], 3);

```

### 3.4 Conclusions

```jsx
function superPrint<T>(a:T[]) {
	return a[0]
}

superPrint([1,2,3])
superPrint([true, false])
superPrint([1,2,true, false]);

// 라이브러리를 만들거나 다른 개발자가 사용할 기능을 개발하는 경우에는 제네릭이 유용하다.
// 하지만 평소에는 사용할 필요 없다.
```

```jsx
type Player<E> = {
	name: string
	extraInfo: E
}

type taniExtra = {
	favFood: string
}
type taniPlayer = Player<taniExtra>;
// 타입을 생성하고 계속 확장할 수 있다.
const tani: taniPlayer = {
    name: "tani",
    extraInfo: {
        favFood: "소간",
    },
};

type a = Array<number>
```

### 챌린지

- generics. call signatures 등 이때까지 배운 것을 활용하여 아래 함수를 구현하세요.
- `last(arr)`: 이 함수는 array의 마지막 아이템을 리턴해야 합니다.
- `prepend(arr, item)`: 이 함수는 array의 시작에 아이템을 넣고, 리턴해야 합니다.

```jsx
const last = function<T>(arr: T[]) {
	return arr.pop()
}

type prependType = {
	<T>(arr: T[], item: T): T[]
}
const prepend: prependType = function (arr, item) {
	arr.unshift(item)
	return arr
}
```