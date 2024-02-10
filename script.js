// script.js
document.addEventListener('DOMContentLoaded', function() {
    const jobs = [{
            client: "Client 1",
            date: "2024-03-01",
            image: "PROFESSIONAL-SERVICES-HUB-FRONT.jpeg",
            description: "Job overview for Client 1..."
        },
        {
            client: "Client 2",
            date: "2024-03-02",
            image: "PROFESSIONAL-SERVICES-HUB-BACK.jpeg",
            description: "Job overview for Client 2..."
        },
        {
            client: "Client 3",
            date: "2024-03-03",
            image: "PROFESSIONAL-SERVICES-HUB-FRONT.jpeg",
            description: "Job overview for Client 3..."
        },
        {
            client: "Client 4",
            date: "2024-03-04",
            image: "PROFESSIONAL-SERVICES-HUB-FRONT.jpeg",
            description: "Job overview for Client 4..."
        },
        {
            client: "Client 5",
            date: "2024-03-05",
            image: "PROFESSIONAL-SERVICES-HUB-FRONT.jpeg",
            description: "Job overview for Client 5..."
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