export type TypeSettingGame = "checkbox" | "count+random" | "count" | "timer";

interface ISettingsGame {
    order: number,
    type: TypeSettingGame,
    fieldName: string,
    title: string,
    description: string,
}

export const settingItems: ISettingsGame[] = [
    {
        order: 1,
        type: "checkbox",
        fieldName: "online",
        title: "Онлайн раздача",
        description: "вы получите код игры, по которому остальные игроки смогут подключиться",
    },
    {
        order: 2,
        type: "checkbox",
        fieldName: "leading",
        title: "Выбрать ведущего",
        description: "ведущий задаёт вопрос первым",
    },
    {
        order: 3,
        type: "count+random",
        fieldName: "countPlayers",
        title: "Колличество шпионов",
        description: "из общего колличества игроков",
    },
]
