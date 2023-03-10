import React from 'react'
import './widget.scss';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const Widget = () => {
  return (
    <div className='widget'>
        <div className='left'>
           <span className='title'>
            User
           </span>
           <span className='counter'>
              20014
            </span>
            <span className='link'>
               See all user
            </span>

        </div>
        <div className='right'>
            <div className='percentage'>
                <KeyboardArrowUpIcon/>
                20%
            </div>
            <Person2OutlinedIcon className='icon'/>
        </div>
    </div>
  )
}
