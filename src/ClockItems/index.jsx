import React, { useEffect, userEffect, useState} from 'react';

import './clockItems.css';
import DataTimeDispaly from './DateTimeDisplay';
import { useCountdown } from './hooks/useCountdown';

function ClockItems(targetDate) {
    
  const ExpireNotice = () =>{
    return (
      <div className="expired-notice">
        <span>Expired</span>
        <p> Please select a future date and time</p>
      </div>
    );
  };

  const showCounter = ({days, hours, minutes, seconds})=>{
    return (
      <div className="show-counter">
        <a
          href="https://tapasadhikary.com"
          target="_blank"
          rel="noopener noreferrer"
          className="countdown-link"
        >
          <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
          <p>:</p>
          <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
          <p>:</p>
          <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
          <p>:</p>
          <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
        </a>
      </div>
    );
  };
  }
  return (
    <article>
            <ul  className="clock-options" >
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
            </ul>
            {/* <h1>Heure : ${ new Date(time).toString()}</h1> */}
                  <h1></h1>
                 <button >start</button>
    </article>
  )
}

export default ClockItems