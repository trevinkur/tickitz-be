# Tickitz App API 
<!-- NAVIGATION -->
<ol>
    <li>
      <a href="#tentang-project">Tentang Project</a>
    </li>
    <li><a href="#endpoint">Endpoint</a></li>
    <li><a href="#detail-lengkap">Detail Lengkap</a></li>
    <li><a href="#tools">Tools</a></li>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#contributors">Contributors</a></li>
</ol>
<!-- ABOUT THE PROJECT -->

## Tentang Project

Berbagai API untuk mengelola Database Yang digunakan untuk Aplikasi Tickitz. 
Aplikasinya sendiri merupakan aplikasi untuk memesan ticket di berbagai cinema yang ada dalam database.
Aplikasi ini dibangun meggunakan Node.js dengan bantuan framework Express.js dengan menggunakan DBMS MySQL

Base URL 

Production: https://urchin-app-b7qha.ondigitalocean.app

### Endpoint
1. Movies
endpoint: /api/v1/movies

2. Cinema
endpoint: /api/v1/cinema

3. Schedule
endpoint: /api/v1/schedule

4. Users
endpoint: /api/v1/users

5. Booking
endpoint: /api/v1/booking

6. Booking_seat
endpoint: /api/v1/booking-seat

7. Authentication
endpoint: /api/v1/authentication
register: ../register
login: ../login

8. Show-time
endpoint: /api/v1/show-time

9. Payment
endpoint: /api/v1/payment
10. Notification
endpoint: /api/v1/notif
transaction notif: ../transaction/id
multicast notif: /api/v1/notif

### Detail Lengkap

[Postman](https://documenter.getpostman.com/view/21564685/UzBtkNnj#a4c953ee-3e61-46e5-9610-d7a66e17338a)

### Tools 

some technology used in this project.
- [Express](http://expressjs.com/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [multer](https://github.com/expressjs/multer)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [bcrypt]()

<!-- - ditambahin lagi -->


## Demo

[Demo API](https://urchin-app-b7qha.ondigitalocean.app/api/v1/movies)

```sh
https://urchin-app-b7qha.ondigitalocean.app/api/v1/movies
```

Clone this repo
 
```sh
git clone https://github.com/Han-Express/peworld-fe.git
```

## Deploy on Digital Ocean

[Digital ocean](https://cloud.digitalocean.com/)


<!-- Contributors -->
## Contributors

[Trevin Kurnia](https://github.com/trevinkur)
