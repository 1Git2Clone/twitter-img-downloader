# Twitter PNG Downloader

[![Mozilla Addons Icon]][Mozilla Addons]&emsp;[![Build Icon]][Build Status]&emsp;[![License Icon]][LICENSE]

[Mozilla Addons Icon]: https://img.shields.io/badge/Mozilla%20Addons-Save%20Twitter%20Image%20as%20PNG-orange.svg
[Mozilla Addons]: https://addons.mozilla.org/en-US/firefox/addon/save-twitter-image-as-png
[Build Icon]: https://img.shields.io/github/actions/workflow/status/1git2clone/twitter-img-downloader/ci.yml?branch=main
[Build Status]: https://github.com/1git2clone/twitter-img-downloader/actions?query=branch%3Amain
[License Icon]: https://img.shields.io/badge/license-MIT-blue.svg
[LICENSE]: LICENSE

A very simple browser extension that adds a context menu option to save Twitter
images as a PNG directly.

It works by modifying the twitter image link to change the format of the image
(usually `jpg`) to `png` like so:

```txt
From:
- https://pbs.twimg.com/media/GfYlXIkbMAAG5XL?format=jpg&name=medium

To:
- https://pbs.twimg.com/media/GfYlXIkbMAAG5XL?format=png&name=large
```

## Setting up

### Firefox

[Video Showcase](https://github.com/user-attachments/assets/27b392fe-6b08-4fb2-bf82-72a14dadcd89 "Video Showcase")

> [!NOTE]
> You can get the extension from [here](https://addons.mozilla.org/en-US/firefox/addon/save-twitter-image-as-png).

### Usage

1. Go on ~~x~~ twitter.

2. Right click on an image and you'll have a `Save as PNG` context menu option.
