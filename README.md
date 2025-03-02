<div align="center">
<h1>Responsive Product Component</h1>

<img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="vite" />
    <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="javascript" />
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwindcss" />
</div>

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### Screenshot

![Preview](./src/assets/design/desktop-preview.jpg)

### Links

- Live Site URL: [Netlify Website](https://celebrated-sprite-781c92.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript for Responsive Styling
- [Vite.js](https://vite.dev/) - JS/React library
- [Styled Components with TaiwlindCSS](https://tailwindcss.com/) - For styling

### What I learned

I have learned how to set up the new TailwindCSS version 4 with the vite.js framkework. Important is to use the correct import for the specific google fonts styling.
To change the pictures from specific size i have used the useState functionality to from Desktop to Mobile with following setup:

```js
const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

useEffect(() => {
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  // Add event listener
  window.addEventListener('resize', handleResize);

  // Clean up
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
```

The instrcution how to import custom fonts is under the following link:

- [TailwindCSS font-family import](https://tailwindcss.com/docs/font-family)

### Useful resources

- [TailwindCSS Styling](https://tailwindcss.com/) - The documentation for how to use TailwindCSS is amazing. It really guides you through all the individual parts as well as the custom setup what I needed the project.

## Author

- GitHub - [mirkozlatunic](https://github.com/mirkozlatunic)
- Frontend Mentor - [@mirkozlatunic](https://www.frontendmentor.io/profile/mirkozlatunic)
