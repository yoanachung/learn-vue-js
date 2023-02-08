# Vue.js


# Vue.js 입문
## 환경 설정
- node
- vue.js dev tool chrome extension
- visual studio code
    - Vetur (view plugin)
    - Material icon theme
    - Night owl (code highlight)
    - Live server (launch a dev local server)
    - ESLint (find and fix problem)
    - Prettier (code formatter)
    - Auto Close Tag (automatically close html tag)
    - Atom Keymap (shortcuts from Atom)


## Vue.js란?
MVVM 패턴의 뷰모델 레이어에 해당하는 화면단 라이브러리  
사용자 < DOM < View  <----> 뷰모델 (DOM Listners, Data Bindings) <----> 모델 (JavaScript)


## 컴포넌트
화면의 영역을 구분하여 개발할 수 있는 뷰의 기능  
재사용성을 늘려 빠르게 화면을 제작하기 위함이다.   
- 인스턴스를 생성하면 개발자도구에서 Root 컴포넌트로 인식한다.
- 실제 서비스를 구현할 때는 Single file components 체계를 사용하여 특정 컴포넌트 하단에 어떤 컴포넌트들이 등록되어 있는지 확인하기 쉽도록 지역 컴포넌트로 만든다. 전역으로 사용해야 하는 것은 플러그인이나 라이브러리로 추가하여 사용한다.


## 컴포넌트 통신
한 컴포넌트의 변화에 따라 유기적으로 다른 컴포넌트들이 변화해야할 것이다. 
아래의 통신 규칙을 지켜 데이터의 흐름이 뒤죽박죽이 되지 않게 하여 추적을 쉽게 할 수 있다.
- 상위 컴포넌트에서 하위 컴포넌트로는 데이터를 내려준다. `props 전달`
- 하위 컴포넌트에서 상위 컴포넌트로는 이벤트를 올려준다. `이벤트 발생`


## 라우터
뷰 라이브러리를 이용하여 싱글페이지 애플리케이션을 구현할 때 사용하는 라이브러리  
- 설치: CND 방식, NPM 방식


## 액시오스 axios
뷰에서 권고하는 Promise 기반의 HTTP 통신 라이브러리  
이외에 예전에 공식 라이브러리로 사용되던 vue resource도 있지만 현재는 쓰지 않기를 권장한다.
(* 자바스크립트의 비동기 처리 패턴: callback > promise > promise + generator > async await)


## 템플릿 문법
뷰로 화면을 조작하는 방법  
크게 데이터 바인딩과 디렉티브로 나뉜다.
- 데이터 바인딩: 뷰 인스턴스에서 정의한 속성들을 화면에 표시하는 방법 (가장 기본적인 건 {{ }} Mustache Tag)
- 디렉티브: 화면 조작에서 자주 사용하는 방식들을 모아 디렉티브 형태로 제공한다. (`<span v-if="show">Vue.js</span>`)


## 뷰 CLI
뷰 개발 환경 설정을 도와주는 도구  
npm으로 설치한다. 최신 문서 확인할 것.  

### 프로젝트 생성 및 서버 실행
```
vue create vue-cli
cd vue-cli
npm run serve
```