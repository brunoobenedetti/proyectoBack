class TicketManager{
    constructor(){
        this.Products = [];
    };

    getProducts(){
        return this.Products;
    };

    agregarProducts(nombre,detalle,URL_IMG,precio,cantidad=100,entrega=(new Date()).toLocaleString()){
    let newId;
        if(!this.Products.length){
            newId=1;
        } else{
            newId= this.Products[this.Products.length-1].id+1
        };
        const nuevoProducts ={
            id:newId,
            nombre,
            detalle,
            URL_IMG,
            precio,
            cantidad,
            entrega,
            ventas:[]
        };
        this.Products.push(nuevoProducts);
        console.log("nueva compra generada",nuevoProducts)
    };

    newUser(idProducts, idUser){
        const produExiste = this.Products.some((Products)=>{return Products.id === idProducts});
            if(!produExiste){
                console.log("este producto no exixte")

            } else {
                const posicionProduct = this.Products.findIndex((Products)=>{return Products.id === idProducts});
                const ventasId =this.Products[posicionProduct].ventas;
                const userExiste = ventasId.some((elm)=>elm === idUser);
                    if(userExiste){
                        console.log("la compra no exixte")
                    } else {
                        this.Products[posicionProduct].ventas.push(idUser);
                    };
            }
    }
};

const insumos3D = new TicketManager();
    console.log("insumos3D",insumos3D);
console.log("pedido de Bruno",insumos3D.getProducts());
insumos3D.agregarProducts("Creality", "Ender S1 pro","IMG", `$300000`, new Date("19-06-2023"));
insumos3D.agregarProducts("Creality", "Ender v2","IMG",`$250000`, new Date("19-06-2023"));
console.log("pedido de Bruno",insumos3D.getProducts());
insumos3D.newUser(2,2000);
insumos3D.newUser(2,500);
console.log("pedido de Bruno",insumos3D.getProducts());
insumos3D.newUser(2,2000);
console.log("pedido de Bruno",insumos3D.getProducts());