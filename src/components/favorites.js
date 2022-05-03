const Favorites = () => {
    const favArr = [];
    const localStorage = localStorage.getItem('favPokemon')
    localStorage.map((pokemon) => {
        return (
            <div className="PokemonCard">
                <></>
            </div>
        )
    })

}