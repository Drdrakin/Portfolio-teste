const accs = document.querySelectorAll(".accordion");

accs.forEach(acc => 
    {
        acc.addEventListener("click", () => 
        {
            acc.classList.toggle("active")
        }                   )
    }       )



    

