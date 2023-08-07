window.showCodeLinesLBLModal = function () {
    var totalDelay = 0;
    $('#LBLModal .code code').each(function (index, element) {
        var text = $(element).text();
        $(element).text('');
        var lineDelay = text.length * 50; // Total delay for this line
        for (let i = 0; i < text.length; i++) {
            setTimeout(function () {
                $(element).append(text[i]);
                if (i === text.length - 1) {
                    hljs.highlightBlock(element); // Re-highlight the code block using Highlight.js
                }
            }, totalDelay + i * 50); // Add totalDelay to delay each character
        }
        totalDelay += lineDelay; // Increase totalDelay by the delay of this line
    });
}


window.populateLBLModal = function (data) {
    $("#LBLModal .code").empty();
    console.log(data);
    //for each line of code in data, add a new code line
    data.forEach((line, index) => {
        var newCodeLine = document.createElement('code');
        newCodeLine.className = "language-cpp";
        console.log(line.line_text);
        newCodeLine.append(line.line_text);
        $("#LBLModal .code").append(newCodeLine);
        $("#LBLModal .code").append(document.createElement('br'));
    });
    window.showCodeLinesLBLModal();
}
