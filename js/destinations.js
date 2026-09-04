const filterButtons =
    document.querySelectorAll(".filter-btn");

const destinationCards =
    document.querySelectorAll(".destination-card");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Get selected category

        const filter =
            button.dataset.filter;


        // Remove active class

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        // Add active class

        button.classList.add("active");


        // Filter destination cards

        destinationCards.forEach(function (card) {

            const category =
                card.dataset.category;


            if (
                filter === "all" ||
                category === filter
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});