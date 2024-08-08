// // animation.js

// function animateTo(element, properties, duration = 1000) {
//     const start = {};
//     const end = {};
//     const startTime = performance.now();

//     // Get the starting and ending values
//     for (let prop in properties) {
//         start[prop] = parseFloat(getComputedStyle(element)[prop]);
//         end[prop] = properties[prop];
//     }

//     function update() {
//         const currentTime = performance.now();
//         const timeFraction = Math.min((currentTime - startTime) / duration, 1);

//         for (let prop in properties) {
//             const startValue = start[prop];
//             const endValue = end[prop];
//             const currentValue = startValue + (endValue - startValue) * timeFraction;
//             element.style[prop] = currentValue + (prop === "opacity" ? "" : "px");
//         }

//         if (timeFraction < 1) {
//             requestAnimationFrame(update);
//         }
//     }

//     requestAnimationFrame(update);
// }

// function animateFrom(element, properties, duration = 1000) {
//     const start = {};
//     const end = {};
//     const startTime = performance.now();

//     // Get the starting and ending values
//     for (let prop in properties) {
//         start[prop] = properties[prop];
//         end[prop] = parseFloat(getComputedStyle(element)[prop]);
//     }

//     // Apply the start values immediately
//     for (let prop in start) {
//         element.style[prop] = start[prop] + (prop === "opacity" ? "" : "px");
//     }

//     function update() {
//         const currentTime = performance.now();
//         const timeFraction = Math.min((currentTime - startTime) / duration, 1);

//         for (let prop in properties) {
//             const startValue = start[prop];
//             const endValue = end[prop];
//             const currentValue = startValue + (endValue - startValue) * timeFraction;
//             element.style[prop] = currentValue + (prop === "opacity" ? "" : "px");
//         }

//         if (timeFraction < 1) {
//             requestAnimationFrame(update);
//         }
//     }

//     requestAnimationFrame(update);
// }


// animation.js

// function animateTo(element, properties) {
//     const start = {};
//     const end = {};
//     const duration = properties.duration || 1000;
//     const delay = properties.delay || 0;
//     const startTime = performance.now() + delay;

//     // Get the starting and ending values for the CSS properties
//     for (let prop in properties) {
//         if (prop !== "duration" && prop !== "delay") {
//             start[prop] = parseFloat(getComputedStyle(element)[prop]);
//             end[prop] = properties[prop];
//         }
//     }

//     function update() {
//         const currentTime = performance.now();
//         if (currentTime < startTime) {
//             requestAnimationFrame(update);
//             return;
//         }

//         const timeFraction = Math.min((currentTime - startTime) / duration, 1);

//         for (let prop in start) {
//             const startValue = start[prop];
//             const endValue = end[prop];
//             const currentValue = startValue + (endValue - startValue) * timeFraction;
//             element.style[prop] = currentValue + (prop === "opacity" ? "" : "px");
//         }

//         if (timeFraction < 1) {
//             requestAnimationFrame(update);
//         }
//     }

//     requestAnimationFrame(update);
// }

// function animateFrom(element, properties) {
//     const start = {};
//     const end = {};
//     const duration = properties.duration || 1000;
//     const delay = properties.delay || 0;
//     const startTime = performance.now() + delay;

//     // Get the starting and ending values for the CSS properties
//     for (let prop in properties) {
//         if (prop !== "duration" && prop !== "delay") {
//             start[prop] = properties[prop];
//             end[prop] = parseFloat(getComputedStyle(element)[prop]);
//         }
//     }

//     // Apply the start values immediately
//     for (let prop in start) {
//         element.style[prop] = start[prop] + (prop === "opacity" ? "" : "px");
//     }

//     function update() {
//         const currentTime = performance.now();
//         if (currentTime < startTime) {
//             requestAnimationFrame(update);
//             return;
//         }

//         const timeFraction = Math.min((currentTime - startTime) / duration, 1);

//         for (let prop in start) {
//             const startValue = start[prop];
//             const endValue = end[prop];
//             const currentValue = startValue + (endValue - startValue) * timeFraction;
//             element.style[prop] = currentValue + (prop === "opacity" ? "" : "px");
//         }

//         if (timeFraction < 1) {
//             requestAnimationFrame(update);
//         }
//     }

//     requestAnimationFrame(update);
// }

// animation.js

// class Animate {
//     constructor(element) {
//         this.element = element;
//     }

//     to(properties) {
//         this.animate(properties, 'to');
//     }

//     from(properties) {
//         this.animate(properties, 'from');
//     }

//     animate(properties, type) {
//         const aliases = {
//             h: 'height',
//             w: 'width',
//             t: 'top',
//             l: 'left',
//             b: 'bottom',
//             r: 'right',
//             o: 'opacity',
//             d: 'duration',
//             dl: 'delay',
//         };

//         const start = {};
//         const end = {};
//         const duration = properties.d || 1000;
//         const delay = properties.dl || 0;
//         const startTime = performance.now() + delay;

//         // Translate aliases to real CSS properties
//         for (let alias in properties) {
//             const prop = aliases[alias] || alias;
//             if (alias !== 'd' && alias !== 'dl') {
//                 if (type === 'to') {
//                     start[prop] = parseFloat(getComputedStyle(this.element)[prop]);
//                     end[prop] = properties[alias];
//                 } else if (type === 'from') {
//                     start[prop] = properties[alias];
//                     end[prop] = parseFloat(getComputedStyle(this.element)[prop]);
//                     this.element.style[prop] = start[prop] + (prop === "opacity" ? "" : "px");
//                 }
//             }
//         }

