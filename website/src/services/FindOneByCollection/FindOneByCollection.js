import FindAllByCollection from "../../services/FindAllByCollection/FindAllByCollection";

function FindOneByCollection(collection) {
    return FindAllByCollection(collection)
        .then(elements => {
            return elements[elements.length - 1]
        })
        .catch((err) => {
            console.error(err);
            // throw new Error();
            return null;
        });
}

// Async: FindLastOneByCollection
// async function FindLastOneByCollection(collection) {
//     try {
//         const elements = await FindAllByCollection(collection)
//         return elements[elements.length - 1];
//     } catch(err) {
//         return null;
//     }
// }

export default FindOneByCollection;
