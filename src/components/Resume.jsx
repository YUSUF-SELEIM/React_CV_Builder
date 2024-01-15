/* eslint-disable react/prop-types */
import "../index.css";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

export default function Resume({ name, email, phoneNo, address, sections }) {
  return (
    <div className="h-full w-full bg-white shadow-md flex flex-col">
      <header className="h-[15%] flex flex-col items-center justify-center text-4xl font-bold p-10 md:p-0">
        {name}
        <div className="w-full mt-5 flex justify-center space-x-4 text-sm font-normal">
          {email && (
            <div className="flex items-center gap-2">
              <MdEmail />
              {email}
            </div>
          )}
          {phoneNo && (
            <div className="flex items-center gap-2">
              <MdCall />
              {phoneNo}
            </div>
          )}
          {address && (
            <div className="flex items-center gap-2">
              <MdLocationOn />
              {address}
            </div>
          )}
        </div>
      </header>
      <section className="flex flex-col mt-5 px-14">
        <div className="text-xl font-bold flex justify-center bg-slate-200 w-full">
          <h2>Education</h2>
        </div>
        {sections.map((section, index) => (
          <div key={index} className="my-4 flex justify-between px-4">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                <span className="text-lg font-bold">{section.degree}</span>
                <span className="text-lg italic">{section.school}</span>
              </div>
              <div>
                <span className="text-xs font-light">{section.location}</span>
              </div>
            </div>

            <div className="flex flex-col text-left text-sm">
              <span className="italic"> From </span>
              <span className="font-bold">{section.startDate}</span>
              <span className="italic"> To </span>
              <span className="font-bold">{section.endDate}</span>
            </div>
          </div>
        ))}
      </section>{" "}
    </div>
  );
}
