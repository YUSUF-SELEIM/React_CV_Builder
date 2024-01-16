/* eslint-disable react/prop-types */
import { Label, Radio } from 'flowbite-react';


export default function CustomizeRenderer({
  handleColorChange,
  handleTextColorChange,
  handleFontFamilyChange
}) {
  return (
    <>
      <ColorChanger
        handleColorChange={handleColorChange}
        handleTextColorChange={handleTextColorChange}
      ></ColorChanger>
      <FontChanger handleFontFamilyChange={handleFontFamilyChange}></FontChanger>
    </>
  );
}

function ColorChanger({ handleColorChange, handleTextColorChange }) {
  return (
    <div className="flex flex-col bg-gray-50 p-3 rounded-lg shadow-lg max-w-[100%] gap-3 mt-3">
      <h1 className="font-bold text-xl">Color</h1>
      <div className="flex justify-between">
        <div>Accent Color</div>
        <input
          type="color"
          className="rounded-full h-8 w-8"
          onChange={(e) => handleColorChange(e)}
        />
      </div>
      <div className="flex justify-between">
        <div>Text Color</div>
        <input
          type="color"
          className="rounded-full h-8 w-8"
          onChange={(e) => handleTextColorChange(e)}
        />
      </div>
    </div>
  );
}
function FontChanger({handleFontFamilyChange}) {
    return (
        <div className="flex flex-col bg-gray-50 p-3 rounded-lg shadow-lg max-w-[100%] gap-3 mt-3">
          <h1 className="font-bold text-xl">Font</h1>
          <fieldset className="flex max-w-md flex-col gap-4">
            <div className="flex items-center gap-2">
              <Radio
                id="sans-serif"
                name="fonts"
                value="sans-serif"
                defaultChecked
                onChange={handleFontFamilyChange}
              />
              <Label htmlFor="sans-serif">sans-serif</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                id="roboto"
                name="fonts"
                value="Roboto"
                onChange={handleFontFamilyChange}
              />
              <Label htmlFor="roboto">roboto</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                id="mono"
                name="fonts"
                value="Space mono"
                onChange={handleFontFamilyChange}
              />
              <Label htmlFor="mono">mono</Label>
            </div>
          </fieldset>
        </div>
      );
    }