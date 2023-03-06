export function getProducts() {
    return products;
}

export function getProduct(identifier) {
    let products1 = localStorage.getItem("products"); //Obtiene el item como string.
    products1 = JSON.parse(products1);//Lo convertimos a object :D

    for (let i = 0; i < products1.length; i++) {
        let product = products1[i];
        if (product.id == identifier) {
            return product;
        }
    }
}

export function deleteProduct(identifier) {
    let products1 = localStorage.getItem("products"); //Obtiene el item como string.
    products1 = JSON.parse(products1);//Lo convertimos a object :D

    for (let i = 0; i < products1.length; i++) {
        let product = products1[i];
        if (product.id == identifier) {
            let splice = products1.splice(i, 1);
        }
    }

    localStorage.setItem("products", JSON.stringify(products1));
}

export function editProduct(id, nombre, precio) {

    let nuevoIva = getIva(precio);
    let precioParse = parseFloat(precio)
    let precioNuevo = precioParse + nuevoIva;

    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        if (product.id == id) {
            products[i].nombre = nombre;
            products[i].precio = precioParse;
            products[i].iva = nuevoIva;
            products[i].total = precioNuevo;
        }
    }
    localStorage.setItem("products", JSON.stringify(products));
}
export function getId() {
    let products1 = localStorage.getItem("products"); //Obtiene el item como string.
    products1 = JSON.parse(products1);//Lo convertimos a object :D
    let id = products1.length;
    return id;

}

export function saveProduct(id, nombre, precio) {

    let iva = getIva(precio);
    let precioParse = parseFloat(precio)
    let total = precioParse + iva;
    let newProduct = {
        id: id,
        nombre: nombre,
        precio: precioParse,
        iva: iva,
        total: total
    }
    products.push(newProduct);
    console.log(products);
    localStorage.setItem("products", JSON.stringify(products));
}


function getIva(precio) {
    return precio * 0.16;
}


let products = [
    {
        id: 0,
        nombre: 'Pala cuadrada T-2000, puño ‘Y’',
        precio: 100,
        iva: 16,
        total: 116
    },
    {
        id: 1,
        nombre: 'Interruptor de seguridad 2 polos, 30 V',
        precio: 350,
        iva: 56,
        total: 406
    },
    {
        id: 2,
        nombre: 'Pala cuadrada, puño ‘D‘',
        precio: 150,
        iva: 24,
        total: 174
    },
    {
        id: 3,
        nombre: 'Pala cuadrada classic, puño ‘Y’',
        precio: 600,
        iva: 96,
        total: 696
    },
    {
        id: 4,
        nombre: 'Pala cuadrada T-2000, puño ‘Y’',
        precio: 500,
        iva: 80,
        total: 580
    },
];


