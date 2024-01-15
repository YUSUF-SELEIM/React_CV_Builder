import { Button } from 'flowbite-react';

export default function ClearResume(){
    return(
        <div className='w-full mt-3 bg-gray-50 p-3 shadow-lg rounded-lg flex justify-center'>
            <Button color="failure" className='p-.2'>Clear Resume</Button>
        </div>
    );
}