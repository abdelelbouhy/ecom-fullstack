import React from 'react';
import {shallow} from 'enzyme';
import Product from './';


describe('Product Component', () => {
    it('should render', () => {
        const props = {
            title: 'Test Title',
            image : {
                path: '/test.jpg',
                alt: 'Alt'
            },
            description: 'Description',
            priceLabel: 'PriceLabel',
            price: 1200
        };
        const wrapper = shallow(<Product {...props} />);

        expect(wrapper).toMatchSnapshot();
    });
});
