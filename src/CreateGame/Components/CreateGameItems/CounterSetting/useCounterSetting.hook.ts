import {useCallback, useMemo, useState} from "react";
import {ISettingsGame} from "../../../../assets/content/SettingItems";

interface Props {
    settingItem: ISettingsGame,
    setValue: any,
    getValues: any,
    errors: any,
}

interface Returned {
    title: string,
    description: string,
    fieldName: string,
    defaultValue: any,
    errorMessage: string | undefined,
    isRandom: boolean,
    min: number,
    max: number,
    isIncrementDisabled: boolean,
    isDecrementDisabled: boolean,
    incrementValueField: () => void,
    decrementValueField: () => void,
}

const useCounterSetting = ({getValues, setValue, settingItem, errors}: Props): Returned => {
    const {
        title,
        description,
        fieldName,
        defaultValue,
    } = settingItem;

    const isRandom = useMemo(()=>settingItem.type === "count+random",[settingItem.type]);

    const min: number = useMemo(() => settingItem?.min ?? -1, [settingItem]),
        max: number = useMemo(() => settingItem?.max ?? 50, [settingItem]);

    const [isIncrementDisabled, setIsIncrementDisabled] = useState<boolean>(false)
    const [isDecrementDisabled, setIsDecrementDisabled] = useState<boolean>(false)

    const setIsButtonDisabled = useCallback((currentValue: number) => {
        const isNextIncrementNeedDisable: boolean = currentValue + 1 >= max;
        const isNextDecrementNeedDisable: boolean = currentValue - 1 <= min;

        if (isIncrementDisabled !== isNextIncrementNeedDisable) {
            setIsIncrementDisabled(isNextIncrementNeedDisable)
        }
        if (isDecrementDisabled !== isNextDecrementNeedDisable) {
            setIsDecrementDisabled(isNextDecrementNeedDisable)
        }
    }, [isDecrementDisabled, isIncrementDisabled, max, min])

    const incrementValueField = useCallback((): void => {
        const currentValue: number = +getValues()[fieldName];
        const nextValue: number = currentValue + 1;
        if (currentValue + 1 < max) {
            setValue(fieldName, nextValue)
            setIsButtonDisabled(nextValue)
        }
    }, [fieldName, getValues, max, setIsButtonDisabled, setValue])

    const decrementValueField = useCallback((): void => {
        const currentValue: number = +getValues()[fieldName];
        const nextValue: number = currentValue - 1;
        if (currentValue - 1 > min) {
            setValue(fieldName, nextValue)
            setIsButtonDisabled(nextValue)
        }

    }, [fieldName, getValues, min, setIsButtonDisabled, setValue])

    const errorMessage = errors[fieldName]?.message;

    return {
        title,
        description,
        fieldName,
        defaultValue: defaultValue ?? 0,
        errorMessage,
        isRandom,
        isIncrementDisabled,
        isDecrementDisabled,
        min,
        max,
        incrementValueField,
        decrementValueField,
    }
}

export default useCounterSetting;
