LEGATO Music Blog

## Overview
The goal of this app is to provide an environment where people can upload and share their favorite songs. The user. would have to register to add any songs or see other songs that people have added. They can go further and edit any indivudual song along with deleting any songs. Users in the future would be allowed to comment on songs in order to provide feeback to the uploader and spark a community disscussion.



<br>

## MVP

The MVP for this poroject is to be a full CRUD app that uses a RESTful JSON API. The user would be able to upload what artist they like and delete them too. The user is also allowed to add songs within each artist

<br>

### Goals

- Full Backend using Ruby on Rails
- Full frontend construction using React
- Full CRUD (Create, Read, Update, Delete)
- Link at least three tables together
- Use RESTful JSON API
- Responsive CSS
- User Authentication
- Deploy using Heroku

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front end DOM manilpulation |
|   React Router   | Front end page directory |
|      axios       | API calls |
|      Rails       | Back end structure using Ruby |

<br>

### Client (Front End)

#### Wireframes

-Home
![Home](https://user-images.githubusercontent.com/82814499/122997353-e9af1080-d379-11eb-8846-1e32ca09d15a.png)

-Login
![Login](https://user-images.githubusercontent.com/82814499/122997361-eddb2e00-d379-11eb-822a-398630e3f35d.png)

-Register
![Register](https://user-images.githubusercontent.com/82814499/122997376-f3d10f00-d379-11eb-996f-5da2a4c0cab9.png)

-Artists
![Artists](https://user-images.githubusercontent.com/82814499/122997445-03505800-d37a-11eb-92f8-830b0717422d.png)

-ArtistDetail
![ArtistDetail](https://user-images.githubusercontent.com/82814499/122997498-1105dd80-d37a-11eb-826f-7e0b564b5baf.png)

-ArtistEdit
![ArtistEdit](https://user-images.githubusercontent.com/82814499/122997536-1c590900-d37a-11eb-96ee-f5e66091cd63.png)

-SongCreate
![SongCreate](https://user-images.githubusercontent.com/82814499/122997571-25e27100-d37a-11eb-9855-3738418e1f32.png)

-SongEdit
![SongEdit](https://user-images.githubusercontent.com/82814499/122997606-2e3aac00-d37a-11eb-9627-53b4e996b5d4.png)

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model
![LEGATO (1)](https://user-images.githubusercontent.com/82814499/122994220-385aab80-d376-11eb-8965-8fb7cc4ab09d.png)

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
