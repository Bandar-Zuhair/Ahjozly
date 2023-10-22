@import url('https://fonts.googleapis.com/css2?family=Readex+Pro&display=swap');



/* html */
html {
    scroll-behavior: smooth;
}


/* All */
* {
    font-family: 'Readex Pro', sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}



/* Body */
body {
    background: rgb(59, 59, 59);
    color: white;
}





/* Unknow Effects */
.hide_Display {
    display: none;
}


.full_Screen_Image {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 998;
    cursor: pointer;
}

.full_Screen_Image img {
    width: 24%;
    z-index: 999;
    border: 1px solid white;
    border-radius: 30px;
    transition: all 0.3s ease;
}


.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(59, 59, 59, 1);
    z-index: 997;
}











/* Header */
header {
    background-color: black;
    position: fixed;
    z-index: 996;
    width: 100%;
    padding: 0 0 10px 0;
    display: flex;
    justify-content: flex-end;

}

#header_Info {
    direction: rtl;
    min-height: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
}

#header_Info h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 100%;
    padding: 10px 10px 20px 10px;
    font-size: 20px;
    font-weight: bold;
    cursor: default;
    padding-right: 15px;
}

#header_Nav {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
}

#header_Nav a,
#hide_Btn,
#show_Btn,
#villa_Details_Text_Contact_Us,
#choose_Villa_Details h1 {
    background: rgb(41, 38, 38);
    text-decoration: none;
    font-size: 17px;
    font-weight: lighter;
    padding: 6px 10px;
    color: white;
    border: 1px solid white;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.1s ease;
}

#header_Nav a:hover,
#hide_Btn:hover,
#show_Btn:hover,
#villa_Details_Text_Contact_Us:hover,
#choose_Villa_Details h1:hover {
    background: rgb(77, 66, 66);
    color: white;
}

#hide_Btn {
    position: fixed;
    left: 12px;
    top: 12px;
}

#show_Btn {
    color: white;
    background: rgb(0, 0, 0);
    z-index: 996;
    position: fixed;
    left: 12px;
    top: 12px;
}



/* Introduction */
#sec1 {
    display: flex;
    justify-content: center;
    padding: 140px 0 50px 0;
}

#sec1_Intro {
    direction: rtl;
    height: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
}

#sec1_Web_Intro {
    direction: rtl;
    height: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
}

#sec1_Web_Intro h1 {
    font-size: 20px;
    font-weight: lighter;
    cursor: default;
    margin-bottom: 10px;
}

#icon {
    font-size: 150px;
    padding: 30px 30px 5px 30px;
}

#discount_Text {
    font-size: 20px;
    font-weight: lighter;
    cursor: default;
    padding: 10px 16px;
    border: 5px solid rgb(94, 94, 94);
    border-radius: 30px;
}



/* Customers Comments */
#sec2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100px;
}

#sec2_Intro {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

#sec2_Intro h1 {
    font-size: 20px;
    font-weight: lighter;
}

#sec2_Icon {
    font-size: 150px;
    padding: 10px;
}

#sec2_Comments_Intro {
    padding: 0px 0px 30px 0px;
    text-align: center;
}

#sec2_Comments_Intro h1 {
    font-size: 20px;
    font-weight: lighter;
}

#all_Comments_Area {
    direction: rtl;
    width: 100%;
    min-height: 100px;
    display: flex;
    justify-content: center;
}

#all_Comments_Area h1 {
    font-size: 20px;
    font-weight: lighter;
}

.comment_Card {
    margin: 0px 10px;
    width: 900px;
    min-height: 500px;
    display: flex;
    justify-content: center;
    overflow: hidden;
}

#comment_Image {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

#comment_Image img {
    width: 80%;
    border: 1px solid white;
    border-radius: 30px;
    cursor: pointer;
}

#my_Reply {
    margin: 10px;
    display: flex;
    justify-content: center;
    text-align: center;
}

#my_Reply h1 {
    color: rgb(0, 255, 255);
    padding: 12px 16px;
    font-size: 20px;
    font-weight: lighter;
    cursor: default;
}


/* Choose Your Area */
#sec3 {
    padding: 70px 0;
}

#sec3_Content {
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

#sec3_Content div {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-around;

}

#sec3_Content div a {
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: lighter;
    border: 2px solid white;
    border-radius: 30px;
    padding: 14px 18px;
    cursor: pointer;
    transition: all 0.3s ease;
}

