//JS Constructor Function
function Calculator() {
    this.display = document.querySelector('.display')

    this.addNumToDisplay = element => {
        this.display.value += element.innerText
        this.display.focus() // sends focus to display to allow result call by Enter key
    }
    
    this.backspace = () => this.display.value = this.display.value.slice(0, -1)
    this.clear = () => this.display.value = ''
    this.equals = () => {
        try {
            const operation = eval(this.display.value)
            if (!operation) {
                alert(`Please input the operation.`)
                return 
            }
            this.display.value = operation
        } catch(error) {
            alert(`${error}. Please try again.`)
            return 
        }
    };

    this.getClick = () => {
        document.addEventListener('click', event => {
            const element = event.target
            if (element.classList.contains('operation-value')) this.addNumToDisplay(element)
            if (element.classList.contains('backspace')) this.backspace(element)
            if (element.classList.contains('equals')) this.equals(element)
            if (element.classList.contains('clear')) this.clear()
        });
    }

    this.start = () => {
        this.getClick()
        this.getEnter()
    }

    this.getEnter = () => {
        document.addEventListener('keydown', e => {
            if (e.code !== 'Enter') return
            this.equals()
        })
    }
}

const calculator = new Calculator()
calculator.start()