import { corsProxy } from './index';

export class Empowered {
    startPage = 'volume-1-page-1';
  
    getNextPage = (htmldoc, localPage) => {
      const s = new Set();
      Array
        .from(htmldoc.links)
        .filter(m => m.className === 'cc-next')
        .map(m => {
          const data = m.href.split('/');
          return data[data.length - 1]
        })
        .forEach(m => s.add(m))
  
      const sorted = [...s].sort();
  
      const nextcomic = sorted[0];
      console.log(nextcomic);
      return nextcomic;
    }
  
    getCurrentImages = (htmldoc) => {
      const images = Array.from(htmldoc.images)
            .map(m => m.src)
            .filter(m => m.startsWith("https://www.empoweredcomic.com/comic"));
      return images
    }
    
    getPageUrl = (localPage) => {
      return `${corsProxy}https://www.empoweredcomic.com/comic/${localPage}`
    }
  }