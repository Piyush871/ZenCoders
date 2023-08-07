

window.getApproachData = function (approachId) {
    fetch(`/api/get_approach_lines/${approachId}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log($("#play_button").val());
        //check the status of the button 
        if($("#play_button").val()=="false")
        {
            console.log("populating data to LBL modal");
            //have to populate the LBL modal
            window.populateLBLModal(data);
        }
        else
        {
            console.log("populating data to DND modal");
            //have to populate the DND modal
            window.populateDNDModal(data);
        }
    })
    .catch(error => console.error('Error:', error));
};

document.getElementById("approachSelect").addEventListener("change", function() {
    var approachId = this.value;
    window.getApproachData(approachId);
});




//if the play button is clicked 
document.getElementById("play_button").addEventListener("click", function() {
    //if the play button is clicked then the value of the button will be true
    if(this.value=="false")
    {
        //change the value of the button to true
        this.value="true";
        //hide the  div with class LBLModal
        $('#LBLModal').hide();
        //show the div with class DNDModal
        $('#DNDModal').show();
        //get approach id 
        var approachId = document.getElementById("approachSelect").value;
        //get the approach data
        window.getApproachData(approachId);
    }
    else
    {
        //change the value of the button to false
        this.value="false";
        //hide the DND modal
        $('#DNDModal').hide();
        //show the LBL modal
        $('#LBLModal').show();
        //get approach id 
        var approachId = document.getElementById("approachSelect").value;
        //get the approach data
        window.getApproachData(approachId);
    }
});

//at starting the value will be false so we have show the LBL modal
window.startLBL = function()
{
    $('#LBLModal').show();
    $('#DNDModal').hide();
    //get approach id 
    var approachId = document.getElementById("approachSelect").value;
    //get the approach data
    window.getApproachData(approachId);
}
window.startLBL();


document.addEventListener("DOMContentLoaded", function() {
    var aceEditor = ace.edit("editor1");
    aceEditor.setTheme("ace/theme/monokai");
    aceEditor.session.setMode("ace/mode/c_cpp");
});

