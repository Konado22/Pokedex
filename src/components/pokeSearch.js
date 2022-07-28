import {useEffect, useState} from 'react'
export default function PokeSearch () {
const [arr, setArr] = useState([])
useEffect(() => {})
// change this to the useState rather then push to static array
let array = []
const pokeParams = document.getElementById("search")

function Search () {fetch(`"https://pokeapi.co/api/v2/ability/${pokeParams}"`).then( (data) =>{data.json()}).then((res) => {
    array.push(res)
    console.log(array)
    array.map((pokemon) => {
        return (
            <div>
                <h1>{pokemon.name}</h1>
                <img src={pokemon.image}></img>
                <h2>{pokemon.type}</h2>
            </div>
        )
    })
}).catch(err =>  {console.log(err)})}
return(
    <>
    <h1>Click to search pokemon</h1>
    <input type={search}></input>
    <button onClick={()=>{Search()}}>Search</button>
    </>
)
}