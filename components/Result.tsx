import React from "react";

const Result = () => {
  return (
    <div className="bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue md:w-[20rem] rounded-b-[50px] md:rounded-3xl flex flex-col items-center text-center space-y-5 p-5 text-paleBlue/60">
      <p className="font-medium">Your Result</p>
      <div className="flex flex-col bg-gradient-to-b from-violetBlue/100 to-persianBlue rounded-full h-40 w-40 justify-center items-center">
        <h1 className="text-white text-6xl font-extrabold">76</h1>
        <p className="">of 100</p>
      </div>
      <h1 className="text-2xl text-white">Great</h1>
      <p className="px-7">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default Result;
