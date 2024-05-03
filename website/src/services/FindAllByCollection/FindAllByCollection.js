import { React, Component } from "react";
import { db, databaseRef, get } from "../../init-firebase";

const dbRef = databaseRef(db);

function FindAllByCollection({ collection, parentCallback }) {
    try {
        get(dbRef, collection).then((response) => {
            if (response.exists()) {
                let elements = response.val()[collection];
                let elementsArray = [];

                if (elements && elements !== undefined && elements !== null) {
                    if (typeof elements === "object") {
                        //loop para objeto
                        elementsArray = Object.keys(elements).map(
                            (key) => elements[key].form
                        );
                    }
                    //console.log("Got data ", collection, elementsArray);

                    //devolve a informação para o componente que renderizou o getData pelo parentCallback
                    parentCallback(elementsArray);
                }
            } else {
                //console.log("No data available ", collection);
            }
        });
    } catch (error) {
        return error;
    }
}

export default FindAllByCollection;