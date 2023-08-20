import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className='text-center my-6'>
                <img src={loading} alt="loading" srcset="" />
            </div>
        )
    }
}

export default Spinner
