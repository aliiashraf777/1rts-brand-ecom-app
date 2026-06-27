import { toast, Zoom } from "react-toastify";

const toastConfig = {
    position: "top-center" as const,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    theme: "light" as const,
    transition: Zoom,
}

export const toasts = {
    itemAdded: () => toast.success("item added!", toastConfig),
    itemRemoved: () => toast.warn("item deleted!", toastConfig),
    orderPlaced: () => toast.success("order placed successfully!", toastConfig),
    orderDeleted: () => toast.warn("order deleted!", toastConfig),
    orderHistoryCleared: () => toast.success("order history cleared!", toastConfig),
};