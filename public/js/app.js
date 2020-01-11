$button = document.querySelector('#button1')
$input = document.querySelector('#input1')
$form = document.querySelector('#form1')
$display = document.querySelector('#display-Content')
$display2 = document.querySelector('#display-Content-Error')
$display3 = document.querySelector('#display-Content3')
$display4 = document.querySelector('#display-Content4')



$form.addEventListener('submit', (e) => {

    e.preventDefault()

    $display.textContent = "Searching"
    $display2.textContent = ""
    $display3.textContent = ""
    $display4.textContent = ""

    fetch('/calories?foodName=' + $input.value).then((response) => {

        response.json().then((data) => {

            if (data.error) {
                $display.textContent = data.error
            }
            else {
                $display.classList.add('list-item')
                $display2.classList.add('list-item')
                $display3.classList.add('list-item')
                $display4.classList.add('list-item')
                
                $display.textContent = data.Calories
                $display2.textContent = data.Weight
                $display3.textContent = data.Protein
                $display4.textContent = data.Fat
            }
        })
    })
})

