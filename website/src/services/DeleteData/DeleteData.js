import { db, databaseRef, remove } from "../../init-firebase";

function DeleteData(collection, id) {
    return new Promise((resolve, reject) => {
        if (!collection || !id) {
            reject("Invalid collection or id");
            return;
        }

        const dataRef = databaseRef(db, `${collection}/${id}`);
        
        remove(dataRef)
            .then(() => {
                resolve();  // Resolving without data as there's no return value from remove
            })
            .catch((error) => {
                console.error(`Error deleting item with id: ${id}`, error);
                reject(error);
            });
    });
}

export default DeleteData;
