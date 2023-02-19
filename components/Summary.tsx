import Field from "./Field";

const Summary = () => {
  return (
    <div className="px-5 space-y-6 flex flex-col md:w-[21rem] pt-5 pb-10">
      <h1 className="text-lg">Summary</h1>
      <div className="space-y-3 pb-4">
        <Field
          bgColor="bg-lightRed/10"
          resultColor="text-lightRed"
          icon="/icon-reaction.svg"
          name="Reaction"
          result={80}
        />
        <Field
          bgColor="bg-orangeyYellow/10"
          resultColor="text-orangeyYellow"
          text-color="bg-orangeyYellow"
          icon="/icon-memory.svg"
          name="Memory"
          result={92}

        />
        <Field
          bgColor="bg-greenTeal/10"
          resultColor="text-greenTeal"
          icon="/icon-verbal.svg"
          name="Verbal"
          result={61}
        />
        <Field
          bgColor="bg-cobaltBlue/10"
          resultColor="text-cobaltBlue"
          icon="/icon-visual.svg"
          name="Visual"
          result={72}
        />
      </div>
      <button className="bg-darkGrayBlue p-3 text-white rounded-full text-lg hover:bg-gradient-to-b hover:from-lightSlateBlue hover:to-lightRoyalBlue">Continue</button>
    </div>
  );
};

export default Summary;
