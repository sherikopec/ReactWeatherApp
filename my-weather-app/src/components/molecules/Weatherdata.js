import React from 'react'
import City from '../atoms/City'
import Temperature from '../atoms/Temperature'
import Bannerimage from '../atoms/Bannerimage'

const Weatherdata = () => {
    return (
        <div>
            <City/>
            <Temperature/>
            <Bannerimage/>
        </div>
    )
}

export default Weatherdata
