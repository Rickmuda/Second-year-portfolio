var projectsData = [
    { 
        project_id: 1,
        project_name: "SPIDERVERSE FORUM", 
        project_img: "../img/coding-projects/spiderverse-forum.png", 
        project_url: "../html/project-explanations/spiderverse-forum.html",
        languages: ["php", "css"] 
    },
    { 
        project_id: 2,
        project_name: "ANNOYING WEBPAGE", 
        project_img: "../img/coding-projects/irritante-webpagina.png", 
        project_url: "../html/project-explanations/irritante-webpagina.html",
        languages: ["css", "js", "html"] 
    },
    {
        project_id: 3,
        project_name: "WHACK A MOM", 
        project_img: "../img/coding-projects/whack-a-mom.png", 
        project_url: "../html/project-explanations/whack-a-mom.html",
        languages: ["js", "css", "html"] 
    },
    { 
        project_id: 4,
        project_name: "ONE PAGER", 
        project_img: "../img/coding-projects/one-pager.png", 
        project_url: "../html/project-explanations/one-pager.html",
        languages: ["html", "css"] 
    },
    { 
        project_id: 5,
        project_name: "UNDERTALE SUDOKU", 
        project_img: "../img/coding-projects/undertale-sudoku.png", 
        project_url: "../html/project-explanations/undertale-sudoku.html",
        languages: ["js", "css", "html"] 
    },
    {
        project_id: 6,
        project_name: "GYM CHECKLIST", 
        project_img: "../img/coding-projects/gym-list.png", 
        project_url: "../html/project-explanations/gym-list.html",
        languages: ["html", "css", "js"] 
    },
    { 
        project_id: 7,
        project_name: "WEATHER APP", 
        project_img: "../img/coding-projects/unnamed-weather-app.png", 
        project_url: "../html/project-explanations/unnamed-weather-app.html",
        languages: ["react", "css", "js"] 
    },
    { 
        project_id: 8,
        project_name: "LONG VIDEO THEATER", 
        project_img: "../img/coding-projects/missing-picture.jpg", 
        project_url: "../html/error.html",
        languages: ["react", "css", "js"] 
    },

    {
        project_id: 9,
        project_name: "TO DO LIST", 
        project_img: "../img/coding-projects/missing-picture.jpg", 
        project_url: "../html/error.html",	
        languages: ["js", "css", "html"] 
    },
];

function generateProjectColumns() {
    var projectsRow = document.getElementById('projects-row');
    projectsRow.innerHTML = ''; // Clear existing projects

    var filteredProjects = projectsData.filter(project => {
        // Filter projects based on selected languages
        var selectedLanguages = [];
        document.querySelectorAll('.filter-checkbox:checked').forEach(function(checked) {
            selectedLanguages.push(checked.value);
        });
        return selectedLanguages.length === 0 || project.languages.some(lang => selectedLanguages.includes(lang));
    });

    var projectsInRow = 3; // Define the number of projects in each row
    var numRows = Math.ceil(filteredProjects.length / projectsInRow); // Calculate the number of rows needed

    for (var i = 0; i < numRows; i++) {
        var row = document.createElement('div');
        row.className = 'row'; // Create a new row for each iteration

        for (var j = 0; j < projectsInRow; j++) {
            var index = i * projectsInRow + j;
            if (index < filteredProjects.length) {
                var project = filteredProjects[index];
        
                var projectColumn = document.createElement('div');
                projectColumn.className = 'column';
                projectColumn.dataset.languages = project.languages.join(','); // Store project languages as data attribute
        
                var projectName = document.createElement('h4');
                projectName.textContent = project.project_name;
        
                var projectImage = document.createElement('img');
                projectImage.src = project.project_img;
                projectImage.alt = project.project_name;
                projectImage.style.width = '80%'; // Ensure images fill their parent container
        
                // Use a closure to capture the current value of project
                (function(project) {
                    projectImage.onclick = function() {
                        window.location.href = project.project_url;
                    };
                })(project);
        
                projectColumn.appendChild(projectName); // Append project name
                projectColumn.appendChild(projectImage); // Append project image
                row.appendChild(projectColumn);
            }
        }
        projectsRow.appendChild(row); // Append the row to the projects container
    }
}

// Call the function to generate project columns
generateProjectColumns();

// Function to update project visibility based on selected languages
function updateProjectVisibility() {
    var selectedLanguages = [];
    document.querySelectorAll('.filter-checkbox:checked').forEach(function(checked) {
        selectedLanguages.push(checked.value);
    });

    var projects = document.querySelectorAll('.column');
    var visibleProjects = 0; // Counter for visible projects
    var currentRow = null; // Variable to hold the current row

    projects.forEach(function(project) {
        var languages = project.dataset.languages.split(','); // Get languages as array
        var isVisible = selectedLanguages.every(lang => languages.includes(lang));

        if (isVisible) {
            // Show the project
            project.style.display = 'block';
            visibleProjects++;

            // Check if a new row needs to be started
            if ((visibleProjects - 1) % 3 === 0) {
                // Create a new row
                currentRow = document.createElement('div');
                currentRow.className = 'row';
                project.parentNode.insertBefore(currentRow, project);
            }

            // Append the project to the current row
            currentRow.appendChild(project);
        } else {
            // Hide the project
            project.style.display = 'none';
        }
    });
}

// Call the function to update project visibility initially
document.addEventListener('DOMContentLoaded', function () {
    updateProjectVisibility();
});