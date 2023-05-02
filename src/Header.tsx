

function Header() {
    const headerStyle = {
        backgroundColor: 'black',
        color: 'white',
        margin: 0,
        height: '3em',
    }

    return (
        <header style={headerStyle}>
            <h1 style={{fontSize: '30px', lineHeight: '30px'}}>言いたいことも言えないこんな世の中
            うんざりしていませんか？</h1>
        </header>
    )
}



export default Header;