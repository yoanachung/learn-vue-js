# Vue.js


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