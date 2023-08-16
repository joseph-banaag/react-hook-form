"use client"
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { Montserrat } from 'next/font/google'

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
        name: "doks"
    }

    // block below is for the functionality of watch() method
    console.log(watch("username"));
    console.log(watch("password"))
    console.log("Errors: ", errors)

    const onSubmit: SubmitHandler<Inputs> = (data: any) => console.log(data); // the return can also be alert: alert(JSON.stringify(data))

    return (
        <div className='flex flex-col border rounded-2xl p-11 gap-5 w-full m-11'>
            <div className='p-3'>
                <h1 className={`${monserrat.className} text-3xl font-medium`}>Create your account</h1>
                <p>to continue to {App.name}</p>
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
