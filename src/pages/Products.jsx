import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(res => setProducts(res.data));
    }, []);

    return (
        <div>
            <h2>Products</h2>

            {products.map(p => (
                <div key={p.id}>
                    {p.name} - R{p.price}
                </div>
            ))}
        </div>
    );
};

export default Products;