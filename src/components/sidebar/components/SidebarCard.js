import {
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowBackIcon,SettingsIcon } from "@chakra-ui/icons";
import React from "react";

export default function SidebarDocs() {
  const bgColor = "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)";
  const borderColor = useColorModeValue("white", "navy.800");

  return (
    <Flex
      justify='center'
      direction='column'
      borderRadius='30px'
      position='relative'>
      <Flex
        direction='column'
        mb='12px'
        px='15px'
        pt='55px'>
        <Text
          fontSize={{ base: "lg", xl: "14px" }}
          color='#98A2B3'
          lineHeight='150%'
          px='15px'
          mt="10px"
          mb='6px'>
          Preferences
        </Text>
        <div style={{display:'flex',alignItems:'center',marginLeft:'20px'}}>
          <SettingsIcon style={{color:'#98A2B3'}} /><Text
            fontSize='18px'
            color='#98A2B3'
            fontWeight='500'
            px='10px'
            mb='6px'>
            Sozlamalar
          </Text>
        </div>
        <div style={{display:'flex',alignItems:'center',marginLeft:'20px'}}>
          <ArrowBackIcon style={{color:'#98A2B3'}} /><Text
            fontSize='18px'
            color='#98A2B3'
            fontWeight='500'
            px='10px'
            mb='6px'>
            Chiqish
          </Text>
        </div>
      </Flex>
    </Flex>
  );
}
