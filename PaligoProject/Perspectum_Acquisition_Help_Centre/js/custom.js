//Use the icons created by visualisation team to replace Paligo default category panel icons

$(document).ready(function() {

    var icon1 = "https://perspectumdiagnostics-my.sharepoint.com/:i:/r/personal/yi-chun_wang_perspectum_com/Documents/Paligo/Media%20Images/Icon%20LMS.png?csf=1&web=1&e=hwkevH";
    var icon2 = "https://perspectumdiagnostics-my.sharepoint.com/:i:/r/personal/yi-chun_wang_perspectum_com/Documents/Paligo/Media%20Images/Icon%20Hepatica.png?csf=1&web=1&e=eIcu0k";
    var icon3 = "https://perspectumdiagnostics-my.sharepoint.com/:i:/r/personal/yi-chun_wang_perspectum_com/Documents/Paligo/Media%20Images/Icon%20Coverscan.png?csf=1&web=1&e=aDeUIT";
    var icon4 = "https://perspectumdiagnostics-my.sharepoint.com/:i:/r/personal/yi-chun_wang_perspectum_com/Documents/Paligo/Media%20Images/Icon%20Patient%20De-identification.png?csf=1&web=1&e=w6JbvN";
    
    $(".cat-panel-1").closest("a").prepend("<img src='" + icon1 + "'></img>");
    $(".cat-panel-2").closest("a").prepend("<img src='" + icon2 + "'></img>");
    $(".cat-panel-3").closest("a").prepend("<img src='" + icon3 + "'></img>");
    $(".cat-panel-4").closest("a").prepend("<img src='" + icon4 + "'></img>");
    
    $(".publication-icon").remove();
    
    });