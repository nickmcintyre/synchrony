<p class="main-text small-text">
    Something was still missing. The shooting star had come into focus, but now you wondered how that tail appeared. Saying “it was always like that” was too easy.
</p>
<p class="main-text small-text">
    You looked up again, totally cogitating, and then it hit you: the tail appears when that bundle of stardust collides with other stardust! But how would you model the collision?
</p>
<p class="main-text small-text">
    The shooting star’s $ x $-coordinate started at $ 0 $ during the first frame and steadily increased. You decided that the collision would occur when $ x $ was equal to $ 50 $, so the tail would appear afterward. If $ x $ was less than $ 25 $, you would paint the sky with a solid coat of paint.
</p>
<p class="main-text small-text">
    You translated this into code using an <strong><em>if-statement</em></strong>. If-statements work like this:
</p>
<pre><code data-trim class="language-javascript">
if (condition) {
  // commands to run if condition is true
}
</code></pre>
<p class="main-text small-text">
    And now with your collision condition.
</p>
<pre><code data-trim class="language-javascript">
if (x < 50) {
  background(25, 25, 112)
}
</code></pre>