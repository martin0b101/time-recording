# TimeApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Beleženje časa

Naloga je naslednja: v [angularju](https://angular.io/) naredi aplikacijo za beleženje časa, ki ga uporabnik preživi na različnih straneh aplikacije.

Če še ne poznaš angularja, priporočam, da greš najprej skozi [tutorial](https://angular.io/tutorial).

Ideja je naslednja, ustvari aplikacijo, ki ko se zažene uporabnik sreča login screen. 
Ta login screen je lahko zelo preprost, npr. okno kjer vpiše svoje uporabniško ime in gumb login (ne rabiš skrbeti za varnost).

- Ustvari privat [GitHub](https://github.com/) repozitorij za nalogo. Za oddajo naloge dodaj uporabnika `cilinder` na ta repozitorij.

- Ko se uporabnik logina, naj si aplikacija zapomne trenutnega userja, kajti beležili bomo čas, ki ga je ta user preživel na različnih straneh te aplikacije. 

- Po loginu naj userja preusmeri na nek home page, kjer ima na voljo preklapljanja med različnimi stranmi aplikacije. 

- Aplikacija naj ima vsaj 3 strani med katermi lahko user navigira. Strani ne rabijo imeti dosti vsebine, samo toliko da je videti da smo na različnih straneh.

- Ena od teh strani naj bo stran za izpis preživetega časa. 
Ta stran naj ima tabelo, v kateri je seznam strani, za katero naj za vsako piše, koliko časa je do sedaj user skupno preživel na njej.
Namreč med tem ko user navigira med različnimi stranmi aplikacije naj se sproti shranjuje koliko časa je preživel na vsaki.
V seznamu strani mora biti tudi ta, kjer je tabela s časi.

- Ko user zapre aplikacijo, naj se čas neha beležiti. Obstaja naj tudi logout gumb, ki uporabnika odjavi in neh beležiti njegov čas.

- Če uporabnik kasneje spet odpre aplikacijo in se prijavi z istimi podatki (username), naj se beleženje njegovega časa nadaljuje od že shranjenega.

- Če se prijavi drug uporabnik, naj se njegov čas beleži ločeno.

- Bonus točka, če se čas update-a v živo, med tem, ko smo na strani s tabelo s časi.

Have fun.