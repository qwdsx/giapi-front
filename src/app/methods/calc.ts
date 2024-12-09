import { SubStat, SubStatRollTotal } from "../types/api-types";


export const calculateCritValue = (crit_rate: number, crit_dmg: number): number => {
    if (!crit_rate) crit_rate = 0;
    if (!crit_dmg) crit_dmg = 0;

    return (crit_rate * 2 + crit_dmg)
}

export const calculateRollValue = (
    subStats: SubStat[],
    subStatRollTotals: SubStatRollTotal[]
) => {
    let total = 0;
    for (const substat of subStats) {
        const subStatRollTotal  = subStatRollTotals.find(i => i.id === substat.id)!;

        if (!parseFloat(subStatRollTotal.value)) continue;

        const subStatRollCount = Math.ceil(parseFloat(subStatRollTotal.value) / substat.roll_values[3]);

        total += parseFloat(subStatRollTotal.value) / (subStatRollCount * substat.roll_values[3]);
    }

    return total * 100;
}

export const calculateDamage = (
    talentMultiplier: number,
    scaling: number,
    dmgBonus: number,
    dmgReductionTarget: number,
    enemyDefMultiplier: number,
    enemyResMultiplier: number,
    ampReaction: number,
    critDmg: number
): number => {
    return (talentMultiplier * scaling)
        * (1 + dmgBonus - dmgReductionTarget)
        * enemyDefMultiplier
        * enemyResMultiplier
        * ampReaction
        * critDmg;
}

export const avgCrit = (critRate: number, critDmg: number): number => {
    return 1 + clamp(0, critRate / 100, 1) * critDmg;
}

const clamp = (a: number, x: number, b: number) => {
    return Math.max(a, Math.min(x, b))
}