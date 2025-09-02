import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup(){
    const [name, setName] = useState("");
    const [phno, setPhno] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [comp, setComp] = useState("");
    const [agency, setAgency] = useState("no");

    const navigate = useNavigate();
    let users = JSON.parse(localStorage.getItem("users")) || [];

    function createUser(){
        const exists = users.some(user => user.email === email);
        if (exists) {
            alert("An User with that Email already exists");
            return;
        }

        users.push({
            name,
            phone: phno,
            email,
            pass,
            company: comp,
            agency
        });

        localStorage.setItem("users", JSON.stringify(users));

        alert("Account created successfully!");
        navigate('/login');

    }

    return(
        <div className="flex flex-col h-[100dvh] items-center">
            <div className="px-6 flex flex-col gap-6 py-6 h-[100dvh] w-[375px]">
                <p className="font-bold text-3xl w-[70%]">Create your PopX account</p>
                <form className="h-[100dvh]" onSubmit={(e) => {e.preventDefault(); createUser();}}>
                    <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-2">
                        <span className="flex flex-col">
                            <p className="absolute bg-[#f7f8f9] ml-3 text-[#6c25ff] text-[14px]">Full Name </p>
                            <input type="text" placeholder="Enter full name" className="text-[14px] mt-[10px] border-1 border-black/50 px-3 py-2 rounded-sm" required onChange={(e) => setName(e.target.value)}/>
                        </span>
                        <span className="flex flex-col">
                            <p className="absolute bg-[#f7f8f9] ml-3 text-[#6c25ff] text-[14px]">Phone Number</p>
                            <input type="number" placeholder="Enter phone number" className="text-[14px] mt-[10px] border-1 border-black/50 px-3 py-2 rounded-sm" onChange={(e) => setPhno(e.target.value)} required/>
                        </span>
                        <span className="flex flex-col">
                            <p className="absolute bg-[#f7f8f9] ml-3 text-[#6c25ff] text-[14px]">Email Address</p>
                            <input type="email" placeholder="Enter email address" className="text-[14px] mt-[10px] border-1 border-black/50 px-3 py-2 rounded-sm" onChange={(e) => setEmail(e.target.value)} required/>
                        </span>
                        <span className="flex flex-col">
                            <p className="absolute bg-[#f7f8f9] ml-3 text-[#6c25ff] text-[14px]">Password</p>
                            <input type="password" placeholder="Enter password" className="text-[14px] mt-[10px] border-1 border-black/50 px-3 py-2 rounded-sm" onChange={(e) => setPass(e.target.value)} required/>
                        </span>
                        <span className="flex flex-col">
                            <p className="absolute bg-[#f7f8f9] ml-3 text-[#6c25ff] text-[14px]">Company Name</p>
                            <input type="text" placeholder="Enter company name" className="text-[14px] mt-[10px] border-1 border-black/50 px-3 py-2 rounded-sm" onChange={(e) => setComp(e.target.value)}/>
                        </span>
                        <span>
                            <p className="text-[14px]">Are you an Agency?</p>
                            <div className="flex gap-2">
                                <input type="radio" id="yes" name="agency" value="yes" onChange={(e) => setAgency(e.target.value)}/>
                                <label htmlFor="yes" className="text-[14px]">Yes</label>
                                <input type="radio" id="no" name="agency" value="no" defaultChecked onChange={(e) => setAgency(e.target.value)}/>
                                <label htmlFor="no" className="text-[14px]">No</label>
                            </div>
                        </span>
                    </div>
                    <button type="submit" className="h-11 bg-[#6c25ff] rounded-sm font-bold text-white text-[14px] hover:bg-[#6c25ff]/80 duration-200 ease-in-out">Sign Up</button>
                </div>
                </form>
            </div>
        </div>
    )
}