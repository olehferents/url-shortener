import { URL } from 'url';
import { nanoid } from 'nanoid';

import URLEntity from "../entities/URL.entity";
import logger from "../middlewares/Logger";
import { server } from "../config/config";

async function shortenURL(url: string): Promise<string | null> {
  try {
    const urlEntity = await URLEntity.findOne({ originalURL: url }, ).exec();
    if (urlEntity) {
      return urlEntity.shortURL;
    }
    const urlId = nanoid(6);
    const created = await URLEntity.create({ urlId, originalURL: url, shortURL: `${server.baseURL}/${urlId}` });
    return created.shortURL;
  } catch (error: any) {
    logger.error(`Error during URL reducing ${error}`);
    return null;
  }
}

async function findOriginalURLByURLId(urlId: string): Promise<string | null> {
  try {
    const urlEntity = await URLEntity.findOne({ urlId }).exec();
    if (urlEntity) {
      return urlEntity.originalURL;
    }
  } catch (error: any) {
    logger.error(`Error during finding by short URL id ${error}`)
  }

  return null;
}

function isValidURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
}

export default {
  shortenURL,
  findOriginalURLByURLId,
  isValidURL,
}
