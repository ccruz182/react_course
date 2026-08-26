import { BrowserRouter } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AppRoutes from "./router/router";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./services/firebase";
import { setUser } from "./store/slice/authSlice";

import { doc, getDoc } from "firebase/firestore";


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    const userDocRef = doc(db, "users", user.uid);
                    const userDoc = await getDoc(userDocRef);

                    let userData;
                    if (userDoc.exists()) {
                        userData = userDoc.data();
                        userData.uid = user.uid;
                    } else {
                        userData = { uid: user.uid, email: user.email, displayName: user.displayName, role: "customer" }
                    }
                    dispatch(setUser(userData));

                } catch (error) {
                    console.error("Error loading data", error);
                    dispatch(setUser(null));
                }
            } else {
                dispatch(setUser(null));
            }
        });

        return () => unsubscribe();
    }, [dispatch])

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