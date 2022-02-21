module.exports = async function myPlugin(context, options) {
    // ...
    return {
        name: 'inject-widget',
        async loadContent() {
            /* ... */
        },
        async contentLoaded({ content, actions }) {
            /* ... */
        },
        /* other lifecycle API */
        injectHtmlTags({ content }) {
            return {
                headTags: [
                ],
                /* <script id="xapp-js" src="https://widget.xapp.ai/xapp-chat-widget.js?key=ea63c5bc-692b-4e70-a2de-77f5f621eed4"></script> */
                preBodyTags: [
                    {
                        tagName: 'script',
                        attributes: {
                            id: "xapp-js",
                            src: 'https://widget.xapp.ai/xapp-chat-widget.js?key=ea63c5bc-692b-4e70-a2de-77f5f621eed4',
                        },
                    },
                ],
                postBodyTags: [`<div> This is post body </div>`],
            };
        },
    };
};