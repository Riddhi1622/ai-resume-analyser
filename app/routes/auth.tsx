import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { usePuterStore } from '~/lib/puter'

export const meta = () => ([
    {title: "ResueMate | Authentication"},
    {name:"description", content : "Login To Your Account."},
   {name: "keywords", content: "resume, authentication, reviews,feedbacks, AI,"},
])

const auth = () => {
    const {isLoading,auth} = usePuterStore()
    const location  = useLocation()
    const next = location.search.split('next=')[1];
    const navigate = useNavigate()
    useEffect(() => {
        if(auth.isAuthenticated) navigate(next);


    },[auth.isAuthenticated,next])
return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex items-center justify-center">
        <div className='gradient-border shadow-lg'>
        <section className='flex flex-col gap-8 bg-white rounded-2xl p-10'>
            <div className='flex flex-col items-center gap-2 text-center'>
                <h1>Welcome Mate :)</h1>
                <h4>Let's Start Your Job Hunt Journey!!</h4>
            </div>




            <div>
                {isLoading ? (
                    <button className='auth-button animate-pulse'>
                        Signing You In...
                    </button>
                ): (
                    <>
                    {auth.isAuthenticated ? (
                        <button className='auth-button' onClick={auth.signOut}>
                         <p>  Log Out </p>  
                        </button>
                    ): (
                        <button className='auth-button' onClick={auth.signIn}>
                          <p> Login </p>  
                        </button>
                    )}
                    </>
                )}
            </div>
        </section>
          

        </div>

    </main>
)
}

export default auth
