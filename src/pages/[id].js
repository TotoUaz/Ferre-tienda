import Product from "../../components/product";
import Link from "next/link";
import { useRouter } from "next/router";
import { getProduct } from "../../back/serverMock";
import ProductForm from "../../components/productForm";
import { useEffect, useState } from "react";
import DeleteModal from "../../components/deleteModal";
import styles from "../styles/[id].module.css";


export default function () {

    const router = useRouter();
    let { id } = router.query;
    let product1 = getProduct(id);
    const [editProduct, setEditProduct] = useState(false);
    const [visible, setVisble] = useState(false);

    const setVis = (data) => {
        setVisble(data);
    }

    const edit = (
        <>
            <h4>Editar artículo</h4>
            <ProductForm product={product1} />
        </>);

    const viewProduct = (
        <>
            <h4>Consultar artículo</h4>
            <Product product={product1} />
            <div className="bottom text-center">
                <button className="btn btn-success text" onClick={() => setEditProduct(true)}>Editar</button>
                <button className="btn btn-danger text" onClick={() => setVisble(true)}>Eliminar </button >
            </div>
        </>

    );

    return (

        <>


            <div className="headerApp">
                <h3>Ferremercado SA de CV</h3>
                {visible ? <DeleteModal props={[product1.id, visible, setVis]} /> : null}
            </div>

            {!editProduct ? viewProduct : edit}




        </>

    );

}

