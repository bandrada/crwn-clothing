import { Routes, Route } from 'react-router-dom';

import HomePage from './routes/home-page';
import NavBar from './routes/nav-bar';
import AuthPage from './routes/auth-page';
import Shop from './routes/shop';
import Checkout from './routes/checkout';

import './App.css';
import './components/directory';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<HomePage />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='auth' element={<AuthPage />}/>
        <Route path='checkout' element={<Checkout />}/>
      </Route>
    </Routes>
  );
}

export default App;
