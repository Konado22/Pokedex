import { useState, useEffect } from "react"
import { Form } from "react-bootstrap"
import axios from "axios"
const PokeSearch = () => { 
    const arr = []
    const searchText = document.getElementById('searchbar')
    const results = searchText.innerHTML;
    const searchPoke = fetch(`"https://pokeapi.co/api/v2/ability/${results}/"`)
  .then(response => response.json())
  .then(data => arr.push(data));

    // const [pokeArray, setPokeArray] =useState([])
    // const Querry = document.getElementById('searchbar')
    // const results = Querry.innerHTML
    // const pokeFetch = await fetch( `"https://pokeapi.co/api/v2/ability/${results}/"`)
    // if (pokeFetch.ok) {
    //     const data = pokeFetch.json()
    //     setPokeArray({data})
    // } else {
    //     alert("error in search")
    // }


    
    // const [pokeURL, newPokeURL] = useState(`'https://pokeapi.co/api/v2/pokemon/${results}/?limit=30&offset=30'`)
    // axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
    //     pokeArray.push(res).then( (data) => {
    //         pokeArray.map(
                
    //         )
    //     })
    // })
    return (
        <Form>
            <Form.Group>
                <Form.Label>
                    Use this form to search for any pokemon 
                </Form.Label>
                <Form.Control type="searchbar" placeholder="type here" className="searchbar">
                </Form.Control>
            </Form.Group>  
        </Form>
    )
    }
export default PokeSearch;