
const ProductTable = ({ products = [], handleProductUpdate, handleProductDelete }) => {
    return (
        <div className="card border-0 shadow-sm">
            <div className="card-header border-0 py-3">
                <h5 className="card-title mb-0">
                    <i className="bi bi-list-ul me-2 text-success"></i>
                    Products List ({products.length})
                </h5>
            </div>
            <div className="card-body p-0">
                <div className="table-responsive">
                    <table className="table table-hover mb-0">
                        <thead className="">
                            <tr>
                                <th className="border-0 ps-4">Image</th>
                                <th className="border-0">Product Details</th>
                                <th className="border-0">Flavor</th>
                                <th className="border-0">Size</th>
                                <th className="border-0">Price</th>
                                <th className="border-0">Stock</th>
                                <th className="border-0 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => {
                                return (
                                    <tr className="border-0" key={product.id}>
                                        <td className="ps-4 py-3">
                                            <img
                                                src="https://placehold.co/60x60/f8f9fa/6c757d?text=No+Image"
                                                style={{
                                                    width: "60px",
                                                    height: "60px",
                                                    borderRadius: "15px",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </td>
                                        <td className="py-3">
                                            <div>
                                                <h6 className="mb-1 fw-bold ">{product.name}</h6>
                                                <p
                                                    className="text-muted mb-0 small"
                                                    style={{ maxWidth: "200px" }}
                                                >
                                                    {product.description}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="py-3">
                                            <div className="d-flex flex-wrap gap-1">
                                                {product.flavor.split(",").map((flavor, index) => (
                                                    <span className="badge  border px-2 py-1 rounded-pill" key={index}>
                                                        <i className="bi bi-tag me-1"></i>
                                                        {flavor.trim()}
                                                    </span>
                                                ))}

                                            </div>
                                        </td>
                                        <td className="py-3">
                                            <span className="badge bg-info  px-3 py-2 rounded-pill">
                                                <i className="bi bi-rulers me-1"></i>
                                                {product.size}
                                            </span>
                                        </td>
                                        <td className="py-3">
                                            <span className="fw-bold text-success fs-6">$ {product.price}</span>
                                        </td>
                                        <td className="py-3">
                                            <span className={`badge px-3 py-2 rounded-pill ${product.stock <= 10 ? "bg-warning" : "bg-success"}`}>
                                                <i className="bi bi-boxes me-1"></i>{product.stock} items
                                            </span>
                                        </td>
                                        <td className="py-3 text-center">
                                            <div className="btn-group" role="group">
                                                <button
                                                    className="btn btn-outline-primary btn-sm px-3"
                                                    title="Edit Product"
                                                    onClick={() => handleProductUpdate(product)}
                                                >
                                                    <i className="bi bi-pencil-square"></i>
                                                </button>
                                                <button
                                                    className="btn btn-outline-danger btn-sm px-3"
                                                    title="Delete Product"
                                                    onClick={() => handleProductDelete(product.id)}
                                                >
                                                    <i className="bi bi-trash3"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};

export default ProductTable;