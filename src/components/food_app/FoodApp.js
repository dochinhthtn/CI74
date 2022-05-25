import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Button, Form } from 'react-bootstrap';

export default function FoodApp() {

    const [events, setEvents] = useState([
        'Event 1',
        'Event 2',
        'Event 3',
        'Event 4',
        'Event 5',
        'Event 6',
        'Event 7',
        'Event 8',
    ]);

    useEffect(() => {
        setTimeout(() => {
            // lấy dữ liệu ở chỗ này
            axios.get('https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals').then(response => {
                console.log(response.data);
            }).catch(error => {
                console.log('đã xảy ra lỗi');
                console.log(error);
            }).finally(() => {
                console.log("dù có lỗi hay là ko có lỗi thì cũng đi vào đây");
            });
        }, 10000);
    }, []);

    const [isLoading, setIsLoading] = useState(false);

    // C1: dùng then, catch, finally
    const loadMeals = () => {
        setIsLoading(true);
    
        axios.get('https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals').then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log('Đã xảy ra lỗi');
        }).finally(() => {
            setIsLoading(false);
        });
        // axios.delete() => sử dụng giống như get
    }

    const postOrder = () => {
        let data = {
            name: 'Hello',
            street: 'Somewhere'
        };
        axios.post('https://625a91bf0ab4013f94a2d9a8.mockapi.io/orders', data).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
        // axios.put() => sử dụng giống như post
    }

    const changeEvent = (value) => {
        console.log(value)
    }

    return (<div className="food-app">
        <Container>
            <h1>Food App</h1>
            <Button variant="primary" onClick={loadMeals} disabled={isLoading}>
                {isLoading ? 'Loading data ...' : 'Load Meals'}
            </Button>

            <Button variant="success" className="ms-3" onClick={postOrder} disabled={isLoading}>
                {isLoading ? 'Posting data ...' : 'Post order'}
            </Button>

            <div className="mt-3">
                <Form.Control 
                    type="range" 
                    min="0" 
                    max={events.length - 1} 
                    onChange={(event) => changeEvent(event.target.value)} 
                    step={0.1}    
                />
                <div className="d-flex justify-content-between">
                    {events.map(event => <span>{event}</span>)}
                </div>
            </div>
        </Container>
    </div>);
}


    // C2: dùng async/await
    // const loadMeals = async () => {
        
    //     try {
    //         setIsLoading(true);
    //         let response = await axios.get('https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals');
    //         console.log(response.data);
    //     } catch(error) {
    //         console.log('Đã xảy ra lỗi');
    //     } finally {
    //         console.log('Dù có lỗi hay không thì vẫn chạy cái này');
    //         setIsLoading(false);
    //     }
    // }