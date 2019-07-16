var q1 = "You have the moral backbone of a chocolate eclair.";
var q2 = "You could pour soup in my lap and I'll probably apologize to you."
var q3 = "Home Along 2: Lost in New York. That is a stupid movie title! Lost in New York? The streets are numbered! How'd you get lost in New York?"
var q3 = "I was once on the phone with Blockbuster video, which is a very old fashioned sentence.";
var q4 = "Some of the things I was anxious about as a kid don't bother me anymore. Like I always thought quicksand was going to be a much bigger problem than it turned out to be."
var q5 = "I'm one of the worst drivers I've ever seen. People expect to see a 100 year old bling dog who's texting while driving and drinking a smoothie. Instead they just see a 28 year old healthy man trying his best."
var q6 = "Brush your teeth. Now boom, orange juice. That's life."
var q7 = "We've all gone too big too fast and run out of room. We've all made a Happy Birthday sign. You get that poster board up and you're like 'I don't need to trace it. I know how big letters should be.'";
var q8 = "I can't listen to any new songs. Because every new song is about how tonight is the night and we only have tonight... I want to write songs for people in their 30s called 'Tonight's No Good. How About Wednesday?'";
var q9 = "I like having a puppy that's a bulldog because it's like having a baby that's also a grandma."
var q10 = "I am 35 years  old. I am 6 feet tall. When I enter a room, I lower myself, I go 'Hey, knock knock.' I say 'knock knock' out loud."
var quotes = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var p = $('#quote');
console.log(quotes);

function generateQuote() {
  var filler = quotes[Math.floor(Math.random()*quotes.length)];
  p.text("\"" + filler + "\"");
}
