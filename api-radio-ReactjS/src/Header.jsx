import { useEffect, useState } from "react";
import './Header.css'

function Header () {

    const [generos, setGeneros] = useState ([])
    
    const tag   = e => setGenero(e.target.value);

const showTags = async() => {
    try {
        let response = await
        fetch(`https://de1.api.radio-browser.info/json/tags/?hidebroken=true&limit=100&reverse=true&order=stationcount`);
        const data = await response.json();
        
        // Ordenar los datos por la propiedad stationcount
        const dataOrdenada = data.sort((a, b) => a.name - b.name);
        setGeneros(dataOrdenada)
    } catch (error) {
        console.error('Error:', error);
    }
}

useEffect (() => {
    showTags ()
}, [])

    return (
        <div id="header" className="row g-2 bd-highlight bg-dark">           
            <h2>Radios</h2>

            <div id='buscar' className="d-flex h-75 gap-2 bd-highlight align-items-center ">

                <label htmlFor="myinput" className="form-label">Generos</label>
                <input className="form-control w-75" type="text" list="generos" id="myinput" role="combobox" placeholder="blues"/>
                
                <datalist id="generos">
                {generos.map(genero => {
                return ( 
                    <option key={genero.name}>{genero.name}</option>
                    )    
                })}   
                </datalist>                                
                <input id="button" type="submit" className="btn btn-primary" value="Enviar"/>
            </div>    
            <br/>    
        </div>
    )
    return {
        
    }
}

export default Header;