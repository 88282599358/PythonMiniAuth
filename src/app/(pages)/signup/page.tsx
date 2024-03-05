"use client"

import useAuth from "@/context/useAuth"
import { useRouter } from "next/navigation"
import React from "react"
import Signup from "@/components/Signup"


const SignupPage = () => {
    const router = useRouter()
    const {authStatus} = useAuth();

    if(authStatus){
        router.replace("/profile") // if user signup we need to show the profile to them
        return <></>;  // we use empty fragment because layout need something to return 
    }
    return (
        <section className="px-1 py-1 sm:px-6 sm:py-1 lg:px-4 lg:py-54">
            <Signup />
        </section>
    )
}

export default SignupPage;