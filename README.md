# Documentation Ask.How

### HOW STARTED USE

- git clone https://DanilaPutty@bitbucket.org/expiria/ask.how-backend.git
- cd ask.how-backend
- npm start

### FOLDER ARCHITECTURE

- controller
- services
- routes
- middleware
- models
- mediafile
- backup
- env.production
- env.development
- api.yaml - swagger documentation

### INFO ABOUT ENGINE

- Language: JS (Node)
- Version: 1.0.0

### ENV VARIABLES

- HOST_APP - By default used localhost
- PORT_APP - Port on which the application will run
- HOST_MYSQL - Host where consist MYSQL
- LOGIN_MYSQL - Login user MYSQL
- PORT_MYSQL - Port where run MYSQL
- PASSWORD_MYSQL - Password for MYSQL (by default his clear)
- DATABASE_NAME - Variable that identifies the name of the database MYSQL
- GOOGLE_ID - Google id needed for login and authorization functionality (IN DEVELOP)
- GOOGLE_SECRET - Google secret needed for login and authorization functionality (IN DEVELOP)
- JWT_SECRET - Secret code for login and authorization functionality
- DOMAIN_URL_APP - This url needed for correct render url for photos in db
