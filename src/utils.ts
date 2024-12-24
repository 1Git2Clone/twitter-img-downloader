import browser from "webextension-polyfill";
import {
  PHOTO_BLOBSTORE_URL,
  TARGET_FORMAT,
  VALID_IMAGE_SOURCES,
} from "./config";

export function catchError(e: unknown) {
  console.error(e);

  return;
}

export function validTwitterUrl(url: string): boolean {
  for (const valid of VALID_IMAGE_SOURCES) if (url.includes(valid)) return true;

  return false;
}

/**
 * Calls `browser.downloads` only on Twitter's Photo BlobStore URLs (the place
 * from which the twitter pictures are downloaded).
 */
export function saveAsTargetFormat(url: string) {
  if (!url.includes(PHOTO_BLOBSTORE_URL)) {
    console.error(`This URL isn't a Twitter image!\nURL: ${url}`);
    return;
  }

  const pngUrl = url
    .replace(/\?format=\w+/, `?format=${TARGET_FORMAT}`)
    // NOTE: `&name=large` gives a higher quality image than omitting the
    // whole part.
    .replace(/&name=\w+/, `&name=large`);

  // Example:
  // https://pbs.twimg.com/media/GfXAxjEbMAACmb8?format=png&name=large
  //                             GfXAxjEbMAACmb8 + . + ${targetFormat}
  const filename = `${pngUrl.split("/").pop()?.split("?").at(0)}.${TARGET_FORMAT}`;

  browser.downloads
    .download({
      url: pngUrl,
      filename: filename,
      saveAs: true,
    })
    .catch(catchError);
}
