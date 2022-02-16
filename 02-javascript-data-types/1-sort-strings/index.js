/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {

    let direction
    switch (param) {
        case 'asc': direction = 1
            break
        case 'desc': direction = -1
            break
        default:

            alert('неверно задан параметр сортировки')
            break
    }
    const sortedArr = [...arr].sort((a, b) => direction * a.localeCompare(b, ['ru', 'en'], { caseFirst: 'upper' }))
    return sortedArr
}



