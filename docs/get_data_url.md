---
id: get_data_url
title: Get Data URL
sidebar_label: Get Data URL
author: josunlp
slug: /getDataUrl
---

## Get just, what you need

It is possible to generate only the dataURL of the desired image and to return it.
For this the method `getImageDataUrl` is called on the class`SGL`. This returns the corresponding DataURL as a promise.

An exemplary call:

     await new SGL.getImageDataUrl (
       document.getElementById ('M. Mustermann'). value,
       document.getElementById ('Mustercorp'). value,
       'logo',
       'webp'
     ));
