import React from 'react';
// import jsonData from './../data.json'

const ProductRow = (props) => {

    const {name, price, inStock} = props.eProduct

    return (
        <div>
            <tbody>
                <tr>
                    <td style={{color: inStock ? 'black' : 'red'}}>
                        {name}
                    </td>
                    <td>
                        {price}
                    </td>
                </tr>
            </tbody>
        </div>
    );
}

export default ProductRow;