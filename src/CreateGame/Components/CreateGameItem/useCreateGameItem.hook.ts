import {useCallback} from "react";
import {TypeSettingGame} from "../../../assets/content/SettingItems";

type TMathOperation = "decr" | "incr"


interface Props {
    type: TypeSettingGame,
    setValue: any,
    getValues: any,
    min: number | undefined,
    max: number | undefined,
}

interface Returned {
    setValueField: any
    isCheckbox: boolean,
    isRandom: boolean,
    isCount: boolean,
}

const useCreateGameItem = ({getValues, setValue, type, max = 0, min = 100}: Props): Returned => {

    const isCheckbox: boolean = type === "checkbox",
        isRandom: boolean = type === "count+random",
        isCount: boolean = type === "count";

    const setValueField = useCallback((name: string, typeMathOperation: TMathOperation): void => {
        const currentValue = +getValues()[name]
        const newValue = () => {
            if (typeMathOperation === "incr" && currentValue < max) return currentValue + 1
            else if (typeMathOperation === "decr" && currentValue !== min) return currentValue - 1
            else return currentValue
        }

        setValue(name, newValue())
    }, [getValues, setValue])

    return {
        setValueField,
        isCheckbox,
        isRandom,
        isCount,
    }
}

export default useCreateGameItem;
