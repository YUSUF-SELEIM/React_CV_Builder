import { Sidebar } from 'flowbite-react';
import { HiDocumentText, HiCog } from 'react-icons/hi';

'use client';

export default function SideBar(){
  return (
    <Sidebar className='m-3 shadow-lg'>
      <Sidebar.Logo href="#" img="./src/assets/resume.png" imgAlt="Flowbite logo">
       CV Builder
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiDocumentText}>
            Content
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiCog}>
            Customize
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

