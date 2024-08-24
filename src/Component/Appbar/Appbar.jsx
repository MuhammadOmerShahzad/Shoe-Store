import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { CardMedia } from '@mui/material';
import TabComponent from '../Tabcomponent/TabComponent';

function CustomAppBar() {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: 'white', 
        borderTop: '1px solid rgba(0, 0, 0, 0.15)', 
        borderBottom: '1px solid rgba(0, 0, 0, 0.15)', 
        boxShadow: 'none'
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CardMedia
            component="img"
            image="/images/logo.png" 
            alt="Logo"
            sx={{ height: 50 }} 
          />
        </Box>
        <TabComponent />
        <Box sx={{ width: '64px' }} />
      </Toolbar>
    </AppBar>
  );
}

export default CustomAppBar;
