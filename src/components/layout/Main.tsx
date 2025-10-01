
import './Main.scss'
export default function Main(props: any) {
    return (
        <>
            <div className="main container">
                {props.children}
            </div>
        </>
    )
}