import React from 'react';
import { Box, Text, Button, Image, useToast } from '@chakra-ui/react';
import FolderIcon from '../assets/folder-icon.svg';
import InputFile from './InputFile';
import './style.css';

const DropZone = () => {
  const preventTab = (e) => {
    e.preventDefault()
  }

  const toast = useToast();

  const dropZoneFn = (event) =>{
    event.preventDefault();

    if(event){
      const file = event.dataTransfer.files[0];
      const reader = new FileReader();
  
      reader.onload = function(e) {
        const fileData = e.target.result; // The file data
  
        // Do something with the file data here
        // console.log(fileData);
      };
  
      reader.readAsDataURL(file);
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
    <Box width='35rem' maxW='3xl' 
        bg='white' borderRadius={14}
        padding={6} m='auto'   >

        <Box maxW='3xl' border='3px dashed'
             borderColor='blue.200' textAlign='center' borderRadius={14} bg='blue.50' 
            padding={4}  onDragOver={ preventTab } onDrop={ dropZoneFn } >

            <Image src={ FolderIcon } mx='auto' mb='1' alt="folder-ico" />

            <Text fontWeight='450'>
                Drag your documents, photos or <br />
                videos here to start uploading.
            </Text>

            <Text fontWeight='550' my='3'>
                OR
            </Text>
 
            <InputFile />
        </Box>
    </Box>
  )
}

export default DropZone;