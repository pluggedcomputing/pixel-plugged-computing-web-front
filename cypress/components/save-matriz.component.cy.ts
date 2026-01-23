import { SaveMatrizComponent } from '../../src/app/components/save-matriz/save-matriz.component';

describe('SaveMatrizComponent', () => {
  it('should mount', () => {
    cy.mount(SaveMatrizComponent, {
      imports: [],
      providers: [],
    });
  });
});
