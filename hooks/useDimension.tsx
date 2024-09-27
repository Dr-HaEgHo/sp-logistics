import { useEffect, useState } from "react"

export const useDimension = () => {
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    const GetDimensions = () => {
        setWidth(screen.availWidth)
        setHeight(screen.availHeight)
    }


    useEffect(() => {
        document.addEventListener('load', GetDimensions)

        document.removeEventListener('load', GetDimensions)
    }, [])


    return { width, height};
}