import browser from "webextension-polyfill";
import { SAVE_AS_FORMAT, TARGET_FORMAT } from "../config";

export function initialize() {
  browser.contextMenus.create({
    id: SAVE_AS_FORMAT,
    title: `Save as ${TARGET_FORMAT.toUpperCase()}`,
    contexts: ["image"],
    visible: false,
  });

  return;
}
