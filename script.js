// script.js
document.addEventListener('DOMContentLoaded', function() {
    const promotions = [{
            day: "Day 1",
            image: "PROFESSIONAL-SERVICES-HUB-FRONT.jpeg",
            text: "Full payment Warranty Plan..."

        },
        {
            day: "Day 2",
            image: "PROFESSIONAL-SERVICES-HUB-BACK.jpeg",
            text: "Downpayment Plan Offer..."
        },
        // Add more promotions as needed
    ];

    const container = document.getElementById('promotion-container');

    promotions.forEach(promotion => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${promotion.image}" alt="Promotion Image">
            <div class="card-content">
                <h3>${promotion.day}</h3>
                <p>${promotion.text}</p>
            </div>
        `;
        container.appendChild(card);
    });
});