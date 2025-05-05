export class Image {
  ratio: string
  url: string
  width: number
  height: number
  fallback: boolean

  constructor() {
    this.ratio = '';
    this.url = '';
    this.width = 0;
    this.height = 0;
    this.fallback = false;
  }
}
