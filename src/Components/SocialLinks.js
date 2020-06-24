import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

const SocialLinks = () => {
    return(
        <div style={{display:'flex', justifyContent:'space-evenly', marginTop:20, marginBottom:20}}>
            <a href="https://www.linkedin.com/in/deepak-kumar-91575236/" rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon style={{color: 'grey', fontSize:24}} icon={faLinkedin} />
            </a>
            <a href="https://github.com/deepak-kumar-dev" rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon style={{color: 'grey', fontSize:24}} icon={faGithubSquare } />
            </a>
            
            <a href="https://twitter.com/deepak__dev" rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon style={{color: 'grey', fontSize:24}} icon={faTwitterSquare } />
            </a>
        </div>
    )
}

export default SocialLinks