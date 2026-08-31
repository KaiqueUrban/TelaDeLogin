# Tela de Login

🔗 [Ver projeto online](https://kaiqueurban.github.io/TelaDeLogin/)

Interface de login desenvolvida com HTML5, CSS3 e JavaScript, com foco em estrutura semântica, acessibilidade, responsividade e validação de formulário.

![Preview](./preview.png)

## Tecnologias

- HTML5
- CSS3 (Flexbox, Box Model, Media Queries)
- JavaScript (DOM, Eventos, Validação de formulário)

## Funcionalidades

- Formulário de login com campos de e-mail e senha
- Validação customizada em JavaScript, com feedback visual em tempo real (sem `alert`):
  - Verificação de campos vazios
  - Validação de formato de e-mail
  - Senha com no mínimo 8 caracteres, uma letra maiúscula e um número
- Botão de mostrar/ocultar senha
- Atributos de acessibilidade (`autocomplete`, `label`/`for` corretamente associados)
- Layout responsivo, testado em desktop, tablet e celular
- Efeito hover nos links de navegação

## Como executar

```bash
git clone https://github.com/KaiqueUrban/TelaDeLogin.git
```

Abra o arquivo `index.html` no navegador, ou utilize a extensão **Live Server** (VSCode) para uma melhor experiência de desenvolvimento.

## Estrutura do projeto

```
TelaDeLogin/
├── index.html
├── style.css
├── script.js
├── preview.png
├── Icones/
│   └── eye.svg
└── Imagens/
    └── background.jpg
```

## Roadmap

- [x] Estrutura HTML semântica e acessível
- [x] Estilização com CSS (Flexbox, Box Model)
- [x] Responsividade com Media Queries
- [x] Validação de formulário com JavaScript
- [x] Feedback visual de erros (sem `alert`)
- [x] Botão de mostrar/ocultar senha
- [ ] Transições suaves nas mensagens de erro
- [ ] Loading no botão de envio
- [ ] Simulação de cadastro/login com LocalStorage
- [ ] Back-end com Node.js e banco de dados

## Autor

**Kaique Urban**
[LinkedIn](https://www.linkedin.com/in/kaiqueurban) · [GitHub](https://github.com/kaiqueurban)
