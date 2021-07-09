miro.onReady(() => {
    miro.initialize({
        extensionPoints: {
            bottomBar: {
                title: 'JIRA Paste',
                svgIcon:
                    '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
                positionPriority: 1,
                onClick: async () => {
                    navigator.clipboard.readText()
                        .then(text => {
                            await miro.board.widgets.create(
                                stickers.map((sticker) => ({
                                    type: 'shape',
                                    text: text,
                                })),
                            )
                        })
                        .catch(err => {
                            // maybe user didn't grant access to read from clipboard
                            console.log('Something went wrong', err);
                        });

                    // Show success message
                    miro.showNotification('Stickers has been converted')
                },
            },
        },
    })
})
