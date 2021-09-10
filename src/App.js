import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../src/components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
        <NavBar /> 
        <ItemListContainer greeting='Bienvenidos a la Tienda SASA DISEÑO' />
      
    </>
  )


 
}

export default App