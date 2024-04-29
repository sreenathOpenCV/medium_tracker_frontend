"use client";

import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useFetchDataPythnbcQuery, useFetchDataTensorbcQuery, useFetchDataOpencvbcQuery} from '@/Redux/api/apiSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedProgram } from '@/Redux/Slices/bootcampProgramSlice';
import { setSelectedMedium } from '@/Redux/Slices/bootcampMediumSlice';
import { setSelectedSource } from '@/Redux/Slices/bootcampSourceSlice';

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

export default function Filters({onFilterChange}:{onFilterChange:any}) {
  // const selectedProgram = useSelector((state: any) => state.setSelectedProgram);
  // const selectedSource = useSelector((state: any) => state.setSelectedSource);
  // const selectedMedium = useSelector((state: any) => state.setSelectedMedium);
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [selectedMediums, setSelectedMediums] = useState<string[]>([]);


  const dispatch = useDispatch();
  const [selected, setSelected] = useState('');

  const { data: pythonData, isFetching: isFetchingPython } = useFetchDataPythnbcQuery(selected === 'PBC');
  const { data: tensorflowData, isFetching: isFetchingTensorflow } = useFetchDataTensorbcQuery(selected === 'TBC');
  const { data: opencvData, isFetching: isFetchingOpencv } = useFetchDataOpencvbcQuery(selected === 'OBC');

  useEffect(() => {
  }, [pythonData, tensorflowData, opencvData, selected]);

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
  
  useEffect(() => {
  }, []);

  return (
    <div className="flex">
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            BootCamp Program
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel control={<Checkbox checked={selected === 'PBC'} onChange={() => { setSelected('PBC'); handleProgramChange("PBC"); }} name="PBC" />} label="Python Bootcamp (PBC)" />
          <FormControlLabel control={<Checkbox checked={selected === 'TBC'} onChange={() => { setSelected('TBC'); handleProgramChange("TBC"); }} name="TBC" />} label="TensorFlow Bootcamp (TBC)" />
          <FormControlLabel control={<Checkbox checked={selected === 'OBC'} onChange={() => { setSelected('OBC'); handleProgramChange("OBC"); }} name="OBC" />} label="OpenCV Bootcamp (OBC)" />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Bootcamp Source
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel control={<Checkbox onChange={()=>{handleSourceChange("google")}} name="google" />} label="Google" />
          <FormControlLabel control={<Checkbox onChange={() =>{handleSourceChange("ocvu")}} name="ocvu" />} label="OCVU" />
          <FormControlLabel control={<Checkbox onChange={() =>{handleSourceChange("ocv")}} name="ocv" />} label="OCV" />
          <FormControlLabel control={<Checkbox onChange={() =>{handleSourceChange("locv")}} name="locv" />} label="LOCV" />
          <FormControlLabel control={<Checkbox onChange={() =>{handleSourceChange("Facebook")}} name="Facebook" />} label="Facebook" />
          <FormControlLabel control={<Checkbox onChange={() =>{handleSourceChange("Instagram")}} name="Instagram" />} label="Instagram" />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            BootCamp Medium
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel control={<Checkbox onChange={() =>{handleMediumChange("medium_1")}} name="medium_1" />} label="Medium1" />
          <FormControlLabel control={<Checkbox onChange={() =>{handleMediumChange("medium_2")}} name="medium_2" />} label="Medium2" />
          <FormControlLabel control={<Checkbox onChange={() =>{handleMediumChange("medium_3")}} name="medium_3" />} label="Medium3" />
          <FormControlLabel control={<Checkbox onChange={() =>{handleMediumChange("medium_4")}} name="medium_4" />} label="Medium4" />
          <FormControlLabel control={<Checkbox onChange={() =>{handleMediumChange("medium_5")}} name="medium_5" />} label="Medium5" />
          <FormControlLabel control={<Checkbox onChange={() =>{handleMediumChange("medium_6")}} name="medium_6" />} label="Medium6" />
          <FormControlLabel control={<Checkbox onChange={() =>{handleMediumChange("medium_7")}} name="medium_7" />} label="Medium7" />
          <FormControlLabel control={<Checkbox onChange={() =>{handleMediumChange("medium_8")}} name="medium_8" />} label="Medium8" />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
