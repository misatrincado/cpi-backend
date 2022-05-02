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
    listSubambito.map(itemSub => {
        return listParametros.filter(i => i.subambito.id === itemSub.id).map(itemParam => {
            const promedioFilter = listResults.filter(i => i.indicador.parametro.id === itemParam.id)
            const promedio = promedioFilter.filter(i => i.puntos)
            amount += promedio.length
        })
    })
    return amount
}