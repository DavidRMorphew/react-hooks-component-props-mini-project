import React from 'react'

const About = ({image = "https://via.placeholder.com/215", about}) => (
    <header>
        <aside>
            <img src={image} alt="blog logo"/>
            <p>{about}</p>
        </aside>
    </header>
)

export default About