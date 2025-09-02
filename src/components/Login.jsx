import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();
    let users = JSON.parse(localStorage.getItem("users")) || [];

    function checkValid(){
        const user = users.find((user) => user.email == email);

        if (!user){
            alert("User Doesn't Exist");
            return;
        }

        if (user.pass != pass){
            alert("Incorrect Password!");
            return;
        }

        localStorage.setItem("currentUser", JSON.stringify(user));
        navigate("/profile");
    }

    return(
        <div className="flex flex-col min-h-[100dvh] items-center">
            <div className="px-6 flex flex-col mt-10 gap-6 w-[375px]">
                <div className="flex flex-col gap-1 w-[70%]">
                    <p className="font-bold text-3xl">Signin to your PopX account</p>
                    <p className="font-semibold text-[#797c80]">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="flex flex-col">
                        <p className="absolute bg-[#f7f8f9] ml-3 text-[#6c25ff] text-[14px]">Email Address</p>
                        <input type="email" placeholder="Enter email address" className="mt-[10px] border-1 border-black/50 px-3 py-2 rounded-sm" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </span>
                    <span className="flex flex-col">
                        <p className="absolute bg-[#f7f8f9] ml-3 text-[#6c25ff] text-[14px]">Password</p>
                        <input type="password" placeholder="Enter password" className="mt-[10px] border-1 border-black/50 px-3 py-2 rounded-sm" value={pass} onChange={(e) => setPass(e.target.value)}/>
                    </span>
                    <button className="h-11 bg-[#6c25ff] rounded-sm font-bold text-white text-[14px] hover:bg-[#6c25ff]/80 duration-200 ease-in-out" onClick={() => checkValid()}>Login</button>
                </div>
            </div>
        </div>
    )
}