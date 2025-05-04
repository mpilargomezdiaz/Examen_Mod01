let imagen = new Array();
let categoria = new Array();
let descripcion = new Array();
let id_producto = new Array();
let precio = new Array();
let rating = new Array();
let titulo = new Array();
let rate = new Array();
let count = new Array();

function limpiarHTML() {
    let div_limp = ["productos", "id_product", "producto", "carrito"];
    div_limp.forEach(limpieza => {
        let divs = document.getElementById(limpieza);
        divs.innerHTML = "";
    });
}

function pintarTodosLosProductos() {
    limpiarHTML();
    let contenedor_all_i = document.getElementById("productos");
    contenedor_all_i.innerHTML = "";
    for (let i = 0; i < titulo.length; i++) {
        let contenedor_cada_producto = document.createElement("div");
        contenedor_cada_producto.classList.add("producto_unico");
        let text_productos = document.createElement("h3");
        text_productos.innerHTML = titulo[i];
        contenedor_cada_producto.appendChild(text_productos);
        let div_padre = document.createElement("div");
        div_padre.classList.add("padre");
        let foto_product = document.createElement("img");
        foto_product.src = imagen[i];
        div_padre.appendChild(foto_product);
        let contenedor_pr_des = document.createElement("div");
        contenedor_pr_des.classList.add("caracteristicas");
        let tit_id = document.createElement("h4");
        tit_id.classList.add("ip");
        tit_id.innerHTML = "Id:" + id_producto[i];
        contenedor_pr_des.appendChild(tit_id);
        let tit_categoria = document.createElement("h4");
        tit_categoria.classList.add("ip");
        tit_categoria.innerHTML = "Categoría: " + categoria[i];
        contenedor_pr_des.appendChild(tit_categoria);
        let tit_des_productos = document.createElement("h4");
        tit_des_productos.innerHTML = "Descripción";
        contenedor_pr_des.appendChild(tit_des_productos);
        let sobre_productos = document.createElement("p");
        sobre_productos.classList.add("descrp");
        sobre_productos.innerHTML = descripcion[i];
        contenedor_pr_des.appendChild(sobre_productos);
        let tit_coste_productos = document.createElement("h4");
        tit_coste_productos.innerHTML = "Precio";
        contenedor_pr_des.appendChild(tit_coste_productos);
        let coste_productos = document.createElement("p");
        coste_productos.innerHTML = precio[i];
        contenedor_pr_des.appendChild(coste_productos);
        let tit_rating = document.createElement("h4");
        tit_rating.innerHTML = "Rating:"
        contenedor_pr_des.appendChild(tit_rating);
        let tit_rate = document.createElement("p");
        tit_rate.innerHTML = "Rate: " + rate[i];
        contenedor_pr_des.appendChild(tit_rate);
        let tit_count = document.createElement("p");
        tit_count.innerHTML = "Count: " + count[i];
        contenedor_pr_des.appendChild(tit_count);
        div_padre.appendChild(contenedor_pr_des);
        contenedor_cada_producto.appendChild(div_padre);
        contenedor_all_i.appendChild(contenedor_cada_producto);
    };
}

function datosTodosLosProductos() {
    fetch('https://fakestoreapi.com/products')
        .then(contenido => contenido.json())
        .then(json_contenido => {
            imagen = json_contenido.map(producto => producto["image"]);
            categoria = json_contenido.map(producto => producto["category"]);
            descripcion = json_contenido.map(producto => producto["description"]);
            id_producto = json_contenido.map(producto => producto["id"]);
            precio = json_contenido.map(producto => producto["price"]);
            rating = json_contenido.map(producto => producto["rating"]);
            rate = rating.map(producto => producto["rate"]);
            count = rating.map(producto => producto["count"]);
            titulo = json_contenido.map(producto => producto["title"]);
        })
        .catch(error => alert("Se ha producido un error, refresque la página", error.message));
}
datosTodosLosProductos();

function limpiarURL() {
    url = "";
}

let url;
let imagen_producto_eleccion;
let id_pro_i;
let seleccion_input;

function pintarProductoIndv() {
    limpiarHTML();
    const div = document.getElementById("id_product");
    div.innerHTML = "";
    div.appendChild(document.createElement("br"));
    const label = document.createElement("label");
    label.innerText = "Inserta la id (1-20) del producto que deseas ver";
    div.appendChild(label);
    div.appendChild(document.createElement("br"));
    const input = document.createElement("input");
    input.type = "text";
    div.appendChild(input);
    div.appendChild(document.createElement("br"));
    const boton = document.createElement("button");
    boton.setAttribute("onclick", "datosProductoIndividual()");
    boton.innerText = "Buscar";
    div.appendChild(document.createElement("br"));
    div.appendChild(boton);
}

