import './App.css';
import './components/category/directory';
import HomePage from './components/routes/home-page';
import NavBar from './components/routes/nav-bar';
import AuthPage from './components/routes/auth-page';
import { Routes, Route } from 'react-router-dom';

const ShopPage = () => {
  return <h1>Shop</h1>
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<HomePage />}/>
        <Route path='shop' element={<ShopPage />}/>
        <Route path='auth' element={<AuthPage />}/>
      </Route>
    </Routes>
  );
}

export default App;
