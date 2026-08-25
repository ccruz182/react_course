import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/shop/Cart";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Registrer";
import MyOrders from "../pages/order/MyOrders";
import ProductManagement from "../pages/admin/ProductManagement";
import OrderManagement from "../pages/admin/OrderManagement";
import { ROUTES } from "../utility/constants";
import Checkout from "../pages/shop/Checkout";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.CART} element={<Cart />} />
            <Route path={ROUTES.CHECKOUT} element={<Checkout />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.REGISTER} element={<Register />} />
            <Route path={ROUTES.MY_ORDER} element={<MyOrders />} />
            <Route path={ROUTES.ADMIN.PRODUCTS} element={<ProductManagement />} />
            <Route path={ROUTES.ADMIN.ORDERS} element={<OrderManagement />} />

        </Routes>
    )
}

export default AppRoutes;