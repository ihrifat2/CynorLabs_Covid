import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom'

function Manager(props) {
    const [loading, setloading] = useState(false)

    const [userData, setUserData] = useState([])
    useEffect(() => {
        const getData = () => {
            setloading(true)
            fetch('/api/posts')
                .then(res => res.json())
                .then(res => {
                    setloading(false)
                    setUserData(res)
                })
        }
        getData();
    }, [])
    
    return (
        <Container>
            <Row xs="1">
                <Col className="mt-4">
                    <h2>List of Submited form</h2>
                    {
                        loading ? 
                        'Loading ...' :
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Form Preview</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userData.map((data, index) => (
                                        <tr key={data._id}>
                                            <th scope="row">Form {index+1}</th>
                                            <td>
                                                <Link to={{ pathname: `/form/${data._id}` }}>Details</Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default Manager;