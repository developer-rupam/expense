import React from 'react';
import { Link } from 'react-router-dom';
import { SITENAME } from '../utils/init';

export default class HeaderSidebar extends React.Component {
    render() {
        return (
         <div>
        <header className="header-mobile d-block d-lg-none">
            <div className="header-mobile__bar">
                <div className="container-fluid">
                    <div className="header-mobile-inner">
                        <a className="logo" href="index.html">
                            <img src={require('../assets/images/icon/logo.png')} alt="" />
                        </a>
                        <button className="hamburger hamburger--slider" type="button">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <nav className="navbar-mobile">
                <div className="container-fluid">
                    <ul className="navbar-mobile__list list-unstyled">
                       
                           
                        <li>
                            <Link to="/dashboard">
                                <i className="fas fa-chart-bar"></i>Dashboard
                            </Link>
                        </li>
                     
                        <li>
                            <Link to="/settings">
                                <i className="fas fa-chart-bar"></i>Settings
                            </Link>
                        </li>
                    </ul>    
                </div>
            </nav>
        </header>

        <aside className="menu-sidebar d-none d-lg-block">
            <div className="logo">
                <Link to="/dashboard">
                    <img src={require('../assets/images/icon/logo.png')} alt="" />
                </Link>
            </div>
            <div className="menu-sidebar__content js-scrollbar1">
                <nav className="navbar-sidebar">
                    <ul className="list-unstyled navbar__list">
                        <li>
                            <Link to="/dashboard">
                                <i className="fas fa-chart-bar"></i>Dashboard
                            </Link>
                        </li>
                     
                        <li>
                            <Link to="/settings">
                                <i className="fas fa-chart-bar"></i>Settings
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
        <header className="header-desktop">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="header-wrap">
                          </div>
                    </div>
                </div>
            </header>
        </div>
        )
    }
}