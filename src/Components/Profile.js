import React from 'react'
import "./Profile.css"
import { Badge, Card, CardGroup, Alert } from 'react-bootstrap'
import Fade from 'react-reveal'
import gif from './result1.gif'
export const Profile = () => {
    return (
        <div className="container">
            <div>
                <h1 className="mySkills">MY SKILLS</h1>

                <span className="allSkill"><Badge bg="info" className="skill"> React </Badge> </span>
                <span className="allSkill"><Badge bg="info" className="skill"> HTML </Badge></span>
                <span className="allSkill"><Badge bg="info" className="skill"> CSS </Badge></span>
                <span className="allSkill"><Badge bg="info" className="skill"> JSX </Badge></span>
                <span className="allSkill"><Badge bg="info" className="skill"> MongoDB </Badge></span>
                <span className="allSkill"><Badge bg="info" className="skill"> express </Badge></span>
                <span className="allSkill"><Badge bg="info" className="skill"> NodeJS </Badge></span>
                <span className="allSkill"><Badge bg="info" className="skill"> C++ </Badge></span>
                <span className="allSkill"><Badge bg="info" className="skill"> C </Badge></span>
                <span className="allSkill"><Badge bg="info" className="skill"> DSA </Badge></span>
                <span className="allSkill"><Badge bg="info" className="skill"> Abode Illustrator </Badge></span>
                <hr />
            </div>
            <div>
                <h1 className="personal"> PERSONAL PROJECTS </h1>
                <div className="container1">
                    <Fade left>
                        <CardGroup className="App">
                            <Card>
                                <Card.Img className="cardPhoto" variant="top" src="https://cdn3.f-cdn.com//files/download/130296611/074209.jpg" />
                                <Card.Body className="whiteColor">
                                    <Card.Title>BLOOD BANK</Card.Title>
                                    <Card.Text>
                                        A BloodBank database, which can be used to upload into about the donor along with his Blood Group, and can be ater removed too if for some reason the person can no longer donate or is no longer interested in donating.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted nobg">Made using MERN Stack</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img className="cardPhoto" variant="top" src={gif} />
                                <Card.Body className="whiteColor">
                                    <Card.Title>RGB-GIF</Card.Title>
                                    <Card.Text>
                                        A filter which takes input as a JPEG image and returns the out by converting the Blue present in the image and returns an RGB GIF with the non-Blues grayscaled.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted nobg">Made using OpenCV</small>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Fade>
                </div>
                <hr />
                <div>
                    <h1 className="workExp">WORK EXPERIENCE</h1>
                    <h3 className = "whiteColor">Finding Work Experince</h3>
                    <div class="progress">    
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '70%', color: 'black'}}>Undergoing Difficulties Finding Any</div>
                    </div>
                </div>
                <hr />
                <div>
                    <Fade right>
                        <h1 className="orgs"> ORGANISATIONS </h1>
                    </Fade>
                    <div className="container1">
                        <Fade left>
                            <Alert variant="dark">
                                <Alert.Heading className="nobg">VICE-PRESIDENT</Alert.Heading>
                                <small className="nobg">Rotaract Club of Bangalore B.I.T.</small>
                                <hr />
                                <p className={"mb-0 && nobg"}>
                                    I was the Vice-President for RCBIT in the RotaYear 2020-21.
                                </p>
                            </Alert>
                        </Fade>
                        <Fade right>
                            <Alert variant="light">
                                <Alert.Heading className="nobg">CLUB DESIGNER</Alert.Heading>
                                <small className="nobg">Rotaract Club of Bangalore B.I.T.</small>
                                <hr />
                                <p className={"mb-0 && nobg"}>
                                    I was the Club Designer for RCBIT in the RotaYear 2019-20.
                                </p>
                            </Alert>
                        </Fade>
                        <Fade left>
                            <Alert variant="dark">
                                <Alert.Heading className="nobg">DESIGN TEAM MEMBER</Alert.Heading>
                                <small className="nobg">TEDxBITBangalore</small>
                                <hr />
                                <p className={"mb-0 && nobg"}>
                                    I was in the Design Team of TEDxBITBangalore in the Year 2018-19.
                                </p>
                            </Alert>
                        </Fade>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}
