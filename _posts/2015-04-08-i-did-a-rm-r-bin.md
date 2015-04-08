---
layout: post  
title:  "I did a rm -r /bin!"
description: "How I used Docker to bring back some of my binaries."
date:   2015-04-08 20:00:00
tags: [linux, docker, ubuntu]
categories: programming
math: false
comments: true
image:
    feature: star_trail_f.jpg
---

I just did something really stupid:

{% highlight console %}
$ sudo rm -r /bin
{% endhighlight %}

I know, I know... I shouldn't have done that, but I assure you, that wasn't my intention.
I just wanted to remove a local `bin/` folder, which happened to be created by a
root process, but you know, sometimes we just type a backslash in the wrong place.

I was surprised when I tried to check if the folder was deleted:
{% highlight console %}
$ ls /bin
bash: ls: command not found
{% endhighlight %}

WHAT??? No `ls`?? Soon enough I realized what I have done.

It's not like
doing a `sudo rm -rf /`, not even like doing a
[rm -rf /usr](https://github.com/MrMEEE/bumblebee-Old-and-abbandoned/issues/123),
but I admit I panicked a little. After some time thinking what to do next,
I typed in the command `docker`, which I use a lot, and it was working.
Sure enough, it's a daemon process and it's not even located at `bin`.

Then came in a brilliant idea.

As I'm running Ubuntu 14.04, I could just run a Ubuntu container and copy it's `/bin` folder to my machine. To
do that I just had to mount my host `/bin` somewhere inside the container. I choose
to mount it at `/temp_bin` (yeah, I'm that creative!).

So, the whole thing I did was:

{% highlight console %}
$ docker run -ti -v /bin:/temp_bin ubuntu:14.04
root@ea3676d266f3:/# cp /bin/* temp_bin/
root@ea3676d266f3:/# exit
{% endhighlight %}

And now I have back at least some of my precious programs:

{% highlight console %}
$ ls /bin
bash          dir            lesspipe       ping                     tempfile
bunzip2       dmesg          ln             ping6                    touch
bzcat         dnsdomainname  loadkeys       plymouth                 true
bzcmp         domainname     login          plymouth-upstart-bridge  udevadm
bzdiff        dumpkeys       ls             ps                       umount
bzegrep       echo           lsblk          pwd                      uname
bzexe         egrep          lsmod          rbash                    uncompress
bzfgrep       false          mkdir          readlink                 unicode_start
bzgrep        fgconsole      mknod          rm                       vdir
bzip2         fgrep          mktemp         rmdir                    which
bzip2recover  findmnt        more           running-in-container     whiptail
bzless        grep           mount          run-parts                ypdomainname
bzmore        gunzip         mountpoint     sed                      zcat
cat           gzexe          mt             setfont                  zcmp
chgrp         gzip           mt-gnu         setupcon                 zdiff
chmod         hostname       mv             sh                       zegrep
chown         ip             nc             sh.distrib               zfgrep
chvt          kbd_mode       nc.openbsd     sleep                    zforce
cp            kill           netcat         ss                       zgrep
cpio          kmod           netstat        stty                     zless
dash          less           nisdomainname  su                       zmore
date          lessecho       open           sync                     znew
dd            lessfile       openvt         tailf
df            lesskey        pidof          tar
{% endhighlight %}

As a final tip, I had to reinstall some deleted packages that apt thinks are still
around. To force a reinstallation of package `nano`, for example, I just did:

{% highlight console %}
$ sudo apt-get install --reinstall nano
{% endhighlight %}
