const PokeSearch = () => {
    const pokeArray = []
    const Querry = document.getElementById('searchbar')
    const results = Querry.innerText
    const pokeFetch = fetch(`"https://pokeapi.co/api/v2/${results}"`, (res,err) => {
        if (err) {
            console.log(err)
        }
        else {
            pokeArray.push(res.json())
        }
    })

    return (
        <>
        
        </>
    )
}