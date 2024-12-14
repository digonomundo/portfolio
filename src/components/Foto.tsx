import Image from "next/image";

const Fotoapr: React.FC = () => {
  return (
    <div className="w-[298px] h-[298px] xl:w-[500px] xl:h-[498px] largaco:w-[650px] largaco:h-[650px] relative">
      <Image
        src="/assets/eu.svg"
        priority
        quality={100}
        fill
        alt="minha foto"
        className="object-contain"
      />
    </div>
  );
};

export default Fotoapr;
