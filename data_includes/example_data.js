var shuffleSequence = seq("trial");
PennController.ResetPrefix(null);

PennController.AddHost("http://files.lab.florianschwarz.net/ibexfiles/PennController/SampleTrials/");

var items = [
    ["trial", "PennController", PennController(
        defaultImage
	    .settings.size(200, 200)
	,
	newButton("Start", "Click to Start")
	    .wait()
        ,
        // An image with 2 fish that swim in a round tank
        newImage("target", "2fishRoundTank.png")
        ,
        // An image with 1 fish that swims in a square tank
        newImage("competitor", "1fishSquareTank.png")
        ,
        newCanvas("patches", 450, 200)
            .settings.add(  0, 0, getImage("competitor"))
            .settings.add(250, 0, getImage("target"))
            .print()
        ,
        // We add an audio element (audio file at the specified default URL)
        // "The fish swim in a tank which is perfectly round"
        newAudio("test sentence", "fishRound.ogg")
            .play() // And we play it
        ,
        newSelector("fish")
            .settings.add(getImage("competitor"), getImage("target"))
            .wait()
    )]
];
