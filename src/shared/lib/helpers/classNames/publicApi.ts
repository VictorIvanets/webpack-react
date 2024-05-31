type Mods = Record<string, boolean | string>

export function className(cls: string, mods?: Mods, additional?: string[]): string {


return [
    cls, 
    ...additional.filter(Boolean),
    ...Object.entries(mods)
        .filter(([className, value])=>Boolean(value))
        .map(([className])=> className)
].join(' ')

}


module.exports = className

