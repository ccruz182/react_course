import { useEffect, useState } from "react";


import ProductCard from "../components/home/ProductCard";
import ProductDetailsModal from "../components/home/ProductDetailsModal";

import { useGetProductsQuery } from "../store/api/productsAPI";


const Home = () => {

    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleCloseModal = () => { setShowModal(false); }
    const handleOpenModal = (toDetails) => { setShowModal(true); setSelectedProduct(toDetails) }

    const { data: products = [], isLoading, isError, error } = useGetProductsQuery();

    const filteredProducts = products.filter(p => {
        const searchLower = searchTerm.toLowerCase();
        return (
            p.name?.toLowerCase().includes(searchLower) ||
            p.flavor?.toLowerCase().includes(searchLower) ||
            p.description?.toLowerCase().includes(searchLower)
        )
    });
    const handleSearchTermChange = (e) => { setSearchTerm(e.target.value); }
    return (
        <div className="container my-5">
            <section className="rounded-4 p-4 mb-5">
                <div className="text-center mb-4">
                    <h2 className="display-6 fw-bold mb-3">Find Your Perfect Product</h2>
                    <p className="text-muted fs-5">
                        Search through our curated collection of premium items
                    </p>
                </div>
                <div
                    className="card border shadow mx-auto"
                    style={{ maxWidth: "1000px" }}
                >
                    <div className="card-body p-4 border rounded">
                        <div className="row g-3 align-items-end">
                            <div className="col-lg-12 col-md-12">
                                <label className="form-label fw-semibold ">
                                    Search Products
                                </label>
                                <div className="position-relative">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg ps-5 rounded-pill"
                                        placeholder="What are you looking for?"
                                        value={searchTerm}
                                        onChange={handleSearchTermChange}
                                    />
                                    <i className="bi bi-search position-absolute start-0 top-50 translate-middle-y ms-3 text-muted"></i>
                                </div>
                            </div>
                           
                        </div>

                        <div className="row g-3 mt-2">
                            <div className="col-md-8">
                                <div className="d-flex align-items-center">
                                    <span className="text-muted me-3">
                                        <i className="bi bi-funnel me-1"></i>{filteredProducts.length} of {products.length} products
                                        matching your criteria
                                    </span>

                                    <button className="btn btn-outline-secondary btn-sm rounded-pill" onClick={() => setSearchTerm("")}>
                                        <i className="bi bi-x me-1"></i>
                                        Clear Filters
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="my-5" />

            <section className=" rounded-4 p-4 mb-5">
                <div className="text-center mb-4">
                    <h2 className="display-5 fw-bold mb-3">Our Products</h2>
                    <p className="text-muted fs-5">
                        Discover our complete collection of premium products, each crafted
                        with care and designed to elevate your experience. From unique
                        flavors to exquisite sizes, find the perfect match for your needs.
                    </p>
                </div>

                {isLoading ? (<div className="text-center py-5">
                    <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-3 text-muted">Loading products...</p>
                </div>) : isError ? (
                    <div className="alert alert-danger text-center" role="alert">
                        <i className="bi bi-exclamation-triangle me-2"></i>
                        Error loading products. Please try again later.
                    </div>) : filteredProducts.length == 0 ? (
                        <div className="text-center py-5">
                            <i className="bi bi-search text-muted display-1"></i>
                            <p className="mt-3 text-muted fs-5">
                                No products found matching your search criteria.
                            </p>
                            <p className="text-muted">
                                Try adjusting your search terms or filters.
                            </p>
                            <button className="btn btn-outline-success mt-2 rounded-pill">
                                <i className="bi bi-arrow-clockwise me-1"></i>
                                Clear All Filters
                            </button>
                        </div>
                    ) : products.length == 0 ? (
                        <div className="text-center py-5">
                            <i className="bi bi-box text-muted display-1"></i>
                            <p className="mt-3 text-muted fs-5">
                                No products available at the moment.
                            </p>
                        </div>
                    ) : (
                    <div className="row g-4">
                        {filteredProducts.map(p => {
                            return (<div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
                                <ProductCard product={p} openModal={handleOpenModal} />
                            </div>)
                        })}

                    </div>)
                }

            </section>

            <hr className="my-5" />
            {showModal && <ProductDetailsModal onClose={handleCloseModal} product={selectedProduct} />}
        </div>
    )
}

export default Home;