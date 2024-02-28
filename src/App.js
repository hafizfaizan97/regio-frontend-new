import './assets/scss/themes.scss';
// import './App.css';
import { useSelector } from 'react-redux';
// import Login from './components/Authentication/Login';
// import Register from './components/Authentication/Register';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login'
import Dashbaord from './components/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/scss/themes.scss';
function App() {
  // const { demoSlice } = useSelector(state => state.demo)
  // console.log('demoSlice', demoSlice)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashbaord />} />
          <Route path="/dashboard" element={<Dashbaord />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
