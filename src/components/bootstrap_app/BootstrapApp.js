import React, { useState } from "react";
import { Col, Container, Row, Alert, Modal, Button, Form } from "react-bootstrap";

export default function BootstrapApp() {

    const [showRegisterForm, setShowRegisterForm] = useState(false);


    return (<Container fluid>
        <h2>This is bootstrap container</h2>

        <Button variant="success" onClick={() => setShowRegisterForm(true)}>Đăng ký</Button>

        <Form>
            <Modal fullscreen="sm-down" show={showRegisterForm} onHide={() => setShowRegisterForm(false)}>
                <Modal.Header closeButton>
                    <h4>Tạo tài khoản</h4>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Họ và tên</Form.Label>
                        <Row>
                            <Col><Form.Control type="text" placeholder="Họ" /></Col>
                            <Col><Form.Control type="text" placeholder="Tên" /></Col>
                        </Row>
                        <Form.Text className="text-danger">Nhập đầy đủ họ tên</Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Giới tính</Form.Label>
                        <Row>
                            <Col><Form.Check type="radio" name="gender" label="Nam" /></Col>
                            <Col><Form.Check type="radio" name="gender" label="Nữ" /></Col>
                        </Row>
                        <Form.Text className="text-danger">Hãy chọn 1 giới tính</Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Tên đăng ký</Form.Label>
                        <Form.Control type="text" placeholder="Nhập tên đăng ký" />
                        <Form.Text className="text-danger">Tên đăng ký không được bỏ trống</Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Nhập email" />
                        <Form.Text className="text-danger">Email không được bỏ trống</Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control type="password" placeholder="Nhập mật khẩu" />
                        <Form.Text className="text-danger">Mật khẩu không được bỏ trống</Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Xác nhận mật khẩu</Form.Label>
                        <Form.Control type="password" placeholder="Nhập xác nhận mật khẩu" />
                        <Form.Text className="text-danger">Xác nhận mật khẩu không được bỏ trống</Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Check type="checkbox" label="Chấp nhận điều khoản"/>
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">Đăng ký</Button>
                    <Button variant="outline-secondary" onClick={() => setShowRegisterForm(false)}>Hủy</Button>
                </Modal.Footer>
            </Modal>
        </Form>


    </Container>);
}