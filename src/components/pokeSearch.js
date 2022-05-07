import { useState, useEffect } from "react"
import { Form } from "react-bootstrap"
import axios from "axios"
const PokeSearch = () => { 
    const [pokemon, setPokemon]= useState()
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