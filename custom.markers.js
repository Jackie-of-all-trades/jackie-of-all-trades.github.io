/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

UnminedCustomMarkers = {

    isEnabled: true,

    markers: [

        // Example 1: Simple marker
        //{
        //    x: -200,
        //    z: -200,
        //    image: "custom.pin.png",
        //    imageAnchor: [0.5, 1],
        //    imageScale: 0.5,
        //},

        // Example 2: Marker with text
        {
            x: -930,
            z: 390,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Jackie's Desert Base",
            textColor: "white", 
            offsetX: 0,
            offsetY: 10,
            font: "bold 14px Calibri,sans serif",
        },
        
        {
            x: -110,
            z: 92,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "Jackie's Treehouse",
            textColor: "white", 
            offsetX: 0,
            offsetY: 10,
            font: "bold 12px Calibri,sans serif",
        },

        {
            x: 886,
            z: -650,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "Jackie's Home",
            textColor: "white", 
            offsetX: 0,
            offsetY: 10,
            font: "bold 12px Calibri,sans serif",
        },


        // Example 3: Text only
        //{
        //    x: 200,
        //    z: 200,
        //    text: "Text only", 
        //   textColor: "yellow", 
        //    offsetX: 0,
        //    offsetY: 0, 
        //    font: "bold 50px Calibri,sans serif",
        //},

        // add your markers here

        {
            x: 14,
            z: 560,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "Luke's Farms",
            textColor: "white", 
            offsetX: 0,
            offsetY: 10,
            font: "bold 12px Calibri,sans serif",
        },
        {
            x: 67,
            z: 259,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Luke's Home",
            textColor: "white", 
            offsetX: 0,
            offsetY: 10,
            font: "bold 14px Calibri,sans serif",
        },
        {
            x: -82,
            z: 156,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Vedika's Home",
            textColor: "white", 
            offsetX: 0,
            offsetY: 10,
            font: "bold 14px Calibri,sans serif",
        },
        {
            x: -145,
            z: -93,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Jerilyn's Tower",
            textColor: "white", 
            offsetX: 0,
            offsetY: 10,
            font: "bold 14px Calibri,sans serif",
        },
        {
            x: -7,
            z: -4,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Grant's Dome Home",
            textColor: "white", 
            offsetX: 0,
            offsetY: 10,
            font: "bold 14px Calibri,sans serif",
        },
        {
            x: 955,
            z: -409,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Erin's Cave",
            textColor: "white", 
            offsetX: 0,
            offsetY: 10,
            font: "bold 14px Calibri,sans serif",
        },
        {
            x: 955,
            z: -409,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Erin's Cave",
            textColor: "white", 
            offsetX: 0,
            offsetY: 10,
            font: "bold 14px Calibri,sans serif",
        },
        {
            x: -382,
            z: 544,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Casper's Tower",
            textColor: "white", 
            offsetX: 0,
            offsetY: 10,
            font: "bold 14px Calibri,sans serif",
        },
        {
            x: -189,
            z: 25,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "Unknown Residence",
            textColor: "white", 
            offsetX: 0,
            offsetY: 10,
            font: "bold 12px Calibri,sans serif",
        },


        // do not delete the following two closing brackets
    ]
}
