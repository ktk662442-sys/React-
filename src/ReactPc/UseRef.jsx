import { useEffect, useRef, useState } from "react"

// text_1
// export default function UseRef() {
//     // state 증가
//     const [count, setCount] = useState(0); // state 변수 선언 
//     const increaseCountState = () => {
//         setCount(count + 1);
//     }

//     // ref 증가 : 렌더링에 영향을 주지 않는다 / 렌더링 최적화에 유리 // 값이 유지
//     const CountRef = useRef(0); // ref 변수 선언
//     const increaseCountRef = () => {
//         CountRef.current = CountRef.current + 1;
//         console.log(CountRef.current);
//     }
//   return (
//     <div>
//         <p>State : {count}</p>
//         <button onClick={increaseCountState}>Increase State</button>
//         <br />
//         <p>Ref : {CountRef.current}</p>
//         <button onClick={increaseCountRef}>Increase Ref</button>
//     </div>
//   )
// }


// text_2
import React from 'react'

export default function UseRef() {
    const [text, setText] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        console.log(inputRef);
        inputRef.current.focus()
    }, [])

    const login = () => {
        alert(`Welcome, ${inputRef.current.value}` )
        inputRef.current.focus()
        setText('')
    }

    const halderChange = (e) => {
        setText(e.target.value)
    }
  return (
    <div>
        <input type="text" placeholder="username" ref={inputRef} value={text} onChange={halderChange} />
        <br />
        <button onClick={login}>Login</button>
    </div>
  )
}


/*
    useRef
    = DOM에 직접 접근할 때 사용
    = 특정 값 저장할 때 사용
    = 리액트에서 값을 지정할 때 사용하는 hooK

    <값을 지정할 때 사용>
    1. import { useRef } from 'react'
    2. const 변수명 = useRef(초기값)
    3. 변수명.current = 값
    4. 변수명.current
    current : 실제 값이 저장되는 곳
    focus : 커서 깜빡임
    = state처럼 어떤 값을 저장을 해놓는다 -> state 변화 -> 업데이트 및 리렌더링 -> 초기화 -> 불필요한 렌더링 때문에 곤란한 경우 -> Ref 반환
    -> 리렌더링이 발생하지 않음 -> 컴포넌트 내부의 변수가 값이 유지됨 -> 불필요한 렌더링 방지

    <DOM에 직접 접근할 때 사용>
    1. import { useRef } from 'react'
    2. const 변수명 = useRef(null)
    3. <태그 ref={변수명} />
    4. 변수명.current -> 태그에 접근
    = 특정 DOM에 직접 접근할 때 사용 -> 자주 사용하지는 않음 -> 꼭 필요한 경우에만 사용
*/
