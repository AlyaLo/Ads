//import Phaser, { Tilemaps } from 'phaser'

import girl1 from './assets/girl/Girls_calm.png'
import girl2 from './assets/girl/Girls_sad.png'
import girl3 from './assets/girl/Girls_shy.png'
import girl4 from './assets/girl/Girls_joy.png'

import girlFirstDressDefault from './assets/girl/GirlFirstDressDefault.png'
import girlFistDressJoy from './assets/girl/GirlFirstDressJoy.png'

import girlSecondDressDefault from './assets/girl/GirlSecondDressDefault.png'
import girlSecondDressJoy from './assets/girl/GirlSecondDressJoy.png'

import girlFirstDressFirstBagFlirty from './assets/girl/GirlFirstDressFirstBagFlirty.png'
import girlFirstDressSecondBagJoy from './assets/girl/GirlFirstDressSecondBagJoy.png'
import girlFirstDressSecondBagSurprised from './assets/girl/GirlFirstDressSecondBagSurprised.png'

import girlSecondDressFirstBagJoy from './assets/girl/GirlSecondDressFirstBagJoy.png'
import girlSecondDressFirstBagSurprised from './assets/girl/GirlSecondDressFirstBagSurprised.png'
import girlSecondDressSecondBagFlirty from './assets/girl/GirlSecondDressSecondBagFlirty.png'

import girlFirstDressFirstBagGlassesDefault from './assets/girl/GirlFirstDressFirstBagGlassesDefault.png'
import girlFirstDressFirstBagGlassesJoy from './assets/girl/GirlFirstDressFirstBagGlassesJoy.png'
import girlFirstDressFirstBagNecklaceJoy from './assets/girl/GirlFirstDressFirstBagNecklaceJoy.png'
import girlFirstDressFirstBagNecklaceFlirty from './assets/girl/GirlFirstDressFirstBagNecklaceFlirty.png'

import girlFirstDressSecondBagNecklaceDefault from './assets/girl/GirlFirstDressSecondBagNecklaceDefault.png'
import girlFirstDressSecondBagNecklaceSurprised from './assets/girl/GirlFirstDressSecondBagNecklaceSurprised.png'
import girlFirstDressSecondBagGlassesDefault from './assets/girl/GirlFirstDressSecondBagGlassesDefault.png'
import girlFirstDressSecondBagGlassesFlirty from './assets/girl/GirlFirstDressSecondBagGlassesFlirty.png'

import girlSecondDressFirstBagGlassesDefault from './assets/girl/GirlSecondDressFirstBagGlassesDefault.png'
import girlSecondDressFirstBagGlassesFlirty from './assets/girl/GirlSecondDressFirstBagGlassesFlirty.png'
import girlSecondDressFirstBagNecklaceSurprised from './assets/girl/GirlSecondDressFirstBagNecklaceSurprised.png'
import girlSecondDressFirstBagNecklaceJoy from './assets/girl/GirlSecondDressFirstBagNecklaceJoy.png'

import girlSecondDressSecondBagNecklaceSurprised from './assets/girl/GirlSecondDressSecondBagNecklaceSurprised.png'
import girlSecondDressSecondBagNecklaceJoy from './assets/girl/GirlSecondDressSecondBagNecklaceJoy.png'
import girlSecondDressSecondBagGlassesDefault from './assets/girl/GirlSecondDressSecondBagGlassesDefault.png'
import girlSecondDressSecondBagGlassesFlirty from './assets/girl/GirlSecondDressSecondBagGlassesFlirty.png'

import girlFirstDressSecondBagNecklaceJoy from './assets/girl/GirlFirstDressSecondBagNecklaceJoy.png'
import girlFirstDressSecondBagNecklaceFlirty from './assets/girl/GirlFirstDressSecondBagNecklaceFlirty.png'
import girlFirstDressSecondBagGlassesJoy from './assets/girl/GirlFirstDressSecondBagGlassesJoy.png'

import girlSecondDressSecondBagNecklaceSad from './assets/girl/GirlSecondDressSecondBagNecklaceSad.png'
import girlSecondDressSecondBagGlassesSad from './assets/girl/GirlSecondDressSecondBagGlassesSad.png'
import girlSecondDressFirstBagGlassesSad from './assets/girl/GirlSecondDressFirstBagGlassesSad.png'
import girlSecondDressFirstBagNecklaceSad from './assets/girl/GirlSecondDressFirstBagNecklaceSad.png'

import firstLocation from './assets/FirstLocation.png'
import secondLocation from './assets/SecondLocation.png'

import firstLocationLittle from './assets/FirstLocationLittle.png'
import secondLocationLittle from './assets/SecondLocationLittle.png'

import boy from './assets/Boy1.png'
import boy2 from './assets/Boy_flirty.png'
import boyAngry from './assets/BoyAngry.png'

import bedroom from './assets/bedroom.png'
import blackOverlay from './assets/Rectangle 1.png'

import lexy from './assets/girl/Lexy.png'
import paul from './assets/Paul.png'
import paul2 from './assets/Paul2.png'
import paul3 from './assets/Paul3.png'

import progressBar from './assets/ProgressBar0.png'
import progressRectangle from './assets/ProgressRect.png'

import rectangle from './assets/Rectangle2.png'
import rectanglePressed from './assets/RectanglePressed.png'

import rectanglePlayNow from './assets/RectanglePlayNow.png'
import textPlayNow from './assets/Play Now.png'

import rectangleText from './assets/Rectangle3.png'

import text from './assets/Choose your dress.png'
import textBag from './assets/Choose your bag.png'
import textAccessory from './assets/Choose your accessory.png'
import textPlace from './assets/Choose your place.png'

import dress1 from './assets/clothes1.png'
import dress2 from './assets/clothes2.png'

import bag1 from './assets/firstBag.png'
import bag2 from './assets/secondBag.png'

import glasses from './assets/glasses.png'
import firstNecklace from './assets/fNecklace.png'
import secondNecklace from './assets/sNecklace.png'


class MyGame extends Phaser.Scene{

    constructor (){
        super();
    }

    preload (){

        this.load.image('girl', girl1);
        this.load.image('girl2', girl2);
        this.load.image('girl3', girl3);
        this.load.image('girl4', girl4);

        this.load.image('girlFirstDressDefault', girlFirstDressDefault);
        this.load.image('girlFistDressJoy', girlFistDressJoy);
        this.load.image('girlSecondDressDefault', girlSecondDressDefault);
        this.load.image('girlSecondDressJoy', girlSecondDressJoy);

        this.load.image('girlFirstDressFirstBagFlirty', girlFirstDressFirstBagFlirty);
        this.load.image('girlFirstDressSecondBagJoy', girlFirstDressSecondBagJoy);
        this.load.image('girlFirstDressSecondBagSurprised', girlFirstDressSecondBagSurprised);

        this.load.image('girlSecondDressFirstBagJoy', girlSecondDressFirstBagJoy);
        this.load.image('girlSecondDressFirstBagSurprised', girlSecondDressFirstBagSurprised);
        this.load.image('girlSecondDressSecondBagFlirty', girlSecondDressSecondBagFlirty);

        this.load.image('girlFirstDressFirstBagGlassesDefault', girlFirstDressFirstBagGlassesDefault);
        this.load.image('girlFirstDressFirstBagGlassesJoy', girlFirstDressFirstBagGlassesJoy);
        this.load.image('girlFirstDressFirstBagNecklaceJoy', girlFirstDressFirstBagNecklaceJoy);
        this.load.image('girlFirstDressFirstBagNecklaceFlirty', girlFirstDressFirstBagNecklaceFlirty);

        this.load.image('girlFirstDressSecondBagNecklaceDefault', girlFirstDressSecondBagNecklaceDefault);
        this.load.image('girlFirstDressSecondBagNecklaceSurprised', girlFirstDressSecondBagNecklaceSurprised);
        this.load.image('girlFirstDressSecondBagGlassesDefault', girlFirstDressSecondBagGlassesDefault);
        this.load.image('girlFirstDressSecondBagGlassesFlirty', girlFirstDressSecondBagGlassesFlirty);

        this.load.image('girlSecondDressFirstBagGlassesDefault', girlSecondDressFirstBagGlassesDefault);
        this.load.image('girlSecondDressFirstBagGlassesFlirty', girlSecondDressFirstBagGlassesFlirty);
        this.load.image('girlSecondDressFirstBagNecklaceSurprised', girlSecondDressFirstBagNecklaceSurprised);
        this.load.image('girlSecondDressFirstBagNecklaceJoy', girlSecondDressFirstBagNecklaceJoy);
        
        this.load.image('girlSecondDressSecondBagNecklaceSurprised', girlSecondDressSecondBagNecklaceSurprised);
        this.load.image('girlSecondDressSecondBagNecklaceJoy', girlSecondDressSecondBagNecklaceJoy);
        this.load.image('girlSecondDressSecondBagGlassesDefault', girlSecondDressSecondBagGlassesDefault);
        this.load.image('girlSecondDressSecondBagGlassesFlirty', girlSecondDressSecondBagGlassesFlirty);

        this.load.image('girlFirstDressSecondBagNecklaceJoy', girlFirstDressSecondBagNecklaceJoy);
        this.load.image('girlFirstDressSecondBagNecklaceFlirty', girlFirstDressSecondBagNecklaceFlirty);
        this.load.image('girlFirstDressSecondBagGlassesJoy', girlFirstDressSecondBagGlassesJoy);

        this.load.image('girlSecondDressSecondBagNecklaceSad', girlSecondDressSecondBagNecklaceSad);
        this.load.image('girlSecondDressSecondBagGlassesSad', girlSecondDressSecondBagGlassesSad);
        this.load.image('girlSecondDressFirstBagGlassesSad', girlSecondDressFirstBagGlassesSad);
        this.load.image('girlSecondDressFirstBagNecklaceSad', girlSecondDressFirstBagNecklaceSad);

        this.load.image('boy', boy);
        this.load.image('boy2', boy2);
        this.load.image('boyAngry', boyAngry);

        this.load.image('bedroom', bedroom);
        this.load.image('overlay', blackOverlay);

        this.load.image('progressBar', progressBar);
        this.load.image('progressRectangle', progressRectangle);

        this.load.image('rectangle', rectangle);
        this.load.image('rectanglePressed', rectanglePressed);

        this.load.image('rectanglePlayNow', rectanglePlayNow);
        this.load.image('textPlayNow', textPlayNow);

        this.load.image('rectangleText', rectangleText);
        
        this.load.image('text', text);
        this.load.image('textBag', textBag);
        this.load.image('textAccessory', textAccessory);
        this.load.image('textPlace', textPlace);

        this.load.image('dress1', dress1);
        this.load.image('dress2', dress2);

        this.load.image('firstBag', bag1);
        this.load.image('secondBag', bag2);

        this.load.image('glasses', glasses);
        this.load.image('firstNecklace', firstNecklace);
        this.load.image('secondNecklace', secondNecklace);

        this.load.image('firstLocation', firstLocation);
        this.load.image('secondLocation', secondLocation);

        this.load.image('firstLocationLittle', firstLocationLittle);
        this.load.image('secondLocationLittle', secondLocationLittle);

        this.load.image('Lexy', lexy);
        this.load.image('Paul', paul);
        this.load.image('Paul2', paul2);
        this.load.image('Paul3', paul3);
    }
      
    create (){
        const bedroom = this.add.image(300, 450, 'bedroom');
        const blackOverlay = this.add.image(300, 450, 'overlay');
        
        let isFirstDress = false;
        let isFirstBag = false;

        let scene = 0;
        
        //intro boy emotion
        this.anims.create({
            key:'boyEmotions',
            frames: [
                {key: 'boy'},
                {key: 'boy2'},
                {key: 'boy'},
                {key: 'boy2'},
            ],

            frameRate: 1.5,
            repeat: 0,

            hideOnComplete: true
        });
        
         //final boy emotion(Amazing)
        this.anims.create({
            key:'boyEmotionsEnd',
            frames: [
                {key: 'boy'},
                {key: 'boy2'},
            ],

            frameRate: 1.5,
            repeat: 0,
        });
        

        //intro girl emotion
        this.anims.create({
            key:'girlEmotions',
            frames: [
                {key: 'girl4'},
                {key: 'girl'},
                {key: 'girl4'},
            ],

            frameRate: 1.5,
            repeat: 0,

            hideOnComplete: true,
        });
        
        //emotion choose first dress
        this.anims.create({
            key:'girlEmotionsFirstDress',
            frames: [
                {key: 'girlFirstDressDefault'},
                {key: 'girlFistDressJoy'},
                {key: 'girlFirstDressDefault'},
            ],

            frameRate: 1.5,
            repeat: 0,
        })

        //emotion choose second dress
        this.anims.create({
            key:'girlEmotionsSecondDress',
            frames: [
                {key: 'girlSecondDressDefault'},
                {key: 'girlSecondDressJoy'},
                {key: 'girlSecondDressDefault'},
            ],

            frameRate: 1.5,
            repeat: 0,
        })

        //emotion girl with firts dress wear second bag
        this.anims.create({
            key:'girlEmotionsFirstDressSecondBag',
            frames: [  
                {key: 'girlFirstDressSecondBagSurprised'},
                {key: 'girlFirstDressSecondBagJoy'},
            ],

            frameRate: 1.5,
            repeat: 0,
        })

        //emotion girl with second dress wear first bag
        this.anims.create({
            key:'girlEmotionsSecondDressFirstBag',
            frames: [
                {key: 'girlSecondDressFirstBagSurprised'},
                {key: 'girlSecondDressFirstBagJoy'},
            ],

            frameRate: 1.5,
            repeat: 0,
        })

        //emotion girl with 1 dress and 1 bag wear glasses
        this.anims.create({
            key: 'girlEmotionsFirstDressFirstBagGlasses',
            frames: [
                {key: 'girlFirstDressFirstBagGlassesDefault'},
                {key:'girlFirstDressFirstBagGlassesJoy'},
            ],

            frameRate: 1.5,
            repeat: 0,
        })

        //emotion girl with 1 dress and 1 bag wear necklace
        this.anims.create({
            key: 'girlEmotionsFirstDressFirstBagNecklace',
            frames: [
                {key: 'girlFirstDressFirstBagNecklaceJoy'},
                {key:'girlFirstDressFirstBagNecklaceFlirty'},
                {key: 'girlFirstDressFirstBagNecklaceJoy'},
            ],

            frameRate: 1.5,
            repeat: 0,
        })

        //emotion girl with 1 dress and 2 bag wear Glasses
        this.anims.create({
            key: 'girlEmotionsFirstDressSecondBagGlasses',
            frames: [
                {key:'girlFirstDressSecondBagGlassesFlirty'},
                {key: 'girlFirstDressSecondBagGlassesDefault'},
            ],

            frameRate: 1.5,
            repeat: 0,
        })

        //emotion girl with 1 dress and 2 bag wear necklace
        this.anims.create({
            key: 'girlEmotionsFirstDressSecondBagNecklace',
            frames: [
                {key: 'girlFirstDressSecondBagNecklaceDefault'},
                {key:'girlFirstDressSecondBagNecklaceSurprised'},
                {key: 'girlFirstDressSecondBagNecklaceDefault'},
            ],
           

            frameRate: 1.5,
            repeat: 0,
        })

        //emotion girl with 2 dress and 1 bag wear glasses
        this.anims.create({
            key:'girlEmotionsSecondDressFirstBagGlasses',
            frames: [
                {key:'girlSecondDressFirstBagGlassesFlirty'},
                {key: 'girlSecondDressFirstBagGlassesDefault'},
            ],
           

            frameRate: 1.5,
            repeat: 0,
        })

        //emotion girl with 2 dress and 1 bag wear necklace
        this.anims.create({
            key:'girlEmotionsSecondDressFirstBagNecklace',
            frames: [
                {key:'girlSecondDressFirstBagNecklaceSurprised'},
                {key: 'girlSecondDressFirstBagNecklaceJoy'},
            ],
           

            frameRate: 1.5,
            repeat: 0,
        })

        //emotion girl with 2 dress and 2 bag wear glasses
        this.anims.create({
            key:'girlEmotionsSecondDressSecondBagGlasses',
            frames: [
                {key:'girlSecondDressSecondBagGlassesFlirty'},
                {key: 'girlSecondDressSecondBagGlassesDefault'},
            ],
           

            frameRate: 1.5,
            repeat: 0,
        })

        //emotion girl with 2 dress and 2 bag wear necklace
        this.anims.create({
            key:'girlEmotionsSecondDressSecondBagNecklace',
            frames: [
                {key: 'girlSecondDressSecondBagNecklaceJoy'},
                {key:'girlSecondDressSecondBagNecklaceSurprised'},
                {key: 'girlSecondDressSecondBagNecklaceJoy'},
            ],
           

            frameRate: 1.5,
            repeat: 0,
        })

        //emotion girl 1 dress 2 bag glasses END
        this.anims.create({
            key: 'girlEmotionsFirstDressSecondBagGlassesEND',
            frames: [
                {key: 'girlFirstDressSecondBagGlassesJoy'},
                {key:'girlFirstDressSecondBagGlassesFlirty'},
            ],

            frameRate: 1.5,
            repeat: 0,
        })

         //emotion girl 1 dress 2 bag necklace END
         this.anims.create({
            key: 'girlEmotionsFirstDressSecondBagNecklaceEND',
            frames: [
                {key: 'girlFirstDressSecondBagNecklaceJoy'},
                {key:'girlFirstDressSecondBagNecklaceFlirty'},
            ],

            frameRate: 1.5,
            repeat: 0,
        })

        let boyAnim = this.add.sprite(0, 600, 'boy');
        
        boyAnim.play('boyEmotions').on('animationcomplete', () => {
            
            replicaBoy.destroy();
            
            let girlFirstAnim =  this.add.sprite(600, 640, 'girl');
          
            girlFirstAnim.play('girlEmotions').on('animationcomplete', () => {
                let girl = this.add.image(300, 640, 'girl');
                replicaGirl.destroy(); 
                blackOverlay.destroy();
                
                let rectangle1 =  this.physics.add.staticGroup();
                let rectanglePressed;
                let rect, rect2;

                rect = rectangle1.create(165, 725, 'rectangle').setInteractive();
                rect2 = rectangle1.create(430, 725, 'rectangle').setInteractive();
                
                let bagFirst, bagSecond;
                let glasses, firstNecklace, secondNecklace;
                let firstLocation, secondLocation;

                let rectanglePlayNow, textPlayNow;

                let dress1 = this.add.image(165, 725, 'dress1');
                let dress2 = this.add.image(430, 725, 'dress2');

                let rectangleText = this.add.image(300, 45, 'rectangleText');
                let text = this.add.image(300, 45, 'text');
                
                let progressBar, progressRectangle, progressRectangle2, progressRectangle3;
                let timer;

                let girlEnd;
                //FIRST CHOICE
                rect.on('pointerdown', () => {
                    switch(scene){
                        case 0:
                            rectangleText.destroy();
                            text.destroy();
                            this.add.sprite(300, 640, 'girl2').play('girlEmotionsFirstDress')
                            
                            timer = setTimeout(() => {
                                rectangleText = this.add.image(300, 45, 'rectangleText');
                                text = this.add.image(300, 45, 'textBag');
                                progressBar.destroy();
                                progressRectangle.destroy();
                            }, 2000);
                            progressBar = this.add.image(300, 45, 'progressBar');
                            progressRectangle = this.add.image(100, 45, 'progressRectangle');


                            isFirstDress = true;

                            rectangle1.create(165, 725, 'rectangle');
                            rectangle1.create(430, 725, 'rectangle');


                            bagFirst = this.add.image(165, 725, 'firstBag');
                            bagSecond = this.add.image(430, 725, 'secondBag');

                            break;

                        case 1:
                            rectangleText.destroy(); text.destroy();
                            progressBar.destroy();
                            progressRectangle.destroy();

                            progressBar = this.add.image(300, 45, 'progressBar');
                            progressRectangle = this.add.image(100, 45, 'progressRectangle');
                            progressRectangle2= this.add.image(230, 45, 'progressRectangle');
                            
                            clearTimeout(timer);
                            
                            timer = setTimeout(() => {
                                rectangleText = this.add.image(300, 45, 'rectangleText');
                                text = this.add.image(300, 45, 'textAccessory');
                                progressBar.destroy();
                                progressRectangle.destroy();
                                progressRectangle2.destroy();
                            }, 1500);

                            isFirstBag = true;

                            if(isFirstDress){
                                this.add.image(300, 640, 'girlFirstDressFirstBagFlirty');  
                                
                                rectangle1.create(165, 725, 'rectangle');
                                rectangle1.create(430, 725, 'rectangle');
                            
                                glasses = this.add.image(165, 725, 'glasses');
                                firstNecklace = this.add.image(430, 725, 'firstNecklace'); 
                            } else{
                                this.add.sprite(300, 640, 'girl2').play('girlEmotionsSecondDressFirstBag');
                               
                                rectangle1.create(165, 725, 'rectangle');
                                rectangle1.create(430, 725, 'rectangle');

                                glasses = this.add.image(165, 725, 'glasses');
                                secondNecklace = this.add.image(430, 725, 'secondNecklace');
                            }

                            //text = this.add.image(300, 45, 'textAccessory');

                            break;

                        case 2:
                            rectangleText.destroy(); text.destroy();
                            progressBar.destroy();
                            progressRectangle.destroy();
                            progressRectangle2.destroy();

                            progressBar = this.add.image(300, 45, 'progressBar');
                            progressRectangle = this.add.image(100, 45, 'progressRectangle');
                            progressRectangle2= this.add.image(230, 45, 'progressRectangle');
                            progressRectangle3 = this.add.image(360, 45, 'progressRectangle')
                            
                            clearTimeout(timer);
                            
                            timer = setTimeout(() => {
                                rectangleText = this.add.image(300, 45, 'rectangleText');
                                text = this.add.image(300, 45, 'textPlace');
                                progressBar.destroy();
                                progressRectangle.destroy();
                                progressRectangle2.destroy();
                            }, 1500);
                            

                            if(isFirstDress && isFirstBag){
                                
                                girlEnd = 'girlEmotionsFirstDressFirstBagGlasses'

                                this.add.sprite(300, 640, 'girl2').play('girlEmotionsFirstDressFirstBagGlasses');

                            } else if(isFirstDress && !isFirstBag){
                                girlEnd = 'girlEmotionsFirstDressSecondBagGlassesEND'
                                this.add.sprite(300, 640, 'girl2').play('girlEmotionsFirstDressSecondBagGlasses');
                            
                            } else if(!isFirstDress && isFirstBag){

                                girlEnd = 'girlSecondDressFirstBagGlassesSad'

                                this.add.sprite(300, 640, 'girl2').play('girlEmotionsSecondDressFirstBagGlasses');

                            } else {

                                girlEnd = 'girlSecondDressSecondBagGlassesSad'

                                this.add.sprite(300, 640, 'girl2').play('girlEmotionsSecondDressSecondBagGlasses');
                                
                            }

                            rectangle1.create(165, 725, 'rectangle');
                            rectangle1.create(430, 725, 'rectangle');

                            firstLocation = this.add.image(165, 725, 'firstLocationLittle');
                            secondLocation = this.add.image(430, 725, 'secondLocationLittle');

                            break;

                        case 3:
                            this.add.image(300, 450, 'firstLocation');
                            
                            clearTimeout(timer);

                            rect.destroy();
                            rect2.destroy();

                            let girlFinal, boyFinal;
                            let replica;

                            if(isFirstDress){  
                                boyFinal = this.add.sprite(600, 600, 'boy').play('boyEmotionsEnd');
                                girlFinal = this.add.sprite(0, 640, 'girl').play(girlEnd);

                                replica = this.add.image(300, 450, 'Paul2');
                            } else{
                                boyFinal = this.add.image(600, 600, 'boyAngry');
                                girlFinal = this.add.image(0, 640, girlEnd);

                                replica = this.add.image(300, 450, 'Paul3');
                            }
                            this.tweens.add({
                                targets: girlFinal,
                                x: 200,
                                duration: 250,
                                ease: 'Linear'
                            });

                            this.tweens.add({
                                targets: boyFinal,
                                x: 400,
                                duration: 250,
                                ease: 'Linear'
                            });

                            setTimeout(() => {
                                replica.destroy();

                                rectanglePlayNow = this.add.image(300, 700,'rectanglePlayNow')
                                textPlayNow = this.add.image(300, 700,'textPlayNow')

                                this.tweens.add({
                                    targets: rectanglePlayNow,
                                    y: 725,
                                    repeat: -1,
                                    duration: 2000,
                                    ease: 'Bounce',
                                    yoyo: true
                                });
                
                                this.tweens.add({
                                    targets: textPlayNow,
                                    y: 725,
                                    repeat: -1,
                                    duration: 2000,
                                    ease: 'Bounce',
                                    yoyo: true
                                });

                            }, 2500);

                            break;
                    }
                    console.log(scene++);
                    
                    girl.destroy();

                    
                })

                rect.on('pointerover', () => {
                    rectanglePressed = this.add.image(165, 725, 'rectanglePressed');
                })

                rect.on('pointerout', () => {
                    rectanglePressed.destroy();
                })

                //SECOND CHOICE
                rect2.on('pointerdown', () => {
                    switch(scene){
                        case 0:
                            rectangleText.destroy();
                            text.destroy();
                            
                            timer = setTimeout(() => {
                                rectangleText = this.add.image(300, 45, 'rectangleText');
                                text = this.add.image(300, 45, 'textBag');
                                progressBar.destroy();
                                progressRectangle.destroy();
                            }, 2000);
                            
                            progressBar = this.add.image(300, 45, 'progressBar');
                            progressRectangle = this.add.image(100, 45, 'progressRectangle');

                            this.add.sprite(300, 640, 'girl2').play('girlEmotionsSecondDress');
                    
                            dress1.destroy(); dress2.destroy();

                            rectangle1.create(165, 725, 'rectangle');
                            rectangle1.create(430, 725, 'rectangle');

                            bagFirst = this.add.image(165, 725, 'firstBag');
                            bagSecond = this.add.image(430, 725, 'secondBag');

                            break;

                        case 1:
                            rectangleText.destroy(); text.destroy();
                            progressBar.destroy();
                            progressRectangle.destroy();

                            progressBar = this.add.image(300, 45, 'progressBar');
                            progressRectangle = this.add.image(100, 45, 'progressRectangle');
                            progressRectangle2= this.add.image(230, 45, 'progressRectangle');
                            
                            clearTimeout(timer);
                            
                            timer = setTimeout(() => {
                                rectangleText = this.add.image(300, 45, 'rectangleText');
                                text = this.add.image(300, 45, 'textAccessory');
                                progressBar.destroy();
                                progressRectangle.destroy();
                                progressRectangle2.destroy();
                            }, 1000);

                            if(isFirstDress){
                                this.add.sprite(300, 640, 'girl2').play('girlEmotionsFirstDressSecondBag');

                                rectangle1.create(165, 725, 'rectangle');
                                rectangle1.create(430, 725, 'rectangle');
                            
                                glasses = this.add.image(165, 725, 'glasses');
                                firstNecklace = this.add.image(430, 725, 'firstNecklace'); 
                            } else{
                                this.add.image(300, 640, 'girlSecondDressSecondBagFlirty');
                                rectangle1.create(165, 725, 'rectangle');
                                rectangle1.create(430, 725, 'rectangle');

                                glasses = this.add.image(165, 725, 'glasses');
                                secondNecklace = this.add.image(430, 725, 'secondNecklace');
                            }
                            
                            break;

                        case 2:
                            rectangleText.destroy(); text.destroy();
                            progressBar.destroy();
                            progressRectangle.destroy();
                            progressRectangle2.destroy();

                            progressBar = this.add.image(300, 45, 'progressBar');
                            progressRectangle = this.add.image(100, 45, 'progressRectangle');
                            progressRectangle2= this.add.image(230, 45, 'progressRectangle');
                            progressRectangle3 = this.add.image(360, 45, 'progressRectangle')
                            
                            clearTimeout(timer);
                            
                            timer = setTimeout(() => {
                                rectangleText = this.add.image(300, 45, 'rectangleText');
                                text = this.add.image(300, 45, 'textPlace');
                                progressBar.destroy();
                                progressRectangle.destroy();
                                progressRectangle2.destroy();
                            }, 1500);

                            if(isFirstDress && isFirstBag){

                                girlEnd = 'girlEmotionsFirstDressFirstBagNecklace'

                                this.add.sprite(300, 640, 'girl2').play('girlEmotionsFirstDressFirstBagNecklace');
                                
                            } else if(isFirstDress && !isFirstBag){

                                girlEnd = 'girlEmotionsFirstDressSecondBagNecklaceEND'

                                this.add.sprite(300, 640, 'girl2').play('girlEmotionsFirstDressSecondBagNecklace');
                                
                            } else if(!isFirstDress && isFirstBag){

                                girlEnd = 'girlSecondDressFirstBagNecklaceSad'

                                this.add.sprite(300, 640, 'girl2').play('girlEmotionsSecondDressFirstBagNecklace');
                                
                            } else {

                                girlEnd = 'girlSecondDressSecondBagNecklaceSad'

                                this.add.sprite(300, 640, 'girl2').play('girlEmotionsSecondDressSecondBagNecklace');
                                
                            }
                            
                            rectangle1.create(165, 725, 'rectangle');
                            rectangle1.create(430, 725, 'rectangle');

                            firstLocation = this.add.image(165, 725, 'firstLocationLittle');
                            secondLocation = this.add.image(430, 725, 'secondLocationLittle');
                            
                            break;

                        case 3:
                            this.add.image(300, 450, 'secondLocation')
                            clearTimeout(timer);
                            
                            let girlFinal, boyFinal;
                            let replica;

                            rect.destroy();
                            rect2.destroy();

                            if(isFirstDress){
                                boyFinal = this.add.sprite(600, 600, 'boy').play('boyEmotionsEnd');
                                girlFinal = this.add.sprite(0, 640, 'girl').play(girlEnd);
                                
                                replica = this.add.image(300, 450, 'Paul2');
                            } else{
                                boyFinal = this.add.image(600, 600, 'boyAngry');
                                girlFinal = this.add.image(0, 640, girlEnd);

                                replica = this.add.image(300, 450, 'Paul3');
                            }

                            this.tweens.add({
                                targets: girlFinal,
                                x: 200,
                                duration: 250,
                                ease: 'Linear'
                            });

                            this.tweens.add({
                                targets: boyFinal,
                                x: 400,
                                duration: 250,
                                ease: 'Linear'
                            });

                            setTimeout(() => {
                                replica.destroy();

                                rectanglePlayNow = this.add.image(300, 700,'rectanglePlayNow')
                                textPlayNow = this.add.image(300, 700,'textPlayNow')

                                this.tweens.add({
                                    targets: rectanglePlayNow,
                                    y: 725,
                                    repeat: -1,
                                    duration: 2000,
                                    ease: 'Bounce',
                                    yoyo: true
                                });
                
                                this.tweens.add({
                                    targets: textPlayNow,
                                    y: 725,
                                    repeat: -1,
                                    duration: 2000,
                                    ease: 'Bounce',
                                    yoyo: true
                                });

                            }, 2500);
                            
                            break;
                    }
                    
                    
                    console.log(scene++);

                    girl.destroy();

                })


                rect2.on('pointerover', () => {
                    rectanglePressed = this.add.image(430, 725, 'rectanglePressed');
                })

                rect2.on('pointerout', () => {
                    rectanglePressed.destroy();
                })

            });
           
            this.tweens.add({
                targets: girlFirstAnim,
                x: 300,
                duration: 250,
                ease: 'Linear'
            });

            const replicaGirl = this.add.image(300, 450, 'Lexy');
        })
        
        const replicaBoy = this.add.image(300, 450, 'Paul');
        
        this.tweens.add({
            targets: boyAnim,
            x: 300,
            duration: 250,
            ease: 'Linear'
        }); 

        
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    
    scale: {
        // Fit to window
        mode: Phaser.Scale.FIT,
        // Center vertically and horizontally
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    width: 600,
    height: 900,

    scene: MyGame,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    
};

const game = new Phaser.Game(config);
