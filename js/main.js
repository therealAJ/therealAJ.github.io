// Initialize collapse button
$(".button-collapse").sideNav();


//
//MODAL
$(document).ready(function () {
    $('.modal-trigger').leanModal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: 0.5, // Opacity of modal background
        in_duration: 300, // Transition in duration
        out_duration: 200, // Transition out duration
        //      ready: function() { alert('Ready'); }, // Callback for Modal open
        //      complete: function() { alert('Closed'); } // Callback for Modal close
    })
});

//$(document).ready(function () {
//    $('.modal-trigger').leanModal();
//});

$(document).ready(function () {
    $('.slider').slider({
        full_width: true
    });
});



$(document).ready(function () {

    $("#about-me-container").hide();
    $("#experience-container").hide();
    $("#projects-container").hide();
    $("#skills-container").hide();
    $("#interests-container").hide();
    $("#contact-container").hide();

});

function onHomeClick() {

    setTimeout(function () {
        $("#headline").fadeIn();
    }, 500);


    $("#experience-container").slideUp();
    $("#projects-container").slideUp();
    $("#skills-container").slideUp();
    $("#interests-container").slideUp();
    $("#contact-container").slideUp();
    $("#about-me-container").slideUp();

}


function onAboutClick() {

    $("#headline").fadeOut(500);

    $("#experience-container").slideUp();
    $("#projects-container").slideUp();
    $("#skills-container").slideUp();
    $("#interests-container").slideUp();
    $("#contact-container").slideUp();

    setTimeout(function () {
        $("#about-me-container").slideDown();
    }, 500);


}

function onExperienceClick() {

    $("#headline").fadeOut(500);

    $("#about-me-container").slideUp();
    $("#projects-container").slideUp();
    $("#skills-container").slideUp();
    $("#interests-container").slideUp();
    $("#contact-container").slideUp();

    setTimeout(function () {
        $("#experience-container").slideDown();
    }, 500);

}

function onProjectsClick() {

    $("#headline").fadeOut(500);

    $("#about-me-container").slideUp();
    $("#experience-container").slideUp();
    $("#skills-container").slideUp();
    $("#interests-container").slideUp();
    $("#contact-container").slideUp();

    setTimeout(function () {
        $("#projects-container").slideDown();
    }, 500);



}

function onSkillsClick() {

    $("#headline").fadeOut(500);

    $("#experience-container").slideUp();
    $("#projects-container").slideUp();
    $("#about-me-container").slideUp();
    $("#interests-container").slideUp();
    $("#contact-container").slideUp();

    setTimeout(function () {
        $("#skills-container").slideDown();
    }, 500);

}

function onInterestsClick() {

    $("#headline").fadeOut(500);

    $("#experience-container").slideUp();
    $("#projects-container").slideUp();
    $("#skills-container").slideUp();
    $("#about-me-container").slideUp();
    $("#contact-container").slideUp();

    setTimeout(function () {
        $("#interests-container").slideDown();
    }, 500);
}

function onContactClick() {

    $("#headline").fadeOut(500);

    $("#about-me-container").slideUp();
    $("#experience-container").slideUp();
    $("#projects-container").slideUp();
    $("#skills-container").slideUp();
    $("#interests-container").slideUp();

    setTimeout(function () {
        $("#contact-container").slideDown();
    }, 500);
}