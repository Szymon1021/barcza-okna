export const assetUrl = (src: string): string => {
  if (!src.startsWith("/images/")) {
    return src;
  }

  return `${process.env.PUBLIC_URL || ""}${src}`;
};