import React from 'react';
import { useNavigate } from 'react-router-dom';
import picture from './imageCM.jpg';
function CardContentM(){
    return(
        <div className="card">
            <img className='card-image' src={picture} alt="Pic" />
            <h2 className='card-title'>Quản lí Nội Dung</h2>
            <p className='card-text'>Xem, chỉnh sửa các nội dung đã thêm</p>
        </div>
    );
}

export default CardContentM