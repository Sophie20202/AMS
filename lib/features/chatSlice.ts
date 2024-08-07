import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chatSlices = createApi({
  reducerPath: "chatSlices",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    chats: builder.query({
      query: () => `chat`,
    }),
    addMessage: builder.mutation({
      query: (credentials) => ({
        url: "chat",
        method: "POST",
        body: credentials,
      }),
    }),
    privateChats: builder.query({
      query: (id) => `chat/${id}`,
    }),
    privateMessages: builder.query({
      query: (data) => `chat/${data?.id}/${data?.oid}`,
    }),
  }),
});

export const {
  useAddMessageMutation,
  useChatsQuery,
  usePrivateChatsQuery,
  usePrivateMessagesQuery,
} = chatSlices;
