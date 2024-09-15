// // components/Clock.tsx
// import { useState, useEffect } from 'react';
// import Clock from 'react-clock';
// import 'react-clock/dist/Clock.css';

// const AnalogClock: React.FC = () => {
//   const [time, setTime] = useState<Date>(new Date());

//   useEffect(() => {
//     const timerId = setInterval(() => setTime(new Date()), 1000);
//     return () => clearInterval(timerId); // Cleanup the interval on component unmount
//   }, []);

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <Clock value={time} />
//     </div>
//   );
// };

// export default AnalogClock;

import { useState, useEffect } from 'react';

// Helper function to format the date with month name and day of the week
const formatDayOfWeek = (date: Date): string => {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return daysOfWeek[date.getDay()];
};

const formatDate = (date: Date): string => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

// Helper function to format the time in 12-hour format with AM/PM
const formatTime = (date: Date): { time: string; period: string } => {
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const period = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12; // Convert to 12-hour format
  const formattedTime = `${hours}:${minutes}`;

  return { time: formattedTime, period };
};

const AnalogClock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerId); // Clean up the interval when the component unmounts
  }, []);

  const { time, period } = formatTime(currentTime);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-black">
        {time}
        <span className="text-lg font-normal text-black ml-1">{period}</span>
      </div>
      <div className="text-gray-500 text-lg mt-2">
        <div className="font-bold">{formatDayOfWeek(currentTime)}</div>
        <div>{formatDate(currentTime)}</div>
      </div>
    </div>
  );
};

export default AnalogClock;
