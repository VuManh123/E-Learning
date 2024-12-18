import picture from './imageAV.jpg';
function CardAddV(){
    return(
        <div className="card">
            <img className='card-image' src={picture} alt="Pic" />
            <h2 className='card-title'>Thêm video bài học</h2>
            <p className='card-text'>tạo các bài giảng trực quan</p>
        </div>
    );
}

export default CardAddV