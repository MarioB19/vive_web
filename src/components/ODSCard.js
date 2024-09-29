import React from 'react';
import Image from 'next/image';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/system';

const Card = styled(Box)(({ theme }) => ({
  perspective: '1000px',
  width: '100%',
  '&:hover .inner': {
    transform: 'rotateY(180deg)',
  },
}));

const Inner = styled(Box)(({ theme, color }) => ({
  position: 'relative',
  width: '100%',
  paddingTop: '100%', // Esto mantiene la relación de aspecto 1:1
  textAlign: 'center',
  transition: 'transform 0.6s',
  transformStyle: 'preserve-3d',
  borderRadius: '8px',
 
  backgroundColor: color,
}));

const Face = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
});

const Front = styled(Face)({
  overflow: 'hidden', // Asegura que la imagen no se desborde
});

const Back = styled(Face)(({ color }) => ({
  flexDirection: 'column',
  color: '#fff',
  transform: 'rotateY(180deg)',
  padding: '8px',
  backgroundColor: color,
}));

const Title = styled('div')(({ theme, $isMobile }) => ({
  fontSize: $isMobile ? '1rem' : '2rem',
  fontWeight: 'bold',
  textAlign: 'center',
}));

const Description = styled('div')(({ theme, $isMobile }) => ({
  fontSize: $isMobile ? '0.5rem' : '1.2rem',
  textAlign: 'center',
  '& span': {
    fontWeight: 'bold',
  },
}));

const ODSCard = ({ color, image, title, description }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card>
      <Inner className="inner" color={color}>
        <Front>
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Front>
        <Back color={color}>
          <Title $isMobile={isMobile} component={Typography} variant="h6">
            {title}
          </Title>
          <Description $isMobile={isMobile} component={Typography} variant="body2">
            <span>Objetivo:</span> {description}
          </Description>
        </Back>
      </Inner>
    </Card>
  );
};

export default ODSCard;