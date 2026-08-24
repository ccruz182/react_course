import { Link } from "react-router-dom";
import { allProducts } from "../../data/products"

const ProductList = ({filterType, title, description}) => {
    
    const getFilteredProducts = () => {
        if ("all" == filterType) return allProducts

        return allProducts.filter(p => p.category == filterType);
    }


    return (
        <div className="py-2">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="mt-3">
                {getFilteredProducts().map(p => (
                    <div key={p.id} className="border rounded p-3 mb-3">
                        <h3>{p.name}</h3>
                        <p>Price: ${p.price}</p>
                        <p>Category: {p.category}</p>
                        <Link to={`/products/${p.id}`} className="btn btn-outline-success">View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList;