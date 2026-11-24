/*
 * 評論比較：真實資料（Amazon Reviews 2023）
 * 資料集 1：AirPods 2 vs AirPods Pro 2（reviews.csv + analysis_ready.csv）
 * 資料集 2：Sony WH-1000XM4 vs Bose QuietComfort 45（headphone_reviews_complete.csv）
 *   音質、舒適度用「語境複核」欄；續航用「續航充電_面向模型初判」（尚未複核）
 *   「混合」記成好評＋負評各一筆；未提及、中立、待複核不計
 * 資料集 3：Logitech K350 vs Microsoft Ergonomic 4000（reviews_keyboard.csv）
 *   分析結果為暫定標註（analysis_keyboard_暫定.csv），待分析組替換
 */
window.SITE_DATA = {
  "categories": [
    {
      "category_id": "headphone",
      "category_name": "耳機",
      "aspects": [
        {
          "aspect": "sound",
          "label": "音質"
        },
        {
          "aspect": "battery",
          "label": "續航"
        },
        {
          "aspect": "comfort",
          "label": "舒適度"
        }
      ]
    },
    {
      "category_id": "keyboard",
      "category_name": "鍵盤",
      "aspects": [
        {
          "aspect": "feel",
          "label": "手感"
        },
        {
          "aspect": "comfort",
          "label": "舒適度"
        },
        {
          "aspect": "durability",
          "label": "耐用做工"
        }
      ],
      "note": "鍵盤的好評、負評目前是暫定標註，之後會換成分析組的結果。"
    }
  ],
  "products": [
    {
      "product_id": "B07PXGQC1Q",
      "product_name": "AirPods 2",
      "category_id": "headphone"
    },
    {
      "product_id": "B0BVYGWJWM",
      "product_name": "AirPods Pro 2",
      "category_id": "headphone"
    },
    {
      "product_id": "B08DBDSVBC",
      "product_name": "Sony WH-1000XM4",
      "category_id": "headphone"
    },
    {
      "product_id": "B0BH6V8TTG",
      "product_name": "Bose QuietComfort 45",
      "category_id": "headphone"
    },
    {
      "product_id": "B002MMY4WY",
      "product_name": "Logitech K350",
      "category_id": "keyboard"
    },
    {
      "product_id": "B081C4XWXZ",
      "product_name": "Microsoft Ergonomic 4000",
      "category_id": "keyboard"
    }
  ],
  "reviews": [
    {
      "review_id": "generated_3bc4cd068ea213ee205035c9686e3a495acfb5a18a7296bab77f6181ae34261d",
      "product_id": "B07PXGQC1Q",
      "rating": 4,
      "title": "Amazing EarPods",
      "text": "These are so amazing I will proble buy another pair."
    },
    {
      "review_id": "generated_a614562d714239610e610e760b2e895e33f9461b83bc32dfc8eff72be074ad8d",
      "product_id": "B07PXGQC1Q",
      "rating": 5,
      "title": "Good",
      "text": "Good and works really well and stays in the ears well"
    },
    {
      "review_id": "generated_934c94ff4d9b7c74ba9348d84d4e1758a2082d97760e7afd1bc2612912714b10",
      "product_id": "B07PXGQC1Q",
      "rating": 5,
      "title": "Great for use in the hospital",
      "text": "My sister was staying with me for 6 hours. I got these to keep her entertained while I recovered. Worked very well!"
    },
    {
      "review_id": "generated_d15c7545202cc74cdbd39d606f79be8ed69f23e14ece68d4139998f024345cba",
      "product_id": "B07PXGQC1Q",
      "rating": 5,
      "title": "Nice product!",
      "text": "Perfect earbuds for granddaughter and her work!"
    },
    {
      "review_id": "generated_f302ad00bf126606674803aafd434c6e75d75f56ce3e543acd5eae3e5d324c1d",
      "product_id": "B07PXGQC1Q",
      "rating": 5,
      "title": "Must have",
      "text": "i was against these forever. My daughter got them and used them sparingly. My wife then used my daughters and raved about them. i then used them and love them as well. Good sound quality and usefulness."
    },
    {
      "review_id": "generated_044cd18aa013d158eee980777f8894e7b3c4da1904813b672102e313c410d641",
      "product_id": "B07PXGQC1Q",
      "rating": 5,
      "title": "Wife needed another pair",
      "text": "Ok no other earphones are like the apple buds. they just work and no stress. Happy wife happy life."
    },
    {
      "review_id": "generated_786b3c6aee0f13da27ea17b3231288f6d17192ab19d0d0ff1673dd6cfeb71f27",
      "product_id": "B07PXGQC1Q",
      "rating": 5,
      "title": "Easy to use",
      "text": "These are so much better then the wired ones. Worth the costs!"
    },
    {
      "review_id": "generated_1f8ad6a7522f0be3fa83dc82f48dcd229f41acee9e603cb3f2a08ce70e93574f",
      "product_id": "B07PXGQC1Q",
      "rating": 5,
      "title": "Perfect Pods!",
      "text": "I was skeptical about ordering these after reading some of the bad reviews on here. But, I received my pair perfectly packaged and sealed just as you would get at the store. Both pods were clean, no sign of them being used. When connecting to my phone, it said my name and not someone else’s. The sound sounds great, as well. Battery does last along time. Overall, I’m very pleased and would recommend them."
    },
    {
      "review_id": "generated_43c52d0c8e8df0fb14f024c09f215f3b878cf96fa2da0ac52367ed1ddde7a6c6",
      "product_id": "B07PXGQC1Q",
      "rating": 5,
      "title": "Súper recomendables",
      "text": "Excelente producto\nEstoy feliz con la calidad"
    },
    {
      "review_id": "generated_869ec3dcb21d095ade21a40d3781bdc46586f0d5b4acea4e06aac27163365241",
      "product_id": "B07PXGQC1Q",
      "rating": 5,
      "title": "recommend",
      "text": "would recommend & buy again"
    },
    {
      "review_id": "generated_42aa0f5cd58521ae29c00d427bc9bdfaa005912c99894d4d570a3977cddc0824",
      "product_id": "B0BVYGWJWM",
      "rating": 5,
      "title": "My very first AirPods ever",
      "text": "So, first off…LOVE! I have all the other Apple Products and these are absolutely amazing and make me soooooo happy! I use them every single day…at the gym, at work, at home, at the store…all day! 95% of the time I only wear one at a time but that’s one of the things I love most because I can do every single thing on the left one or on the right one. They preform identically and it’s amazing. The sound quality is absolutely incredible and there is just so much more. The only problem is my right one physically cuts my ear. Apple is working on this issue with me to figure out what is going on. I’ve sent all kinds of pictures in for them to review. They believe it’s a micro defect on the casing that is basically invisible to the naked eye but is off just enough to cause this issue of cutting my ear. My left one is absolutely perfect and I have zero issue with it at all. I would absolutely recommend these to anyone that is thinking of getting them. I’m sure glad I took the leap on these for sure."
    },
    {
      "review_id": "generated_fd58529a283628230eacc3d08676f0b5afbac403319dd0f2459652856210bae4",
      "product_id": "B0BVYGWJWM",
      "rating": 5,
      "title": "Great AirPods I ever have!!",
      "text": "This one fits me so well, Great sound!!!"
    },
    {
      "review_id": "generated_2f75b69edbeac08545e84f3d6052976a02217903a777727e85307f644f6d7d0a",
      "product_id": "B0BVYGWJWM",
      "rating": 5,
      "title": "Fell in love again",
      "text": "I love my Airpods Pro 1 that I purchased in early 2020. They were worlds better than anything else I had tried and I have used them weekly ever since. The new version 2 looked interesting, but the old ones worked so well there wasn't any push to fix what wasn't broke. Until the Black Friday sale caught my eye and I decided to try them. In short: Wow. I'm in love again. I rather prefer the increased base, and the sound overall is brighter. The other features like the Location should be great to have.\n\nOverall, I don't regret this at all. I've fallen in love again."
    },
    {
      "review_id": "generated_28aba5fdaeb8d66d3bcf95cb1e7123c55a94b55b7d76211317e1b8e3e460253e",
      "product_id": "B0BVYGWJWM",
      "rating": 5,
      "title": "Best version of Apple Airpods",
      "text": "This is my 2nd pair & only because I keep 1 set in my craft room at all times & the other I use for everything else. I think they're the best of any airpod generations"
    },
    {
      "review_id": "generated_defa7d7896a5fdbc2a78991572053752cc37c83849a8434f4525526bcbca1f9b",
      "product_id": "B0BVYGWJWM",
      "rating": 4,
      "title": "World-class noise canceling and okay sound",
      "text": "I’m an audiophile have lots of headphones and Amps and DACs for my headphones however out of all of them these AirPods are the only ones with noise canceling and it makes a massive difference. The sound itself lacks a lot mostly because Apple still lacks a HQ lossless Bluetooth coded like LDAC or APTX for the iPhone. Not even just the AirPods themselves, I have a BT receiver that I used on my old android phone but on my new iPhone 14 pro max the LDAC and APTX isn’t supported which was a huge let down. For simple terms there is no high quality Bluetooth it’s going to lose quality because of the lack of wires."
    },
    {
      "review_id": "generated_1cb2a453f98128380ebce5581ff92be9f8e931d4e1d6ebf46114fc4063d5ca0a",
      "product_id": "B0BVYGWJWM",
      "rating": 5,
      "title": "Gift",
      "text": "Will know at Christmas"
    },
    {
      "review_id": "generated_0a577490d49d21e36349bdea74bdf79467aa336eaaa228511e21b820cea6320e",
      "product_id": "B0BVYGWJWM",
      "rating": 5,
      "title": "Excellent-big improvement over first version especially for noise cancellation",
      "text": "Excellent noise cancellation and sound quality. Battery life seems very good but have not quantified it yet. Definitely would buy again as long as price was under $200"
    },
    {
      "review_id": "generated_283ec80c0abdaaa44880c8dfb4730d59990f908680e9148347a9039fd0fd4165",
      "product_id": "B0BVYGWJWM",
      "rating": 5,
      "title": "I have been waiting to get these for much longer than I should have, they are better than expected.",
      "text": "I had an older set of the original AirPods and after a few years the batteries on them died and I kept waiting to get a new pair and I'm upset it took so long because these are amazing. They are leaps and bounds better than the older models and I'm kind of kicking myself for taking so long to upgrade. There are a ton of new features but the sound canceling and sound pass through features are amazing. The sound canceling is so complete it just makes it seem like all the world shuts off. Or you can use the pass through where you can hear pretty well all the things happening around you within a few feet radius while still hearing your audio crystal clear.\n\nIt comes with extra and different size ear pieces, charging cord, two earpieces and the charging case. It does not come with a plug adapter, just the lighting/usb-c cord. Its just what you would expect from apple in quality, it's a great set of headphones overall. Check out my photos for a closer look and I hope this helped."
    },
    {
      "review_id": "generated_2b7c6e5a03890ff25a8810a411450a45ce8c3c6bb02a9dd43658a1b0fd8960bb",
      "product_id": "B0BVYGWJWM",
      "rating": 4,
      "title": "Great noise cancellation",
      "text": "Greate noise cancellation. Battery life is still to be desired although charging from the case is quick."
    },
    {
      "review_id": "generated_a882d0cb5c99976f0e17ec01e38ca1e7ff37db18cda01b17cc88359b3e61dd69",
      "product_id": "B0BVYGWJWM",
      "rating": 5,
      "title": "Yes ....",
      "text": "... they are worth the upgrade.\n\nWhile the bass in these 2nd Gen's may not be class leading, they are far better than the 1st generation and make most songs sound much better. I noticed it immediately.\n\nSpatial Audio .... Incredible!\nIncredible sound and incredible effect. It's like being at a live concert, actually it's like you're in the middle of the sound, like you're one of the band members. You can hear every instrument with clarity ... unlike the 1st Gen's.\n\nNoise Cancellation\nThe 1st Gen's were good, these are better. Add's to the clarity and quality of the audio, especially when spatial audio is also enabled.\n\nI listened to some of my usual songs (of an eclectic variety) that I listen to regularly and noticed I was tapping my foot and just enjoying the same songs more than usual.\n\nImproved quality and improved experience. Thumbs up."
    },
    {
      "review_id": "c980459acb59ae8e",
      "product_id": "B08DBDSVBC",
      "rating": 4,
      "title": "Really PREMIUM sound!",
      "text": "I've heard a lot of wonderful things about the Sony noise cancelling sets like these, and let me tell you: it isn't just hype. The sound quality is excellent, and the noise cancelling is eerily amazing. I put it on my wife and kids with the noise cancelling off and then turned it on to demonstrate, and you can see each them suddenly smile like \"whoa\". Like my Sony studio headphones I use professionally for work, the actual fidelity of the sound it reproduces is excellent, and the microphone for calls is excellent despite being up by my ears and so far from my mouth (other bluetooth headphones I've tried were good for music only, the mic being up by my ears wasn't good enough to isolate my voice from ambient sound, but this definitely does a great job).\nThe app gives a ton of control beyond what I expected to really customize the experience. For example, I have mine set to auto-pause if the headphones are removed, and to turn off noise cancelling when it detects me speaking to someone, and then resume playback when the headphones are removed/replaced. These features are all customizable, as well as many more. But you need the app. And this is where the cons come in:\n1) You really need the app to get the most out of this. I was thinking about pairing this with my desktop and/or TV, but without the app you have far less control, and to be honest I couldn't even get it to pair with my phone using just Bluetooth alone. There seems to be a way according to the instructions, but I couldn't figure it out without using the app installed.\n2) For a set that costs this much, I'm surprised at how scuffed up it got after one fall from about 3 feet next to my car. Including pictures. This happened the day I got it. I'm not sure if there's anything that can be done about that, pavement is hard to recover from if anything is dropped, but it's something to keep in mind if you're spending this much money on a gadget. My studio headphones have been roughed around for years and held up fine.\n\nAll in all, I'd give it 5 stars if it weren't so reliant on the app to get the features going and/or more resilient to being dropped. Feels like I should deduct one for that. But as far as features and sound quality go, this is a solid 5 out of 5."
    },
    {
      "review_id": "9799439b10ccdc67",
      "product_id": "B08DBDSVBC",
      "rating": 5,
      "title": "Great protection from full blast airline announcements",
      "text": "These work great on airplanes and you can’t even hear the blaring announcements. And you just put your palm against the right headphone to be able to hear ambient noise. You can control the volume and skip tracks just by swiping the right headphone. Easy blue tooth connection."
    },
    {
      "review_id": "470d1f42a60721a7",
      "product_id": "B08DBDSVBC",
      "rating": 1,
      "title": "FAILED IN JUST 8 MONTHS - NORMAL USE",
      "text": "THE THING JUST SNAPPED. normal use, nothing crazy, it just broke, and SONY refuses to cover it."
    },
    {
      "review_id": "8887dcf4d9193734",
      "product_id": "B08DBDSVBC",
      "rating": 5,
      "title": "Tons of options to control these AND can lay down with them!!!",
      "text": "So, a lot of people complained about the headphones pausing for voice etc.. there's an app you can download where you can turn off auto pausing, auto turn off, and you can even turn off the noise cancelling. I personally can't handle the noise cancelling aspect, as it hurts my ears and gives me weird head pressure.. so I'm super happy I can turn that off.\n\nMy headphones lasted about 3 days, listening about 4-6 hours per day. The headphones only take about 30 minutes to charge as well.\nThey are suuuuuper comfortable.\n\nI am a smaller person, and a big issue I have with most headphones is they're way too big for my head, so I can't lean my head back onto the bed or couch with them on.\nNot with these! I can lean my head back FINALLY, and I barely feel like I'm wearing them.\n\nI had beats before this, and they hurt my ears and my head because they were so weirdly shaped and tight. Like my ears would literally fall asleep. I seriously don't even notice I'm wearing them. No tightness, no pressure, no ears falling asleep.\n\nThe case they come with is high quality, and it comes with an aux cord in case you want to listen that way!\n\nThe sound cancelling is... Amazing. Literally no sound got through. I thought my husband was messing with me and just mouthing words at me, but no.. he was speaking quite loudly.\n\nHighly, highly recommend. Probably my favorite out of all the ones I've tried.. and I've tried about 7 just this past year.\nSplurge and get them, you will not regret it."
    },
    {
      "review_id": "d876b57c490552dd",
      "product_id": "B08DBDSVBC",
      "rating": 5,
      "title": "Excellent headphones for studying, jamming, and exercise",
      "text": "Excellent sound quality with perfect bass and midrange, with good treble. Noise cancelation is exceptional for studying and listening to music while working out. Comfortable to wear ALL DAY LONG...I use it everyday. Even though it's not rated sweat proof, I've had no issue. Worth the price."
    },
    {
      "review_id": "dffc673d0bd1d9d5",
      "product_id": "B08DBDSVBC",
      "rating": 4,
      "title": "Have some discomfort in the fitting of the ear pads",
      "text": "That's why I gave it the 4. Also. Music does not stop for voice recognition like bose will. Still works for what I need."
    },
    {
      "review_id": "fd86c2e1b874fd05",
      "product_id": "B08DBDSVBC",
      "rating": 5,
      "title": "Worth the Hype",
      "text": "loads of videos and reviews by the techies on YouTube and everywhere else. Dual device connection is a fantastic feature and the implementation is excellent. i have many devices connected and the process of dropping one and connecting the one i need is really easy\n\nI wont go into details of build quality and design, you can easily find those on the youtube reviews. what i can say is if this is within your budget, you wont regret your purchase"
    },
    {
      "review_id": "e78796c6823b08f7",
      "product_id": "B0BH6V8TTG",
      "rating": 5,
      "title": "Amazing!",
      "text": "Truly the best headset I've owned. First off the battery seems to last long, I charge at night and they last thru a full work day with some juice to spare. Sound wise perfect. When I'm outside I can't hear my rooster crow with the music playing."
    },
    {
      "review_id": "7f53becb3194944b",
      "product_id": "B0BH6V8TTG",
      "rating": 5,
      "title": "5 stars",
      "text": "First let me say how much my daughter talks, and we are loud people. With these ear phones on, at a normal level, I couldn't hear her over the music that was playing. These are quiet possibly, the most comfortable earphone that i have ever worn or tried on. They have a pillow on top of the arch as well. They were easy to adjust and seem very sturdy. The look is beautiful. I would recommend these over the other top name ear phones. Now that I have both and can compare... I am a BOSE fan for sure!"
    },
    {
      "review_id": "b26446b371037650",
      "product_id": "B08DBDSVBC",
      "rating": 5,
      "title": "Excellent Headphones",
      "text": "Multi-purpose headphones since you can use them with your PC, cell phone or nothing at all just for the noise canceling feature. Light weight and very comfortable."
    },
    {
      "review_id": "b1650324f736399d",
      "product_id": "B08DBDSVBC",
      "rating": 2,
      "title": "Not for me",
      "text": "First, I don't like that 99% of the instruction is dedicated to Apple devices. 1% of instruction is dedicated to instruction for Android .\nThe product assumes adept and experienced consumer and presents somewhat smugly for the young users. Speaking from the perspective of a technologically challenged person, I would have been lost setting this up without input from teenagers."
    },
    {
      "review_id": "45a58a0175d0c345",
      "product_id": "B08DBDSVBC",
      "rating": 5,
      "title": "Very good sound quality",
      "text": "Very good sound quality"
    },
    {
      "review_id": "27e2f94f32a70ab8",
      "product_id": "B0BH6V8TTG",
      "rating": 5,
      "title": "Love Bose",
      "text": "I have the 35 II series and use it daily. I wanted an upgrade and the 45, now has an EQ option in the app, which the 35 II do not. This makes a big difference depending on audio type. Noise cancellation is much better."
    },
    {
      "review_id": "e757370bf19257ae",
      "product_id": "B0BH6V8TTG",
      "rating": 5,
      "title": "Best Quality audio",
      "text": "I like the noise cancelation over the other brands, super comfortable , and the price is kind of high but it's worth it"
    },
    {
      "review_id": "8d4c46aea25ea802",
      "product_id": "B0BH6V8TTG",
      "rating": 5,
      "title": "Love! Second Pair",
      "text": "Let’s just say I’m grateful for the Affirm payment option. I just moved from the west coast to the Midwest and it seems I lost my 5 y/o pair in the move. I was devastated, and it was quickly apparent I cannot function in public spaces without my QC45s"
    },
    {
      "review_id": "eeb1982812c859f1",
      "product_id": "B0BH6V8TTG",
      "rating": 4,
      "title": "Great product. A few glitches.",
      "text": "Form, fit and function are all superb. I only don't love that it takes a second to connect when first turned on because you have to listen to the announcement of every device you are connected to...as in, \"you are now connected to Mac Book, you are now connected to android phone, you are now connected to etc...\" Also, breaks connection intermittently. Every single device. But other than that, 1000% awesomeness."
    },
    {
      "review_id": "20562002d530dcbc",
      "product_id": "B0BH6V8TTG",
      "rating": 5,
      "title": "Great sound",
      "text": "My mom loves these headphones. They are easy for her to use, and she enjoys the sound they produce. She can't hear the others in the home while listening to music or a pod cast. Others can't hear what she is listening to."
    },
    {
      "review_id": "e0cf0679b55c9ac6",
      "product_id": "B0BH6V8TTG",
      "rating": 5,
      "title": "Most comfortable noise-cancelling headphones",
      "text": "Honestly, I prefer the Sony headphones noise-canceling and all-around ability to optimize for personal use. HOWEVER, Sony headphones are too large, so when I tip my head forward, the headphones fall forward in front of my face. So if you have a smaller head, you’ll prefer the Bose! But don’t expect the same noise-cancelling ability. Bose is great, but Sony is far superior!"
    },
    {
      "review_id": "91571b111bb68087",
      "product_id": "B0BH6V8TTG",
      "rating": 2,
      "title": "Great noise cancellation, terrible audio quality.",
      "text": "Bose is industry leading in noise cancellation, and this shows in these headphones. But I could not stand to listen to them for more than a couple minutes.\nI consider myself a bit of an “audio nut”, so take this with a grain of salt.\nThe bass is lacking. Not in amount, but in quality. It’s flat; that’s about all I can say.\nThe mids are decent, about what I expect, except for vocals. The vocals sound like someone sang it into a tin can.\nThe highs are whatever. Not good not bad, just fine.\nOne of the worst parts was the volume. I had to turn up the headphones to an uncomfortable amount to be able to hear the instruments and sounds I wanted, which was annoying.\nLastly, the clamping force on the sides of my head was a little too high. Around my ears felt raw and sore after just 20 minutes of use.\n\nAgain, take this with a grain of salt, but I would not recommend buying these unless you need them strictly for noise cancelling, or you find them on a ridiculous sale."
    },
    {
      "review_id": "05bcf35e0e3fd226",
      "product_id": "B0BH6V8TTG",
      "rating": 3,
      "title": "PLEASE READ LOL",
      "text": "Honest review :\nI’m honestly so disappointed, I read so many good reviews on these headphones but they honestly feel so cheap .. almost like the Panasonic 9$ headphones , they look heavy but are very very lightweight. They definitely are noise cancelling, but when I had my sibling try them on I can hear the music she was playing,conversation etc. They definitely DONT have that feature BEATS JBL or AIRPODS have u know that spatial audio or transparency setting . I’m a fan of all sorts of headphones but these are not it . I guess if u use them in the gym they are good but I’d say just that setting. You are better cashing out on BEATS or JBL or even apple . For 329$?? Definitely not worth it . Sound quality wasn’t loud enough I like to feel my music in my pulse lmao"
    },
    {
      "review_id": "generated_7a9ebbfb03f62c4476c0cd54e91df3152d108a679e353f7c4ce8831c354fd40e",
      "product_id": "B002MMY4WY",
      "rating": 5,
      "title": "Logitech Wave, but Simpler",
      "text": "What more can I say that hasn't already been about the Wave design? It's comfortable, ergonomic, easy to use, and helps me to get my keystrokes in faster. Sure, it's no IBM Model M or Unicomp Customizer, but it's the best quiet-key keyboard I've used so far.\n\nThe Unifying feature is neat, as I have the Anywhere Mouse MX (which is great, by the way), and makes hooking up lots of Logitech devices that also utilize this feature a cinch.\n\nNo need to get this if you already have the Wave, but if you don't, or you're absolutely dead-set on getting this for the extra features (via software) and Unifying setup, then this is a great keyboard to consider. It's easy to use right out of the box; had no issues whatsoever (batteries included, too)."
    },
    {
      "review_id": "generated_da31b796eb5e9c4a8339e801b03123d2c1ebc0e1cd639d5853182d985c3df3c1",
      "product_id": "B002MMY4WY",
      "rating": 3,
      "title": "Inconsistent pairing, loud but comfy when it works",
      "text": "Would be amazing. Feels great to type on. Loud (but not a problem) but the biggest issue is the very slow lag time when showing typing on the screen. Then I have to unplug the USB and try it again. It’s absolutely awful. I unplug the USB from the PC desktop at my job at least 15 times a day. Almost considering going back to my old uncomfortable keyboard. Good when it works"
    },
    {
      "review_id": "generated_554a4a14f0924c8a14fe9a96650b97db4fa5c518a70a4757f05208247e4c06c0",
      "product_id": "B002MMY4WY",
      "rating": 5,
      "title": "It's comfortable and easy for me to type on",
      "text": "Was leery about buying a wireless keyboard, but have had no problems so far. It's comfortable and easy for me to type on. I had only a slight learning curve with it was it was very similar in design to the Microsoft keyboard I was replacing."
    },
    {
      "review_id": "generated_e280ee6fe1ae43d2af12546ad54d7837167c703c557aa41fa36eb1991c4eae4f",
      "product_id": "B002MMY4WY",
      "rating": 1,
      "title": "Defective, Returned it and went and got another at the office store.",
      "text": "Product was defective"
    },
    {
      "review_id": "generated_ba33d9ef7f82073798e86f441dabe526ed998f00508cfa2302a1fae0cdff129e",
      "product_id": "B002MMY4WY",
      "rating": 5,
      "title": "Here's how to get it to work with Linux",
      "text": "To use the Logitech unifying receiver and link other compatible devices (as well as this keyboard) on a Linux computer, look for and install an app called \"Solaar.\" I found it just by doing a search with Synaptic package manager. Install both Solaar and the Solaar GUI (graphic user interface) to make it easier to use. Once you launch Solaar, you may have to unplug the Logitech unifying receiver and plug it back in to get Solaar to detect it. And you may have to switch the keyboard (or other compatible device) off and back on. Once Solaar is running, it puts a little hiding widget on the lower left of your display screen you can click on to access the settings.\n\nAs far as the keyboard goes, it works great and the key action is quiet and comfortable. I like the ergonomics too. I still use a wrist rest since I like more wrist elevation than what the built-in rest provides. All in all it's a good keyboard."
    },
    {
      "review_id": "generated_816536f552b0c10d8c8cf644d259d74e86a4660362227c6c5459ce00ab9e59c2",
      "product_id": "B002MMY4WY",
      "rating": 5,
      "title": "loved it so much bought 2nd one for home office",
      "text": "I bought 1st one for work. It's ergonomic shape is great for hours of typing. I had bought a cute much smaller keyboard for home office and hated it. Decided to buy a 2nd one of these since I loved it for work"
    },
    {
      "review_id": "generated_080c526a7061b018ec7c621b4f5e1f07c01f45e865f526cb72ffed69e4b77760",
      "product_id": "B002MMY4WY",
      "rating": 4,
      "title": "Nice ergonomic shape",
      "text": "I like it except for their is too much hard practice. Prefer rubbery feel"
    },
    {
      "review_id": "generated_8b93e05701f984a57183f89ff2c4d9591d9e9e15bc08302bc3490b7afaffd66d",
      "product_id": "B002MMY4WY",
      "rating": 2,
      "title": "Key board",
      "text": "Don't like it because it does not work had to return it."
    },
    {
      "review_id": "generated_c1e3788cc5039f7474a928870880800561214ffa03c7ead76c9b0949495b557b",
      "product_id": "B002MMY4WY",
      "rating": 1,
      "title": "Feels Cheap, Bad Connection, Bad for typists, Bad Key programming, Uses old software",
      "text": "I bought this because someone recommended it as a \"typists keyboard.\" The ergonomics are fine, but the keys are mushy and cheap as heck. I get a lot of repeats and pauses because the connection to the Logitech dongle is crappy. That seems to be special to this keyboard because the logitech mouse that uses the same dongle is right next to me and has no problem. It has a lot of programmable keys but there are too many limitations on what they can do. You can't program a key for multiple key presses. You can't program them to open different apps (maybe someone has figured out how to make the music key open spotify? Let me know). It just feels like it's a toy keyboard. Not meant for doing work. It is the worst keyboard I've used from Logitech. And that's saying something. I have a $20 Lenovo keyboard. I thought this would be an upgrade from the reviews, but I type 20% faster (I checked) with fewer errors on the Lenovo."
    },
    {
      "review_id": "generated_c98fe2a328eb89cd70a35f4f1ae38fe144a41b606def6a26dc9a819468d682ca",
      "product_id": "B002MMY4WY",
      "rating": 5,
      "title": "Great ergonomic keyboard",
      "text": "Great keyboard. I use every day for work and no issues. The underneath could use larger rubber pads as it can slide when using."
    },
    {
      "review_id": "generated_dafe3c15132637456e3d662749d0e104ddaa296d305d2dd0a15371a25be65cf1",
      "product_id": "B002MMY4WY",
      "rating": 5,
      "title": "They Made Improvements on My Favorite Keyboard",
      "text": "It's considered an unofficial part of my job to test and research the latest keyboards so that I can make recommendations for staff purchases. I also tend to go through keyboards fast because I'm always spraying them with disinfectant which tends to gum up the keys over time.\n\nI had already selected an earlier version of Logitech's wave keyboard for my office pc, an instant winner because of the comfortable feel (and sound) of the keyboard. This keyboard is just as good.\n\nWhat sets this keyboard apart from the earlier version is the Logitech Unifying receiver that allows me to run both the mouse and they keyboard off one tiny USB receiver. The receiver will accommodate four more COMPATIBLE devices which, for now, is only three mice and two keyboards. As all of my other peripherals are quite large (printers, scanners, etc.) I'm not sure how I'd come up with four more devices anyway.\n\nI was unable to download an updated XP driver for the keyboard from the Logitech website (the only driver option was Windows 7) forcing me to install from the included disk. Although the installation was smooth and programming the keyboard straightforward, I know that the install put a bunch of junk in startup and will be routinely connecting to the motherbase. I'm as paranoid about protecting my data as I am about germs."
    },
    {
      "review_id": "generated_3040f492c2988a4997d43326ccd6a147adadaeb43a366c1515206ca7684b682c",
      "product_id": "B002MMY4WY",
      "rating": 5,
      "title": "Highly Functional Quality Product. Near perfect!",
      "text": "This keyboard is great. It is comfortable and the keys have nice tactile feedback. Overall I would highly recommend this keyboard to anyone.\n\n I will list a few pros and cons.\nPro:\nHighly functional: There are 7 keys with icons for their default function (IE: webcam button, Calendar button) but these can be changed to whatever function you want. Additionally, there are 12 Function keys ( accessed with an Fn Key + F# key) These also can be reassigned to your desired function. This includes; open a web page, keystroke, open an app, open a file or a folder. ( 2 function keys are dedicated to the battery status and eject button and can not be overwritten)\n\nGamers: Keyboard software permits you to disable a few keys, including the Windows key! (Disable: Caps Lock, Windows Key, Scroll lock, Num lock and Insert)\n\nSleep Key. Need to step away from your work. There is a dedicated sleep key. One press. (does not wake it up)\n\nIt's ergonomic! It is very comfortable to type on this keyboard. It did not however improve my typing speed.\n\nPlug and play. (Note: you must download Logitech's setpoint software for advanced settings) but if you like the keyboard's functions as they are there is no installation required.\n\n1 USB port to rule them all! Logitech Unify USB software allows you to pair up to 6 wireless devices to the USB receiver. Meaning you only have to use 1 USB port if you have other Logitech devices such as a mouse. (Keyboard is also offered in a bundle)\n\nIncluded wristguard! (non-removable)\n\nTexture. The way things feel is very important to me. The wrist guard has a nice soft leather feel kin to a nice steering wheel cover. The keys have light texturing to them also. The various buttons are a smooth texture. The use of various textures on the keyboard really makes it look premium also.\n\nMedia Controls: Play/Pause/Stop/Volume\n\nCons:\n\nKey sound: The keys have a very plastic clack to them with no clicky. This is obviously not a mechanical keyboard but there is a noticeably hollow, loose, plastic cheap-sounding noise to this keyboard. This is not a deal-breaker. It is quiet enough that it is not disruptive to the office or sleeping partner.\n\nSize: This is not a compact keyboard by any means. The wristguard is not removable. (19x10 inches)\n\nNot backlit: This keyboard obviously is not RGB or backlit but it is worth mentioning. If your intended use is in low light or no light this is not ideal.\n\nKey spacing: As this is designed to be ergonomic and maximize comfort it is clearly designed with intent. However, transitioning from my work dell keyboard with very tight key spacing and the same with my laptop keyboard there is an adjustment required. Since it is designed so that each key is where your fingers naturally rest you will quickly adapt."
    },
    {
      "review_id": "generated_931819dec4ff286ff4afc6e230893cc2c6bb171488c4ca0f1abd64b96d1b0d0f",
      "product_id": "B002MMY4WY",
      "rating": 4,
      "title": "Keyboard!",
      "text": "Replacing the one I previously had."
    },
    {
      "review_id": "generated_6eacd36537642755c71b3412c5239d2193c98d6ca3e8aafcd7312c9d6894ba90",
      "product_id": "B002MMY4WY",
      "rating": 5,
      "title": "Great wireless keyboard",
      "text": "Has all the bells and whistles. You can even configures many of the keys for special use. Glad I bought this, have bigger hands, and can type fast, bigger fingers have plenty of room between keys for the faster typer."
    },
    {
      "review_id": "generated_db4cd86ebe7b7b10f927075a8d514f7b31a59cbbcdb0c928e4528400c45b33a4",
      "product_id": "B002MMY4WY",
      "rating": 1,
      "title": "Not even a year!",
      "text": "This is the third one of these I've purchased and within 6-8 months, most of the letters are worn off and they stick. I checked my order history and see that I've bought one of these annually. Keyboards used to last longer. Logitech used to be a good brand."
    },
    {
      "review_id": "generated_bbe8c157f8d25edd59b2a8f0ddee2285dbfe2c34f738c8fe5e62fec46fe2b506",
      "product_id": "B002MMY4WY",
      "rating": 5,
      "title": "I love this ergonomic keyboard",
      "text": "I like this keyboard. It is responsive. Has extra keys that are programmed for a number of functions that just make using the computer easier. This is a plug and play keyboard so there is no work setting it up."
    },
    {
      "review_id": "generated_808f7168cba8ebdb288d6ec770da163d2fee2309e58e4a527615645600637cf4",
      "product_id": "B002MMY4WY",
      "rating": 5,
      "title": "Great but...",
      "text": "I would have loved it even more, if this keyboard had:\n1) the ability to function seamlessly even if its USB receiver is attached to a USB hub. I use an MS Surface 3 which only has one USB port and its blocked because of this. Either I could this keyboard or the rest of my USB devices.\n2) Illuminated keys\nBut never mid... this is a great keyboard, very ergonomic and easy to use - shortcut keys are a value-add!"
    },
    {
      "review_id": "generated_73239445af9d52235ca6aee71d8bfbf815c0d3a35b91f431d7af9e9e38dfc1da",
      "product_id": "B002MMY4WY",
      "rating": 5,
      "title": "Well worth it",
      "text": "This keyboard works great. I really like how it's kind of rounded. It's easier to use."
    },
    {
      "review_id": "generated_d81aa62dead9a58ff35c82b2e11ed5cde7cd5b3d58c4845c36e53d7c27dd65a9",
      "product_id": "B002MMY4WY",
      "rating": 5,
      "title": "Great",
      "text": "This is a great keyboard. I am a Network Eng and spend a large part of my day on my computer. Love this keyboard. Easy on my hands and wrists with lots of built in options."
    },
    {
      "review_id": "generated_ae720e88b412d63eba2174980120ff75df879001d1e3e1b56866236bd3ec1847",
      "product_id": "B002MMY4WY",
      "rating": 5,
      "title": "Light, comfortable, easy to use",
      "text": "I like using a keyboard in my lap, and this one is well-balanced and intuitive."
    },
    {
      "review_id": "generated_71b7ea55f03c98dbd0279e52acc5eb7801b3c54b740f6e237f3b829b0f1203b1",
      "product_id": "B081C4XWXZ",
      "rating": 5,
      "title": "Only slightly less than Perfect!",
      "text": "My decision to purchase this keyboard was based on a glowing review by someone that had been using his keyboard for a few months. I was seeking a keyboard that was quiet and ergonomic (fatigue-diminishing and user-friendly). My old H-P keyboard, after 4+ years of daily use, had become so \"clattery\" that it was a nuisance; plus, I'd worn the lettering off several keys! This new keyboard, though not 'whisper-quiet,' is definitely quieter. It took 2 or 3 days to get used to the different hand positioning and smaller \"Enter\" key, but was a breeze to adjust to. I'm hoping now to find a quieter Mouse! Would recommend this to anyone using a keyboard for several hours each day and in need of the relief provided by a soft-touch keyboard and quieter keystrokes."
    },
    {
      "review_id": "generated_e6b79a8181474c4510815efab351d1ef49bcf4ba17a216818c43f3ccead23d41",
      "product_id": "B081C4XWXZ",
      "rating": 5,
      "title": "Five Stars",
      "text": "truly ergonomic,...i now need to go find a ergonomic desk"
    },
    {
      "review_id": "generated_75f423133151ae1348b10aaf89316c334505188a099b74ae5d05b5241a096fd7",
      "product_id": "B081C4XWXZ",
      "rating": 5,
      "title": "so I'm really happy not having wrist aches at the end of my ...",
      "text": "I'm loving this new keyboard. When I have to use my laptop or someone else's computer I realize how I miss my ergonomic keyboard at home. I type A LOT, every day, so I'm really happy not having wrist aches at the end of my day."
    },
    {
      "review_id": "generated_15b04e3250cd9c8c0448d00ee3e867f85c0ee949669b8cabf614e65977d19657",
      "product_id": "B081C4XWXZ",
      "rating": 5,
      "title": "Best keyboard ever",
      "text": "Best keyboard ever. I am on the computer all day and have been using this ever since it was released over a decade ago. LOVE IT!"
    },
    {
      "review_id": "generated_9c513f70b99cb6fbb2d1be06f3d665cbf31664b9e2a128a7ac307f2340287288",
      "product_id": "B081C4XWXZ",
      "rating": 5,
      "title": "Works good",
      "text": "I would ever go back to the traditional keyboard. Comfortable and price is ok."
    },
    {
      "review_id": "generated_f443572ca741ba8a1210fd402c0c0112e1928899e5cf939fc56778d4e523ac8e",
      "product_id": "B081C4XWXZ",
      "rating": 1,
      "title": "keys giving out",
      "text": "I have had this keyboard for only a few months and already various keys are not working (PgDn, PgUp, Home)"
    },
    {
      "review_id": "generated_0dabaf75630fa5eee2a9d95ff9698100ecd1bc04a36a15f341fbbadde67a6107",
      "product_id": "B081C4XWXZ",
      "rating": 5,
      "title": "Good luck finding a better keyboard for even 1/4 of ...",
      "text": "Good luck finding a better keyboard for even 1/4 of this keyboard's price.\nOn the other hand, I hate the [f Lock] button."
    },
    {
      "review_id": "generated_ee45929c043d3a59b406949b72ff100fc4fe95f7bc7d9c56d427d37bb6439648",
      "product_id": "B081C4XWXZ",
      "rating": 5,
      "title": "A Fantastic Upgrade",
      "text": "What's not to like? I upgraded from a Microsoft Ergonomic keyboard that was about 15 years old. Nothing wrong with it, but I wanted new. I think I actually paid much more 15 years ago than I did for this upgrade. Lots of competition out there. Why did I go back with to Microsoft? My first one lasts 15 years before I got tired of it. I actually use it at my school (I'm an elementary school teacher). It has a USB port plug instead of the old system round thing. The keyboard actually syncs in with our Microsoft operating system that our school district has just upgraded to. So my interface is smoother. It has a newer ascept of a wrist rest at the base of the keyboard. It is actually higher than the keyboard. Look at the pictures. Your wrist just rests in a perfectly natural place. This is so worth a few bucks. I know that iPads and other laptops make up the larger market now, but if you like desktops like I do; then you need to take care of your hands and wrists. This will fit the bill. I am very satisfied with this purchase."
    },
    {
      "review_id": "generated_4903d57c42b932be88ca89796afef7c96b36c89a8d8a4242f21279633fb3886d",
      "product_id": "B081C4XWXZ",
      "rating": 5,
      "title": "so comfortable to use!",
      "text": "I've tried other \"ergonomic\" keyboards, but this is my favorite; it is just as though it was invented for me. This is the fourth one I've ever used, I just wear them out (read: get too much stuff spilled on the inside and don't feel like cleaning it out again). Better price than other types of ergonomic keyboards, too. Please keep making them."
    },
    {
      "review_id": "generated_947d8b36d8a00b98182359cf9a379df0b066b9c530d1bb997e748b74eddebadf",
      "product_id": "B081C4XWXZ",
      "rating": 5,
      "title": "It really helps",
      "text": "I had one of these years ago and had forgotten how much it helps.\nI have been typing on this for the last hour and have not had the wrist discomfort I previously had with ten minutes on a flat keyboard.\nIt does take a little getting used to but it is time well spent.\nIt would be very hard to go back to a \"normal\" keyboard again.\nStrongly recommend."
    },
    {
      "review_id": "generated_1249e7d5726ac6017d4bc45e121dc84cfcbb608554865cdc1262226640521b38",
      "product_id": "B081C4XWXZ",
      "rating": 1,
      "title": "Key Top Labels Are Just Painted On and Wear Off Quickly",
      "text": "I have one major gripe about this keyboard. We've had it less than a year and the letters are already worn off of four of the keys. It's a quality issue; the key labels aren't etched into the key. they are just painted on top of the flat key. So they wear off very quickly. I expected better quality from a Microsoft keyboard and also for this price. Also, we aware that this keyboard is too big for many women - my wife has a hard time using it. Due to those two factors, I'll be replacing it soon."
    },
    {
      "review_id": "generated_6286848f8e94020a4f31c194794101adc98e7c0caf78e55e191cdd0cd998b64c",
      "product_id": "B081C4XWXZ",
      "rating": 5,
      "title": "I love the ergonomic design",
      "text": "This was a replacement to one I accidentally spilled coffee on. I love the ergonomic design, and it (other than not being liquid proof) has be surprisingly durable for my daily use and gaming."
    },
    {
      "review_id": "generated_63dff707cc00c7e0adf8d9773d1087c638441256fcd8a0423913dd04aad2f804",
      "product_id": "B081C4XWXZ",
      "rating": 2,
      "title": "Disappointing performance",
      "text": "I was so disappointed with this product. I do a lot of typing daily and end up with sore fingers and wrists. I need a keyboard that's more ergonomic, so I tried this due to its popularity and high ratings. Unfortunately, the keys are stiff and hard to push, especially the space bar. The angle isn't quite right (for me), so I had to stretch and strain my hands and fingers even more than on my straight keyboard. It was a total bust for me. My husband likes it, so he's going to use it at work. Otherwise, I would be returning it for a refund."
    },
    {
      "review_id": "generated_661057c4938a4194543d47e6e817fc3672ef4de63e8e5caae27f1ef806901789",
      "product_id": "B081C4XWXZ",
      "rating": 5,
      "title": "Great value and durability for a great product!",
      "text": "Between my work and my play, I generally spend well over 8 hours a day on a keyboard. This ergonomic keyboard proved less straining for me to use for long periods and has helped stave off the dreaded \"carpal tunnel syndrome\" so many heavy computer users fall prey to. I have just pain worn out two of these already. They stopped functioning as intended, but I definitely got my money's worth out of them first! I heartily recommend it!"
    },
    {
      "review_id": "generated_1a212c6b7200f4cda79ba5b44568557f3e011b1ad3aae956a223e7e58c750c3b",
      "product_id": "B081C4XWXZ",
      "rating": 1,
      "title": "Paid 32 bucks in 2015 and it's dead now in March 2021",
      "text": "3/26/2021: Now dropping my rating to 1 star, and you have to be off your rocker to pay more than ten times what I paid for it back in 2015. 32 bucks. Yep, that was the price here, and it was never great. Today it simply died. No fix would work, and I am in no way surprised. Overpriced, way overpriced junk!\n\n9/28/2016: I'm updating this review and dropping the star count here to 2 for a very simple reason: The letters on this keyboard are almost all worn off! I have had a lot of keyboards in the past 40 years, from typewriters to the dozen or more computers I've owned, and I have never, ever had a letter on a single keyboard wear off, or even get dim from use. So while this thing is comfy, and I definitely know where all the letters and numbers are on a keyboard, I find it unacceptable and frankly bizarre that the lettering would wear off on this keyboard. I'd recommend buying a different brand. Again, I've never ever seen this happen on any other keyboard."
    },
    {
      "review_id": "generated_533169d085b1c9ddbe20cfbbd50f51ea40c1f1b49d30141fd03f4ec81f7ac811",
      "product_id": "B081C4XWXZ",
      "rating": 3,
      "title": "Bad spacebar design",
      "text": "The spacebar is difficult to press from the left edge. Plus, the spacebar is quite noisy. All the other keys are soft and quiet, while the spacebar is loud and clicky.\n\nThe zoom control in the middle has no option to instead scroll."
    },
    {
      "review_id": "generated_800b9c56226d60b919700ab8a71fcecf185042bbca165f61e05c526d0b3d41f3",
      "product_id": "B081C4XWXZ",
      "rating": 5,
      "title": "Most comfortable keyboard I've found, compatible with Linux and Mac OS X through Yosemite",
      "text": "I'm a software engineer, I use my keyboard 10 hours a day most days. This keyboard eliminated most of the ergonomic pain I had, and is laid out in a way that lets me get a lot done in little time (many configurable shortcut buttons too!)\n\nWorks perfectly with both Linux (Xubuntu 13-14, Fedora 20) and Mac OS X Yosemite (it's not supposed to, but it does!)"
    },
    {
      "review_id": "generated_1681331f6defd23816ad7ec9f4abb4f10ec1ca17893167d84d740549ce34341e",
      "product_id": "B081C4XWXZ",
      "rating": 3,
      "title": "Comfortable, but not very robust.",
      "text": "This is a very comfortable keyboard to type on, but there is one major problem\n\nCompared to other rubber dome switch keyboards I've owned, this one is susceptible to damage from liquids like none other. Just a few drops of water will cause the plastic circuitry sheets in this thing to burn out and cause keys to register improperly. I've owned two of these and they both suffered the same fate.\n\nThis is in contrast to cheap throwaway keyboards that have had an entire glass of soda dumped on them and been no worse for wear after a good inside and out wipe down.\n\nI used Microsoft Natural Ergonomic keyboards for years but I just couldn't justify purchasing another. I'm not expecting a keyboard to hold up to a monsoon, but a few drops of water?\n\nI still have the previous Natural Ergo model from Microsoft as my backup keyboard. Works fine after several years of use. I only replaced it with the 4000 model because the cord was fraying."
    },
    {
      "review_id": "generated_1424a5987c5079a8cf004eb2766ce5c0dc5510c25f8cdb03f4157625c2d806ea",
      "product_id": "B081C4XWXZ",
      "rating": 5,
      "title": "Five Stars",
      "text": "Good price on brand name keyboard"
    },
    {
      "review_id": "generated_3f6a389a08978f1ee61064a647a351ea2a7eb5a2008568b012f7d4fb0a6a7bed",
      "product_id": "B081C4XWXZ",
      "rating": 4,
      "title": "How to program a macro button to make the computer sleep (Windows 10 instructions)",
      "text": "I figured out how to create a sleep button by programming a macro key like this in Window 10:\n1. Open Start --> All Apps --> Microsoft Mouse and Keyboard (the software installed with the keyboard, download from microsoft.com if you don't have it)\n2. Open the keyboard settings, then select a button to assign a macro for (e.g. for the Web / Home button)\n3. Select the \"Macro\" radio button and click to create a new one, name the new macro \"sleep\"\n4. Insert the Windows Key via the \"Insert Special Keys\" droplist\n5. Double click the Windows key to select it, then right click and choose \"split\"\n6. Insert an \"X\" between the Windows Keys- this will open the right click start menu\n7. Move to the end of the macro, then type arrow keys up, up, right, down, and then press enter- this selects the \"sleep\" menu item\n8. See the picture for how things should look in your editor when done\n9. Exit the macro editor and test your new sleep key!\n\nPlease click on the helpful link so that other people can find this info. It took me a while to figure out- there's no command line task to make this happen- only to hibernate- and 3rd party software isn't safe.\n\nOh yeah, and as this is a review- the keyboard is great otherwise, been using it for years."
    }
  ],
  "analysis": [
    {
      "review_id": "generated_a614562d714239610e610e760b2e895e33f9461b83bc32dfc8eff72be074ad8d",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_f302ad00bf126606674803aafd434c6e75d75f56ce3e543acd5eae3e5d324c1d",
      "aspect": "sound",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_1f8ad6a7522f0be3fa83dc82f48dcd229f41acee9e603cb3f2a08ce70e93574f",
      "aspect": "sound",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_1f8ad6a7522f0be3fa83dc82f48dcd229f41acee9e603cb3f2a08ce70e93574f",
      "aspect": "battery",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_42aa0f5cd58521ae29c00d427bc9bdfaa005912c99894d4d570a3977cddc0824",
      "aspect": "sound",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_42aa0f5cd58521ae29c00d427bc9bdfaa005912c99894d4d570a3977cddc0824",
      "aspect": "comfort",
      "sentiment": "neg"
    },
    {
      "review_id": "generated_fd58529a283628230eacc3d08676f0b5afbac403319dd0f2459652856210bae4",
      "aspect": "sound",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_fd58529a283628230eacc3d08676f0b5afbac403319dd0f2459652856210bae4",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_2f75b69edbeac08545e84f3d6052976a02217903a777727e85307f644f6d7d0a",
      "aspect": "sound",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_defa7d7896a5fdbc2a78991572053752cc37c83849a8434f4525526bcbca1f9b",
      "aspect": "sound",
      "sentiment": "neg"
    },
    {
      "review_id": "generated_0a577490d49d21e36349bdea74bdf79467aa336eaaa228511e21b820cea6320e",
      "aspect": "sound",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_0a577490d49d21e36349bdea74bdf79467aa336eaaa228511e21b820cea6320e",
      "aspect": "battery",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_283ec80c0abdaaa44880c8dfb4730d59990f908680e9148347a9039fd0fd4165",
      "aspect": "sound",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_2b7c6e5a03890ff25a8810a411450a45ce8c3c6bb02a9dd43658a1b0fd8960bb",
      "aspect": "battery",
      "sentiment": "neg"
    },
    {
      "review_id": "generated_a882d0cb5c99976f0e17ec01e38ca1e7ff37db18cda01b17cc88359b3e61dd69",
      "aspect": "sound",
      "sentiment": "pos"
    },
    {
      "review_id": "c980459acb59ae8e",
      "aspect": "sound",
      "sentiment": "pos"
    },
    {
      "review_id": "8887dcf4d9193734",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "8887dcf4d9193734",
      "aspect": "comfort",
      "sentiment": "neg"
    },
    {
      "review_id": "8887dcf4d9193734",
      "aspect": "battery",
      "sentiment": "pos"
    },
    {
      "review_id": "d876b57c490552dd",
      "aspect": "sound",
      "sentiment": "pos"
    },
    {
      "review_id": "d876b57c490552dd",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "dffc673d0bd1d9d5",
      "aspect": "comfort",
      "sentiment": "neg"
    },
    {
      "review_id": "e78796c6823b08f7",
      "aspect": "sound",
      "sentiment": "pos"
    },
    {
      "review_id": "e78796c6823b08f7",
      "aspect": "battery",
      "sentiment": "pos"
    },
    {
      "review_id": "7f53becb3194944b",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "b26446b371037650",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "45a58a0175d0c345",
      "aspect": "sound",
      "sentiment": "pos"
    },
    {
      "review_id": "27e2f94f32a70ab8",
      "aspect": "sound",
      "sentiment": "pos"
    },
    {
      "review_id": "e757370bf19257ae",
      "aspect": "sound",
      "sentiment": "pos"
    },
    {
      "review_id": "e757370bf19257ae",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "eeb1982812c859f1",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "20562002d530dcbc",
      "aspect": "sound",
      "sentiment": "pos"
    },
    {
      "review_id": "e0cf0679b55c9ac6",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "91571b111bb68087",
      "aspect": "sound",
      "sentiment": "neg"
    },
    {
      "review_id": "91571b111bb68087",
      "aspect": "comfort",
      "sentiment": "neg"
    },
    {
      "review_id": "05bcf35e0e3fd226",
      "aspect": "sound",
      "sentiment": "neg"
    },
    {
      "review_id": "generated_7a9ebbfb03f62c4476c0cd54e91df3152d108a679e353f7c4ce8831c354fd40e",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_7a9ebbfb03f62c4476c0cd54e91df3152d108a679e353f7c4ce8831c354fd40e",
      "aspect": "feel",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_da31b796eb5e9c4a8339e801b03123d2c1ebc0e1cd639d5853182d985c3df3c1",
      "aspect": "feel",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_da31b796eb5e9c4a8339e801b03123d2c1ebc0e1cd639d5853182d985c3df3c1",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_554a4a14f0924c8a14fe9a96650b97db4fa5c518a70a4757f05208247e4c06c0",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_e280ee6fe1ae43d2af12546ad54d7837167c703c557aa41fa36eb1991c4eae4f",
      "aspect": "durability",
      "sentiment": "neg"
    },
    {
      "review_id": "generated_ba33d9ef7f82073798e86f441dabe526ed998f00508cfa2302a1fae0cdff129e",
      "aspect": "feel",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_ba33d9ef7f82073798e86f441dabe526ed998f00508cfa2302a1fae0cdff129e",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_816536f552b0c10d8c8cf644d259d74e86a4660362227c6c5459ce00ab9e59c2",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_080c526a7061b018ec7c621b4f5e1f07c01f45e865f526cb72ffed69e4b77760",
      "aspect": "feel",
      "sentiment": "neg"
    },
    {
      "review_id": "generated_080c526a7061b018ec7c621b4f5e1f07c01f45e865f526cb72ffed69e4b77760",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_8b93e05701f984a57183f89ff2c4d9591d9e9e15bc08302bc3490b7afaffd66d",
      "aspect": "durability",
      "sentiment": "neg"
    },
    {
      "review_id": "generated_c1e3788cc5039f7474a928870880800561214ffa03c7ead76c9b0949495b557b",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_c1e3788cc5039f7474a928870880800561214ffa03c7ead76c9b0949495b557b",
      "aspect": "feel",
      "sentiment": "neg"
    },
    {
      "review_id": "generated_c1e3788cc5039f7474a928870880800561214ffa03c7ead76c9b0949495b557b",
      "aspect": "durability",
      "sentiment": "neg"
    },
    {
      "review_id": "generated_dafe3c15132637456e3d662749d0e104ddaa296d305d2dd0a15371a25be65cf1",
      "aspect": "feel",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_dafe3c15132637456e3d662749d0e104ddaa296d305d2dd0a15371a25be65cf1",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_3040f492c2988a4997d43326ccd6a147adadaeb43a366c1515206ca7684b682c",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_3040f492c2988a4997d43326ccd6a147adadaeb43a366c1515206ca7684b682c",
      "aspect": "feel",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_3040f492c2988a4997d43326ccd6a147adadaeb43a366c1515206ca7684b682c",
      "aspect": "feel",
      "sentiment": "neg"
    },
    {
      "review_id": "generated_3040f492c2988a4997d43326ccd6a147adadaeb43a366c1515206ca7684b682c",
      "aspect": "durability",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_6eacd36537642755c71b3412c5239d2193c98d6ca3e8aafcd7312c9d6894ba90",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_db4cd86ebe7b7b10f927075a8d514f7b31a59cbbcdb0c928e4528400c45b33a4",
      "aspect": "durability",
      "sentiment": "neg"
    },
    {
      "review_id": "generated_bbe8c157f8d25edd59b2a8f0ddee2285dbfe2c34f738c8fe5e62fec46fe2b506",
      "aspect": "feel",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_808f7168cba8ebdb288d6ec770da163d2fee2309e58e4a527615645600637cf4",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_73239445af9d52235ca6aee71d8bfbf815c0d3a35b91f431d7af9e9e38dfc1da",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_d81aa62dead9a58ff35c82b2e11ed5cde7cd5b3d58c4845c36e53d7c27dd65a9",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_ae720e88b412d63eba2174980120ff75df879001d1e3e1b56866236bd3ec1847",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_71b7ea55f03c98dbd0279e52acc5eb7801b3c54b740f6e237f3b829b0f1203b1",
      "aspect": "feel",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_71b7ea55f03c98dbd0279e52acc5eb7801b3c54b740f6e237f3b829b0f1203b1",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_e6b79a8181474c4510815efab351d1ef49bcf4ba17a216818c43f3ccead23d41",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_75f423133151ae1348b10aaf89316c334505188a099b74ae5d05b5241a096fd7",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_9c513f70b99cb6fbb2d1be06f3d665cbf31664b9e2a128a7ac307f2340287288",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_f443572ca741ba8a1210fd402c0c0112e1928899e5cf939fc56778d4e523ac8e",
      "aspect": "durability",
      "sentiment": "neg"
    },
    {
      "review_id": "generated_ee45929c043d3a59b406949b72ff100fc4fe95f7bc7d9c56d427d37bb6439648",
      "aspect": "durability",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_ee45929c043d3a59b406949b72ff100fc4fe95f7bc7d9c56d427d37bb6439648",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_4903d57c42b932be88ca89796afef7c96b36c89a8d8a4242f21279633fb3886d",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_947d8b36d8a00b98182359cf9a379df0b066b9c530d1bb997e748b74eddebadf",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_1249e7d5726ac6017d4bc45e121dc84cfcbb608554865cdc1262226640521b38",
      "aspect": "durability",
      "sentiment": "neg"
    },
    {
      "review_id": "generated_1249e7d5726ac6017d4bc45e121dc84cfcbb608554865cdc1262226640521b38",
      "aspect": "comfort",
      "sentiment": "neg"
    },
    {
      "review_id": "generated_6286848f8e94020a4f31c194794101adc98e7c0caf78e55e191cdd0cd998b64c",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_6286848f8e94020a4f31c194794101adc98e7c0caf78e55e191cdd0cd998b64c",
      "aspect": "durability",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_63dff707cc00c7e0adf8d9773d1087c638441256fcd8a0423913dd04aad2f804",
      "aspect": "feel",
      "sentiment": "neg"
    },
    {
      "review_id": "generated_63dff707cc00c7e0adf8d9773d1087c638441256fcd8a0423913dd04aad2f804",
      "aspect": "comfort",
      "sentiment": "neg"
    },
    {
      "review_id": "generated_661057c4938a4194543d47e6e817fc3672ef4de63e8e5caae27f1ef806901789",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_661057c4938a4194543d47e6e817fc3672ef4de63e8e5caae27f1ef806901789",
      "aspect": "durability",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_1a212c6b7200f4cda79ba5b44568557f3e011b1ad3aae956a223e7e58c750c3b",
      "aspect": "durability",
      "sentiment": "neg"
    },
    {
      "review_id": "generated_1a212c6b7200f4cda79ba5b44568557f3e011b1ad3aae956a223e7e58c750c3b",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_533169d085b1c9ddbe20cfbbd50f51ea40c1f1b49d30141fd03f4ec81f7ac811",
      "aspect": "feel",
      "sentiment": "neg"
    },
    {
      "review_id": "generated_533169d085b1c9ddbe20cfbbd50f51ea40c1f1b49d30141fd03f4ec81f7ac811",
      "aspect": "feel",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_800b9c56226d60b919700ab8a71fcecf185042bbca165f61e05c526d0b3d41f3",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_1681331f6defd23816ad7ec9f4abb4f10ec1ca17893167d84d740549ce34341e",
      "aspect": "comfort",
      "sentiment": "pos"
    },
    {
      "review_id": "generated_1681331f6defd23816ad7ec9f4abb4f10ec1ca17893167d84d740549ce34341e",
      "aspect": "durability",
      "sentiment": "neg"
    },
    {
      "review_id": "generated_3f6a389a08978f1ee61064a647a351ea2a7eb5a2008568b012f7d4fb0a6a7bed",
      "aspect": "durability",
      "sentiment": "pos"
    }
  ]
};
