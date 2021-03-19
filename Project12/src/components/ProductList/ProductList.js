import React,{Component} from 'react';

class ProductList extends Component {
  render () {
    return (   
        <div class="panel panel-primary">
            <div class="panel-heading">
              <h3 class="panel-title">Panel title</h3>
            </div>  
            <div className="panel-body">    
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Giá SP</th>
                            <th>Trạng Thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>          
            </div>
        </div>
        
    );
  } 
}

export default ProductList;