#sec3_Content div a:hover {
    transform: scale(1.1);
    color: rgb(0, 255, 0);
    background: rgb(49, 43, 43);
}



/* All Villa Cards */
#sec4,
#sec5,
#sec6 {
    direction: rtl;
}

.intro_Area {
    background: rgb(34, 32, 32);
    width: 100%;
    height: 100px;
    padding-top: 30px;
    display: flex;
    justify-content: center;
}

.intro_Area h1,
.choose_Area_Intro {
    font-size: 30px;
    font-weight: lighter;
    color: rgb(0, 255, 0);
    cursor: default;
}

.villa_Area {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
}

.villa_Card {
    direction: ltr;
    background: rgb(0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 340px;
    border: 1px solid white;
    border-radius: 30px;
    overflow: hidden;
    cursor: pointer;
    margin: 15px;
    transition: all 0.5s ease;
}

.villa_Card:hover {
    transform: scale(1.1);
}

.villa_Card img {
    width: 50%;
}

.villa_Info {
    min-height: 250px;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.villa_Info h1 {
    line-height: 1.5;
    font-size: 15px;
    font-weight: lighter;
    text-align: center;
}

.villa_Info .price {
    color: rgb(0, 255, 0);
}

.villa_Info .villa_id {
    border: 1px solid white;
    border-radius: 50px;
    font-size: 14px;
    font-weight: lighter;
    padding: 4px 8px;
}



/* Villa Details */
#villa_Details_Area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#choose_Villa_Details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    margin: 10px 0px 10px 0px;
}

#choose_Villa_Details h1 {
    font-size: 17px;
    padding: 10px 14px;
    color: rgb(0, 255, 0);
}

.villa_Details_Card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

#villa_Details_Img_Area {
    width: 30%;
    padding: 0 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#villa_Details_Img_Area img {
    width: 50%;
    border: 1px solid black;
    border-radius: 30px;
    cursor: pointer;
}

#villa_Details_Video_Area video {
    height: 400px;
    border: 1px solid black;
    border-radius: 30px;
    cursor: pointer;
}

#villa_Details_Text {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    min-height: 5px;
    margin-bottom: 20px;
}

#villa_Details_Text h1 {
    line-height: 1.5;
    text-align: center;
    font-size: 15px;
    font-weight: lighter;
    cursor: default;
    margin: 10px 0 5px 0;
}

#villa_Details_Text_Price {
    color: rgb(0, 255, 0);
}

#villa_Details_Text_Villa_Id {
    padding: 10px 14px;
}

.arrow_Icon {
    color: white;
    font-size: 35px;
    font-weight: lighter;
    border: 1px solid white;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.arrow_Icon:hover {
    color: black;
    background: white;
}

#villa_Details_Text_Contact_Us {
    font-size: 15px;
    padding: 10px 14px;
    color: rgb(0, 255, 0);
}


/* Footer */
footer {
    background: rgb(59, 59, 59);
    height: 30px;
}




/* Media Queries */
/* 1700px */
@media(max-width:1700px) {
    #choose_Villa_Details {
        width: 250px;
    }

    .full_Screen_Image img {
        width: 26%;
    }

}



/* 1500px */
@media(max-width:1500px) {

    #villa_Details_Img_Area {
        width: 35%;
    }

    #villa_Details_Img_Area img {
        width: 50%;
    }
}




/* 1380px */
@media(max-width:1380px) {
    #sec3_Content div {
        width: 50%;
    }

    #villa_Details_Img_Area img {
        width: 50%;
    }

    .full_Screen_Image img {
        width: 32%;
    }
}



/* 1180px */
@media(max-width:1180px) {
    #header_Nav {
        width: 70%;
    }

    .villa_Area {
        padding: 0;
    }

    .villa_Card {
        width: 300px;
    }

    .villa_Info {
        min-height: 200px;
    }

    .villa_Info h1 {
        font-size: 13px;
    }

    .villa_Info .villa_id {
        font-size: 11px;
    }

    #villa_Details_Img_Area {
        width: 35%;
    }

    #villa_Details_Img_Area img {
        width: 60%;
    }

    .full_Screen_Image img {
        width: 50%;
    }
}



/* 1050px */
@media(max-width:1050px) {
    .villa_Card {
        width: 250px;
    }

    .villa_Info {
        min-height: 150px;
    }

    .villa_Info h1 {
        font-size: 11px;
    }

    .villa_Info .villa_id {
        font-size: 9px;
    }

    .full_Screen_Image img {
        width: 40%;
    }
}


