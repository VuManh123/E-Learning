import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AdminContentManagement = () => {
    const [sentences, setSentences] = useState([]);
    const [videos, setVideos] = useState([]);
    const [vocabulary, setVocabulary] = useState([]);

    useEffect(() => {
        Promise.all([
            axios.get('/api/sentences'),
            axios.get('/api/videos'),
            axios.get('/api/vocabulary')
        ])
        .then(([sentencesRes, videosRes, vocabularyRes]) => {
            setSentences(sentencesRes.data);
            setVideos(videosRes.data);
            setVocabulary(vocabularyRes.data);
        })
        .catch(error => {
            console.error('Error fetching content:', error);
        });
    }, []);

    return (
        <div>
            <h1>Content Management</h1>

            <section>
                <h2>Sentences</h2>
                <ul>
                    {sentences.map(sentence => (
                        <li key={sentence.id}>{sentence.text}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Videos</h2>
                <ul>
                    {videos.map(video => (
                        <li key={video.id}>{video.title}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Vocabulary</h2>
                <ul>
                    {vocabulary.map(word => (
                        <li key={word.id}>{word.term} - {word.definition}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default AdminContentManagement;
