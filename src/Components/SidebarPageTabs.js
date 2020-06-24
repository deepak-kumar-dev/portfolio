import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const tabStyle = { position: 'relative', cursor: 'pointer', padding: 10, color: 'grey', fontWeight: 600, fontSize: 16 }

const SidebarPageTabs = () => {

    const onClick = (name) => {
        setSelectedTab(name)
    }

    const[selectedTab, setSelectedTab] = useState("About")

    const corner = (
        <div
            style={{
                backgroundColor: 'rgb(246, 245, 247)',
                height: 15,
                width: 15,
                transform: 'rotate(45deg)',
                position: 'absolute',
                top: 'calc(50% - 7.5px)',
                right: '-7.5px'
            }}>
        </div>)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <Link onClick={() => onClick("About")} style={{ textDecoration: 'none' }} to="/profile/">
                <div style={tabStyle}>
                    <span>About</span>
                    {selectedTab === "About" ? corner : null}
                </div>
            </Link>
            <Link onClick={() => onClick("Education")} style={{ textDecoration: 'none' }} to="/profile/education">
                <div style={tabStyle}>
                    <span>Education</span>
                {selectedTab === "Education" ? corner : null}
                </div>
            </Link>
            <Link onClick={() => onClick("Skills")}  style={{ textDecoration: 'none' }} to="/profile/skills">
                <div style={tabStyle}>
                    <span>Skills</span>
                {selectedTab === "Skills" ? corner : null}
                </div>
            </Link>
            <Link onClick={() => onClick("Contact")}  style={{ textDecoration: 'none' }} to="/profile/contact">
                <div style={tabStyle}>
                {selectedTab === "Contact" ? corner : null}
                <span>Contact</span>
                </div>
            </Link>
        </div>
    )
}

export default SidebarPageTabs