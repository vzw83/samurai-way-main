import React from 'react';
import styled from "styled-components";

export const Navigation = () => {
    return (
        <StylesNavigation>

            <ul>
                <li><a href="">Profile</a></li>
                <li><a href="">Messages</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Music</a></li>
                <li><a href="">Settings</a></li>
            </ul>

            {/*<div><a>Profile</a></div>*/}
            {/*<div><a>Messages</a></div>*/}
            {/*<div><a>News</a></div>*/}
            {/*<div><a>Music</a></div>*/}
            {/*<div><a>Settings</a></div>*/}

        </StylesNavigation>
    );
};

const StylesNavigation = styled.nav`
    grid-area: nav;
    background-color: #3977e8;
    
   

    height: calc(100vh - 60px);
    
`
