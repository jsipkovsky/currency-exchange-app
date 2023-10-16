# currency-exchange-app

This is an app for displaying actual currency rates for CZK. Data are obtained via CNB api
https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt

## Prerequisites

Clone the repository
```bash
git clone https://github.com/jsipkovsky/currency-exchange-app.git
```
Change directory to the project folder
```bash
cd currency-exchange-app
```
Install dependencies
```bash
npm install
```

## Backend Integration

This frontend application communicates with a backend API hosted at [Backend Repo](https://github.com/jsipkovsky/currency-backend). 
Make sure the backend is set up and running before using this frontend locally.


## Usage
App contains 2 parts, converstion form and currency rates table. In conversion form, user can select amount in CZK
and some foreign currency from the list, getting amount converted to selected currency. In rates table, user see
list of actual rates for supported currencies (see api above) 

## How to Run

```bash
npm run start
