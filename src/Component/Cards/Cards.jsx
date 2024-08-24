import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function ShoeCard({ image, date, title, shoeId }) {
  return (
    <Link to={`/shoe/${shoeId}`} style={{ textDecoration: 'none' }}>
      <Card
        sx={{
          maxWidth: 450,
          borderRadius: 3,
          boxShadow: 3,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: 6,
          },
          cursor: 'pointer',
        }}
      >
        <CardMedia
          component="img"
          height="345"
          image={image}
          alt={title}
        />
        <CardContent sx={{ textAlign: 'center', padding: '16px' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', fontSize: '1.4rem' }}
          >
            {date}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontWeight: 'bold', fontSize: '1rem' }}
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default ShoeCard;
