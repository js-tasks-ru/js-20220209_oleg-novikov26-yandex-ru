/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(field) {
    let wayArr = field.split('.')
    function findField(obj, i) {

        for (const [key, value] of Object.entries(obj)) {
            if (wayArr[i].includes(key)) {
                if (typeof (value) === 'object') {
                    i++
                    return findField(value, i)
                    break
                }
                else {
                    return value
                }


            }


        }
    }
    return function (obj) {
        return findField(obj, 0)


    }


}


const product = {
    category: {
        title: "Goods"
    }
}

const getter = createGetter('category.title');
console.log(getter(product));

