# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: AR

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is a unique form of code that combines Javacript and HTML syntax inside a React template. This process is executed using a unique return keyword inside of React. This new return statement uses syntax known as "Multi-line paranthesis", which nest all of the JSX code inside of it's body. Multi-line paranthesis give developers the ability to write as many lines of JSX syntax as they want without having to write multiple return keywords inside seperate function blocks. Many refer to the body of this return statement as "JSX LAND," Since JSX syntax can be stored inside of it's body. One key difference between HTML and JSX is the format you can write JavaScript code. For instance, in HTML, you need to declare a script tag inside of the body tag to use javascript. Furthermore, javascript can only be written inside of that script tag and no where else, HTML is rarely written inside of  script tags as well. JSX on the other hand, requires no special tag to be declared, the moment a multi-line return keyword is declared, the code editor will allow you to write as many combined HTML and JavaScript syntax needed for your program. Even though some javascript code snippets will be nested inside of curly braces.

Researched answer: JSX, which stands for JavaScript XML, is a syntax extension of JavaScript that allows developers to directly write HTML inside of React. JSX is faster than normal JavaScript as it performs optimizations while translating to regular JavaScript. With JSX, instead of seperating the markup and logic in seperated files. React uses components for this purpose. In some scenarios, React doesn't require using JSX, but most people find JSX to be a helpful visual aid when working with UI inside the javascript code. It also allows React to show more useful error and warning messages.

2. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer: yarn is a package manager that is a clone to javascripts package manager NPM. yarn will add staging areas to your files like package.json, fetch packages and node_modules. yarn is also one of the main commands to start a React inside the computers command line and tranfer the it's dependencies to a code editor and onto a browser when coding insde React. 

Researched answer: Yarn is an open source package manager for Node.js that allows developers to share their code from around the world. Yarn's main focuses are speed. security, and consistency. Yarn was created to be a faster, secure, and more reliable alternative to Node.js's NPM. Yarn not only modifies the package.json, it also creates cache implementation when ever it installs a package. Which copies data to a location that enables applications or components to access data faster than retrieving it from it's primary source. This one reason yarn is a faster package manager than npm and why so many companies use it.

3. What is the difference between state values and props in React?

Your answer: In React, state holds information about the component, state is one of the first destructive variables that is declared inside a React component
function and holds a variable name and a set method to hold the variables information. States are mutuable and won't allow you to transfer the data it holds. Instead, it keeps the data inside the component. State is often used to render dynamic changes to the function component. States are also internal. Props, unlike state, are external elements controlled by the renser() method and they are unmutuable and can communicate and share data between other components. This is what makes prop components more reusable. 

Researched answer: Some of the main differences between state and props in React is the state is owned and managed by the component itself, while props are passed to the component from its parent. Props are mainly used to pass data from one component to another. This can be in the form of numbers, strings, objects and arrays. Props are typically passed to a components as attributes on the components opening tag. 

4. What is the DOM?

Your answer: DOM, which stands for Docuemnt Object Model. Is syntax from javascript that makes the webpage interactive with the use of event listeners. These event listeners are syntaxes in javascript that listen for mouse and keyboard events to occur from the user. For instance, DOM will have click events that listener for when a user presses down on the mouse button. When this occurs, the webpage can change in a variety of appearances made by the DOM. For example, Since DOM combines html and css syling with javascript, when a user clicks on the page, the page itself can change backround colors and font sizes due to DOM manipulation happening inside of the javascript file.

Researched answer: The Document Object model is a programming interface for website documents. DOM represents webpages as a tree of nodes and objects. Each node 
represents an HTML element. The DOM allows programs to change the document structure, style, and content. It also allows the program to create, change, or remove 
elements from the document.

5. STRETCH: Which is the difference between a div tag and a span tag?

Your answer: The div tag is an HTML element that acts as a container to store varies HTML elements. Although the span tag also is used as a storgage container and both can be storage for HTML elements and be styled with css, the div tag has vertical styling to it while the span tag is horizontal. Div tags are usually used to store larger HTML code while span tags can be limited

Researched answer: The div and span tags are both HTML elements that group related parts of a web page. The div tag is a block-level tag that groups other HTML tags and applies CSS to them. The span tag is an inline element that groups inline elements. The div tag is on a separate line, while the span tag can be on a line with other elements. The div tag uses borders with width and height with specified color pixels to highlight the front end document. The span tag uses specified color coding to highlight the front end document

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: Object-oriented programming is a programming model that organizes around data, or objects, rather than functions and logic. With object oriented programming, objects are data fields that have unique attributes and behavior. Objects can contain both data and code. The data is in the form of fields, often known as attributes or properties. The code is in the form of procedures, often known as methods.

2. Ruby: Ruby is a general purpose programming language that you can use to write all sorts of programs. It is the base language of the popular web applications framework called Ruby on Rails.

3. Ruby blocks: In Ruby, a block is a section of code defined within the keywords do and end or with curly braces. A ruby block can be declared as a single-line or multi-line block. Ruby convention is to use {} for single-line blocks and do..end for multi-line blocks.
