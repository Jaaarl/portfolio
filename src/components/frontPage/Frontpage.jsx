import Redirect from "./GithubRedirect"
export default
    function FrontPage() {
    const redirectToLink = () => {
        window.location.href = 'https://www.linkedin.com/in/jarlempleo13/';
    };
    const redirectToGithub = () => {
        window.location.href = 'https://github.com/Jaaarl';
    };


    return (
        <>
            <div className="bg-gray-100 h-[100vh]">
                <div className="px-3 pt-2">
                    <header className="flex  items-center justify-between text-[20px]">
                        <div className="font-bold cursor-pointer hover:animate-pulse hover:text-blue-500">Jarl.Dev</div>
                        <div>
                            <ul className="flex gap-5 font-semibold">
                                <li className="cursor-pointer hover:text-blue-500  duration-300">
                                    Home
                                </li>
                                <li className="cursor-pointer  hover:text-blue-500  duration-300">
                                    About
                                </li>
                                <li className="cursor-pointer  hover:text-blue-500  duration-300">
                                    Contact
                                </li>

                            </ul>
                        </div>
                    </header >
                    <main className="flex  justify-center h-[80vh] flex-col ">
                        <div className="flex justify-center items-center gap-10 mx-[200px]">
                            <div className="">
                                <div className="font-extrabold text-[56px]">Full Stack Web Developer</div>
                                <div className="font-light text-[35px]">Hi, I'm Joshua Jarl Empleo. A passionate Full stack Developer based in Philippines </div>
                                <div className="flex gap-2 mt-2 ">
                                    <span onClick={redirectToGithub} className="cursor-pointer">
                                        <img className="h-[20px] w-[20px]" src="github.png" alt="" />
                                    </span>
                                    <span onClick={redirectToLink} className="cursor-pointer">
                                        <img className="h-[20px] w-[20px]" src="linkedin.png" alt="" />
                                    </span>
                                </div>
                            </div>
                            <div>
                                {/* <img src="/174  trippings.jpg" alt="" className=" h-[200px] w-[200px] rounded-full overflow-hidden" /> */}
                                <img src="/174  trippings.jpg" alt="" className=" h-[200px] w-[200px] rounded-full overflow-hidden object-cover" />
                            </div>
                        </div>
                        <div className="flex gap-5 justify-center items-center mt-5">
                            <span>
                                Tech Stack |
                            </span>
                            <span>
                                <ul className="flex gap-5 font-semibold ">
                                    <li><img className="h-[40px] w-[40px]" src="html.png" /></li>
                                    <li><img className="h-[40px] w-[40px]" src="css.png" alt="" /></li>
                                    <li><img className="h-[40px] w-[40px]" src="js.png" alt="" /></li>
                                    <li><img className="h-[40px] w-[40px]" src="tailwind.png" alt="" /></li>
                                    <li><img className="h-[40px] w-[40px]" src="react.png" alt="" /></li>
                                    <li><img className="h-[40px] w-[40px]" src="php.png" alt="" /></li>
                                    <li><img className="h-[40px] w-[40px]" src="mongodb.png" alt="" /></li>
                                    <li><img className="h-[40px] w-[40px]" src="mysql.png" alt="" /></li>
                                </ul>
                            </span>
                        </div>
                    </main >

                </div >
            </div>
        </>
    )
}