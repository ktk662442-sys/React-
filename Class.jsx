// import React, { useEffect } from "react";    

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







import React, { useEffect } from 'react';

export default function Class() {
    const [showButton, setShowButton] = React.useState(true);

    useEffect(() => {
        const hadnlerScroll = () => {
            if(window.scrollY > 200){
                setShowButton(true);
            }else{
                setShowButton(false);
            }
        }

        window.addEventListener('scroll', hadnlerScroll);
        return () => window.removeEventListener('scroll', hadnlerScroll);
    }, [])

    const scrollTop = () => {
        window.scrollTo({
            behavior : 'smooth', // 부드럽게 스크롤
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
            <p>아래로 스크롤해보세요!</p>
            
            {showButton && (
                <button
                    onClick={scrollTop}
                    style={{
                        position : 'fixed',
                        bottom : '30px',
                        right : '30px',
                        padding : '10px 20px',
                        fontSize : '16px',
                        cursor : 'pointer'
                    }}
                >TOP</button>
            )}
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
