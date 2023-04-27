

        new Splide(".carrossel", {
          type: "slide",
          rewind: true,
          perPage: 1,
          gap: "1rem",
        }).mount();
  

		
        let openModalButtons = document.querySelectorAll('.open-modal');

        openModalButtons.forEach(function(button) {
          button.addEventListener('click', function() {
            let modal = document.querySelector(button.dataset.modal);
            modal.style.display = 'block';
            let closeModalButton = modal.querySelector('.close-modal');
            closeModalButton.addEventListener('click', function() {
              modal.style.display = 'none';
            });
        
            // Fecha o modal quando o usuário clica fora dele
            window.addEventListener('click', function(event) {
              if (event.target == modal) {
                modal.style.display = 'none';
              }
            });
          });
        });
    
    