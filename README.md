# animation

CDN Link
```html
<script src="https://cdn.jsdelivr.net/gh/iamtidu/animation@main/animation.js"></script>
```

html file

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Animation</title>
    <style>
        
        .box {
            position: relative;
            width: 100px;
            height: 100px;
            background-color: red;
        }
    </style>
</head>
<body>
    <h1 class="box"></h1>
    <script src="https://cdn.jsdelivr.net/gh/iamtidu/animation@main/animation.js"></script>
    // your js file
    <script src="main.js"></script>
</body>
</html>
```

js file
```javascript
// Select the element you want to animate
const box = document.querySelector('.box');

//Apply the 'from' animation with scale, ease, and animation direction
animation.from(box, { l: -50, o: 0, s: 0.5, d: 500, dl: 500, ease: 'ease-in', ad: 'reverse' });

//Apply the 'to' animation after 2 seconds
setTimeout(() => {
    animation.from(box, { b: -10, o: 0, d: 500, dl: 500, ease: 'ease-in', ad: 'reverse' });
}, 2000);
```
