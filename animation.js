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
        p: 'position',
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
        const position = properties.p || 'relative'; // Default position is 'relative'
        const startTime = performance.now() + delay;

        // Set default position
        element.style.position = position;

        // Translate aliases to real CSS properties
        for (let alias in properties) {
            const prop = this.aliases[alias] || alias;
            if (alias !== 'd' && alias !== 'dl' && alias !== 'ease' && alias !== 'ad' && alias !== 'p') {
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
