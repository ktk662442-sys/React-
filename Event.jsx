export default function Event() {
    // text_1
    // const colorChange = () => {
    //     const box = document.querySelector('#colorbox'); 
    //     const currentColor = box.style.backgroundColor;

        // 1. 삼항연산자
        // box.style.backgroundColor = currentColor === 'black' ? 'red' : 'black';

        // 2. if문
        // if(currentColor === 'black'){
        //     box.style.backgroundColor = 'red'
        // }else{
        //     box.style.backgroundColor = 'black'
        // }
    // }


    // text_3
    const handleEnter = () => {
        document.getElementById('hover-text').textContent = '안녕'
    }
    const handleLeave = () => {
        document.getElementById('hover-text').textContent = '잘가'
    }
    return (
        <>
        {/* text_1 : '클릭' 버튼을 누르면 'div' 색상이 변경 또 다시 누르면 원래 색상으로 */}
            {/* <div 
                id="colorbox" 
                style={{
                    width : 200,
                    height : 200,
                    backgroundColor : 'black',
                    borderRadius : 10,
                    marginBottom : 20, 
                    textAlign : 'center',
                    lineHeight : '200px',
                    color : 'white',
                }}
            >
                박스
            </div>
            <button onClick={colorChange}>클릭</button> */}






            {/* text_2 */}            
                {/* <label htmlFor="name">이름 : </label>
                <input type="text" id="name"
                    onFocus={(e) => e.target.style.backgroundColor = 'blue'}
                    onBlur={(e) => e.target.style.backgroundColor = 'white'}
                    placeholder="이름을 적으세요"
                />  */}





            {/* text_3 */}
            <div
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                style={{
                    padding : '2rem',
                    border : '2px solid black',
                    width : 300,
                    textAlign : 'center'
                }}
            >
                <p id="hover-text">마우스를 올려보세요</p>
            </div>
        </>
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
    5. onFocus : 일렵 필드에 포커스가 맞춰졌을 때 이벤트 발생
    6. onBlur : 입력 필드에 포커스가 벗어났을 때 이벤트 발생
    
    
    preventDefault : 기본 이벤트를 막을때 사용 / '새로고침' 방지
    1.target
    = 이벤트가 발생한 요소
    = 사용자가 웹 페이지에서 특정 부분을 클릭하거나 마우스를 올리는 등의 행동을 했을 때 그 행동이 직접적으로 일어난 HTML 요소를 의미
    = 이벤트 어디서 발생했는지 

    label htmlFor = 'name'
    = 'htmlFor' : 해당 label이 어떤 input 요소와 연결되어
     있는지를 나타낸다
*/
