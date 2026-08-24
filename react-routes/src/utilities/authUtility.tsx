let isAuthenticated = false;
let currentUser = null;

try {
    const storedAuth = sessionStorage.getItem("demoAuth");

    if (storedAuth) {
        const authData = JSON.parse(storedAuth);
        isAuthenticated = authData.isAuthenticated;
        currentUser = authData.currentUser;
    }
} catch (e) {
    console.log("Could not store auth data", e);
}

const getAuthState = () => { return { isAuthenticated, currentUser }; }

const setAuthState = (auth, user) => {
    isAuthenticated = auth;
    currentUser = user;

    console.log("setAuthState", isAuthenticated, currentUser);

    try {
        sessionStorage.setItem("demoAuth", JSON.stringify({ isAuthenticated, currentUser }))
    } catch (e) {
        console.log("Could not store auth data", e);
    }
}

const hasRoles = role => currentUser?.role == role;

const hasAnyRole = roles => roles.includes(currentUser?.role);

const logout = () => {
    setAuthState(false, null);
    try {
        sessionStorage.removeItem("demoAuth");
    } catch (e) {
        console.log("Could not clear auth data", e);
    }
}


export { setAuthState, getAuthState, hasRoles, hasAnyRole, logout }