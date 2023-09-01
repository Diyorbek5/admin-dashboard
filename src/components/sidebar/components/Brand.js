import React from "react";
// import logo2 from '../../../assets/img/'

// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <>
      <Flex  direction='column'>
        <div  style={{display:'flex',alignItems:'center',marginLeft:'20px',marginBottom:'20px'}}>
        {/* <img src={logo2}/> */}
        <Text style={{marginLeft:'10px',color: '#1C1E23',fontSize:'28px',fontWeight:'700'}} >DASHBOARD</Text>
        </div>
      </Flex>
    </>
  );
}

export default SidebarBrand;
