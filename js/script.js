// Ensure no code is executed before the page is loaded
$(function() {
    // The following chunk of code is for hiding and unhiding the Modal Form
    $("#ModalForm").hide();
    $("#ModalFormReveal").click(function(){
        // If the Modal Form is hidden, show it and change #ModalFormReveal's text to "Back"
        if ($("#ModalForm").is(":hidden")) {
            $("#ModalForm").show();
            $("#ModalFormReveal").html("Back");
        }
        // Otherwise, hide the Modal Form and change #ModalFormReveal's text back to "Feedback"
        else {
            $("#ModalForm").hide();
            $("#ModalFormReveal").html("Feedback");
        }
    });

    // The following code is for every article that has the ID associated with a mod or tools hosted on the site. This is done to make reordering
    // (if done for whatever reason) much easier to do in the future
    // mods.html
    // PoKéQuarium Full
    $("#pokequariumfull").html(
        '<a href="html/mods/pokequariumfull.html"><img class="Preview" src="images/previews/mods/pokequarium full/mainmenu.png"></a>'+
        '<h3 class="Name">PoKéQuarium Full</h3>'+
        '<p class="Author">Unknown</p>'+
        '<p class="Description">A Spanish mod that changes most graphics to a Pokémon style.</p>'+
        '<a href="downloads/mods/PoKéQuarium Full.exe"><button class="Download">Download</button></a>'+
        '<a href="html/mods/pokequariumfull.html"><button class="Info">More Info</button></a>'
    );
    // PoKéQuarium X
    $("#pokequariumx").html(
        '<a href="html/mods/pokequariumx.html"><img class="Preview" src="images/previews/mods/pokequarium x/mainmenu.png"></a>'+
        '<h3 class="Name">PoKéQuarium X</h3>'+
        '<p class="Author">Unknown</p>'+
        '<p class="Description">A Spanish mod that changes most graphics to a Pokémon style.</p>'+
        '<a href="downloads/mods/PoKéQuarium X.exe"><button class="Download">Download</button></a>'+
        '<a href="html/mods/pokequariumx.html"><button class="Info">More Info</button></a>'
    );

    // tools.html
    // Alpha Mask Generator
    $("#amask").html(
        '<a href="html/tools/amask.html"><img class="Preview" src="images/previews/tools/amask/thumb.png"></a>'+
        '<h3 class="Name">Alpha Mask Generator</h3>'+
        '<p class="Author">Sam Palmer</p>'+
        '<p class="Description">A tool to generate alpha masks for your spritesheets.</p>'+
        '<a href="downloads/tools/Amask.zip"><button class="Download">Download</button></a>'+
        '<a href="html/tools/amask.html"><button class="Info">More Info</button></a>'
    );
    // Fishinator 2 Extreme!
    $("#fishinator2extreme").html(
        '<a href="html/tools/fishinator2extreme.html"><img class="Preview" src="images/previews/tools/fishinator/thumb.png"></a>'+
        '<h3 class="Name">Fishinator 2 Extreme!</h3>'+
        '<p class="Author">Rhapdog</p>'+
        '<p class="Description">A tool with many functions that can help with testing mods.</p>'+
        '<a href="downloads/tools/Fishinator 2 Extreme!.exe"><button class="Download">Download</button></a>'+
        '<a href="html/tools/fishinator2extreme.html"><button class="Info">More Info</button></a>'
    );
    // Fishsong2Mid
    $("#fishsong2mid").html(
        '<a href="html/tools/fishsong2mid.html"><img class="Preview" src="images/previews/tools/fishsong2mid/thumb.png"></a>'+
        '<h3 class="Name">Fishsong 2 Midi</h3>'+
        '<p class="Author">Phillip Bradbury</p>'+
        '<p class="Description">A tool for converting created fish songs to, or back to, midi.</p>'+
        '<a href="downloads/tools/fishsong2mid.zip"><button class="Download">Download</button></a>'+
        '<a href="html/tools/fishsong2mid.html"><button class="Info">More Info</button></a>'
    );
    // Fish Stories
    $("#fishstories").html(
        '<a href="html/tools/fishstories.html"><img class="Preview" src="images/previews/plho/tool.png"></a>'+
        '<h3 class="Name">Fish Stories</h3>'+
        '<p class="Author">Sam Palmer</p>'+
        '<p class="Description">A tool for editing the fish stories in challenge mode.</p>'+
        '<a href="downloads/tools/Fishstories.zip"><button class="Download">Download</button></a>'+
        '<a href="html/tools/fishstories.html"><button class="Info">More Info</button></a>'
    );
    // Midi2Fish
    $("#midi2fish").html(
        '<a href="html/tools/midi2fish.html"><img class="Preview" src="images/previews/tools/midi2fish/thumb.png"></a>'+
        '<h3 class="Name">Midi2Fish</h3>'+
        '<p class="Author">Dennis Lockshine</p>'+
        '<p class="Description">A tool for converting midi to, or back to, fish songs.</p>'+
        '<a href="downloads/tools/Midi2Fish.zip"><button class="Download">Download</button></a>'+
        '<a href="html/tools/midi2fish.html"><button class="Info">More Info</button></a>'
    );
    // Fish Song Composer
    $("#fishsongcomposer").html(
        '<a href="html/tools/fishsongcomposer.html"><img class="Preview" src="images/previews/tools/fishsongcomposer/thumb.png"></a>'+
        '<h3 class="Name">Fish Song Composer</h3>'+
        '<p class="Author">Unknown</p>'+
        '<p class="Description">A tool that can be used to create simple fish songs.</p>'+
        '<a href="downloads/tools/SongCompose.zip"><button class="Download">Download</button></a>'+
        '<a href="html/tools/fishsongcomposer.html"><button class="Info">More Info</button></a>'
    );
    // Tone Player
    $("#toneplayer").html(
        '<a href="html/tools/toneplayer.html"><img class="Preview" src="images/previews/tools/toneplayer/thumb.png"></a>'+
        '<h3 class="Name">Tone Player</h3>'+
        '<p class="Author">Unknown</p>'+
        '<p class="Description">A tool that can be used to preview fish songs as they would sound in-game.</p>'+
        '<a href="downloads/tools/TonePlayer.zip"><button class="Download">Download</button></a>'+
        '<a href="html/tools/toneplayer.html"><button class="Info">More Info</button></a>'
    );
});