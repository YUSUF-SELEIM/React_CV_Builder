import SideBar from "./components/SideBar.jsx";
import ClearResume from "./components/ClearResume.jsx";
import Resume from "./components/Resume.jsx";
import ContentRenderer from "./components/ContentRenderer.jsx";
import CustomizeRenderer from "./components/CustomizeRenderer.jsx";
import { useState } from 'react';

export default function App() {
    const [activeTab, setActiveTab] = useState('0');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [address, setAddress] = useState('');
  // State for Education component
  const [educationSections, setEducationSections] = useState([
    // Initial section
    {
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
    },
  ]);
    const handleTabClick = (tabId) => {
      setActiveTab(tabId);
    };

    const handleNameChange = (e) => {
      setName(e.target.value);
    }

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    }

    const handlePhoneNoChange = (e) => {
      setPhoneNo(e.target.value);
    }

    const handleAddressChange = (e) => {
      setAddress(e.target.value);
    }


  // Function to add a new section to educationSections
  const handleAddEducationSection = () => {
    setEducationSections((prevSections) => [
      ...prevSections,
      {
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
      },
    ]);
  };

  // Function to delete a section from educationSections
  const handleDeleteEducationSection = (index) => {
    setEducationSections((prevSections) => {
      const newSections = [...prevSections];
      newSections.splice(index, 1);
      return newSections;
    });
  };

  // Function to handle input change in an education section
  const handleEducationInputChange = (index, field, value) => {
    setEducationSections((prevSections) => {
      const newSections = [...prevSections];
      newSections[index][field] = value;
      return newSections;
    });
  };
    return (
        <div className="flex flex-col  gap-5 md:flex-row w-full h-full bg-gray-200">
            <SideBar handleTabClick={handleTabClick}></SideBar>
            <div className="flex flex-col w-full  gap-5 md:w-[25%]">
                <ClearResume></ClearResume>
                {activeTab === '0' && (
                    <ContentRenderer
                        name={name}
                        email={email}
                        phoneNo={phoneNo}
                        address={address}
                        handleNameChange={handleNameChange}
                        handleEmailChange={handleEmailChange}
                        handlePhoneNoChange={handlePhoneNoChange}
                        handleAddressChange={handleAddressChange}
                        sections={educationSections}
                        onAddSection={handleAddEducationSection}
                        onDeleteSection={handleDeleteEducationSection}
                        onInputChange={handleEducationInputChange}
                    >Content</ContentRenderer>
                )}
                {activeTab === '1' && <CustomizeRenderer>Customize</CustomizeRenderer>}
            </div>
            <div className="w-full h-full md:h-[1122.520px] md:w-[793.688px] md:my-3 md:mr-5">
                <Resume
                    name={name}
                    email={email}
                    phoneNo={phoneNo}
                    address={address}
                    sections={educationSections}
                ></Resume>
            </div>
        </div>
    );
}
