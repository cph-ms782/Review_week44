# Review week44


# Monday  
[All Monday files](https://github.com/cph-ms782/Review_week44/tree/master/exercises/src/monday)  
####JavaScript/React  juhjåøp
[1 Understanding ES6 Modules – import and export](https://github.com/cph-ms782/Review_week44/blob/master/exercises/src/monday/App.js) - 100% done  
[2 Object and Array Destructuring](https://github.com/cph-ms782/Review_week44/blob/master/exercises/src/monday/App2.js) - 100% done  
3 Composing Components - 0% done  

# Tuesday  
[All tuesday files](https://github.com/cph-ms782/Review_week44/tree/master/exercises/src/tuesday)  
####State and Events with React  
[1](https://github.com/cph-ms782/Review_week44/blob/master/exercises/src/tuesday/App3.js) - 100% done  
[2](https://github.com/cph-ms782/Review_week44/blob/master/exercises/src/tuesday/App4.js) - 100% done  
[3 (plus more files) - use "All tuesday files"-link to see them](https://github.com/cph-ms782/Review_week44/blob/master/exercises/src/tuesday/AppJokes.js) - 100% done  
####Exercises Lists and Keys  
[1 Lists and Keys](https://github.com/cph-ms782/Review_week44/blob/master/exercises/src/tuesday/ListDemoApp.js) - 100% done  
[2 List and Keys continued](https://github.com/cph-ms782/Review_week44/blob/master/exercises/src/tuesday/ListDemoApp2.js) - 100% done  

  * What is the purpose of the key value, which must be given to individual rows in a react-list  
_**It's for react's housekeeping. Handling changes in lists**_  

  * It's recommended to use a unique value from your data if available (like an ID). How do you get a unique value in a map callback, for data without a unique id?  
_**You use UUID()**_  

  * What is the difference(s) between state and props?  
_**props are the effect of changes in state. When a state changes a value, the value is passed through the props to lower components**_  

  * For which scenarios would you use props, and for which would you use state?  
_**props when you don't need anything to change. State when you do**_  

  * Where is the only place you can set state directly as in:  this.state = {name: "Peter"};  
_**When you init a state using useState(state)**_  

  * How must you set state all other places?  
_**setState()**_  
  

# Wednesday  
[All wednesday files](https://github.com/cph-ms782/Review_week44/tree/master/exercises/src/wednesday)  
####Forms with React  
[Forms and Controlled Components](https://github.com/cph-ms782/Review_week44/blob/master/exercises/src/wednesday/FormDemo.js) - 100% done  
[Handling multiple inputs](https://github.com/cph-ms782/Review_week44/blob/master/exercises/src/wednesday/FormDemoMultiple.js) - 100% done  

  * In a Controlled Component React state is made the "Single source of truth", so how:
  
    * Do we ensure that input controls like text, textarea or select always presents the value found in the components state?  
_**By attaching an ID to input tag, to be filtered out later**_  

    * Do we ensure that a controls state, always matches the value found in an input control?  
_**By attaching an event handler that updates the state which also updates the inputs valyue through value=stateValue**_  

     * What is the purpose of doing event.preventDefault() in an event handler?  
_**Forms has a build in behaviour of reloading page. Not the way a SPA should work**_  

     * What would be the effect of NOT doing event.preventDefault in a submit handler?  
_**Page reloads**_  

     * Why don't we want to submit the traditional way, in a single page application?  
_**We want to remain on the client and not go to the server. It prevents a blinking page**_  

     * Explain in words what it takes to implement the "Controlled Component" pattern for a form  
_**A single source of truth keeps a tap on data received from forms and updates values when changes occur**_  


####Lifting State  
[Lifting State Up (plus more files)](https://github.com/cph-ms782/Review_week44/blob/master/exercises/src/wednesday/App5.js) - 100% done  
[6  Lifting State Up 2]() - 0% done  

* What is meant by the react term “Lifting State Up”  
_**We want to remain on the client and not go to the server. It prevents a blinking page**_  

* Where do you lift it up to?  
_**Component above**_  

* Which way does React recommend data to flow: From sibling to sibling, from bottom to top or from top to bottom?  
_**From top to bottom**_  

* Lifting state up, involves a great deal of boilerplate code, what’s the benefit we get from doing “things” like this?  
_**You get single source of truth. The parent componenet handles things**_  


# Thursday  
[All thursday files](https://github.com/cph-ms782/Review_week44/tree/master/react-crud-rest-exercise/src/components)  
####	Api Interaction with fetch  
API Interaction using fetch (fall 2019) - 100% done  

# Friday  
[All friday files](https://github.com/cph-ms782/Review_week44/tree/master/ReactStateandFetch/src)  
####Exam preparation exercise  
React, State and Fetch - 80% done  




Læringsmål:

  * Kunne demonstrere kode med grundlægende JPQL Queries  
  * Kunne redegøre for konventioner ved opbygning af REST api'er  
  * Kunne håndtere parametre i REST endpoints i egne kodeeksempler  
  * Kunne implementere GET, POST, PUT og DELETE requests  
  * Kunne redegøre for, og implementere DTO's og konvertere frem og tilbage mellem Java og JSON  
  * Kunne vise med egne kodeeksempler, hvordan man håndterer POST med tilhørende JSON og får det deserialiseret til Java entiteter