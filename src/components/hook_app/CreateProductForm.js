import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "./hooks";

export default function CreateProductForm({ onCreatedProduct }) {

    // const { handleInputChange, handleSubmit } = useForm();

    const form = useForm();
    const handleInputChange = form.handleInputChange;
    const handleSubmit = form.handleSubmit;

    const handleCreateProduct = (data) => {
        console.log('Tạo sản phẩm mới với data: ', data);
        onCreatedProduct(data);
    }

    const theSubmit = handleSubmit(handleCreateProduct);

    // theSubmit là 1 function

    /* 
        theSubmit = (event) => {
            event.preventDefault();
            handleCreateProduct(data);
        }
    */

    

    return <Container>
        <Form onSubmit={theSubmit}>
            <h2>Thêm sản phẩm</h2>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Mã sản phẩm</Form.Label>
                        <Form.Control type="text" name="code" onChange={handleInputChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Tên sản phẩm</Form.Label>
                        <Form.Control type="text" name="name" onChange={handleInputChange} />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3">
                <Form.Label>Hãng sản xuất</Form.Label>
                <Form.Control type="text" name="producer" onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Loại sản phẩm</Form.Label>
                <Form.Control type="text" name="category" onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Số lượng</Form.Label>
                <Form.Control type="text" name="quantity" onChange={handleInputChange} />
            </Form.Group>

            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Giá thành</Form.Label>
                        <Form.Control type="text" name="price" onChange={handleInputChange} />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Khuyến mại</Form.Label>
                        <Form.Control type="text" name="discount" onChange={handleInputChange} />
                    </Form.Group>
                </Col>
            </Row>

            <Button type="submit" variant="primary">Hoàn tất</Button>
        </Form>
    </Container>;
}