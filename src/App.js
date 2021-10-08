import { createContext, useState} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../src/components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from "./components/Cart/Cart";
import  CartContextProvider  from './Context/cartContext';

const categorias = [
 
    { id: 1, categoria:'Agendas', img:'https://www.quade.com.ar/1503687-large_default/agenda-2021-a5-semana-a-la-vista-tute-vengo-por-las-dudas.jpg', name: "Agenda 1", color:"Rosa" },
    { id: 2, categoria:'Agendas', img:'https://www.quade.com.ar/1503687-large_default/agenda-2021-a5-semana-a-la-vista-tute-vengo-por-las-dudas.jpg', name: "Agenda 2", color:"Violeta"},
    { id: 3, categoria:'Encuadernacion', img:'https://www.quade.com.ar/1503687-large_default/agenda-2021-a5-semana-a-la-vista-tute-vengo-por-las-dudas.jpg', name: "Cuaderno 1", color:"Celeste"},
    { id: 4, categoria:'Identidad de Marca', img:'https://www.quade.com.ar/1503687-large_default/agenda-2021-a5-semana-a-la-vista-tute-vengo-por-las-dudas.jpg', name: "Identidad 1", color:"Ambar"},
    { id: 5, categoria:'Identidad de Marca', img:'https://www.quade.com.ar/1503687-large_default/agenda-2021-a5-semana-a-la-vista-tute-vengo-por-las-dudas.jpg', name: "Identidad 2", color:"Rosa" },
    { id: 6, categoria:'Carteleria', img:'https://www.quade.com.ar/1503687-large_default/agenda-2021-a5-semana-a-la-vista-tute-vengo-por-las-dudas.jpg', name: "Cartel 1", color:"Violeta"},
    { id: 7, categoria:'Carteleria', img:'https://www.quade.com.ar/1503687-large_default/agenda-2021-a5-semana-a-la-vista-tute-vengo-por-las-dudas.jpg', name: "Cartel 2", color:"Celeste"},
    { id: 8, categoria:'Tarjeteria', img:'https://www.quade.com.ar/1503687-large_default/agenda-2021-a5-semana-a-la-vista-tute-vengo-por-las-dudas.jpg', name: "Tarjeta 1", color:"Ambar"},

]

export const ContextApp = createContext ('sasadis')

function App() {

  const [state, setState]= useState (categorias)

  function setearEstado(item) {
    setearEstado(item)
  }
  return ( 
    <CartContextProvider>
    <ContextApp.Provider  value = {state}>
    <BrowserRouter>
        <NavBar /> 
        <Switch>
            <Route  exact path='/'  >
              <ItemListContainer greeting='Bienvenidos a la Tienda SASA DISEÑO' />
            </Route>
            <Route path='/categoria/:idCategoria' component={ItemListContainer} />
            <Route exact path='/detalle/:id' component={ItemDetailContainer} />
            <Route exact path='/cart' component={Cart} />

        </Switch>
       
      
    </BrowserRouter>
    </ContextApp.Provider> 
    </CartContextProvider>
  )


 
}

export default App