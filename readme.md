# Javascript Quiz - Take Home Project


### Intital Preparation

- After getting instructions for the Take-home project I've read the whole document and it's requirements carefully and tried to map some solutions in my mind for about 5 min.

- Carefully inspected the figma design and mapped the overall layout in my mind as the layout was quite simple it did not took that long. 

### Work Directory Setup

- Downloaded all the asset files from figma and created a folder with a suitable name and tried to created a clean hierarchy of folders and files.

- Created a global CSS file with custom variables to avoid DRY and applied some common styling which i will reused in different html pages.

- Created essential html and css files and linke them together.

### HTML AND CSS

- In index.html created a overall layout with suitable and easy to remember classnames.

- Gave it proper meta tags and header details. and moved to CSS for styling
- Used the custom variable from the global css and added proper padding and a max-width container so the contain does not overflow. Styled the whole page with the help of flex-box , position and other essential css properties. 
- Repeated the process on all HTML and CSS files and within few hours my static frontend was ready.
- Kept the MCQ quizContainer empty for injecting dynamic content which was given on the document.

PS: It would have taken way less time probably 30% of what it took with a css library like tailwind. But It was a nice recap and retour of using raw CSS. Which was nice.


### Javascript and Dynamic 

- Most complicated part was the MCQ page which I had to think of the solution to the problems in seperate smaller parts.

- I took the given data and stored it inside a variable. (not suitable for production. database is preferrable)

-Created a function to load all the dynamic data by looping through the given data which was an array. Used object literal to inject dynamic data and rendered the mcq questions and answers on the page.

- Stored the answers in a seperate varibale and created another function which gets triggred when user clicks on Finish button on the MCQ page.

- The function conains the logic which fetches the user inputs from the DOM and loops through the user given answers with the real answers and increments the score variable.

- Then it stores the score on Local Storage so I can fetch it on any page I like and routes the users in results page.

- Result page fetches the score from Local Storage and shows it inside a div.

- Finally Implemented the counter timer functionality with setInterval function and gave it a logic when seconds and minute both equals to 0. It resets the score on Local Storage and redirects user to timeout Page

### Extra

- Made all the pages as mobile responsive as I can in a short amout of time as it was getting a bit late. so it can be viewed from mobile devices.

