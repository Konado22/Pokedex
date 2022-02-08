export const starting = () => {
    return (<div className="loginBox">
            <h1>Welcome to the World of Pokemon Please enter login information to access your Pokedex
    </h1>
    <form>
        <input className="thisUser" type="input" placeholder="username"></input>
        <input className="thisPassword" type="password" placeholder="password"></input>
        <button className="login"></button>
    </form>

    </div>
    )
}