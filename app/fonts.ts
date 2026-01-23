import localFont from "next/font/local";

export const mont = localFont({
    src: [
        {
            path: "./fonts/Mont-Heavy-Demo.otf",
            weight: "900",
            style: "normal",
        },
        {
            path: "./fonts/Mont-Extralight-Demo.otf",
            weight: "200",
            style: "normal",
        },
    ],
    variable: "--font-mont",
    display: "swap",
});
