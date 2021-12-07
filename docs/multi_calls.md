---
id: multi_calls
title: Calling multible generations
---

The necessary parameters for creation are transferred to the multiGenerator as a JSON array and the necessary team and player names as strings. From this he builds the corresponding pictures.
___

```
new SGL
        .multiGenerator(
            teamName,
            userName
        {
            [
                {
                    mode: 'twitch-title',
                    containerId: 'img-container-1',
                    imgMode: 'jpeg'
                },
                {
                    mode: 'youtube-title',
                    containerId: 'img-container-4',
                    imgMode: 'webp',
                    generateLink: true
                },
                {
                    mode: 'logo',
                    containerId: 'img-container-5',
                    imgMode: 'svg'
                }
            ]
        });
```
