'use client'
import { useEffect, useState } from "react"

export const useMultiply = (arg: number, any: any) => {

    const [array, setArray] = useState<any[] >()
    const makeMultiply = () => {
        const compArray: unknown[] = [];
        for(let i:number = 0; i < arg; i++){
            compArray.push(1)
        }
        setArray(compArray)
    }

    useEffect(() => {
        makeMultiply()
    }, [])

    return (
    <>
    {
        array?.map(() => (any))
    }
    </>
    )
}