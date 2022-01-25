import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import { animals } from './animalDev/data';

const name = 'The Young One';
const email = 'TheYoungOne@Hidden.org';

function App() {
  return (
    <div className="App">
      <Header greeting={name}></Header>
      <Main animals={animals}></Main>
      <Footer email={email}></Footer>
    </div>
  );
}

export default App;
