import React from 'react'
import Weatherdata from '../molecules/Weatherdata'
import Weatherview from '../molecules/weatherview'

const Weatherbanner = () => {
    return (
        <div>
            <Weatherdata/>
            <Weatherview/>
        </div>
    )
}

export default Weatherbanner