/* 1025px */
@media(max-width:1025px) {
    #header_Info {
        min-height: 95px;
    }

    #header_Nav a {
        font-size: 15px;
    }

    .intro_Area h1 {
        font-size: 25px;
    }

    #sec3_Content div {
        width: 60%;
    }

    #choose_Villa_Details {
        width: 200px;
    }

    #choose_Villa_Details h1 {
        font-size: 15px;
        padding: 8px 12px;
    }

    #villa_Details_Text h1 {
        font-size: 14px;
    }

    #villa_Details_Text_Contact_Us {
        font-size: 14px;
    }

    #villa_Details_Img_Area {
        width: 45%;
    }

    #villa_Details_Img_Area img {
        width: 60%;
    }

    .full_Screen_Image img {
        width: 45%;
    }
}


/* 839px */
@media(max-width:839px) {
    .villa_Card {
        width: 220px;
    }

    .villa_Info {
        min-height: 100px;
    }

    .villa_Info h1 {
        font-size: 9px;
    }

    .villa_Info .villa_id {
        font-size: 7px;
    }

    #villa_Details_Img_Area {
        width: 50%;
    }

    .full_Screen_Image img {
        width: 51%;
    }
}


/* 800px */
@media(max-width:800px) {
    #villa_Details_Img_Area {
        width: 55%;
    }

    #villa_Details_Img_Area img {
        width: 65%;
    }

    #villa_Details_Text h1 {
        font-size: 12px;
    }
}



/* 750px */
@media(max-width:750px) {
    #header_Nav {
        width: 85%;
    }

    #hide_Btn {
        font-size: 15px;
    }

    #show_Btn {
        font-size: 16px;
    }

    .villa_Card {
        width: 250px;
    }

    .villa_Info {
        min-height: 150px;
    }

    .villa_Info h1 {
        font-size: 11px;
    }

    .villa_Info .villa_id {
        font-size: 9px;
    }

    #villa_Details_Img_Area {
        width: 55%;
    }

    #villa_Details_Img_Area img {
        width: 65%;
    }

    .full_Screen_Image img {
        width: 59%;
    }
}



/* 686px */
@media(max-width:686px) {
    #sec2 {
        height: 700px;
    }


    #villa_Details_Img_Area {
        width: 65%;
    }

    #villa_Details_Img_Area img {
        width: 60%;
    }
}



/* 600px */
@media(max-width:600px) {
    #header_Info {
        min-height: 90px;
    }

    #header_Info h1 {
        font-size: 17px;
    }

    #header_Nav {
        width: 100%;
        padding: 0 30px;
    }

    #header_Nav a {
        font-size: 13px;
    }

    #hide_Btn {
        font-size: 12px;
    }

    #show_Btn {
        font-size: 13px;
    }

    #icon {
        font-size: 140px;
    }

    #discount_Text {
        font-size: 15px;
    }

    #sec2 {
        height: 650px;
    }

    #sec2_Intro h1 {
        font-size: 15px;
    }

    #sec2_Icon {
        font-size: 140px;
    }

    #sec2_Comments_Intro {
        font-size: 15px;
    }

    #sec2_Comments_Intro h1 {
        font-size: 15px;
    }

    #my_Reply h1 {
        font-size: 15px;
    }

    #sec3 {
        padding: 40px 0;
    }

    .intro_Area h1 {
        font-size: 20px;
    }

    .villa_Card {
        width: 220px;
    }

    .villa_Info {
        min-height: 100px;
    }

    .villa_Info h1 {
        font-size: 9px;
    }

    .villa_Info .villa_id {
        font-size: 7px;
    }


    .choose_Area_Intro {
        font-size: 27px;
    }

    #sec3_Content div a {
        font-size: 18px;
    }

    #sec3_Content div {
        width: 70%;
    }

    #villa_Details_Img_Area {
        width: 70%;
    }

    #villa_Details_Img_Area img {
        width: 60%;
    }

    #villa_Details_Text h1 {
        font-size: 10px;
    }

    #villa_Details_Text_Contact_Us {
        font-size: 11px;
        padding: 8px 12px;
    }

    .full_Screen_Image img {
        width: 73%;
    }
}



