/* eslint-disable no-useless-escape */
/* eslint-disable eqeqeq */
/* eslint-disable radix */
/* eslint-disable no-bitwise */
/* eslint-disable no-shadow */
export const style = (style, propsStyle) => {
  if (propsStyle) {
    if (Array.isArray(propsStyle)) {
      style = style.concat(propsStyle);
    } else {
      style.push(propsStyle);
    }
  }
  return style;
};

export const hexToRgbA = (hex, alpha = 1) => {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return (
      'rgba(' +
        [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
        ',' +
        alpha || 1 + ')'
    );
  }
  throw new Error('Bad Hex');
};

export const rgbToRgbA = (color, alpha) => {
  color = '' + color;
  if (!color || color.indexOf('rgb') < 0) {
    return;
  }

  if (color.charAt(0) == '#') {
    return color;
  }

  var nums = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(color),
    r = parseInt(nums[2]),
    g = parseInt(nums[3]),
    b = parseInt(nums[4]);

  return `rgba(${r}, ${g}, ${b}, ${alpha || 1})`;
};

export const rgbToHex = color => {
  color = '' + color;
  if (!color || color.indexOf('rgb') < 0) {
    return;
  }

  if (color.charAt(0) == '#') {
    return color;
  }

  var nums = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(color),
    r = parseInt(nums[2], 10).toString(16),
    g = parseInt(nums[3], 10).toString(16),
    b = parseInt(nums[4], 10).toString(16);

  return (
    '#' +
    ((r.length == 1 ? '0' + r : r) +
      (g.length == 1 ? '0' + g : g) +
      (b.length == 1 ? '0' + b : b))
  );
};

export const fileProps = file => {
  if (!file.path) file.path = file.uri;
  if (!file.filename)
    file.filename =
      file.fileName || file.path.substring(file.path.lastIndexOf('/') + 1);
  if (!file.name) file.name = file.fileName || file.filename;
  if (!file.type) file.type = file.mime;
  if (!file.uri) file.uri = file.path;
  if (file.fileSize) file.size = file.fileSize;
  return file;
};

export const validateEmail = text => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === true) {
    return true;
  }
  return false;
};

export const validatePhone = text => {
  if (text.length >= 7 && text.length <= 12) {
    return true;
  }
  return false;
};