<p class="main-text small-text">
    Containers seemed generally helpful, so you created a general container called an <strong><em>array</em></strong>. Each piece of data in an array would be called an <strong><em>element</em></strong>. You decided that they work work like this:
</p>
<p class="main-text small-text">
    Example 5.3 An array
</p>
<script type="text/p5" data-autoplay src="/sketches/chapter-5/first-array.js"></script>
<p class="main-text small-text">
    This <strong><em>for…of loop</em></strong> made it easy to work with the elements <code>80</code>, <code>40</code>, and <code>20</code> contained in the <code>radii</code> array. Now you just needed to fill an array with bugs. Writing something like the following didn’t seem to simplify the problem very much:
</p>
<pre><code data-trim class="language-javascript">
let bugs = [new Bug(), new Bug(), new Bug(), new Bug()]
</code></pre>