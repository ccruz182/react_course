import { addToCart } from "../../store/slice/cartSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const ProductDetailsModal = ({onClose, product}) => {

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({product, quantity: 1}))
        toast.success("Added in the cart.");
        onClose();
    }


    return (<div
        className="modal fade show d-block"
        tabIndex="-1"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
        <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{product.name}</h5>
                    <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={onClose}
                    ></button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="position-relative mb-3">
                                <img
                                    src="https://placehold.co/800x600"
                                    className="img-fluid rounded w-100"
                                />
                                <span className="badge bg-warning position-absolute top-0 start-0 m-2 ">
                                    <i className="bi bi-exclamation-triangle-fill me-1"></i>
                                    Low Stock
                                </span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <div className="d-flex flex-wrap gap-2 mb-3">
                                    <span className="badge bg-transparent border border-success text-success fw-semibold px-3 py-1 rounded-pill">
                                        {product.flavor}
                                    </span>
                                </div>
                                <div className="mb-3">
                                    <span className="badge fw-medium px-3 py-1 rounded-pill">
                                        {product.size}
                                    </span>
                                </div>
                                <h3 className="text-success mb-3">${product.price}</h3>

                                <div className="mb-3">
                                    <strong>Stock Available: </strong>
                                    <span className={`badge bg-success`}>{product.stock} units</span>
                                </div>

                                <div className="mb-4">
                                    <h6>Description</h6>
                                    <p className="text-muted">{product.description}</p>
                                </div>

                                <div className="d-grid gap-2">
                                    <button className={`btn btn-lg btn-success`} onClick={handleAddToCart}>
                                        <i className={`bi bi-cart-plus me-2`}></i>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>)
};

export default ProductDetailsModal;