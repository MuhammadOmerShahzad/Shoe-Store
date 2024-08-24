import React from 'react';
import ShoeCard from '../Cards/Cards'; 
import { Grid } from '@mui/material';


const shoes = [
  {
    id: '1',
    image: 'images/s1.png',
    date: 'JORDANS MARS 270 LONDON',
    title: 'Jordan City Pack',
  },
  {
    id: '2',
    image: '/images/s2.png',
    date: 'VALOUR WHITE',
    title: 'Air Jordan 3',
  },
  {
    id: '3',
    image: 'images/s3.png',
    date: 'SB DUNKS VAPOUR',
    title: 'Air Jordan Dunks',
  },

];

function ShoeGrid() {
  return (
    <Grid container spacing={5} justifyContent="center" marginTop={3} gap={10}>
      {shoes.map((shoe) => (
        <Grid item key={shoe.id}>
          <ShoeCard
            image={shoe.image}
            date={shoe.date}
            title={shoe.title}
            shoeId={shoe.id}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default ShoeGrid;
