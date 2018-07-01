import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateProductsList} from '../../redux/actions';
import Product from '../Product';
import './index.scss';

class ProductsList extends Component {
    static propTypes = {
        products: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            image: PropTypes.exact({
                path: PropTypes.string.isRequired,
                alt: PropTypes.string.isRequired
            }).isRequired,
            description: PropTypes.string.isRequired,
            priceLabel: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
        }))
    };

    componentDidMount() {
        axios.get('/api/products').then(({data}) => {
            this.props.updateProductsList(data);
        });
    }

    render() {
        return (
            <div className='products_list_wrapper'>
                {
                    this.props.products.map((product) => {
                        return <Product {...product} key={product.title} />;
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productsList.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateProductsList: productsList => {
            dispatch(updateProductsList(productsList));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);