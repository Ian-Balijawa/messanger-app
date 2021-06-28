import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import MainChat from './MainChat'
function App() {
  return (
    <div className="app">
       <div className="main-body">
         <Sidebar/>
         <MainChat/>
          
       </div>

    </div>
  );
}

export default App;
