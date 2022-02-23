/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(str, duplAllow) {
    if (str === '') { return '' }
    if (duplAllow === undefined) { return str }
    if (duplAllow === 0) { return '' }
    let duplCounter = 1
    str = str.split('')
    function findDupls(str, start) {
        for (let i = start; i < str.length; i++) {
            if (str[i] == str[i - 1]) {
                duplCounter++
                if (str[i] !== str[i + 1]) {
                    duplCounter = 1
                }
                if (duplCounter >= duplAllow) {
                    str.splice(i, 1)
                    return findDupls(str, i)
                    break
                }
            }


        }
        return str.reduce((acc, cur) => acc + cur)
    }
    return findDupls(str, 0)

}
trimSymbols('xxxaaaaa', 2);