function datosProductoIndividual() {
    let num_id = document.getElementsByTagName("input")[0].value;
    num_id = parseInt(num_id);
    if (num_id >= 1 && num_id <= 20) {
        id_pro_i = id_producto[(num_id) - 1];
        url = "https://fakestoreapi.com/products/";
        url = url + id_pro_i;
        imagenIndv();
    } else {
        limpiarHTML();
        let cont_c = document.getElementById("producto");
        let cont_txt = document.createElement("div");
        cont_txt.classList.add("alerta");
        cont_txt.innerHTML = "Id incorrecto. No existe ningún producto con ese Id, pruebe con otro.";
        cont_c.appendChild(cont_txt);
    }
}

let id_comprador;

function imagenIndv() {
    fetch(url)
        .then(contenido => contenido.json())
        .then(json_contenido_indv => {
            limpiarHTML();
            console.log("Este es el json del contenido indv:");
            console.log(json_contenido_indv);
            let id_prod = json_contenido_indv["id"];
            let t_imagen = json_contenido_indv["title"];
            let imagen_indv = json_contenido_indv["image"];
            let n_precio = json_contenido_indv["price"];
            let t_descripcion = json_contenido_indv["description"];
            let t_categoria = json_contenido_indv["category"];
            let t_rate = json_contenido_indv["rating"]["rate"];
            let t_count = json_contenido_indv["rating"]["count"];
            let div_contenedor = document.getElementById("producto");
            let cont_indv = document.createElement("div");
            cont_indv.classList.add("producto_cont");
            let titulo_producto = document.createElement("h3");
            titulo_producto.innerHTML = t_imagen.toString();
            cont_indv.appendChild(titulo_producto);
            let div_padr = document.createElement("div");
            div_padr.classList.add("padr");
            let imagen_producto = document.createElement("img");
            imagen_producto.src = imagen_indv.toString();
            div_padr.appendChild(imagen_producto);
            let contenedor_rest = document.createElement("div");
            contenedor_rest.classList.add("caracteristic");
            let t_id = document.createElement("h4");
            t_id.innerHTML = "Id:" + id_prod;
            t_id.classList.add("ipi");
            contenedor_rest.appendChild(t_id);
            let tit_ca_indv = document.createElement("h4");
            tit_ca_indv.innerHTML = "Categoría: " + t_categoria;
            contenedor_rest.appendChild(tit_ca_indv);
            let tit_descr = document.createElement("h4");
            tit_descr.innerHTML = "Descripción";
            contenedor_rest.appendChild(tit_descr);
            let p2 = document.createElement("p");
            p2.innerHTML = t_descripcion.toString();
            p2.classList.add("descrip");
            contenedor_rest.appendChild(p2);
            let tit_precio = document.createElement("h4");
            tit_precio.innerHTML = "Precio";
            contenedor_rest.appendChild(tit_precio);
            let p1 = document.createElement("p");
            p1.innerHTML = n_precio.toString();
            contenedor_rest.appendChild(p1);
            let t_rating = document.createElement("h4");
            t_rating.innerHTML = "Rating:";
            contenedor_rest.appendChild(t_rating);
            let t_rate_indv = document.createElement("p");
            t_rate_indv.innerHTML = "Rate: " + t_rate;
            contenedor_rest.appendChild(t_rate_indv);
            let t_count_indv = document.createElement("p");
            t_count_indv.innerHTML = "Count: " + t_count;
            contenedor_rest.appendChild(t_count_indv);
            let contenedor_input = document.createElement("div");
            seleccion_input = document.createElement("input");
            seleccion_input.classList.add("boton_seleccionado");
            seleccion_input.type = "checkbox";
            seleccion_input.value = false;
            seleccion_input.setAttribute("onclick", "añadirProducto()");
            contenedor_input.appendChild(seleccion_input);
            contenedor_input.appendChild(document.createElement("br"));
            contenedor_rest.appendChild(contenedor_input);
            div_padr.appendChild(contenedor_rest);
            cont_indv.appendChild(div_padr);
            div_contenedor.appendChild(cont_indv);
        });
    limpiarURL();
}

let lista_productos_seleccionados = new Array();

function añadirProducto() {
    if (seleccion_input.checked === true) {
        console.log("el elemento con id " + id_pro_i + " ha sido seleccionado");
        lista_productos_seleccionados.push(id_pro_i);
        insertarDatosCarrito();
    } else {
        console.log("El elemento con id " + id_pro_i + " no ha sido seleccionado");
    }
}

function insertarDatosCarrito() {
    let contenedor_carrito = document.getElementById("carrito");
    console.log("Este es el nuevo array de lista productos:");
    console.log(lista_productos_seleccionados);
    let tit_pro_selecc = document.createElement("h4");
    tit_pro_selecc.innerHTML = "Los productos que tienes en el carrito son los siguientes: ";
    contenedor_carrito.appendChild(tit_pro_selecc);
    lista_productos_seleccionados.forEach(productoS => {
        let text_producto = document.createElement("p");
        text_producto.innerHTML = "Tu producto con id: " + productoS;
        contenedor_carrito.appendChild(text_producto);
    });
}
