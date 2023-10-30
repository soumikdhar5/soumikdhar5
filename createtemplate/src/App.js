import './App.css';
import Main from './Components/Main';
import { mobaction } from './Components/Services/MobxAction/Mobaction';

function App() {
  return (
    <div className="App">
      <Main mobxaction ={mobaction}/>
    </div>
  );
}

export default App;
