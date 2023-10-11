import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import styled from 'styled-components';
import deepakLogo from "../../../assets/NaveBar/deepak_logo1.svg"
const WrapperNavber = styled.div`
// height: 78px;
.NaveBar_Logo{
    flex: 0.8;
}
.NaveBar_Logo img{
    width: 124px;
    padding: 0.2rem 0px;
}
.NaveBar_Manu{
    flex-direction: row;
    flex: 0.85;
    justify-content: space-between;
    font-size: 21px;
}
.navbar-expand-lg > div{
    padding: 0px;
}
.navbar-expand-lg .navbar-collapse {
    justify-content: flex-end;
}
.nave_bar_button{
    background: black;
    margin: 4px;
    padding: 4px 15px;
    color: rgb(222, 150, 78);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 19px;
}
ul{
    display: flex;
    align-items: center;
}
ul li{
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.navbar-nav li:nth-last-child(-n+1){
    border: 1px solid #de964e;
    color: #de964e;
    border-radius: 28px;
    cursor: pointer;
}
`;

export default function NavebarDesign() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <WrapperNavber>
            <div className='container-fluids dddd NaveBar_block'>
                <div className='container'>
                    <Navbar expand="lg">
                        <NavbarBrand className='NaveBar_Logo'><img src={deepakLogo}/></NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto NaveBar_Manu" navbar style={{ color: "white" }}>
                                <NavItem>
                                    <NavLink style={{ color: "white" }} href="/components/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{ color: "white" }} href="/components/">Portfolio</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{ color: "white" }} href="/components/">About Me</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{ color: "white" }} href="/components/">Skills</NavLink>
                                </NavItem>
                                <NavItem>
                                    <div className='nave_bar_button'>Download Resume</div>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </div>
        </WrapperNavber>
    )
}
