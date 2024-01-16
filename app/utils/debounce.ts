import React from 'react'

export function useDebounce(value: any, delay: number) {
    const [debounced, setDebounced] = React.useState(value)

    React.useEffect(() => {
        const handler = setTimeout(() => {
            setDebounced(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debounced
}