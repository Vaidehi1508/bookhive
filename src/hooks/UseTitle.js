import { useEffect } from "react"

export const UseTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - BookHive`
    }, [title])
    return null
}
