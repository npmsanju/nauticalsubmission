import "./App.css";
import React, {Component} from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetAllProducts from "./Components/allProducts";
import GetSingleProduct from "./Components/singleItem";
import NavBar from "./Components/navBar";
import 'semantic-ui-css/semantic.min.css'
import {Navlink, Routes, Route, withRouter} from 'react-router-dom';


// general practice for error building using the GQL library
// const errorLink = onError(({ graphqlErrors, networkError }) => {
//   if (graphqlErrors) {
//     graphqlErrors.map(({ message, location, path }) => {
//       alert(`Graphql error ${message} ${location} ${path}`);
//     });
//   }
// });

// const GQLlink = from([
//   errorLink, // pass error logic durring link creation
//   new HttpLink({ uri: "https://api-intgn.nautical.dev/graphql/" }),
// ]);

// // create a new instance of apollo library
// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: GQLlink,
// });

function App() {
  return (
    // wrapper in appolo provider to reach all GQL api

      <div><NavBar/>
      <Routes>
        <Route exact path="/" element={<GetAllProducts/>}/>
        <Route exact path="/soldout" element={<GetAllProducts/>}/>
        <Route path="product/:id" element={<GetSingleProduct/>}/>
      </Routes>
      </div>
  );
}

export default App;