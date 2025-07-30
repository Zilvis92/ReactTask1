import Comp4 from './components/Comp4.jsx';
import Comp5 from './components/Comp5.jsx';
import Comp6 from './components/Comp6.jsx';
import Paslaugos from './components/Paslaugos.jsx';
import './App.css'

function App() {
  return (
    <>
      <div className="app-container">
        <h1>App komponentas</h1>
        <Comp4 />
        <Comp5 />
        <Comp6 />
        <Paslaugos />
      </div>
    </>
  );
}
  
export default App
