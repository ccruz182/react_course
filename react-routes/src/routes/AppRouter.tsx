import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import ProductList from "../pages/product/ProductList";
import ProductDetail from "../pages/product/ProductDetail";
import ProductLayout from "../components/Layout/ProductLayout";
import AllProduct from "../pages/product/productCategory/AllProduct";
import Electronics from "../pages/product/productCategory/Electronics";
import Clothing from "../pages/product/productCategory/Clothing";
import Books from "../pages/product/productCategory/Books";
import AdminPortal from "../pages/admin/AdminPortal";
import CustomerPortal from "../pages/customer/CustomerPortal";
import Login from "../pages/auth/Login";
import ProtectedRoute from "./ProtectedRoute";
import RoledBasedRoute from "./RoleBasedRoute";



const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/products" element={<ProductLayout />}>
                <Route index element={<AllProduct />} />
                <Route path="electronics" element={<Electronics />} />
                <Route path="clothing" element={<Clothing />} />
                <Route path="books" element={<Books />} />
            </Route>

            <Route path="/products/:id" element={
                <ProtectedRoute>
                    <ProductDetail />
                </ProtectedRoute>}
            />

            <Route path="/admin" element={<RoledBasedRoute allowedRoles={["admin"]}><AdminPortal /></RoledBasedRoute>} />
            <Route path="/customer" element={<RoledBasedRoute allowedRoles={["customer"]}><CustomerPortal /></RoledBasedRoute>} />
            <Route path="/login" element={<Login />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRouter;