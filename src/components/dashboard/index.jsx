import React from 'react';
import EventHeader from './EventHeader';
import Events from './events/index';

export default function index() {
  return (
    <div>
      <EventHeader />
      <Events />
    </div>
  );
}
