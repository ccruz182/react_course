import { collection, addDoc, orderBy, getDocs, query, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { baseAPI } from "./baseAPI";

export const productsAPI = baseAPI.injectEndpoints({
    providesTags: ['ADD_PRODUCT'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            async queryFn() {
                const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
                const querySnapshot = await getDocs(q);
                const products = [];
                querySnapshot.forEach(doc => { products.push({ id: doc.id, ...doc.data() }) })
                return { data: products };
            },
            providesTags: ['ADD_PRODUCT']
        }),
        addProduct: builder.mutation({
            async queryFn(productData) {
                try {
                    const timestamp = new Date().toISOString();
                    const docRef = await addDoc(collection(db, "products"), {
                        ...productData, createdAt: timestamp
                    });

                    return {
                        data: { id: docRef.id, ...productData, createdAt: timestamp }
                    }
                } catch (e) {
                    return { error: e.message }
                }
            },
            invalidatesTags: ['ADD_PRODUCT']
        }),
        updateProduct: builder.mutation({
            async queryFn(productData) {
                try {
                    const timestamp = new Date().toISOString();
                    const docRef = await updateDoc(doc(db, "products", productData.id), {
                        ...productData, updatedAt: timestamp
                    });

                    return {
                        data: { id: docRef.id, ...productData, updatedAt: timestamp }
                    }
                } catch (e) {
                    console.log(e);
                    return { error: e.message }
                }
            },
            invalidatesTags: ['ADD_PRODUCT']
        }),
        deleteProduct: builder.mutation({
            async queryFn(productId) {
                try {
                    await deleteDoc(doc(db, "products", productId));

                    return {
                        data: productId
                    };
                } catch (e) {
                    console.log(e);
                    return { error: e.message };
                }
            },
            invalidatesTags: ['ADD_PRODUCT']
        })
    })
});

export const { useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation, useGetProductsQuery } = productsAPI;
