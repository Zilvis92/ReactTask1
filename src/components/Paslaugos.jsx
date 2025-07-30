import './Paslaugos.css';
import Paslauga from './Paslauga.jsx';

function Paslaugos() {
    return (
        <section className="paslaugos-section">
            <h2 className="paslaugos-title">Musu paslaugos</h2>
            <Paslauga 
                pavadinimas="Web dizainas"
                aprasymas="Kuriame modernius ir patrauklius interneto puslapius."
            />
            <Paslauga 
                pavadinimas="SEO optimizacija" 
                aprasymas="Padedame jūsų svetainei geriau matytis paieškos sistemose." 
            />
            <Paslauga 
                pavadinimas="Programavimas" 
                aprasymas="Rašome kokybišką ir efektyvų programinį kodą pagal jūsų poreikius." 
            />
        </section>
    );
}

export default Paslaugos;