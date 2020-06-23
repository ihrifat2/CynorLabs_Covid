import React, { useState } from 'react'
import { useParams } from "react-router"
import { ReactFormBuilder } from 'react-form-builder2'
import Modifybar from './Modifybar'
import * as variables from './variables'
import { getFormData } from './requests'
import { Container, Row, Col } from 'reactstrap'

function ModifyForm(props) {
    let { id } = useParams()
    const [data, setData] = useState([])
    const [loading, setloading] = useState(false)

    const onPost = (data) => {
        setData(data)
    }

    const onLoad = (data) => {
        setloading(true)
        const url = `/api/posts/${id}`
        console.log('onLoad', url)
        const editableFormData = getFormData(url)
        setData(editableFormData)
        setloading(false)
        return editableFormData
    }
    
    return (
        <Container>
            <Row xs="1">
                <Col className="mt-4">
                    {
                        loading ?
                        "Loading..." :
                        <div>
                            <Modifybar variables={variables} fromdata={data} id={id} />
                            <ReactFormBuilder
                                onPost={onPost}
                                onLoad={onLoad}
                            />
                        </div>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default ModifyForm