import React from "react";
import ComponentHeader from "./ComponentsHeader";
import Card from "./common/Card";
import styled from "styled-components";

const About = () => {
    return (
        <div style={{ width: '80%', textAlign: 'center' }}>
            <ComponentHeader text="FULL STACK DEVELOPER" />
            <div
                style={{
                    padding: 30,
                    color: 'grey',
                    textAlign: 'left',
                    height: 'calc(80% - 60px)',
                    width: 'calc(100% - 60px)',
                    overflowY: 'scroll'
                }}>
                <p>
                    Full-stack Software Engineer developing web apps with the help of
                    javascript and its frameworks. Try to learn something new through
                    every single opportunity. Passionate about building end-to-end high-performance,
                    secure, scalable web applications.
                    Keeping the technical skills aside, I love to travel, Bike Riding.
                </p>
                <div style={{ margin: 20, display: 'flex', flexDirection: 'column' }}>
                    <Card
                        content={
                            <div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ width: '29%' }}>Age</div>
                                    <div >:</div>
                                    <div style={{ width: '69%', textAlign: 'end' }}>26</div>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ width: '29%' }}>Professional Experience</div>
                                    <div >:</div>
                                    <div style={{ width: '69%', textAlign: 'end' }}>1 Year 11 Months</div>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ width: '29%' }}>Current Role</div>
                                    <div >:</div>
                                    <div style={{ width: '69%', textAlign: 'end' }}>Full Stack Developer</div>
                                </div>
                            </div>
                        }
                    />
                </div>
                <br></br>
                <Subtle>Highlights :</Subtle>
                <hr></hr>
                <div>
                    <p>
                        ⦁ As a member of the core development team,
                        my primary task is to develop UI using react,
                        Integrate it with REST, and debug & create API using Php.
                    </p>
                    <p>
                        ⦁ Actively involved in decision-making for the product features
                         and code architecture and maintenance.</p>
                    <p>
                        ⦁ Introduced PWA for our small module, handling & mainataining it end to end.
                    </p>
                    <p>
                        ⦁ Upgraded components from older version of react . As part of
                        this handle depricated react life cycle  method , remove jquery, 
                        implement immutableJS.
                    </p>
                    <p>
                        ⦁ Using debugging tools such Chrome
                        DevTools, React Developer Tool, Redux DevTools
                        to investigate the issues and fix the bugs. And
                        IDE tools such as PhpStorm, VS Code.
                    </p>
                </div>
            </div>
        </div>
    )
}

const Subtle = styled.div`
color: #777;
font-size: 12px;
font-weight: 700;
`;

export default About