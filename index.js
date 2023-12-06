const blurButtons = document.getElementsByClassName("open_view_button");
const container = document.querySelector(".container");
const popup = document.querySelector(".popup");
const popupTitle = document.querySelector(".open_view_title");
const quote=document.querySelector(".quote");
const desc=document.querySelector(".short_desc");
const closeBtn=document.querySelector(".close");
const weekTitles = {
  w1: "Week 1",
  w2: "Week 2",
  w3: "Week 3",
  w4: "Week 4",
  w5: "Week 5",
  w6: "Week 6",
  w7: "Week 7",
  w8: "Week 8",
  w9: "Week 9",
  w10: "Week 10",
  w11: "Week 11",
  w12: "Week 12",
};
const enrtyInfo={
    "Sonnet 130": `"And yet, by heaven, I think my love as rare/ As any she belied with false compare" (Shakespeare 13-14).`,
    "Sonnet 130 (2)": `“If hairs be wires, black wires grow on her head” (Shakespeare 4).`,
    "Jabberwocky": `"One, two! One, two! And through and through The vorpal blade went snicker-snack! He left it dead, and with its head He went galumphing back" (Carroll 17-20)`,
    "I, being a women…": `"So subtly is the fume of life designed, / To clarify the pulse and cloud the mind" (Millay 6-7)`,
    "I, being a women… (2)": `"Am urged by your propinquity to find Your person fair, and feel a certain zest To bear your body’s weight upon my breast" (Millay 3-5)`,
    "To his coy mistress": `"Had we but world enough, and time, This Coyness, lady were no crime" (Marvell 1-2)`,
    "Sonnet 43": `"I love thee to the depth and breadth and height, My soul can reach" (Browning 2-3)`,
    "Jallaludin Rumi": `"You are not a drop in the ocean. You are the entire ocean in a drop." (Rumi)`,
    "Tawfiq Mawani": `"If your self-love rejects reality, your reality will reject your true self" (Tawfiq)`,
    "Let America be America Again": `"For all the dreams we’ve dreamed/ And all the songs we’ve sung/ And all the hopes we’ve held/ And all the flags we’ve hung" (Hughes 64-66)`,
    "Let America be America Again (2)": `"O, let America be America again—The land that never has been yet—And yet must be—the land where every man is free." (Hughes 58-61)`,
    "Jallaludin Rumi (2)": `"Raise your words, not voice. It is rain that grows flowers, not thunder" (Rumi)`,
    "Progressive Insanities of a Pioneer": `"This is not order but the absence of order. He was wrong, the unanswering forest implied: It was an ordered absence" (Atwood 38-44)`,
    "Recitatif": `"She didn’t say anything, just grabbed Roberta with her Bible-free hand and stepped out of line, walking quickly to the rear of it" (Morrison 5)`,
    "Recitatif (2)": `"Did you ever learn to read? “Watch." She picked up the menu. "Special of the day. Cream of corn soup. Entrees. Two dots and a wriggly line. Quiche. Chef salad, scallops. I was laughing and applauding when the waitress came up" (Morrison 10-11)`,
    "Joseph's Justice": `"But you know dis Joseph/ Dah one I'm telling dah story bout? He was jus ordinary. Ordinary Halfbreed like us. Not dah kine of mans anyone he tell stories bout" (Campbell 198)`,
    "Joseph's Justice (2)": `"Oh I know dah history books dey say we was two hundred an fifty. But you gotta member dey write dah history books" (Campbell 204)`,
    "Jallaludin Rumi (3)": `"Let yourself be silently drawn by the strange pull of what you love. It will not lead you astray." (Rumi)`,
    "The story of an hour": `"There were patches of blue sky showing here and there through the clouds that had met and piled one above the other in the west facing her window" (Chopin para.5)`,
    "The story of an hour (2)": `"But she felt it, creeping out of the sky, reaching toward her through the sounds, the scents, the color that filled the air" (Chopin para.8)`,
    "The story of an hour (3)": `"When she abandoned herself a little whispered word escaped her slightly parted lips. She said it over and over under the breath: “free, free, free!" (Chopin para.9)`,
    "The story of an hour (4)": `"Go away. I am not making myself ill.” No; she was drinking in a very elixir of life through that open window" (Chopin para.8)`,
    "The story of an hour (5)": `"Louise, open the door! I beg; open the door — you will make yourself ill. What are you doing, Louise? For heaven’s sake open the door" (Chopin para.7)`,
    "Ali Ibn Abi Talib": `"He who adopts greed as a habit devalues himself; he who discloses his hardship agrees to humiliation; and he who allows his tongue to overpower his soul debases the soul" (Ali Ibn Abi Talib)`,
    "Winter Dreams": `"She simply made men conscious to the highest degree of her physical loveliness" (Fitzgerald 8)`,
    "Winter Dreams (2)": `"He knew that Irene would be no more than a curtain spread behindhim, a hand moving among gleaming tea-cups, a voice calling to children . . . fire and loveliness were gone, the magic of nights and the wonder of the varying hours and seasons . . . slender lips, down-turning, dropping to his lips and bearing him up into a heaven of eyes. . . . The thing was deep in him. He was too strong and alive for it to die lightly." (Fitzgerald 10)`,
    "Winter Dreams (3)": `"Of course you could never love anybody but me," she continued. "I like the way you love me. Oh, Dexter, have you forgotten last year?" (Fitzgerald 12)`,
    "Winter Dreams (4)": `"Even the grief he could have borne was left behind in the country of illusion, of youth, of the richness of life, where his winter dreams had flourished." (Fitzgerald 15)`,
    "Winter Dreams (5)": `“Long ago," he said, "long ago, there was something in me, but now that thing is gone. Now that thing is gone, that thing is gone. I cannot cry. I cannot care. That thing will come back no more." (Fitzgerald 15)`,
    "Winter Dreams (6)": `"I don't know what's the matter with me. Last night I thought I was in love with a man and to-night I think I'm in love with you- ---"--it seemed to him a beautiful and romantic thing to say" (Fitzgerald 8)`,
    "Jallaludin Rumi (4)": `"Don’t be the rider who gallops all night and never sees the horse that is beneath him." (Rumi)`,
    "Ali Ibn Abi Talib (2)": `"A fool’s mind is at the mercy of his tongue and a wise man’s tongue is under the control of his mind." (Ali Ibn Abi Talib)`,
    "Jallaludin Rumi (5)": `"The wound is where the light enters you" (Rumi)`,
    "Maya Angelou": `"People will forget what you said, people will forget what you did, but people will never forget how you made them feel" (Maya Angelou)`,
    "Maya Angelou (2)": `"I can be changed by what happens to me. But I refuse to be reduced by it." (Maya Angelou)`,
    "Sir Edmund Hillary": `"It is not the mountain we conquer but ourselves." (Sir Edmund Hillary)`, 
}

