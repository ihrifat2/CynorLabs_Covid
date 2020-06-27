import React, { useState } from 'react'
import { useParams } from "react-router"
import { ReactFormBuilder } from 'react-form-builder2'
import Modifybar from './Modifybar'
import * as variables from './variables'
import { getFormData } from './requests'
import { Container, Row, Col } from 'reactstrap'
import '../translator.css'

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

    const items = [
        {
            key: 'Header',
            name: 'Titre',
            icon: 'fas fa-heading',
            static: true,
            content: 'Remplir le champs svp ...'
        },
        {
            key: 'Label',
            name: 'Label',
            icon: 'fas fa-font',
            static: true,
            content: 'Placeholder Text...'
        },
        {
            key: 'Paragraph',
            name: 'Paragraph',
            static: true,
            icon: 'fa fa-paragraph',
            content: 'Remplir le champs svp ...'
        },
        {
            key: 'LineBreak',
            name: 'LineBreak',
            static: true,
            icon: 'fas fa-arrows-alt-h',
            content: 'Line Break'
        },
        {
            key: 'Dropdown',
            canHaveAnswer: true,
            name: 'Dropdown',
            icon: 'far fa-caret-square-down',
            label: 'Placeholder Label',
            field_name: 'dropdown_',
            options: [],
        },
        {
            key: 'Tags',
            name: 'Tags',
            static: true,
            icon: 'fas fa-tags',
            content: 'Placeholder Label',
            options: [],
        },
        {
            key: 'TextInput',
            canHaveAnswer: true,
            canHaveAlternateForm: false,
            name: 'Text Input',
            label: 'Placeholder Label',
            icon: 'fas fa-font',
            field_name: 'text_input_',
        },
        {
            key: 'RadioButtons',
            canHaveOptionValue: false,
            name: 'Multiple Choice',
            icon: 'fas fa-dot-circle',
            label: 'Placeholder Label',
            field_name: 'radiobuttons_',
            options: [],
        },
    ];

    return (
        <Container>
            <Row xs="1">
                <Col className="mt-4">
                    {
                        loading ?
                            "Loading ..." :
                            <div>
                                <Modifybar variables={variables} fromdata={data} id={id} />
                                <ReactFormBuilder
                                    toolbarItems={items}
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