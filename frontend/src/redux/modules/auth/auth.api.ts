import { baseApi } from "@/redux/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/auth/login",
                data: data
            }),
        }),
        me: builder.query({
            query: () => ({
                method: "GET",
                url: "/auth/me",
            }),
        }),
        logout: builder.query({
            query: () => ({
                method: "GET",
                url: "/auth/logout",
            }),
        }),
        sendOtp: builder.mutation({
            query: () => ({
                method: "POST",
                url: "/auth/send-otp",
            }),
        }),
    }),
})


export const {
    useLoginMutation,
    useMeQuery,
    useLogoutQuery,
    useSendOtpMutation,
} = userApi;

