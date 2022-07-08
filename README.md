# FantaProject
Progetto per esame di Informatica ed elementi di programmazione II
Lavoro svolto da: Dapit Damiano, Favaro Mattia, Mazzetto Matteo

## Introduzione al Progetto
La decisione di fare un progetto sul Fantacalcio è un'idea nata dal file-rouge che lega i 3 elementi del nostro gruppo, ovvero la passione per il calcio.
Abbiamo quindi deciso di partire questa idea per sviluppare un sito utile alle persone a cui piace giocare a questo gioco per potersi informare sulle squadre presenti nel campionato, sui giocatori di ogni squadra avendo anche la possibilità di salvarsi la propria squadra.

## Tecnologie utilizzate
Vue 2, 
Firebase firestore, 
Bootstrap,
Vue router,
Vue select

## Composizione del progetto

- Home: la home è la pagina dove si apre il progetto appena lo si lancia nel broswer (con il comando npm run dev). All'interno di questa sono presenti 3 card che riportano alle tre pagine principali del nostro progetto: "squadre", "giocatori", "la mia squadra". Per tornare a questa basta schiacciare sul logo (il pallone) presente sulla topbar.

- Pagina delle squadre: dove sono presenti tutte le squadre del campionato di serie A con alcune caratteristiche fondamentali ed una breve descrizione. Ci si arriva schiacciando su "squadra" nella topbar.
Schiacciando nel nome di qualsiasi squadra verrai rimandato alla pagina di dettaglio di quella specifica squadra.

- Pagina dei giocatori: qui sono presenti tutti i giocatori di qualsiasi squadra. Vengono descritte alcune caratteristiche come i dati anagrafici, piede, squadra di appartenenza, ruoli e valori relativi al fantacalcio. Ci può arrivare utiliazzando il bottone "giocatori" all'interno della topbar.
Per entrare nella pagina di dettaglio dei giocatori basta schiacciare il nome di qualsiasi giocatore e vedere le sue  caratteristiche specifiche.

* Footer: contiene la scritta del Team attraverso la quale si può raggiungere la Home tramite un click su di essa; inoltre è possibile navigare tra le varie sezioni del sito e raggiungere i canali social dei suoi sviluppatori.

* Navbar/Topbar: questo component permette di navigare all’interno del sito tra le varie funzionalità; se si clicca il logo si può raggiungere la Home; inoltre è perfettamente responsive, ovvero se la schermata risulta essere inferiore di circa 990 px, questa viene inserita all’interno di un Button chiamato “Menù” attraverso il quale vengono rese disponibili le funzionalità del sito anche su schermi ridotti tramite menù a tendina. Il logo, invece, rimane sempre visibile indipendentemente dalla dimensione dello schermo.

* La mia squadra: In questa sezione è possibile cercare un giocatore all’interno dell’API e inserirlo all’interno della propria squadra. Il giocatore, in base al suo ruolo, avrà un rettangolo con colore differente. Se si clicca sul nome del giocatore si può raggiungere la sua pagina di dettaglio; inoltre sono presenti anche altre info, come il ruolo (sia per fantacalcio classic che mantra) e la squadra in cui gioca.

* LoadButton: questo button permette di caricare 10 giocatori aggiuntivi alla lista ogni volta che viene premuto; di defult vengono caricati 10 giocatori; l'ordine di partenza è il ruolo dei giocatori (portieri, difensori, centrocampisti e attaccanti).

* HeaderSquadre: questo component è presente solo nella sezione delle squadre e permette di scorrere tramite un menù scrollabile orizzontale tutte le squadre presenti nel campionato di serie a del 2021/2022; se si clicca su una squadre, si raggiunge la sua pagina di dettaglio.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Setup del progetto


```sh
npm install
npm install -g @vue/cli
npm install Boostrap
npm install -g firebase-tools
npm i firebase
npm install vue-select
npm install popper
```

### Apertura del progetto

```sh
npm run dev
```

