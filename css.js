/* Explanation in JS tab */

/* Cool font from Google Fonts! */
@import url('https://fonts.googleapis.com/css?family=Raleway:900&display=swap');

body {
	margin: 0px;
}

#container {
	/* Center the text in the viewport. */
	position: absolute;
	margin: auto;
	width: 100vw;
	height: 80pt;
	top: 0;
	bottom: 0;
	
	/* This filter is a lot of the magic, try commenting it out to see how the morphing works! */
	filter: url(#threshold) blur(0.6px);
}

/* Your average text styling */
#text1, #text2 {
	position: absolute;
	width: 100%;
	display: inline-block;
	
	font-family: 'Raleway', sans-serif;
	font-size: 80pt;
	
	text-align: center;
	
	user-select: none;
}
