import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";


const Checkout = () => {
    const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="container py-4">
            <h2 className="mb-4">Checkout</h2>

            <form>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card mb-4">
                            <div className="card-header">
                                <h5 className="mb-0">Shipping Information</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">First Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="firstName"
                                                defaultValue="John"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Last Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="lastName"
                                                defaultValue="Doe"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                defaultValue="john.doe@example.com"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Phone</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                name="phone"
                                                defaultValue="(555) 123-4567"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="address"
                                        defaultValue="123 Main Street, Apt 4B"
                                        required
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label">City</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="city"
                                                defaultValue="New York"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label">State</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="state"
                                                defaultValue="NY"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label">ZIP Code</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="zipCode"
                                                defaultValue="10001"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h5 className="mb-0">Order Summary</h5>
                                <span className="badge bg-primary">{totalQuantity} items</span>
                            </div>
                            <div className="card-body">
                                {items.map(i => (
                                    <div className="mb-3" key={i.id}>
                                        <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1">{i?.name}</h6>
                                                <small className="text-muted">${i.price} each</small>
                                            </div>
                                            <div className="text-end">
                                                <div className="fw-bold">${i.price * i.quantity}</div>
                                                <small className="text-muted">Qty: {i.quantity}</small>
                                            </div>
                                        </div>
                                    </div>
                                ))

                                }

                                <div className="pricing-breakdown">
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Shipping:</span>
                                        <span className="text-success">Free</span>
                                    </div>

                                    <hr />
                                    <div className="d-flex justify-content-between mb-3">
                                        <strong className="fs-5">Total:</strong>
                                        <strong className="fs-5 text-success">${totalAmount}</strong>
                                    </div>
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="button" className="btn btn-outline-secondary">
                                        Back to Cart
                                    </button>
                                    <button type="submit" className="btn btn-success">
                                        {isLoading ? (
                                            <>
                                                <span
                                                    className="spinner-border spinner-border-sm me-2"
                                                    role="status"
                                                    aria-hidden="true"
                                                ></span>
                                                Processing Order...
                                            </>
                                        ) : (
                                            <>
                                                Submit Order - $ {totalAmount}
                                            </>
                                        )}

                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card my-4">
                            <div className="card-header">
                                <h5 className="mb-0">Payment Information</h5>
                            </div>
                            <div className="card-body">
                                <div className="alert alert-info">
                                    <div className="d-flex">
                                        <i className="bi bi-info-circle me-3 mt-1"></i>
                                        <small>
                                            <strong>📞 We'll contact you for payment!</strong>
                                            <br />
                                            After submitting this order, our team will reach out to
                                            arrange payment via:
                                            <br />
                                            • Cash on delivery (for local orders)
                                            <br />
                                            • Credit/debit card over phone
                                            <br />
                                            • Multiple payment options will be available
                                            <br />
                                            • Your order will be confirmed once payment is processed
                                            <br />• No payment information is required at this time
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Checkout;