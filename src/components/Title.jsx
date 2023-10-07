// format for titles
export function Title ({children, justification}) {
    return (
        <h1 className={`text-[#6bb4ca] text-4xl ${justification} py-4`}>
            {children}
        </h1>
        

    )
}