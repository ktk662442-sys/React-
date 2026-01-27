// text_1
// import React from 'react'

// export default function UseCallback() {
//   const [count, setCount] = React.useState(0);

//   const showCount = React.useCallback(() => {
//       console.log('현재 count : ', count);
//   }, [count])

//   return (
//     <>
//         <h2>useCallback 예제</h2>
//         <p>카운트 : {count}</p>
//         <button onClick={() => setCount(count + 1)}>증가</button>
//         <button onClick={() => setCount(count - 1)}>감소</button>
//         <button onClick={showCount}>현재 카운트 출력</button>
//     </>
//   )
// }


// text_2
import React from 'react'

const Box = React.memo(({ createBoxStyle }) => {
    const style = createBoxStyle();
    console.log('Box 렌더링');
    return <div style={style}></div>
})

export default function UseCallback() {
    const [size, setSize] = React.useState(100);
    const [isDarkMode, setIsDarkMode] = React.useState(false);
     
    const createBoxStyle = React.useCallback(() => {
        return{
            width : `${size}px`,
            height : `${size}px`,
            backgroundColor : 'lightgray',
        }
    }, [size])
  return (
    <div
        style={{backgroundColor : isDarkMode ? '#333' : '#fff'}}
    >
        <input type="number" value={size} onChange={(e) => setSize(e.target.value)}/>
        <Box createBoxStyle = {createBoxStyle}/>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>Change</button>
    </div>
  )
}



/*
    useCallback
    = 컴포넌트의 최적화하는데 필요한 훅
    = 특정 함수를 메모이제이션(기억) 해서 불필요한 재생성을 막아줌
    = 주로 자식 컴포넌트에 함수를 props로 넘겨줄 때 사용
    = useMemo와 비슷하지만, useMemo는 값을 메모이제이션 하는 반면, useCallback은 함수를 메모이제이션 한다
    = 함수형 컴포넌트에서 함수를 정의할 때마다 새로운 함수가 생성되는데, 이로 인해 자식 컴포넌트가 불필요하게 다시 렌더링 될 수 있음
    = useCallback을 사용하면, 의존성 배열에 명시된 값이 변경될 때만 새로운 함수가 생성되고, 그렇지 않으면 이전에 생성된 함수를 재사용

    useMeno : 값을 기억해서 재계산을 방지
    useCallback : 함수를 기억해서 재생성을 방지

    ex)
        useCallback(() => {
            return value;    
        }, [value : 의존성 배열]);

    ex)
        const calculateSum = useCallback((a, b) => {
            return a + b;
        }, []); // 빈 배열을 전달하면 컴포넌트가 처음 렌더링 될 때만 함수가 생성
*/