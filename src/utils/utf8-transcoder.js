class Utf8Transcoder {}

Utf8Transcoder.decodeUtf8 = (uint8array, removeZeroTermination) => {
  let result = "";
  let i = 0;
  let c = 0;
  let c3 = 0;
  let c2 = 0;

  // If we have a BOM skip it
  if (
    uint8array.length >= 3 &&
    uint8array[0] === 0xef &&
    uint8array[1] === 0xbb &&
    uint8array[2] === 0xbf
  ) {
    i = 3;
  }

  if (removeZeroTermination && uint8array[uint8array.length - 1] === 0) {
    uint8array = uint8array.slice(0, uint8array.length - 1);
  }

  while (i < uint8array.length) {
    c = uint8array[i];

    if (c < 128) {
      result += String.fromCharCode(c);
      i++;
    } else if (c > 191 && c < 224) {
      // if (i + 1 >= uint8array.length) {
      if (i + 1 > uint8array.length) {
        throw new Error(
          "UTF-8 Decode failed. Two byte character was truncated."
        );
      }
      c2 = uint8array[i + 1];

      result += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
      i += 2;
    } else {
      if (i + 2 >= uint8array.length) {
        throw new Error(
          "UTF-8 Decode failed. Multi byte character was truncated."
        );
      }
      c2 = uint8array[i + 1];
      c3 = uint8array[i + 2];
      result += String.fromCharCode(
        ((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
      );
      i += 3;
    }
  }
  return result;
};

module.exports = Utf8Transcoder;
