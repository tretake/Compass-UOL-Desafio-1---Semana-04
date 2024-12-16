let buttonAdd = document.getElementById("addCard");
let todoCol = document.getElementById("todo-col");

const container = document.querySelector(".kanban"); 



buttonAdd.addEventListener("click" , function() {
    
    

})



container.addEventListener("click", function (event) {
    if (event.target.classList.contains("close-icon")) { 
        event.target.parentElement.parentElement.remove(); 
    }else if(event.target.classList.contains("card"))
    {
        const divParaMover = event.target;
        let destino = "";
        console.log(event.target.parentElement.id);

        switch (event.target.parentElement.id)
        {    
            case "todo-col":
                destino = document.getElementById("inProgress-col");
            break;
            case "inProgress-col":
                destino = document.getElementById("complete-col");
            break;
            default:
                destino = document.getElementById("todo-col");
        }
        destino.appendChild(event.target);
        }
});



const abrirModal = document.getElementById("addCard");
const modal = document.getElementById("modal");
const fecharModal = document.getElementById("fecharModal");

abrirModal.addEventListener("click", function() {
  modal.style.display = "flex"; 
});

fecharModal.addEventListener("click", function() {
  modal.style.display = "none";  
});

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


formTarefa.addEventListener("submit", function (event) {
    event.preventDefault(); 
  
    const prioridade = document.getElementById("prioridade").value;
    const tarefa = document.getElementById("tarefa").value;
    const participantes = Array.from(
      document.getElementById("participantes").selectedOptions
    ).map((opt) => opt.value);
  
    
    




    const card = document.createElement('div');
    card.className = 'card';

    //Header
    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';

    const priority = document.createElement('div');
    priority.className = 'priority';

    const status = document.createElement('div');
    status.className = `status ${prioridade.toLowerCase()}`;
    status.textContent = prioridade;

    priority.appendChild(status); 
    cardHeader.appendChild(priority); 

    const date = document.createElement('div');
    date.className = 'date';
    date.textContent = 'Oct 06,24';

    cardHeader.appendChild(date);
    card.appendChild(cardHeader); 

    //content
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    cardContent.textContent = tarefa;

    card.appendChild(cardContent); 

    //footer
    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer';
    
    const closeIcon = document.createElement('img');
    closeIcon.className = 'close-icon';
    closeIcon.src = 'assets/images/icons/X.png';
    closeIcon.alt = '';
    
    cardFooter.appendChild(closeIcon);
    
    
    const users = document.createElement('div');
    users.className = 'users';
    

    participantes.forEach(participante => 
    {
        const [inictial,color] = participante.split(",");

        const user = document.createElement('div');
        user.className = 'user';
        user.style.backgroundColor = color;
        const initials = document.createElement('span');
        initials.className = 'initials';
        initials.textContent = inictial;
        user.appendChild(initials); 
        users.appendChild(user); 
    }
    )


    cardFooter.appendChild(users);
    
    card.appendChild(cardFooter); 

    todoCol.appendChild(card); buttonX = document.querySelectorAll(".close-icon");










  
    modal.style.display = "none";
  });