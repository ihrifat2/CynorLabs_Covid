import React, { useState } from 'react';
import { ReactFormBuilder } from 'react-form-builder2';
import Headerbar from './headerbar';
import * as variables from './variables';
import '../customStyle.css'

function PostForm(props) {

    const [data, setdata] = useState([])

    const onPost = (data) => {
        setdata(data)
    };

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
        <div>
            <Headerbar variables={variables} fromdata={data} />
            <ReactFormBuilder
                toolbarItems={items}
                onPost={onPost}
            />
        </div>
    );
}

export default PostForm;