import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


enum Comic {
  GirlGenius
}

class UrlSplitter {
  public static from(url:string) {
    if (!url.includes('?')) return new DefaultPage();

    const parameters = url.split('?')[1].split('&');

    const comic = parameters.find(m => m.startsWith("comic")) || "comic=gg";

    if (comic === 'comic=qc') return new QuestionableContent();

    return new GirlGenius();
  }
}

class DefaultPage {
  private server: string = "http://localhost:3000";
  // private server: string = "https://vanonselenp.github.io";

  generateImage(current: string, next: string) {
    return (
      <a href={`${this.server}/comic-viewer?${next}`}>
            <img className="fit-picture"
              src={`http://www.girlgeniusonline.com/ggmain/strips/ggmain${current}.jpg`}
              alt="Grapefruit slice atop a pile of other slices"/>
      </a>
    );
  }

}

class GirlGenius extends DefaultPage {

}

class QuestionableContent extends DefaultPage  {

}


describe("UrlSplitter", () => {
  it("should parse query to generate gg", () => {
    const url = "http://localhost:3000";

    const actual = UrlSplitter.from(url);

    expect(actual).toBeInstanceOf(DefaultPage);
  });

  it("should parse query to generate gg", () => {
    const url = "http://localhost:3000?comic=gg";

    const actual = UrlSplitter.from(url);

    expect(actual).toBeInstanceOf(GirlGenius);
  });

  it("should parse query to generate qc", () => {
    const url = "http://localhost:3000?comic=qc";

    const actual = UrlSplitter.from(url);

    expect(actual).toBeInstanceOf(QuestionableContent);
  });
});