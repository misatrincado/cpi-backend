export const promedioParametro = (listResults, idParametro) => {
    // eslint-disable-next-line max-len
    let value = 0
    const promedioFilter = listResults.filter(i => i.indicador.parametro.id === idParametro)
    const promedio = promedioFilter.filter(i => i.puntos)
    promedio.map(i => {
        value += Number(i.puntos)
    })
    if (promedio.length < 1) {
        return 0
    }
    return Math.round(value / promedio.length)
}

export const promedioSubambito = (listResults, listParametros, subambito) => {
    let calculo = 0
    const parametrosFilter = listParametros.filter(item => item.subambito.id === subambito.id)
    parametrosFilter.map(item => {
        calculo += promedioParametro(listResults, item.id)
    })
    return Math.round(calculo / parametrosFilter.length)
}

export const promedioAmbito = (listResults, listSubambito, listParametros) => {
    let calculo = 0
    listSubambito.map(item => {
        let promedio = promedioSubambito(listResults, listParametros, item)
        if (!promedio) {
            promedio = 0
        }
        calculo += promedio
    })
    return Math.round(calculo / listSubambito.length)
}

export const obtainIndicatorsFilled = (listResults, listSubambito, listParametros) => {
    let amount = 0
    let qty = 0
    listSubambito.map(itemSub => {
        return listParametros.filter(i => i.subambito.id === itemSub.id).map(itemParam => {
            qty += listResults.length
            const promedioFilter = listResults.filter(i => i.indicador.parametro.id === itemParam.id)
            const promedio = promedioFilter.filter(i => i.puntos)
            amount += promedio.length
        })
    })
    return amount
}

export const obtainIndicatorsQty = (listSubambito, listParametros, listIndicadores) => {
    return listSubambito.reduce((acc: any, itemSub) => {
        if (!acc) {
            acc = 0
        }
        const parametroFilter = listParametros.filter((param: any) => param.subambito.id === itemSub.id)
        const parametro = parametroFilter.reduce((accP: any, item) => {
            if (!accP) {
                accP = 0
            }
            const indicadores = listIndicadores.filter((indicador: any) => indicador.parametro.id === item.id)
            return accP += indicadores.length
        }, 0)
        return acc += parametro
    }, 0)
}   