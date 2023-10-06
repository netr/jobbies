import { BellIcon } from '@heroicons/react/24/outline'

interface NotificationsIconProps {
    count: number;
}
export default function NotificationsIcon({ count }: NotificationsIconProps) {

    return (
        <button
            className="relative flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            type="button">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" className="h-6 w-6" />

            {count === 0 ? null : (
                <span className="absolute text-xs bg-red-500 text-white rounded-full w-4 h-4 top-0 right-0 flex items-center justify-center" data-testid="badge">
                    {count}
                </span>
            )}
        </button>
    )
}