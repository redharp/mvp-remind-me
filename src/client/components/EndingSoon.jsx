import React from 'react';

const EndingSoon = props => (
  <ul>
    {
    props.reminders.map(item => <li key={item._id}>{item.task}</li>)
  }
  </ul>
);

export default EndingSoon;