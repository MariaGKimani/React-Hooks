import React, { useState, useEffect } from "react";
import style from './style.css';
import { Link } from "react-router-dom";
// import{createBrowserRouter,RouterProvider, Route, Link} from "react-router-dom";


const Home = () => {
  const [products, setProducts] = useState([]);

//to show sth is happening
  

  //has a callback function and a dependancy array where you put variables for the changes
  useEffect(() => {
    (async () => {
        await  getProducts();
    }) () ;
  }, []);

  const getProducts = async () => {
    try {

      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setProducts(result.products);
    }
     catch (error) {
      console.log(error.message);
    }
  };
  console.log({products});

  return (
  <div className="products">
    {products.map((product)=>(
      <div className="products1">
            <img alt ="img" src={product.images[0]} className="images"/>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <p>{product.discountPercentage}</p>
        
          <button type="submit" className="view">
          <Link to="/index"className="btn"> View</Link>
          </button>
       
        </div>
    ))   
    }
  </div>
)
};
export default Home;
