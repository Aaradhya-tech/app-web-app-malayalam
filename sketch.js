
var child,school,flag;
var backgroundImg, happyImg, sadImg, schoolImg, flagImg;

function preload(){
  backgroundImg = loadImage("background.jpg");
  happyImg  = loadImage("happy emoji.png");
  sadImg = loadImage("sad emoji.png");
  schoolImg = loadImage("school.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  school = createSprite(displayWidth/2,50,10,10);
  school.addImage(schoolImg);


  child = createSprite(displayWidth/2,displayHeight/2,10,10);
  child.addImage(happyImg);
  child.scale = 0.16;

}



function draw() {
  background(backgroundImg);

  
  camera.y = child.y;
  camera.x = child.x; 

  allOldText();
  allNewText();

  if(keyDown(LEFT_ARROW)){
    child.x = child.x-2;
  }

  if(keyDown(RIGHT_ARROW)){
    child.x = child.x+2;
  }

  if(keyDown(UP_ARROW)){
    child.y = child.y-2;
  }

  if(keyDown(DOWN_ARROW)){
    child.y = child.y+2;
  }

  if(child.x < displayWidth/2){
    child.addImage(sadImg)
  }

  if(child.x > displayWidth/2){
    child.addImage(happyImg)
  }

  
  line(displayWidth/2,-20000,displayWidth/2,displayHeight+20000)
  textSize(32);
  textFont("Georgia");
  fill(255);
  text("പഴയ വിദ്യാഭ്യാസ നയം",100,50)
  text("പുതിയ വിദ്യാഭ്യാസ നയം",displayWidth/2 + 250,50)
  drawSprites();
}

function allOldText(){
  textSize(28);
  textFont("Alatsi");
  fill(255);

  text("10 + 2 ", displayWidth/2 - 300,displayHeight/2);
  text("സ്കൂൾ സിസ്റ്റം", displayWidth/2 - 300,displayHeight/2 + 50);

  text("ഈ നയം മാർക്കുകളിലും അക്കാദമിക്സിലും മാത്രം ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നു", displayWidth/2 - 1200,displayHeight/2 - 200);

  text("ഈ നയം വിദ്യാർത്ഥികളെ അവരുടെ സ്വന്തം ഭാഷയിൽ പഠിക്കാൻ അനുവദിക്കുന്നില്ല", displayWidth/2 - 1800,displayHeight/2 - 100);
  
  text("ഞങ്ങളുടെ ഏതെങ്കിലും കഴിവുകളിൽ ഞങ്ങൾക്ക് ഇന്റേൺഷിപ്പ് ലഭിക്കുന്നില്ല", displayWidth/2 - 1500,displayHeight/2 + 200);

  text("പരീക്ഷകൾ ഇംഗ്ലീഷിലും ഹിന്ദിയിലും മാത്രമാണ് നടക്കുന്നത്", displayWidth/2 - 1500,displayHeight/2 + 70);

  text("ഒരു വിദ്യാർത്ഥിയെ റാങ്ക് ചെയ്യാൻ അധ്യാപകർക്ക് മാത്രമേ അവകാശമുള്ളൂ", displayWidth/2 -1200, displayHeight/2 +300);

  text("അക്കാദമിക് പ്രകടനത്തിന്റെ അടിസ്ഥാനത്തിലാണ് വിദ്യാർത്ഥികളെ റാങ്ക് ചെയ്യുന്നത്", displayWidth/2 - 2000,displayHeight/2 - 270);

  text("കോഡിംഗ്, മൺപാത്രങ്ങൾ തുടങ്ങിയ കഴിവുകളൊന്നും വിദ്യാർത്ഥികളെ പഠിപ്പിക്കുന്നില്ല", displayWidth/2 - 1700,displayHeight/2  + 400);

  text("ബോർഡ് പരീക്ഷകൾ വർഷം തോറും നടക്കുന്നു", displayWidth/2 - 1900,displayHeight/2 + 10);

  text("സാംസ്കാരിക പഠനമൊന്നും നൽകിയിട്ടില്ല", displayWidth/2 - 1900,displayHeight/2 +300);

  text("പൂർണ്ണമായ കോഴ്‌സിന് ശേഷമാണ് യോഗ്യത നൽകുന്നത്", displayWidth/2 - 2100,displayHeight/2 + 140);

  text("കോളേജ് പ്രവേശനത്തിന് 12 മാർക്ക് പ്രധാനമാണ്", displayWidth/2 - 2300,displayHeight/2 - 200);

  text("ഫീസ് നിയന്ത്രിച്ചിട്ടില്ല", displayWidth/2 - 1900,displayHeight/2 + 480);

  text("വിദ്യാർത്ഥികളെ വിഷയങ്ങളിൽ പരിമിതപ്പെടുത്തിയിരിക്കുന്നു", displayWidth/2 - 2250,displayHeight/2 + 350);
  
}

function allNewText(){
  textSize(28);
  textFont("Alatsi");
  fill(255);

  text(" 5 + 3 + 3 + 4 ", displayWidth/2 + 50,displayHeight/2);
  text("സ്കൂൾ സിസ്റ്റം", displayWidth/2 + 50,displayHeight/2 + 50);

  text("ഈ നയം മാർക്കുകളിലും അക്കാദമിക്സിലും ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നില്ല, കഴിവുകളിലും അക്കാദമികേതര പ്രവർത്തനങ്ങളിലും ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നു", displayWidth/2 + 200,displayHeight/2 - 250);

  text("വിദ്യാർത്ഥികൾക്ക് ഇപ്പോൾ അവരുടെ പ്രാദേശിക ഭാഷയിൽ പഠിക്കാൻ കഴിയും", displayWidth/2 + 300,displayHeight/2 - 100);
  
  text("ഞങ്ങളുടെ സ്കൂൾ പ്രായത്തിൽ ഞങ്ങളുടെ കഴിവുകളിൽ ഇന്റേൺഷിപ്പ് നേടാൻ കഴിയും", displayWidth/2 + 500,displayHeight/2 + 200);

  text("ഇപ്പോൾ പ്രാദേശിക ഭാഷകളിൽ പരീക്ഷകൾ ലഭ്യമാണ്", displayWidth/2 + 250,displayHeight/2 + 120);

  text("അധ്യാപകരും വിദ്യാർത്ഥികളും ഒരു കുട്ടിയെ റാങ്ക് ചെയ്യുന്നു", displayWidth/2 +50, displayHeight/2 +240);

  text("അക്കാദമിക് പ്രകടനത്തിന്റെയും സർഗ്ഗാത്മകതയുടെയും അടിസ്ഥാനത്തിലാണ് വിദ്യാർത്ഥികളെ റാങ്ക് ചെയ്യുന്നത്", displayWidth/2 + 1000,displayHeight/2 - 310);

  text("കോഡിംഗ്, മൺപാത്രങ്ങൾ തുടങ്ങിയ നിരവധി കഴിവുകൾ വിദ്യാർത്ഥികളെ പഠിപ്പിക്കുന്നു", displayWidth/2 + 900,displayHeight/2  + 400);

  text("ഇപ്പോൾ ബോർഡ് പരീക്ഷകൾ രണ്ട് സെമസ്റ്ററുകളിലാണ് നടക്കുന്നത്", displayWidth/2 + 900,displayHeight/2 + 10);

  text("ഇന്ത്യൻ സംസ്കാരം സ്കൂളിൽ പഠിപ്പിക്കുന്നു", displayWidth/2 + 900,displayHeight/2 +300);

  text("കോഴ്‌സിന് ശേഷം യോഗ്യത നൽകുകയും കോഴ്‌സുകൾക്കിടയിൽ സർട്ടിഫിക്കറ്റും ഡിപ്ലോമയും നൽകുകയും ചെയ്യുന്നു", displayWidth/2 + 1300,displayHeight/2 + 140);

  text("കോളേജ് പ്രവേശനത്തിന് 12 മാർക്ക് പ്രധാനമല്ല, വിദ്യാർത്ഥികൾക്ക് പ്രവേശന പരീക്ഷ നൽകാം", displayWidth/2 + 800,displayHeight/2 - 200);

  text("ഫീസ് നിയന്ത്രിച്ചിരിക്കുന്നു", displayWidth/2 + 100,displayHeight/2 + 400);

  text("വിദ്യാർത്ഥികൾക്ക് അവർ ആഗ്രഹിക്കുന്ന ഏത് വിഷയവും എടുക്കാം", displayWidth/2 + 1250,displayHeight/2 + 350);
  
}