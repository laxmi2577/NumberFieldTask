        document.getElementById('numberInput').addEventListener('input', function() {
            const value = +this.value;
        
            if (!value && value !== 0) {
                document.getElementById('message').textContent = '';
                return;
            }
        
            const isNegative = value < 0;
            const isEven = value % 2 === 0;
        
            document.getElementById('message').textContent = isNegative
                ? 'Enter a positive value'
                : `Next 3 ${isEven ? 'even' : 'odd'} numbers: ${value + 2}, ${value + 4}, ${value + 6}`;
        });
        