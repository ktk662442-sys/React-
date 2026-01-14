// import React, { useEffect } from "react";

// // text_1
// export default function Class() {
//     const [count, setCount] = React.useState(0); // 숫자 상태 초기화
//     const [isRuning, setIsRuning] = React.useState(false); // 타이머 실행 상태 초기화

//     useEffect(() => {
//         let timer;

//         if(isRuning){
//             timer = setInterval(() => {
//                 setCount((prev) => prev + 1)
//             }, 1000)
//         }

//         // 정지 버튼 클릭시 or 컴포넌트 언마운트 시 타이머 설정
//         return() => clearInterval(timer);
//     }, [isRuning]);
//   return (
//     <div
//         style={{
//             textAlign : 'center',
//             marginTop : '50px',
//         }}
//     >
//         <h1>{count}</h1>
//         <button onClick={() => setIsRuning(true)}>시작</button>
//         <button onClick={() => setIsRuning(false)}>정지</button>
//         <button onClick={() => setCount(0)}>리셋</button>
//     </div>
//   )
// }










// import React from 'react'
// import { useEffect } from 'react';

// const Class = () => {
//     const [showButton, setShowButton] = React.useState(true);
//     useEffect(() => {
//         const hadnlerScroll = () => {
//             if(window.scrollY > 200){
//                 setShowButton(true);
//             }else{
//                 setShowButton(false);
//             }
//         }

//         window.addEventListener('scroll', hadnlerScroll);
//         return () => window.removeEventListener('scroll', hadnlerScroll);
//     }, [])

//     const scrollTop = () => {
//         window.scrollTo({
//             behaior : 'smooth', // 부드럽게 스크롤
//             top : 0,
//         })
//     }
//   return (
//     <div
//         style={{
//             height : '2500px',
//             padding : '2rem',
//         }}
//     >
//         <h2>scroll me</h2>

//         {showButton && (
//             <button onClick={scrollTop}
//                 style={{
//                     position : 'fixed',
//                     button : '20px',
//                     right : '20px',
//                     padding : '1rem',
//                     fontSize : '20px',
//                     background : 'blue',
//                     color : 'white',
//                     border : 'none',
//                     borderRadius : '5px',
//                     cursor : 'pointer'
//                 }}
//             > TOP</button>
//         )}
//     </div>
//   )
// }

// export default Class









import React, { useEffect } from 'react';

const Class = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth) // innerWidth : 브라우저 창의 내부 너비
        }

        window.addEventListener('resize',handleResize);

        return() => window.removeEventListener('resize', handleResize);
    }, [])
    // [] : 의존성 배형이 비어있으므로 컴포넌트가 마운트될 때만 실행
  return (
    <div>
        <h2>현재 너비 창 : {width}px</h2>
    </div>
  )
}

export default Class


/*
    Class 컴포넌트
    = 클래스형 컴포넌트는 React.Component를 상속받아 생성
    = 상태 관리 및 생명주기 메서드를 사용할 수 있음
    = 주로 복잡한 상태 관리나 생명주기 메서드가 필요한 경우에 사용
    = 함수형 컴포넌트에 비해 코드가 길어질 수 있음
    = 최근에는 함수형 컴포넌트와 훅(Hooks)의 사용이 증가하면서 클래스형 컴포넌트의 사용 빈도가 줄어들고 있다
    = 하지만 여전히 기존 코드베이스에서는 많이 사용되고 있음
        ex)
            import React, { Component } from 'react';
            
            class MyComponent extends Component {
            constructor(props) {
                super(props);
                this.state = {
                count: 0
                };
            }
*/
