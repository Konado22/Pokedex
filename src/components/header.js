const pokeHeader = require('../assets/pokemon-820x461.webp')
const pokeBall = require('../assets/pokeball.webp')
const Header = () => {
    
    return (
        <>
        <div style={{"display":"flex", "justifyContent" : "center", "flexDirection": "column"}}>
            {/* <img src={pokeHeader} ></img> */}
            {/* needs media querries or formatting from container in react-bootstrap */}
            <img></img>
        </div>
        <div style={{"paddingRight": "10px", "backgroundColor": "blue", "color": "white", "display": "flex", "flexDirection": "row", "justifyContent":"space-evenly", "alignItems": "flex-end"}}>
        <img src={pokeBall} style={{height:"100px", width:"100px"}}></img>

                {/* <h1>Home</h1>
                <h1> Search Pokemon</h1> */}
                {/* <h1>Favorites</h1>
                <h1>Logout</h1> */}
        </div>
        </>
    )
}
export default Header;