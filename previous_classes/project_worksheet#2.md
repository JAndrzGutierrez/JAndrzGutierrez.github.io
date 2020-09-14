# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Incomplete
|Day 1| Wireframes / Priority Matrix / Timeline | Incomplete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete


## Project Description

This project will be my portfolio website. It will include a menu, an "about" section, a list of projects, and a contact form. The list of projects will be populated using an API call to a Google Sheet. The page will be dynamic relative to screen size and include a hamburger menu for mobile and tablet functionality.

## Google Sheet

https://docs.google.com/spreadsheets/d/19l0xoqkGrebEHkghxC_OxA2PZbiAPmdOtf2DpZ3guV8/edit#gid=0

## Wireframes

[My Wireframe](./images/wireframe.png)

## Time/Priority Matrix 

[My Time/Priority Matrix](./images/matrix.png)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MVP and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP

- About section
- Projects section, displays projects from Google Sheet
- Contact section, has fillable form
- Menu, switches between hamburger and fully-displayed, based on device
- Contact form that filters out invalid inputs
- Professional-quality styling

#### PostMVP 

- Animations while scrolling through page
- Additional dynamic functionality
- Additional styling

## Functional Components

Unless otherwise stated, all time is in hours.
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Page Framework | H | 3 | 8 | 8 (went through a few versions) |
| Header | H | 1 | 2 | 2 |
| Footer | H | 1 | 3 | 3 |
| "About" Section Layout | H | 2 | 2 | 2 |
| "Projects" Section Layout | H | 4 | 8.5 | 8.5 |
| "Contact" Section Layout | H | 3 | 2 | 2 |
| Hamburger Menu | H | 4 | 1.5 | 1.5 |
| Make Page Responsive | H | 3 | 5.5 | 5.5 |
| Implement API Call | H | 2 | 3 | 3 (did 3!) |
| Basic Styling | H | 2 | 2 | 2 |
| Additional Styling | M | 3 | 5 | 5.5 |
| Carousel Animation | H | 2 | 4 | 4 (struggling to make play on load) |
| Scrolling Animation | M | 3 | 1 | Removed |
| Additional Animation | L | 3 | 1.5 | 1.5 |
| Total | H | 36 | 49.5 | 49.5 |

## Additional Libraries

Bootstrap
- Navbar: https://getbootstrap.com/docs/4.0/components/navbar/
- Carousel: https://docs.google.com/spreadsheets/d/1-ZlnyCZ-h5ZsVR3nPYxkpS46DVsx8mYcHLlAGAWtPNs/edit#gid=0
- Contact form: https://graygrids.com/php-and-ajax-based-contact-form-for-bootstrap-and-html5/


## Code Snippet

I'm proud of the solution I devised to alternate the sides each project and matching description appears on. The variable 'side' is set to 'left' if the index is even, and 'right' if the index is odd. In order to be able to access the opposite value, the array has 'left' repeated as a third element. This way, the next string over in the array will always be the opposite side. I used string template literals to insert the correct sides as strings directly into the style attributes.

```
projects.forEach((project, i) => {
	let sides = ['left','right','left']
	let side = i % 2 // 0 if image is on left, 1 if on right
	let $li = $(`<li class="project">
					<p style="padding-${sides[side+1]}: 10px; margin: 0;">
						<img src="${project.image}" alt="${project.title}" class="project-img" style="float: ${sides[side]}; margin-${sides[side+1]}: 10px;">
						...
```
