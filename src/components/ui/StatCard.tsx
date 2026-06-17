
import { Skeleton } from './Skeleton';
import type { IconType } from "react-icons/lib";
interface StatCardProps {
    title: string;
    value: string | number;
    Icon: IconType;
    change?: number;
    changeLabel?: string;
    isLoading?: boolean;
    variant?: 'default' | 'primary' | 'success' | 'warning' | 'destructive';
    className?: string;
}

const variantStyles = {
    default: 'bg-gray-100 border border-gray-300',
    primary: 'bg-blue-100 border border-blue-300',
    success: 'bg-green-100 border border-green-300',
    warning: 'bg-yellow-100 border border-yellow-300',
    destructive: 'bg-red-100 border border-red-300',
};

const iconStyles = {
    default: 'bg-gray-200 text-gray-600',
    primary: 'bg-blue-200 text-blue-600',
    success: 'bg-green-200 text-green-600',
    warning: 'bg-yellow-200 text-yellow-600',
    destructive: 'bg-red-200 text-red-600',
};



export function StatCard({
    title,
    value,
    Icon,
    change,
    changeLabel,
    isLoading = false,
    variant = 'default',
    className,
}: StatCardProps) {
    if (isLoading) {
        return (
            <div
                className={` p-6 rounded-xl transition-all ${variantStyles[variant]} ${className} `}
            >
                <div className="flex items-center justify-between">
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-8 w-16" />
                        <Skeleton className="h-3 w-20" />
                    </div>
                    <Skeleton className="h-12 w-12 rounded-xl" />
                </div>
            </div >
        );
    }

    return (
        <div
            className={`p-6 rounded-xl transition-all hover:shadow-md ${variantStyles[variant]} ${className}`}
        >
            <div className="flex items-center justify-between">
                {/* Left */}
                <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-600">
                        {title}
                    </p>

                    <p className="text-3xl font-bold text-black">
                        {typeof value === 'number'
                            ? value.toLocaleString()
                            : value}
                    </p>

                    {change !== undefined && (
                        <div
                            className={`flex items-center gap-1 text-xs font-medium ${change >= 0 ? 'text-success' : 'text-destructive'}`}
                        >
                            <span>{change >= 0 ? '↑' : '↓'}</span>
                            <span>{Math.abs(change)}%</span>
                            {changeLabel && (
                                <span className="text-muted">
                                    {changeLabel}
                                </span>
                            )}
                        </div>
                    )}
                </div>

                {/* Icon */}
                <div
                    className={`p-3 rounded-xl flex items-center justify-center ${iconStyles[variant]}`}
                >
                    <Icon className="h-6 w-6" />
                </div>
            </div>
        </div >
    );
}
