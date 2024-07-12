import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
        <br/><br/>
      <TextField
      variant='outlined'
      label='Name'/>
      <br/><br/>

      <TextField
      variant='outlined'
      label='Age'/>
      <br/><br/>

      <TextField
      variant='outlined'
      label='Salary'/>
      <br/><br/>

      <TextField
      variant='outlined'
      label='Department'/>
      <br/><br/>
      
      <Button variant='contained'>Submit</Button>
      <br /><br /><br />

    </div>
  )
}

export default Add
