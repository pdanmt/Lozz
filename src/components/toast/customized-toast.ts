import { toast } from "sonner"

export function CustomizedToast( type: 'success' | 'error', message: string) {
    if (type === 'success') {
        toast.success(message, {
            style: {
                background: '#0B0E16',
                border: '1px solid gray'
            }
        })
    } else {
        toast.success(message, {
            style: {
                background: '#0B0E16',
                border: '1px solid gray'
            }
        })
    }
}