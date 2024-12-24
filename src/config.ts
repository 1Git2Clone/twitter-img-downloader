export const TARGET_FORMAT: string = "png";
export const SAVE_AS_FORMAT: string = `save-as-${TARGET_FORMAT}`;

/**
 * Yes, that's how it's called.
 *
 * - <https://blog.x.com/engineering/en_us/a/2012/blobstore-twitter-s-in-house-photo-storage-system>
 */
export const PHOTO_BLOBSTORE_URL: string = "pbs.twimg.com";
export const VALID_IMAGE_SOURCES: string[] = [
  "x.com",
  "twitter.com",
  PHOTO_BLOBSTORE_URL,
];
