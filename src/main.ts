import browser from "webextension-polyfill";

const SAVE_AS_PNG = "save-as-png";
const VALID_IMAGE_SOURCES = ["pbs.twimg.com"];

browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    id: SAVE_AS_PNG,
    title: "Save as PNG",
    contexts: ["image"],
    visible: false,
  });
});

function validSaveAsPngUrl(url: string): boolean {
  for (const valid of VALID_IMAGE_SOURCES) {
    if (url.includes(valid)) {
      return true;
    }
  }
  return false;
}

browser.tabs.onActivated.addListener(() => {
  browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    for (const tab of tabs) {
      const url = tab.url ?? "";

      if (validSaveAsPngUrl(url)) {
        browser.contextMenus.update(SAVE_AS_PNG, { visible: true });
        return;
      }
    }

    browser.contextMenus.update(SAVE_AS_PNG, { visible: false });

    return;
  });
});

browser.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "save-as-png") {
    const url = info.srcUrl ?? "";

    if (!validSaveAsPngUrl(url)) {
      console.error(`This URL isn't a Twitter image!\nURL: ${url}`);
      return;
    }

    const targetFormat = "png";

    const pngUrl = url
      .replace(/\?format=\w+/, `?format=${targetFormat}`)
      // NOTE: `&name=large` gives a higher quality image than omitting the
      // whole part.
      .replace(/&name=\w+/, `&name=large`);

    // Example:
    // https://pbs.twimg.com/media/GfXAxjEbMAACmb8?format=png&name=large
    //                             GfXAxjEbMAACmb8 + . + ${targetFormat}
    const filename = `${pngUrl.split("/").pop()?.split("?").at(0)}.${targetFormat}`;

    browser.downloads
      .download({
        url: pngUrl,
        filename: filename,
        saveAs: true,
      })
      .catch((e: unknown) => console.error(e));

    return;
  }
});
