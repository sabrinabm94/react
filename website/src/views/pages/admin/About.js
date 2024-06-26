import { React, useState, useEffect } from "react";

//components
import Input from "../../components/Form/Input/Input";
import Textarea from "../../components/Form/Textarea/Textarea";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form/Form";

//services
import FindOneByCollection from "../../../services/FindOneByCollection/FindOneByCollection";

function About(props) {
    const icons = [
        "asterisk",
        "plus",
        "minus",
        "euro",
        "cloud",
        "envelope",
        "pencil",
        "glass",
        "music",
        "search",
        "heart",
        "star",
        "star-empty",
        "user",
        "film",
        "th-large",
        "th",
        "th-list",
        "ok",
        "remove",
        "zoom-in",
        "zoom-out",
        "off",
        "signal",
        "cog",
        "trash",
        "home",
        "file",
        "time",
        "road",
        "download-alt",
        "download",
        "upload",
        "inbox",
        "play-circle",
        "repeat",
        "refresh",
        "list-alt",
        "lock",
        "flag",
        "headphones",
        "volume-off",
        "volume-down",
        "volume-up",
        "qrcode",
        "barcode",
        "tag",
        "tags",
        "book",
        "bookmark",
        "print",
        "camera",
        "font",
        "bold",
        "italic",
        "text-height",
        "text-width",
        "align-left",
        "align-center",
        "align-right",
        "align-justify",
        "list",
        "indent-left",
        "indent-right",
        "facetime-video",
        "picture",
        "map-marker",
        "adjust",
        "tint",
        "edit",
        "share",
        "check",
        "move",
        "step-backward",
        "fast-backward",
        "backward",
        "play",
        "pause",
        "stop",
        "forward",
        "fast-forward",
        "step-forward",
        "eject",
        "chevron-left",
        "chevron-right",
        "plus-sign",
        "minus-sign",
        "remove-sign",
        "ok-sign",
        "question-sign",
        "info-sign",
        "screenshot",
        "remove-circle",
        "ok-circle",
        "ban-circle",
        "arrow-left",
        "arrow-right",
        "arrow-up",
        "arrow-down",
        "share-alt",
        "resize-full",
        "resize-small",
        "exclamation-sign",
        "gift",
        "leaf",
        "fire",
        "eye-open",
        "eye-close",
        "warning-sign",
        "plane",
        "calendar",
        "random",
        "comment",
        "magnet",
        "chevron-up",
        "chevron-down",
        "retweet",
        "shopping-cart",
        "folder-close",
        "folder-open",
        "resize-vertical",
        "resize-horizontal",
        "hdd",
        "bullhorn",
        "bell",
        "certificate",
        "thumbs-up",
        "thumbs-down",
        "hand-right",
        "hand-left",
        "hand-up",
        "hand-down",
        "circle-arrow-right",
        "circle-arrow-left",
        "circle-arrow-up",
        "circle-arrow-down",
        "globe",
        "wrench",
        "tasks",
        "filter",
        "briefcase",
        "fullscreen",
        "dashboard",
        "paperclip",
        "heart-empty",
        "link",
        "phone",
        "pushpin",
        "usd",
        "gbp",
        "sort",
        "sort-by-alphabet",
        "sort-by-alphabet-alt",
        "sort-by-order",
        "sort-by-order-alt",
        "sort-by-attributes",
        "sort-by-attributes-alt",
        "unchecked",
        "expand",
        "collapse-down",
        "collapse-up",
        "log-in",
        "flash",
        "log-out",
        "new-window",
        "record",
        "save",
        "open",
        "saved",
        "import",
        "export",
        "send",
        "floppy-disk",
        "floppy-saved",
        "floppy-remove",
        "floppy-save",
        "floppy-open",
        "credit-card",
        "transfer",
        "cutlery",
        "header",
        "compressed",
        "earphone",
        "phone-alt",
        "tower",
        "stats",
        "sd-video",
        "hd-video",
        "subtitles",
        "sound-stereo",
        "sound-dolby",
        "sound-5-1",
        "sound-6-1",
        "sound-7-1",
        "copyright-mark",
        "registration-mark",
        "cloud-download",
        "cloud-upload",
        "tree-conifer",
        "tree-deciduous",
        "cd",
        "save-file",
        "open-file",
        "level-up",
        "copy",
        "paste",
        "alert",
        "equalizer",
        "king",
        "queen",
        "pawn",
        "bishop",
        "knight",
        "baby-formula",
        "tent",
        "blackboard",
        "bed",
        "apple",
        "erase",
        "hourglass",
        "lamp",
        "duplicate",
        "piggy-bank",
        "scissors",
        "bitcoin",
        "yen",
        "ruble",
        "scale",
        "ice-lolly",
        "ice-lolly-tasted",
        "education",
        "option-horizontal",
        "option-vertical",
        "menu-hamburger",
        "modal-window",
        "oil",
        "grain",
        "sunglasses",
        "text-size",
        "text-color",
        "text-background",
        "object-align-top",
        "object-align-bottom",
        "object-align-horizontal",
        "object-align-left",
        "object-align-vertical",
        "object-align-right",
        "triangle-right",
        "triangle-left",
        "triangle-bottom",
        "triangle-top",
        "superscript",
        "subscript",
        "menu-left",
        "menu-right",
        "menu-down",
        "menu-up",
    ];

    const [elements, setElements] = useState([]);

    const handleGetData = (data) => {
        if (data && data !== null && data !== undefined && data !== "") {
            setElements(data);
        }
    };

    useEffect(() => {
        FindOneByCollection("aboutElements").then((elementArray) => {
            handleGetData(elementArray);
        });
    }, []);

    return (
        <div
            id="admin-about"
            className="container-fluid text-center bg-grey"
        >
            <section className="section admin-about">
                <h1 className="title">Admin configuration:</h1>
                <h2 className="title">Company</h2>
                <h2 className="subtitle">New register</h2>
                <Form collection="aboutElements" className="form">
                    <div className="row">
                        <div className="col-6 col-sm-6">
                            <Input
                                type="text"
                                className="input"
                                name="title"
                                placeholder="Title"
                            />
                        </div>
                        <div className="col-6 col-sm-6">
                            <Textarea
                                className="input"
                                name="content"
                                placeholder="Content"
                            />
                        </div>
                        <div className="col-6 col-sm-6">
                            <select
                                className="select"
                                aria-labelledby="select"
                                name="icon"
                            >
                                <>
                                    {this.icons !== null &&
                                        this.icons !== undefined &&
                                        this.icons.length > 0 &&
                                        this.icons.map((data, key) => {
                                            return (
                                                <option
                                                    value={data}
                                                    className="dropdown-item"
                                                    key={key}
                                                    id={key}
                                                >
                                                    {data}
                                                </option>
                                            );
                                        })}
                                </>
                            </select>
                        </div>
                        <div className="col-12 col-sm-12">
                            <Button
                                type="submit"
                                className="btn-primary"
                                text="Submit"
                            />
                        </div>
                    </div>
                </Form>
            </section>
        </div>
    );
}

export default About;
