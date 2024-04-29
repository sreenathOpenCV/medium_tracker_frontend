"use client";

import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, OutlinedInput, Button } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import Calendar from './Calendar';
import SubmitButton from './SubmitButton';

interface Program {
  name: string;
  code: string;
}

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
    "2024_05_19":131,
    "2024_05_20":121,
    "2024_05_21":141,
    "2024_05_22":101,
    "2024_05_23":121,
    "2024_05_24":111,
    "2024_05_25":122,
    "2024_05_26":142,
    "2024_05_27":121,
    "2024_05_28":133,
    "2024_05_29":110,
    },
  "source":{
    "2024_04_24":102,
    "2024_04_25":103,
    "2024_04_26":101,
    "2024_04_27":160,
    "2024_04_28":121,
    "2024_04_29":103,
    "2024_04_30":121,
    "2024_05_01":139,
    "2024_05_02":118,
    "2024_05_03":111,
    "2024_05_04":122,
    "2024_05_05":121,
    "2024_05_06":109,
    "2024_05_07":101,
    "2024_05_08":112,
    "2024_05_09":122,
    "2024_05_10":121,
    "2024_05_11":109,
    "2024_05_12":100,
    "2024_05_13":109,
    "2024_05_14":102,
    "2024_05_15":101,
    "2024_05_16":109,
    "2024_05_17":121,
    "2024_05_18":130,
    "2024_05_19":141,
    "2024_05_20":151,
    "2024_05_21":121,
    "2024_05_22":111,
    "2024_05_23":141,
    "2024_05_24":121,
    "2024_05_25":112,
    "2024_05_26":132,
    "2024_05_27":141,
    "2024_05_28":143,
    "2024_05_29":130,
  },
  "medium":{
    "2024_04_24":122,
    "2024_04_25":105,
    "2024_04_26":100,
    "2024_04_27":130,
    "2024_04_28":124,
    "2024_04_29":131,
    "2024_04_30":101,
    "2024_05_01":159,
    "2024_05_02":128,
    "2024_05_03":151,
    "2024_05_04":122,
    "2024_05_05":141,
    "2024_05_06":119,
    "2024_05_07":121,
    "2024_05_08":162,
    "2024_05_09":112,
    "2024_05_10":141,
    "2024_05_11":119,
    "2024_05_12":160,
    "2024_05_13":139,
    "2024_05_14":152,
    "2024_05_15":121,
    "2024_05_16":119,
    "2024_05_17":131,
    "2024_05_18":140,
    "2024_05_19":121,
    "2024_05_20":131,
    "2024_05_21":131,
    "2024_05_22":121,
    "2024_05_23":151,
    "2024_05_24":111,
    "2024_05_25":122,
    "2024_05_26":122,
    "2024_05_27":131,
    "2024_05_28":123,
    "2024_05_29":120,
  }
  }

const programs: Program[] = [
  { name: 'Python Bootcamp (PBC)', code: 'PBC' },
  { name: 'TensorFlow Bootcamp (TBC)', code: 'TBC' },
  { name: 'OpenCV Bootcamp (OBC)', code: 'OBC' }
];
const sources: Program[] = [
    { name: 'google', code: 'google' },
    { name: 'ocvu', code: 'ocvu' },
    { name: 'ocv', code: 'ocv' },
    { name: 'locv', code: 'locv' },
    { name: 'Facebook', code: 'Facebook' },
    { name: 'Instagram', code: 'Instagram' },
  ];

const mediums: Program[] = [
    { name: 'Medium 01', code: 'medium_1' },
    { name: 'Medium 02', code: 'medium_2' },
    { name: 'Medium 03', code: 'medium_3' },
    { name: 'Medium 04', code: 'medium_4' },
    { name: 'Medium 05', code: 'medium_5' },
    { name: 'Medium 06', code: 'medium_6' },
    { name: 'Medium 07', code: 'medium_7' },
    { name: 'Medium 018', code: 'medium_8' },
  ];


function FilterUtm({onFilterChange}:{onFilterChange:any}) {
  const [selectedPrograms, setSelectedPrograms] = React.useState<string[]>([]);
  const [selectedSources, setSelectedSources] = React.useState<string[]>([]);
  const [selectedMediums, setSelectedMediums] = React.useState<string[]>([]);
  const [showPicker, setShowPicker] = useState(false);

  const handleChangeProgram = (event :SelectChangeEvent<string[]>) => {
    const {target: { value }} = event;
    onFilterChange(pythonbc);
    setSelectedPrograms(typeof value === 'string' ? value.split(',') : [value[value.length - 1]]);
    };


  const handleChangeSource = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    setSelectedSources(
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleChangeMedium = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    setSelectedMediums(
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
<div className='w-full flex lg:flex-row md:flex-row max-sm:flex-col sm:flex-col justify-around lg:m-2 md:m-2 sm:my-2 max-sm:my-2 lg:space-x-2 md:space-x-2'>
    <div >
        <Calendar visible={showPicker} onClose={() => setShowPicker(false)} onFilterChange={onFilterChange}/>
        <div onClick={() => setShowPicker(true)} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
        </span>
        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
        <span className="relative w-full text-left p-1 text-white transition-colors duration-200 ease-in-out group-hover:text-white">Dates</span>
        </div>
    </div>
    <FormControl className='max-sm:w-full sm:w-full'>
        <InputLabel id="demo-multiple-checkbox-label">Bootcamp Programs</InputLabel>
        <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={selectedPrograms}
            onChange={handleChangeProgram}
            input={<OutlinedInput label="Bootcamp Programs" />}
            renderValue={(selected) => selected.join(', ')}
        >
            {programs.map((program) => (
            <MenuItem key={program.code} value={program.name}>
                <Checkbox checked={selectedPrograms.indexOf(program.name) > -1} />
                <ListItemText primary={program.name} />
            </MenuItem>
            ))}
        </Select>
    </FormControl>
    <FormControl className='max-sm:w-full sm:w-full max-sm:my-2'>
        <InputLabel id="demo-multiple-checkbox-label">Bootcamp Sources</InputLabel>
        <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={selectedSources}
            onChange={handleChangeSource}
            input={<OutlinedInput label="Bootcamp Sources" />}
            renderValue={(selected) => selected.join(', ')}
        >
            {sources.map((source) => (
            <MenuItem key={source.code} value={source.name}>
                <Checkbox checked={selectedSources.indexOf(source.name) > -1} />
                <ListItemText primary={source.name} />
            </MenuItem>
            ))}
        </Select>
    </FormControl>
    <FormControl className='max-sm:w-full sm:w-full'>
        <InputLabel id="demo-multiple-checkbox-label">Bootcamp Mediums</InputLabel>
        <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={selectedMediums}
            onChange={handleChangeMedium}
            input={<OutlinedInput label="Bootcamp Mediums" />}
            renderValue={(selected) => selected.join(', ')}
        >
            {mediums.map((medium) => (
            <MenuItem key={medium.code} value={medium.name}>
                <Checkbox checked={selectedMediums.indexOf(medium.name) > -1} />
                <ListItemText primary={medium.name} />
            </MenuItem>
            ))}
        </Select>
    </FormControl>
    <SubmitButton />
</div>

  );
}

export default FilterUtm;
