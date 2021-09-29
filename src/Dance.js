import "./App.css";
import React from "react";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

const Dance = () => {
  return (
    <div id="modal" class="modal hidden">
      <link rel="stylesheet" type="text/css" href="/css/queries.css" />
      <h2 id="dance_header">MY DANCE STORY</h2>
      <img
        id="dance_img"
        src="/images/dance_me.jpg"
        class="dance-round"
        alt="dance"
      />
      <p id="dance_para">
        Hi there! I am a rising choreographer and dancer currently based in the
        Philadelphia, PA area. With over ten years of dancing experience, I have
        trained in and performed multiple dance forms including Indian classical
        Bharatanatyam, Bollywood, Hip-hop, and Zumba. As a disciple of a
        renowned Bharatanatyam dancer, Guru Ramaa Ramesh, I have developed
        discipline, precision, and grace which are core qualities of classical
        dance form. As a choreographer, my passion is to combine my classical
        and western background while creating my unique style through my
        expressions and body movements. Be sure to follow me on social media and
        hit subscribe to my YouTube channel for exclusive videos!
      </p>
      <div id="insta-feed">
        <InstagramFeed
          token={
            "IGQVJXRm9aQktlWERWenRMa2lnc1d3NzJvZAHBIWGVJa2JTbk1tZAE5hY0FlVlBoZAThTeUdfOWx4TWRhaWRCQmxma216T1Fkdl95ZADVuWDI3V0kxdGxtUl9ZAVFM3cVRDNFZA1eThwSTdxOEwzMXNjeF9JWAZDZD"
          }
          counter="5"
        />
      </div>
      <button
        class="subscribe"
        id="subscribe"
        target="_blank"
        onClick={(e) => {
          e.preventDefault();
          window.location.href =
            "https://www.youtube.com/channel/UCowgcxgT0Q3YeOOijXWj4qA?sub_confirmation=1";
        }}
      >
        SUBSCRIBE
      </button>
    </div>
  );
};

export default Dance;
