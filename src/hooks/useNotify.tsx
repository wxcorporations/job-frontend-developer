import { toast, ToastOptions } from "react-toastify"

const CONFIG = {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    onClose: () => { },
} as ToastOptions

export default function useNotify() {

    return {
        MsgError: ( msg: string, id: string,) => {
            CONFIG.toastId = id
            toast.error(msg, CONFIG);
        },
        MsgSucess: (msg: string) => {
            toast.success(msg, CONFIG);
        }
    }
}