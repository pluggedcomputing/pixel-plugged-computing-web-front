declare namespace Cypress {
  interface Chainable {
    getByData(selector: string): Chainable<JQuery<HTMLElement>>;
    advanceScreens(selector: number): Chainable<JQuery<HTMLElement>>;
    answerAndVerify(selector: string): Chainable<JQuery<HTMLElement>>;
    nextLevel(): Chainable<JQuery<HTMLElement>>;
  }
}
