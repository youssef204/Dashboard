import React from 'react'
import {Box , ThemeProvider} from '@mui/material';
import { IServer } from '@/types/server';
import Button from '@mui/material/Button';
import ShowDetails from './ShowDetails';
import SentimentVeryDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';

interface allServersProps {
  servers : IServer[]
}

const ShowStatus: React.FC<allServersProps>  = ({servers}) => {
  return (
    <div>
      {
        servers.map(server =>(
        <div className=' w-auto mx-48 border-solid border-2 border-green-300 rounded-2xl mb-10' key={server.ip}>
          <h1 className='font-bold text-red-500 my-3'> {server.name.toUpperCase()}</h1>
          <div className='flex mb-10'>
          <ThemeProvider
              theme={{
                palette: {
                  primary: {
                    main: '#007FFF',
                    dark: '#FF7700',
                  },
                },
              }}
            >
        {   
          server.states.split("").map(c => (
              c==="1" ?
          (<Box sx={{ bgcolor: 'primary.main', width: 30, height: 70 , marginLeft: 3}} />)
          :
          (<Box sx={{ bgcolor: 'primary.dark', width: 30, height: 70 , marginLeft: 3}} />)
          ))
        }
        </ThemeProvider>
        <div className= {server.states.charAt(server.states.length-1) === '1' ? 'ml-auto mr-5 flex items-center text-green-500' 
          : 'ml-auto mr-5 flex items-center text-red-700'
        }>
          <h2> {server.states.charAt(server.states.length-1) === '1' ? "Server is currently running" : "Server is currently down"}</h2>
          {server.states.charAt(server.states.length-1) === '1' ? <SentimentVerySatisfiedOutlinedIcon /> :<SentimentVeryDissatisfiedOutlinedIcon />}
        </div>
        <div className='ml-auto mr-5 flex items-center'> 
        <ShowDetails server={server}/>
        </div>
        </div> 
    </div>
        ))
      }
    </div>
  )
}

export default ShowStatus;