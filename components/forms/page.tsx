"use client"
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { Montserrat } from 'next/font/google'
import Image from 'next/image';

const monserrat = Montserrat({
    weight: "400",
    subsets: ["latin"]
});

// this object is for type declaration of useForm() function specifically for register method.
interface Inputs {
    username: string;
    password: string;
}

export default function Forms() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<Inputs>();

    const App = {
        name: "company name"
    }

    const iconsSrc = {
        facebook: "/assets/icons/facebook_icons/f_logo_RGB-Blue_72.png",
        nameFb: "facebook",
        google: "/assets/icons/google_icon/gmail.png",
        nameG: "google",
        github: "/assets/icons/github_icons/github.png",
        nameGit: "github"
    }

    // block below is for the functionality of watch() method
    console.log(watch("username"));
    console.log(watch("password"))
    console.log("Errors: ", errors)

    const onSubmit: SubmitHandler<Inputs> = (data: any) => console.log(data); // the return can also be alert: alert(JSON.stringify(data))

    return (
        <div className='flex flex-col border rounded-2xl p-11 gap-5 w-full m-11'>
            <div className='p-3'>
                <h1 className={`${monserrat.className} text-4xl font-medium mb-1`}>Create your account</h1>
                <p>to continue to &ldquo;{App.name}&rdquo; </p>
            </div>

            <div className=' p-3 flex justify-between gap-2'>

                <button type='button' className='rounded-2xl bg-slate-900 w-full p-3 flex justify-center  hover:bg-slate-600 transition duration-300'>
                    <Image
                        src={iconsSrc.facebook}
                        alt={iconsSrc.nameFb}
                        width={24}
                        height={24}
                    />
                </button>

                <button type='button' className='rounded-2xl bg-slate-900 w-full p-3 flex justify-center  hover:bg-slate-600 transition duration-300'>
                    <Image
                        src={iconsSrc.github}
                        alt={iconsSrc.nameGit}
                        width={24}
                        height={24}

                    />
                </button>

                <button type='button' className='rounded-2xl bg-slate-900 w-full p-3 flex justify-center  hover:bg-slate-600 transition duration-300'>
                    <Image
                        src={iconsSrc.google}
                        alt={iconsSrc.nameG}
                        width={24}
                        height={24}
                    />
                </button>

            </div>


            <div className="flex justify-center items-center">
                <hr className='w-full'></hr>
                <p className='px-3'>or</p>
                <hr className='w-full'></hr>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 '>

                <div className='flex flex-col gap-1 mb-3'>
                    <input {...register("username", { required: { value: true, message: "Can't leave empty." }, minLength: { value: 8, message: "Min length of 8" }, maxLength: { value: 25, message: "Max length 25" } })} placeholder='Username' className='p-2 rounded-md text-black text-sm w-full' />
                    {/* <span>{errors.username}</span> */}
                </div>

                <div className='flex flex-col gap-1 mb-3'>
                    <input type='password' {...register("password", { pattern: { value: /(?=\w{8,18})(?=\D*\d)/, message: "Password must be at least 8 characters." } })} placeholder='Password' className='p-2 rounded-md text-black text-sm w-full' />
                    {/* {errors.username && } */}
                </div>



                <div className='flex flex-col gap-1 mb-3'>
                    <input type="submit" className='w-2/3 mx-auto p-2 rounded-2xl bg-slate-800 text-slate-100 hover:bg-slate-600 transition duration-300' />
                </div>
            </form>
        </div>
    )
}
