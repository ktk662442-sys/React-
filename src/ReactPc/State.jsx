// text_1
// export default function State() {
//   const [time, setTime] = useState(1);

//   function henndler(){
//      setTime(time + 1);
//     let newTime;
//     if(time >= 24){
//       newTime = 1; // 24시가 넘어가면 다시 1시로 초기화
//     }else{
//       newTime = time + 1;
//     }
//     setTime(newTime);
//   }
//   return (
//     <>
//       <span>현재시각 : {time}시</span>
//       <br />
//       <button onClick={() => setTime(time + 1)}>update</button>  {/*무한대까지 증가*/}
//       <button onClick={henndler}>update</button> {/*24가 되면 다시 1로 초기화*/}
//     </>
//   )
// }


// text_2
// export default function State() {
//   const [names, setNames] = useState(['홍길동', '고길동'])
//   const [input, setInput] = useState('');

//   const handlerinputChange = (e) => {
//     setInput(e.target.value);
//   }

//   const heanlderload = () => {
//     setNames((prevState) => {
//       console.log('이전 state :', prevState)
//       return([input, ...prevState])
//     })

//     setInput(''); // input초기화
//   } 
//   return (
//     <>
//       <input type="text" value={input} onChange={handlerinputChange}/>
//       <br />
//       <button onClick={heanlderload}>upload</button>

//       {names.map((name,ind) => {
//         return(
//           <div key={ind}>
//             <p>{name}</p>
//           </div>
//         )
//       })}
//     </>
//   )
// }


// text_3
// export default function State() {0
//   const [toggle, setToggle] = useState(false);

//   const heandleToggle = () => {
//     setToggle((prev) => !prev);
//   }

//   const [isOn, setIsOn] = useState(false); // 토글 상태를 꺼짐

//   const handleToggle = () => {
//     setIsOn((!isOn)); // 현재 상태(종료상태)의 반대값으로 설정
//   }
//   return (
//     <>
//       <button onClick={heandleToggle}>클릭</button>
//       <br />
//       <p>{toggle ? '토글 on' : '토글 off'}</p>
      
      
//       <button onClick={handleToggle}>toggle</button>
//       <br />
//       <p>{isOn ? '켜짐' : '꺼짐'}</p>
//     </>
//   )
// }


// text_4
// import React from 'react'

// export default function State() {
//   const [user, setUser] = useState(null); // 사용자 상태 초기화 : 로그아웃 상태
//   const [name, setName] = useState(''); // 사용자 이름 상태 : 로그인 상태 

//   const login = () => {
//     if(name.trim() === '') return; // 공백일 경우 로그인 하지 않음

//     setUser({name}) // 사용자 상태 업데이트

//     setName('') // 로그인 후 입력값 초기화
//   }

//   const logout = () => setUser(null); // 사용자 상태 초기화 : 다시 로그아웃 상태
//   return(
//     <>
//       {user ? (
//        <>
//         <p>{user.name}님 환영합니다</p>
//         <button onClick={logout}>logout</button>
//        </>
//       ) : (
//          <>
//            <input 
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="이름입력"
//             />
//             <button onClick={login}>login</button>
//          </>
//       )}
//     </>
//   )
// }

/*
    userState()
    = 리액트 훅을 언급할 때 가장 먼저 떠오르는 것
    = 함수 컴포넌트 내부에서 상태를 정의하고 이 상태를 관리할 수 있게 해주는 'HOOK'이다
    = 상태가 변경되면 컴포넌트가 리랜더링 된다
    = 여러 개의 상태를 가질 수 있다
    = 상태는 컴포넌트 내부에서만 접근 가능하다

    1. import {userState} from 'react'
    State
    = '상태'라는 뜻
    = 즉 컴포넌트의 상태를 관리하는 훅이다
        ex)
            시계 : 'time'을 상태로 가질 수 있다
    
    2. const [state, setState] = userState(초기값);
        ex)
            const [time, setTime] = userState(5) // 5시부터
    
    onChange : 변화
    prev : 이전 상태값
*/
