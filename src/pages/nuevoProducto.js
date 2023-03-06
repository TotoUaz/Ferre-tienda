import ProductForm from "../../components/productForm";
import { getId } from "../../back/serverMock";
// Bootstrap CSS

export default function nuevoProducto() {

    const id = getId();

    const product = {
        id: id,
        nombre: '',
        precio: 0,
        iva: 0,
        total: 0
    };

    return (
        <div>
            <div className="headerApp">
                <h3>Ferremercado SA de CV</h3>
            </div>
            <h4>Nuevo artículo</h4>
            <ProductForm product={product} ></ProductForm>
        </div>
    );
}