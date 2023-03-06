import ProductTable from "../../components/productTable";
import Link from "next/link";
import styles from "../styles/listaDeProductos.module.css"


export default function listaDeProductos() {
    return (
        <div>
            <div className="headerApp">
                <h3>Ferremercado SA de CV</h3>
            </div>
            <div>
                <ProductTable />
            </div>

            <div className="bottom text-center ">
                <button className="btn btn-success text" ><Link href="/nuevoProducto">NuevoProducto</Link></button>
            </div>

        </div >
    );
}