const PokeSearch = () => {
    const pokeArray ={}
    const Querry = document.getElementById('searchbar')
    const results = Querry.innerText
    const pokeFetch = fetch(`"https://pokeapi.co/api/v2/${results}"`, (res,err) => {
        if (err) {
            console.log(err)
        }
        else {
            pokeArray.push(res.json())
        }
        .then(pokeArray.map((data) =>{
            return(
                <>
                </>
            )
        }))
    })

    return (
        <>
        <div>
            <form>
                <label>By Generation 
                    <datalist>

                    </datalist>
                </label>
                <label> 
                    By Type
                    <datalist>
                        
                    </datalist>
                </label>
                <label> 
                    By 
                    <datalist>
                        
                    </datalist>
                </label>
                <input type={'button'}> Search</input>

            </form>
        </div>
        <div id="searchResults">

        </div>
        </>
    )
}
export default PokeSearch;