// text_1
// import React from 'react'

// export default function Event() {
//     const colorChange = () => {
//         const box = document.querySelector('#colorbox')
//         const currentColor = box.style.backgroundColor;

//         // 삼한연산자
//         // box.style.backgroundColor = currentColor === 'black' ? 'red' : 'black'

//         // if문
//         if(currentColor === 'black'){
//             box.style.backgroundColor = 'red'
//         }else{
//             box.style.backgroundColor = 'black'
//         }
//     }
//   return (
//     <>
//         <div
//             style={{
//                 width : 300,
//                 height : 300,
//                 backgroundColor : 'black',
//                 borderRadius : 10,
//                 marginBottom : 20,
//                 textAlign : 'center',
//                 lineHeight : '300px',
//                 color : 'white'
//             }}
//             id='colorbox'
//         >
//             박스
//         </div>
//             <button onClick={colorChange}>click</button>
//     </>
//   )
// }

// import React from 'react'

// export default function Event() {
//     const colorChange = () => {
//         const box = document.getElementById('colorbox');

//         const result = box.style.backgroundColor;

//         box.style.backgroundColor = result === 'black' ? 'red' : 'black';
//     }
//   return (
//    <>
//      <div
//         style={{
//             width : 300,
//             height : 300,
//             backgroundColor : 'black',
//             borderRadius : 10,
//             marginBottom : 20,
//             textAlign : 'center',
//             lineHeight : '300px',
//             color : 'white'
//         }}
//         id='colorbox'
//     >Event</div>
//     <button onClick={colorChange}>click</button>
//    </>
//   )
// }








// text_2
// import React from 'react'

// export default function Event() {
//   return (
//     <>
//         <label htmlFor="name">이름 : </label>
//         <input 
//             type="text" 
//             id='name'
//             onFocus={(e) => e.target.style.backgroundColor = 'blue'}    
//             onBlur={(e) => e.target.style.backgroundColor = 'white'}
//         />
//     </>
//   )
// }

// import React from 'react'

// export default function Event() {
//   return (
//     <>
//         <label htmlFor="name">이름 : </label>
//         <input 
//             type="text" 
//             id='name'
//             onFocus={(e) => e.target.style.backgroundColor = 'blue'}    
//             onBlur={(e) => e.target.style.backgroundColor = 'white'}
//         />  
//     </>
//   )
// }








// text_3
// import React from 'react'

// export default function Event() {
//     const handlerEnter = () => {
//         document.getElementById('hander-text').textContent = '안녕'
//     }

//     const handlerLeave = () => {
//         document.getElementById('hander-text').textContent = '잘가'
//     }
//   return (
//     <>
//         <div
//             onMouseEnter={handlerEnter}
//             onMouseLeave={handlerLeave}
//             style={{
//                 padding : '2rem',
//                 border : '2px solid black',
//                 width : 300,
//                 textAlign : 'center'
//             }}
//         >
//             <p id='hander-text'>마우스를 올리세요</p>
//         </div>
//     </>
//   )
// }

import React from 'react'

export default function Event() {
    const handlerEnter = () => {
        const box = document.querySelector('#hander-text');
        box.textContent = '안녕';
    }

    const handlerLeave = () => {
        const box = document.querySelector('#hander-text');
        box.textContent = '잘가';
    }
  return (
    <div
         style={{
                padding : '2rem',
                border : '2px solid black',
                width : 300,
                textAlign : 'center'
            }}
            onMouseEnter={handlerEnter}
            onMouseLeave={handlerLeave}
    >
        <p id='hander-text'>마우스를 올리세요</p>
    </div>
  )
}







/*
    Event
    1. onClick : 마우스 클릭 할때 이벤트 발생
        const heandleClick = () => {
                code
            }

    2. mouseOver : 마우스가 엘리먼트에 마우스가 올려 들어 갈때 이벤트 발생
        const mouseOver = () => {
            code
        }

    3. Submit : 폼을 제출할때 이벤트 발생
        const heandleSubmit = (e) => { // e : 이벤트의 약자
            e.preventDefault
            alert('form is submited')
        }      
            
    4. onKeyDown : 키보드의 키가 눌릴때 이벤트 발생
    5. onFocus : 입력 필드에 포커스가 맞춰졌을 때 이벤트 발생
    6. onBlur : 입력 필드에 포커스가 벗어났을 때 이벤트 발생
    
    
    preventDefault : 기본 이벤트를 막을때 사용 / '새로고침' 방지
    1.target
    = 이벤트가 발생한 요소
    = 사용자가 웹 페이지에서 특정 부분을 클릭하거나 마우스를 올리는 등의 행동을 했을 때 그 행동이 직접적으로 일어난 HTML 요소를 의미
    = 이벤트 어디서 발생했는지 알아낼때 사용
    = 이벤트를 직접 발생시킨 요소에 접근할 수 있다


    label htmlFor = 'name'
    = 'htmlFor' : 해당 label이 어떤 input 요소와 연결되어
     있는지를 나타낸다
*/
