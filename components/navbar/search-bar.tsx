import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'

export default function SearchBar() {
    const [query, setQuery] = useState('')
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && query.trim() !== '')
            window.location.href = `/search?query=${query}`
    }

    return (
        <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="w-full max-w-lg lg:max-w-xs">
                <label className="sr-only" htmlFor="search">
                    Search
                </label>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                        id="search"
                        name="search"
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Search"
                        type="search"
                        value={query}
                    />
                </div>
            </div>
        </div>
    )
}