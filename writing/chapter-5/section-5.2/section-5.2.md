<h3 class="title">5.2 Classes</h3>
<p class="main-text small-text">
    You had successfully created life, but you worried that the bug would get lonely as you wandered throughout the universe. The thought of leaving your friend alone in the void worried you, so you hatched a plan.
</p>
<p class="main-text small-text">
    Now that you could create life, it would fill the universe. You had assembled all of the building blocks for a bug, so you bundled them together in a sort of blueprint called a <strong><em>class</em></strong>. A class would bundle data, such as position and size, along with functions that operate on that data.
</p>
<pre><code data-trim class="language-javascript">
class Bug {
  constructor() {
    this.x = 100
    this.y = 100
    this.r = 2.5
  }
&nbsp;
  draw() {
    fill('ghostwhite')
    stroke('ghostwhite')
    circle(this.x, this.y, 2 * this.r)
  }
  // and so on
}
</code></pre>