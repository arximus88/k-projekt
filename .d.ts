declare module 'photoswipe/dist/photoswipe-lightbox.esm' {
    export default class PhotoSwipeLightbox {
      constructor(options: any);
      init(): void;
      destroy(): void;
    }
  }
  
  declare module 'photoswipe/dist/photoswipe.esm' {
    export default class PhotoSwipe {
      constructor(element: HTMLElement, pswpModule: any, items: any[], options: any);
      init(): void;
      destroy(): void;
      options: any;
      getCurrentIndex(): number;
      goTo(index: number): void;
    }
  }
  