<p class="main-text small-text">
    Next, you needed a way describe how each bug would adjust its direction based on its neighbors’ directions. You thought of writing a long sequence of if-statements, but the idea seemed awfully complex.
</p>
<p class="main-text small-text">
    It took a while, but you were finally able to imagine yourself as one of the bugs trying to find its way in a community that you called a <strong><em>swarm</em></strong>.
</p>
<p class="main-text small-text">
    “OK, I am a bug,” you thought. “I am traveling in some direction and I like to turn a certain way. If one of my neighbors travels in almost the same direction as me, then I don’t need to change very much. If my neighbor and I are at right angles to each other, then I’ll try a bit harder to head in their direction and meet them in the middle. And if they’re traveling in the opposite direction, well, I’ll change a little bit and hope that they come around.”
</p>
<p class="main-text small-text">
    You needed a function whose output was small when its input was close to $ 0 $, large when its input was close to $ \frac{\pi}{2} $, and small again when its input was close to $ \pi $.
</p>
<p class="main-text small-text">
    The steady rise and fall sounded alot like sine!
</p>