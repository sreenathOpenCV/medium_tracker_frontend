"use client";

import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, FormControlLabel, Checkbox } from '@mui/material';

interface Option {
  label: string;
  value: string;
}

interface CustomCardProps {
  title: string;
  options: Option[];
  selectedOptions: string[];
  handleChange: (selected: string[]) => void; 
  isExclusive: boolean;
  multi: boolean;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, options, selectedOptions, handleChange, isExclusive, multi }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCheckboxChange = (value: string) => {
    let newSelection: string[] = [];

    if (multi) {
      if (selectedOptions.includes(value)) {
        newSelection = selectedOptions.filter(item => item !== value);
      } else {
        newSelection = [...selectedOptions, value];
      }
    } else {
      newSelection = [value];
    }

    handleChange(newSelection);
    if (isExclusive) {
      handleClose(); 
    }
  };

  return (
    <Card sx={{ margin: 2, maxWidth: 345 }}>
      <CardActionArea onClick={handleClickOpen}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {selectedOptions.map(option => (
              <Typography key={option} variant="body2" color="text.secondary" style={{ marginRight: 8 }}>
                {options.find(o => o.value === option)?.label}
              </Typography>
            ))}
          </div>
        </CardContent>
      </CardActionArea>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{`Select ${title}`}</DialogTitle>
        <DialogContent>
          {options.map(({ label, value }) => (
            <FormControlLabel
              key={value}
              control={
                <Checkbox
                  checked={selectedOptions.includes(value)}
                  onChange={() => handleCheckboxChange(value)}
                  name={label}
                />
              }
              label={label}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default CustomCard;