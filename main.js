class MathCalculator {
  constructor(value,button) {
    this.value = value;
    this.button = button;
    this.init();
    this.decimalCount = 0;
    this.firstValue = 0;
    this.lastValue = 0;
    this.total = false;
    this.operator = "none";
  }

  init = () => {
    this.button.forEach(button => {
      button.addEventListener('click', (event) => {
        if(event.target.classList.contains('number'))
        {
          if(this.value.textContent == "0")
          {
            this.firstChange();
          }
          else if(this.operator !== "none")
          {
            this.firstChange();
          }
          else if(this.total === true)
          {
            this.firstChange();
          }
          else 
          {
            this.addNumber();
          }
        }
        else if(event.target.id === ".")
        {
          if(this.total === true)
          {
            this.firstChange();
          }
          else if(this.decimalCount == 0)
          {
            this.decimalCount++;
            this.addNumber();
          }
        }

        else if(event.target.id === "+")
        {
          this.operator = event.target.id;
          this.button.forEach(button => {
            button.classList.remove('active');
          })
          event.target.classList.toggle('active');
          this.firstValue = parseFloat(this.value.textContent);
          // this.value.textContent = "0";
        }

        else if(event.target.id === "-")
        {
          this.operator = event.target.id;
          this.button.forEach(button => {
            button.classList.remove('active');
          })
          event.target.classList.toggle('active');
          this.firstValue = parseFloat(this.value.textContent);
          // this.value.textContent = "0";
        }

        else if(event.target.id === "x")
        {
          this.operator = event.target.id;
          this.button.forEach(button => {
            button.classList.remove('active');
          })
          event.target.classList.toggle('active');
          this.firstValue = parseFloat(this.value.textContent);
          // this.value.textContent = "0";
        }

        else if(event.target.id === "÷")
        {
          this.operator = event.target.id;
          this.button.forEach(button => {
            button.classList.remove('active');
          })
          event.target.classList.toggle('active');
          this.firstValue = parseFloat(this.value.textContent);
          // this.value.textContent = "0";
        }

        else if(event.target.id === 'AC')
        {
          this.reset();
        }

        else if(event.target.id = '=')
        {
          this.result();
        }
      })
      
    });
  }

  firstChange = () => {
    if(event.target.id === ".")
    {
      this.value.textContent = "0" + event.target.id;
    }
    else
    {
    this.value.textContent = event.target.id;
    }
    this.total = false;
  }

  addNumber = () => {
    this.value.textContent = this.value.textContent + event.target.id;
  }

  reset = () => {
    this.operator = 'none';
    this.value.textContent = "0";
    this.decimalCount = 0;
    this.button.forEach(button => {
      button.classList.remove('active');
    })
  }

  result = () => {
    if(this.operator === '+')
    {
      this.lastValue = parseFloat(this.value.textContent);
      this.value.textContent = this.firstValue + this.lastValue;
      this.total = true;
      this.operator = "none";
      this.button.forEach(button => {
        button.classList.remove('active');
      })
    }

    if(this.operator === '-')
    {
      this.lastValue = parseFloat(this.value.textContent);
      this.value.textContent = this.firstValue - this.lastValue;
      this.total = true;
      this.operator = "none";
      this.button.forEach(button => {
        button.classList.remove('active');
      })
    }

    if(this.operator === 'x')
    {
      this.lastValue = parseFloat(this.value.textContent);
      this.value.textContent = this.firstValue * this.lastValue;
      this.total = true;
      this.operator = "none";
      this.button.forEach(button => {
        button.classList.remove('active');
      })
    }

    if(this.operator === '÷')
    {
      this.lastValue = parseFloat(this.value.textContent);
      this.value.textContent = this.firstValue / this.lastValue;
      this.total = true;
      this.operator = "none";
      this.button.forEach(button => {
        button.classList.remove('active');
      })
    }
  }

  
}

const action = new MathCalculator(document.querySelector('#value'), document.querySelectorAll('.button'));