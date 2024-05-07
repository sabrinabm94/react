import { React, Component } from "react";
import { db, databaseRef, get } from "../../init-firebase";

const dbRef = databaseRef(db);

function FindAllByCollection(collection) {
    return new Promise((resolve, reject) => {
        try {
            get(dbRef, collection).then((response) => {
                if (response.exists()) {
                    let elements = response.val()[collection];
                    let elementsArray = [];

                    if (
                        elements &&
                        elements !== undefined &&
                        elements !== null
                    ) {
                        if (typeof elements === "object") {
                            //loop para objeto
                            elementsArray = Object.keys(elements).map(
                                (key) => elements[key].form
                            );
                        }
                        //console.log("Got data ", collection, elementsArray);

                        resolve(elementsArray);
                    }
                } else {
                    //console.log("No data available ", collection);
                    resolve([]);
                }
            });
        } catch (error) {
            reject(error);
        }
    });
}

export default FindAllByCollection;
