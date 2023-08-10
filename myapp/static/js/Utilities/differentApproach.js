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
        //change the text of the button 
        this.value="true";
        this.textContent="LBL";
        this.classList.remove("btn-success");
        this.classList.add("btn-secondary");
        //hide the  div with class LBLModal
        $('#LBLModal').hide();
        //show the div with class DNDModal
        $('#DNDModal').show();
        window.setEditor();
        //get approach id 
        var approachId = document.getElementById("approachSelect").value;
        //get the approach data
        window.getApproachData(approachId);
    }
    else
    {
        //change the value of the button to false
        this.textContent="Play";
        //add teh class btn-success
        this.classList.remove("btn-secondary");
        this.classList.add("btn-success");
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

window.setEditor("editor2");
window.setEditor("editor1");

window.startLBL();
//