const shortInfo={
  "Sonnet 130": "My Commonplace notebook includes this line because it provides a unique perspective on poets' portrayals of love in comparison to the stereotypical depiction of love. Through this line, the speaker conveys to the reader that their love for their lover is truly rare, avoiding the exaggerated comparisons that many poets use to describe their lovers.",
  "Sonnet 130 (2)": "I included this line in the commonplace notebook because it potentially hints at the identity of the speaker's lover. It is suggested by the speaker that if their lover's hair is compared to wires, then black wires will grow on their head. The described hairstyle is commonly associated with women from the African subcontinent, which suggests a connection to someone of African ethnicity.",
  "Jabberwocky": `This line from "Jabberwocky" made its way into my notebook due to its incredibly nonsensical yet intriguing depiction of actions. In particular, the phrase "One, two! One, two! And through and through..." conjures vivid images of the action. A subtle suggestion is provided of the sound associated with the sword's attack on the beast by the onomatopoeic "snicker-snack."`,
  "I, being a women…": `I added this line to my collection because of its powerful use of imagery. The expression "fume of life" evokes a vivid sense of visual image, while the phrase "to clarify the pulse" introduces a distinctive form of tactile imagery. Additionally, the words "cloud the mind" contribute to the overall sensory experience for the reader by visually portraying the impact of a mind filled with emotions, thoughts, and perceptions that distort clear thinking. This combination of visual and tactile imagery enhances the depth and impact of the line.`,
  "I, being a women… (2)": "I chose to include this line in my commonplace notebook primarily because of its varied possibilities for interpretation, especially in the second part of the line where she (the speaker) mentions of bearing her lover's body weight upon her breast. While there could be a sexual interpretation, it also allows for a broader understanding. Setting aside the more intimate connotations, one could assume that the speaker is expressing a willingness to bare not just the physical weight but also the emotional burdens of their lover— encompassing problems, worries, and pain. The phrase implies a commitment to supporting and sharing the burdens that the lover carries, extending beyond the literal to a metaphorical and emotional realm.",
  "To his coy mistress": "I included this line in my collection due to the speaker's way of connecting of two distinct concepts. The speaker communicates to their lover that if the world had boundless time, her shyness would not be considered a wrongdoing. In this single line, the speaker intertwines the finite nature of time with the perception of the lover's coyness as a criminal offence. This dual portrayal suggests both the limitations imposed by time and the speaker's belief that the lovers modesty and coyness is a fault.",
  "Sonnet 43": " This line possesses a unique ability to bridge two entirely varied concepts. In this sense, the physical and tangible (dimensions) are seamlessly linked to the abstract (soul). Speaking about their love, the speaker expresses their love to breadth, depth, and height, suggesting that it transcends specific levels. The all-encompassing nature of love spans across all dimensions, yet it remains boundless, extending into the realm of the soul.",
  "Jallaludin Rumi": "This line needed a place in my commonplace book due to its portrayal of the profound interconnectedness between human beings and the natural world. The line accomplishes this by rejecting the notion that individuals are mere drops in an ocean, a perspective that could render us seemingly insignificant. Instead, the speaker asserts that we are the entire ocean in a drop, suggesting that the vastness and complexity of everything in existence are encompassed within us. This concept highlights the depth of our connection to the vast universe.",
  "Tawfiq Mawani": "I included this self-written line in my commonplace book. The line suggests that when an individual's self-love reaches a level where it resists acknowledging and accepting reality, there's a risk of remaining within the comfort zone and avoiding uncomfortable truths. In such a scenario, one's own reality may be forced to reject the emergence of their true self. This implies that embracing one's true self requires a willingness to confront and respond, as genuine self-discovery can only occur through acceptance and engagement with the truths people must face.",
  "Let America be America Again": "This line was added to my notebook purely due to its remarkable use of rhyme and word play along with meaning. This line follows a ABAB rhyming scheme. The choice of words used by the speaker does not only ensure readers are intrigued by the flow of words, but also illustrates great meaning illuminating from each word choice of the speaker.",
  "Let America be America Again (2)": `I added this line to my collection because of its distinctive way of using language to depict the present state of something. The speaker asserts that America, described as "the land that never has been yet—And yet must be…," suggests that the perceived America, as it has been understood historically was never existent. However, the phrase "And yet must be" introduces optimism, implying that the hope and potential for the dream of America could still be realized in the future. The line captures a complex blend of acknowledgment of past shortcomings and a forward-looking sense of possibility.`,
  "Jallaludin Rumi (2)": "I added this line for its impactful use of allusions. The speaker connects different objects, portraying words as rain and voice as thunder. The line suggests that while raising words can be likened to nurturing rain that grows flowers, raising the voice, attributing to thunder, may not yield the same positive result. The way in which the lines has been formed allows for a rich interplay of metaphors, exploring the impact of language and expression.",
  "Progressive Insanities of a Pioneer": `I have included this line because of the thought-provoking use of the phrase "ordered absence." Initially, the speaker characterizes the situation as the absence of order, but then introduces the idea that this absence is, in fact, ordered. This implies a different and unique perspective, suggesting that the apparent lack of order is structured and governed by its own natural set of rules. `,
  "Recitatif": `My reason for adding this line hints towards the unnecessary and yet necessary use of the phrase “Bible-free hand.” While a more straightforward description could have been used, the speaker opts for a different kind of expression. The use of "Bible-free" suggests a deliberate emphasis on the absence of a Bible, potentially highlighting the religious or moral stance of Roberta's mother as a character. This choice of wordings adds depth to the characterization and subtly conveys additional layers of meaning.`,
  "Recitatif (2)": "I added this line to my commonplace book because of its wholesome portrayal of Roberta's progression in the story. Rather than simply stating that Roberta could read, the writer creatively demonstrates her reading ability. This approach not only showcases Roberta's literacy skills but also provides a vivid and engaging portrayal of her character development. The line stands out for its effective use of show, not tell, contributing to a more immersive narrative experience.",
  "Joseph's Justice": "This line is added to my notebook due to the irony embedded in the speaker's statement about Joseph. The speaker tells us that Joseph wasn't the kind of man anyone would tell a story about, yet the very act of narrating Joseph's story contradicts this claim. This irony creates an intriguing tension, signaling to readers that they can expect something unique and unconventional. It sets the stage for an uncommon narrative about an ordinary individual, creating anticipation and bringing in the reader's interest in the storytelling approach.",
  "Joseph's Justice (2)": "I recorded this quote in my collection because it reminded me that history books are not sacred or divinely inspired texts that speak only the truth. Instead, they are human-crafted narratives shaped by individuals and their interpretations of events. The quote highlights the subjectivity illustrated in historical accounts, prompting reflection and thought on the nature of historical events and the perspectives that influence the shaping of our understanding of the past.",
  "Jallaludin Rumi (3)": "I included this piece of writing in my notebook due to its thought-provoking nature. The statement encourages embracing the feeling of being attached and drawn towards something, suggesting that our gut feelings often serve as better judges in situations than what may be immediately apparent. ",
  "The story of an hour":  `I added this line in my commonplace notebook for its vivid visual imagery. The speaker's description of the blue sky as "patches" and the clouds meeting and piling up one over the other creates a clear mental image. This use of imagery enhances the reader's ability to picture the scene and better understand the character's perspective, contributing to a more immersive reading experience.`,
  "The story of an hour (2)": "I found these lines description unique. The speaker talks about the sensation the character is about to experience as being surrounded by sounds, scents, and colors, inviting readers to imagine and contemplate what specific sounds, scents, and colors might be influencing the character's emotions. This use of imagery encourages readers to create a mental image whilst using their own senses to interpret what the character may be experiencing.",
  "The story of an hour (3)": "I added this line in my commonplace notebook for its way of asserting freedom. The speaker describes the character's act of abandoning herself, and yet, in doing so, she comes closer to her true self. This dual journey from abandonment to freedom suggests a transformation and self-realization. The line captures the complexity of the character's inner experience of letting go her old self and embracing her current state.",
  "The story of an hour (4)": `I added this line to my commonplace notebook for its aesthetically pleasing word choice. The phrase "elixir of life through that open window" evokes a sense of bliss keeping in mind the details of the world outside the window.`,
  "The story of an hour (5)": `
  In this line, the fact that the sister calls the character by her name, "Louise," rather than associating her with her husband prompts questions about the reason behind this choice. Is it because her husband has passed away? or does it signify a recognition of the character's need for independence which the sister somewhere or the other had knowledge of? This line provokes readers to rethink the narrative and character motives.
  `,
  "Ali Ibn Abi Talib": "I decided to add this line to my collection for its profound insights, particularly in highlighting the consequences of adopting certain behaviors. The statement that an individual who adopts greed as a habit devalues themselves suggests a perspective beyond material wealth. The individual who is greedy may accumulate value in terms of materialistic wealth, but the devaluation of this trade is based upon how others perceive the person. ",
  "Winter Dreams": `I included this line in my notebook for its intriguing word choices. The use of the word "conscious" instead of alternatives like "know of" or "apparent" adds depth to the speaker's statement. It suggests that men were not merely unaware or lacked knowledge but were, in a sense, unconscious in their understanding of the described beauty. This use of varied words prompts readers to ponder upon the depth of beauty she held.`,
  "Winter Dreams (2)": `I added this line because I struggled to comprehend certain expressions in these lines, like "a hand moving among gleaming tea cups" and "slender lips, down-turning, dropping to his lips and bearing him up into a heaven of eyes." I did however understand that Irene had lost significance to him,  but still I found some phrases puzzling.`,
  "Winter Dreams (3)": "I included this line in my notebook as the phrase “Of course you could never love anybody but me,” amused me, as it conveyed a strong sense of confidence in believing that someone couldn't love anyone other than oneself.",
  "Winter Dreams (4)": "The final statement, mentioning that the grief he could have endured was left behind where his winter dreams had prospered, was something I did not really understand on first glance, I asked myself why his grief was left behind?",
  "Winter Dreams (5)": "I included these lines in my commonplace book due to this being the first set of repetitions in the story. This repetition serves as a reminder in the story, signaling an irreversible loss and a significant transformation in the character and his interpretation of his current situation.",
  "Winter Dreams (6)": "Upon reading this sentence, I observed a unique reaction from the protagonist to Judy's statement. Unlike the typical response one might expect when learning about a lover moving on so easily, characterized by confusion and stress, the protagonist perceives this statement as beautiful and romantic.",
  "Jallaludin Rumi (4)": "This quote led me to think about how individuals dedicate their time to riding the horse, symbolizing work or their daily routines, yet tend to overlook the underlying motivation that leads their actions or in other words, keeps them moving.",
  "Ali Ibn Abi Talib (2)": "I included this quote in my notebook as a reminder of the significance of mindful speech. The quote suggests that a fool lets the tongue dictate thoughts without thinking or having a conscious, exerting control over the mind. In contrast, the wise person allows the mind to guide speech, ensuring alignment with conscious intent.",
  "Jallaludin Rumi (5)": "I included this quote in my commonplace notebook for its interesting use of symbols and metaphors. The metaphorical idea of a wound representing pain or a traumatic event, coupled with light symbolizing growth and vitality, conveys the notion that challenges and hardships, a reference to wounds, can be sources of strength and growth.",
  "Maya Angelou": "",
  "Maya Angelou (2)": "",
  "Sir Edmund Hillary": ""
}

