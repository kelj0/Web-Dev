# HTML Notes

---
-    [Tags](#Tags)
-    [Titles](#Titles)
-    [Paragraphs](#Paragraphs)
-    [Emphasis](#Emphasis)
-    [Lists](#Lists)
-    [Links](#Links)
-    [Images](#Images)
-    [Tables](#Tables)
-    [Forms](#Forms)

---

### Tags<a name="Tags"></a>
```html
<!DOCTYPE html>
<html>
 <body> 
  This is my first web page
 </body>
</html
```
Now lets explain code above

`<!DOCTYPE html>` is a **document type declaration** and it lets the browser know which *flavor* of html you're using. Its 
important to stick this in, if you dont browsers will assume you dont really know what you're doing and act in a very peculiar way.

`<html>` is the **opening tag**, it tells browser that everything between that and the `</html>` **closing tag** is and HTML document.
Stuff between `<body>` and `</body>` is the main content of the document

---
### Titles<a name="Titles"></a>

From now on I will just put snippets of short codes
```html
<head>
    <title>This is shown in tab/title bar window</title>
</head>
```
`<head>` appears before the body element and contains information about the page

---
### Paragraphs<a name="Paragraphs"></a>
```html
<body>
    Paragraph 1
    Paragraph 2
</body>
```
Displays this
```
Paragraph 1 Paragraph 2
```
To display what you wanted you would write this
```html
<body>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</body>
```
This displays
```
Paragraph 1
Paragraph 2
```

---
### Emphasis<a name="Emphasis"></a>
```html
<p><em>This is italics</em></p>
<p><strong>This is bold</strong></p>
```
*This is italics*

**This is bold**

---
### Line breaks

`<br>` - stands for *break line* , it will split sentence in new line (**doesn't have closing tag**)
```html
This line will be separated here <br>
Im new line
```
or
```html
This line will be separated here <br>Im new line
```
Would display

This line will be separated here
Im new line

---
### Lists<a name="Lists"></a>

Unordered
```html
<ul>
    <li>This</li>
    <li>Is</li>
    <li>Unordered list</li>
    <ol>
      <li>Unordered list within unordered list</li>
    <ol>
<ul>
```
* This
* Is
* Unordered list
    * Unordered list within unordered list
Ordered
```html
<ol>
    <li>This</li>
    <li>Is</li>
    <li>Ordered list</li>
    <ol>
      <li>Ordered list within unordered list</li>
    </ol>
<ol>
```
1. This
2. Is
3. Ordered list
    1. Ordered list within ordered list

---
### Links<a name="Links"></a>
```html
<a href="http://www.google.com">Google</a>
```
You can also link files (Lets say you want to link index.html that is in same dir as this file)
```html
<a href="index.html">Index</a>>
```
Lets look at this file tree
```
|templates
|---index.html
|file.html
```
To link file.html from index you would write something like this
```html
<a href="../file.html">file</a>
```
Open links in **new tab**
```html
<a target="_blank" rel="noopener noreferrer" href="http://www.google.com">Google</a>
```
**Link** user to another part of the **same page**
```html
<h2 id="test">This is test</h2>
<a href="#test">Jump to test</a>
```
---
### Images<a name="Images"></a>

Display image from **link**
```html
<img src="http://www.urltoimage.jpg",width="100",height="100",alt="Alternative description">
```
**width** and **height** are necessary because if they are excluded, the browser will tend to calculate the size as the image
loads, instead of when the page loads, which means that the layout of the document may jump around while the page is loading

**alt** is providing meaningful information to users who are unable to see the image

### Tables<a name="Tables"></a>

```html
<table>
    <tr>
        <td>Row 1, cell 1</td>
        <td>Row 1, cell 2</td>
    </tr>
    <tr>
        <td>Row 2, cell 1</td>
        <td>Row 2, cell 2</td>
    </tr>
</table>
```
This table doesnt have borders! To have borders add **border** to `<table>` (`<table border="1">`)

---
### Forms<a name="Forms"></a>

**Basic form element**
```html
<form action="processingscript.py" method="post">
    <input>
</form>
```
`<input>` or `<input type="text">` is a standard textbox, you can also have a value attribute(sets init text in textbox)
```
Most common input types
```
* `password` (similar to textbox but characters will be hidden)
* `checkbox` (its a checkbox, it can be on or off)
    * `<input type="checkbox" checked>` - makes initial state ON
* `radio` (similar to checkbox but user can only select one radio button in a group)
* `submit` (its a button that will submit form, you control text that appears on button with `value` attribute)
* `file` (its one of those "Browse.." buttons) 

To see all input types go [here](http://www.htmldog.com/references/html/tags/input/)

**TEXTAREA** is basically, a large, multi-line textbox. You can define number of **rows** and **columns** with
```
rows and cols
```
```html
<textarea rows="5" cols="20">Some initial value of thext area</textarea>
```
**SELECT**
```html
<select>
    <option>Option 1</option>
    <option>Option 2</option>
    <option value="third option">Option 3</option>
</select>
```
When the form is **submitted**, the value of selected option will be sent. This **value will be the text between the selected**
**opening and closing option tag unless** an explicit value is specified with the `value` **attribute**

**NAMES**
```html
<form action="test.py" method="post">
    <input type="text" name="testname">
</form>
```
This makes form handleable by script (now you can easier extract post request)
