import React, {useState, useEffect, useLayoutEffect, FormEvent} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IProduct } from '../models/IProduct'
import { userLogin } from '../api'

function Login() {

  const navigate = useNavigate()  

  const [username, setUsername] = useState('kminchelle')
  const [password, setPassword] = useState('0lelplR')

  const sendObj: IProduct = {
      id: 100,
      title: 'TV',
      price: 20000
  }
  const sendForm = (evt:FormEvent) => {
    evt.preventDefault()
    userLogin(username, password).then(res => {
        const data = res.data
        console.log(data.token)
        navigate('/dashboard/100', {state: sendObj})
    }).catch(err => {
        console.error("Login Error")
    })
  }

  useLayoutEffect(() => {
    //var e = new Date().getTime() + (5 * 1000);
    //while (new Date().getTime() <= e) {}
    console.log("useLayoutEffect")
  }, [])

  useEffect( ()=> {
    console.log("call-1")
  }, [])

  useEffect( ()=> {
    console.log(username)
  }, [username])



  return (
    <>
        <div className='row'>
            <div className='col-sm-4'></div>
            <div className='col-sm-4'>
                <h2>User Login</h2>
                <form onSubmit={sendForm}>
                    <div className='mb-3'>
                        <input defaultValue={username} required onChange={(evt) => setUsername(evt.target.value) } placeholder='Username' className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <input defaultValue={password} required onChange={(evt) => setPassword(evt.target.value) } placeholder='Password' type='password' className='form-control'/>
                    </div>
                    <button className='btn btn-danger'>Login</button>
                    <NavLink to={'/dashboard/150'}>Dashboard</NavLink>
                </form>
            </div>
            <div className='col-sm-4'></div>
        </div>
        {console.log('view call')}
    </>
  )
}
export default Login