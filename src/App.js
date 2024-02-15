import './App.css';
import { Router,Route,Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import GetItems from './GetItems';
import Home from './Home';
import GetItemsById from './GetItemsById';
import Login from './Login';
import NewData from './NewData';

function App() {
  return (
    
     <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path='/get-all' element={<GetItems/>}/>
          <Route path='/get/:SzallasId' element={<GetItemsById/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/new' element={<NewData/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
