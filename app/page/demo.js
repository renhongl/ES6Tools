
define([], function() {
    'use strict';
    const config = {
        title: 'Demo',
        dialogs: [{
            id: 'Demo',
            type: 'dialog',
            showTitle: false,
            settings: {
                width: AP.width * 0.25,
                height: AP.height * 0.45,
                x: AP.width * 0.04 + 5,
                y: AP.height * 0 + 20,
            },
            content: {
                id: 'demo',
                type: 'module',
            }
        }, 
        {
            id: 'Demo2',
            type: 'dialog',
            showTitle: true,
            settings: {
                width: AP.width * 0.25,
                height: AP.height * 0.45,
                x: AP.width * 0.49 + 10,
                y: AP.height * 0 + 20,
            },
        }, 
        ]
    };

    return config;
});