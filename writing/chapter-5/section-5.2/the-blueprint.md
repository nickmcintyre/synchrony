<p class="main-text small-text">
    Each unique bug, called an <strong><em>instance</em></strong> of the <code>Bug</code> class, would have its own position and size. The keyword <code>this</code> makes it clear that the blueprint’s instructions refer to an instance’s data and not some other data floating around in your sketch.
</p>
<p class="main-text small-text">
    This blueprint could be used to construct as many bugs you liked. You used it like so:
</p>
<pre><code data-trim class="language-javascript">
let bug // declare a variable
&nbsp;
function setup() {
  createCanvas(200, 200)
  describe('A circle moving randomly in small increments')
  bug = new Bug() // construct new Bug object
}
&nbsp;
function draw() {
  drawSpace()
&nbsp;
  bug.draw()
  bug.update()
  bug.checkEdges()
}
</code></pre>