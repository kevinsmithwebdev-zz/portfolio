
// TODO: handle articles and i18n title case

export default (str: string) =>
  str.toLowerCase().split(' ').map(word => word.replace(word[0], word[0].toUpperCase())).join(' ');
