import { useState, useMemo, useEffect } from "react"

// // text_1 
// const handerCalculate = (num) => {
//     console.log('어려운 계산 실행...');
//     // 복잡한 계산을 시뮬레이션하기 위한 지연
//     for (let i = 0; i < 100000000; i++) {}
//     return num + 1000;
// }

// // 간단한 계산 함수
// const easyCalculate = (num) => {
//     console.log('쉬운 계산 실행...');
//     return num + 1;
// }

// export default function UseMemo() {
//     const [handerNumber, setHanderNumber] = useState(1); // 숫자 상태

//     const hadnerSum = useMemo(() => {
//         return handerCalculate(handerNumber);
//     }, [handerNumber])    

//     const [easyNumber, setEasyNumber] = useState(1); // 숫자 상태

//     const easySum = easyCalculate(easyNumber);

//     return (
//         <>
//             <h1>어려운 계산기</h1>
//             <input type="number" value={handerNumber} onChange={(e) => setHanderNumber(parseInt(e.target.value))}/>  {/* 복잡한 계산이 필요한 숫자 입력 */}
//             <p>+ 1000 = {hadnerSum}</p>

//             <h1>쉬운 계산기</h1>
//             <input type="number" value={easyNumber} onChange={(e) => setEasyNumber(parseInt(e.target.value))}/> {/* 간단한 계산이 필요한 숫자 입력 */}
//             <p>+ 1 = {easySum}</p>
//         </>
//     )
// }

// import React from 'react'
//         const handlerCalculate = (num) => {
//             console.log('복잡한 계산 실행...');
//             for(let i = 0; i < 9999; i++){
//                 return num + 1000;
//             }
//         }
//         const easyCalculate = (num) => {
//             console.log('간단한 계산 실행...');
//             return num + 1;
//         }

// export default function UseMemo() {
//     const [hardNumber, setHardNumber] = useState(1);
//     const haNDDerSum = useMemo(() => {
//         return handlerCalculate(hardNumber)
//     }, [hardNumber])

//     const [easyNumber, setEasyNumber] = useState(1);
//     const easySum = easyCalculate(easyNumber);
    
//   return (
//     <div>
//         <h1>어려운 계산기</h1>
//         <input type="number" value={hardNumber} onChange={(e) => setHardNumber(parseInt(e.target.value))}/>
//         <p>+ 1000 = {haNDDerSum}</p>

//         <h1>쉬운 계산기</h1>
//         <input type="number" value={easyNumber} onChange={(e) => setEasyNumber(parseInt(e.target.value))}/>
//         <p>+ 1 = {easySum}</p>
//     </div>
//   )
// }







// text_2 
// import React from 'react'

// export default function UseMemo() {
//     const [number, setNumber] = useState(0);
//     const [isKorean, setIsKorean] = useState(true);

//     const location = useMemo(() => {
//         return{
//             country : isKorean ? '대한민국' : 'USA',
//         }
//     }, [isKorean])

//     useEffect(() => {
//         console.log('useEffect')
//     }, [location])
//   return (
//     <>
//         <h1>어느 나라에 있어요?</h1>
//         <p>
//             country : {location.country}
//             <button onClick={() => {setIsKorean(!isKorean)}}>Go to the Airport</button>
//         </p>
//     </>
//   )
// }

// import React from 'react'

// export default function UseMemo() {
//     const [number, setNumber] = useState(0);
//     const [isKorean, setIsKorean] = useState(true);

//     const location = useMemo(() => {
//         return{
//             country : isKorean ? '대한민국' : 'USA',
//         }
//     }, [isKorean])
//   return (
//     <div>
//         <h1>어느 나라에 있어요?</h1>
//         <p>
//             country : {location.country}
//             <button onClick={() => {setIsKorean(!isKorean)}}>Go to the Airport</button>
//         </p>
//     </div>
//   )
// }






// text_3
// import React from 'react'

// export default function UseMemo() {
//     const [name, setName] = useState(''); // 이름 상태
//     const [age, setAge] = useState(0);   // 나이 상태

//     const user = useMemo(() => {
//         return {name, age}
//     }, [name, age])

//     useEffect(() => {
//         console.log('User 정보가 변경되었습니다');
//     }, [user])
//   return (
//     <>
//         <h1>사용자 정보 입력</h1>
//         <input type="text" placeholder="이름 입력" value={name} onChange={(e) => setName(e.target.value)}/>
//         <input type="text" placeholder="나이 입력" value={age} onChange={(e) => setAge(parseInt(e.target.value))}/>
//         <p>이름 : {name} / 나이 : {age}</p>
//     </>
//   )
// }

import React from 'react'

export default function UseMemo() {
    const [name, setName] = React.useState(''); 
    const [age, setAge] = React.useState(0);

    const user = useMemo(() => {
        return{name,age}
    })

    useEffect(() => {
        console.log('User 정보가 변경되었습니다');
    }, [user])
  return (
    <div>
        <h1>사용자 정보 입력</h1>
        <input type="text" placeholder="이름 입력" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="나이 입력" value={age} onChange={(e) => setAge(parseInt(e.target.value))}/>
        <p>이름 : {name} / 나이 : {age}</p>
    </div>
  )
}





/*
    useMemo
    = useEffect와 비슷하게 특정 값이 변경될 때만 연산을 수행하도록 최적화하는 훅
    = 주로 복잡한 계산이나 렌더링 최적화에 사용
    = 첫 번째 인자로 콜백 함수, 두 번째 인자로 의존성 배열을 받음
    = 의존성 배열의 값이 변경될 때만 콜백 함수가 실행되고, 그렇지 않으면 이전 결과를 재사용

    Memo : Memoization(메모이제이션)
    = 동일한 값을 리턴하는 함수를 반복적으로 호출해야한다면 메모리에 저장을 해놓고 필요할때마다 다시 계산하지 않고 메모리에서 꺼내서 사용
    = 자주 사용하는 값을 메모리에 캐싱(데이터를 메모리에 저장)을 해놓고 필요한 때마다 캐싱에서 꺼내서 사용

    <콜백함수>  
    = 복잡한 계산이나 렌더링 로직을 포함하는 함수
    = 이 함수는 의존성 배열의 값이 변경될 때만 실행되어야 하는 연산을 포함

    <의존성 배열>
    = 콜백 함수가 의존하는 값들의 배열
    = 이 배열에 포함된 값들 중 하나라도 변경되면 콜백 함수가 다시 실행되고, 그렇지 않으면 이전에 계산된 결과를 재사용

    calculate(): 반복적으로 호출될 때마다 항상 동일한 값을 리턴하는 함수 / 단점은 무의미한 계산이 발생한다 / 예: 복잡한 수학 계산, 데이터 처리 등
    useMemo : 컴포넌트가 리렌더링 될 때마다 계산이 발생하는 것을 방지하기 위해 사용 

    <동작방식>
    함수호출 -> 렌더링 => 컴포넌트 호출 -> useMemo값 재사용 -> 처음에 저장된 값을 재사용

*/
