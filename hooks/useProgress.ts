import { useEffect, useState } from "react"

const useProgress = (base = 0, numerator = 0) => {
    const [progress, setProgress] = useState<number>(0)

    const calculateProgress = () => {
        setProgress(Math.round(numerator / base * 100))
    }

    useEffect(() => {
        calculateProgress()
    },[base, numerator])

    return {progress}
}

export default useProgress;