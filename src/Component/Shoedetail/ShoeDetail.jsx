import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

// Sample data (replace this with actual data fetching)
const shoeData = {
  '1': {
    image: '/images/s1.png',
    date: 'JORDANS MARS 270 LONDON',
    title: 'Jordan City Pack',
    description:'The Jordan Marks 270 London is a sneaker that combines the classic appeal of Jordans design with modern elements. It features a sleek, contemporary look with a color palette inspired by Londons urban style. The shoe typically showcases a mix of high-quality materials, such as leather and mesh, offering both durability and comfort. The signature Air Max 270 cushioning provides a responsive and comfortable ride, making it suitable for both athletic and casual wear. Its design is often highlighted by bold branding and unique details that pay homage to Londons vibrant street culture.'
  },
  '2': {
    image: '/images/s2.png',
    date: 'VALOUR WHITE',
    title: 'Air Jordan 3',
    description: 'The Air Jordan 3, released in 1988, features a high-top design with visible Air cushioning for comfort. It’s known for its iconic elephant print accents, Jumpman logo, and premium leather construction, making it a classic in both basketball and sneaker culture. The shoe is also famous for being worn by Michael Jordan during his first MVP season. Its innovative design and historical significance have cemented its place as a timeless favorite.'
  },
  '3': {
    image: '/images/s3.png',
    date: 'SB DUNKS VAPOUR',
    title: 'Air Jordan Dunks',
    description:'The Air Jordan Dunks are a stylish fusion of Jordan and Dunk aesthetics, blending the iconic elements of both models. Featuring bold colorways and premium materials, they offer a modern twist on classic sneaker design. Known for their comfortable fit and versatile look, they are a popular choice for both sports and casual wear. The design often includes distinctive branding and unique detailing, making them a standout in any collection.'
  },

};

function ShoeDetail() {
  const { shoeId } = useParams(); 


  const shoe = shoeData[shoeId];

  if (!shoe) {
    return <Typography variant="h6">Shoe not found</Typography>;
  }

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
      <Card>
        <CardMedia
          component="img"
          height="450"
          image={shoe.image}
          alt={shoe.title}
        />
        <CardContent>
          <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
            {shoe.title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {shoe.date}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            {shoe.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ShoeDetail;
