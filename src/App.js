import "./App.css";
import React, {Component} from 'react'

import GetAllProducts from "./Components/allProducts";
import GetSingleProduct from "./Components/singleItem";
import NavBar from "./Components/navBar";
import 'semantic-ui-css/semantic.min.css'
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
      <div><NavBar/>
      <Routes>
        <Route path="/" element={<GetAllProducts/>}/>
        <Route path="/soldout" element={<GetAllProducts/>}/>
        <Route path="product/:id" element={<GetSingleProduct/>}/>
        <Route path="*" element={<GetAllProducts/>}/>
      </Routes>
      </div>
  );
}

export default App;