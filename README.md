
## How to run it:

## 1.Docker container

Windows

```bash
docker pull raulschiop/e-com:v1.0

docker run -p 3000:3000 --name ecom raulschiop/e-com:v1.0

```
 Mac Os / Linux

```bash

docker pull raulschiop/e-com:v2.0

docker run -p 3000:3000 --name ecom raulschiop/e-com:v2.0

```

## 2.Local computer (if you download it):

1.Install the dependencies:
 ```bash

 npm install

```
2.Run it:
 ```bash

 npm run dev

```

## Technologies Used:
Next.js, MongoDB, Tailwind CSS, AWS S3, Docker

## Functionality:
User authentication, Cart functionality, Order management, and more.
<br></br>

## Breakdown of the Technologies Used

1.Next js

Next JS is a framework for the backend that works with React JS for the frontend. I used this framework for easier backend and frontend combo.
I used the App Router, which allows for better routing and management of API endpoints. The backend endpoints are exposed via API routes, making it easy to integrate with the frontend.

2.MongoDb

Mongo DB is my project database. I chose it over My SQL  or other databases because it has better synergy with JS and that makes it easier to work with it.

3.Tailwind CSS

Tailwind CSS is the CSS framework that I use in this project. I chose this over traditional CSS files because allows for easier and more organised styles. Tailwind CSS also makes development faster.

4.AWS S3

AWS S3 was used only for storing the images providing an easier and more efficient way to manage image storage.

5.Docker

Docker was used to ensure the app can run anywhere, on any system, by containerizing the application.
