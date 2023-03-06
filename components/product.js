import styles from "../src/styles/product.module.css"
export default function Product({ product }) {

    const { nombre, precio, iva, total } = product

    return (
        <div>
            <form>
                <div className={styles.cool}>
                    Nombre:
                    <br />
                    {nombre}
                </div>
                <br />
                <div className={styles.cool}>
                    Precio:
                    <br />
                    $ {precio}
                </div>
                <br />
                <div className={styles.cool}>
                    IVA 16%:
                    <br />
                    $ {iva}
                </div>
                <br />
                <div className={styles.cool}>

                    Precio con IVA:
                    <br />
                    $ {total}
                </div>
            </form>
        </div>
    );

}
