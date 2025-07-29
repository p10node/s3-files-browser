import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Explorer from "./components/Explorer";

void React;

const queryClient = new QueryClient({
    defaultOptions: {
        queries: { staleTime: 30000 },
    },
});

export default function App() {
    return (
        <ChakraProvider value={defaultSystem}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Explorer />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </BrowserRouter>
                {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            </QueryClientProvider>
        </ChakraProvider>
    );
}
