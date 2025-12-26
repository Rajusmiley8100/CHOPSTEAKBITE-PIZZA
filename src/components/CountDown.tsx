"use client";

import Countdown, { CountdownRenderProps } from "react-countdown";

const endingDate = new Date("2025-12-24T23:59:59");

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: CountdownRenderProps) => {
  if (completed) {
    return (
      <span className="text-green-500 text-3xl font-bold">
        Offer Ended 🎉
      </span>
    );
  }

  return (
    <div className="flex gap-4 text-yellow-300 font-bold text-5xl">
      <span>{days}d</span>
      <span>{hours}h</span>
      <span>{minutes}m</span>
      <span>{seconds}s</span>
    </div>
  );
};

const CountDown = () => {
  return <Countdown date={endingDate} renderer={renderer} />;
};

export default CountDown;
