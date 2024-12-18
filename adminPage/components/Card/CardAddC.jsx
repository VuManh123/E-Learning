import picture from './imageAC.jpg';
function CardAddC(){
    return(
        <div className="card">
            <img className='card-image' src={picture} alt="Pic" />
            <h2 className='card-title'>Thêm nội dung bài học</h2>
            <p className='card-text'>Thêm các câu, từ vựng mới</p>
        </div>
    );
}

export default CardAddC