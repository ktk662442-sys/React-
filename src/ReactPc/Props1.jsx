// function Header(props){
//     return(
//         <>
//             <h1>{props.title}</h1>
//         </>
//     )
// }

// function Section(props){
//     const arr = [];

//     for(let i = 0; i < props.topics.length; i++){
//         let t = props.topics[i];
//         arr.push(
//             <li key={t.id}>{t.title} <br /> span : {t.body}</li>
//         )
//     }
//     return(
//         <nav>
//             <ol>{arr}</ol>
//         </nav>
//     )
// }

// function Footer(props){
//     return(
//         <>
//             <h1>{props.title2}</h1>
//         </>
//     )
// }

// export default function Props1() {
//     const topics = [
//         {id : 1, title : 'html', body : 'Hello html'},
//         {id : 2, title : 'css', body : 'Hello css'},
//         {id : 3, title : 'js', body : 'Hello js'},
//     ]
//   return (
//     <>
//         <Header title = 'React'/>
//         <Section topics = {topics}/>
//         <Footer title2 = 'Hello Footer'/>
//     </>
//   )
// }

function Header(props){
    return(
        <>
            {props.title}
        </>
    )
}

function Section(props){
    const arr = [];

    for(let i = 0; i < props.list.length; i++){
        let t = props.list[i];
        arr.push(
            <li key={t.id}>{t.name} : {t.age}</li>
        )
    }
    return(
        <>
            {arr}
        </>
    )
}

function Footer(props){
    return(
       <>
         {props.foo}
       </>
    )
}

import React from 'react'

export default function Props1() {
    const list = [
        {id : 1, name : '정재', age : 20},
        {id : 2, name : '민수', age : 22},
        {id : 3, name : '영희', age : 21},
    ]
  return (
    <>
        <Header title = "My Header" />
        <Section list = {list}/>
        <Footer foo="My Footer"/>
    </>
  )
}





/*
    1. props(프롭스)
    = 'property(속성)' 줄임말, 컴포넌트 간에 '데이터 전달'할 때 사용하는 매개변수 역할의 객체
    = 'props'는 '부모 컴포넌트'가 '자식 컴포넌트'에게 전달하는 방법
    = '자식 컴포넌트'는 props를 통해 '부모 컴포넌트'로 부터 전달받는 데이터를 사용할 수 있다
    = 부모 컴포넌트에서 수정할 수 있다
    = 'props.name'은 부모 컴포넌트에서 전달한 데이터
     price : 'props.name'은 부모 컴포넌트에서 전달한 데이터
        ex)
            const name = '정재',
            function App(){
                return(
                    <h1>Hi</h1>
                )
            }


    2. 스타일 객체를 감쌀 때
    = 'props'를 통해 전달할 때 문자열로 전달 할 경우 인용부호({}) 감싸기
        ex)
            function App(){
                const Style = {color : 'red', fontSize : 12,}
                return(
                    <h1 style = {Style}>Hi<h1>
                )
            }

            function App(){
                const Style = {color : 'red', fontSize : 12,}
                return(
                    <h1 style = {{
                        backgroundColor : 'red',
                        color : 'white',
                    }}>Hi</h1>
                )
            }

*/