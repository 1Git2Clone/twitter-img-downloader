import { Menus } from "webextension-polyfill";
import { SAVE_AS_FORMAT } from "../config";
import { saveAsTargetFormat } from "../utils";

export function handleSaveAsTargetFormat(info: Menus.OnClickData) {
  if (info.menuItemId !== SAVE_AS_FORMAT) {
    return;
  }

  const url = info.srcUrl;
  if (!url) return;

  saveAsTargetFormat(url);

  return;
}
