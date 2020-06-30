import React from 'react';
import { ReactFormGenerator, ElementStore } from 'react-form-builder2';
import { Container, Row, Col } from 'reactstrap';
import { post } from './requests';
import '../custome.css'

export default class Headerbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            previewVisible: false,
        };

        const update = this._onChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
        ElementStore.subscribe(state => update(state.data));
    }

    showPreview() {
        this.setState({
            previewVisible: true,
        });
    }

    closePreview() {
        this.setState({
            previewVisible: false,
        });
    }

    _onChange(data) {
        this.setState({
            data,
        });
    }

    _onSubmit(data) {
        console.log('onSubmit', data);
        // Place code to post json data to server here
        post('/api/posts/', this.props.fromdata);
        this.closePreview()
    }

    render() {
        let modalClass = 'modal';
        if (this.state.previewVisible) {
            modalClass += ' show d-block';
        }

        return (
            <Container>
                <Row xs="1">
                    <Col className="mt-4">
                        <div className="clearfix" style={{ margin: '10px', width: '70%' }}>
                            <h4 className="float-left">Preview</h4>
                            <button className="btn btn-primary float-right" style={{ marginRight: '10px' }} onClick={this.showPreview.bind(this)}>Preview Form</button>
                            {
                                this.state.previewVisible &&
                                <div className={modalClass} role="dialog">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content"  style={{ padding: '30px', maxHeight: 'calc(100vh - 210px)', overflowY: 'auto'}}>
                                            <Row xs="1">
                                                <Col className="mt-4">
                                                    <ReactFormGenerator
                                                        download_path=""
                                                        back_action="/"
                                                        back_name="Back"
                                                        answer_data={{}}
                                                        action_name="Save"
                                                        form_action="/"
                                                        form_method="POST"
                                                        onSubmit={this._onSubmit}
                                                        variables={this.props.variables}
                                                        data={this.state.data} />

                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.closePreview.bind(this)}>Close</button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
