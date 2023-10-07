// format for text
export function Text({ children, justification }) {
    return (
        <p className={`text-black text-2xl ${justification}`}>
            {children}
        </p>
    )
}
