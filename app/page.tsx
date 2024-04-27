"use client";
import Box from '@mui/material/Box';
import ShowStatus from './components/ShowStatus';
import { getAllServers } from '@/api';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { use } from 'react';
import Page from './login/page'
import { useSearchParams } from 'next/navigation'
import { ThemeProvider } from '@emotion/react';
import Stack from '@mui/material/Stack';

export default async function Home() {
  const router = useRouter();
  const searchPar = useSearchParams()
  const loggedin = searchPar.has("loggedin") ? searchPar.get("loggedin") === "true" ? true : false : false
  const servers = await getAllServers();
  if(!searchPar.has("loggedin"))
    console.log("here")
  console.log(servers);
  console.log(servers[0].states);
  return (
    <main className="text-center mb-10">
      <div>
        {loggedin ?
      <><Navbar loggedin={loggedin}/><div>
          <h1 className='font-bold text-5xl my-5'> LIST OF ALL SERVERS </h1>
          <div className='flex justify-center items-center mb-10 gap-10'>
          <Stack spacing={2}>
            <Box sx={{ bgcolor: '#007FFF', width: 30, height: 70 , marginLeft: 3}} />
            <h2 className='fontweight-bold text-green-500'> UP</h2>
          </Stack>
          <Stack spacing={2}>
            <Box sx={{ bgcolor: '#FF7700', width: 30, height: 70 , marginLeft: 3}} />
            <h2 className='fontweight-bold text-red-500'> DOWN</h2>
          </Stack>
          </div>
            <ShowStatus servers={servers} />
          </div></>
      : <Navbar loggedin={loggedin}/>
}
      </div>
    </main>
  );
}
