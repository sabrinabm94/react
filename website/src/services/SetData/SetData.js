import { db, databaseRef, push, set } from "../../init-firebase";

const SetData = (collection, form) => {
    return new Promise((resolve, reject) => {
        if (collection && form) {
            const newRef = push(databaseRef(db, collection)); // Cria uma nova referência para o nó da coleção

            // Salva os dados no nó com o ID gerado automaticamente
            set(newRef, form)
                .then(() => {
                    // Adiciona o ID gerado ao objeto form
                    form.id = newRef.key;
                    resolve(form); // Resolve a Promise com os dados completos, incluindo o ID
                    alert("Sucess!");
                })
                .catch(error => {
                    reject(error); // Rejeita a Promise em caso de erro no salvamento
                });
        } else {
            reject(new Error("Invalid collection or form data"));
        }
    });
};

export default SetData;
