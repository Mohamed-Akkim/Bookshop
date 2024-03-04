import React , { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Contact from './components/Contact';
import data from './books.json'
import { Footer } from './components/Footer';
import './App.css'


const App = () => {
  const [books] = useState(data);
  
/* For Online API Fetching Data */  

 {/*  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=SmIAmbmkRSyuHGka7m6tH0WCKSf50yEf';
      try {
        let res = await fetch(url);
        let data = await res.json();
        setBooks(data.results.books); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); */}
   


  const [cart,setCart] = useState([]);
  
  return (
    <Router>
      <Navbar books={books} cart={cart} />
      <Switch>
      <Route
          path="/"
          exact
          component={() => <Home books={books} cart={cart} setCart={setCart} />}
        />
        <Route
          path="/Cart"
          exact
          component={() => <Cart books={books} cart={cart} setCart={setCart}/>}
        />
        <Route
          path="/Contact"
          exact
          component={() => <Contact/>}
        />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
