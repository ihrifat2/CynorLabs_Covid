import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { ReactFormGenerator } from 'react-form-builder2';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const answers = {};

function Form(props) {
    let { id } = useParams();
    const [data, setData] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(() => {
        const getData = () => {
            setloading(true)
            fetch(`/api/posts/${id}`)
                .then(res => res.json())
                .then(res => {
                    setloading(false)
                    setData(JSON.parse(res.post).task_data)
                })
        }
        getData()
    }, [id])

    return (
        <Container>
            <Row xs="1">
                <Col className="mt-4">
                    <Card>
                        <CardBody>
                            {
                                loading ?
                                "Loading" :
                                <div>
                                    {/* <Link to={{ pathname: `/edit/${id}` }}>Edit</Link> */}
                                    <ReactFormGenerator
                                        download_path=""
                                        back_action="/manager"
                                        back_name="Back"
                                        action_name="Edit"
                                        form_action={`/edit/${id}`}
                                        form_method="GET"
                                        answer_data={answers}
                                        data={data} />
                                </div>
                            }
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Form;