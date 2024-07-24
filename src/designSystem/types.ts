import React from "react";

declare module "@mui/material/styles/createPalette" {
    interface Palette {
        green: {main: string}
    }

    interface PaletteOptions {
        green: {main: string}

    }

}