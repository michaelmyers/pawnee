import "@xapp/intelligent-search-widget/dist/index.css";

import React, { useMemo } from 'react';
import { SearchContainer, SearchIcon, SearchWidgetConfig, SearchWidgetTheme, WidgetCardTheme } from "@xapp/intelligent-search-widget";

const config: SearchWidgetConfig = {
    api: {
        key: "ea63c5bc-692b-4e70-a2de-77f5f621eed4",
        url: "https://eyj0n2o61g.execute-api.us-east-1.amazonaws.com/prod/studio"
    },
    suggestionsUrl: "https://api.xapp.ai/chat/suggestions"
};

export default function SearchBar(): JSX.Element {

    const accentColor = "#2e8555";

    const theme = useMemo(() => buildDefaultTheme({ accentColor }), [accentColor]);

    const button = (
        <button style={{ width: "80px", height: "40px", borderRadius: "40px", cursor: "pointer", border: "1" }} >
            <span style={{ display: "flex", alignItems: "center" }} >
                <SearchIcon />
                <span>Search</span>
            </span>
        </button >);

    return (
        <SearchContainer
            config={config}
            theme={theme}
            button={button}
        />
    );
}

function buildDefaultTheme(opts: {
    accentColor: string | undefined
    fontFamily?: string
}): SearchWidgetTheme {
    const accentColor = opts.accentColor || "#0000cc";
    const fontFamily = opts.fontFamily || "RobotoRegular";
    const card: WidgetCardTheme = {
        margin: {
            top: "0px",
            right: "0px",
            bottom: "20px",
            left: "0px",
        },
        padding: {
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
        },
        border: {
            width: "0px",
            color: accentColor,
            style: "solid",
            radius: "12px"
        },
        background: "#ffffff",
        title: {
            text: {
                color: "#000",
                fontSize: "24px",
                fontFamily,
                fontWeight: "normal"
            },
            margin: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
            },
            padding: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
            }
        },
        description: {
            text: {
                color: "#000",
                fontSize: "16px",
                fontFamily,
                fontWeight: "normal"
            },
            margin: {
                top: "16px",
                right: "0px",
                bottom: "0px",
                left: "0px",
            },
            padding: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
            }
        },
        link: {
            text: {
                default: {
                    color: "#0000ff",
                    fontSize: "16px",
                    fontFamily,
                    fontWeight: "normal"
                }
            },
            margin: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
            },
            padding: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
            }
        }
    };
    return {
        accentColor,
        border: {
            width: "1px",
            color: accentColor,
            style: "solid",
            radius: "17.5px"
        },
        card,
        carousel: {
            card
        },
        list: {
            card
        },
        messages: {
            others: {
                bubble: {
                    background: "#ffffff"
                },
                text: {
                    color: "#000000"
                }
            }
        }
    } as SearchWidgetTheme;
}

