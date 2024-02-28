import './App.css';
import { useSelector } from 'react-redux';
import Login from './components/auth/LoginComponent';
import RegisterComponent from './components/auth/RegisterComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/scss/themes.scss';
function App() {
  // const { demoSlice } = useSelector(state => state.demo)
  // console.log('demoSlice', demoSlice)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
