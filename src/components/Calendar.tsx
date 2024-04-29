"use client";

import React, { useState, useEffect } from 'react';
import { DateRange, DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

type Props = {
  visible: boolean;
  onClose: () => void;
  onFilterChange: any;
};

const Calendar: React.FC<Props> = ({ visible, onClose, onFilterChange }) => {
  const [state, setState] = useState<DateRange[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (visible) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [visible, onClose]);

  return (
    <div>
      {visible && (
        <div style={{ position: 'absolute', zIndex: 2 }}>
          <DateRangePicker
            editableDateInputs={true}
            onChange={(item: any) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            className=""
          />
          <button onClick={onClose} style={{ marginTop: 20 }} className='text-xl font-bold'>x</button>
        </div>
      )}
    </div>
  );
};

export default Calendar;
