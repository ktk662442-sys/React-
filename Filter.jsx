// text_2
function UserList(){
    const user = [
        {id : 1, name : '가나다', age : 20},
        {id : 2, name : '라마바', age : 14},
        {id : 3, name : '사아자', age : 54},
    ];

    const adults = user.filter(user => user.age >= 20);

    return(
        <ul>
            {adults.map(user => (
                <li key={user.id}>{user.name}</li>
            ))};
        </ul>
    )
}

export default function Filter() {
    // text_1
    // const arry = [1,3,5,10];
  return (
    <>
        {/* text_1 */}
        {/* <div>{arry}</div>  
        <div>{arry.filter((date) => date % 3=== 0) }</div>  
        <div>{arry.filter((date) => date % 2=== 1).map((date,index) => <h1 key={(date + '-' + index)}>{date}</h1>)}</div>  */}

        {/* text_2 */}
        <UserList />
    </>
  )
}
/*
    Filter()
    = 배열 내의 모든 요소 각각에 대하여 특정 조건을 줘서 새로운 배열로 반환
    
    <'key'값 줄 때 권장방법>
    = 데이터 고유 'id'를 사용
    = 백엔드 고유 'id'를 제공하는 방법
    = 문자열로 바꿔서 고유 id로 사용

    toString() : 숫자 -> 문자열로 변환시키는 메서드
*/
