"use client"

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, TextField, Button, Typography, Grid, InputAdornment, CircularProgress } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import EditNoteIcon from '@mui/icons-material/EditNote';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const LoadingSpinner = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
    <CircularProgress sx={{ color: '#000000' }} />
  </Box>
);

const palette = {
  white: '#FFFFFF',
  beige: '#F5F5F5',
  coffee: '#3E2723',
  black: '#000000',
};

export default function FormularioContacto() {
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      nombre: '',
      email: '',
      mensaje: ''
    },
    mode: 'onChange'
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert('Mensaje enviado con éxito');
        reset()
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      alert('Error al enviar el mensaje: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        p: 4,
        bgcolor: palette.beige,
        color: palette.black,
        borderRadius: 2,
        maxWidth: 600,
        mx: 'auto',
        my: 4,
        animation: `${fadeIn} 0.5s ease-out`,
        position: 'relative',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: palette.coffee,
          display: 'flex',
          alignItems: 'center',
          mb: 4,
          fontWeight: 'bold',
          fontSize: '1.5rem'
        }}
      >
        <MailOutlineIcon sx={{ fontSize: 40, color: 'inherit', mr: 1 }} />
        Manda <Typography variant="h4" component="span" sx={{ color: palette.black, fontWeight: 'bold', fontSize: '1.5rem', ml: 1 }}>un mensaje.</Typography>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" display="block" sx={{ mb: 1, color: palette.black, fontWeight: 'bold' }}>
            Nombre
          </Typography>
          <Controller
            name="nombre"
            control={control}
            rules={{ required: 'El nombre es requerido', minLength: { value: 5, message: 'Mínimo 5 caracteres' }, maxLength: { value: 50, message: 'Máximo 50 caracteres' } }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="outlined"
                placeholder="Nombre"
                error={!!errors.nombre}
                helperText={errors.nombre?.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PersonIcon sx={{ color: palette.coffee, fontSize: 28 }} />
                    </InputAdornment>
                  ),
                }}
                sx={textFieldStyle}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" display="block" sx={{ mb: 1, color: palette.black, fontWeight: 'bold' }}>
            Email
          </Typography>
          <Controller
            name="email"
            control={control}
            rules={{ 
              required: 'El email es requerido', 
              pattern: { 
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 
                message: 'Email inválido'
              } 
            }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="outlined"
                placeholder="Email"
                error={!!errors.email}
                helperText={errors.email?.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <EmailIcon sx={{ color: palette.coffee, fontSize: 28 }} />
                    </InputAdornment>
                  ),
                }}
                sx={textFieldStyle}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" display="block" sx={{ mb: 1, color: palette.black, fontWeight: 'bold' }}>
            Mensaje
          </Typography>
          <Controller
            name="mensaje"
            control={control}
            rules={{ 
              required: 'El mensaje es requerido', 
              minLength: { value: 20, message: 'Mínimo 20 caracteres' }, 
              maxLength: { value: 1000, message: 'Máximo 1,000 caracteres' } 
            }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="outlined"
                placeholder="Mensaje"
                multiline
                rows={4}
                error={!!errors.mensaje}
                helperText={errors.mensaje?.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ alignSelf: 'flex-start', mt: 1, mr: 1 }}>
                      <EditNoteIcon sx={{ color: palette.coffee, fontSize: 28 }} />
                    </InputAdornment>
                  ),
                }}
                sx={textFieldStyle}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            disabled={isLoading}
            sx={{
              bgcolor: palette.black,
              color: palette.white,
              textTransform: 'uppercase',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              py: 2,
              mt: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#333333',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
              }
            }}
            fullWidth
          >
            {isLoading ? <LoadingSpinner /> : 'Enviar Mensaje'}
          </Button>
        </Grid>
      </Grid>

      {isLoading && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <LoadingSpinner />
        </Box>
      )}
    </Box>
  );
}

const textFieldStyle = {
  '& .MuiOutlinedInput-root': {
    fontSize: '1.2rem',
    '& fieldset': {
      borderColor: 'rgba(62, 39, 35, 0.23)',
      borderWidth: '2px',
    },
    '&:hover fieldset': {
      borderColor: palette.coffee,
    },
    '&.Mui-focused fieldset': {
      borderColor: palette.coffee,
      borderWidth: '2px',
    },
    boxShadow: '0 4px 10px rgba(62, 39, 35, 0.2)',
    borderRadius: '8px',
    backgroundColor: palette.white,
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 6px 12px rgba(62, 39, 35, 0.3)',
    }
  },
  '& .MuiInputBase-input': {
    padding: '16px 14px',
    color: palette.black,
  },
  '& .MuiInputBase-input::placeholder': {
    color: 'rgba(0, 0, 0, 0.6)',
    opacity: 1,
  }
};