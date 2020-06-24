import React from 'react'
import Usercard from './Usercard'
import SidebarPageTabs from './SidebarPageTabs'
import SocialLinks from './SocialLinks'
import styled from "styled-components";
import resume from '../Resume_deepak.PDF'

const Sidebar = () => {

    return (
        <div style={{ height: "100%", minWidth: 200, width: '20%', backgroundColor: '#0a0a0a' }}>
            <Usercard></Usercard>
            <SidebarPageTabs></SidebarPageTabs>
            <SocialLinks></SocialLinks>
            <DnBtn>
                <a  style={{ textDecoration: 'none', color: 'grey' }}
                    href={resume}
                    download="DeepakKumarResume.pdf"
                    >
                    Download Resume
                </a>
            </DnBtn>
        </div>
    )
}

const DnBtn = styled.div `
    text-align: center;
    border: 1px white solid;
    padding: 10px;
    border-radius: 5px;
    margin: 5%;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px
`;

export default Sidebar