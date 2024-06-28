# Klucz API z weatherstack.com
Nalezy przejść do -> backend -> .env (uzupełnij swój klucz API)

Domyślnie wszystkie zapytania (/weather/{city}) są przekierowywane na serwer backend-proxy,
W razie potrzeby edycji, znajdziesz wszystkie informacje w setupProxy.js, jak i package.json

## setupProxy.js
target: 'http://127.0.0.1:5000' <- zmień na swój adres serwera backendowego

## package.json
"proxy": "http://127.0.0.1:5000", <- zmień na swój adres serwera backendowego


###### Jak zainstalować projekt?

npm install <- instaluje wszystkie niezbędne paczki
npm start <- uruchamia projekt

# reszta komend domyślnie (React)






