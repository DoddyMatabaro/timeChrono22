import React from 'react'
import ClockItems from '../ClockItems'
import './clock.css';
function Clock() {
  return (
    <section id="clock">
        <div>
            <label>Date: </label>
              <input 
                  type="date"
                  name="date"
              />
        </div>
        <ClockItems />
    </section>
  )
}

export default Clock