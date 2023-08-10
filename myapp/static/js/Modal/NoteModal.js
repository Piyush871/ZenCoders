//if clicked on the edit button then we have to remove the textarea from readonly 

window.resetNoteModal = function () {
    $('#noteModal #note').attr('readonly', true);
    $('#noteModal #saveNoteButton').hide();
    $('#noteModal #editNoteButton').show();
}


$(document).on("click", "#noteModal #editNoteButton", function () {
    console.log("editNoteButton clicked");
    $('#noteModal #note').removeAttr('readonly');
    $('#noteModal #note').focus();
    $('#noteModal #saveNoteButton').show();
    $('#noteModal #editNoteButton').hide();
});

//if clicked on the save button then we have to add the textarea to readonly
$(document).on("click", "#noteModal #saveNoteButton", function () {
    console.log("saveNoteButton clicked");
    //get the noteId
    var questionId = $('#noteModal').attr('data-id');
    var note = $('#noteModal #note').val();
    console.log("questionId", questionId);
    console.log("note", note);
    body = JSON.stringify({
        note: note,
    });
    window.makeRequest({
        url: `/api/question_add_note/${questionId}`,
        method: "POST",
        body: body,
        onSuccess: function (data) {
            console.log("data", data);
            //reset the modal
            window.resetNoteModal();
        },
        onNetError: function (error) {
            console.error("Network error:", error);
            window.showAlertGlobal("Network error:", error);
        },
        onErrorMessage: function (message) {
            console.error("Application error:", message);
            window.showAlertGlobal("Application error:", message);
        },
    });
});

// $(document).on("click", "#noteModal #", function () {

// });