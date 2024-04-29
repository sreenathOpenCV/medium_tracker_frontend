"use client";

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { setSelectedProgram } from '@/Redux/Slices/bootcampProgramSlice';
import { setSelectedMedium } from '@/Redux/Slices/bootcampMediumSlice';
import { setSelectedSource } from '@/Redux/Slices/bootcampSourceSlice';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Divider from '@mui/material/Divider';

const pythonbc = {"page":{
    "2024_04_24":133,
    "2024_04_25":123,
    "2024_04_26":111,
    "2024_04_27":130,
    "2024_04_28":121,
    "2024_04_29":123,
    "2024_04_30":111,
    "2024_05_01":109,
    "2024_05_02":108,
    "2024_05_03":131,
    "2024_05_04":122,
    "2024_05_05":121,
    "2024_05_06":109,
    "2024_05_07":101,
    "2024_05_08":112,
    "2024_05_09":102,
    "2024_05_10":131,
    "2024_05_11":100,
    "2024_05_12":111,
    "2024_05_13":118,
    "2024_05_14":122,
    "2024_05_15":161,
    "2024_05_16":109,
    "2024_05_17":141,
    "2024_05_18":120,
    },
  "source":{
    "2024_04_24":102,
    "2024_04_25":103,
    "2024_04_26":101,
    "2024_04_27":160,
    "2024_04_28":111,
    "2024_05_04":122,
    "2024_05_05":121,
    "2024_05_06":109,
    "2024_05_07":101,
    "2024_05_08":112,
  },
  "medium":{
    "2024_04_24":122,
    "2024_04_25":105,
    "2024_04_26":100,
    "2024_04_27":130,
    "2024_04_28":124,
    "2024_04_29":111,
  }
  }

