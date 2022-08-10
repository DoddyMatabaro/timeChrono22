import React, { useEffect, userEffect, useState} from 'react';

import './clockItems.css';

function ClockItems(targetDate) {
    const countDownDate = new Date(targetDate).getTime();

    const [countDown, setCountDown] = useState(
      countDownDate - new Date().getTime()
    );

    useEffect(()=>{
      const interval = setInterval(()=>{
        setCountDown(countDownDate - new Date().getTime());
      },1000);

      return () => clearInterval(interval);
    })
  return (
    <article>
            <ul  className="clock-options" >
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
            </ul>
            {/* <h1>Heure : ${ new Date(time).toString()}</h1> */}
            <h1>
                {count} ---
                <input
                    type="number"
                    value={intervalValue}
                    onChange={handleChangeIntervalValue}
                  />
             </h1>
           <div className="clock-buttons">
                 <button >start</button>
                 <button >stop</button>
                 <button>reset</button>
           </div>
    </article>
  )
}

export default ClockItems