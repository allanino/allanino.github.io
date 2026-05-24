---
title:  "Installing some R packages"
description: "Quick troubleshooting installing xlsx and XML packages on Debian Wheezy"
date:   2014-08-10 16:15:00
tags: [r, coursera]
categories: programming
math: false
image:
    feature: night_sunset.jpg
---

I'm doing Coursera's [Specialization in Data Science] and right now I'm in the third course of it, called Getting and Cleaning Data.

In order to answer this week quiz, I needed to install some R packages to load files in different formats. It took me some time to do it, so I'll document my steps here for anyone that may have trouble doing it.

## Installing xlsx package

I needed to install a package to read  <span style="font-style:italic">xlsx</span> files. I naively attempted to install it in R Studio, running under Debian Wheezy, but I got the following error:

```console
> install.packages("xlsx")
Installing package into ‘/home/allan/R/x86_64-pc-linux-gnu-library/3.1’
(as ‘lib’ is unspecified)
also installing the dependencies ‘rJava’, ‘xlsxjars’

trying URL 'http://cran.rstudio.com/src/contrib/rJava_0.9-6.tar.gz'
Content type 'application/x-gzip' length 567515 bytes (554 Kb)
opened URL
==================================================
downloaded 554 Kb

trying URL 'http://cran.rstudio.com/src/contrib/xlsxjars_0.6.0.tar.gz'
Content type 'application/x-gzip' length 9442064 bytes (9.0 Mb)
opened URL
==================================================
downloaded 9.0 Mb

trying URL 'http://cran.rstudio.com/src/contrib/xlsx_0.5.7.tar.gz'
Content type 'application/x-gzip' length 312839 bytes (305 Kb)
opened URL
==================================================
downloaded 305 Kb

* installing *source* package ‘rJava’ ...
** package ‘rJava’ successfully unpacked and MD5 sums checked
checking for gcc... gcc -std=gnu99
checking whether the C compiler works... yes
checking for C compiler default output file name... a.out
checking for suffix of executables...
checking whether we are cross compiling... no
checking for suffix of object files... o
checking whether we are using the GNU C compiler... yes
checking whether gcc -std=gnu99 accepts -g... yes
checking for gcc -std=gnu99 option to accept ISO C89... none needed
checking how to run the C preprocessor... gcc -std=gnu99 -E
checking for grep that handles long lines and -e... /bin/grep
checking for egrep... /bin/grep -E
checking for ANSI C header files... yes
checking for sys/wait.h that is POSIX.1 compatible... yes
checking for sys/types.h... yes
checking for sys/stat.h... yes
checking for stdlib.h... yes
checking for string.h... yes
checking for memory.h... yes
checking for strings.h... yes
checking for inttypes.h... yes
checking for stdint.h... yes
checking for unistd.h... yes
checking for string.h... (cached) yes
checking sys/time.h usability... yes
checking sys/time.h presence... yes
checking for sys/time.h... yes
checking for unistd.h... (cached) yes
checking for an ANSI C-conforming const... yes
checking whether time.h and sys/time.h may both be included... yes
configure: checking whether gcc -std=gnu99 supports static inline...
yes
checking whether setjmp.h is POSIX.1 compatible... yes
checking whether sigsetjmp is declared... yes
checking whether siglongjmp is declared... yes
checking Java support in R... present:
interpreter : '/usr/bin/java'
archiver    : ''
compiler    : ''
header prep.: ''
cpp flags   : ''
java libs   : ''
configure: error: Java Development Kit (JDK) is missing or not registered in R
Make sure R is configured with full Java support (including JDK). Run
R CMD javareconf
as root to add Java support to R.

If you don't have root privileges, run
R CMD javareconf -e
to set all Java-related variables and then install rJava.

ERROR: configuration failed for package ‘rJava’
* removing ‘/home/allan/R/x86_64-pc-linux-gnu-library/3.1/rJava’
Warning in install.packages :
  installation of package ‘rJava’ had non-zero exit status
ERROR: dependency ‘rJava’ is not available for package ‘xlsxjars’
* removing ‘/home/allan/R/x86_64-pc-linux-gnu-library/3.1/xlsxjars’
Warning in install.packages :
  installation of package ‘xlsxjars’ had non-zero exit status
ERROR: dependencies ‘rJava’, ‘xlsxjars’ are not available for package ‘xlsx’
* removing ‘/home/allan/R/x86_64-pc-linux-gnu-library/3.1/xlsx’
Warning in install.packages :
  installation of package ‘xlsx’ had non-zero exit status

The downloaded source packages are in
    ‘/tmp/RtmpxpAu4l/downloaded_packages’
```

As you can see, it suggested me to run a command to add Java support to R, so I did it:

```console
$ R CMD javareconf
Java interpreter : /usr/bin/java
Java version     : 1.6.0_32
Java home path   : /usr/lib/jvm/java-6-openjdk-amd64/jre
Java compiler    : not present
Java headers gen.:
Java archive tool:

trying to compile and link a JNI progam
detected JNI cpp flags    :
detected JNI linker flags : -L $(JAVA_HOME)/lib/amd64/server -ljvm
gcc -std=gnu99 -I/usr/share/R/include -DNDEBUG      -fpic  -O2 -pipe -g  -c conftest.c -o conftest.o
conftest.c:1:17: fatal error: jni.h: No such file or directory
compilation terminated.
make: *** [conftest.o] Error 1
Unable to compile a JNI program


JAVA_HOME        : /usr/lib/jvm/java-6-openjdk-amd64/jre
Java library path:
JNI cpp flags    :
JNI linker flags :
Updating Java configuration in /usr/lib/R
Done.

```

Another error! This time, something was wrong with the Java library linking.

First thing I tryed was to change the Java version to 7:

```console
$ update-alternatives --config java
There are 2 choices for the alternative java (providing /usr/bin/java).

  Selection    Path                                            Priority   Status
------------------------------------------------------------
* 0            /usr/lib/jvm/java-6-openjdk-amd64/jre/bin/java   1061      auto mode
  1            /usr/lib/jvm/java-6-openjdk-amd64/jre/bin/java   1061      manual mode
  2            /usr/lib/jvm/java-7-openjdk-amd64/jre/bin/java   1051      manual mode

Press enter to keep the current choice[*], or type selection number: 2
```

It didn't work. So I took a drastic measure and installed everything from Java 7:

```console
$ apt-get install openjdk-7-*
```

And then the `R CMD javareconf` command worked! But I wasn't done.

Back to RStudio I got another error when installing package  <span style="font-style:italic">rjava</span>, needed by  <span style="font-style:italic">xlsx</span> and the reason why I had to setup Java in the first place. This time the error message was complaining about a missing  <span style="font-style:italic">lzma</span> library. Unfortunately, I can't show you the exact error messsage, as I can't find the log in my system, but anyway, here is the solution:

```console
$ apt-get install liblzma-dev
```

And then it worked! I could finally load my <span style="font-style:italic">xlsx</span> file and answer the quiz!

## Install XML package

After sucessfully installing  <span style="font-style:italic">xlsx</span>, I had to install the  <span style="font-style:italic">XML</span> package, but this one was a lot easier. The only dependency missing in my system was  <span style="font-style:italic">xml2-config</span>, which happend to be part of the  <span style="font-style:italic">libxml2-dev</span> package:

```console
$ apt-get install libxml2-dev
```

After succesfully installing  <span style="font-style:italic">XML</span>     package at RStudio, I could finally finish this week quiz.

[Specialization in Data Science]:https://www.coursera.org/specialization/jhudatascience/1?utm_medium=listingPage