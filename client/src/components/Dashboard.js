import React, { useState } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import Daily from './MongoChart/Daily';
import Monthly from './MongoChart/Monthly';
import Yearly from './MongoChart/Yearly';

function Dashboard(props) {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <Container>
            <Row xs="1">
                <Col className="mt-4">
                    <h1>Report</h1>
                    <div className="mt-4">
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggle('1'); }}
                                > Daily </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle('2'); }}
                                > Monthly </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => { toggle('3'); }}
                                > Yearly </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab} className="mt-4">
                            <TabPane tabId="1">
                                <Row>
                                    <Col>
                                        <Daily />
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col>
                                        <Monthly />
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row>
                                    <Col>
                                        <Yearly />
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;