import {useEffect, useState} from 'react'
export default function PokeSearch () {
const [arr, setArr] = useState([])
useEffect(() => {})
// change this to the useState
let array = []
function Search () {fetch(" https://pokeapi.co/api/v2/pokemon/").then( (data) =>{data.json()}).then((res) => {
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
    <button onClick={()=>{Search()}}>Search</button>
    </>
)
}