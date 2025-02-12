
## How to run it:

## 1.Docker container

Multi-platform

```bash

docker pull raulschiop/e-com:latest

docker run -p 3000:3000 --name ecom raulschiop/e-com:latest

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
Next.js, MongoDB, Tailwind CSS, AWS S3, Docker, Framer-Motion

## Functionality:
User authentication, Cart functionality, Order management, Problems system, and more.
<br></br>

## Breakdown of the Technologies Used

__1.Next js__

Next JS is a framework for the backend that works with React JS for the frontend. I used this framework for easier backend and frontend combo.
I used the App Router, which allows for better routing and management of API endpoints. The backend endpoints are exposed via API routes, making it easy to integrate with the frontend.

__2.MongoDb__

Mongo DB is my project database. I chose it over My SQL  or other databases because it has better synergy with JS and that makes it easier to work with it.

__3.Tailwind CSS__

Tailwind CSS is the CSS framework that I use in this project. I chose this over traditional CSS files because allows for easier and more organised styles. Tailwind CSS also makes development faster.

__4.AWS S3__

AWS S3 was used only for storing the images providing an easier and more efficient way to manage image storage.

__5.Docker__

Docker was used to ensure the app can run anywhere, on any system, by containerizing the application.

__6.Framer-Motion__

Framer-Motion was used for the animations on this app.

<br></br>

## Breakdown of the Roating

__Main page__

![Main page](/public/mainPage.png)
On the main page, you can see details about the website theme and also you can see at the end of the page products. (I will put a video of all the website)

__Products page__

![Products page](/public/productsPage.png)
On the products page you can interact with the products add them to your cart see them,if you click on them you will see more details.

__About Us Page__

![About us](/public/aboutUsPage.png)
A page to see more about the website story.
__Contact us Page__

![Contact us Page](/public/contactUsPage.png)
On the Contact Us page, the user can send feedback and problems to solve about the site.
__Log In Page__

Log in form
![ log in](/public/loginPage.png)

Register form
![register page](/public/registerPage.png)

## Video of the site

[Watch the video of the site on YouTube](https://youtu.be/nCYoxLLtJjA)  (need to update it )
