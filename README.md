<h3>1. Backend Technologies Used
   The backend of QuickDesk is built using robust and scalable technologies that ensure security, maintainability, and performance.</h3>

 Tech Stack
Python 3.x

Django 5.2 – Web framework

Django REST Framework – API development

SQLite (default, can be switched to PostgreSQL)

JWT (JSON Web Token) – Authentication

 Features Implemented
 User Authentication
Register/Login using email & password

JWT-based token authentication (Access + Refresh)

Authentication middleware using IsAuthenticated

 Categories
Users can create, view, update, and delete categories.

API Endpoints:

GET /categories/

POST /categories/

GET /categories/<id>/

PUT/PATCH /categories/<id>/

DELETE /categories/<id>/

 Tickets
Users can create and manage support or feature request tickets.

Tickets are linked to their respective owners (users).

API Endpoints:

GET /tickets/ – lists all tickets (admin or filtered)

POST /tickets/ – create a new ticket

GET /tickets/<id>/

PUT/PATCH /tickets/<id>/

DELETE /tickets/<id>/

 Comments
Users can comment on tickets.

Each comment is associated with a user and a ticket.

API Endpoints:

POST /comments/ – add a comment to a ticket

GET /comments/ – list all comments (admin)

 Voting System
Users can upvote or downvote a ticket once.
Prevents multiple votes from the same user on the same ticket.


 Authorization & Token Validation
/auth-check/ route is protected using IsAuthenticated.
Used to verify if the JWT token is valid for frontend protected routes.

