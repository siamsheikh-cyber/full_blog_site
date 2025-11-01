import { baseApi } from "@/redux/baseApi";

const CategoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        create: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/category/create",
                data: data
            }),
        }),
    }),
})


export const {
    useCreateMutation
} = CategoryApi;

