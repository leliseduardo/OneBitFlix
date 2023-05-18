import { ResourceOptions } from "adminjs";

export const courseResourceOptions: ResourceOptions = {
  navigation: `Catálogo`,
  editProperties: [
    `name`,
    `synopsis`,
    `uploadThumbnail`,
    `featured`,
    `categoryId`,
  ],
  filterProperties: [`name`, `synopsis`, `featured`, `createdAt`, `uploadAt`],
  listProperties: [`id`, `name`, `featured`, `categoryId`],
  showProperties: [
    `id`,
    `name`,
    `synopsis`,
    `featured`,
    `thumbnail`,
    `categoryId`,
    `createdAt`,
    `uploadAt`,
  ],
};
