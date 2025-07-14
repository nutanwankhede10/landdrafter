    window.addEventListener('scroll', function () {
        // Set the target numbers
        var targetNumbers = [70, 150, 42, 150];

        // Get all elements with the class "num"
        var numElements = document.querySelectorAll('.num');

        // Check if the element is in the viewport
        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Update the numbers if the element is in the viewport
        numElements.forEach(function (element, index) {
            if (isElementInViewport(element) && element.innerHTML === '+0') {
                // Update the innerHTML of the element with a smooth animation
                var currentNumber = 0;
                var interval = setInterval(function () {
                    currentNumber += Math.ceil(targetNumbers[index] / 100);
                    element.innerHTML = '+' + currentNumber;
                    if (currentNumber >= targetNumbers[index]) {
                        clearInterval(interval);
                        element.innerHTML = '+' + targetNumbers[index];
                    }
                }, 10);
            }
        });
    });
