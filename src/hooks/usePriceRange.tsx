import { useState } from "react"

const MIN_PRICE = 0
const MAX_PRICE = 100
const MIN_GAP = 10

const clamp = (value: number, min: number, max: number) =>
    Math.min(max, Math.max(min, value))

export type PriceRangePropsTy = {
    minRange: number,
    maxRange: number,
    minInput: string,
    maxInput: string,
    MIN_PRICE: number,
    MAX_PRICE: number,
    MIN_GAP: number,
    minPercent: number,
    maxPercent: number,
    handleMinChange: (raw: number) => void,
    handleMaxChange: (raw: number) => void,
    handleMinInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleMaxInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    commitMinInput: () => void,
    commitMaxInput: () => void,
    handleEnterCommit: (e: React.KeyboardEvent<HTMLInputElement>) => void,
    applyPriceRange: (onApply: (min: number, max: number) => void) => void,
    reset: () => void,
}

const usePriceRange = (): PriceRangePropsTy => {

    const [minRange, setMinRange] = useState(0)
    const [maxRange, setMaxRange] = useState(100)
    const [minInput, setMinInput] = useState("0")
    const [maxInput, setMaxInput] = useState("100")

    // min max thumb position
    const minPercent = ((minRange - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;
    const maxPercent = ((maxRange - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;


    const handleMinChange = (raw: number) => {
        const nextMin = clamp(raw, MIN_PRICE, maxRange - MIN_GAP)
        setMinRange(nextMin)
        setMinInput(String(nextMin))
    }

    const handleMaxChange = (raw: number) => {
        const nextMax = clamp(raw, minRange + MIN_GAP, MAX_PRICE)
        setMaxRange(nextMax)
        setMaxInput(String(nextMax))
    }

    // typing only
    const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinInput(e.target.value)
    }

    const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxInput(e.target.value)
    }

    // Commit on blur / Enter / Apply:
    const commitMinInput = () => {
        const value = Number(minInput);
        if (!Number.isNaN(value))
            handleMinChange(value)
    }

    const commitMaxInput = () => {
        const value = Number(maxInput);
        if (!Number.isNaN(value))
            handleMaxChange(value);
    }

    // on apply button click
    const applyPriceRange = (onApply: (min: number, max: number) => void) => {
        const rawMin = Number(minInput)
        const rawMax = Number(maxInput)

        let nextMin = minRange;
        let nextMax = maxRange;

        if (!Number.isNaN(rawMin)) {
            nextMin = clamp(rawMin, MIN_PRICE, MAX_PRICE - MIN_GAP)
            setMinRange(nextMin)
            setMinInput(String(nextMin))
        }

        if (!Number.isNaN(rawMax)) {
            nextMax = clamp(rawMax, MIN_PRICE + MIN_GAP, MAX_PRICE)
            setMaxRange(nextMax)
            setMaxInput(String(nextMax))
        }

        onApply(nextMin, nextMax);
    }

    // enter commit
    const handleEnterCommit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter')
            // e.currentTarget.blur();
            // applyPriceRange()
            commitMinInput();
    }

    // reset
    const reset = () => {
        setMinRange(MIN_PRICE)
        setMaxRange(MAX_PRICE)
        setMinInput(String(MIN_PRICE))
        setMaxInput(String(MAX_PRICE))
    }

    return ({
        minRange,
        maxRange,
        minInput,
        maxInput,
        MIN_PRICE,
        MAX_PRICE,
        MIN_GAP,
        minPercent,
        maxPercent,
        handleMinChange,
        handleMaxChange,
        handleMinInputChange,
        handleMaxInputChange,
        commitMinInput,
        commitMaxInput,
        handleEnterCommit,
        applyPriceRange,
        reset,
    })
}

export default usePriceRange