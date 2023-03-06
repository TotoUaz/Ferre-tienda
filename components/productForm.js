import React, { useState, useEffect, use } from 'react';
import { editProduct, saveProduct } from '../back/serverMock';
import { useRouter } from 'next/router';
import styles from "../src/styles/productForm.module.css"

export default function ProductForm({ product }) {
    useEffect(() => {

        setProductName(nombre);
        setProductPrice(precio);
        if (product.iva == 0) {
            setIsNew(true);
        }
        !product.precio > 0 ? setIsValidPrice(true) : setIsValidPrice(false);

    }, [product]);

    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [isNew, setIsNew] = useState(false);
    const [isValidPrice, setIsValidPrice] = useState();
    const { id, nombre, precio, iva, total } = product;
    let router = useRouter();
    const saveEdit = (
        <div className='bottom text-center'>
            <button className='btn btn-success text ' disabled={isValidPrice} onClick={() => { editProduct(id, productName, productPrice); router.push('/listaDeProductos') }}>Guardar cambios</button>
        </div>
    );
    const saveNew = (
        <div className='bottom text-center'>
            <button className='btn btn-success text' disabled={isValidPrice} onClick={() => { saveProduct(id, productName, productPrice); router.push('/listaDeProductos') }}>Guardar  artículo</button>
        </div>
    );

    return (
        <div>
            <label className={styles.label}>
                Nombre:
                <br />
                <input className={styles.inputsWidth} type="text" maxLength={200} value={productName} onChange={(e) => {
                    setProductName(e.target.value);
                }} />
            </label>
            <br />
            <label className={styles.label}>
                Precio:
                <br />
                <input className={styles.inputsWidth} type="number" maxLength={5} value={productPrice} onChange={(e) => {
                    const limit = 5;
                    setProductPrice(e.target.value);
                    setProductPrice(e.target.value.slice(0, limit));
                    setIsValidPrice(!e.target.value > 0)
                }} />
            </label>
            <br />
            <label className={styles.label} >
                IVA 16%:
                <br />
                $ {iva}
            </label>
            <br />
            <label className={styles.label}>
                Precio con IVA:
                <br />
                $ {total}
            </label>
            <br />
            {isNew ? saveNew : saveEdit}
        </div>
    );

}
