---
layout: post  
title:  "Dual boot on a SDD"
description: "Some steps to install Ubuntu alongside Window 8.1 on a MSI GE72 2QE laptop with a HDD + SDD setup."
date:   2015-10-30 12:00:00
tags: [linux, ubuntu, windows, msi, ge72, 2qe, ssd, uefi]
categories: programming
math: false
comments: true
image:
    feature: night_sunset.jpg
---

My old LG laptop was unusable for my work. Random shutdowns and  overheating was
some of the problems.

As I work with Machine Learning, I needed a computer with a powerful GPU, so I
bought a gamer laptop: a [MSI GE72-2QE Apache](http://www.msi.com/product/notebook/GE72-2QE-Apache-Pro.html#hero-overview).

It came with Windows 8.1, which I wanted to keep for some image editing
softwares and gaming. However, I use Linux for programming, so my task was clear:

> I needed Dual Boot with Ubuntu + Windows 8.1.

Then my nightmare started.

After lots of hours lost and many problems, I achieved my goal. I'll not tell much more
about what I did wrong but I'll keep a record of what did work. I'm not sure about
everything here being necessary, but after I succeeded I didn't retry to find the
minimal amount of steps. Maybe in the next time.

## Creating a bootable USB device

[YUMI](http://www.pendrivelinux.com/yumi-multiboot-usb-creator/) didn't work for me,
nor did any other Windows software, so I had to find another way.

The solution was to use [USB image writer](http://community.linuxmint.com/software/view/usb-imagewriter),
available in [Linux Mint](http://www.linuxmint.com/download.php) by default. It happens
that a friend uses Mint, so I created the bootable pendrive with his help.

## Windows 8.1 setup

Here I just disabled fast startup.

To do so, we need to access the power options: just click the battery icon on the
tray and select "Choose what the power button do" on the left. On the new screen
we have the option to disable fast startup under "Shutdown settings".

## BIOS setup

To access the BIOS, we can press the DELETE key on startup, but we need to do this
quickly, before giving it time to enter Windows.

An alternative is to hold SHIFT before clicking the restart option on Windows.
It'll open a screen with some options and we need to select "Troubleshoot > Advanced options > UEFI Firmware settings".

Once in the BIOS screen, we need to set the following:


- Secure Boot: Disable
- Fast Boot: Disable
- Boot mode select: LEGACY
- Change boot order: select your USB drive

## Installing Ubuntu

With the bootable pendrive inserted, restart the computer and keep pressing F10.
Then select your USB device on the list that will show up.

Choose your installation options as usual and do a manual installation. This is
important, as otherwise you can just erase your Windows installation.

When selecting the partitions, I choose to boot Ubuntu from the SSD, but as it's
a relatively small unit with only 128 GB, I decided to put only the `/root` and the
`/boot` partition on it. On the HDD I put `/home` and `/var/lib/docker`, as I use
Docker and it can consume a lot of storage for containers and images.

Putting everything together, this was my setup:


- `/root`: 25 GB in SSD.
- `/boot`: 256 MB in SSD.
- `/home`: 92 GB in HDD.
- `/var/lib/docker`: 46 GB in HDD

## Fixing GRUB

After installing Ubuntu, I couldn't access Windows anymore, as the boot loader
got messed up. I used the great Boot-Repair tool to fix it. If you can't access
your Ubuntu installation, just use the live option in the installation pendrive.

Open a terminal and run:

{% highlight console %}
sudo add-apt-repository ppa:yannubuntu/boot-repair
sudo apt-get update
sudo apt-get install -y boot-repair && boot-repair
{% endhighlight %}

After rebooting you should be able to choose your OS from GRUB's list.

## Fixing SteelSeries Engine keyboard

The last problem I had was that the keyboard customization stopped working after
all this process. The solution for this was to update the BIOS and to reinstall
the keyboard driver.

I downloaded it the BIOS software from [here](http://us.msi.com/support/nb/GE72-Apache-GTX-965M.html/#down-bios).

To reinstall the driver I just uninstalled the old one under device manager and
rebooted the machine to let it auto-install the driver.
