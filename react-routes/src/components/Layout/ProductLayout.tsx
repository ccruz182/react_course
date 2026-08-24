import { NavLink, Outlet } from "react-router-dom";

const ProductLayout = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h1 className="mb-3">Products</h1>
                    <p>Browse our complete product catalog</p>

                    <nav className="mb-3 border rounded">
                        <div className="p-3">
                            <div className="d-flex gap-2 flex-wrap">
                                <NavLink to="/products" end className="btn btn-outline-success">All Products</NavLink>
                                <NavLink to="/products/electronics" className="btn btn-outline-success">Electronics</NavLink>
                                <NavLink to="/products/clothing" className="btn btn-outline-success">Clothing</NavLink>
                                <NavLink to="/products/books" className="btn btn-outline-success">Books</NavLink>
                            </div>
                        </div>
                    </nav>

                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default ProductLayout;