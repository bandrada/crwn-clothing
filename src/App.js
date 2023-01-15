import './App.css';
import './components/category/directory';
import Home from './components/routes/home';
import Navigation from './components/routes/navigation';
import SignIn from './components/sign-in/sign-in';
import { Routes, Route } from 'react-router-dom';

const Shop = () => {
  return <h1>Shop</h1>
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='sign-in' element={<SignIn />}/>
      </Route>
    </Routes>
  );
}

export default App;
