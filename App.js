import logo from './logo.svg';
import './App.css';
// import Button from '@mui/material/Button';
import NavBar from './NavBar'
import TopAd from './topad'
import MainOption from './MainOption';
import ReasonShop from './ReasonShop'
import Recommended from './Recommended'
import Dealnoon from './Dealnoon.js'
import OptionNav from './OptionNav'



function App() {
  return (
    <div className="App">
<NavBar/>
<OptionNav/>
<TopAd />

   {/* <Button variant="contained">Hello World</Button> */}

   <MainOption/>

   <ReasonShop/>
   <Recommended/>
   <Dealnoon/>
   
    </div>
  );
}

export default App;
