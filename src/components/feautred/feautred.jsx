import React from 'react'
import "./freautred.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export const Feautred = () => {
  return (
    <div className='feauted'>
      <div className='top'>
        <h1 className='title'>Total Revenu</h1>
        <MoreVertIcon fontSize='small'/>
      </div>
      <div className='bottom'>
        <div className="feautedChart">
        <CircularProgressbar value={70}   strokeWidth={5} text={`70%`} />
        </div>
        <p className="title">total sales made today</p>
        <p className="amount"><CurrencyRupeeIcon className="amount"/>420</p>
        <p className="desc">Pervious transaction processing .Last payment may not be include
         </p>

      </div>
    </div>
  )
}
