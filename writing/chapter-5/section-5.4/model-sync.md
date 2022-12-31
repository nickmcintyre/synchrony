<p class="main-text small-text">
    For a bug heading in the direction $ \theta_i $ with a neighbor heading in the direction $ \theta_j $, the difference between them was $ \theta_j - \theta_i $. You would compute the adjustment like so:
</p>
<p class="main-text small-text">
    $ \sin{(\theta_j - \theta_i)} $
</p>
<p class="main-text small-text">
    Accounting for all of a bug’s neighbors simply meant adding up all of these adjustments.
</p>
<p class="main-text small-text">
    $ \frac{d\theta_i}{dt} = \displaystyle\sum_{j=1}^{N} \sin{(\theta_j - \theta_i)} $
</p>
<p class="main-text small-text">
    Last but not least, you took the individual bug’s natural preference, $ \omega_i $, into account when making adjustments
</p>
<p class="main-text small-text">
    $ \frac{d\theta_i}{dt} = \omega_i + \displaystyle\sum_{j=1}^{N} \sin{(\theta_j - \theta_i)} $
</p>
<p class="main-text small-text">
     The fancy "w" is called "omega" and represents the bug's <strong><em>natural frequency</em></strong>. Now, in code:
</p>
<pre><code data-trim class="language-javascript">
this.dadt = this.freq
for (let bug of bugs) {
    this.dadt += sin(bug.angle - this.angle)
}
</code></pre>