import React from "react";
import ProductoImage from "../ProductImage/ProductoImage";
import ProductoInfo from "../ProductoInfo/ProductoInfo";
import ButtonCart from "../ButtonCart/ButtonCart";

const ProductoCard = () => {
    return (
        <div>
            <ProductoImage />
            <ProductoInfo />
            <ButtonCart />
        </div>
    );
};

export default ProductoCard;
