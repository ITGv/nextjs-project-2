import Image from "next/image";

export default function Footer() {
  return (
    <div className="relative m-auto flex w-4/6 bottom-5 rounded-2xl gap-8 bg-red-500 items-center justify-center">
      <Image
        className="m-5"
        src="/img/call.png"
        width={40}
        height={40}
        alt="call"
      />
      <div className="flex flex-col leading-4 w-[500px]">
        <label className="text-white">GET A FREE CONSULATION</label>
        <label className="text-white text-xl">987 233 0000</label>
      </div>
      <label className=" text-white leading-normal text-sm">
        Discover beauty on Pinterest for everyday style, special occasions and
        skincare essentials. Approach the day face-forward with tips
      </label>
      <button
        type="submit"
        className="bg-white w-96 h-9 rounded-2xl m-5 text-sm"
      >
        MAKE APPOINTMENT
      </button>
      </div>
  );
}