const colors={
    "color_green": "rgb(0, 255, 110)",
    "color_blue":  "rgb(0, 191, 255)",
    "color_orange": "rgb(255, 140, 0)",
    "color_purple": "rgb(166, 0, 255)",
    "color_dark_pink": "rgb(255, 0, 89)",
    "color_yellow": "rgb(255, 217, 0)",
    "color_dark_blue": "rgb(0, 106, 255)",
    "color_ddark_blue": "rgb(17, 0, 255)",
    "color_dark_green": "rgb(4, 255, 0)",
    "color_dark_red": "rgb(255, 0, 0)",
    "color_dark_pruple": "rgb(255, 0, 221)",
    "color_cyan": "rgb(0, 225, 255)",
}

// EXTERNAL FUNCTIONS
function displayDetails(selectedButton) {
    popup.style.visibility="visible";
    for (const weekClass in weekTitles) {
        if (selectedButton.classList.contains(weekClass)) {
          popupTitle.innerHTML = weekTitles[weekClass];
          break;
        }
      }
      for(selectedQuote in enrtyInfo){
        if(selectedButton.innerHTML.trim()==selectedQuote){
            quote.innerHTML=enrtyInfo[selectedQuote];
            desc.innerHTML=shortInfo[selectedQuote];
            break;
        }
      }
      for(selectedColor in colors){
        if(selectedButton.classList.contains(selectedColor)){
            closeBtn.style.backgroundColor=colors[selectedColor];
            break;
        }
      }
}



//Buttons to open view

for (let i = 0; i < blurButtons.length; i++) {
  blurButtons[i].addEventListener("click", function () {

// ALL THE FUNCTIONS FOR THE BUTTON TO OPEN VIEW
    container.classList.toggle("active");
    displayDetails(blurButtons[i]);

  });
}


//Button to close view

closeBtn.addEventListener("click", function(){
    popup.style.visibility="hidden";
    container.classList.remove("active");
})
