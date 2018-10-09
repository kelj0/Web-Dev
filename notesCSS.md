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

---
### Text<a name="Text"></a>
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

#### Font size
```css
h1{
    font-size: 100px;
}
```
#### Font weight
```css
h1{
    font-weight: bold
}
```
Font weight states whether the thext is bold or not

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
    content: "POW! ";
}
p:before{
    content: url(images/jam.jpg);
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