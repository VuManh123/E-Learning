import picture from './imageAC.jpg';
function CardAddW(){
    return(
        <div className="card">
            <img className='card-image' src={picture} alt="Pic" />
            <h2 className='card-title'>Thêm từ mới</h2>
            <p className='card-text'>thêm từ vựng mới</p>
        </div>
    );
}

export default CardAddW