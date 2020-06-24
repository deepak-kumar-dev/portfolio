import React from 'react'
import styled from 'styled-components'

const Card = (props) => {
    return (
        <Cardd>
            {props.content}
        </Cardd>
    )
}


const Cardd = styled.div`
font-size: 1em;
font-weight: 800;
border-radius: 0.25em;
padding: 1.5em 1em; 
margin:10px;
display: table-cell;
vertical-align: middle;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

export default Card