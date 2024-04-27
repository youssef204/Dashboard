"use client";
import * as React from 'react';
import { FormControl, useFormControlContext } from '@mui/base/FormControl';
import { Input, inputClasses } from '@mui/base/Input';
import { styled } from '@mui/system';
import clsx from 'clsx';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link';

const Login = ()=> {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();
  const q = { loggedin: true};
  const searchParams = useSearchParams();
  let valid = searchParams.has("valid")?false:true;
  console.log(searchParams.get('loggedin'));
  //console.log("search parameters are ", searchParams);
  const handleNavigation = () => {
    if(email==="you@gmail.com" && password==="1234")
      router.push('/'+'?loggedin=true')
    else {
      valid = false;
      router.push('/login'+'?loggedin=false&valid=false')
    }

}
  console.log("email is : " , email);
  return (
    <div className='flex items-center justify-center text-center mb-10'>
    <Stack spacing={2} className='flex items-stretch items-center justify-center w-1/3 mx-48 border-solid border-2 border-green-300 rounded-2xl my-10 py-10'>
    <FormControl onChange={e => setEmail(e.target.value)} defaultValue="" required>
      <Label>Email</Label>
      <StyledInput placeholder="Write your email here" />
      <HelperText />
    </FormControl>

    <FormControl onChange={e => setPassword(e.target.value)} defaultValue="" required>
      <Label>Password</Label>
      <StyledInput placeholder="Write your password here" />
      <HelperText />
    </FormControl>

    <div className="flex justify-center items-center">
    <Button onClick={()=> handleNavigation()} className='w-1/3 flex justify-center' variant="contained">Login</Button>
    </div>
    {!valid ? <h1 className='fontweight-bold text-red-500'> Wrong email or password </h1> : <></>}
    <div className="flex justify-center items-center gap-5">
    <GoogleIcon className='text-red-500' />
    <FacebookIcon className='text-red-500'/>
    <TwitterIcon className='text-red-500'/>
    </div>
    <h3>don't have account yet ?</h3>
    <Link className='text-blue-500' href={"/register?loggedin=false"}>Register Now</Link>
    </Stack>
    </div>
  );
}

const StyledInput = styled(Input)(
  ({ theme }) => `

  .${inputClasses.input} {
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      outline: 0;
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }
  }
`,
);

const Label = styled(
  ({ children, className }: { children?: React.ReactNode; className?: string }) => {
    const formControlContext = useFormControlContext();
    const [dirty, setDirty] = React.useState(false);
    console.log("form input = " , formControlContext?.value);

    React.useEffect(() => {
      if (formControlContext?.filled) {
        setDirty(true);
      }
    }, [formControlContext]);

    if (formControlContext === undefined) {
      return <p>{children}</p>;
    }

    const { error, required, filled } = formControlContext;
    const showRequiredError = dirty && required && !filled;

    return (
      <p className={clsx(className, error || showRequiredError ? 'invalid' : '')}>
        {children}
        {required ? ' *' : ''}
      </p>
    );
  },
)`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  margin-bottom: 4px;

  &.invalid {
    color: red;
  }
`;

const HelperText = styled((props: {}) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return null;
  }

  const { required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return showRequiredError ? <p {...props}>This field is required.</p> : null;
})`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
`;

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

export default Login;