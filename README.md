# FantaProject
Progetto per esame di Informatica ed elementi di programmazione II
Lavoro svolto da: Dapit Damiano(221212), Favaro Mattia(221055), Mazzetto Matteo(220812)

## Introduzione al Progetto
La decisione di fare un progetto sul Fantacalcio è un'idea nata dal file-rouge che lega i 3 elementi del nostro gruppo, ovvero la passione per il calcio.
Abbiamo quindi deciso di partire da questa idea per sviluppare un sito utile alle persone a cui piace giocare a questo gioco per potersi informare sulle squadre presenti nel campionato, sui giocatori di ogni squadra, avendo anche la possibilità di salvarsi la propria squadra.

## Tecnologie utilizzate
Vue 2, 
Firebase firestore, 
Bootstrap,
Vue router,
Vue select,
PopperJs,

## Composizione del progetto

- Home: La home è la pagina principale del progetto, la prima che si incontra al lancio del progetto (con il comando npm run dev). All'interno di questa sono presenti 3 card che portano alle tre pagine principali del nostro progetto: "Squadre", "Giocatori serie A", "La mia squadra". Per tornare a questa basta schiacciare sul logo (il pallone) presente nell'angolo sinistro della topbar. Cliccando sul pulsante vai alla pagina presente nelle singole card si verrà portati all'interno delle specifiche sezioni.

- Pagina delle squadre: Qui sono presenti tutte le squadre del campionato di serie A con alcune caratteristiche fondamentali: Nome, Logo, allenatore, Stadio, capienza stadio, data di fondazione della squadra, posizione in classifica nell'ultimo campionato. Ci si arriva cliccando su "squadra" nella topbar o nel footer.
Cliccando sul nome di qualsiasi squadra si aprirà la pagina di dettaglio di quella specifica squadra.

- Dettaglio squadra: In questa pagina troviamo le caratteristiche di una specifica squadra selezionata nella precedentemente citata pagina delle squadre; sarà inoltre presente una sezione chiamata "info", contenente alcune curriosità sulla squadra scelta. In basso a sinistra della pagina è presente un pulsante chiamato "indietro" che se cliccato porta
alla pagina delle squadre

- La mia squadra: In questa sezione è possibile cercare un giocatore all’interno del database dei calciatori e inserirlo all’interno della propria squadra tramite un campo di select; dopo aver selezionato il calciatore dalla lista e aver cliccato il pulsante "inserisci", comparirà una finestra di alert che comuniche rà la corretta riuscita dell'operazione, e a quel punto il giocatore sarà inserito nella pagina.In base al suo ruolo del calciatore, esso avrà un rettangolo con colore differente (Giallo per i portieri, verde per i difensori, azzurro per i centrocampisti, rosso per gli attaccanti). Se si clicca sul nome del giocatore si può raggiungere la sua pagina di dettaglio; inoltre sono presenti anche altre info, come il ruolo, identificato da una lettera per il fantacalcio classic (P = portiere, D = difensore, C = centrocampista, Attaccante), e da una Sigla per il fantacalcio mantra (Por = portiere, Ds = terzion sinistro, Dd = terzino destro, Dc = difensore centrale, M = mediano, C = centrocampista, E = esterno, W = Ala, T = trequartista, A = attaccante, Pc = punta centrale) e la squadra in cui gioca. Nel caso si decidesse di rimuovere un calciatore dalla propria squadra sarà possibile farlo attraverso il pulsante "Rimuovi calciatore"; dopo averlo cliccato comparirà una finestra di alert che richiederà la conferma della scelta di eliminare il calciatore: in caso di risposta affermativa il giocatore verrà rimosso dall'elenco.

- Pagina dei giocatori: qui sono presenti tutti i giocatori di qualsiasi squadra, ripartiti secondo l'ordine: Portieri, Difensori, Centrocampisti, Attaccanti. Vengono descritte alcune caratteristiche come i dati anagrafici, piede, squadra di appartenenza, ruoli e valori relativi al fantacalcio. Ci può arrivare utiliazzando il pulsante "giocatori" all'interno della topbar o nel footer.
Per entrare nella pagina di dettaglio dei giocatori basta cliccare il nome del giocatore desiderato. Per non sovraccaricare la pagina con tropi giocatori è stato inserito il 
pulsante "carica altri giocatori", che permette di aggiungere giocatori a gruppi di 10 alla volta.

- Dettaglio giocatore: In questa sezione è presente il dettaglio di un singolo giocatore, selezionato dalla lista dei calciatori. In basso a destra nella pagina sono presenti due pulsanti: "Vai al listone" e "Vai alla mia squadra", che portano rispettivamente alla pagina del listone e a quella della mia squadra.

* Footer: contiene il nome del Team attraverso la quale si può raggiungere la Home tramite un click su di essa; inoltre è possibile navigare tra le varie sezioni del sito e raggiungere i canali social dei suoi sviluppatori.

* Topbar: questo component permette di navigare nella tre principali pagine del sito(calciatori serie A, Squadre, La mia squadra) attraverso i link corrispondenti; 
se si clicca sul logo si può raggiungere la Home; se la schermata risulta essere inferiore 992 px, i tre link delle pagine verrànno inseriti all’interno di un Button chiamato “Menù” attraverso il quale vengono rese disponibili le funzionalità del sito anche su schermi ridotti tramite menù dropdown. Il logo, invece, rimane sempre visibile indipendentemente dalla dimensione dello schermo.

* HeaderSquadre: questo component è presente solo nella sezione delle squadre e permette, tramite un menù scrollabile orizzontalmente, di visionare i loghi di tutte le squadre presenti nel campionato di serie a del 2021/2022; se si clicca su uno di questi loghi si raggiunge la pagina di dettaglio della squadra corrispondente.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur).

## Setup del progetto
Per questo progetto è stato utilizzato visualstudio code come ambiente di sviluppo, Git come sistema di controllo gestione, NodeJs e NPM per la gestione e l'installazione dei 
pacchetti dati necessari per il progetto.

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
## Possibili problematiche ed eventuali bug

- All'interno della versione definitiva del progetto sono stati individuati due bug, che talvolta si presentano durante la navigazione:
Il primo è presente all'interno della pagina "La mia squadra": in alcune circostanze il caricamento dei dati della pagina avveniva in maniera non del tutto corretta,
e per tanto è capitato in alcuni casi di vedere la pagina vuota: in questo caso è necessario effettuare (a volte una, altre volte due o più) dei refresh con pulizia della cache della pagina.

- Un bug simile è stato riscontrato nella pagina di dettaglio delle squadre: in questo caso il problema consisteva nel fatto che in alcune occasioni è capitato che impostando la dimensione dello schermo per la visualizzazzione su Iphone o Ipad, le intestazioni della tabella, invece di allinearsi alla sinistra dei dati, come previsto dal codice, 
andavano ad allinearsi una sotto l'altra nella parte alta dello schermo; anche in questo caso è stato necessario effettuare un refresh della pagina( uno risultava generalmente sufficiente)
