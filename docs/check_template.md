---
id: check_template
title: Check template
sidebar_label: Check template
author: josunlp
slug: /checkTemplate
---

## Check that your template is fine

To prevent possible errors, a template that has already been injected and one that has not yet been injected can be checked.
The `checkTemplate` method is available for this purpose. This returns a bool or a response object.

An exemplary call:

    SGL.checkTemplate("basic", "example_template")

    // Returns true or false

    SGL.checkTemplate("advanced", "example_template", new Example_Template())

    // Returns true or false

    SGL.checkTemplate("all")

    // Returns either true or a response object

> There are 3 usage modes available for this endpoint:
>
> - basic
> - Checks if an already injected template exists and is valid.
> - Returns a bool.
> - advanced
> - Checks if a template passed at this point is present and valid.
> - Returns a bool.
> - all
> - Checks all already injected templates.
> - Returns either true or a response object.
>
> The default behavior for missing parameters is to return false.
