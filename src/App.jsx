
import { useState } from 'react';
import './App.css'
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TextForm from './components/TextForm';
import Calculator from './components/Calculator';
import Clock from './components/Clock';
import MusicNew from './components/MusicNew';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils - dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'textUtils- Light Mode';
    }
  }

  return (
    <>
      <Router>
        <div className='container my-3'>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path='/' element={<TextForm showAlert={showAlert} heading="█▓▒▒░░░Enter the text to analyze below░░░▒▒▓█" mode={mode} />} />
            <Route exact path="/calculator" element={<Calculator />} />
            <Route exact path="/clock" element={<Clock />} />
            <Route exact path="/music" element={<MusicNew />} />
          </Routes>

        </div>
      </Router>
    </>
  );
};

export default App;
