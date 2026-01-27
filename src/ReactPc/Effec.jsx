// import React, { useEffect } from 'react'

// export default function Effec() {
//     const items = ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js']; // 검색 대상 배열
//     const [isDarkMode, setIsDarkMode] = React.useState(false); // 다크 모드 상태
//     const [input, setInput] = React.useState('');   // 입력 필드 상태
//     const [searchTerm, setSearchTerm] = React.useState(''); // 검색어 상태
//     const [results, setResults] = React.useState([]);// 검색 결과 상태

//     // 다크 모드 토글 함수
//     useEffect(() => {
//         document.body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
//         document.body.style.color = isDarkMode ? '#fff' : '#000';
//     }, [isDarkMode])

//     // 입력 필드 변경 함수
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setSearchTerm(input);
//         }, 1000);
        
//         return () => clearTimeout(timer);
//     }, [input]);

//     // 검색어 변경 시 필터링 수행
//     useEffect(() => {
//         const filtered = items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
//         setResults(filtered);
//     }, [searchTerm, items]);
    
//   return (
//     <>
//         <h2>useEffect 예제</h2>
//         <label style={{display : 'block', marginBottom : '1rem'}}>
//             <input type="checkbox" checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)}/>
//             다크모드
//         </label>

//         <input 
//             type="text"
//             value={input}
//             onChange={e => setInput(e.target.value)}
//             style={{
//                 width : 300,
//                 marginBottom : '1rem',
//                 backgroundColor : isDarkMode ? '#333' : 'white',
//                 color : isDarkMode ? '#fff' : '#222'
//             }}
//             placeholder='검색어 입력'
//         />
        
//         <ul>
//             {results.map((item, i) => (
//                 <li key={i}>{item}</li>
//             ))}
//         </ul>
//     </>
//   )
// }

import React, { useEffect } from 'react'

export default function Effec() {
    const items = ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js']; 
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const [input, setInput] = React.useState('');
    const [searchTerm, setSearchTerm] = React.useState('');
    const [results, setResults] = React.useState([]);

    useEffect(() => {
        document.body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
        document.body.style.color = isDarkMode ? '#fff' : '#000';
        return () => {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
        }
    }, [isDarkMode]) 

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchTerm(input);
        }, 500);
        return () => clearTimeout(timer);
    }, [input]);

    useEffect(() => {
        const filtered = items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
        setResults(filtered);
    }, [searchTerm, items])
  return (
    <div>
        <h2>useEffect 예제</h2>
        <label style={{display : 'block', marginBottom : '1rem'}}>
            <input type="checkbox" checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)}/>
            다크모드
        </label>

        <input type="text" placeholder='검색어 입력' value={input} onChange={e => setInput(e.target.value)} style={{
            width : 300,
            marginBottom : '1rem',
            backgroundColor : isDarkMode ? '#333' : '#fff',
            color : isDarkMode ? '#fff' : '#000' 
        }}/>
        
        <ul>
            {results.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    </div>
  )
}




// /*
//     useEffect
//     = 특정 직업을 처리할 코드를 실행시킬 때 사용
//     = 컴포넌트가 렌더링 될 때마다 특정 작업을 수행
//     = 주로 데이터 가져오기, 구독 설정, 수동으로 DOM 조작 등에 사용
//     = React.useEffect(콜백함수, 의존성배열) 
//         콜백함수 : 실행할 작업 코드                                   
//         의존성배열 : 콜백함수가 언제 실행될지 결정
//     = 어떤 컴포넌트가 화면에 처음 렌더링 되고 다시 렌더링이 되고 화면에서 사라질 때 특정 작업 코드를 실행 

//     mount : 컴포넌트가 처음 화면에 나타날 때 실행 / DOM 객체가 생성되고 브라우저에 나타나는 것
//     unmount : 컴포넌트가 화면에서 사라질 때 실행 / DOM 객체가 제거되는 것
//     update : 컴포넌트가 다시 렌더링 될 때 실행 / props나 state가 변경되어 다시 렌더링 되는 것
// */