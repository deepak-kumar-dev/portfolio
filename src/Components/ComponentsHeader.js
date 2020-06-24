import React from 'react'
import styled from 'styled-components'

const ComponentHeader = (props) => {
    return (
        <Header>
            {props.text}
        </Header>
    )
}


const Header = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Open Sans', sans-serif;
font-size: 48px;
font-weight: 800;
padding: 24px; 
vertical-align: middle;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
color: grey;
background: linear-gradient(110deg,#ffffff 60%,#0a0a0a 60%);
`;

export default ComponentHeader