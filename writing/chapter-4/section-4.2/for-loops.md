<p class="main-text small-text">
    You figured that you could use these <strong><em>for-loops</em></strong> to draw the points on your sine wave like this:
</p>
<pre><code data-trim class="language-javascript">
for (let x = 0; x < 200; x = x + 1) {
  let y = amp * sin(x * freq * TWO_PI) + mid
  strokeWeight(3)
  stroke('dodgerblue')
  point(x, y)
}
</code></pre>
<p class="main-text small-text">
    Starting from the left side of the canvas <code>x = 0</code>, you first performed a quick computation and drew a point. Next, you checked to see that you hadn’t run past the right side of the canvas <code>x < 200</code>. Finally, you took a step to the right <code>x = x + 1</code> and repeated all of the commands again.
</p>
<p class="main-text small-text">
    The pattern <code>x = x + 1</code> would show up so often that you created a shorthand using the <strong><em>addition assignment operator</em></strong> <code>+=</code>.
</p>
<pre><code data-trim class="language-javascript">
    x = x + 1
</pre></code>
<p class="main-text small-text">
    became
</p>
<pre><code data-trim class="language-javascript">
    x += 1
</pre></code>