/* 534px */
@media(max-width:534px) {
    #header_Nav {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    #header_Nav a {
        margin: 5px 5px 0 5px;
    }

    #villa_Details_Img_Area {
        width: 75%;
    }

    #villa_Details_Img_Area img {
        width: 60%;
    }

    .full_Screen_Image img {
        width: 78%;
    }
}



/* 512px */
@media(max-width:512px) {
    #header_Info {
        min-height: 130px;
    }

    #sec1 {
        padding: 160px 0 50px 0;
    }
}



/* 504px */
@media(max-width:504px) {
    #sec2 {
        height: 600px;
    }

    .villa_Card {
        width: 250px;
    }

    .villa_Info {
        min-height: 150px;
    }

    .villa_Info h1 {
        font-size: 11px;
    }

    .villa_Info .villa_id {
        font-size: 9px;
    }

    #villa_Details_Img_Area {
        width: 85%;
    }

    #villa_Details_Img_Area img {
        width: 60%;
    }

    .full_Screen_Image img {
        width: 82%;
    }
}



/* 465px */
@media(max-width:465px) {
    #hide_Btn {
        font-size: 10px;
    }

    #show_Btn {
        font-size: 11px;
    }

    #discount_Text {
        font-size: 13px;
    }

    .choose_Area_Intro {
        font-size: 25px;
    }

    #sec3_Content div {
        width: 80%;
    }

    #sec3_Content div a {
        font-size: 17px;
    }

    .intro_Area h1 {
        font-size: 17px;
    }

    .arrow_Icon {
        font-size: 30px;
    }

    .full_Screen_Image img {
        width: 85%;
    }
}



/* 410px */
@media(max-width:410px) {
    #header_Info {
        min-height: 125px;
    }

    #sec1_Web_Intro h1 {
        font-size: 15px;
    }

    #header_Nav a {
        font-size: 11px;
    }

    #discount_Text {
        font-size: 10px;
    }

    #sec1 {
        padding: 150px 0 50px 0;
    }

    #sec2 {
        height: 530px;
    }

    #sec2_Comments_Intro {
        font-size: 12px;
    }

    #sec2_Comments_Intro h1 {
        font-size: 12px;
    }

    #my_Reply {
        font-size: 112px;
    }

    #villa_Details_Text h1 {
        font-size: 9px;
        margin: 10px 0 0 0;
    }

    #villa_Details_Text_Contact_Us {
        font-size: 10px;
        padding: 6px 10px;
    }

    .full_Screen_Image img {
        width: 87%;
    }
}



/* 387px */
@media(max-width:387px) {
    #my_Reply h1 {
        font-size: 12px;
    }

    #choose_Villa_Details {
        width: 150px;
    }

    #choose_Villa_Details h1 {
        font-size: 12px;
        padding: 6px 10px;
    }

    .full_Screen_Image img {
        width: 88%;
    }

}



/* 373px */
@media(max-width:373px) {
    #sec2 {
        height: 500px;
    }
}






/* 350px */
@media(max-width:350px) {
    #header_Info {
        min-height: 115px;
    }

    #header_Nav a {
        font-size: 8px;
    }

    #hide_Btn {
        font-size: 8px;
    }

    #show_Btn {
        font-size: 9px;
    }

    #sec1 {
        padding: 140px 0 50px 0;
    }

    .intro_Area h1 {
        font-size: 15px;
    }

    #sec2_Intro h1 {
        font-size: 12px;
    }

    #sec1_Web_Intro h1 {
        font-size: 12px;
    }

    #discount_Text {
        font-size: 8px;
    }

    #sec2_Comments_Intro h1 {
        font-size: 10px;
    }

    .villa_Card {
        width: 220px;
    }

    .villa_Info {
        min-height: 100px;
    }

    .villa_Info h1 {
        font-size: 9px;
    }

    .villa_Info .villa_id {
        font-size: 7px;
    }

    #choose_Villa_Details h1 {
        font-size: 12px;
        padding: 6px 10px;
    }

    #villa_Details_Video_Area {
        height: 20%;
    }

    #villa_Details_Text h1 {
        font-size: 7px;
    }

    #villa_Details_Text_Contact_Us {
        font-size: 8px;
    }

    .full_Screen_Image img {
        width: 90%;
    }

}



/* 320px */
@media(max-width:320px) {
    #sec2 {
        height: 450px;
    }

    #my_Reply h1 {
        font-size: 10px;
    }
}
