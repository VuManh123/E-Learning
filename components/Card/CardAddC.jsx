import picture from './imageAW.jpg';
function CardAddC(){
    return(
        <div className="card">
            <img className='card-image' src={picture} alt="Pic" />
            <h2 className='card-title'>Thêm câu</h2>
            <p className='card-text'>Tạo câu ví dụ</p>
        </div>
    );
}

export default CardAddC