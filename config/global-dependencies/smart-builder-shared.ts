declare global {
  interface Window {
    sbShared: any;
  }
}

export const {
  FullScreenModal,
  CardContainer,
  CardList,
  CardListControls,
  CardsListWrapper,
  NoResults,
  backgroundImageSchema,
  backgroundSizeSchema,
  borderRadiusSchema,
  colorSchema,
  cssPositionsSchema,
  pixelAttributeSchema,
  stylesSchema,
  textAlignSchema,
  textDecorationSchema,
  typographySchema,
} = window['sbShared'];

export default window['sbShared'];
