

import './App.css';
import ItemListContainer from './components/ItemListContainer';
import './components/NavBar/Navbar'
import NavBar from './components/NavBar/Navbar';


function App() {
  return (
    <> 
    <header > 
   <NavBar/>
    </header>
    <div> 
      <ItemListContainer greeting={'Bienvenidos'}/>  
    </div>
   
   </>
  );
}

export default App;
