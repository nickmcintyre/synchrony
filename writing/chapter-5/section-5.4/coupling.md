<p class="main-text small-text">
    The bugs synchronized, but their behavior was a bit too predictable. Swarms of $ 5 $ and $ 50 $ bugs were essentially the same. You mulled the problem over and made a final adjustment to your model.
</p>
<p class="main-text small-text">
    $ \frac{d\theta_{i}}{dt} = \omega_{i} + \frac{K}{N}  \displaystyle\sum_{j=1}^N \sin(\theta_{j} - \theta_{i}) $
</p>
<p class="main-text small-text">
    $ K $, your coupling constant, would scale all of the adjustments $ \sin(\theta_{j} - \theta_{i}) $ by some amount. Dividing by the number of bugs, $ N $, would ensure that each adjustment contributed a bit less as the swarm grew larger.
</p>
<p class="main-text small-text">
    In code, you wrote something like this:
</p>
<pre><code data-trim class="language-javascript">
let bugs = []
let numBugs = 10
let coupling = 1.5
let KN = coupling / numBugs
&nbsp;
// lots of code
&nbsp;
this.dadt = this.freq
for (let bug of bugs) {
  this.dadt += KN * sin(bug.angle - this.angle)
}
</code></pre>