import './Footer.css'
import logo from './assets/favicon.png'
function Footer() {
    return (
        <footer >   
    <div className="p-0 d-flex bd-highlight w-100 align-items-center  bg-dark">    
        <div id="custom-audio-player" className="p-2 d-flex align-items-center bd-highlight">
        <audio id="audio-element" >
            <source src="" type="audio/mp3"/>
            Tu navegador no soporta la etiqueta de audio.
        </audio>

        <div id="audio-controls">
            <span id="current-time">0:00</span>
            <button id="play-pause-button" className="btn btn-primary">&#9658;</button>
        </div>
        </div>
        <div id="metadata" className="d-inline p-2 align-items-start align-content-center flex-row">
            <div className="d-inline p-3 bd-highlight">
                <img id="imgmetadata" src="" alt=""/>
            </div>
            <div id="data" className="d-inline-flex nowrap p-2">
                <small id="radio" ></small>
            </div>
        </div>
        <div id="autor" className="p-0 d-flex align-items-center flex-column bd-highlight" >  
            <img src={logo}  alt="..."/>                 
                     
            <span id="copyright" className="p-2">© Ciro 2023</span>
        </div>
    </div>
</footer>
    )
    
}

export default Footer;