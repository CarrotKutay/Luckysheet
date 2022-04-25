// helper class

/**
 * method to check if a given object is of type array and if it contains any objects. If it does not contain any,
 * it will return a new empty array else it will return the given array
 * @param array
 * @returns {*|*[]}
 */
export function getOrCreateArray(array) {
    return Array.isArray(array) && array.length !== 0 ? array : []
}