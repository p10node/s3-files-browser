import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Explorer from "./components/Explorer";

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
            </QueryClientProvider>
        </ChakraProvider>
    );
}

void React;
