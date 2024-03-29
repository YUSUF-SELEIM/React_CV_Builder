/* eslint-disable react/prop-types */
import { Label, TextInput } from "flowbite-react";
import { Accordion, Button, Textarea } from "flowbite-react";

export default function ContentRenderer({
  handleNameChange,
  handleEmailChange,
  handlePhoneNoChange,
  handleAddressChange,
  name,
  email,
  phoneNo,
  address,
  sections,
  onAddSection,
  onDeleteSection,
  onInputChange,
  exSections,
  onAddExSection,
  onDeleteExSection,
  onInputChangeEx,
}) {
  return (
    <>
      <PersonalDetails
        handleNameChange={handleNameChange}
        handleEmailChange={handleEmailChange}
        handlePhoneNoChange={handlePhoneNoChange}
        handleAddressChange={handleAddressChange}
        name={name}
        email={email}
        phoneNo={phoneNo}
        address={address}
      ></PersonalDetails>
      <Education
        sections={sections}
        onAddSection={onAddSection}
        onDeleteSection={onDeleteSection}
        onInputChange={onInputChange}
      ></Education>
      <Experience
        exSections={exSections}
        onAddExSection={onAddExSection}
        onDeleteExSection={onDeleteExSection}
        onInputChangeEx={onInputChangeEx}
      ></Experience>
    </>
  );
}

function PersonalDetails({
  handleNameChange,
  handleEmailChange,
  handlePhoneNoChange,
  handleAddressChange,
  name,
  email,
  phoneNo,
  address,
}) {
  return (
    <div className="flex flex-col bg-gray-50 p-3 rounded-lg shadow-lg max-w-[100%] gap-3 mt-3">
      <h1 className="font-bold text-xl">Personal Details</h1>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Full Name" />
        </div>
        <TextInput
          id="name"
          type="text"
          placeholder="Yusuf Abdelfattah"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput
          id="email"
          type="email"
          placeholder="name@green.com"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phoneNo" value="Phone Number" />
        </div>
        <TextInput
          id="phoneNo"
          type="text"
          placeholder="+201210130805"
          value={phoneNo}
          onChange={handlePhoneNoChange}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="address" value="Address" />
        </div>
        <TextInput
          id="address"
          type="text"
          placeholder="City,Country"
          value={address}
          onChange={handleAddressChange}
          required
        />
      </div>
    </div>
  );
}

