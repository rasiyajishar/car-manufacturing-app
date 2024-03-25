
import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="w-full h-screen bg-black  flex flex-col justify-start items-start">

    <Navbar />
    <div className='w-full h-full flex    '>

      <Sidebar />
      <Dashboard />
      </div> 

  </div>
  );
}

export default App;
