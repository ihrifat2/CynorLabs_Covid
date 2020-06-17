import React, { useState } from 'react';
import { ReactFormBuilder } from 'react-form-builder2';
import Headerbar from './headerbar';
import * as variables from './variables';

function PostForm(props) {

    const [data, setdata] = useState([])

    const onPost = (data) => {
        setdata(data)
    };

    return (
        <div>
            <Headerbar variables={variables} fromdata={data} />
            <ReactFormBuilder
                onPost={onPost}
            />
        </div>
    );
}

export default PostForm;