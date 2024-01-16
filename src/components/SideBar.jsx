/* eslint-disable react/prop-types */
import { Sidebar } from "flowbite-react";
import { HiDocumentText, HiCog } from "react-icons/hi";

("use client");

export default function SideBar({ handleTabClick }) {
  return (
    <Sidebar className="w-full shadow-lg   ">
      <Sidebar.Logo
        href="#"
        img="./src/assets/resume.png"
        className="justify-center"
      >
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="#"
            icon={HiDocumentText}
            onClick={() => {
              handleTabClick("0");
              console.log("Content is Selected 0");
            }}
          >
            Content
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiCog}
            onClick={() => {
              console.log("Customize is Selected 1");

              handleTabClick("1");
            }}
          >
            Customize
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
