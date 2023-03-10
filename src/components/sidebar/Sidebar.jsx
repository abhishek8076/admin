import React from 'react';
import "./Sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='top'>
                <span className='logo'>Admin</span>
            </div>
            <hr />
            <div className='center'>
                <ul >
                    <p className='title'>Main</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>DashBoard</span>
                        </li>
                        <p className='title'>List</p>
                    <li>
                        <Person2OutlinedIcon className='icon'/>
                        <span>Users</span>
                    </li>
                    <li>
                        <Inventory2Icon className="icon"/>
                        <span>Products</span>
                    </li>
                    <li>
                        <LocalGroceryStoreIcon className="icon"/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon"/>
                        <span>Delivery</span>
                    </li>
                    <p className='title'>Useful</p>
                    <li>
                    
                        <AssessmentIcon className="icon"/>
                        <span>stats</span>
                    </li>
                    <p className='title'>Services</p>
                    <li>
                        <NotificationsIcon className="icon"/>
                        <span>Notification</span>
                    </li>
                    <li>
                        <MonitorHeartIcon className="icon"/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyIcon className="icon"/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon"/>
                        <span>Settings</span>
                    </li>
                    <p className='title'>User</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className="icon"/>
                        <span>Logout</span>
                    </li>
                    


                </ul>
            </div>
            <div className='bottom'>
                <div className="colorOption">

                </div>
                <div className="colorOption">
                    
                </div>
            </div>
        </div>
    )
}