function FilterCards({onFilterChange}:{onFilterChange:any}) {
    const [programDialogOpen, setProgramDialogOpen] = useState(false);
    const [sourceDialogOpen, setSourceDialogOpen] = useState(false);
    const [mediumDialogOpen, setMediumDialogOpen] = useState(false);
    const [selected, setSelected] = useState('');
    const [selectedSources, setSelectedSources] = useState<string[]>([]);
    const [selectedMediums, setSelectedMediums] = useState<string[]>([]);
    const dispatch = useDispatch();


    const handleProgramClickOpen = () => {
        setProgramDialogOpen(true);
      };
    
      const handleProgramClose = () => {
        setProgramDialogOpen(false);
      };
    
      const handleSourceClickOpen = () => {
        setSourceDialogOpen(true);
      };
    
      const handleSourceClose = () => {
        setSourceDialogOpen(false);
      };

      const handleMediumClickOpen = () => {
        setMediumDialogOpen(true);
      };
    
      const handleMediumClose = () => {
        setMediumDialogOpen(false);
      };

  const handleProgramChange = (program: string) => {
    dispatch(setSelectedProgram(program));
    onFilterChange(pythonbc);
  };

  const handleSourceChange = (source:string) => {
    const isSelected = selectedSources.includes(source);
    if (isSelected) {
      const updatedSelection = selectedSources.filter(item => item !== source);
      setSelectedSources(updatedSelection);
      dispatch(setSelectedSource(updatedSelection));
    } else {
      const updatedSelection = [...selectedSources, source];
      setSelectedSources(updatedSelection);
      dispatch(setSelectedSource(updatedSelection));
    }
  }
  
  const handleMediumChange = (source: string) => {
    const isSelected = selectedMediums.includes(source);
    if (isSelected) {
      const updatedSelection = selectedMediums.filter(item => item !== source);
      setSelectedMediums(updatedSelection);
      dispatch(setSelectedMedium(updatedSelection));
    } else {
      const updatedSelection = [...selectedMediums, source];
      setSelectedMediums(updatedSelection);
      dispatch(setSelectedMedium(updatedSelection));
    }
  };
  
  return (
    <div className="flex flex-row justify-around ml-1">
    <div className="flex items-center">
      <h1 className="text-2xl font-bold px-4 text-[#138dff]">FILTERS</h1>
      <FilterAltIcon className="w-6 h-6 -ml-4 text-indigo-300" />
    </div>
      <Card sx={{ margin: 1 }} >
        <CardActionArea onClick={handleProgramClickOpen}>
          <div className='border-r-8 border-red-200'>
            <CardContent  sx={{ minWidth: 355, minHeight: 150 }}>
              <Typography gutterBottom variant="h5" component="div">
              <h1 className="font-bold text-2xl text-black">BOOTCAMP PROGRAM</h1>  
              </Typography>
              {selected.length > 0 && (
                <Typography variant="body1" color="text.primary">
                  <h1 className="text-lg text-gray-600 font-bold">PROGRAM:</h1>{selected}
                </Typography>
              )}
              <div style={{ display: 'flex', flexWrap: 'wrap' }}></div>
            </CardContent>
          </div>
        </CardActionArea>
        <Dialog open={programDialogOpen} onClose={handleProgramClose}>
          <DialogTitle>BootCamp Program</DialogTitle>
          <DialogContent>
            <FormControlLabel control={<Checkbox checked={selected === 'Python Bootcamp (PBC)'} onChange={() => { setSelected('Python Bootcamp (PBC)'); handleProgramChange("PBC"); }} name="PBC" />} label="Python Bootcamp (PBC)" />
            <FormControlLabel control={<Checkbox checked={selected === 'TensorFlow Bootcamp (TBC)'} onChange={() => { setSelected('TensorFlow Bootcamp (TBC)'); handleProgramChange("TBC"); }} name="TBC" />} label="TensorFlow Bootcamp (TBC)" />
            <FormControlLabel control={<Checkbox checked={selected === 'OpenCV Bootcamp (OBC)'} onChange={() => { setSelected('OpenCV Bootcamp (OBC)'); handleProgramChange("OBC"); }} name="OBC" />} label="OpenCV Bootcamp (OBC)" />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleProgramClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Card>
      <Divider></Divider>
      <Card sx={{ margin: 1 }}>
        <CardActionArea onClick={handleSourceClickOpen}>
        <div className='border-r-8 border-green-200'>
          <CardContent sx={{ maxWidth: 345, minHeight: 150 }}>
            <Typography gutterBottom variant="h5" component="div">
            <h1 className="font-bold text-2xl text-black">BOOTCAMP SOURCE</h1>
            </Typography>
            {selected.length > 0 && (
              <Typography variant="body1" color="text.primary">
                <h1 className="text-lg text-gray-600 font-bold">SOURCE:</h1>{selectedSources.join(', ')}
              </Typography>
            )}
            <div style={{ display: 'flex', flexWrap: 'wrap' }}></div>
          </CardContent>
          </div>
        </CardActionArea>
        <Dialog open={sourceDialogOpen} onClose={handleSourceClose}>
          <DialogTitle>BootCamp Source</DialogTitle>
          <DialogContent>
            {["google", "ocvu", "ocv", "locv", "Facebook", "Instagram"].map(source => (
              <FormControlLabel
                control={<Checkbox checked={selectedSources.includes(source)} onChange={() => handleSourceChange(source)} name={source} />}
                label={source}
                key={source}
              />
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSourceClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Card>
      <Divider></Divider>
      <Card sx={{ margin: 1 }}>
        <CardActionArea onClick={handleMediumClickOpen}>
        <div className='border-r-8 border-blue-300'>
          <CardContent  sx={{ maxWidth: 345, minHeight: 150 }}>
            <Typography gutterBottom variant="h5" component="div">
            <h1 className="font-bold text-2xl text-black">BOOTCAMP MEDIUM</h1>

            </Typography>
            {selected.length > 0 && (
              <Typography variant="body1" color="text.primary">
                <h1 className="text-lg text-gray-600 font-bold">MEDIUM:</h1> {selectedMediums.join(', ')}
              </Typography>
            )}
            <div style={{ display: 'flex', flexWrap: 'wrap' }}></div>
          </CardContent>
          </div>
        </CardActionArea>
        <Dialog open={mediumDialogOpen} onClose={handleMediumClose}>
          <DialogTitle>BootCamp Medium</DialogTitle>
          <DialogContent>
            {["medium_1", "medium_2", "medium_3", "medium_4", "medium_5", "medium_6", "medium_7", "medium_8"].map(medium => (
              <FormControlLabel
                control={<Checkbox checked={selectedMediums.includes(medium)} onChange={() => handleMediumChange(medium)} name={medium} />}
                label={medium}
                key={medium}
              />
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleMediumClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Card>
    </div>
  );
}

export default FilterCards;