import './App.css';
import './components/directory';
import HomePage from './routes/home-page';
import NavBar from './routes/nav-bar';
import AuthPage from './routes/auth-page';
import { Routes, Route } from 'react-router-dom';
import Shop from './routes/shop';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<HomePage />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='auth' element={<AuthPage />}/>
      </Route>
    </Routes>
  );
}

export default App;
