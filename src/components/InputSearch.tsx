import './InputSearch.scss'

export default function InputSearch(props: any) {
    const msg = (e: any) => {
        if (e.key === 'Enter') {
            console.log(e.target.value)
            e.target.value = ''
        }
    }

    return (
        <>
            <input className="input-search" placeholder='[ enter ] Para buscar' type="text"  onKeyDown={msg}/>
        </>
    )    
}