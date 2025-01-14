var projectsData = [
    { 
        project_id: 1,
        project_name: "SNACK-BAR PODCAST", 
        project_img: "../img/other-projects/snackbar-podcast.png", 
        project_url: "../html/project-explanations/other-other-projects/2023-2024/podcast-snackbar.html",	
    },

];

function generateProjectColumns() {
    var projectsRow = document.getElementById('projects-row');
    projectsRow.innerHTML = ''; // Clear existing projects

    var projectsInRow = 3; // Define the number of projects in each row
    var numRows = Math.ceil(projectsData.length / projectsInRow); // Calculate the number of rows needed

    for (var i = 0; i < numRows; i++) {
        var row = document.createElement('div');
        row.className = 'row'; // Create a new row for each iteration

        for (var j = 0; j < projectsInRow; j++) {
            var index = i * projectsInRow + j;
            if (index < projectsData.length) {
                var project = projectsData[index];
        
                var projectColumn = document.createElement('div');
                projectColumn.className = 'column';
        
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
