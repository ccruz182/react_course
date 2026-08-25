import { useState } from "react";
import Swal from 'sweetalert2';

import ProductForm from "../../components/products/ProductForm";
import ProductTable from "../../components/products/ProductTable";

import { useGetProductsQuery, useDeleteProductMutation } from "../../store/api/productsAPI";

const ProductManagement = () => {

    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [modalAction, setModalAction] = useState("CREATE");
    const [modalData, setModalData] = useState(null);


    const { data: products = [], isLoading, isError, error } = useGetProductsQuery();
    const [deleteProduct] = useDeleteProductMutation();

    const handleCloseModal = () => { setShowModal(false); setModalAction('CREATE'); setModalData(null) };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const filteredProducts = products.filter(p => {
        const searchLower = searchTerm.toLowerCase();
        return (
            p.name?.toLowerCase().includes(searchLower) ||
            p.flavor?.toLowerCase().includes(searchLower) ||
            p.description?.toLowerCase().includes(searchLower)
        )
    });

    const handleProductUpdate = (product) => {
        setShowModal(true);
        setModalAction("UPDATE");
        setModalData(product);
    }

    const handleProductDelete = (productId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteProduct(productId).unwrap();

                    Swal.fire(
                        'Deleted!',
                        'Your product has been deleted.',
                        'success'
                    );
                } catch (error) {
                    Swal.fire(
                        'Error!',
                        'Something went wrong while deleting.',
                        'error'
                    );
                }
            }
        });

    }

    return (
        <div className="py-4">
            <div className="container py-2">
                <div className="row">
                    <div className="col-12">
                        <div className="mb-4">
                            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                                <div>
                                    <h1 className="display-6 fw-bold text-success mb-2">
                                        <i className="bi bi-boxes me-3"></i>
                                        Product Management
                                    </h1>
                                    <p className="text-muted mb-0">
                                        Manage your product inventory with ease
                                    </p>
                                </div>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb mb-0  rounded-pill px-3 py-2 shadow-sm">
                                        <li className="breadcrumb-item">
                                            <label className="text-decoration-none text-success">
                                                <i className="bi bi-house-door me-1"></i>Admin
                                            </label>
                                        </li>
                                        <li
                                            className="breadcrumb-item active fw-medium"
                                            aria-current="page"
                                        >
                                            Products
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>

                        <div className="card border-0 shadow-sm mb-4">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-md-8">
                                        <div className="input-group">
                                            <span className="input-group-text border-end-0">
                                                <i className="bi bi-search text-muted"></i>
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control border-start-0 ps-0"
                                                placeholder="Search products by name or flavor..."
                                                value={searchTerm}
                                                onChange={handleSearchChange}
                                            />
                                            {searchTerm && <button
                                                className="btn btn-outline-secondary border-start-0"
                                                type="button"
                                                title="Clear search"
                                                onClick={() => setSearchTerm("")}
                                            >
                                                <i className="bi bi-x"></i>
                                            </button>}

                                        </div>
                                    </div>
                                    <div className="col-md-4 text-end mt-3 mt-md-0">
                                        <button className="btn btn-success px-4 py-2 shadow-sm" onClick={() => setShowModal(true)}>
                                            <i className="bi bi-plus-circle me-2"></i>
                                            Add New Product
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card border-0 shadow-lg">
                            <div className="card-body p-4">
                                {isLoading ? (
                                    <div className="text-center py-5">
                                        <div className="spinner-border text-success" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <p className="mt-3 text-muted">Loading products...</p>
                                    </div>
                                ) : isError ? (<div className="text-center py-5">
                                    <div className="alert alert-danger" role="alert">
                                        <i className="bi bi-exclamation-triangle me-2"></i>
                                        Error loading products:
                                    </div>
                                </div>) : filteredProducts.length == 0 ? (
                                    <div className="text-center py-5">
                                        <i className="bi bi-box-seam fs-1 text-muted mb-3 d-block"></i>
                                        <h5 className="text-muted mb-2">No products found</h5>
                                        <p className="text-muted mb-3">
                                            Start by adding your first product
                                        </p>
                                        <button className="btn btn-success" onClick={() => setShowModal(true)}>
                                            <i className="bi bi-plus-circle me-2"></i>
                                            Add Product
                                        </button>
                                    </div>
                                ) : (<div><ProductTable
                                    products={filteredProducts} handleProductUpdate={handleProductUpdate}
                                    handleProductDelete={handleProductDelete} /></div>)}

                            </div>

                            {showModal && <ProductForm onClose={handleCloseModal} modalAction={modalAction} modalData={modalData} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default ProductManagement;