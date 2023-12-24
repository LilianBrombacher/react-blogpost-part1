import { Link} from "react-router-dom";

function Errorpage () {
    return (
        <main>
            <h1>Pagina niet gevonden</h1>
            <p>Ga terug naar de <Link to={'/'}>homepagina</Link> of probeer het opnieuw</p>
        </main>
    )
}

export default Errorpage