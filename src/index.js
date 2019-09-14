import React from 'react';
import { render } from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';

import App from './App';
import * as serviceWorker from './serviceWorker';
import BASE_URL from './utils/config';

const httpLink = createHttpLink({
    uri: BASE_URL
});

const authLink = setContext((_, { headers }) => {
    const token = 'Bn3Dlj3pEweBSXwwR1CH7LQwOO4G7h';
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

const Component = (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

const app = document.getElementById('app');

render(Component, app);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
