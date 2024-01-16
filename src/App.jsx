import SideBar from "./components/SideBar.jsx";
import ClearResume from "./components/ClearResume.jsx";
import Resume from "./components/Resume.jsx";
import ContentRenderer from "./components/ContentRenderer.jsx";
import CustomizeRenderer from "./components/CustomizeRenderer.jsx";
import { useState } from "react";
import LoadExample from "./components/loadExample.jsx";

export default function App() {
  const [activeTab, setActiveTab] = useState("0");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  // State for Education component
  const [educationSections, setEducationSections] = useState([
    // Initial section
    {
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    },
  ]);

  const [experienceSections, setExperienceSections] = useState([
    // Initial section
    {
      company: "",
      title: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    },
  ]);

  const [color, setColor] = useState("#FFF");
  const [textColor, setTextColor] = useState("#000");
  const [fontFamily, setFontFamily] = useState("sans-serif");



  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNoChange = (e) => {
    setPhoneNo(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  // Function to add a new section to educationSections
  const handleAddEducationSection = () => {
    setEducationSections((prevSections) => [
      ...prevSections,
      {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
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

  // Function to add a new section to educationSections
  const handleAddExperienceSection = () => {
    setExperienceSections((prevExSections) => [
      ...prevExSections,
      {
        company: "",
        title: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
      },
    ]);
  };

  // Function to delete a section from educationSections
  const handleDeleteExperienceSection = (index) => {
    setExperienceSections((prevExSections) => {
      const newSections = [...prevExSections];
      newSections.splice(index, 1);
      return newSections;
    });
  };

  // Function to handle input change in an education section
  const handleExperienceInputChange = (index, field, value) => {
    setExperienceSections((prevExSections) => {
      const newSections = [...prevExSections];
      newSections[index][field] = value;
      return newSections;
    });
  };

  const handleColorChange = (e) =>{
    setColor(e.target.value);
  }
  const handleTextColorChange = (e) =>{
    setTextColor(e.target.value);
  }
  const handleFontFamilyChange = (e) =>{
    setFontFamily(e.target.value);
  }

  //populate the cv with fake data
  const handleDebugData = () => {
    // Populate the state with debug data
    setName("Yusuf Abdelfattah");
    setEmail("yusufabdelfattah207@gmailcom");
    setPhoneNo("+201210130805");
    setAddress("Alexandria,Egypt");
    setEducationSections(() => [
      {
        school: "Pharos University in Alexandria",
        degree: "Computer Science",
        startDate: "01-10-2021",
        endDate: "present",
        location: "Alexandria,Egypt",
      },
    ]);
    setExperienceSections(() => [
      {
        company: "FakeSolutions",
        title: "Junior FullStack Developer",
        startDate: "01-07-2023",
        endDate: "01-08-2023",
        location: "CA,USA",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, qui. Quasi quis, dolorem veritatis numquam culpa magnam dolores, soluta eveniet quidem enim quisquam unde hic error nobis esse veniam deserunt quaerat nemo nesciunt blanditiis adipisci. Non deleniti recusandae, unde earum optio rem ullam similique autem praesentium itaque iure aperiam temporibus molestiae fugit facere vitae quia nesciunt quaerat in natus beatae corrupti debitis excepturi est! Eveniet distinctio laborum odit quas asperiores, facere quidem. Natus aliquam debitis excepturi cumque voluptas soluta ab alias possimus fugiat perspiciatis delectus, impedit facere earum praesentium ducimus fugit optio iure at incidunt dolorum amet voluptatibus assumenda cupiditate?",
      },
    ]);
  };

  const handleClearResume = () => {
    setName("");
    setEmail("");
    setPhoneNo("");
    setAddress("");
    setEducationSections(() => [
      {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      },
    ]);
    setExperienceSections(() => [
      {
        company: "",
        title: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
      },
    ]);
  };
  return (
    <div className="flex flex-col gap-5 md:flex-row w-full h-full bg-gray-200">
      <div className="flex flex-col h-full md:m-3">
        <SideBar handleTabClick={handleTabClick}></SideBar>
        <div className="h-full mt-3 bg-gray-50 shadow-lg rounded-lg flex flex-col justify-between items-center space-y-4 py-5">
          <ClearResume handleClearResume={handleClearResume}></ClearResume>
          <LoadExample handleDebugData={handleDebugData}></LoadExample>
        </div>
      </div>
      <div className="flex flex-col w-full  gap-5 md:w-[25%]">
        {activeTab === "0" && (
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
            exSections={experienceSections}
            onAddExSection={handleAddExperienceSection}
            onDeleteExSection={handleDeleteExperienceSection}
            onInputChangeEx={handleExperienceInputChange}
          >
            Content
          </ContentRenderer>
        )}
        {activeTab === "1" && <CustomizeRenderer
         handleColorChange={handleColorChange}
         handleTextColorChange={handleTextColorChange}
         handleFontFamilyChange = {handleFontFamilyChange}
         ></CustomizeRenderer>}
      </div>
      <div className="w-full h-full md:h-[1122.520px] md:w-[793.688px] md:my-3 md:mr-5">
        <Resume
          name={name}
          email={email}
          phoneNo={phoneNo}
          address={address}
          sections={educationSections}
          exSections={experienceSections}
          color={color}
          textColor = {textColor}
          fontFamily={fontFamily}
        ></Resume>
      </div>
    </div>
  );
}
