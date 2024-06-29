# Instrukcja uruchomienia oraz struktura projektu

Do uzupełnienia klucz API z https://weatherstack.com
Nalezy przejść do -> backend -> .env (uzupełnij swój klucz API)

Wszystkie zapytania (/weather/{city}) są przekierowywane na serwer backend-proxy,
W razie potrzeby edycji adresu serwera backendowego, nalezy przejść do plików ponizej:

##### frontend/setupProxy.js
target: 'http://127.0.0.1:5000' <- zmień na swój adres serwera backendowego

##### frontend/package.json
"proxy": "http://127.0.0.1:5000", <- zmień na swój adres serwera backendowego


## Jak zainstalować projekt (frontend - React)?

##### npm install <- instaluje wszystkie niezbędne paczki
##### npm start <- uruchamia projekt

## Jak zainstalować projekt (backend REST API - Python)?

Należy zainstalować pythona, następnie:

##### python app.py
lub
##### python3 app.py 
w zależnosci od środowiska






