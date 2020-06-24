import React from "react";
import ComponentHeader from "./ComponentsHeader";
import Card from './common/Card'
import styled from "styled-components";

const Education = () => {
    return (
        <div style={{ width: '80%' }}>
            <ComponentHeader text="EDUCATION" />
            <div style={{ margin: 20 , display: 'flex', flexDirection: 'column' }}>
                <Card
                    content={
                        <div style={{ textAlign: 'left' }}>
                            <div style={{ fontWeight: 'bold' }}>SunBeam Institute of Information Technology, Pune-Karad</div>
                            <Subtle>Post Graduation Diploma in Advanced Computing </Subtle>
                            <Subtle>Feb 2018 - Aug 2018</Subtle>
                        </div>
                    }
                />
                
                <Card
                    content={
                        <div style={{ textAlign: 'left' }}>
                            <div style={{ fontWeight: 'bold' }}>B. K. Birla Institute of Engineering & Technology, Pilani</div>
                            <Subtle>Master in computer application</Subtle>
                            <Subtle>2014 - 2017</Subtle>
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

export default Education