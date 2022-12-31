<h3 class="title">2.3 Maps</h3>
<p class="main-text small-text">
    It wasn't long before a strange throught occurred to you: all of the stars in the sky must be in motion. The original singularity sent everything flying across the universe when you released it, so each star must have its own trajectory. That meant a lot of code that looked like this:
</p>
<pre><code data-trim class="language-javascript">
let y1 = m1 * x + b1
let y2 = m2 * x + b2
// ...
let y3000 = m3000 * x + b3000
</code></pre>
<p class="main-text small-text">And so on.</p>
<p class="main-text small-text">
    This seemed cluttered, so you decided to tidy things up by bundling all of the arithmetic inside functions that you called <strong><em>maps</em></strong>. Maps would assign input $ x $-values to output $ y $-values based on a rule.
</p>
<p class="main-text small-text">
    You called maps that looked like $ f(x) = mx + b $ <strong><em>linear functions</em></strong> because the set of inputs and set of outputs always formed a straight line.
</p>