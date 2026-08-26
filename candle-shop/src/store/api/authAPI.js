import { collection, addDoc, orderBy, getDocs, query, updateDoc, doc, deleteDoc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../../services/firebase";
import { baseAPI } from "./baseAPI";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

const createUserData = (user, role = "customer") => {
    return {
        uid: user.uid, email: user.email, displayName: user.displayName, role, createdAt: new Date().toISOString()
    }
}

export const authAPI = baseAPI.injectEndpoints({
    providesTags: ['USER_CHANGE'],
    endpoints: (builder) => ({

        registerUser: builder.mutation({
            async queryFn({ email, password, displayName }) {
                try {
                    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
                    const user = userCredentials.user;
                    await updateProfile(user, { displayName });

                    const userData = createUserData(user)
                    const docRef = await setDoc(doc(db, "users", user.uid), { ...userData });

                    return {
                        data: { uid: user.uid, ...userData }
                    }

                } catch (e) {
                    return { error: e.message }
                }
            },
            invalidatesTags: ['USER_CHANGE']
        }),
        loginUser: builder.mutation({
            async queryFn({email, password}) {
                try {
                    const result = await signInWithEmailAndPassword(auth, email, password);
                    const userDoc = await getDoc(doc(db, "users", result.uid));
                    const userData = userDoc.data();
                    
                    return { data: userData }
                } catch (e) {
                    return { error: e.message }
                }
            }
        }),
        logoutUser: builder.mutation({
            async queryFn() {
                try {
                    await signOut(auth);
                    return { data: null }
                } catch (e) {
                    return { error: e.message }
                }
            },
            invalidatesTags: ['USER_CHANGE']
        }),
    })
});

export const { useRegisterUserMutation, useLogoutUserMutation, useLoginUserMutation } = authAPI;
