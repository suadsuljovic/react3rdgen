import { useEffect, useState } from "react";

const Countdown = () => {
  function calculateTimeUntilNovember11() {
    // Set the target date to November 11, 2023
    const targetDate = new Date("11.10.2023");
    targetDate.setHours(21);

    // Get the current date and time
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const difference = targetDate - currentDate;

    if (difference < 0) return { hours: 0, minutes: 0, seconds: 0 };

    // Calculate hours, minutes, and seconds
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Return the result as an object
    return {
      hours,
      minutes,
      seconds,
    };
  }

  const [count, setCount] = useState(calculateTimeUntilNovember11());

  useEffect(() => {
    const id = setInterval(() => {
      setCount(calculateTimeUntilNovember11());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      {count.hours}:{count.minutes}:{count.seconds}
    </div>
  );
};
export default Countdown;
