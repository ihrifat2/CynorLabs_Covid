import React from 'react';
import PostForm from './PostForm'
import 'react-form-builder2/dist/app.css';
import { Container, Row, Col } from 'reactstrap';

function Doctor(props) {
    return (
        <Container>
            <Row xs="1">
                <Col>
                    <PostForm />
                </Col>
            </Row>
        </Container>
    );
}

export default Doctor;