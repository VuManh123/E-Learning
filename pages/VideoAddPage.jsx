import React, { useState } from 'react';
import HeaderHP from '../components/HeaderHP';
import LevelSelector from '../components/LevelSelector';

function VideoAddPage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [video, setVideo] = useState(null);

    const handleVideoUpload = (e) => {
        setVideo(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!video) {
            alert('Please upload a video!');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('video', video);

        // Send formData to the server
        fetch('/api/videos', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                alert('Video uploaded successfully!');
                setTitle('');
                setContent('');
                setVideo(null);
            })
            .catch((error) => {
                console.error('Error uploading video:', error);
                alert('Failed to upload video.');
            });
    };

    return (
        <>
        <HeaderHP/>
        <div className="container">
            <h1>Upload Video</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label>TIÊU ĐỀ:</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>MIÊU TẢ:</label>
                    <textarea 
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>LINK URL:</label>
                    <input 
                        type="file" 
                        accept="video/*" 
                        onChange={handleVideoUpload} 
                        required
                    />
                </div>
                <div className="form-group">
                    <label>NGÀY TẢI LÊN:</label>
                    <textarea></textarea>
                </div>
                <div className="form-group">
                    <label>NGÔN NGỮ</label>
                    <LevelSelector/>
                </div>
                <button type="submit" className="btn">Upload</button>
            </form>
        </div>
        </>
    );
};

export default VideoAddPage;