## Google HTML/CSS Style Guide

see [full style guide](https://google.github.io/styleguide/htmlcssguide.html) for more

---
- 	[General](#general)
- 	[HTML](#html)
-	[CSS](#css)
---

### General<a name="general"></a>

-   [Protocol](#protocol)
-   [Indentation](#indentation)
-   [Capitalization](#capitalization)
-   [Trailing Whitespace](#trailing-whitespace)
-   [Encoding](#encoding)

---
##### Protocol<a name="protocol"></a>

**Use** `HTTPS` **protocol for embedded resources where possible**
```html
<!-- Not recommended: omits the protocol -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

<!-- Not recommended: uses the HTTP protocol -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

<!-- Recommended -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
```
```css
/* Not recommended: omits the protocol */
@import '//fonts.googleapis.com/css?family=Open+Sans';

/* Not recommended: uses the HTTP protocol */
@import 'http://fonts.googleapis.com/css?family=Open+Sans';

/* Recommended */
@import 'https://fonts.googleapis.com/css?family=Open+Sans';
```

---
#### Indentation<a name="indentation"></a>

Indent by **2 spaces** at a time

**Don’t use tabs or mix tabs and spaces for indentation**
```html
<ul>
  <li>Fantastic
  <li>Great
</ul>
```
```css
.example {
  color: blue;
}
```

---
#### Capitalization<a name="capitalization"></a>

**Use only lowercase**

```
All code has to be lowercase: This applies to HTML 
element names, attributes, attribute values (unless text/CDATA), 
CSS selectors, properties, and property values (with the exception of strings).
```
```html
<!-- Not recommended -->
<A HREF="/">Home</A>

<!-- Recommended -->
<img src="google.png" alt="Google">
```
```css
/* Not recommended */
color: #E5E5E5;

/* Recommended */
color: #e5e5e5;
```

---
#### Trailing Whitespace<a name="trailing-whitespace"></a>

**Remove trailing white spaces**

Trailing white spaces are unnecessary and **can complicate diffs**
```html
<!-- Not recommended -->
<p>What?_

<!-- Recommended -->
<p>Yes please.
```

---
#### Encoding<a name="encoding"></a>
```
Use UTF-8 (no BOM).

Make sure your editor uses UTF-8 as character encoding, without a byte order mark.

Specify the encoding in HTML templates and documents via <meta charset="utf-8">. 
Do not specify the encoding of style sheets as these assume UTF-8.
```

---
### HTML<a name="html"></a>

-   [Document type](#document-type)
-   [HTML Validity](#html-validity)
-   [Semantics](#semantics)
-   [Multimedia Fallback](#multimedia-fallback)
-   [Separation of Concerns](#separation-of-concerns)
-   [Entity References](#entity-references)
-   [Optional Tags](#optional-tags)
-   [General Formatting](#general-formatting)
-   [HTML Quotation Marks](#html-quotation)
---
#### Document Type<a name="document-type"></a>
```
Use HTML5.

HTML5 (HTML syntax) is preferred for all HTML documents: <!DOCTYPE html>.

It’s recommended to use HTML, as text/html. Do not use XHTML. XHTML, 
as application/xhtml+xml, lacks both browser and infrastructure support and 
offers less room for optimization than HTML.

Although fine with HTML, do not close void elements, i.e. write <br>, not <br />.
```

---
#### HTML Validity<a name="html-validity"></a>

Use valid HTML code unless that is not possible due to otherwise unattainable performance goals regarding file size.

Use tools such as the [W3C HTML validator](https://validator.w3.org/) to test.

```html
<!-- Not recommended -->
<title>Test</title>
<article>This is only a test.

<!-- Recommended -->
<!DOCTYPE html>
<meta charset="utf-8">
<title>Test</title>
<article>This is only a test.</article>
```

---
#### Semantics<a name="semantics"></a>

```
Use elements (sometimes incorrectly called “tags”) for 
what they have been created for. For example, use heading 
elements for headings, p elements for paragraphs, a elements 
for anchors, etc.

Using HTML according to its purpose is important for accessibility, 
reuse, and code efficiency reasons.
```

```html
<!-- Not recommended -->
<div onclick="goToRecommendations();">All recommendations</div>

<!-- Recommended -->
<a href="recommendations/">All recommendations</a>
```

---
#### Multimedia Fallback<a name="multimedia-fallback"></a>

For multimedia, such as **images, videos, animated objects via canvas**, make sure to **offer alternative access** 
```
For images that means use of meaningful alternative text (alt) and 
for video and audio transcripts and captions, if available.

For images whose alt attributes would introduce redundancy, 
and for images whose purpose is purely decorative which you cannot 
immediately use CSS for, use no alternative text, as in alt=""
```
```html
<!-- Not recommended -->
<img src="spreadsheet.png">

<!-- Recommended -->
<img src="spreadsheet.png" alt="Spreadsheet screenshot.">
```


#### Separation of Concerns<a name="separation-of-concerns"></a>

**Strictly keep structure (markup), presentation (styling), and behavior (scripting) apart**
```
That is, make sure documents and templates contain only HTML and HTML that is solely serving structural purposes
Move everything presentational into style sheets, and everything behavioral into scripts

In addition, keep the contact area as small as possible by linking as few style sheets and 
scripts as possible from documents and templates

Separating structure from presentation from behavior is important for maintenance reasons. It is always more expensive 
to change HTML documents and templates than it is to update style sheets and scripts.
```

```html
<!-- Not recommended -->
<!DOCTYPE html>
<title>HTML sucks</title>
<link rel="stylesheet" href="base.css" media="screen">
<link rel="stylesheet" href="grid.css" media="screen">
<link rel="stylesheet" href="print.css" media="print">
<h1 style="font-size: 1em;">HTML sucks</h1>
<p>I’ve read about this on a few sites but now I’m sure:
  <u>HTML is stupid!!1</u>
<center>I can’t believe there’s no way to control the styling of
  my website without doing everything all over again!</center>

<!-- Recommended -->
<!DOCTYPE html>
<title>My first CSS-only redesign</title>
<link rel="stylesheet" href="default.css">
<h1>My first CSS-only redesign</h1>
<p>I’ve read about this on a few sites but today I’m actually
  doing it: separating concerns and avoiding anything in the HTML of
  my website that is presentational.
<p>It’s awesome!
```

#### Entity References<a name="entity-references"></a>

**There is no need to use** entity references like `&mdash;, &rdquo;`, or `&#x263a;`
```
The only exceptions apply to characters with special meaning in HTML (like < and &) 
as well as control or “invisible” characters (like no-break spaces).
```
```html
<!-- Not recommended -->
The currency symbol for the Euro is &ldquo;&eur;&rdquo;.

<!-- Recommended -->
The currency symbol for the Euro is “€”.
```

#### Optional Tags<a name="optional-tags"></a>

Omit optional tags **(optional)**

```
For file size optimization and scannability purposes, consider omitting optional tags
```
**The HTML5 specification defines what tags can be omitted**
```
This approach may require a grace period to be established as a wider guideline 
as it’s significantly different from what web developers are typically taught. For 
consistency and simplicity reasons it’s best served omitting all optional tags, 
not just a selection
```
```html
<!-- Not recommended -->
<!DOCTYPE html>
<html>
  <head>
    <title>Spending money, spending bytes</title>
  </head>
  <body>
    <p>Sic.</p>
  </body>
</html>

<!-- Recommended -->
<!DOCTYPE html>
<title>Saving money, saving bytes</title>
<p>Qed.
```

#### General Formatting<a name="general-formatting"></a>

Use a **new line** for every **block, list, or table element**, and **indent** every such **child element**

```html
<blockquote>
  <p><em>Space</em>, the final frontier.</p>
</blockquote>

<ul>
  <li>Moe
  <li>Larry
  <li>Curly
</ul>

<table>
  <thead>
    <tr>
      <th scope="col">Income
      <th scope="col">Taxes
  <tbody>
    <tr>
      <td>$ 5.00
      <td>$ 4.50
</table>
```

#### HTML Quotation Marks<a name="html-quotation"></a>

**When quoting attributes values, use double quotation marks**
```html
<!-- Not recommended -->
<a class='maia-button maia-button-secondary'>Sign in</a>

<!-- Recommended -->
<a class="maia-button maia-button-secondary">Sign in</a>
```

---
### CSS<a name="css"></a>

`TODO`

