// import { SignUpComponent } from 'components/signUp/SignUpComponent';
import EasyLevel from 'components/easyLevel/EasyLevel';
import Footer from 'components/footer/Footer';
import GamePage from 'components/gamePage/GamePage';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App"> 
    <Routes>
    <Route path="easy" element={<EasyLevel/>}/>
    <Route path="/" element={<GamePage/>}/>
    <Route path="/game" element={<GamePage/>}/>



    </Routes>

    {/* <EasyLevel/> */}
     {/* <SignUpComponent/> */}
     <Footer/>
    </div>
  );
}

export default App;

