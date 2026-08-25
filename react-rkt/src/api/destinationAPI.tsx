import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const destinationAPI = createApi({
    reducerPath: "apidestination",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
    tagTypes: ["Destinations"],
    endpoints: (builder) => ({
        getAllDestinations: builder.query({
            query: () => "destination",
            providesTags: ["Destinations"]
        }),
        addDestination: builder.mutation({
            query: (destination) => ({
                url: "destination", method: "POST", body: destination
            }),
            invalidatesTags: ["Destinations"]
        }),
        updateDestination: builder.mutation({
            query: (destination) => ({
                url: `destination/${destination.id}`, method: "PATCH", body: destination
            }),
            invalidatesTags: ["Destinations"]
        }),
        deleteDestination: builder.mutation({
            query: ({ id }) => ({
                url: `destination/${id}`, method: "DELETE"
            }),
            invalidatesTags: ["Destinations"]
        }),
    })
});

export const { useGetAllDestinationsQuery,
    useAddDestinationMutation,
    useUpdateDestinationMutation,
    useDeleteDestinationMutation } = destinationAPI;