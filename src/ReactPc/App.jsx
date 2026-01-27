function Header(){
	return(
		<header>
			<h1>하하호호 분식점</h1>
			<p>하하호호 분식점에 오신것을 환영합니다</p>
		</header>
	)
}

function Section(){
	const subStyle = {
		display : 'flex',
		justifyContent : 'space-between',
		padding : '20px 0',
		borderBottom : '1px solid #fff',

	}
	return(
		<section>
			<h2>하하호호 메뉴</h2>
			<div style={subStyle}>
				<span>하하호호 라면</span>
				<span>4,500원</span>
			</div>

			<div style={subStyle}>
				<span>하하호호 김밥</span>
				<span>4,500원</span>
			</div>

			<div style={subStyle}>
				<span>하하호호 라면</span>
				<span>4,500원</span>
			</div>

			<div style={subStyle}>
				<span>하하호호 라면</span>
				<span>4,500원</span>
			</div>
		</section>
	)
}


function Footer(){
	return(
		<footer style={{marginTop : '50px'}}>
			<p>하하호호 분식점 주소 : 서울시 강남구 하하동 123-45</p>
			<p>전화번호 : 02-123-4567</p>
		</footer>
	)
}


export default function App() {
	const wrapStyle = {
		width : 900,
		height : 600,
		backgroundColor : '#333',
		color : '#fff',
		textAlign : 'center',
		margin : '100px auto',
		padding : 20,
	}
  return (
	<div style={wrapStyle}>
		<Header />
		<Section />
		<Footer />
	</div>
  )
}
