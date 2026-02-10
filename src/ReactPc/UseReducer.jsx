import { useReducer } from 'react'


// text_1 은행계좌
// import React from 'react'

// const ACTION_TYPE = {
//     deposit : 'deposit', // 입금
//     withdraw : 'withdraw' // 출금
// }

// const reducer = (state, action) => {
//     console.log('reducer', state, action)

//     switch(action.type){
//         case ACTION_TYPE.deposit :
//             return state + action.amount
//         case ACTION_TYPE.withdraw :
//             return state - action.amount
//         default :
//             return state
//     }
// }

// export default function UseReducer() {
//     const [numbaer, setNumber] = React.useState(0); // 입금 출금 액션값
//     const [money, dispatch] = useReducer(reducer, 0) // 초기값 0원
//   return (
//     <div>
//         <h2>OOO은행에 오신 것을 환영합니다</h2>
//         <p>잔고 : {money}원</p>
//         <input 
//             type="text"
//             value={number}
//             onChange={(e) => {setNumber(parseInt(e.target.value) || 0)}}
//             step={1000}
//         />
//         <button onClick={() => {
//             dispatch({
//                 type : ACTION_TYPE.deposit,
//                 payload : number,
//             })
//         }}>+예금</button>

//         <button onClick={() => {
//             dispatch({
//                 type : ACTION_TYPE.withdraw,
//                 payload : number
//             })
//         }}>-출금</button>
//     </div>
//   )
// }










// text_2 출석부
import React from 'react'
const reducer = (state, action) => {
    switch(action.type){
        // 학생추가
        case 'add-student' :
            const name = action.payload.name;
            const newStudent = {
                id : Date.now(),
                name,
                ishere : true,
            };

        return{
            count : state.count + 1,
            students : [...state.students, newStudent] // 기존 학생들 + 새 학생
        }

        // 학생삭제
        case 'delete-student' :
            return{
                count : state.count - 1,
                students : state.students.filter((student) => student.id !== action.payload.id) // 삭제할 학생 제외
            }

        case 'mark-student' :
            return{
                count : state.count,
                students : state.students.map((student) => {
                    if(student.id === action.payload.id){
                        return{...student, ishere : !student.ishere}
                    }
                    return student;
                })
            }
        default :
            return state;
    }
}

const initialState = {
    count : 0,
    students : [],
}

const Student = ({name, dispatch, id, ishere}) => {
    return(
        <div>
            <span 
                style={{
                    textDecoration : ishere ? 'none' : 'line-through',
                    color : ishere ? 'black' : 'gray',
                    cursor : 'pointer'
                }}
                onClick={() => {
                    dispatch({
                        type : 'mark-student',
                        payload : { id }
                    })
                }}
            >
                {name}
            </span>
            <button onClick={() => {
                dispatch({
                    type : 'delete-student',
                    payload : { id }
                })
            }}>삭제</button>
        </div>
    )
}
    
export default function UseReducer() {
    const [name, setName] = React.useState('');
    const [studentsInfo, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <h1>출석부</h1>
        <p>총 학생 수 : {studentsInfo.count}</p>
        <input 
            type="text"
            placeholder='이름을 입력해주세요'
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{marginBottom : '50px'}}
        />

        <button onClick={() => {
            dispatch({
                type : 'add-student',
                payload : { name }
            })
        }}>추가</button>
        <br />
        {studentsInfo.students.map((student) => {
            return (<Student key={student.id} name={student.name} dispatch={dispatch} id={student.id} ishere={student.ishere}/>)
        })}
    </div>
  )
}

/*
    UseReducer
    = 2개의 인자값을 가지는 함수
    = 'useState'의 더불어 컴포넌트에서 state 관리를 위한 리액트 훅 -> 'useState'의 진화버전
    = 'state' 관리를 컴포넌트 내부가 아닌 외부에서 관리할 수 있도록 제출
    = 상태변화 코드를 컴포넌트와 분리할 수 있고 파일로도 분리가 가능해서 컴포넌트 내부가 훨씬 간결
    = 'useState'와 비슷한 형태를 띠지만 좀 더 복잡한 상태값을 미리 정의해놓은 시나리오에 따라 관리 기능
    = 'useReducer'는 'reducer' 함수와 초기값을 인자로 받음

        const[state,dispatch] = useReducer(리듀서함수(reducer),초기값) : 업데이트를 해주는 것은 'dispatch'
        - reducer : 상태 변화에 대한 로직을 정의하는 함수 / state를 업데이트 해주는 역할
        - dispatch : 상태를 업데이트하기 위해 action을 발생시키는 함수 / 요구를 발생
        - action : 상태 업데이트를 위해 'dispatch'가 리듀서 함수에 전달하는 값 / 요구사항
        - 초기값 : 'useState'의 초기값과 동일한 개념

        onChange : 이벤트 핸들러에서 'dispatch'를 호출해서 action을 리듀서 함수에 전달
        onClick : 버튼이 클릭할 때마다 호출되는 이벤트 
        parseInt : 문자열을 정수로 변환하는 함수
        step : 'input' 요소의 값이 증가하거나 감소하는 단위를 설정하는 속성
*/
