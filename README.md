# Personal Project : Find a School

Find a school in any area and perhaps any properties available on trademe nearby that school.


## Installation

```
git clone https://github.com/sherlyc/Schools.git
npm i
npm run knex migrate:latest
npm run knex seed:run
npm start
open in your browser:  http://localhost:3000
```


## Learning Objectives

1. knex , postgres : getting database deployed to heroku
2. express
3. data filtering and paging.
4. convert a spreadsheet of data into readable information on web.
5. how to use google map api and learning the names of regions in Wellington.
6. trademe api (*stretch)

## MVP

### User Stories

* User can view a list of schools.
* user can view profile and contact information of each school.
* a google map will be displayed at the profile page showing where the school is at.

## Stretch

### User Stories

* user can filter/sort the list by deciles/cities.
* user can search for a school by specifying names/cities
* user can add comments to a school profile.
* user can view a list/links of properties available on trademe nearby the selected school.
* a google map based navigation for user to search for schools

