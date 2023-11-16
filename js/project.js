function showCategory(categoryId) {
    var categories = ['category1', 'category2'];
    var categoryTexts = ['schoolProjects', 'otherProjects'];

    for (var i = 0; i < categories.length; i++) {
        document.getElementById(categories[i]).style.display = 'none';
        document.getElementById(categoryTexts[i]).style.display = 'none';
    }

    document.getElementById(categoryId).style.display = 'grid';
    document.getElementById(categoryTexts[categories.indexOf(categoryId)]).style.display = 'block';
}

// Set the default category to 'schoolProjects' when the page loads
document.addEventListener('DOMContentLoaded', function () {
    showCategory('category1');
});
