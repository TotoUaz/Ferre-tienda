import Link from "next/link";
import { useEffect, useState } from "react";
import { getProducts } from "../back/serverMock";

export default function ProductRow() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const localStorageProducts = localStorage.getItem("products");
        if (!localStorageProducts) {
            localStorage.setItem("products", JSON.stringify(getProducts()));
        } else {
            setProducts(JSON.parse(localStorageProducts));
        }
    }, []);



    const listItems = products.map(product =>
        <div key={product.id} >
            <Link className="list-group-item" href={`${product.id}`}>
                <li key={product.id}>{product.nombre} <br />
                    Precio con IVA:${product.total}</li>
            </Link>
        </div>
    );


    return (
        <div>
            <ul className="list-group">{listItems}</ul>
        </div>
    );

}

