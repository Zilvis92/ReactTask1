import './Paslauga.css';

function Paslauga({ pavadinimas, aprasymas }) {
    return (
        <div className="paslauga-container">
            <h3 className="paslauga-title">{ pavadinimas }</h3>
            <p className="paslauga-description">{ aprasymas }</p>
        </div>
    );
}

export default Paslauga;
