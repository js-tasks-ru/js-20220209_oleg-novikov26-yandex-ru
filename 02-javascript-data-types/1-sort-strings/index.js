/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {

    const sortedArr = [...arr].sort((a, b) => a.localeCompare(b, ['ru', 'en'], { caseFirst: 'upper' }))
    switch (param) {
        case 'asc': return sortedArr

        case 'desc': return sortedArr.reverse()

        default:

            alert('неверно задан параметр сортировки')
            break
    }
}



