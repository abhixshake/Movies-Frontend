import React, { useState } from 'react'   
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Add = ({movie}) => {
  // const [count,setCount]=useState(0);
  // let valueAdd=()=>{
  //   setCount(count+1)
  // }
  const[form,setForm]=useState(
    {
      // mname:movie.mname,
      // cname:movie.cname,
      // dname:movie.dname,
      // ryr:movie.ryr
      mname:'',
      cname:'',
      dname:'',
      ryr:''
    }
  )
  function valueCap(e)
  {
    //console.log(e)
    setForm({...form,[e.target.name]: e.target.value})
  }
  let valueAdd=()=>
  {
    console.log(form)
  }
  return (
    <div>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          required
          id="outlined-required"
          label="Movie-Name"
          name="mname"
          value={movie.mname}
          onChange={valueCap}
          InputProps={{
            sx: {
              backgroundColor: 'white',
            },
          }}
        />
        <br/>

        <TextField
          required
          id="outlined-required"
          label="Category"
          name="cname"
          value={movie.cname}
          onChange={valueCap}
          InputProps={{
            sx: {
              backgroundColor: 'white',
            },
          }}
        />
        <br/>
        <TextField
          required
          id="outlined-required"
          label="Director-Name"
          name="dname"
          value={movie.dname}
          onChange={valueCap}
          InputProps={{
            sx: {
              backgroundColor: 'white',
            },
          }}
        />
        <br/>
        <TextField
          required
          id="outlined-required"
          label="Release-Year"
          name="ryr"
          value={movie.ryr}
          onChange={valueCap}
          InputProps={{
            sx: {
              backgroundColor: 'white',
            },
          }}
        />
        <br/>
        {/* <TextField
          required
          id="outlined-required"
          label="Last-Name"
          name="lastname"
          value={form.lastname}
          onChange={valueCap}
          InputProps={{
            sx: {
              backgroundColor: 'white',
            },
          }}
        />
        <br/> */}
      </div>
      <Button variant='contained' color='success' onClick={valueAdd}>Submit</Button>
      {/* <small>count is {count}</small> */}
    </Box>
    </div>
  )
}

export default Add