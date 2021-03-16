import React from 'react';
import HomePage from './Pages/HomePage/HomePage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import ProductListPage from './Pages/ProductListPage/ProductListPage'
import ProductActionPage from './Pages/ProductActionPage/ProductActionPage'
const routes = [
    {
        path : '/',
        exact : true,
        main : () => <HomePage />
    },
    {
        path : '/product-list',
        exact : false,
        main : () => <ProductListPage />
    },
    {
        path : '/product/add',
        exact : false,
        main : () => <ProductActionPage />
    },
    {
        path : '/product/:id/edit',
        exact : false,
        main : ({match}) => <ProductActionPage match={match}/>
    },
    {
        path : '',
        exact : false,
        main : () => <NotFoundPage />
    }
];

export default routes;