import { AppBar, Box, Button, IconButton, Toolbar, Typography, } from '@mui/material'

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Box  sx={{ flexGrow: 1 }}>
        <AppBar color='primary' position="static">
          <Toolbar >
            <IconButton 
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography id='titleText' variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Employee App
            </Typography> &nbsp;
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
            <Button id='add' color="inherit" >ADD</Button>
            </Link>


            <Link to={'/view'} style={{textDecoration:'none',color:'white'}}>
            <Button id='view' color="inherit">VIEW</Button>
            </Link>
            

          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Navbar
