import { cn } from "@/utils/cn"

type Props = {
    variant?: 'gradient' | 'white',
    size?: 'normal' | 'full',
    className?: string,
    disabled?: boolean,
    children: React.ReactNode,
    onClick?: () => void
}

const Button = ({ variant = 'gradient', size = 'normal', className, disabled, children, onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={cn(
                // 1. base - always applied
                'txt-base cursor-pointer h-full shrink-0 whitespace-nowrap transition-all duration-200 rounded-card border border-transparent box-border',

                // 2. size variants
                size === 'normal' && 'px-5 py-2.5',
                size === 'full' && 'w-full px-5 py-2.5',

                // 3. color variants
                variant === 'gradient' && 'bg-gradient-primary hover:bg-gradient-primary-reverse text-white',
                variant === 'white' && 'bg-white text-text-primary hover:bg-primary hover:text-white border border-white hover:border-primary shadow-card-lg',

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