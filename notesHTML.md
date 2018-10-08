# HTML Notes

---
-    [Tags](#Tags)
-    [Titles](#Titles)
-    [Emphasis](#Emphasis)
-    [Lists](#Lists)
-    [Links](#Links)
-    [Images](#Images)
-    [Tables](#Tables)
-    [Forms](#Forms)
-    [Text](#Text)
-    [Meta](#Meta)
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
### Emphasis<a name="Emphasis"></a>
```html
<p><em>This is italics</em></p>
<p><strong>This is bold</strong></p>
```
*This is italics*

**This is bold**

#### Line breaks

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

#### Unordered
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
#### Ordered
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

#### Definition lists
```html
<dl>
    <dt>Custom bullet</dt>
        <dd>This is list made with custom bullets</dd>
    <dt>Bullet 2</dt>
        <dd>This is another custom bullet</dd>
        <dd>Yep its custom</dd>
    <dt>Bullet 3</dt>
    <dt><strong>Strong Custom bullet</strong></dt>
        <dd>You can have as many as you want</dd>
</dl>
```


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

#### Rowspan and colspan
```html
<table border="1">
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
    </tr>
    <tr>
        <td rowspan="2"> Row 2, Cell 1, also spanning to Row3, Cell 1</td>
        <td colspan="2">Row 2, Cell 2, also spanning Row 2, Cell 3</td>
    </tr>
    <tr>
        <td>Row 3, Cell 2</td>
        <td>Row 3, Cell 3</td>
    </tr>
</table>
```

---
### Forms<a name="Forms"></a>

#### Basic form element
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
#### Select
```html
<select>
    <option>Option 1</option>
    <option>Option 2</option>
    <option value="third option">Option 3</option>
</select>
```
When the form is **submitted**, the value of selected option will be sent. This **value will be the text between the selected**
**opening and closing option tag unless** an explicit value is specified with the `value` **attribute**

#### Names
```html
<form action="test.py" method="post">
    <input type="text" name="testname">
</form>
```
This makes form handleable by script (now you can easier extract post request)

---
### Text<a name="Text"></a>

#### Paragraphs
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

#### Abbreviations
```html
<p>This is a <abbr title="Abbreviation">abb</abbr></p>
```
Basically when you hower abb with mouse, that small box would appear with text "Abbreviation" in it 

#### Quotations
```
blockquote is generally used for standalone often multi-line quotations
whereas q is used for shorter, in-line quotations
```
```html
<p> So i said <q>This is in-line quotation</q></p>
```

#### Code
```html
<p> 
    Lets suppose we have variable called 
    <code>
    <var>a</var> = 5;
    </code>
    and you type 
    <kbd>print(a)</kbd>
    console would output 
    <samp>5</samp>
</p>
```
* `<var>` - can be used for **variable**
* `<kbd>`(*keyboard*) - can be used for user **input**
* `<samp>` - can be used for sample **output**

#### Preformatted text
```html
<pre>
    <code>
        &lt;div id="intro"&gt;
            &lt;h1&gt;Some heading&lt;/h1&gt;
            &lt;p&gt;Some paragraph paragraph thing thing thingy.&lt;/p&gt;
        &lt;/div&gt;
    </code>
</pre>
```
* Includes all the white spaces, line breaks.. **most commonly used for blocks of code**
* `&lt;` - this is equal to `<`
* `&gt;` - this is equal to `>`

#### Address
`Use specifically for the contact details relating either to entire web page or to an article element`
```html
<h3>Keljo info</h3>
<address>
    <ul>
        <li>9234 42942</li>
        <li>keljo@keljo.keljo</li>
    </ul>
</address>
```
#### Definition terms
`dfn` is **definition** term and is used to highlight the first use of a term. Like `abbr`
```html
<p>This is a <dfn title="Definition">dfn</dfn></p>
```
#### Bi-directional text
`bdo` can be used to reverse the direction of the text
```html
<bdo dir="rtl">lgeK</bdo>
```
* `rtl` - right to left
* `ltr` - left to right

#### Articles and Sections
An `article` element can be used to mark up a **standalone section** of content

A `section` element represents a more general section and could be used to **split up an article**, or to 
represent chapters, for example.
```html
<article>
    <section id="intro">
        <p>[An introduction]</p>
    </section>
    <section id="main_content">
        <p>[Content]</p>
    </section>
    <section id="related">
        <ul>
            <li>Go to <a href="that.html">that</a></li>
            <li>Go to<a href="this.html">this</a></li>
        </ul>
    </section>
</article>
```

#### Headers and Footers
`header` and `footer` provide further specialized, self-descriptive, sections:
```html
<body>
<article>
    <header>
        <h1>Alternatively..</h1>
        <p>[An introduction]</p>
    </header>
    <section id="main_content">
        <p>[Content]</p>
    </section>
    <footer>
        <p>[End notes]</p>
    </footer>
</article>
</body>
```
#### Asides
An `aside` can be used to represent content that is related the content surrounding it. Think of 
pull-quotes or snippets of related information in an article:
```html
<section id="main_content">
    <h1>Heading 1</h1>
    <p>Some paraghraph</p>
    <aside>
        <h2>Heading 2</h2>
        <p>[A short note about Heading 2]</p>
    </aside>
    <p>[A bit more about Heading 1]</p>
</section>
```
#### Navigation
`nav` is used to mark up a **group of navigation links**
```html
<nav id="main_nav">
    <ul>
        <li><a href="/home/">Home</a></li>
        <li><a href="/jobs/">Join us</a></li>
        <li><a href="/about/">About us</a></li>
    </ul>
</nav>
```

---
### Meta tags<a name="Meta"></a>

#### HTTP Equivalents
```
The http-equiv attribute can be used instead of the name
attribute and will make an HTTP header, which is information
sent to the server where the web page is held. The attribute 
should rarely be used but the value can be:
```
* `content-type` - encoding declaration, defining what character set is being used
* `default-style` - preferred stylesheet from a selection of **link** or **style** elements
* `refresh` - defines how often (*in seconds*) a page refreshes or if it should redirect to another page
```html
<head>
  <title>Testing</title>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="3">
  <!--refresh is not great for accessibility -->
  <meta name="description" content="This is used by search engines to display desc of web page in results">
</head>
```
