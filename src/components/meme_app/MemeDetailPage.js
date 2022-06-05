import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getMemeById } from '../../data/meme_data';
import { getCommentsByAgeAndBattle } from './models/comment';

// memes/1
// memes/2

export default function MemeDetailPage() {

    const { id } = useParams();
    const [meme, setMeme] = useState({});

    // useEffect(() => {
    //     console.log('chạy khi id thay đổi giá trị')
    //     let data = getMemeById(id);
    //     setMeme(data);
    // }, [id]);

    // useEffect(() => {
    //     console.log('chạy 1 lần duy nhất sau khi component render lần đầu tiên');
    //     if (!ageId || !battleId) return;
        
    //     const data = getCommentsByAgeAndBattle(ageId, battleId);

    // }, [ageId, battleId]);

    // useEffect(() => {
    //     console.log('chạy khi component render');
    // });

    return (<Container className="meme-detail-page">
        <h2>Meme detail</h2>
        <Row>
            <Col sm={4}>
                <img src={meme.image} className="w-100" />
            </Col>

            <Col>
                <div>ID: <b>{meme.id}</b></div>
                <div>Name: <b>{meme.name}</b></div>
                <div>
                    Description: <br />
                    <span className="text-muted">{meme.description}</span>
                </div>
                <div>
                    Catogories: <br />
                    <span className="text-muted">
                        {meme.categories && meme.categories.map(item => <Badge className="m-1" bg="secondary">{item}</Badge>)}
                    </span>
                </div>
                <div>Date modified: <b>{meme.dateModified}</b></div>
            </Col>
        </Row>
    </Container>);
}