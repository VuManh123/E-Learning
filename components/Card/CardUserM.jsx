import picture from './imageUM.jpg';
function CardUserM(){
    return(
        <div className="card">
            <img className='card-image' src={picture} alt="Pic" />
            <h2 className='card-title'>Quản lí người dùng</h2>
            <p className='card-text'>quản lí thông tin, điều chỉnh,...</p>
        </div>
    );
}

export default CardUserM