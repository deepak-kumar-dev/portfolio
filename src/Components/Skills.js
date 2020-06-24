import React from "react";
import ComponentHeader from "./ComponentsHeader";
import Card from './common/Card'
import styled from "styled-components";

const Skills = () => {
    return (
        <div style={{ width: '80%' }}>
            <ComponentHeader text="SKILLS" />
            <div style={{ margin: 20, display: 'flex', flexDirection: 'column' }}>
                <Card
                    content={
                        <div>
                            <Subtle> - JavaScript</Subtle>
                            <Subtle> - ReactJS</Subtle>
                            <Subtle> - Redux</Subtle>
                            <Subtle> - JIRA</Subtle>
                            <Subtle> - Git, GitHub</Subtle>
                            <Subtle> - Basics - AWS, TypeScript, Docker, NodeJS, Python</Subtle>
                        </div>
                    }
                />
            </div>
        </div>
    )
}

const Subtle = styled.div`
color: #777;
font-size: 12px;
font-weight: 700;
}
`;

export default Skills