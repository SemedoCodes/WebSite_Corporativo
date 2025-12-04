document.addEventListener("DOMContentLoaded", () =>{

    document.querySelectorAll("[include.html]").forEach(async (el) => {
        const file = el.getAttribute ("include-html");

        try{
            const response = await fetch(file);
            const content = await response.text();
            el.innerHTML = content;
        } catch(e){
            el.innerHTML = `< p style="color: red"> Erro ao carregar ${file}</p>`;
            console.error(e);
        }
        el.removeAttribute("include-html");
    });

});