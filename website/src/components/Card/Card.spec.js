import React, { render, screen } from "@testing-library/react";

import Card from "./Card";

describe("Card", () => {
    const data = {
        icon: "certificate",
        title: "Just a card",
        subtitle: "But very good"
    }
    it("Shoud render the component", () => {
        render(
        <Card
            iconName={`glyphicon-${data.icon} logo-small`}
            title={data.title}
            subtitle={data.subtitle}
        />
        );
        let component = screen.getByTestId("card-component");
        expect(component).toBeInTheDocument();
    });
});