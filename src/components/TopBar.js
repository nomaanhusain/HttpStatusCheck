import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
function TopBar(){
    return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='secondary'>
          <Typography variant="h4" color="inherit" component="div">
            Web Status Check
          </Typography>
      </AppBar>
    </Box>
    );
}
export default TopBar