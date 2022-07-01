### 2.0 How TypeScript Works
브라우저는 타입스크립트가 아닌 자바스크립트를 이해한다. 타입스크립트는 컴파일해준다. 타입스크립트는  코드를 작성하고 컴파일하면 멍청한 자바스크립코드가 된다. 근데 코드에 문제가 있으면 컴파일 되지 않는다. 

```jsx
const nico = { name: "탄이" };
nico.hello(); //Property 'hello' does not exist on type '{ name: string; }'
```

```jsx
[1,2,3,4] + false 
//Operator '+' cannot be applied to types 'number[]' and 'boolean'.
```

자바스크립트와 달리 타입스크립트는 바로 에러 표시해준다.

### 2.1 Implicit Types vs Explicit Types
1. 데이터와 변수의 타입을 명시적으로 정의할 수도 있고
2. Javascirpt처럼 변수만 생성하고 넘어가도 된다. ( 이때 TypeScirpt는 타입을 추론해준다.)

```jsx
let a = "hello"
a ="bye"
a = 1 //Type 'number' is not assignable to type 'string'
```

타입을 선언하지 않아도 자동으로 추론해준다.

```jsx
let b : boolean = false
```

타입체커와 명시적으로 소통하는 방식, 타입을 옵션으로 선택하지 않는 방식을 추천한다. 더 쉽고 코드도 짧아서 가독성이 좋다.

```jsx
let c = [1, 2, 3]
c.push("1")
///Argument of type 'string' is not assignable to parameter of type 'number'

let c : number[] = []
```

어떤 때는 명시적 표현이 낫지만 추론하게 두는 것이 낫다.

### 2.2 Types of TS part One
onptinalType, alia

```tsx
// optionalType

const player: Player = {
    name: "코기",
};

if (player.age < 10) {
    //Object is possibly 'undefined
}

```

```tsx

// 별칭 alias
// 반복되는 타입을 선언해준다
type Age = number;
type Player = {
    name: string;
    age?: Age;
};
function playerMaker(name:string) : Player{
	return{
		name:name,
	}
}
const nico = playerMaker("nico")
nico.age = 12
// 타입을 player라고 등록해서 에러가 나지 않는다.
```

### 2.3 Types of TS part Two
readonly, tuple, any

```tsx
// 원한다면 readonly 속성도 넣을 수 있다.
// 자바스크립트는 기본적으로 이런 동작이 없다.

type Age = number;
type Name = string;
type Player = {
	readonly name: Name
	age?: Age
}
function playerMaker(name: string): Player {
    return {
        name: name,
    };
}
const nico = playerMaker("nico")

nico.name = " 지훈"
//Cannot assign to 'name' because it is a read-only property.ts(2540)

const numbers: readonly number[] = [1,2,3,4]
numbers.push(1)
//Property 'push' does not exist on type 'readonly number[]'.

const names: readonly string[] =  ["1", "2"]
names.push("3")
// error
```

```tsx

//Tuple
const plyaer: [string, number, boolean] =["nico", 1, true]
plyaer[0]= 1
//Type 'number' is not assignable to type 'string'.ts(2322)

```

```tsx
// any type = anything
// 모든 타입에 쓸 수 있지만 쓰지 않는 것을 추천한다.
const a : any[] = [1,2,3,4]
const b : any = true
a + b // not error
```

### 2.4 Types of TS part Three

자바스크립트에서 쓰지 않고 오직 typescirpt에서만 사용하는 타입이다.

unknown, void, never

```tsx
//unknown
let a:unknown;

let b = a + 1;
// Object is of type 'unknown'.ts(2571)

if (typeof a === 'number') {
	let b = a + 1 // not error
}

a.toUppserCase() // Cannot read properties of undefined (reading 'toUppserCase') 

if (typeof a === "string") {
	a.toUpperCase() // not error
}

```

```tsx
// void
function hello() {
	console.log("x")
	// void: return 값이 없는 함수
}
```

```tsx
// never: 함수가 절대 return하지 않을 때
// 거의 사용하지 않음
function helloo():never {
	throw new Error ("xxx")
}
function hi(name:string| number) {
	if (typeof name === "string") {
		name
	} else if (typeof name === "number") {
		name
	} else {
		name //never
	}
}
```