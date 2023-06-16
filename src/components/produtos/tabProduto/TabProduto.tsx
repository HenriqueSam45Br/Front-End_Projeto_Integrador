import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaProduto from '../listaProduto/ListaProduto';
import './TabProduto.css';
import Sobre from '../../../paginas/sobre/Sobre';


function TabProduto() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" className='tabProduto'>
        </AppBar>
        <TabPanel value="1" >
          <Box justifyContent="center">
            <ListaProduto exibirBotoes={false} />
          </Box>
        </TabPanel>
        <TabPanel value="2">
        <Sobre/>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabProduto;
