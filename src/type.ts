export enum Actions {
  BlurBackground,
}
export type State = {
  blurBackground: boolean;
};
export type Action = { type: Actions; payload: any };
