import React, { useState } from "react";
import { ref, storage, uploadBytes, getDownloadURL } from "../../../../init-firebase";
import SetData from "../../../../services/SetData/SetData";

function Form({ collection, className, children }) {
    const [elements, setElements] = useState([]);

    const sendData = (event) => {
        event.preventDefault(); // Evita o envio padrão do formulário

        if (!collection) return;

        const form = {};
        const formElements = event.target.elements; // Acessa os elementos do formulário corretamente

        for (let element of formElements) {
            if (element && element.name) {
                if (element.type === "file" && element.files.length > 0) {
                    form[element.name] = element.files[0]; // Guarda o arquivo (apenas o primeiro)
                } else {
                    form[element.name] = element.value; // Guarda o valor dos campos de texto
                }
            }
        }

        handleDataSubmission(collection, form, event)
            .catch(error => {
                console.error("Error in sendData:", error);
            });
    };

    const handleDataSubmission = (collection, form, event) => {
        return new Promise((resolve, reject) => {
            if (form.file) {
                handleFileUpload(collection, form)
                    .then(() => handleSetData(collection, form, event))
                    .then(resolve)
                    .catch(reject);
            } else {
                handleSetData(collection, form, event)
                    .then(resolve)
                    .catch(reject);
            }
        });
    };

    const handleFileUpload = (collection, form) => {
        return new Promise((resolve, reject) => {
            if (form.file) {
                const file = form.file;
                const fileRef = ref(storage, `${collection}/${file.name}`);

                uploadBytes(fileRef, file)
                    .then(() => getDownloadURL(fileRef))
                    .then(url => {
                        form.fileUrl = url; // Guarda apenas a URL do arquivo
                        delete form.file; // Remove o campo file do objeto form
                        resolve();
                    })
                    .catch(reject);
            } else {
                resolve(); // Caso não haja arquivo, apenas resolve
            }
        });
    };

    const handleSetData = (collection, form, event) => {
        return new Promise((resolve, reject) => {
            SetData(collection, form)
                .then(response => {
                    // Atualiza os elementos com o ID e os novos dados
                    setElements(prevElements => [...prevElements, { id: response, ...form }]);
                    event.target.reset(); // Limpa o formulário após o envio bem-sucedido
                    resolve(response);
                })
                .catch(reject);
        });
    };

    //TODO: converter para pattern de composição
    return (
        <form
            onSubmit={sendData}
            className={className}
            id={className}
            data-testid="form-component"
        >
            {children}
        </form>
    );
}

export default Form;
