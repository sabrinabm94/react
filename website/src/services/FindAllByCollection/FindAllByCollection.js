import { db, databaseRef, child, get } from "../../init-firebase";

const dbRef = databaseRef(db);

function FindAllByCollection(collection) {
    return new Promise((resolve, reject) => {
        try {
            const collectionRef = child(dbRef, collection);

            get(collectionRef).then((snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    const elementsArray = [];

                    // Mapeia cada chave do objeto de dados
                    Object.keys(data).forEach((index, key) => {
                        // Acessa diretamente o campo 'form' dentro de data[key]
                        const element = {
                            id: index,
                            ...data[index],
                        };
                        elementsArray.push(element); // Adiciona o elemento ao array
                    });

                    resolve(elementsArray); // Resolve a promise com o array de elementos
                } else {
                    resolve([]); // Resolve com um array vazio se não houver dados
                }
            });
        } catch (error) {
            reject(error); // Rejeita a promise se houver um erro
        }
    });
}

export default FindAllByCollection;
