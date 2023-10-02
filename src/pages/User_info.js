import React, {Component} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

class UserInfo extends Component {
    render() {
        return (
            <Container>
                <h1>My promotion tools</h1>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPercent1">
                            <Form.Label>One referal percent</Form.Label>
                            <Form.Control placeholder="10" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPercent2">
                            <Form.Label>One subreferal percent</Form.Label>
                            <Form.Control placeholder="5" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPercent3">
                            <Form.Label>One users percent</Form.Label>
                            <Form.Control placeholder="80" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPercent4">
                            <Form.Label>Two subreferal percent</Form.Label>
                            <Form.Control placeholder="10" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPercent5">
                            <Form.Label>Two users percent</Form.Label>
                            <Form.Control placeholder="70" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPercent6">
                            <Form.Label>Three users percent</Form.Label>
                            <Form.Control placeholder="65" />
                        </Form.Group>
                    </Row>
                    <Button variant="primary" type="Create link">
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default UserInfo;