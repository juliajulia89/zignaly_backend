<<<<<<< HEAD
readme.md

# Zingaly phone app

## Description

=======
# Sportbuddy

## Description

In the mood for a game of football? ⚽️ Ready to dust off your hiking boots? 🌳 Always struggle to find the perfect tennis partner? 🎾[Sportbuddy helps you search for the upcoming events, matches, and court availabilities to suit your desires. Sport Buddy allows you to search via a specific location, date or just simply see what’s the next upcoming available slot for you to join in!


>>>>>>> fe715c48a0e3ba3db06b2f27c75795d551c56dd7
## User Stories

## ROUTES:

<<<<<<< HEAD
- GET /phone/:id
  - renders the phone detail page
  - includes the detailed description of each phone

## Models

Phone model
{
name: String,
description: String,
color: String
price: Number,
image: String,
}

=======

## ROUTES:

- GET /
  - renders the homepage, where user can choose to search by location or event
- GET /auth/signup
  - redirects to / if user logged in
  - renders the signup form (with flash msg)
- POST /auth/signup
  - redirects to / if user logged in
  - body:
    - username
    - email
    - password
- GET /auth/login
  - redirects to / if user logged in
  - renders the login form (with flash msg)
- POST /auth/login
  - redirects to / if user logged in
  - body:
    - username
    - password
- POST /auth/logout

  - body: (empty)

- GET /events
  - renders the events list + attend function
- POST /event/create-listing
  - redirects to / if user is anonymous
  - body:
    - event name
    - rating/review
- GET /event/:id
  - renders the event detail page
  - includes the list of events, location, price points, attendees
  - add to favourites button & leave rating/create review button
- GET /location/:id/
  - renders the location detail page
  - add to favourites button & leave rating/create review button
  
  - redirects to / if user is anonymous
  - body: (empty - the user is already stored in the session)

## Models

User model
{
name: String,
email: String,
password: String,
profileImage: String,,
event: { type: Schema.Types.ObjectId, ref: "Event" }
}

Event model
{
 sport: String,
 numberOfPlayers: Number,
 players: [{ type: Schema.Types.ObjectId, ref: "User"}],
 venue: { type: Schema.Types.ObjectId, ref: "Venue"},
 date: String,
 time: String,
 price: Number,
}

Venue model
{
 name: String,
  description: String,

  location: {type: {type: String, default: "Point"}, coordinates: Array},
  rating: Number,
  image: {
    type: String,
    default:
      "https://deportesurbanos.com/wp-content/uploads/2020/05/pista-multideportiva-antivandalica.jpg",
      }
  

>>>>>>> fe715c48a0e3ba3db06b2f27c75795d551c56dd7
## Links

### Project planning

[Link to our GitHub project board]()

### Git

The url to your repository and to your deployed project

<<<<<<< HEAD
[Repository Link]()
=======
[Repository Link](https://github.com/The-Volley-Llamas)

[Deploy Link] (https://sport--buddy.herokuapp.com/)

### Slides

The url to your presentation slides

[Slides Link](https://www.canva.com/design/DAEyn6Wng00/t9C8nX5XeFzYnJSrTDGgCA/view?utm_content=DAEyn6Wng00&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton)

```
>>>>>>> fe715c48a0e3ba3db06b2f27c75795d551c56dd7

[Deploy Link]()
