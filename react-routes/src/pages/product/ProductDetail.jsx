import { useParams, Link, useNavigate } from "react-router-dom";
import { allProducts } from "../../data/products"

const ProductDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const product = allProducts.find(p => p.id == id);

    if (!product) {
        return (
            <div className="m-3 p-3 border">
                <h1>Product Not Found</h1>
                <Link to="/products" onClick={() => navigate(-1)}>Back to Products</Link>
            </div>
        )
    }

    return (
        <div className="m-3 p-3 border">
            <Link to="/products" className="btn btn-outline-success my-2" onClick={() => navigate(-1)}>Back to Products</Link>
            <h1>{product?.name}</h1>
            <p>Price: ${product?.price}</p>
            <p>Category: {product?.category}</p>
        </div>
    )
}

export default ProductDetail;