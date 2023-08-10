
document.getElementById("save_and_add_next_app_button").addEventListener("click", function(event) {
    //get the questionId from the moadal

    var questionId = $('#addApproachModal').attr('data-id');
    saveApproach(event, questionId);
    //now we have to brint the modal again
    //show the modal addAppraochModal
    $('#addApproachModal').modal('show');
});

document.getElementById("save_button_app").addEventListener("click", function(event) {
    var questionId = $('#addApproachModal').attr('data-id');
    saveApproach(event, questionId);
});
 // Set to actual question id

function saveApproach(event, questionId) {
    // Prevent form submission
    event.preventDefault();

    // Extract values from the form
    var name = document.getElementById("name").value;
    var content = document.getElementById("content").value;
    var description = document.getElementById("description").value;

    // Create data object to send
    var data = {
        name: name,
        content: content,
        description: description
    };

    // Send the request
    window.makeRequest({
        url: `/api/addApproach/${questionId}`,
        method: 'POST',
        body: JSON.stringify(data),
        onSuccess: function(data) {
            // Log the response for debugging
            console.log(data);
            window.showAlertGlobal(data.message,'success')

            // Close the modal
            $('#addApproachModal').modal('hide');

            // Clear form fields for next approach
            if (event.target.id === "save_and_add_app_button") {
                document.getElementById("name").value = '';
                document.getElementById("content").value = '';
                document.getElementById("description").value = '';
            }

            // Optional: Reload page or update elements on page
        },
        onNetError: function(error) {
            console.error('Network Error:', error);
        },
        onErrorMessage: function(errorMessage) {
            console.error('Error Message:', errorMessage);
        }
    });
}

window.addAppraoch = function() {
    //get the 
}