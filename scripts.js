// Translations object
        const translations = {
            en: {
                greeting: "Hello! I'm <span class='highlight' id='name'>Laís Schmidt,</span>",
                profession: "a backend developer and CTO of Starchest.",
                importantProjects: "Important Projects",
                projects: [
                    {
                        description: "This project offers a solution for remote work, integrating Data Loss Prevention (DLP) and an efficient backup system.",
                        features: [
                            "Password Security: Limitation on login attempts and passwords that change every two weeks.",
                            "Time Tracking: Recording of hours worked by users.",
                            "Data Protection: Use of SSL/TLS and digital signatures.",
                            "Data Management: Full control over access and manipulation of user data.",
                            "Technologies: Golang, Python, React/Angular, PostgreSQL, C++, Docker, AWS."
                        ],
                    },
                    {
                        description: "DataSage is a project aimed at revitalizing the old SSW, transforming it into a more modern and functional platform.",
                        features: [
                            "Updated Design: A cleaner and more intuitive interface.",
                            "Cleaner and more intuitive interface",
                            "Project Management: A tool for monitoring project progress.",
                            "Appointment Scheduler: A module for scheduling meetings.",
                            "Inventory Control: Management of available and sold items.",
                            "Technologies: MongoDB, Express.js, Node.js, React, Bootstrap."
                        ],
                    },
                    {
                        description: "This project offers a comprehensive solution for business management, focusing on data analysis and various functionalities that meet the needs of companies:",
                        features: [
                            "Data Management: Ability to read multiple types of documents.",
                            "Sales System: Various sales plan options for different needs.",
                            "Integrated Calendar: Scheduling meetings and order notifications.",
                            "Driver Tracking: Real-time location and tracking.",
                            "Inventory: Control of items for sale, sold items, and losses",
                            "Finance: Monitoring of invoices and company expenses.",
                           "Invoice Generation: Simplified issuance of fiscal documents.",
                            "Talent Pool: Management of candidates and talents.",
                            "Time Tracking: Recording of employees' worked hours."
                        ],
                    },
                ]
            },
            pt: {
                greeting: "Olá! Eu sou <span class='highlight' id='name'>Laís Schmidt,</span>",
                profession: "uma desenvolvedora backend e CTO da Starchest.",
                importantProjects: "Projetos Importantes",
                projects: [
                    {
                        description: "Este projeto oferece uma solução para trabalho remoto, integrando Prevenção de Perda de Dados (DLP) e um sistema de backup eficiente.",
                        features: [
                            "Segurança de Senha: Limitação de tentativas de login e senhas que mudam a cada duas semanas.",
                            "Registro de Horas: Registro das horas trabalhadas pelos usuários.",
                            "Proteção de Dados: Uso de SSL/TLS e assinaturas digitais.",
                            "Gerenciamento de Dados: Controle total sobre acesso e manipulação de dados do usuário.",
                            "Tecnologias: Golang, Python, React/Angular, PostgreSQL, C++, Docker, AWS."
                        ],
                    },
                    {
                        description: "DataSage é um projeto voltado para revitalizar o antigo SSW, transformando-o em uma plataforma mais moderna e funcional.",
                        features: [
                            "Design Atualizado: Uma interface mais limpa e intuitiva.",
                            "Gerenciamento de Projetos: Uma ferramenta para monitorar o progresso dos projetos.",
                            "Agendador de Compromissos: Um módulo para agendar reuniões.",
                            "Controle de Inventário: Gestão de itens disponíveis e vendidos.",
                            "Tecnologias: MongoDB, Express.js, Node.js, React, Bootstrap."
                        ],
                    },
                    {
                        description: "Este projeto oferece uma solução abrangente para gerenciamento empresarial, focando na análise de dados e várias funcionalidades que atendem às necessidades das empresas:",
                        features: [
                            "Gerenciamento de Dados: Capacidade de ler vários tipos de documentos.",
                            "Sistema de Vendas: Várias opções de planos de vendas para diferentes necessidades.",
                            "Calendário Integrado: Agendamento de reuniões e notificações de pedidos.",
                            "Rastreamento de Motoristas: Localização e rastreamento em tempo real.",
                            "Inventário: Controle de itens à venda, itens vendidos e perdas.",
                            "Finanças: Monitoramento de faturas e despesas da empresa.",
                            "Geração de Faturas: Emissão simplificada de documentos fiscais.",
                            "Banco de Talentos: Gerenciamento de candidatos e talentos.",
                            "Registro de Horas: Registro das horas trabalhadas pelos funcionários."
                        ],
                    },
                ]
            }
        };

        // Function to switch language
        function switchLanguage(language) {
    // Set the flag background on the dropdown based on the selected language
    const selectElement = document.getElementById('switchLanguage');
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    selectElement.setAttribute('data-selected-flag', selectedOption.getAttribute('data-flag'));

    // Your existing code for changing the content
    document.getElementById('greeting').innerHTML = translations[language].greeting;
    document.getElementById('profession').innerHTML = translations[language].profession;
    document.getElementById('importantProjects').innerHTML = translations[language].importantProjects;

    // Update project descriptions and features
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        const projectDetails = card.querySelector('.project-details');
        const project = translations[language].projects[index];

        projectDetails.querySelector('.project-description').innerHTML = project.description;

        const featureList = projectDetails.querySelector('.project-features ul');
        featureList.innerHTML = ''; // Clear existing features
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featureList.appendChild(li);
        });
    });
}

// Event listener for language switcher
document.getElementById('switchLanguage').addEventListener('change', function() {
    switchLanguage(this.value);
});

// Set the initial flag when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('switchLanguage');
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    selectElement.setAttribute('data-selected-flag', selectedOption.getAttribute('data-flag'));
});


        // Initialize the default language
        switchLanguage('en'); // or 'pt' for Portuguese




// Function to show the projects section
        function showProjects() {
            document.getElementById('homeSection').style.display = 'none'; // Hide the home section
            document.getElementById('projectsSection').style.display = 'block'; // Show the projects section

            // Mark the "Projects" tab as clicked
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => tab.classList.remove('active')); // Remove the 'active' class from all tabs
            document.getElementById('tab2').classList.add('active'); // Add the 'active' class to the "Projects" tab
        }

        // Function to show the home section
        function showHome() {
            document.getElementById('homeSection').style.display = 'flex'; // Show the home section
            document.getElementById('projectsSection').style.display = 'none'; // Hide the projects section

            // Remove the 'active' class from the "Projects" tab
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => tab.classList.remove('active'));
        }

        // Function to show the Starchest section (example)
        function showStarchest() {
            // Implement the logic to show the Starchest section here
            alert('Starchest section will be implemented!');
        }

        const toggleButton = document.getElementById('dark-mode-toggle');

        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            if (document.body.classList.contains('light-mode')) {
                toggleButton.innerHTML = '☀️'; 
            } else {
                toggleButton.innerHTML = '🌙'; 
            }
        });
