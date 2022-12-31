<p class="main-text small-text">
    Each bug would base its behavior on all of its neighbors, so you needed some way to add up all of those effects. You used a fancy symbol, $ \Sigma $, called "sigma", as a short hand for “add all of these things”.
</p>
<p class="main-text small-text">
    For example, here is how you added the numbers $ 1 ... 10 $:
</p>
<p class="main-text small-text">
    $ \displaystyle\sum_{j=1}^{10} j = 1 + 2 + ... + 9 + 10 $
</p>
<p class="main-text small-text">
    And here is the same idea in code:
</p>
<pre><code data-trim class="language-javascript">
let sum = 0
for (let j = 1; j < 11; j += 1) {
    sum += j
}
</code></pre>