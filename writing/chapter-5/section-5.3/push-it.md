<p class="main-text small-text">
    It was almost as bad as creating a bunch of new variables. This array object would be much more useful if you could add things to it, so you made sure it had a function called <code>push()</code> that let you add new elements.
</p>
<pre><code data-trim class="language-javascript">
let bugs = []
bugs.push(new Bug())
bugs.push(new Bug())
bugs.push(new Bug())
// and so on
</code></pre>
<p class="main-text small-text">
    All of that repetition demanded a loop, so you provided one.
</p>
<pre><code data-trim class="language-javascript">
let bugs = []
for (let i = 0; i < 100; i += 1) {
  let bug = new Bug()
  bugs.push(bug)
}
</code></pre>
<p class="main-text small-text">
    All together now!
</p>