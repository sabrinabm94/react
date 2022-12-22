import React, { render, screen } from "@testing-library/react";

import PainelSecondary from "./PainelSecondary";

describe("PainelSecondary", () => {
    const collection = "GreatCollection";
    const data = [
        {
            id: 1,
            title: "A great painel",
            subtitle: "Great painel to see",
            content: "Look to this painel"
        }
    ];
    // it("Shoud render the component", () => {
    //     render(<PainelSecondary
    //         collection={collection}
    //         dataId={data.id}
    //         title={data.title}
    //         subtitle={data.subtitle}
    //         content={data.content}
    //     />);

    //     expect(screen.getByTestId("painel-secondary-component")).toBeInTheDocument();
    // });
});