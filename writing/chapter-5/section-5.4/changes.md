<p class="main-text small-text">
    This equation defined a ratio between the change in an angle $ d\theta $ and the amount of time it took for the change to occur $ dt $.
</p>
<p class="main-text small-text">
    The ratio $ \dot{\theta} $ had units of radians per unit time. And the angle $ \theta $ had units of radians. To get from $ \frac{radians}{time} $ to $ radians $, you figured that you needed to perform a computation like this:
</p>
<p class="main-text small-text">
    $ \theta_{next} = \theta_{now} + \dot{\theta} \cdot dt $
</p>
<p class="main-text small-text">
    $ \theta_{next} = \theta_{now} + \frac{d\theta}{dt} \cdot dt $
</p>
<p class="main-text small-text">
    So that your units would work out like this:
</p>
<p class="main-text small-text">
    $ radians = radians + \frac{radians}{time} \cdot time $
</p>
<p class="main-text small-text">
    You mulled the idea over for a moment before writing a line of code like this:
</p>
<pre><code data-trim class="language-javascript">
    this.angle += this.dadt * this.dt
</code></pre>