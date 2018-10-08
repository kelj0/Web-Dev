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
-    [Margins, padding and borders](#Margins)
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
#### Colors<a name="Colors"></a>
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
#### Text<a name="Text"></a>
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

**Font size**
```css
h1{
    font-size: 100px;
}
```
**Font weight**
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

**Text decoration**
```css
h1{
    text-decoration: underline;
}
```
Most common are
* underline
* overline
* line-through

**Text transform**
```css
h1{
    text-transform: capitalize
}
```
Most common are
* capitalize (turns the first letter of every word into uppercase)
* uppercase (turns everything into uppercase)
* lowercase (turns everything into lowercase)

**Text spacing**
```css
h1{
    letter-spacing: 10px;
    word-spacing: 24px;
    line-height: 1.5;
    text-align: center;
}
```
Speaks for it self

#### Margins, padding and borders<a name="Margins"></a>
```css
h2{
    font-size: 32px;
    background-color: #ccc;
    margin: 20px;
    padding: 40px

}

```

---
