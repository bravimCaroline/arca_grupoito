const pageButtons=document.querySelectorAll(".page-btn");
let currentPage=0;

pageButtons.forEach((button,index)=>{

    button.addEventListener("click",()=>{

        document
            .querySelector(".page-btn.active")
            ?.classList.remove("active");

        button.classList.add("active");

        currentPage=index;

    });

});

document
    .getElementById("prev-page")
    ?.addEventListener("click",()=>{

        if(currentPage>0){

            pageButtons[currentPage].classList.remove("active");

            currentPage--;

            pageButtons[currentPage].classList.add("active");

        }

    });

document
    .getElementById("next-page")
    ?.addEventListener("click",()=>{

        if(currentPage<pageButtons.length-1){

            pageButtons[currentPage].classList.remove("active");

            currentPage++;

            pageButtons[currentPage].classList.add("active");

        }

    });

const chips=document.querySelectorAll(".filter-chip");
const cards=document.querySelectorAll(".animals-grid > .animal-card");
const search=document.getElementById("search");

const filters={
    species:"all",
    size:"all"
};

chips.forEach(chip=>{

    chip.addEventListener("click",()=>{

        const filter=chip.dataset.filter;
        const value=chip.dataset.value;

        document
            .querySelectorAll(`.filter-chip[data-filter="${filter}"]`)
            .forEach(btn=>btn.classList.remove("active"));

        chip.classList.add("active");

        filters[filter]=value;

        applyFilters();

    });

});

search?.addEventListener("input",applyFilters);

function applyFilters(){

    const searchTerm=search.value.toLowerCase();

    cards.forEach(card=>{

        const speciesMatch=
            filters.species==="all"||
            card.dataset.species===filters.species;

        const sizeMatch=
            filters.size==="all"||
            card.dataset.size===filters.size;

        const name=
            card.querySelector("h3")
                .textContent
                .toLowerCase();

        const searchMatch=
            name.includes(searchTerm);

        card.style.display=
            speciesMatch &&
            sizeMatch &&
            searchMatch
                ? ""
                : "none";

    });

}

function abrirPopupAnimal(
    nome,
    idade,
    localizacao,
    descricao,
    imagem
){

    document.getElementById("popup-nome").textContent = nome;
    document.getElementById("popup-idade").textContent = idade;
    document.getElementById("popup-localizacao").textContent = localizacao;
    document.getElementById("popup-descricao").textContent = descricao;
    document.getElementById("popup-img").src = imagem;

    document
        .getElementById("popup-animal")
        .classList.add("active");

}

function fecharPopupAnimal(){

    document
        .getElementById("popup-animal")
        .classList.remove("active");

}

function enviarSolicitacao(){

    document
        .getElementById("popup-animal")
        .classList.remove("active");

    document
        .getElementById("popup-sucesso")
        .classList.add("active");

}

const popupSucesso=
    document.getElementById("popup-sucesso");

popupSucesso?.addEventListener("click",e=>{

    if(e.target===popupSucesso){

        popupSucesso.classList.remove("active");

    }

});