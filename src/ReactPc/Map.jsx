// text_1
// export default function Map() {
//     const arr = [1,2,3,4,5,6,7,8];
//   return (
//     <>
//             {/* {arr.map((date) => <li key={date}>{date * 2}</li>)} */}
//             {/* {arr.map((date) => date * 2).join(', ')} // join : 배열을 문자열로 변환 */}
//             {/* {arr.map((date) => (<h1>{date * 2}</h1>))} */}
//     </>
//   )
// }

// import React from 'react'

// export default function Map() {
//   const arr = [1,2,3,4,5,6,7,8]
//   return (
//     <>
//       {/* {arr.map((x) => <li key={x}>{x * 2}</li>)} */}
//       {/* {arr.map((x) => x * 2).join(', ')} */}
//       {arr.map((x) => (<h1>{x * 2}</h1>))}
//     </>
//   )
// }



// text_2
// import React from 'react'

// export default function Map() {
//     const Name = [
//         {id : 1, name : '정윤희', body : 'D컵'},
//         {id : 2, name : '안예슬', body : 'D컵'},
//         {id : 3, name : '조예진', body : 'C컵'},
//         {id : 4, name : '최주현', body : 'C컵'},
//     ];

//     const renderName = Name.map(item => {
//         return(
//            <div key={item.id}>
//                 <div>{item.name}</div>
//                 <div>{item.body}</div>
//            </div>
//         )
//     });
//   return (
//     <>
//         <h1>누가 제일 육덕이고 가슴이 큰가요?</h1>
//         <div>{renderName}</div>
//     </>
//   )
// }

// import React from 'react'

// export default function Map() {
//   const arrName = [
//     {id : 1, name : '정윤희', body : 'D컵'},
//     {id : 2, name : '안예슬', body : 'D컵'},
//     {id : 3, name : '조예진', body : 'C컵'},
//     {id : 4, name : '최주현', body : 'C컵'},
//   ];

//   const result = arrName.map(item => {
//     return(
//       <div key={item.id}>
//         <div>{item.name}</div>
//         <div>{item.body}</div>
//       </div>
//     )
//   })
//   return (
//     <>
//       {result}
//     </>
//   )
// }







// text_3
// function Friun(props){
//   const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
//   return(
//         <ul>
//           {fruits.map((Frun,index) => (
//             <li key={index}>{Frun}</li>
//           ))}
//         </ul>
//   )
// }

// export default function Map() {
  
//   return (
//     <Friun />
//   )
// }

function Friun(props){
  const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
  return(
    <ul>
      {fruits.map((Fru, index) => (
        <li key={index}>{Fru}</li>
      ))}
    </ul>
  )
}

export default function Map() {
  
  return (
    <div>
      <Friun />
    </div>
  )
}








/*
    Map(맵)
    = 배열 내의 모든 요소 각각에 대해 주어진 함수 결과를 모아 새로운 배열 반환
    = 'react'에서는 반복되는 컴포넌트를 랜더링하기 위해 사용
    = 배열명.map((요소,인덱스) => {실행문}));
    = 배열 안에서 내가 원하는 규칙에 따라 새로운 배열을 생성
    = map은 안에 return이 없으면 ()을 쓰고 있으면 {}을 쓴다
    = key props : 리액트에서 배열을 렌더링할 때 각 요소를 고유하게 식별하기 위해 사용하는 특별한 속성
    = key는 형제 요소들 사이에서만 공유하면 된다
    = key는 배열의 항목이 변경, 추가 또는 삭제될 때 리액트가 어떤 항목이 변경되었는지 효율적으로 파악하는 데 도움
    = key는 컴포넌트의 props로 전달되지 않는다
        ex)
            const arr = [1,3,45,67];
            const map = arr.map((x) => x * 2); 출력값 : 2,6,90,134

*/
