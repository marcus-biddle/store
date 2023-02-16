import React from 'react'
import styled from 'styled-components';

export const NavbarStyle = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 1.56rem;
    padding-bottom: 1.34rem;
    a {
        text-decoration: none;
        color: black;
        font-size: .83rem;
        letter-spacing: 1.5px;
        text-transform: uppercase;
    }
    a:hover {
        color: #ce450a;
    }
`;

export const StyledNavUL = styled.div`
    padding-left: 2rem;
    padding-right: 2rem;
`;

export const NavbarCategoryWrapper = styled.div`
    display: inline-flex

`;

export const UserWrapper = styled.div`

`;

export const NavbarHeaderWrapper = styled.div`
    
`;