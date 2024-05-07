import { React, Component } from "react";
import { db, databaseRef, get } from "../../init-firebase";

const dbRef = databaseRef(db);

//função async ou promise
// Promise: FindOneByCollection('elementsCollection').then(elementsArray)
// async: const elementsArray = await FindOneByCollection('elementsCollection')
function FindOneByCollection(collection) {
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

                        const lastElement =
                            elementsArray[elementsArray.length - 1];
                        resolve(lastElement);
                    }
                } else {
                    //console.log("No data available ", collection);
                    resolve(null);
                }
            });
        } catch (error) {
            reject(error);
        }
    });
}

export default FindOneByCollection;
