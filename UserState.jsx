// text_1
// import React from 'react'

// export default function UserState() {
//     const [time, setTime] = React.useState(1);

//     function onClickUp() {
//         setTime(time + 1)
//         let newTime;
//         if(time >= 24){
//             newTime = 1; // 24시간이 넘으면 1시로 초기화
//         }else{
//             newTime = time + 1;
//         }
//         setTime(newTime)
//     }
//   return (
//     <>
//         <span>현재시각 : {time}시</span>
//         <br />
//         <button onClick={() => setTime(time + 1)}>upDate</button>
//         <button onClick={onClickUp}>downDate</button>
//     </>
//   )
// }




// text_2
// import React from 'react'

// export default function UserState() {
//     const [names, setNames] = React.useState(['홍길동', '김철수', '박영희']);
//     const [input, setInput] = React.useState('');

//     const handleInputChange = (e) => {
//         setInput(e.target.value); // input 상태 업데이트
//     }

//     const handleUpload = () => { // 업로드 버튼 클릭 시
//        setNames((prevS) => { // 이전 상태를 기반으로 새로운 상태 설정
//         console.log('이전 State : ', prevS); // 이전 상태 출력
//         return([input,...prevS]); // 새로운 이름을 앞에 추가하고 나머지 이전 상태 유지
//        })
//        setInput(''); // 업로드 후 입력 필드 초기화
//     }
//   return (
//     <>
//         <input type="text" value={input} onChange={handleInputChange}/> 
//         <br />
//         <button onClick={handleUpload}>upLoad</button>

//         {names.map((name,index) => { //name : 배열의 각 요소, index : 요소의 인덱스
//             return(
//                 <div key={index}>{name}</div>
//             )
//         })}
//     </>
//   )
// }






// text_3
// import React from 'react'

// export default function UserState() {
//     const [toggle, setToggle] = React.useState(false); //  초기값 false
//     const handleToggle = () => { // 토글 함수
//         setToggle((prev) => !prev); // 이전 값의 반대값으로 설정
//     }

//     const [ison, setIson] = React.useState(false); // 초기값 false
//     const handleToggleIson = () => {
//         setIson(!ison); // 현재 ison 값의 반대값으로 설정
//     }
//   return (
//     <>
//         <button onClick={handleToggle}>click</button>
//         <br />
//         <p>{toggle ? '토글 on' : '토글 off'}</p>


//         <button onClick={handleToggleIson}>click</button>
//         <br />
//         <p>{ison ? '켜짐' : '꺼짐'}</p>
//     </>
//   )
// }




// text_4
import React from 'react'

export default function UserState() {
    const [user, setUser] = React.useState(null); // 초기값 null
    const [name, setName] = React.useState(''); // 이름 상태

    const login = () => {
        if(name.trimc === '') return // 이름이 비어있으면 로그인하지  않음

        setUser({name}); // 이름으로 사용자 객체 설정
        setName(''); // 이름 입력 필드 초기화
    }

    const logout = () => setUser(null); // 사용자 상태를 null로 설정하여 로그아웃
  return (
    <>
        {user ? (
            <>
                <p>{user.name}님 환영합니다</p>
                <button onClick={logout}>로그아웃</button>
            </>
        ) : (
            <>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='이름 입력'/>
                <button onClick={login}>로그인</button>
            </>
        )}
    </>
  )
}



/*
    UserState()
    = 리액트 훅을 언급할 때 가장 먼저 떠오르는 것
    = 함수 컴포넌트 내부에서 상태를 정의하고 이 상태를 관리할 수 있게 해주는 'Hook'이다
    = 상태가 변경되면 컴포넌트가 리랜더링 된다
    = 여러개의 상태를 가질 수 있다
    = 상태는 컴포넌트 내부에서만 접근 가능
    = 상태는 비동기적으로 업데이트 될 수 있다
    = 상태 업데이트는 병합되지 않는다 (객체 상태의 경우 직접 병합 필요)
    = 상태 초기값은 함수형 업데이트를 통해 설정 가능
    
    1. import {userState} from 'react'
        - state : '상태' 라는 의미 / 즉 컴포넌트의 상태를 관리하는 '훅'이다

    2. const [변수명, 함수명] = useState(초기값)
         - 변수명 : 상태값을 담는 변수
         - 함수명 : 상태값을 변경하는 함수
         - 초기값 : 상태의 초기값을 설정하는 부분

        onChange : 변화
        prev : 이전의 값
*/
