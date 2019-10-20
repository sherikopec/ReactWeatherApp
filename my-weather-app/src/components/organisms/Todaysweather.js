import React from 'react'
import Dayoverview from '../molecules/dayoverview'
import Hourlyforecast from '../molecules/Hourlyforecast'

const Todaysweather = () => {
    return (
        <div>
            <Dayoverview/>
            <Hourlyforecast/>
        </div>
    )
}

export default Todaysweather
