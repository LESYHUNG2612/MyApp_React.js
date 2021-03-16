import React,{Component} from 'react';

class ProductItem extends Component {
  render () {
    var {product,index} = this.props;
    var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
    var statusClass = product.status ? 'warning' : 'default';
    return (
      <tr>
            <td>{index + 1}</td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>  
                <span className={`label label-${statusClass}`}>
                   {statusName}
                </span>                                               
            </td>
            <td>            
                <button type="button" class="btn  btn-warning mr-10">Sữa</button>
                <button type="button" class="btn  btn-danger">Xóa</button>     
            </td>
        </tr>
    );
  } 
}

export default ProductItem;
