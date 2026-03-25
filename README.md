# FIAP Salas

Aplicativo mobile para consulta de disponibilidade de salas, laboratorios e auditorios da FIAP.

## a) Sobre o Projeto

**FIAP Salas** resolve um problema real do dia a dia na FIAP: a dificuldade de saber quais salas estao disponiveis para estudo, reunioes de grupo ou aulas extras.

### Problema Escolhido

Alunos frequentemente perdem tempo andando pelos corredores da FIAP procurando salas livres para estudar ou reunir grupos de trabalho. Nao existe uma forma rapida de consultar a disponibilidade dos espacos.

### Por que essa operacao?

A consulta de salas e uma necessidade diaria de todos os alunos. Um app simples e direto que mostre o status de cada sala economiza tempo e melhora a experiencia no campus.

### Funcionalidades Implementadas

- Tela inicial com resumo de salas disponiveis, ocupadas e total
- Listagem de todas as salas com status visual (disponivel, ocupada, manutencao)
- Filtro por andar para localizar salas mais rapidamente
- Detalhes expandidos ao clicar em uma sala (capacidade, aula atual, proxima aula)
- Tela "Sobre" com informacoes do projeto e integrantes
- Navegacao por abas inferiores (Tabs) entre as 3 telas principais
- Feedback visual de carregamento (loading state)
- Tratamento de estados vazios ("Nenhuma sala encontrada")
- Tema visual coerente com a identidade FIAP (cores rosa/magenta)

## b) Integrantes do Grupo

| Nome | RM |
|------|-----|
| Rogerio Deligi Ferreira Filho | RM561942 |
| Maria Fernanda Garavelli Dantas | RM562686 |

## c) Como Rodar o Projeto

### Pre-requisitos

- [Node.js](https://nodejs.org/) v20 ou superior
- [Expo Go](https://expo.dev/go) instalado no celular (Android ou iOS)
- npm (vem com o Node.js)

### Passo a passo

```bash
# 1. Clone o repositorio
git clone https://github.com/SEU-USUARIO/fiap-cpad-cp1-salas-app.git

# 2. Entre na pasta do projeto
cd fiap-cpad-cp1-salas-app

# 3. Instale as dependencias
npm install

# 4. Rode o projeto
npx expo start
```

5. Escaneie o QR Code com o app **Expo Go** no celular
   - Android: Abra o Expo Go e escaneie diretamente
   - iOS: Use a camera nativa e clique no link

## d) Demonstracao

### Tela Inicial (Home)
A tela inicial exibe um banner com o nome do app, cards com estatisticas de salas disponiveis/ocupadas, um botao de acesso rapido para a listagem e cards explicativos de como usar o app.

### Tela de Salas
Lista todas as salas com indicadores visuais de status (verde = disponivel, vermelho = ocupada, amarelo = manutencao). Possui filtro por andar e, ao clicar em uma sala, exibe detalhes expandidos com informacoes como capacidade, aula atual e proxima aula agendada.

### Tela Sobre
Informacoes sobre o projeto, funcionalidades, tecnologias utilizadas, integrantes do grupo e dados academicos.

## e) Decisões Tecnicas

### Estrutura do Projeto

fiap-cpad-cp1-salas-app/
  app/
    _layout.js        -> Layout com Tabs (navegacao por abas)
    index.js           -> Tela Home
    salas.js           -> Tela de listagem de salas
    sobre.js           -> Tela Sobre
  components/
    RoomCard.js        -> Componente reutilizavel de card de sala
    StatusBadge.js     -> Componente de badge de status
  data/
    rooms.js           -> Dados simulados das salas
  assets/              -> Icones e imagens
  package.json
  app.json

### Hooks Utilizados

- **useState**: Gerenciamento de estado local em todas as telas. Usado para controlar o andar selecionado no filtro, a lista de salas filtradas, o estado de carregamento (loading), a sala selecionada para detalhes e as estatisticas da tela inicial.
- **useEffect**: Efeitos colaterais e simulacao de carregamento de dados. Usado para calcular estatisticas ao montar a tela Home e para re-filtrar as salas sempre que o andar selecionado muda na tela Salas.

### Navegação

A navegacao foi organizada com **Expo Router** usando o sistema de **Tabs** (abas inferiores). Cada arquivo dentro da pasta `app/` representa uma rota automaticamente. O `_layout.js` define a estrutura de Tabs com 3 abas: Inicio, Salas e Sobre. A navegacao entre telas tambem e feita programaticamente com `router.push()`.

### Componentizacao

Os componentes foram separados em arquivos independentes na pasta `components/`:
- **RoomCard**: Card reutilizavel que exibe informacoes de uma sala (nome, tipo, status, capacidade, andar, aula atual)
- **StatusBadge**: Badge visual que indica o status da sala com cor correspondente

### Estilizacao

Toda a estilizacao foi feita com **StyleSheet.create()** do React Native, utilizando **Flexbox** para layout responsivo. O tema visual segue as cores da FIAP (rosa/magenta #ED145B como cor primaria).

## f) Proximos Passos

Com mais tempo, o grupo implementaria:

- Integracao com API real da FIAP para dados em tempo real
- Sistema de busca por nome da sala
- Mapa visual do andar com localizacao das salas
- Notificacoes quando uma sala desejada ficar disponivel
- Historico de ocupacao para identificar padroes
- Sistema de reserva de salas para estudo em grupo
- Modo escuro (dark mode)

---

**Disciplina:** Cross-Platform Application Development
**Professor:** Hercules Ramos
**Curso:** Ciencia da Computacao 
**Instituicao:** FIAP - 2026
**Integrantes** | Rogerio Deligi Ferreira Filho | RM561942 | e | Maria Fernanda Garavelli Dantas | RM562686 |
