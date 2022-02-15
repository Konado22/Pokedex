export const compareScreen = (pokemon1,pokemon2) =>{

    return(
        <>
            <div className="compareContainer">
            <div className="pokemon1Container">
            <div className="pokemonImage">
                <img src={pokemon.image}></img>
                <p>{pokemon.description}</p>
            </div>
            <div className='statsContainer'>
                <h1>{pokemon.name}</h1>
                <h1>{pokemon.gender}</h1>
                <h1>{pokemon.health}</h1>
                <h1>{pokemon.attack}</h1>
                <h1>{pokemon.defense}</h1>
                <h1>{pokemon.specAttack}</h1>
                <h1>{pokemon.specDefense}</h1>
                <h1>{pokemon.speed}</h1>
            </div>
        </div>
        <div className="compareContainer">
            <div className="pokemonImage">
                <img src={pokemon.image}></img>
                <p>{pokemon.description}</p>
            </div>
            <div className='statsContainer'>
                <h1>{pokemon.name}</h1>
                <h1>{pokemon.gender}</h1>
                <h1>{pokemon.health}</h1>
                <h1>{pokemon.attack}</h1>
                <h1>{pokemon.defense}</h1>
                <h1>{pokemon.specAttack}</h1>
                <h1>{pokemon.specDefense}</h1>
                <h1>{pokemon.speed}</h1>
            </div>
        </div>
            </div>
        </>
    )
}