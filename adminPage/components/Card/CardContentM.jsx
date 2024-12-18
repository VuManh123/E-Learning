import React from 'react';
import { useNavigate } from 'react-router-dom';
import picture from './imageCM.jpg';
function CardContentM(){
    return(
        <div className="card">
            <img className='card-image' src={picture} alt="Pic" />
            <h2 className='card-title'>Quản lí người dùng</h2>
            <p className='card-text'>quản lí thông tin, điều chỉnh,...</p>
        </div>
    );
}

export default CardContentM