import React from 'react'
import spinner from './assets/spinner.gif'

const Spinner = () => (
    <div className="text-center">
        <img src={spinner} alt="Loading..." className="w-16 h-16 mx-auto" />
    </div>
)

export default Spinner