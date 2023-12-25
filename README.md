# QueueOverflowBack

## Demontration video 
https://youtu.be/6Y0aVnNIzIk

## How to locally run the website 

1) Install node and npm \
If you don’t have node and npm installed, you need to follow this quick guide : https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-installer-to-install-nodejs-and-npm 

2) Install sql and setting up the database 
   
  In order to install MySql please follow this guide (https://dev.mysql.com/doc/workbench/en/wb-installing.html). \
  You will then need to create a connection, you can do so following this guide (https://dev.mysql.com/doc/workbench/en/wb-getting-started-tutorial-create-connection.html). \
  Note : You may need to update the password and username put inside the QueueOverflowBack/config/database.js file 

  Finally you need to open mysql workbench, connect and create an empty sheme called ‘queueoverflow’, \
  Copy QueueOverflowBack/ dump-queueoverflow.sql  \
  into the C:\Program Files\MySQL\MySQL Server 8.0\bin \
  Note : my version is 8.0 but it might not be the same for you 

  Go into this folder as administrator in a terminal and execute this command :  

  mysql -u root -p queueoverflow  < dump-queueoverflow.sql 
  
3) First create a folder where you will want to put the website code \
Go into the folder using a terminal (in windows you can simply go into this folder using the files exploratory and then right click and press ‘open in terminal’) 

4) Do those command to download the backend :  

git clone https://github.com/Looki-fr/QueueOverflowBack.git \
cd QueueOverflowBack \
git checkout master 

5) Then execute those commands to download the front end 

git clone https://github.com/Looki-fr/QueueOverflowFront.git \
cd QueueOverflowFront\
git checkout master\
npm i

6) Running the backend 

Go into the QueueOverflowBack folder in a terminal and then execute this command :  \
Node ./index.js 

7) Running the front end \
Go into the QueueOverflowFront folder in a terminal and then execute this command :  \
npm start 


