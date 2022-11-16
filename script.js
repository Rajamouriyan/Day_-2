Write a blog on difference between document & window objects

Document:

1. Document object is a web page that loaded in the browser
2. It appears inside the window
3. It is the obejct of a window property
4. Tags and elements with attributes in HTML are part of it
5. Document is part of BOM (browser object model) and DOM (Document object model)
6. Syntax:
        document.propertyname;
7. For example,
        document.URL will returns the complete URL of the document

Window:

1. Window represents the a entire browser window (webpage)
2. It is the object loaded in the browser
3. It is the object of the browser
4. Global objects, functions and variables are memebers of the window object
5. Window is part of BOM (browser object model), not a part of DOM
6. Syntax:
        window.propertyname;
7. For example,
        window.length will represents the number of frames in the current window


Structure:
Window ----> DOM
                -Document
       ----> BOM
                -Navigator
                -Screen
                -Location
                -Frames
                -History
                -XMLHttpRequest