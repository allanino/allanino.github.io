---
title:  "Dual boot on a SSD"
description: "Some steps to install Ubuntu alongside Windows 8.1 on an MSI GE72 2QE laptop with an HDD + SSD setup."
date:   2015-10-30 12:00:00
tags: [linux, ubuntu, windows, msi, ge72, 2qe, ssd, uefi]
---

My old LG laptop was unusable for my work. Random shutdowns and overheating were
some of the problems.

As I work with Machine Learning, I needed a computer with a powerful GPU, so I
bought a gamer laptop: an [MSI GE72-2QE Apache](http://www.msi.com/product/notebook/GE72-2QE-Apache-Pro.html#hero-overview).

It came with Windows 8.1, which I wanted to keep for some image editing
software and gaming. However, I use Linux for programming, so my task was clear:

> I needed Dual Boot with Ubuntu + Windows 8.1.

Then my nightmare started.

After lots of hours lost and many problems, I achieved my goal. I'll not tell much more
about what I did wrong, but I'll keep a record of what did work. I'm not sure whether
everything here is necessary, but after I succeeded I didn't retry to find the
minimal number of steps. Maybe next time.

## Creating a bootable USB device

[YUMI](http://www.pendrivelinux.com/yumi-multiboot-usb-creator/) didn't work for me,
nor did any other Windows software, so I had to find another way.

The solution was to use [USB Image Writer](http://community.linuxmint.com/software/view/usb-imagewriter),
available in [Linux Mint](http://www.linuxmint.com/download.php) by default. It happens
that a friend uses Mint, so I created the bootable pendrive with his help.

## Windows 8.1 setup

Here I just disabled Fast Startup.

To do so, we need to access the power options: just click the battery icon on the
tray and select "Choose what the power buttons do" on the left. On the new screen
we have the option to disable Fast Startup under "Shutdown settings".

## BIOS setup

To access the BIOS, we can press the DELETE key on startup, but we need to do this
quickly, before giving it time to enter Windows.

An alternative is to hold SHIFT before clicking the restart option in Windows.
It'll open a screen with some options and we need to select "Troubleshoot > Advanced options > UEFI Firmware settings".

Once in the BIOS screen, we need to set the following:

- Secure Boot: Disable
- Fast Boot: Disable
- Boot mode select: LEGACY
- Change boot order: select your USB drive

## Installing Ubuntu

With the bootable pendrive inserted, restart the computer and keep pressing F10.
Then select your USB device from the list that will show up.

Choose your installation options as usual and do a manual installation. This is
important, as otherwise you could erase your Windows installation.

When selecting the partitions, I chose to boot Ubuntu from the SSD, but as it's
a relatively small unit with only 128 GB, I decided to put only the `/root` and the
`/boot` partitions on it. On the HDD I put `/home` and `/var/lib/docker`, as I use
Docker and it can consume a lot of storage for containers and images.

Putting everything together, this was my setup:

- `/root`: 25 GB on SSD.
- `/boot`: 256 MB on SSD.
- `/home`: 92 GB on HDD.
- `/var/lib/docker`: 46 GB on HDD

## Fixing GRUB

After installing Ubuntu, I couldn't access Windows anymore, as the boot loader
got messed up. I used the great Boot-Repair tool to fix it. If you can't access
your Ubuntu installation, just use the live option on the installation pendrive.

Open a terminal and run:

```console
sudo add-apt-repository ppa:yannubuntu/boot-repair
sudo apt-get update
sudo apt-get install -y boot-repair && boot-repair
```

After rebooting you should be able to choose your OS from GRUB's list.

## Fixing the SteelSeries Engine keyboard

The last problem I had was that the keyboard customization stopped working after
all this process. The solution was to update the BIOS and reinstall
the keyboard driver.

I downloaded the BIOS software from [here](http://us.msi.com/support/nb/GE72-Apache-GTX-965M.html/#down-bios).

To reinstall the driver I just uninstalled the old one in Device Manager and
rebooted the machine to let it auto-install the driver.