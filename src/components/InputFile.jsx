import React from 'react';
import { useToast } from '@chakra-ui/react';

const InputFile = () => {
  const toast = useToast();
  
  function handleFile() {
    const fileInput = document.getElementById('file-picker');
    const file = fileInput.files[0]; // Get the first file from the input
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function(event) {
        const fileData = event.target.result; // The file data
  
        // Do something with the file data here
        // console.log(fileData);
      };
  
      reader.readAsDataURL(file); // Read the file as data URL

      toast({
        title: 'Successfully uploaded',
        description: file.name,
        status: 'success',
        duration: 5000,
        isClosable: false
      });
    }
  }


  return (
    <div>
        <form>
            <label id='file-picker-label' htmlFor="file-picker" >Browse File</label>
            <input type="file" id="file-picker" onChange={ handleFile } />
        </form>
    </div>
  )
}

export default InputFile;