import React from "react";
import { Box, Button, makeStyles } from "@material-ui/core";
import { PageBody, PageHeader } from "../../components";

const useStyles = makeStyles((theme) => ({
  leftSpacing: {
    marginRight: theme.spacing(1),
  },
}));

const Editor = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <PageHeader title='Affecter'>
        <Button
          variant='outlined'
          color='primary'
          className={classes.leftSpacing}>
          Bloc √©tablissement
        </Button>
        <Button
          variant='outlined'
          color='primary'
          className={classes.leftSpacing}>
          √©tage √©tablissement
        </Button>
        <Button
          variant='contained'
          color='primary'
          className={classes.leftSpacing}>
          Poubelle
        </Button>
      </PageHeader>
      <PageBody style={{ display: "flex" }}>
        <Box
          flexGrow='1'
          width='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'>
          <h1>Page Body</h1>
          <p>Page with addditional header content</p>
        </Box>
      </PageBody>
    </React.Fragment>
  );
};

export default Editor;
