import React from 'react';

import './clockItems.css';
import DateTimeDisplay from '../DateTimeDisplay';
import { useCountdown } from '../hooks/useCountdown';

const ExpiredNotice = () =>{
  return (
    <div className="expired-notice">
      <span>Expired</span>
      <p> Please select a future date and time</p>
    </div>
  );
};

const ShowCounter = ({days, hours, minutes, seconds})=>{
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

function ClockItems(targetDate) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  return (
    <article>
            <ul  className="clock-options" >
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
            </ul>
            {(days + hours + minutes + seconds <= 0) 
                  ? 
                  <ExpiredNotice /> 
                  : 
                  <ShowCounter 
                      days={days}
                      hours={hours}
                      minutes={minutes}
                      seconds={seconds}
                  />
            }
                 <button >start</button>
    </article>
  )
}

export default ClockItems