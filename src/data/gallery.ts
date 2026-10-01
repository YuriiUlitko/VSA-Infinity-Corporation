import { asset } from '../utils/asset';

export type GalleryCategory = "Bathroom" | "Floor" | "Walls";

export type GalleryImage = {
  id: string;
  src: string;
  category: GalleryCategory;
  alt: string;
};

export const galleryCategories: Array<'All' | GalleryCategory> = ['All', "Bathroom", "Floor", "Walls"];

const galleryImagesRaw: GalleryImage[] = [
  {
    "id": "bathroom-fb_img_1762864408449-jpg",
    "src": "/gallery/bathroom/fb_img_1762864408449-jpg.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img-20230227-wa0012-jpg",
    "src": "/gallery/bathroom/img-20230227-wa0012-jpg.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img-20241120-wa0019-jpg",
    "src": "/gallery/bathroom/img-20241120-wa0019-jpg.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_4295",
    "src": "/gallery/bathroom/img_4295.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_4571",
    "src": "/gallery/bathroom/img_4571.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_4572",
    "src": "/gallery/bathroom/img_4572.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_4671",
    "src": "/gallery/bathroom/img_4671.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_4672",
    "src": "/gallery/bathroom/img_4672.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_4673",
    "src": "/gallery/bathroom/img_4673.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_4674",
    "src": "/gallery/bathroom/img_4674.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_5158",
    "src": "/gallery/bathroom/img_5158.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_5159",
    "src": "/gallery/bathroom/img_5159.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_5160",
    "src": "/gallery/bathroom/img_5160.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_5161-1",
    "src": "/gallery/bathroom/img_5161-1.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_5164",
    "src": "/gallery/bathroom/img_5164.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_5165",
    "src": "/gallery/bathroom/img_5165.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_5166",
    "src": "/gallery/bathroom/img_5166.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_5602",
    "src": "/gallery/bathroom/img_5602.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_5603",
    "src": "/gallery/bathroom/img_5603.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_5604",
    "src": "/gallery/bathroom/img_5604.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_5605",
    "src": "/gallery/bathroom/img_5605.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_5606",
    "src": "/gallery/bathroom/img_5606.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_5888",
    "src": "/gallery/bathroom/img_5888.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_5889",
    "src": "/gallery/bathroom/img_5889.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_5890",
    "src": "/gallery/bathroom/img_5890.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_6501-jpg",
    "src": "/gallery/bathroom/img_6501-jpg.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_6543-jpg",
    "src": "/gallery/bathroom/img_6543-jpg.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_7035",
    "src": "/gallery/bathroom/img_7035.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_7036",
    "src": "/gallery/bathroom/img_7036.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_7037",
    "src": "/gallery/bathroom/img_7037.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_7043",
    "src": "/gallery/bathroom/img_7043.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_7492",
    "src": "/gallery/bathroom/img_7492.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_7493",
    "src": "/gallery/bathroom/img_7493.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_7495",
    "src": "/gallery/bathroom/img_7495.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_7499",
    "src": "/gallery/bathroom/img_7499.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_7500",
    "src": "/gallery/bathroom/img_7500.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_9227",
    "src": "/gallery/bathroom/img_9227.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_9228",
    "src": "/gallery/bathroom/img_9228.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_9230",
    "src": "/gallery/bathroom/img_9230.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "bathroom-img_9231",
    "src": "/gallery/bathroom/img_9231.jpg",
    "category": "Bathroom",
    "alt": "Bathroom project photo"
  },
  {
    "id": "floor-63355866967__7ce143f3-581a-4302-8dc6-056a754ee064",
    "src": "/gallery/floor/63355866967__7ce143f3-581a-4302-8dc6-056a754ee064.jpg",
    "category": "Floor",
    "alt": "Floor project photo"
  },
  {
    "id": "floor-63374022660__66dedee1-1f87-4334-9b2d-41601ede3fe5",
    "src": "/gallery/floor/63374022660__66dedee1-1f87-4334-9b2d-41601ede3fe5.jpg",
    "category": "Floor",
    "alt": "Floor project photo"
  },
  {
    "id": "floor-img_7217",
    "src": "/gallery/floor/img_7217.jpg",
    "category": "Floor",
    "alt": "Floor project photo"
  },
  {
    "id": "floor-img_7223",
    "src": "/gallery/floor/img_7223.jpg",
    "category": "Floor",
    "alt": "Floor project photo"
  },
  {
    "id": "floor-img_8151",
    "src": "/gallery/floor/img_8151.jpg",
    "category": "Floor",
    "alt": "Floor project photo"
  },
  {
    "id": "floor-img_8180",
    "src": "/gallery/floor/img_8180.jpg",
    "category": "Floor",
    "alt": "Floor project photo"
  },
  {
    "id": "walls-img_0277",
    "src": "/gallery/walls/img_0277.jpg",
    "category": "Walls",
    "alt": "Walls project photo"
  },
  {
    "id": "walls-img_0278",
    "src": "/gallery/walls/img_0278.jpg",
    "category": "Walls",
    "alt": "Walls project photo"
  },
  {
    "id": "walls-img_0279",
    "src": "/gallery/walls/img_0279.jpg",
    "category": "Walls",
    "alt": "Walls project photo"
  },
  {
    "id": "walls-img_0280",
    "src": "/gallery/walls/img_0280.jpg",
    "category": "Walls",
    "alt": "Walls project photo"
  },
  {
    "id": "walls-img_6607",
    "src": "/gallery/walls/img_6607.jpg",
    "category": "Walls",
    "alt": "Walls project photo"
  },
  {
    "id": "walls-img_6609",
    "src": "/gallery/walls/img_6609.jpg",
    "category": "Walls",
    "alt": "Walls project photo"
  },
  {
    "id": "walls-img_7419",
    "src": "/gallery/walls/img_7419.jpg",
    "category": "Walls",
    "alt": "Walls project photo"
  },
  {
    "id": "walls-img_7438",
    "src": "/gallery/walls/img_7438.jpg",
    "category": "Walls",
    "alt": "Walls project photo"
  }
];

export const galleryImages: GalleryImage[] = galleryImagesRaw.map((img) => ({
  ...img,
  src: asset(img.src)
}));
