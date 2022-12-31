<p class="main-text small-text">
    The variable <code>x</code> depended upon the variable <code>frameCount</code>, so its value changed during each trip through the <code>draw()</code> loop. This was great progress, but the star’s trajectory still seemed a bit flat. You livened things up by creating a <code>y</code> variable and assigning it to <code>x</code>.
</p>
<pre><code data-trim class="language-javascript">
let x = frameCount * 0.5
let y = x
</code></pre>
<p class="main-text small-text">Example 2.4 Declaring another variable</p>
<script type="text/p5" data-autoplay src="/sketches/chapter-2/multiple-variables.js"></script>