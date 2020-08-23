# CurrentAccounts
CurrentAccounts live version can be found here:
[https://current-accounts.herokuapp.com/](https://current-accounts.herokuapp.com/)
![live version](https://imgur.com/eP0swRJ.png)

### Steps to execute project locally

#### 1. Download and install NodeJS 12.18.3 LTS
https://nodejs.org/dist/v12.18.3/node-v12.18.3-x64.msi

#### 2. Run the project
Navigate to the project root, for example:
![project root](https://imgur.com/znjBFaf.png)

> C:\git\currentaccounts-frontend

Open a console in project root and execute:


    npm i

    ng serve
![ng serve](https://imgur.com/FWWutY7.png)

#### 3. Localhost
Navigate to:
[http://localhost:4200/](http://localhost:4200/)
You can test customers with Id(s) 1 to 5.
![bank accounts customer 2](https://imgur.com/oCVWU0S.png)

To create a bank account, click in Bank Accounts button in toolbar:
![bank accounts](https://imgur.com/Oig0Y71.png)

Is possible to create bank accounts for customer Id(s) 1 to 5.
Initial credit parameter is optional, if not provided, account will be created without transactions.
If initial credit is provided, a transaction will be sent to that bank account.