function Education({ sections, onAddSection, onDeleteSection, onInputChange }) {
  return (
    <Accordion className="bg-gray-50 p-3  rounded-lg shadow-lg  gap-3 ">
      <Accordion.Panel>
        <Accordion.Title className="text-xl text-black font-bold">
          Education
        </Accordion.Title>
        <Accordion.Content className="space-y-2 px-0">
          {sections.map((section, index) => (
            <Accordion key={index}>
              <Accordion.Panel>
                <Accordion.Title className="text-l text-black font-bold">
                  {section.school}
                </Accordion.Title>
                <Accordion.Content className="px-3 gap-2">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor={`school-${index}`} value="School" />
                    </div>
                    <TextInput
                      id={`school-${index}`}
                      type="text"
                      placeholder="PUA"
                      value={section.school}
                      onChange={(e) =>
                        onInputChange(index, "school", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor={`degree-${index}`} value="Degree" />
                    </div>
                    <TextInput
                      id={`degree-${index}`}
                      type="text"
                      placeholder="Bachelor's Degree"
                      value={section.degree}
                      onChange={(e) =>
                        onInputChange(index, "degree", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label
                        htmlFor={`start-date-${index}`}
                        value="Start Date"
                      />
                    </div>
                    <TextInput
                      id={`start-date-${index}`}
                      type="date"
                      value={section.startDate}
                      onChange={(e) =>
                        onInputChange(index, "startDate", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor={`end-date-${index}`} value="End Date" />
                    </div>
                    <TextInput
                      id={`end-date-${index}`}
                      type="date"
                      value={section.endDate}
                      onChange={(e) =>
                        onInputChange(index, "endDate", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor={`location-${index}`} value="Location" />
                    </div>
                    <TextInput
                      id={`location-${index}`}
                      type="text"
                      placeholder="Alexandria,Egypt"
                      value={section.location}
                      onChange={(e) =>
                        onInputChange(index, "location", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="flex space-x-3 py-3">
                    <Button
                      color="red"
                      pill
                      onClick={() => onDeleteSection(index)}
                    >
                      Delete
                    </Button>
                    {/* <Button color="light" pill>
                      Cancel
                    </Button>
                    <Button color="light" pill>
                      Save
                    </Button> */}
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          ))}
          <div className="flex justify-center pt-3">
            <Button color="light" pill onClick={onAddSection}>
              Add
            </Button>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

function Experience({
  exSections,
  onAddExSection,
  onDeleteExSection,
  onInputChangeEx,
}) {
  return (
    <Accordion className="bg-gray-50 p-3  rounded-lg shadow-lg  gap-3 ">
      <Accordion.Panel>
        <Accordion.Title className="text-xl text-black font-bold">
          Experience
        </Accordion.Title>
        <Accordion.Content className="space-y-2 px-0">
          {exSections.map((exSection, index) => (
            <Accordion key={index}>
              <Accordion.Panel>
                <Accordion.Title className="text-l text-black font-bold">
                  {exSection.company}
                </Accordion.Title>
                <Accordion.Content className="px-3 gap-2">
                  <div>
                    <div className="mb-2 block">
                      <Label
                        htmlFor={`company-${index}`}
                        value="Company Name"
                      />
                    </div>
                    <TextInput
                      id={`company-${index}`}
                      type="text"
                      placeholder="Google"
                      value={exSection.company}
                      onChange={(e) =>
                        onInputChangeEx(index, "company", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label
                        htmlFor={`title-${index}`}
                        value="Position Title"
                      />
                    </div>
                    <TextInput
                      id={`title-${index}`}
                      type="text"
                      placeholder="Junior Developer"
                      value={exSection.title}
                      onChange={(e) =>
                        onInputChangeEx(index, "title", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label
                        htmlFor={`start-date-${index}`}
                        value="Start Date"
                      />
                    </div>
                    <TextInput
                      id={`start-date-${index}`}
                      type="date"
                      value={exSection.startDate}
                      onChange={(e) =>
                        onInputChangeEx(index, "startDate", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor={`end-date-${index}`} value="End Date" />
                    </div>
                    <TextInput
                      id={`end-date-${index}`}
                      type="date"
                      value={exSection.endDate}
                      onChange={(e) =>
                        onInputChangeEx(index, "endDate", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor={`location-${index}`} value="Location" />
                    </div>
                    <TextInput
                      id={`location-${index}`}
                      type="text"
                      placeholder="Alexandria,Egypt"
                      value={exSection.location}
                      onChange={(e) =>
                        onInputChangeEx(index, "location", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="max-w-md">
                    <div className="mb-2 block">
                      <Label
                        htmlFor={`description-${index}`}
                        value="Description"
                      />
                    </div>
                    <Textarea
                      id={`description-${index}`}
                      placeholder="Write Your Accomplishments"
                      value={exSection.description}
                      onChange={(e) =>
                        onInputChangeEx(index, "description", e.target.value)
                      }
                      required
                      rows={4}
                    />
                  </div>

                  <div className="flex space-x-3 py-3">
                    <Button
                      color="red"
                      pill
                      onClick={() => onDeleteExSection(index)}
                    >
                      Delete
                    </Button>
                    {/* <Button color="light" pill>
                      Cancel
                    </Button>
                    <Button color="light" pill>
                      Save
                    </Button> */}
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          ))}
          <div className="flex justify-center pt-3">
            <Button color="light" pill onClick={onAddExSection}>
              Add
            </Button>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
