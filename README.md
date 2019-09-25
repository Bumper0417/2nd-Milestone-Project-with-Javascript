# Global Guide Tour Webpage

Second Milestone Project: Interactive Frontend Development-Code Institute

My Global Guide Tour Webpage is an interactive webpage, which main purpose is to assist possible clients and travelers to choose the destination that matches their needs, and through research on the webpage to find accomodation,tourist attractions,bars & restaurants.

## UX

As a user of the webpage I want to be able to have an easy access through the menu and be able to get all the information that i want by using simple inputs on the search buttons.
- As a user of the webpage I want to be able to get some information about the owners of the webpage and thier actions so I can learn more about the webpage.[Wireframe Footer](assets/wireframes/IMG_4537.jpg)
- As a potencial traveller I want to be able to see the places that i want to visit in a map,so I can decide which destination fits my needs. [Places API](https://developers.google.com/places/web-service/intro)
- As a user of the webpage I want the webpage to have some buttons that i can write my criteria,such as destinations,so i can look where the location that I want to travel is. [Wireframe](assets/wireframes/IMG_4537.jpg)
- As a user of the webpage I want the webpage to have some buttons that i can write my criteria,such as attractions,so I can see what are the sites of the city.
- As a user of the webpage I want the webpage to have some buttons that i can write my criteria,such as hotels,so I can check the prices and the availability.
- As a user of the webpage I want the webpage to have some buttons that i can write my criteria,such as bars & restaurants,so i can get information about where to socialize in my vacation.
- As a user i want the webpage version to be accesible in an mobile phone and easy to read.[Wireframe Mobile](assets/wireframes/IMG_4536.jpg)
- As a potencial customer i want to be able to follow the owners of the webpage in their social links.[Wireframe Footer](assets/wireframes/IMG_4537.jpg)
- As a potensial customer i want to be able to contact the owners through a contact form so i can ask them more information in subjects im interested in. [Wireframe Footer](assets/wireframes/IMG_4538.jpg)

## Features

- I want to create for the the user of the webpage a design to be eyekatching and have some interactions that can approach them. [Bootstrap](https://www.bootstrapcdn.com/)
- This site uses places autocomplete hotel search function with a search box and 2 dropdown menus created with [JavaScript](https://no.wikipedia.org/wiki/JavaScript) and styled with [CSS](https://no.wikipedia.org/wiki/Cascading_Style_Sheets).
- The Map that is displayed on the site is made with the places API and it makes users experience more visual and easy to access.
- The users are able to change the search criteria without reloading the page.
- This site provides all the information with a simple design made mostly with [Bootstrap](https://en.wikipedia.org/wiki/BootstrapCDN).
- The user can go to the default setting and map by clicking on the home button.

## Features left to Implement

In the future i want to make the site more analytic using more functions that will allow users to put more criteria in search buttons and the background of the webpage will change every time the destination will change.

## Technologies Used

- [JAVASCRIPT](https://no.wikipedia.org/wiki/JavaScript)
- [BOOTSTRAP](https://en.wikipedia.org/wiki/BootstrapCDN)
- [GOOGLE FONTS](https://en.wikipedia.org/wiki/Google_Fonts)
- [GIT](https://no.wikipedia.org/wiki/Git)
- [GOOGLE PLACES API](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete)
- [CSS](https://no.wikipedia.org/wiki/Cascading_Style_Sheets)
- [HTML](https://no.wikipedia.org/wiki/HTML)

## Testing

The potencial customers,users and fans user stories, achieved to provide them information about who we are,what are we doing and how they can reach us through the contact us form. 
- The 'About us' footer specifies what a user can expect from this website and and our main focus when creating the webpage.
- For the potensial customers that they want to see the places they are going to visit I used a map customed with the autocomplete hotel search function which allows them to see the results of their search by clicking the results in the map.
- To check the map and it's functinality and specify what you are looking for:
1. Search for any country in the world you want to visit by clicking the dropdown menu
2. Go to the search box and click any city in the country you selected(The cities result should bound to the selected country)
1. The default establishment is "Hotel" so when you press a city some markers will drop showing results for "Hotels" in this specific city
2. After that you can either choose "Attractions" or "Restaurants" and some new markers will appear with info about those establishments
3. The default map is in my favorite city in the world Athens and when pressing either "Restaurants", "Hotel" or "Attractions" you get results in that particular city
4. When clicking in a marker you get information about the selected place such as: name,5 star rating,address,telephone number and a live link to visit the place
5. To go back to the Default Map select the home . button.

- To check the interactivity of the Map:
1. Click on the markers that appear in the location of your search
2. Check if they provide information about the place 
3. Open the live link in a new window and check if there are available information like address,website,telephone of the owners of the place
- For the users that want to see how the place they will visit will look like they just have to move the yellow person, that is on the bottom right corner of the map to the place they want to see
- For the users of the Webpage that want to contact us,they can do it easily through our social links on the bottom of the page in the Footer and they can also do it through our contact page.You can check it yourself:
1. Go to the "Contact Us" page
1. Try to submit the empty form and verify that an error message about the required fields appears
1. Try to submit the form with an invalid email address and verify that a relevant error message appears
1. Try to submit the form with all inputs valid and verify that the webpage will reload.

As mentioned in the Slack Channel it should be a single page application and that is why i transferred the contact form to the first page so it is opening in the same link. I did that with the help of modal in the [BOOTSTRAP](https://en.wikipedia.org/wiki/BootstrapCDN) 

As they have been manually tested, all the links will open in a new tab using 'target="_blank"'. 

The site is tested in a variety of devices such as:Iphones(4 to 8),Samsung Galaxy,Ipads and Desktops.In addition it's tested to all the possible browsers:Chrome, Safari, Internet Explorer, FireFox and i assure that it is compatible and responsive.

The biggest problem i faced was to understand the functionality of the autocomplete function in order to make it as easy as possible for the user.


## Deployment

This site is hosted using GitHub pages.It has been deployed directly from the master branch. The webpage's live link can be seen [HERE](https://bumper0417.github.io/2nd-Milestone-Project-with-Javascript/). The whole project can be viewed [HERE](https://github.com/Bumper0417/2nd-Milestone-Project-with-Javascript)The webpage is consisted of 1 html document, an assets folder and a README.md file.The assets folder includes 3 smaller folders:
- CSS with a style.css document.
- Wireframes with 5 jpg images of my Design.
- JavaScript with main.js folder

## Credits

### Content

All the content in About Us and the Info of the webpage were written by me.

### Media

All the wireframes and mockups of the webpage were created by me and downloaded from my phone.

### Acknowledgements

- I received inspiration from sites sush as: [Bootstrap](https://en.wikipedia.org/wiki/BootstrapCDN), [Youtube](https://www.youtube.com/), [Google](https://no.wikipedia.org/wiki/Google) and [W3Schools](https://www.w3schools.com/java/)
- I also received code snipet from [Google Places](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete) and [Booking.com](https://www.booking.com/searchresults.el.html?label=gen173nr-1FCAEoggI46AdIM1gEaKoBiAEBmAEIuAEXyAEM2AEB6AEB-AELiAIBqAIDuALRx7LpBcACAQ&sid=626341e5ceb9d67eaf433e0dc4133f86&sb=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.el.html%3Flabel%3Dgen173nr-1FCAEoggI46AdIM1gEaKoBiAEBmAEIuAEXyAEM2AEB6AEB-AELiAIBqAIDuALRx7LpBcACAQ%3Bsid%3D626341e5ceb9d67eaf433e0dc4133f86%3Bsb_price_type%3Dtotal%26%3B&ss=London%2C+Greater+London%2C+United+Kingdom&is_ski_area=0&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&ss_raw=london&ac_position=0&ac_langcode=en&ac_click_type=b&dest_id=-2601889&dest_type=city&iata=LON&place_id_lat=51.507391&place_id_lon=-0.127634&search_pageview_id=0a1570e87c570054&search_selected=true)
- For the functions of Autocomplete  I used the code from [Google](https://developers.google.com/places/supported_types) [Places hotel Search](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch)

