/* eslint-disable react/prop-types */
import { Button } from "flowbite-react";

export default function ClearResume({ handleClearResume }) {
  return (
    <Button color="failure" onClick={handleClearResume}>
      Clear Resume
    </Button>
  );
}
