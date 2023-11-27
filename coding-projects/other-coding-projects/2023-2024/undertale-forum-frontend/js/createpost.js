function handleImageUpload() {
    document.getElementById("imageUpload").click();
}

function handleImagePreview(event) {
    var input = event.target;
    var preview = document.getElementById("preview");

    var reader = new FileReader();
    reader.onload = function () {
        preview.style.backgroundImage = "url('" + reader.result + "')";
    };

    reader.readAsDataURL(input.files[0]);
}