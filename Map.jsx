import React from 'react'

// text_3
function FruitList(){
    const fruitList = ['사과', '바나나', '포도', '복숭아'];

    return(
        <ul>
            {fruitList.map((fruit, indx) => <li key={indx}>{fruit}</li>)}
        </ul>
    );
}

export default function Map() {
    // text_1
    // const arr = [1,2,3,4,5];

    
    // text_2
    // const Movies = [
    //     {id : 1, title : '킹콩', year : 2005},
    //     {id : 2, title : '미션임파서블', year : 1996},
    //     {id : 3, title : '아이언맨', year : 2009},
    // ];

    // const renderMocies = Movies.map(movies => {
    //     return(
    //         <div key={movies.id}>
    //             <div>{movies.title}</div>
    //             <div>{movies.year}</div>
    //         </div>
    //     )
    // })
  return (
    <>
        {/* text_1 : 'arr' 안에 있는 데이터를 가져와서 2를 고합 새로운 배열 반환 */}
        {/* <ol>{arr.map((date) => <li key = {date}>{date * 2}</li>)}</ol>

        <hr />

        <div>{arr.map((date) => date * 2)}</div>

        <hr />

        <div>{arr.map((date) => (<h1> {date * 2}</h1>))}</div> */}



        {/* text2 */}
        {/* <h1>Move List</h1>
        <div>{renderMocies}</div> */}



        {/* text_3 */}
        <FruitList />
    </>
  )
}

/*
    Map(맵)
    = 배열 내의 모든 요소 각각에 대해 주어진 함수 결과를 모아 새로운 배열 반환
    = 'react'에서는 반복되는 컴포넌트를 랜더링하기 위해 사용
    = 배열명.map(콜백함수);
    = 배열 안에서 내가 원하는 규칙에 따라 새로운 배열을 생성
        ex)
            const arr = [1,3,45,67];
            const map = arr.map((x) => x * 2); 출력값 : 2,6,90,134

*/
