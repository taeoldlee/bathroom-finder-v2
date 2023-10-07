export function Header() {

    return (
        <>
            <div className="fixed top-0 left-0 w-full">
                <div className="flex flex-row gap-x-[20px] items-center relative bg-[#4e2a84] w-full h-[60px]">
                    <div className="w-0"></div>
                    <div className="h-full" onClick={() => navigate("/")}>
                        <img className="h-full" src="src/resources/nulogo.jpeg"></img>
                    </div>
                    <h1 className="text-white text-3xl">Bathroom Finder</h1>
                </div>
            </div>
        </>
    );
}
