import React,{useReducer,useEffect} from "react";
import "./App.css";
import Header from "./components/Header/header";
import NavbarComponent from "./components/Navbar/navbar";
import Layout from "./components/Layout/layout";
import FooterComponent from "./components/Footer/footer";
import { BrowserRouter } from "react-router-dom";
import { FinanceContext } from "./Context/context";
import {reducer,initialState} from "./Reducer/reducer";
function App() {
  const [state, dispatch] = useReducer(reducer, initialState); 
  return (
    <FinanceContext.Provider value={{state,dispatch}} >
      <BrowserRouter>
        <div className="App">
          <Header />
          <NavbarComponent />
          <Layout />
          {/* <FooterComponent /> */}
        </div>
      </BrowserRouter>
    </FinanceContext.Provider>
  );
}

export default App;
