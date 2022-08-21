import { Link } from 'react-router-dom'
import { Layout } from '../../components/layout'
import { RiShieldKeyholeLine } from 'react-icons/ri'


export default function Login () {

  const handleLogin = e => {
    e.preventDefault()
  }

  return (
    <Layout>
        <section className='lg:pt-[230px] flex flex-col items-center justify-center mb-32 bg-white'>
            <header className='mb-10'>
                <h1 className='text-[2rem] font-bold'>PLEASE SIGN IN</h1>
            </header>
            <form className='w-10/12 lg:w-4/12 flex flex-col items-center justify-center' onSubmit={handleLogin}>
                <div className='w-11/12'>
                    <label className='tracking-[.7px] text-sm' htmlFor='email'>EMAIL ADDRESS:</label>
                    <input 
                      id='email'
                      type="text"
                      className='w-full py-4 px-2 border-[1px] border-gray-300 text-xs mt-3'
                      />
                </div>
                <div className='w-11/12 mt-4'>
                    <label className='tracking-[.7px] text-sm' htmlFor='password'>PASSWORD:</label>
                    <input 
                      id='password'
                      type="password"
                      className='w-full py-4 px-2 border-[1px] border-gray-300 text-xs mt-3'
                      />
                </div>
                <Link className='text-sm float-left mt-4 w-11/12' to='/'>Forgot password ?</Link>
                <button className='bg-black text-white w-11/12 text-sm py-3 mt-4' type='submit'>Login</button>
                <button className='border-[1px] border-gray-300 w-11/12 text-sm py-3 mt-4' type='submit'>Create Account</button>
            </form>
            <div className='w-9/12 lg:w-4/12 mx-auto mt-5 flex justify-center items-center gap-2'>
                <RiShieldKeyholeLine />
                <p className='text-xs lg:text-sm'>Hijabistahub is secure and your personal details are protected.</p>
            </div>
        </section>
    </Layout>
  )
}