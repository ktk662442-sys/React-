function Header(){
	const headerStyle = {
		backgroundColor : 'gray',
		padding : 20,
		textAlign : 'center',
	}

	const subtitlStyle = {
		color : 'white',
	}
	return(
		<>
			<header style={headerStyle}>
				<h1>하하호호분식점</h1>
				<p style={subtitlStyle}>안녕하세요 하하호호 분식점입니다</p>
			</header>
		</>
	)
}
// header end

function Menu(){

	const menuSectionStyle = {
		padding : 20,
	}

	const menuItemsStyle = {
		display : 'flex',
		justifyContent : 'space-between',
		borderBottom : '1px solid white',
		padding : '8px 0',
	}

	return(
		<div style={menuSectionStyle}>
				<h2>메뉴판</h2>
				<div style={menuItemsStyle}>
					<span>하하호호 라면</span>
					<span>4,000원</span>
				</div>

				<div style={menuItemsStyle}>
					<span>하하호호 떡볶이 1인분</span>
					<span>3,000원</span>
				</div>

				<div style={menuItemsStyle}>
					<span>하하호호 김밥</span>
					<span>3,000원</span>
				</div>

				<div style={menuItemsStyle}>
					<span>하하호호 어묵 3개</span>
					<span>3,000원</span>
				</div>

				<div style={menuItemsStyle}>
					<span>하하호호 순대 1인분</span>
					<span>4,000원</span>
				</div>
		</ div>
	)
}
// Menu end


function Footer(){

	const footerStyle = {
		backgroundColor : 'derkgray',
		color : 'white',
		padding : 15,
		margin : 30,
		textAlign : 'center',
	}

	return(
		<>
			<footer style={footerStyle}> 
				좋은 하루 보내세요
			</footer>
		</>
	)
}
// Footer end 

function App () {

	const containerStyle = {
		backgroundColor : 'black',
		color : 'white',
		width : 900,
		height : 600,
		textAilgn : 'center',
		margin : '0 auto',
		padding : 20,
	}
  return (
	<div style={containerStyle}>
		<Header />
		<Menu />
		<Footer />
	</div>
  )
}

export default App