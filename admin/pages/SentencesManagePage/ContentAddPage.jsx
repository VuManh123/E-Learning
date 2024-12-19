import React, { useState } from 'react';
import MultiSelector from '../../components/MultiSelector';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function ContentAddPage() {
    const [sentences, setSentences] = useState("");
    const [meaning, setMeaning] = useState("");
    const [note, setNote] = useState("");
    const [selectedLabels, setSelectedLabels] = useState([]);
    const [isChecked, setIsChecked] = useState(false);

    const resetForm = () => {
        setSentences("");
        setMeaning("");
        setNote("");
        setSelectedLabels([]);
        setIsChecked(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const vocabularyItem = {
            sentences,
            meaning,
            note,
            selectedLabels,
            isChecked,
        };

        console.log(vocabularyItem);

        alert('Đã thêm câu');
        resetForm();

        fetch("http://localhost:5000/api/sentences/contribute/add-sentence", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(vocabularyItem),
          })
            .then((response) => response.json()) // Chuyển response thành JSON
            .then((data) => {
              console.log("Phản hồi từ server:", data);
              alert(data.message); // Hiển thị message từ server
            })
            .catch((error) => {
              console.error("Lỗi khi gửi yêu cầu:", error);
            });
    };
        // Send vocabulary item to the server
        /*fetch('/api/vocabulary', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(vocabularyItem),
        })
            .then((response) => response.json())
            .then((data) => {
                alert('Vocabulary item added successfully!');
                setWord('');
                setMeaning('');
                setExampleSentence('');
            })
            .catch((error) => {
                console.error('Error adding vocabulary:', error);
                alert('Failed to add vocabulary.');
            });*/


    const handleSelectionChange = (labels) => {
        setSelectedLabels(labels); // Chỉ nhận mảng label
      };

    return (
        <div className='page'>
            <div className='navbar'><Navbar/></div>
            <div className='sbmc'>
                <div><Sidebar/></div>
                <div style={{overflowY: "scroll", flexGrow: "1", maxHeight: "78vh", padding: "15px 10px"}}>
                    <form onSubmit={handleSubmit} className="form">
                        <div className="form-group">
                            <label>NỘI DUNG CÂU BẰNG TIẾNG ANH</label>
                            <textarea
                                type="text"
                                value={sentences}
                                onChange={(e) => setSentences(e.target.value)} 
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>NỘI DUNG CÂU BẰNG TIẾNG VIỆT</label>
                            <textarea
                                type="text"
                                value={meaning}
                                onChange={(e) => setMeaning(e.target.value)} 
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>CHỦ ĐỀ LIÊN QUAN</label>
                            <MultiSelector onSelectionChange={handleSelectionChange}/>
                        </div>
                        <div className="form-group">
                            <label>Ghi chú</label>
                            <textarea
                                value={note} 
                                onChange={(e) => setNote(e.target.value)} 
                                required
                            ></textarea>
                        </div>
                        <div className="form-group" style={{display: "flex"}}>
                            <label>
                                <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
                                Đã Kiểm Tra
                            </label>
                        </div>
                        <button type="submit" className="btn">Thêm câu</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContentAddPage;