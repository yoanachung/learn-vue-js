# ES6

## ES6란?
- ECMAScript 2015
- 최근 프론트 프레임워크 React, Angular, Vue에서 권고하는 언어 형식
- ES5보다 간결과 문법

## Babel
- 구 버전 브라우저에서는 ES6의 기능을 지원하지 않기도 하기 때문에 transpiling이 필요하다.
- Babel은 ES6의 문법을 각 브라우저와 호환 가능한 ES5로 변환한다. (transpiling)

## 먼저, ES5의 주요 특징 - 변수 스코프와 호이스팅
- 블록에 상관 없이 스코프가 설정된다.
    ```
    var sum = 0;
    for (var i = 0; i <= 5; i++) {
        sum = sum + i;
    }
    console.log(sum); //15
    console.log(i); //6 - 블록을 벗어났지만 i에 접근 가능하다
    ```
- Hoisting이란 선언한 함수와 변수를 해석기가 가장 상단에 있는 것처럼 인식한다.
- 해석기는 코드의 순서에 상관 없이 함수선언식과 변수를 위한 메모리 공간을 먼저 확보한다.
- 따라서, `function a()`와 `var`는 코드 최상단에 끌어 올려진 것처럼 보인다.
- 값의 연산과 할당은 마지막에 이뤄진다.
    ```
    function willBeOveridden() {
        return 10;
    }
    willBeOveridden(); //5 - 10일 것 같지만 5다
    function willBeOveridden() {
        return 5;
    }
    ```
    ```
    function willBeOveridden() {
        return 10;
    }
    willBeOveridden(); //10 - 이번엔 5일 것 같지만 10이다
    var willBeOveridden = function() {
        return 5;
    }
    ```

## const & let
- 새로운 변수 선언 방식
- 블록 단위 `{}`로 변수의 범위를 제한한다.
    ```
    let sum = 0;
    for (let i = 0; i <= 5; i++) {
        sum = sum + i;
    }
    console.log(sum); //15
    console.log(i); //Uncaught ReferenceError: i is not defined
    ```
- `const`: 한 번 선언한 값에 대해서 변경할 수 없다. (상수)
    - 하지만 객체나 배열의 내부는 변경할 수 있다.
- `let`: 한 번 선언한 값에 대해서 같은 블록 안에서 다시 선언할 수 없다.

## Arrow Function
- 함수를 정의할 때 `function` 키워드를 사용하지 않고 `=>`로 대체한다.
    ```
    //ES5
    var sum = function(a, b) {
        return a + b;
    }

    //ES6
    var sum = (a, b) => a + b;
    ```
- 화살표 함수를 사용해 콜백 함수의 문법을 간결화할 수 있다.
    ```
    //ES5
    function isOdd(num) {
        return num % 2;
    }

    var oddNumbers = numbers.filter(isOdd);

    //ES6
    let oddNumbers = numbers.filter((num) => num % 2);
    ```

## Enhanced Object Literals
- 객체의 속성을 메서드로 만들 때 `function` 키워드를 생략하고 생성 가능하다.
    ```
    var dictionary = {
        words: 100,
        //ES5
        lookup: function() {
            console.log("find words");
        },
        //ES6
        lookup() {
            console.log("find words");
        }
    }
    ```
- 객체의 속성명과 값명이 동일할 때 반복되는 이름을 생략할 수 있다.
    ```
    var figures = 10;
    var dictionary = {
        //figures: figures
        figures
    };
    ```

## Modules - 자바스크립트 모듈화하기
- 자바스크립트 모듈 로더 라이브러리(AMD, Commons JS)기능을 js 언어 자체에서 지원하기 시작했다.
- 기존의 변수 스코프 충돌 문제를 해결하고 코드 재사용성을 높였다.
- 호출되기 전까지는 코드 실행, 동작을 하지 않는다.
    ```
    // libs/math.js
    export function sum(x, y) {
        return x + y;
    }

    export var pi = 3.141593;

    // main.js
    import { sum } from 'libs/math.js';
    sum(1, 2);
    ```
- `export default`를 사용해 하나의 파일에서 하나의 개체만 export 할 수 있다. 
    - 해당 모듈에 개체가 하나만 있음을 확실히 할 수 있다. (for 캡슐화)
    - `{}` 없이 import 할 수 있다. 