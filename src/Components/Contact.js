import React from "react";
import ComponentHeader from "./ComponentsHeader";
import Card from './common/Card'
import styled from "styled-components";

const Contact = () => {
    return (
        <div style={{ width: '80%' }}>
            <ComponentHeader text="CONTACT" />
            <div style={{ margin: 20, display: 'flex', flexDirection: 'column' }}>
                <Card
                    content={
                        <div>
                            <Subtle> deepakkumarlamoria@gmail.com</Subtle>
                            <Subtle> 8824404070</Subtle>
                            <Subtle> Benguluru, Karnatka 560102</Subtle>
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

export default Contact