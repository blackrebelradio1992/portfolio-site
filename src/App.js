import logo from '/Users/frankjr./Desktop/React APP portfolio site/my-app/src/assets/img/logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomNavbar } from './components/NavBar';
import { Banner } from "./components/Banner";
import { Skills } from './components/Skills';
import  PlaySound  from './components/appMusic';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Banner />
      <Skills />
      <PlaySound />
    </div>
  );
}

export default App;
