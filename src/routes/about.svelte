<script>
  import Heading from "../components/Heading.svelte";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
</script>

<style>
  .prose h2 {
    color: white;
  }
</style>

<div class="duration-200 transition-opacity">
  <div
    class="top-0 left-0 fixed w-screen h-screen bg-opacity-25 bg-black pt-20" />
  <h1
    class="text-white text-4xl bg-black font-hairline fixed top-0 right-0 py-2
      px-4 w-screen text-right bg-opacity-75 z-30">
    About fresh <b class="-ml-1.5 font-normal">air</b>
  </h1>
  <div
    class="prose sm:prose-lg px-4 mt-40 mb-40 relative z-10 text-white font-thin
      mx-auto">
    <h2>Hi! 👋</h2>
    <p>We're FreshAir, Edinburgh's student radio station</p>

    <p>
      <strong style="color:white">FreshAir is for everyone</strong> &mdash active
      since 1991, we’re one of the University’s biggest societies and one of the
      city’s most diverse radio stations, broadcasting everything from entertainment
      and chat shows to debates, new music, local news and arts coverage.
    </p>
    <p>
      To learn more about FreshAir and what we do, read on! If we've already
      caught your interest, go to <a
        href="/get-involved"
        style="color:white">freshair.radio/get-involved</a> to get involved.
    </p>
    <h3 style="color:white" class="flex">
      Music <a href="mailto:music@freshair.radio" class="ml-auto bg-white p-2 s
          py-1 rounded-lg text-lg no-underline" style="color:black;text-decoration:none">Join</a>
    </h3>
    <p>
      FreshAir’s music team is responsible for much of the station’s music
      output and is a fun group of music lovers who are looking forward to
      welcoming you to Edinburgh. Not only can we provide opportunities for you
      to write album and single reviews but also get press passes for gigs when
      they do return. We’ve managed to interview some big names in the past
      (including Sam Fender, Nina Nesbitt and Bombay Bicycle Club) and are open
      to any suggestions of people you’d like to review and interview.
    </p>
    <p>
      For music presenters, we aim to act as a valuable resource to help provide
      you with new music, interview opportunities and even a small slot on our
      weekly music hub show—allowing you to advertise your show and play some of
      your favourite music.
    </p>
    <p>
      We also have a 2 hour music team hub show every week and we love having
      music team members help out with it. You could make a playlist, advertise
      your own show, host a specialist music hour, or just help in studio for
      more experience—the opportunities to help us as part of the music team are
      endless, the only thing you need is a love for music!
    </p>
    <h3 style="color:white" class="flex">
      Arts <a href="mailto:arts@freshair.radio" class="ml-auto bg-white p-2 s
          py-1 rounded-lg text-lg no-underline" style="color:black;text-decoration:none">Join</a>
    </h3>
    <p>
      Arts journalism is an exciting way to get stuck-in with all things
      Edinburgh culture and really get to know the city. Here at FreshAir, the
      Arts Team is responsible for reviewing theatre, poetry, gallery
      exhibitions and more, not to mention interviewing the fascinating minds
      behind them, and finding all the best angles from which to approach
      Edinburgh's vast cultural offerings.
    </p>
    <p>
      There's loads of ways to get involved, from copping (free) press tickets
      to shows, to helping behind-the-scenes with the weekly Arts Show (our
      two-hour live arts broadcast), or even coming on air yourself for some
      cultural chat. Don't miss your opportunity to get involved with everything
      that makes Edinburgh what it is, and broadcast it to the world. Join
      FreshAir Arts!
    </p>
    <h3 style="color:white" class="flex">
      Sports <a href="mailto:sports@freshair.radio" class="ml-auto bg-white p-2
          s py-1 rounded-lg text-lg no-underline" style="color:black;text-decoration:none">Join</a>
    </h3>
    <p>
      Calling all sports fans! FreshAir Sport is looking to add to our ranks for
      the coming year, with lots of unique opportunities for you to get involved
      in sports broadcasting and journalism! If you would like to be on the mic,
      we have a weekly Sports Hub show which provides a platform for you to wax
      lyrical on the latest developments in the sporting world (think Arsenal
      Fan TV without the swearing!). If you would like to take your interest in
      sports broadcasting beyond the studio, thanks to FreshAir’s contacts at
      Hibernian and Hearts we can provide an opportunity for you to attend
      matches as part of the media and even interview managers and players,
      including a certain Steven Gerrard!
    </p>
    <h3 style="color:white" class="flex">
      News <a href="mailto:news@freshair.radio" class="ml-auto bg-white p-2 s
          py-1 rounded-lg text-lg no-underline" style="color:black;text-decoration:none">Join</a>
    </h3>
    <p>
      Are you a news junkie? Have you got any interest in journalism? Do people
      always come to you for the latest? If the answer to any of those questions
      is yes, you might want to consider joining the FreshAir News team! Each
      week we bring listeners current events and gripping stories from Scotland
      and around the world. Join us to be one of our next new reporters!
    </p>
    <h3 style="color:white" class="flex">
      Production <a href="mailto:production@freshair.radio" class="ml-auto
          bg-white p-2 s py-1 rounded-lg text-lg no-underline" style="color:black;text-decoration:none">Join</a>
    </h3>
    <p>
      The Production Team is what makes FreshAir such a high quality station.
      Full of people with a passion for radio, the team works behind the scenes
      to create content for shows, give help and feedback to our presenters, and
      even put on some produc- tions of our own. This year in particular we are
      looking to produce a fortnightly podcast, with features and music chosen
      by the Production Team. Ideal for newcomers as we provide full training,
      meaning no prior experience is required. Whether you are looking to learn
      new skills, hone your current ones, or simply get a feel for the station
      and society, the Production Team is the place for you!
    </p>
    <h3 style="color:white" class="flex">
      Design <a href="mailto:design@freshair.radio" class="ml-auto bg-white p-2
          s py-1 rounded-lg text-lg no-underline" style="color:black;text-decoration:none">Join</a>
    </h3>
    <p>
      If you are a keen drawer, painter, animator, collagist, photographer,
      graphic designer or just would like to get involved in creating ‘the face’
      of radio then join FreshAir‘s Design team!
    </p>
    <p>
      As well as creating show logos, the design team will work closely with
      Events to create unforgettable (though probably socially distanced) events
      and happenings. So to sum it up, if you’re an arts student, or just a
      creative person, and love the challenge of creating pandemic friendly
      music events, come get involved!
    </p>
  </div>
</div>
