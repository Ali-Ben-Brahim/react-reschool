import React, {useState} from "react";
import { PageBody, PageHeader } from "../../components";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {Box} from '@mui/material';
import Tableetablissement from "../../components/etablissement/tableetablissement";
import Tableblocetab from "../../components/etablissement/tableblocetab";
import Tableetage from "../../components/etablissement/tableetage";
import TableBlocPoubelles from "../../components/etablissement/tableblocPoubelles";



const Posts = () => {
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {  setValue(newValue);};
  
  
  return (
    
    <React.Fragment>
      <TabContext value={value}>
      <PageHeader >
      
      <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Établissement" value="1" />
              <Tab label="Blocs Etablissement" value="4" />
              <Tab label="Etages Etablissement" value="5" />
              <Tab label="Blocs Poubelles" value="6" />
              <Tab label="Poubelles" value="7" />
            </TabList>
        </PageHeader>
      <PageBody style={{ display: "flex" }}>
        <Box
          flexGrow='1'
          width='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'>
<TabPanel value="1"><Tableetablissement/></TabPanel>
          <TabPanel value="4"><Tableblocetab/></TabPanel>
          <TabPanel value="5"><Tableetage/></TabPanel>
          <TabPanel value="6"><TableBlocPoubelles/></TabPanel>
          <TabPanel value="7"></TabPanel>
        </Box>
        
      </PageBody>
      </TabContext>
    </React.Fragment>
    

  );
};

export default Posts;
