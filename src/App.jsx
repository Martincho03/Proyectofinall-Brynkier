import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductoCard from "./Conponents/ProductoCard/ProductoCard";
import ProductoImage from "./Conponents/ProductImage/ProductoImage";

function App() {
    return (
        <>
            <header>
                <h1 className="Titulo">MeccaBike</h1>
            </header>
            <ProductoCard />
        </>
    );
}

export default App;
