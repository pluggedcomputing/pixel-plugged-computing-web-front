# 🔍 Relatório de Refatoração — pixel-plugged-computing-web-front

> Análise completa sob a ótica de desenvolvedor sênior Angular. Cada ponto inclui o arquivo afetado, o problema e a solução recomendada.

---

## 1. 🏗️ Arquitetura & Estrutura

### 1.1 — Rotas sem Lazy Loading
**Arquivo:** [app.routes.ts](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/app.routes.ts)

**Problema:** Todos os 10 componentes de rota são importados estaticamente no topo do arquivo e carregados no bundle inicial. Isso aumenta o tempo de carregamento da primeira tela desnecessariamente.

**Solução:** Usar `loadComponent` para lazy load de cada rota:
```diff
- import { Level1Component } from './pages/levels/level-1/level-1';
- { path: 'level-1', component: Level1Component },

+ { path: 'level-1', loadComponent: () =>
+     import('./pages/levels/level-1/level-1').then(m => m.Level1Component) },
```
Aplicar a **todas** as rotas de `home`, `help`, `about`, `level-selection`, `identification-user`, `level-1` a `level-5`.

---

### 1.2 — 5 componentes de nível idênticos (violação do DRY)
**Arquivos:** [level-1.ts](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/pages/levels/level-1/level-1.ts) … [level-5.ts](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/pages/levels/level-5/level-5.ts)

**Problema:** `Level1Component`, `Level2Component` … `Level5Component` são 100% idênticos — diferem apenas no valor do `level`. São 5 arquivos com o mesmo código.

**Solução:** Um único componente `LevelComponent` com rota parametrizada:
```ts
// pages/levels/level/level.ts
export class LevelComponent implements OnInit {
  level!: string;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.level = this.route.snapshot.paramMap.get('id') ?? '1';
  }
}
```
```ts
// app.routes.ts
{ path: 'level/:id', loadComponent: () => import('./pages/levels/level/level').then(m => m.LevelComponent) }
```
Isso elimina 4 componentes + 4 templates + 4 arquivos SCSS + 4 specs.

---

### 1.3 — `shared/` e `guards/` estão vazios
**Arquivos:** [shared/](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/shared), [guards/](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/guards)

**Problema:** Diretórios existem mas estão completamente vazios. Geram confusão sobre a estrutura e não são usados.

**Solução:**  
- Remover os diretórios ou popular com conteúdo real.  
- Um **guard de autenticação** (`auth.guard.ts`) seria ideal para proteger as rotas de nível contra acesso direto sem identificação de usuário.

---

## 2. 📦 Models & Tipos

### 2.1 — `Question` é uma classe desnecessariamente complexa com getters/setters manuais
**Arquivo:** [question.model.ts](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/models/question.model.ts)

**Problema:** A classe tem 9 propriedades privadas + 9 setters manuais escritos à mão, mas **nenhum getter**. Os setters nunca são chamados no código (o construtor recebe tudo de uma vez). Isso é um anti-pattern em TypeScript.

**Solução:** Substituir por interface simples:
```ts
export interface Question {
  userID: string;
  idApp: string;
  phase: string;
  activity: string;
  userResponse: string;
  expectedResponse: string;
  isCorrect: boolean;
  dateResponse: Date;
  typeOfQuestion: string;
}
```
E no `card-host.ts` usar object literal ao invés de `new Question(...)`.

---

### 2.2 — Inconsistência de nomenclatura nos models
**Arquivos:** vários

