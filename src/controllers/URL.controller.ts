import { Request, Response } from "express";
import URLService from "../services/URL.service";

async function shortenURL(req: Request, res: Response) {
  const { url } = req.body;
  if (URLService.isValidURL(url)) {
    const shortUrl = await URLService.shortenURL(url);
    res.status(200).send(shortUrl);
  } else {
    res.status(400).send("Invalid URL")
  }
}

async function redirect(req: Request, res: Response) {
  const { urlId } = req.params;

  const originalURL: string | null = await URLService.findOriginalURLByURLId(urlId);
  if (originalURL) {
    return res.redirect(originalURL);
  }

  res.status(404).send('Not Found');
}

export default {
  shortenURL,
  redirect,
}
