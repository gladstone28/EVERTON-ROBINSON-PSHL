// script.js
document.addEventListener('DOMContentLoaded', function() {
    const jobs = [{
            client: "Client 1",
            date: "2024-03-01",
            image: "furniture-1.webp",
            description: "This living room set was delivered to Mary campbell on 01 March 2024. More Job overview for Client 1..."
        },
        {
            client: "Client 2",
            date: "2024-03-02",
            image: "furniture-2.webp",
            description: "This Bedroom set was deliverd to John Brown on 02 March 2024. More Job overview for Client 2..."
        },
        {
            client: "Client 3",
            date: "2024-03-03",
            image: "furniture-3.webp",
            description: "This Kitchen set was delivered to Gladstone Green on 03 March 2024. More Job overview for Client 3..."
        },
        {
            client: "Client 4",
            date: "2024-03-04",
            image: "furniture-4.webp",
            description: "This Patio Set was delivered to Howard Palmer omm 04 March 2024. More Job overview for Client 4..."
        },
        {
            client: "Client 5",
            date: "2024-03-05",
            image: "furniture-5.webp",
            description: "This Dining Room set was delivered to Millicent Brown on 05 March 2024. More Job overview for Client 5..."
        },
        // Add more jobs as needed
    ];

    const container = document.getElementById('job-container');

    jobs.forEach(job => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${job.image}" alt="Job Image">
            <div class="card-content">
                <h3>${job.client} - ${job.date}</h3>
                <p>${job.description}</p>
            </div>
        `;
        container.appendChild(card);
    });
});