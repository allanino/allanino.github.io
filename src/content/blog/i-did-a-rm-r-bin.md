---
title:  "I did a rm -r /bin!"
description: "How I used Docker to bring back some of my binaries."
date:   2015-04-08 20:00:00
tags: [linux, docker, ubuntu]
categories: programming
---

I just did something really stupid:

```console
$ sudo rm -r /bin
```

I know, I know... I shouldn't have done that, but I assure you, that wasn't my intention.
I just wanted to remove a local `bin/` folder, which happened to be created by a
root process, but you know, sometimes we just type a slash in the wrong place.

I was surprised when I tried to check if the folder was deleted:

```console
$ ls /bin
bash: ls: command not found
```

WHAT??? No `ls`?? Soon enough I realized what I had done.

It's not like
doing a `sudo rm -rf /`, not even like doing a
[rm -rf /usr](https://github.com/MrMEEE/bumblebee-Old-and-abbandoned/issues/123),
but I admit I panicked a little. After some time thinking about what to do next,
I typed the command `docker`, which I use a lot, and it was working.
Sure enough, it's a daemon process and it's not even located in `/bin`.

Then came a brilliant idea.

As I'm running Ubuntu 14.04, I could just run an Ubuntu container and copy its `/bin`
folder to my machine. To do that I just had to mount my host `/bin` somewhere inside
the container. I chose to mount it at `/temp_bin` (yeah, I'm that creative!).

So, the whole thing I did was:

```console
$ docker run -ti -v /bin:/temp_bin ubuntu:14.04
root@ea3676d266f3:/# cp /bin/* /temp_bin/
root@ea3676d266f3:/# exit
```

And now I have back at least some of my precious executables:

```console
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
```

As a final tip, I had to reinstall some deleted packages that apt thought were still
around. To force a reinstallation of package `nano`, for example, I just did:

```console
$ sudo apt-get install --reinstall nano
```
