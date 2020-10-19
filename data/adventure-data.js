export default [
    {
        id: 'Chapter One',
        title: 'Chapter ONE: Good Morning Frog, Good Morning Toad!',
        image: '../assets/frogbed.png',
        description: `
        One day in summer Frog was not feeling well. Toad said, “Frog, you are looking
        quite green.”
        “But I always look green,” said Frog.
        “I am a frog.”
        “Today you look very green even for
        a frog,” said Toad.
        “Get into my bed and rest.”
    `,
    // ----------------------------------------------------
        choices: [{


            id: 'frog-nap',
            description: 'Frog takes a long nap.',
            result: `
           Frog goes to sleep and naps all the way through morning tea and biscuits. Toad is upset that frog missed morning tea. +1 Grumpy Level.
        `,
            grumpyLevel: +1,
            buttons: 0,
        },
        {
            id: 'toad-nap',
            description: 'Frog feels sure that toad should nap too. Toad sets up a cot and the two of them rest before their afternoon walk.',
            result: `
            Both Frog and Toad wake up refreshed. Frog wakes up and finds a red button under their pillow. +1 button'
        `,
            grumpyLevel: 0,
            buttons: +1,
        },
        {
            id: 'No Sleep',
            description: 'Frog says they don\'t want to miss afternoon tea and biscuits!',
            result: `
            The day is started and Frog and Toad are on their way!
        `,
            grumpyLevel: 0,
            buttons: 0,
        }]
    },
    // --------------------------------------------------------------------------------------------------
    {
        id: 'Meadow',
        title: 'Chapter TWO: Toad loses his button',
        image: '../assets/toadlost.png',
        description: `
        As toad and frog were on their morning walk Toad exclaims "Oh drat, Not only do my feet hurt but I have lost one of the buttons on my jacket!" Frog says "don't worry, we will go back to all the places where we walked!" They walked back to the large meadow where they had just come. They begin to search.   
    `,
    // ------------------------------------------------------
        choices: [{


            id: 'rocks',
            description: 'Frog and toad find a pile of rocks that Toad tripped over previously in the day. Frog says "lets check here Toad!"',
            result: `
            Frog searches the rocks and toad falls flat on his nose. +1 Grumpy Level.  
        `,
            grumpyLevel: +1,
            buttons: 0
        }, 
        {
            id: 'weeds',
            description: 'Frog and Toad look and see a large group of weeds they had walked through earlier. Frog says, "maybe we could look here!"',
            result: `
            Frog and Toad look into the weeds and they see a group of ducklings. "Hello" says Toad, we are looking for a missing button! Have you by any chance seen it?" The ducks greet them and one of the ducklings says, "I found a button! The duckling spits out a button. You can have it!" Toad says "This button is blue and my button is black, humph". Frog thanks the ducklings for the button and puts the button in his pocket. +1 Button, +1 Grumpy Level.
        `,
            grumpyLevel: +1,
            buttons: +1
        }, 
        {
            id: 'puddle',
            description: 'Toad sees a puddle he stepped in earlier and says to frog, "I stepped in that puddle earlier." Frog and Toad look into the puddle.', 
            result: `
            Seeing their reflection together they laugh and giggle. In the water they see a reflection of something and Toad pulls out a shiny silver button! "Here you go frog this isn't my button but it sure is nice!" Frog thanks Toad and says, "We will find your button soon Toad do not worry". +1 button.
        `,
            grumpyLevel: 0,
            buttons: +1, 
        }]
    },
    // --------------------------------------------------------------------------------------------------
    {
        id: 'river',
        title: 'Chapter Three: The last stop',
        image:'../assets/frogriver.png',
        description: `
        Frog and Toad come back to the river by their house. They see a stone that Frog and Toad sat on to talk about the days news, a tree that had fallen into the water where toad had been fishing from, and a beaver damn where they had spoken with Beaver about their delicious pies. Where should we look exclaimed Frog? 
    `,
    // ----------------------------------------------------
        choices: [{
            id: 'stone',
            description: 'The Sitting Stone',
            result: 'The sitting stone is Frog and Toads favorite spot for talking about the days news and it has two rounded spots for them to sit in very comfortably. Toad looks all around the base of the stone and finds a marvelous yellow button! +1 Button',
            grumpyLevel: 0,
            buttons: +1, 
        }, {
            id: 'tree',
            description: 'Fallen Tree',
            result: 'This tree is where Frog and Toad had first met and their friendship was formed. Frog searches through the trees upended roots but cannot find any buttons. Frog and Toad smile anyhow and are happy every time they walk past the tree. -1 Grumpy Level.',
            grumpyLevel: -1,
            buttons : 0,
        }, {
            id: 'beaver',
            description: 'Beaver sees Frog and Toad coming and comes out to see why they are back so soon.', 
            result: 'After Toad explains that they lost their button Beaver pulls out a handmade wooden button for Toad.',
            grumpyLevel: 0,
            buttons: 1,
        }]
    }
];
