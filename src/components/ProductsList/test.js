import React from 'react';
import {mount} from 'enzyme';
import Product from './';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {routerReducer} from 'react-router-redux';
import reducers from '../../redux/reducers';


const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    })
);

describe('Products List Component', () => {
    it('should render', () => {
        const props = [{
            title: 'Test Title',
            image : {
                path: '/test.jpg',
                alt: 'Alt'
            },
            description: 'Description',
            priceLabel: 'PriceLabel',
            price: 1200
        }];
        const wrapper = mount(<Provider store={store}><Product {...props} /></Provider>);

        expect(wrapper).toMatchSnapshot();
    });
});
