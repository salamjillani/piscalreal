// src/components/calendar/ScheduleForm.jsx
import React from 'react';
import Input from '../common/Input';

const ScheduleForm = () => {
  return (
    <div className="space-y-4">
      <Input label="Title" name="title" />
      <Input label="Date" name="date" type="datetime-local" />
      <Input label="Participants" name="participants" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Schedule
      </button>
    </div>
  );
};

export default ScheduleForm;