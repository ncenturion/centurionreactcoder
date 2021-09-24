import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../src/components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
        <NavBar /> 
        <Switch>
            <Route path='/' exact >
              <ItemListContainer greeting='Bienvenidos a la Tienda SASA DISEÑO' />
            </Route>
            <Route path='/categoria/:idCategoria' component={ItemListContainer}/>
            <Route exact path='/detalle' component={ItemDetailContainer}/>
            <Route exact path='/cart' component={Cart}/>

        </Switch>
       
      
    </BrowserRouter>
  )


 
}

export default App