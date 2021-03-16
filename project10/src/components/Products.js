import React, {Component} from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product';

class Products extends Component {
    render(){
        var products = [
            {
                id : 1,
                slug : 'iphone',
                name : 'Iphone X',
                price : '35000000'
            },
            {
                id : 2,
                slug : 'samsung',
                name : 'Samsung',
                price : '5000000'
            },
            {
                id : 3,
                slug : 'oppo',
                name : 'oppo',
                price : '6000000'
            }
        ];

        var {match} = this.props;
      
        var url = match.url;

        var result = products.map((product, index) =>{
            return (
                <NavLink to={`${url}/${product.slug}`} key = {index}>
                    <li className="list-group-item" >
                        {product.id} - {product.name} - {product.price}
                    </li>
                </NavLink>
            );
        });

        var{loaction} =this.props;

        return (
            <div className='container'>   
                <h1>Danh sách Sản Phẩm.</h1>               
                <div className="row">
                    <div className="list-group">
                        {result}
                    </div>
                </div>
                <div className="row">
                    <Route path="/products/:slug" component={Product} />
                </div>
            </div>
        );
    }
}
 
export default Products;
