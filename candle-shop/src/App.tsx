import { BrowserRouter } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AppRoutes from "./router/router";
import { ToastContainer } from "react-toastify";

const App = () => {

    return (
        <BrowserRouter>
            <div className="d-flex flex-column min-vh-100">
                <Header />
                <main className="flex-grow-1">
                    <AppRoutes />
                </main>
                <Footer />
                <ToastContainer />
            </div>
        </BrowserRouter>
    )

}

export default App;