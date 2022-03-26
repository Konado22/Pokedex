const pokeHeader = require('../assets/pokemon-820x461.webp')

const Header = () => {
    
    return (
        <>
        <div style={{"display":"flex", "justifyContent" : "center"}}>
            <img src={pokeHeader} ></img>
            {/* add more images later */}
            {/* <img></img>
            <img></img> */}
        </div>
        <div style={{"paddingRight": "10px", "backgroundColor": "blue", "color": "white", "display": "flex", "flexDirection": "row", "justifyContent":"space-evenly", "alignItems": "flex-end"}}>
                <h1>Home</h1>
                <h1>Pokemon</h1>
                <h1>Favorites</h1>
                <h1>Logout</h1>
        </div>
        </>
    )
}
export default Header;