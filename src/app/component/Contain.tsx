import React from "react";
import Image from "next/image";
import ava from "../../../public/img/ava.jpg";
import { Data } from "./data";

function ContentRight(props: any) {
  return (
    <div className="flex flex-col items-center rounded-lg text-sm bg-red-500 text-white w-36 h-36 justify-center text-center">
      <Image src={props.image} height={40} width={40} alt="icon" />
      <label>{props.title}</label>
    </div>
  );
}
export default function Contain() {
  return (
    <>
      <div className="flex h-96 w-full flex-col relative object-cover bg-center bg-no-repeat bg-[url('/img/graphic-designers-meeting.png')] before:absolute before:opacity-80 before:bg-gray-800 before:inset-0">
        <div className="z-10 h-full flex flex-col justify-center gap-8 items-center">
          <label className="flex border bg-white rounded-2xl text-sm w-40 h-9 items-center justify-center">
            DIGITAL AGENCY
          </label>
          <h1 className="w-96 text-white text-4xl text-center">
            <span className="text-red-500">Digital</span> Agency You Can Rely
            Upon!
          </h1>
          <h3 className=" text-white text-center w-[450px]">
            aaaaaaaaaa aaaas aaaa aaaas? aaaaaaaa aaaas aaaaaaaas aaaaaaaa
            aaaaaas aaaas, aaaas aaaaaaaa aaaaaaaaaa
          </h3>
          <div className="gap-4 flex flex-row">
            <button
              type="submit"
              className="bg-red-500 text-white text-center w-40 h-9 justify-center items-center rounded-2xl"
            >
              {" "}
              DISCOVER MORE{" "}
            </button>
            <button
              type="submit"
              className=" bg-white text-center w-40 h-9 justify-center items-center rounded-2xl"
            >
              {" "}
              HIRE US NOW{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="flex h-[386px] w-full justify-center relative object-fill bg-center bg-no-repeat bg-[url('/img/gray.jpg')] before:absolute before:opacity-80 before:bg-gray-950 before:inset-0">
        <div className="flex flex-col z-10 justify-center items-center ">
          <div className="gap-4 flex flex-col  ">
            <h4 className="flex bg-white rounded-2xl text-sm w-40 h-9 items-center justify-center">
              SERVISE LIST
            </h4>
            <h1 className="w-96  text-white text-4xl">
              <span className="text-red-500">Digital</span> Agency You Can Rely
              Upon!
            </h1>
            <h3 className=" text-white w-[450px]">
              aaaaaaaaaa aaaas aaaa aaaas? aaaaaaaa aaaas aaaaaaaas aaaaaaaa
              aaaaaas aaaas, aaaas aaaaaaaa aaaaaaaaaa
            </h3>
            <h3 className=" text-white ">
              aaaaaaaaaa aaaas aaaa aaaas? aaaaaaaa aaaas aaaaaaaas
            </h3>
            <h3 className=" text-white ">
              aaaaaaaaaa aaaas aaaa aaaas? aaaaaaaa aaaas aaaaaaaas
            </h3>
            <form className="flex gap-6 items-center">
              <Image
                className="h-12 w-12 border-2 border-red-700 rounded-full "
                src={ava}
                width="80"
                height="80"
                alt="ava"
              />
              <div className=" leading-normal">
                <h2 className="text-white">George Smith</h2>
                <h4 className="flex flex-col text-white">CEO, Director</h4>
              </div>
              <div className="h-full border-gray-600 border"></div>
              <button
                type="submit"
                className="text-white rounded-2xl items-center text-center w-40 h-9 bg-red-500"
              >
                MORE SERVICES
              </button>
            </form>
          </div>
        </div>
        <div className="z-10 w-80 grid grid-cols-2 m-4 gap-8 place-content-center">
          {Data.map((item) => (
            <ContentRight
              key={item.id}
              title={item.title}
              image={item.image}
            ></ContentRight>
          ))}
        </div>
      </div>
    </>
  );
}
