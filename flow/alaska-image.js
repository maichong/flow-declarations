declare module 'alaska-image' {
  declare class ImageService extends Alaska$Service {
  }

  declare export default ImageService;
}
declare module 'alaska-image/models/Image' {
  declare export default class Image extends Alaska$Model {
  pic: Object;
  user: Object;
  createdAt: Date;
  }
}

declare module 'alaska-image/sleds/Upload' {
  declare export default class Upload extends Alaska$Sled {

  }
}
