# Lektion 8 februari

## Övningar

### Ta bort en todo

Forsätt på exempelkoden i `todo-app-fetch-example`. Lägg till funktionalitet så att man
kan klicka på en todo och ta bort den.

```
URL: https://awesome-todo-api.herokuapp.com/tasks/:id
Metod: DELETE
```

Exempel request som tar bort todo med id 947d0f8b-c800-4876-a84a-60e855c7d9a4.
```
const url = https://awesome-todo-api.herokuapp.com/tasks/947d0f8b-c800-4876-a84a-60e855c7d9a4;
const response = await fetch(url, { method: 'DELETE' });
const data = await response.json();
```

## Artiklar

Intro till Fetch: https://iq.opengenus.org/intro-to-fetch-api/

Fetch: https://javascript.info/fetch

## Videor

## Inspelningar