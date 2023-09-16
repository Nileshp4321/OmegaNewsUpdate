import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Article({ article }) {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className='container'>
      <Card
      
        sx={{ maxWidth: 345 }}
        className={hover ? 'article-card hovered' : 'article-card'}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardMedia
          sx={{ height: 140 }}
          image={article.urlToImage}
          title="Article Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.description}
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Article;
