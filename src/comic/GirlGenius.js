import { corsProxy } from './index';

export class GirlGenius {
    startPage = '20021104';
  
    getNextPage = (htmldoc, localPage) => {
      const s = new Set();
      Array
        .from(htmldoc.links)
        .filter(m => m.href.startsWith('http://www.girlgeniusonline.com/comic.php?date='))
        .map(m => m.href.split("=")[1])
        .forEach(m => s.add(m))
  
      s.add(localPage);
  
      const sorted = [...s].sort();
  
      const nextcomic = sorted[sorted.findIndex(m => m === localPage) + 1];
      return nextcomic;
    };
  
    getCurrentImages = (htmldoc) => {
      const images = Array.from(htmldoc.images)
            .map(m => m.src)
            .filter(m => m.startsWith("http://www.girlgeniusonline.com/ggmain/strips/ggmain"));
      return images
    }
  
    getPageUrl = (localPage) => {
      return `${corsProxy}https://www.girlgeniusonline.com/comic.php?date=${localPage}`;
    };
  }