import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateProductsList} from '../../redux/actions';
import Product from '../Product';
import './index.scss';

class ProductsList extends Component{

    componentDidMount() {
        axios.get('/api/products').then(({data}) => {
            this.props.updateProductsList(data);
        });
    }

    render() {
console.log(this.props.products)
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


const mapStateToProps = (state) => {console.log(state)
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