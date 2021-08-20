import './App.css';
import Timer from './Timer';
import Socials from './Socials'

function App() {
  // Set time
  const time = {dd: 1,hh: 0, mm: 0,ss: 0};

  return (
    <div className="App">
      <h1 className="header">WE'RE LAUNCHING SOON</h1>
      <Timer time={time}/>
      <Socials/>
    </div>
  );
};

export default App;