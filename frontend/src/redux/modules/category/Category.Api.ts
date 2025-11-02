import { baseApi } from "@/redux/baseApi";

const CategoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        create: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/category/create",
                data: data
            }),
            invalidatesTags: ["CATEGORY"]
        }),
        getCategories: builder.query({
            query: (data) => ({
                method: "GET",
                url: "/category/all-categories",
                data: data
            }),
            providesTags: ["CATEGORY"]
        }),
        viewCategory: builder.query({
            query: (id) => ({
                method: "GET",
                url: `/category/vew-category/${id}`,
            }),
        }),
    }),
})


export const {
    useCreateMutation,
    useGetCategoriesQuery,
    useViewCategoryQuery,
} = CategoryApi;

