import React, { useState } from 'react';

const handleError = (error) => {
    console.log(error);
  }
  const throwError = () => {
    throw Error('');
  }
  
const Register = () => {
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [phoneNumber,setPhoneNumber]=useState('')

    const handleUser=async()=>{
        var raw ={
            firstName:'test',
            lastName:'test',
            phoneNumber:'+998337341399'
        };

            var requestOptions = {
                method: 'POST',
                body: raw,
                redirect: 'follow'
            };

      try{
          const response=await fetch('https://bookuz.kahero.uz/news/6242a37f2cf66f162f3d019e')
          const data=response.json()
          console.log(data)
      }catch(error){
          console.log(error)
      }
    }
    
    return (
        <>
            <div className="container forms">
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="card bg-secondary text-center">
                            <div className="card-header">Sign Up</div>
                            <div className="card-body ">
                                <form method='post'>
                                    <div className="form-floating">
                                        <input type="text" className="form-control  mb-3" name='firstName' id="floatingInput" placeholder="name@example.com" onChange={(e)=>setFirstName(e.target.value)} />
                                        <label htmlFor="floatingInput">First Name</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="text" className="form-control  mb-3" name='lastName' id="floatingInput" placeholder="name@example.com" onChange={(e)=>setLastName(e.target.value)}/>
                                        <label htmlFor="floatingInput">Last Name</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="tel" className="form-control  mb-3" name='phoneNumber' id="floatingInput" placeholder="name@example.com" onChange={(e)=>setPhoneNumber(e.target.value)}/>
                                        <label htmlFor="floatingInput">Phone Number</label>
                                    </div>

                                    <div className="checkbox mt-3 mb-3 d-flex align-items-center ">
                                        <input type="checkbox" style={{ width: '20px', height: '20px', marginRight: '10px' }} value="remember-me" />
                                        <label  >
                                            Remember me
                                        </label>
                                    </div>
                                    <button className="w-100 btn btn-lg btn-primary" type="button" onClick={handleUser}>register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Register;

