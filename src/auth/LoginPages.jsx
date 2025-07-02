import { useNavigate } from 'react-router'

export const LoginPages = () => {

  const navigate=useNavigate()
const onLogin=()=>{
    navigate('/',{
        replace:true
    })
}

  return (

    <div className='container-mt5'>
    <h1>LoginPages</h1>
    
    <button
    className='btn btn-primary'
    onClick={onLogin}
    >Login</button>
    </div>
    

  )
}
