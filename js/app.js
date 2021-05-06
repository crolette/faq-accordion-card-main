let faqs = document.querySelectorAll(".faq");
console.log(faqs);

function removeActive(lists){
    for (list  of lists) {
        list.classList.remove("active");
    }
}

for (const faq of faqs) {
    faq.addEventListener('click', function(faq) {
        if(this.classList.contains("active")){
            this.classList.remove("active");
        } else {
            removeActive(faqs)
            this.classList.add("active");
        }
    })
}