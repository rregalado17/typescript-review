import React from 'react'
import './styles.css';

export const InputField = () => {
  return (
    <form className='input'>
        <input
            className='input_box' 
            type='input' 
            placeholder='Enter a task' >
        </input> 
        <button className='input_submit' type='submit'>
            Go
        </button>
    </form>
  )
}


