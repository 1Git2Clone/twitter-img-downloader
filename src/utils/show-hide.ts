import browser from "webextension-polyfill";
import { SAVE_AS_FORMAT } from "../config";
import { catchError, validTwitterUrl } from "../utils";

export function showHideContextMenu() {
  browser.tabs
    .query({ active: true, currentWindow: true })
    .then((tabs) => {
      const url = tabs[0].url;
      if (!url) return;

      if (validTwitterUrl(url)) {
        browser.contextMenus
          .update(SAVE_AS_FORMAT, { visible: true })
          .catch(catchError);
        return;
      }

      browser.contextMenus
        .update(SAVE_AS_FORMAT, { visible: false })
        .catch(catchError);

      return;
    })
    .catch(catchError);

  return;
}