**Problemas:**
- `exercice.model.ts` → `Exercice` (ortografia inglesa incorreta, deveria ser `Exercise`)
- `button-footer.model.ts` exporta `Footer` (nome genérico demais, deveria ser `FooterButton` ou `NavFooter`)
- `matrix-service.ts` usa `anwers` (typo, falta o `s`: `answers`)
- Método `setIsCorrects` (com `s` no final errado): [question.model.ts L49](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/models/question.model.ts#L49)
- Métodos `setuserID` e `setphase` com casing incorreto (deveriam ser `setUserID` e `setPhase`)

**Solução:** Renomear consistentemente com `camelCase` correto e corrigir typos.

---

### 2.3 — Uso de `any` no serviço de imagens
**Arquivo:** [load-images-service.ts](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/services/load-images/load-images-service.ts#L24)

**Problema:**
```ts
this.messageService.getMessages(component).subscribe((cards: any[]) => {
```
O uso de `any[]` anula o sistema de tipos do TypeScript.

**Solução:** Tipar corretamente com `Card[]` ou criar um tipo `{ imgUrl?: string }`.

---

## 3. 🧩 Componentes

### 3.1 — `ExitButtonComponent` e `ExitButtonBlueComponent` são idênticos exceto pelo asset
**Arquivos:** [exit-button.ts](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/buttons/exit-button/exit-button.ts), [exit-button-blue.ts](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/buttons/exit-button-blue/exit-button-blue.ts)

**Problema:** Dois componentes quase idênticos, diferindo apenas no path do ícone (`home-blue.png` vs `home-white.png`). Viola DRY. E no [card-host.html](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/card-host/card-host.html#L17-L21) há um `@if` para escolher qual renderizar.

**Solução:** Um único `ExitButtonComponent` com `@Input() variant: 'blue' | 'white' = 'blue'`:
```ts
@Input() variant: 'blue' | 'white' = 'blue';
get iconSrc() {
  return this.variant === 'blue'
    ? 'assets/icons/buttons/home-blue.png'
    : 'assets/icons/buttons/home-white.png';
}
```

---

### 3.2 — `ButtonForm` tem classe sem sufixo `Component`
**Arquivo:** [button-form.ts](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/buttons/button-form/button-form.ts#L12)

**Problema:** `export class ButtonForm` — a convenção Angular requer o sufixo `Component`. Também injeta `MessagesService` sem usá-lo.

**Solução:**
```ts
export class ButtonFormComponent { } // remover a injeção não utilizada
```

---

### 3.3 — `Congratulations` sem sufixo `Component`
**Arquivo:** [congratulations.ts](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/congratulations/congratulations.ts#L23)

**Problema:** `export class Congratulations` — mesma violação de convenção de nomenclatura Angular.

**Solução:**
```ts
export class CongratulationsComponent { }
```

---

### 3.4 — `SaveMatrizColor` sem sufixo `Component`
**Arquivo:** [save-matriz-color/save-matriz.ts](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/save-matriz-color/save-matriz.ts#L12)

**Problema:** `export class SaveMatrizColor` — mesma violação.

---

### 3.5 — `routerLink` aplicado à `<img>` em vez de ao `<button>` pai
**Arquivos:** [exit-button.html](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/buttons/exit-button/exit-button.html#L2), [exit-button-blue.html](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/buttons/exit-button-blue/exit-button-blue.html#L2)

**Problema:**
```html
<button data-cy="btn-exit">
    <img src="..." routerLink="/level-selection">
</button>
```
O `routerLink` está na `<img>`, não no `<button>`. Isso funciona acidentalmente mas é semanticamente errado e dificulta testes de acessibilidade.

**Solução:**
```html
<button data-cy="btn-exit" routerLink="/level-selection">
    <img src="..." alt="Voltar ao início">
</button>
```

---

### 3.6 — `<a>` com handler de clique em vez de `routerLink` (identificação de usuário)
**Arquivo:** [identification-user.html](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/pages/identification-user/identification-user.html#L19)

**Problema:**
```html
<a (click)="submitUserAnonymous()">...</a>
```
Usar `<a>` sem `href` para ações é anti-padrão de acessibilidade. Não é um link de navegação, é uma ação.

**Solução:**
```html
<button type="button" (click)="submitUserAnonymous()">...</button>
```

---

### 3.7 — `<button>` dentro de `<a>` no button-form
**Arquivo:** [button-form.html](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/buttons/button-form/button-form.html)

**Problema:**
```html
<a href="..."><button>...</button></a>
```
HTML inválido segundo a spec W3C: elementos interativos não podem ser aninhados.

**Solução:**
```html
<a href="..." target="_blank" rel="noopener noreferrer" class="form-link">
  <img src="..." alt="form" /> {{ 'form.button' | translate }}
</a>
```

---

### 3.8 — `MatrizActivityComponent` implementa `ngOnInit` sem declarar `OnInit`
**Arquivo:** [matriz-activity.component.ts](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/matriz-activity/matriz-activity.component.ts#L20)

**Problema:**
```ts
export class MatrizActivityComponent {
  ngOnInit() { ... } // sem implements OnInit
```
Sem `implements OnInit`, o TypeScript não verifica a assinatura do método.

**Solução:**
```ts
export class MatrizActivityComponent implements OnInit {
  ngOnInit(): void { ... }
```

---

### 3.9 — `img` sem `alt` nos templates de botões de nível
**Arquivo:** [footer-button.html](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/buttons/footer-button/footer-button.html#L6)

**Problema:** `alt=""` vazio para imagem interativa com click handler — problema de acessibilidade grave.

**Solução:** Usar `[alt]="title"` dinâmico.

---

### 3.10 — `img` sem `alt` na tela de congratulations
**Arquivo:** [congratulations.html](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/congratulations/congratulations.html#L6)

**Problema:** `alt=""` vazio na imagem principal.

---

### 3.11 — `input` com `type="userID"` inválido
**Arquivo:** [identification-user.html](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/pages/identification-user/identification-user.html#L8)

**Problema:**
```html
<input type="userID" ...>
```
`"userID"` não é um `type` HTML válido. O browser vai tratar como `text`, mas é semanticamente incorreto e pode causar comportamentos inesperados.

**Solução:**
```html
<input type="text" ...>
```

---

## 4. 🔧 Serviços

### 4.1 — `console.log` em produção no `SessionStorageService`
**Arquivo:** [session-storage-service.ts](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/services/session-storage/session-storage-service.ts)

**Problema:** Todos os métodos do serviço imprimem logs no console — isso expõe dados internos em produção e polui o console.
```ts
console.log(`Saving to sessionStorage: ${key} =`, value);
console.log(`Loading from sessionStorage: ${key} =`, item);
console.log(`Removing from sessionStorage: ${key}`);
```

**Solução:** Remover todos os `console.log` ou usar um `LoggerService` controlado por environment.

---

### 4.2 — `console.log` dispersos em componentes de produção
**Arquivos:**  
- [identification-user.ts L46, L55, L65, L74](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/pages/identification-user/identification-user.ts)  
- [card-host.ts L202-L203](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/card-host/card-host.ts#L202)  
- [load-images-service.ts L38](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/services/load-images/load-images-service.ts#L38)

**Solução:** Remover todos os `console.log`. Manter apenas `console.error` para erros reais.

---

### 4.3 — URL da API hard-coded nos serviços (sem environments)
**Arquivos:** [question-service.ts L9](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/services/question/question-service.ts#L9), [user-input-service.ts L9](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/services/user/user-input-service.ts#L9)

**Problema:**
```ts
private readonly API = 'https://activities.a4s.dev.br/api/response';
```
A URL de produção está diretamente no código. Não há separação entre dev/staging/prod.

**Solução:** Criar `src/environments/environment.ts` e `environment.prod.ts`:
```ts
// environment.ts
export const environment = {
  production: false,
  apiUrl: 'https://activities-dev.a4s.dev.br/api'
};

// no service:
private readonly API = `${environment.apiUrl}/response`;
```

---

### 4.4 — `userID` como propriedade pública no `UserInputService`
**Arquivo:** [user-input-service.ts L11](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/services/user/user-input-service.ts#L11)

**Problema:**
```ts
userID: string = '';
```
Propriedade pública mutável em um serviço singleton — qualquer componente pode sobrescrevê-la. Ademais, o `userID` já é salvo no `sessionStorage`, criando duplicidade de estado.

**Solução:** Remover a propriedade pública do serviço. Usar sempre o `SessionStorageService` como fonte de verdade para o `userID`.

---

### 4.5 — Mistura de `localStorage` e `sessionStorage`
**Arquivos:** [button-answer.ts L62-L66](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/buttons/button-answer/button-answer.ts#L62), [congratulations.ts L45-L47 e L101](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/congratulations/congratulations.ts)

**Problema:** O `SessionStorageService` existe para abstrair o storage, mas o `ButtonAnswerComponent` e `CongratulationsComponent` acessam `localStorage` diretamente, sem passar pelo serviço. Isso viola o princípio de responsabilidade única e torna impossível testar ou trocar a implementação.

**Solução:** Estender o `SessionStorageService` (ou criar um `LocalStorageService`) e injetá-lo. **Nunca** acessar `localStorage`/`sessionStorage` diretamente em componentes.

---

### 4.6 — `constructor` com lógica de negócio no `MessagesService`
**Arquivo:** [messages-service.ts L8-L12](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/services/messages/messages-service.ts#L8)

**Problema:**
```ts
constructor(private translate: TranslateService) {
  const languageSave = localStorage.getItem('language') || 'pt-br';
  translate.setDefaultLang('pt-br');
  translate.use(languageSave);
}
```
Acesso direto ao `localStorage` no constructor de um serviço — dificulta testes unitários e viola SRP.

**Solução:** Mover a inicialização para um método `initialize()` chamado no `APP_INITIALIZER` ou `ngOnInit` do `AppComponent`. Injetar `LocalStorageService` em vez de usar `localStorage` diretamente.

---

## 5. ⚙️ Lógica de Negócio

### 5.1 — Botão decide correto/incorreto internamente (mencionado pelo usuário)
**Arquivos:** [button-answer.ts](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/buttons/button-answer/button-answer.ts), [answer-host.ts](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/answer-host/answer-host.ts)

**Problema:** O `ButtonAnswerComponent` recebe `correctAnswer` como `@Input` e decide se está correto ou errado internamente (`isCorrect()`), além de salvar no `localStorage` e disparar a notificação — tudo isso dentro de um componente de UI. Viola o princípio de responsabilidade única: **um botão não deveria saber se a resposta é correta**.

**Fluxo atual (incorreto):**
```
ButtonAnswer recebe correctAnswer → compara → emite → salva localStorage → mostra notificação
```

**Fluxo correto (separação de responsabilidades):**
```
ButtonAnswer → emite apenas o valor clicado
CardHost/CardExercice → compara com correctAnswer → notifica → salva
```

**Solução:**
```ts
// button-answer.ts — apenas emitir o valor, sem lógica de negócio
response() {
  if (!this.block) {
    this.clicked.emit(this.answer);
    this.block = true;
    setTimeout(() => this.block = false, 1500);
  }
}
```
A lógica de `isCorrect`, notificação e `localStorage` deve subir para o `card-host.ts` onde `verifyAnswer()` já existe.

---

### 5.2 — Respostas hard-coded no `SaveMatrizComponent`
**Arquivo:** [save-matriz.component.ts L36](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/save-matriz/save-matriz.component.ts#L36)

**Problema:**
```ts
let answers: string[] = ['4-1,1-0', '1-1,1-0,3-1', '1-0,2-1,2-0'];
```
Respostas alternativas codificadas diretamente no componente. O mesmo problema existe no [save-matriz-color](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/save-matriz-color/save-matriz.ts#L46).

**Solução:** Mover as alternativas para o arquivo de dados JSON de i18n ou para um arquivo de configuração separado, não dentro de um componente.

---

### 5.3 — Detecção de último nível por string hard-coded
**Arquivo:** [congratulations.ts L105](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/congratulations/congratulations.ts#L105)

**Problema:**
```ts
isLastLevel(): boolean {
  if (this.level == 'Fase 5' || this.level == 'Level 5') {
    return true;
  }
```
Comparação de strings literais em dois idiomas hard-coded. Qualquer mudança de texto quebra a lógica. Usa `==` em vez de `===`.

**Solução:** Receber o número do nível como `@Input() levelNumber: number` e comparar `this.levelNumber === 5`.

---

### 5.4 — Navegação imediata antes de confirmar salvamento do usuário
**Arquivo:** [identification-user.ts L54-L56](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/pages/identification-user/identification-user.ts#L54)

**Problema:**
```ts
this.userInputService.saveUser(user).subscribe(
  (response) => { this.sessionStorageService.setItem('userID', this.userID); },
  (error) => { alert('Houve um erro...'); },
);
this.router.navigate(['/level-selection']); // navega ANTES da resposta da API
```
A navegação acontece **fora** do `subscribe`, antes da API responder. O `userID` pode não ter sido salvo no session quando a próxima rota carregar.

**Solução:**
```ts
this.userInputService.saveUser(user).subscribe({
  next: () => {
    this.sessionStorageService.setItem('userID', this.userID);
    this.router.navigate(['/level-selection']);
  },
  error: (err) => {
    console.error('Error saving user:', err);
    // modo offline: ainda navega mas com aviso
    this.sessionStorageService.setItem('userID', this.userID);
    this.router.navigate(['/level-selection']);
  }
});
```

---

### 5.5 — `setFinalMessage` chamado antes dos dados de i18n estarem disponíveis
**Arquivo:** [congratulations.ts L55-L61](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/congratulations/congratulations.ts#L55)

**Problema:**
```ts
this.msssagesService.getMessages('...').subscribe((messages) => {
  this.messagesCongratulationsList = messages;
});
this.setFinalMessage(); // chamado ANTES do subscribe completar
```
`setFinalMessage()` é chamado sincronamente, mas `messagesCongratulationsList` ainda está vazio.

**Solução:** Mover `setFinalMessage()` para dentro do callback do `subscribe`.

---

### 5.6 — `window.location.reload()` para trocar idioma
**Arquivo:** [language-selection.ts L17](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/language-selection/language-selection.ts#L17)

**Problema:**
```ts
changelanguage(language: string) {
  this.messagesService.setLanguage(language);
  window.location.reload(); // reload full da página
}
```
Um reload completo da página para trocar idioma é desnecessário quando usando `ngx-translate` — a biblioteca suporta troca dinâmica de idioma sem reload.

**Solução:** Remover o `window.location.reload()`. O `TranslateService.use()` já é reativo e atualiza todos os pipes `| translate` automaticamente. Pode ser necessário emitir um evento para que componentes que usam `translate.get()` imperativamente refaçam a chamada.

---

### 5.7 — `alert()` nativo para erros de usuário
**Arquivo:** [identification-user.ts L50, L69](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/pages/identification-user/identification-user.ts#L50)

**Problema:**
```ts
alert('Houve um erro ao se conectar...');
```
`alert()` nativo bloqueia a thread, tem UI diferente em cada browser e não pode ser estilizado. Já existe um `NotificationComponent` no projeto.

**Solução:** Usar o `NotificationComponent` ou criar um serviço de toast para exibir erros de forma não bloqueante.

---

### 5.8 — `Matrizes` instanciada com `new` no constructor do componente
**Arquivo:** [card-host.ts L48-L51](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/card-host/card-host.ts#L48)

**Problema:**
```ts
constructor() {
  const m = new Matrizes();
  this.matrizes = m.getAll();
}
```
Instanciar uma classe de dados no constructor do componente em vez de usar injeção de dependência dificulta testes e viola a inversão de controle. `Matrizes` deveria ser um serviço ou os dados deveriam vir de um provider.

**Solução:** Converter `Matrizes` em um `@Injectable` service ou mover os dados para um arquivo de constantes acessado diretamente:
```ts
import { MATRIZES_DATA } from '../../../assets/data/matrizesForLevels';
// no componente:
this.matrizes = MATRIZES_DATA;
```

---

### 5.9 — `isNotScreenExercice()` com `switch` de múltiplos `return false` (violação do Open/Closed)
**Arquivo:** [card-host.ts L103-L120](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/card-host/card-host.ts#L103)

**Problema:**
```ts
private isNotScreenExercice() {
  switch (this.currentCard?.type) {
    case 'screenExercice': return false;
    case 'screenMatrizExercice': return false;
    case 'screenSaveMatriz': return false;
    case 'screenSaveMatrizColor': return false;
    case 'screenPaintExercice': return false;
    case 'screenPaintColorExercice': return false;
    default: return true;
  }
}
```
6 cases que fazem a mesma coisa. Toda vez que um novo tipo de exercício for adicionado, esse método precisa ser alterado.

**Solução:** Extrair os tipos para uma constante e usar `includes`:
```ts
private readonly EXERCISE_SCREEN_TYPES = new Set([
  'screenExercice', 'screenMatrizExercice', 'screenSaveMatriz',
  'screenSaveMatrizColor', 'screenPaintExercice', 'screenPaintColorExercice'
]);

private isNotScreenExercice(): boolean {
  return !this.EXERCISE_SCREEN_TYPES.has(this.currentCard?.type ?? '');
}
```

---

### 5.10 — `ngClass` repetido 3 vezes com o mesmo objeto em `card-host.html`
**Arquivo:** [card-host.html](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/card-host/card-host.html)

**Problema:** O mesmo objeto `[ngClass]` com as 9 condições é copiado 3 vezes (no `<div>` container, no `<button>` de prev e no `<button>` de next) — totalizando ~75 linhas repetidas.

**Solução:** Mover para um `getter` no componente:
```ts
get screenClass(): Record<string, boolean> {
  const type = this.currentCard?.type;
  return {
    screenText: type === 'screenText',
    screenExercice: type === 'screenExercice',
    // ...
  };
}
```
```html
<div [ngClass]="screenClass">
  <button [ngClass]="screenClass" (click)="prevCard()">
```

---

## 6. 📋 Código Comentado & Código Morto

### 6.1 — Código comentado no `level-selection.ts`
**Arquivo:** [level-selection.ts L36-L37 e L46-L54](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/pages/level-selection/level-selection.ts)

**Problema:** Há 10 linhas de código comentado (`preloadImages`) que nunca são usadas.

**Solução:** Remover. O controle de versão (git) preserva o histórico.

---

### 6.2 — Typo no nome do atributo em `MessagesService`
**Arquivo:** [congratulations.ts L24](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/congratulations/congratulations.ts#L24)

**Problema:**
```ts
private msssagesService = inject(MessagesService); // 3 s's
```
Typo no nome da propriedade (`msssages` com três `s`).

---

## 7. 🔒 Visibilidade & Encapsulamento

### 7.1 — Serviços injetados como públicos em vez de `private`
**Arquivos:** [save-matriz.component.ts L15-L16](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/save-matriz/save-matriz.component.ts#L15), [card.ts L51](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/card/card.ts#L51), [matriz-activity.component.ts L18](file:///home/user/Developer/pivic/pixel-plugged-computing-web-front/src/app/components/matriz-activity/matriz-activity.component.ts#L18)

**Problema:**
```ts
matrizService = inject(MatrizService); // sem private!
messagesService = inject(MessagesService); // sem private!
```
Propriedades sem modificador são públicas por padrão, expondo os serviços ao template e a qualquer código externo desnecessariamente.

**Solução:** Adicionar `private` ou `readonly`:
```ts
private readonly matrizService = inject(MatrizService);
private readonly messagesService = inject(MessagesService);
```
> **Exceção válida:** se o serviço é usado no template, deve ser `protected` (Angular 14+).

---

### 7.2 — `@Input()` com `| undefined` desnecessário quando há `?`
**Arquivos:** múltiplos

**Problema:**
```ts
@Input() imgUrl?: string | undefined; // redundante
```
O `?` já implica `| undefined`. A redundância polui o código.

**Solução:**
```ts
@Input() imgUrl?: string;
```

---

## 8. 🧪 Testabilidade

### 8.1 — Acesso direto a `localStorage`/`sessionStorage` em componentes
Já descrito no item 4.5 — mas do ponto de vista de testes: componentes que acessam `localStorage` diretamente não podem ser testados sem mocks do ambiente global, tornando os testes de unidade frágeis.

---

### 8.2 — Constructor com lógica no `MessagesService` dificulta testes
Já descrito no item 4.6.

---

## 9. 📁 Inconsistência de Nomenclatura de Arquivos

| Componente | Arquivo atual | Padrão esperado |
|---|---|---|
| `SaveMatrizColor` | `save-matriz-color/save-matriz.ts` | `save-matriz-color/save-matriz-color.ts` |
| `CardExerciceComponent` | `card-exercice.component.ts` | `card-exercice.ts` |
| `CardPaintExerciceComponent` | `card-paint-exercice.component.ts` | `card-paint-exercice.ts` |
| `CardMatrizSaveComponent` | `card-matriz-save.component.ts` | `card-matriz-save.ts` |

Alguns componentes na pasta `cards-types` seguem o padrão `.component.ts` enquanto outros seguem apenas `.ts`. Deve ser padronizado.

---

## 10. ♿ Acessibilidade (a11y)

| # | Problema | Arquivo | Solução |
|---|---|---|---|
| 1 | `<img>` sem `alt` | `congratulations.html`, `footer-button.html` | Adicionar `alt` descritivo |
| 2 | `<a>` sem `href` como ação | `identification-user.html` | Usar `<button>` |
| 3 | `<button>` dentro de `<a>` | `button-form.html` | HTML semântico correto |
| 4 | Navegação interativa em `<img>` | `exit-button.html`, `exit-button-blue.html` | Mover `routerLink` para o `<button>` |
| 5 | `type="userID"` inválido | `identification-user.html` | Usar `type="text"` |

---

## Resumo por Prioridade

### 🔴 Alta (impacto funcional / bugs)
- [5.4] Navegação antes de confirmar salvamento
- [5.5] `setFinalMessage` chamado antes do i18n carregar
- [3.5] `routerLink` na `<img>` em vez do `<button>`
- [3.7] `<button>` dentro de `<a>`
- [3.11] `type="userID"` inválido

### 🟡 Média (manutenibilidade / boas práticas)
- [1.1] Lazy loading nas rotas
- [1.2] 5 componentes de nível idênticos → 1 com rota parametrizada
- [2.1] `Question` classe → interface
- [4.1] `console.log` no `SessionStorageService`
- [4.3] URLs hard-coded sem environments
- [4.5] Mistura `localStorage`/`sessionStorage` direto em componentes
- [5.1] Botão decidindo correto/incorreto (arquitetura)
- [5.8] `new Matrizes()` no constructor
- [5.9] `switch` com 6 `return false` → `Set.has()`
- [5.10] `ngClass` triplicado no template

### 🟢 Baixa (limpeza / nomenclatura)
- [2.2] Typos nos models (`Exercice`, `anwers`, `setIsCorrects`)
- [3.1] Dois exit-buttons → um com `@Input()`
- [3.2–3.4] Classes sem sufixo `Component`
- [3.8] `ngOnInit` sem `implements OnInit`
- [6.1] Código comentado
- [6.2] Typo `msssagesService`
- [7.1] Serviços sem `private`
- [7.2] `@Input()` com `| undefined` redundante
- [9] Inconsistência de nomes de arquivos
