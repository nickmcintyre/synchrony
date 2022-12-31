<p class="main-text small-text">
    Something about this solution bugged you. You saw <code>let angle = frameCount * 0.01</code> twice and thought it was a waste to repeat yourself.
</p>
<p class="main-text small-text">
    You decided to move part of the code to the top of your sketch so that it was visible everywhere. This sketch-wide visibility was called the <strong><em>global scope</em></strong>. Now, you just needed to reassign the angle variable once per trip through the <code>draw()</code> loop.
</p>
<p class="main-text small-text">Example 3.10 Global scope</p>
<script type="text/p5" data-autoplay src="/sketches/chapter-3/global-scope.js"></script>
<p class="main-text small-text">
    <strong>Exercise 3.6 &nbsp;</strong> Define an <code>update()</code> function and use it to update the <code>angle</code> variable.
</p>
<p class="main-text small-text">
    <strong>Exercise 3.7 &nbsp;</strong> Make the planet, moon, and monolith all orbit a star.
</p>