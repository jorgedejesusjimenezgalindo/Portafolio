// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // --- Funcionalidad del Menú de Navegación Móvil (Hamburguesa) ---
    const mobileMenuButton = document.querySelector('header button'); // Selecciona el botón del menú hamburguesa
    const navLinksContainer = document.querySelector('header ul'); // Selecciona el contenedor de los enlaces de navegación

    // Verifica si ambos elementos existen antes de añadir el event listener
    if (mobileMenuButton && navLinksContainer) {
        mobileMenuButton.addEventListener('click', () => {
            // Alterna la clase 'hidden' para mostrar u ocultar el menú de navegación
            // Esto lo hace visible/invisible en pantallas pequeñas, ya que Tailwind lo oculta por defecto en md:
            navLinksContainer.classList.toggle('hidden');
            navLinksContainer.classList.toggle('flex'); // Para asegurar que se muestre como flexbox cuando esté visible
            navLinksContainer.classList.toggle('flex-col'); // Para apilar los elementos verticalmente en móvil
            navLinksContainer.classList.toggle('absolute'); // Posicionamiento absoluto
            navLinksContainer.classList.toggle('top-16'); // Debajo del header
            navLinksContainer.classList.toggle('left-0'); // Alineado a la izquierda
            navLinksContainer.classList.toggle('w-full'); // Ocupa todo el ancho
            navLinksContainer.classList.toggle('bg-white'); // Fondo blanco
            navLinksContainer.classList.toggle('shadow-md'); // Sombra
            navLinksContainer.classList.toggle('py-4'); // Padding vertical
            navLinksContainer.classList.toggle('space-y-4'); // Espacio entre elementos
            navLinksContainer.classList.toggle('items-center'); // Centra los elementos
        });

        // Cierra el menú móvil cuando se hace clic en un enlace (para mejorar la UX)
        navLinksContainer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (!navLinksContainer.classList.contains('hidden')) {
                    navLinksContainer.classList.add('hidden');
                    // Remueve las clases añadidas para mostrarlo
                    navLinksContainer.classList.remove('flex', 'flex-col', 'absolute', 'top-16', 'left-0', 'w-full', 'bg-white', 'shadow-md', 'py-4', 'space-y-4', 'items-center');
                }
            });
        });
    }

    // --- Funcionalidad de Desplazamiento Suave (Smooth Scrolling) ---
    // Selecciona todos los enlaces de navegación que apuntan a una sección de la página
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Previene el comportamiento de salto por defecto del enlace

            const targetId = this.getAttribute('href'); // Obtiene el ID del destino (ej. '#about')
            const targetElement = document.querySelector(targetId); // Selecciona el elemento destino

            if (targetElement) {
                // Desplaza la vista al elemento destino de forma suave
                window.scrollTo({
                    top: targetElement.offsetTop - (document.querySelector('header').offsetHeight), // Ajusta para el tamaño del header fijo
                    behavior: 'smooth' // Habilita el desplazamiento suave
                });
            }
        });
    });

    // --- Opcional: Manejo básico del formulario de contacto (solo frontend) ---
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Previene el envío por defecto del formulario

            // Aquí podrías añadir lógica para:
            // 1. Validar los campos del formulario.
            // 2. Mostrar un mensaje de "enviando..." al usuario.
            // 3. Enviar los datos del formulario a un servicio de backend (ej. Fetch API a un endpoint).
            //    Para este ejemplo, solo mostraremos un mensaje de éxito simulado.

            alert('¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.'); // Usar modal personalizado en un entorno real
            this.reset(); // Limpia el formulario después del "envío"
        });
    }

});// JavaScript Document
