import toast from "react-hot-toast"

export default function notify(message, icon) {
    toast(message, { duration: 3000, icon: icon });
}