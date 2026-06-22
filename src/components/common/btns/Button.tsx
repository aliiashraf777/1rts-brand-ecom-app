import { cn } from "@/utils/cn"
import { Eye, Heart, ShoppingCart, Trash2 } from "lucide-react"
import { Link } from "react-router"

type Props = {
    variant?: 'gradient' | 'white' | 'green',
    size?: 'normal' | 'full',
    className?: string,
    disabled?: boolean,
    children: React.ReactNode,
    onClick?: () => void
}

const Button = ({ variant = 'gradient', size = 'normal', className, disabled, children, onClick }: Props) => {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={cn(
                // 1. base - always applied
                'txt-base cursor-pointer w-max h-max shrink-0 whitespace-nowrap transition-all duration-200 rounded-card border border-transparent box-border',

                // 2. size variants
                size === 'normal' && 'px-5 py-2.5',
                size === 'full' && 'w-full px-5 py-2.5',

                // 3. color variants
                variant === 'gradient' && 'bg-gradient-primary hover:bg-gradient-primary-reverse text-white',
                variant === 'white' && 'bg-white text-text-primary hover:bg-primary hover:text-white border border-white hover:border-primary shadow-card-lg',
                variant === 'green' && 'bg-brand-green text-white',

                // 4. disabled state
                disabled && 'opacity-50 cursor-not-allowed pointer-events-none',

                // 5. custom classes - tsMerge resolves any conflict
                className
            )}
        >
            {children}
        </button>
    )
}

export default Button


type LinkBtnTy = {
    children: string,
    to: string,
    className?: string,
}

export const LinkBtn = ({ children, to, className }: LinkBtnTy) => {

    return (
        <Link
            to={to}
            className={`txt-small text-primary md:txt-body-medium md:text-primary border-b-2 border-transparent w-max hover:border-b-2 hover:border-primary transition-all duration-300 ease-out ${className || ""}`}
        >
            {children}
        </Link>
    )
}

type HeartBtnTy = {
    className?: string,
    onClick?: () => void,
    variant?: 'heart' | 'cart' | 'eye' | 'del',
}

export const AddCartHeartBtn = ({ className, onClick, variant = 'heart' }: HeartBtnTy) => {

    return (
        <button
            className={`w-max h-max border border-gray-300 bg-white text-primary p-1 md:p-2 rounded-card cursor-pointer transition-all duration-300 ease-out hover:scale-110 ${className || ''}`}
            onClick={onClick}
        >
            {variant === 'heart' &&
                <Heart />
            }

            {variant === 'cart' &&
                <ShoppingCart />
            }

            {variant === 'eye' &&
                <Eye />
            }

            {variant === 'del' &&
                <Trash2 />
            }

        </button>
    )
}