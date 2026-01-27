// import React, { useEffect } from "react";    

// export default function Class() {
//     const [count, setCount] = React.useState(0); // 숫자 상태 초기화
//     const [isRuning, setIsRuning] = React.useState(false); // 타이머 실행 상태 초기화

//     useEffect(() => {
//         let timer;

//         // 시작 버튼 클릭시 타이머 설정
//         if(isRuning){
//             timer = setInterval(() => {
//                 setCount((prev) => prev + 1)
//             }, 1000)
//         }

//         // 정지 버튼 클릭시 or 컴포넌트 언마운트 시 타이머 설정
//         return () => clearInterval(timer);
//     }, [isRuning]);
    
//     return (
//         <div
//             style={{
//                 textAlign : 'center',
//                 marginTop : '50px',
//             }}
//         >
//             <h1>{count}</h1>
//             <button onClick={() => setIsRuning(true)}>시작</button>
//             <button onClick={() => setIsRuning(false)}>정지</button>
//             <button onClick={() => setCount(0)}>리셋</button>
//         </div>
//     )
// }

// import React, { useEffect } from 'react'

// export default function Class() {
//     const [count, setCount] = React.useState(0); 
//     const [isRuning, setIsRuning] = React.useState(false);

//     useEffect(() => {
//         let time;
//         if(isRuning){
//             time = setInterval(() => {
//                 setCount((prev) => prev + 1)
//             }, 1000)
//             return () => clearInterval(time);
//         }
//     }, [isRuning])
//   return (
//     <div style={{textAlign : 'center', marginTop : '50px'}}>
//         <h1>{count}</h1>
//         <button onClick={() => setIsRuning(true)}>시작</button>
//         <button onClick={() => setIsRuning(false)}>정지</button>
//         <button onClick={() => setCount(0)}>리셋</button>
//     </div>
//   )
// }









// import React, { useEffect } from 'react';

// export default function Class() {
//     const [showButton, setShowButton] = React.useState(true); // 버튼 표시 상태 초기화

//     // 스크롤 이벤트 핸들러 설정 
//     useEffect(() => {
//         // 스크롤 위치에 따른 버튼 표시 여부 결정
//         const hadnlerScroll = () => {
//             if(window.scrollY > 200){
//                 setShowButton(true);
//             }else{
//                 setShowButton(false);
//             }
//         }

//         // 스크롤 이벤트 리스너 등록 및 해제
//         window.addEventListener('scroll', hadnlerScroll);
//         // 컴포넌트 언마운트 시 이벤트 리스너 해제
//         return () => window.removeEventListener('scroll', hadnlerScroll);
//     }, [])

//     // 맨 위로 스크롤하는 함수
//     const scrollTop = () => {
//         window.scrollTo({
//             behavior : 'smooth', // 부드럽게 스크롤
//             top : 0,
//         })
//     }
    
//     return (
//         <div
//             style={{
//                 height : '2500px',
//                 padding : '2rem',
//             }}
//         >
//             <h1>스크롤 이벤트</h1>
//             <p>아래로 스크롤해보세요!</p>
            
//             {showButton && (
//                 <button
//                     onClick={scrollTop}
//                     style={{
//                         position : 'fixed',
//                         bottom : '30px',
//                         right : '30px',
//                         padding : '10px 20px',
//                         fontSize : '16px',
//                         cursor : 'pointer'
//                     }}
//                 >TOP</button>
//             )}
//         </div>
//     )
// }


import React, { useEffect } from 'react'

export default function Class() {
    const [show, setShow] = React.useState(true);

    useEffect(() => {
        const handlerScroll = () => {
            if(window.scrollY > 200){
                setShow(true);
            }else{
                setShow(false);
            }
        }
        window.addEventListener('scroll', handlerScroll)
    }, [])

    const scrollTop = () => {
        window.scrollTo({
            behavior : 'smooth',
            top : 0,
        })
    }
  return (
    <div
    style={{
        height : '2500px',
        padding : '2rem',
    }}
    >
        <h1>스크롤 이벤트</h1>
        <h2>아래로 스크롤</h2>

        <button
            style={{
                position: 'fixed',
                bottom : 30,
                right : 30,
                padding : '10px 20px',
                fontSize : 16,
                cursor : 'pointer'
            }}
            onClick={scrollTop}
        >TOP</button>
    </div>
  )
}











/*
    Class 컴포넌트
    = 클래스형 컴포넌트는 React.Component를 상속받아 생성
    = render() 메서드를 반드시 포함
    = 상태 관리 및 생명주기 메서드를 사용할 수 있음
    = 주로 복잡한 상태 관리나 생명주기 메서드가 필요한 경우에 사용
    = 함수형 컴포넌트에 비해 코드가 길어질 수 있음
    = 최근에는 함수형 컴포넌트와 훅(Hooks)의 사용이 증가하면서 클래스형 컴포넌트의 사용 빈도가 줄어들고 있다
    = 'class 컴포넌트'는 Hook을 사용할 수 없고, 상태는 this.state로 관리해야 한다
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
