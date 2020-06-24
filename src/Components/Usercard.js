import React from 'react'
import profile from '../profile.jpg'

const commonStyle = {
    display: 'flex',
    width:'calc(100% - 20px)',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center'
}

const Usercard = () => {


    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div
                style={commonStyle}>
                <div style={{ width: 150, height: 150, borderRadius: "50%", overflow: 'hidden' }} >
                    <img height={150} width={150} src={profile} alt="p_img" ></img>
                </div>
                <div
                    style={{
                        marin: 20,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    <div style={{ color: 'grey', fontWeight: 600, fontSize: 20 }}>
                        Deepak Kumar
            </div>
                    <div style={{ fontSize: 16, color: 'grey' }}>
                        Full Stack Developer
            </div>
                </div>
            </div>
        </div>
    )
}

export default Usercard