function sliderMaxValuePlus() {
    function updateTooltipContent() {
        const sliderHandle = document.querySelector('.slider-handle.min-slider-handle');
        const element = document.querySelector('.value-slider');
        const toolTipValue = document.querySelector('.tooltip-inner');
        const toolTipContent = toolTipValue?.textContent;
        if (sliderHandle && toolTipValue && element) {
            const dataAttributeValue = element.getAttribute('data-plus-flag');

            if (dataAttributeValue !== null) {
                const valueMax = parseInt(sliderHandle.getAttribute('aria-valuemax'));
                const valueNow = parseInt(sliderHandle.getAttribute('aria-valuenow'));
                const currentValueText = sliderHandle.getAttribute('aria-valuetext');

                if (valueMax === valueNow) {
                    try {
                        if (toolTipContent.includes('+') === false) {
                            sliderHandle.setAttribute('aria-valuetext', toolTipValue.textContent);
                            toolTipValue.textContent = currentValueText.replace(/\+$/, '') + '+';
                        }
                    } catch (error) {
                        console.error('Error occurred while updating attributes:', error);
                    }
                    return;
                } else {
                    try {
                        if (toolTipContent.includes('+') === true) {
                            sliderHandle.setAttribute('aria-valuetext', currentValueText.replace(/\+$/, ''));
                            toolTipValue.textContent = currentValueText.replace(/\+$/, '');
                        }
                    } catch (error) {
                        console.error('Error occurred while updating attributes:', error);
                    }
                    return;
                }
                
            }
        }
    }

    const callback = (mutationsList) => {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                updateTooltipContent();
            }
        }
    }

    const observer = new MutationObserver(callback);
    observer.observe(document.body, { childList: true, subtree: true });
}

window.addEventListener('load', function () {
    sliderMaxValuePlus();
});
