import React from 'react';
import './sidebar.scss';
import image from '../../assets/imgs/user1.jpg';
import sidebarNav from './../../configs/sidebarNav';
import SidebarNavItem from './../sidebarNavItem/SidebarNavItem';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Link to='/profile' className='sidebar__user'>
                <img src={image} alt='' />
                <div className='sidebar__user__name'>User name</div>
            </Link>
            <hr />
            <div className='sidebar__menu'>
                {sidebarNav.map((item, index) => (
                    <SidebarNavItem item={item} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
