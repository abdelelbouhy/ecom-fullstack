import React from 'react';
import '../stylesheets/listingPage.scss';
import ProductsList from '../components/ProductsList';

const HomePage = () => {
    return (
        <main>
            <ProductsList />
        </main>
    );
};

export default HomePage;