//         const update = () => {
//             const currentTime = performance.now();
//             if (currentTime < startTime) {
//                 requestAnimationFrame(update);
//                 return;
//             }

//             const timeFraction = Math.min((currentTime - startTime) / duration, 1);

//             for (let prop in start) {
//                 const startValue = start[prop];
//                 const endValue = end[prop];
//                 const currentValue = startValue + (endValue - startValue) * timeFraction;
//                 this.element.style[prop] = currentValue + (prop === "opacity" ? "" : "px");
//             }

//             if (timeFraction < 1) {
//                 requestAnimationFrame(update);
//             }
//         };

//         requestAnimationFrame(update);
//     }
// }

// animation.js

// const animation = {
//     aliases: {
//         h: 'height',
//         w: 'width',
//         t: 'top',
//         l: 'left',
//         b: 'bottom',
//         r: 'right',
//         o: 'opacity',
//         d: 'duration',
//         dl: 'delay',
//     },

//     from(element, properties) {
//         this.animate(element, properties, 'from');
//     },

//     to(element, properties) {
//         this.animate(element, properties, 'to');
//     },

//     animate(element, properties, type) {
//         const start = {};
//         const end = {};
//         const duration = properties.d || 1000;
//         const delay = properties.dl || 0;
//         const startTime = performance.now() + delay;

//         // Translate aliases to real CSS properties
//         for (let alias in properties) {
//             const prop = this.aliases[alias] || alias;
//             if (alias !== 'd' && alias !== 'dl') {
//                 if (type === 'to') {
//                     start[prop] = parseFloat(getComputedStyle(element)[prop]);
//                     end[prop] = properties[alias];
//                 } else if (type === 'from') {
//                     start[prop] = properties[alias];
//                     end[prop] = parseFloat(getComputedStyle(element)[prop]);
//                     element.style[prop] = start[prop] + (prop === "opacity" ? "" : "px");
//                 }
//             }
//         }

//         const update = () => {
//             const currentTime = performance.now();
//             if (currentTime < startTime) {
//                 requestAnimationFrame(update);
//                 return;
//             }

//             const timeFraction = Math.min((currentTime - startTime) / duration, 1);

//             for (let prop in start) {
//                 const startValue = start[prop];
//                 const endValue = end[prop];
//                 const currentValue = startValue + (endValue - startValue) * timeFraction;
//                 element.style[prop] = currentValue + (prop === "opacity" ? "" : "px");
//             }

//             if (timeFraction < 1) {
//                 requestAnimationFrame(update);
//             }
//         };

//         requestAnimationFrame(update);
//     }
// };


// animation.js

const animation = {
    aliases: {
        h: 'height',
        w: 'width',
        t: 'top',
        l: 'left',
        b: 'bottom',
        r: 'right',
        o: 'opacity',
        d: 'duration',
        dl: 'delay',
        s: 'scale',
        ease: 'animationTimingFunction',
        ad: 'animationDirection',
    },

    from(element, properties) {
        this.animate(element, properties, 'from');
    },

    to(element, properties) {
        this.animate(element, properties, 'to');
    },

    animate(element, properties, type) {
        const start = {};
        const end = {};
        const duration = properties.d || 1000;
        const delay = properties.dl || 0;
        const ease = properties.ease || 'linear';
        const direction = properties.ad || 'normal';
        const startTime = performance.now() + delay;

        // Translate aliases to real CSS properties
        for (let alias in properties) {
            const prop = this.aliases[alias] || alias;
            if (alias !== 'd' && alias !== 'dl' && alias !== 'ease' && alias !== 'ad') {
                if (type === 'to') {
                    start[prop] = parseFloat(getComputedStyle(element)[prop]);
                    end[prop] = properties[alias];
                } else if (type === 'from') {
                    start[prop] = properties[alias];
                    end[prop] = parseFloat(getComputedStyle(element)[prop]);
                    element.style[prop] = start[prop] + (prop === "opacity" || prop === "scale" ? "" : "px");
                }
            }
        }

        const update = () => {
            const currentTime = performance.now();
            if (currentTime < startTime) {
                requestAnimationFrame(update);
                return;
            }

            const timeFraction = Math.min((currentTime - startTime) / duration, 1);
            const timingFunction = this.getTimingFunction(ease, timeFraction);

            for (let prop in start) {
                const startValue = start[prop];
                const endValue = end[prop];
                const currentValue = startValue + (endValue - startValue) * timingFunction;
                
                if (prop === 'scale') {
                    element.style.transform = `scale(${currentValue})`;
                } else {
                    element.style[prop] = currentValue + (prop === "opacity" || prop === "scale" ? "" : "px");
                }
            }

            if (timeFraction < 1) {
                requestAnimationFrame(update);
            }
        };

        requestAnimationFrame(update);
    },

    getTimingFunction(ease, timeFraction) {
        switch (ease) {
            case 'linear':
                return timeFraction;
            case 'ease-in':
                return timeFraction * timeFraction;
            case 'ease-out':
                return timeFraction * (2 - timeFraction);
            case 'ease-in-out':
                return timeFraction < 0.5
                    ? 2 * timeFraction * timeFraction
                    : -1 + (4 - 2 * timeFraction) * timeFraction;
            default:
                return timeFraction;
        }
    },
};
