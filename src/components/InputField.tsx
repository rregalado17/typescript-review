import React from 'react'
import './styles.css';

interface Props {
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

export const InputField = ({ todo, setTodo }: Props) => {
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


