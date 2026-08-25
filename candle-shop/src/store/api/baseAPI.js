import {createApi, fakeBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseAPI = createApi({
    reducerPath: "api",
    baseQuery: fakeBaseQuery(),
    endpoints: () => ({})
});