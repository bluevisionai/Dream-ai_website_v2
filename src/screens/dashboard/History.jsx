import * as React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import {Grid, AspectRatio, Card, CardContent, CardOverflow, Divider, Typography, Link, Avatar, Box} from '@mui/joy';

export default function History() {
  return (
    <Grid
    container
    spacing={{ xs: 2, md: 3 }}
    columns={{ xs: 4, sm: 8, md: 12 }}
    sx={{ flexGrow: 1 }}
    >
      {itemData.map((item) => (
        <Grid xs={12} sm={6} md={3} key={item}>
            <Card variant="outlined" sx={{ width: 320 }}>
                <CardOverflow>
                    <AspectRatio ratio="2">
                        <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                        </ImageListItem>
                    </AspectRatio>
                </CardOverflow>
                <CardContent>
                    <Typography level="title-md">
                        <Link href="#multiple-actions" overlay underline="none">
                            Yosemite National Park
                        </Link>
                    </Typography>
                    <Typography level="body-sm">
                        <Link href="#multiple-actions">California</Link>
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Avatar alt="lottery" color="danger" size="sm">6</Avatar>
                    <Avatar alt="lottery" color="danger" size="sm">7</Avatar>
                    <Avatar alt="lottery" color="danger" size="sm">20</Avatar>
                    <Avatar alt="lottery" color="danger" size="sm">35</Avatar>
                    <Avatar alt="lottery" color="danger" size="sm">18</Avatar>
                    <Avatar alt="lottery" color="danger" size="sm">9</Avatar>
                    <Avatar alt="lottery" color="warning" size="sm">8</Avatar>
                </Box>
                <CardOverflow variant="soft">
                    <Divider inset="context" />
                    <CardContent orientation="horizontal">
                        {/* <Typography level="body-xs">6.3k views</Typography>
                        <Divider orientation="vertical" /> */}
                        <Typography level="body-xs">1 hour ago</Typography>
                    </CardContent>
                </CardOverflow>
            </Card>
        </Grid>

      ))}
      </Grid>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];