import { Link } from "react-router-dom"

export default function Landing(){
    return(
        <div className="flex flex-col min-h-[100dvh] justify-end items-center pb-10">
            <div className="px-6 flex flex-col gap-6 w-[375px]">
                <div className="flex flex-col gap-1">
                    <p className="font-bold text-2xl">Welcome to PopX</p>
                    <p className="font-semibold text-[#797c80]">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <Link to={'/signup'} className="justify-center flex items-center h-10 bg-[#6c25ff] rounded-sm font-bold text-white text-[14px] hover:bg-[#6c25ff]/80 duration-200 ease-in-out">Create Account</Link>
                    <Link to={'/login'} className="justify-center flex items-center h-10 bg-[#cebafb] rounded-sm font-bold text-black text-[14px] hover:bg-[#cebafb]/80 duration-200 ease-in-out">Already Registered? Login</Link>
                </div>
            </div>
        </div>
    )
}