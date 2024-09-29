import React from 'react'
import { useAuth } from '../context/Authprovider'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser,setAuthUser]=useAuth()
    const handleLogout=()=>{
        try{
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users");
            toast.success("Loggedout successfully");
            window.location.reload();

            setTimeout(() =>{
            },3000)

        }catch (error) {
            toast.error("Error:" + error)
            setTimeout(() => {},3000)

        }
    }
  return (
    <div>
        <button className='px-3 py-2 bg-red-500 text-white cursor-pointer rounded-md'
        onClick={handleLogout}>
            Logout
        </button>
    </div>
  )
}

export default Logout