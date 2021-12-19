---
id: query_injected_templates
title: Query all injected templates
sidebar_label: Query all injected templates
author: josunlp
slug: /queryInjectedTemplates
---

## Get them all

To prevent possible errors, a template that has already been injected and one that has not yet been injected can be checked.
It is possible to query all injected templates. The 'getInjectedTemplates' method is available for this purpose. The return object contains an array of objects that contain the names and classes of the injected templates.

    SGL.getInjectedTemplates()

    // Returns an array of objects
    // Example:
    // [
    // {
    // "callName": "example_template",
    // "template":{}
    // },
    // {
    // "callName": "example_template2",
    // "template":{}
    // }
    //]
