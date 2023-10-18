import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log("User session",)
    if (!session) {
      router.push("/");
    }else{
      console.log("User session",session.user)
  }
  }, [session]);

  return (

    <div className='flex justify-center 
    items-center mt-[25%] ml-[0%] md:ml-[50%] flex-col absolute'>
 
        <button 
        className='text-white p-2 rounded-xl px-3 left-3 bg-blue-400'
        onClick={()=>signIn()}>Login with Google</button>
    </div>
  )
}



export default Login