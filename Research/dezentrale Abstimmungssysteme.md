## Dezentrale Abstimmungssysteme (e-Voting)

Neben der wohl bekanntesten Distribute Ledger Technologie(DLT) der "Bitcoin"-Blockchain aus dem Jahr 2008 
als digitale Währung ist Ethereum (Jahr 2015) die wohl Zweit-bekannteste.

Die Ethereum Virtual Machine (EVM), kurz Ethereum, ist eine sogenannte turingmächtige Programmiermaschine, 
dh. es können sämtliche mögliche (mathematischen) Funktionen erstellt und berechnet werden.
Damit ist Ethereum keine reine Kryptowährung, die lautet hier "Ether", sondern ermöglicht das Ausführen von 
"Smart Contract" auf der EVM.

Die Eigenschaften der Ethereum Main Chain:

- verteiltes Netzwerk/dezentrale Speicherung "distributed Ledger" (keine Autorität, dh. weder Staaten oder Personen, haben die Hoheit über die Daten)
- frei zugänglich "public" (mit einem Internetanschluss) - es gibt aber auch "private" blockchains
- manipulationssicher (durch kryptografische Verfahren u.a Verkettung von Blöcken)
- transparent (Daten sind durch alle Teilnehmer einsehbar)
- unaufhaltsam "code is law" (veröffentlicher Programmcode sind unstoppbar)

Im Allgemeinen sind noch weitere Blockchains in der Lage e-Votings abzubilden, bspw. Hyperledger.

### Ansatz
Nutzung von Distribute Ledger Technologien (DLT) im Bezug auf die Wahlverwaltung/e-Voting,

..die Vorteile:

  - dauerhafte Erreichbarkeit (kein Slack mit 40k Teilnehmern :sunglasses: )
  - Daten können nicht verloren gehen
  - jeder kann an der Abstimmung teilnehmen (Einschränkung auf einen bestimmen Personenkreis über ein Whitelisting möglich)
  - die kryptografischen Verfahren stellen sicher, dass die Wahl nicht manipuliert werden kann
  - Sofortige Auswertung und Transparenz

..die Nachteile:

  - Fehler im Programmcode können die Wahl ungültig machen
  - Transparenz der Blockchain steht der geheimen Wahl in Widerspruch (hier könnte allerdings Zero-Knowledge Proofs eine Lösung sein)

..die Herausforderung:

  - Der (e-Voting)Code muss der gesetzlichen Anforderung einer allgemeinen, unmittelbaren, freien, gleichen und geheimer Wahl entsprechen.
  
### e-Voting Prozess
Vorbereitung
   1. politische Parteien erhalten gemäß ihrem Wahlergebnis ihre Stimmanteile als "e-Votes" (pro Sitzplatz im Parlament/Senat/Ausschuss) vom Kreis/Bezirk/Land/Bund
   2. Verteilung der e-Votes an die politischen Vertreter
   (mögliches Whitelisting von Parteimitgliedern, worüber wird die Erlaubnis erteilt an bestimmten Abstimmungen teilzunehmen)

Wahl

   3. Anträge können eingebracht werden
   4. Abstimmung über ein Online-Portal (Authentifizierung über PrivateKey des Parteimitglieds)
 
Nachbereitung

   5. Nach der Legislaturperiode werden die e-Votes für ungültig erklärt

### Kritik
Der Chaos Computer Club (CCC) steht Online-Abstimmungen ablehnend gegenüber.
Dazu sagte Linus Neumann gegenüber dem [SPIEGEL](https://www.spiegel.de/netzwelt/netzpolitik/spd-online-abstimmung-ccc-warnt-vor-umstrittenem-wahlverfahren-a-1291616.html) zur Online-Abstimmung der SPD: 
"Entweder sind die Stimmen geheim, dann ist aber das Zustandekommen des Ergebnisses nicht nachvollziehbar - oder das Zustandekommen des Ergebnisses ist nachvollziehbar, und die Stimmen sind nicht mehr geheim."
