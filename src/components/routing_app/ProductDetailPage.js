import React from 'react';
import { useParams } from 'react-router-dom';

import productData from '../../data/product_data';

export default function ProductDetailPage() {

    const { id } = useParams();

    // find là 1 phương thức của mảng để tìm 1 giá trị thỏa mãn điều kiện.
    // nếu không tìm thấy phần tử nào thỏa mãn => trả về null
    // nếu có phần tử thỏa mãn => trả về chính phần tử đó

    const found = productData.find((product) => id == product.id); 
    // found là 1 đối tượng product

    return (<div className="product-detail-page">
        {!found && <h2 className="text-danger">Không tìm thấy dữ liệu</h2>}
        {
            found && <>
                <h2>Chi tiết sản phẩm</h2>
                <b>ID: {id}</b> <br />
                <b>Tên: {found.name}</b><br />
                <b>Giá: ${found.price}</b><br />
                <b>Giảm: {found.discount} %</b><br />
            </>
        }
    </div>);
}