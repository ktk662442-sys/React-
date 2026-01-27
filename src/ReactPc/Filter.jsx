// text_1
// import React from 'react'

// export default function Filter() {
//     const arr = [1,2,3,45,6,6,7,8];
//   return (
//     <>
//         <div>{arr}</div>
//         <div>{arr.filter((x) => x % 2 === 0)}</div>
//         <div>{arr.filter((x) => x % 3 === 0)}</div>
//     </>
//   )
// }

// import React from 'react'

// export default function Filter() {
//     const arr = [1,2,3,45,6,6,7,8];
//   return (
//     <>
//         {arr.filter((x) => x % 2 === 0).join(', ')}
//     </>
//   )
// }





// text_2
// import React from 'react'

// export default function Filter() {
//     const User = [
//         {id : 1, name : '정윤희', body : '1. D컵'},
//         {id : 2, name : '안예슬', body : '1. D컵'},
//         {id : 3, name : '조예진', body : '2. C컵'},
//         {id : 4, name : '최주현', body : '2. C컵'},
//         {id : 5, name : '윤예린', body : '3. B컵'},
//     ];

//     const result = User.filter((x) => x.body === '1. D컵');
//   return (
//     <>
//         {result.map(item => (
//             <li key={item.id}>{item.name}</li>
//         ))}
//     </>
//   )
// }

import React from 'react'

export default function Filter() {
    const arrName = [
        {id : 1, name : '정윤희', body : '1. D컵'},
        {id : 2, name : '안예슬', body : '1. D컵'},
        {id : 3, name : '조예진', body : '2. C컵'},
        {id : 4, name : '최주현', body : '2. C컵'},
    ]

    const result = arrName.filter((x) => x.body === '1. D컵');
  return (
    <div>
        {result.map((item) => (
            <li key={item.id.toString()}>{item.name}</li>
        ))}
    </div>
  )
}







/*
    Filter()
    = 배열 내의 모든 요소 각각에 대하여 특정 조건을 줘서 새로운 배열로 반환
    = 기존 배열에서 특정 조건에 맞는 요소들만 걸러내서 새로운 배열로 반환
    = map() 메서드와 함께 자주 사용됨
    = 기존 배열은 변경하지 않음(원본 배열 유지)
    = 화살표 함수에서 '중괄호{}' 대신 '소괄호()'를 사용하면 암묵적 반환(implicit return)이 됨
    
    <'key'값 줄 때 권장방법>
    = 데이터 고유 'id'를 사용
    = 백엔드 고유 'id'를 제공하는 방법
    = 문자열로 바꿔서 고유 id로 사용

    toString() : 숫자 -> 문자열로 변환시키는 메서드
*/
