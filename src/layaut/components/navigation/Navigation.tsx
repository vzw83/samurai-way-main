import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Navigation = () => {
    return (
        <StylesNavigation>

            <ul>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/dialogs">Messages</NavLink></li>
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/music">Music</NavLink></li>
                <li><NavLink to="/settings">Settings</NavLink></li>
            </ul>

        </StylesNavigation>
    );
};

const StylesNavigation = styled.nav`
    grid-area: nav;
    background-color: #3977e8;

    height: calc(100vh - 60px);

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;

        li {
            padding: 10px;
            border-bottom: 1px solid #ccc;

            a {
                color: #fff;
                text-decoration: none;
                font-size: 20px;

                &.active {

                    color: #1c1d1e;
                    font-size: 25px;

                }
            }

        }
`
