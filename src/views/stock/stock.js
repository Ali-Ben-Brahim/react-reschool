import React from "react";
import { Box,Typography } from "@material-ui/core";
import { PageBody, PageHeader } from "../../components";
import TableStockPoubelles from "../../components/stock poubelles/stock-poubelle";
const Stock = () => {
  
  return (
    <React.Fragment>
      <PageBody style={{ display: "flex" }}>
        <Box
          flexGrow='1'
          width={"100%"}
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          
          >
         <TableStockPoubelles/>  
          
    
        </Box>
      </PageBody>
    </React.Fragment>
  );
};

export default Stock;
