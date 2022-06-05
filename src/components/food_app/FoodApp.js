import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Button, Form, Navbar, ListGroup } from 'react-bootstrap';
import FoodItem from './FoodItem';
import OrderForm from './OrderForm';

export default function FoodApp() {

    const [foods, setFoods] = useState([]);
    const [orders, setOrders] = useState([]);

    // lấy dữ liệu 1 lần duy nhất
    useEffect(() => {
        axios.get('https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals').then((response) => {
            setFoods(response.data);
        });
    }, []);

    const addToCart = (food, amount) => {
        let tmp = {...food, amount: amount};
        let newOrders = [...orders, tmp];
        setOrders(newOrders);
    }

    const increaseOrderAmount = (order) => {
        let newOrders = [...orders];  // tạo 1 mảng mới
        let foundOrder = newOrders.find(item => item.id === order.id); // tìm trong mảng mới 1 phần tử thỏa mãn điều kiện
        if (!foundOrder) return; // nếu ko tìm thấy thì dừng hàm

        foundOrder.amount += 1; // tăng amount lên 1
        setOrders(newOrders); // cập nhật lại orders với newOrders
    }

    const decreaseOrderAmount = (order) => {
        let newOrders = [...orders];
        let foundOrder = newOrders.find(item => item.id === order.id);
        if (!foundOrder) return;

        foundOrder.amount -= 1;

        setOrders(newOrders.filter(item => item.amount != 0));
    }

    const makeAnOrder = (orders, userInfo) => {
        axios.post('https://625a91bf0ab4013f94a2d9a8.mockapi.io/orders', {orders, userInfo}).then(() => {
            alert('Order foods successfully');
        });
    }

    return (<div className="food-app">
        <Navbar>
            <Container>
                <Navbar.Brand>React Food App</Navbar.Brand>
                <OrderForm orders={orders} onIncreaseAmount={increaseOrderAmount} onDecreaseAmount={decreaseOrderAmount}/>
            </Container>
        </Navbar>

        <Container className="mt-3">
            <h2>Food list</h2>
            <ListGroup>
                {foods.map(food => <ListGroup.Item>
                    <FoodItem food={food} onAddToCart={addToCart} />
                </ListGroup.Item>)}
            </ListGroup>
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