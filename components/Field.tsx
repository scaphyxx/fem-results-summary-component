import Image from "next/image";

type Props = {
  bgColor: string;
  resultColor: string;
  icon: string;
  name: string;
  result: number;
};

const Field = ({ bgColor, resultColor, icon, name, result }: Props) => {
  return (
    <div className={`${bgColor} p-3 rounded-xl flex justify-between`}>
      <div className="flex gap-5">
        <Image src={icon} alt="" width={24} height={24} />
        <p className={`${resultColor}`}>{name}</p>
      </div>
      <p>
        {result}<span className="text-darkGrayBlue/60"> / 100</span>
      </p>
    </div>
  );
};

export default Field;
