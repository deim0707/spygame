import {ReactNode} from "react";
import CounterSetting from "../../CreateGame/Components/CreateGameItems/CounterSetting/CounterSetting";
import CheckboxSetting from "../../CreateGame/Components/CreateGameItems/CheckboxSetting/CheckboxSetting";

export type TypeSettingGame = "checkbox" | "count+random" | "count" | "timer";

export interface ISettingsGame {
    order: number,
    type: TypeSettingGame,
    fieldName: string,
    title: string,
    description: string,
    defaultValue?: string | number | boolean,
    min?: number,
    max?: number,
    errorMessage?: string,
}

export const settingItems: ISettingsGame[] = [
    {
        order: 1,
        type: "checkbox",
        fieldName: "online",
        title: "Онлайн раздача",
        description: "вы получите код игры, по которому остальные игроки смогут подключиться",
        defaultValue: false,
    },
    {
        order: 2,
        type: "checkbox",
        fieldName: "leading",
        title: "Выбрать ведущего",
        description: "ведущий задаёт вопрос первым",
        defaultValue: true,
    },
    {
        order: 3,
        type: "count+random",
        fieldName: "countPlayers",
        title: "Колличество шпионов",
        description: "из общего колличества игроков",
        defaultValue: 1,
        min: 1,
        max: 10,
    },
]

type TypeSettingComponentsByType = {
    [key in TypeSettingGame]: ReactNode;
};

export const settingComponentsByType: TypeSettingComponentsByType = {
    "count+random": CounterSetting,
    "checkbox": CheckboxSetting,
    "count": CounterSetting,
    "timer": CounterSetting,
}
