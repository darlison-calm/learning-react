import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Login } from './pages/Login';
function App() {
  return (
    // <>
    //   <Header></Header>
    // </>
    <>
      <Router>
       
        <Header></Header>
        <Routes>
          <Route path='/home' element={<HomePage/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='*' element={<HomePage/>}></Route>
        </Routes>
       
      </Router>
    </>
  )
}

export default App
