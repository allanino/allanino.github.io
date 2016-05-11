---
layout: post  
title:  "Do you know Sci-Hub?"
description: "Access scientific articles for free."
date:   2014-07-09 20:00:00
tags: [science, chrome extension]
categories: everything-else
math: false
comments: true
image:
    feature: star_trail_f.jpg
---

Two weeks ago I stumbled across an awesome service that allows one to download paid scientific articles for free. It's called Sci-Hub and you can go ahead and access it here: [sci-hub.cc].

You may notice the site is Russian, but it is not a problem, as it has a search field and you probably know how to use Google. Don't fear, just search for a paper you are interested in and it will do a search on Google Scholar.

So what's the deal? The deal is that you have access to all papers returned in the search, even those you wouldn't have if you did a plain search.

Digging a little deeper, you'll notice by the URL that you aren't, in fact, in Google domain. Sci-Hub puts a ".sci-hub.cc" after the original domain, in this case after the "scholar.google.com", giving us the URL "scholar.google.com.sci-hub.cc".

Now the nice thing: you can do that yourself to access articles from the main journals and publishers directly from their sites. For an example, suppose you want to access The Mathematical Intelligencer journal: [http://link.springer.com/journal/283]. You'll see that each article costs $39.95 to access, which is way too expensive. So, using the amazing Sci-Hub, we can access it for free just appending "sci-hub.cc" after the domain "springer.com": [http://link.springer.com.sci-hub.cc/journal/283]. Now you'll notice that you can download every article. Keep in mind that in some cases it will redict you straight to the pdf file, instead of reloading the page with unblocked download links.

This is a really useful service. Information should be more open and the high prices major publishers put on their publications doesn't help. For instance, two years ago Harvard announced they couldn't afford to paid all their journals subscriptions, as the cost approached $3.75M per year, suggesting the academic community to change toward open-access journals (see [Infospace's analysis][1]).

## Chrome extension

To make it even easier, I created a Chrome extension to do the job of appending ".sci-hub.cc" for us.

You can [install it via Chrome store].

To use, just go to the article's page you want to access and click the extension button.

EDIT: A friend of mine asked for the extension's code, so here is a link to its [Github repo].

EDIT 2: The extension got removed from Chrome Store in October 29, 2015. I got an email with some explanations, including that they "don't allow products or services that facilitate unauthorized access to content on websites, such as circumventing paywalls or logins restrictions.". So if you still want to use the plugin (note you don't need to), you can follow the instructions I added to the [Github repo] to load it from your machine.

EDIT 3: I changed Sci-Hub domain in this post from [sci-hub.org] to [sci-hub.io] in November 6, 2015. They changed it for some reason.

EDIT 4: I changed Sci-Hub domain in this post from [sci-hub.io] to [sci-hub.cc] in May 11, 2016. They changed it again for some reason. To simplify things, the extension now have an option to set the Sci-Hub domain you want to use.


[Github repo]:https://github.com/allanino/sci-hub-fy
[1]:http://infospace.ischool.syr.edu/2012/05/29/academic-journals-are-too-expensive-for-harvard-elsevier-is-mega-greedy-and-why-this-stinks-for-future-librarians/
[http://link.springer.com/journal/283]:http://link.springer.com/journal/283
[http://link.springer.com.sci-hub.cc/journal/283]:http://link.springer.com.sci-hub.cc/journal/283
[sci-hub.cc]:http://sci-hub.cc
[sci-hub.org]:http://sci-hub.org
[install it via Chrome store]:https://chrome.google.com/webstore/detail/sci-hub-fy/gnkckjpgnhkgffcomcocdicefajgeokb
