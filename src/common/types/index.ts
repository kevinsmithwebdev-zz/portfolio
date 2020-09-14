export type ButtonType = {
  textSlug: string,
  link: string,
}

export type PaintingDataType = {
  name: string,
  text: string,
  techs: string[],
  imgStem: string,
  buttons: ButtonType[],
  comments: string,
}