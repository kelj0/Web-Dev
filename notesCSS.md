# CSS Notes

```
CSS, or Cascading Styles Sheets, is a way to style and present HTML. 
Whereas the HTML is the meaning or content, the style sheet is the
presentation of that document
```

---
### Table of content
-    [Applying CSS](#Applying)
-    [Colors](#Colors)
-    [Text](#Text)
-    [Margins,padding and borders](#Margins)
-    [Class and ID Selectors](#Class)
-    [Pseudo classes](#Pseudo)
-    [Pseudo elements](#PseudoE)
-    [Page Layout](#Page)
-    [Media Queries](#media-queries)
-    [Transitions](#Transitions)
-    [Lists](#Lists)
-	 [Performance organization](#performance-organization)
-    [Random Notes](#Random)
---

### Applying CSS<a name="Applying"></a>

There are 3 ways to apply CSS to HTML:
* Inline
* Internal
* External

#### Inline 
```html
<p style="color: red">Test</p>
```
#### Internal
```html
<head>
    <style>
        p{
            color: red;
        }
    </style>
</head>
```
#### External
Separate CSS file, which will simply look something like
```css
p{
    color: red;
}
h1{
    color: blue;
}
```
Lets say its saved as style.css and its in same dir as this(:point_down:) html
```html
<html>
    <head>
        <title>CSS EXample</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Test H1</h1>
        <p>Test P</p>
    </body>
</html>
```
You can also add style to etc body
```css
body{
    font-size: 14px;
    color: navy
}
```
So basicly text between the body tags will be 14 pixels in size and navy in color

---
### Colors<a name="Colors"></a>
```css
h1{
    color: navy
}
h2{
    color: #ffc
}
```
Need more colors? Go [here](https://www.w3schools.com/colors/colors_picker.asp)

#### Gradients
Simple yellow-to-red linear gradient background
```css
background: linear-gradient(yellow, red);
```
Change sides?, just add `to right`
```css
background: linear-gradient(to right, orange, red);
```
Fade to corners
```css
background: linear-gradient(to bottom right, orange, red);
```
Fade more colors (just add them)
```css
background: linear-gradient(yellow, red, blue);
```

#### Radial gradients
They are one fading from central point to "outside"
```css
background: radial-gradient(yellow, green);
```
You can specify the shape of the fade (default is ellipse)
```css
background: radial-gradient(circle, yellow, green);
```

#### Repeating gradients
This will make box colored like black-and-white bars
```css
background: repeating-linear-gradient(white, black 15px, white 30px);
```
This one is circular  (like darts bord)
```css
background: repeating-radial-gradient(black, black 15px, white 15px, white 30px);
```
#### Opacity (css3)
Allow you to specify the opacity of an element. Value is number **between 0.0 and 1.0** (0.5==50% opacity)
```css
p.one{
    background-color: rgb(0,0,0);
    opacity: 0.5;
}
```


---
### Text<a name="Text"></a>

#### Font family

```css
h1{
    font-family: "Times New Roman";
}
```
If your computer doesnt have some font you can specify 'list' of fonts *to look for*
```css
h1{
    font-family: 'Courier New', Courier, monospace;
}
```
This tells browser to first try to find Courier New, then Courier and then monospace

You can also use font that is not installed on the computer of person browsing
```css
@font-face {
    font-faimily: 'MyFont';
    src: url('path/to/font/MyFont.eot');
}
h1,h2{
    font-family: MyFont,Geo
}
```
**Warning: because user downloads font it is important that the license for the font permits it to be used in this way**

Different browsers support different formats for fonts so you need to supply the font in several variations. 
The various font formats should appear in your code in this order:
1. eot
2. woff
3. ttf/otf
4. svg

If you dont have all of there formats for your font you can upload font to a website and it will convert
it for you [link](www.fontsquirrel.com/fontface/generator)


#### Font size
```css
h1{
    font-size: 100px;
}
h2{
    font-size: 200%;
}
h3{
    font-size: 1.3em;
}
```
#### Font weight
```css
h1{
    font-weight: bold
}
```
Font weight states whether the text is bold or not

Most commonly used are 
* bold
* normal
* bolder
* lighter
* 100,200,300,400 (same as normal)
    * 500,600,700 (same as bold)
    * 800,900 (bolder)

**Font style** States if text is italic or not

#### Text decoration
```css
h1{
    text-decoration: underline;
}
```
Most common are
* underline
* overline
* line-through

#### Text transform
```css
h1{
    text-transform: capitalize
}
```
Most common are
* capitalize (turns the first letter of every word into uppercase)
* uppercase (turns everything into uppercase)
* lowercase (turns everything into lowercase)

#### Text spacing
```css
h1{
    letter-spacing: 10px;
    word-spacing: 24px;
    line-height: 1.5;
    text-align: center;
}
```
Speaks for it self

#### Text shadow
```css
text-shadow: -2px 2px 2px #999;
```
* The first value is the horizontal offset
* The second value is the vertical offset
* The third value is the blur radius (optional)
* The fourth value is the color



### Margins, padding and borders<a name="Margins"></a>

#### Margins
```css
h2{
    font-size: 32px;
    background-color: #ccc;
    margin: 20px;
    padding: 40px
}
```
```
This leaves a 20-pixel width space around the secondary header 
and the header itself is fat from the 40-pixel width padding
```
#### Borders
```css
h2{
    border-style: dashed;
    border-width: 3px;
    border-left-width: 10px;
    border-right-width: 10px;
    border-color: red
}
```

#### Box Shadows
```css
#test {
    box-shadow: 5px 5px 3px 1px #999
}
```
```
The first value is the horizontal offset — how far the shadow is nudged to the right (or 
    left if it’s negative)

The second value is the vertical offset — how far the shadow is nudged downwards (or 
    upwards if it’s negative)

The third value is the blur radius — the higher the value the less sharp the shadow. (“0” 
    being absolutely sharp). This is optional — omitting it is equivalent of setting “0”.

The fourth value is the spread distance — the higher the value, the larger the 
    shadow (“0”  being the inherited size of the box). This is also optional -
    omitting it is equivalent of setting “0”.

The fifth value is a color. That’s optional, too.
```
**Inner shadows**: just add `inset`
```css
box-shadow: inset 0 0 7px 5px #999;
```


---
### Class and ID Selectors<a name="Class"></a>
```
In the CSS, a class selector is a name preceded by a full stop “.” and an ID 
selector is a name preceded by a hash character “#”
```
Example css
```css
#top{
     background-color: #ccc;
    padding: 20px
}

.intro {
    color: red;
    font-weight: bold;
}
```
Example html
```html
<div id="top">
    <h1>Heading</h1>
    <p class="intro"> This is paragraph</p>
</div>
```
Difference between and **ID** and a **class** is that an ID can be used to identify **one element**,
whereas a class **more that one**

#### Grouping
```css
h2, .thisOtherClass, .yetAnotherClass{
    color: red;
}
```

#### Nesting
This removes the need for classes or IDs on the `p` and `h1` tags
```css
#top h1 {
    color: #ff0;
}

#top p {
    color: red;
    font-weight: bold;
}
```
```html
<div id="top">
    <h1>Heading</h1>
    <p>Paragr</p>
</div>
```

#### Child selectors
**greater-than** (“>”) can be used to specify something that is a child of something else
```html
<ul id="test">
    <li>Layer1
        <ul>
            <li>Layer2</li>
        </ul>
    </li>
    <li>Layer One
        <ul>
            <li>Layer Two</li>
        </ul>
    </li>
</ul>
```
now to **apply style** to **Layer1 and Layer One** but **not** to **Layer2 and Layer Two**
use following CSS
```css
#test > li { border: 1px solid red }
```

#### Adjecent selectors
**use + sign** to target an adjecent sibling of an element(something **immediately following**)
```html
<h1>Heading</h1>
<p>Targeted paragraph</p>
<p>Didnt get styles :(</p>
```
```css
h1 + p { font-weight: bold }
```

#### Attribute selectors
```css
abbr[title] { border-bottom: 1px dotted #ccc }
```
Translate as- put dotted line underneath all **abbreviations** with a `title` attribute
```css
input[type=text] { width: 200px; }
```
Translate as- apply a width of 200px only to `input` elements that are specified as text boxes


---
### Pseudo classes<a name="Pseudo"></a>
```css
a:link{
    color: blue;
}
a:visited{
    color: purple;
}
```
`link`, targeting **unvisited links** , `visited` targeting **visited links** are the most basic pseudo 
classes. If user visited link it will be purple , if he didnt its blue

#### Dynamic pseudo Classes
Used to apply styles when something happens to something
* `active` - something activated by user(when a link i clicked on)
* `hover` - when something is passed over by an input from user(when cursor moves over a link)
* `focus`-when something gains focus (when it is selected by, or is ready for, etc. in forms)
```css
a:active {
    color: red;
}
a:hover {
    text-decoration: none;
    color: blue;
    background-color: yellow;
}
input:focus, textarea:focus {
    background: #eee;
}
```

#### First Children
Used when you want to target very first descendant of an element
```html
<p>Para 1</p>
<p>Para 2</p>
```
```css
p:first-child{
    font-weight: bold;
    font-size: 40px;
}
```
Only Para 1 would be 'affected' by that styling

---
### Pseudo elements<a name="PseudoE"></a>
Pseudo elements are much like pseudo classes
* first-letter - applies to the first letter inside a box
* first-line - applies to the top-most displayed line in a box

Example (first letter will have 24px font, and first line will be **bold**)
```css 
p{
    font-size: 12px;
}
p:first-letter{
    font-size: 24px;
    float: left;
}
p:first-line{
    font-weight: bold;
}
```
#### Before and after
```css
blockquote:before{
    content: open-quote;
}
blockquote:after{
    content: close-quote;
}
li:before{
    content: "POW! ";    /* POW! item1*/
}
p:before{
    content: url(images/jam.jpg); /* [img]text */
}
a:after{
	content: "(" attr(href) ")";   /* link (https://www.link.com) */
	font-size: 11px;   
}
```

You can also style that elements
```css
li:before{
    content: "POW! ";
    background: red;
    color: #fc0;
}
```

---
### Page layout<a name="Page"></a>
#### Positioning
The `position` property is used to define whether a box is absolute, relative, static or fixed:
* `static` - default value and renders a box in normal order of things
* `relative` - like `static` but box can be offsed from its position with properties `top`,`right`..
* `absolute` - pulls a box out of normal flow it can be placed anywhere on the page using `top`,`left`..
* `fixed` - behaves like `absolute` but it will absolutely position a box in reference to the browser window,
`fixed` is **exactly** where they are **even when the page is scrolled**

```html
<div id="navigation">
    <ul>
        <li>Test</li>
    </ul>
</div>
<div id="content">
    <p>This is some content</p>
</div>
```
```css
#navigation {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
}
#content{
    margin: 0 200px; /*
    setting top and bottom margin to 0px and right and left to 200px
    */
}
```

#### Backgrounds
`CSS3 allows you to apply multiple background images to a single box`
```css
background-image: url(this.jpg), url(that.gif), url(theother.png);
```

#### Background size
**background-size** propery allows you to stretch or compress a background img
Values:

* `auto` - leave image's original size and w/h ratio 
* `percentages`- a width and a height, such as 50% 25%
* `contain`- maintains the background image’s original ratio and makes it as large as possible 
whilst fitting entirely within the box’s background area.
* `cover`- maintains the background image’s original ratio and makes it large enough to fill 
the entire background area, which may result in cropping of either the height or width

#### Transformations
Need to rotate,skew,scale or translate a box and its content? 
[See this link](#http://www.htmldog.com/references/css/properties/transform/)

#### Floating elements
```css
h1{
float: right;
}
```
#### Multi-column layout with float

```html
<div class="column1of2">
    <h3>COLUMN 1</h3>
</div>
<div class="column2of2">
    <h3>COLUMN 2</h3>
</div>
```

```css
.column1of2 {
float: left;
width: 620px;
margin: 10px;
}
.column2of2 {
float: left;
width: 300px;
margin: 10px;
}
```
#### Z-Index property
```
in order to apply the z-index property to an element, 
you must first apply a position value of relative, 
absolute, or fixed.

The element with the highest z-index value will 
appear on the top regardless of its placement in the DOM.
```
```html
<div class="box-set">
  <figure class="box box-1">Box 1</figure>
  <figure class="box box-2">Box 2</figure>
</div>
```
```css
.box-set {
  background: #eaeaed;
  height: 160px;
  position: relative;
}
.box {
  background: #2db34a;
  border: 2px solid #ff7b29;
  position: absolute;
}
.box-1 {
  left: 10px;
  top: 10px;
}
.box-2 {
  bottom: 10px;
  left: 70px;
  z-index: 3;
}
```
**box-2** is "on top of" **box-1**



---
### Media queries<a name="media-queries"></a>
`@media` at-rules, used to target styles at specific media, such as screen or print
```css
@media screen and (max-width: 1000px) {
    #content { width: 100% }
}
```
More examples
```css
@media screen and (max-width: 1000px) {
    #content { width: 100% }
}
@media screen and (max-width: 800px) {
    #nav { float: none }
}
@media screen and (max-width: 600px) {
    #content aside {
        float: none;
        display: block;
    }
}
```
#### Orientation-specific CSS
This is especially usefull with mobile devices
```css
@media screen and (orientation: landscape) {
    #nav { float: left }
}
@media screen and (orientation: portrait) {
    #nav { float: none }
}
```

#### Width and height specific CSS
Usefull for nav bars ( if screen is too small rearrange items )
```css
@media screen and (min-device-height: 768px) and (max-device-width: 1024px) {
    /* Apply this if height is bigger that 768px and width than 1024px*/
}
```
Be carefull of pixel ratios 
[see this](#https://stackoverflow.com/questions/8785643/what-exactly-is-device-pixel-ratio)


---
### Transitions<a name="Transitions"></a>
```
Transitions allow you to easily animate parts of your 
design without the need for the likes of JavaScript
```
you can use `transition` property, it has following properties:
* `transition-property` - which property (or properties) will transition.
* `transition-duration` - how long the transition takes.
* `transition-timing-function` -  if the transition takes place at a constant speed or if it 
accelerates and decelerates
* `transition-delay` - how long to wait until the transition takes place.

```css
a:link {
    transition: all .5s linear 0;
    color: hsl(36,50%,50%);
}
a:hover {
    color: hsl(36,100%,50%);
}
```

---
### Lists<a name="Lists"></a>
```css
ul{
    list-style-image: url("images/star.png");
 }
```
This changes bullets to stars (or any other picture you want)
```css
ul.illuminations{
    list-style-position: outside;
    }
ul.season{
    list-style-position: inside;;
    }
```
* outside - puts dot outside of text
* inside - puts dot inside of text see below
```
* this is
  outside
  
* this is
inside
```

---
### Performance organization<a name="performance-organization"></a>
* **Keep selectors short**
```css
/* Bad */
header nav ul li a {...}

/* Good */
.primary-link {...}

/* Bad */
button strong span {...}
button strong span .callout {...}

/* Good */
button span {...}
button .callout {...}
```
* **Favor classes**
```css
/* Bad */
#container header nav {...}

/* Good */
.primary-nav {...}

/* Bad */
article.feat-post {...}

/* Good */
.feat-post {...}
```
* **Reusable code**
```css
/* Bad */
.cats {
  background: #eee;
  border-radius: 5px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, .25);
}
.similarcats {
  background: #eee;
  border-radius: 5px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, .25);
}

/* Good */
.cats,
.similarcats {
  background: #eee;
  border-radius: 5px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, .25);
}

/* Even Better */
.animals {
  background: #eee;
  border-radius: 5px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, .25);
}
```
* **Reduce HTTP Requests**
```css
<!-- Bad -->
<link href="css/reset.css" rel="stylesheet">
<link href="css/base.css" rel="stylesheet">
<link href="css/site.css" rel="stylesheet">

<!-- Good -->
<link href="css/styles.css" rel="stylesheet">
```


---
### Random notes<a name="Random"></a>

#### CSS Rules
Lets say you have following css file
```css
p {color: red}
p {color: blue}
```
The text in the box of `p` elements would be colored blue because that rule came last. However lets see this
```css
div p{color: red}
p {color: blue}
```
The text withing a `p` in `div` would be colored **red**
```
Basically, the more specific a selector, the more preference it will be given 
```
