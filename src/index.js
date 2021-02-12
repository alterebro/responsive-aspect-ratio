const aspectRatio = (() => {

    let uid = 'aspect-ratio';
    let els = Array.from(document.querySelectorAll("[data-aspect-ratio]"));
        els.forEach(el => {

            let _ratio = el.dataset.aspectRatio.split(':');

                el.classList.add(`${uid}-el`);
                el.style.display = window.getComputedStyle(el).getPropertyValue('display').includes('inline') ? 'block' : null;
                el.style.padding = `0 0 calc(100% / (${_ratio[0]} / ${_ratio[1]}))`;
        });

    if (els.length && document.querySelector(`style#${uid}-css`) === null) {

        let ruleset = `.${uid}-el { position: relative } `;
            ruleset += `.${uid}-el > * { position: absolute; top: 0; width: 100%; height: 100%; object-fit: cover; object-position: center } `;

        let css = document.createElement('style');
            css.id = `${uid}-css`;
            css.type = 'text/css';
            css.appendChild(document.createTextNode(ruleset));
            document.head.appendChild(css);
    }

})();
