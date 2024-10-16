<!--
{
  "id": "dummy-entry-from-md",
  "title": "A Dummy Entry from Markdown",
  "description": "Generating articles from markdown files statically",
  "thumbnail": "https://avatars.githubusercontent.com/u/61908580?v=4",
  "tags": [ "programming", "svelte", "markdown" ],
  "stamps": {
    "created": "Tue Oct 15 2024 01:14:08 GMT+0800 (Taipei Standard Time)",
    "added":   "Tue Oct 15 2024 01:14:08 GMT+0800 (Taipei Standard Time)"
  }
}
-->
# A dummy entry!
This is a dummy entry that should show up as an article! Automatically generated from a markdown file.

There's also some embedded json data inside the markdown itself wrapped in a comment that is used on the markdown compilation. You can find the original markdown file [here](https://github.com/u16rogue/u16rogue.github.io/blob/master/articles/local-markdown/dummy-entry.md). The metadata of this entry looks like this:
```json
{
  "id": "dummy-entry-from-md",
  "title": "A Dummy Entry from Markdown",
  "description": "Generating articles from markdown files statically",
  "thumbnail": "https://avatars.githubusercontent.com/u/61908580?v=4",
  "tags": [ "programming", "svelte", "markdown" ],
  "stamps": {
    "created": "Tue Oct 15 2024 01:14:08 GMT+0800 (Taipei Standard Time)",
    "added":   "Tue Oct 15 2024 01:14:08 GMT+0800 (Taipei Standard Time)"
  }
}
```

## Things

* It seems like Github Actions minutes aren't consumed for page actions.
* With GitHub actions you can directly create and edit markdown into the repo and the action workflow takes care of everything.
* Svelte's static adapter is quite impressive.

This serves more of a functionality and feature test. Here are some:
* image loading

    ![profileimage](https://avatars.githubusercontent.com/u/61908580?v=4)

* table

    | Header 1 | Header 2 | Header 3 |
    |:--------:|:--------:|:--------:|
    | 11111111 | 22222222 | 33333333 |
    | 44444444 | 55555555 | 66666666 |
    | 77777777 | 88888888 | 99999999 |
    | 77777777 | 88888888 | 99999999 |
    | 77777777 | 88888888 | 99999999 |

* quote

<div class="center">

> this is a quote inside a div with custom css - `aaaa`
</div>

<style>
  .content .center {
    display: flex;
    justify-content: center;
  }
</style>

* single line

    `single line`

