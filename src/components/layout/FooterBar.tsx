export default function FooterBar(prop: any) {
    return (
        <>
            <div className="container">
                {prop.children}
            </div>
        </>
    )
}