import picture from './imageAV.jpg';
function CardAddV(){
    return(
        <div className="card">
            <img className='card-image' src={picture} alt="Pic" />
            <h2 className='card-title'>Quản lí video</h2>
            <p className='card-text'>quản lí bài giảng</p>
        </div>
    );
}

export default CardAddV