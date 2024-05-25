import { useEffect } from 'react'

const usePageTitle = (count) => {
    useEffect(() => {
        document.title = `count-${count}`

    }, [count]);
}

export default usePageTitle;

// This is the way to create a new custom hooks and  where ever we want this hook just import this one.
