"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Login from './Login';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface props {
  loggedin: boolean;
}

const Navbar: React.FC<props> = ({loggedin})=>{
  const router = useRouter();
  const pathname = '/login'
  const handleClick = async () => {
    router.push(`${pathname}`+'?loggedin=false')
}
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Servers Dashboard
          </Typography>
          <Button onClick={()=>handleClick()} color="inherit">{loggedin? "Logout" : "Login"}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

 export default Navbar;
