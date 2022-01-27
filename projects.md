---
layout: page-light-feature
title: Projects
description: Some of the things I have coded.
permalink: /projects/
image:
    feature: moon_f.jpg
---

## RNN music of the day

Each day I post a music composed by a trained Recurrent Neural Network ([RNN](https://en.wikipedia.org/wiki/Recurrent_neural_network)).

The idea started when Andrej Karpathy posted in his blog the
article [The Unreasonable Effectiveness of Recurrent Neural Networks](http://karpathy.github.io/2015/05/21/rnn-effectiveness/),
in which he talks about training a RNN to generate text a character at a time after being
trained on some dataset. I trained a RNN to learn to generate music in the [ABC notation](https://en.wikipedia.org/wiki/ABC_notation).

You can find more details about it <a href="{{ site.url }}/rnn-music-of-the-day/about" target="_blank">here</a>.


See it:
<a href="{{ site.url }}/rnn-music-of-the-day" target="_blank"><span class="icon-html5"></span></a>
<a href="https://github.com/allanino/rnn-music-of-the-day" target="_blank"><span class="icon-github2"></span></a>

## Numbers Music

Some years ago I published some [videos on YouTube](https://www.youtube.com/playlist?list=PL7A3780FBFE2350EB)
where we can listen to some mathematical constants. People liked it a lot and some
of them wanted me to do things differently, like to use different scales or to
play different tracks together.

So that's what I've done in this project: I took that videos to the next level,
allowing users to create their own math tracks in an interactive web page, full
with notes mapping, speed selection and some (few) instruments.

See it:
<a href="{{ site.url }}/numbers-music" target="_blank"><span class="icon-html5"></span></a>
<a href="https://github.com/allanino/numbers-music" target="_blank"><span class="icon-github2"></span></a>

## DNA information encoding

This is a Python implementation of one of the first scalable and reliable algorithm for DNA storage of information. The algorithm was created by Nick Goldman et al and published in [Nature], where I got the necessary details for a full implementation. Let me know if you put your name inside a bacteria!

See it:
<a href="https://github.com/allanino/DNA" target="_blank"><span class="icon-github2"></span></a>

## Vicsek Model Simulation

I read about Vicsek model in a Scientific American article and was fascinated by it simplicity. I could not help but implement it. As my tool of choice, I used HTML5 + Javascript.

See it:
<a href="{{ site.url }}/vicsek-model-simulation" target="_blank"><span class="icon-html5"></span></a>
<a href="https://github.com/allanino/vicsek-model-simulation" target="_blank"><span class="icon-github2"></span></a>

## Fractals

I wanted to have a deeper understading of how colored fractals were generated, so I implemented a Mandelbrot set renderer using only HTML5 canvas with Javascript. It's really raw and feature lacking, however it might be of interest to someone doing their own implementation. As a bonus, I have also implemented a [Buddhabrot renderer]({{ site.url }}/fractals/buddhabrot).

See it:
<a href="{{ site.url }}/fractals" target="_blank"><span class="icon-html5"></span></a>
<a href="https://github.com/allanino/fractals" target="_blank"><span class="icon-github2"></span></a>

## Game of Life

I first met [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) in the book [The Recursive Universe](https://www.amazon.com/Recursive-Universe-Complexity-Scientific-Knowledge/dp/0809252023) by William Poundstone.  My first implementation of it was using an Excel spreadsheet controlled by some VBA macros (it was preety slow, as you might have guessed). Now I have implemented a new version, using HTML5 + Javascript.

See it:
<a href="{{ site.url }}/game-of-life" target="_blank"><span class="icon-html5"></span></a>
<a href="https://github.com/allanino/game-of-life" target="_blank"><span class="icon-github2"></span></a>

## Monty Hall Simulation

Monty Hall problem is a surprising probability problem. Many people don't believe the answer, so I created this simple simulator. Now you don't have excuses for not trusting the math! If you don't even know what it's all about, see my [blog post] introducing it.

See it:
<a href="{{ site.url }}/monty-hall-simulation" target="_blank"><span class="icon-html5"></span></a>
<a href="https://github.com/allanino/monty-hall-simulation" target="_blank"><span class="icon-github2"></span></a>

## Domain coloring complex functions

I used domain coloring to create lots of plots in my Master's dissertation, so I created a web application using HTML5 + Javascript to allow readers to play with some polynomials.

See it:
  <a href="{{ site.url }}/domain-coloring/en" target="_blank"><span class="icon-html5"></span></a>
<a href="https://github.com/allanino/domain-coloring/en" target="_blank"><span class="icon-github2"></span></a>

## Ballistic Game

I started this project an year ago, but haven't worked on it for a while, so it's very raw. To be fair, it isn't a game, it's just a physics simulator that uses [PyGame] to display cannon balls trajectories, created to help anyone wondering how they could have an angrybirdsy touch in their game. I also like to use it when teaching physics. Thinkind ahead, I would like to create more accurate time representations and to add some drones to get shot. Maybe I'll do that with HTML5, as I'm trying to learn it.

See it:
<a href="https://github.com/allanino/BallisticGame" target="_blank"><span class="icon-github2"></span></a>

## Markdown-LaTeX

This is a simple way to write LaTeX equations in your Github repo's README. Now I know that Github Pages is the way to go in case you want some fancy presentation for your project, but if anyone want their README to look pretty in their repo page, this script can do that. It just takes a README written in Markdown + LaTex (with equations between $$) and replace all equations with image links for them rendered in [CodeCogs].

See it:
<a href="https://github.com/allanino/markdown-latex" target="_blank"><span class="icon-github2"></span></a>

[blog post]:{{ site.url }}/blog/math/monty-hall-problem/
[Nature]:http://www.nature.com/nature/journal/v494/n7435/full/nature11875.html
[CodeCogs]:http://www.codecogs.com/latex/eqneditor.php
[PyGame]:http://www.pygame.org/news.html
