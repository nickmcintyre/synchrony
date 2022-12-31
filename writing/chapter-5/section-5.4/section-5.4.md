<h3 class="title">5.4 Sync</h3>
<p class="main-text small-text">
    You were almost ready to leave the bugs to their own devices. But you wanted to explore one last idea before entering your monolith.
</p>
<p class="main-text small-text">
    Sure, the bugs were together, but proximity didn’t appear to impact their behavior in any way – they just flitted about randomly. It was time to get organized.
</o>
<p class="main-text small-text">
    You reached deep into your mathematical toolkit and came up with the following model for an individual bug’s behavior:
</p>
<blockquote class="main-text small-text">
    The way in which I change my direction will be based on my natural preference, my current direction, and the directions of all of my neighbors.
</blockquote>
<p class="main-text small-text">
    The plan seemed simple enough, so you set about modifying your sketch. First, you had to base each bug’s motion on its direction. You pointed everyone in random directions to start.
</p>
<pre><code data-trim class="language-javascript">
class Bug {
  constructor() {
    this.x = 100
    this.y = 100
    this.r = 2.5
    this.angle = random(TWO_PI) // random direction
  }
</code></pre>