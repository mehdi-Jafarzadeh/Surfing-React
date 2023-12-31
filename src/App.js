import './App.css';
import P1 from './components/P1/P1';
import Footer from './components/Footer/Footer';
import P6 from './components/P6/P6';
import P5 from './components/P5/P5';
import P7 from './components/P7/P7';
import P4 from './components/P4/P4';
import Navbar from './components/Navbar/Navbar';
import P2 from './components/P2/P2';
import P3 from './components/P3/P3';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <P1 />
      <P2 />
      <P3 />
      <P4 />
      <P5 />
      <P6 />
      <P7 />
      <Footer />
    </div>
  );
}

export default App;
