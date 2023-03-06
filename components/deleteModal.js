import { deleteProduct } from "../back/serverMock"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../src/styles/deleteModal.module.css"
export default function deleteModal({ props }) {

    const [visible, setVisible] = useState(props[1]);

    let router = useRouter()

    props[2](visible);


    return (
        <div className={styles.modal}>
            <div className="z-3  p-5 rounded-3 text-center ">
                <h5>Eliminar artículo</h5>
                <h5>Estas seguro que quieres eliminar este artículo?</h5>
                <br />
                <button className="btn btn-success text" onClick={() => { deleteProduct(props[0]); router.push('/listaDeProductos') }}>Si</button>
                <button className="btn btn-danger text" onClick={() => setVisible(false)}>No</button>
            </div>
        </div>
    );
}

