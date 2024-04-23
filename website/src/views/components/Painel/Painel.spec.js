import React, { render, screen } from "@testing-library/react";

import Painel from "./Painel";

describe("Painel", () => {
    const collection = "AwesomeCollection";
    const data = [
        {
            id: 1,
            title: "One painel",
            subtitle: "Awesome painel",
            content: "Look to this message"
        }
    ];
    it("Shoud render the component", () => {
        render(<Painel
            collection={collection}
            dataId={data.id}
            title={data.title}
            subtitle={data.subtitle}
            content={data.content}
        />);
        let component = screen.getByTestId("Painel-component");
        expect(component).toBeInTheDocument();
    });
});