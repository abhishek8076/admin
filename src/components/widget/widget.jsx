import React from 'react'
import './widget.scss';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export const Widget = ({ type }) => {
    const amount = 1000;
    const diff = 20;

    let data;
    switch (type) {
        case "User":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: (
                    <Person2OutlinedIcon className="icon"
                        style={{
                            backgroundColor: "rbga(128,165,32,0.2)",
                            color: "red"
                        }} />
                )
            };
            break;
        case "Order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "See all Orders",
                icon: (
                    <LocalGroceryStoreIcon className="icon"
                        style={{
                            backgroundColor: "rbga(128,165,32,0.2)",
                            color: "goldenrod"
                        }}
                    />
                )
            };
            break;
        case "Earning":
            data = {
                title: "EARNINIG",
                isMoney: true,
                link: "See all EAENING",
                icon: (
                    <MonetizationOnIcon className="icon"
                        style={{
                            color: "crimson"
                        }} />
                )
            };
            break;
        case "Balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See all Balance",
                icon: (
                    <AccountBalanceWalletIcon className="icon"
                        style={{
                            backgroundColor: "rbga(128,165,32,0.2)",
                            color: "yellow"
                        }} />
                )
            };
            break;
        default:
            break;

    }
    return (
        <div className='widget'>
            <div className='left'>
                <span className='title'>
                    {data.title}
                </span>
                <span className='counter'>
                    {data.isMoney && <CurrencyRupeeIcon />}{amount}
                </span>
                <span className='link'>
                    {data.link}
                </span>

            </div>
            <div className='right'>
                <div className='percentage positive'>
                    <KeyboardArrowUpIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}
