import { useState } from 'react';
import { Box, Typography } from '@mui/material';

const TabComponent = () => {
 
  const [activeTab, setActiveTab] = useState('FEED');

  return (
    <Box sx={{ position: 'relative', display: 'flex', gap: 4 }}>
      {['FEED', 'IN STOCK', 'UPCOMING'].map((tab) => (
        <Typography
          key={tab}
          variant="h6"
          component="div"
          onClick={() => setActiveTab(tab)}
          sx={{
            color: 'black',
            fontFamily:'Agency FB',
            fontWeight: 'bold',
            fontSize: 20,
            cursor: 'pointer',
            position: 'relative',
            paddingBottom: 1, 
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '3px',
              backgroundColor: 'black',
              transform: activeTab === tab ? 'scaleX(1)' : 'scaleX(0)',
              transformOrigin: 'left',
              transition: 'transform 0.3s ease',
            },
          }}
        >
          {tab}
        </Typography>
      ))}
    </Box>
  );
};

export default TabComponent;
