export default function Profile(){
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
        return (
            <div className="flex items-center justify-center min-h-[100dvh]">
            <p>Please login first.</p>
            </div>
        );
    }

    return(
        
        <div className="flex flex-col min-h-[100dvh] items-center">
            <div className="flex flex-col gap-6 w-[375px]">
                <div className="h-17 bg-white w-full shadow-2xs flex items-center px-6">
                    <p className="font-semibold text-1xl">Account Settings</p>
                </div>
                <div className="flex gap-4 px-6">
                    <img src="/user.png" className="w-16 absolute"/>
                    <img src="/camera.png" className="absolute ml-11 mt-9 w-6 h-6 hover:brightness-75 ease-in-out duration-300"/>
                    <div className="flex flex-col ml-20">
                        <p className="font-bold">{currentUser.name}</p>
                        <p>{currentUser.email}</p>
                    </div>
                </div>
                <p className="px-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis molestiae nemo dolore quis possimus, a, odio eum quisquam cumque necessitatibus tempore voluptatem, molestias architecto? Tempora repellat perspiciatis consequatur explicabo.</p>
                <p className="text-center text-black/50">-------------------------------------------------------</p>
            </div>
        </div>
    )
}