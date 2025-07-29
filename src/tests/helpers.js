import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom";

function ProvidersWrapper({ children }) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: { retry: false },
        },
    });

    return (
        <ChakraProvider value={defaultSystem}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>{children}</BrowserRouter>
            </QueryClientProvider>
        </ChakraProvider>
    );
}

ProvidersWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export const renderWithProviders = (ui, { route = "/" } = {}) => {
    window.history.pushState({}, "", route);

    return {
        user: userEvent.setup(),
        ...render(ui, { wrapper: ProvidersWrapper }),
    };
};
