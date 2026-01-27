// import { useEffect } from 'react'

// export default function Timer() {
//     useEffect(() => {
//         const timer = setInterval(() => { // 타이머 함수 설정
//             console.log('timer'); // 콘솔에 'timer' 출력
//         }, 1000) // 1000밀리초 = 1초

//         return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리(setInterval을 clearInterval로 정지)
//     }, [])

//   return (
//     <>
//         <span>타이머를 시작합니다 콘솔창을 확인</span>
//     </>
//   )
// }

import React from 'react'

export default function Timer() {
    React.useEffect(() => {
        const timer = setInterval(() => {
            console.log('timer');
        }, 1000)
        return () => clearInterval(timer);
    }, [])
  return (
    <div>Timer</div>
  )
}





/*
    Timer(타이머 컴포넌트)
    = 정해진 시간을 측정하고 화면에 표시하는 UI 컴포넌트
    = 일정한 간격으로 시간을 측정하거나 특정 작업을 수행하는 기능을 제공하는 컴포넌트
    = 주로 'setInterval' 또는 'setTimeout' 함수를 사용하여 구현
    = 'useEffect' 훅을 사용하여 컴포넌트가 마운트될 때 타이머를 설정하고, 언마운트될 때 타이머를 정리하는 것이 일반적
*/
