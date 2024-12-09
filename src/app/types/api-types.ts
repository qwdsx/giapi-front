
export type Stat = {
    lvl: string,
    hp: number,
    atk: number,
    def: number,
    crit_rate: number,
    crit_dmg: number
}

export type Character = {
    id: string,
    name: string,
    vision: string,
    weapon: string,
    nation: string,
    rarity: number,
    stats: Stat[],
    icon_url: string
}

export type SubStat = {
    id: string,
    name: string,
    roll_values: number[],
    max_roll: number
}

export type SubStatRollTotal = {
    id: string,
    value: string
}