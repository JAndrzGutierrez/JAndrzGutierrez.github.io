# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Complete
|Day 6| Present | Incomplete


## Project Description

This project is a personal portfolio website which will highlight other apps, projects, and websites that I have designed. It will be built using HTML, CSS, JavaScript, jQuery, and any additional libraries such as bootstrap that may provide useful resources. My intention is to create a site that is Responsive, Dynamic, and Intuitive to navigate. To that end not only will it be built with a Mobile First design, but will also utilize dynamic transitions as the user scrolls through the site, helping it come to life.

## Google Sheet

[My portfolio project spreadsheet](https://docs.google.com/spreadsheets/d/1_ZuE250yX7bWNFs82cpKnCjxh0b6CUx40Kf40geVfdY/edit#gid=0) 

## Wireframes

- [Mobile Home](https://res.cloudinary.com/bcantello/image/upload/v1583622741/MobileHome_iay4el.png)
- [Mobile About](https://res.cloudinary.com/bcantello/image/upload/v1583622741/MobileAbout_nbrunp.png)
- [Mobile Projects](https://res.cloudinary.com/bcantello/image/upload/v1583622741/MobileProjects_nkcz4e.png)
- [Mobile Contact](https://res.cloudinary.com/bcantello/image/upload/v1583622741/MobileContact_woll7g.png)

- [Desktop Home](https://res.cloudinary.com/bcantello/image/upload/v1583637979/DesktopHome_akpdyd.png)
- [Desktop About](https://res.cloudinary.com/bcantello/image/upload/v1583637979/DesktopAbout_i30nnk.png)
- [Desktop Projects](https://res.cloudinary.com/bcantello/image/upload/v1583637979/DesktopProjects_lu8vmg.png)
- [Desktop Contact](https://res.cloudinary.com/bcantello/image/upload/v1583637979/DesktopContact_tcrijq.png)

## Time/Priority Matrix 

- [Time Priority Matrix](https://res.cloudinary.com/bcantello/image/upload/v1583717896/TimePriorityMatrix_gcvqdf.png)

#### MVP (examples)

- Layout and Structure
- Pull data from google sheet using google json api
- Project tiles
- Adding Form
- Hamburger Menu
- Aesthetics

#### PostMVP 

- Dynamic Background
- Dynamic Transitions
- Modal based on project tile click
- Image carousel in modal with additional images and link to project page  

## Functional Components

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Layout and Structure | H | 5hrs |  | 6.5hrs |
| Hamburger Menu | H | 2hrs|  | 2hrs |
| Dynamic Background | M | 1.5hrs|  | .75hrs |
| Gallery | M | 4hrs|  | 2hrs |
| Pop Window | L | 3hrs|  |  |
| Pop Window Carousel | L | 3hrs|  |  |
| Adding Form | H | 3hrs|  | 2.5hrs |
| Working with API | H | 2hrs|  | 1hr |
| Dynamic Transitions | L | 3hrs|  | 3.5hrs |
| Project Tile Hover | L | 2hrs|  | 3hrs |
| Aesthetics Home | M | 1hr |  | 1hr |
| Aesthetics About | M | 2hr |  | 2.5hrs |
| Aesthetics Projects | M | 4hr |  | 4hrs |
| Aesthetics Contact | M | 1hr |  | 1 |
| Total | H | 36.5hrs |  | 29.75hrs |

## Additional Libraries
 - Form submission functionality handled through [Formspree](https://formspree.io/)
 - Some icons sourced from [fontawesome](https://fontawesome.com/icons?d=gallery&m=free)
 - svg sourced from [Simple Icons](https://simpleicons.org/)
 - Dynamic transitions referenced from [here](https://www.sitepoint.com/scroll-based-animations-jquery-css3/)

## Code Snippet

This section of code handles the transition of the highlighted section in my nav bar as the user scrolls through
the page. This is the first dynamic javascript that I wrote that served a purely aesthetic purpose, and ended up being
very useful because it provided a format that I was able to pull from to write the code for later dynamic scroll
transitions.  

```
let $sections = $('section');
const $nav = $('#site-nav');

$(window).on('scroll', function () {
    let $currentPosition = $(this).scrollTop() + 100;
    $sections.each(function () {
        let $top = $(this).offset().top;
        let $bottom = $top + $(this).outerHeight();
        if ($currentPosition >= $top && $currentPosition <= $bottom) {
            $nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        } else {
            $nav.find('a[href="#'+$(this).attr('id')+'"]').removeClass('active');
        }
    })
});
```

## Issues and Resolutions

- Overlapping divs on mobile layout. Took a while to debug. Ends up I wasn't thinking and gave them a height in vh. 
No errors listed so had to go through the code line by line to find the problem.
