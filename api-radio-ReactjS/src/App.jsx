import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import './App.css'


function App ({genero}) {

    const [radios, SetRadios] = useState ([])
    

const fetchData = async() => {
    try {
        const response = await
            fetch(`https://at1.api.radio-browser.info/json/stations/search?name=${genero}&hidebroken=true&name=clickcount&reverse=true`);
        const data = await response.json();
        
        SetRadios(data)
       
    } catch (error) {
        console.error('Error:', error);
    }
}

useEffect (() => {
    console.log(genero);
    fetchData ()
}, [genero])

    return (
        <>
            <Header/>
            <table className="table table-striped" id="table">
                <thead className="thead- text-center">
                    <tr>
                        <th scope="col">Escuchar</th>
                        <th scope="col">Radio</th>
                        <th scope="col">Pais</th>
                        <th scope="col">Codec</th>
                        <th scope="col">Bitrate</th>
                    </tr>
                </thead>                
                <tbody className="tbody" id="tbody">
                    {radios.map(radio => {
                        return (
                        <tr className="flex-row bd-highlight" key={radio.changeuuid}>
                            <td>
                                <button type="button" className="btn btn-primary btn-sm" >                                                               
                                <img className="w-100" style={{ height: '50px' }} src={(radio.favicon || 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Portable_Radio.svg/200px-Portable_Radio.svg.png')} alt="Descripción de la imagen"/>                                                                    
                                </button>
                            </td>
                            <td>{radio.name}</td>
                            <td>{radio.country}</td>
                            <td>{radio.codec}</td>                             
                            <td>{radio.bitrate}</td>
                        </tr>
                    )    
                    })}                                    
                </tbody>
            </table>  

            <Footer/>
        </>
    )
    
}

export default App;