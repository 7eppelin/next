export const PALETTE = {
    BLUE_PRIMARY: "#177EFF",

    WHITE: "#FFF",
    GREY: "#EBEEF6",
    GREY_2: "#F5F6FA",
    GREY_3: "#F5F5F5",
} as const;

// export type PaletteColor = typeof PALETTE[keyof typeof PALETTE];

export const HEADER_HEIGHT = "48px";
export const SIDEBAR_WIDTH = "208px";

export const TYPOGRAPHY = {
    SMALL: `
        font-size: 14px;
        line-height: 16px;
        font-weight: normal
    `,
    BODY: `
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
    `,
};
